//
// /COE/RBP_FE_DATATYPES
//
// rfmcall.js 1.3.0 at: 2021-01-12 13:50:26
//

// Variables : 15
// Structures: 3
// Tables    : 3
// Exceptions: 1

let params = {

  // IMPORT PARAMETERS

  IS_INPUT                         :   {}, // /COE/RBP_S_FE_RFM_STRUCTURE 
  //IV_COUNT                       :  100, // INT4 (10) 
  //IV_DECF16                      :   "", // DECFLOAT16 
  //IV_GENERATE                    :  "X", // CHAR (1) 
  //IV_LANGU                       :  "E", // LANG (1) ALPHA=ISOLA 
  //IV_LANGU_D                     :  "E", // LANG (1) ALPHA=ISOLA 
  //IV_STRING                      : "0123456789", // STRING 
  //IV_STRING_SIZE                 :    1, // INT8 
  //IV_UNAME                       :   "", // CHAR (12) 
  //IV_UNAME_DOM                   :   "", // CHAR (12) 
  //IV_XSTRING                     :   "", // XSTRING 
  //IV_XSTRING_SIZE                :    1, // INT8 

  // CHANGING PARAMETERS

  //CS_STRUCT                      :   {}, // /COE/RBP_S_FE_RFM_STRUCTURE 
  //CT_TABLE                       :   [], // /COE/RBP_T_FE_RFM_TABLE_TYPE 
  //CV_CKEY                        :   "", // CUKY (5) 
  //CV_INT                         :   "", // INT4 (10) 

  // TABLE PARAMETERS

  ET_OUTPUT                        :   [], // /COE/RBP_T_FE_RFM_TABLE_TYPE 
  ET_RAW                           :   [], // SDOKCNTBINS 

  // EXPORT PARAMETERS

  // ES_OUTPUT                     :   {}, // /COE/RBP_S_FE_RFM_STRUCTURE 
  // EV_STRING                     :   "", // STRING 
  // EV_XSTRING                    : "native ABAP type", // XSTRING 
};

result = await client.call("/COE/RBP_FE_DATATYPES", params);

//
// IMPORT PARAMETERS
//

// IS_INPUT /COE/RBP_S_FE_RFM_STRUCTURE 

let IS_INPUT                          =   {}; // /COE/RBP_S_FE_RFM_STRUCTURE 

let _COE_RBP_S_FE_RFM_STRUCTURE = {
  ZACCP                            :   "", // ACCP (6) no text
  ZCHAR                            :   "", // CHAR (10) no text
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZCLNT                            :   "", // CLNT (3) Client
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key
  ZCURR                            :  0.0, // CURR (8.2) no text
  ZDATS                            :   "", // DATS (8) no text
  ZDEC                             :  0.0, // DEC (8.2) no text
  ZDEC217                          :  0.0, // DEC (21.7) no text
  ZDECF16_MAX                      : "native ABAP type", // D16R (8) no text
  ZDECF16_MIN                      : "native ABAP type", // D16R (8) no text
  ZDECF34_MAX                      : "native ABAP type", // D34R (16) no text
  ZDECF34_MIN                      : "native ABAP type", // D34R (16) no text
  ZFLTP                            :  0.0, // FLTP (16.16) no text
  ZFLTP_MAX                        :  0.0, // FLTP (16.16) no text
  ZFLTP_MIN                        :  0.0, // FLTP (16.16) no text
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZINT1                            :    0, // INT1 (3) no text
  ZINT2                            :    0, // INT2 (5) no text
  ZINT4                            :    0, // INT4 (10) no text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  ZLCHR                            :   "", // LCHR (257) no text
  ZLRAW                            : Buffer.from(""), // LRAW (257) no text
  ZNUMC                            :   "", // NUMC (6) no text
  ZPREC                            :    0, // PREC (2) no text
  ZQUAN                            :  0.0, // QUAN (8.4) no text
  ZQUAN_SIGN                       :  0.0, // QUAN (13.3) Difference quantity in alternate unit of measure
  ZRAW                             : Buffer.from(""), // RAW (17) no text
  ZRAWSTRING                       : Buffer.from(""), // RSTR (undefined) no text
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy
  ZSSTRING                         :   "", // SSTR (15) no text
  ZSTRING                          :   "", // STRG (undefined) no text
  ZTIMS                            :   "", // TIMS (6) no text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
};


//
// CHANGING PARAMETERS
//

// CS_STRUCT /COE/RBP_S_FE_RFM_STRUCTURE 

let CS_STRUCT                         =   {}; // /COE/RBP_S_FE_RFM_STRUCTURE 

let _COE_RBP_S_FE_RFM_STRUCTURE = {
  ZACCP                            :   "", // ACCP (6) no text
  ZCHAR                            :   "", // CHAR (10) no text
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZCLNT                            :   "", // CLNT (3) Client
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key
  ZCURR                            :  0.0, // CURR (8.2) no text
  ZDATS                            :   "", // DATS (8) no text
  ZDEC                             :  0.0, // DEC (8.2) no text
  ZDEC217                          :  0.0, // DEC (21.7) no text
  ZDECF16_MAX                      : "native ABAP type", // D16R (8) no text
  ZDECF16_MIN                      : "native ABAP type", // D16R (8) no text
  ZDECF34_MAX                      : "native ABAP type", // D34R (16) no text
  ZDECF34_MIN                      : "native ABAP type", // D34R (16) no text
  ZFLTP                            :  0.0, // FLTP (16.16) no text
  ZFLTP_MAX                        :  0.0, // FLTP (16.16) no text
  ZFLTP_MIN                        :  0.0, // FLTP (16.16) no text
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZINT1                            :    0, // INT1 (3) no text
  ZINT2                            :    0, // INT2 (5) no text
  ZINT4                            :    0, // INT4 (10) no text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  ZLCHR                            :   "", // LCHR (257) no text
  ZLRAW                            : Buffer.from(""), // LRAW (257) no text
  ZNUMC                            :   "", // NUMC (6) no text
  ZPREC                            :    0, // PREC (2) no text
  ZQUAN                            :  0.0, // QUAN (8.4) no text
  ZQUAN_SIGN                       :  0.0, // QUAN (13.3) Difference quantity in alternate unit of measure
  ZRAW                             : Buffer.from(""), // RAW (17) no text
  ZRAWSTRING                       : Buffer.from(""), // RSTR (undefined) no text
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy
  ZSSTRING                         :   "", // SSTR (15) no text
  ZSTRING                          :   "", // STRG (undefined) no text
  ZTIMS                            :   "", // TIMS (6) no text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
};


// CT_TABLE /COE/RBP_T_FE_RFM_TABLE_TYPE 

let CT_TABLE                          =   []; // /COE/RBP_T_FE_RFM_TABLE_TYPE 

let _COE_RBP_T_FE_RFM_TABLE_TYPE = {
  COUNTER                          :    0, // INT4 (10) Natural number
  ZACCP                            :   "", // ACCP (6) no text
  ZCHAR                            :   "", // CHAR (10) no text
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZCLNT                            :   "", // CLNT (3) Client
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key
  ZCURR                            :  0.0, // CURR (8.2) no text
  ZDATS                            :   "", // DATS (8) no text
  ZDEC                             :  0.0, // DEC (8.2) no text
  ZDECF16_MAX                      : "native ABAP type", // D16R (8) no text
  ZDECF16_MIN                      : "native ABAP type", // D16R (8) no text
  ZDECF34_MAX                      : "native ABAP type", // D34R (16) no text
  ZDECF34_MIN                      : "native ABAP type", // D34R (16) no text
  ZFLTP                            :  0.0, // FLTP (16.16) no text
  ZFLTP_MAX                        :  0.0, // FLTP (16.16) no text
  ZFLTP_MIN                        :  0.0, // FLTP (16.16) no text
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZINT1                            :    0, // INT1 (3) no text
  ZINT2                            :    0, // INT2 (5) no text
  ZINT4                            :    0, // INT4 (10) no text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA no text
  ZNUMC                            :   "", // NUMC (6) no text
  ZPREC                            :    0, // PREC (2) no text
  ZQUAN                            :  0.0, // QUAN (8.4) no text
  ZQUAN_SIGN                       :  0.0, // QUAN (13.3) Difference quantity in alternate unit of measure
  ZRAW                             : Buffer.from(""), // RAW (17) no text
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy
  ZTIMS                            :   "", // TIMS (6) no text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
};


//
// TABLE PARAMETERS
//

// ET_OUTPUT /COE/RBP_T_FE_RFM_TABLE_TYPE 

let ET_OUTPUT                         =   []; // /COE/RBP_T_FE_RFM_TABLE_TYPE 

let _COE_RBP_T_FE_RFM_TABLE_TYPE = {
  COUNTER                          :    0, // INT4 (10) Natural number
  ZACCP                            :   "", // ACCP (6) no text
  ZCHAR                            :   "", // CHAR (10) no text
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZCLNT                            :   "", // CLNT (3) Client
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key
  ZCURR                            :  0.0, // CURR (8.2) no text
  ZDATS                            :   "", // DATS (8) no text
  ZDEC                             :  0.0, // DEC (8.2) no text
  ZDECF16_MAX                      : "native ABAP type", // D16R (8) no text
  ZDECF16_MIN                      : "native ABAP type", // D16R (8) no text
  ZDECF34_MAX                      : "native ABAP type", // D34R (16) no text
  ZDECF34_MIN                      : "native ABAP type", // D34R (16) no text
  ZFLTP                            :  0.0, // FLTP (16.16) no text
  ZFLTP_MAX                        :  0.0, // FLTP (16.16) no text
  ZFLTP_MIN                        :  0.0, // FLTP (16.16) no text
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZINT1                            :    0, // INT1 (3) no text
  ZINT2                            :    0, // INT2 (5) no text
  ZINT4                            :    0, // INT4 (10) no text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA no text
  ZNUMC                            :   "", // NUMC (6) no text
  ZPREC                            :    0, // PREC (2) no text
  ZQUAN                            :  0.0, // QUAN (8.4) no text
  ZQUAN_SIGN                       :  0.0, // QUAN (13.3) Difference quantity in alternate unit of measure
  ZRAW                             : Buffer.from(""), // RAW (17) no text
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy
  ZTIMS                            :   "", // TIMS (6) no text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
};


// ET_RAW SDOKCNTBINS 

let ET_RAW                            =   []; // SDOKCNTBINS 

let SDOKCNTBINS = {
  LINE                             : Buffer.from(""), // RAW (1022) Line for binary document contents, length for upload
};
