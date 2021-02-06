//
// BAPI_PRODORD_GET_DETAIL var: 2  struct: 2  table: 8  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

NUMBER              :           "", // CHAR (12) ALPHA=ALPHA Production order number SU3=ANR
ORDER_OBJECTS       :           {}, // BAPI_PP_ORDER_OBJECTS Production Order Objects Selection Structure
// COLLECTIVE_ORDER :           "", // CHAR (1) Display complete collective order

// TABLE PARAMETERS

// COMPONENT        :           [], // BAPI_ORDER_COMPONENT Component Data
// FSH_BUNDLES      :           [], // FSH_T_BNDL_RETURN Fashion Marker and Bundle Details
// HEADER           :           [], // BAPI_ORDER_HEADER1 Order header data
// OPERATION        :           [], // BAPI_ORDER_OPERATION1 Operation Data
// POSITION         :           [], // BAPI_ORDER_ITEM Order Item Data
// PROD_REL_TOOL    :           [], // BAPI_ORDER_PROD_REL_TOOLS Production resources and tools data
// SEQUENCE         :           [], // BAPI_ORDER_SEQUENCE Order Sequence Data
// TRIGGER_POINT    :           [], // BAPI_ORDER_TRIGGER_POINT Trigger Point Data

// EXPORT PARAMETERS

// RETURN           :           {}, // BAPIRET2 Return Parameters
};

const result = await client.call("BAPI_PRODORD_GET_DETAIL", parameters);

//
// IMPORT PARAMETERS
//

// BAPI_PP_ORDER_OBJECTS  Production Order Objects Selection Structure

// prettier-ignore
const ORDER_OBJECTS= {
  HEADER                           :   "", // CHAR (1) Checkbox
  POSITIONS                        :   "", // CHAR (1) Checkbox
  SEQUENCES                        :   "", // CHAR (1) Checkbox
  OPERATIONS                       :   "", // CHAR (1) Checkbox
  COMPONENTS                       :   "", // CHAR (1) Checkbox
  PROD_REL_TOOLS                   :   "", // CHAR (1) Checkbox
  TRIGGER_POINTS                   :   "", // CHAR (1) Checkbox
  SUBOPERATIONS                    :   "", // CHAR (1) Checkbox
};


//
// TABLE PARAMETERS
//

// BAPI_ORDER_COMPONENT  Component Data
const COMPONENT= [];

// prettier-ignore
const COMPONENT= {
  RESERVATION_NUMBER               :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  RESERVATION_ITEM                 :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  RESERVATION_TYPE                 :   "", // CHAR (1) Record type
  DELETION_INDICATOR               :   "", // CHAR (1) Item is deleted
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PROD_PLANT                       :   "", // CHAR (4) Plant SU3=WRK
  STORAGE_LOCATION                 :   "", // CHAR (4) Storage location SU3=LAG
  SUPPLY_AREA                      :   "", // CHAR (10) Production Supply Area SU3=PVB
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  SPECIAL_STOCK                    :   "", // CHAR (1) Special Stock Indicator
  REQ_DATE                         :   "", // DATS (8) Requirements date for the component
  REQ_QUAN                         : "0.0", // QUAN (13.3) Requirement Quantity
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  WITHDRAWN_QUANTITY               : "0.0", // QUAN (13.3) Quantity withdrawn
  ENTRY_QUANTITY                   : "0.0", // QUAN (13.3) Quantity in unit of entry
  ENTRY_UOM                        :   "", // UNIT (3) ALPHA=CUNIT Unit of entry
  ENTRY_UOM_ISO                    :   "", // CHAR (3) ISO code for unit of measurement
  ORDER_NUMBER                     :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  MOVEMENT_TYPE                    :   "", // CHAR (3) Movement type (inventory management) SU3=BWA
  ITEM_CATEGORY                    :   "", // CHAR (1) Item category (bill of material)
  ITEM_NUMBER                      :   "", // CHAR (4) ALPHA=NUMCV BOM item number
  SEQUENCE                         :   "", // CHAR (6) ALPHA=ALPHA Sequence
  OPERATION                        :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  BACKFLUSH                        :   "", // CHAR (1) Indicator: Backflush
  VALUATION_SPEC_STOCK             :   "", // CHAR (1) Valuation of Special Stock
  SYSTEM_STATUS                    :   "", // CHAR (40) Edited status text
  MATERIAL_DESCRIPTION             :   "", // CHAR (40) Material description
  COMMITED_QUANTITY                : "0.0", // QUAN (13.3) Committed quantity
  SHORTAGE                         : "0.0", // QUAN (13.3) Shortfage
  PURCHASE_REQ_NO                  :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number SU3=BAN
  PURCHASE_REQ_ITEM                :   "", // NUMC (5) Item number of purchase requisition SU3=BAP
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  REQ_SEGMENT                      :   "", // CHAR (16) Requirement Segment SU3=SGT_R
  STOCK_SEGMENT                    :   "", // CHAR (16) Stock Segment SU3=SGT_S
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// FSH_T_BNDL_RETURN  Fashion Marker and Bundle Details
const FSH_BUNDLES= [];

// prettier-ignore
const FSH_BUNDLES= {
  MARKER_ID                        :   "", // CHAR (10) Marker ID for Planned Orders/Production Orders
  MARKER_NAME                      :   "", // CHAR (30) 30 Characters
  MARKER_NUMBER                    :   "", // NUMC (2) Marker Number
  MARKER_SECTION                   :   "", // CHAR (2) Marker Section
  BUNDLE_ID                        :   "", // NUMC (8) Bundle ID for Order
  BUNDLE_QUANTITY                  : "0.0", // QUAN (13.3) Bundle Quantity
};

// BAPI_ORDER_HEADER1  Order header data
const HEADER= [];

// prettier-ignore
const HEADER= {
  ORDER_NUMBER                     :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  PRODUCTION_PLANT                 :   "", // CHAR (4) Plant SU3=WRK
  MRP_CONTROLLER                   :   "", // CHAR (3) MRP controller for the order SU3=DGR
  PRODUCTION_SCHEDULER             :   "", // CHAR (3) Production Supervisor SU3=CFV
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  EXPL_DATE                        :   "", // DATS (8) Date of BOM Explosion/Routing Transfer
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  RESERVATION_NUMBER               :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  SCHED_RELEASE_DATE               :   "", // DATS (8) Scheduled release date
  ACTUAL_RELEASE_DATE              :   "", // DATS (8) Actual release date
  FINISH_DATE                      :   "", // DATS (8) Basic finish date
  START_DATE                       :   "", // DATS (8) Basic start date
  PRODUCTION_FINISH_DATE           :   "", // DATS (8) Scheduled finish
  PRODUCTION_START_DATE            :   "", // DATS (8) Scheduled start
  ACTUAL_START_DATE                :   "", // DATS (8) Actual start date
  ACTUAL_FINISH_DATE               :   "", // DATS (8) Actual finish date
  SCRAP                            : "0.0", // QUAN (13.3) Total scrap quantity in the order
  TARGET_QUANTITY                  : "0.0", // QUAN (13.3) Total order quantity
  UNIT                             :   "", // UNIT (3) ALPHA=CUNIT Common unit of measure for all order items
  UNIT_ISO                         :   "", // CHAR (3) ISO code for unit of measurement
  PRIORITY                         :   "", // CHAR (1) Order priority
  ORDER_TYPE                       :   "", // CHAR (4) Order Type SU3=AAT
  ENTERED_BY                       :   "", // CHAR (12) Entered by
  ENTER_DATE                       :   "", // DATS (8) Created on
  DELETION_FLAG                    :   "", // CHAR (1) Deletion flag
  WBS_ELEMENT                      :   "", // NUMC (8) ALPHA=ABPSP Work Breakdown Structure Element (WBS Element)
  CONF_NO                          :   "", // NUMC (10) Completion confirmation number for the operation SU3=RCK
  CONF_CNT                         :   "", // NUMC (8) Internal counter
  INT_OBJ_NO                       :   "", // NUMC (18) Configuration (internal object number) SU3=CUX
  SCHED_FIN_TIME                   :   "", // TIMS (6) Scheduled Finish (Time)
  SCHED_START_TIME                 :   "", // TIMS (6) Scheduled Start (Time)
  COLLECTIVE_ORDER                 :   "", // CHAR (1) Indicator: Order is part of collective order
  ORDER_SEQ_NO                     :   "", // NUMC (14) Seq. number order
  FINISH_TIME                      :   "", // TIMS (6) Basic finish (time)
  START_TIME                       :   "", // TIMS (6) Basic Start (Time)
  ACTUAL_START_TIME                :   "", // TIMS (6) Actual start time
  LEADING_ORDER                    :   "", // CHAR (12) ALPHA=ALPHA Leading Order in Current Processing
  SALES_ORDER                      :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  SALES_ORDER_ITEM                 :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  PROD_SCHED_PROFILE               :   "", // CHAR (6) Production Scheduling Profile
  MATERIAL_TEXT                    :   "", // CHAR (40) Material Description
  SYSTEM_STATUS                    :   "", // CHAR (40) System Status
  CONFIRMED_QUANTITY               : "0.0", // QUAN (13.3) Committed Quantity for Order After ATP Check Components
  PLAN_PLANT                       :   "", // CHAR (4) Planning Plant SU3=WRK
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  DATE_OF_EXPIRY                   :   "", // DATS (8) Best-Before Date (BBD)/ Shelf Life Expiration Date (SLED)
  DATE_OF_MANUFACTURE              :   "", // DATS (8) Date of Manufacture
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI_ORDER_OPERATION1  Operation Data
const OPERATION= [];

// prettier-ignore
const OPERATION= {
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  COUNTER                          :   "", // NUMC (8) General counter for order
  SEQUENCE_NO                      :   "", // CHAR (6) ALPHA=ALPHA Sequence
  CONF_NO                          :   "", // NUMC (10) Completion confirmation number for the operation SU3=RCK
  CONF_CNT                         :   "", // NUMC (8) Confirmation counter SU3=RZL
  PURCHASE_REQ_NO                  :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number
  PURCHASE_REQ_ITEM                :   "", // NUMC (5) Item Number of Purchase Requisition in Order
  GROUP_COUNTER                    :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  TASK_LIST_TYPE                   :   "", // CHAR (1) Task List Type SU3=PTY
  TASK_LIST_GROUP                  :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  OPERATION_NUMBER                 :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  OPR_CNTRL_KEY                    :   "", // CHAR (4) Control key
  PROD_PLANT                       :   "", // CHAR (4) Plant SU3=WRK
  DESCRIPTION                      :   "", // CHAR (40) Operation short text
  DESCRIPTION2                     :   "", // CHAR (40) Second line of the description
  STANDARD_VALUE_KEY               :   "", // CHAR (4) Standard value key
  ACTIVITY_TYPE_1                  :   "", // CHAR (6) Activity Type SU3=LAR
  ACTIVITY_TYPE_2                  :   "", // CHAR (6) Activity Type SU3=LAR
  ACTIVITY_TYPE_3                  :   "", // CHAR (6) Activity Type SU3=LAR
  ACTIVITY_TYPE_4                  :   "", // CHAR (6) Activity Type SU3=LAR
  ACTIVITY_TYPE_5                  :   "", // CHAR (6) Activity Type SU3=LAR
  ACTIVITY_TYPE_6                  :   "", // CHAR (6) Activity Type SU3=LAR
  UNIT                             :   "", // UNIT (3) ALPHA=CUNIT Unit of measure for activity
  UNIT_ISO                         :   "", // CHAR (3) ISO code for unit of measurement
  QUANTITY                         : "0.0", // QUAN (13.3) Operation Quantity
  SCRAP                            : "0.0", // QUAN (13.3) Operation Scrap Quantity
  EARL_SCHED_START_DATE_EXEC       :   "", // DATS (8) Earliest scheduled start: Execution (date)
  EARL_SCHED_START_TIME_EXEC       :   "", // TIMS (6) Earliest scheduled start: Execution (time)
  EARL_SCHED_START_DATE_PROC       :   "", // DATS (8) Earliest scheduled start: Processing (date)
  EARL_SCHED_START_TIME_PROC       :   "", // TIMS (6) Earliest Scheduled Start: Processing (Time)
  EARL_SCHED_START_DATE_TEARD      :   "", // DATS (8) Earliest scheduled start: Teardown (date)
  EARL_SCHED_START_TIME_TEARD      :   "", // TIMS (6) Earliest Scheduled Start: Teardown (Time)
  EARL_SCHED_FIN_DATE_EXEC         :   "", // DATS (8) Earliest scheduled finish: Execution (date)
  EARL_SCHED_FIN_TIME_EXEC         :   "", // TIMS (6) Earliest scheduled finish: Execution (time)
  LATE_SCHED_START_DATE_EXEC       :   "", // DATS (8) Latest scheduled start: Execution (date)
  LATE_SCHED_START_TIME_EXEC       :   "", // TIMS (6) Latest scheduled start: Execution (time)
  LATE_SCHED_START_DATE_PROC       :   "", // DATS (8) Latest Scheduled Start: Processing (Date)
  LATE_SCHED_START_TIME_PROC       :   "", // TIMS (6) Latest Scheduled Start: Processing (Time)
  LATE_SCHED_START_DATE_TEARD      :   "", // DATS (8) Latest Scheduled Start: Teardown (Date)
  LATE_SCHED_START_TIME_TEARD      :   "", // TIMS (6) Latest Scheduled Start: Teardown (Time)
  LATE_SCHED_FIN_DATE_EXEC         :   "", // DATS (8) Latest scheduled finish: Execution (date)
  LATE_SCHED_FIN_TIME_EXEC         :   "", // TIMS (6) Latest scheduled finish: Execution (time)
  WORK_CENTER                      :   "", // CHAR (8) Work center SU3=AGR
  WORK_CENTER_TEXT                 :   "", // CHAR (40) Work center description
  SYSTEM_STATUS                    :   "", // CHAR (40) System Status
  SUBOPERATION                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
};

// BAPI_ORDER_ITEM  Order Item Data
const POSITION= [];

// prettier-ignore
const POSITION= {
  ORDER_NUMBER                     :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  ORDER_ITEM_NUMBER                :   "", // NUMC (4) Order item number
  SALES_ORDER                      :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  SALES_ORDER_ITEM                 :   "", // NUMC (6) Sales Order Item SU3=AUP
  SCRAP                            : "0.0", // QUAN (13.3) Scrap quantity in item
  QUANTITY                         : "0.0", // QUAN (13.3) Order item quantity
  DELIVERED_QUANTITY               : "0.0", // QUAN (13.3) Quantity of goods received for the order item
  BASE_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UNIT_ISO                    :   "", // CHAR (3) ISO code for unit of measurement
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number for Order SU3=MAT
  ACTUAL_DELIVERY_DATE             :   "", // DATS (8) Actual delivery/finish date
  PLANNED_DELIVERY_DATE            :   "", // DATS (8) Deliv. Date fr. Planned Ord.
  PLAN_PLANT                       :   "", // CHAR (4) Planning plant for the order
  STORAGE_LOCATION                 :   "", // CHAR (4) Storage location SU3=LAG
  DELIVERY_COMPL                   :   "", // CHAR (1) "Delivery Completed" Indicator
  PRODUCTION_VERSION               :   "", // CHAR (4) Production Version SU3=VER
  PROD_PLANT                       :   "", // CHAR (4) Plant SU3=WRK
  ORDER_TYPE                       :   "", // CHAR (4) Order Type SU3=AAT
  FINISH_DATE                      :   "", // DATS (8) Basic finish date
  PRODUCTION_FINISH_DATE           :   "", // DATS (8) Scheduled finish
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  DELETION_FLAG                    :   "", // CHAR (1) Deletion flag
  MRP_AREA                         :   "", // CHAR (10) MRP Area SU3=BERID
  MATERIAL_TEXT                    :   "", // CHAR (40) Material Description
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  STOCK_SEGMENT                    :   "", // CHAR (16) Stock Segment SU3=SGT_S
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number for Order SU3=MAT
};

// BAPI_ORDER_PROD_REL_TOOLS  Production resources and tools data
const PROD_REL_TOOL= [];

// prettier-ignore
const PROD_REL_TOOL= {
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  COUNTER                          :   "", // NUMC (8) Internal counter
  PRT_ITEM_COUNT                   :   "", // NUMC (8) Item counter for production resources/tools
  DELETION_INDICATOR               :   "", // CHAR (1) Deletion Indicator
  TASK_LIST_TYPE                   :   "", // CHAR (1) Task List Type SU3=PTY
  TASK_LIST_GROUP                  :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  CTRL_KEY                         :   "", // CHAR (4) Control Key for Management of Production Resources/Tools
  EARL_SCHED_START_DATE            :   "", // DATS (8) Earliest scheduled start (date) for PRT usage
  EARL_SCHED_START_TIME            :   "", // TIMS (6) Earliest scheduled start (time) for PRT usage
  EARL_SCHED_FINISH_DATE           :   "", // DATS (8) Earliest scheduled finish (date) of PRT usage
  EARL_SCHED_FINISH_TIME           :   "", // TIMS (6) Earliest scheduled end (time) of PRT usage
  LATEST_SCHED_START_DATE          :   "", // DATS (8) Latest scheduled start (date) for PRT usage
  LATEST_SCHED_START_TIME          :   "", // TIMS (6) Latest scheduled start (time) for PRT usage
  LATEST_SCHED_FINISH_DATE         :   "", // DATS (8) Latest scheduled finish (date) of PRT usage
  LATEST_SCHED_FINISH_TIME         :   "", // TIMS (6) Latest scheduled end (time) for PRT usage
  ACTUAL_START_DATE                :   "", // DATS (8) Actual start (date) of PRT usage
  ACTUAL_START_TIME                :   "", // TIMS (6) Actual start (time) of PRT usage
  ACTUAL_FINISH_DATE               :   "", // DATS (8) Actual finish (date) of PRT usage
  ACTUAL_FINISH_TIME               :   "", // TIMS (6) Actual finish (time) of PRT usage
  DURATION                         : "0.0", // FLTP (16.16) Duration of PRT usage
  DURATION_UNIT                    :   "", // UNIT (3) ALPHA=CUNIT Time unit for duration of PRT usage
  DURATION_UNIT_ISO                :   "", // CHAR (3) ISO code for unit of measurement
  STD_VALUE_FOR_PRT_QTY            : "0.0", // QUAN (9.3) Standard Value for Quantity of Production Resources/Tools
  STD_VALUE_UNIT                   :   "", // UNIT (3) ALPHA=CUNIT Unit for Quantity of Production Resources/Tools
  STD_VALUE_UNIT_ISO               :   "", // CHAR (3) ISO code for unit of measurement
  TOTAL_QUANTITY                   : "0.0", // QUAN (9.3) Total Planned Quantity of Production Resource/Tool
  QUANTITY_UNIT                    :   "", // UNIT (3) ALPHA=CUNIT Unit for Quantity of Production Resources/Tools
  QUANTITY_UNIT_ISO                :   "", // CHAR (3) ISO code for unit of measurement
  FORMULA_TOT_QTY                  :   "", // CHAR (6) Formula for calculating the total quantity of PRT
  STD_USAGE_VALUE_FOR_PRT          : "0.0", // QUAN (9.3) Standard usage value for production resources/tools
  STD_USAGE_VALUE_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Usage value unit of the production resource/tool
  STD_USAGE_VALUE_UNIT_ISO         :   "", // CHAR (3) ISO code for unit of measurement
  USAGE_VALUE                      : "0.0", // QUAN (9.3) Total planned usage value of production resource/tool
  USAGE_VALUE_UNIT                 :   "", // UNIT (3) ALPHA=CUNIT Usage value unit of the production resource/tool
  USAGE_VALUE_UNIT_ISO             :   "", // CHAR (3) ISO code for unit of measurement
  FORMULA_TOT_USAGE                :   "", // CHAR (6) Formula for calculating the total usage value of PRT
  ORDER_NUMBER                     :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  PRT_CATEGORY                     :   "", // CHAR (1) ALPHA=FHMAR Production resources/tools category SU3=FHA
  PRT_NUMBER                       :   "", // CHAR (33) Production resource/tool number
  PRT_PLANT                        :   "", // CHAR (4) Production Resources/Tools in Plant SU3=WRK
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  DOCUMENT_TYPE                    :   "", // CHAR (3) Document Type SU3=CV2
  DOCUMENT_NUMBER                  :   "", // CHAR (25) ALPHA=ALPHA Document number SU3=CV1
  DOCUMENT_VERSION                 :   "", // CHAR (2) Document version SU3=CV3
  DOCUMENT_PART                    :   "", // CHAR (3) Document part SU3=CV4
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  MEASURING_POINT                  :   "", // CHAR (12) ALPHA=ALPHA Measuring Point SU3=IPT
  DESCRIPTION_MEASURING_POINT      :   "", // CHAR (40) Description of Measuring Point
  DESCRIPTION                      :   "", // CHAR (40) Description of the production resource/tool
  BASE_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Base unit of measure for production resources/tools
  BASE_UNIT_ISO                    :   "", // CHAR (3) ISO code for unit of measurement
  SYSTEM_STATUS                    :   "", // CHAR (40) System Status
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI_ORDER_SEQUENCE  Order Sequence Data
const SEQUENCE= [];

// prettier-ignore
const SEQUENCE= {
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  COUNTER                          :   "", // NUMC (8) Internal counter
  TASK_LIST_TYPE                   :   "", // CHAR (1) Task List Type SU3=PTY
  TASK_LIST_GROUP                  :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  GROUP_COUNTER                    :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  SEQUENCE_NO                      :   "", // CHAR (6) ALPHA=ALPHA Sequence
  SEQUENCE_CATEGORY                :   "", // CHAR (1) Sequence category
  DESCRIPTION                      :   "", // CHAR (40) Sequence description
  LOT_SZ_MIN                       : "0.0", // QUAN (13.3) From lot size
  LOT_SZ_MAX                       : "0.0", // QUAN (13.3) To lot size
  BRANCH_OPERATION                 :   "", // CHAR (4) ALPHA=NUMCV Number of the branch operation
  RETURN_OPERATION                 :   "", // CHAR (4) ALPHA=NUMCV Number of the return operation
  ORDER_NUMBER                     :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  TASK_MEASURE_UNIT                :   "", // UNIT (3) ALPHA=CUNIT Task list unit of measure
  TASK_MEASURE_UNIT_ISO            :   "", // CHAR (3) ISO code for unit of measurement
};

// BAPI_ORDER_TRIGGER_POINT  Trigger Point Data
const TRIGGER_POINT= [];

// prettier-ignore
const TRIGGER_POINT= {
  MILESTONE_NUMBER                 :   "", // NUMC (12) Milestone number
  VALID_FROM_DATE                  :   "", // DATS (8) Valid-From Date
  DELETION_INDICATOR               :   "", // CHAR (1) Deletion Indicator
  CREATED_BY                       :   "", // CHAR (12) Milestone created by
  CREATED_ON                       :   "", // DATS (8) Milestone created on
  CHANGED_BY                       :   "", // CHAR (12) Milestone changed by
  CHANGED_ON                       :   "", // DATS (8) Milestone changed on
  STD_NET_WORK                     :   "", // CHAR (8) ALPHA=ALPHA Standard network number SU3=PLN
  STD_NET_TYPE                     :   "", // CHAR (1) Standard network type SU3=PTY
  ALT_NET_WORK                     :   "", // CHAR (2) ALPHA=ALPHA Alternative to a standard network SU3=PAL
  IND_FUNCTIONS                    :   "", // CHAR (1) Indicator: Milestone is used for milestone functions
  DESCRIPTION                      :   "", // CHAR (40) Description
  OPERATION                        :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  ORDER_NUMBER                     :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
};


//
// EXPORT PARAMETERS
//

// BAPIRET2  Return Parameters

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
