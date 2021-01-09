//
// /COE/RBP_FE_DATATYPES 0.2
//

_COE_RBP_FE_DATATYPES = {

  // INPUT PARAMETERS

  IS_INPUT: {},                            // /COE/RBP_S_FE_RFM_STRUCTURE : ?de: ABAP Data Types for Structure
  IV_COUNT: 0,                             // INT4(10)   INT4                           ?de: Natürliche Zahl
  IV_GENERATE: '',                         // CHAR(1)    CHAR1                          ?de: Einstelliges Kennzeichen
  IV_LANGU: '',                            // LANG(1)    DFIES LANGU                    ?de: Sprachenschlüssel
  IV_LANGU_D: '',                          // LANG(1)    DDLANGUAGE                     ?de: Sprachenschlüssel
  IV_UNAME: '',                            // CHAR(12)   SYST_UNAME                     ?de: ABAP-Systemfeld: Name des aktuellen Benutzers
  IV_UNAME_DOM: '',                        // CHAR(12)   SYCHAR12                       ?de: ABAP-Systemfelder

  // OUTPUT PARAMETERS

  ES_OUTPUT: {},                           // /COE/RBP_S_FE_RFM_STRUCTURE : ?de: ABAP Data Types for Structure

  // CHANGING PARAMETERS

  CHANGING: {},                            // /COE/RBP_S_FE_RFM_STRUCTURE : ?de: ABAP Data Types for Structure
  CS_STRUCT: {},                           // /COE/RBP_S_FE_RFM_STRUCTURE : ?de: ABAP Data Types for Structure
  CT_TABLE: [],                            // /COE/RBP_T_FE_RFM_TABLE_TYPE : ?de: RFC Table Type
  CV_CKEY: '',                             // CUKY(5)    WAERS                          ?de: Währungsschlüssel
  CV_INT: 0,                               // INT4(10)   INT4                           ?de: Natürliche Zahl

  // TABLE PARAMETERS

  ET_OUTPUT: [],                           // /COE/RBP_T_FE_RFM_TABLE_TYPE : ?de: RFC Table Type
  ET_RAW: []                               // SDOKCNTBINS : ?de: SDOK: Tabelle von Binärdokumentinhalten für den Web-Server
};

//
// INPUT PARAMETERS
//

// IS_INPUT /COE/RBP_S_FE_RFM_STRUCTURE ?de: ABAP Data Types for Structure

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

// ES_OUTPUT /COE/RBP_S_FE_RFM_STRUCTURE ?de: ABAP Data Types for Structure

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

// CHANGING /COE/RBP_S_FE_RFM_STRUCTURE ?de: ABAP Data Types for Structure

/* eslint-disable key-spacing */
// prettier-ignore
CHANGING = {
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

// CS_STRUCT /COE/RBP_S_FE_RFM_STRUCTURE ?de: ABAP Data Types for Structure

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

// CT_TABLE /COE/RBP_T_FE_RFM_TABLE_TYPE ?de: RFC Table Type

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

// ET_OUTPUT /COE/RBP_T_FE_RFM_TABLE_TYPE ?de: RFC Table Type

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

// ET_RAW SDOKCNTBINS ?de: SDOK: Tabelle von Binärdokumentinhalten für den Web-Server

/* eslint-disable key-spacing */
// prettier-ignore
ET_RAW = {
  LINE                          : ''   // Line for binary document contents, length for upload
};
/* eslint-enable key-spacing */
