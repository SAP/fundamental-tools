// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

// check search_help_api

import chalk from "chalk";
import fs from "fs";
import path from "path";
import { sprintf } from "sprintf-js";
import {
  Client,
  RfcTable,
  RfcStructure,
  RfcConnectionParameters,
} from "node-rfc";
import { Command, Arguments } from "./abap";
import {
  Languages,
  ParamType,
  ParamClass,
  ParamClassDesc,
  DefaultFolder,
  DockerVolume,
  runningInDocker,
  ValueInput,
} from "./constants";

import { Alpha, AlphaCatalogType } from "./alpha";

import { isEmpty, log, fileLoad, fileSave, fileExists, rmDir } from "./utils";

import {
  ShlpApiType,
  ValueInputHelp,
  DescriptorType,
  FVDescriptorType,
  ValueHelpType,
} from "abap-value-help";

// Parameter and Field typings

export type ParameterType = {
  paramType: string;
  PARAMCLASS: string;
  TABNAME: string;
  FIELDNAME: string;
  PARAMTEXT: string;
  functionName: string;
  paramName: string;
  required: string;
  default?: string;
  nativeKey?: string;
};

type ParametersCatalogType = Record<string, Record<string, ParameterType>>;

export type FieldTextType = {
  FIELDTEXT?: string;
  REPTEXT?: string;
  SCRTEXT_S?: string;
  SCRTEXT_M?: string;
  SCRTEXT_L?: string;
};

export type FieldType = {
  format: {
    DATATYPE: string;
    INTTYPE: string;
    DOMNAME?: string;
    ROLLNAME?: string;
    LENG: number;
    DECIMALS?: number;
    SIGN?: string;
    MASK?: string;
    LTRFLDDIS?: string;
    LOWERCASE?: string;
    REFTABLE?: string;
    REFFIELD?: string;
    OUTPUTLEN?: number;
    LFIELDNAME?: string;
    valueInputType?: string;
  };
  input?: {
    CONVEXIT?: string;
    MEMORYID?: string;
    shlpId?: string;
  };
  text: FieldTextType;
};

export type StructureType = Record<string, FieldType>;

export type FieldsCatalogType = Record<string, FieldType | StructureType>;

// AnnotationsType typings

export type TextsCatalogType = Record<
  string,
  Record<string, string | FieldTextType>
>;

export type HelpsCatalogType = Record<string, ValueHelpType>;

export type DescriptorsCatalogType = Record<string, DescriptorType>;

type StatCatalogType = Record<
  string,
  | Record<string, number>
  | {
    var?: number;
    struct?: number;
    table?: number;
    exception?: number;
  }
>;

type UsageCatalogType = Record<string, string[]>;

export type AnnotationsType = {
  alpha?: AlphaCatalogType;
  parameters: ParametersCatalogType;
  fields: FieldsCatalogType;
  stat: StatCatalogType;
  helps?: HelpsCatalogType;
  usage?: UsageCatalogType;
  descriptors?: DescriptorsCatalogType;
};

type SystemsYamlType = Record<string, { search_help_api: ShlpApiType }>;

export class Backend {
  private argv: Arguments;
  private flowEcho: boolean;

  private api_name: string;
  private apilist: string[];
  private alpha: Alpha;

  private search_help_api = {} as ShlpApiType;
  private getSearchHelps = false;
  private SPRAS: string;
  private Helps: HelpsCatalogType;
  private Descriptors: DescriptorsCatalogType;
  private Stat: StatCatalogType;
  private Texts = {} as TextsCatalogType;

  private client = {} as Client;
  private clientConnectionParameters: RfcConnectionParameters;
  private systemId = "";

  private avh = {} as ValueInputHelp;

  constructor(context: { apiName: string; argv: Arguments }) {
    this.api_name = context.apiName;
    this.argv = context.argv;
    this.flowEcho =
      this.argv.cmd !== Command.call ||
      (this.argv.cmd === Command.call && (this.argv.save || false));
    this.apilist = this.argv.apilist ? this.argv.apilist[this.api_name] : [];

    this.alpha = new Alpha();
    this.SPRAS = Languages[this.argv.lang].spras;
    this.Helps = {};
    this.Descriptors = {};
    this.Stat = {};

    this.clientConnectionParameters = {} as RfcConnectionParameters;

    log.debug(
      `backend: ${this.api_name} systemId: ${this.systemId} lang: ${this.argv.lang} : ${this.SPRAS} api: ${this.apilist}`
    );

    if (this.argv.dest) {
      if (typeof this.argv.dest === "string") {
        this.clientConnectionParameters = {
          dest: this.argv.dest,
        } as RfcConnectionParameters;
        this.systemId = this.argv.dest;
      } else {
        this.clientConnectionParameters = this.argv.dest.connectionParameters;
        if (this.argv.dest.searchHelpApi) {
          Object.assign(this.search_help_api, this.argv.dest.searchHelpApi);
        }
        this.systemId =
          this.clientConnectionParameters.ashost ||
          this.clientConnectionParameters.msserv ||
          this.clientConnectionParameters.gwserv ||
          this.clientConnectionParameters.snc_partnername ||
          "";
      }
    }

    // check if Value Help api configured
    if (this.argv.cmd === Command.get && isEmpty(this.search_help_api)) {
      try {
        const systemYamlPath = path.join(
          DefaultFolder.userConfig,
          "systems.yaml"
        );
        const systems = fileLoad(systemYamlPath) as SystemsYamlType;

        if (!systems) {
          log.info(`systems.yaml not found: ${systemYamlPath}`);
        } else if (!this.systemId) {
          log.info("System key not found in connection parameters");
        } else if (!systems[this.systemId]) {
          log.info(`system ${this.systemId} not found in systems.yaml`);
        } else if (!systems[this.systemId].search_help_api) {
          log.info(`Value Help api not configured for ${this.systemId}`);
        } else {
          log.debug("Value Help API", this.search_help_api);
          this.search_help_api = systems[this.systemId].search_help_api;
        }
      } catch (ex) {
        if ((ex as NodeJS.ErrnoException).code !== "ENOENT") throw ex; // ignore file not found error
      }
    }

    // Value Help api plausibility check
    if (!isEmpty(this.search_help_api)) {
      for (const [apiKey, apiName] of Object.entries(this.search_help_api)) {
        if (
          ![
            "determine",
            "FV_descriptor_get",
            "CT_descriptor_get",
            "SH_descriptor_get",
            "search",
          ].includes(apiKey)
        ) {
          throw new Error(`Value Help API key not supported: "${apiKey}"`);
        }
        if ((apiName as string).length > 30) {
          throw new Error(`Value Help API name too long: "${apiName}"`);
        }
      }
      if (Object.keys(this.search_help_api).length < 4) {
        log.info("Value Help API not maintained:", this.search_help_api);
        this.argv.helps = false;
      }
    }

    // Vearch Helps processing
    this.getSearchHelps =
      this.argv.cmd === Command.get && // Value Helps are required for get command
      !isEmpty(this.search_help_api) && // when search help api is configured
      !this.argv.textOnly; // not in text-only mode

    // output folder
    if (this.argv.output && !fs.existsSync(this.argv.output)) {
      log.debug(`Create output folder: ${this.argv.output}`);
      fs.mkdirSync(this.argv.output);
    }
  }

  getDfiesText(dfies: RfcStructure): FieldTextType {
    const TEXT_FIELDS = [
      "FIELDTEXT",
      "REPTEXT",
      "SCRTEXT_S",
      "SCRTEXT_M",
      "SCRTEXT_L",
    ];
    const text: FieldTextType = {};
    TEXT_FIELDS.forEach((t) => {
      if ((dfies[t] as string).length > 0) text[t] = dfies[t];
    });
    // todo: remove this eventually
    if (!text.FIELDTEXT) text.FIELDTEXT = "No field text";
    return text;
  }

  async getField(dfies: RfcStructure): Promise<FieldType> {
    const FORMAT_FIELDS = [
      "ROLLNAME",
      "DOMNAME",
      "DATATYPE",
      "LENG",
      "OUTPUTLEN",
      "SIGN",
      "DECIMALS",
      "INTTYPE",
      "MASK",
      "MASKLEN",
      "LOWERCASE",
      "LTRFLDDIS",
      "REFTABLE",
      "REFFIELD",
    ];
    const INPUT_FIELDS = ["VALEXI", "CONVEXIT", "MEMORYID", "SHLP"];

    const result: FieldType = {
      format: { DATATYPE: "", INTTYPE: "", LENG: 0 },
      input: {},
      text: this.getDfiesText(dfies),
    };

    for (const i in dfies) {
      if (FORMAT_FIELDS.includes(i)) {
        if (
          ["DECIMALS", "MASKLEN", "LENG", "OUTPUTLEN", "INTLEN"].includes(i)
        ) {
          if (parseInt(dfies[i] as string) != 0) {
            result.format[i] = parseInt(dfies[i] as string); // dfies[i].strip('0')
          }
          //
        } else if (
          [
            "SIGN",
            "MASK",
            "LTRFLDDIS",
            "LOWERCASE",
            "REFTABLE",
            "REFFIELD",
          ].includes(i)
        ) {
          if (dfies[i]) result.format[i] = dfies[i];
        } else {
          result.format[i] = dfies[i];
        }
      } else if (INPUT_FIELDS.includes(i)) {
        if (result.input && dfies[i]) {
          result.input[i] = dfies[i];
          if (i === "CONVEXIT") {
            this.alpha.add(dfies[i] as string);
          }
        }
      }
    }
    if (!result.format.DOMNAME) delete result.format.DOMNAME;
    if (!result.format.ROLLNAME) delete result.format.ROLLNAME;

    if (dfies.LFIELDNAME !== dfies.FIELDNAME) {
      result.format.LFIELDNAME = dfies.LFIELDNAME as string;
    }

    // Value Helps
    if (this.getSearchHelps) {
      const SelectionFields: Record<string, RfcStructure> = {};

      const helpFound = await this.avh.valueHelpForField(
        dfies, // as IValueHelpDetermine,
        this.Helps,
        this.Descriptors,
        this.argv.helps as boolean,
        SelectionFields
      );

      // update parameter field
      if (helpFound.id) {
        if (!result.input) result.input = {};
        result.input.shlpId = helpFound.id;

        // default value input type
        result.format.valueInputType = ValueInput.list;

        // Binary / List type
        const descriptor = this.Descriptors[helpFound.id] as FVDescriptorType;
        if (descriptor) {
          if (descriptor.valueInputType === ValueInput.binary) {
            result.format.valueInputType = ValueInput.binary;

            // Checkbox SHLP used only when values differ from "X" and ""
            if (descriptor.customCheckbox) {
              //result.input.customCheckbox = "X";
            } else {
              delete result.input.shlpId;
            }
          }
        }
      }

      // selection fields' descriptors
      for (const [, field] of Object.entries(SelectionFields)) {
        const selectionHelpFound = await this.avh.valueHelpForField(
          field, // as IValueHelpDetermine,
          this.Helps,
          this.Descriptors,
          this.argv.helps as boolean
          //SelectionFields not needed
        );

        // write search help id into selection field descriptor
        if (selectionHelpFound.id) {
          field.shlpId = selectionHelpFound.id;
          field.valueInputType = ValueInput.list;

          // Binary / List type
          const descriptor = this.Descriptors[
            selectionHelpFound.id
          ] as FVDescriptorType;
          if (descriptor) {
            if (descriptor.valueInputType === ValueInput.binary) {
              field.valueInputType = ValueInput.binary;

              // Checkbox SHLP used only when values differ from "X" and ""
              if (descriptor.customCheckbox) {
                field.customCheckbox = "X";
                // } else {
                //   delete field.shlpId;
              }
            }
          }
        }
      }
    }

    if (isEmpty(result.input)) {
      delete result.input;
    }

    return result as FieldType;
  }

  async annotations(
    param: ParameterType,
    langu = this.SPRAS
  ): Promise<FieldType | StructureType | undefined> {
    let dfies: RfcStructure | RfcTable = {};
    try {
      if (param.paramType === ParamType.exception) return undefined;
      log.debug(
        `    dfies: ${param.paramName}`,
        param.TABNAME,
        param.FIELDNAME
      );
      const ddif = await this.client.call("DDIF_FIELDINFO_GET", {
        TABNAME: param.TABNAME,
        FIELDNAME: param.FIELDNAME,
        LANGU: langu,
        ALL_TYPES: "X",
        GROUP_NAMES: "X",
      });

      // ddif-> dfies
      if (param.paramType === ParamType.var) {
        // variable
        if (ddif.DDOBJTYPE === "INTTAB" || ddif.DDOBJTYPE === "TRANSP") {
          dfies = ddif.DFIES_TAB[0];
        } else {
          dfies = ddif.DFIES_WA as RfcStructure;
        }
      } else {
        // structure or table
        if ((ddif.LINES_DESCR as RfcTable).length > 0) {
          // try LINES_DESCR first, seem to be more "reliable" than DFIES_TAB (no .INCLUDEs)
          dfies = ddif.LINES_DESCR[0].FIELDS;
        } else if ((ddif.DFIES_TAB as RfcTable).length > 0) {
          dfies = ddif.DFIES_TAB as RfcTable;
        } else {
          // single field row
          dfies = [ddif.DFIES_WA as RfcStructure];
        }
      }

      if (Array.isArray(dfies)) {
        // structure, table
        const result = {};
        for (const field of dfies) {
          // skip meta elements like .INCLUDE ...
          if (
            (field.INTTYPE as string).trim().length === 0 ||
            field[".INCLUDE"]
          ) {
            continue;
          }

          this.alpha.field(field.FIELDNAME as string);
          result[field.FIELDNAME as string] = await this.getField(field);

          // Field texts -> Texts
          const tkey = JSON.stringify({
            t: param.TABNAME as string,
            f: field.FIELDNAME as string,
          }).replace(/"/g, "");
          const texts = result[field.FIELDNAME as string].text;
          if (this.argv.textOnly) {
            for (const [k, v] of Object.entries(this.Texts)) {
              if (v._id === tkey) {
                this.Texts[k][this.argv.lang] = texts.FIELDTEXT as string;
                this.Texts[k].short[this.argv.lang] = texts;
                break;
              }
            }
            // if not found, the same text already added by another field
          } else {
            if (!this.Texts[texts.FIELDTEXT as string]) {
              this.Texts[texts.FIELDTEXT as string] = {
                _id: tkey,
                [this.argv.lang]: texts.FIELDTEXT as string,
                short: { [this.argv.lang]: texts },
              };
            }
          }
        }
        return result;
      } else {
        // variable
        if ("FIELDNAME" in dfies) {
          // ddic type
          this.alpha.field(dfies.FIELDNAME as string);
          return await this.getField(dfies);
        }
        // native ABAP type
        return undefined;
      }
    } catch (ex) {
      if (
        param.paramType === ParamType.var &&
        (ex as Record<string, string | number>)["key"] === "NOT_FOUND" // todo: ABAP errors typing
      ) {
        param.nativeKey = param.TABNAME;
        return {};
      } else {
        throw ex; //`ddic parsing error at: ${param.functionName} ${param.paramName}`
      }
    }
  }

  async parse(): Promise<AnnotationsType> {
    // lazy load so that other commands can be used w/o SAP NWRFC SDK
    try {
      const addon = await import("node-rfc");
      // set sapnwrfc.ini path to working folder mapped to docker image
      if (runningInDocker) {
        addon.setIniFileDirectory(DockerVolume);
      }
      this.client = new addon.Client(this.clientConnectionParameters);
    } catch (ex) {
      throw new Error(
        [
          `            SAP NWRFC SDK could not be loaded, "call" and "get" commands are disabled.`,
          "Where to download: https://launchpad.support.sap.com/#/notes/2573790",
          "How to install   : https://github.com/SAP/node-rfc/blob/master/doc/installation.md#sap-nwrfc-sdk-installation\n",
        ].join("\n")
      );
    }

    if (!this.argv.textOnly) {
      this.annotations_clean();
    } else {
      if (this.argv.textOnly) {
        const folder_yaml = this.api_name
          ? path.join(this.argv.output, this.api_name, "yaml")
          : path.join(this.argv.output, "yaml");
        try {
          this.Texts = fileLoad(
            path.join(folder_yaml, "texts.yaml")
          ) as TextsCatalogType;
        } catch (ex) {
          if ((ex as NodeJS.ErrnoException).code !== "ENOENT") throw ex; // throw if other than file not found
          throw Error(
            `Texts in primary language not found for ${this.apilist}\nDon't use -t|--text-option with language key, use the -l|--lang instead:\n -t -l <lang>`
          );
        }
      }
    }

    log.info(
      `\n${chalk.bold(this.api_name)} ${this.systemId} (${this.argv.lang}) ${this.argv.textOnly ? "only texts" : ""
        } ${this.getSearchHelps ? "value helps" : ""}${this.argv.helps ? " w. descriptors" : ""
        }\n`
        .replace(/  +/g, " ")
        .replace(/^ +/g, "")
    );

    await this.client.open();

    if (this.getSearchHelps) {
      this.avh = new ValueInputHelp({
        client: this.client,
        shlpApi: this.search_help_api,
        logLevel: log.getLevel(),
      });
    }

    const R = await this.client.call("RFC_METADATA_GET", {
      EVALUATE_LINKS: "X",
      LANGUAGE: this.SPRAS,
      FUNCTIONNAMES: this.apilist,
    });

    if (
      (R.FUNC_ERRORS as RfcTable).length > 0 &&
      R.FUNC_ERRORS[0].EXCEPTION == "FU_NOT_FOUND"
    ) {
      throw `RFM not found: ${R.FUNC_ERRORS[0].FUNCNAME}`;
    }

    // Clean-up && usage

    const Usage = {};

    let i = (R.PARAMETERS as RfcTable).length;
    let param_name_len = 0;
    while (i--) {
      // remove records with name 'CHANGING'
      const p = R.PARAMETERS[i];
      if (p.PARAMETER === "CHANGING") {
        (R.PARAMETERS as RfcTable).splice(i, 1);
        continue;
      }
      // more intuitive names
      p.functionName = (p.FUNCNAME as string).trim();
      p.paramName = (p.PARAMETER as string).trim();

      // Trim, for any case
      p.FIELDNAME.trim();

      // 'I' parameter type is INT4 internally
      if (p.TABNAME === "I") p.TABNAME = "INT4";

      // set optional/required
      p.required = p.OPTIONAL.trim().length === 0;
      if (!p.required) {
        p.default = p.DEFAULT;
      }

      //  set param type
      if (p.PARAMCLASS == "X" || p.EXID.trim().length == 0) {
        p.paramType = ParamType.exception;
        p.PARAMCLASS = "X"; // sometimes not set
      } else if (p.EXID === "h" || p.PARAMCLASS === "T") {
        p.paramType = ParamType.table;
      } else if ("uv".includes(p.EXID)) {
        p.paramType = ParamType.struct;
      } else {
        p.paramType = ParamType.var;
      }

      // Data elements usage
      if (p.paramType === ParamType.struct || p.paramType === ParamType.table) {
        if (!Usage[p.TABNAME]) {
          Usage[p.TABNAME] = new Set();
        }
        Usage[p.TABNAME].add(p.functionName);
      }

      // parameter name max. length
      if (p.paramName.length > param_name_len) {
        param_name_len = p.paramName.length;
      }
    }

    // Sort by rfm / parameter class / required/optional / parameter type and name
    (R.PARAMETERS as RfcTable).sort((a: RfcStructure, b: RfcStructure) => {
      const PClass = ["I", "C", "T", "E", "X"];
      const PType = [
        ParamType.var,
        ParamType.struct,
        ParamType.table,
        ParamType.exception,
      ];
      return (
        (a.FUNCNAME as string).localeCompare(b.FUNCNAME as string) ||
        PClass.indexOf(a.PARAMCLASS as string) -
        PClass.indexOf(b.PARAMCLASS as string) ||
        (a.OPTIONAL as string).localeCompare(b.OPTIONAL as string) ||
        PType.indexOf(a.paramType as string) -
        PType.indexOf(b.paramType as string) ||
        (a.paramName as string).localeCompare(b.paramName as string)
      );
    });
    R.PARAMETERS = (R.PARAMETERS as RfcTable).sort();

    //
    // Parse
    //

    const Parameters: ParametersCatalogType = {};
    const Fields = {};

    let functionName = "";
    for (const p of R.PARAMETERS as RfcTable) {
      if (!((p.FUNCNAME as string) in Parameters)) {
        Parameters[p.FUNCNAME as string] = {};
      }

      if (p.functionName !== functionName) {
        if (this.flowEcho) {
          if (functionName) {
            log.info(`\n${p.functionName}`);
          } else {
            log.info(p.functionName);
          }
        }
        functionName = p.functionName as string;
        // stat
        this.Stat[functionName] = {};
        for (const k in ParamType) {
          this.Stat[functionName][k] = 0;
        }
        // alpha
        this.alpha.rfm(functionName);
      }
      // alpha
      this.alpha.param(p.paramName as string);

      // stat
      this.Stat[functionName][p.paramType as string]++;

      // Parameter text -> Texts
      const tkey = JSON.stringify({
        r: p.functionName,
        p: p.paramName,
      }).replace(/"/g, "");
      if (this.argv.textOnly) {
        for (const [k, v] of Object.entries(this.Texts)) {
          if (v._id === tkey) {
            this.Texts[k][this.argv.lang] = p.PARAMTEXT as string;
            break;
          }
        }
        // if not found, the same text already added by another parameter
      } else {
        if (!this.Texts[p.PARAMTEXT as string]) {
          this.Texts[p.PARAMTEXT as string] = {
            _id: tkey,
            [this.argv.lang]: p.PARAMTEXT as string,
          };
        }
      }

      //
      // dfies
      //
      if (p.paramType !== ParamType.exception) {
        let added = (p.TABNAME as string) in Fields;
        if (added && p.FIELDNAME) {
          added = (p.FIELDNAME as string) in Fields[p.TABNAME as string];
        }
        if (!added) {
          const dfies = await this.annotations(p as ParameterType);
          if (!p.nativeKey) {
            // native variable data type, no ddic
            if (!((p.TABNAME as string) in Fields)) {
              Fields[p.TABNAME as string] = {};
            }
            if (p.FIELDNAME) {
              Fields[p.TABNAME as string][p.FIELDNAME as string] = dfies;
            } else {
              Fields[p.TABNAME as string] = dfies;
            }
          }
        }
      }

      Parameters[p.functionName as string][p.paramName as string] =
        p as ParameterType;

      // remove unused properties
      [
        "FUNCNAME",
        "PARAMETER",
        "EXID",
        "POSITION",
        "OFFSET",
        "DECIMALS",
        "INTLENGTH",
        "DEFAULT",
        "OPTIONAL",
      ].forEach((propertyName) => {
        delete p[propertyName];
      });
      if (!p.FIELDNAME) delete p.FIELDNAME;
      if (p.paramType === ParamType.exception) {
        delete p.TABNAME;
      }

      // parameter class
      if (this.flowEcho)
        if (p.PARAMCLASS === ParamClass.exception) {
          log.info(
            sprintf("%-15s", `${ParamClassDesc[p.PARAMCLASS].toLowerCase()}`),
            sprintf(`%-${param_name_len}s`, p.paramName),
            p.PARAMTEXT
          );
        } else {
          log.info(
            sprintf(
              "%-15s",
              `${ParamClassDesc[p.PARAMCLASS as string].toLowerCase()} ${p.paramType === ParamClass.table ? "" : p.paramType // table table -> table
              }`
            ),
            sprintf(`%-${param_name_len}s`, p.paramName),
            (p.nativeKey ? chalk.red : chalk)(
              // native ABAP datatype printed in red
              p.nativeKey
                ? "Native ABAP datatype. no annotations " + p.PARAMTEXT ||
                `No text in language: ${this.argv.lang}`
                : p.PARAMTEXT || `No text in language: ${this.argv.lang}`
            )
          );
        }
    }

    await this.client.close();

    // final result, todo: field names could be sorted, eventually
    const abap: AnnotationsType = {
      alpha: this.alpha.get(),
      parameters: Parameters,
      fields: Fields,
      helps: this.Helps,
      stat: this.Stat,
      usage: Object.keys(Usage)
        .sort()
        .reduce((usage, k) => {
          usage[k] = Array.from(Usage[k]).sort();
          return usage;
        }, {}),
      descriptors: this.Descriptors,
    };

    if (!this.argv.runInBg && this.argv.cmd === Command.get) {
      this.annotations_write(abap, this.Texts, Boolean(this.argv.textOnly));
    }

    return abap;
  }

  annotations_write(
    abap: AnnotationsType,
    texts: TextsCatalogType,
    textOnly: boolean
  ): void {
    const folder_root: string = path.join(
      this.argv.output as string,
      this.api_name
    );
    const folder_yaml: string = path.join(folder_root, "yaml");
    log.info(
      (textOnly ? "\nAnnotations' texts" : "\nAnnotations") +
      ` saved to: ${runningInDocker ? folder_yaml.replace(DockerVolume, "") : folder_yaml
      }`
    );
    try {
      const total = {
        alpha: abap.alpha ? abap.alpha.size : 0,
        rfms: Object.keys(abap.stat).length,
        parameters: Object.keys(abap.parameters).reduce((count, rfm) => {
          return (count += Object.keys(abap.parameters[rfm]).length);
        }, 0),
        fields: Object.keys(abap.fields).length,
        helps: abap.helps ? Object.keys(abap.helps).length : 0,
        descriptors: abap.descriptors
          ? Object.keys(abap.descriptors).length
          : 0,
        texts: texts ? Object.keys(texts).length : 0,
      };
      abap.stat.total = total;
      if (!fs.existsSync(folder_root)) {
        fs.mkdirSync(folder_root);
      }
      if (!fs.existsSync(folder_yaml)) {
        fs.mkdirSync(folder_yaml);
      }
      if (!textOnly) {
        fileSave(path.join(folder_yaml, "alpha.yaml"), abap.alpha, {
          sortKeys: true,
        });
        fileSave(path.join(folder_yaml, "parameters.yaml"), abap.parameters);
        fileSave(path.join(folder_yaml, "fields.yaml"), abap.fields);
        if (abap.helps) {
          fileSave(path.join(folder_yaml, "helps.yaml"), abap.helps, {
            sortKeys: true,
          });
        }
        if (!isEmpty(abap.descriptors)) {
          fileSave(
            path.join(folder_yaml, "descriptors.yaml"),
            abap.descriptors,
            {
              sortKeys: true,
            }
          );
        }
        fileSave(path.join(folder_yaml, "stat.yaml"), abap.stat, {
          sortKeys: true,
        });
        fileSave(path.join(folder_yaml, "usage.yaml"), abap.usage, {
          sortKeys: true,
        });
      }
      if (!isEmpty(texts)) {
        fileSave(path.join(folder_yaml, "texts.yaml"), texts, {
          sortKeys: true,
        });
      }
    } catch (ex) {
      log.error(`Error writing annotations: `, ex);
    }
  }

  annotations_clean(): void {
    const rootdir = path.join(this.argv.output as string, this.api_name);
    log.debug("Clean annotations", rootdir, this.api_name);
    rmDir(rootdir);
  }
}

export function annotations_read(
  api_name: string,
  argv: Arguments
): AnnotationsType {
  const folder_yaml = api_name
    ? path.join(argv.output, api_name, "yaml")
    : path.join(argv.output, "yaml");

  log.debug(`reading annotations for: ${api_name} from ${folder_yaml}`);

  const result: AnnotationsType = {
    parameters: fileLoad(
      path.join(folder_yaml, "parameters.yaml")
    ) as ParametersCatalogType,
    fields: fileLoad(
      path.join(folder_yaml, "fields.yaml")
    ) as FieldsCatalogType,
    stat: fileLoad(path.join(folder_yaml, "stat.yaml")) as StatCatalogType,
  };
  if (fileExists(path.join(folder_yaml, "descriptors.yaml"))) {
    result.helps = fileLoad(
      path.join(folder_yaml, "helps.yaml")
    ) as HelpsCatalogType;
    result.descriptors = fileLoad(
      path.join(folder_yaml, "descriptors.yaml")
    ) as DescriptorsCatalogType;
  }
  return result;
}
