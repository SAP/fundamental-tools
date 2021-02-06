//
// BAPI_ALM_NOTIF_GET_DETAIL var: 1  struct: 2  table: 8  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

NUMBER                :           "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM

// TABLE PARAMETERS

// EXTENSIONOUT       :           [], // BAPIPAREX Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut
// NOTIFACTV          :           [], // BAPI2080_NOTACTVE Work Structure Activities
// NOTIFCAUS          :           [], // BAPI2080_NOTCAUSE Work table for causes
// NOTIFPARTNR        :           [], // BAPI2080_NOTPARTNRE Partner for Display
// NOTIFTASK          :           [], // BAPI2080_NOTTASKE Work table for tasks
// NOTITEM            :           [], // BAPI2080_NOTITEME Work Table for Notification Item
// NOTLONGTXT         :           [], // BAPI2080_NOTFULLTXTE BAPI Service Notification Long Text
// RETURN             :           [], // BAPIRET2 Return Parameters

// EXPORT PARAMETERS

// NOTIFHDTEXT        :           {}, // BAPI2080_NOTHDTXTE Text Fields for Notification Header
// NOTIFHEADER_EXPORT :           {}, // BAPI2080_NOTHDRE BAPI Service Notification Header
};

const result = await client.call("BAPI_ALM_NOTIF_GET_DETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

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

// BAPI2080_NOTACTVE  Work Structure Activities
const NOTIFACTV= [];

// prettier-ignore
const NOTIFACTV= {
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  ACT_KEY                          :   "", // NUMC (4) Consecutive Number of Activity
  ITEM_KEY                         :   "", // NUMC (4) Item Number in Item Record
  ACT_CAT_TYP                      :   "", // CHAR (1) Catalog Type - Activities
  ACT_CODEGRP                      :   "", // CHAR (8) Code Group - Activities
  ACT_CODE                         :   "", // CHAR (4) Activity Code
  ACTTEXT                          :   "", // CHAR (40) Activity Text
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CREATED_DATE                     :   "", // DATS (8) Date on Which Record Was Created
  CHANGED_BY                       :   "", // CHAR (12) Name of person who changed object
  CHANGED_DATE                     :   "", // DATS (8) Date of Last Change
  START_DATE                       :   "", // DATS (8) Start Date
  END_DATE                         :   "", // DATS (8) End Date
  LONG_TEXT                        :   "", // CHAR (1) Object Long Text Available
  PRILANG                          :   "", // CHAR (1) Primary language indicator for text segment
  START_TIME                       :   "", // TIMS (6) Start Time of Activity
  END_TIME                         :   "", // TIMS (6) End Time of Activity
  CREATED_TIME                     :   "", // TIMS (6) Time, at Which Record Was Added
  CHANGED_TIME                     :   "", // TIMS (6) Time of Change
  DELETE_FLAG                      :   "", // CHAR (1) Delete Data Record
  ACT_SORT_NO                      :   "", // NUMC (4) Sort Number for Activity
  TXT_ACTGRP                       :   "", // CHAR (40) Short Description of the Code Group
  TXT_ACTCD                        :   "", // CHAR (40) Activity Code Short Text
};

// BAPI2080_NOTCAUSE  Work table for causes
const NOTIFCAUS= [];

// prettier-ignore
const NOTIFCAUS= {
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  ITEM_KEY                         :   "", // NUMC (4) Item Number in Item Record
  CAUSE_KEY                        :   "", // NUMC (4) Sequential Number for Cause
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CREATED_DATE                     :   "", // DATS (8) Date on Which Record Was Created
  CHANGED_BY                       :   "", // CHAR (12) Name of person who changed object
  CHANGED_DATE                     :   "", // DATS (8) Date of Last Change
  CAUSETEXT                        :   "", // CHAR (40) Cause Text
  CAUSE_CAT_TYP                    :   "", // CHAR (1) Catalog Type - Causes
  CAUSE_CODEGRP                    :   "", // CHAR (8) Code Group - Causes
  CAUSE_CODE                       :   "", // CHAR (4) Cause Code
  LONG_TEXT                        :   "", // CHAR (1) Object Long Text Available
  PRILANG                          :   "", // CHAR (1) Primary language indicator for text segment
  CREATED_TIME                     :   "", // TIMS (6) Time, at Which Record Was Added
  CHANGED_TIME                     :   "", // TIMS (6) Time of Change
  DELETE_FLAG                      :   "", // CHAR (1) Delete Data Record
  CAUSE_SORT_NO                    :   "", // NUMC (4) Sort Number for Cause
  TXT_CAUSEGRP                     :   "", // CHAR (40) Short Description of the Code Group
  TXT_CAUSECD                      :   "", // CHAR (40) Cause Code Short Text
};

// BAPI2080_NOTPARTNRE  Partner for Display
const NOTIFPARTNR= [];

// prettier-ignore
const NOTIFPARTNR= {
  OBJECT_NO                        :   "", // CHAR (22) Object number SU3=ONR
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  COUNTER                          :   "", // NUMC (6) Counter for differentiation 6-digit
  OBJECT_TYPE                      :   "", // CHAR (3) Object Category
  PARTNER                          :   "", // CHAR (12) ALPHA=ALPHA Partner
  ORIGIN                           :   "", // CHAR (1) Data origin indicator
  CREAT_DATE                       :   "", // DATS (8) Date on Which Record Was Created
  POS_TIME                         :   "", // TIMS (6) Time, at Which Record Was Added
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CH_ON                            :   "", // DATS (8) Date of Last Change
  CH_AT                            :   "", // TIMS (6) Time of Change
  CHANGED_BY                       :   "", // CHAR (12) Name of person who changed object
  DELETE_FLAG                      :   "", // CHAR (1) Delete Data Record
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA Address number SU3=ADR
  PARTTIMEZO                       :   "", // CHAR (6) Time Zone for Partner
};

// BAPI2080_NOTTASKE  Work table for tasks
const NOTIFTASK= [];

// prettier-ignore
const NOTIFTASK= {
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  TASK_KEY                         :   "", // NUMC (4) Sequential Task Number SU3=IMA
  TASK_CAT_TYP                     :   "", // CHAR (1) Catalog Type - Tasks
  TASK_CODEGRP                     :   "", // CHAR (8) Code Group - Tasks
  TASK_CODE                        :   "", // CHAR (4) Task Code
  TASK_TEXT                        :   "", // CHAR (40) Short Text for Task
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CREATED_DATE                     :   "", // DATS (8) Date on Which Record Was Created
  CHANGED_BY                       :   "", // CHAR (12) Name of person who changed object
  CHANGED_DATE                     :   "", // DATS (8) Date of Last Change
  PLND_START_DATE                  :   "", // DATS (8) Planned Start Date
  PLND_END_DATE                    :   "", // DATS (8) Planned finish date
  OBJECT_NO                        :   "", // CHAR (22) Object Number for Status Management
  LONG_TEXT                        :   "", // CHAR (1) Object Long Text Available
  PRILANG                          :   "", // CHAR (1) Primary language indicator for text segment
  PLND_START_TIME                  :   "", // TIMS (6) Planned Start Time for Task
  PLND_END_TIME                    :   "", // TIMS (6) Planned Finish Time for Task
  CARRIED_OUT_BY                   :   "", // CHAR (12) Person Who Completed the Task
  CARRIED_OUT_DATE                 :   "", // DATS (8) Date on Which the Task Was Completed
  CARRIED_OUT_TIME                 :   "", // TIMS (6) Time at Which Task Was Completed
  RESUBMIT_DATE                    :   "", // DATS (8) Date on Which Task Was Resubmitted
  ITEM_KEY                         :   "", // NUMC (4) Item Number in Item Record
  CREATED_TIME                     :   "", // TIMS (6) Time, at Which Record Was Added
  CHANGED_TIME                     :   "", // TIMS (6) Time of Change
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Function of Person Responsible for Task SU3=PAR
  PARTNER                          :   "", // CHAR (12) ALPHA=ALPHA Person Responsible for Task (Partner Number)
  DELETE_FLAG                      :   "", // CHAR (1) Delete Data Record
  TASK_SORT_NO                     :   "", // NUMC (4) Sort Number for Task
  TXT_TASKGRP                      :   "", // CHAR (40) Short Description of the Code Group
  TXT_TASKCD                       :   "", // CHAR (40) Task Code Short Text
  STATUS                           :   "", // CHAR (40) System Status for Notification
  USERSTATUS_FLAG                  :   "", // CHAR (1) User Status Active
  USERSTATUS                       :   "", // CHAR (40) Field displaying user status
};

// BAPI2080_NOTITEME  Work Table for Notification Item
const NOTITEM= [];

// prettier-ignore
const NOTITEM= {
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  ITEM_KEY                         :   "", // NUMC (4) Item Number in Item Record
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CREATED_DATE                     :   "", // DATS (8) Date on Which Record Was Created
  CHANGED_BY                       :   "", // CHAR (12) Name of person who changed object
  CHANGED_DATE                     :   "", // DATS (8) Date of Last Change
  DESCRIPT                         :   "", // CHAR (40) Notification Item Short Text
  D_CAT_TYP                        :   "", // CHAR (1) Catalog Type - Problems/Defects
  D_CODEGRP                        :   "", // CHAR (8) Code Group - Problem
  D_CODE                           :   "", // CHAR (4) Problem or Damage Code
  DL_CAT_TYP                       :   "", // CHAR (1) Catalog Type - Object Parts
  DL_CODEGRP                       :   "", // CHAR (8) Code Group - Object Parts
  DL_CODE                          :   "", // CHAR (4) Part of Object
  ASSEMBLY                         :   "", // CHAR (18) ALPHA=MATN1 Assembly SU3=MAT
  LONG_TEXT                        :   "", // CHAR (1) Object Long Text Available
  PRILANG                          :   "", // CHAR (1) Primary language indicator for text segment
  POS_TIME                         :   "", // TIMS (6) Time, at Which Record Was Added
  CHANGE_TIME                      :   "", // TIMS (6) Time of Change
  DELETE_FLAG                      :   "", // CHAR (1) Delete Data Record
  ITEM_SORT_NO                     :   "", // NUMC (4) Sort Number for Item
  STXT_GRPCD                       :   "", // CHAR (40) Short Description of the Code Group
  TXT_PROBCD                       :   "", // CHAR (40) Problem Code Short Text
  TXT_GRPCD                        :   "", // CHAR (40) Short Description of the Code Group
  TXT_OBJPTCD                      :   "", // CHAR (40) Object Part Code Short Text
  CLASSIF                          :   "", // CHAR (18) Classification
  CLASSIF_DESC                     :   "", // CHAR (40) Class Description SU3=KBZ
  INTCLASSNR                       :   "", // NUMC (10) Internal Class Number
  TXT_PART                         :   "", // CHAR (40) Character field of length 40
  CLASS_TYPE                       :   "", // CHAR (3) Class Type SU3=KAR
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
  FIRST_OFFSET_TYPE_CODE_NAME      :   "", // CHAR (60) First Offset Type Description
  SECOND_OFFSET_TYPE_CODE_NAME     :   "", // CHAR (60) Second Offset Type Description
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  EQUIDESCR                        :   "", // CHAR (40) Description of Technical Object
  FUNCT_LOC                        :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  FUNCLDESCR                       :   "", // CHAR (40) Description of functional location
  MARKER_START_POINT               :   "", // CHAR (18) Marker for Start Point
  MARKER_DISTANCE_START_POINT      :   "", // CHAR (18) Distance between Marker and Start Point
  MARKER_END_POINT                 :   "", // CHAR (18) Marker for End Point
  MARKER_DISTANCE_END_POINT        :   "", // CHAR (18) Length Spec for Distance between Marker and End Point
  MARKER_DISTANCE_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Unit for the Distance from Marker
  MARKER_DISTANCE_UNIT_ISO         :   "", // CHAR (3) Unit for the Distance from Marker in ISO Code
  ASSEMBLY_LONG                    :   "", // CHAR (40) Assembly SU3=MAT
};

// BAPI2080_NOTFULLTXTE  BAPI Service Notification Long Text
const NOTLONGTXT= [];

// prettier-ignore
const NOTLONGTXT= {
  OBJTYPE                          :   "", // CHAR (10) Object Type SU3=OBJ
  OBJKEY                           :   "", // NUMC (8) Item Key: Defect; Cause, Task...
  FORMAT_COL                       :   "", // CHAR (2) Tag column
  TEXT_LINE                        :   "", // CHAR (132) Text Line
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

// BAPI2080_NOTHDTXTE  Text Fields for Notification Header

// prettier-ignore
const NOTIFHDTEXT= {
  DESCRIPTN                        :   "", // CHAR (40) Description of PM Assembly
  EQUIDESCR                        :   "", // CHAR (40) Description of Technical Object
  FUNCLDESCR                       :   "", // CHAR (40) Description of functional location
  DESCR_CODEGR                     :   "", // CHAR (40) Short Description of the Code Group
  CODE_TEXT                        :   "", // CHAR (40) Short Text for Coding
  KUNAME1                          :   "", // CHAR (35) Name 1
  MATL_DESC                        :   "", // CHAR (40) Material description
  DIVISION_TEXT                    :   "", // CHAR (20) Name
  CHANNEL_TEXT                     :   "", // CHAR (20) Name
  SECTOR_TEXT                      :   "", // CHAR (20) Name
  WORK_CNTR                        :   "", // CHAR (8) Work center SU3=AGR
  CNTR_DESCR                       :   "", // CHAR (40) Short description
  FIRST_OFFSET_TYPE_CODE_NAME      :   "", // CHAR (60) First Offset Type Description
  SECOND_OFFSET_TYPE_CODE_NAME     :   "", // CHAR (60) Second Offset Type Description
};

// BAPI2080_NOTHDRE  BAPI Service Notification Header

// prettier-ignore
const NOTIFHEADER_EXPORT= {
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
};
