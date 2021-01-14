//
// BAPI_PROCOPERATION_GETINFO 
//
// rfmcall.py 1.0 at: 2021-01-14 13:00:36
//

// Variables : 0
// Structures: 0
// Tables    : 3
// Exceptions: 0

BAPI_PROCOPERATION_GETINFO = {

  // TABLE PARAMETERS

  PROCUREMENT_ITEM                 :   [], // BAPIPOGN Item Data
  //PROCUREMENT_ACCOUNT            :   [], // BAPIPOGNA Account Assignment Data
  //RETURN                         :   [], // BAPIRETURN Processing Errors
};

//
// TABLE PARAMETERS
//

// PROCUREMENT_ITEM BAPIPOGN Item Data

/* eslint-disable key-spacing */
// prettier-ignore
PROCUREMENT_ITEM = {
  ACCTASSCAT                       :   "", // CHAR (1) Account assignment category
  AGMT_ITEM                        :   "", // NUMC (5) Item number of principal purchase agreement
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement
  AVAIL_QTY                        :  0.0, // QUAN (13.3) Available quantity of material as at delivery date
  CATALOG                          :   "", // CHAR (20) Identifier for allowed catalogs
  CONF_VEND                        :   "", // CHAR (1) Item confirmed/acknowledged by vendor
  CURRENCY                         :   "", // CUKY (5) Currency Key
  C_AMT_BAPI                       :    0, // DEC (23.4) Price in purchase requisition
  DELIV_DATE                       :   "", // DATS (8) Delivery date
  DEL_DATCAT                       :   "", // CHAR (1) Date type (day, week, month, interval)
  DOC_TYPE                         :   "", // CHAR (4) Purchasing Document Type
  FIXED_VEND                       :   "", // CHAR (10) ALPHA=ALPHA Fixed vendor
  INFO_REC                         :   "", // CHAR (10) ALPHA=ALPHA Number of purchasing info record
  ITEM_CAT                         :   "", // CHAR (1) Item category in purchasing document
  MANUF_PROF                       :   "", // CHAR (4) Mfr part profile
  MANU_MAT                         :   "", // CHAR (40) Manufacturer Part Number
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MAT_GRP                          :   "", // CHAR (9) Material Group
  MFR_NO                           :   "", // CHAR (10) ALPHA=ALPHA Manufacturer number
  MFR_NO_EXT                       :   "", // CHAR (10) External manufacturer code name or number
  MOVE_TYPE                        :   "", // CHAR (3) Movement type (inventory management)
  NO_OBJ_POS                       :   "", // CHAR (1) No MM object possible
  OBJ_TO_GEN                       :   "", // CHAR (1) Analysis result: object to be generated
  PLANT                            :   "", // CHAR (4) Plant
  PO_PRICE                         :   "", // CHAR (1) Use Requisition Price in Purchase Order
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition
  PREQ_NAME                        :   "", // CHAR (12) Name of requisitioner/requester
  PRICE_UNIT                       :    0, // DEC (5) Price unit
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization
  PUR_GROUP                        :   "", // CHAR (3) Purchasing group
  PUR_MAT                          :   "", // CHAR (18) ALPHA=MATN1 Material number
  PUR_MAT_EXTERNAL                 :   "", // CHAR (40) ALPHA=MATNL Long Material Number for PUR_MAT Field
  PUR_MAT_GUID                     :   "", // CHAR (32) External GUID for PUR_MAT Field
  PUR_MAT_LONG                     :   "", // CHAR (40) Material Number (40 Characters, Technical Requirement)
  PUR_MAT_VERSION                  :   "", // CHAR (10) ALPHA=MATNW Version Number for PUR_MAT Field
  QUANTITY                         :  0.0, // QUAN (13.3) Purchase requisition quantity
  SHORT_TEXT                       :   "", // CHAR (40) Short Text
  STORE_LOC                        :   "", // CHAR (4) Storage location
  SUPPL_PLANT                      :   "", // CHAR (4) Supplying (issuing) plant in case of stock transport order
  UNIT                             :   "", // UNIT (3) ALPHA=CUNIT Purchase requisition unit of measure
  VEND_MAT                         :   "", // CHAR (22) Material number used by vendor
};
/* eslint-enable key-spacing */

// PROCUREMENT_ACCOUNT BAPIPOGNA Account Assignment Data

/* eslint-disable key-spacing */
// prettier-ignore
PROCUREMENT_ACCOUNT = {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period
  BUS_AREA                         :   "", // CHAR (4) Business Area
  CMMT_ITEM                        :   "", // CHAR (14) ALPHA=FMCIS Commitment Item
  CMMT_ITEM_LONG                   :   "", // CHAR (24) ALPHA=FMCIL Commitment item
  COST_CTR                         :   "", // CHAR (10) ALPHA=ALPHA Cost Center
  COST_OBJ                         :   "", // CHAR (12) Cost Object
  COUNTER                          :   "", // NUMC (8) Internal counter
  CO_AREA                          :   "", // CHAR (4) Controlling Area
  DISTR_PERC                       :    0, // DEC (3.1) Distribution percentage in the case of multiple acct assgt
  FUNC_AREA                        :   "", // CHAR (4) Functional Area
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area
  FUND                             :   "", // CHAR (10) Fund
  FUNDS_CTR                        :   "", // CHAR (16) Funds Center
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant
  GR_RCPT                          :   "", // CHAR (12) Goods recipient
  G_L_ACCT                         :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number
  NETWORK                          :   "", // CHAR (12) ALPHA=ALPHA Network Number for Account Assignment
  ORDER_NO                         :   "", // CHAR (12) ALPHA=ALPHA Order Number
  PART_ACCT                        :   "", // CHAR (10) ALPHA=ALPHA Partner account number
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition
  PREQ_QTY                         :  0.0, // QUAN (13.3) Purchase requisition quantity
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center
  PROF_SEGM                        :   "", // NUMC (10) Profitability Segment Number (CO-PA)
  PROJ_EXT                         :   "", // CHAR (24) ALPHA=ABPSN Project definition
  REC_IND                          :   "", // CHAR (2) ALPHA=ALPHA Recovery Indicator
  REF_DATE                         :   "", // DATS (8) Reference date for settlement
  RL_EST_KEY                       :   "", // CHAR (8) ALPHA=IMKEY Internal Key for Real Estate Object
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  SDOC_ITEM                        :   "", // NUMC (6) Sales Document Item
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number
  SERIAL_NO                        :   "", // NUMC (2) Serial number for PReq account assignment segment
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber
  TO_COSTCTR                       :   "", // CHAR (1) Posting to cost center?
  TO_ORDER                         :   "", // CHAR (1) Post To Order
  TO_PROJECT                       :   "", // CHAR (1) Post to project
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  WBS_ELEM_E                       :   "", // CHAR (24) ALPHA=ABPSN Work breakdown structure element (WBS element)
};
/* eslint-enable key-spacing */

// RETURN BAPIRETURN Processing Errors

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  CODE                             :   "", // CHAR (5) Message code
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  MESSAGE                          :   "", // CHAR (220) Message Text
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */
