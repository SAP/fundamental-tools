//
// BAPI_PLANNEDORDER_GET_DET_LIST var: 0  struct: 2  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

SELECTIONCRITERIA    :           {}, // BAPIPLAF_I3 Selection criteria for planned orders

// TABLE PARAMETERS

DETAILEDLIST         :           [], // BAPIPLAF_E1 List of planned orders with header data

// EXPORT PARAMETERS

// RETURN            :           {}, // BAPIRETURN1 Confirmations
};

const result = await client.call("BAPI_PLANNEDORDER_GET_DET_LIST", parameters);

//
// IMPORT PARAMETERS
//

// BAPIPLAF_I3  Selection criteria for planned orders

// prettier-ignore
const SELECTIONCRITERIA= {
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  MRP_CTRLER                       :   "", // CHAR (3) MRP controller SU3=DGR
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  RUNSCHD_HD                       :   "", // CHAR (12) ALPHA=ALPHA Run schedule header number
  VERSION                          :   "", // CHAR (4) Production Version SU3=VER
  PROD_LINE                        :   "", // CHAR (8) Production line for repetitive manufacturing SU3=AGR
  PLANNING_ID                      :   "", // CHAR (8) Planning identification 2
  END_SEL_DATE                     :   "", // DATS (8) End of the Period of Examination
  STR_SEL_DATE                     :   "", // DATS (8) Start of the Period to Be Evaluated
  PLAN_SCENARIO                    :   "", // NUMC (3) Planning Scenario of Long-Term Planning SU3=PLS
  SIMULATIVE_ORD                   :   "", // CHAR (1) Indicator for simulative planned orders
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};


//
// TABLE PARAMETERS
//

// BAPIPLAF_E1  List of planned orders with header data
const DETAILEDLIST= [];

// prettier-ignore
const DETAILEDLIST= {
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


//
// EXPORT PARAMETERS
//

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
