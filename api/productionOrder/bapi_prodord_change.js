//
// BAPI_PRODORD_CHANGE var: 3  struct: 4  table: 0  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

NUMBER              :           "", // CHAR (12) ALPHA=ALPHA Production Order Number SU3=ANR
ORDERDATA           :           {}, // BAPI_PP_ORDER_CHANGE Transfer Structure for Changing Production Orders
ORDERDATAX          :           {}, // BAPI_PP_ORDER_CHANGEX Transfer Structure for Changing Production Orders

// EXPORT PARAMETERS

// MASTER_DATA_READ :           "", // CHAR (1) Indicator: Master Data Read
// ORDER_TYPE       :           "", // CHAR (4) Order Type SU3=AAT
// ORDER_STATUS     :           {}, // BAPI_ORDER_STATUS Order Status Indicator
// RETURN           :           {}, // BAPIRET2 Return Parameters
};

const result = await client.call("BAPI_PRODORD_CHANGE", parameters);

//
// IMPORT PARAMETERS
//

// BAPI_PP_ORDER_CHANGE  Transfer Structure for Changing Production Orders

// prettier-ignore
const ORDERDATA= {
  BASIC_START_DATE                 :   "", // DATS (8) Basic start date
  BASIC_START_TIME                 :   "", // TIMS (6) Basic Start (Time)
  BASIC_END_DATE                   :   "", // DATS (8) Basic finish date
  BASIC_END_TIME                   :   "", // TIMS (6) Basic finish (time)
  QUANTITY                         : "0.0", // QUAN (13.3) Total order quantity
  SCRAP_QUANTITY                   : "0.0", // QUAN (13.3) Total scrap quantity in the order
  QUANTITY_UOM                     :   "", // UNIT (3) ALPHA=CUNIT Common unit of measure for all order items
  ROUTING_TYPE                     :   "", // CHAR (1) Task List Type SU3=PTY
  ROUTING_GROUP                    :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  ROUTING_COUNTER                  :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  PROD_VERSION                     :   "", // CHAR (4) Production Version SU3=VER
  EXPLOSION_DATE                   :   "", // DATS (8) Date of BOM Explosion/Routing Transfer
  ORDER_PRIORITY                   :   "", // CHAR (1) Order priority
  MRP_CONTROLLER                   :   "", // CHAR (3) MRP controller for the order SU3=DGR
  EXPLODE_NEW                      :   "", // CHAR (1) New Input Values
  BUSINESS_AREA                    :   "", // CHAR (4) Business Area SU3=GSB
  PROFIT_CENTER                    :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  SEQUENCE_NUMBER                  :   "", // NUMC (14) Seq. number order
  STOCK_TYPE                       :   "", // CHAR (1) Stock Type
  GR_PROC_TIME                     :  "0", // DEC (3) Goods receipt processing time in days
  STORAGE_LOCATION                 :   "", // CHAR (4) Storage location SU3=LAG
  MRP_DISTR_KEY                    :   "", // CHAR (4) MRP Distribution Key
  GOODS_RECIPIENT                  :   "", // CHAR (12) Goods recipient
  UNLOADING_POINT                  :   "", // CHAR (25) Unloading Point
  POSITION_NUMBER                  :   "", // NUMC (4) Order item number
  ADDITIONAL_DAYS                  :  "0", // DEC (4) Additional Days
  STOCK_SEGMENT                    :   "", // CHAR (16) Stock Segment SU3=SGT_S
};

// BAPI_PP_ORDER_CHANGEX  Transfer Structure for Changing Production Orders

// prettier-ignore
const ORDERDATAX= {
  BASIC_START_DATE                 :   "", // CHAR (1) Updated information in related user data field
  BASIC_END_DATE                   :   "", // CHAR (1) Updated information in related user data field
  QUANTITY                         :   "", // CHAR (1) Updated information in related user data field
  SCRAP_QUANTITY                   :   "", // CHAR (1) Updated information in related user data field
  QUANTITY_UOM                     :   "", // CHAR (1) Updated information in related user data field
  ROUTING                          :   "", // CHAR (1) Updated information in related user data field
  PROD_VERSION                     :   "", // CHAR (1) Updated information in related user data field
  EXPLOSION_DATE                   :   "", // CHAR (1) Updated information in related user data field
  ORDER_PRIORITY                   :   "", // CHAR (1) Updated information in related user data field
  MRP_CONTROLLER                   :   "", // CHAR (1) Updated information in related user data field
  BUSINESS_AREA                    :   "", // CHAR (1) Updated information in related user data field
  PROFIT_CENTER                    :   "", // CHAR (1) Updated information in related user data field
  SEQUENCE_NUMBER                  :   "", // CHAR (1) Updated information in related user data field
  STOCK_TYPE                       :   "", // CHAR (1) Updated information in related user data field
  GR_PROC_TIME                     :   "", // CHAR (1) Updated information in related user data field
  STORAGE_LOCATION                 :   "", // CHAR (1) Updated information in related user data field
  MRP_DISTR_KEY                    :   "", // CHAR (1) Updated information in related user data field
  GOODS_RECIPIENT                  :   "", // CHAR (1) Updated information in related user data field
  UNLOADING_POINT                  :   "", // CHAR (1) Updated information in related user data field
  ADDITIONAL_DAYS                  :   "", // CHAR (1) Updated information in related user data field
  STOCK_SEGMENT                    :   "", // CHAR (1) Updated information in related user data field
};


//
// EXPORT PARAMETERS
//

// BAPI_ORDER_STATUS  Order Status Indicator

// prettier-ignore
const ORDER_STATUS= {
  DELETED                          :   "", // CHAR (1) Checkbox
  DELETE_INDICATOR                 :   "", // CHAR (1) Checkbox
  CLOSED                           :   "", // CHAR (1) Checkbox
  COMPLETED                        :   "", // CHAR (1) Checkbox
  LOCKED                           :   "", // CHAR (1) Checkbox
};

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
