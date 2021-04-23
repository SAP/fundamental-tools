//
// /COE/RBP_PAM_NOTIFICATION_GET exception: 0  struct: 1  table: 10  var: 2
//
// abap 2.3.0 at: 2021-04-23 11:59:34
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

IV_NOTIFNO         :           "", // CHAR (12) ALPHA=ALPHA no text (undefined) SU3=IQM
// IV_DOCUMENT     :           "", // CHAR (1) no text (undefined)

// EXPORT PARAMETERS

// ES_HEADER       :           {}, // BAPI2080_NOTHDRE no text (undefined)
// ET_DOCUMENT     :           [], // /COE/RBP_T_PAM_DOCUMENT no text (undefined)
// ET_EXTENSIONOUT :           [], // BAPIPAREX_T no text (undefined)
// ET_NOTICE       :           [], // /COE/RBP_T_PAM_NOTICE_LOG no text (undefined)
// ET_NOTIFACTV    :           [], // ALM_ME_BAPI2080_NOTACTVE_T no text (undefined)
// ET_NOTIFCAUS    :           [], // ALM_ME_BAPI2080_NOTCAUSE_T no text (undefined)
// ET_NOTIFPARTNR  :           [], // ALM_ME_BAPI2080_NOTPARTNRE_T no text (undefined)
// ET_NOTIFTASK    :           [], // ALM_ME_BAPI2080_NOTTASKE_T no text (undefined)
// ET_NOTITEM      :           [], // ALM_ME_BAPI2080_NOTITEME_T no text (undefined)
// ET_RETURN       :           [], // BAPIRETTAB no text (undefined)
// ET_SYSSTATUS    :           [], // /COE/RBP_T_PAM_SYSSTATUS no text (undefined)
};

const result = await client.call("/COE/RBP_PAM_NOTIFICATION_GET", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//

// BAPI2080_NOTHDRE  

// prettier-ignore
const ES_HEADER = {
  PM_WKCTR_C                       :   "", // CHAR (8) Work center SU3=AGR
  USERSTATUS_INT                   :   "", // CHAR (5) Object status
};

// /COE/RBP_T_PAM_DOCUMENT  
const ET_DOCUMENT = [];

// prettier-ignore
const ET_DOCUMENT_line = {
  CLASS                            :   "", // CHAR (10) Document class
  OBJID                            :   "", // CHAR (32) ID for documents and relations
  FILE_SIZE                        :   "", // NUMC (12) File size (in bytes)
  BINARY_FLG                       :   "", // CHAR (1) Flag for binary files
  FIRST_LINE                       :   "", // NUMC (12) Line number in internal table
  LAST_LINE                        :   "", // NUMC (12) Line number in internal table
  FILE_NAME                        :   "", // CHAR (255) Relative storage location of physical document
  MIMETYPE                         :   "", // CHAR (128) HTML content type
  PROPERTY                         :   "", // CHAR (4) Component attribute for the application
  DOCUMENTTYPE                     :   "", // CHAR (3) Document Type SU3=CV2
  DOCUMENTNUMBER                   :   "", // CHAR (25) ALPHA=ALPHA Document number SU3=CV1
  DOCUMENTVERSION                  :   "", // CHAR (2) Document version SU3=CV3
  DOCUMENTPART                     :   "", // CHAR (3) Document part SU3=CV4
  DESCRIPTION                      :   "", // CHAR (64) Short Description
  FILE_ID                          :   "", // CHAR (32) ID for documents and relations
  CREATED_BY                       :   "", // CHAR (12) Name of person responsible
  CREATED_AT                       :   "", // NUMC (14) ALPHA=TSTLC Time of change (UTC)
  CHANGED_BY                       :   "", // CHAR (12) Name of person responsible
  CHANGED_AT                       :   "", // NUMC (14) ALPHA=TSTLC Time of change (UTC)
};

// BAPIPAREX_T  
const ET_EXTENSIONOUT = [];

// prettier-ignore
const ET_EXTENSIONOUT_line = {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// /COE/RBP_T_PAM_NOTICE_LOG  
const ET_NOTICE = [];

// prettier-ignore
const ET_NOTICE_line = {
  DATETIME                         :  "0", // DEC (15) UTC Time Stamp in Short Form (YYYYMMDDhhmmss)
  TZONE                            :   "", // CHAR (6) Time Zone
  USERID                           :   "", // CHAR (12) User Name in User Master Record SU3=XUS
  HISTORY_LINE                     :   "", // CHAR (132) Text Line
  NOTICE                           :   "", // STRG Text for Note
};

// ALM_ME_BAPI2080_NOTACTVE_T  
const ET_NOTIFACTV = [];

// prettier-ignore
const ET_NOTIFACTV_line = {
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

// ALM_ME_BAPI2080_NOTCAUSE_T  
const ET_NOTIFCAUS = [];

// prettier-ignore
const ET_NOTIFCAUS_line = {
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

// ALM_ME_BAPI2080_NOTPARTNRE_T  
const ET_NOTIFPARTNR = [];

// prettier-ignore
const ET_NOTIFPARTNR_line = {
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

// ALM_ME_BAPI2080_NOTTASKE_T  
const ET_NOTIFTASK = [];

// prettier-ignore
const ET_NOTIFTASK_line = {
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

// ALM_ME_BAPI2080_NOTITEME_T  
const ET_NOTITEM = [];

// prettier-ignore
const ET_NOTITEM_line = {
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

// BAPIRETTAB  
const ET_RETURN = [];

// prettier-ignore
const ET_RETURN_line = {
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

// /COE/RBP_T_PAM_SYSSTATUS  
const ET_SYSSTATUS = [];

// prettier-ignore
const ET_SYSSTATUS_line = {
  SYSSTAUS_INT                     :   "", // CHAR (5) System status
  SYSSTATUS_EXT                    :   "", // CHAR (4) Individual status of an object (short form)
  SYSSTATUS_TXT                    :   "", // CHAR (30) Object status
};
