//
// BAPI_PROCOPERATION_GETCATALOGS 
//
// rfmcall.py 1.0 at: 2021-01-12 14:46:14
//

// Variables : 3
// Structures: 0
// Tables    : 2
// Exceptions: 0

BAPI_PROCOPERATION_GETCATALOGS = {

  // INPUT PARAMETERS

  MATERIAL_GROUP                   :   "", // CHAR (9) Material Group
  //PLANT                          :   "", // CHAR (4) Plant
  //WITHOUT_MATERIAL_GRP           :   "", // CHAR (1) Search Independently of Material Group

  // TABLE PARAMETERS

  VALID_CATALOGS                   :   [], // BAPICATALOG List of Valid Catalogs
  //RETURN                         :   [], // BAPIRETURN Return Messages
};

//
// INPUT PARAMETERS
//

//
// TABLE PARAMETERS
//

// VALID_CATALOGS BAPICATALOG List of Valid Catalogs

/* eslint-disable key-spacing */
// prettier-ignore
VALID_CATALOGS = {
  CATALOG                          :   "", // CHAR (20) Identifier for allowed catalogs
  CAT_TEXT                         :   "", // CHAR (30) Name of catalog
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization
  SD_CATALOG                       :   "", // CHAR (1) Indicator: SAP product catalog: business-to-business
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number
};
/* eslint-enable key-spacing */

// RETURN BAPIRETURN Return Messages

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  CODE                             :   "", // CHAR (5) Message code
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  MESSAGE                          :   "", // CHAR (220) Message Text
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */
