//
// BAPI_PLANNEDORDER_GET_DETAIL var: 1  struct: 5  table: 5  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

PLANNEDORDER           :           "", // CHAR (10) ALPHA=ALPHA Planned order number SU3=PAF

// TABLE PARAMETERS

// CAPACITYDATA1       :           [], // BAPI_PLDORDCAPA_E1 Capacity data (detailed scheduling)
// CAPACITYDATA2       :           [], // BAPI_PLDORDCAPA_E1 Capacity data (rate-based scheduling)
// CAPACITYDATA3       :           [], // BAPI_PLDORDCAPA_E1 Capacity data (rough-cut scheduling)
// COMPONENTSDATA      :           [], // BAPI_PLDORDCOMP_E1 Material component data
// FSH_MARKERS         :           [], // FSH_T_BNDL_RETURN Fashion Marker and Bundle Details

// EXPORT PARAMETERS

// CAPACITYHEADERDATA1 :           {}, // BAPI_KBKO Capacity header data (detailed scheduling)
// CAPACITYHEADERDATA2 :           {}, // BAPI_KBKO Capacity header data (rate-based scheduling)
// CAPACITYHEADERDATA3 :           {}, // BAPI_KBKO Capacity header data (rough-cut scheduling)
// HEADERDATA          :           {}, // BAPIPLAF_E1 Header data
// RETURN              :           {}, // BAPIRETURN1 Confirmations
};

const result = await client.call("BAPI_PLANNEDORDER_GET_DETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI_PLDORDCAPA_E1  Capacity data (detailed scheduling)
const CAPACITYDATA1= [];

// prettier-ignore
const CAPACITYDATA1= {
  SEQUENCE_NUM                     :   "", // CHAR (6) ALPHA=ALPHA Sequence
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  WORK_CNTR                        :   "", // CHAR (8) Work center SU3=AGR
  START_DATE                       :   "", // DATS (8) Latest start / date
  START_TIME                       :   "", // TIMS (6) Latest start / time
  FIN_DATE                         :   "", // DATS (8) Latest finish / date
  FIN_TIME                         :   "", // TIMS (6) Latest finish / time
  CAP_CAT                          :   "", // CHAR (3) Capacity category SU3=CAA
  CAP_REQ                          : "0.0", // QUAN (7.2) Capacity requirements scheduled for the operation/activity
  DISPLAY_UOM                      :   "", // UNIT (3) ALPHA=CUNIT Unit of of measure for displaying capacity requirements
  DESCRIPTION                      :   "", // CHAR (40) Operation short text
  DISPLAY_UOM_ISO                  :   "", // CHAR (3) ISO code for unit of measurement
};

// BAPI_PLDORDCAPA_E1  Capacity data (rate-based scheduling)
const CAPACITYDATA2= [];

// prettier-ignore
const CAPACITYDATA2= {
  SEQUENCE_NUM                     :   "", // CHAR (6) ALPHA=ALPHA Sequence
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  WORK_CNTR                        :   "", // CHAR (8) Work center SU3=AGR
  START_DATE                       :   "", // DATS (8) Latest start / date
  START_TIME                       :   "", // TIMS (6) Latest start / time
  FIN_DATE                         :   "", // DATS (8) Latest finish / date
  FIN_TIME                         :   "", // TIMS (6) Latest finish / time
  CAP_CAT                          :   "", // CHAR (3) Capacity category SU3=CAA
  CAP_REQ                          : "0.0", // QUAN (7.2) Capacity requirements scheduled for the operation/activity
  DISPLAY_UOM                      :   "", // UNIT (3) ALPHA=CUNIT Unit of of measure for displaying capacity requirements
  DESCRIPTION                      :   "", // CHAR (40) Operation short text
  DISPLAY_UOM_ISO                  :   "", // CHAR (3) ISO code for unit of measurement
};

// BAPI_PLDORDCAPA_E1  Capacity data (rough-cut scheduling)
const CAPACITYDATA3= [];

// prettier-ignore
const CAPACITYDATA3= {
  SEQUENCE_NUM                     :   "", // CHAR (6) ALPHA=ALPHA Sequence
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  WORK_CNTR                        :   "", // CHAR (8) Work center SU3=AGR
  START_DATE                       :   "", // DATS (8) Latest start / date
  START_TIME                       :   "", // TIMS (6) Latest start / time
  FIN_DATE                         :   "", // DATS (8) Latest finish / date
  FIN_TIME                         :   "", // TIMS (6) Latest finish / time
  CAP_CAT                          :   "", // CHAR (3) Capacity category SU3=CAA
  CAP_REQ                          : "0.0", // QUAN (7.2) Capacity requirements scheduled for the operation/activity
  DISPLAY_UOM                      :   "", // UNIT (3) ALPHA=CUNIT Unit of of measure for displaying capacity requirements
  DESCRIPTION                      :   "", // CHAR (40) Operation short text
  DISPLAY_UOM_ISO                  :   "", // CHAR (3) ISO code for unit of measurement
};

// BAPI_PLDORDCOMP_E1  Material component data
const COMPONENTSDATA= [];

// prettier-ignore
const COMPONENTSDATA= {
  ORDER_LVL                        :   "", // NUMC (2) Order level
  ORDER_PATH                       :   "", // NUMC (2) Order path
  SORT_STRING                      :   "", // CHAR (10) Sort String
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  ITEM_CAT                         :   "", // CHAR (1) Item category (bill of material)
  BOM_ITEM_NUMBER                  :   "", // CHAR (4) ALPHA=NUMCV BOM Item Number
  PHANT_ITEM                       :   "", // CHAR (1) Phantom item indicator
  SPEC_STOCK                       :   "", // CHAR (1) Special Stock Indicator
  REQ_QUAN                         : "0.0", // QUAN (13.3) Requirement Quantity
  CONF_QUAN                        : "0.0", // QUAN (15.3) Confirmed quantity for availability check in SKU
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  ENTRY_QTY                        : "0.0", // QUAN (13.3) Requirement Quantity of Component
  ENTRY_UOM                        :   "", // UNIT (3) ALPHA=CUNIT Unit of entry
  FIXED_QUAN                       :   "", // CHAR (1) Quantity is fixed
  COMP_SCRAP                       :  "0", // DEC (5.2) Component scrap in percent
  REQ_DATE                         :   "", // DATS (8) Requirements date for the component
  LATEST_REQ_DATE                  :   "", // DATS (8) Latest requirements date
  DIST_KEY                         :   "", // CHAR (4) Distribution key for component consumption
  REV_LEV                          :   "", // CHAR (2) ALPHA=NUMCV Revision level SU3=RVS
  VARSIZE_ITEM_IND                 :   "", // CHAR (1) Variable-sized item indicator
  VARSIZE_ITEM_NUM                 : "0.0", // QUAN (13.3) Number of variable-size items
  VARSIZE_ITEM_QTY                 : "0.0", // QUAN (13.3) Quantity of variable-size item
  VARSIZE_ITEM_UOM                 :   "", // UNIT (3) ALPHA=CUNIT Unit of measure for sizes 1 to 3
  VARSIZE_1                        : "0.0", // QUAN (13.3) Size 1
  VARSIZE_2                        : "0.0", // QUAN (13.3) Size 2
  VARSIZE_3                        : "0.0", // QUAN (13.3) Size 3
  FORMULA_KEY                      :   "", // CHAR (2) Formula key
  ISS_ST_LOC                       :   "", // CHAR (4) Issue Storage Location
  FOLLOWUP_ITEM                    :   "", // CHAR (1) Indicator: Follow-Up Item
  MRP_TYPE                         :   "", // CHAR (2) MRP Type
  MATL_DESC                        :   "", // CHAR (40) Material description
  PLAN_WO_FA_IND                   :   "", // CHAR (1) Indicator: planning without final assembly
  CHANGE_NUM                       :   "", // CHAR (12) ALPHA=AENNR Change Number SU3=AEN
  SUPPLYAREA                       :   "", // CHAR (10) Production Supply Area SU3=PVB
  REQ_TOTALING_TYP                 :   "", // CHAR (1) Requirements totaling type
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  ENTRY_UOM_ISO                    :   "", // CHAR (3) ISO code for unit of measurement
  VARSIZE_ITEM_UOM_ISO             :   "", // CHAR (3) ISO code for unit of measurement
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  REQ_SEGMENT                      :   "", // CHAR (16) Requirement Segment SU3=SGT_R
  STOCK_SEGMENT                    :   "", // CHAR (16) Stock Segment SU3=SGT_S
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// FSH_T_BNDL_RETURN  Fashion Marker and Bundle Details
const FSH_MARKERS= [];

// prettier-ignore
const FSH_MARKERS= {
  MARKER_ID                        :   "", // CHAR (10) Marker ID for Planned Orders/Production Orders
  MARKER_NAME                      :   "", // CHAR (30) 30 Characters
  MARKER_NUMBER                    :   "", // NUMC (2) Marker Number
  MARKER_SECTION                   :   "", // CHAR (2) Marker Section
  BUNDLE_ID                        :   "", // NUMC (8) Bundle ID for Order
  BUNDLE_QUANTITY                  : "0.0", // QUAN (13.3) Bundle Quantity
};


//
// EXPORT PARAMETERS
//

// BAPI_KBKO  Capacity header data (detailed scheduling)

// prettier-ignore
const CAPACITYHEADERDATA1= {
  CAP_REQ_RECORDID                 :   "", // NUMC (12) ID of the capacity requirements record
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  TASK_LIST_TYPE                   :   "", // CHAR (1) Task List Type SU3=PTY
  GROUP_KEY                        :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  GROUP_COUNTER                    :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  LAST_SCHED_DATE                  :   "", // DATS (8) Date of the last scheduling
  PROD_FIN_DATE                    :   "", // DATS (8) Scheduled finish
  EARLY_FIN_TIME                   :   "", // TIMS (6) Earliest scheduled finish: Execution (time)
  PROD_START_DATE                  :   "", // DATS (8) Scheduled start
  EARLY_START_TIME                 :   "", // TIMS (6) Earliest scheduled start: Execution (time)
  SCHED_TYPE                       :   "", // CHAR (1) Scheduling type
  BREAK_ALLOW_IND                  :   "", // CHAR (1) Indicator:  Scheduling allowing for breaks
  SCHED_REDTN_IND                  :   "", // CHAR (1) Reduction indicator for scheduling
  SCHEDULING_ERROR                 :   "", // CHAR (2) Scheduling error
  SCHED_SOURCE                     :   "", // CHAR (1) Scheduling source
  ROUTING_DATE                     :   "", // DATS (8) Date for Routing Explosion
};

// BAPI_KBKO  Capacity header data (rate-based scheduling)

// prettier-ignore
const CAPACITYHEADERDATA2= {
  CAP_REQ_RECORDID                 :   "", // NUMC (12) ID of the capacity requirements record
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  TASK_LIST_TYPE                   :   "", // CHAR (1) Task List Type SU3=PTY
  GROUP_KEY                        :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  GROUP_COUNTER                    :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  LAST_SCHED_DATE                  :   "", // DATS (8) Date of the last scheduling
  PROD_FIN_DATE                    :   "", // DATS (8) Scheduled finish
  EARLY_FIN_TIME                   :   "", // TIMS (6) Earliest scheduled finish: Execution (time)
  PROD_START_DATE                  :   "", // DATS (8) Scheduled start
  EARLY_START_TIME                 :   "", // TIMS (6) Earliest scheduled start: Execution (time)
  SCHED_TYPE                       :   "", // CHAR (1) Scheduling type
  BREAK_ALLOW_IND                  :   "", // CHAR (1) Indicator:  Scheduling allowing for breaks
  SCHED_REDTN_IND                  :   "", // CHAR (1) Reduction indicator for scheduling
  SCHEDULING_ERROR                 :   "", // CHAR (2) Scheduling error
  SCHED_SOURCE                     :   "", // CHAR (1) Scheduling source
  ROUTING_DATE                     :   "", // DATS (8) Date for Routing Explosion
};

// BAPI_KBKO  Capacity header data (rough-cut scheduling)

// prettier-ignore
const CAPACITYHEADERDATA3= {
  CAP_REQ_RECORDID                 :   "", // NUMC (12) ID of the capacity requirements record
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  TASK_LIST_TYPE                   :   "", // CHAR (1) Task List Type SU3=PTY
  GROUP_KEY                        :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  GROUP_COUNTER                    :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  LAST_SCHED_DATE                  :   "", // DATS (8) Date of the last scheduling
  PROD_FIN_DATE                    :   "", // DATS (8) Scheduled finish
  EARLY_FIN_TIME                   :   "", // TIMS (6) Earliest scheduled finish: Execution (time)
  PROD_START_DATE                  :   "", // DATS (8) Scheduled start
  EARLY_START_TIME                 :   "", // TIMS (6) Earliest scheduled start: Execution (time)
  SCHED_TYPE                       :   "", // CHAR (1) Scheduling type
  BREAK_ALLOW_IND                  :   "", // CHAR (1) Indicator:  Scheduling allowing for breaks
  SCHED_REDTN_IND                  :   "", // CHAR (1) Reduction indicator for scheduling
  SCHEDULING_ERROR                 :   "", // CHAR (2) Scheduling error
  SCHED_SOURCE                     :   "", // CHAR (1) Scheduling source
  ROUTING_DATE                     :   "", // DATS (8) Date for Routing Explosion
};

// BAPIPLAF_E1  Header data

// prettier-ignore
const HEADERDATA= {
  PLANNEDORDER_NUM                 :   "", // CHAR (10) ALPHA=ALPHA Planned order number SU3=PAF
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Planning material SU3=MAT
  PLAN_PLANT                       :   "", // CHAR (4) Planning Plant SU3=WRK
  PROD_PLANT                       :   "", // CHAR (4) Production plant in planned order
  ORDER_TYPE                       :   "", // CHAR (4) Order type
  PROCUREMENT_TYPE                 :   "", // CHAR (1) Procurement Type SU3=MBS
  SPECIALPROC_TYPE                 :   "", // CHAR (1) Special procurement type
  TOTAL_PLORD_QTY                  : "0.0", // QUAN (13.3) Total planned order quantity
  FIXED_SCRAP_QTY                  : "0.0", // QUAN (13.3) Fixed quantity of scrap from production
  REQ_QUAN                         : "0.0", // QUAN (13.3) Requirement Quantity
  ORDER_START_DATE                 :   "", // DATS (8) Order start date in planned order
  ORDER_FIN_DATE                   :   "", // DATS (8) Order finish date in the planned order
  PLAN_OPEN_DATE                   :   "", // DATS (8) Planned opening date in planned order
  GR_PROC_TIME                     :  "0", // DEC (3) Goods receipt processing time in days
  MRP_CONTROLLER                   :   "", // CHAR (3) MRP controller
  CONVERSION_IND                   :   "", // CHAR (1) Conversion indicator for planned order
  FIRMING_IND                      :   "", // CHAR (1) Firming indicator for planned order data
  BOM_EXP_FIX_IND                  :   "", // CHAR (1) Fixing indicator for BOM explosion
  ACCTASSCAT                       :   "", // CHAR (1) Account assignment category SU3=KNT
  SALES_ORD                        :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  S_ORD_ITEM                       :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  SCHED_LINE                       :   "", // NUMC (4) Delivery schedule for sales order
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  QUOTA_ARR                        :   "", // CHAR (10) ALPHA=ALPHA Number of quota arrangement
  QUOTARRITM                       :   "", // NUMC (3) Quota arrangement item
  FIXED_VEND                       :   "", // CHAR (10) ALPHA=ALPHA Fixed vendor
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement SU3=KTR
  AGMT_ITEM                        :   "", // NUMC (5) Item number of principal purchase agreement
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization SU3=EKO
  STGE_LOC                         :   "", // CHAR (4) Storage location SU3=LAG
  CONSUMPT                         :   "", // CHAR (1) Consumption posting
  SPEC_STOCK                       :   "", // CHAR (1) Special Stock Indicator
  INT_PROJ_ITEM                    :   "", // NUMC (8) ALPHA=ABPSP WBS Element
  BOMEXPL_NO                       :   "", // CHAR (8) BOM explosion number
  BOMEXPL_DATE                     :   "", // DATS (8) Explosion date
  VALIDITY_OBJECT                  :   "", // CHAR (12) Parameter Variant/Standard Variant
  BOM_USAGE                        :   "", // CHAR (1) BOM Usage SU3=CSV
  ALTERNATIVE_BOM                  :   "", // CHAR (2) ALPHA=ALPHA Alternative BOM
  BOM_STATUS                       :   "", // NUMC (2) BOM status
  CHANGE_NUMBER                    :   "", // CHAR (12) ALPHA=AENNR Change Number SU3=AEN
  SETRESERNO                       :   "", // NUMC (10) Settlement reservation number
  SETTLITMNO                       :   "", // NUMC (4) Item number of the settlement reservation
  DIST_KEY                         :   "", // CHAR (4) Distribution key for quantity produced
  VERSION                          :   "", // CHAR (4) Production Version SU3=VER
  RUNSCHD_HD                       :   "", // CHAR (12) ALPHA=ALPHA Run schedule header number
  PROD_SCHEDULER                   :   "", // CHAR (3) Production Supervisor SU3=CFV
  PROD_START_DATE                  :   "", // DATS (8) Start date for production
  PROD_FINISH_DATE                 :   "", // DATS (8) Finish date for production
  CAP_REQ_RECORDID                 :   "", // NUMC (12) ID of the capacity requirements record
  SCHEDULING_ID                    :   "", // NUMC (15) ID for a schedule record
  SCHEDULING_IND                   :   "", // CHAR (1) Scheduling indicator
  SCHEDULING_ERROR                 :   "", // CHAR (2) Scheduling error
  PRODUCTION_NOTE                  :   "", // CHAR (1) Production note in the planned order
  BACKFLUSH_IND                    :   "", // CHAR (1) Indicator: Backflushing for order
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  CONFIGURATION                    :   "", // NUMC (18) Configuration (internal object number) SU3=CUX
  REVISION_LEVEL                   :   "", // CHAR (2) ALPHA=NUMCV Revision level SU3=RVS
  REDUCED_QTY                      : "0.0", // QUAN (13.3) Reduced quantity in the planned order
  SCHED_RATE_INDEX                 :   "", // NUMC (12) Index for the results of scheduling production rates
  ROUGH_SCHEDINDEXLT_INDEX         :   "", // NUMC (12) Index for rough scheduling results
  SCHED_ERROR_PR                   :   "", // CHAR (2) Scheduling error in scheduling production rates
  SCHED_ERROR_RS                   :   "", // CHAR (2) Scheduling error in rough scheduling
  OBJECT_TYPE                      :   "", // CHAR (1) Object type
  PLNG_SCENARIO_LT                 :   "", // NUMC (3) Planning Scenario of Long-Term Planning SU3=PLS
  SIM_REQ_NO                       :   "", // NUMC (10) Simulation requirements number
  KANBAN_INDICATOR                 :   "", // CHAR (1) Kanban Indicator
  DISP_CAP_IND                     :   "", // CHAR (1) Indicator: capacity for planned order dispatched
  SEQ_NUMBER_ORDER                 :   "", // NUMC (14) Seq. number order
  ORDER_STR_TIME                   :   "", // TIMS (6) Start Time of Planned Order
  ORDER_FIN_TIME                   :   "", // TIMS (6) End Time of Planned Order
  ASS_ORD_IND                      :   "", // CHAR (1) Indicator: for assembly order procedures
  COLLORD_LEAD_IND                 :   "", // CHAR (1) Ind.: Leading order in collective order is planned ordre
  AVAILABLE_CONF                   :   "", // CHAR (1) Planned order: confirmation of availability
  COMMIT_QTY                       : "0.0", // QUAN (13.3) Planned order: committed quantity
  PLORD_CTRL                       :   "", // CHAR (2) Action control: planned order processing
  ACTION_PLND_ORD                  :   "", // CHAR (4) Action: planned order processing
  DATE_OF_ACTION                   :   "", // DATS (8) Date of action: planned order
  TIME_OF_ACTION                   :   "", // TIMS (6) Time of action: Planned order processing
  TOTAL_COMMIT_DAT                 :   "", // DATS (8) Total commitment date of plnd ord. after ATP check f.comps.
  SCHED_PROD_DATES                 :   "", // CHAR (1) Planned order: scheduling using production dates
  LEAD_SCHED_LEVEL                 :   "", // CHAR (1) Planned order: leading scheduling level (determines dates)
  ATP_CHECK_TYPE                   :   "", // CHAR (1) Indicator for type of availability check
  PLN_WO_ASSEMBLY                  :   "", // CHAR (1) Indicator: planning without final assembly
  REQ_PLAN_NO                      :   "", // CHAR (10) Requirements Plan Number SU3=PBN
  REQ_TOTALING                     :   "", // CHAR (1) Requirements totaling
  NUMERATOR                        :  "0", // DEC (5) Numerator for Conversion to Base Units of Measure
  DENOMINATR                       :  "0", // DEC (5) Denominator for conversion to base units of measure
  ENTRY_QNT                        : "0.0", // QUAN (13.3) Quantity in unit of entry
  UNIT_OF_ENTRY                    :   "", // UNIT (3) ALPHA=CUNIT Unit of entry
  REQ_RECORD_NO                    :   "", // NUMC (10) Requirements record number SU3=PLA
  SPEC_STVAL_IND                   :   "", // CHAR (1) Valuation of Special Stock
  DELIV_QTY                        : "0.0", // QUAN (13.3) Quantity of Goods Received
  WITHDR_QTY                       : "0.0", // QUAN (13.3) Issued Quantity
  OBJ_DEPEND_TREE                  :   "", // NUMC (17) Internal number for edge of object dependencies tree
  SC_VENDOR                        :   "", // CHAR (1) Subcontracting vendor
  DELIV_REC_VENDOR                 :   "", // CHAR (10) ALPHA=ALPHA Vendor to be supplied/who is to receive delivery
  MRP_AREA                         :   "", // CHAR (10) MRP Area SU3=BERID
  ISSUE_MRP_AREA                   :   "", // CHAR (10) Issuing MRP area when transferring stock
  MPN_MATERIAL                     :   "", // CHAR (18) ALPHA=MATN1 Material number corresponding to manufacturer part number SU3=HTN
  REPETITIVE_IND                   :   "", // CHAR (1) Repetitive Manufacturing indicator
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  UNIT_OF_ENTRY_ISO                :   "", // CHAR (3) ISO code for unit of measurement
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MPN_MATERIAL_EXTERNAL            :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MPN_MATERIAL Field
  MPN_MATERIAL_GUID                :   "", // CHAR (32) External GUID for MPN_MATERIAL Field
  MPN_MATERIAL_VERSION             :   "", // CHAR (10) ALPHA=MATNW Version Number for MPN_MATERIAL Field
  SUPPL_STLOC                      :   "", // CHAR (4) Issuing Storage Location for Stock Transport Order
  STOCK_SEGMENT                    :   "", // CHAR (16) Stock Segment SU3=SGT_S
  MATERIAL_LONG                    :   "", // CHAR (40) Planning material SU3=MAT
  MPN_MATERIAL_LONG                :   "", // CHAR (40) Material number corresponding to MPN (technically required)
};

// BAPIRETURN1  Confirmations

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
};
