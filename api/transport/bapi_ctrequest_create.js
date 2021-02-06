//
// BAPI_CTREQUEST_CREATE var: 4  struct: 4  table: 2  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

AUTHOR          :           "", // CHAR (12) Author of request to be created
TEXT            :           "", // CHAR (60) Short text for the request to be created
// REQUEST_TYPE :           "", // CHAR (1) W = Customizing request, otherwise Workbench request
// PROJECT      :           {}, // BAPISCTS03 Project assignment for the request
// TRANSLAYER   :           {}, // BAPISCTS02 Transport layer of request

// TABLE PARAMETERS

TASK_LIST       :           [], // BAPISCTS07 List of header information for the tasks
// AUTHORLIST   :           [], // BAPISCTS12 List of task authors and task types

// EXPORT PARAMETERS

// REQUESTID    :           "", // CHAR (20) Number of the created request
// HEADER       :           {}, // BAPISCTS06 Header information for request
// RETURN       :           {}, // BAPIRET2 Return structure of the errors
};

const result = await client.call("BAPI_CTREQUEST_CREATE", parameters);

//
// IMPORT PARAMETERS
//

// BAPISCTS03  Project assignment for the request

// prettier-ignore
const PROJECT= {
  PROJECTTYP                       :   "", // CHAR (32) External Project System
  PROJECT_NR                       :   "", // CHAR (32) Project ID
};

// BAPISCTS02  Transport layer of request

// prettier-ignore
const TRANSLAYER= {
  LAYER_SET                        :   "", // CHAR (1) General Flag
  LAYER                            :   "", // CHAR (4) Transport Layer in ABAP Workbench
};


//
// TABLE PARAMETERS
//

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

// BAPISCTS12  List of task authors and task types
const AUTHORLIST= [];

// prettier-ignore
const AUTHORLIST= {
  TASK_OWNER                       :   "", // CHAR (12) Owner of a Request or Task
};


//
// EXPORT PARAMETERS
//

// BAPISCTS06  Header information for request

// prettier-ignore
const HEADER= {
  REQUESTID                        :   "", // CHAR (20) Request/Task
  TYPE                             :   "", // CHAR (1) Type of request/task
  STATUS                           :   "", // CHAR (1) Status of request/task
  AUTHOR                           :   "", // CHAR (12) Owner of a Request or Task
  TEXT                             :   "", // CHAR (60) Short Description of Repository Objects
  SRC_CLIENT                       :   "", // CHAR (3) Source client of request
  CHANGEDATE                       :   "", // DATS (8) Last Changed On
  CHANGETIME                       :   "", // TIMS (6) Last changed at
  TARGET                           :   "", // CHAR (10) Transport Target of Request
  PROJECTTYP                       :   "", // CHAR (30) Request attribute
  PROJECT_NR                       :   "", // CHAR (32) Attribute value
};

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
