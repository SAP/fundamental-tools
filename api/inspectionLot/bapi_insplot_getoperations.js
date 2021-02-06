//
// BAPI_INSPLOT_GETOPERATIONS var: 1  struct: 1  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

NUMBER           :           "", // NUMC (12) Inspection lot number SU3=QLS

// TABLE PARAMETERS

INSPOPER_LIST    :           [], // BAPI2045L2 List of inspection lot operations

// EXPORT PARAMETERS

// RETURN        :           {}, // BAPIRETURN1 Return parameter
};

const result = await client.call("BAPI_INSPLOT_GETOPERATIONS", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI2045L2  List of inspection lot operations
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

// BAPIRETURN1  Return parameter

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
