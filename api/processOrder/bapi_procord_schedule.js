//
// BAPI_PROCORD_SCHEDULE var: 23  struct: 1  table: 3  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// BCK_BEG_DATE       :           "", // DATS (8) Basic Start Date
// BCK_BEG_OFFSET     :        "0.0", // QUAN (5) Date Shift
// BCK_BEG_ORIGIN     :           "", // CHAR (1) Origin of scheduling dates
// BCK_BEG_TIME       :           "", // TIMS (6) Basic Start (Time)
// BCK_BEG_UNIT       :           "", // UNIT (3) ALPHA=CUNIT Time Unit
// BCK_DLV_DATE       :           "", // DATS (8) Basic Finish Date
// BCK_DLV_OFFSET     :        "0.0", // QUAN (5) Date Shift
// BCK_DLV_ORIGIN     :           "", // CHAR (1) Origin of scheduling dates
// BCK_DLV_TIME       :           "", // TIMS (6) Basic finish (time)
// BCK_DLV_UNIT       :           "", // UNIT (3) ALPHA=CUNIT Time Unit
// FWD_BEG_DATE       :           "", // DATS (8) Basic Start Date
// FWD_BEG_OFFSET     :        "0.0", // QUAN (5) Date Shift
// FWD_BEG_ORIGIN     :           "", // CHAR (1) Origin of scheduling dates
// FWD_BEG_TIME       :           "", // TIMS (6) Basic Start (Time)
// FWD_BEG_UNIT       :           "", // UNIT (3) ALPHA=CUNIT Time Unit
// FWD_DLV_DATE       :           "", // DATS (8) Basic Finish Date
// FWD_DLV_OFFSET     :        "0.0", // QUAN (5) Date Shift
// FWD_DLV_ORIGIN     :           "", // CHAR (1) Origin of scheduling dates
// FWD_DLV_TIME       :           "", // TIMS (6) Basic finish (time)
// FWD_DLV_UNIT       :           "", // UNIT (3) ALPHA=CUNIT Time Unit
// SCHED_TYPE         :           "", // CHAR (1) Scheduling Type
// WORK_PROCESS_GROUP : 'COWORK_BAPI', // CHAR (20) Logon/Server Group Name
// WORK_PROCESS_MAX   :           99, // INT1 (3) Maximum number of work processes that can be used

// TABLE PARAMETERS

ORDERS                :           [], // BAPI_ORDER_KEY Order Numbers
// APPLICATION_LOG    :           [], // BAPI_ORDER_APPLICATION_LOG ApplicationLog Handle
// DETAIL_RETURN      :           [], // BAPI_ORDER_RETURN Return Structure for Order BAPIs

// EXPORT PARAMETERS

// RETURN             :           {}, // BAPIRET2 Return Parameters
};

const result = await client.call("BAPI_PROCORD_SCHEDULE", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI_ORDER_KEY  Order Numbers
const ORDERS= [];

// prettier-ignore
const ORDERS= {
  ORDER_NUMBER                     :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
};

// BAPI_ORDER_APPLICATION_LOG  ApplicationLog Handle
const APPLICATION_LOG= [];

// prettier-ignore
const APPLICATION_LOG= {
  LOG_HANDLE                       :   "", // CHAR (22) Application Log: Log Handle
  OBJECT                           :   "", // CHAR (20) Application log: Object name (Application code) SU3=BALOBJ
  SUBOBJECT                        :   "", // CHAR (20) Application Log: Subobject SU3=BALSUBOBJ
  EXTNUMBER                        :   "", // CHAR (100) Application Log: External ID SU3=BALEXT
  PROBCLASS                        :   "", // CHAR (1) Application Log: Log problem class
  MSG_CNT_A                        :    0, // INT4 (10) Application Log: Number of A messages
  MSG_CNT_E                        :    0, // INT4 (10) Application Log: Number of E messages
  MSG_CNT_W                        :    0, // INT4 (10) Application Log: Number of W messages
  MSG_CNT_I                        :    0, // INT4 (10) Application Log: Number of I messages
  MSG_CNT_S                        :    0, // INT4 (10) Application Log: Number of S messages
  LOG_ON_DB                        :   "", // CHAR (1) General Flag
};

// BAPI_ORDER_RETURN  Return Structure for Order BAPIs
const DETAIL_RETURN= [];

// prettier-ignore
const DETAIL_RETURN= {
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
