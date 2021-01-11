//
// /COE/RBP_FE_DATATYPES 0.3
//

_COE_RBP_FE_DATATYPES = {

  // INPUT PARAMETERS

  IS_INPUT: {},                            // /COE/RBP_S_FE_RFM_STRUCTURE : todo: param text
  // IV_COUNT: 100,                           // INT4(10)   INT4                           todo: param text
  // IV_DECF16: "",                           // INT4(10)   DECFLOAT16                     todo: param text
  // IV_GENERATE: "X",                        // CHAR(1)    CHAR1                          todo: param text
  // IV_LANGU: "E",                           // LANG(1)    DFIES LANGU                    todo: param text
  // IV_LANGU_D: "E",                         // LANG(1)    DDLANGUAGE                     todo: param text
  // IV_STRING: "0123456789",                 // LANG(1)    STRING                         todo: param text
  // IV_STRING_SIZE: 1,                       // LANG(1)    INT8                           todo: param text
  // IV_UNAME: "",                            // CHAR(12)   SYST_UNAME                     todo: param text
  // IV_UNAME_DOM: "",                        // CHAR(12)   SYCHAR12                       todo: param text
  // IV_XSTRING: "",                          // CHAR(12)   XSTRING                        todo: param text
  // IV_XSTRING_SIZE: 1,                      // CHAR(12)   INT8                           todo: param text

  // OUTPUT PARAMETERS

  ES_OUTPUT: {},                           // /COE/RBP_S_FE_RFM_STRUCTURE : todo: param text
  EV_STRING: "",                           // CHAR(12)   STRING                         todo: param text
  EV_XSTRING: native ABAP type: XSTRING,   // CHAR(12)   XSTRING                        todo: param text

  // CHANGING PARAMETERS

  CS_STRUCT: {},                           // /COE/RBP_S_FE_RFM_STRUCTURE : todo: param text
  CT_TABLE: [],                            // /COE/RBP_T_FE_RFM_TABLE_TYPE : todo: param text
  // CV_CKEY: "",                             // CUKY(5)    WAERS                          todo: param text
  // CV_INT: "",                              // INT4(10)   INT4                           todo: param text

  // TABLE PARAMETERS

  ET_OUTPUT: [],                           // /COE/RBP_T_FE_RFM_TABLE_TYPE : todo: param text
  ET_RAW: []                               // SDOKCNTBINS : todo: param text
};

//
// INPUT PARAMETERS
//

// IS_INPUT /COE/RBP_S_FE_RFM_STRUCTURE todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
IS_INPUT = {
  ZACCP                         : '',  // todo: no field text
  ZCHAR                         : '',  // todo: no field text
  ZCHECKBOX                     : '',  // Checkbox
  ZCLNT                         : '',  // Client
  ZCUKY_DTEL                    : '',  // Currency Key
  ZCURR                         : 0,  // todo: no field text
  ZDATS                         : '',  // todo: no field text
  ZDEC                          : 0,  // todo: no field text
  ZDEC217                       : 0,  // todo: no field text
  ZDECF16_MAX                   : 0,  // todo: no field text
  ZDECF16_MIN                   : 0,  // todo: no field text
  ZDECF34_MAX                   : 0,  // todo: no field text
  ZDECF34_MIN                   : 0,  // todo: no field text
  ZFLTP                         : 0,  // todo: no field text
  ZFLTP_MAX                     : 0,  // todo: no field text
  ZFLTP_MIN                     : 0,  // todo: no field text
  ZFVAL_LEIN_STATU              : '',  // Status of Storage Unit
  ZINT1                         : 0,  // todo: no field text
  ZINT2                         : 0,  // todo: no field text
  ZINT4                         : 0,  // todo: no field text
  ZLANG                         : '',  // Language Key
  ZLCHR                         : '',  // todo: no field text
  ZLRAW                         : '',  // todo: no field text
  ZNUMC                         : '',  // todo: no field text
  ZPREC                         : 0,  // todo: no field text
  ZQUAN                         : 0,  // todo: no field text
  ZQUAN_SIGN                    : 0,  // Difference quantity in alternate unit of measure
  ZRAW                          : '',  // todo: no field text
  ZRAWSTRING                    : '',  // todo: no field text
  ZSHLP_DEBI                    : '',  // Customer Number
  ZSHLP_MAT1                    : '',  // Material Number
  ZSHLP_PRODH                   : '',  // Product hierarchy
  ZSSTRING                      : '',  // todo: no field text
  ZSTRING                       : '',  // todo: no field text
  ZTIMS                         : '',  // todo: no field text
  ZUNIT_DTEL                    : ''   // Condition unit
};
/* eslint-enable key-spacing */

//
// OUTPUT PARAMETERS
//

// ES_OUTPUT /COE/RBP_S_FE_RFM_STRUCTURE todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
ES_OUTPUT = {
  ZACCP                         : '',  // todo: no field text
  ZCHAR                         : '',  // todo: no field text
  ZCHECKBOX                     : '',  // Checkbox
  ZCLNT                         : '',  // Client
  ZCUKY_DTEL                    : '',  // Currency Key
  ZCURR                         : 0,  // todo: no field text
  ZDATS                         : '',  // todo: no field text
  ZDEC                          : 0,  // todo: no field text
  ZDEC217                       : 0,  // todo: no field text
  ZDECF16_MAX                   : 0,  // todo: no field text
  ZDECF16_MIN                   : 0,  // todo: no field text
  ZDECF34_MAX                   : 0,  // todo: no field text
  ZDECF34_MIN                   : 0,  // todo: no field text
  ZFLTP                         : 0,  // todo: no field text
  ZFLTP_MAX                     : 0,  // todo: no field text
  ZFLTP_MIN                     : 0,  // todo: no field text
  ZFVAL_LEIN_STATU              : '',  // Status of Storage Unit
  ZINT1                         : 0,  // todo: no field text
  ZINT2                         : 0,  // todo: no field text
  ZINT4                         : 0,  // todo: no field text
  ZLANG                         : '',  // Language Key
  ZLCHR                         : '',  // todo: no field text
  ZLRAW                         : '',  // todo: no field text
  ZNUMC                         : '',  // todo: no field text
  ZPREC                         : 0,  // todo: no field text
  ZQUAN                         : 0,  // todo: no field text
  ZQUAN_SIGN                    : 0,  // Difference quantity in alternate unit of measure
  ZRAW                          : '',  // todo: no field text
  ZRAWSTRING                    : '',  // todo: no field text
  ZSHLP_DEBI                    : '',  // Customer Number
  ZSHLP_MAT1                    : '',  // Material Number
  ZSHLP_PRODH                   : '',  // Product hierarchy
  ZSSTRING                      : '',  // todo: no field text
  ZSTRING                       : '',  // todo: no field text
  ZTIMS                         : '',  // todo: no field text
  ZUNIT_DTEL                    : ''   // Condition unit
};
/* eslint-enable key-spacing */

//
// CHANGING PARAMETERS
//

// CS_STRUCT /COE/RBP_S_FE_RFM_STRUCTURE todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
CS_STRUCT = {
  ZACCP                         : '',  // todo: no field text
  ZCHAR                         : '',  // todo: no field text
  ZCHECKBOX                     : '',  // Checkbox
  ZCLNT                         : '',  // Client
  ZCUKY_DTEL                    : '',  // Currency Key
  ZCURR                         : 0,  // todo: no field text
  ZDATS                         : '',  // todo: no field text
  ZDEC                          : 0,  // todo: no field text
  ZDEC217                       : 0,  // todo: no field text
  ZDECF16_MAX                   : 0,  // todo: no field text
  ZDECF16_MIN                   : 0,  // todo: no field text
  ZDECF34_MAX                   : 0,  // todo: no field text
  ZDECF34_MIN                   : 0,  // todo: no field text
  ZFLTP                         : 0,  // todo: no field text
  ZFLTP_MAX                     : 0,  // todo: no field text
  ZFLTP_MIN                     : 0,  // todo: no field text
  ZFVAL_LEIN_STATU              : '',  // Status of Storage Unit
  ZINT1                         : 0,  // todo: no field text
  ZINT2                         : 0,  // todo: no field text
  ZINT4                         : 0,  // todo: no field text
  ZLANG                         : '',  // Language Key
  ZLCHR                         : '',  // todo: no field text
  ZLRAW                         : '',  // todo: no field text
  ZNUMC                         : '',  // todo: no field text
  ZPREC                         : 0,  // todo: no field text
  ZQUAN                         : 0,  // todo: no field text
  ZQUAN_SIGN                    : 0,  // Difference quantity in alternate unit of measure
  ZRAW                          : '',  // todo: no field text
  ZRAWSTRING                    : '',  // todo: no field text
  ZSHLP_DEBI                    : '',  // Customer Number
  ZSHLP_MAT1                    : '',  // Material Number
  ZSHLP_PRODH                   : '',  // Product hierarchy
  ZSSTRING                      : '',  // todo: no field text
  ZSTRING                       : '',  // todo: no field text
  ZTIMS                         : '',  // todo: no field text
  ZUNIT_DTEL                    : ''   // Condition unit
};
/* eslint-enable key-spacing */

// CT_TABLE /COE/RBP_T_FE_RFM_TABLE_TYPE todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
CT_TABLE = {
  COUNTER                       : 0,  // Natural number
  ZACCP                         : '',  // todo: no field text
  ZCHAR                         : '',  // todo: no field text
  ZCHECKBOX                     : '',  // Checkbox
  ZCLNT                         : '',  // Client
  ZCUKY_DTEL                    : '',  // Currency Key
  ZCURR                         : 0,  // todo: no field text
  ZDATS                         : '',  // todo: no field text
  ZDEC                          : 0,  // todo: no field text
  ZDECF16_MAX                   : 0,  // todo: no field text
  ZDECF16_MIN                   : 0,  // todo: no field text
  ZDECF34_MAX                   : 0,  // todo: no field text
  ZDECF34_MIN                   : 0,  // todo: no field text
  ZFLTP                         : 0,  // todo: no field text
  ZFLTP_MAX                     : 0,  // todo: no field text
  ZFLTP_MIN                     : 0,  // todo: no field text
  ZFVAL_LEIN_STATU              : '',  // Status of Storage Unit
  ZINT1                         : 0,  // todo: no field text
  ZINT2                         : 0,  // todo: no field text
  ZINT4                         : 0,  // todo: no field text
  ZLANG                         : '',  // todo: no field text
  ZNUMC                         : '',  // todo: no field text
  ZPREC                         : 0,  // todo: no field text
  ZQUAN                         : 0,  // todo: no field text
  ZQUAN_SIGN                    : 0,  // Difference quantity in alternate unit of measure
  ZRAW                          : '',  // todo: no field text
  ZSHLP_DEBI                    : '',  // Customer Number
  ZSHLP_MAT1                    : '',  // Material Number
  ZSHLP_PRODH                   : '',  // Product hierarchy
  ZTIMS                         : '',  // todo: no field text
  ZUNIT_DTEL                    : ''   // Condition unit
};
/* eslint-enable key-spacing */

//
// TABLE PARAMETERS
//

// ET_OUTPUT /COE/RBP_T_FE_RFM_TABLE_TYPE todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
ET_OUTPUT = {
  COUNTER                       : 0,  // Natural number
  ZACCP                         : '',  // todo: no field text
  ZCHAR                         : '',  // todo: no field text
  ZCHECKBOX                     : '',  // Checkbox
  ZCLNT                         : '',  // Client
  ZCUKY_DTEL                    : '',  // Currency Key
  ZCURR                         : 0,  // todo: no field text
  ZDATS                         : '',  // todo: no field text
  ZDEC                          : 0,  // todo: no field text
  ZDECF16_MAX                   : 0,  // todo: no field text
  ZDECF16_MIN                   : 0,  // todo: no field text
  ZDECF34_MAX                   : 0,  // todo: no field text
  ZDECF34_MIN                   : 0,  // todo: no field text
  ZFLTP                         : 0,  // todo: no field text
  ZFLTP_MAX                     : 0,  // todo: no field text
  ZFLTP_MIN                     : 0,  // todo: no field text
  ZFVAL_LEIN_STATU              : '',  // Status of Storage Unit
  ZINT1                         : 0,  // todo: no field text
  ZINT2                         : 0,  // todo: no field text
  ZINT4                         : 0,  // todo: no field text
  ZLANG                         : '',  // todo: no field text
  ZNUMC                         : '',  // todo: no field text
  ZPREC                         : 0,  // todo: no field text
  ZQUAN                         : 0,  // todo: no field text
  ZQUAN_SIGN                    : 0,  // Difference quantity in alternate unit of measure
  ZRAW                          : '',  // todo: no field text
  ZSHLP_DEBI                    : '',  // Customer Number
  ZSHLP_MAT1                    : '',  // Material Number
  ZSHLP_PRODH                   : '',  // Product hierarchy
  ZTIMS                         : '',  // todo: no field text
  ZUNIT_DTEL                    : ''   // Condition unit
};
/* eslint-enable key-spacing */

// ET_RAW SDOKCNTBINS todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
ET_RAW = {
  LINE                          : ''   // Line for binary document contents, length for upload
};
/* eslint-enable key-spacing */
