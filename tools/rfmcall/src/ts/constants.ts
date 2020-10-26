// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

// Languages
export const iso2langu = new Map();
iso2langu.set("en", "E");
iso2langu.set("de", "D");
iso2langu.set("nl", "N");
iso2langu.set("es", "S");
iso2langu.set("jp", "J");

// Parameter types
export const PARAMTYPE_VAR = "var",
  PARAMTYPE_STRUCT = "struct",
  PARAMTYPE_TABLE = "table",
  PARAMTYPE_EXC = "exception";

// Parameter classes
export const PARAMCLASS_IMPORT = "I",
  PARAMCLASS_CHANGING = "C",
  PARAMCLASS_TABLE = "T",
  PARAMCLASS_EXPORT = "E";

export const ParamClassDesc = {};
ParamClassDesc[PARAMCLASS_IMPORT] = "IMPORT";
ParamClassDesc[PARAMCLASS_CHANGING] = "CHANGING";
ParamClassDesc[PARAMCLASS_TABLE] = "TABLE";
ParamClassDesc[PARAMCLASS_EXPORT] = "EXPORT";

// unused parameters' properties
export const PARAM_XPROPS = [
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
export const DATE_TAGNAME = "date";
export const TIME_TAGNAME = "time";
export const INPUT_TYPE_BINARY_TAG = "checkbox";
export const DDIC_JS = {
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
  // Decimal floats
  DECFLOAT16: {
    JS_TYPE: "number",
    JS_FORMAT: "decimal",
    HTML_TAG: "input",
    INITIAL: `"0.0"`,
    COMMENT: "Decimal float",
  },
  DECFLOAT34: {
    JS_TYPE: "number",
    JS_FORMAT: "decimal",
    HTML_TAG: "input",
    INITIAL: `"0.0"`,
    COMMENT: "Decimal float",
  },
  // Long character string, requires preceding INT2 field
  LCHR: { JS_TYPE: "string", HTML_TAG: "text" },
  // Byte String of Variable Length
  RSTR: { JS_TYPE: "string", HTML_TAG: "text" },
  // Short Character String of Variable Length
  SSTR: { JS_TYPE: "string", HTML_TAG: "text" },
  // Character String of Variable Length
  STRG: { JS_TYPE: "string", HTML_TAG: "text" },
  // Uninterpreted sequence of bytes
  RAW: { JS_TYPE: "string", HTML_TAG: "text", INITIAL: `Buffer.from("")` },
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
