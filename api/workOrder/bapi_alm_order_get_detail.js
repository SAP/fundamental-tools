//
// BAPI_ALM_ORDER_GET_DETAIL var: 1  struct: 3  table: 22  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

NUMBER                      :           "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR

// TABLE PARAMETERS

RETURN                      :           [], // BAPIRET2 no text (en)
// ET_COMPONENTS            :           [], // BAPI_ALM_ORDER_COMPONENT_E PM/CS BAPI Order Components
// ET_COSTS_DETAILS         :           [], // BAPI_ALM_ORDER_COSTS_DETAIL_E ALM Order BAPIs: Structure for Order Costs Detail
// ET_COSTS_SUM             :           [], // BAPI_ALM_ORDER_COSTS_SUM_E ALM Order BAPIs: Structure for Order Costs Sum
// ET_OLIST                 :           [], // BAPI_ALM_ORDER_OBJECTLIST Export Structure BAPI PM/CS: Object List
// ET_OPERATIONS            :           [], // BAPI_ALM_ORDER_OPERATION_E Export Structure for PM/CS BAPIs Operations
// ET_OPROL                 :           [], // BAPI_ALM_OLIST_RELATION BAPI Structure for OPROL - Relation Operation Object List
// ET_PARTNER               :           [], // BAPI_ALM_ORDER_PARTNER ALM Order BAPIs: Partner Data
// ET_PERMIT                :           [], // BAPI_ALM_ORDER_PERMIT_READ Permits
// ET_PERMIT_ISSUE          :           [], // BAPI_ALM_ORDER_PER_ISSUE_R Issued Permits
// ET_PRTS                  :           [], // BAPI_ALM_ORDER_PRT_E ALM Order BAPIs: Structure for Production Resources/Tools
// ET_REFORDER_SERNO_OLIST  :           [], // BAPI_REFORDER_SERNO_OLIST BAPI: Structure for Serial Number Object List
// ET_RELATIONS             :           [], // BAPI_ALM_ORDER_RELATION_EXPORT BAPI Structure for ALM Order Relationships
// ET_SERVICECONTRACTLIMITS :           [], // BAPI_ALM_SRV_CONTRACT_LIMITS no text (en)
// ET_SERVICELIMIT          :           [], // BAPI_ALM_SRV_LIMIT_DATA no text (en)
// ET_SERVICELINES          :           [], // BAPI_ALM_SRV_SERVICE_LINE no text (en)
// ET_SERVICEOUTLINE        :           [], // BAPI_ALM_SRV_OUTLINE no text (en)
// ET_SRULES                :           [], // BAPI_ALM_ORDER_SRULE_E Export Structure for PM/CS BAPIs Settlement Rule
// ET_TEXT_LINES            :           [], // BAPI_ALM_TEXT_LINES Text Lines for ALM BAPIs
// ET_TEXTS                 :           [], // BAPI_ALM_TEXT Text Header for ALM Order BAPIs
// EXTENSION_IN             :           [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
// EXTENSION_OUT            :           [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT

// EXPORT PARAMETERS

// ES_HEADER                :           {}, // BAPI_ALM_ORDER_HEADER_E Export Structure for ALM Order Header
// ES_REFORDER_ITEM         :           {}, // BAPI_REFORDER_ITEM BAPI: Header Component for Refurbishment Order
// ES_SRVDATA               :           {}, // BAPI_ALM_ORDER_SRVDAT_E ALM Order BAPIs: Service-Specific Data, External Structure
};

const result = await client.call("BAPI_ALM_ORDER_GET_DETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIRET2  
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

// BAPI_ALM_ORDER_COMPONENT_E  PM/CS BAPI Order Components
const ET_COMPONENTS= [];

// prettier-ignore
const ET_COMPONENTS= {
  RES_ITEM                         :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  RES_TYPE                         :   "", // CHAR (1) Record type
};

// BAPI_ALM_ORDER_COSTS_DETAIL_E  ALM Order BAPIs: Structure for Order Costs Detail
const ET_COSTS_DETAILS= [];

// prettier-ignore
const ET_COSTS_DETAILS= {
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
};

// BAPI_ALM_ORDER_COSTS_SUM_E  ALM Order BAPIs: Structure for Order Costs Sum
const ET_COSTS_SUM= [];

// prettier-ignore
const ET_COSTS_SUM= {
  TOTAL_COSTS_ACT                  : "0.0", // CURR (15.2) Total(actual) maintenance costs
  TOTAL_COSTS_PLAN                 : "0.0", // CURR (15.2) Total plant maintenance costs (planned)
  TOTAL_COSTS_EST                  : "0.0", // CURR (15.2) Total maintenance costs (estimated)
  TOTAL_SETTLEMENT_COSTS           : "0.0", // CURR (15.2) Total Settlement Costs (PMCO)
  TOTAL_REVENUES_ACT               : "0.0", // CURR (15.2) Total plant maintenance revenues (actual)
  TOTAL_REVENUES_PLAN              : "0.0", // CURR (15.2) Total (planned) maintenance revenues
  TOTAL_REVENUES_EST               : "0.0", // CURR (15.2) Total maintenance revenue (estimated)
  TOTAL_SUM_ACT                    : "0.0", // CURR (15.2) Actual sum of maintenance order (costs - revenues)
  TOTAL_SUM_PLAN                   : "0.0", // CURR (15.2) Plan sum of maintenance order (costs - revenues)
  TOTAL_SUM_EST                    : "0.0", // CURR (15.2) Estimated total of maintenance order (costs - revenue)
  CURRENCY                         :   "", // CUKY (5) Currency for diplaying PM order costs
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
};

// BAPI_ALM_ORDER_OBJECTLIST  Export Structure BAPI PM/CS: Object List
const ET_OLIST= [];

// prettier-ignore
const ET_OLIST= {
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

// BAPI_ALM_ORDER_OPERATION_E  Export Structure for PM/CS BAPIs Operations
const ET_OPERATIONS= [];

// prettier-ignore
const ET_OPERATIONS= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
};

// BAPI_ALM_OLIST_RELATION  BAPI Structure for OPROL - Relation Operation Object List
const ET_OPROL= [];

// prettier-ignore
const ET_OPROL= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  OBJECTLIST                       :    0, // INT4 (10) Object list number
  COUNTER                          :    0, // INT4 (10) Object list counters
};

// BAPI_ALM_ORDER_PARTNER  ALM Order BAPIs: Partner Data
const ET_PARTNER= [];

// prettier-ignore
const ET_PARTNER= {
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTN_ROLE_OLD                   :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTNER                          :   "", // CHAR (12) ALPHA=ALPHA Partner
  PARTNER_OLD                      :   "", // CHAR (12) ALPHA=ALPHA Partner
};

// BAPI_ALM_ORDER_PERMIT_READ  Permits
const ET_PERMIT= [];

// prettier-ignore
const ET_PERMIT= {
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

// BAPI_ALM_ORDER_PER_ISSUE_R  Issued Permits
const ET_PERMIT_ISSUE= [];

// prettier-ignore
const ET_PERMIT_ISSUE= {
  PERMIT                           :   "", // CHAR (10) Permit Key
  ISSUED_BY                        :   "", // CHAR (12) Permit Issued By
  CREATED_BY                       :   "", // CHAR (12) Entered By
  CREATED_ON                       :   "", // DATS (8) Created On
  CREATED_TIME                     :   "", // TIMS (6) Generation Time
};

// BAPI_ALM_ORDER_PRT_E  ALM Order BAPIs: Structure for Production Resources/Tools
const ET_PRTS= [];

// prettier-ignore
const ET_PRTS= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  ITEM_NO_OF_PRODUCTION_RESOURCE   :   "", // NUMC (4) Item Number for Production Resource/Tool
  PRT_PLANT                        :   "", // CHAR (4) Production Resources/Tools in Plant SU3=WRK
  PRT_CATEGORY                     :   "", // CHAR (1) ALPHA=FHMAR Production resources/tools category SU3=FHA
  PRT_NUMBER                       :   "", // CHAR (33) Production resource/tool number
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  MISCELLANEOUS                    :   "", // CHAR (18) ALPHA=ALPHA Production resources and tools SU3=FHS
  DOCUMENT_TYPE                    :   "", // CHAR (3) Document Type SU3=CV2
  DOCUMENT_NUMBER                  :   "", // CHAR (25) ALPHA=ALPHA Document number SU3=CV1
  DOCUMENT_PART                    :   "", // CHAR (3) Document part SU3=CV4
  DOCUMENT_VERSION                 :   "", // CHAR (2) Document version SU3=CV3
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  STD_TEXT_KEY                     :   "", // CHAR (7) Standard text key for production resources/tools
  DESCRIPTION                      :   "", // CHAR (40) First Line of Text for Production Resources/Tools
  OBJECT_TYPE_CIM_RESOURCE         :   "", // CHAR (2) Object types of the CIM resource
  OBJECT_ID_CIM_RESOURCE           :   "", // NUMC (8) Object ID of the resource
  CTRL_KEY                         :   "", // CHAR (4) Control Key for Management of Production Resources/Tools
  CREATE_LOAD_RECS                 :   "", // CHAR (1) Indicator: Create load records for prod. resources/tools
  START_REF_DATE                   :   "", // CHAR (2) Reference Date for Start of Production Resource/Tool Usage
  START_OFFSET                     : "0.0", // QUAN (5) Offset to start of production resource/tool usage
  START_OFFSET_UNIT                :   "", // UNIT (3) ALPHA=CUNIT Offset unit for start of prod. resource/tool usage
  START_OFFSET_UNIT_ISO            :   "", // CHAR (3) ISO code for unit of measurement
  END_REF_DATE                     :   "", // CHAR (2) Reference date for end of production resource/tool usage
  END_OFFSET                       : "0.0", // QUAN (5) Offset to finish of production resource/tool usage
  END_OFFSET_UNIT                  :   "", // UNIT (3) ALPHA=CUNIT Offset unit for end of production resource/tool usage
  END_OFFSET_UNIT_ISO              :   "", // CHAR (3) ISO code for unit of measurement
  PRT_MEASURE_UNIT                 :   "", // UNIT (3) ALPHA=CUNIT Unit for Quantity of Production Resources/Tools
  PRT_MEASURE_UNIT_ISO             :   "", // CHAR (3) ISO code for unit of measurement
  STD_VALUE_FOR_PRT_QTY            : "0.0", // QUAN (9.3) Standard Value for Quantity of Production Resources/Tools
  FORMULA_TOT_QTY                  :   "", // CHAR (6) Formula for calculating the total quantity of PRT
  STD_USAGE_VALUE_FOR_PRT          : "0.0", // QUAN (9.3) Standard usage value for production resources/tools
  PRT_USAGE_VALUE_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Usage value unit of the production resource/tool
  PRT_USAGE_VALUE_UNIT_ISO         :   "", // CHAR (3) ISO code for unit of measurement
  FORMULA_TOT_USAGE                :   "", // CHAR (6) Formula for calculating the total usage value of PRT
  PRT_USAGE_QUANTITY_SUM           : "0.0", // QUAN (9.3) Total Planned Quantity of Production Resource/Tool
  PRT_USAGE_QUANTITY_SUM_UNIT      :   "", // UNIT (3) ALPHA=CUNIT Unit for Quantity of Production Resources/Tools
  PRT_USAGE_QUANTITY_SUM_UN_ISO    :   "", // CHAR (3) ISO code for unit of measurement
  PRT_ACTUAL_USAGE_QUANTITY        : "0.0", // QUAN (9.3) Confirmed quantity of production resource/tool
  PRT_ACTUAL_USAGE_QUANTITY_UNIT   :   "", // UNIT (3) ALPHA=CUNIT Unit for Quantity of Production Resources/Tools
  PRT_ACTUAL_USAGE_QUANTI_UN_ISO   :   "", // CHAR (3) ISO code for unit of measurement
  PRT_REMAIN_USAGE_QUANTITY        : "0.0", // QUAN (9.3) Remaining quantity of the production resource/tool
  PRT_REMAIN_USAGE_QUANTITY_UNIT   :   "", // UNIT (3) ALPHA=CUNIT Unit for Quantity of Production Resources/Tools
  PRT_REMAIN_USAGE_QUANTI_UN_ISO   :   "", // CHAR (3) ISO code for unit of measurement
  PRT_USAGE_VALUE_SUM              : "0.0", // QUAN (9.3) Total planned usage value of production resource/tool
  PRT_USAGE_VALUE_SUM_UNIT         :   "", // UNIT (3) ALPHA=CUNIT Usage value unit of the production resource/tool
  PRT_USAGE_VALUE_SUM_UNIT_ISO     :   "", // CHAR (3) ISO code for unit of measurement
  PRT_ACTUAL_USAGE_VALUE           : "0.0", // QUAN (9.3) Actual usage value for production resource/tool
  PRT_ACTUAL_USAGE_VALUE_UNIT      :   "", // UNIT (3) ALPHA=CUNIT Usage value unit of the production resource/tool
  PRT_ACTUAL_USAGE_VALUE_UN_ISO    :   "", // CHAR (3) ISO code for unit of measurement
  PRT_REMAIN_USAGE_VALUE           : "0.0", // QUAN (9.3) Remaining usage value of the production resource/tool
  PRT_REMAIN_USAGE_VALUE_UNIT      :   "", // UNIT (3) ALPHA=CUNIT Usage value unit of the production resource/tool
  PRT_REMAIN_USAGE_VALUE_UN_ISO    :   "", // CHAR (3) ISO code for unit of measurement
  PRT_MEASUREMENT_POINT            :   "", // CHAR (12) ALPHA=ALPHA Measuring Point SU3=IPT
  PRT_MEASUREMENT_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement
  PRT_MEASUREMENT_UNIT_ISO         :   "", // CHAR (3) ISO code for unit of measurement
  PRT_EARLIEST_START_DATE          :   "", // DATS (8) Earliest scheduled start (date) for PRT usage
  PRT_EARLIEST_START_TIME          :   "", // TIMS (6) Earliest scheduled start (time) for PRT usage
  PRT_EARLIEST_FINISH_DATE         :   "", // DATS (8) Earliest scheduled finish (date) of PRT usage
  PRT_EARLIEST_FINISH_TIME         :   "", // TIMS (6) Earliest scheduled end (time) of PRT usage
  PRT_LATEST_START_DATE            :   "", // DATS (8) Latest scheduled start (date) for PRT usage
  PRT_LATEST_START_TIME            :   "", // TIMS (6) Latest scheduled start (time) for PRT usage
  PRT_LATEST_FINISH_DATE           :   "", // DATS (8) Latest scheduled finish (date) of PRT usage
  PRT_LATEST_FINISH_TIME           :   "", // TIMS (6) Latest scheduled end (time) for PRT usage
  PRT_ACTUAL_START_DATE            :   "", // DATS (8) Actual start (date) of PRT usage
  PRT_ACTUAL_START_TIME            :   "", // TIMS (6) Actual start (time) of PRT usage
  PRT_ACTUAL_FINISH_DATE           :   "", // DATS (8) Actual finish (date) of PRT usage
  PRT_ACTUAL_FINISH_TIME           :   "", // TIMS (6) Actual finish (time) of PRT usage
  PRT_STATUS                       :   "", // CHAR (40) System Status
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  OBJECT_NO                        :   "", // CHAR (22) Object number SU3=ONR
  PRT_ITEM_COUNT                   :   "", // NUMC (8) Item counter for production resources/tools
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI_REFORDER_SERNO_OLIST  BAPI: Structure for Serial Number Object List
const ET_REFORDER_SERNO_OLIST= [];

// prettier-ignore
const ET_REFORDER_SERNO_OLIST= {
  SERIALNO                         :   "", // CHAR (18) ALPHA=GERNR Serial Number SU3=SER
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  UII                              :   "", // CHAR (72) Unique Item Identifier SU3=UII
};

// BAPI_ALM_ORDER_RELATION_EXPORT  BAPI Structure for ALM Order Relationships
const ET_RELATIONS= [];

// prettier-ignore
const ET_RELATIONS= {
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

// BAPI_ALM_SRV_CONTRACT_LIMITS  
const ET_SERVICECONTRACTLIMITS= [];

// prettier-ignore
const ET_SERVICECONTRACTLIMITS= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  CONTRACT                         :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  CONTRACT_ITEM                    :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  LIMIT                            : "0.0", // CURR (13.2) Contract Limit Value
  NO_LIMIT                         :   "", // CHAR (1) No Limit
  TOTAL_VALUE                      : "0.0", // CURR (13.2) Total Value of Unplanned Entered Services
  SHORT_TEXT                       :   "", // CHAR (40) Short Text 1
};

// BAPI_ALM_SRV_LIMIT_DATA  
const ET_SERVICELIMIT= [];

// prettier-ignore
const ET_SERVICELIMIT= {
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

// BAPI_ALM_SRV_SERVICE_LINE  
const ET_SERVICELINES= [];

// prettier-ignore
const ET_SERVICELINES= {
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

// BAPI_ALM_SRV_OUTLINE  
const ET_SERVICEOUTLINE= [];

// prettier-ignore
const ET_SERVICEOUTLINE= {
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

// BAPI_ALM_ORDER_SRULE_E  Export Structure for PM/CS BAPIs Settlement Rule
const ET_SRULES= [];

// prettier-ignore
const ET_SRULES= {
  OBJECT_NO                        :   "", // CHAR (22) Object number SU3=ONR
  DIST_RULE_GROUP                  :   "", // NUMC (3) Distribution rule group
  DIST_RULE_SEQ_NUMBER             :   "", // NUMC (3) Sequence number of distribution rule
  SETTL_TYPE                       :   "", // CHAR (3) ALPHA=PERBZ Settlement type
  SOURCE                           :   "", // CHAR (3) ALPHA=ALPHA Source Assignment
  VALID_FROM_YEAR                  :   "", // NUMC (4) ALPHA=GJAHR Valid-from year
  VALID_FROM_PER                   :   "", // NUMC (3) Valid-from period
  VALID_TO_YEAR                    :   "", // NUMC (4) ALPHA=GJAHR Valid-to year
  VALID_TO_PER                     :   "", // NUMC (3) Valid to
  PERCENTAGE                       :  "0", // DEC (5.2) Settlement percentage rate
  EQUIV_NUMBER                     :  "0", // DEC (10) Equivalence number for order settlement
  BMENG                            : "0.0", // QUAN (15.3) Quantity for settlement
  BEINH                            :   "", // UNIT (3) ALPHA=CUNIT Unit of measure
  BEINH_ISO                        :   "", // CHAR (3) ISO code for unit of measurement
  AMOUNT                           : "0.0", // CURR (15.2) Amount for amount rule
  CURRENCY                         :   "", // CUKY (5) Currency for the amount in the amount rule
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
  BRTYP                            :   "", // CHAR (2) ALPHA=ALPHA Amount rule type
  BREST                            : "0.0", // CURR (15.2) Remaining Amount for Amount Settlement w. Amount Rule Cat.
  FIRST_USED_YEAR                  :   "", // NUMC (4) ALPHA=GJAHR Year first used
  FIRST_USED_PER                   :   "", // NUMC (3) Period of first use
  LAST_USED_YEAR                   :   "", // NUMC (4) ALPHA=GJAHR Year last used
  LAST_USED_PER                    :   "", // NUMC (3) Period of last use
  ZINCL                            :   "", // CHAR (1) "Including overheads" - indicator
  DFREG                            :   "", // CHAR (3) ALPHA=ALPHA Default Rule
  AVORG                            :   "", // CHAR (4) Settlement transaction
  VERSION                          :   "", // CHAR (3) ALPHA=ALPHA Version SU3=KVS
  KONTY                            :   "", // CHAR (2) ALPHA=OBART Account assignment category
  KOKRS                            :   "", // CHAR (4) Controlling area of receiver SU3=CAC
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number SU3=SAK
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Receiver cost center SU3=KOS
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  WBS_ELEMENT                      :   "", // CHAR (24) ALPHA=ABPSN Work Breakdown Structure Element (WBS Element) SU3=PRO
  ASSETMAINO                       :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number SU3=AN1
  ASSETSUBNO                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber SU3=AN2
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  VAL_TYPE                         :   "", // CHAR (10) Valuation type SU3=BWT
  NETWORK                          :   "", // CHAR (12) ALPHA=ALPHA Network Number for Account Assignment SU3=NET
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  PROFIT_SEGM_NO                   :   "", // NUMC (10) Profitability Segment Number (CO-PA)
  PASUBNR                          :   "", // NUMC (4) Profitability Segment Changes (CO-PA)
  SALES_ORD                        :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  S_ORD_ITEM                       :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  REC_IND                          :   "", // CHAR (2) ALPHA=ALPHA Recovery Indicator
  RIFIND                           :   "", // CHAR (1) Derivation Rule for Recovery Indicator in Settlement (JV)
  ORDER_ITNO                       :   "", // NUMC (4) Order item number
  COSTOBJECT                       :   "", // CHAR (12) Cost Object SU3=KTR
  CO_BUSPROC                       :   "", // CHAR (12) ALPHA=ALPHA Business Process SU3=KWP
  REC_OBJNR1                       :   "", // CHAR (22) Object number for settlement receiver
  REC_OBJNR2                       :   "", // CHAR (22) Object number for settlement receiver
  MRULE                            :   "", // CHAR (4) Manipulation Rule
  EXTNR                            :   "", // NUMC (3) Distribution Rule Number
  METH_TRACING_FACTOR              :   "", // NUMC (3) Method for Determining the Tracing Factor for Settlement
  MOVEMENTTYPE                     :   "", // CHAR (3) Asset Transaction Type
  SETTL_STRATEGY                   :   "", // CHAR (3) Strategy for automatic generation of settlement rules
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI_ALM_TEXT_LINES  Text Lines for ALM BAPIs
const ET_TEXT_LINES= [];

// prettier-ignore
const ET_TEXT_LINES= {
  TDFORMAT                         :   "", // CHAR (2) Tag column
  TDLINE                           :   "", // CHAR (132) Text Line
};

// BAPI_ALM_TEXT  Text Header for ALM Order BAPIs
const ET_TEXTS= [];

// prettier-ignore
const ET_TEXTS= {
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

// BAPIPAREX  Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
const EXTENSION_OUT= [];

// prettier-ignore
const EXTENSION_OUT= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};


//
// EXPORT PARAMETERS
//

// BAPI_ALM_ORDER_HEADER_E  Export Structure for ALM Order Header

// prettier-ignore
const ES_HEADER= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
};

// BAPI_REFORDER_ITEM  BAPI: Header Component for Refurbishment Order

// prettier-ignore
const ES_REFORDER_ITEM= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  REQUIREMENT_QUANTITY             : "0.0", // QUAN (13.3) Total order quantity
  REQUIREMENT_QUANTITY_UNIT        :   "", // UNIT (3) ALPHA=CUNIT Common unit of measure for all order items
  REQUIREMENT_QUANTITY_UNIT_ISO    :   "", // CHAR (3) ISO code for unit of measurement
  PLANT_TO                         :   "", // CHAR (4) Plant SU3=WRK
  STGE_LOC_TO                      :   "", // CHAR (4) Storage location SU3=LAG
  BATCH_TO                         :   "", // CHAR (10) Batch Number SU3=CHA
  VAL_TYPE_TO                      :   "", // CHAR (10) Valuation type SU3=BWT
  DELIVERED_QUANTITY               : "0.0", // QUAN (13.3) Quantity Delivered
  MATERIAL_TO                      :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  TRANSFER_STOCK_QUANTITY          : "0.0", // QUAN (13.3) Quantity Delivered
  MATERIAL_TO_EXTERNAL             :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL_TO Field
  MATERIAL_TO_GUID                 :   "", // CHAR (32) External GUID for MATERIAL_TO Field
  MATERIAL_TO_VERSION              :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL_TO Field
  MATERIAL_TO_LONG                 :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI_ALM_ORDER_SRVDAT_E  ALM Order BAPIs: Service-Specific Data, External Structure

// prettier-ignore
const ES_SRVDATA= {
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
