//
// /COE/RBP_FE_DATATYPES exception: 1  struct: 3  table: 3  var: 15
//
// abap 2.2.0 at: 2021-03-29 15:40:08
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

IS_INPUT           :           {}, // /COE/RBP_S_FE_RFM_STRUCTURE no text (undefined)
// IV_COUNT        :          100, // INT4 (10) no text (undefined)
// IV_DECF16       :        "0.0", // DECFLOAT16 no text (undefined)
// IV_GENERATE     :          'X', // CHAR (1) no text (undefined)
// IV_LANGU        :          'E', // LANG (1) ALPHA=ISOLA no text (undefined)
// IV_LANGU_D      :          'E', // LANG (1) ALPHA=ISOLA no text (undefined)
// IV_STRING       : '0123456789', // STRING no text (undefined)
// IV_STRING_SIZE  :            1, // INT8 no text (undefined)
// IV_UNAME        :           '', // CHAR (12) no text (undefined)
// IV_UNAME_DOM    :           '', // CHAR (12) no text (undefined)
// IV_XSTRING      :      bytes(), // XSTRING no text (undefined)
// IV_XSTRING_SIZE :            1, // INT8 no text (undefined)

// CHANGING PARAMETERS

// CV_CKEY         :           "", // CUKY (5) no text (undefined) SU3=FWS
// CV_INT          :            0, // INT4 (10) no text (undefined)
// CS_STRUCT       :           {}, // /COE/RBP_S_FE_RFM_STRUCTURE no text (undefined)
// CT_TABLE        :           [], // /COE/RBP_T_FE_RFM_TABLE_TYPE no text (undefined)

// TABLE PARAMETERS

ET_OUTPUT          :           [], // /COE/RBP_T_FE_RFM_TABLE_TYPE no text (undefined)
ET_RAW             :           [], // SDOKCNTBINS no text (undefined)

// EXPORT PARAMETERS

// EV_STRING       :           "", // STRING no text (undefined)
// EV_XSTRING      :      bytes(), // XSTRING no text (undefined)
// ES_OUTPUT       :           {}, // /COE/RBP_S_FE_RFM_STRUCTURE no text (undefined)

// EXCEPTION PARAMETERS

// EX_EXCEPTION1                   // no text (undefined)
};

const result = await client.call("/COE/RBP_FE_DATATYPES", parameters);

//
// IMPORT PARAMETERS
//

// /COE/RBP_S_FE_RFM_STRUCTURE  

// prettier-ignore
const IS_INPUT= {
  ZACCP                            :   "", // ACCP (6) No field text
  ZCHAR                            :   "", // CHAR (10) No field text
  ZCLNT                            :   "", // CLNT (3) Client
  ZCURR                            : "0.0", // CURR (8.2) No field text
  ZDATS                            :   "", // DATS (8) No field text
  ZDEC                             :  "0", // DEC (8.2) No field text
  ZFLTP                            : "0.0", // FLTP (16.16) No field text
  ZINT1                            :    0, // INT1 (3) No field text
  ZINT2                            :    0, // INT2 (5) No field text
  ZINT4                            :    0, // INT4 (10) No field text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  ZLCHR                            :   "", // LCHR (257) No field text
  ZLRAW                            : bytes(), // LRAW (257) No field text
  ZNUMC                            :   "", // NUMC (6) No field text
  ZPREC                            :    0, // PREC (2) No field text
  ZQUAN                            : "0.0", // QUAN (8.4) No field text
  ZRAW                             : bytes(), // RAW (17) No field text
  ZRAWSTRING                       : bytes(), // RSTR No field text
  ZSTRING                          :   "", // STRG No field text
  ZSSTRING                         :   "", // SSTR (15) No field text
  ZTIMS                            :   "", // TIMS (6) No field text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key SU3=FWS
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy SU3=VPR
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  ZQUAN_SIGN                       : "0.0", // QUAN (13.3) Difference quantity in alternate unit of measure
  ZDECF16_MIN                      : "0.0", // D16R (8) No field text
  ZDECF16_MAX                      : "0.0", // D16R (8) No field text
  ZDECF34_MIN                      : "0.0", // D34R (16) No field text
  ZDECF34_MAX                      : "0.0", // D34R (16) No field text
  ZFLTP_MIN                        : "0.0", // FLTP (16.16) No field text
  ZFLTP_MAX                        : "0.0", // FLTP (16.16) No field text
  ZDEC217                          :  "0", // DEC (21.7) No field text
};


//
// CHANGING PARAMETERS
//

// /COE/RBP_S_FE_RFM_STRUCTURE  

// prettier-ignore
const CS_STRUCT= {
  ZACCP                            :   "", // ACCP (6) No field text
  ZCHAR                            :   "", // CHAR (10) No field text
  ZCLNT                            :   "", // CLNT (3) Client
  ZCURR                            : "0.0", // CURR (8.2) No field text
  ZDATS                            :   "", // DATS (8) No field text
  ZDEC                             :  "0", // DEC (8.2) No field text
  ZFLTP                            : "0.0", // FLTP (16.16) No field text
  ZINT1                            :    0, // INT1 (3) No field text
  ZINT2                            :    0, // INT2 (5) No field text
  ZINT4                            :    0, // INT4 (10) No field text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  ZLCHR                            :   "", // LCHR (257) No field text
  ZLRAW                            : bytes(), // LRAW (257) No field text
  ZNUMC                            :   "", // NUMC (6) No field text
  ZPREC                            :    0, // PREC (2) No field text
  ZQUAN                            : "0.0", // QUAN (8.4) No field text
  ZRAW                             : bytes(), // RAW (17) No field text
  ZRAWSTRING                       : bytes(), // RSTR No field text
  ZSTRING                          :   "", // STRG No field text
  ZSSTRING                         :   "", // SSTR (15) No field text
  ZTIMS                            :   "", // TIMS (6) No field text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key SU3=FWS
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy SU3=VPR
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  ZQUAN_SIGN                       : "0.0", // QUAN (13.3) Difference quantity in alternate unit of measure
  ZDECF16_MIN                      : "0.0", // D16R (8) No field text
  ZDECF16_MAX                      : "0.0", // D16R (8) No field text
  ZDECF34_MIN                      : "0.0", // D34R (16) No field text
  ZDECF34_MAX                      : "0.0", // D34R (16) No field text
  ZFLTP_MIN                        : "0.0", // FLTP (16.16) No field text
  ZFLTP_MAX                        : "0.0", // FLTP (16.16) No field text
  ZDEC217                          :  "0", // DEC (21.7) No field text
};

// /COE/RBP_T_FE_RFM_TABLE_TYPE  
const CT_TABLE= [];

// prettier-ignore
const CT_TABLE= {
  COUNTER                          :    0, // INT4 (10) Natural number
  ZACCP                            :   "", // ACCP (6) No field text
  ZCHAR                            :   "", // CHAR (10) No field text
  ZCLNT                            :   "", // CLNT (3) Client
  ZCURR                            : "0.0", // CURR (8.2) No field text
  ZDATS                            :   "", // DATS (8) No field text
  ZDEC                             :  "0", // DEC (8.2) No field text
  ZFLTP                            : "0.0", // FLTP (16.16) No field text
  ZINT1                            :    0, // INT1 (3) No field text
  ZINT2                            :    0, // INT2 (5) No field text
  ZINT4                            :    0, // INT4 (10) No field text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA No field text
  ZNUMC                            :   "", // NUMC (6) No field text
  ZPREC                            :    0, // PREC (2) No field text
  ZQUAN                            : "0.0", // QUAN (8.4) No field text
  ZRAW                             : bytes(), // RAW (17) No field text
  ZTIMS                            :   "", // TIMS (6) No field text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key SU3=FWS
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy SU3=VPR
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  ZQUAN_SIGN                       : "0.0", // QUAN (13.3) Difference quantity in alternate unit of measure
  ZDECF16_MIN                      : "0.0", // D16R (8) No field text
  ZDECF16_MAX                      : "0.0", // D16R (8) No field text
  ZDECF34_MIN                      : "0.0", // D34R (16) No field text
  ZDECF34_MAX                      : "0.0", // D34R (16) No field text
  ZFLTP_MIN                        : "0.0", // FLTP (16.16) No field text
  ZFLTP_MAX                        : "0.0", // FLTP (16.16) No field text
};


//
// TABLE PARAMETERS
//

// /COE/RBP_T_FE_RFM_TABLE_TYPE  
const ET_OUTPUT= [];

// prettier-ignore
const ET_OUTPUT= {
  COUNTER                          :    0, // INT4 (10) Natural number
  ZACCP                            :   "", // ACCP (6) No field text
  ZCHAR                            :   "", // CHAR (10) No field text
  ZCLNT                            :   "", // CLNT (3) Client
  ZCURR                            : "0.0", // CURR (8.2) No field text
  ZDATS                            :   "", // DATS (8) No field text
  ZDEC                             :  "0", // DEC (8.2) No field text
  ZFLTP                            : "0.0", // FLTP (16.16) No field text
  ZINT1                            :    0, // INT1 (3) No field text
  ZINT2                            :    0, // INT2 (5) No field text
  ZINT4                            :    0, // INT4 (10) No field text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA No field text
  ZNUMC                            :   "", // NUMC (6) No field text
  ZPREC                            :    0, // PREC (2) No field text
  ZQUAN                            : "0.0", // QUAN (8.4) No field text
  ZRAW                             : bytes(), // RAW (17) No field text
  ZTIMS                            :   "", // TIMS (6) No field text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key SU3=FWS
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy SU3=VPR
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  ZQUAN_SIGN                       : "0.0", // QUAN (13.3) Difference quantity in alternate unit of measure
  ZDECF16_MIN                      : "0.0", // D16R (8) No field text
  ZDECF16_MAX                      : "0.0", // D16R (8) No field text
  ZDECF34_MIN                      : "0.0", // D34R (16) No field text
  ZDECF34_MAX                      : "0.0", // D34R (16) No field text
  ZFLTP_MIN                        : "0.0", // FLTP (16.16) No field text
  ZFLTP_MAX                        : "0.0", // FLTP (16.16) No field text
};

// SDOKCNTBINS  
const ET_RAW= [];

// prettier-ignore
const ET_RAW= {
  LINE                             : bytes(), // RAW (1022) Line for binary document contents, length for upload
};


//
// EXPORT PARAMETERS
//

// /COE/RBP_S_FE_RFM_STRUCTURE  

// prettier-ignore
const ES_OUTPUT= {
  ZACCP                            :   "", // ACCP (6) No field text
  ZCHAR                            :   "", // CHAR (10) No field text
  ZCLNT                            :   "", // CLNT (3) Client
  ZCURR                            : "0.0", // CURR (8.2) No field text
  ZDATS                            :   "", // DATS (8) No field text
  ZDEC                             :  "0", // DEC (8.2) No field text
  ZFLTP                            : "0.0", // FLTP (16.16) No field text
  ZINT1                            :    0, // INT1 (3) No field text
  ZINT2                            :    0, // INT2 (5) No field text
  ZINT4                            :    0, // INT4 (10) No field text
  ZLANG                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  ZLCHR                            :   "", // LCHR (257) No field text
  ZLRAW                            : bytes(), // LRAW (257) No field text
  ZNUMC                            :   "", // NUMC (6) No field text
  ZPREC                            :    0, // PREC (2) No field text
  ZQUAN                            : "0.0", // QUAN (8.4) No field text
  ZRAW                             : bytes(), // RAW (17) No field text
  ZRAWSTRING                       : bytes(), // RSTR No field text
  ZSTRING                          :   "", // STRG No field text
  ZSSTRING                         :   "", // SSTR (15) No field text
  ZTIMS                            :   "", // TIMS (6) No field text
  ZUNIT_DTEL                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  ZCUKY_DTEL                       :   "", // CUKY (5) Currency Key SU3=FWS
  ZCHECKBOX                        :   "", // CHAR (1) Checkbox
  ZFVAL_LEIN_STATU                 :   "", // CHAR (1) Status of Storage Unit
  ZSHLP_DEBI                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  ZSHLP_PRODH                      :   "", // CHAR (18) Product hierarchy SU3=VPR
  ZSHLP_MAT1                       :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  ZQUAN_SIGN                       : "0.0", // QUAN (13.3) Difference quantity in alternate unit of measure
  ZDECF16_MIN                      : "0.0", // D16R (8) No field text
  ZDECF16_MAX                      : "0.0", // D16R (8) No field text
  ZDECF34_MIN                      : "0.0", // D34R (16) No field text
  ZDECF34_MAX                      : "0.0", // D34R (16) No field text
  ZFLTP_MIN                        : "0.0", // FLTP (16.16) No field text
  ZFLTP_MAX                        : "0.0", // FLTP (16.16) No field text
  ZDEC217                          :  "0", // DEC (21.7) No field text
};
