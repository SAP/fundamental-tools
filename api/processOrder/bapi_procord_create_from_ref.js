//
// BAPI_PROCORD_CREATE_FROM_REF var: 2  struct: 2  table: 0  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

REFCOPY         :           {}, // BAPI_ORDER_COPY Transfer Structure PP/PI Order (Create with Template)

// EXPORT PARAMETERS

// ORDER_NUMBER :           "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
// ORDER_TYPE   :           "", // CHAR (4) Order Type SU3=AAT
// RETURN       :           {}, // BAPIRET2 Return Parameters
};

const result = await client.call("BAPI_PROCORD_CREATE_FROM_REF", parameters);

//
// IMPORT PARAMETERS
//

// BAPI_ORDER_COPY  Transfer Structure PP/PI Order (Create with Template)

// prettier-ignore
const REFCOPY= {
  ORDER_TYPE                       :   "", // CHAR (4) Order Type SU3=AAT
  ORDER_NUMBER                     :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
};


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
