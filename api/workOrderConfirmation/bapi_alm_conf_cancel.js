//
// BAPI_ALM_CONF_CANCEL var: 7  struct: 1  table: 0  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

CONFIRMATION           :           "", // NUMC (10) Confirmation SU3=RCK
CONFIRMATIONCOUNTER    :           "", // NUMC (8) Confirmation counter SU3=RZL
// CONFTEXT            :           "", // CHAR (40) Confirmation Text
// POSTGDATE           :           "", // DATS (8) Posting Date

// EXPORT PARAMETERS

// CREATED_CONF_COUNT  :           "", // NUMC (8) Confirmation counter for cancellation record SU3=RZL
// CREATED_CONF_NO     :           "", // NUMC (10) Confirmation of cancellation record SU3=RCK
// LOCKED              :           "", // CHAR (1) Indicator: Order is locked
// RETURN              :           {}, // BAPIRET2 Return Parameter
};

const result = await client.call("BAPI_ALM_CONF_CANCEL", parameters);

//
// IMPORT PARAMETERS
//


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
