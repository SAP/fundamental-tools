// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

// check search_help_api

import chalk from "chalk";
import fs from "fs";
import path from "path";
import { sprintf } from "sprintf-js";
import { Client, RfcParameterValue, RfcTable, RfcStructure } from "node-rfc";
import { Command, Arguments } from "./abap";
import {
  Languages,
  ParamType,
  ParamClass,
  ParamClassDesc,
  ValueInput,
  DefaultFolder,
  DockerVolume,
  runningInDocker,
} from "./constants";
import { Alpha } from "./alpha";
import { deleteFile, isEmpty, log, yamlLoad, yamlSave } from "./utils";

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
type yamlParametersType = Record<string, Record<string, ParameterType>>;

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
    valueInputType?: string;
  };
  input?: {
    CONVEXIT?: string;
    MEMORYID?: string;
    SHLP?: string;
  };
  text: FieldTextType;
};

export type StructureType = Record<string, FieldType>;

export type yamlFieldsType = Record<string, FieldType | StructureType>;

// AnnotationsType typings

export type yamlTextsType = Record<
  string,
  Record<string, string | FieldTextType>
>;

type FieldValuesHelpType = {
  type: string;
  count: number;
  values: Record<string, string>;
};

type HelpsType = Record<
  string,
  | {
      // search helps
      title: string;
      valueProperty?: string[];
      displayProperty?: string[];
      selection?: Record<string, string>[];
      requestedFields?: string[];
    }
  | FieldValuesHelpType // field values
>;

type StatType = Record<
  string,
  {
    var?: number;
    struct?: number;
    table?: number;
    exception?: number;
  }
>;

type UsageType = Record<string, string[]>;

export type AnnotationsType = {
  alpha?: { all: string[]; rfm: Record<string, RfcStructure> };
  parameters: yamlParametersType;
  fields: yamlFieldsType;
  stat: StatType;
  helps?: HelpsType;
  usage?: UsageType;
};

// search help typings

type SearchHelpApiType = { determine: string; dom_values: string };
type SystemsYamlType = Record<string, { search_help_api: SearchHelpApiType }>;
export class Backend {
  private argv: Arguments;

  private api_name: string;
  private apilist: string[];
  private alpha: Alpha;

  private search_help_api = {} as SearchHelpApiType;
  private getSearchHelps = false;
  private SPRAS: string;
  private Helps: HelpsType;
  private Stat: StatType;
  private Texts = {} as yamlTextsType;

  private client = {} as Client;

  constructor(api_name: string, argv: Arguments) {
    this.argv = argv;
    this.api_name = api_name;
    this.apilist = this.argv.apilist[api_name];

    this.alpha = new Alpha();
    this.SPRAS = Languages[this.argv.lang].spras;
    this.Helps = {};
    this.Stat = {};

    log.debug(
      `backend: ${this.api_name} dest: ${this.argv.dest} lang: ${argv.lang} : ${this.SPRAS} api: ${this.apilist}`
    );

    // check if search help api configured
    if (this.argv.dest && this.argv.cmd === Command.get) {
      try {
        const systemYamlPath = path.join(
          DefaultFolder.userConfig,
          "systems.yaml"
        );
        const systems = yamlLoad(systemYamlPath) as SystemsYamlType;
        if (!systems) {
          log.info(`systems.yaml not found: ${systemYamlPath}`);
        } else if (!systems[this.argv.dest]) {
          log.info(`system ${this.argv.dest} not found in systems.yaml`);
        } else if (!systems[this.argv.dest].search_help_api) {
          log.info(`search help api not configured for ${this.argv.dest}`);
        } else {
          this.search_help_api = systems[this.argv.dest].search_help_api;

          for (const [apiKey, apiName] of Object.entries(
            this.search_help_api
          )) {
            if (!["determine", "dom_values"].includes(apiKey)) {
              throw new Error(
                `Invalid key "${apiKey}" found in ${systemYamlPath}`
              );
            }
            if (apiName.length > 30) {
              throw new Error(
                `Too long API name "${apiName}" found in ${systemYamlPath}`
              );
            }
          }
        }
      } catch (ex) {
        if (ex.code !== "ENOENT") throw ex; // ignore file not found error
      }
    }

    // search helps processing
    this.getSearchHelps =
      this.argv.cmd === Command.get && // search helps are required for get command
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
    if (!result.format["DOMNAME"]) delete result.format["DOMNAME"];
    if (!result.format["ROLLNAME"]) delete result.format["ROLLNAME"];

    if (dfies.LFIELDNAME !== dfies.FIELDNAME) {
      result.format["LFIELDNAME"] = dfies.LFIELDNAME;
    }

    //
    // value input help
    //

    let shlp: RfcParameterValue = "",
      shlp_key = "",
      shlp_title = "",
      shlp_values: RfcTable = [];

    if (
      this.getSearchHelps &&
      !["DATS", "TIMS"].includes(dfies.DATATYPE as string)
    ) {
      // F4 Help
      if (dfies.F4AVAILABL) {
        const shlp_descriptor = await this.client.call(
          this.search_help_api.determine,
          {
            IV_TABNAME: dfies["TABNAME"],
            IV_FIELDNAME: dfies["FIELDNAME"],
          }
        );
        shlp = shlp_descriptor["ES_SHLP"];
        shlp_title = shlp_descriptor["EV_SHLP_TITLE"] as string;
        shlp_key = `${shlp["SHLPTYPE"]} ${shlp["SHLPNAME"]}`;
        if (!result.input) result.input = {};

        result.input.SHLP = shlp_key;

        // Domain Field Values
        if (shlp["SHLPTYPE"] == "FV") {
          if (!this.Helps[shlp_key]) {
            log.debug(`shelp: ${shlp_key}`);
            shlp_values = (
              await this.client.call(
                this.search_help_api.dom_values as string,
                {
                  IV_DOMNAME: shlp["SHLPNAME"],
                }
              )
            )["ET_VALUES"] as RfcTable;
            const domainValues: Record<string, string> = {};
            for (const line of shlp_values) {
              domainValues[line["DOMVALUE_L"] as string] = line[
                "DDTEXT"
              ] as string;
            }
            this.Helps[shlp_key] = {
              type:
                shlp_values.length > 2 ? ValueInput.list : ValueInput.binary,
              count: Object.keys(domainValues).length,
              values: domainValues,
            };
          }
          result.format.valueInputType = (this.Helps[
            shlp_key
          ] as FieldValuesHelpType).type;
          if (result.format.valueInputType === ValueInput.binary) {
            // checkbox does not use SHLP
            delete result.input.SHLP;
          }
        }
      }

      // add domain CT if no other shelp found
      if (
        result["format"]["DOMNAME"] &&
        !(result.input && result.input["SHLP"])
      ) {
        const domain_ct = (
          await this.client.call("DD_DOMA_GET", {
            DOMAIN_NAME: result["format"]["DOMNAME"],
          })
        )["DD01V_WA_A"]["ENTITYTAB"];
        if (domain_ct) {
          shlp = { SHLPTYPE: "CT", SHLPNAME: domain_ct };
          shlp_key = `${shlp["SHLPTYPE"]} ${shlp["SHLPNAME"]}`;
          if (!result["input"]) result["input"] = {};
          result["input"]["SHLP"] = shlp_key;
        }
      }

      if (
        shlp &&
        shlp_key &&
        result.input &&
        result.input["SHLP"] &&
        !this.Helps[shlp_key]
      ) {
        log.debug(`shelp: ${shlp_key}`);
        if (["CH", "CT"].includes(shlp["SHLPTYPE"])) {
          result.format.valueInputType = ValueInput.list;
          const tab_fields = (
            await this.client.call("BDL_DDIF_TABL_GET", {
              NAME: shlp["SHLPNAME"],
            })
          )["DD03P_TAB"];
          const tab_metadata = (
            await this.client.call("FDT_GET_DDIC_METADATA", {
              IV_TYPENAME: shlp["SHLPNAME"],
            })
          )["ES_METADATA"];
          let tab_text = tab_metadata["TEXT"];
          if (!tab_text) tab_text = tab_metadata["SHORT_TEXT"];
          if (!tab_text) tab_text = shlp_key;
          const sh_val_fields: string[] = [];
          //# sh_disp_fields = []
          for (const tf of tab_fields as RfcTable) {
            if (
              tf["KEYFLAG"] &&
              tf["FIELDNAME"] !== ".INCLUDE" &&
              tf["ROLLNAME"] != "MANDT"
            )
              sh_val_fields.push(tf["FIELDNAME"] as string);
          }
          this.Helps[shlp_key] = {
            valueProperty: sh_val_fields,
            displayProperty: [],
            selection: [],
            requestedFields: [],
            title: tab_text,
          };
        }
        if (shlp["SHLPTYPE"] === "SH") {
          this.Helps[shlp_key] = { title: shlp_title };
        }
      }
    }

    // add search help if not maintained for quantity, currency, language
    if (!shlp) {
      if (result.format["DATATYPE"] === "CUKY") {
        shlp_key = "CT TCURC";
        shlp_title = "Currency help (added)";
      } else if (result.format["DATATYPE"] === "UNIT") {
        shlp_key = "SH H_T006";
        shlp_title = "Quantity help (added)";
      } else if (result.format["DATATYPE"] === "LANG") {
        shlp_key = "SH H_T002";
        shlp_title = "Language help (added)";
      }
      if (result.input && shlp_key) {
        result.input["SHLPKEY"] = shlp_key;
        if (!this.Helps[shlp_key]) {
          this.Helps[shlp_key] = { title: shlp_title };
        }
      }
    }

    if (result.input && isEmpty(result.input)) {
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
        if ((ddif["LINES_DESCR"] as RfcTable).length > 0) {
          // try LINES_DESCR first, seem to be more "reliable" than DFIES_TAB (no .INCLUDEs)
          dfies = ddif.LINES_DESCR[0].FIELDS;
        } else if ((ddif["DFIES_TAB"] as RfcTable).length > 0) {
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
          if ((field.INTTYPE as string).trim() && !field[".INCLUDE"]) {
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
        }
        return result;
      } else {
        // variable
        if ("FIELDNAME" in dfies) {
          // ddic type
          this.alpha.field("");
          return await this.getField(dfies);
        }
        // native ABAP type
        return undefined;
      }
    } catch (ex) {
      if (param.paramType === ParamType.var && ex.key === "NOT_FOUND") {
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
      this.client = new addon.Client({ dest: this.argv.dest });
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
          this.Texts = yamlLoad(
            path.join(folder_yaml, "texts.yaml")
          ) as yamlTextsType;
        } catch (ex) {
          if (ex.code !== "ENOENT") throw ex; // throw if other than file not found
          throw Error(
            `Texts in primary language not found for ${this.apilist}\nDon't use -t|--text-option with language key, use the -l|--lang instead:\n -t -l <lang>`
          );
        }
      }
    }

    log.info(
      `\n${chalk.bold(this.api_name)} ${this.argv.dest} (${this.argv.lang}) ${
        this.argv.textOnly ? "only texts" : ""
      } ${this.getSearchHelps ? "search helps" : ""}\n`.replace(/  +/g, " ")
    );

    await this.client.open();

    const R = await this.client.call("RFC_METADATA_GET", {
      EVALUATE_LINKS: "X",
      LANGUAGE: this.SPRAS,
      FUNCTIONNAMES: this.apilist,
    });

    if (
      (R.FUNC_ERRORS as RfcTable).length > 0 &&
      R.FUNC_ERRORS[0].EXCEPTION == "FU_NOT_FOUND"
    ) {
      throw `RFM not found: ${R.FUNC_ERRORS[0]["FUNCNAME"]}`;
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
      p.functionName = (p["FUNCNAME"] as string).trim();
      p.paramName = (p["PARAMETER"] as string).trim();

      // Trim, jusr for any case
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
    (R["PARAMETERS"] as RfcTable).sort((a: RfcStructure, b: RfcStructure) => {
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
    R["PARAMETERS"] = (R["PARAMETERS"] as RfcTable).sort();

    //
    // Parse
    //

    const Parameters: yamlParametersType = {};
    const Fields = {};

    let functionName = "";
    for (const p of R["PARAMETERS"] as RfcTable) {
      if (!((p["FUNCNAME"] as string) in Parameters)) {
        Parameters[p["FUNCNAME"] as string] = {};
      }

      if (p.functionName !== functionName) {
        if (functionName) {
          log.info(`\n${p.functionName}`);
        } else {
          log.info(p.functionName);
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

      Parameters[p.functionName as string][
        p.paramName as string
      ] = p as ParameterType;

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
            `${ParamClassDesc[p.PARAMCLASS as string].toLowerCase()} ${
              p.paramType === ParamClass.table ? "" : p.paramType // table table -> table
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

    // usage
    const usage = {};
    for (const tabname of Object.keys(Usage).sort()) {
      usage[tabname] = Array.from(Usage[tabname]).sort();
    }

    // final result, todo: field names could be sorted, eventually
    const abap: AnnotationsType = {
      alpha: this.alpha.get(),
      parameters: Parameters,
      fields: Fields,
      helps: this.Helps,
      stat: this.Stat,
      usage: usage,
    };

    if (this.argv.cmd === Command.get) {
      this.annotations_write(abap, this.Texts, Boolean(this.argv.textOnly));
    }

    return abap;
  }

  annotations_write(
    abap: AnnotationsType,
    texts: yamlTextsType,
    textOnly: boolean
  ): void {
    const folder_root: string = path.join(
      this.argv.output as string,
      this.api_name
    );
    const folder_yaml: string = path.join(folder_root, "yaml");
    log.info(
      (textOnly ? "\nAnnotations' texts" : "\nAnnotations") +
        ` saved to: ${
          runningInDocker ? folder_yaml.replace(DockerVolume, "") : folder_yaml
        }`
    );

    if (!fs.existsSync(folder_root)) {
      fs.mkdirSync(folder_root);
    }
    if (!fs.existsSync(folder_yaml)) {
      fs.mkdirSync(folder_yaml);
    }
    if (!textOnly) {
      yamlSave(path.join(folder_yaml, "alpha.yaml"), abap.alpha, {
        sortKeys: true,
      });
      yamlSave(path.join(folder_yaml, "parameters.yaml"), abap.parameters);
      yamlSave(path.join(folder_yaml, "fields.yaml"), abap.fields);
      if (abap.helps) {
        yamlSave(path.join(folder_yaml, "helps.yaml"), abap.helps, {
          sortKeys: true,
        });
      }
      yamlSave(path.join(folder_yaml, "stat.yaml"), abap.stat);
      yamlSave(path.join(folder_yaml, "usage.yaml"), abap.usage);
    }
    if (!isEmpty(texts)) {
      yamlSave(path.join(folder_yaml, "texts.yaml"), texts, {
        sortKeys: true,
      });
    }
  }

  annotations_clean(): void {
    const folder_yaml = path.join(
      this.argv.output as string,
      this.api_name,
      "yaml"
    );

    log.debug(`AnnotationsType clean ${folder_yaml}`);

    for (const fileName of [
      "parameters",
      "fields",
      "helps",
      "stat",
      "alpha",
      "usage",
      "texts",
    ]) {
      deleteFile(path.join(folder_yaml, `${fileName}.yaml`));
    }
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

  return {
    parameters: yamlLoad(
      path.join(folder_yaml, "parameters.yaml")
    ) as yamlParametersType,
    fields: yamlLoad(path.join(folder_yaml, "fields.yaml")) as yamlFieldsType,
    stat: yamlLoad(path.join(folder_yaml, "stat.yaml")) as StatType,
  };
}
