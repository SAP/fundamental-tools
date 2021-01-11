#!/usr/bin/env node

// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

import fs from "fs";
const sprintf = require("sprintf-js").sprintf;
import * as CN from "./constants";
import { Client, RfcTable, RfcConnectionParameters } from "node-rfc";

enum FileType {
  js = "js",
  html = "html",
  py = "py",
}

class Writer {
  private SPACE: string = " ";
  private NEWLINE: string = "\n";
  private fileName: string = "";
  private fileType: FileType = FileType.js;
  private write_to_html: boolean = false;
  private indent_step: number = 2;
  private indent_count: number = 0;
  private indent: string = "";
  private output: Array<String> = [];

  constructor(fileName: string, fileType: FileType = FileType.js) {
    this.fileName = fileName.replace(/\//g, "_").toUpperCase();
    this.fileType = fileType;
    this.indent_step = this.fileType === FileType.js ? 2 : 4;
    this.reset();
    this.write("//");
    this.write(`// ${fileName}`);
    this.write("//");
    this.write();
  }

  get text(): string {
    return this.output.join(this.NEWLINE);
  }

  reset() {
    this.indent_count = 0;
    this.indent = this.SPACE.repeat(this.indent_count);
    this.output = [];
  }

  addindent() {
    this.indent_count += this.indent_step;
    this.indent = this.SPACE.repeat(this.indent_count);
  }

  deindent() {
    this.indent_count -= this.indent_step;
    if (this.indent_count < 0) {
      throw `Internal indentation error: indent_count=${this.indent_count}`;
    }
    this.indent = this.SPACE.repeat(this.indent_count);
  }

  write(line = "") {
    this.output.push(line.length > 0 ? this.indent + line : line);
  }

  newline() {
    this.output.push(this.NEWLINE);
  }

  save() {
    const fn = `${this.fileName}.${this.write_to_html ? "html" : "js"}`;
    const ms = this.output.join(this.NEWLINE);
    const stream = fs.createWriteStream(fn);
    stream.once("open", () => {
      stream.write(ms);
      stream.end();
    });
  }
}

export const defaultParserOptions: object = {
  saveJS: false,
  echoTotals: false,
  cacheMetadata: false,
  quiet: false,
};

export class parseRFM {
  private client: Client;
  private RFM_NAME: string;
  private LANGU: string;
  private FUNCTIONNAMES: Array<string>;
  private Params: Map<string, object> = new Map();
  private Fields: Map<string, object> = new Map();

  constructor(
    destination: string | RfcConnectionParameters,
    rfm_name: string,
    rfm_lang: string = "en"
  ) {
    const connectionParameters: RfcConnectionParameters =
      typeof destination === "string" ? { dest: destination } : destination;
    this.RFM_NAME = rfm_name;
    this.LANGU = CN.iso2langu.get(rfm_lang);
    this.client = new Client(connectionParameters);
    this.FUNCTIONNAMES = [];
    this.FUNCTIONNAMES.push(rfm_name.toUpperCase());
  }

  get_param_initializer(param) {
    const result = {
      text: param.PARAMTEXT,
      leng: "",
      abaptype: "",
      init: "",
      optional: false,
      alpha: "",
    };
    let field: any = false;
    if ("fieldKey" in param) {
      field = this.Fields.get(param.fieldKey);
      result.abaptype = param.fieldKey;
    }
    switch (param.paramType) {
      case CN.PARAMTYPE_TABLE:
        result.init = `[]`;
        break;
      case CN.PARAMTYPE_STRUCT:
        result.init = `{}`;
        break;
      case CN.PARAMTYPE_VAR:
        if (field) {
          result.abaptype = field.format.DATATYPE;
          result.leng = field.format.LENG;
          if (field.input && "CONVEXIT" in field.input) {
            result.alpha = field.input["CONVEXIT"];
          }
        } else {
          result.abaptype = param.nativeKey;
        }
        if (result.abaptype in CN.DDIC_JS) {
          result.init = CN.DDIC_JS[result.abaptype].INITIAL;
        } else {
          result.init = `"native ABAP type: ${result.abaptype}"`;
        }
        if (result.leng) {
          result.abaptype += ` (${result.leng})`;
        }
        result.optional = "default" in param;
        if (result.optional) {
          result.init = param.default;
          if (typeof result.init === "string") {
            result.init = result.init.replace(/'/g, `"`) || `""`;
          }
        }
        break;
      default:
        throw `Unknown parameter type ${param.paramType}`;
    }
    return result;
  }

  get_field_initializer(fieldData: object) {
    let result = {
      abaptype: fieldData["format"]["DATATYPE"],
      leng: fieldData["format"]["LENG"],
      init: "",
      alpha: "",
    };
    if ("DECIMALS" in fieldData["format"]) {
      result.leng += `.${fieldData["format"]["DECIMALS"]}`;
    }
    if (result.abaptype in CN.DDIC_JS) {
      result.init = CN.DDIC_JS[result.abaptype].INITIAL;
      if ("input" in fieldData && "CONVEXIT" in fieldData["input"]) {
        result.alpha = fieldData["input"]["CONVEXIT"];
      }
    } else {
      result.init = `"native ABAP type: ${result.abaptype}"`;
    }

    return result;
  }

  async getDFIES(param, langu: string) {
    param.paramKey = this.PKeyToJS(param);
    const fieldKey = this.FKeyToJS(param);
    if (this.Fields.has(fieldKey)) {
      param.fieldKey = fieldKey;
      return 0;
    }
    let dfies;
    try {
      const ddif = await this.client.call("DDIF_FIELDINFO_GET", {
        TABNAME: param.TABNAME,
        FIELDNAME: param.FIELDNAME,
        LANGU: langu,
        ALL_TYPES: "X",
        GROUP_NAMES: "X",
      });

      // ddif-> dfies
      if (param.paramType === CN.PARAMTYPE_VAR) {
        // variable
        if (ddif.DDOBJTYPE === "INTTAB" || ddif.DDOBJTYPE === "TRANSP") {
          dfies = ddif.DFIES_TAB[0];
        } else {
          dfies = ddif.DFIES_WA;
        }
      } else {
        // structure or table
        if ((ddif["LINES_DESCR"] as RfcTable).length > 0) {
          // try LINES_DESCR first, seem to be more "reliable" than DFIES_TAB (no .INCLUDEs)
          dfies = ddif.LINES_DESCR[0].FIELDS;
        } else if ((ddif["DFIES_TAB"] as RfcTable).length > 0) {
          dfies = ddif.DFIES_TAB;
        } else {
          // single field row
          dfies = [ddif.DFIES_WA];
        }
      }

      this.Fields.set(fieldKey, this.annotation(dfies));
      param.fieldKey = fieldKey;
      return 0;
    } catch (ex) {
      if (param.paramType === CN.PARAMTYPE_VAR && ex.key === "NOT_FOUND") {
        // native variable data type, w/o ddic
        param.nativeKey = param.TABNAME;
      } else {
        throw {
          ex: ex,
          message: `ddic parsing error at: ${param.paramType} ${param.paramKey}`,
        }; // unexpected error
      }
      return 1;
    }
  }

  async parse(parserOptions: object = {}): Promise<object> {
    const options = Object.assign({}, defaultParserOptions);
    Object.assign(options, parserOptions);

    await this.client.open();

    // get parameters' metadata
    const R = await this.client.call("RFC_METADATA_GET", {
      // DEEP:'X',
      // GET_CLIENT_DEP_FIELDS: 'X',
      // GET_TIMESTAMPS:'X',
      EVALUATE_LINKS: "X", // comment to go for lower level DDIC: BAPI_EQUI_CHANGE EQUIPMENT
      // no backend ALPHA
      LANGUAGE: this.LANGU,
      FUNCTIONNAMES: this.FUNCTIONNAMES,
    });

    // RFM found?
    if (
      (R.FUNC_ERRORS as RfcTable).length > 0 &&
      R.FUNC_ERRORS[0].EXCEPTION == "FU_NOT_FOUND"
    ) {
      throw `RFM not found: ${R.FUNC_ERRORS[0]["FUNCNAME"]}`;
    }

    // parameter type counters
    const param_type_stat = {};
    for (const k of [
      CN.PARAMTYPE_VAR,
      CN.PARAMTYPE_STRUCT,
      CN.PARAMTYPE_TABLE,
      CN.PARAMTYPE_EXC,
    ]) {
      param_type_stat[k] = 0;
    }

    // Cleanup
    let i = (R.PARAMETERS as RfcTable).length;
    while (i--) {
      const p = R.PARAMETERS[i];

      // skip records with name 'CHANGING'
      if (p.PARAMETER === "CHANGING") {
        (R.PARAMETERS as RfcTable).splice(i, 1);
        continue;
      }

      // 'I' parameter type is INT4 internally
      if (p.TABNAME === "I") p.TABNAME = "INT4";

      // set optional/required
      p.required = p.OPTIONAL.trim().length === 0;
      if (!p.required) {
        p.default = p.DEFAULT;
      }
      delete p.DEFAULT;

      //  set param type
      if (p.PARAMCLASS == "X" || p.EXID.trim().length == 0) {
        p.paramType = CN.PARAMTYPE_EXC;
      } else if (p.EXID === "h" || p.PARAMCLASS === "T") {
        p.paramType = CN.PARAMTYPE_TABLE;
      } else if ("uv".indexOf(p.EXID) != -1) {
        p.paramType = CN.PARAMTYPE_STRUCT;
      } else {
        p.paramType = CN.PARAMTYPE_VAR;
      }
      param_type_stat[p.paramType]++;

      // skip exception parameters
      if (p.paramType == CN.PARAMTYPE_EXC) continue;

      // set ddic ref
      await this.getDFIES(p, this.LANGU);

      // remove unused properties
      CN.PARAM_XPROPS.forEach((e) => delete p[e]);

      // set P
      this.Params.set(p.paramKey, p);
    }

    // sort and count parameters
    const paramsSorted = new Map([...this.Params.entries()].sort());
    this.Params = new Map();

    // required IMPORT
    paramsSorted.forEach((v, k) => {
      if (["I"].includes(v["PARAMCLASS"]) && v["required"]) {
        this.Params.set(k, v);
      }
    });
    // optional IMPORT
    paramsSorted.forEach((v, k) => {
      if (["I"].includes(v["PARAMCLASS"]) && !v["required"]) {
        this.Params.set(k, v);
      }
    });

    // required CHANGING
    paramsSorted.forEach((v, k) => {
      if (["C"].includes(v["PARAMCLASS"]) && v["required"]) {
        this.Params.set(k, v);
      }
    });
    // optional CHANGING
    paramsSorted.forEach((v, k) => {
      if (["C"].includes(v["PARAMCLASS"]) && !v["required"]) {
        this.Params.set(k, v);
      }
    });

    // required TABLE
    paramsSorted.forEach((v, k) => {
      if (["T"].includes(v["PARAMCLASS"]) && v["required"]) {
        this.Params.set(k, v);
      }
    });
    // optional TABLE
    paramsSorted.forEach((v, k) => {
      if (["T"].includes(v["PARAMCLASS"]) && !v["required"]) {
        this.Params.set(k, v);
      }
    });

    // EXPORTING
    paramsSorted.forEach((v, k) => {
      if (v["PARAMCLASS"] == "E") {
        this.Params.set(k, v);
      }
    });

    const result = {
      parameters: this.Params,
      fields: this.Fields,
      stat: param_type_stat,
    };

    await this.client.close();

    const writer = new Writer(this.RFM_NAME);

    for (const k in param_type_stat) {
      let name;
      if (k === CN.PARAMTYPE_VAR) {
        name = "Variables ";
      } else if (k === CN.PARAMTYPE_STRUCT) {
        name = "Structures";
      } else if (k === CN.PARAMTYPE_TABLE) {
        name = "Tables    ";
      } else if (k === CN.PARAMTYPE_EXC) {
        name = "Exceptions";
      } else throw `Unknown parameter type : ${k}`;
      writer.write(`// ${name}: ${param_type_stat[k]}`);
    }
    writer.write();

    writer.write(`let params = {`);
    writer.addindent();

    // Parameters
    let paramClass: string = "";
    this.Params.forEach((paramData, paramKey) => {
      if (["I", "C", "T"].includes(paramData["PARAMCLASS"])) {
        if (paramClass !== paramData["PARAMCLASS"]) {
          paramClass = paramData["PARAMCLASS"];
          writer.write();
          writer.write(`// ${CN.ParamClassDesc[paramClass]} PARAMETERS`);
          writer.write();
        }
        let paramName = this.JSToPKey(paramKey)[1];
        let left = paramData["required"] ? paramName : `//${paramName}`;
        let right = this.get_param_initializer(paramData);
        let paramText = paramData["PARAMTEXT"];
        if (right.optional) paramText = "[abap] " + paramText;

        if (right.alpha.length > 0) {
          writer.write(
            sprintf(
              "%-33s: %4s, // %s ALPHA=%s %s",
              left,
              right.init,
              right.abaptype,
              right.alpha,
              paramText
            )
          );
        } else {
          writer.write(
            sprintf(
              "%-33s: %4s, // %s %s",
              left,
              right.init,
              right.abaptype,
              paramText
            )
          );
        }
      }
    });
    writer.deindent();
    writer.write(`};`);
    writer.write();
    writer.write(`result = await client.call("${this.RFM_NAME}", params);`);

    // Parameters' data structures
    paramClass = "";
    this.Params.forEach((paramData, paramKey) => {
      if (
        paramData["paramType"] !== "var" &&
        [
          CN.PARAMCLASS_IMPORT,
          CN.PARAMCLASS_CHANGING,
          CN.PARAMCLASS_TABLE,
        ].includes(paramData["PARAMCLASS"])
      ) {
        if (paramClass !== paramData["PARAMCLASS"]) {
          paramClass = paramData["PARAMCLASS"];
          writer.write();
          writer.write("//");
          writer.write(`// ${CN.ParamClassDesc[paramClass]} PARAMETERS`);
          writer.write("//");
        }
        let paramName = this.JSToPKey(paramKey)[1];

        writer.write();
        if (paramData["fieldKey"]) {
          writer.write(
            `// ${paramName} ${paramData["fieldKey"]} ${paramData["PARAMTEXT"]}`
          );
        } else {
          writer.write(
            `// (n) ${paramName} ${paramData["nativeKey"]} ${paramData["PARAMTEXT"]}`
          );
        }
        writer.write();

        let left = paramName;
        let right = this.get_param_initializer(paramData);
        if (right.alpha.length > 0) {
          writer.write(
            sprintf(
              "%-33s: %4s, // %s ALPHA=%s %s",
              left,
              right.init,
              right.abaptype,
              right.alpha,
              paramData["PARAMTEXT"]
            )
          );
        } else {
          writer.write(
            sprintf(
              "let %-33s = %4s; // %s %s",
              left,
              right.init,
              right.abaptype,
              "PARAMTEXT" in paramData ? paramData["PARAMTEXT"] : "no text"
            )
          );
        }
        if (
          [CN.PARAMTYPE_STRUCT, CN.PARAMTYPE_TABLE].includes(
            paramData["paramType"]
          )
        ) {
          writer.write();
          writer.write(`let ${right.abaptype.replace(/\//g, "_")} = {`);
          writer.addindent();

          const structData = this.Fields.get(paramData["fieldKey"]) as object;

          (Object.keys(structData) as Array<string>)
            .sort()
            .forEach((fieldName) => {
              let left = fieldName.replace(/\//g, "_");
              let fieldData = structData[fieldName];

              let right = this.get_field_initializer(fieldData);
              if (right.alpha.length > 0) {
                writer.write(
                  sprintf(
                    "%-33s: %4s, // %s ALPHA=%s %s",
                    left,
                    right.init,
                    `${right.abaptype} (${right.leng})`,
                    right.alpha,
                    "FIELDTEXT" in fieldData["text"]
                      ? fieldData["text"]["FIELDTEXT"]
                      : "no text"
                  )
                );
              } else {
                writer.write(
                  sprintf(
                    "%-33s: %4s, // %s %s",
                    left,
                    right.init,
                    `${right.abaptype} (${right.leng})`,
                    "FIELDTEXT" in fieldData["text"]
                      ? fieldData["text"]["FIELDTEXT"]
                      : "no text"
                  )
                );
              }
            });

          writer.deindent();
          writer.write(`};`);
          writer.write();
        }
      }
    });

    if (options["saveJS"]) {
      writer.save();
    } else if (options["quiet"] === false) {
      console.log(writer.text);
    }

    if (options["cacheMetadata"]) {
      RfmParserUtils.saveMap(this.Params, "params.json");
      RfmParserUtils.saveMap(this.Fields, "fields.json");
    }
    return result;
  }

  get_text(dfies) {
    const TEXT_FIELDS = [
      "FIELDTEXT",
      "REPTEXT",
      "SCRTEXT_S",
      "SCRTEXT_M",
      "SCRTEXT_L",
    ];
    const text = {};
    TEXT_FIELDS.forEach((t) => {
      if (dfies[t].length > 0) text[t] = dfies[t];
    });
    return text;
  }

  annotation(dfies) {
    if (Array.isArray(dfies)) {
      // structure, table
      let result = {};
      dfies.forEach((field) => {
        // skip meta elements like .INCLUDE ...
        if (!!field.INTTYPE && !(".INCLUDE" in field)) {
          result[field.FIELDNAME] = this.xmarkup(field);
        }
      });
      return result;
    } else {
      // variable
      if ("FIELDNAME" in dfies) {
        // ddic type
        return this.xmarkup(dfies);
      }
      // native ABAP type
      else return dfies;
    }
  }

  xmarkup(dfies) {
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

    const BINARY_VALUES = ["", "X"];

    const markup = { format: {}, input: {}, text: this.get_text(dfies) };

    for (let i in dfies) {
      if (FORMAT_FIELDS.includes(i)) {
        if (
          ["DECIMALS", "MASKLEN", "LENG", "OUTPUTLEN", "INTLEN"].includes(i)
        ) {
          if (parseInt(dfies[i]) != 0) {
            markup.format[i] = parseInt(dfies[i]); // dfies[i].strip('0')
          }
          //
        } else if (
          !!dfies[i] &&
          [
            "SIGN",
            "MASK",
            "LTRFLDDIS",
            "LOWERCASE",
            "REFTABLE",
            "REFFIELD",
          ].includes(i)
        ) {
          markup.format[i] = dfies[i];
          //
        } else {
          markup.format[i] = dfies[i];
        }
      } else if (!!dfies[i] && INPUT_FIELDS.includes(i)) {
        markup.input[i] = dfies[i];
      }
    }
    if (!markup.format["DOMNAME"]) delete markup.format["DOMNAME"];
    if (!markup.format["ROLLNAME"]) delete markup.format["ROLLNAME"];

    if (Object.keys(markup.input).length === 0) {
      delete markup.input;
    }

    if (dfies.LFIELDNAME !== dfies.FIELDNAME) {
      markup.format["LFIELDNAME"] = dfies.LFIELDNAME;
    }

    return markup;
  }
  FKeyToJS(p) {
    return `${p.TABNAME} ${p.FIELDNAME}`.trim();
  }

  JSToFKey(fieldKey) {
    let [TABNAME, FIELDNAME] = fieldKey.split();
    if (FIELDNAME === undefined) FIELDNAME = "";
    return [TABNAME, FIELDNAME];
  }

  PKeyToJS(p) {
    return `${p.FUNCNAME} ${p.PARAMETER}`.trim();
  }
  JSToPKey(paramKey) {
    return paramKey.split(" ");
  }
}

const log = (...text) => {
  console.log(...text);
};

export class RfmParserUtils {
  static saveMap(m: Map<String, object>, fileName) {
    const ms = JSON.stringify(Object.fromEntries(m), null, "\t");
    const stream = fs.createWriteStream(fileName);
    stream.once("open", () => {
      stream.write(ms);
      stream.end();
    });
  }

  static deleteFile(...files) {
    const args = [...files];
    try {
      args.forEach((F) => {
        if (Array.isArray(F)) {
          F.forEach((fn) => fs.unlinkSync(fn));
        } else {
          fs.unlinkSync(F);
        }
      });
    } catch (ex) {
      // file not found
    }
  }
}
