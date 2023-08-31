import chalk from "chalk";
import path from "path";
import { sprintf } from "sprintf-js";
import { EmptyObject, Writer, isEmpty, log, fileLoad } from "./utils";
import { ValueHelpFrontend } from "./valuehelp";

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

import { Command, Arguments, Signature } from "./abap";

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

export type JsHtmlType = { js: string; html?: string };

export type FrontendResultType = Record<string, JsHtmlType>;

export class Frontend {
  private api_name: string;
  private apilist: string[];
  private abap: AnnotationsType;
  private argv: Arguments;
  private flowEcho: boolean;

  private configPath: {
    ui: string;
    uiLocal: boolean;
    abap: string;
    abapLocal: boolean;
  } = { ui: "", uiLocal: false, abap: "", abapLocal: false };
  private uiConfig: UiConfigType = {};
  private abapConfig: AbapConfigType = {};

  constructor(context: {
    apiName?: string;
    abap: AnnotationsType;
    argv: Arguments;
  }) {
    this.api_name = context.apiName || "";
    this.abap = context.abap;
    this.argv = context.argv;
    this.flowEcho =
      this.argv.cmd !== Command.call ||
      (this.argv.cmd === Command.call && (this.argv.save || false));
    this.apilist = this.argv.apilist ? this.argv.apilist[this.api_name] : [];

    // abap
    if (
      !this.abap ||
      (isEmpty(this.abap.parameters) && this.argv.cmd !== Command.call)
    ) {
      try {
        this.abap = annotations_read(this.api_name, this.argv);
      } catch (ex) {
        log.info(ex);
        throw new Error(
          `Annotations not found for ${this.api_name}, run: abap ${this.argv.cmd} ${Command.get} <destination> ${this.api_name}\n`
        );
      }
    }

    // field names sort
    if (this.argv["sort-fields"]) {
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

    if (this.argv.ui) {
      if (typeof this.argv.ui === "string") {
        // ui configuration
        try {
          // local ui first
          this.configPath.ui = path.join(
            DefaultFolder.userConfig,
            `${this.argv.ui}.yaml`
          );
          this.uiConfig = fileLoad(this.configPath.ui) as UiConfigType;
          this.configPath.uiLocal = true;
          log.debug(`local ui configuration ${this.argv.ui}`);
        } catch (ex) {
          if ((ex as NodeJS.ErrnoException).code !== "ENOENT") throw ex; // ignore file not found error
        }

        // default ui 2nd
        if (isEmpty(this.uiConfig)) {
          this.configPath.ui = path.join(
            DefaultFolder.configuration,
            "ui",
            `${this.argv.ui}.yaml`
          );
          this.uiConfig = fileLoad(this.configPath.ui) as UiConfigType;
          log.debug(`default ui configuration ${this.argv.ui}`);
        }

        try {
          // local abap first
          this.configPath.abap = path.join(
            DefaultFolder.userConfig,
            `${this.argv.ui}-abap.yaml`
          );
          this.abapConfig = fileLoad(this.configPath.abap) as AbapConfigType;
          this.configPath.abapLocal = true;
          log.debug(`local abap configuration ${this.argv.ui}`);
        } catch (ex) {
          if ((ex as NodeJS.ErrnoException).code !== "ENOENT") throw ex; // ignore file not found error
        }

        // default abap 2nd
        if (isEmpty(this.abapConfig)) {
          this.configPath.abap = path.join(
            DefaultFolder.configuration,
            "ui",
            `${this.argv.ui}-abap.yaml`
          );
          this.abapConfig = fileLoad(this.configPath.abap) as AbapConfigType;
          log.debug(`default abap configuration ${this.argv.ui}`);
        }
      } else {
        // ui configuration passed by CLI api
        this.uiConfig = this.argv.ui.ui;
        if (this.argv.ui.abap) {
          this.abapConfig = this.argv.ui.abap;
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
      if (typeof result.init === "string") {
        result.init = result.init.replace(/~size/, `${leng || "0"}`);
      }
      if (Field.input) {
        if (Field.input.CONVEXIT) result.alpha = Field.input.CONVEXIT;
        if (Field.input.MEMORYID) result.mid = Field.input.MEMORYID;
      }
    } else {
      result.init = '"native ABAP type"';
    }
    if (leng) {
      result.abaptype += ` (${leng})`;
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
    if (this.flowEcho)
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
      //
      // flow: rfm
      //
      log.info(
        chalk(rfm_name),
        this.abap.parameters[rfm_name] ? "" : "RFM w/o parameters"
      );

      // the longest parameter name
      const rfm = this.abap.parameters[rfm_name] || [];
      let paramNameLen = 0;
      for (const [, Param] of Object.entries(rfm)) {
        if (Param.paramName.length > paramNameLen)
          paramNameLen = Param.paramName.length;
      }
      paramNameLen += 4; // "buffer" for leading comment of optional parameters

      log.debug(
        `output: ${this.argv.output} api: ${this.api_name} rfm: ${rfm_name}`
      );

      // writers
      const fileName = path.join(
        this.argv.output || "",
        this.api_name,
        rfm_name.replace(/\//g, "_").toLowerCase()
      );

      //
      // javascript header
      //
      const jsWriter = new Writer({
        fileName:
          this.argv.cmd === Command.call && !this.argv.save
            ? ""
            : `${fileName}.${this.argv.ts ? "ts" : "js"}`,
        echoOnSave: this.argv.cmd === Command.call && !this.argv.save,
      });

      jsWriter.write(
        `//\n// ${rfm_name} ${
          isEmpty(this.abap.stat)
            ? ""
            : JSON.stringify(this.abap.stat[rfm_name])
                .replace(/"|{|}/g, "")
                .replace(/,/g, "  ")
                .replace(/:/g, ": ")
        }\n//\n// ${Signature}\n//\n`
      );
      jsWriter.write("// prettier-ignore");
      jsWriter.write(`const parameters = {`);

      let htmlWriter = {} as Writer;
      if (this.argv.ui) {
        htmlWriter = new Writer({ fileName: `${fileName}.html` }); // , this.argv.save as boolean);
        //
        // html header
        //
        htmlWriter.write(
          `<!-- ${rfm_name} ${JSON.stringify(this.abap.stat[rfm_name])
            .replace(/"|{|}/g, "")
            .replace(/,/g, "  ")
            .replace(/:/g, ": ")}\n\n${Signature} -->\n`
        );
      }

      //
      // flow: parameters
      //
      let paramClass = "";
      for (const [, Param] of Object.entries(rfm)) {
        // param class header
        if (paramClass !== Param.PARAMCLASS) {
          paramClass = Param.PARAMCLASS;
          jsWriter.write(`\n// ${ParamClassDesc[paramClass]} PARAMETERS\n`);
        }

        // parameter init, rfm call
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
        if (Param.paramType === ParamType.exception) {
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

          if (htmlWriter instanceof Writer) {
            htmlWriter.write(
              `<!-- ${ParamClassDesc[paramClass]} PARAMETERS -->\n`
            );
          }
        }

        const Field = this.getField(Param, this.abap.fields);

        // currency or quantity keys are referenced by respective currency and quantity fields
        if (Field.format && ["CUKY", "UNIT"].includes(Field.format.DATATYPE)) {
          continue;
        }

        // html fields only for variables
        if (Param.paramType === ParamType.var) {
          if (htmlWriter instanceof Writer) {
            const field = this.html_field(Param, Field);
            if (field) {
              // htmlWriter.write(`${param_name} ${field.html}`);
              htmlWriter.write(field.html);
              htmlWriter.write();
            }
          }
          continue;
        }

        if (!isEmpty(Field)) {
          jsWriter.write(
            `// ${Param.TABNAME} ${Param.FIELDNAME || ""} ${Param.PARAMTEXT}`
          );

          if (htmlWriter instanceof Writer) {
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

        if (Param.paramType === ParamType.struct) {
          const struct = this.structure_init({
            Param: Param,
            Field: Field as StructureType,
          });
          jsWriter.write(struct.js);
          if (htmlWriter instanceof Writer) htmlWriter.write(struct.html);
        }

        if (Param.paramType === ParamType.table) {
          const table = this.table_init({
            Param: Param,
            Field: Field as StructureType,
          });
          jsWriter.write(table.js);
          if (htmlWriter instanceof Writer) htmlWriter.write(table.html);

          const struct = this.structure_init({
            Param: Param,
            Field: Field as StructureType,
            altParamName: `${Param.paramName}_line`,
          });
          jsWriter.write(struct.js);
          if (htmlWriter instanceof Writer) htmlWriter.write(struct.html);
        }
      }

      result[rfm_name] = { js: jsWriter.save() };
      if (htmlWriter instanceof Writer)
        result[rfm_name].html = htmlWriter.save();
    }

    //
    // flow: Value Helps
    //
    if (this.argv.ui && this.argv.helps) {
      if (!this.abap.helps || !this.abap.descriptors) {
        log.error("\nHelps or Descriptors annotations missing");
      } else {
        log.info(`\nValue Helps\n`);
        const valueHelps = new ValueHelpFrontend({
          output: this.argv.output,
          api_name: this.api_name,
          save: this.argv.save as boolean,
          Helps: this.abap.helps as HelpsCatalogType,
          Descriptors: this.abap.descriptors as DescriptorsCatalogType,
          frontend: this,
        });
        result.valueHelps = valueHelps.parse();
      }
    }

    return result;
  }

  table_init(arg: { Param: ParameterType; Field: StructureType }): JsHtmlType {
    // js
    const jsWriter = new Writer({ indent: 2 });
    jsWriter.write(`const ${arg.Param.paramName} = [];`);
    const result: JsHtmlType = { js: jsWriter.text };
    if (!this.argv.ui || !this.uiConfig.table) return result;

    // html
    const htmlWriter = new Writer({ indent: 4 });

    const element_template = {
      ...(this.uiConfig.table as UiConfigTableType),
    };

    htmlWriter.write();
    if (isEmpty(element_template)) {
      htmlWriter.write(
        `<!-- Table structure not defined in: ${this.configPath.ui} -->`
      );
      result.html = htmlWriter.text;
      return result;
    }

    // header
    if (element_template.header) {
      element_template.header = element_template.header
        .replace(/~bind/, arg.Param.paramName)
        .replace(/~title/, arg.Param.PARAMTEXT);

      htmlWriter.write(element_template.header);
    }
    // header row
    if (element_template.header_row) {
      for (const [field_name, Field] of Object.entries(arg.Field)) {
        const field = this.html_field(arg.Param, Field, field_name);
        if (!field) continue; // curr, uom
        let column = element_template.header_row
          .replace("~bind", field_name)
          .replace(/~label/, field.markup.label as string)
          .replace(/~abap/, field.markup.abap as string);
        if (field.markup.shlp) {
          column = column.replace(/~shlp/, field.markup.shlp);
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
        .replace(/~bind/, arg.Param.paramName)
        .replace(/~title/, arg.Param.PARAMTEXT);
      htmlWriter.write(element_template.body);
    }

    // row
    for (const [field_name, Field] of Object.entries(arg.Field)) {
      const field = this.html_field(arg.Param, Field, field_name);
      if (!field) continue; // curr, uom
      let column = element_template.row
        .replace("~bind", field_name)
        .replace(/~label/, field.markup.label as string)
        .replace(/~abap/, field.markup.abap as string);
      if (field.markup.shlp) {
        column = column.replace(/~shlp/, field.markup.shlp);
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

    result.html = htmlWriter.text;
    return result;
  }

  structure_init(arg: {
    Param: ParameterType;
    Field: StructureType;
    altParamName?: string;
  }): JsHtmlType {
    const jsWriter = new Writer({ indent: 2 }),
      htmlWriter = this.argv.ui ? new Writer({ indent: 4 }) : undefined,
      paramName = arg.altParamName ? arg.altParamName : arg.Param.paramName;
    jsWriter.write("\n// prettier-ignore");
    jsWriter.write(`const ${paramName} = {`);
    jsWriter.addindent();
    for (const [field_name, Field] of Object.entries(arg.Field)) {
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
      if (htmlWriter instanceof Writer) {
        const field = this.html_field(arg.Param, Field, field_name);
        if (field) {
          htmlWriter.write(`\n${field.html}`);
        }
      }
    }
    jsWriter.deindent();
    jsWriter.write("};");
    jsWriter.write();
    if (htmlWriter instanceof Writer) htmlWriter.write();

    // result
    const result: JsHtmlType = { js: jsWriter.text };
    if (htmlWriter) result.html = htmlWriter.text;
    return result;
  }

  field_length(Field: FieldType): string {
    let lange: string;
    if (Field.format.DECIMALS) {
      if (Field.format.DATATYPE === "FLTP") {
        // abap len 16.16, is actually 1.15
        lange = "1.15";
      } else {
        let decrement: number;
        switch (Field.format.DATATYPE) {
          case "DEC":
          case "CURR":
            // abap int part = field lange - decimal point
            decrement = 1;
            break;
          case "QUAN":
            // abap int part = field lange - decimal places
            decrement = Field.format.DECIMALS;
            break;
          default:
            decrement = 0;
        }
        lange = `${Field.format.LENG - decrement}.${Field.format.DECIMALS}`;
      }
    } else {
      // no decimals. -1 stands for string element, w/o fixed length
      lange = Field.format.LENG ? `${Field.format.LENG}` : "-1";
    }
    // sign
    if (Field.format.SIGN) lange = "+" + lange;
    return lange;
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
    field_name = "",
    tag = ""
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

    return this.element_html(result);
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
