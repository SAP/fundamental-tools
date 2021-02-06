//
// BAPI_PROCORD_CREATE_FROM_PLORD var: 5  struct: 1  table: 0  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

PLANNED_ORDER      :           "", // CHAR (10) ALPHA=ALPHA Planned Order Number SU3=PAF
// ORDER_NUMBER    :           "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
// ORDER_TYPE      :           "", // CHAR (4) Order Type SU3=AAT

// EXPORT PARAMETERS

// PROC_ORDER_TYPE :           "", // CHAR (4) Order Type SU3=AAT
// PROCESS_ORDER   :           "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
// RETURN          :           {}, // BAPIRET2 Return Parameters
};

const result = await client.call("BAPI_PROCORD_CREATE_FROM_PLORD", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//

// BAPIRET2  Return Parameters

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
