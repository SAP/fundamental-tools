//
// BAPI_PROCOPERATION_GETINFO 0.3
//

BAPI_PROCOPERATION_GETINFO = {

  // TABLE PARAMETERS

  PROCUREMENT_ACCOUNT: [],                 // BAPIPOGNA : Account Assignment Data
  PROCUREMENT_ITEM: [],                    // BAPIPOGN : Item Data       
  RETURN: []                               // BAPIRETURN : Processing Errors
};

//
// TABLE PARAMETERS
//

// PROCUREMENT_ACCOUNT BAPIPOGNA Account Assignment Data

/* eslint-disable key-spacing */
// prettier-ignore
PROCUREMENT_ACCOUNT = {
  ACTIVITY                      : '',  // Activity Number
  ASSET_NO                      : '',  // Main Asset Number
  BUDGET_PERIOD                 : '',  // FM: Budget Period
  BUS_AREA                      : '',  // Business Area
  CMMT_ITEM                     : '',  // Commitment Item
  CMMT_ITEM_LONG                : '',  // Commitment item
  COST_CTR                      : '',  // Cost Center
  COST_OBJ                      : '',  // Cost Object
  COUNTER                       : '',  // Internal counter
  CO_AREA                       : '',  // Controlling Area
  DISTR_PERC                    : 0,  // Distribution percentage in the case of multiple acct assgt
  FUNC_AREA                     : '',  // Functional Area
  FUNC_AREA_LONG                : '',  // Functional Area
  FUND                          : '',  // Fund
  FUNDS_CTR                     : '',  // Funds Center
  GRANT_NBR                     : '',  // Grant
  GR_RCPT                       : '',  // Goods recipient
  G_L_ACCT                      : '',  // G/L Account Number
  NETWORK                       : '',  // Network Number for Account Assignment
  ORDER_NO                      : '',  // Order Number
  PART_ACCT                     : '',  // Partner account number
  PREQ_ITEM                     : '',  // Item number of purchase requisition
  PREQ_QTY                      : 0,  // Purchase requisition quantity
  PROFIT_CTR                    : '',  // Profit Center
  PROF_SEGM                     : '',  // Profitability Segment Number (CO-PA)
  PROJ_EXT                      : '',  // Project definition
  REC_IND                       : '',  // Recovery Indicator
  REF_DATE                      : '',  // Reference date for settlement
  RL_EST_KEY                    : '',  // Internal Key for Real Estate Object
  ROUTING_NO                    : '',  // Routing number of operations in the order
  SCHED_LINE                    : '',  // Schedule line
  SDOC_ITEM                     : '',  // Sales Document Item
  SD_DOC                        : '',  // Sales and Distribution Document Number
  SERIAL_NO                     : '',  // Serial number for PReq account assignment segment
  SUB_NUMBER                    : '',  // Asset Subnumber
  TO_COSTCTR                    : '',  // Posting to cost center?
  TO_ORDER                      : '',  // Post To Order
  TO_PROJECT                    : '',  // Post to project
  UNLOAD_PT                     : '',  // Unloading Point
  WBS_ELEM_E                    : ''   // Work breakdown structure element (WBS element)
};
/* eslint-enable key-spacing */

// PROCUREMENT_ITEM BAPIPOGN Item Data

/* eslint-disable key-spacing */
// prettier-ignore
PROCUREMENT_ITEM = {
  ACCTASSCAT                    : '',  // Account assignment category
  AGMT_ITEM                     : '',  // Item number of principal purchase agreement
  AGREEMENT                     : '',  // Number of principal purchase agreement
  AVAIL_QTY                     : 0,  // Available quantity of material as at delivery date
  CATALOG                       : '',  // Identifier for allowed catalogs
  CONF_VEND                     : '',  // Item confirmed/acknowledged by vendor
  CURRENCY                      : '',  // Currency Key
  C_AMT_BAPI                    : 0,  // Price in purchase requisition
  DELIV_DATE                    : '',  // Delivery date
  DEL_DATCAT                    : '',  // Date type (day, week, month, interval)
  DOC_TYPE                      : '',  // Purchasing Document Type
  FIXED_VEND                    : '',  // Fixed vendor
  INFO_REC                      : '',  // Number of purchasing info record
  ITEM_CAT                      : '',  // Item category in purchasing document
  MANUF_PROF                    : '',  // Mfr part profile
  MANU_MAT                      : '',  // Manufacturer Part Number
  MATERIAL                      : '',  // Material Number
  MATERIAL_EXTERNAL             : '',  // Long Material Number for MATERIAL Field
  MATERIAL_GUID                 : '',  // External GUID for MATERIAL Field
  MATERIAL_LONG                 : '',  // Material Number (40 Characters, needed f. technical reasons)
  MATERIAL_VERSION              : '',  // Version Number for MATERIAL Field
  MAT_GRP                       : '',  // Material Group
  MFR_NO                        : '',  // Manufacturer number
  MFR_NO_EXT                    : '',  // External manufacturer code name or number
  MOVE_TYPE                     : '',  // Movement type (inventory management)
  NO_OBJ_POS                    : '',  // No MM object possible
  OBJ_TO_GEN                    : '',  // Analysis result: object to be generated
  PLANT                         : '',  // Plant
  PO_PRICE                      : '',  // Use Requisition Price in Purchase Order
  PREQ_ITEM                     : '',  // Item number of purchase requisition
  PREQ_NAME                     : '',  // Name of requisitioner/requester
  PRICE_UNIT                    : 0,  // Price unit
  PURCH_ORG                     : '',  // Purchasing organization
  PUR_GROUP                     : '',  // Purchasing group
  PUR_MAT                       : '',  // Material number
  PUR_MAT_EXTERNAL              : '',  // Long Material Number for PUR_MAT Field
  PUR_MAT_GUID                  : '',  // External GUID for PUR_MAT Field
  PUR_MAT_LONG                  : '',  // Material Number (40 Characters, Technical Requirement)
  PUR_MAT_VERSION               : '',  // Version Number for PUR_MAT Field
  QUANTITY                      : 0,  // Purchase requisition quantity
  SHORT_TEXT                    : '',  // Short Text
  STORE_LOC                     : '',  // Storage location
  SUPPL_PLANT                   : '',  // Supplying (issuing) plant in case of stock transport order
  UNIT                          : '',  // Purchase requisition unit of measure
  VEND_MAT                      : ''   // Material number used by vendor
};
/* eslint-enable key-spacing */

// RETURN BAPIRETURN Processing Errors

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  CODE                          : '',  // Message code
  LOG_MSG_NO                    : '',  // Application log: Internal message serial number
  LOG_NO                        : '',  // Application log: log number
  MESSAGE                       : '',  // Message Text
  MESSAGE_V1                    : '',  // Message Variable
  MESSAGE_V2                    : '',  // Message Variable
  MESSAGE_V3                    : '',  // Message Variable
  MESSAGE_V4                    : '',  // Message Variable
  TYPE                          : ''   // Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */
