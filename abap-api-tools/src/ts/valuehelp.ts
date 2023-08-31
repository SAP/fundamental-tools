import path from "path";
import { ParamType, ValueInput } from "./constants";
import {
  HelpsCatalogType,
  DescriptorsCatalogType,
  ParameterType,
  FieldType,
  StructureType,
} from "./backend";
import { Frontend } from "./frontend";
import { Signature } from "./abap";
import { isEmpty, rmDir, makeDir, Writer, log } from "./utils";

import { ElementaryHelpType, EHDescriptorType } from "abap-value-help";
import { RfcStructure, RfcTable } from "node-rfc";

interface IElementaryHelp {
  id: string;
  title: string;
  selectionFields: RfcTable; // FieldType[];
  selectionParameters: string[];
  resultFields: RfcTable;
  resultTable: string;
  blacklisted: boolean;
}

export class ValueHelpFrontend {
  private outDir: string;
  private save = false;
  private Helps: HelpsCatalogType;
  private Descriptors: DescriptorsCatalogType;
  private frontend: Frontend;
  private HTML = "";
  private JS = "";

  constructor(context: {
    output: string;
    api_name: string;
    save: boolean;
    Helps: HelpsCatalogType;
    Descriptors: DescriptorsCatalogType;
    frontend: Frontend;
  }) {
    this.outDir = path.join(
      context.output || "",
      context.api_name,
      "valueHelps"
    );
    this.save = context.save;
    this.Helps = context.Helps;
    this.Descriptors = context.Descriptors;
    this.frontend = context.frontend;

    if (this.save) {
      rmDir(this.outDir);
      makeDir(this.outDir);
    }
  }

  newWriter(suffix: "js" | "html", shlpId: string, shlpTitle: string): Writer {
    const writer = new Writer({
      fileName: path.join(
        this.outDir,
        `${shlpId
          .toLowerCase()
          .replace(/\//g, "_")
          .replace(" ", "_")}.${suffix}`
      ),
    });
    writer.write(
      suffix === "js"
        ? `// ${shlpId} ${shlpTitle} : ${Signature}\n`
        : `<!-- ${shlpId} ${shlpTitle} : ${Signature} -->}\n`
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

  elementaryHelp(shlp_key: string): IElementaryHelp {
    if (!this.Descriptors[shlp_key]) {
      throw new Error(`Value Help Descriptor not found: ${shlp_key}`);
    }
    const VH = this.Descriptors[shlp_key] as EHDescriptorType;

    const selectionDescriptor = VH.selectionDescriptor as ElementaryHelpType;

    const result: IElementaryHelp = {
      id: shlp_key,
      title: selectionDescriptor.INTDESCR.DDTEXT as string,
      selectionFields: [] as RfcStructure[], // FieldType[],
      selectionParameters: [] as string[],
      blacklisted: false,
      resultFields: [] as RfcTable,
      resultTable: "",
    };

    if (VH.blacklist) {
      result.blacklisted = true;
      log.debug(`Value Help black-listed: ${shlp_key}`);
      return result;
    }

    // selection parameters
    for (const field of selectionDescriptor.FIELDDESCR) {
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

      const html_field = this.frontend.html_field(
        Parameter,
        ValueHelpFrontend.dfiesFieldToABAP(field),
        field.FIELDNAME as string
      );

      result.selectionFields.push(field);
      result.selectionParameters.push(html_field.html);
    }

    // result table
    const Parameter: ParameterType = {
      paramType: ParamType.struct,
      PARAMCLASS: "paramClass",
      TABNAME: "field.TABNAME" as string,
      FIELDNAME: "field.FIELDNAME" as string,
      PARAMTEXT: "field.FIELDTEXT" as string,
      functionName: `valueHelp`,
      paramName: `searchParamLow`,
      required: "",
      //default?: string;
      // nativeKey?: string;
    };
    const resultDescriptor = VH.resultDescriptor as RfcTable;
    const Field = {} as StructureType;
    for (const field of resultDescriptor) {
      Field[field.FIELDNAME as string] =
        ValueHelpFrontend.dfiesFieldToABAP(field);
    }
    const table = this.frontend.table_init({ Param: Parameter, Field: Field });
    if (table) {
      result.resultTable = table.html || "";
    }

    return result;
  }

  parse(): { js: string; html: string } {
    for (const [shlp_key, shlp] of Object.entries(this.Helps)) {
      if (shlp_key.substr(0, 2) !== "SH") {
        continue;
      }

      if (shlp.elementaryHelps) {
        // html
        const htmlWriter = this.newWriter(
          "html",
          shlp_key,
          `${shlp.title} (${shlp.elementaryHelps.length})`
        );
        htmlWriter.write(
          `<ui-combo label=${shlp.title} option.bind="helpSelector"></ui-combo>`
        );
        this.HTML += htmlWriter.save();

        // js
        const jsWriter = this.newWriter(
          "js",
          shlp_key,
          `${shlp.title} (${shlp.elementaryHelps.length})`
        );
        jsWriter.write("const helpSelector = [");
        jsWriter.addindent();
        shlp.elementaryHelps.map((eh) =>
          jsWriter.write(JSON.stringify(eh) + ",")
        );
        jsWriter.deindent();
        jsWriter.write("];");
        this.JS += jsWriter.save();

        for (const elem of shlp.elementaryHelps) {
          const shlpId = Object.keys(elem)[0];
          this.elementaryOutput(shlpId, elem[shlpId].title);
        }
      } else {
        this.elementaryOutput(shlp_key, shlp.title);
      }
    }

    return { js: this.JS, html: this.HTML };
  }

  elementaryOutput(shlpId: string, shlpTitle: string): void {
    const htmlWriter = this.newWriter("html", shlpId, shlpTitle);
    const jsWriter = this.newWriter("js", shlpId, shlpTitle);
    //
    // selection parameters
    //
    // html
    const EH = this.elementaryHelp(shlpId);
    EH.selectionParameters.map((sp) => htmlWriter.write(sp));
    // js
    jsWriter.write(`const title = "${shlpTitle}";\n`);
    jsWriter.write(`const selectParams = [`);
    jsWriter.addindent();
    for (const [ndx, field] of Object.entries(EH.selectionFields)) {
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
      jsWriter.write(`}${+ndx === EH.selectionFields.length - 1 ? "" : ","}`);
    }
    jsWriter.deindent();
    jsWriter.write(`];`);

    //
    // result table
    //

    htmlWriter.write(EH.resultTable);

    this.HTML += htmlWriter.save();
    this.JS += jsWriter.save();
  }

  static dfiesFieldToABAP(field: RfcStructure): FieldType {
    const result: FieldType = {
      format: {
        DATATYPE: field.DATATYPE as string,
        INTTYPE: field.INTTYPE as string,
        DOMNAME: field.DOMNAME as string,
        ROLLNAME: field.ROLLNAME as string,
        LENG: Number(field.LENG),
        DECIMALS: Number(field.DECIMALS),
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
}
