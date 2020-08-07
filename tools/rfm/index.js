const fs = require("fs");
const sprintf = require("sprintf-js").sprintf;
const addon = require("node-rfc");

const client = new addon.Client({ dest: "MME" });

// Languages
const iso2langu = new Map();
iso2langu.set("en", "E");
iso2langu.set("de", "D");
iso2langu.set("nl", "N");
iso2langu.set("es", "S");
iso2langu.set("jp", "J");

// Parameter types
const PARAMTYPE_VAR = "var",
  PARAMTYPE_STRUCT = "struct",
  PARAMTYPE_TABLE = "table",
  PARAMTYPE_EXC = "exception";

// unused parameters' properties
const PARAM_XPROPS = [
  "EXID",
  "FUNCNAME",
  "PARAMETER",
  "TABNAME",
  "FIELDNAME",
  "OFFSET",
  "POSITION",
  "INTLENGTH",
  "DECIMALS",
  "OPTIONAL",
  "DEFAULT",
];

// ABAP parameter type to JS model initial value mapping
const DATE_TAGNAME = "date";
const TIME_TAGNAME = "time";
const INPUT_TYPE_BINARY_TAG = "checkbox";
const DDIC_JS = {
  // Posting period YYYYMM
  ACCP: {
    JS_TYPE: "string",
    JS_FORMAT: "accp",
    HTML_TAG: "input",
    INITIAL: `""`,
    COMMENT: "YYYYMM",
  },
  // Client 000-999
  CLNT: {
    JS_TYPE: "string",
    JS_FORMAT: "numeric",
    HTML_TAG: "input",
    INITIAL: `""`,
    COMMENT: "000 to 999",
  },
  // Language 1 char key
  LANG: {
    JS_TYPE: "string",
    JS_FORMAT: "lang",
    HTML_TAG: "lang",
    INITIAL: `""`,
    COMMENT: "1-char",
  },

  // Character String
  CHAR: {
    JS_TYPE: "string",
    HTML_TAG: "input",
    INITIAL: `""`,
    COMMENT: "string",
  },

  // Date field (YYYYMMDD) stored as char(8)
  DATS: {
    JS_TYPE: "string",
    JS_FORMAT: "date",
    HTML_TAG: DATE_TAGNAME,
    INITIAL: `""`,
    COMMENT: "YYYYMMDD",
  },
  // Time field (hhmmss), stored as char(6)
  TIMS: {
    JS_TYPE: "string",
    JS_FORMAT: "time",
    HTML_TAG: TIME_TAGNAME,
    INITIAL: `""`,
    COMMENT: "HHMMSS",
  },

  // Boolean 1 char
  BOOLEAN: {
    JS_TYPE: "boolean",
    HTML_TAG: INPUT_TYPE_BINARY_TAG,
    INITIAL: `""`,
    COMMENT: "Boolean",
  },

  // Character string with only digits
  NUMC: {
    JS_TYPE: "string",
    JS_FORMAT: "numeric",
    HTML_TAG: "input",
    INITIAL: `""`,
    COMMENT: "Numeric string",
  },

  // Floating point number, accurate to 8 bytes
  FLTP: {
    JS_TYPE: "number",
    JS_FORMAT: "float",
    HTML_TAG: "input",
    INITIAL: `0.0`,
    COMMENT: "Float",
  },
  // 1-byte integer, integer number <= 255
  INT1: {
    JS_TYPE: "number",
    JS_FORMAT: "integer",
    HTML_TAG: "input",
    INITIAL: `0`,
    COMMENT: "1-byte integer",
  },
  // 2-byte integer, only for length field before LCHR or LRAW
  INT2: {
    JS_TYPE: "number",
    JS_FORMAT: "integer",
    HTML_TAG: "input",
    INITIAL: `0`,
    COMMENT: "2-byte integer",
  },
  // 4-byte integer, integer number with sign
  INT4: {
    JS_TYPE: "number",
    JS_FORMAT: "integer",
    HTML_TAG: "input",
    INITIAL: `0`,
    COMMENT: "4-byte integer",
  },
  // 8-byte integer, integer number with sign
  INT8: {
    JS_TYPE: "number",
    JS_FORMAT: "integer",
    HTML_TAG: "input",
    INITIAL: `0`,
    COMMENT: "8-byte integer",
  },
  // Counter or amount field with comma and sign
  DEC: {
    JS_TYPE: "number",
    JS_FORMAT: "decimal",
    HTML_TAG: "input",
    INITIAL: `0.0`,
    COMMENT: "Decimal",
  },
  // Currency field, stored as DEC, points to currency field with format CUKY
  CURR: {
    JS_TYPE: "number",
    JS_FORMAT: "currency",
    HTML_TAG: "input",
    INITIAL: `0.0`,
    COMMENT: "Currency",
  },
  // Quantity field, points to a unit field with format UNIT
  QUAN: {
    JS_TYPE: "number",
    JS_FORMAT: "quantity",
    HTML_TAG: "input",
    INITIAL: `0.0`,
    COMMENT: "Quantuty",
  },
  // Currency key, referenced by CURR fields
  CUKY: {
    JS_TYPE: "string",
    HTML_TAG: "input",
    INITIAL: `""`,
    COMMENT: "Currency key",
  },
  // Unit key for QUAN fields
  UNIT: {
    JS_TYPE: "string",
    HTML_TAG: "input",
    INITIAL: `""`,
    COMMENT: "Quantity key",
  },

  // Precision of a QUAN field
  PREC: { JS_TYPE: "number", JS_FORMAT: "integer", HTML_TAG: "number" },

  // Long character string, requires preceding INT2 field
  LCHR: { JS_TYPE: "string", HTML_TAG: "text" },
  // Byte String of Variable Length
  RSTR: { JS_TYPE: "string", HTML_TAG: "text" },
  // Short Character String of Variable Length
  SSTR: { JS_TYPE: "string", HTML_TAG: "text" },
  // Character String of Variable Length
  STRG: { JS_TYPE: "string", HTML_TAG: "text" },
  // Uninterpreted sequence of bytes
  RAW: { JS_TYPE: "string", HTML_TAG: "text" },
  // Long byte string, requires preceding INT2 field
  LRAW: { JS_TYPE: "string", HTML_TAG: "text" },

  // native
  STRING: {
    JS_TYPE: "string",
    HTML_TAG: "text",
    INITIAL: `""`,
    COMMENT: "String",
  },
};

function get_initializer(param) {
  const result = { text: param.PARAMTEXT, leng: false };
  let field = false;
  if ("fieldKey" in param) {
    field = Fields.get(param.fieldKey);
    result.abaptype = param.fieldKey;
  }
  switch (param.paramType) {
    case PARAMTYPE_TABLE:
      result.init = `[]`;
      break;
    case PARAMTYPE_STRUCT:
      result.init = `{}`;
      break;
    case PARAMTYPE_VAR:
      if ("fieldKey" in param) {
        result.abaptype = field.format.DATATYPE;
        result.leng = field.format.LENG;
      } else {
        result.abaptype = param.nativeKey;
      }
      if (result.abaptype in DDIC_JS) {
        result.init = DDIC_JS[result.abaptype].INITIAL;
      } else {
        result.init = `${result.abaptype} ?`;
      }
      if (result.leng) {
        result.abaptype += ` (${result.leng})`;
      }
      break;
    default:
      throw `Unknown parameter type ${param.paramType}`;
  }
  return result;
}

const getDFIES = async function (param, langu) {
  param.paramKey = PKeyToJS(param);
  const fieldKey = FKeyToJS(param);
  if (Fields.has(fieldKey)) {
    param.fieldKey = fieldKey;
    return 0;
  }
  let dfies;
  try {
    const ddif = await client.call("DDIF_FIELDINFO_GET", {
      TABNAME: param.TABNAME,
      FIELDNAME: param.FIELDNAME,
      LANGU: langu,
      ALL_TYPES: "X",
      GROUP_NAMES: "X",
    });

    // ddif-> dfies
    if (param.paramType === PARAMTYPE_VAR) {
      // variable
      if (ddif.DDOBJTYPE === "INTTAB" || ddif.DDOBJTYPE === "TRANSP") {
        dfies = ddif.DFIES_TAB[0];
      } else {
        dfies = ddif.DFIES_WA;
      }
    } else {
      // structure or table
      if (ddif.LINES_DESCR.length > 0) {
        // try LINES_DESCR first, seem to be more "reliable" than DFIES_TAB (no .INCLUDEs)
        dfies = ddif.LINES_DESCR[0].FIELDS;
      } else if (ddif.DFIES_TAB.length > 0) {
        dfies = ddif.DFIES_TAB;
      } else {
        // single field row
        dfies = [ddif.DFIES_WA];
      }
    }

    Fields.set(fieldKey, annotation(dfies));
    param.fieldKey = fieldKey;
    return 0;
  } catch (ex) {
    if (param.paramType === PARAMTYPE_VAR && ex.key === "NOT_FOUND") {
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
};

const log = (...text) => {
  console.log(...text);
};

function FKeyToJS(p) {
  return `${p.TABNAME} ${p.FIELDNAME}`.trim();
}

function JSToFKey(fieldKey) {
  let [TABNAME, FIELDNAME] = fieldKey.split();
  if (FIELDNAME === undefined) FIELDNAME = "";
  return [TABNAME, FIELDNAME];
}

function PKeyToJS(p) {
  return `${p.FUNCNAME} ${p.PARAMETER}`.trim();
}
function JSToPKey(paramKey) {
  return paramKey.split(" ");
}

function get_text(dfies) {
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

function annotation(dfies) {
  if (Array.isArray(dfies)) {
    // structure, table
    result = {};
    dfies.forEach((field) => {
      // skip meta elements like .INCLUDE ...
      if (!!field.INTTYPE && !(".INCLUDE" in field)) {
        result[field.FIELDNAME] = xmarkup(field);
      }
    });
    return result;
  } else {
    // variable
    if ("FIELDNAME" in dfies) {
      // ddic type
      return xmarkup(dfies);
    }
    // native ABAP type
    else return dfies;
  }
}

function xmarkup(dfies) {
  FORMAT_FIELDS = [
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
  INPUT_FIELDS = ["VALEXI", "CONVEXIT", "MEMORYID", "SHLP"];

  BINARY_VALUES = ["", "X"];

  markup = { format: {}, input: {}, text: get_text(dfies) };

  for (i in dfies) {
    if (FORMAT_FIELDS.includes(i)) {
      if (["DECIMALS", "MASKLEN", "LENG", "OUTPUTLEN", "INTLEN"].includes(i)) {
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
  if (!markup.format.DOMNAME) delete markup.format.DOMNAME;
  if (!markup.format.ROLLNAME) delete markup.format.ROLLNAME;

  if (Object.keys(markup.input).length === 0) {
    delete markup.input;
  }

  if (dfies.LFIELDNAME !== dfies.FIELDNAME) {
    markup.format.LFIELDNAME = dfies.LFIELDNAME;
  }

  return markup;
}

let Params = new Map();
const Fields = new Map();

const parseRFM = async function (rfm_name, RFM_LANG) {
  const langu = iso2langu.get(RFM_LANG);
  let FUNCTIONNAMES = [];
  if (Array.isArray(rfm_name)) {
    rfm_name.forEach((e) => FUNCTIONNAMES.push(e.toUpperCase()));
  } else {
    FUNCTIONNAMES.push(rfm_name.toUpperCase());
  }

  await client.open();

  // get parameters' metadata
  const R = await client.call("RFC_METADATA_GET", {
    // DEEP:'X',
    // GET_CLIENT_DEP_FIELDS: 'X',
    // GET_TIMESTAMPS:'X',
    EVALUATE_LINKS: "X", // comment to go for lower level DDIC: BAPI_EQUI_CHANGE EQUIPMENT
    // no backend ALPHA
    LANGUAGE: langu,
    FUNCTIONNAMES: FUNCTIONNAMES,
  });

  // RFM found?
  if (
    R.FUNC_ERRORS.length > 0 &&
    R.FUNC_ERRORS[0].EXCEPTION == "FU_NOT_FOUND"
  ) {
    throw `RFM not found: ${R.FUNC_ERRORS[0]["FUNCNAME"]}`;
  }

  // Parameters cleanup
  let i = R.PARAMETERS.length;
  while (i--) {
    const p = R.PARAMETERS[i];

    // skip records with name 'CHANGING'
    if (p.PARAMETER === "CHANGING") {
      R.PARAMETERS.splice(i, 1);
      continue;
    }

    // 'I' parameter type is INT4 internally
    if (p.TABNAME === "I") p.TABNAME = "INT4";

    // set optional/required
    p.required = p.OPTIONAL.trim().length == 0;
    if (p.required) {
      p.default = p.DEFAULT;
    }
    delete p.DEFAULT;

    //  set param type
    if (p.PARAMCLASS == "X" || p.EXID.trim().length == 0) {
      p.paramType = PARAMTYPE_EXC;
      continue;
    } else if (p.EXID === "h" || p.PARAMCLASS === "T") {
      p.paramType = PARAMTYPE_TABLE;
    } else if ("uv".indexOf(p.EXID) != -1) {
      p.paramType = PARAMTYPE_STRUCT;
    } else {
      p.paramType = PARAMTYPE_VAR;
    }

    // set ddic ref
    await getDFIES(p, langu);

    // remove unused properties
    PARAM_XPROPS.forEach((e) => delete p[e]);

    // set P
    Params.set(p.paramKey, p);

    //log(
    //  `${p.paramType} ${p.required} ${p.PARAMCLASS} ${p.paramKey}  ::  ${p.fieldKey} || ${p.nativeKey}`
    //);
  }

  // sort parameters
  const paramsSorted = new Map([...Params.entries()].sort());
  Params = new Map();
  // required IMPORT
  paramsSorted.forEach((v, k) => {
    if (["I"].includes(v.PARAMCLASS) && v.required) {
      Params.set(k, v);
    }
  });
  // required CHANGING
  paramsSorted.forEach((v, k) => {
    if (["C"].includes(v.PARAMCLASS) && v.required) {
      Params.set(k, v);
    }
  });
  // required TABLE
  paramsSorted.forEach((v, k) => {
    if (["T"].includes(v.PARAMCLASS) && v.required) {
      Params.set(k, v);
    }
  });
  // optional IMPORT
  paramsSorted.forEach((v, k) => {
    if (["I"].includes(v.PARAMCLASS) && !v.required) {
      Params.set(k, v);
    }
  });
  // optional CHANGING
  paramsSorted.forEach((v, k) => {
    if (["C"].includes(v.PARAMCLASS) && !v.required) {
      Params.set(k, v);
    }
  });
  // optional TABLE
  paramsSorted.forEach((v, k) => {
    if (["T"].includes(v.PARAMCLASS) && !v.required) {
      Params.set(k, v);
    }
  });
  // EXPORTING
  paramsSorted.forEach((v, k) => {
    if (v.PARAMCLASS == "E") {
      Params.set(k, v);
    }
  });

  // save to file
  saveMap(Params, "params.json");
  saveMap(Fields, "fields.json");

  //log(
  //  `var: ${var_count}\nstr: ${struct_count}\ntab: ${table_count}\nexc: ${exc_count}`
  //);

  await client.close();
  log(`const params = {`);
  Params.forEach((paramData, paramKey) => {
    if (["I", "C", "T"].includes(paramData.PARAMCLASS)) {
      let [funcName, paramName] = JSToPKey(paramKey);
      let left = paramData.required ? paramName : `//${paramName}`;
      let right = get_initializer(paramData);
      log(
        sprintf(
          "  %-33s: %4s, // %s %s",
          left,
          right.init,
          right.abaptype,
          paramData.PARAMTEXT
        )
      );
    }
  });
  log(`};`);
  log(`result = await client.call("${rfm_name}", params);`);
};

function saveMap(m, fileName) {
  const ms = JSON.stringify(Object.fromEntries(m), null, "\t");
  const stream = fs.createWriteStream(fileName);
  stream.once("open", () => {
    stream.write(ms);
    stream.end();
  });
}

function deleteFile(...files) {
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

name1 = "/coe/rbp_fe_datatypes1";
name2 = "/coe/rbp_fe_datatypes2";
name = "BAPI_BUPA_CENTRAL_GETDETAIL";

rfm_name = name1;

deleteFile("./params.json", "./fields.json");
parseRFM(rfm_name, "en");
