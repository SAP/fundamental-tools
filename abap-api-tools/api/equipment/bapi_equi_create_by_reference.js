//
// BAPI_EQUI_CREATE_BY_REFERENCE exception: 0  struct: 4  table: 1  var: 4
//
// abap 2.2.0 at: 2021-03-29 15:40:08
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

REFERENCE_NUMBER     :           "", // CHAR (18) ALPHA=ALPHA Number of Equipment Reference SU3=EQN
// EXTERNAL_NUMBER   :           "", // CHAR (18) ALPHA=ALPHA Number of Equipment to be Created (Initial => Internal Assignment) SU3=EQN
// VALID_DATE        :           "", // DATS (8) Valid-From Date for Equipment to be Created
// COPY_FLAGS        :           {}, // BAPI_ITOB_EQ_COPY_FLAGS Indicators for Sub-Objects to be Copied from Reference

// TABLE PARAMETERS

// EXTENSIONOUT      :           [], // BAPIPAREX no text (undefined)

// EXPORT PARAMETERS

// EQUIPMENT         :           "", // CHAR (18) ALPHA=ALPHA Number of Equipment Created SU3=EQN
// DATA_GENERAL_EXP  :           {}, // BAPI_ITOB General Data for Technical Objects
// DATA_SPECIFIC_EXP :           {}, // BAPI_ITOB_EQ_ONLY Equipment-Specific data
// RETURN            :           {}, // BAPIRET2 Return Parameter
};

const result = await client.call("BAPI_EQUI_CREATE_BY_REFERENCE", parameters);

//
// IMPORT PARAMETERS
//

// BAPI_ITOB_EQ_COPY_FLAGS  Indicators for Sub-Objects to be Copied from Reference

// prettier-ignore
const COPY_FLAGS= {
  CP_DOCUMT                        :   "", // CHAR (1) Checkbox: Copy document assignments
  CP_PARTNER                       :   "", // CHAR (1) Checkbox: Copy partner allocation
  CP_MEASPT                        :   "", // CHAR (1) Checkbox: Copy measuring points and counters
  CP_MPT_TXT                       :   "", // CHAR (1) Checkbox: Copy measuring points with long text
  CP_MPT_DOC                       :   "", // CHAR (1) Checkbox: Copy measuring points with document allocations
  CP_INSTLOC                       :   "", // CHAR (1) Checkbox: Copy installation location
  CP_LONGTXT                       :   "", // CHAR (1) Checkbox: Copy long text in logon language
  CP_INTNOTE                       :   "", // CHAR (1) Checkbox: Copy internal note
};


//
// TABLE PARAMETERS
//

// BAPIPAREX  
const EXTENSIONOUT= [];

// prettier-ignore
const EXTENSIONOUT= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};


//
// EXPORT PARAMETERS
//

// BAPI_ITOB  General Data for Technical Objects

// prettier-ignore
const DATA_GENERAL_EXP= {
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

// BAPI_ITOB_EQ_ONLY  Equipment-Specific data

// prettier-ignore
const DATA_SPECIFIC_EXP= {
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
  IPPE_GUID                        : bytes(), // RAW (16) Internal Identification for PVS Objects
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

// BAPIRET2  Return Parameter

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
