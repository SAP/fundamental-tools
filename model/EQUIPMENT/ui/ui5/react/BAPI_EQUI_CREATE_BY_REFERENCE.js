//
// BAPI_EQUI_CREATE_BY_REFERENCE 
//
// rfmcall.py 1.0 at: 2021-01-13 11:10:10
//

// Variables : 4
// Structures: 4
// Tables    : 1
// Exceptions: 0

BAPI_EQUI_CREATE_BY_REFERENCE = {

  // INPUT PARAMETERS

  REFERENCE_NUMBER                 :   "", // CHAR (18) ALPHA=ALPHA Number of Equipment Reference
  //COPY_FLAGS                     :   {}, // BAPI_ITOB_EQ_COPY_FLAGS Indicators for Sub-Objects to be Copied from Reference
  //EXTERNAL_NUMBER                :   "", // CHAR (18) ALPHA=ALPHA Number of Equipment to be Created (Initial => Internal Assignment)
  //VALID_DATE                     :   "", // DATS (8) Valid-From Date for Equipment to be Created

  // TABLE PARAMETERS

  //EXTENSIONOUT                   :   [], // BAPIPAREX todo: param text

  // OUTPUT PARAMETERS

  DATA_GENERAL_EXP                 :   {}, // BAPI_ITOB General Data for Technical Objects
  DATA_SPECIFIC_EXP                :   {}, // BAPI_ITOB_EQ_ONLY Equipment-Specific data
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Number of Equipment Created
  RETURN                           :   {}, // BAPIRET2 Return Parameter
};

//
// INPUT PARAMETERS
//

// COPY_FLAGS BAPI_ITOB_EQ_COPY_FLAGS Indicators for Sub-Objects to be Copied from Reference

/* eslint-disable key-spacing */
// prettier-ignore
COPY_FLAGS = {
  CP_DOCUMT                        :   "", // CHAR (1) Checkbox: Copy document assignments
  CP_INSTLOC                       :   "", // CHAR (1) Checkbox: Copy installation location
  CP_INTNOTE                       :   "", // CHAR (1) Checkbox: Copy internal note
  CP_LONGTXT                       :   "", // CHAR (1) Checkbox: Copy long text in logon language
  CP_MEASPT                        :   "", // CHAR (1) Checkbox: Copy measuring points and counters
  CP_MPT_DOC                       :   "", // CHAR (1) Checkbox: Copy measuring points with document allocations
  CP_MPT_TXT                       :   "", // CHAR (1) Checkbox: Copy measuring points with long text
  CP_PARTNER                       :   "", // CHAR (1) Checkbox: Copy partner allocation
};
/* eslint-enable key-spacing */

//
// TABLE PARAMETERS
//

// EXTENSIONOUT BAPIPAREX todo: param text

/* eslint-disable key-spacing */
// prettier-ignore
EXTENSIONOUT = {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};
/* eslint-enable key-spacing */

//
// OUTPUT PARAMETERS
//

// DATA_GENERAL_EXP BAPI_ITOB General Data for Technical Objects

/* eslint-disable key-spacing */
// prettier-ignore
DATA_GENERAL_EXP = {
  ABCINDIC                         :   "", // CHAR (1) ABC indicator for technical object
  ACQDATE                          :   "", // DATS (8) Acquisition date
  ACQUISVAL                        :  0.0, // CURR (13.2) Acquisition Value
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number
  AUTHGRP                          :   "", // CHAR (4) Technical object authorization group
  BUS_AREA                         :   "", // CHAR (4) Business Area
  CATPROFILE                       :   "", // CHAR (9) Catalog Profile
  COMP_CODE                        :   "", // CHAR (4) Company Code
  CONSTMONTH                       :   "", // CHAR (2) Month of construction
  CONSTTYPE                        :   "", // CHAR (18) ALPHA=MATN1 Construction type material of the object
  CONSTTYPE_EXTERNAL               :   "", // CHAR (40) ALPHA=MATNL Long Material Number for CONSTTYPE Field
  CONSTTYPE_GUID                   :   "", // CHAR (32) External GUID for CONSTTYPE Field
  CONSTTYPE_LONG                   :   "", // CHAR (40) Construction type material of the object
  CONSTTYPE_VERSION                :   "", // CHAR (10) ALPHA=MATNW Version Number for CONSTTYPE Field
  CONSTYEAR                        :   "", // CHAR (4) ALPHA=GJAHR Year of construction
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Cost Center
  COUNTR_ISO                       :   "", // CHAR (2) Country ISO code
  CURRENCY                         :   "", // CUKY (5) Currency Key
  CURR_ISO                         :   "", // CHAR (3) ISO currency code
  DESCRIPT                         :   "", // CHAR (40) Description of Technical Object
  DISTR_CHAN                       :   "", // CHAR (2) Distribution Channel
  DIVISION                         :   "", // CHAR (2) Division
  END_POINT                        :   "", // CHAR (18) End Point
  FIRST_OFFSET_TYPE_CODE           :   "", // CHAR (2) Type of First Offset
  FIRST_OFFSET_UNIT                :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Offset 1
  FIRST_OFFSET_UNIT_ISO            :   "", // CHAR (3) Unit of Measurement for Offset 1 in ISO Code
  FIRST_OFFSET_VALUE               :   "", // CHAR (18) Value of Offset 1
  INVENTORY                        :   "", // CHAR (25) Inventory number
  LINEAR_LENGTH                    :   "", // CHAR (18) Length
  LINEAR_REFERENCE_PATTERN         :   "", // CHAR (10) Linear Reference Pattern
  LINEAR_UNIT                      :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Linear Data
  LINEAR_UNIT_ISO                  :   "", // CHAR (3) Unit of Measurement for Linear Data in ISO Code
  MAINTLOC                         :   "", // CHAR (10) Asset location
  MAINTPLANT                       :   "", // CHAR (4) Maintenance plant
  MAINTROOM                        :   "", // CHAR (8) Room
  MANCOUNTRY                       :   "", // CHAR (3) Country of manufacture
  MANFACTURE                       :   "", // CHAR (30) Manufacturer of asset
  MANMODEL                         :   "", // CHAR (20) Manufacturer model number
  MANPARNO                         :   "", // CHAR (30) Manufacturer part number
  MANSERNO                         :   "", // CHAR (30) Manufacturer serial number
  MARKER_DISTANCE_END_POINT        :   "", // CHAR (18) Length Spec for Distance between Marker and End Point
  MARKER_DISTANCE_START_POINT      :   "", // CHAR (18) Distance between Marker and Start Point
  MARKER_DISTANCE_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Unit for the Distance from Marker
  MARKER_DISTANCE_UNIT_ISO         :   "", // CHAR (3) Unit for the Distance from Marker in ISO Code
  MARKER_END_POINT                 :   "", // CHAR (18) Marker for End Point
  MARKER_START_POINT               :   "", // CHAR (18) Marker for Start Point
  OBJECTTYPE                       :   "", // CHAR (10) Type of Technical Object
  OBJ_SIZE                         :   "", // CHAR (18) Size/dimension
  OBJ_WEIGHT                       :  0.0, // QUAN (13.3) Weight of object
  PLANGROUP                        :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance
  PLANPLANT                        :   "", // CHAR (4) Maintenance Planning Plant
  PLSECTN                          :   "", // CHAR (3) Plant section
  PP_WKCTR                         :   "", // NUMC (8) Object ID of PP work center
  READ_ADRNR                       :   "", // CHAR (10) ALPHA=ALPHA Address number
  READ_CHDAT                       :   "", // DATS (8) Date of Last Change
  READ_CHNAM                       :   "", // CHAR (12) Name of person who changed object
  READ_CRDAT                       :   "", // DATS (8) Date on Which Record Was Created
  READ_CRNAM                       :   "", // CHAR (12) Name of Person who Created the Object
  READ_OBJNR                       :   "", // CHAR (22) Object number
  SALES_GRP                        :   "", // CHAR (3) Sales group
  SALES_OFF                        :   "", // CHAR (4) Sales office
  SALES_ORG                        :   "", // CHAR (4) Sales Organization
  SECOND_OFFSET_TYPE_CODE          :   "", // CHAR (2) Type of Second Offset
  SECOND_OFFSET_UNIT               :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Offset 2
  SECOND_OFFSET_UNIT_ISO           :   "", // CHAR (3) Unit of Measurement for Offset 2 in ISO Code
  SECOND_OFFSET_VALUE              :   "", // CHAR (18) Value of Offset 2
  SETTLORDER                       :   "", // CHAR (12) ALPHA=ALPHA Settlement order
  SHIFT_NOTE_NOTIFICATION_TYPE     :   "", // CHAR (2) Notification Type for Shift Note for Object
  SHIFT_REPORT_TYPE                :   "", // CHAR (10) Shift Report Type for Object
  SORTFIELD                        :   "", // CHAR (30) Sort field
  STANDORDER                       :   "", // CHAR (12) ALPHA=ALPHA Standing order number
  START_FROM                       :   "", // DATS (8) Start-up Date of the Technical Object
  START_POINT                      :   "", // CHAR (18) Start Point
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber
  UNIT_ISO                         :   "", // CHAR (3) ISO code for unit of measurement
  UNIT_OF_WT                       :   "", // UNIT (3) ALPHA=CUNIT Unit of weight
  WBS_ELEM                         :   "", // NUMC (8) ALPHA=ABPSP Work Breakdown Structure Element (WBS Element)
  WORK_CTR                         :   "", // NUMC (8) Object ID of the Work Center
};
/* eslint-enable key-spacing */

// DATA_SPECIFIC_EXP BAPI_ITOB_EQ_ONLY Equipment-Specific data

/* eslint-disable key-spacing */
// prettier-ignore
DATA_SPECIFIC_EXP = {
  BATCH                            :   "", // CHAR (10) Batch Number
  CONFIGMAT                        :   "", // CHAR (18) ALPHA=MATN1 Configurable Material
  CONFIGMAT_EXTERNAL               :   "", // CHAR (40) ALPHA=MATNL Long Material Number for CONFIGMAT Field
  CONFIGMAT_GUID                   :   "", // CHAR (32) External GUID for CONFIGMAT Field
  CONFIGMAT_LONG                   :   "", // CHAR (40) Configurable Material
  CONFIGMAT_VERSION                :   "", // CHAR (10) ALPHA=MATNW Version Number for CONFIGMAT Field
  CONFIG_CONTROL_IND               :   "", // CHAR (1) General Indicator (Single Character)
  DELIVDATE                        :   "", // DATS (8) First delivery date of the equipment
  EQUICATGRY                       :   "", // CHAR (1) Equipment category
  FREE_DATE1                       :   "", // DATS (8) Date, intended for SAP internal use
  FREE_DATE2                       :   "", // DATS (8) Date, intended for SAP internal use
  FREE_NOTE1                       :   "", // CHAR (30) Technical information, intended for SAP internal use
  FREE_NOTE2                       :   "", // CHAR (30) Technical information, intended for SAP internal use
  FREE_NUM1                        :   "", // NUMC (9) Numerical field, intended for SAP internal use
  FREE_NUM2                        :   "", // NUMC (9) Numerical field, intended for SAP internal use
  FUNC_ID                          :   "", // CHAR (40) Function Identifier
  INST_POS                         :   "", // CHAR (4) Equipment position at InstallLoc (Superior Equip./FunctLoc)
  IPPE_GUID                        : bytes(), // RAW (16) Internal Identification for PVS Objects
  IUID_TYPE                        :   "", // CHAR (10) Structure Type of UII
  LICENSE                          :   "", // CHAR (20) Equipment license number
  MANDRAWNO                        :   "", // CHAR (30) Manufacturer drawing number
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  READ_CUOBJ                       :   "", // NUMC (18) Configuration (internal object number)
  READ_CUREF                       :   "", // CHAR (1) Referenced Configuration
  READ_FLOC                        :   "", // CHAR (40) Functional Location Label
  READ_MAINTENANCE_PLAN            :   "", // CHAR (12) ALPHA=ALPHA Maintenance Plan
  READ_MEASURING_POINT             :   "", // CHAR (12) ALPHA=ALPHA Measuring Point
  READ_SUPEQ                       :   "", // CHAR (18) ALPHA=ALPHA Superordinate Equipment
  READ_VALID_FROM                  :   "", // DATS (8) Valid-From Date
  SERIALNO                         :   "", // CHAR (18) ALPHA=GERNR Serial Number
  TECHID                           :   "", // CHAR (25) Technical identification number
  TECHS                            :   "", // CHAR (12) Parameter Variant/Standard Variant
  UII                              :   "", // CHAR (72) Unique Item Identifier
  UII_PLANT                        :   "", // CHAR (4) Plant Responsible for UII
};
/* eslint-enable key-spacing */

// RETURN BAPIRET2 Return Parameter

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  FIELD                            :   "", // CHAR (30) Field in parameter
  ID                               :   "", // CHAR (20) Message Class
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  MESSAGE                          :   "", // CHAR (220) Message Text
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
  NUMBER                           :   "", // NUMC (3) Message Number
  PARAMETER                        :   "", // CHAR (32) Parameter Name
  ROW                              :    0, // INT4 (10) Lines in parameter
  SYSTEM                           :   "", // CHAR (10) ALPHA=ALPHA Logical system from which message originates
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */
