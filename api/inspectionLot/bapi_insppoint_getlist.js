//
// BAPI_INSPPOINT_GETLIST var: 4  struct: 1  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

INSPLOT           :           "", // NUMC (12) Inspection lot number SU3=QLS
INSPOPER          :           "", // CHAR (4) ALPHA=NUMCV Inspection lot operation number
// INSPPOINT_FROM :            1, // NUMC (6) First inspection point to be loaded
// INSPPOINT_TO   :       999999, // NUMC (6) Last inspection point to be loaded

// TABLE PARAMETERS

INSPPOINT_LIST    :           [], // BAPI2045L4 Inspection point list

// EXPORT PARAMETERS

// RETURN         :           {}, // BAPIRETURN1 Return value
};

const result = await client.call("BAPI_INSPPOINT_GETLIST", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI2045L4  Inspection point list
const INSPPOINT_LIST= [];

// prettier-ignore
const INSPPOINT_LIST= {
  INSPPOINT                        :   "", // NUMC (6) Inspection Point Number
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INSPOPER                         :   "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
};


//
// EXPORT PARAMETERS
//

// BAPIRETURN1  Return value

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
