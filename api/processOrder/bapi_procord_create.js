//
// BAPI_PROCORD_CREATE var: 2  struct: 2  table: 0  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

ORDERDATA       :           {}, // BAPI_PI_ORDER_CREATE Transfer Structure for Creating Process Orders

// EXPORT PARAMETERS

// ORDER_NUMBER :           "", // CHAR (12) ALPHA=ALPHA Process Order Number SU3=ANR
// ORDER_TYPE   :           "", // CHAR (4) Order Type SU3=AAT
// RETURN       :           {}, // BAPIRET2 Return Parameters
};

const result = await client.call("BAPI_PROCORD_CREATE", parameters);

//
// IMPORT PARAMETERS
//

// BAPI_PI_ORDER_CREATE  Transfer Structure for Creating Process Orders

// prettier-ignore
const ORDERDATA= {
  ORDER_NUMBER                     :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number for Order SU3=MAT
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  PLANNING_PLANT                   :   "", // CHAR (4) Planning plant for the order
  ORDER_TYPE                       :   "", // CHAR (4) Order Type SU3=AAT
  BASIC_START_DATE                 :   "", // DATS (8) Basic start date
  BASIC_START_TIME                 :   "", // TIMS (6) Basic Start (Time)
  BASIC_END_DATE                   :   "", // DATS (8) Basic finish date
  BASIC_END_TIME                   :   "", // TIMS (6) Basic finish (time)
  QUANTITY                         : "0.0", // QUAN (13.3) Total order quantity
  SCRAP_QUANTITY                   : "0.0", // QUAN (13.3) Total scrap quantity in the order
  QUANTITY_UOM                     :   "", // UNIT (3) ALPHA=CUNIT Common unit of measure for all order items
  RECIPE_TYPE                      :   "", // CHAR (1) Task List Type SU3=PTY
  RECIPE_GROUP                     :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  RECIPE_COUNTER                   :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  PROD_VERSION                     :   "", // CHAR (4) Production Version SU3=VER
  EXPLOSION_DATE                   :   "", // DATS (8) Date of BOM Explosion/Routing Transfer
  ORDER_PRIORITY                   :   "", // CHAR (1) Order priority
  MRP_CONTROLLER                   :   "", // CHAR (3) MRP controller for the order SU3=DGR
  CONFIGRATION                     :   "", // NUMC (18) Configuration (internal object number) SU3=CUX
  WBS_ELEMENT                      :   "", // NUMC (8) ALPHA=ABPSP Work Breakdown Structure Element (WBS Element)
  SALES_ORDER                      :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  SALES_ORDER_ITEM                 :   "", // NUMC (6) Sales Order Item SU3=AUP
  BUSINESS_AREA                    :   "", // CHAR (4) Business Area SU3=GSB
  PROFIT_CENTER                    :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  SEQUENCE_NUMBER                  :   "", // NUMC (14) Seq. number order
  STOCK_TYPE                       :   "", // CHAR (1) Stock Type
  GR_PROC_TIME                     :  "0", // DEC (3) Goods receipt processing time in days
  STORAGE_LOCATION                 :   "", // CHAR (4) Storage location SU3=LAG
  MRP_DISTR_KEY                    :   "", // CHAR (4) MRP Distribution Key
  GOODS_RECIPIENT                  :   "", // CHAR (12) Goods recipient
  UNLOADING_POINT                  :   "", // CHAR (25) Unloading Point
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  ADDITIONAL_DAYS                  :  "0", // DEC (4) Additional Days
  STOCK_SEGMENT                    :   "", // CHAR (16) Stock Segment SU3=SGT_S
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number for Order SU3=MAT
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
