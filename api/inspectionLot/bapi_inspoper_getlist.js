//
// BAPI_INSPOPER_GETLIST var: 2  struct: 2  table: 2  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// HANDHELD_APPLICATION :        SPACE, // CHAR (6) Handheld Application
// INSPLOT              :           "", // NUMC (12) Inspection Lot Number SU3=QLS

// TABLE PARAMETERS

// HANDHELD_WORKLIST    :           [], // BAPI2045L5 Worklist for Handheld Device
// INSPOPER_LIST        :           [], // BAPI2045L2 List of Inspection Lot Operations

// EXPORT PARAMETERS

// RETURN               :           {}, // BAPIRETURN1 Return Value
// RETURN2              :           {}, // BAPIRET2 Return parameter
};

const result = await client.call("BAPI_INSPOPER_GETLIST", parameters);

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

// BAPI2045L2  List of Inspection Lot Operations
const INSPOPER_LIST= [];

// prettier-ignore
const INSPOPER_LIST= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INSPOPER                         :   "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  TXT_OPER                         :   "", // CHAR (40) Short Text
  WORKCENTER                       :   "", // CHAR (8) Work Center SU3=QAP
  PLNT_WORKC                       :   "", // CHAR (4) Plant SU3=WRK
  TXT_WORKC                        :   "", // CHAR (40) Short Text
  IDI_SUBSYS                       :   "", // CHAR (6) Subsystem Identifier for QM Subsystem Interface
};


//
// EXPORT PARAMETERS
//

// BAPIRETURN1  Return Value

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
};

// BAPIRET2  Return parameter

// prettier-ignore
const RETURN2= {
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
