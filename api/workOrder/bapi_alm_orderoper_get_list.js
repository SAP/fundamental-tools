//
// BAPI_ALM_ORDEROPER_GET_LIST var: 0  struct: 2  table: 4  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// DISPLAY_PARAMETERS :           {}, // BAPI_ALM_LIST_NAVIGATION_IN ALM Order Lists: Parameter for Navigation

// TABLE PARAMETERS

ET_RESULT             :           [], // BAPI_ALM_ORDER_LISTOPER_RESULT ALM Orders: Operation List from Selection
IT_RANGES             :           [], // BAPI_ALM_ORDER_LISTOPER_RANGES ALM Order BAPIs: Copy Structure for Selection Parameter
RETURN                :           [], // BAPIRET2 Return Parameters
// ET_TEMPLATE        :           [], // BAPI_ALM_ORDER_LISTOPER_RANGES ALM Order BAPIs: Copy Structure for Selection Parameter

// EXPORT PARAMETERS

// NAVIGATION_DATA    :           {}, // BAPI_ALM_LIST_NAVIGATION_RET ALM Order Lists: Basic Dates for Navigation
};

const result = await client.call("BAPI_ALM_ORDEROPER_GET_LIST", parameters);

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

// BAPI_ALM_ORDER_LISTOPER_RESULT  ALM Orders: Operation List from Selection
const ET_RESULT= [];

// prettier-ignore
const ET_RESULT= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  CONTROL_KEY                      :   "", // CHAR (4) Control key
  WORK_CNTR                        :   "", // CHAR (8) Work center SU3=AGR
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  STANDARD_TEXT_KEY                :   "", // CHAR (7) Standard text key
  DESCRIPTION                      :   "", // CHAR (40) Operation short text
  ASSEMBLY                         :   "", // CHAR (18) ALPHA=MATN1 Assembly
  SYSTCOND                         :   "", // CHAR (1) Syst.Condition
  S_STATUS                         :   "", // CHAR (40) System Status
  WORK_ACTIVITY                    : "0.0", // QUAN (7.1) Work involved in the activity
  UN_WORK                          :   "", // UNIT (3) ALPHA=CUNIT Unit for work
  UN_WORK_ISO                      :   "", // CHAR (3) ISO code for unit of measurement
  ACTTYPE                          :   "", // CHAR (6) Activity Type SU3=LAR
  PERCENT_OF_WORK                  :    0, // INT1 (3) Work percentage
  DURATION_NORMAL                  : "0.0", // QUAN (5.1) Normal duration of the activity
  DURATION_NORMAL_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Normal duration/unit
  DURATION_NORMAL_UNIT_ISO         :   "", // CHAR (3) ISO code for unit of measurement
  DURATION_MINIMUM                 : "0.0", // QUAN (5.1) Minimum activity duration
  DURATION_MINIMUM_UNIT            :   "", // UNIT (3) ALPHA=CUNIT Unit for the minimum duration
  DURATION_MINIMUM_UNIT_ISO        :   "", // CHAR (3) ISO code for unit of measurement
  CALCULATION_KEY                  :   "", // CHAR (1) Key for calculation
  NO_OF_TIME_TICKETS               :  "0", // DEC (3) Number of Time Tickets
  WAGEGROUP                        :   "", // CHAR (3) Wage Group
  WAGETYPE                         :   "", // CHAR (4) Wage type
  SUITABILITY                      :   "", // CHAR (2) Suitability
  NO_OF_CONFIRMATION_SLIPS         :   "", // NUMC (3) Number of confirmation slips
  NUMBER_OF_CAPACITIES             :    0, // INT1 (3) Number of capacities required
  CONF_NO                          :   "", // NUMC (10) Completion confirmation number for the operation SU3=RCK
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  COUNTER                          :   "", // NUMC (8) General counter for order
  EARL_SCHED_START_DATE            :   "", // DATS (8) Earliest scheduled start: Execution (date)
  EARL_SCHED_START_TIME            :   "", // TIMS (6) Earliest scheduled start: Execution (time)
  LATE_SCHED_START_DATE            :   "", // DATS (8) Latest scheduled start: Execution (date)
  LATE_SCHED_START_TIME            :   "", // TIMS (6) Latest scheduled start: Execution (time)
  EARL_SCHED_FINISH_DATE           :   "", // DATS (8) Earliest scheduled finish: Execution (date)
  EARL_SCHED_FINISH_TIME           :   "", // TIMS (6) Earliest scheduled finish: Execution (time)
  LATE_SCHED_FIN_DATE              :   "", // DATS (8) Latest scheduled finish: Execution (date)
  LATE_SCHED_FIN_TIME              :   "", // TIMS (6) Latest scheduled finish: Execution (time)
  ACTUAL_START_DATE                :   "", // DATS (8) Actual start: Execution (date)
  ACTUAL_START_TIME                :   "", // TIMS (6) Actual Start: Execution/Setup (Time)
  ACTUAL_FIN_DATE                  :   "", // DATS (8) Actual finish: Execution (date) SU3=EDR
  ACTUAL_FIN_TIME                  :   "", // TIMS (6) Actual Finish: Execution (Time) SU3=EZR
  CONSTRAINT_TYPE_START            :   "", // CHAR (1) Constraint on the basic start date for the activity
  CONSTRAINT_TYPE_FINISH           :   "", // CHAR (1) Constraint on the finish date of the activity
  CONSTRAINT_START_DATE            :   "", // DATS (8) Constraint for activity start (Basic)
  CONSTRAINT_START_TIME            :   "", // TIMS (6) Constraint for activity start time (Basic)
  CONSTRAINT_FIN_DATE              :   "", // DATS (8) Constraint for finish of activity (Basic)
  CONSTRAINT_FIN_TIME              :   "", // TIMS (6) Basic finish time of the activity
  TOTAL_FLOAT                      :  "0", // DEC (3) Total float
  FREE_FLOAT                       :  "0", // DEC (3) Free float
  PRICE                            : "0.0", // CURR (11.2) Price
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
  PRICE_UNIT                       :  "0", // DEC (5) Price unit
  COST_ELEMENT                     :   "", // CHAR (10) ALPHA=ALPHA Cost element
  MATL_GROUP                       :   "", // CHAR (9) Material Group SU3=MKL
  VENDOR_NO                        :   "", // CHAR (10) ALPHA=ALPHA Account Number of Vendor or Creditor SU3=LIF
  INFO_REC                         :   "", // CHAR (10) ALPHA=ALPHA Number of purchasing info record SU3=INF
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization SU3=EKO
  PUR_GROUP                        :   "", // CHAR (3) Purchasing group SU3=EKG
  PREQ_NO                          :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number SU3=BAN
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition SU3=BAP
  PRIORITY                         :   "", // CHAR (1) Priority SU3=PRIOK
  FUNCLOC                          :   "", // CHAR (40) Functional Location Label
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  PLANGROUP                        :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance SU3=IHG
  RESP_PLANNER                     :   "", // CHAR (12) Name of Person Responsible for Technical Inspection
  LOCATION                         :   "", // CHAR (10) Asset location
  LOC_PLANT                        :   "", // CHAR (4) Maintenance plant SU3=SWK
  U_STATUS                         :   "", // CHAR (40) User Status Line
  CLIENT                           :   "", // CLNT (3) Client
  SPLIT                            :    0, // INT1 (3) Split number
  WORK_ACTUAL                      : "0.0", // QUAN (13.3) Actual work
  ORDER_TYPE                       :   "", // CHAR (4) Order Type SU3=AAT
  REF_DATE                         :   "", // DATS (8) PM Order: Reference Date
  EXEC_FACTOR                      :  "0", // DEC (3) Execution Factor
  PERSON_NO                        :   "", // NUMC (8) Personnel Number SU3=PER
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  GR_RCPT                          :   "", // CHAR (12) Goods recipient
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  SERIALNO                         :   "", // CHAR (18) ALPHA=GERNR Serial Number SU3=SER
  DEVICEID                         :   "", // CHAR (40) Additional Device Data
  SORTFIELD                        :   "", // CHAR (30) Sort field
  EQUIDESCR                        :   "", // CHAR (40) Description of Technical Object
  FUNCLDESCR                       :   "", // CHAR (40) Description of functional location
  MATL_DESC                        :   "", // CHAR (40) Material description
  PRIOTYPE                         :   "", // CHAR (2) Priority Type
  PRIOTYPE_DESC                    :   "", // CHAR (20) Priority Text
  LONGTEXT_INDIC                   :   "", // CHAR (1) Object Long Text Available
  PLANPLANT                        :   "", // CHAR (4) Maintenance Planning Plant SU3=IWK
  ASSEMBLY_DESC                    :   "", // CHAR (40) Assembly Description
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  NEXT_PLAN_DATE                   :   "", // DATS (8) Next planned date
  ASSEMBLY_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for Field ASSEMBLY
  ASSEMBLY_GUID                    :   "", // CHAR (32) External GUID for ASSEMBLY Field
  ASSEMBLY_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for ASSEMBLY Field
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
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
  ASSEMBLY_LONG                    :   "", // CHAR (40) Assembly
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI_ALM_ORDER_LISTOPER_RANGES  ALM Order BAPIs: Copy Structure for Selection Parameter
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

// BAPI_ALM_ORDER_LISTOPER_RANGES  ALM Order BAPIs: Copy Structure for Selection Parameter
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
