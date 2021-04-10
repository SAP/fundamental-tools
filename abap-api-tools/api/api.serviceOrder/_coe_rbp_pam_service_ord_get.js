//
// /COE/RBP_PAM_SERVICE_ORD_GET exception: 0  struct: 2  table: 12  var: 6
//
// abap 2.2.0 at: 2021-04-10 21:53:58
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// IV_GET_DOCUMENT          :           "", // CHAR (1) no text (undefined)
// IV_GET_NOTIFICATION      :           "", // CHAR (1) no text (undefined)
// IV_GET_TASKLIST          :           "", // CHAR (1) no text (undefined)
// IV_ORDERID               :           "", // CHAR (12) ALPHA=ALPHA no text (undefined) SU3=ANR

// EXPORT PARAMETERS

// EV_COST_SUM              :        "0.0", // CURR (15) no text (undefined)
// EV_NOTICE                :           "", // STRING no text (undefined)
// ES_HEADER                :           {}, // BAPI_ALM_ORDER_HEADER_E no text (undefined)
// ES_HEADER_NOTIFICATION   :           {}, // BAPI2080_NOTHDRE no text (undefined)
// ET_COMPONENTS            :           [], // /COE/RBP_T_PAM_ORDER_COMP_GET no text (undefined)
// ET_COSTS_DETAILS         :           [], // /COE/RBP_T_PAM_ORDER_COSTS no text (undefined)
// ET_DOCUMENT              :           [], // /COE/RBP_T_PAM_DOCUMENT no text (undefined)
// ET_NOTICE_NOTIFICATION   :           [], // /COE/RBP_T_PAM_NOTICE_LOG no text (undefined)
// ET_OPERATIONS            :           [], // /COE/RBP_T_PAM_ORDER_OPER_GET no text (undefined)
// ET_PARTNER               :           [], // /COE/RBP_T_PAM_ORDER_PARTNER no text (undefined)
// ET_PERMIT                :           [], // BAPI_ALM_ORDER_PERMIT_READ_T no text (undefined)
// ET_PERMIT_ISSUE          :           [], // BAPI_ALM_ORDER_PER_ISSUE_R_T no text (undefined)
// ET_PERMIT_ISSUE_COMBINED :           [], // /COE/RBP_T_PAM_PERM_ISSUE_COMB no text (undefined)
// ET_RELATIONS             :           [], // BAPI_ALM_ORDER_RELATION_ET no text (undefined)
// ET_RETURN                :           [], // BAPIRETTAB no text (undefined)
// ET_TASKLIST              :           [], // /COE/RBP_T_PAM_PMPLAN no text (undefined)
};

const result = await client.call("/COE/RBP_PAM_SERVICE_ORD_GET", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//

// BAPI_ALM_ORDER_HEADER_E  

// prettier-ignore
const ES_HEADER = {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  ORDER_TYPE                       :   "", // CHAR (4) Order Type SU3=AAT
  PLANPLANT                        :   "", // CHAR (4) Maintenance Planning Plant SU3=IWK
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  MN_WK_CTR                        :   "", // CHAR (8) Main work center for maintenance tasks SU3=VAP
  PLANT                            :   "", // CHAR (4) Plant associated with main work center
  MN_WKCTR_ID                      :   "", // NUMC (8) Object ID of the Work Center
  PMACTTYPE                        :   "", // CHAR (3) Maintenance activity type
  PLANGROUP                        :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance SU3=IHG
  SYSTCOND                         :   "", // CHAR (1) Syst.Condition
  FUNCT_LOC                        :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  SERIALNO                         :   "", // CHAR (18) ALPHA=GERNR Serial Number SU3=SER
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  ASSEMBLY                         :   "", // CHAR (18) ALPHA=MATN1 Assembly SU3=MAT
  DEVICEDATA                       :   "", // CHAR (40) Additional Device Data
  MAINTPLANT                       :   "", // CHAR (4) Maintenance plant SU3=SWK
  LOCATION                         :   "", // CHAR (10) Asset location
  MAINTROOM                        :   "", // CHAR (8) Room
  PLSECTN                          :   "", // CHAR (3) Plant section SU3=BBE
  LOC_WK_CTR                       :   "", // CHAR (8) Work center SU3=AGR
  LOC_WKCTR_ID                     :   "", // NUMC (8) Object ID of PP work center
  ABCINDIC                         :   "", // CHAR (1) ABC indicator for technical object
  SORTFIELD                        :   "", // CHAR (30) Sort field
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  CO_AREA                          :   "", // CHAR (4) Controlling Area SU3=CAC
  RESPCCTR                         :   "", // CHAR (10) ALPHA=ALPHA Responsible cost center
  FUNC_AREA                        :   "", // CHAR (16) Functional Area SU3=FBE
  SUPERIOR_NETWORK                 :   "", // CHAR (12) ALPHA=ALPHA Number of superior network
  SUPERIOR_ACTIVITY                :   "", // CHAR (4) ALPHA=NUMCV Activity number in network and standard network
  SUPERIOR_ROUTING_NO              :   "", // NUMC (10) Routing number of operations in the order
  SUPERIOR_COUNTER                 :   "", // NUMC (8) General counter for order
  WBS_ELEM                         :   "", // NUMC (8) ALPHA=ABPSP Work Breakdown Structure Element (WBS Element)
  PROJ_DEF                         :   "", // NUMC (8) ALPHA=KONPD Project definition
  PROCESSING_GROUP                 :   "", // NUMC (2) Processing group SU3=AKR
  OBJECTCLASS                      :   "", // CHAR (2) ALPHA=SCOPE Object Class SU3=PCO
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  LOC_COMP_CODE                    :   "", // CHAR (4) Company Code SU3=BUK
  LOC_CO_AREA                      :   "", // CHAR (4) Controlling Area SU3=CAC
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number SU3=AN1
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber SU3=AN2
  LOC_BUS_AREA                     :   "", // CHAR (4) Business Area SU3=GSB
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  LOC_WBS_ELEM                     :   "", // NUMC (8) ALPHA=ABPSP Work Breakdown Structure Element (WBS Element)
  STANDORDER                       :   "", // CHAR (12) ALPHA=ALPHA Standing order number
  SETTLORDER                       :   "", // CHAR (12) ALPHA=ALPHA Settlement order
  SALESORG                         :   "", // CHAR (4) Sales Organization SU3=VKO
  DISTR_CHAN                       :   "", // CHAR (2) Distribution Channel SU3=VTW
  DIVISION                         :   "", // CHAR (2) Division SU3=SPA
  ORDPLANID                        :   "", // CHAR (1) Maintenance order planning indicator
  START_DATE                       :   "", // DATS (8) Basic start date
  FINISH_DATE                      :   "", // DATS (8) Basic finish date
  BASICSTART                       :   "", // TIMS (6) Basic Start (Time)
  BASIC_FIN                        :   "", // TIMS (6) Basic finish (time)
  PRIORITY                         :   "", // CHAR (1) Priority SU3=PRIOK
  REVISION                         :   "", // CHAR (8) Revision for Plant Maintenance and Customer Service
  VERSION                          :   "", // NUMC (2) Version of Available Capacity
  SCHED_TYPE                       :   "", // CHAR (1) Scheduling type
  AUTOSCHED                        :   "", // CHAR (1) Indicator: Schedule automatically
  CAP_REQMTS                       :   "", // CHAR (1) Indicator: Calculate capacity requirements
  SCHEDULING_EXACT_BREAK_TIMES     :   "", // CHAR (1) Indicator:  Scheduling allowing for breaks
  MRP_RELEVANT                     :   "", // CHAR (1) Reservation Relevance/Generation of Purchase Requisition
  PRODUCTION_START_DATE            :   "", // DATS (8) Scheduled start
  PRODUCTION_FINISH_DATE           :   "", // DATS (8) Scheduled finish
  PRODUCTION_START_TIME            :   "", // TIMS (6) Scheduled Start (Time)
  PRODUCTION_FINISH_TIME           :   "", // TIMS (6) Scheduled Finish (Time)
  ACTUAL_START_DATE                :   "", // DATS (8) Actual start date
  ACTUAL_FINISH_DATE               :   "", // DATS (8) Confirmed Order Finish Date
  ACTUAL_START_TIME                :   "", // TIMS (6) Actual start time
  ACTUAL_FINISH_TIME               :   "", // TIMS (6) Confirmed Order Finish (Time)
  REFDATE                          :   "", // DATS (8) PM Order: Reference Date
  SALES_ORD                        :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  S_ORD_ITEM                       :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  CALC_MOTIVE                      :   "", // CHAR (2) Accounting Indicator
  INVEST_PROFILE                   :   "", // CHAR (6) Investment measure profile
  SCALE                            :   "", // CHAR (2) ALPHA=ALPHA Scale of investment objects
  INV_REASON                       :   "", // CHAR (2) Reason for investment
  ENVIR_INVEST                     :   "", // CHAR (5) Reason for environmental investment
  ESTIMATED_COSTS                  : "0.0", // CURR (11.2) Estimated total costs of order
  CURRENCY                         :   "", // CUKY (5) Order Currency
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
  CSTG_SHEET                       :   "", // CHAR (6) Costing Sheet
  OVERHEAD_KEY                     :   "", // CHAR (6) Overhead key
  RES_ANAL_KEY                     :   "", // CHAR (6) Results Analysis Key SU3=ACS
  NETWORK_PROFILE                  :   "", // CHAR (7) Network profile SU3=PNW
  CSTGVAPPLN                       :   "", // CHAR (4) Costing variant for planned costs
  CSTGVARACT                       :   "", // CHAR (4) Costing variant for actual costs
  TASK_LIST_GROUP                  :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  GROUP_COUNTER                    :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  TASK_LIST_TYPE                   :   "", // CHAR (1) Task List Type SU3=PTY
  RESP_PLANNER_GROUP               :   "", // CHAR (3) Responsible planner group/department
  MNTPLAN                          :   "", // CHAR (12) ALPHA=ALPHA Maintenance Plan SU3=MPL
  MAINTITEM                        :   "", // CHAR (16) ALPHA=ALPHA Maintenance item SU3=MPS
  CALL_NO                          :    0, // INT4 (10) Maintenance Plan Call Number
  LAST_ORD                         :   "", // CHAR (12) ALPHA=ALPHA Order number SU3=ANR
  ENTERED_BY                       :   "", // CHAR (12) Entered by
  ENTER_DATE                       :   "", // DATS (8) Created on
  CHANGED_BY                       :   "", // CHAR (12) Last changed by
  CHANGE_DATE                      :   "", // DATS (8) Change date for Order Master
  SCENARIO                         :   "", // CHAR (4) Scenario or Subscreen Category
  SYS_STATUS                       :   "", // CHAR (40) System Status
  USER_ST                          :   "", // CHAR (1) User status active
  USERSTATUS                       :   "", // CHAR (40) Field displaying user status
  STAT_PROF                        :   "", // CHAR (8) Status Profile
  OBJECT_NO                        :   "", // CHAR (22) Object number SU3=ONR
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  SHORT_TEXT                       :   "", // CHAR (40) Description
  LONG_TEXT                        :   "", // CHAR (1) Long text exists
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  ASSEMBLY_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for Field ASSEMBLY
  ASSEMBLY_GUID                    :   "", // CHAR (32) External GUID for ASSEMBLY Field
  ASSEMBLY_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for ASSEMBLY Field
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  CALID                            :   "", // CHAR (2) Factory Calendar SU3=FCI
  KALSN                            :   "", // NUMC (2) Calendar Selection for Order
  SUPERIOR_ORDERID                 :   "", // CHAR (12) ALPHA=ALPHA Number of Superior Order SU3=UAF
  LEADING_ORDERID                  :   "", // CHAR (12) ALPHA=ALPHA Leading Order in Current Processing
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
  PRIOTYPE                         :   "", // CHAR (2) Priority Type
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  ASSEMBLY_LONG                    :   "", // CHAR (40) Assembly SU3=MAT
};

// BAPI2080_NOTHDRE  

// prettier-ignore
const ES_HEADER_NOTIFICATION = {
  PM_WKCTR_C                       :   "", // CHAR (8) Work center SU3=AGR
  USERSTATUS_INT                   :   "", // CHAR (5) Object status
};

// /COE/RBP_T_PAM_ORDER_COMP_GET  
const ET_COMPONENTS = [];

// prettier-ignore
const ET_COMPONENTS_line = {
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  RES_ITEM                         :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  RES_TYPE                         :   "", // CHAR (1) Record type
  MOVEMENT                         :   "", // CHAR (1) Goods movement for reservation allowed
  WITHDRAWN                        :   "", // CHAR (1) Final issue for this reservation
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  STGE_LOC                         :   "", // CHAR (4) Storage location SU3=LAG
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  FIXED_QUAN                       :   "", // CHAR (1) Quantity is fixed
  WITHD_QUAN                       : "0.0", // QUAN (13.3) Quantity withdrawn
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
  SALES_ORD                        :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  S_ORD_ITEM                       :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number SU3=SAK
  ORIGINAL_QTY                     : "0.0", // QUAN (13.3) Required quantity
  ITEM_CAT                         :   "", // CHAR (1) Item category (bill of material)
  ITEM_NUMBER                      :   "", // CHAR (4) ALPHA=NUMCV BOM item number
  ITEM_TEXT1                       :   "", // CHAR (40) BOM Item Text (Line 1)
  COST_RELEVANT                    :   "", // CHAR (1) Indicator for Relevancy to Costing
  USAGE_PROB                       :  "0", // DEC (3) Usage probability in % (alternative item)
  SORT_STRING                      :   "", // CHAR (10) Sort String
  BULK_MAT                         :   "", // CHAR (1) Indicator: bulk material
  MAT_PROVISION                    :   "", // CHAR (1) Material Provision Indicator
  WBS_ELEM                         :   "", // NUMC (8) ALPHA=ABPSP WBS Element
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  PRICE                            : "0.0", // CURR (15.2) Price in component currency
  PRICE_UNIT                       :  "0", // DEC (5) Price unit
  BACKFLUSH                        :   "", // CHAR (1) Indicator: Backflush
  PUR_GROUP                        :   "", // CHAR (3) Purchasing group SU3=EKG
  DELIVERY_DAYS                    :  "0", // DEC (3) Delivery time in days
  GR_RCPT                          :   "", // CHAR (12) Goods recipient
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  MATL_GROUP                       :   "", // CHAR (9) Material Group SU3=MKL
  GR_PR_TIME                       :  "0", // DEC (3) Goods receipt processing time in days
  VENDOR_NO                        :   "", // CHAR (10) ALPHA=ALPHA Account Number of Vendor or Creditor SU3=LIF
  INFO_REC                         :   "", // CHAR (10) ALPHA=ALPHA Number of purchasing info record SU3=INF
  LEAD_TIME_OFFSET_OPR             :  "0", // DEC (3) Lead-time offset for operation
  LEAD_TIME_OFFSET_OPR_UNIT        :   "", // UNIT (3) ALPHA=CUNIT Unit for lead-time offset for operation
  LEAD_TIME_OFFSET_OPR_UNIT_ISO    :   "", // CHAR (3) ISO code for unit of measurement
  PREQ_NAME                        :   "", // CHAR (12) Name of requisitioner/requester
  TRACKINGNO                       :   "", // CHAR (10) Requirement Tracking Number
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization SU3=EKO
  MATL_DESC                        :   "", // CHAR (40) Material description
  REQUIREMENT_QUANTITY             : "0.0", // QUAN (13.3) Requirement Quantity of Component
  REQUIREMENT_QUANTITY_UNIT        :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  REQUIREMENT_QUANTITY_UNIT_ISO    :   "", // CHAR (3) ISO code for unit of measurement
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement SU3=KTR
  AGMT_ITEM                        :   "", // NUMC (5) Item number of principal purchase agreement
  RELATIONSHIP_TYPE                :   "", // CHAR (2) ALPHA=AOBAR Type of relationship
  RELATIONSHIP_UNIT                :   "", // UNIT (3) ALPHA=CUNIT Unit for the time interval between relationships
  RELATIONSHIP_UNIT_ISO            :   "", // CHAR (3) ISO code for unit of measurement
  RELATIONSHIP_INTERVAL            : "0.0", // QUAN (5.1) Time Interval Between Relationships
  MRP_RELEVANT                     :   "", // CHAR (1) Reservation Relevance/Generation of Purchase Requisition
  DIR_PROCUR                       :   "", // CHAR (1) Direct procurement indicator for dialog display
  SPECIAL_STOCK                    :   "", // CHAR (1) Special stock indicator for dialog display
  VSI_SIZE1                        : "0.0", // QUAN (13.3) Size 1
  VSI_SIZE_UNIT                    :   "", // UNIT (3) ALPHA=CUNIT Unit of measure for sizes 1 to 3
  VSI_SIZE_UNIT_ISO                :   "", // CHAR (3) ISO code for unit of measurement
  VSI_FORMULA                      :   "", // CHAR (2) Formula key
  VSI_SIZE2                        : "0.0", // QUAN (13.3) Size 2
  VSI_NO                           : "0.0", // QUAN (13.3) Number of variable-size items
  VSI_SIZE3                        : "0.0", // QUAN (13.3) Size 3
  VSI_QTY                          : "0.0", // QUAN (13.3) Quantity of variable-size item
  VAR_SIZE_COMP_MEASURE_UNIT       :   "", // UNIT (3) ALPHA=CUNIT Unit of measure for variable-size component
  VAR_SIZE_COMP_MEASURE_UNIT_ISO   :   "", // CHAR (3) ISO code for unit of measurement
  DISCONTINUATION                  :   "", // CHAR (1) Discontinuation type
  ALT_ITEM                         :   "", // CHAR (1) Alternative item indicator
  DELETE_IND                       :   "", // CHAR (1) Item is deleted
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  REQ_DATE                         :   "", // DATS (8) Requirements date for the component
  REQ_TIME                         :   "", // TIMS (6) Time that reservation quantity required
  MOVE_TYPE                        :   "", // CHAR (3) Movement type (inventory management) SU3=BWA
  COMMITED_QUAN                    : "0.0", // QUAN (13.3) Committed quantity
  PREQ_NO                          :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number SU3=BAN
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition SU3=BAP
  DELIV_QTY                        : "0.0", // QUAN (13.3) Quantity of Goods Received
  PURCHASE_ORDER_EXISTS            :   "", // CHAR (1) Indicator: Purchase Order Exists
  BASE_QTY                         : "0.0", // QUAN (13.3) Requirement Quantity of Component
  ORIGINAL_UOM                     :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  ORIGINAL_UOM_ISO                 :   "", // CHAR (3) ISO code for unit of measurement
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  ACCTASSCAT                       :   "", // CHAR (1) Account assignment category SU3=KNT
  VALUATION_SPEC_STOCK             :   "", // CHAR (1) Valuation of Special Stock
  CONSUMPT                         :   "", // CHAR (1) Consumption posting
  VENDOR_MAT                       :   "", // CHAR (35) Material Number Used by Vendor
  VSI_ORIGINAL_QTY                 : "0.0", // QUAN (13.3) Required quantity
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  MANUAL_REQUIREMENTS_DATE         :   "", // CHAR (1) Manual Maintenance of Requirement Date
  NOTICE                           :   "", // STRG Text for Note
};

// /COE/RBP_T_PAM_ORDER_COSTS  
const ET_COSTS_DETAILS = [];

// prettier-ignore
const ET_COSTS_DETAILS_line = {
  DEBIT_TYPE                       :   "", // NUMC (1) Debit type
  VALUE_CATEGORY                   :   "", // CHAR (14) Value category
  CALC_MOTIVE                      :   "", // CHAR (2) Accounting Indicator
  BUDGET_TYPE                      :   "", // CHAR (4) Budget Type Budgeting/Planning
  COSTS_ACT                        : "0.0", // CURR (15.2) Maintenance Costs (Actual) by Value Category
  COSTS_PLAN                       : "0.0", // CURR (15.2) Maintenance Costs (Planned) by Value Category
  COSTS_EST                        : "0.0", // CURR (15.2) Maintenance Costs (Estimated) by Value Category
  REVENUES_ACT                     : "0.0", // CURR (15.2) Maintenance revenue (actual) by value category
  REVENUES_PLAN                    : "0.0", // CURR (15.2) Maintenance revenue (planned) by value category
  REVENUES_EST                     : "0.0", // CURR (15.2) Maintenance revenue (estimated) by value category
  SUM_TOTAL_ACT_BY_CAT             : "0.0", // CURR (15.2) Sum total (actual) by value category
  SUM_TOTAL_PLAN_BY_CAT            : "0.0", // CURR (15.2) Sum total (planned) by value category
  SUM_TOTAL_EST_BY_CAT             : "0.0", // CURR (15.2) Sum total (estimated) by value category
  CURRENCY                         :   "", // CUKY (5) Currency for diplaying PM order costs
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
  TEXT                             :   "", // CHAR (30) Text
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

// /COE/RBP_T_PAM_NOTICE_LOG  
const ET_NOTICE_NOTIFICATION = [];

// prettier-ignore
const ET_NOTICE_NOTIFICATION_line = {
  DATETIME                         :  "0", // DEC (15) UTC Time Stamp in Short Form (YYYYMMDDhhmmss)
  TZONE                            :   "", // CHAR (6) Time Zone
  USERID                           :   "", // CHAR (12) User Name in User Master Record SU3=XUS
  HISTORY_LINE                     :   "", // CHAR (132) Text Line
  NOTICE                           :   "", // STRG Text for Note
};

// /COE/RBP_T_PAM_ORDER_OPER_GET  
const ET_OPERATIONS = [];

// prettier-ignore
const ET_OPERATIONS_line = {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  CONTROL_KEY                      :   "", // CHAR (4) Control key
  WORK_CNTR                        :   "", // CHAR (8) Work center SU3=AGR
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  STANDARD_TEXT_KEY                :   "", // CHAR (7) Standard text key
  DESCRIPTION                      :   "", // CHAR (40) Operation short text
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  NO_OF_TIME_TICKETS               :  "0", // DEC (3) Number of Time Tickets
  WAGETYPE                         :   "", // CHAR (4) Wage type
  SUITABILITY                      :   "", // CHAR (2) Suitability
  WAGEGROUP                        :   "", // CHAR (3) Wage Group
  SORT_FLD                         :   "", // CHAR (10) Sort field
  VENDOR_NO                        :   "", // CHAR (10) ALPHA=ALPHA Account Number of Vendor or Creditor SU3=LIF
  QUANTITY                         : "0.0", // QUAN (13.3) Operation quantity in order unit of measure
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  PRICE                            : "0.0", // CURR (11.2) Price
  PRICE_UNIT                       :  "0", // DEC (5) Price unit
  COST_ELEMENT                     :   "", // CHAR (10) ALPHA=ALPHA Cost Element SU3=KAT
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
  INFO_REC                         :   "", // CHAR (10) ALPHA=ALPHA Number of purchasing info record SU3=INF
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization SU3=EKO
  PUR_GROUP                        :   "", // CHAR (3) Purchasing Group for External Processing Activity
  MATL_GROUP                       :   "", // CHAR (9) Material Group SU3=MKL
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement SU3=KTR
  AGMT_ITEM                        :   "", // NUMC (5) Item number of principal purchase agreement
  PREQ_NAME                        :   "", // CHAR (12) Name of requisitioner/requester
  TRACKINGNO                       :   "", // CHAR (10) Requirement Tracking Number
  NUMBER_OF_CAPACITIES             :    0, // INT1 (3) Number of capacities required
  PERCENT_OF_WORK                  :    0, // INT1 (3) Work percentage
  CALC_KEY                         :   "", // CHAR (1) Key for calculation
  ACTTYPE                          :   "", // CHAR (6) Activity Type SU3=LAR
  SYSTCOND                         :   "", // CHAR (1) Syst.Condition
  ASSEMBLY                         :   "", // CHAR (18) ALPHA=MATN1 Assembly
  INT_DISTR                        :   "", // CHAR (8) Distr.cap.reqmts (plant maint.,process order, network)
  GR_RCPT                          :   "", // CHAR (12) Goods recipient
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  PERS_NO                          :   "", // NUMC (8) Personnel number SU3=PER
  FW_ORDER                         :   "", // CHAR (10) ALPHA=ALPHA Framework Order
  ORDER_ITEM                       :   "", // NUMC (5) Item of framework order
  PLND_DELRY                       :  "0", // DEC (3) Planned delivery time in days
  DURATION_NORMAL                  : "0.0", // QUAN (5.1) Normal duration of the activity
  DURATION_NORMAL_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Normal duration/unit
  DURATION_NORMAL_UNIT_ISO         :   "", // CHAR (3) ISO code for unit of measurement
  CONSTRAINT_TYPE_START            :   "", // CHAR (1) Constraint on the basic start date for the activity
  CONSTRAINT_TYPE_FINISH           :   "", // CHAR (1) Constraint on the finish date of the activity
  WORK_ACTIVITY                    : "0.0", // QUAN (7.1) Work involved in the activity
  UN_WORK                          :   "", // UNIT (3) ALPHA=CUNIT Unit for work
  UN_WORK_ISO                      :   "", // CHAR (3) ISO code for unit of measurement
  START_CONS                       :   "", // DATS (8) Constraint for activity start (Basic)
  STRTTIMCON                       :   "", // TIMS (6) Constraint for activity start time (Basic)
  FIN_CONSTR                       :   "", // DATS (8) Constraint for finish of activity (Basic)
  FINTIMCONS                       :   "", // TIMS (6) Basic finish time of the activity
  EXECFACTOR                       :  "0", // DEC (3) Execution Factor
  MRP_RELEVANT                     :   "", // CHAR (1) Reservation Relevance/Generation of Purchase Requisition
  FIELD_KEY                        :   "", // CHAR (7) Key word ID for user-defined fields
  USR00                            :   "", // CHAR (20) User field with 20 characters
  USR01                            :   "", // CHAR (20) User field with 20 characters
  USR02                            :   "", // CHAR (10) User field with 10 characters
  USR03                            :   "", // CHAR (10) User field with 10 characters
  USR04                            : "0.0", // QUAN (13.3) User field for quantity (length 10.3)
  USE04                            :   "", // UNIT (3) ALPHA=CUNIT User field: Unit for quantity fields
  USE04_ISO                        :   "", // CHAR (3) ISO code for unit of measurement
  USR05                            : "0.0", // QUAN (13.3) User field for quantity (length 10.3)
  USE05                            :   "", // UNIT (3) ALPHA=CUNIT User field: Unit for quantity fields
  USE05_ISO                        :   "", // CHAR (3) ISO code for unit of measurement
  USR06                            : "0.0", // CURR (13.3) User-defined field for values (length 10,3)
  USE06                            :   "", // CUKY (5) User field: Unit for value fields
  USE06_ISO                        :   "", // CHAR (3) ISO currency code
  USR07                            : "0.0", // CURR (13.3) User-defined field for values (length 10,3)
  USE07                            :   "", // CUKY (5) User field: Unit for value fields
  USE07_ISO                        :   "", // CHAR (3) ISO currency code
  USR08                            :   "", // DATS (8) User field for date
  USR09                            :   "", // DATS (8) User field for date
  USR10                            :   "", // CHAR (1) User-defined field: Indicator for reports
  USR11                            :   "", // CHAR (1) User-defined field: Indicator for reports
  CONF_NO                          :   "", // NUMC (10) Completion confirmation number for the operation SU3=RCK
  PREQ_NO                          :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number
  PREQ_ITEM                        :   "", // NUMC (5) Item Number of Purchase Requisition in Order
  COMPLETE                         :   "", // CHAR (1) Indicator: No Remaining Work Expected
  WORK_ACTUAL                      : "0.0", // QUAN (13.3) Actual work
  EARL_SCHED_START_DATE            :   "", // DATS (8) Earliest scheduled start: Execution (date)
  EARL_SCHED_START_TIME            :   "", // TIMS (6) Earliest scheduled start: Execution (time)
  EARL_SCHED_FIN_DATE              :   "", // DATS (8) Earliest scheduled finish: Execution (date)
  EARL_SCHED_FIN_TIME              :   "", // TIMS (6) Earliest scheduled finish: Execution (time)
  LATE_SCHED_START_DATE            :   "", // DATS (8) Latest scheduled start: Execution (date)
  LATE_SCHED_START_TIME            :   "", // TIMS (6) Latest scheduled start: Execution (time)
  LATE_SCHED_FIN_DATE              :   "", // DATS (8) Latest scheduled finish: Execution (date)
  LATE_SCHED_FIN_TIME              :   "", // TIMS (6) Latest scheduled finish: Execution (time)
  ACT_START_DATE                   :   "", // DATS (8) Actual start: Execution (date)
  ACT_START_TIME                   :   "", // TIMS (6) Actual Start: Execution/Setup (Time)
  ACT_END_DATE                     :   "", // DATS (8) Actual finish: Execution (date) SU3=EDR
  ACT_END_TIME                     :   "", // TIMS (6) Actual Finish: Execution (Time) SU3=EZR
  FCST_FIN_DATE                    :   "", // DATS (8) Forecast finish date of operation from confirmation
  FCST_FIN_TIME                    :   "", // TIMS (6) Forecast End Time of Operation from Confirmation
  FREE_BUFFER                      :  "0", // DEC (3) Free float
  TOTAL_BUFFER                     :  "0", // DEC (3) Total float
  WORK_FORECAST                    : "0.0", // QUAN (7.1) Forecasted work (actual + remaining)
  SYSTEM_STATUS_TEXT               :   "", // CHAR (40) System Status
  ASSEMBLY_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for Field ASSEMBLY
  ASSEMBLY_GUID                    :   "", // CHAR (32) External GUID for ASSEMBLY Field
  ASSEMBLY_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for ASSEMBLY Field
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  FUNCT_LOC                        :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
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
  PCKG_NO                          :   "", // NUMC (10) Package number
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  MAINTENANCE_ACTIVITY_TYPE        :   "", // CHAR (3) Maintenance activity type
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  WBS_ELEM                         :   "", // NUMC (8) ALPHA=ABPSP Work breakdown structure element (WBS element)
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  CSTG_SHEET                       :   "", // CHAR (6) Costing Sheet
  OVERHEAD_KEY                     :   "", // CHAR (6) Overhead key
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  OBJECTCLASS                      :   "", // CHAR (2) ALPHA=SCOPE Object Class SU3=PCO
  FUNC_AREA                        :   "", // CHAR (16) Functional Area SU3=FBE
  OFFSET_START                     : "0.0", // QUAN (5) Offset to sub-operation start
  OFFSET_START_UNIT                :   "", // UNIT (3) ALPHA=CUNIT Unit for offset to start
  OFFSET_START_UNIT_ISO            :   "", // CHAR (3) ISO code for unit of measurement
  OFFSET_END                       : "0.0", // QUAN (5) Offset to sub-operation finish
  OFFSET_END_UNIT                  :   "", // UNIT (3) ALPHA=CUNIT Unit for offset to finish
  OFFSET_END_UNIT_ISO              :   "", // CHAR (3) ISO code for unit of measurement
  STAT_PROF                        :   "", // CHAR (8) Status Profile
  FIELD_USER_STATUS                :   "", // CHAR (40) Field displaying user status
  ASSEMBLY_LONG                    :   "", // CHAR (40) Assembly
  NOTICE                           :   "", // STRG Text for Note
  PLNTY                            :   "", // CHAR (1) Task List Type SU3=PTY
  PLNNR                            :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  PLNAL                            :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  KTEXT                            :   "", // CHAR (40) Task list description
};

// /COE/RBP_T_PAM_ORDER_PARTNER  
const ET_PARTNER = [];

// prettier-ignore
const ET_PARTNER_line = {
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTN_ROLE_OLD                   :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTNER                          :   "", // CHAR (12) ALPHA=ALPHA Partner
  PARTNER_OLD                      :   "", // CHAR (12) ALPHA=ALPHA Partner
};

// BAPI_ALM_ORDER_PERMIT_READ_T  
const ET_PERMIT = [];

// prettier-ignore
const ET_PERMIT_line = {
  PERMIT                           :   "", // CHAR (10) Permit Key
  RELEASE                          :   "", // CHAR (1) Indicator: Valid for Order Release
  COMPLETE                         :   "", // CHAR (1) Indicator: Valid for Order Completion
  PRINT                            :   "", // CHAR (1) Printout of Permit Papers
  PROPOSE                          :   "", // CHAR (1) Indicator: Permit Proposed During Processing
  NOT_RELEVANT                     :   "", // CHAR (1) Relevance of Permit
  CREATED_ON                       :   "", // DATS (8) Date on Which Record Was Created
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CHANGED_ON                       :   "", // DATS (8) Date of Last Change
  CHANGED_BY                       :   "", // CHAR (12) Name of person who changed object
  ORIGIN                           :   "", // CHAR (1) Indicator: Permit Origin in Order
  CLASS_NUM                        :   "", // CHAR (18) Class number SU3=KLA
};

// BAPI_ALM_ORDER_PER_ISSUE_R_T  
const ET_PERMIT_ISSUE = [];

// prettier-ignore
const ET_PERMIT_ISSUE_line = {
  PERMIT                           :   "", // CHAR (10) Permit Key
  ISSUED_BY                        :   "", // CHAR (12) Permit Issued By
  CREATED_BY                       :   "", // CHAR (12) Entered By
  CREATED_ON                       :   "", // DATS (8) Created On
  CREATED_TIME                     :   "", // TIMS (6) Generation Time
};

// /COE/RBP_T_PAM_PERM_ISSUE_COMB  
const ET_PERMIT_ISSUE_COMBINED = [];

// prettier-ignore
const ET_PERMIT_ISSUE_COMBINED_line = {
  PERMIT                           :   "", // CHAR (10) Permit Key
  RELEASE                          :   "", // CHAR (1) Indicator: Valid for Order Release
  COMPLETE                         :   "", // CHAR (1) Indicator: Valid for Order Completion
  PRINT                            :   "", // CHAR (1) Printout of Permit Papers
  PROPOSE                          :   "", // CHAR (1) Indicator: Permit Proposed During Processing
  NOT_RELEVANT                     :   "", // CHAR (1) Relevance of Permit
  PERM_CREATED_ON                  :   "", // DATS (8) Date on Which Record Was Created
  PERM_CREATED_BY                  :   "", // CHAR (12) Name of Person who Created the Object
  PERM_CHANGED_ON                  :   "", // DATS (8) Date of Last Change
  PERM_CHANGED_BY                  :   "", // CHAR (12) Name of person who changed object
  ORIGIN                           :   "", // CHAR (1) Indicator: Permit Origin in Order
  CLASS_NUM                        :   "", // CHAR (18) Class number SU3=KLA
  ISSUED_BY                        :   "", // CHAR (12) Permit Issued By
  PERM_ISSUE_CREATED_BY            :   "", // CHAR (12) Entered By
  PERM_ISSUE_CREATED_ON            :   "", // DATS (8) Created On
  PERM_ISSUE_CREATED_TIME          :   "", // TIMS (6) Generation Time
};

// BAPI_ALM_ORDER_RELATION_ET  
const ET_RELATIONS = [];

// prettier-ignore
const ET_RELATIONS_line = {
  ORDER_PREDECESSOR                :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  OPERATION_PREDECESSOR            :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  ORDER_SUCCESSOR                  :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  OPERATION_SUCCESSOR              :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  RELATION_TYPE                    :   "", // CHAR (2) ALPHA=AOBAR Type of relationship
  DURATION_RELATION_UNIT           :   "", // UNIT (3) ALPHA=CUNIT Unit for the time interval between relationships
  DURATION_RELATION                : "0.0", // QUAN (5.1) Time Interval Between Relationships
  DURATION_RELATION_ISOCODE_UNIT   :   "", // CHAR (3) ISO code for unit of measurement
  FACTORY_CALENDAR                 :   "", // CHAR (2) Factory Calendar SU3=FCI
  PERCENT_OF_SUCCESSOR             :   "", // NUMC (3) % used to calc. time interval between predecessor/successor
  DURATION_KEY                     :   "", // CHAR (1) Key for defining time intervals in a relationship
  WORK_CNTR                        :   "", // CHAR (8) Work center SU3=AGR
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  DELETION_FLAG                    :   "", // CHAR (1) Deletion flag
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

// /COE/RBP_T_PAM_PMPLAN  
const ET_TASKLIST = [];

// prettier-ignore
const ET_TASKLIST_line = {
  PLNTY                            :   "", // CHAR (1) Task List Type SU3=PTY
  PLNNR                            :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  PLNAL                            :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  KTEXT                            :   "", // CHAR (40) Task list description
};
