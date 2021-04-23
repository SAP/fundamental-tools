//
// /COE/RBP_PAM_EQUIPMENT_GET exception: 0  struct: 2  table: 11  var: 4
//
// abap 2.3.0 at: 2021-04-23 11:59:34
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// IV_CHARACTERISTICS :           "", // CHAR (1) no text (undefined)
// IV_DOCUMENT        :           "", // CHAR (1) no text (undefined)
// IV_EQUIID          :           "", // CHAR (18) ALPHA=ALPHA no text (undefined) SU3=EQN
// IV_WITH_TIMESTATS  :           "", // CHAR (1) no text (undefined)

// EXPORT PARAMETERS

// ES_HEADER          :           {}, // /COE/RBP_S_PAM_EQUI_HEADER no text (undefined)
// ES_SPECIFIC        :           {}, // BAPI_ITOB_EQ_ONLY no text (undefined)
// ET_BRKDWN_EFF      :           [], // /COE/RBP_T_MCIT_BRKDWN_EFF no text (undefined)
// ET_BRKDWN_REP      :           [], // /COE/RBP_T_MCIT_BRKDWN_REP no text (undefined)
// ET_CHARACT_GROUP   :           [], // /COE/RBP_T_PAM_CHARACT_GROUP no text (undefined)
// ET_CHARACTERISTICS :           [], // /COE/RBP_T_PAM_CHARACTERISTICS no text (undefined)
// ET_DOCUMENT        :           [], // /COE/RBP_T_PAM_DOCUMENT no text (undefined)
// ET_MCIQMADD        :           [], // /COE/RBP_T_MCIQMADD no text (undefined)
// ET_RESULT          :           [], // /COE/RBP_T_MCIT_RESULT no text (undefined)
// ET_RETURN          :           [], // BAPIRET2_TAB no text (undefined)
// ET_STARTUP_EQUI    :           [], // /COE/RBP_T_MCIT_STARTUP_EQUI no text (undefined)
// ET_STARTUP_IFLO    :           [], // /COE/RBP_T_MCIT_STARTUP_IFLO no text (undefined)
// ET_USER_STATUS     :           [], // CWD_TT_ITOB_STATUS no text (undefined)
};

const result = await client.call("/COE/RBP_PAM_EQUIPMENT_GET", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//

// /COE/RBP_S_PAM_EQUI_HEADER  

// prettier-ignore
const ES_HEADER = {
  AUTHGRP                          :   "", // CHAR (4) Technical object authorization group
  OBJECTTYPE                       :   "", // CHAR (10) Type of Technical Object
  INVENTORY                        :   "", // CHAR (25) Inventory number
  OBJ_SIZE                         :   "", // CHAR (18) Size/dimension
  OBJ_WEIGHT                       : "0.0", // QUAN (13.3) Weight of object
  UNIT_OF_WT                       :   "", // UNIT (3) ALPHA=CUNIT Unit of weight
  UNIT_ISO                         :   "", // CHAR (3) ISO code for unit of measurement
  ACQDATE                          :   "", // DATS (8) Acquisition date
  ACQUISVAL                        : "0.0", // CURR (13.2) Acquisition Value
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURR_ISO                         :   "", // CHAR (3) ISO currency code
  MANFACTURE                       :   "", // CHAR (30) Manufacturer of asset
  MANCOUNTRY                       :   "", // CHAR (3) Country of manufacture
  COUNTR_ISO                       :   "", // CHAR (2) Country ISO code
  MANSERNO                         :   "", // CHAR (30) Manufacturer serial number
  MANMODEL                         :   "", // CHAR (20) Manufacturer model number
  CONSTYEAR                        :   "", // CHAR (4) ALPHA=GJAHR Year of construction
  CONSTMONTH                       :   "", // CHAR (2) Month of construction
  START_FROM                       :   "", // DATS (8) Start-up Date of the Technical Object
  PLANPLANT                        :   "", // CHAR (4) Maintenance Planning Plant SU3=IWK
  CONSTTYPE                        :   "", // CHAR (18) ALPHA=MATN1 Construction type material of the object SU3=MAT
  MANPARNO                         :   "", // CHAR (30) Manufacturer part number
  PLANGROUP                        :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance SU3=IHG
  CATPROFILE                       :   "", // CHAR (9) Catalog Profile
  WORK_CTR                         :   "", // NUMC (8) Object ID of the Work Center
  DESCRIPT                         :   "", // CHAR (40) Description of Technical Object
  ABCINDIC                         :   "", // CHAR (1) ABC indicator for technical object
  SORTFIELD                        :   "", // CHAR (30) Sort field
  MAINTPLANT                       :   "", // CHAR (4) Maintenance plant SU3=SWK
  MAINTLOC                         :   "", // CHAR (10) Asset location
  MAINTROOM                        :   "", // CHAR (8) Room
  PLSECTN                          :   "", // CHAR (3) Plant section SU3=BBE
  PP_WKCTR                         :   "", // NUMC (8) Object ID of PP work center
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  WBS_ELEM                         :   "", // NUMC (8) ALPHA=ABPSP Work Breakdown Structure Element (WBS Element)
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number SU3=AN1
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber SU3=AN2
  STANDORDER                       :   "", // CHAR (12) ALPHA=ALPHA Standing order number
  SETTLORDER                       :   "", // CHAR (12) ALPHA=ALPHA Settlement order
  SALES_ORG                        :   "", // CHAR (4) Sales Organization SU3=VKO
  DISTR_CHAN                       :   "", // CHAR (2) Distribution Channel SU3=VTW
  DIVISION                         :   "", // CHAR (2) Division SU3=SPA
  SALES_OFF                        :   "", // CHAR (4) Sales office SU3=VKB
  SALES_GRP                        :   "", // CHAR (3) Sales group SU3=VKG
  READ_CRDAT                       :   "", // DATS (8) Date on Which Record Was Created
  READ_CRNAM                       :   "", // CHAR (12) Name of Person who Created the Object
  READ_CHDAT                       :   "", // DATS (8) Date of Last Change
  READ_CHNAM                       :   "", // CHAR (12) Name of person who changed object
  READ_ADRNR                       :   "", // CHAR (10) ALPHA=ALPHA Address number SU3=ADR
  CONSTTYPE_EXTERNAL               :   "", // CHAR (40) ALPHA=MATNL Long Material Number for CONSTTYPE Field
  CONSTTYPE_GUID                   :   "", // CHAR (32) External GUID for CONSTTYPE Field
  CONSTTYPE_VERSION                :   "", // CHAR (10) ALPHA=MATNW Version Number for CONSTTYPE Field
  READ_OBJNR                       :   "", // CHAR (22) Object number SU3=ONR
  SHIFT_REPORT_TYPE                :   "", // CHAR (10) Shift Report Type for Object
  SHIFT_NOTE_NOTIFICATION_TYPE     :   "", // CHAR (2) Notification Type for Shift Note for Object
  START_POINT                      :   "", // CHAR (18) Start Point
  END_POINT                        :   "", // CHAR (18) End Point
  LINEAR_LENGTH                    :   "", // CHAR (18) Length
  LINEAR_UNIT                      :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Linear Data
  FIRST_OFFSET_TYPE_CODE           :   "", // CHAR (2) Type of First Offset
  FIRST_OFFSET_VALUE               :   "", // CHAR (18) Value of Offset 1
  FIRST_OFFSET_UNIT                :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Offset 1
  SECOND_OFFSET_TYPE_CODE          :   "", // CHAR (2) Type of Second Offset
  SECOND_OFFSET_VALUE              :   "", // CHAR (18) Value of Offset 2
  SECOND_OFFSET_UNIT               :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Offset 2
  SECOND_OFFSET_UNIT_ISO           :   "", // CHAR (3) Unit of Measurement for Offset 2 in ISO Code
  LINEAR_UNIT_ISO                  :   "", // CHAR (3) Unit of Measurement for Linear Data in ISO Code
  FIRST_OFFSET_UNIT_ISO            :   "", // CHAR (3) Unit of Measurement for Offset 1 in ISO Code
  LINEAR_REFERENCE_PATTERN         :   "", // CHAR (10) Linear Reference Pattern SU3=LRP
  MARKER_START_POINT               :   "", // CHAR (18) Marker for Start Point
  MARKER_DISTANCE_START_POINT      :   "", // CHAR (18) Distance between Marker and Start Point
  MARKER_END_POINT                 :   "", // CHAR (18) Marker for End Point
  MARKER_DISTANCE_END_POINT        :   "", // CHAR (18) Length Spec for Distance between Marker and End Point
  MARKER_DISTANCE_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Unit for the Distance from Marker
  MARKER_DISTANCE_UNIT_ISO         :   "", // CHAR (3) Unit for the Distance from Marker in ISO Code
  CONSTTYPE_LONG                   :   "", // CHAR (40) Construction type material of the object SU3=MAT
};

// BAPI_ITOB_EQ_ONLY  

// prettier-ignore
const ES_SPECIFIC = {
  CONFIGMAT                        :   "", // CHAR (18) ALPHA=MATN1 Configurable Material
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  SERIALNO                         :   "", // CHAR (18) ALPHA=GERNR Serial Number SU3=SER
  EQUICATGRY                       :   "", // CHAR (1) Equipment category SU3=EQT
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  MANDRAWNO                        :   "", // CHAR (30) Manufacturer drawing number
  DELIVDATE                        :   "", // DATS (8) First delivery date of the equipment
  FREE_DATE1                       :   "", // DATS (8) Date, intended for SAP internal use
  FREE_NOTE1                       :   "", // CHAR (30) Technical information, intended for SAP internal use
  FREE_NUM1                        :   "", // NUMC (9) Numerical field, intended for SAP internal use
  TECHID                           :   "", // CHAR (25) Technical identification number
  LICENSE                          :   "", // CHAR (20) Equipment license number
  FREE_DATE2                       :   "", // DATS (8) Date, intended for SAP internal use
  FREE_NOTE2                       :   "", // CHAR (30) Technical information, intended for SAP internal use
  FREE_NUM2                        :   "", // NUMC (9) Numerical field, intended for SAP internal use
  READ_CUOBJ                       :   "", // NUMC (18) Configuration (internal object number) SU3=CUX
  READ_CUREF                       :   "", // CHAR (1) Referenced Configuration
  READ_SUPEQ                       :   "", // CHAR (18) ALPHA=ALPHA Superordinate Equipment
  READ_FLOC                        :   "", // CHAR (40) Functional Location Label
  INST_POS                         :   "", // CHAR (4) Equipment position at InstallLoc (Superior Equip./FunctLoc)
  CONFIGMAT_EXTERNAL               :   "", // CHAR (40) ALPHA=MATNL Long Material Number for CONFIGMAT Field
  CONFIGMAT_GUID                   :   "", // CHAR (32) External GUID for CONFIGMAT Field
  CONFIGMAT_VERSION                :   "", // CHAR (10) ALPHA=MATNW Version Number for CONFIGMAT Field
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  CONFIG_CONTROL_IND               :   "", // CHAR (1) General Indicator (Single Character)
  IPPE_GUID                        : Buffer.alloc(16), // RAW (16) Internal Identification for PVS Objects
  TECHS                            :   "", // CHAR (12) Parameter Variant/Standard Variant
  FUNC_ID                          :   "", // CHAR (40) Function Identifier
  UII                              :   "", // CHAR (72) Unique Item Identifier SU3=UII
  IUID_TYPE                        :   "", // CHAR (10) Structure Type of UII
  UII_PLANT                        :   "", // CHAR (4) Plant Responsible for UII SU3=WRK
  READ_MAINTENANCE_PLAN            :   "", // CHAR (12) ALPHA=ALPHA Maintenance Plan SU3=MPL
  READ_MEASURING_POINT             :   "", // CHAR (12) ALPHA=ALPHA Measuring Point SU3=IPT
  READ_VALID_FROM                  :   "", // DATS (8) Valid-From Date
  CONFIGMAT_LONG                   :   "", // CHAR (40) Configurable Material
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// /COE/RBP_T_MCIT_BRKDWN_EFF  
const ET_BRKDWN_EFF = [];

// prettier-ignore
const ET_BRKDWN_EFF_line = {
  EQUNR                            :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  TPLNR                            :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  SPMON                            :   "", // NUMC (6) ALPHA=PERI Period to analyze - month
  EBDNR                            :    0, // INT4 (10) No field text
  NBDREP                           :    0, // INT4 (10) No field text
  ELSTD                            :   "", // DATS (8) System Date
  ELSTT                            :   "", // TIMS (6) System Time
  EBGND                            :   "", // DATS (8) System Date
  EBGNT                            :   "", // TIMS (6) System Time
  EENDD                            :   "", // DATS (8) System Date
  EENDT                            :   "", // TIMS (6) System Time
  TBRMIN                           :  "0", // DEC (8) No field text
  TTRMIN                           :  "0", // DEC (8) No field text
};

// /COE/RBP_T_MCIT_BRKDWN_REP  
const ET_BRKDWN_REP = [];

// prettier-ignore
const ET_BRKDWN_REP_line = {
  EQUNR                            :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  TPLNR                            :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  EBDNR                            :    0, // INT4 (10) No field text
  QMNUM                            :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  AUSVN                            :   "", // DATS (8) System Date
  AUSBS                            :   "", // DATS (8) System Date
  AUZTV                            :   "", // TIMS (6) System Time
  AUZTB                            :   "", // TIMS (6) System Time
  AUSZT                            : "0.0", // FLTP (16.16) No field text
  MAUEH                            :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement
  HAUSZT                           :  "0", // DEC (10.2) No field text
  HIDDEN                           :   "", // CHAR (1) No field text
};

// /COE/RBP_T_PAM_CHARACT_GROUP  
const ET_CHARACT_GROUP = [];

// prettier-ignore
const ET_CHARACT_GROUP_line = {
  CHARACT_GROUP                    :   "", // CHAR (10) Characteristics Group
  CHARACT_GROUP_NAME               :   "", // CHAR (40) Characteristics Group Description
};

// /COE/RBP_T_PAM_CHARACTERISTICS  
const ET_CHARACTERISTICS = [];

// prettier-ignore
const ET_CHARACTERISTICS_line = {
  CLASS                            :   "", // CHAR (18) Class number SU3=KLA
  CHARACT_GROUP                    :   "", // CHAR (10) Characteristics Group
  VALUE                            :   "", // CHAR (30) Characteristic Value
  VALUE_FROM                       : "0.0", // FLTP (16.16) Internal floating point from
  VALUE_TO                         : "0.0", // FLTP (16.16) Internal floating point value to
  NAME_CHAR                        :   "", // CHAR (30) Characteristic Name SU3=FEA
  DESCR_CHAR                       :   "", // CHAR (30) Characteristic description
  ENTRY_OBLIGATORY                 :   "", // CHAR (1) Entry Required
  ADDITIONAL_VAL                   :   "", // CHAR (1) Indicator: Additional Values
  UNIT                             :   "", // UNIT (3) ALPHA=CUNIT Unit of measurement
  UNIT_T_EXT                       :   "", // CHAR (6) External Unit of Measurement in Technical Format (6-Char.)
  BASE_UOM_ISO                     :   "", // CHAR (3) Base unit of measure in ISO code
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO Currency Code
  DATA_TYPE                        :   "", // CHAR (4) Data type of characteristic
  NUMBER_DIGITS                    :    0, // INT2 (5) Number of Characters
  NUMBER_DECIMALS                  :    0, // INT2 (5) Number of Decimal Places
  TEMPLATE                         :   "", // CHAR (30) Value with template
  DIN_KEY                          :   "", // CHAR (3) Code letter
  DEPARTMENT_VIEW                  :   "", // CHAR (10) Organizational Area SU3=VIEW
  SIGN                             :   "", // CHAR (1) Value with Plus or Minus Sign
  SINGLE_VALUE                     :   "", // CHAR (1) Single Value
  INTERVALS_ALLOWED                :   "", // CHAR (1) Interval Values Allowed
  CASE_SENSITIVE                   :   "", // CHAR (1) Case Sensitive
  OBJECT_TABLE                     :   "", // CHAR (30) Table Name
  TABLE_FIELD                      :   "", // CHAR (30) Field Name
  CHAR_INHERITED                   :   "", // CHAR (1) Indicator: characteristic is inherited
  TEMPLATE_LONG                    :   "", // CHAR (70) Value with template (70 length, technically needed)
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

// /COE/RBP_T_MCIQMADD  
const ET_MCIQMADD = [];

// prettier-ignore
const ET_MCIQMADD_line = {
  SMOFN                            :  "0", // DEC (9) No.of recorded notifications
  SMMAB                            :  "0", // DEC (9) No. of completed notifications
  SABTG                            :  "0", // DEC (9) No. processing days creation to completion
  SMSAUS                           :  "0", // DEC (9) Number of actual machine breakdowns
  SAUSZT                           : "0.0", // QUAN (13.3) Time To Repair
  SEQTBR                           : "0.0", // QUAN (13.3) Time Between Repair
  SPMON                            :   "", // NUMC (6) ALPHA=PERI Period to analyze - month
  SGMSAUS                          :  "0", // DEC (9) Number of machine breakdowns reported
  SGAUSZT                          : "0.0", // QUAN (13.3) Downtime entered
  SUNIT                            :   "", // UNIT (3) ALPHA=CUNIT Unit for Breakdown Duration
  SSCODE                           :  "0", // DEC (9) PMIS: No.of damages
  SUCODE                           :  "0", // DEC (9) PMIS: No. of cause of damage codes
  SACODE                           :  "0", // DEC (9) PMIS: number of activity codes
};

// /COE/RBP_T_MCIT_RESULT  
const ET_RESULT = [];

// prettier-ignore
const ET_RESULT_line = {
  EQUNR                            :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  TPLNR                            :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  SPMON                            :   "", // NUMC (6) ALPHA=PERI Period to analyze - month
  NBDEFF                           :    0, // INT4 (10) No field text
  SNBDREP                          :    0, // INT4 (10) No field text
  STTRHRS                          :  "0", // DEC (12.3) No field text
  STBRHRS                          :  "0", // DEC (12.3) No field text
};

// BAPIRET2_TAB  
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

// /COE/RBP_T_MCIT_STARTUP_EQUI  
const ET_STARTUP_EQUI = [];

// prettier-ignore
const ET_STARTUP_EQUI_line = {
  EQUNR                            :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  STARTUP                          :   "", // DATS (8) System Date
  SOURCE                           :   "", // CHAR (1) No field text
};

// /COE/RBP_T_MCIT_STARTUP_IFLO  
const ET_STARTUP_IFLO = [];

// prettier-ignore
const ET_STARTUP_IFLO_line = {
  TPLNR                            :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  STARTUP                          :   "", // DATS (8) System Date
  SOURCE                           :   "", // CHAR (1) No field text
};

// CWD_TT_ITOB_STATUS  
const ET_USER_STATUS = [];

// prettier-ignore
const ET_USER_STATUS_line = {
  STATUS                           :   "", // CHAR (5) Object status
  TEXT                             :   "", // CHAR (4) Individual status of an object (short form)
  DESCRIPTION                      :   "", // CHAR (30) Object status
};
