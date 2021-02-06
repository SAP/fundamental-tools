//
// BAPI_KANBAN_CHANGE var: 4  struct: 2  table: 3  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

KANBAN_ID                     :           "", // NUMC (10) Identification Number
KANBAN_CHANGE                 :           {}, // BAPI1075_KANBAN_CHANGE Change Kanban
KANBAN_CHANGEX                :           {}, // BAPI1075_KANBAN_CHANGEX Transfer Structure for Changing the Kanban
// CONSIDER_TRIGGER_POINT     :           "", // CHAR (1) Consideration of Trigger Point Logic
// EXCLUDE_STATUS_RESTRICTION :        SPACE, // CHAR (1) Exclude Authorization Check at Time of Kanban Status Change
// TESTRUN                    :           "", // CHAR (1) Switch to Simulation Mode for Write BAPIs

// TABLE PARAMETERS

RETURN                        :           [], // BAPIRET2 Return Parameter(s)
// EXTENSIONIN                :           [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
// EXTENSIONOUT               :           [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
};

const result = await client.call("BAPI_KANBAN_CHANGE", parameters);

//
// IMPORT PARAMETERS
//

// BAPI1075_KANBAN_CHANGE  Change Kanban

// prettier-ignore
const KANBAN_CHANGE= {
  STATUS                           :   "", // CHAR (1) Kanban status
  ACTUAL_QTY                       : "0.0", // QUAN (13.3) Actual quantity
  REQUESTED_QTY                    : "0.0", // QUAN (13.3) Quantity requested
  PLANNEDRECEIPT                   :  "0", // DEC (15) Planned Receipt
  DELETION_INDICATOR               :   "", // CHAR (1) Deletion Indicator for a Kanban
  BLOCKING_INDICATOR               :   "", // CHAR (1) Blocking indicator for kanban container
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
};

// BAPI1075_KANBAN_CHANGEX  Transfer Structure for Changing the Kanban

// prettier-ignore
const KANBAN_CHANGEX= {
  STATUS                           :   "", // CHAR (1) Updated information in related user data field
  ACTUAL_QTY                       :   "", // CHAR (1) Updated information in related user data field
  REQUESTED_QTY                    :   "", // CHAR (1) Updated information in related user data field
  PLANNEDRECEIPT                   :   "", // CHAR (1) Updated information in related user data field
  DELETION_INDICATOR               :   "", // CHAR (1) Updated information in related user data field
  BLOCKING_INDICATOR               :   "", // CHAR (1) Updated information in related user data field
};


//
// TABLE PARAMETERS
//

// BAPIRET2  Return Parameter(s)
const RETURN= [];

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

// BAPIPAREX  Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
const EXTENSIONIN= [];

// prettier-ignore
const EXTENSIONIN= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIPAREX  Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
const EXTENSIONOUT= [];

// prettier-ignore
const EXTENSIONOUT= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};
