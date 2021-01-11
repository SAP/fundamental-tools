//
// BAPI_PROCOPERATION_GETCATALOGS 0.3
//

BAPI_PROCOPERATION_GETCATALOGS = {

  // INPUT PARAMETERS

  MATERIAL_GROUP                   :   "", // CHAR (9) Material Group
  //PLANT                          :   "", // CHAR (4) Plant
  //WITHOUT_MATERIAL_GRP           :   "", // CHAR (1) Search Independently of Material Group

  // TABLE PARAMETERS

  //RETURN                         :   [], // BAPIRETURN Return Messages
  VALID_CATALOGS                   :   [], // BAPICATALOG List of Valid Catalogs
};

//
// INPUT PARAMETERS
//

//
// TABLE PARAMETERS
//

// RETURN BAPIRETURN Return Messages

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  CODE                          : '',  // Message code
  LOG_MSG_NO                    : '',  // Application log: Internal message serial number
  LOG_NO                        : '',  // Application log: log number
  MESSAGE                       : '',  // Message Text
  MESSAGE_V1                    : '',  // Message Variable
  MESSAGE_V2                    : '',  // Message Variable
  MESSAGE_V3                    : '',  // Message Variable
  MESSAGE_V4                    : '',  // Message Variable
  TYPE                          : ''   // Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */

// VALID_CATALOGS BAPICATALOG List of Valid Catalogs

/* eslint-disable key-spacing */
// prettier-ignore
VALID_CATALOGS = {
  CATALOG                       : '',  // Identifier for allowed catalogs
  CAT_TEXT                      : '',  // Name of catalog
  PURCH_ORG                     : '',  // Purchasing organization
  SD_CATALOG                    : '',  // Indicator: SAP product catalog: business-to-business
  VENDOR                        : ''   // Vendor's account number
};
/* eslint-enable key-spacing */
