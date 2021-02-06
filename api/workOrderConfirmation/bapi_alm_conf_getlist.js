//
// BAPI_ALM_CONF_GETLIST var: 4  struct: 1  table: 3  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// COMPLETED     :           "", // CHAR (1) Confirmations for completed orders
// IN_PROCESS    :           "", // CHAR (1) Confirmations for orders "in process"
// OPERATION     :           "", // CHAR (4) ALPHA=NUMCV Operation SU3=VGN
// SUBOPERATION  :           "", // CHAR (4) ALPHA=NUMCV Suboperation

// TABLE PARAMETERS

CONFIRMATIONS    :           [], // BAPI_CONF_KEY Keys of Selected Confirmations
// CONF_RANGE    :           [], // BAPI_PP_CONFRANGE Confirmations to be selected
// ORDER_RANGE   :           [], // BAPI_PP_ORDERRANGE Orders to be selected

// EXPORT PARAMETERS

// RETURN        :           {}, // BAPIRET2 Return Parameter
};

const result = await client.call("BAPI_ALM_CONF_GETLIST", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI_CONF_KEY  Keys of Selected Confirmations
const CONFIRMATIONS= [];

// prettier-ignore
const CONFIRMATIONS= {
  CONF_NO                          :   "", // NUMC (10) Completion confirmation number for the operation SU3=RCK
  CONF_CNT                         :   "", // NUMC (8) Confirmation counter SU3=RZL
};

// BAPI_PP_CONFRANGE  Confirmations to be selected
const CONF_RANGE= [];

// prettier-ignore
const CONF_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // NUMC (10) Completion confirmation number for the operation SU3=RCK
  HIGH                             :   "", // NUMC (10) Completion confirmation number for the operation SU3=RCK
};

// BAPI_PP_ORDERRANGE  Orders to be selected
const ORDER_RANGE= [];

// prettier-ignore
const ORDER_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  HIGH                             :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
};


//
// EXPORT PARAMETERS
//

// BAPIRET2  Return Parameter

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
