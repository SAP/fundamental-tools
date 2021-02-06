//
// BAPI_CTREQUEST_CREATE_TASKS var: 1  struct: 1  table: 2  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

REQUESTID     :           "", // CHAR (20) Request number

// TABLE PARAMETERS

AUTHORLIST    :           [], // BAPISCTS12 List of task authors and task types
TASK_LIST     :           [], // BAPISCTS07 List of header information for the tasks

// EXPORT PARAMETERS

// RETURN     :           {}, // BAPIRET2 Return structure of the errors
};

const result = await client.call("BAPI_CTREQUEST_CREATE_TASKS", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPISCTS12  List of task authors and task types
const AUTHORLIST= [];

// prettier-ignore
const AUTHORLIST= {
  TASK_OWNER                       :   "", // CHAR (12) Owner of a Request or Task
};

// BAPISCTS07  List of header information for the tasks
const TASK_LIST= [];

// prettier-ignore
const TASK_LIST= {
  TASKID                           :   "", // CHAR (20) Request/Task
  TYPE                             :   "", // CHAR (1) Type of request/task
  STATUS                           :   "", // CHAR (1) Status of request/task
  AUTHOR                           :   "", // CHAR (12) Owner of a Request or Task
  TEXT                             :   "", // CHAR (60) Short Description of Repository Objects
  CHANGEDATE                       :   "", // DATS (8) Last Changed On
  CHANGETIME                       :   "", // TIMS (6) Last changed at
  REQUESTID                        :   "", // CHAR (20) Request/Task
};


//
// EXPORT PARAMETERS
//

// BAPIRET2  Return structure of the errors

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
