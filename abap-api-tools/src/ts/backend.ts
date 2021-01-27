// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

// check search_help_api

import chalk from "chalk";
import fs from "fs";
import path from "path";
import { Command, Arguments } from "./abap";
import { sprintf } from "sprintf-js";
import { Client, RfcParameterValue, RfcTable, RfcStructure } from "node-rfc";
import {
  Languages,
  ParamType,
  ParamClass,
  ParamClassDesc,
  ValueInput,
  DefaultFolder,
} from "./constants";

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
type yamlParameters = Record<string, Record<string, ParameterType>>;

export type FieldText = {
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
    value_input?: {
      type: string;
      values?: (string | number)[];
      count?: number;
    };
  };
  input?: {
    CONVEXIT?: string;
    MEMORYID?: string;
    SHLP?: string;
  };
  text: FieldText;
};

export type StructureType = Record<string, FieldType>;

export type yamlFields = Record<string, FieldType | StructureType>;

// AbapObject typings

type Helps = Record<
  string,
  {
    title: string;
    valueProperty?: string[];
    displayProperty?: string[];
    selection?: Record<string, string>[];
    requestedFields?: string[];
  }
>;

type Stat = Record<
  string,
  {
    var?: number;
    struct?: number;
    table?: number;
    exception?: number;
  }
>;

type Usage = Record<string, string[]>;

export type AbapObject = {
  alpha?: { all: string[]; rfm: Record<string, RfcStructure> };
  parameters: yamlParameters;
  fields: yamlFields;
  stat: Stat;
  helps?: Helps;
  usage?: Usage;
};

class Alpha {
  private all: Set<string> = new Set();
  private found: Record<string, RfcStructure> = {};
  private rfm_name = "";
  private param_name = "";
  private field_name = "";

  rfm(rfm_name: string) {
    this.rfm_name = rfm_name;
    this.param("");
  }

  param(param_name: string) {
    this.param_name = param_name;
    this.field_name = "";
  }

  field(field_name: string) {
    this.field_name = field_name;
  }

  get(): { all: string[]; rfm: Record<string, RfcStructure> } {
    return { all: Array.from(this.all).sort(), rfm: this.found };
  }

  add(alpha_name: string) {
    this.all.add(alpha_name);

    if (!this.found[this.rfm_name]) {
      this.found[this.rfm_name] = {};
    }

    if (!this.found[this.rfm_name][this.param_name]) {
      this.found[this.rfm_name][this.param_name] = {};
    }

    if (this.field_name) {
      this.found[this.rfm_name][this.param_name][this.field_name] = alpha_name;
    } else {
      this.found[this.rfm_name][this.param_name] = alpha_name;
    }
  }
}

type SearchHelpApiType = { determine: string; dom_values: string };
type SystemsYamlType = Record<string, { search_help_api: SearchHelpApiType }>;

export class Backend {
  private argv: Arguments;

  private api_name: string;
  private apilist: string[];
  private alpha: Alpha;

  private search_help_api = {} as SearchHelpApiType;
  private SPRAS: string;
  private Helps: Helps;
  private Stat: Stat;

  private client: Client;

  // tslint:disable:no-empty
  constructor(api_name: string, argv: Arguments) {
    this.argv = argv;
    this.api_name = api_name;
    this.apilist = this.argv.apilist[api_name];

    this.alpha = new Alpha();
    this.SPRAS = Languages[this.argv.lang].spras;
    this.Helps = {};
    this.Stat = {};

    const connectionParameters = { dest: this.argv.dest };

    log.debug(
      `backend: ${this.api_name} dest: ${this.argv.dest} lang: ${argv.lang} : ${this.SPRAS} api: ${this.apilist}`
    );

    this.client = new Client(connectionParameters);

    try {
      const systemYmlPath = path.join(DefaultFolder.userConfig, "systems.yaml");
      const systems = yamlLoad(systemYmlPath) as SystemsYamlType;
      if (this.argv.dest && systems[this.argv.dest]) {
        this.search_help_api = systems[this.argv.dest].search_help_api;

        for (const k of Object.keys(this.search_help_api)) {
          if (!["determine", "dom_values"].includes(k)) {
            throw new Error(`Invalid key "${k}" found in ${systemYmlPath}`);
          }
          if (this.search_help_api[k].length > 30) {
            throw new Error(
              `Too long API name: ${this.search_help_api[k]}, found in ${systemYmlPath}[${this.argv.dest}][${k}]`
            );
          }
        }
      }
    } catch (ex) {
      if (ex.code !== "ENOENT") throw ex; // ignore file not found error
    }

    // output folder
    if (this.argv.output && !fs.existsSync(this.argv.output)) {
      log.debug(`Create output folder: ${this.argv.output}`);
      fs.mkdirSync(this.argv.output);
    }
  }

  getDfiesText(dfies: RfcStructure): FieldText {
    const TEXT_FIELDS = [
      "FIELDTEXT",
      "REPTEXT",
      "SCRTEXT_S",
      "SCRTEXT_M",
      "SCRTEXT_L",
    ];
    const text: FieldText = {};
    TEXT_FIELDS.forEach((t) => {
      if ((dfies[t] as string).length > 0) text[t] = dfies[t];
    });
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

    if (!isEmpty(this.search_help_api)) {
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
        if (!result["input"]) result["input"] = {};
        result["input"]["SHLP"] = shlp_key;

        // Domain Field Values
        if (shlp["SHLPTYPE"] == "FV") {
          shlp_values = (
            await this.client.call(this.search_help_api.dom_values as string, {
              IV_DOMNAME: shlp["SHLPNAME"],
            })
          )["ET_VALUES"] as RfcTable;
          if (shlp_values.length == 2) {
            result.format.value_input = { type: ValueInput.binary };
            if (
              shlp_values[0]["DOMVALUE_L"] !== "X" &&
              shlp_values[1]["DOMVALUE_L"] !== "X"
            ) {
              // save only values different from X/"", like yes/no ...
              result.format.value_input.values = [
                shlp_values[0]["DOMVALUE_L"] as string | number,
                shlp_values[1]["DOMVALUE_L"] as string | number,
              ];
            }
            delete result.input.SHLP;
          }
          // otherwise list
          else {
            result.format.value_input = {
              type: ValueInput.list,
              count: shlp_values.length,
            };
            const values: (string | number)[] = [];
            for (const line of shlp_values) {
              values.push(line["DOMVALUE_L"] as number | string);
            }
            result.format.value_input.values = values;
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
        if (["CH", "CT"].includes(shlp["SHLPTYPE"])) {
          result["format"].value_input = { type: ValueInput.list };
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
        if (shlp["SHLPTYPE"] === "SH")
          this.Helps[shlp_key] = { title: shlp_title };
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

  async parse(): Promise<AbapObject> {
    this.annotations_clean();

    log.info(
      `\nbackend: ${this.argv.dest} ${chalk.blue(this.api_name)} (${
        this.argv.lang
      }) serch helps: ${
        Object.keys(this.search_help_api).length > 0 ? "yes" : "no"
      }\n`
    );

    await this.client.open();

    const R = await this.client.call("RFC_METADATA_GET", {
      EVALUATE_LINKS: "X", // comment to go for lower level DDIC: BAPI_EQUI_CHANGE EQUIPMENT
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
      p.functionName = p["FUNCNAME"].trim() as string;
      p.paramName = p["PARAMETER"].trim() as string;

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

    const Parameters: yamlParameters = {};
    const Fields = {};

    let functionName = "";
    for (const p of R["PARAMETERS"] as RfcTable) {
      if (!((p["FUNCNAME"] as string) in Parameters)) {
        Parameters[p["FUNCNAME"] as string] = {};
      }

      if (p.functionName !== functionName) {
        if (functionName) {
          log.info(chalk(`\n${p.functionName}`));
        } else {
          log.info(chalk(p.functionName));
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

      // log
      if (p.PARAMCLASS === ParamClass.exception) {
        log.info(
          chalk.grey(
            sprintf("%-13s", `${ParamClassDesc[p.PARAMCLASS].toLowerCase()}`)
          ),
          chalk.grey(sprintf(`%-${param_name_len}s`, p.paramName)),
          chalk.grey(p.PARAMTEXT)
        );
      } else {
        log.info(
          chalk.grey(
            sprintf(
              "%-13s",
              `${ParamClassDesc[p.PARAMCLASS as string].toLowerCase()} ${
                p.paramType
              }`
            )
          ),
          chalk[p.nativeKey ? "red" : "grey"](
            sprintf(`%-${param_name_len}s`, p.paramName)
          ),
          chalk.grey(p.PARAMTEXT)
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
    const abap: AbapObject = {
      alpha: this.alpha.get(),
      parameters: Parameters,
      fields: Fields,
      helps: this.Helps,
      stat: this.Stat,
      usage: usage,
    };

    if (this.argv._[0] === Command.get) {
      this.annotations_write(abap);
    }

    return abap;
  }

  annotations_write(abap: AbapObject): void {
    const folder_root: string = path.join(
      this.argv.output as string,
      this.api_name
    );
    const folder_yaml: string = path.join(folder_root, "yaml");
    log.debug(`Annotations save ${folder_yaml}`);

    if (!fs.existsSync(folder_root)) {
      fs.mkdirSync(folder_root);
    }
    if (!fs.existsSync(folder_yaml)) {
      fs.mkdirSync(folder_yaml);
    }

    yamlSave(`${folder_yaml}/alpha.yaml`, abap.alpha, { sortKeys: true });
    yamlSave(`${folder_yaml}/parameters.yaml`, abap.parameters);
    yamlSave(`${folder_yaml}/fields.yaml`, abap.fields);
    if (abap.helps) {
      yamlSave(`${folder_yaml}/helps.yaml`, abap.helps, { sortKeys: true });
    }
    yamlSave(`${folder_yaml}/stat.yaml`, abap.stat);
    yamlSave(`${folder_yaml}/usage.yaml`, abap.usage);
  }

  annotations_clean(): void {
    const folder_yaml = path.join(
      this.argv.output as string,
      this.api_name,
      "yaml"
    );

    log.debug(`Annotations clean ${folder_yaml}`);
    for (const fileName of [
      "parameters",
      "fields",
      "helps",
      "stat",
      "alpha",
      "usage",
    ]) {
      deleteFile(`${folder_yaml}/${fileName}.yaml`);
    }
  }
}

export function annotations_read(
  api_name: string,
  argv: Arguments
): AbapObject {
  const folder_yaml = api_name
    ? path.join(argv.output, api_name, "yaml")
    : path.join(argv.output, "yaml");

  log.debug(`reading annotations for: ${api_name} from ${folder_yaml}`);

  return {
    parameters: yamlLoad(`${folder_yaml}/parameters.yaml`) as yamlParameters,
    fields: yamlLoad(`${folder_yaml}/fields.yaml`) as yamlFields,
    stat: yamlLoad(`${folder_yaml}/stat.yaml`) as Stat,
  };
}
