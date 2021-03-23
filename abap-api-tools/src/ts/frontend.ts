// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

import chalk from "chalk";
import path from "path";
import { sprintf } from "sprintf-js";

import {
  EmptyObject,
  Writer,
  isEmpty,
  log,
  fileLoad,
  makeDir,
  rmDir,
} from "./utils";

import {
  ParamClass,
  ParamClassDesc,
  ParamType,
  ValueInput,
  Tagname,
  DefaultFolder,
} from "./constants";

import {
  ParameterType,
  FieldType,
  HelpsCatalogType,
  DescriptorsCatalogType,
  FieldsCatalogType,
  AnnotationsType,
  annotations_read,
  StructureType,
} from "./backend";

import { ElementaryHelpType, EHDescriptorType } from "abap-value-help";

import { RfcStructure, RfcTable } from "node-rfc";

import { Command, Arguments, Signature } from "./abap";

interface IElementaryHelp {
  id: string;
  title: string;
  selectionFields: RfcStructure[]; // FieldType[];
  selectionParameters: string[];
  blacklisted: boolean;
}

type ParamInializer = {
  text: string;
  leng: string;
  abaptype: string;
  init: string | number;
  required: boolean;
  alpha: string;
  mid: string;
};

type FieldInitializer = {
  abaptype: string;
  init: string | number;
  alpha: string;
  mid: string;
};

type ElementJS = {
  tag: string;
  required: boolean;
  shlp?: { type: string; id: string };
  bind: string;
  label: string;
  type: string;
  abap: Record<string, string>;
  format: string;
};

type ElementMarkup = { label?: string; abap?: string; shlp?: string };

type ElementHTML = {
  markup: ElementMarkup;
  html: string;
};

// yaml config files

export type AbapConfigType = Record<
  string,
  {
    type: string;
    format: string;
    tag: string;
    initial: string | number;
    comment: string;
  }
>;

export type UiConfigTableType = {
  header?: string;
  header_row?: string;
  body?: string;
  row: string;
  footer?: string;
};

export type UiConfigType = Record<string, string | UiConfigTableType>;

export type FrontendResultType = Record<string, { js: string; html?: string }>;
export class Frontend {
  private api_name: string;
  private apilist: string[];
  private abap: AnnotationsType;
  private argv: Arguments;

  private configPath: {
    ui: string;
    uiLocal: boolean;
    abap: string;
    abapLocal: boolean;
  } = { ui: "", uiLocal: false, abap: "", abapLocal: false };
  private uiConfig: UiConfigType = {};
  private abapConfig: AbapConfigType = {};

  constructor(api_name: string, abap: AnnotationsType, argv: Arguments) {
    this.abap = abap;
    this.argv = argv;
    this.api_name = api_name;
    this.apilist = argv.apilist ? argv.apilist[api_name] : [];

    // abap
    if (!this.abap || isEmpty(this.abap.parameters)) {
      try {
        this.abap = annotations_read(this.api_name, argv);
      } catch (ex) {
        log.info(ex);
        throw new Error(
          `Annotations not found for ${this.api_name}, run: abap ${argv.cmd} ${Command.get} <destination> ${this.api_name}\n`
        );
      }
    }

    // field names sort
    if (argv["sort-fields"]) {
      for (const struct_name of Object.keys(this.abap.fields)) {
        const Structure = this.abap.fields[struct_name];
        if (Structure.format) continue;
        this.abap.fields[struct_name] = Object.keys(Structure)
          .sort()
          .reduce(
            (acc, key) => ({
              ...acc,
              [key]: Structure[key],
            }),
            {}
          );
      }
    }

    if (argv.ui) {
      if (typeof argv.ui === "string") {
        // ui configuration
        try {
          // local ui first
          this.configPath.ui = path.join(
            DefaultFolder.userConfig,
            `${argv.ui}.yaml`
          );
          this.uiConfig = fileLoad(this.configPath.ui) as UiConfigType;
          this.configPath.uiLocal = true;
          log.debug(`local ui configuration ${argv.ui}`);
        } catch (ex) {
          if (ex.code !== "ENOENT") throw ex; // ignore file not found error
        }

        // default ui 2nd
        if (isEmpty(this.uiConfig)) {
          this.configPath.ui = path.join(
            DefaultFolder.configuration,
            "ui",
            `${argv.ui}.yaml`
          );
          this.uiConfig = fileLoad(this.configPath.ui) as UiConfigType;
          log.debug(`default ui configuration ${argv.ui}`);
        }

        try {
          // local abap first
          this.configPath.abap = path.join(
            DefaultFolder.userConfig,
            `${argv.ui}-abap.yaml`
          );
          this.abapConfig = fileLoad(this.configPath.abap) as AbapConfigType;
          this.configPath.abapLocal = true;
          log.debug(`local abap configuration ${argv.ui}`);
        } catch (ex) {
          if (ex.code !== "ENOENT") throw ex; // ignore file not found error
        }

        // default abap 2nd
        if (isEmpty(this.abapConfig)) {
          this.configPath.abap = path.join(
            DefaultFolder.configuration,
            "ui",
            `${argv.ui}-abap.yaml`
          );
          this.abapConfig = fileLoad(this.configPath.abap) as AbapConfigType;
          log.debug(`default abap configuration ${argv.ui}`);
        }
      } else {
        // ui configuration passed by CLI api
        this.uiConfig = argv.ui.ui;
        if (argv.ui.abap) {
          this.abapConfig = argv.ui.abap;
        }
      }
    }

    if (isEmpty(this.abapConfig)) {
      // default abap
      this.configPath.abap = path.join(
        DefaultFolder.configuration,
        "abap.yaml"
      );
      this.abapConfig = fileLoad(this.configPath.abap) as AbapConfigType;
      log.debug(`default abap.yaml`);
    }

    if (isEmpty(this.abapConfig)) {
      throw new Error(`Abap configuration not found for ${this.argv.ui}`);
    }

    log.debug(
      `frontend: ${this.api_name} ui: ${this.argv.ui} configUi: ${this.configPath.ui} configAbap: ${this.configPath.abap}`
    );
  }

  get_field_initializer(Field: FieldType): FieldInitializer {
    const result: FieldInitializer = {
      abaptype: Field.format.DATATYPE,
      init: "",
      alpha: "",
      mid: "",
    };
    let leng = "";
    if (Field.format.LENG) {
      leng = `${Field.format.LENG}`;
    }
    if (Field.format.DECIMALS) {
      leng += `.${Field.format.DECIMALS}`;
    }
    if (result.abaptype in this.abapConfig) {
      result.init = this.abapConfig[result.abaptype].initial;
      if (Field.input) {
        if (Field.input.CONVEXIT) result.alpha = Field.input.CONVEXIT;
        if (Field.input.MEMORYID) result.mid = Field.input.MEMORYID;
      }
    } else {
      result["init"] = '"native ABAP type"';
    }
    if (leng) {
      result["abaptype"] += ` (${leng})`;
    }
    return result;
  }

  get_param_initializer(
    Param: ParameterType,
    Field: FieldType | EmptyObject
  ): ParamInializer {
    const result: ParamInializer = {
      text: Param.PARAMTEXT,
      leng: "",
      abaptype: "",
      init: "",
      required: false,
      alpha: "",
      mid: "",
    };
    result.abaptype = Param.TABNAME + (Param.FIELDNAME ? Param.FIELDNAME : "");
    switch (Param.paramType) {
      case ParamType.table:
        result.init = `[]`;
        break;
      case ParamType.struct:
        result.init = `{}`;
        break;
      case ParamType.var:
        if (!isEmpty(Field)) {
          result.abaptype = Field.format.DATATYPE;
          result.leng = `${Field.format.LENG}`;
          if (Field.input) {
            if (Field.input.CONVEXIT) result.alpha = Field.input.CONVEXIT;
            if (Field.input.MEMORYID) result.mid = Field.input.MEMORYID;
          }
        } else {
          if (!Param.nativeKey) {
            throw new Error(
              `Native key missing for ${Param.paramName} of ${Param.functionName}`
            );
          }
          result.abaptype = Param.nativeKey;
        }

        if (result.abaptype in this.abapConfig) {
          result.init = this.abapConfig[result.abaptype].initial;
        } else {
          result.init = `"native ABAP type"`;
        }
        if (result.leng) {
          result.abaptype += ` (${result.leng})`;
        }
        if (Param.default) {
          result.init = Param.default;
        }
        if (typeof result.init === "string") {
          if (!result.init) {
            result.init = `""`;
          }
        }
        break;
      default:
        throw `Unknown parameter type ${Param.paramType}`;
    }
    return result;
  }

  parse(): FrontendResultType {
    log.info(
      `\nfrontend: ${this.argv.ui || ""} using ${
        this.configPath.abapLocal ? this.configPath.abap : "default abap.yaml"
      }${
        this.argv.ui
          ? " and " +
            (this.configPath.uiLocal ? this.configPath.ui : "default ui.yaml")
          : ""
      }; field names sorted: ${this.argv["sort-fields"] ? "yes" : "no"}\n`
    );

    const result: FrontendResultType = {};

    for (const rfm_name of this.apilist) {
      // check local annotations
      if (!this.abap.parameters[rfm_name]) {
        log.info(chalk.red(`${rfm_name} annotations not found`));
        continue;
      }

      // the longest parameter name
      const rfm = this.abap.parameters[rfm_name];
      let paramNameLen = 0;
      for (const [, Param] of Object.entries(rfm)) {
        if (Param.paramName.length > paramNameLen)
          paramNameLen = Param.paramName.length;
      }
      paramNameLen += 4; // for leading comment of optional parameters

      //
      // rfm header
      //

      log.info(chalk(rfm_name));

      // writers

      log.debug(
        "output:",
        this.argv.output,
        "api:",
        this.api_name,
        "rfm:",
        rfm_name
      );

      const fileName = path.join(
        this.argv.output || "",
        this.api_name,
        rfm_name.replace(/\//g, "_").toLowerCase()
      );

      const jsWriter = new Writer(`${fileName}.js`, this.argv.save as boolean);

      let htmlWriter: Writer | undefined;

      //
      // javascript header
      //

      jsWriter.write(
        `//\n// ${rfm_name} ${JSON.stringify(this.abap.stat[rfm_name])
          .replace(/"|{|}/g, "")
          .replace(/,/g, "  ")
          .replace(/:/g, ": ")}\n//\n// ${Signature}\n//\n`
      );
      jsWriter.write("// prettier-ignore");
      jsWriter.write(`const parameters = {`);

      if (this.argv.ui) {
        htmlWriter = new Writer(`${fileName}.html`, this.argv.save as boolean);
        //
        // html header
        //

        htmlWriter.write(
          `<!--\n${rfm_name} ${JSON.stringify(this.abap.stat[rfm_name])
            .replace(/"|{|}/g, "")
            .replace(/,/g, "  ")
            .replace(/:/g, ": ")}\n\n${Signature}\n-->`
        );
      }

      //
      // parameters
      //

      let paramClass = "";
      for (const [, Param] of Object.entries(rfm)) {
        //
        // param class header
        //

        if (paramClass !== Param.PARAMCLASS) {
          paramClass = Param.PARAMCLASS;
          jsWriter.write(`\n// ${ParamClassDesc[paramClass]} PARAMETERS\n`);
        }

        //
        // parameter init
        //

        let paramText = Param.PARAMTEXT
          ? Param.PARAMTEXT
          : `no text (${this.argv.lang})`;
        let left = Param.paramName;

        if (
          !Param.required ||
          Param.PARAMCLASS === ParamClass.export ||
          Param.paramType === ParamType.exception
        ) {
          left = `// ${left}`;
        }

        const Field = this.getField(Param, this.abap.fields);

        if (Param.paramType === ParamType.exception) {
          jsWriter.write(sprintf("%-33s  // %s", left, paramText));
        } else {
          const right = this.get_param_initializer(Param, Field);
          if (right.mid) paramText += ` SU3=${right.mid}`;
          if (right.alpha) paramText = `ALPHA=${right.alpha} ` + paramText;
          jsWriter.write(
            sprintf(
              `%-${paramNameLen}s: %12s, // %s %s`,
              left,
              right.init,
              right.abaptype,
              paramText
            )
          );
        }
      }
      jsWriter.write("};");
      jsWriter.write(
        `\nconst result = await client.call("${rfm_name}", parameters);`
      );

      //
      // parameters' data structures
      //

      paramClass = "";
      for (const [param_name, Param] of Object.entries(rfm)) {
        if (Param["paramType"] === ParamType.exception) {
          continue;
        }

        //
        // param class header
        //
        if (paramClass !== Param.PARAMCLASS) {
          paramClass = Param.PARAMCLASS;
          jsWriter.write("\n//");
          jsWriter.write(`// ${ParamClassDesc[paramClass]} PARAMETERS`);
          jsWriter.write("//\n");

          if (htmlWriter) {
            htmlWriter.write("\n<!--");
            htmlWriter.write(`${ParamClassDesc[paramClass]} PARAMETERS`);
            htmlWriter.write("-->\n");
          }
        }

        const Field = this.getField(Param, this.abap.fields);

        // currency or quantity keys are referenced by respective currency and quantity fields
        if (
          Field.format &&
          ["CUKY", "UNIT"].includes(Field.format["DATATYPE"])
        ) {
          continue;
        }

        // html fields only for variables
        if (Param.paramType === ParamType.var) {
          if (htmlWriter) {
            const field = this.html_field(Param, Field);
            if (field) {
              // htmlWriter.write(`${param_name} ${field.html}`);
              htmlWriter.write(`${field.html}\n`);
            }
          }
          continue;
        }

        if (!isEmpty(Field)) {
          jsWriter.write(
            `// ${Param.TABNAME} ${Param.FIELDNAME || ""} ${Param["PARAMTEXT"]}`
          );

          if (htmlWriter) {
            htmlWriter.write(
              `<!-- Parameter: ${param_name} structure: ${Param.TABNAME} ${
                Param.FIELDNAME || ""
              } ${Param.PARAMTEXT} -->`
            );
          }
        } else {
          throw new Error(
            `Internal parsing error, rfm: ${rfm_name} parameter ${param_name}`
          );
        }

        if (Param["paramType"] === ParamType.struct) {
          this.structure_init(
            Param,
            Field as StructureType,
            jsWriter,
            htmlWriter
          );
        }

        if (Param["paramType"] === ParamType.table) {
          this.table_init(Param, Field as StructureType, jsWriter, htmlWriter);
          this.structure_init(
            Param,
            Field as StructureType,
            jsWriter,
            htmlWriter
          );
        }
      }

      result[rfm_name] = { js: jsWriter.save() };
      if (htmlWriter) result[rfm_name].html = htmlWriter.save();
    }

    if (this.argv.ui && this.argv.helps) {
      if (!this.abap.helps || !this.abap.descriptors) {
        log.error("\nHelps or Descriptors annotations missing");
      } else {
        log.info(`\nValue Helps\n`);
        result.valueHelps = this.valueHelps();
      }
    }

    return result;
  }

  valueHelps(): { js: string; html?: string } {
    const outDir = path.join(
      this.argv.output || "",
      this.api_name,
      "valueHelps"
    );

    if (this.argv.save) {
      rmDir(outDir);
      makeDir(outDir);
    }

    function newWriter(suffix: "js" | "html", shlpId, title, save: boolean) {
      const writer = new Writer(
        path.join(
          outDir,
          `${shlpId
            .toLowerCase()
            .replace(/\//g, "_")
            .replace(" ", "_")}.${suffix}`
        ),
        save
      );
      writer.write(
        suffix === "js"
          ? `// ${shlpId} ${title} : ${Signature}\n`
          : `<!-- ${shlpId} ${title} : ${Signature} -->}\n`
      );

      if (suffix === "html") return writer;
      writer.write(
        `const helpSign = [{ id: 'I', name: 'Include' }, { id: 'E', name: 'Exclude' }];
const helpOption = [
  { id: 'EQ', name: 'is' },
  { id: 'NE', name: 'is not' },
  { id: 'GT', name: 'greater than' },
  { id: 'LT', name: 'less than' },
  { id: 'GE', name: 'not less' },
  { id: 'LE', name: 'not greater' },
  { id: 'BT', name: 'between' },
  { id: 'NB', name: 'not between' },
  { id: 'CP', name: 'with pattern' },
  { id: 'NP', name: 'w/o pattern' }
];\n`
      );
      return writer;
    }

    function selectionParams(jsWriter, FIELDDESCR: RfcTable): void {
      jsWriter.write(`const selectParams = [`);
      jsWriter.addindent();
      for (const field of FIELDDESCR) {
        jsWriter.write(`{`);
        jsWriter.addindent();
        for (const k of ["FIELDNAME", "DATATYPE", "LENG", "DECIMALS"]) {
          jsWriter.write(
            `${k}: ${
              typeof field[k] === "string" ? '"' + field[k] + '"' : field[k]
            },`
          );
        }
        for (const k of ["MEMORYID", "PARVA"]) {
          if (k in field && field[k])
            jsWriter.write(
              `${k}: ${
                typeof field[k] === "string" ? '"' + field[k] + '"' : field[k]
              }`
            );
        }

        jsWriter.deindent();
        jsWriter.write(`},`);
      }
      jsWriter.deindent();
      jsWriter.write(`];`);
    }

    let JS = "",
      HTML = "";

    //
    // html header
    //

    for (const [shlp_key, shlp] of Object.entries(
      this.abap.helps as HelpsCatalogType
    )) {
      if (shlp_key.substr(0, 2) !== "SH") {
        continue;
      }

      if (shlp.elementaryHelps) {
        // html
        const htmlWriter = newWriter(
          "html",
          shlp_key,
          `${shlp.title} (${shlp.elementaryHelps.length})`,
          this.argv.save as boolean
        );
        htmlWriter.write(
          `<ui-combo label=${shlp.title} option.bind="helpSelector"></ui-combo>`
        );
        HTML += htmlWriter.save();

        // js
        const jsWriter = newWriter(
          "js",
          shlp_key,
          `${shlp.title} (${shlp.elementaryHelps.length})`,
          this.argv.save as boolean
        );
        jsWriter.write("const helpSelector = [");
        jsWriter.addindent();
        shlp.elementaryHelps.map((eh) =>
          jsWriter.write(JSON.stringify(eh) + ",")
        );
        jsWriter.deindent();
        jsWriter.write("];");
        JS += jsWriter.save();

        for (const elem of shlp.elementaryHelps) {
          const shlpId = Object.keys(elem)[0];
          const EH = this.elementaryHelp(shlpId);

          // html
          const htmlWriter = newWriter(
            "html",
            shlpId,
            elem[shlpId].title,
            this.argv.save as boolean
          );
          EH.selectionParameters.map((sp) => htmlWriter.write(sp));
          HTML += htmlWriter.save();
          // js
          const jsWriter = newWriter(
            "js",
            shlpId,
            elem[shlpId].title,
            this.argv.save as boolean
          );
          selectionParams(jsWriter, EH.selectionFields);

          JS += jsWriter.save();
        }
      } else {
        const htmlWriter = newWriter(
          "html",
          shlp_key,
          shlp.title,
          this.argv.save as boolean
        );
        const jsWriter = newWriter(
          "js",
          shlp_key,
          shlp.title,
          this.argv.save as boolean
        );
        const EH = this.elementaryHelp(shlp_key);
        EH.selectionParameters.map((sp) => htmlWriter.write(sp));
        HTML += htmlWriter.save();
        selectionParams(jsWriter, EH.selectionFields);
        JS += jsWriter.save();
      }
    }

    return { js: JS, html: HTML };
  }

  elementaryHelp(shlp_key: string): IElementaryHelp {
    const D = this.abap.descriptors as DescriptorsCatalogType;
    if (!D[shlp_key]) {
      throw new Error(`Value Help Descriptor not found: ${shlp_key}`);
    }
    const VH = D[shlp_key] as EHDescriptorType;

    const selection = VH.selectionDescriptor as ElementaryHelpType;

    const result: IElementaryHelp = {
      id: shlp_key,
      title: selection.INTDESCR.DDTEXT as string,
      selectionFields: [] as RfcStructure[], // FieldType[],
      selectionParameters: [] as string[],
      blacklisted: false,
    };

    if (VH.blacklist) {
      result.blacklisted = true;
      log.debug(`Value Help black-listed: ${shlp_key}`);
      return result;
    }

    for (const field of selection.FIELDDESCR) {
      const Parameter: ParameterType = {
        paramType: ParamType.struct,
        PARAMCLASS: "paramClass",
        TABNAME: field.TABNAME as string,
        FIELDNAME: field.FIELDNAME as string,
        PARAMTEXT: field.FIELDTEXT as string,
        functionName: `valueHelp`,
        paramName: `searchParamLow`,
        required: "",
        //default?: string;
        // nativeKey?: string;
      };

      const html_field = this.html_field(
        Parameter,
        Frontend.dfiesFieldToABAP(field),
        field.FIELDNAME as string
      );

      result.selectionFields.push(field);
      result.selectionParameters.push(html_field.html);
    }

    return result;
  }

  static dfiesFieldToABAP(field: RfcStructure): FieldType {
    const result: FieldType = {
      format: {
        DATATYPE: field.DATATYPE as string,
        INTTYPE: field.INTTYPE as string,
        DOMNAME: field.DOMNAME as string,
        ROLLNAME: field.ROLLNAME as string,
        LENG: field.LENG as number,
        DECIMALS: field.DECIMALS as number,
        SIGN: field.SIGN as string,
        MASK: field.MASK as string,
        LTRFLDDIS: field.LTRFLDDIS as string,
        LOWERCASE: field.LOWERCASE as string,
        REFTABLE: field.REFTABLE as string,
        REFFIELD: field.REFFIELD as string,
        OUTPUTLEN: field.OUTPUTLEN as number,
      },
      input: {
        //CONVEXIT: field.CONEVEXIT as string,
        //MEMORYID: field.MEMORYID as string,
        //shlpId: field.shlpId as string,
      },
      text: {
        FIELDTEXT: field.FIELDTEXT as string,
        REPTEXT: field.REPTEXT as string,
        SCRTEXT_S: field.SCRTEXT_S as string,
        SCRTEXT_M: field.SCRTEXT_M as string,
        SCRTEXT_L: field.SCRTEXT_L as string,
      },
    };

    result.input = {};
    if (field.CONVEXIT) result.input.CONVEXIT = field.CONVEXIT as string;
    if (field.MEMORYID) result.input.MEMORYID = field.MEMORYID as string;
    if (field.shlpId) result.input.shlpId = field.shlpId as string;
    if (field.valueInputType) {
      result.format.valueInputType = field.valueInputType as string;
      if (field.valueInputType === ValueInput.binary) {
        if (!field.customCheckbox) {
          delete result.input.shlpId;
        }
      }
    }
    if (isEmpty(result.input)) delete result.input;

    if (field.valueInputType) {
      result.format.valueInputType = field.valueInputType as string;
    }

    return result;
  }

  table_init(
    Param: ParameterType,
    _Field: StructureType,
    jsWriter: Writer,
    htmlWriter?: Writer
  ): void {
    jsWriter.write(`const ${Param.paramName}= [];`);

    if (!htmlWriter || !this.uiConfig.table) return;

    const element_template = {
      ...(this.uiConfig.table as UiConfigTableType),
    };

    htmlWriter.write();
    if (isEmpty(element_template)) {
      htmlWriter.write(
        `<!-- Table structure not defined in: ${this.configPath.ui} -->`
      );
      return;
    }

    // header
    if (element_template.header) {
      element_template.header = element_template.header
        .replace(/~bind/, Param.paramName)
        .replace(/~title/, Param.PARAMTEXT);

      htmlWriter.write(element_template.header);
    }
    // header row
    if (element_template.header_row) {
      for (const [field_name, Field] of Object.entries(_Field)) {
        const field = this.html_field(Param, Field, field_name);
        if (!field) continue; // curr, uom
        let column = element_template.header_row
          .replace("~bind", field_name)
          .replace(/~label/, field.markup.label as string)
          .replace(/~abap/, field.markup.abap as string);
        if (field.markup["shlp"]) {
          column = column.replace(/~shlp/, field.markup["shlp"]);
        } else {
          // remove shlp
          column = column.replace(/\s+\S*"~shlp"/, "");
        }
        htmlWriter.write(column);
      }
    }

    // body
    if (element_template.body) {
      element_template.body = element_template.body
        .replace(/~bind/, Param.paramName)
        .replace(/~title/, Param.PARAMTEXT);
      htmlWriter.write(element_template.body);
    }

    // row
    for (const [field_name, Field] of Object.entries(_Field)) {
      const field = this.html_field(Param, Field, field_name);
      if (!field) continue; // curr, uom
      let column = element_template.row
        .replace("~bind", field_name)
        .replace(/~label/, field.markup.label as string)
        .replace(/~abap/, field.markup.abap as string);
      if (field.markup["shlp"]) {
        column = column.replace(/~shlp/, field.markup["shlp"]);
      } else {
        // remove shlp
        column = column.replace(/\s+\S*"~shlp"/, "");
      }
      htmlWriter.write(column);
    }

    // footer
    if (element_template.footer) {
      htmlWriter.write(element_template.footer);
    }
  }

  structure_init(
    Param: ParameterType,
    _Field: StructureType,
    jsWriter: Writer,
    htmlWriter?: Writer
  ): void {
    jsWriter.write("\n// prettier-ignore");
    jsWriter.write(`const ${Param["paramName"]}= {`);
    jsWriter.addindent();
    for (const [field_name, Field] of Object.entries(_Field)) {
      const right = this.get_field_initializer(Field);
      let field_text: string;
      if (Field.text.FIELDTEXT) {
        field_text = Field.text.FIELDTEXT;
      } else {
        field_text = `Text not found`;
        // throw new Error(
        //   `Text not found for rfm parameter: ${Param.paramName} field: ${field_name}`
        // );
      }
      let left = field_name.replace("/", "_");
      if (!left) {
        left = `""`; // line type table
        field_text += ` [line type table]`;
      }
      if (right.mid) field_text += ` SU3=${right.mid}`;
      if (right.alpha) field_text = `ALPHA=${right.alpha} ` + field_text;
      jsWriter.write(
        sprintf(
          "%-33s: %4s, // %s %s",
          left,
          right.init,
          right.abaptype,
          field_text
        )
      );
      if (htmlWriter) {
        const field = this.html_field(Param, Field, field_name);
        if (field) {
          htmlWriter.write(`\n${field.html}`);
        }
      }
    }
    jsWriter.deindent();
    jsWriter.write("};");
    jsWriter.write();
    if (htmlWriter) htmlWriter.write();
  }

  field_length(Field: FieldType): string {
    let lange: string;
    if (Field.format.DECIMALS) {
      if (Field.format.DATATYPE === "FLTP")
        // abap len 16.16, is actually 1.15
        lange = "1.15";
      else {
        let decrement: number;
        if (["DEC", "CURR"].includes(Field.format.DATATYPE)) {
          // abap int part = field lange - decimal point
          decrement = 1;
        } else if (Field.format.DATATYPE === "QUAN") {
          // abap int part = field lange - decimal places
          decrement = Field.format.DECIMALS;
        } else {
          decrement = 0;
        }
        lange = `${Field.format.LENG - decrement}.${Field.format.DECIMALS}`;
      }
    } else {
      // no decimals
      if (Field.format.LENG) lange = `${Field.format.LENG}`;
      else lange = `-1`; // indicate string element, has no fixed lange
    }
    // sign
    if (Field.format.SIGN) lange = "+" + lange;
    return lange;
  }

  element_js(
    Param: ParameterType,
    Field: FieldType | EmptyObject,
    field_name = "",
    tag = ""
  ): ElementJS {
    const abapType: string = Param.nativeKey
      ? Param.nativeKey
      : Field.format.DATATYPE;

    if (!this.abapConfig[abapType]) {
      throw new Error(
        `ABAP data type ${abapType} not found in ui configuration: ${this.argv.ui}`
      );
    }

    const ddic = this.abapConfig[abapType];

    const result: ElementJS = {
      tag: tag || ddic.tag,
      bind: field_name ? `${Param.paramName}.${field_name}` : Param.paramName,
      label: field_name
        ? ("text" in Field && Field.text.FIELDTEXT) || ""
        : Param.PARAMTEXT,
      type: ddic.type,
      abap: {
        type: abapType,
      },
      required: false,
      format: "",
    };

    if (ddic.format) result.format = ddic.format;

    // checkbox and combo tags for binary and list value inputs
    if (!isEmpty(Field) && Field.format.valueInputType) {
      if (Field.format.valueInputType === ValueInput.binary) {
        result.format = "boolean";
        result.tag = Tagname.binary;
      } else if (Field.format.valueInputType === ValueInput.list) {
        result.tag = Tagname.list;
      }
    }

    // required field
    if (Param.required) {
      // todo: eventually && Param.paramType === ParamType.var
      result.required = true;
    }

    // currency or quantity need the UoM or currency key reference
    if (!isEmpty(Field) && ["CURR", "QUAN"].includes(Field.format.DATATYPE)) {
      if (Field.format.REFFIELD) {
        result.abap.unit = Field.format.REFFIELD;
      } else {
        result.abap.unit = "!notfound";
        if (Param.functionName === "valueHelp") {
          log.error(
            `${Field.format.DATATYPE} unit not found for ${
              field_name ? field_name : Param.FIELDNAME
            }`
          );
        } else {
          log.error(
            `${Field.format.DATATYPE} unit not found for rfm: ${Param.functionName} parameter: ${Param.paramName}`
          );
        }
      }
    }

    if (!isEmpty(Field)) {
      if (Field.input) {
        // Alpha exit
        if (Field.input.CONVEXIT) {
          result.abap.alpha = Field.input.CONVEXIT;
        }

        // SU3
        if (Field.input.MEMORYID) {
          result.abap.mid = Field.input.MEMORYID;
        }

        // Shlp, not needed for date, time and boolean
        if (
          !(
            ["DATS", "TIMS"].includes(Field.format.DATATYPE) ||
            result.tag === ValueInput.binary
          )
        ) {
          if (Field.input.shlpId) {
            const [stype, sid] = Field.input.shlpId.split(" ");
            result.shlp = { type: stype, id: sid };
          }
        }
      }

      // Field length
      if (
        !(
          ["DATS", "TIMS", "ACCP"].includes(Field.format.DATATYPE) ||
          result.tag === ValueInput.binary
        )
      )
        result.abap.length = this.field_length(Field as FieldType);
    }

    return result;
  }

  element_html(m: ElementJS): ElementHTML {
    // tag
    // bind
    // label
    // type
    // (shlp)
    // (format)

    // abap:
    // type
    // (length)
    // (mid)
    // (shlp)
    // (alpha)

    if (!(m.tag in this.uiConfig)) {
      throw new Error(
        `html element ${m.tag} of ${this.configPath.abap} not found in ${this.configPath.ui}`
      );
    }

    let e = this.uiConfig[m.tag] as string;

    const shlp = m.shlp
      ? JSON.stringify(m.shlp)
          .replace(/"type":/, "type: ")
          .replace(/,"id":/, ", id: ")
          .replace(/"/g, "'")
      : "";

    const abap = JSON.stringify(m.abap)
      .replace(/"(\w+)":/g, "$1:")
      .replace(/"/g, "'")
      .replace(/,/g, ", ");

    e = e
      .replace(/~bind/g, m.bind)
      .replace(/~label/g, m.label)
      .replace(/~abap/g, abap);

    if (shlp) {
      e = e.replace("~shlp", shlp);
    } else {
      // remove shlp
      e = e.replace(/\s+\S*"~shlp"/, "");
    }
    // remove empty lines
    e = e.replace(/^\s*[\r\n]/gm, "");
    // and double spaces
    e = e.replace(/\w[ ]{2,}\w/g, " ");
    return { markup: { label: m.label, abap: abap, shlp: shlp }, html: e };
  }

  html_field(
    Param: ParameterType,
    Field: FieldType | EmptyObject,
    field_name = ""
  ): { markup: ElementMarkup; html: string } {
    // tag
    // bind
    // label
    // type
    // (shlp)
    // (format)

    // abap:
    // type
    // (length)
    // (mid)
    // (shlp)
    // (alpha)

    const element_js = this.element_js(Param, Field, field_name);

    const element = this.element_html(element_js);

    return element;
  }

  getField(
    param: ParameterType,
    fields: FieldsCatalogType
  ): FieldType | EmptyObject {
    if (param.nativeKey) return {};
    if (param.FIELDNAME) return fields[param.TABNAME][param.FIELDNAME];
    return fields[param.TABNAME] as FieldType;
  }
}
