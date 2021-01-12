//
// /COE/RBP_FE_DATATYPES 
//
// rfmcall.py 1.0 at: 2021-01-12 13:35:21
//

// Variables : 15
// Structures: 3
// Tables    : 3
// Exceptions: 0

_COE_RBP_FE_DATATYPES = {

  // INPUT PARAMETERS

  IS_INPUT                         :   {}, // /COE/RBP_S_FE_RFM_STRUCTURE todo: param text
  //IV_COUNT                       :  100, // INT4 (10) todo: param text
  //IV_DECF16                      :   "", // DECFLOAT16 todo: param text
  //IV_GENERATE                    :  "X", // CHAR (1) todo: param text
  //IV_LANGU                       :  "E", // LANG (1) ALPHA=ISOLA todo: param text
  //IV_LANGU_D                     :  "E", // LANG (1) ALPHA=ISOLA todo: param text
  //IV_STRING                      : "0123456789", // STRING todo: param text
  //IV_STRING_SIZE                 :    1, // INT8 todo: param text
  //IV_UNAME                       :   "", // CHAR (12) todo: param text
  //IV_UNAME_DOM                   :   "", // CHAR (12) todo: param text
  //IV_XSTRING                     :   "", // XSTRING todo: param text
  //IV_XSTRING_SIZE                :    1, // INT8 todo: param text

  // CHANGING PARAMETERS

  //CS_STRUCT                      :   {}, // /COE/RBP_S_FE_RFM_STRUCTURE todo: param text
  //CT_TABLE                       :   [], // /COE/RBP_T_FE_RFM_TABLE_TYPE todo: param text
  //CV_CKEY                        :   "", // CUKY (5) todo: param text
  //CV_INT                         :   "", // INT4 (10) todo: param text

  // TABLE PARAMETERS

  ET_OUTPUT                        :   [], // /COE/RBP_T_FE_RFM_TABLE_TYPE todo: param text
  ET_RAW                           :   [], // SDOKCNTBINS todo: param text

  // OUTPUT PARAMETERS

  ES_OUTPUT                        :   {}, // /COE/RBP_S_FE_RFM_STRUCTURE todo: param text
  EV_STRING                        :   "", // STRING todo: param text
  EV_XSTRING                       : "native ABAP type", // XSTRING todo: param text
};

//
// INPUT PARAMETERS
//

// IS_INPUT /COE/RBP_S_FE_RFM_STRUCTURE todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
IS_INPUT = {
  ZACCP                            :   "", // ACCP (6) todo: no field text
  ZCHAR                            :   "", // CHAR (10) todo: no field text
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZCLNT                            :   "", // CLNT (3) Client
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key
  ZCURR                            :  0.0, // CURR (8.2) todo: no field text
  ZDATS                            :   "", // DATS (8) todo: no field text
  ZDEC                             :    0, // DEC (8.2) todo: no field text
  ZDEC217                          :    0, // DEC (21.7) todo: no field text
  ZDECF16_MAX                      :  0.0, // D16R (8) todo: no field text
  ZDECF16_MIN                      :  0.0, // D16R (8) todo: no field text
  ZDECF34_MAX                      :  0.0, // D34R (16) todo: no field text
  ZDECF34_MIN                      :  0.0, // D34R (16) todo: no field text
  ZFLTP                            :  0.0, // FLTP (16.16) todo: no field text
  ZFLTP_MAX                        :  0.0, // FLTP (16.16) todo: no field text
  ZFLTP_MIN                        :  0.0, // FLTP (16.16) todo: no field text
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZINT1                            :    0, // INT1 (3) todo: no field text
  ZINT2                            :    0, // INT2 (5) todo: no field text
  ZINT4                            :    0, // INT4 (10) todo: no field text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  ZLCHR                            :   "", // LCHR (257) todo: no field text
  ZLRAW                            : bytes(), // LRAW (257) todo: no field text
  ZNUMC                            :   "", // NUMC (6) todo: no field text
  ZPREC                            :    0, // PREC (2) todo: no field text
  ZQUAN                            :  0.0, // QUAN (8.4) todo: no field text
  ZQUAN_SIGN                       :  0.0, // QUAN (13.3) Difference quantity in alternate unit of measure
  ZRAW                             : bytes(), // RAW (17) todo: no field text
  ZRAWSTRING                       : bytes(), // RSTR todo: no field text
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy
  ZSSTRING                         :   "", // SSTR (15) todo: no field text
  ZSTRING                          :   "", // STRG todo: no field text
  ZTIMS                            :   "", // TIMS (6) todo: no field text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
};
/* eslint-enable key-spacing */

//
// CHANGING PARAMETERS
//

// CS_STRUCT /COE/RBP_S_FE_RFM_STRUCTURE todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
CS_STRUCT = {
  ZACCP                            :   "", // ACCP (6) todo: no field text
  ZCHAR                            :   "", // CHAR (10) todo: no field text
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZCLNT                            :   "", // CLNT (3) Client
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key
  ZCURR                            :  0.0, // CURR (8.2) todo: no field text
  ZDATS                            :   "", // DATS (8) todo: no field text
  ZDEC                             :    0, // DEC (8.2) todo: no field text
  ZDEC217                          :    0, // DEC (21.7) todo: no field text
  ZDECF16_MAX                      :  0.0, // D16R (8) todo: no field text
  ZDECF16_MIN                      :  0.0, // D16R (8) todo: no field text
  ZDECF34_MAX                      :  0.0, // D34R (16) todo: no field text
  ZDECF34_MIN                      :  0.0, // D34R (16) todo: no field text
  ZFLTP                            :  0.0, // FLTP (16.16) todo: no field text
  ZFLTP_MAX                        :  0.0, // FLTP (16.16) todo: no field text
  ZFLTP_MIN                        :  0.0, // FLTP (16.16) todo: no field text
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZINT1                            :    0, // INT1 (3) todo: no field text
  ZINT2                            :    0, // INT2 (5) todo: no field text
  ZINT4                            :    0, // INT4 (10) todo: no field text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  ZLCHR                            :   "", // LCHR (257) todo: no field text
  ZLRAW                            : bytes(), // LRAW (257) todo: no field text
  ZNUMC                            :   "", // NUMC (6) todo: no field text
  ZPREC                            :    0, // PREC (2) todo: no field text
  ZQUAN                            :  0.0, // QUAN (8.4) todo: no field text
  ZQUAN_SIGN                       :  0.0, // QUAN (13.3) Difference quantity in alternate unit of measure
  ZRAW                             : bytes(), // RAW (17) todo: no field text
  ZRAWSTRING                       : bytes(), // RSTR todo: no field text
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy
  ZSSTRING                         :   "", // SSTR (15) todo: no field text
  ZSTRING                          :   "", // STRG todo: no field text
  ZTIMS                            :   "", // TIMS (6) todo: no field text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
};
/* eslint-enable key-spacing */

// CT_TABLE /COE/RBP_T_FE_RFM_TABLE_TYPE todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
CT_TABLE = {
  COUNTER                          :    0, // INT4 (10) Natural number
  ZACCP                            :   "", // ACCP (6) todo: no field text
  ZCHAR                            :   "", // CHAR (10) todo: no field text
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZCLNT                            :   "", // CLNT (3) Client
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key
  ZCURR                            :  0.0, // CURR (8.2) todo: no field text
  ZDATS                            :   "", // DATS (8) todo: no field text
  ZDEC                             :    0, // DEC (8.2) todo: no field text
  ZDECF16_MAX                      :  0.0, // D16R (8) todo: no field text
  ZDECF16_MIN                      :  0.0, // D16R (8) todo: no field text
  ZDECF34_MAX                      :  0.0, // D34R (16) todo: no field text
  ZDECF34_MIN                      :  0.0, // D34R (16) todo: no field text
  ZFLTP                            :  0.0, // FLTP (16.16) todo: no field text
  ZFLTP_MAX                        :  0.0, // FLTP (16.16) todo: no field text
  ZFLTP_MIN                        :  0.0, // FLTP (16.16) todo: no field text
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZINT1                            :    0, // INT1 (3) todo: no field text
  ZINT2                            :    0, // INT2 (5) todo: no field text
  ZINT4                            :    0, // INT4 (10) todo: no field text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA todo: no field text
  ZNUMC                            :   "", // NUMC (6) todo: no field text
  ZPREC                            :    0, // PREC (2) todo: no field text
  ZQUAN                            :  0.0, // QUAN (8.4) todo: no field text
  ZQUAN_SIGN                       :  0.0, // QUAN (13.3) Difference quantity in alternate unit of measure
  ZRAW                             : bytes(), // RAW (17) todo: no field text
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy
  ZTIMS                            :   "", // TIMS (6) todo: no field text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
};
/* eslint-enable key-spacing */

//
// TABLE PARAMETERS
//

// ET_OUTPUT /COE/RBP_T_FE_RFM_TABLE_TYPE todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
ET_OUTPUT = {
  COUNTER                          :    0, // INT4 (10) Natural number
  ZACCP                            :   "", // ACCP (6) todo: no field text
  ZCHAR                            :   "", // CHAR (10) todo: no field text
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZCLNT                            :   "", // CLNT (3) Client
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key
  ZCURR                            :  0.0, // CURR (8.2) todo: no field text
  ZDATS                            :   "", // DATS (8) todo: no field text
  ZDEC                             :    0, // DEC (8.2) todo: no field text
  ZDECF16_MAX                      :  0.0, // D16R (8) todo: no field text
  ZDECF16_MIN                      :  0.0, // D16R (8) todo: no field text
  ZDECF34_MAX                      :  0.0, // D34R (16) todo: no field text
  ZDECF34_MIN                      :  0.0, // D34R (16) todo: no field text
  ZFLTP                            :  0.0, // FLTP (16.16) todo: no field text
  ZFLTP_MAX                        :  0.0, // FLTP (16.16) todo: no field text
  ZFLTP_MIN                        :  0.0, // FLTP (16.16) todo: no field text
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZINT1                            :    0, // INT1 (3) todo: no field text
  ZINT2                            :    0, // INT2 (5) todo: no field text
  ZINT4                            :    0, // INT4 (10) todo: no field text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA todo: no field text
  ZNUMC                            :   "", // NUMC (6) todo: no field text
  ZPREC                            :    0, // PREC (2) todo: no field text
  ZQUAN                            :  0.0, // QUAN (8.4) todo: no field text
  ZQUAN_SIGN                       :  0.0, // QUAN (13.3) Difference quantity in alternate unit of measure
  ZRAW                             : bytes(), // RAW (17) todo: no field text
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy
  ZTIMS                            :   "", // TIMS (6) todo: no field text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
};
/* eslint-enable key-spacing */

// ET_RAW SDOKCNTBINS todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
ET_RAW = {
  LINE                             : bytes(), // RAW (1022) Line for binary document contents, length for upload
};
/* eslint-enable key-spacing */

//
// OUTPUT PARAMETERS
//

// ES_OUTPUT /COE/RBP_S_FE_RFM_STRUCTURE todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
ES_OUTPUT = {
  ZACCP                            :   "", // ACCP (6) todo: no field text
  ZCHAR                            :   "", // CHAR (10) todo: no field text
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZCLNT                            :   "", // CLNT (3) Client
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key
  ZCURR                            :  0.0, // CURR (8.2) todo: no field text
  ZDATS                            :   "", // DATS (8) todo: no field text
  ZDEC                             :    0, // DEC (8.2) todo: no field text
  ZDEC217                          :    0, // DEC (21.7) todo: no field text
  ZDECF16_MAX                      :  0.0, // D16R (8) todo: no field text
  ZDECF16_MIN                      :  0.0, // D16R (8) todo: no field text
  ZDECF34_MAX                      :  0.0, // D34R (16) todo: no field text
  ZDECF34_MIN                      :  0.0, // D34R (16) todo: no field text
  ZFLTP                            :  0.0, // FLTP (16.16) todo: no field text
  ZFLTP_MAX                        :  0.0, // FLTP (16.16) todo: no field text
  ZFLTP_MIN                        :  0.0, // FLTP (16.16) todo: no field text
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZINT1                            :    0, // INT1 (3) todo: no field text
  ZINT2                            :    0, // INT2 (5) todo: no field text
  ZINT4                            :    0, // INT4 (10) todo: no field text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  ZLCHR                            :   "", // LCHR (257) todo: no field text
  ZLRAW                            : bytes(), // LRAW (257) todo: no field text
  ZNUMC                            :   "", // NUMC (6) todo: no field text
  ZPREC                            :    0, // PREC (2) todo: no field text
  ZQUAN                            :  0.0, // QUAN (8.4) todo: no field text
  ZQUAN_SIGN                       :  0.0, // QUAN (13.3) Difference quantity in alternate unit of measure
  ZRAW                             : bytes(), // RAW (17) todo: no field text
  ZRAWSTRING                       : bytes(), // RSTR todo: no field text
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy
  ZSSTRING                         :   "", // SSTR (15) todo: no field text
  ZSTRING                          :   "", // STRG todo: no field text
  ZTIMS                            :   "", // TIMS (6) todo: no field text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
};
/* eslint-enable key-spacing */
