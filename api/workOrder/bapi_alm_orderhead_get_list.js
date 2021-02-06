//
// BAPI_ALM_ORDERHEAD_GET_LIST var: 0  struct: 2  table: 4  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// DISPLAY_PARAMETERS :           {}, // BAPI_ALM_LIST_NAVIGATION_IN ALM Order Lists: Parameter for Navigation

// TABLE PARAMETERS

ET_RESULT             :           [], // BAPI_ALM_ORDER_LISTHEAD_RESULT ALM Orders: Order List from Selection
IT_RANGES             :           [], // BAPI_ALM_ORDER_LISTHEAD_RANGES ALM Order BAPIs: Copy Structure for Selection Parameter
RETURN                :           [], // BAPIRET2 Return Parameters
// ET_TEMPLATE        :           [], // BAPI_ALM_ORDER_LISTHEAD_RANGES ALM Order BAPIs: Copy Structure for Selection Parameter

// EXPORT PARAMETERS

// NAVIGATION_DATA    :           {}, // BAPI_ALM_LIST_NAVIGATION_RET ALM Order Lists: Basic Dates for Navigation
};

const result = await client.call("BAPI_ALM_ORDERHEAD_GET_LIST", parameters);

//
// IMPORT PARAMETERS
//

// BAPI_ALM_LIST_NAVIGATION_IN  ALM Order Lists: Parameter for Navigation

// prettier-ignore
const DISPLAY_PARAMETERS= {
  PAGELENGTH                       :    0, // INT4 (10) Row Index of Internal Tables
  SHOW_PAGE_NUMBER                 :    0, // INT4 (10) Current List Page
  FORCE_REFRESH                    :   "", // CHAR (1) Also determine data if selection conditions are unchanged
};


//
// TABLE PARAMETERS
//

// BAPI_ALM_ORDER_LISTHEAD_RESULT  ALM Orders: Order List from Selection
const ET_RESULT= [];

// prettier-ignore
const ET_RESULT= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  ORDER_TYPE                       :   "", // CHAR (4) Order Type SU3=AAT
  CURRENCY                         :   "", // CUKY (5) Order Currency
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
  ENTERED_BY                       :   "", // CHAR (12) Entered by
  ENTER_DATE                       :   "", // DATS (8) Created on
  CHANGED_BY                       :   "", // CHAR (12) Last changed by
  CHANGE_DATE                      :   "", // DATS (8) Change date for Order Master
  SHORT_TEXT                       :   "", // CHAR (40) Description
  LONG_TEXT_FLAG                   :   "", // CHAR (1) Long Text Exists
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  CO_AREA                          :   "", // CHAR (4) Controlling Area SU3=CAC
  RESPCCTR                         :   "", // CHAR (10) ALPHA=ALPHA Responsible cost center
  DELETION_FLAG                    :   "", // CHAR (1) Deletion flag
  CSTG_SHEET                       :   "", // CHAR (6) Costing Sheet
  OVERHEAD_KEY                     :   "", // CHAR (6) Overhead key
  ABCINDIC                         :   "", // CHAR (1) ABC indicator for technical object
  SORTFIELD                        :   "", // CHAR (30) Sort field
  PRIORITY                         :   "", // CHAR (1) Priority SU3=PRIOK
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  ASSEMBLY                         :   "", // CHAR (18) ALPHA=MATN1 Assembly SU3=MAT
  SYSTCOND                         :   "", // CHAR (1) Syst.Condition
  PLANPLANT                        :   "", // CHAR (4) Maintenance Planning Plant SU3=IWK
  PLANGROUP                        :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance SU3=IHG
  RESP_PLANNER_GROUP               :   "", // CHAR (3) Responsible planner group/department
  MN_WK_CTR                        :   "", // CHAR (8) Main work center for maintenance tasks SU3=VAP
  MN_WK_PLANT                      :   "", // CHAR (4) Plant associated with main work center
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  SYSTEM_RESP                      :   "", // CHAR (12) Name of Person Reponsible for System
  PLANNED_DOWN_TIME                :  "0", // DEC (11.2) Planned Breakdown Duration
  SYSTEM_AVAILABLE_TO_DATE         :   "", // DATS (8) Date until which the system is available
  SYSTEM_AVAILABLE_FROM_DATE       :   "", // DATS (8) Date from which the system is available
  SYSTEM_AVAILABLE_TO_TIME         :   "", // TIMS (6) Time until which the system is available
  SYSTEM_AVAILABLE_FROM_TIME       :   "", // TIMS (6) Time from Which System is Available
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  MAINTPLANT                       :   "", // CHAR (4) Maintenance plant SU3=SWK
  MAINTLOC                         :   "", // CHAR (10) Location of maintenance object
  MAINTROOM                        :   "", // CHAR (8) Room
  PLSECTN                          :   "", // CHAR (3) Plant section SU3=BBE
  FUNCLOC                          :   "", // CHAR (40) Functional Location Label
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number SU3=AN1
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber SU3=AN2
  REVISION                         :   "", // CHAR (8) Revision for Plant Maintenance and Customer Service
  MAINTPLAN                        :   "", // CHAR (12) ALPHA=ALPHA Maintenance Plan SU3=MPL
  MAINTITEM                        :   "", // CHAR (16) ALPHA=ALPHA Maintenance item SU3=MPS
  S_STATUS                         :   "", // CHAR (40) System status line
  U_STATUS                         :   "", // CHAR (40) User Status Line
  WORK_CNTR                        :   "", // CHAR (8) Work center SU3=AGR
  FINISH_DATE                      :   "", // DATS (8) Basic finish date
  START_DATE                       :   "", // DATS (8) Basic start date
  PRODUCTION_FINISH_DATE           :   "", // DATS (8) Scheduled finish
  PRODUCTION_START_DATE            :   "", // DATS (8) Scheduled start
  ACTUAL_START_DATE                :   "", // DATS (8) Actual start date
  CONFIRMED_FINISH_DATE            :   "", // DATS (8) Confirmed Order Finish Date
  PLANNER_GROUP                    :   "", // CHAR (3) Responsible planner group/department
  ACTUAL_RELEASE_DATE              :   "", // DATS (8) Actual release date
  PMACTTYPE                        :   "", // CHAR (3) Maintenance activity type
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  HISTORY_DATE                     :   "", // DATS (8) PM request: History date
  EQUIDESCR                        :   "", // CHAR (40) Description of Technical Object
  FUNCLDESCR                       :   "", // CHAR (40) Description of functional location
  NAME_LIST                        :   "", // CHAR (35) Name for list displays
  TEL1_NUMBR                       :   "", // CHAR (30) First telephone no.: dialling code+number
  POSTL_COD1                       :   "", // CHAR (10) City postal code
  CITY                             :   "", // CHAR (40) City
  DISTRICT                         :   "", // CHAR (40) District
  COUNTRY                          :   "", // CHAR (3) Country Key SU3=LND
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  STREET                           :   "", // CHAR (60) Street
  PROFIT_SEGM_NO                   :   "", // NUMC (10) Profitability Segment Number (CO-PA)
  TOTAL_COSTS_ACT                  : "0.0", // CURR (15.2) Total(actual) maintenance costs
  TOTAL_COSTS_PLAN                 : "0.0", // CURR (15.2) Total plant maintenance costs (planned)
  TOTAL_SETTLEMENT_COSTS           : "0.0", // CURR (15.2) Total Settlement Costs (PMCO)
  TOTAL_REVENUES_ACT               : "0.0", // CURR (15.2) Total plant maintenance revenues (actual)
  TOTAL_REVENUES_PLAN              : "0.0", // CURR (15.2) Total (planned) maintenance revenues
  TOTAL_SUM_ACT                    : "0.0", // CURR (15.2) Actual sum of maintenance order (costs - revenues)
  TOTAL_SUM_PLAN                   : "0.0", // CURR (15.2) Plan sum of maintenance order (costs - revenues)
  OBJECT_NO                        :   "", // CHAR (22) Object number SU3=ONR
  SALES_DOC_NUMBER                 :   "", // CHAR (10) ALPHA=ALPHA Sales Document SU3=AUN
  SALES_ITM_NUMBER                 :   "", // NUMC (6) Sales Document Item SU3=APO
  LEADING_ORDERID                  :   "", // CHAR (12) ALPHA=ALPHA Leading Order in Current Processing
  SUPERIOR_ORDERID                 :   "", // CHAR (12) ALPHA=ALPHA Number of Superior Order SU3=UAF
  ACTUAL_FINISH_TIME               :   "", // TIMS (6) Confirmed Order Finish (Time)
  ACTUAL_START_TIME                :   "", // TIMS (6) Actual start time
  PRODUCTION_FINISH_TIME           :   "", // TIMS (6) Scheduled Finish (Time)
  PRODUCTION_START_TIME            :   "", // TIMS (6) Scheduled Start (Time)
  TASK_LIST_GROUP                  :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  GROUP_COUNTER                    :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  ORDPLANID                        :   "", // CHAR (1) Maintenance order planning indicator
  REFDATE                          :   "", // DATS (8) PM Order: Reference Date
  WBS_ELEMENT                      :   "", // CHAR (24) Work Breakdown Structure Element (WBS Element) for List SU3=PRO
  SUPERIOR_NETWORK                 :   "", // CHAR (12) ALPHA=ALPHA Number of superior network
  SUPERIOR_ACTIVITY                :   "", // CHAR (4) ALPHA=NUMCV Superior activity
  ESTIMATED_COSTS                  : "0.0", // CURR (11.2) Estimated total costs of order
  SALESORG                         :   "", // CHAR (4) Sales Organization SU3=VKO
  DISTR_CHAN                       :   "", // CHAR (2) Distribution Channel SU3=VTW
  DIVISION                         :   "", // CHAR (2) Division SU3=SPA
  BASIC_FIN                        :   "", // TIMS (6) Basic finish (time)
  BASICSTART                       :   "", // TIMS (6) Basic Start (Time)
  REFTIME                          :   "", // TIMS (6) Time of Reference Date
  CALC_MOTIVE                      :   "", // CHAR (2) Accounting Indicator
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA Address number SU3=ADR
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  SERIALNO                         :   "", // CHAR (18) ALPHA=GERNR Serial Number SU3=SER
  DEVICEID                         :   "", // CHAR (40) Additional Device Data
  SALES_OFF                        :   "", // CHAR (4) Sales office SU3=VKB
  SALES_GRP                        :   "", // CHAR (3) Sales group SU3=VKG
  MATL_DESC                        :   "", // CHAR (40) Material description
  ASSMBL_DESC                      :   "", // CHAR (40) Assembly Description
  PAGESTATUS                       :   "", // CHAR (4) Paging Status
  WBS_ELEMENT_HEAD                 :   "", // CHAR (24) Work breakdown structure element (WBS element) order header SU3=PRO
  MRP_RELEVANT                     :   "", // CHAR (1) Reservation Relevance/Generation of Purchase Requisition
  PHASE                            :   "", // CHAR (1) Maintenance Processing Phase
  PRIOTYPE                         :   "", // CHAR (2) Priority Type
  PRIO_DESC                        :   "", // CHAR (20) Priority Text
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
  PURCH_DATE                       :   "", // DATS (8) Customer purchase order date
  SERVICE_MATERIAL                 :   "", // CHAR (18) ALPHA=MATN1 Service product SU3=MAT
  SERVICE_MATL_DESC                :   "", // CHAR (40) Description of Service Product
  SERVICE_MATL_QUANTITY            : "0.0", // QUAN (13.3) Service product quantity
  SERVCIE_UOM                      :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  SERVCIE_UOM_ISO                  :   "", // CHAR (3) ISO code for unit of measurement
  BILLING_FORM                     :   "", // CHAR (2) Billing form
  PLAN_PLANNER_GROUP               :   "", // CHAR (3) Responsible planner group/department
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  OBJECTLIST_NO                    :    0, // INT4 (10) Object list number
  CLIENT                           :   "", // CLNT (3) Client
  ASSEMBLY_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for Field ASSEMBLY
  ASSEMBLY_GUID                    :   "", // CHAR (32) External GUID for ASSEMBLY Field
  ASSEMBLY_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for ASSEMBLY Field
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  SERVICE_MATERIAL_EXTERNAL        :   "", // CHAR (40) ALPHA=MATNL Long Material Number for SERVICE_MATERIAL Field
  SERVICE_MATERIAL_GUID            :   "", // CHAR (32) External GUID for SERVICE_MATERIAL Field
  SERVICE_MATERIAL_VERSION         :   "", // CHAR (10) ALPHA=MATNW Version Number for SERVICE_MATERIAL Field
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
  MARKER_START_POINT               :   "", // CHAR (18) Marker for Start Point
  MARKER_DISTANCE_START_POINT      :   "", // CHAR (18) Distance between Marker and Start Point
  MARKER_END_POINT                 :   "", // CHAR (18) Marker for End Point
  MARKER_DISTANCE_END_POINT        :   "", // CHAR (18) Length Spec for Distance between Marker and End Point
  MARKER_DISTANCE_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Unit for the Distance from Marker
  MARKER_DISTANCE_UNIT_ISO         :   "", // CHAR (3) Unit for the Distance from Marker in ISO Code
  ASSEMBLY_LONG                    :   "", // CHAR (40) Assembly SU3=MAT
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  SERVICE_MATERIAL_LONG            :   "", // CHAR (40) Service product SU3=MAT
};

// BAPI_ALM_ORDER_LISTHEAD_RANGES  ALM Order BAPIs: Copy Structure for Selection Parameter
const IT_RANGES= [];

// prettier-ignore
const IT_RANGES= {
  FIELD_NAME                       :   "", // CHAR (30) Component name SU3=DFD
  SIGN                             :   "", // CHAR (1) ABAP: ID: I/E (include/exclude values)
  OPTION                           :   "", // CHAR (2) ABAP: Selection option (EQ/BT/CP/...)
  LOW_VALUE                        :   "", // CHAR (45) ABAP: Selection Value (LOW or HIGH Value, External Format)
  HIGH_VALUE                       :   "", // CHAR (45) ABAP: Selection Value (LOW or HIGH Value, External Format)
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

// BAPI_ALM_ORDER_LISTHEAD_RANGES  ALM Order BAPIs: Copy Structure for Selection Parameter
const ET_TEMPLATE= [];

// prettier-ignore
const ET_TEMPLATE= {
  FIELD_NAME                       :   "", // CHAR (30) Component name SU3=DFD
  SIGN                             :   "", // CHAR (1) ABAP: ID: I/E (include/exclude values)
  OPTION                           :   "", // CHAR (2) ABAP: Selection option (EQ/BT/CP/...)
  LOW_VALUE                        :   "", // CHAR (45) ABAP: Selection Value (LOW or HIGH Value, External Format)
  HIGH_VALUE                       :   "", // CHAR (45) ABAP: Selection Value (LOW or HIGH Value, External Format)
};


//
// EXPORT PARAMETERS
//

// BAPI_ALM_LIST_NAVIGATION_RET  ALM Order Lists: Basic Dates for Navigation

// prettier-ignore
const NAVIGATION_DATA= {
  NUMBER_OF_HITS                   :    0, // INT4 (10) Row Index of Internal Tables
  FIRST_SHOWN_HIT                  :    0, // INT4 (10) Row Index of Internal Tables
  LAST_SHOWN_HIT                   :    0, // INT4 (10) Row Index of Internal Tables
  ACTUAL_PAGE                      :    0, // INT4 (10) Current List Page
  LAST_PAGE                        :    0, // INT4 (10) Current List Page
};
