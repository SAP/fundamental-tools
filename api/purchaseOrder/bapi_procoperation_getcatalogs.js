//
// BAPI_PROCOPERATION_GETCATALOGS var: 3  struct: 0  table: 2  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

MATERIAL_GROUP          :           "", // CHAR (9) Material Group SU3=MKL
// PLANT                :           "", // CHAR (4) Plant SU3=WRK
// WITHOUT_MATERIAL_GRP :           "", // CHAR (1) Search Independently of Material Group

// TABLE PARAMETERS

VALID_CATALOGS          :           [], // BAPICATALOG List of Valid Catalogs
// RETURN               :           [], // BAPIRETURN Return Messages
};

const result = await client.call("BAPI_PROCOPERATION_GETCATALOGS", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPICATALOG  List of Valid Catalogs
const VALID_CATALOGS= [];

// prettier-ignore
const VALID_CATALOGS= {
  CATALOG                          :   "", // CHAR (20) Identifier for allowed catalogs
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
  SD_CATALOG                       :   "", // CHAR (1) Indicator: SAP product catalog: business-to-business
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization SU3=EKO
  CAT_TEXT                         :   "", // CHAR (30) Name of catalog
};

// BAPIRETURN  Return Messages
const RETURN= [];

// prettier-ignore
const RETURN= {
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
  CODE                             :   "", // CHAR (5) Message code
  MESSAGE                          :   "", // CHAR (220) Message Text
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
};
