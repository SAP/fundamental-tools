//
// BAPI_INSPOPER_ACKNOWLEDGE var: 1  struct: 1  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

HANDHELD_APPLICATION    :           "", // CHAR (6) Handheld Application

// TABLE PARAMETERS

HANDHELD_WORKLIST       :           [], // BAPI2045L5 Worklist for Handheld Device

// EXPORT PARAMETERS

// RETURN               :           {}, // BAPIRET2 Return Value
};

const result = await client.call("BAPI_INSPOPER_ACKNOWLEDGE", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI2045L5  Worklist for Handheld Device
const HANDHELD_WORKLIST= [];

// prettier-ignore
const HANDHELD_WORKLIST= {
  HANDHELD_APPLICATION             :   "", // CHAR (6) Mobile Application
};


//
// EXPORT PARAMETERS
//

// BAPIRET2  Return Value

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
