//
// BAPI_SERVICE_GET_DETAIL var: 2  struct: 1  table: 2  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

SERVICENUMBER         :           "", // CHAR (18) ALPHA=ALPHA Service Master Record Number SU3=ASN
// SERVICETEXTS       :        SPACE, // CHAR (1) Service Description

// TABLE PARAMETERS

RETURN                :           [], // BAPIRET2 Return Parameter
// SERVICETEXTLINES   :           [], // BAPISRVTXT Long Text of Service Master Record

// EXPORT PARAMETERS

// SERVICEGENERALDATA :           {}, // BAPISRV General Data on Service
};

const result = await client.call("BAPI_SERVICE_GET_DETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIRET2  Return Parameter
const RETURN= [];

// prettier-ignore
const RETURN= {
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
  ID                               :   "", // CHAR (20) Message Class
  NUMBER                           :   "", // NUMC (3) Message Number
  MESSAGE                          :   "", // CHAR (220) Message Text
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
  PARAMETER                        :   "", // CHAR (32) Parameter Name
  ROW                              :    0, // INT4 (10) Lines in parameter
  FIELD                            :   "", // CHAR (30) Field in parameter
  SYSTEM                           :   "", // CHAR (10) ALPHA=ALPHA Logical system from which message originates
};

// BAPISRVTXT  Long Text of Service Master Record
const SERVICETEXTLINES= [];

// prettier-ignore
const SERVICETEXTLINES= {
  SERVICE                          :   "", // CHAR (18) ALPHA=ALPHA Activity Number SU3=ASN
  TEXT_ID                          :   "", // CHAR (4) Text ID
  FORMAT_COL                       :   "", // CHAR (2) Tag column
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};


//
// EXPORT PARAMETERS
//

// BAPISRV  General Data on Service

// prettier-ignore
const SERVICEGENERALDATA= {
  SERVICE                          :   "", // CHAR (18) ALPHA=ALPHA Activity Number SU3=ASN
  MATL_GROUP                       :   "", // CHAR (9) Material Group SU3=MKL
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) Base unit of measure in ISO code
  SERV_CAT                         :   "", // CHAR (4) Service Category SU3=ASY
  EAN_UPC                          :   "", // CHAR (18) ALPHA=EAN11 International Article Number (EAN/UPC) SU3=EAN
  EAN_CAT                          :   "", // CHAR (2) Category of International Article Number (EAN)
  DIVISION                         :   "", // CHAR (2) Division SU3=SPA
  AUTH_GROUP                       :   "", // CHAR (4) Authorization Group
  P_STATUS                         :   "", // CHAR (2) General Purchasing Status for Service
  VALID_FROM                       :   "", // DATS (8) Validity Date for "Purchasing" Status
  VAL_CLASS                        :   "", // CHAR (4) Valuation Class
  HIER_SERV                        :   "", // CHAR (18) ALPHA=ALPHA Hierarchy Service Number
  WAGETYPE                         :   "", // CHAR (4) Wage Type
  SERV_TYPE                        :   "", // CHAR (3) Short Description of Service Type SU3=LBR
  EDITION                          :   "", // NUMC (4) Edition of Service Type SU3=AGB
  SSC_ITEM                         :   "", // CHAR (18) Standard Service Catalog Item
  TAX_IND                          :   "", // CHAR (1) Tax Indicator for Service (Purchasing)
  SHORT_TEXT                       :   "", // CHAR (40) Service Short Text
  CONV_NUM                         :  "0", // DEC (5) Numerator for conversion of MEINS into IWEIN
  CONV_DEN                         :  "0", // DEC (5) Denominator for Conversion (MEINS <-> IWEIN)
  WORK_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Unit for Work
  WORK_UOM_ISO                     :   "", // CHAR (3) Unit of work in ISO code
  FORMULA                          :   "", // CHAR (10) Formula Number
};
