//
// /COE/RBP_PAM_SERVICE_ORD_CREAT exception: 0  struct: 1  table: 7  var: 4
//
// abap 2.2.0 at: 2021-04-10 21:53:58
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// IV_NOTICE              :           "", // STRING no text (undefined)
// IV_USER_STATUS         :           "", // CHAR (4) no text (undefined)
// IS_HEADER              :           {}, // BAPI_ALM_ORDER_HEADERS_I no text (undefined)
// IT_COMPONENTS          :           [], // /COE/RBP_T_PAM_ORDER_COMP no text (undefined)
// IT_NOTICE_NOTIFICATION :           [], // RE_T_TEXTLINE no text (undefined)
// IT_OPERATIONS          :           [], // /COE/RBP_T_PAM_ORDER_OPER no text (undefined)
// IT_PERMIT              :           [], // BAPI_ALM_ORDER_PERMIT_T no text (undefined)
// IT_PERMIT_ISSUE        :           [], // BAPI_ALM_ORDER_PERMITISSUE_T no text (undefined)
// IT_PERMIT_X            :           [], // BAPI_ALM_ORDER_PERMIT_UP_T no text (undefined)

// EXPORT PARAMETERS

// EV_NOTIF_NO            :           "", // CHAR (12) ALPHA=ALPHA no text (undefined) SU3=IQM
// EV_ORDERID             :           "", // CHAR (12) ALPHA=ALPHA no text (undefined) SU3=ANR
// ET_RETURN              :           [], // BAPIRETTAB no text (undefined)
};

const result = await client.call("/COE/RBP_PAM_SERVICE_ORD_CREAT", parameters);

//
// IMPORT PARAMETERS
//

// BAPI_ALM_ORDER_HEADERS_I  

// prettier-ignore
const IS_HEADER = {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  ORDER_TYPE                       :   "", // CHAR (4) Order Type SU3=AAT
  PLANPLANT                        :   "", // CHAR (4) Maintenance Planning Plant SU3=IWK
  SCENARIO                         :   "", // CHAR (4) Scenario or Subscreen Category
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  MN_WK_CTR                        :   "", // CHAR (8) Main work center for maintenance tasks SU3=VAP
  PLANT                            :   "", // CHAR (4) Plant associated with main work center
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
  ABCINDIC                         :   "", // CHAR (1) ABC indicator for technical object
  SORTFIELD                        :   "", // CHAR (30) Sort field
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  RESPCCTR                         :   "", // CHAR (10) ALPHA=ALPHA Responsible cost center
  FUNC_AREA                        :   "", // CHAR (16) Functional Area SU3=FBE
  SUPERIOR_NETWORK                 :   "", // CHAR (12) ALPHA=ALPHA Number of superior network
  SUPERIOR_ACTIVITY                :   "", // CHAR (4) ALPHA=NUMCV Activity number in network and standard network
  WBS_ELEM                         :   "", // NUMC (8) ALPHA=ABPSP Work Breakdown Structure Element (WBS Element)
  PROCESSING_GROUP                 :   "", // NUMC (2) Processing group SU3=AKR
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  LOC_COMP_CODE                    :   "", // CHAR (4) Company Code SU3=BUK
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
  SHORT_TEXT                       :   "", // CHAR (40) Description
  ASSEMBLY_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for Field ASSEMBLY
  ASSEMBLY_GUID                    :   "", // CHAR (32) External GUID for ASSEMBLY Field
  ASSEMBLY_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for ASSEMBLY Field
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  TECO_REF_DATE                    :   "", // DATS (8) PM Order: Reference Date
  TECO_REF_TIME                    :   "", // TIMS (6) Time of Reference Date
  CALID                            :   "", // CHAR (2) Factory Calendar SU3=FCI
  KALSN                            :   "", // NUMC (2) Calendar Selection for Order
  SUPERIOR_ORDERID                 :   "", // CHAR (12) ALPHA=ALPHA Number of Superior Order SU3=UAF
  NOTIF_TYPE                       :   "", // CHAR (2) Notification Type SU3=QMR
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
  MARKER_START_POINT               :   "", // CHAR (18) Marker for Start Point
  MARKER_DISTANCE_START_POINT      :   "", // CHAR (18) Distance between Marker and Start Point
  MARKER_END_POINT                 :   "", // CHAR (18) Marker for End Point
  MARKER_DISTANCE_END_POINT        :   "", // CHAR (18) Length Spec for Distance between Marker and End Point
  MARKER_DISTANCE_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Unit for the Distance from Marker
  MARKER_DISTANCE_UNIT_ISO         :   "", // CHAR (3) Unit for the Distance from Marker in ISO Code
  REFERENCE_ORDER                  :   "", // CHAR (12) ALPHA=ALPHA Reference order number SU3=ANV
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  ASSEMBLY_LONG                    :   "", // CHAR (40) Assembly SU3=MAT
};

// /COE/RBP_T_PAM_ORDER_COMP  
const IT_COMPONENTS = [];

// prettier-ignore
const IT_COMPONENTS_line = {
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
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
  SALES_ORD                        :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  S_ORD_ITEM                       :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number SU3=SAK
  ORIGINAL_QUANTITY                : "0.0", // QUAN (13.3) Required quantity
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
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  REQ_DATE                         :   "", // DATS (8) Requirements date for the component
  REQ_TIME                         :   "", // TIMS (6) Time that reservation quantity required
  MANUAL_REQUIREMENTS_DATE         :   "", // CHAR (1) Manual Maintenance of Requirement Date
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  NOTICE                           :   "", // STRG Text for Note
};

// RE_T_TEXTLINE  
const IT_NOTICE_NOTIFICATION = [];

// prettier-ignore
const IT_NOTICE_NOTIFICATION_line = {
  ""                               :   "", // CHAR (132) Text Line [line type table]
};

// /COE/RBP_T_PAM_ORDER_OPER  
const IT_OPERATIONS = [];

// prettier-ignore
const IT_OPERATIONS_line = {
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
  ASSEMBLY_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for Field ASSEMBLY
  ASSEMBLY_GUID                    :   "", // CHAR (32) External GUID for ASSEMBLY Field
  ASSEMBLY_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for ASSEMBLY Field
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  FUNCT_LOC                        :   "", // CHAR (40) Functional Location Label
  SUBCONTRACTING                   :   "", // CHAR (1) Indicator: External Processing Operation with Subcontracting
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
  MARKER_START_POINT               :   "", // CHAR (18) Marker for Start Point
  MARKER_DISTANCE_START_POINT      :   "", // CHAR (18) Distance between Marker and Start Point
  MARKER_END_POINT                 :   "", // CHAR (18) Marker for End Point
  MARKER_DISTANCE_END_POINT        :   "", // CHAR (18) Length Spec for Distance between Marker and End Point
  MARKER_DISTANCE_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Unit for the Distance from Marker
  MARKER_DISTANCE_UNIT_ISO         :   "", // CHAR (3) Unit for the Distance from Marker in ISO Code
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
  ASSEMBLY_LONG                    :   "", // CHAR (40) Assembly
  NOTICE                           :   "", // STRG Text for Note
};

// BAPI_ALM_ORDER_PERMIT_T  
const IT_PERMIT = [];

// prettier-ignore
const IT_PERMIT_line = {
  PERMIT                           :   "", // CHAR (10) Permit Key
  RELEASE                          :   "", // CHAR (1) Indicator: Valid for Order Release
  COMPLETE                         :   "", // CHAR (1) Indicator: Valid for Order Completion
  PRINT                            :   "", // CHAR (1) Printout of Permit Papers
  NOT_RELEVANT                     :   "", // CHAR (1) Relevance of Permit
};

// BAPI_ALM_ORDER_PERMITISSUE_T  
const IT_PERMIT_ISSUE = [];

// prettier-ignore
const IT_PERMIT_ISSUE_line = {
  PERMIT                           :   "", // CHAR (10) Permit Key
  ISSUED_BY                        :   "", // CHAR (12) Permit Issued By
};

// BAPI_ALM_ORDER_PERMIT_UP_T  
const IT_PERMIT_X = [];

// prettier-ignore
const IT_PERMIT_X_line = {
  PERMIT                           :   "", // CHAR (10) Permit Key
  RELEASE                          :   "", // CHAR (1) Updated information in related user data field
  COMPLETE                         :   "", // CHAR (1) Updated information in related user data field
  PRINT                            :   "", // CHAR (1) Updated information in related user data field
  NOT_RELEVANT                     :   "", // CHAR (1) Updated information in related user data field
};


//
// EXPORT PARAMETERS
//

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
