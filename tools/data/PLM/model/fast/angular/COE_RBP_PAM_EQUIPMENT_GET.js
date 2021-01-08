//
// /COE/RBP_PAM_EQUIPMENT_GET 0.2
//

_COE_RBP_PAM_EQUIPMENT_GET = {

  // INPUT PARAMETERS

  IV_CHARACTERISTICS: '',                  // CHAR(1)    FLAG                           ?de: allgemeines flag
  IV_DOCUMENT: '',                         // CHAR(1)    FLAG                           ?de: allgemeines flag
  IV_EQUIID: '',                           // CHAR(18)   EQUNR                          ?de: Equipmentnummer
  IV_WITH_TIMESTATS: '',                   // CHAR(1)    FLAG                           ?de: allgemeines flag

  // OUTPUT PARAMETERS

  ES_HEADER: {},                           // /COE/RBP_S_PAM_EQUI_HEADER : ?de: Equipment Header
  ES_SPECIFIC: {},                         // BAPI_ITOB_EQ_ONLY : ?de: PM: BAPI-Struktur für ITOBAPI_CREATE_EQ_ONLY + READ-Felder
  ET_BRKDWN_EFF: [],                       // /COE/RBP_T_MCIT_BRKDWN_EFF : ?de: Breakdown Effective
  ET_BRKDWN_REP: [],                       // /COE/RBP_T_MCIT_BRKDWN_REP : ?de: Breakdown Report
  ET_CHARACTERISTICS: [],                  // /COE/RBP_T_PAM_CHARACTERISTICS : ?de: Characteristics
  ET_CHARACT_GROUP: [],                    // /COE/RBP_T_PAM_CHARACT_GROUP : ?de: Characteristics Group
  ET_DOCUMENT: [],                         // /COE/RBP_T_PAM_DOCUMENT : ?de: DMS Document Info
  ET_MCIQMADD: [],                         // /COE/RBP_T_MCIQMADD : ?de: Zusatzfelder Meldungskopf PMIS
  ET_RESULT: [],                           // /COE/RBP_T_MCIT_RESULT : ?de: Startup Iflo
  ET_RETURN: [],                           // BAPIRET2_TAB : ?de: Fehlermeldungen
  ET_STARTUP_EQUI: [],                     // /COE/RBP_T_MCIT_STARTUP_EQUI : ?de: Startup Equi
  ET_STARTUP_IFLO: [],                     // /COE/RBP_T_MCIT_STARTUP_IFLO : ?de: Startup Iflo
  ET_USER_STATUS: []                       // CWD_TT_ITOB_STATUS : todo: param text
};

//
// INPUT PARAMETERS
//

//
// OUTPUT PARAMETERS
//

// ES_HEADER /COE/RBP_S_PAM_EQUI_HEADER ?de: Equipment Header

/* eslint-disable key-spacing */
// prettier-ignore
ES_HEADER = {
  ABCINDIC                      : '',  // ABC indicator for technical object
  ACQDATE                       : '',  // Acquisition date
  ACQUISVAL                     : 0,  // Acquisition Value
  ASSET_NO                      : '',  // Main Asset Number
  AUTHGRP                       : '',  // Technical object authorization group
  BUS_AREA                      : '',  // Business Area
  CATPROFILE                    : '',  // Catalog Profile
  COMP_CODE                     : '',  // Company Code
  CONSTMONTH                    : '',  // Month of construction
  CONSTTYPE                     : '',  // Construction type material of the object
  CONSTTYPE_EXTERNAL            : '',  // Long Material Number for CONSTTYPE Field
  CONSTTYPE_GUID                : '',  // External GUID for CONSTTYPE Field
  CONSTTYPE_LONG                : '',  // Construction type material of the object
  CONSTTYPE_VERSION             : '',  // Version Number for CONSTTYPE Field
  CONSTYEAR                     : '',  // Year of construction
  COSTCENTER                    : '',  // Cost Center
  COUNTR_ISO                    : '',  // Country ISO code
  CURRENCY                      : '',  // Currency Key
  CURR_ISO                      : '',  // ISO currency code
  DESCRIPT                      : '',  // Description of Technical Object
  DISTR_CHAN                    : '',  // Distribution Channel
  DIVISION                      : '',  // Division
  END_POINT                     : '',  // End Point
  FIRST_OFFSET_TYPE_CODE        : '',  // Type of First Offset
  FIRST_OFFSET_UNIT             : '',  // Unit of Measurement for Offset 1
  FIRST_OFFSET_UNIT_ISO         : '',  // Unit of Measurement for Offset 1 in ISO Code
  FIRST_OFFSET_VALUE            : '',  // Value of Offset 1
  INVENTORY                     : '',  // Inventory number
  LINEAR_LENGTH                 : '',  // Length
  LINEAR_REFERENCE_PATTERN      : '',  // Linear Reference Pattern
  LINEAR_UNIT                   : '',  // Unit of Measurement for Linear Data
  LINEAR_UNIT_ISO               : '',  // Unit of Measurement for Linear Data in ISO Code
  MAINTLOC                      : '',  // Asset location
  MAINTPLANT                    : '',  // Maintenance plant
  MAINTROOM                     : '',  // Room
  MANCOUNTRY                    : '',  // Country of manufacture
  MANFACTURE                    : '',  // Manufacturer of asset
  MANMODEL                      : '',  // Manufacturer model number
  MANPARNO                      : '',  // Manufacturer part number
  MANSERNO                      : '',  // Manufacturer serial number
  MARKER_DISTANCE_END_POINT     : '',  // Length Spec for Distance between Marker and End Point
  MARKER_DISTANCE_START_POINT   : '',  // Distance between Marker and Start Point
  MARKER_DISTANCE_UNIT          : '',  // Unit for the Distance from Marker
  MARKER_DISTANCE_UNIT_ISO      : '',  // Unit for the Distance from Marker in ISO Code
  MARKER_END_POINT              : '',  // Marker for End Point
  MARKER_START_POINT            : '',  // Marker for Start Point
  OBJECTTYPE                    : '',  // Type of Technical Object
  OBJ_SIZE                      : '',  // Size/dimension
  OBJ_WEIGHT                    : 0,  // Weight of object
  PLANGROUP                     : '',  // Planner Group for Customer Service and Plant Maintenance
  PLANPLANT                     : '',  // Maintenance Planning Plant
  PLSECTN                       : '',  // Plant section
  PP_WKCTR                      : '',  // Object ID of PP work center
  READ_ADRNR                    : '',  // Address number
  READ_CHDAT                    : '',  // Date of Last Change
  READ_CHNAM                    : '',  // Name of person who changed object
  READ_CRDAT                    : '',  // Date on Which Record Was Created
  READ_CRNAM                    : '',  // Name of Person who Created the Object
  READ_OBJNR                    : '',  // Object number
  SALES_GRP                     : '',  // Sales group
  SALES_OFF                     : '',  // Sales office
  SALES_ORG                     : '',  // Sales Organization
  SECOND_OFFSET_TYPE_CODE       : '',  // Type of Second Offset
  SECOND_OFFSET_UNIT            : '',  // Unit of Measurement for Offset 2
  SECOND_OFFSET_UNIT_ISO        : '',  // Unit of Measurement for Offset 2 in ISO Code
  SECOND_OFFSET_VALUE           : '',  // Value of Offset 2
  SETTLORDER                    : '',  // Settlement order
  SHIFT_NOTE_NOTIFICATION_TYPE  : '',  // Notification Type for Shift Note for Object
  SHIFT_REPORT_TYPE             : '',  // Shift Report Type for Object
  SORTFIELD                     : '',  // Sort field
  STANDORDER                    : '',  // Standing order number
  START_FROM                    : '',  // Start-up Date of the Technical Object
  START_POINT                   : '',  // Start Point
  SUB_NUMBER                    : '',  // Asset Subnumber
  UNIT_ISO                      : '',  // ISO code for unit of measurement
  UNIT_OF_WT                    : '',  // Unit of weight
  WBS_ELEM                      : '',  // Work Breakdown Structure Element (WBS Element)
  WORK_CTR                      : ''   // Object ID of the Work Center
};
/* eslint-enable key-spacing */

// ES_SPECIFIC BAPI_ITOB_EQ_ONLY ?de: PM: BAPI-Struktur für ITOBAPI_CREATE_EQ_ONLY + READ-Felder

/* eslint-disable key-spacing */
// prettier-ignore
ES_SPECIFIC = {
  BATCH                         : '',  // Batch Number
  CONFIGMAT                     : '',  // Configurable Material
  CONFIGMAT_EXTERNAL            : '',  // Long Material Number for CONFIGMAT Field
  CONFIGMAT_GUID                : '',  // External GUID for CONFIGMAT Field
  CONFIGMAT_LONG                : '',  // Configurable Material
  CONFIGMAT_VERSION             : '',  // Version Number for CONFIGMAT Field
  CONFIG_CONTROL_IND            : '',  // General Indicator (Single Character)
  DELIVDATE                     : '',  // First delivery date of the equipment
  EQUICATGRY                    : '',  // Equipment category
  FREE_DATE1                    : '',  // Date, intended for SAP internal use
  FREE_DATE2                    : '',  // Date, intended for SAP internal use
  FREE_NOTE1                    : '',  // Technical information, intended for SAP internal use
  FREE_NOTE2                    : '',  // Technical information, intended for SAP internal use
  FREE_NUM1                     : '',  // Numerical field, intended for SAP internal use
  FREE_NUM2                     : '',  // Numerical field, intended for SAP internal use
  FUNC_ID                       : '',  // Function Identifier
  INST_POS                      : '',  // Equipment position at InstallLoc (Superior Equip./FunctLoc)
  IPPE_GUID                     : '',  // Internal Identification for PVS Objects
  IUID_TYPE                     : '',  // Structure Type of UII
  LICENSE                       : '',  // Equipment license number
  MANDRAWNO                     : '',  // Manufacturer drawing number
  MATERIAL                      : '',  // Material Number
  MATERIAL_EXTERNAL             : '',  // Long Material Number for MATERIAL Field
  MATERIAL_GUID                 : '',  // External GUID for MATERIAL Field
  MATERIAL_LONG                 : '',  // Material Number (40 Characters, needed f. technical reasons)
  MATERIAL_VERSION              : '',  // Version Number for MATERIAL Field
  READ_CUOBJ                    : '',  // Configuration (internal object number)
  READ_CUREF                    : '',  // Referenced Configuration
  READ_FLOC                     : '',  // Functional Location Label
  READ_MAINTENANCE_PLAN         : '',  // Maintenance Plan
  READ_MEASURING_POINT          : '',  // Measuring Point
  READ_SUPEQ                    : '',  // Superordinate Equipment
  READ_VALID_FROM               : '',  // Valid-From Date
  SERIALNO                      : '',  // Serial Number
  TECHID                        : '',  // Technical identification number
  TECHS                         : '',  // Parameter Variant/Standard Variant
  UII                           : '',  // Unique Item Identifier
  UII_PLANT                     : ''   // Plant Responsible for UII
};
/* eslint-enable key-spacing */

// ET_BRKDWN_EFF /COE/RBP_T_MCIT_BRKDWN_EFF ?de: Breakdown Effective

/* eslint-disable key-spacing */
// prettier-ignore
ET_BRKDWN_EFF = {
  EBDNR                         : 0,  // todo: no field text
  EBGND                         : '',  // System Date
  EBGNT                         : '',  // System Time
  EENDD                         : '',  // System Date
  EENDT                         : '',  // System Time
  ELSTD                         : '',  // System Date
  ELSTT                         : '',  // System Time
  EQUNR                         : '',  // Equipment Number
  NBDREP                        : 0,  // todo: no field text
  SPMON                         : '',  // Period to analyze - month
  TBRMIN                        : 0,  // todo: no field text
  TPLNR                         : '',  // Functional Location
  TTRMIN                        : 0   // todo: no field text
};
/* eslint-enable key-spacing */

// ET_BRKDWN_REP /COE/RBP_T_MCIT_BRKDWN_REP ?de: Breakdown Report

/* eslint-disable key-spacing */
// prettier-ignore
ET_BRKDWN_REP = {
  AUSBS                         : '',  // System Date
  AUSVN                         : '',  // System Date
  AUSZT                         : 0,  // todo: no field text
  AUZTB                         : '',  // System Time
  AUZTV                         : '',  // System Time
  EBDNR                         : 0,  // todo: no field text
  EQUNR                         : '',  // Equipment Number
  HAUSZT                        : 0,  // todo: no field text
  HIDDEN                        : '',  // todo: no field text
  MAUEH                         : '',  // Unit of Measurement
  QMNUM                         : '',  // Notification No
  TPLNR                         : ''   // Functional Location
};
/* eslint-enable key-spacing */

// ET_CHARACTERISTICS /COE/RBP_T_PAM_CHARACTERISTICS ?de: Characteristics

/* eslint-disable key-spacing */
// prettier-ignore
ET_CHARACTERISTICS = {
  ADDITIONAL_VAL                : '',  // Indicator: Additional Values
  BASE_UOM_ISO                  : '',  // Base unit of measure in ISO code
  CASE_SENSITIVE                : '',  // Case Sensitive
  CHARACT_GROUP                 : '',  // Characteristics Group
  CHAR_INHERITED                : '',  // Indicator: characteristic is inherited
  CLASS                         : '',  // Class number
  CURRENCY                      : '',  // Currency Key
  CURRENCY_ISO                  : '',  // ISO Currency Code
  DATA_TYPE                     : '',  // Data type of characteristic
  DEPARTMENT_VIEW               : '',  // Organizational Area
  DESCR_CHAR                    : '',  // Characteristic description
  DIN_KEY                       : '',  // Code letter
  ENTRY_OBLIGATORY              : '',  // Entry Required
  INTERVALS_ALLOWED             : '',  // Interval Values Allowed
  NAME_CHAR                     : '',  // Characteristic Name
  NUMBER_DECIMALS               : 0,  // Number of Decimal Places
  NUMBER_DIGITS                 : 0,  // Number of Characters
  OBJECT_TABLE                  : '',  // Table Name
  SIGN                          : '',  // Value with Plus or Minus Sign
  SINGLE_VALUE                  : '',  // Single Value
  TABLE_FIELD                   : '',  // Field Name
  TEMPLATE                      : '',  // Value with template
  TEMPLATE_LONG                 : '',  // Value with template (70 length, technically needed)
  UNIT                          : '',  // Unit of measurement
  UNIT_T_EXT                    : '',  // External Unit of Measurement in Technical Format (6-Char.)
  VALUE                         : '',  // Characteristic Value
  VALUE_FROM                    : 0,  // Internal floating point from
  VALUE_TO                      : 0   // Internal floating point value to
};
/* eslint-enable key-spacing */

// ET_CHARACT_GROUP /COE/RBP_T_PAM_CHARACT_GROUP ?de: Characteristics Group

/* eslint-disable key-spacing */
// prettier-ignore
ET_CHARACT_GROUP = {
  CHARACT_GROUP                 : '',  // Characteristics Group
  CHARACT_GROUP_NAME            : ''   // Characteristics Group Description
};
/* eslint-enable key-spacing */

// ET_DOCUMENT /COE/RBP_T_PAM_DOCUMENT ?de: DMS Document Info

/* eslint-disable key-spacing */
// prettier-ignore
ET_DOCUMENT = {
  BINARY_FLG                    : '',  // Flag for binary files
  CHANGED_AT                    : '',  // Time of change (UTC)
  CHANGED_BY                    : '',  // Name of person responsible
  CLASS                         : '',  // Document class
  CREATED_AT                    : '',  // Time of change (UTC)
  CREATED_BY                    : '',  // Name of person responsible
  DESCRIPTION                   : '',  // Short Description
  DOCUMENTNUMBER                : '',  // Document number
  DOCUMENTPART                  : '',  // Document part
  DOCUMENTTYPE                  : '',  // Document Type
  DOCUMENTVERSION               : '',  // Document version
  FILE_ID                       : '',  // ID for documents and relations
  FILE_NAME                     : '',  // Relative storage location of physical document
  FILE_SIZE                     : '',  // File size (in bytes)
  FIRST_LINE                    : '',  // Line number in internal table
  LAST_LINE                     : '',  // Line number in internal table
  MIMETYPE                      : '',  // HTML content type
  OBJID                         : '',  // ID for documents and relations
  PROPERTY                      : ''   // Component attribute for the application
};
/* eslint-enable key-spacing */

// ET_MCIQMADD /COE/RBP_T_MCIQMADD ?de: Zusatzfelder Meldungskopf PMIS

/* eslint-disable key-spacing */
// prettier-ignore
ET_MCIQMADD = {
  SABTG                         : 0,  // No. processing days creation to completion
  SACODE                        : 0,  // PMIS: number of activity codes
  SAUSZT                        : 0,  // Time To Repair
  SEQTBR                        : 0,  // Time Between Repair
  SGAUSZT                       : 0,  // Downtime entered
  SGMSAUS                       : 0,  // Number of machine breakdowns reported
  SMMAB                         : 0,  // No. of completed notifications
  SMOFN                         : 0,  // No.of recorded notifications
  SMSAUS                        : 0,  // Number of actual machine breakdowns
  SPMON                         : '',  // Period to analyze - month
  SSCODE                        : 0,  // PMIS: No.of damages
  SUCODE                        : 0,  // PMIS: No. of cause of damage codes
  SUNIT                         : ''   // Unit for Breakdown Duration
};
/* eslint-enable key-spacing */

// ET_RESULT /COE/RBP_T_MCIT_RESULT ?de: Startup Iflo

/* eslint-disable key-spacing */
// prettier-ignore
ET_RESULT = {
  EQUNR                         : '',  // Equipment Number
  NBDEFF                        : 0,  // todo: no field text
  SNBDREP                       : 0,  // todo: no field text
  SPMON                         : '',  // Period to analyze - month
  STBRHRS                       : 0,  // todo: no field text
  STTRHRS                       : 0,  // todo: no field text
  TPLNR                         : ''   // Functional Location
};
/* eslint-enable key-spacing */

// ET_RETURN BAPIRET2_TAB ?de: Fehlermeldungen

/* eslint-disable key-spacing */
// prettier-ignore
ET_RETURN = {
  FIELD                         : '',  // Field in parameter
  ID                            : '',  // Message Class
  LOG_MSG_NO                    : '',  // Application log: Internal message serial number
  LOG_NO                        : '',  // Application log: log number
  MESSAGE                       : '',  // Message Text
  MESSAGE_V1                    : '',  // Message Variable
  MESSAGE_V2                    : '',  // Message Variable
  MESSAGE_V3                    : '',  // Message Variable
  MESSAGE_V4                    : '',  // Message Variable
  NUMBER                        : '',  // Message Number
  PARAMETER                     : '',  // Parameter Name
  ROW                           : 0,  // Lines in parameter
  SYSTEM                        : '',  // Logical system from which message originates
  TYPE                          : ''   // Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */

// ET_STARTUP_EQUI /COE/RBP_T_MCIT_STARTUP_EQUI ?de: Startup Equi

/* eslint-disable key-spacing */
// prettier-ignore
ET_STARTUP_EQUI = {
  EQUNR                         : '',  // Equipment Number
  SOURCE                        : '',  // todo: no field text
  STARTUP                       : ''   // System Date
};
/* eslint-enable key-spacing */

// ET_STARTUP_IFLO /COE/RBP_T_MCIT_STARTUP_IFLO ?de: Startup Iflo

/* eslint-disable key-spacing */
// prettier-ignore
ET_STARTUP_IFLO = {
  SOURCE                        : '',  // todo: no field text
  STARTUP                       : '',  // System Date
  TPLNR                         : ''   // Functional Location
};
/* eslint-enable key-spacing */

// ET_USER_STATUS CWD_TT_ITOB_STATUS todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
ET_USER_STATUS = {
  DESCRIPTION                   : '',  // Object status
  STATUS                        : '',  // Object status
  TEXT                          : ''   // Individual status of an object (short form)
};
/* eslint-enable key-spacing */
