//
// BAPI_ALM_NOTIF_CREATE var: 6  struct: 4  table: 10  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

NOTIF_TYPE                       :           "", // CHAR (2) Notification Type SU3=QMR
NOTIFHEADER                      :           {}, // BAPI2080_NOTHDRI BAPI Service Notification for Creation
// DOCUMENT_ASSIGN_COPY          :        SPACE, // CHAR (1) Copy Document Assignment
// EXTERNAL_NUMBER               :           "", // CHAR (12) ALPHA=ALPHA Notification Number SU3=IQM
// IV_DONT_CHK_MANDATORY_PARTNER :           "", // CHAR (1) Do Not Check Mandatory Partner for Notification
// NOTIFCATION_COPY              :           "", // CHAR (12) ALPHA=ALPHA Reference Notification Number SU3=IQM
// ORDERID                       :           "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
// SENDER                        :           {}, // BAPI_SENDER Logical System of Sender
// TASK_DETERMINATION            :           {}, // BAPIFLAG Indicator

// TABLE PARAMETERS

// EXTENSIONIN                   :           [], // BAPIPAREX Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut
// EXTENSIONOUT                  :           [], // BAPIPAREX Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut
// KEY_RELATIONSHIPS             :           [], // BAPI2080_NOTKEYE Key Relationships
// LONGTEXTS                     :           [], // BAPI2080_NOTFULLTXTI Notif. Long Text
// NOTIFACTV                     :           [], // BAPI2080_NOTACTVI Notification Activities for Creation
// NOTIFCAUS                     :           [], // BAPI2080_NOTCAUSI Notification Cause for Creation
// NOTIFPARTNR                   :           [], // BAPI2080_NOTPARTNRI Partner for Creation/Change
// NOTIFTASK                     :           [], // BAPI2080_NOTTASKI Notification Task for Creation
// NOTITEM                       :           [], // BAPI2080_NOTITEMI Notification Item for Creation
// RETURN                        :           [], // BAPIRET2 Return Parameters

// EXPORT PARAMETERS

// NOTIFHEADER_EXPORT            :           {}, // BAPI2080_NOTHDRE BAPI Service Notification Header
};

const result = await client.call("BAPI_ALM_NOTIF_CREATE", parameters);

//
// IMPORT PARAMETERS
//

// BAPI2080_NOTHDRI  BAPI Service Notification for Creation

// prettier-ignore
const NOTIFHEADER= {
  PM_WKCTR_C                       :   "", // CHAR (8) Work center SU3=AGR
  USERSTATUS_INT                   :   "", // CHAR (5) Object status
};

// BAPI_SENDER  Logical System of Sender

// prettier-ignore
const SENDER= {
  LOG_SYSTEM                       :   "", // CHAR (10) ALPHA=ALPHA Logical system
};

// BAPIFLAG  Indicator

// prettier-ignore
const TASK_DETERMINATION= {
  BAPIFLAG                         :   "", // CHAR (1) Single-Character Flag
};


//
// TABLE PARAMETERS
//

// BAPIPAREX  Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut
const EXTENSIONIN= [];

// prettier-ignore
const EXTENSIONIN= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIPAREX  Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut
const EXTENSIONOUT= [];

// prettier-ignore
const EXTENSIONOUT= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPI2080_NOTKEYE  Key Relationships
const KEY_RELATIONSHIPS= [];

// prettier-ignore
const KEY_RELATIONSHIPS= {
  REFOBJECTTYPE                    :   "", // CHAR (10) Object Type SU3=OBJ
  REFOBJECTKEY                     :   "", // CHAR (70) Object key
  LOG_SYSTEM                       :   "", // CHAR (10) ALPHA=ALPHA Logical system
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  ITEM_KEY                         :   "", // NUMC (4) Item Number in Item Record
  CAUSE_KEY                        :   "", // NUMC (4) Sequential Number for Cause
  ACT_KEY                          :   "", // NUMC (4) Sequential Task Number SU3=IMA
  TASK_KEY                         :   "", // NUMC (4) Sequential Task Number SU3=IMA
  OBJECT_NO                        :   "", // CHAR (22) Object number SU3=ONR
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  COUNTER                          :   "", // NUMC (6) Counter for differentiation 6-digit
  PARTNER                          :   "", // CHAR (12) ALPHA=ALPHA Partner
};

// BAPI2080_NOTFULLTXTI  Notif. Long Text
const LONGTEXTS= [];

// prettier-ignore
const LONGTEXTS= {
  OBJTYPE                          :   "", // CHAR (10) Object Type SU3=OBJ
  OBJKEY                           :   "", // NUMC (8) Item Key: Defect; Cause, Task...
  FORMAT_COL                       :   "", // CHAR (2) Tag column
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};

// BAPI2080_NOTACTVI  Notification Activities for Creation
const NOTIFACTV= [];

// prettier-ignore
const NOTIFACTV= {
  REFOBJECTKEY                     :   "", // CHAR (70) Object key
  ACT_KEY                          :   "", // NUMC (4) Consecutive Number of Activity
  ACT_SORT_NO                      :   "", // NUMC (4) Sort Number for Activity
  ACTTEXT                          :   "", // CHAR (40) Activity Text
  ACT_CODEGRP                      :   "", // CHAR (8) Code Group - Activities
  ACT_CODE                         :   "", // CHAR (4) Activity Code
  START_DATE                       :   "", // DATS (8) Start Date
  START_TIME                       :   "", // TIMS (6) Start Time of Activity
  END_DATE                         :   "", // DATS (8) End Date
  END_TIME                         :   "", // TIMS (6) End Time of Activity
  ITEM_SORT_NO                     :   "", // NUMC (4) Sort Number for Item
};

// BAPI2080_NOTCAUSI  Notification Cause for Creation
const NOTIFCAUS= [];

// prettier-ignore
const NOTIFCAUS= {
  REFOBJECTKEY                     :   "", // CHAR (70) Object key
  CAUSE_KEY                        :   "", // NUMC (4) Sequential Number for Cause
  CAUSE_SORT_NO                    :   "", // NUMC (4) Sort Number for Cause
  ITEM_KEY                         :   "", // NUMC (4) Item Number in Item Record
  CAUSETEXT                        :   "", // CHAR (40) Cause Text
  CAUSE_CODEGRP                    :   "", // CHAR (8) Code Group - Causes
  CAUSE_CODE                       :   "", // CHAR (4) Cause Code
  ITEM_SORT_NO                     :   "", // NUMC (4) Sort Number for Item
};

// BAPI2080_NOTPARTNRI  Partner for Creation/Change
const NOTIFPARTNR= [];

// prettier-ignore
const NOTIFPARTNR= {
  REFOBJECTKEY                     :   "", // CHAR (70) Object key
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTN_ROLE_OLD                   :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTNER                          :   "", // CHAR (12) ALPHA=ALPHA Partner
  PARTNER_OLD                      :   "", // CHAR (12) ALPHA=ALPHA Partner
};

// BAPI2080_NOTTASKI  Notification Task for Creation
const NOTIFTASK= [];

// prettier-ignore
const NOTIFTASK= {
  REFOBJECTKEY                     :   "", // CHAR (70) Object key
  TASK_KEY                         :   "", // NUMC (4) Sequential Task Number SU3=IMA
  TASK_SORT_NO                     :   "", // NUMC (4) Sort Number for Task
  TASK_TEXT                        :   "", // CHAR (40) Short Text for Task
  TASK_CODEGRP                     :   "", // CHAR (8) Code Group - Tasks
  TASK_CODE                        :   "", // CHAR (4) Task Code
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Function of Person Responsible for Task SU3=PAR
  PARTNER                          :   "", // CHAR (12) ALPHA=ALPHA Person Responsible for Task (Partner Number)
  PLND_START_DATE                  :   "", // DATS (8) Planned Start Date
  PLND_START_TIME                  :   "", // TIMS (6) Planned Start Time for Task
  PLND_END_DATE                    :   "", // DATS (8) Planned finish date
  PLND_END_TIME                    :   "", // TIMS (6) Planned Finish Time for Task
  CARRIED_OUT_BY                   :   "", // CHAR (12) Person Who Completed the Task
  ITEM_SORT_NO                     :   "", // NUMC (4) Sort Number for Item
};

// BAPI2080_NOTITEMI  Notification Item for Creation
const NOTITEM= [];

// prettier-ignore
const NOTITEM= {
  REFOBJECTKEY                     :   "", // CHAR (70) Object key
  ITEM_KEY                         :   "", // NUMC (4) Item Number in Item Record
  ITEM_SORT_NO                     :   "", // NUMC (4) Sort Number for Item
  DESCRIPT                         :   "", // CHAR (40) Notification Item Short Text
  D_CODEGRP                        :   "", // CHAR (8) Code Group - Problem
  D_CODE                           :   "", // CHAR (4) Problem or Damage Code
  DL_CODEGRP                       :   "", // CHAR (8) Code Group - Object Parts
  DL_CODE                          :   "", // CHAR (4) Part of Object
  ASSEMBLY                         :   "", // CHAR (18) ALPHA=MATN1 Assembly SU3=MAT
  ASSEMBLY_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for Field ASSEMBLY
  ASSEMBLY_GUID                    :   "", // CHAR (32) External GUID for ASSEMBLY Field
  ASSEMBLY_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for ASSEMBLY Field
  START_POINT                      :   "", // CHAR (18) Start Point
  END_POINT                        :   "", // CHAR (18) End Point
  LINEAR_LENGTH                    :   "", // CHAR (18) Length
  LINEAR_UNIT                      :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Linear Data
  LINEAR_UNIT_ISO                  :   "", // CHAR (3) Unit of Measurement for Linear Data in ISO Code
  FIRST_OFFSET_TYPE_CODE           :   "", // CHAR (2) Type of First Offset
  FIRST_OFFSET_VALUE               :   "", // CHAR (18) Value of Offset 1
  FIRST_OFFSET_UNIT                :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Offset 1
  FIRST_OFFSET_UNIT_ISO            :   "", // CHAR (3) Unit of Measurement for Offset 1 in ISO Code
  SECOND_OFFSET_TYPE_CODE          :   "", // CHAR (2) Type of Second Offset
  SECOND_OFFSET_VALUE              :   "", // CHAR (18) Value of Offset 2
  SECOND_OFFSET_UNIT               :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Offset 2
  SECOND_OFFSET_UNIT_ISO           :   "", // CHAR (3) Unit of Measurement for Offset 2 in ISO Code
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  FUNCT_LOC                        :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  MARKER_START_POINT               :   "", // CHAR (18) Marker for Start Point
  MARKER_DISTANCE_START_POINT      :   "", // CHAR (18) Distance between Marker and Start Point
  MARKER_END_POINT                 :   "", // CHAR (18) Marker for End Point
  MARKER_DISTANCE_END_POINT        :   "", // CHAR (18) Length Spec for Distance between Marker and End Point
  MARKER_DISTANCE_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Unit for the Distance from Marker
  MARKER_DISTANCE_UNIT_ISO         :   "", // CHAR (3) Unit for the Distance from Marker in ISO Code
  ASSEMBLY_LONG                    :   "", // CHAR (40) Assembly SU3=MAT
};

// BAPIRET2  Return Parameters
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


//
// EXPORT PARAMETERS
//

// BAPI2080_NOTHDRE  BAPI Service Notification Header

// prettier-ignore
const NOTIFHEADER_EXPORT= {
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
};
