//
// BAPI_PROCORD_GET_LIST var: 1  struct: 1  table: 13  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// COLLECTIVE_ORDER    :           "", // CHAR (1) Display complete collective order

// TABLE PARAMETERS

// MATERIAL_RANGE      :           [], // BAPI_ORDER_MATERIAL_RANGE Header Materials for Order Selection
// MRP_CNTRL_RANGE     :           [], // BAPI_ORDER_MRP_CNTRL_RANGE MRP Controllers for Order Selection
// ORDER_HEADER        :           [], // BAPI_ORDER_HEADER1 Order header data
// ORDER_NUMBER_RANGE  :           [], // BAPI_PI_ORDERRANGE BAPI Interface Structure for Ranges of the Production Orders
// ORDER_PRIO_RANGE    :           [], // BAPI_ORDER_PRIO_RANGE Order Priority for Order Selection
// ORDER_TYPE_RANGE    :           [], // BAPI_ORDER_ORDER_TYPE_RANGE Order Types for Order Selection
// PLANPLANT_RANGE     :           [], // BAPI_ORDER_PLANPLANT_RANGE Planning Plants for Order Selection
// PROD_SCHED_RANGE    :           [], // BAPI_ORDER_PROD_SCHED_RANGE Production Schedulers for Order Selection
// PRODPLANT_RANGE     :           [], // BAPI_ORDER_PRODPLANT_RANGE Production Plants for Order Selection
// SALES_ORD_ITM_RANGE :           [], // BAPI_ORDER_SALES_ORD_ITM_RANGE Sales Order Items for Order Selection
// SALES_ORD_RANGE     :           [], // BAPI_ORDER_SALES_ORD_RANGE Sales Orders for Order Selection
// SEQ_NO_RANGE        :           [], // BAPI_ORDER_SEQ_NO_RANGE Sequence Numbers for Order Selection
// WBS_ELEMENT_RANGE   :           [], // BAPI_ORDER_WBS_ELEMENT_RANGE WBS Elements for Order Selection

// EXPORT PARAMETERS

// RETURN              :           {}, // BAPIRET2 Return Parameters
};

const result = await client.call("BAPI_PROCORD_GET_LIST", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI_ORDER_MATERIAL_RANGE  Header Materials for Order Selection
const MATERIAL_RANGE= [];

// prettier-ignore
const MATERIAL_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  HIGH                             :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  HIGH_EXTERNAL                    :   "", // CHAR (40) ALPHA=MATNL Long Material Number for HIGH Field
  HIGH_GUID                        :   "", // CHAR (32) External GUID for HIGH Field
  HIGH_VERSION                     :   "", // CHAR (10) ALPHA=MATNW Version Number for HIGH Field
  LOW_EXTERNAL                     :   "", // CHAR (40) ALPHA=MATNL Long Material Number for LOW Field
  LOW_GUID                         :   "", // CHAR (32) External GUID for LOW Field
  LOW_VERSION                      :   "", // CHAR (10) ALPHA=MATNW Version Number for LOW Field
  LOW_LONG                         :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  HIGH_LONG                        :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI_ORDER_MRP_CNTRL_RANGE  MRP Controllers for Order Selection
const MRP_CNTRL_RANGE= [];

// prettier-ignore
const MRP_CNTRL_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (3) MRP controller for the order SU3=DGR
  HIGH                             :   "", // CHAR (3) MRP controller for the order SU3=DGR
};

// BAPI_ORDER_HEADER1  Order header data
const ORDER_HEADER= [];

// prettier-ignore
const ORDER_HEADER= {
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

// BAPI_PI_ORDERRANGE  BAPI Interface Structure for Ranges of the Production Orders
const ORDER_NUMBER_RANGE= [];

// prettier-ignore
const ORDER_NUMBER_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  HIGH                             :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
};

// BAPI_ORDER_PRIO_RANGE  Order Priority for Order Selection
const ORDER_PRIO_RANGE= [];

// prettier-ignore
const ORDER_PRIO_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (1) Order priority
  HIGH                             :   "", // CHAR (1) Order priority
};

// BAPI_ORDER_ORDER_TYPE_RANGE  Order Types for Order Selection
const ORDER_TYPE_RANGE= [];

// prettier-ignore
const ORDER_TYPE_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (4) Order Type SU3=AAT
  HIGH                             :   "", // CHAR (4) Order Type SU3=AAT
};

// BAPI_ORDER_PLANPLANT_RANGE  Planning Plants for Order Selection
const PLANPLANT_RANGE= [];

// prettier-ignore
const PLANPLANT_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (4) Plant SU3=WRK
  HIGH                             :   "", // CHAR (4) Plant SU3=WRK
};

// BAPI_ORDER_PROD_SCHED_RANGE  Production Schedulers for Order Selection
const PROD_SCHED_RANGE= [];

// prettier-ignore
const PROD_SCHED_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (3) Production Supervisor SU3=CFV
  HIGH                             :   "", // CHAR (3) Production Supervisor SU3=CFV
};

// BAPI_ORDER_PRODPLANT_RANGE  Production Plants for Order Selection
const PRODPLANT_RANGE= [];

// prettier-ignore
const PRODPLANT_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (4) Plant SU3=WRK
  HIGH                             :   "", // CHAR (4) Plant SU3=WRK
};

// BAPI_ORDER_SALES_ORD_ITM_RANGE  Sales Order Items for Order Selection
const SALES_ORD_ITM_RANGE= [];

// prettier-ignore
const SALES_ORD_ITM_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // NUMC (6) Sales Order Item SU3=AUP
  HIGH                             :   "", // NUMC (6) Sales Order Item SU3=AUP
};

// BAPI_ORDER_SALES_ORD_RANGE  Sales Orders for Order Selection
const SALES_ORD_RANGE= [];

// prettier-ignore
const SALES_ORD_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  HIGH                             :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
};

// BAPI_ORDER_SEQ_NO_RANGE  Sequence Numbers for Order Selection
const SEQ_NO_RANGE= [];

// prettier-ignore
const SEQ_NO_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // NUMC (14) Seq. number order
  HIGH                             :   "", // NUMC (14) Seq. number order
};

// BAPI_ORDER_WBS_ELEMENT_RANGE  WBS Elements for Order Selection
const WBS_ELEMENT_RANGE= [];

// prettier-ignore
const WBS_ELEMENT_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // NUMC (8) ALPHA=ABPSP Work breakdown structure element (WBS element)
  HIGH                             :   "", // NUMC (8) ALPHA=ABPSP Work breakdown structure element (WBS element)
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
