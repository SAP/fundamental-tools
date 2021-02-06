//
// BAPI_ALM_ORDER_MAINTAIN var: 1  struct: 0  table: 45  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// IV_MMSRV_EXTERNAL_MAINTENACE :           "", // CHAR (1) MMSRV Data for Order Item Is Maintained Externally

// TABLE PARAMETERS

IT_METHODS                      :           [], // BAPI_ALM_ORDER_METHOD BAPI structure: Processing methods
// ET_NOTIFICATION_NUMBERS      :           [], // BAPI_ALM_NOTIF_NUMBERS no text (en)
// ET_NUMBERS                   :           [], // BAPI_ALM_NUMBERS Return Structure with Transferred and Issued Order Numbers
// EXTENSION_IN                 :           [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
// IT_COMPONENT                 :           [], // BAPI_ALM_ORDER_COMPONENT PM/CS BAPI Order Components
// IT_COMPONENT_UP              :           [], // BAPI_ALM_ORDER_COMPONENT_UP PM/CS BAPI Order Components (Update Structure)
// IT_ESTIMATED_COSTS           :           [], // BAPI_ALM_ORDER_COSTS_EST_I ALM Order BAPIs: Estimated Costs per Value Category
// IT_HEADER                    :           [], // BAPI_ALM_ORDER_HEADERS_I Import Structure for ALM Order Headers
// IT_HEADER_SRV                :           [], // BAPI_ALM_ORDER_SRVDAT_E ALM Order BAPIs: Service-Specific Data, External Structure
// IT_HEADER_SRV_UP             :           [], // BAPI_ALM_ORDER_SRVDAT_UP ALM Order BAPIs: Service-Specific Data, External Structure
// IT_HEADER_UP                 :           [], // BAPI_ALM_ORDER_HEADERS_UP Update Structure for ALM Order Headers
// IT_OBJECTLIST                :           [], // BAPI_ALM_ORDER_OBJECTLIST Object List - BAPI Structure
// IT_OBJECTLIST_UP             :           [], // BAPI_ALM_ORDER_OLIST_UP Update Structure for Object List PM/CS
// IT_OLIST_RELATION            :           [], // BAPI_ALM_OLIST_RELATION OPROL - Relation Operation Object List - BAPI Structure
// IT_OPERATION                 :           [], // BAPI_ALM_ORDER_OPERATION Input Structure for PM/CS BAPIs Operations
// IT_OPERATION_UP              :           [], // BAPI_ALM_ORDER_OPERATION_UP Update Structure for PM/CS BAPI Operations
// IT_PARTNER                   :           [], // BAPI_ALM_ORDER_PARTN_MUL ALM Order BAPIs: Partner Data for Several Orders
// IT_PARTNER_UP                :           [], // BAPI_ALM_ORDER_PARTN_MUL_UP ALM Order BAPIs: Partner Data for Several Orders, Update
// IT_PERMIT                    :           [], // BAPI_ALM_ORDER_PERMIT Permits
// IT_PERMIT_ISSUE              :           [], // BAPI_ALM_ORDER_PERMITISSUE Issue Permits
// IT_PERMIT_UP                 :           [], // BAPI_ALM_ORDER_PERMIT_UP Update Table for Permits
// IT_PRT                       :           [], // BAPI_ALM_ORDER_PRT_I ALM Order BAPIs: Input Structure for Production Resources/Tools
// IT_PRT_UP                    :           [], // BAPI_ALM_ORDER_PRT_UP ALM Order BAPIs: Changes for Production Resources/Tools
// IT_REFORDER_ITEM             :           [], // BAPI_REFORDER_ITEM_I BAPI: Header Component for Refurbishment Order (Import)
// IT_REFORDER_ITEM_UP          :           [], // BAPI_REFORDER_ITEM_UP BAPI: Update Structure for Refurbishment Order Item
// IT_REFORDER_OPERATION        :           [], // BAPI_REFORDER_OPERATION BAPI Input Structure for Refurbishment Order First Operation
// IT_REFORDER_SERNO_OLIST_DEL  :           [], // BAPI_REFORDER_SERNO_OLIST_I BAPI: Import Structure for Serial Number Object List
// IT_REFORDER_SERNO_OLIST_INS  :           [], // BAPI_REFORDER_SERNO_OLIST_I BAPI: Import Structure for Serial Number Object List
// IT_RELATION                  :           [], // BAPI_ALM_ORDER_RELATION BAPI Structure for ALM Order Relationships
// IT_RELATION_UP               :           [], // BAPI_ALM_ORDER_RELATION_UP BAPI Structure for ALM Order Relationships
// IT_SERVICECONTRACTLIMITS     :           [], // BAPI_ALM_SRV_CONTRACT_LIMITS no text (en)
// IT_SERVICECONTRACTLIMITS_UP  :           [], // BAPI_ALM_SRV_CONTRACT_LIMITS_U no text (en)
// IT_SERVICELIMIT              :           [], // BAPI_ALM_SRV_LIMIT_DATA no text (en)
// IT_SERVICELIMIT_UP           :           [], // BAPI_ALM_SRV_LIMIT_DATA_UP no text (en)
// IT_SERVICELINES              :           [], // BAPI_ALM_SRV_SERVICE_LINE no text (en)
// IT_SERVICELINES_UP           :           [], // BAPI_ALM_SRV_SERVICE_LINE_UP no text (en)
// IT_SERVICEOUTLINE            :           [], // BAPI_ALM_SRV_OUTLINE no text (en)
// IT_SERVICEOUTLINE_UP         :           [], // BAPI_ALM_SRV_OUTLINE_UP no text (en)
// IT_SRULE                     :           [], // BAPI_ALM_ORDER_SRULE PM/CS BAPI Settlement Rule
// IT_SRULE_UP                  :           [], // BAPI_ALM_ORDER_SRULE_UP PM/CS BAPI Settlement Rule (Update Structure)
// IT_TASKLISTS                 :           [], // BAPI_ALM_ORDER_TASKLISTS_I Parameter for Integrating Task Lists
// IT_TEXT                      :           [], // BAPI_ALM_TEXT Text Header for ALM Order BAPIs
// IT_TEXT_LINES                :           [], // BAPI_ALM_TEXT_LINES SAPscript: Text Lines
// IT_USERSTATUS                :           [], // BAPI_ALM_ORDER_USRSTAT Structure for ALM Order, User Status Change
// RETURN                       :           [], // BAPIRET2 Return Parameter(s)
};

const result = await client.call("BAPI_ALM_ORDER_MAINTAIN", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI_ALM_ORDER_METHOD  BAPI structure: Processing methods
const IT_METHODS= [];

// prettier-ignore
const IT_METHODS= {
  REFNUMBER                        :   "", // NUMC (6) Reference number for link object method - attribute
  OBJECTTYPE                       :   "", // CHAR (32) Object type
  METHOD                           :   "", // CHAR (32) Method
  OBJECTKEY                        :   "", // CHAR (90) SAP external object key
};

// BAPI_ALM_NOTIF_NUMBERS  
const ET_NOTIFICATION_NUMBERS= [];

// prettier-ignore
const ET_NOTIFICATION_NUMBERS= {
  ORDER_LINE                       :    0, // INT4 (10) Row Index of Internal Tables
  NOTIF_NO_IN                      :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  NOTIF_NO_NEW                     :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
};

// BAPI_ALM_NUMBERS  Return Structure with Transferred and Issued Order Numbers
const ET_NUMBERS= [];

// prettier-ignore
const ET_NUMBERS= {
  AUFNR_IN                         :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  AUFNR_NEW                        :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
};

// BAPIPAREX  Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
const EXTENSION_IN= [];

// prettier-ignore
const EXTENSION_IN= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPI_ALM_ORDER_COMPONENT  PM/CS BAPI Order Components
const IT_COMPONENT= [];

// prettier-ignore
const IT_COMPONENT= {
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
};

// BAPI_ALM_ORDER_COMPONENT_UP  PM/CS BAPI Order Components (Update Structure)
const IT_COMPONENT_UP= [];

// prettier-ignore
const IT_COMPONENT_UP= {
  MOVEMENT                         :   "", // CHAR (1) Updated information in related user data field
  WITHDRAWN                        :   "", // CHAR (1) Updated information in related user data field
  MATERIAL                         :   "", // CHAR (1) Updated information in related user data field
  PLANT                            :   "", // CHAR (1) Updated information in related user data field
  STGE_LOC                         :   "", // CHAR (1) Updated information in related user data field
  BATCH                            :   "", // CHAR (1) Updated information in related user data field
  FIXED_QUAN                       :   "", // CHAR (1) Updated information in related user data field
  CURRENCY                         :   "", // CHAR (1) Updated information in related user data field
  CURRENCY_ISO                     :   "", // CHAR (1) Updated information in related user data field
  SALES_ORD                        :   "", // CHAR (1) Updated information in related user data field
  S_ORD_ITEM                       :   "", // CHAR (1) Updated information in related user data field
  GL_ACCOUNT                       :   "", // CHAR (1) Updated information in related user data field
  ORIGINAL_QUANTITY                :   "", // CHAR (1) Updated information in related user data field
  ITEM_CAT                         :   "", // CHAR (1) Updated information in related user data field
  ITEM_NUMBER                      :   "", // CHAR (1) Updated information in related user data field
  ITEM_TEXT1                       :   "", // CHAR (1) Updated information in related user data field
  COST_RELEVANT                    :   "", // CHAR (1) Updated information in related user data field
  USAGE_PROB                       :   "", // CHAR (1) Updated information in related user data field
  SORT_STRING                      :   "", // CHAR (1) Updated information in related user data field
  BULK_MAT                         :   "", // CHAR (1) Updated information in related user data field
  MAT_PROVISION                    :   "", // CHAR (1) Updated information in related user data field
  WBS_ELEM                         :   "", // CHAR (1) Updated information in related user data field
  ACTIVITY                         :   "", // CHAR (1) Updated information in related user data field
  PRICE                            :   "", // CHAR (1) Updated information in related user data field
  PRICE_UNIT                       :   "", // CHAR (1) Updated information in related user data field
  BACKFLUSH                        :   "", // CHAR (1) Updated information in related user data field
  PUR_GROUP                        :   "", // CHAR (1) Updated information in related user data field
  DELIVERY_DAYS                    :   "", // CHAR (1) Updated information in related user data field
  GR_RCPT                          :   "", // CHAR (1) Updated information in related user data field
  UNLOAD_PT                        :   "", // CHAR (1) Updated information in related user data field
  MATL_GROUP                       :   "", // CHAR (1) Updated information in related user data field
  GR_PR_TIME                       :   "", // CHAR (1) Updated information in related user data field
  VENDOR_NO                        :   "", // CHAR (1) Updated information in related user data field
  INFO_REC                         :   "", // CHAR (1) Updated information in related user data field
  LEAD_TIME_OFFSET_OPR             :   "", // CHAR (1) Updated information in related user data field
  LEAD_TIME_OFFSET_OPR_UNIT        :   "", // CHAR (1) Updated information in related user data field
  LEAD_TIME_OFFSET_OPR_UNIT_ISO    :   "", // CHAR (1) Updated information in related user data field
  PREQ_NAME                        :   "", // CHAR (1) Updated information in related user data field
  TRACKINGNO                       :   "", // CHAR (1) Updated information in related user data field
  PURCH_ORG                        :   "", // CHAR (1) Updated information in related user data field
  MATL_DESC                        :   "", // CHAR (1) Updated information in related user data field
  REQUIREMENT_QUANTITY             :   "", // CHAR (1) Updated information in related user data field
  REQUIREMENT_QUANTITY_UNIT        :   "", // CHAR (1) Updated information in related user data field
  REQUIREMENT_QUANTITY_UNIT_ISO    :   "", // CHAR (1) Updated information in related user data field
  AGREEMENT                        :   "", // CHAR (1) Updated information in related user data field
  AGMT_ITEM                        :   "", // CHAR (1) Updated information in related user data field
  RELATIONSHIP_TYPE                :   "", // CHAR (1) Updated information in related user data field
  RELATIONSHIP_UNIT                :   "", // CHAR (1) Updated information in related user data field
  RELATIONSHIP_UNIT_ISO            :   "", // CHAR (1) Updated information in related user data field
  RELATIONSHIP_INTERVAL            :   "", // CHAR (1) Updated information in related user data field
  MRP_RELEVANT                     :   "", // CHAR (1) Updated information in related user data field
  DIR_PROCUR                       :   "", // CHAR (1) Updated information in related user data field
  SPECIAL_STOCK                    :   "", // CHAR (1) Updated information in related user data field
  VSI_SIZE1                        :   "", // CHAR (1) Updated information in related user data field
  VSI_SIZE_UNIT                    :   "", // CHAR (1) Updated information in related user data field
  VSI_SIZE_UNIT_ISO                :   "", // CHAR (1) Updated information in related user data field
  VSI_FORMULA                      :   "", // CHAR (1) Updated information in related user data field
  VSI_SIZE2                        :   "", // CHAR (1) Updated information in related user data field
  VSI_NO                           :   "", // CHAR (1) Updated information in related user data field
  VSI_SIZE3                        :   "", // CHAR (1) Updated information in related user data field
  VSI_QTY                          :   "", // CHAR (1) Updated information in related user data field
  VAR_SIZE_COMP_MEASURE_UNIT       :   "", // CHAR (1) Updated information in related user data field
  VAR_SIZE_COMP_MEASURE_UNIT_ISO   :   "", // CHAR (1) Updated information in related user data field
  REQ_DATE                         :   "", // CHAR (1) Updated information in related user data field
  REQ_TIME                         :   "", // CHAR (1) Updated information in related user data field
  MANUAL_REQUIREMENTS_DATE         :   "", // CHAR (1) Updated information in related user data field
  MATERIAL_LONG                    :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_ORDER_COSTS_EST_I  ALM Order BAPIs: Estimated Costs per Value Category
const IT_ESTIMATED_COSTS= [];

// prettier-ignore
const IT_ESTIMATED_COSTS= {
  VALUE_CATEGORY                   :   "", // CHAR (14) Value category
  COSTS_EST                        : "0.0", // CURR (15.2) Maintenance Costs (Estimated) by Value Category
  CURRENCY                         :   "", // CUKY (5) Currency for diplaying PM order costs
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
};

// BAPI_ALM_ORDER_HEADERS_I  Import Structure for ALM Order Headers
const IT_HEADER= [];

// prettier-ignore
const IT_HEADER= {
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

// BAPI_ALM_ORDER_SRVDAT_E  ALM Order BAPIs: Service-Specific Data, External Structure
const IT_HEADER_SRV= [];

// prettier-ignore
const IT_HEADER_SRV= {
  OBJECT_NO                        :   "", // CHAR (22) Object number SU3=ONR
  SALESORG                         :   "", // CHAR (4) Sales Organization SU3=VKO
  DISTR_CHAN                       :   "", // CHAR (2) Distribution Channel SU3=VTW
  DIVISION                         :   "", // CHAR (2) Division SU3=SPA
  SALES_GRP                        :   "", // CHAR (3) Sales group SU3=VKG
  SALES_OFF                        :   "", // CHAR (4) Sales office SU3=VKB
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
  PURCH_DATE                       :   "", // DATS (8) Customer purchase order date
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Service product SU3=MAT
  QUANTITY                         : "0.0", // QUAN (13.3) Service product quantity
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  CONFIGURATION                    :   "", // NUMC (18) Configuration
  DLI_PROFILE                      :   "", // CHAR (8) Dynamic Item Processor Profile SU3=AD0
  BILLING_FORM                     :   "", // CHAR (2) Billing form
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Service product SU3=MAT
};

// BAPI_ALM_ORDER_SRVDAT_UP  ALM Order BAPIs: Service-Specific Data, External Structure
const IT_HEADER_SRV_UP= [];

// prettier-ignore
const IT_HEADER_SRV_UP= {
  SALESORG                         :   "", // CHAR (1) Updated information in related user data field
  DISTR_CHAN                       :   "", // CHAR (1) Updated information in related user data field
  DIVISION                         :   "", // CHAR (1) Updated information in related user data field
  SALES_GRP                        :   "", // CHAR (1) Updated information in related user data field
  SALES_OFF                        :   "", // CHAR (1) Updated information in related user data field
  PURCH_NO_C                       :   "", // CHAR (1) Updated information in related user data field
  PURCH_DATE                       :   "", // CHAR (1) Updated information in related user data field
  MATERIAL                         :   "", // CHAR (1) Updated information in related user data field
  QUANTITY                         :   "", // CHAR (1) Updated information in related user data field
  BASE_UOM                         :   "", // CHAR (1) Updated information in related user data field
  BASE_UOM_ISO                     :   "", // CHAR (1) Updated information in related user data field
  DLI_PROFILE                      :   "", // CHAR (1) Updated information in related user data field
  BILLING_FORM                     :   "", // CHAR (1) Updated information in related user data field
  MATERIAL_LONG                    :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_ORDER_HEADERS_UP  Update Structure for ALM Order Headers
const IT_HEADER_UP= [];

// prettier-ignore
const IT_HEADER_UP= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  BUS_AREA                         :   "", // CHAR (1) Updated information in related user data field
  MN_WK_CTR                        :   "", // CHAR (1) Updated information in related user data field
  PLANT                            :   "", // CHAR (1) Updated information in related user data field
  PMACTTYPE                        :   "", // CHAR (1) Updated information in related user data field
  PLANGROUP                        :   "", // CHAR (1) Updated information in related user data field
  SYSTCOND                         :   "", // CHAR (1) Updated information in related user data field
  FUNCT_LOC                        :   "", // CHAR (1) Updated information in related user data field
  EQUIPMENT                        :   "", // CHAR (1) Updated information in related user data field
  SERIALNO                         :   "", // CHAR (1) Updated information in related user data field
  MATERIAL                         :   "", // CHAR (1) Updated information in related user data field
  ASSEMBLY                         :   "", // CHAR (1) Updated information in related user data field
  DEVICEDATA                       :   "", // CHAR (1) Updated information in related user data field
  MAINTPLANT                       :   "", // CHAR (1) Updated information in related user data field
  LOCATION                         :   "", // CHAR (1) Updated information in related user data field
  MAINTROOM                        :   "", // CHAR (1) Updated information in related user data field
  PLSECTN                          :   "", // CHAR (1) Updated information in related user data field
  LOC_WK_CTR                       :   "", // CHAR (1) Updated information in related user data field
  ABCINDIC                         :   "", // CHAR (1) Updated information in related user data field
  SORTFIELD                        :   "", // CHAR (1) Updated information in related user data field
  PROFIT_CTR                       :   "", // CHAR (1) Updated information in related user data field
  RESPCCTR                         :   "", // CHAR (1) Updated information in related user data field
  FUNC_AREA                        :   "", // CHAR (1) Updated information in related user data field
  SUPERIOR_NETWORK                 :   "", // CHAR (1) Updated information in related user data field
  SUPERIOR_ACTIVITY                :   "", // CHAR (1) Updated information in related user data field
  WBS_ELEM                         :   "", // CHAR (1) Updated information in related user data field
  PROCESSING_GROUP                 :   "", // CHAR (1) Updated information in related user data field
  TAXJURCODE                       :   "", // CHAR (1) Updated information in related user data field
  LOC_COMP_CODE                    :   "", // CHAR (1) Updated information in related user data field
  ASSET_NO                         :   "", // CHAR (1) Updated information in related user data field
  SUB_NUMBER                       :   "", // CHAR (1) Updated information in related user data field
  LOC_BUS_AREA                     :   "", // CHAR (1) Updated information in related user data field
  COSTCENTER                       :   "", // CHAR (1) Updated information in related user data field
  LOC_WBS_ELEM                     :   "", // CHAR (1) Updated information in related user data field
  STANDORDER                       :   "", // CHAR (1) Updated information in related user data field
  SETTLORDER                       :   "", // CHAR (1) Updated information in related user data field
  SALESORG                         :   "", // CHAR (1) Updated information in related user data field
  DISTR_CHAN                       :   "", // CHAR (1) Updated information in related user data field
  DIVISION                         :   "", // CHAR (1) Updated information in related user data field
  ORDPLANID                        :   "", // CHAR (1) Updated information in related user data field
  START_DATE                       :   "", // CHAR (1) Updated information in related user data field
  FINISH_DATE                      :   "", // CHAR (1) Updated information in related user data field
  BASICSTART                       :   "", // CHAR (1) Updated information in related user data field
  BASIC_FIN                        :   "", // CHAR (1) Updated information in related user data field
  PRIORITY                         :   "", // CHAR (1) Updated information in related user data field
  REVISION                         :   "", // CHAR (1) Updated information in related user data field
  VERSION                          :   "", // CHAR (1) Updated information in related user data field
  SCHED_TYPE                       :   "", // CHAR (1) Updated information in related user data field
  AUTOSCHED                        :   "", // CHAR (1) Updated information in related user data field
  CAP_REQMTS                       :   "", // CHAR (1) Updated information in related user data field
  SCHEDULING_EXACT_BREAK_TIMES     :   "", // CHAR (1) Updated information in related user data field
  MRP_RELEVANT                     :   "", // CHAR (1) Updated information in related user data field
  SALES_ORD                        :   "", // CHAR (1) Updated information in related user data field
  S_ORD_ITEM                       :   "", // CHAR (1) Updated information in related user data field
  CALC_MOTIVE                      :   "", // CHAR (1) Updated information in related user data field
  INVEST_PROFILE                   :   "", // CHAR (1) Updated information in related user data field
  SCALE                            :   "", // CHAR (1) Updated information in related user data field
  INV_REASON                       :   "", // CHAR (1) Updated information in related user data field
  ENVIR_INVEST                     :   "", // CHAR (1) Updated information in related user data field
  ESTIMATED_COSTS                  :   "", // CHAR (1) Updated information in related user data field
  CURRENCY                         :   "", // CHAR (1) Updated information in related user data field
  CSTG_SHEET                       :   "", // CHAR (1) Updated information in related user data field
  OVERHEAD_KEY                     :   "", // CHAR (1) Updated information in related user data field
  RES_ANAL_KEY                     :   "", // CHAR (1) Updated information in related user data field
  SHORT_TEXT                       :   "", // CHAR (1) Updated information in related user data field
  NOTIF_NO                         :   "", // CHAR (1) Updated information in related user data field
  CALID                            :   "", // CHAR (1) Updated information in related user data field
  KALSN                            :   "", // CHAR (1) Updated information in related user data field
  SUPERIOR_ORDERID                 :   "", // CHAR (1) Updated information in related user data field
  NOTIF_TYPE                       :   "", // CHAR (1) Updated information in related user data field
  START_POINT                      :   "", // CHAR (1) Updated information in related user data field
  END_POINT                        :   "", // CHAR (1) Updated information in related user data field
  LINEAR_LENGTH                    :   "", // CHAR (1) Updated information in related user data field
  LINEAR_UNIT                      :   "", // CHAR (1) Updated information in related user data field
  LINEAR_UNIT_ISO                  :   "", // CHAR (1) Updated information in related user data field
  FIRST_OFFSET_TYPE_CODE           :   "", // CHAR (1) Updated information in related user data field
  FIRST_OFFSET_VALUE               :   "", // CHAR (1) Updated information in related user data field
  FIRST_OFFSET_UNIT                :   "", // CHAR (1) Updated information in related user data field
  FIRST_OFFSET_UNIT_ISO            :   "", // CHAR (1) Updated information in related user data field
  SECOND_OFFSET_TYPE_CODE          :   "", // CHAR (1) Updated information in related user data field
  SECOND_OFFSET_VALUE              :   "", // CHAR (1) Updated information in related user data field
  SECOND_OFFSET_UNIT               :   "", // CHAR (1) Updated information in related user data field
  SECOND_OFFSET_UNIT_ISO           :   "", // CHAR (1) Updated information in related user data field
  MARKER_START_POINT               :   "", // CHAR (1) Updated information in related user data field
  MARKER_DISTANCE_START_POINT      :   "", // CHAR (1) Updated information in related user data field
  MARKER_END_POINT                 :   "", // CHAR (1) Updated information in related user data field
  MARKER_DISTANCE_END_POINT        :   "", // CHAR (1) Updated information in related user data field
  MARKER_DISTANCE_UNIT             :   "", // CHAR (1) Updated information in related user data field
  MARKER_DISTANCE_UNIT_ISO         :   "", // CHAR (1) Updated information in related user data field
  MATERIAL_LONG                    :   "", // CHAR (1) Updated information in related user data field
  ASSEMBLY_LONG                    :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_ORDER_OBJECTLIST  Object List - BAPI Structure
const IT_OBJECTLIST= [];

// prettier-ignore
const IT_OBJECTLIST= {
  COUNTER                          :    0, // INT4 (10) Object list counters
  FUNCT_LOC                        :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  FUNCLOC_DISP                     :   "", // CHAR (40) Functional Location Label
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  ASSEMBLY                         :   "", // CHAR (18) ALPHA=MATN1 Assembly SU3=MAT
  SORTFIELD                        :   "", // CHAR (20) Object list sort field
  PROCESSING_IND                   :   "", // CHAR (1) Processing indicator
  SERIALNO                         :   "", // CHAR (18) ALPHA=GERNR Serial Number SU3=SER
  SERMAT                           :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  DESCRIPTN                        :   "", // CHAR (40) Description of PM Assembly
  EQUIDESCR                        :   "", // CHAR (40) Description of Technical Object
  FUNCLDESCR                       :   "", // CHAR (40) Description of functional location
  MATL_DESC                        :   "", // CHAR (40) Material description
  SHORT_TEXT                       :   "", // CHAR (40) Short Text
  SERMAT_EXTERNAL                  :   "", // CHAR (40) ALPHA=MATNL Long Material Number (Future Development) for SERMA Field
  SERMAT_GUID                      :   "", // CHAR (32) External GUID (Future Development) for SERMAT Field
  SERMAT_VERSION                   :   "", // CHAR (10) ALPHA=MATNW Version Number (Future Development) for SERMAT Field
  ASSEMBLY_LONG                    :   "", // CHAR (40) Assembly SU3=MAT
  SERMAT_LONG                      :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI_ALM_ORDER_OLIST_UP  Update Structure for Object List PM/CS
const IT_OBJECTLIST_UP= [];

// prettier-ignore
const IT_OBJECTLIST_UP= {
  SORTFIELD                        :   "", // CHAR (1) Updated information in related user data field
  PROCESSING_IND                   :   "", // CHAR (1) Updated information in related user data field
  ASSEMBLY_LONG                    :   "", // CHAR (1) Updated information in related user data field
  SERMAT_LONG                      :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_OLIST_RELATION  OPROL - Relation Operation Object List - BAPI Structure
const IT_OLIST_RELATION= [];

// prettier-ignore
const IT_OLIST_RELATION= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  OBJECTLIST                       :    0, // INT4 (10) Object list number
  COUNTER                          :    0, // INT4 (10) Object list counters
};

// BAPI_ALM_ORDER_OPERATION  Input Structure for PM/CS BAPIs Operations
const IT_OPERATION= [];

// prettier-ignore
const IT_OPERATION= {
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
};

// BAPI_ALM_ORDER_OPERATION_UP  Update Structure for PM/CS BAPI Operations
const IT_OPERATION_UP= [];

// prettier-ignore
const IT_OPERATION_UP= {
  ACTIVITY                         :   "", // CHAR (1) Updated information in related user data field
  SUB_ACTIVITY                     :   "", // CHAR (1) Updated information in related user data field
  CONTROL_KEY                      :   "", // CHAR (1) Updated information in related user data field
  WORK_CNTR                        :   "", // CHAR (1) Updated information in related user data field
  PLANT                            :   "", // CHAR (1) Updated information in related user data field
  STANDARD_TEXT_KEY                :   "", // CHAR (1) Updated information in related user data field
  DESCRIPTION                      :   "", // CHAR (1) Updated information in related user data field
  LANGU                            :   "", // CHAR (1) Updated information in related user data field
  LANGU_ISO                        :   "", // CHAR (1) Updated information in related user data field
  NO_OF_TIME_TICKETS               :   "", // CHAR (1) Updated information in related user data field
  WAGETYPE                         :   "", // CHAR (1) Updated information in related user data field
  SUITABILITY                      :   "", // CHAR (1) Updated information in related user data field
  WAGEGROUP                        :   "", // CHAR (1) Updated information in related user data field
  SORT_FLD                         :   "", // CHAR (1) Updated information in related user data field
  VENDOR_NO                        :   "", // CHAR (1) Updated information in related user data field
  QUANTITY                         :   "", // CHAR (1) Updated information in related user data field
  BASE_UOM                         :   "", // CHAR (1) Updated information in related user data field
  BASE_UOM_ISO                     :   "", // CHAR (1) Updated information in related user data field
  PRICE                            :   "", // CHAR (1) Updated information in related user data field
  PRICE_UNIT                       :   "", // CHAR (1) Updated information in related user data field
  COST_ELEMENT                     :   "", // CHAR (1) Updated information in related user data field
  CURRENCY                         :   "", // CHAR (1) Updated information in related user data field
  CURRENCY_ISO                     :   "", // CHAR (1) Updated information in related user data field
  INFO_REC                         :   "", // CHAR (1) Updated information in related user data field
  PURCH_ORG                        :   "", // CHAR (1) Updated information in related user data field
  PUR_GROUP                        :   "", // CHAR (1) Updated information in related user data field
  MATL_GROUP                       :   "", // CHAR (1) Updated information in related user data field
  AGREEMENT                        :   "", // CHAR (1) Updated information in related user data field
  AGMT_ITEM                        :   "", // CHAR (1) Updated information in related user data field
  PREQ_NAME                        :   "", // CHAR (1) Updated information in related user data field
  TRACKINGNO                       :   "", // CHAR (1) Updated information in related user data field
  NUMBER_OF_CAPACITIES             :   "", // CHAR (1) Updated information in related user data field
  PERCENT_OF_WORK                  :   "", // CHAR (1) Updated information in related user data field
  CALC_KEY                         :   "", // CHAR (1) Updated information in related user data field
  ACTTYPE                          :   "", // CHAR (1) Updated information in related user data field
  SYSTCOND                         :   "", // CHAR (1) Updated information in related user data field
  ASSEMBLY                         :   "", // CHAR (1) Updated information in related user data field
  INT_DISTR                        :   "", // CHAR (1) Updated information in related user data field
  GR_RCPT                          :   "", // CHAR (1) Updated information in related user data field
  UNLOAD_PT                        :   "", // CHAR (1) Updated information in related user data field
  PERS_NO                          :   "", // CHAR (1) Updated information in related user data field
  FW_ORDER                         :   "", // CHAR (1) Updated information in related user data field
  ORDER_ITEM                       :   "", // CHAR (1) Updated information in related user data field
  PLND_DELRY                       :   "", // CHAR (1) Updated information in related user data field
  DURATION_NORMAL                  :   "", // CHAR (1) Updated information in related user data field
  DURATION_NORMAL_UNIT             :   "", // CHAR (1) Updated information in related user data field
  DURATION_NORMAL_UNIT_ISO         :   "", // CHAR (1) Updated information in related user data field
  CONSTRAINT_TYPE_START            :   "", // CHAR (1) Updated information in related user data field
  CONSTRAINT_TYPE_FINISH           :   "", // CHAR (1) Updated information in related user data field
  WORK_ACTIVITY                    :   "", // CHAR (1) Updated information in related user data field
  UN_WORK                          :   "", // CHAR (1) Updated information in related user data field
  UN_WORK_ISO                      :   "", // CHAR (1) Updated information in related user data field
  START_CONS                       :   "", // CHAR (1) Updated information in related user data field
  STRTTIMCON                       :   "", // CHAR (1) Updated information in related user data field
  FIN_CONSTR                       :   "", // CHAR (1) Updated information in related user data field
  FINTIMCONS                       :   "", // CHAR (1) Updated information in related user data field
  EXECFACTOR                       :   "", // CHAR (1) Updated information in related user data field
  MRP_RELEVANT                     :   "", // CHAR (1) Updated information in related user data field
  FIELD_KEY                        :   "", // CHAR (1) Updated information in related user data field
  USR00                            :   "", // CHAR (1) Updated information in related user data field
  USR01                            :   "", // CHAR (1) Updated information in related user data field
  USR02                            :   "", // CHAR (1) Updated information in related user data field
  USR03                            :   "", // CHAR (1) Updated information in related user data field
  USR04                            :   "", // CHAR (1) Updated information in related user data field
  USE04                            :   "", // CHAR (1) Updated information in related user data field
  USE04_ISO                        :   "", // CHAR (1) Updated information in related user data field
  USR05                            :   "", // CHAR (1) Updated information in related user data field
  USE05                            :   "", // CHAR (1) Updated information in related user data field
  USE05_ISO                        :   "", // CHAR (1) Updated information in related user data field
  USR06                            :   "", // CHAR (1) Updated information in related user data field
  USE06                            :   "", // CHAR (1) Updated information in related user data field
  USE06_ISO                        :   "", // CHAR (1) Updated information in related user data field
  USR07                            :   "", // CHAR (1) Updated information in related user data field
  USE07                            :   "", // CHAR (1) Updated information in related user data field
  USE07_ISO                        :   "", // CHAR (1) Updated information in related user data field
  USR08                            :   "", // CHAR (1) Updated information in related user data field
  USR09                            :   "", // CHAR (1) Updated information in related user data field
  USR10                            :   "", // CHAR (1) Updated information in related user data field
  USR11                            :   "", // CHAR (1) Updated information in related user data field
  EQUIPMENT                        :   "", // CHAR (1) Updated information in related user data field
  FUNCT_LOC                        :   "", // CHAR (1) Updated information in related user data field
  SUBCONTRACTING                   :   "", // CHAR (1) Updated information in related user data field
  START_POINT                      :   "", // CHAR (1) Updated information in related user data field
  END_POINT                        :   "", // CHAR (1) Updated information in related user data field
  LINEAR_LENGTH                    :   "", // CHAR (1) Updated information in related user data field
  LINEAR_UNIT                      :   "", // CHAR (1) Updated information in related user data field
  LINEAR_UNIT_ISO                  :   "", // CHAR (1) Updated information in related user data field
  FIRST_OFFSET_TYPE_CODE           :   "", // CHAR (1) Updated information in related user data field
  FIRST_OFFSET_VALUE               :   "", // CHAR (1) Updated information in related user data field
  FIRST_OFFSET_UNIT                :   "", // CHAR (1) Updated information in related user data field
  FIRST_OFFSET_UNIT_ISO            :   "", // CHAR (1) Updated information in related user data field
  SECOND_OFFSET_TYPE_CODE          :   "", // CHAR (1) Updated information in related user data field
  SECOND_OFFSET_VALUE              :   "", // CHAR (1) Updated information in related user data field
  SECOND_OFFSET_UNIT               :   "", // CHAR (1) Updated information in related user data field
  SECOND_OFFSET_UNIT_ISO           :   "", // CHAR (1) Updated information in related user data field
  MARKER_START_POINT               :   "", // CHAR (1) Updated information in related user data field
  MARKER_DISTANCE_START_POINT      :   "", // CHAR (1) Updated information in related user data field
  MARKER_END_POINT                 :   "", // CHAR (1) Updated information in related user data field
  MARKER_DISTANCE_END_POINT        :   "", // CHAR (1) Updated information in related user data field
  MARKER_DISTANCE_UNIT             :   "", // CHAR (1) Updated information in related user data field
  MARKER_DISTANCE_UNIT_ISO         :   "", // CHAR (1) Updated information in related user data field
  MAINTENANCE_ACTIVITY_TYPE        :   "", // CHAR (1) Updated information in related user data field
  BUS_AREA                         :   "", // CHAR (1) Updated information in related user data field
  WBS_ELEM                         :   "", // CHAR (1) Updated information in related user data field
  PROFIT_CTR                       :   "", // CHAR (1) Updated information in related user data field
  CSTG_SHEET                       :   "", // CHAR (1) Updated information in related user data field
  OVERHEAD_KEY                     :   "", // CHAR (1) Updated information in related user data field
  TAXJURCODE                       :   "", // CHAR (1) Updated information in related user data field
  OBJECTCLASS                      :   "", // CHAR (1) Updated information in related user data field
  FUNC_AREA                        :   "", // CHAR (1) Updated information in related user data field
  OFFSET_START                     :   "", // CHAR (1) Updated information in related user data field
  OFFSET_START_UNIT                :   "", // CHAR (1) Updated information in related user data field
  OFFSET_START_UNIT_ISO            :   "", // CHAR (1) Updated information in related user data field
  OFFSET_END                       :   "", // CHAR (1) Updated information in related user data field
  OFFSET_END_UNIT                  :   "", // CHAR (1) Updated information in related user data field
  OFFSET_END_UNIT_ISO              :   "", // CHAR (1) Updated information in related user data field
  ASSEMBLY_LONG                    :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_ORDER_PARTN_MUL  ALM Order BAPIs: Partner Data for Several Orders
const IT_PARTNER= [];

// prettier-ignore
const IT_PARTNER= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTN_ROLE_OLD                   :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTNER                          :   "", // CHAR (12) ALPHA=ALPHA Partner
  PARTNER_OLD                      :   "", // CHAR (12) ALPHA=ALPHA Partner
};

// BAPI_ALM_ORDER_PARTN_MUL_UP  ALM Order BAPIs: Partner Data for Several Orders, Update
const IT_PARTNER_UP= [];

// prettier-ignore
const IT_PARTNER_UP= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  PARTN_ROLE                       :   "", // CHAR (1) Updated information in related user data field
  PARTN_ROLE_OLD                   :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTNER                          :   "", // CHAR (1) Updated information in related user data field
  PARTNER_OLD                      :   "", // CHAR (12) ALPHA=ALPHA Partner
};

// BAPI_ALM_ORDER_PERMIT  Permits
const IT_PERMIT= [];

// prettier-ignore
const IT_PERMIT= {
  PERMIT                           :   "", // CHAR (10) Permit Key
  RELEASE                          :   "", // CHAR (1) Indicator: Valid for Order Release
  COMPLETE                         :   "", // CHAR (1) Indicator: Valid for Order Completion
  PRINT                            :   "", // CHAR (1) Printout of Permit Papers
  NOT_RELEVANT                     :   "", // CHAR (1) Relevance of Permit
};

// BAPI_ALM_ORDER_PERMITISSUE  Issue Permits
const IT_PERMIT_ISSUE= [];

// prettier-ignore
const IT_PERMIT_ISSUE= {
  PERMIT                           :   "", // CHAR (10) Permit Key
  ISSUED_BY                        :   "", // CHAR (12) Permit Issued By
};

// BAPI_ALM_ORDER_PERMIT_UP  Update Table for Permits
const IT_PERMIT_UP= [];

// prettier-ignore
const IT_PERMIT_UP= {
  PERMIT                           :   "", // CHAR (10) Permit Key
  RELEASE                          :   "", // CHAR (1) Updated information in related user data field
  COMPLETE                         :   "", // CHAR (1) Updated information in related user data field
  PRINT                            :   "", // CHAR (1) Updated information in related user data field
  NOT_RELEVANT                     :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_ORDER_PRT_I  ALM Order BAPIs: Input Structure for Production Resources/Tools
const IT_PRT= [];

// prettier-ignore
const IT_PRT= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  ITEM_NO_OF_PRODUCTION_RESOURCE   :   "", // NUMC (4) Item Number for Production Resource/Tool
  PRT_PLANT                        :   "", // CHAR (4) Production Resources/Tools in Plant SU3=WRK
  PRT_CATEGORY                     :   "", // CHAR (1) ALPHA=FHMAR Production resources/tools category SU3=FHA
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  MISCELLANEOUS                    :   "", // CHAR (18) ALPHA=ALPHA Production resources and tools SU3=FHS
  DOCUMENT_NUMBER                  :   "", // CHAR (25) ALPHA=ALPHA Document number SU3=CV1
  DOCUMENT_TYPE                    :   "", // CHAR (3) Document Type SU3=CV2
  DOCUMENT_PART                    :   "", // CHAR (3) Document part SU3=CV4
  DOCUMENT_VERSION                 :   "", // CHAR (2) Document version SU3=CV3
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  CTRL_KEY                         :   "", // CHAR (4) Control Key for Management of Production Resources/Tools
  STD_TEXT_KEY                     :   "", // CHAR (7) Standard text key for production resources/tools
  DESCRIPTION                      :   "", // CHAR (40) First Line of Text for Production Resources/Tools
  STD_VALUE_FOR_PRT_QTY            : "0.0", // QUAN (9.3) Standard Value for Quantity of Production Resources/Tools
  PRT_USAGE_QUANTITY_SUM_UNIT      :   "", // UNIT (3) ALPHA=CUNIT Unit for Quantity of Production Resources/Tools
  PRT_USAGE_QUANTITY_SUM_UN_ISO    :   "", // CHAR (3) ISO code for unit of measurement
  FORMULA_TOT_QTY                  :   "", // CHAR (6) Formula for calculating the total quantity of PRT
  STD_USAGE_VALUE_FOR_PRT          : "0.0", // QUAN (9.3) Standard usage value for production resources/tools
  PRT_USAGE_VALUE_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Usage value unit of the production resource/tool
  PRT_USAGE_VALUE_UNIT_ISO         :   "", // CHAR (3) ISO code for unit of measurement
  FORMULA_TOT_USAGE                :   "", // CHAR (6) Formula for calculating the total usage value of PRT
  START_OFFSET                     : "0.0", // QUAN (5) Offset to start of production resource/tool usage
  START_OFFSET_UNIT                :   "", // UNIT (3) ALPHA=CUNIT Offset unit for start of prod. resource/tool usage
  START_OFFSET_UNIT_ISO            :   "", // CHAR (3) ISO code for unit of measurement
  START_REF_DATE                   :   "", // CHAR (2) Reference Date for Start of Production Resource/Tool Usage
  END_OFFSET                       : "0.0", // QUAN (5) Offset to finish of production resource/tool usage
  END_OFFSET_UNIT                  :   "", // UNIT (3) ALPHA=CUNIT Offset unit for end of production resource/tool usage
  END_OFFSET_UNIT_ISO              :   "", // CHAR (3) ISO code for unit of measurement
  END_REF_DATE                     :   "", // CHAR (2) Reference date for end of production resource/tool usage
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MEASURING_POINT                  :   "", // CHAR (12) ALPHA=ALPHA Measuring Point SU3=IPT
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI_ALM_ORDER_PRT_UP  ALM Order BAPIs: Changes for Production Resources/Tools
const IT_PRT_UP= [];

// prettier-ignore
const IT_PRT_UP= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  ITEM_NO_OF_PRODUCTION_RESOURCE   :   "", // NUMC (4) Item Number for Production Resource/Tool
  CTRL_KEY                         :   "", // CHAR (1) Updated information in related user data field
  STD_TEXT_KEY                     :   "", // CHAR (1) Updated information in related user data field
  DESCRIPTION                      :   "", // CHAR (1) Updated information in related user data field
  STD_VALUE_FOR_PRT_QTY            :   "", // CHAR (1) Updated information in related user data field
  PRT_USAGE_QUANTITY_SUM_UNIT      :   "", // CHAR (1) Updated information in related user data field
  PRT_USAGE_QUANTITY_SUM_UN_ISO    :   "", // CHAR (1) Updated information in related user data field
  FORMULA_TOT_QTY                  :   "", // CHAR (1) Updated information in related user data field
  STD_USAGE_VALUE_FOR_PRT          :   "", // CHAR (1) Updated information in related user data field
  PRT_USAGE_VALUE_UNIT             :   "", // CHAR (1) Updated information in related user data field
  PRT_USAGE_VALUE_UNIT_ISO         :   "", // CHAR (1) Updated information in related user data field
  FORMULA_TOT_USAGE                :   "", // CHAR (1) Updated information in related user data field
  START_OFFSET                     :   "", // CHAR (1) Updated information in related user data field
  START_OFFSET_UNIT                :   "", // CHAR (1) Updated information in related user data field
  START_OFFSET_UNIT_ISO            :   "", // CHAR (1) Updated information in related user data field
  START_REF_DATE                   :   "", // CHAR (1) Updated information in related user data field
  END_OFFSET                       :   "", // CHAR (1) Updated information in related user data field
  END_OFFSET_UNIT                  :   "", // CHAR (1) Updated information in related user data field
  END_OFFSET_UNIT_ISO              :   "", // CHAR (1) Updated information in related user data field
  END_REF_DATE                     :   "", // CHAR (1) Updated information in related user data field
  MATERIAL_LONG                    :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_REFORDER_ITEM_I  BAPI: Header Component for Refurbishment Order (Import)
const IT_REFORDER_ITEM= [];

// prettier-ignore
const IT_REFORDER_ITEM= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  REQUIREMENT_QUANTITY             : "0.0", // QUAN (13.3) Total order quantity
  REQUIREMENT_QUANTITY_UNIT        :   "", // UNIT (3) ALPHA=CUNIT Common unit of measure for all order items
  REQUIREMENT_QUANTITY_UNIT_ISO    :   "", // CHAR (3) ISO code for unit of measurement
  PLANT_TO                         :   "", // CHAR (4) Plant SU3=WRK
  STGE_LOC_TO                      :   "", // CHAR (4) Storage location SU3=LAG
  BATCH_TO                         :   "", // CHAR (10) Batch Number SU3=CHA
  VAL_TYPE_TO                      :   "", // CHAR (10) Valuation type SU3=BWT
  MATERIAL_TO                      :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PLANT_FROM                       :   "", // CHAR (4) Plant SU3=WRK
  STGE_LOC_FROM                    :   "", // CHAR (4) Storage location SU3=LAG
  BATCH_FROM                       :   "", // CHAR (10) Batch Number SU3=CHA
  VAL_TYPE_FROM                    :   "", // CHAR (10) Valuation type SU3=BWT
  MATERIAL_TO_EXTERNAL             :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL_TO Field
  MATERIAL_TO_GUID                 :   "", // CHAR (32) External GUID for MATERIAL_TO Field
  MATERIAL_TO_VERSION              :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL_TO Field
  MATERIAL_TO_LONG                 :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI_REFORDER_ITEM_UP  BAPI: Update Structure for Refurbishment Order Item
const IT_REFORDER_ITEM_UP= [];

// prettier-ignore
const IT_REFORDER_ITEM_UP= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  REQUIREMENT_QUANTITY             :   "", // CHAR (1) Updated information in related user data field
  REQUIREMENT_QUANTITY_UNIT        :   "", // CHAR (1) Updated information in related user data field
  PLANT_TO                         :   "", // CHAR (1) Updated information in related user data field
  STGE_LOC_TO                      :   "", // CHAR (1) Updated information in related user data field
  BATCH_TO                         :   "", // CHAR (1) Updated information in related user data field
  VAL_TYPE_TO                      :   "", // CHAR (1) Updated information in related user data field
  MATERIAL_TO                      :   "", // CHAR (1) Updated information in related user data field
  PLANT_FROM                       :   "", // CHAR (1) Updated information in related user data field
  STGE_LOC_FROM                    :   "", // CHAR (1) Updated information in related user data field
  BATCH_FROM                       :   "", // CHAR (1) Updated information in related user data field
  VAL_TYPE_FROM                    :   "", // CHAR (1) Updated information in related user data field
  MATERIAL_TO_LONG                 :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_REFORDER_OPERATION  BAPI Input Structure for Refurbishment Order First Operation
const IT_REFORDER_OPERATION= [];

// prettier-ignore
const IT_REFORDER_OPERATION= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
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
  ASSEMBLY_LONG                    :   "", // CHAR (40) Assembly
};

// BAPI_REFORDER_SERNO_OLIST_I  BAPI: Import Structure for Serial Number Object List
const IT_REFORDER_SERNO_OLIST_DEL= [];

// prettier-ignore
const IT_REFORDER_SERNO_OLIST_DEL= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  SERIALNO                         :   "", // CHAR (18) ALPHA=GERNR Serial Number SU3=SER
  UII                              :   "", // CHAR (72) Unique Item Identifier SU3=UII
};

// BAPI_REFORDER_SERNO_OLIST_I  BAPI: Import Structure for Serial Number Object List
const IT_REFORDER_SERNO_OLIST_INS= [];

// prettier-ignore
const IT_REFORDER_SERNO_OLIST_INS= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  SERIALNO                         :   "", // CHAR (18) ALPHA=GERNR Serial Number SU3=SER
  UII                              :   "", // CHAR (72) Unique Item Identifier SU3=UII
};

// BAPI_ALM_ORDER_RELATION  BAPI Structure for ALM Order Relationships
const IT_RELATION= [];

// prettier-ignore
const IT_RELATION= {
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
};

// BAPI_ALM_ORDER_RELATION_UP  BAPI Structure for ALM Order Relationships
const IT_RELATION_UP= [];

// prettier-ignore
const IT_RELATION_UP= {
  ORDER_PREDECESSOR                :   "", // CHAR (1) Updated information in related user data field
  OPERATION_PREDECESSOR            :   "", // CHAR (1) Updated information in related user data field
  ORDER_SUCCESSOR                  :   "", // CHAR (1) Updated information in related user data field
  OPERATION_SUCCESSOR              :   "", // CHAR (1) Updated information in related user data field
  RELATION_TYPE                    :   "", // CHAR (1) Updated information in related user data field
  DURATION_RELATION_UNIT           :   "", // CHAR (1) Updated information in related user data field
  DURATION_RELATION                :   "", // CHAR (1) Updated information in related user data field
  DURATION_RELATION_ISOCODE_UNIT   :   "", // CHAR (1) Updated information in related user data field
  FACTORY_CALENDAR                 :   "", // CHAR (1) Updated information in related user data field
  PERCENT_OF_SUCCESSOR             :   "", // CHAR (1) Updated information in related user data field
  DURATION_KEY                     :   "", // CHAR (1) Updated information in related user data field
  WORK_CNTR                        :   "", // CHAR (1) Updated information in related user data field
  PLANT                            :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_SRV_CONTRACT_LIMITS  
const IT_SERVICECONTRACTLIMITS= [];

// prettier-ignore
const IT_SERVICECONTRACTLIMITS= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  CONTRACT                         :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  CONTRACT_ITEM                    :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  LIMIT                            : "0.0", // CURR (13.2) Contract Limit Value
  NO_LIMIT                         :   "", // CHAR (1) No Limit
  TOTAL_VALUE                      : "0.0", // CURR (13.2) Total Value of Unplanned Entered Services
  SHORT_TEXT                       :   "", // CHAR (40) Short Text 1
};

// BAPI_ALM_SRV_CONTRACT_LIMITS_U  
const IT_SERVICECONTRACTLIMITS_UP= [];

// prettier-ignore
const IT_SERVICECONTRACTLIMITS_UP= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  CONTRACT                         :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  CONTRACT_ITEM                    :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  CONTRACT_OLD                     :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  CONTRACT_ITEM_OLD                :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  LIMIT                            :   "", // CHAR (1) Updated information in related user data field
  NO_LIMIT                         :   "", // CHAR (1) Updated information in related user data field
  TOTAL_VALUE                      :   "", // CHAR (1) Updated information in related user data field
  SHORT_TEXT                       :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_SRV_LIMIT_DATA  
const IT_SERVICELIMIT= [];

// prettier-ignore
const IT_SERVICELIMIT= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  OVERALL_LIMIT                    : "0.0", // CURR (13.2) Overall Limit
  NO_LIMIT                         :   "", // CHAR (1) No Limit
  EXP_VALUE                        : "0.0", // CURR (13.2) Expected Value of Overall Limit
  TOTAL_VALUE                      : "0.0", // CURR (13.2) Total Value of Unplanned Entered Services
  CON_PRICE_CHG                    :   "", // CHAR (1) Price Change in Entry Sheet
  CON_PRICE_PERC                   :  "0", // DEC (3.1) Percentage for price determination
  SSC_SRV_TYPE                     :   "", // CHAR (3) Key to Service Type SU3=LBR
  SSC_EDITION                      :   "", // NUMC (4) Edition of Service Type SU3=AGB
  SSC_LIMIT                        : "0.0", // CURR (11.2) Value limits on service types
  SSC_NO_LIMIT                     :   "", // CHAR (1) No limit on standard service type
  SSC_PRICE_PERC                   :  "0", // DEC (3.1) Percentage for price determination
  SSC_TOTAL_VALUE                  : "0.0", // CURR (11.2) "Actual" value on service type limit
  MSS_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Number of a Set of Model Service Specifications SU3=MSP
  MSS_LIMIT                        : "0.0", // CURR (11.2) Limit on Model Service Specifications
  MSS_NO_LIMIT                     :   "", // CHAR (1) No Limit on Model Specifications
  MSS_PRICE_CHG                    :   "", // CHAR (1) Price Change in Entry Sheet
  MSS_PRICE_PERC                   :  "0", // DEC (3.1) Percentage for Price Determination
  MSS_TOTAL_VALUE                  : "0.0", // CURR (11.2) "Actual" Value on Model Specifications Limits
  OTHER_LIMIT                      : "0.0", // CURR (13.2) Free limit
  OTHER_NO_LIMIT                   :   "", // CHAR (1) No Limit
  OTHER_TOTAL_VALUE                : "0.0", // CURR (13.2) Actual value (from other sources)
  COST_ELEMENT                     :   "", // CHAR (10) ALPHA=ALPHA Cost Element SU3=KAT
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  NDI_TAX                          : "0.0", // CURR (13.2) Non-deductible input tax
  SPTEXT                           :   "", // CHAR (40) Short description of model specifications
  LBTEXT                           :   "", // CHAR (40) Short Text
  DISTRIB                          :   "", // CHAR (1) Distribution indicator for multiple account assignment
};

// BAPI_ALM_SRV_LIMIT_DATA_UP  
const IT_SERVICELIMIT_UP= [];

// prettier-ignore
const IT_SERVICELIMIT_UP= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  OVERALL_LIMIT                    :   "", // CHAR (1) Updated information in related user data field
  NO_LIMIT                         :   "", // CHAR (1) Updated information in related user data field
  EXP_VALUE                        :   "", // CHAR (1) Updated information in related user data field
  TOTAL_VALUE                      :   "", // CHAR (1) Updated information in related user data field
  CON_PRICE_CHG                    :   "", // CHAR (1) Updated information in related user data field
  CON_PRICE_PERC                   :   "", // CHAR (1) Updated information in related user data field
  SSC_SRV_TYPE                     :   "", // CHAR (1) Updated information in related user data field
  SSC_EDITION                      :   "", // CHAR (1) Updated information in related user data field
  SSC_LIMIT                        :   "", // CHAR (1) Updated information in related user data field
  SSC_NO_LIMIT                     :   "", // CHAR (1) Updated information in related user data field
  SSC_PRICE_PERC                   :   "", // CHAR (1) Updated information in related user data field
  SSC_TOTAL_VALUE                  :   "", // CHAR (1) Updated information in related user data field
  MSS_NUMBER                       :   "", // CHAR (1) Updated information in related user data field
  MSS_LIMIT                        :   "", // CHAR (1) Updated information in related user data field
  MSS_NO_LIMIT                     :   "", // CHAR (1) Updated information in related user data field
  MSS_PRICE_CHG                    :   "", // CHAR (1) Updated information in related user data field
  MSS_PRICE_PERC                   :   "", // CHAR (1) Updated information in related user data field
  MSS_TOTAL_VALUE                  :   "", // CHAR (1) Updated information in related user data field
  OTHER_LIMIT                      :   "", // CHAR (1) Updated information in related user data field
  OTHER_NO_LIMIT                   :   "", // CHAR (1) Updated information in related user data field
  OTHER_TOTAL_VALUE                :   "", // CHAR (1) Updated information in related user data field
  COST_ELEMENT                     :   "", // CHAR (1) Updated information in related user data field
  TAX_CODE                         :   "", // CHAR (1) Updated information in related user data field
  TAXJURCODE                       :   "", // CHAR (1) Updated information in related user data field
  NDI_TAX                          :   "", // CHAR (1) Updated information in related user data field
  DISTRIB                          :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_SRV_SERVICE_LINE  
const IT_SERVICELINES= [];

// prettier-ignore
const IT_SERVICELINES= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  OUTLINE                          :   "", // NUMC (10) Outline Number
  SRV_LINE                         :   "", // NUMC (10) Line Number
  SERVICE                          :   "", // CHAR (18) ALPHA=ALPHA Activity Number SU3=ASN
  SHORT_TEXT                       :   "", // CHAR (40) Short Text
  SSC_SRV_TYPE                     :   "", // CHAR (3) Key to Service Type SU3=LBR
  SSC_EDITION                      :   "", // NUMC (4) Edition of Service Type SU3=AGB
  SSC_ITEM                         :   "", // CHAR (18) Standard Service Catalog Item
  EXT_SERVICE                      :   "", // CHAR (18) Vendor's Service Number
  QUANTITY                         : "0.0", // QUAN (13.3) Quantity with Sign
  UOM                              :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  UOM_ISO                          :   "", // CHAR (3) Base unit of measure in ISO code
  OVF_TOL                          :  "0", // DEC (3.1) Overfulfillment Tolerance
  OVF_UNLIM                        :   "", // CHAR (1) Unlimited Overfulfillment
  UPDATE_COND                      :   "", // CHAR (1) Update Conditions
  GROSS_PRICE                      : "0.0", // CURR (11.2) Gross Price
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  PRICE_UNIT                       :  "0", // DEC (5) Price unit
  DIST_IND_ACC                     :   "", // CHAR (1) Distribution indicator for multiple account assignment
  PART_INV_IND                     :   "", // CHAR (1) Partial invoice indicator
  WAGE_TYPE                        :   "", // CHAR (4) Wage Type
  MATL_GROUP                       :   "", // CHAR (9) Material Group SU3=MKL
  USERF1_NUM                       :   "", // NUMC (10) User-Defined Field
  USERF2_NUM                       : "0.0", // QUAN (13.3) User-Defined Field
  USERF1_TXT                       :   "", // CHAR (40) User-Defined Field
  USERF2_TXT                       :   "", // CHAR (10) User-Defined Field
  NET_PRICE                        : "0.0", // CURR (11.2) Net Value of Item
  TAX_AMOUNT                       : "0.0", // CURR (11.2) Tax base amount
  PRICE_CHG                        :   "", // CHAR (1) Price Change in Entry Sheet
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  NDI_TAX                          : "0.0", // CURR (11.2) Non-deductible input tax
  HR_PERS_NO                       :   "", // NUMC (8) Personnel Number SU3=PER
  HR_PERS_NO_EXT                   :   "", // CHAR (40) External Personnel Number
  HR_DATE                          :   "", // DATS (8) Date
  HR_START_TIME                    :   "", // TIMS (6) Start Time
  HR_END_TIME                      :   "", // TIMS (6) End Time
  FORMULA                          :   "", // CHAR (10) Formula Number
  FORM_VAL1                        : "0.0", // QUAN (13.3) Formula Value
  FORM_VAL2                        : "0.0", // QUAN (13.3) Formula Value
  FORM_VAL3                        : "0.0", // QUAN (13.3) Formula Value
  FORM_VAL4                        : "0.0", // QUAN (13.3) Formula Value
  FORM_VAL5                        : "0.0", // QUAN (13.3) Formula Value
  LINE_TYPE                        :   "", // CHAR (1) Line Type for Services
  LINE_CAT                         :   "", // CHAR (1) Line Category of Service Line
  ALTERNATIVE                      :   "", // CHAR (1) Alternatives Line Number
  ALT_SRV_LINE                     :   "", // NUMC (10) Alternatives: Reference to basic item
  PER_SDATE                        :   "", // DATS (8) Period of Performance Start Date
  PER_EDATE                        :   "", // DATS (8) Period of Performance End Date
  EXTERNAL_ITEM_ID                 :   "", // CHAR (40) SRM Reference Key
  SERVICE_ITEM_KEY                 :   "", // NUMC (10) Item Key for eSOA Messages
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number SU3=SAK
};

// BAPI_ALM_SRV_SERVICE_LINE_UP  
const IT_SERVICELINES_UP= [];

// prettier-ignore
const IT_SERVICELINES_UP= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  OUTLINE                          :   "", // NUMC (10) Outline Number
  SRV_LINE                         :   "", // NUMC (10) Line Number
  SERVICE                          :   "", // CHAR (1) Updated information in related user data field
  SHORT_TEXT                       :   "", // CHAR (1) Updated information in related user data field
  SSC_SRV_TYPE                     :   "", // CHAR (1) Updated information in related user data field
  SSC_EDITION                      :   "", // CHAR (1) Updated information in related user data field
  SSC_ITEM                         :   "", // CHAR (1) Updated information in related user data field
  EXT_SERVICE                      :   "", // CHAR (1) Updated information in related user data field
  QUANTITY                         :   "", // CHAR (1) Updated information in related user data field
  UOM                              :   "", // CHAR (1) Updated information in related user data field
  UOM_ISO                          :   "", // CHAR (1) Updated information in related user data field
  OVF_TOL                          :   "", // CHAR (1) Updated information in related user data field
  OVF_UNLIM                        :   "", // CHAR (1) Updated information in related user data field
  UPDATE_COND                      :   "", // CHAR (1) Updated information in related user data field
  GROSS_PRICE                      :   "", // CHAR (1) Updated information in related user data field
  CURRENCY                         :   "", // CHAR (1) Updated information in related user data field
  PRICE_UNIT                       :   "", // CHAR (1) Updated information in related user data field
  DIST_IND_ACC                     :   "", // CHAR (1) Updated information in related user data field
  PART_INV_IND                     :   "", // CHAR (1) Updated information in related user data field
  WAGE_TYPE                        :   "", // CHAR (1) Updated information in related user data field
  MATL_GROUP                       :   "", // CHAR (1) Updated information in related user data field
  USERF1_NUM                       :   "", // CHAR (1) Updated information in related user data field
  USERF2_NUM                       :   "", // CHAR (1) Updated information in related user data field
  USERF1_TXT                       :   "", // CHAR (1) Updated information in related user data field
  USERF2_TXT                       :   "", // CHAR (1) Updated information in related user data field
  NET_PRICE                        :   "", // CHAR (1) Updated information in related user data field
  TAX_AMOUNT                       :   "", // CHAR (1) Updated information in related user data field
  PRICE_CHG                        :   "", // CHAR (1) Updated information in related user data field
  TAX_CODE                         :   "", // CHAR (1) Updated information in related user data field
  TAXJURCODE                       :   "", // CHAR (1) Updated information in related user data field
  NDI_TAX                          :   "", // CHAR (1) Updated information in related user data field
  HR_PERS_NO                       :   "", // CHAR (1) Updated information in related user data field
  HR_PERS_NO_EXT                   :   "", // CHAR (1) Updated information in related user data field
  HR_DATE                          :   "", // CHAR (1) Updated information in related user data field
  HR_START_TIME                    :   "", // CHAR (1) Updated information in related user data field
  HR_END_TIME                      :   "", // CHAR (1) Updated information in related user data field
  FORMULA                          :   "", // CHAR (1) Updated information in related user data field
  FORM_VAL1                        :   "", // CHAR (1) Updated information in related user data field
  FORM_VAL2                        :   "", // CHAR (1) Updated information in related user data field
  FORM_VAL3                        :   "", // CHAR (1) Updated information in related user data field
  FORM_VAL4                        :   "", // CHAR (1) Updated information in related user data field
  FORM_VAL5                        :   "", // CHAR (1) Updated information in related user data field
  LINE_TYPE                        :   "", // CHAR (1) Updated information in related user data field
  LINE_CAT                         :   "", // CHAR (1) Updated information in related user data field
  ALTERNATIVE                      :   "", // CHAR (1) Updated information in related user data field
  ALT_SRV_LINE                     :   "", // CHAR (1) Updated information in related user data field
  PER_SDATE                        :   "", // CHAR (1) Updated information in related user data field
  PER_EDATE                        :   "", // CHAR (1) Updated information in related user data field
  EXTERNAL_ITEM_ID                 :   "", // CHAR (1) Updated information in related user data field
  SERVICE_ITEM_KEY                 :   "", // CHAR (1) Updated information in related user data field
  GL_ACCOUNT                       :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_SRV_OUTLINE  
const IT_SERVICEOUTLINE= [];

// prettier-ignore
const IT_SERVICEOUTLINE= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  OUTLINE                          :   "", // NUMC (10) Outline Number
  PARENT_OUTLINE                   :   "", // NUMC (10) Parent's Outline Number
  OUTLINE_LEVEL_NAME               :   "", // CHAR (8) Outline Level
  SHORT_TEXT                       :   "", // CHAR (40) Short Text
  FROM_LINE                        :   "", // CHAR (6) Lower Limit
  TO_LINE                          :   "", // CHAR (6) Upper Limit
  ACTUAL_PRICE                     : "0.0", // CURR (11.2) Entered Value
  TOT_PRICE                        : "0.0", // CURR (11.2) Net Value of Item
  EXTERNAL_ITEM_ID                 :   "", // CHAR (40) SRM Reference Key
  SERVICE_ITEM_KEY                 :   "", // NUMC (10) Item Key for eSOA Messages
};

// BAPI_ALM_SRV_OUTLINE_UP  
const IT_SERVICEOUTLINE_UP= [];

// prettier-ignore
const IT_SERVICEOUTLINE_UP= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  OUTLINE                          :   "", // NUMC (10) Outline Number
  PARENT_OUTLINE                   :   "", // NUMC (10) Parent's Outline Number
  OUTLINE_LEVEL_NAME               :   "", // CHAR (1) Updated information in related user data field
  SHORT_TEXT                       :   "", // CHAR (1) Updated information in related user data field
  FROM_LINE                        :   "", // CHAR (1) Updated information in related user data field
  TO_LINE                          :   "", // CHAR (1) Updated information in related user data field
  ACTUAL_PRICE                     :   "", // CHAR (1) Updated information in related user data field
  TOT_PRICE                        :   "", // CHAR (1) Updated information in related user data field
  EXTERNAL_ITEM_ID                 :   "", // CHAR (1) Updated information in related user data field
  SERVICE_ITEM_KEY                 :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_ORDER_SRULE  PM/CS BAPI Settlement Rule
const IT_SRULE= [];

// prettier-ignore
const IT_SRULE= {
  OBJNR                            :   "", // CHAR (22) Object number SU3=ONR
  LFDNR                            :   "", // NUMC (3) Sequence number of distribution rule
  SETTL_TYPE                       :   "", // CHAR (3) Settlement Type (English Fixed Values for BAPI)
  SOURCE                           :   "", // CHAR (3) ALPHA=ALPHA Source Assignment
  PERCENTAGE                       :  "0", // DEC (5.2) Settlement percentage rate
  EQUIV_NUMBER                     :  "0", // DEC (10) Equivalence number for order settlement
  AMOUNT                           :  "0", // DEC (23.4) Amount for Amount Rule in BAPIs
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number SU3=SAK
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  WBS_ELEMENT                      :   "", // CHAR (24) ALPHA=ABPSN Work Breakdown Structure Element (WBS Element) SU3=PRO
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number SU3=AN1
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber SU3=AN2
  NETWORK                          :   "", // CHAR (12) ALPHA=ALPHA Network Number for Account Assignment SU3=NET
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SALES_ORD                        :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  S_ORD_ITEM                       :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  COST_OBJ                         :   "", // CHAR (12) Cost Object SU3=KTR
  CO_BUSPROC                       :   "", // CHAR (12) ALPHA=ALPHA Business Process SU3=KWP
  EXTNR                            :   "", // NUMC (3) Distribution Rule Number
  VALID_TO_YEAR                    :   "", // NUMC (4) ALPHA=GJAHR Valid-to year
  VALID_TO_PER                     :   "", // NUMC (3) Valid to period
  VALID_FROM_YEAR                  :   "", // NUMC (4) ALPHA=GJAHR Valid-from year
  VALID_FROM_PER                   :   "", // NUMC (3) Valid-from period
};

// BAPI_ALM_ORDER_SRULE_UP  PM/CS BAPI Settlement Rule (Update Structure)
const IT_SRULE_UP= [];

// prettier-ignore
const IT_SRULE_UP= {
  SETTL_TYPE                       :   "", // CHAR (1) Updated information in related user data field
  SOURCE                           :   "", // CHAR (1) Updated information in related user data field
  PERCENTAGE                       :   "", // CHAR (1) Updated information in related user data field
  EQUIV_NUMBER                     :   "", // CHAR (1) Updated information in related user data field
  AMOUNT                           :   "", // CHAR (1) Updated information in related user data field
  BUS_AREA                         :   "", // CHAR (1) Updated information in related user data field
  COMP_CODE                        :   "", // CHAR (1) Updated information in related user data field
  GL_ACCOUNT                       :   "", // CHAR (1) Updated information in related user data field
  PROFIT_CTR                       :   "", // CHAR (1) Updated information in related user data field
  COSTCENTER                       :   "", // CHAR (1) Updated information in related user data field
  ORDERID                          :   "", // CHAR (1) Updated information in related user data field
  WBS_ELEMENT                      :   "", // CHAR (1) Updated information in related user data field
  ASSET_NO                         :   "", // CHAR (1) Updated information in related user data field
  SUB_NUMBER                       :   "", // CHAR (1) Updated information in related user data field
  NETWORK                          :   "", // CHAR (1) Updated information in related user data field
  ACTIVITY                         :   "", // CHAR (1) Updated information in related user data field
  SALES_ORD                        :   "", // CHAR (1) Updated information in related user data field
  S_ORD_ITEM                       :   "", // CHAR (1) Updated information in related user data field
  COST_OBJ                         :   "", // CHAR (1) Updated information in related user data field
  CO_BUSPROC                       :   "", // CHAR (1) Updated information in related user data field
  EXTNR                            :   "", // CHAR (1) Updated information in related user data field
  GBISJ                            :   "", // CHAR (1) Updated information in related user data field
  GBISP                            :   "", // CHAR (1) Updated information in related user data field
  VALID_FROM_YEAR                  :   "", // CHAR (1) Updated information in related user data field
  VALID_FROM_PER                   :   "", // CHAR (1) Updated information in related user data field
};

// BAPI_ALM_ORDER_TASKLISTS_I  Parameter for Integrating Task Lists
const IT_TASKLISTS= [];

// prettier-ignore
const IT_TASKLISTS= {
  TASK_LIST_TYPE                   :   "", // CHAR (1) Task List Type SU3=PTY
  TASK_LIST_GROUP                  :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  GROUP_COUNTER                    :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  DELETE_OLD_OPERATIONS            :   "", // CHAR (1) Delete Existing Operations When Integrating Task List
  WORKCENTER_SEL                   :   "", // CHAR (8) Work Center for Operation Selection On Integrating Task List
  PLANT_SEL                        :   "", // CHAR (4) Plant for Work Center for Operation Selection
  WORKCENTER_USE                   :   "", // CHAR (8) Work Center to be Used for Task List Integration
  PLANT_USE                        :   "", // CHAR (4) Work to be Used for Task List Integration
  USE_WORKCENTER_FROM_HEAD         :   "", // CHAR (1) Use Work Center from Order Header in Operations
};

// BAPI_ALM_TEXT  Text Header for ALM Order BAPIs
const IT_TEXT= [];

// prettier-ignore
const IT_TEXT= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  RES_ITEM                         :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  RES_TYPE                         :   "", // CHAR (1) Record type
  ITEM_NO_OF_PRODUCTION_RESOURCE   :   "", // NUMC (4) Item Number for Production Resource/Tool
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  TEXTSTART                        :   "", // NUMC (8) Cursor on the first line of a text
  TEXTEND                          :   "", // NUMC (8) Cursor on the first line of a text
};

// BAPI_ALM_TEXT_LINES  SAPscript: Text Lines
const IT_TEXT_LINES= [];

// prettier-ignore
const IT_TEXT_LINES= {
  TDFORMAT                         :   "", // CHAR (2) Tag column
  TDLINE                           :   "", // CHAR (132) Text Line
};

// BAPI_ALM_ORDER_USRSTAT  Structure for ALM Order, User Status Change
const IT_USERSTATUS= [];

// prettier-ignore
const IT_USERSTATUS= {
  USER_ST_TEXT                     :   "", // CHAR (4) Individual status of an object (short form)
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  INACTIVE                         :   "", // CHAR (1) Indicator: Status Is Inactive
  CHANGE_EVENT                     :   "", // NUMC (2) ALM Order BAPIs: Processing Timepoint for Data Changes
};

// BAPIRET2  Return Parameter(s)
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
