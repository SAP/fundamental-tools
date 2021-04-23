//
// /COE/RBP_PAM_NOTIF_CREATE exception: 0  struct: 2  table: 11  var: 2
//
// abap 2.3.0 at: 2021-04-23 11:59:34
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

IV_NOTIF_TYPE           :           "", // CHAR (2) no text (undefined) SU3=QMR
IS_NOTIF_HEADER_IN      :           {}, // BAPI2080_NOTHDRI no text (undefined)
// IV_NEW_NOTICE        :           "", // STRING no text (undefined)

// CHANGING PARAMETERS

// CT_EXTENSIONIN       :           [], // BAPIPAREX_T no text (undefined)
// CT_EXTENSIONOUT      :           [], // BAPIPAREX_T no text (undefined)
// CT_KEY_RELATIONSHIPS :           [], // /COE/BAPI2080_NOTKEYE_T no text (undefined)
// CT_NOTIFACTV         :           [], // ALM_ME_BAPI2080_NOTACTVI_T no text (undefined)
// CT_NOTIFCAUS         :           [], // ALM_ME_BAPI2080_NOTCAUSI_T no text (undefined)
// CT_NOTIFPARTNR       :           [], // ALM_ME_BAPI2080_NOTPARTNRI_T no text (undefined)
// CT_NOTIFTASK         :           [], // ALM_ME_BAPI2080_NOTTASKI_T no text (undefined)
// CT_NOTITEM           :           [], // ALM_ME_BAPI2080_NOTITEMI_T no text (undefined)

// EXPORT PARAMETERS

// ES_NOTIF_HEADER_OUT  :           {}, // BAPI2080_NOTHDRE no text (undefined)
// ET_NOTICE            :           [], // /COE/RBP_T_PAM_NOTICE_LOG no text (undefined)
// ET_RETURN            :           [], // BAPIRETTAB no text (undefined)
// ET_SYSSTATUS         :           [], // /COE/RBP_T_PAM_SYSSTATUS no text (undefined)
};

const result = await client.call("/COE/RBP_PAM_NOTIF_CREATE", parameters);

//
// IMPORT PARAMETERS
//

// BAPI2080_NOTHDRI  

// prettier-ignore
const IS_NOTIF_HEADER_IN = {
  PM_WKCTR_C                       :   "", // CHAR (8) Work center SU3=AGR
  USERSTATUS_INT                   :   "", // CHAR (5) Object status
};


//
// CHANGING PARAMETERS
//

// BAPIPAREX_T  
const CT_EXTENSIONIN = [];

// prettier-ignore
const CT_EXTENSIONIN_line = {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIPAREX_T  
const CT_EXTENSIONOUT = [];

// prettier-ignore
const CT_EXTENSIONOUT_line = {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// /COE/BAPI2080_NOTKEYE_T  
const CT_KEY_RELATIONSHIPS = [];

// prettier-ignore
const CT_KEY_RELATIONSHIPS_line = {
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

// ALM_ME_BAPI2080_NOTACTVI_T  
const CT_NOTIFACTV = [];

// prettier-ignore
const CT_NOTIFACTV_line = {
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

// ALM_ME_BAPI2080_NOTCAUSI_T  
const CT_NOTIFCAUS = [];

// prettier-ignore
const CT_NOTIFCAUS_line = {
  REFOBJECTKEY                     :   "", // CHAR (70) Object key
  CAUSE_KEY                        :   "", // NUMC (4) Sequential Number for Cause
  CAUSE_SORT_NO                    :   "", // NUMC (4) Sort Number for Cause
  ITEM_KEY                         :   "", // NUMC (4) Item Number in Item Record
  CAUSETEXT                        :   "", // CHAR (40) Cause Text
  CAUSE_CODEGRP                    :   "", // CHAR (8) Code Group - Causes
  CAUSE_CODE                       :   "", // CHAR (4) Cause Code
  ITEM_SORT_NO                     :   "", // NUMC (4) Sort Number for Item
};

// ALM_ME_BAPI2080_NOTPARTNRI_T  
const CT_NOTIFPARTNR = [];

// prettier-ignore
const CT_NOTIFPARTNR_line = {
  REFOBJECTKEY                     :   "", // CHAR (70) Object key
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTN_ROLE_OLD                   :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTNER                          :   "", // CHAR (12) ALPHA=ALPHA Partner
  PARTNER_OLD                      :   "", // CHAR (12) ALPHA=ALPHA Partner
};

// ALM_ME_BAPI2080_NOTTASKI_T  
const CT_NOTIFTASK = [];

// prettier-ignore
const CT_NOTIFTASK_line = {
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

// ALM_ME_BAPI2080_NOTITEMI_T  
const CT_NOTITEM = [];

// prettier-ignore
const CT_NOTITEM_line = {
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


//
// EXPORT PARAMETERS
//

// BAPI2080_NOTHDRE  

// prettier-ignore
const ES_NOTIF_HEADER_OUT = {
  PM_WKCTR_C                       :   "", // CHAR (8) Work center SU3=AGR
  USERSTATUS_INT                   :   "", // CHAR (5) Object status
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
