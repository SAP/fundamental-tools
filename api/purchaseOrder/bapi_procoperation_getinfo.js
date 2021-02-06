//
// BAPI_PROCOPERATION_GETINFO var: 0  struct: 0  table: 3  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// TABLE PARAMETERS

PROCUREMENT_ITEM       :           [], // BAPIPOGN Item Data
// PROCUREMENT_ACCOUNT :           [], // BAPIPOGNA Account Assignment Data
// RETURN              :           [], // BAPIRETURN Processing Errors
};

const result = await client.call("BAPI_PROCOPERATION_GETINFO", parameters);

//
// TABLE PARAMETERS
//

// BAPIPOGN  Item Data
const PROCUREMENT_ITEM= [];

// prettier-ignore
const PROCUREMENT_ITEM= {
  MAT_GRP                          :   "", // CHAR (9) Material Group SU3=MKL
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
};

// BAPIPOGNA  Account Assignment Data
const PROCUREMENT_ACCOUNT= [];

// prettier-ignore
const PROCUREMENT_ACCOUNT= {
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition SU3=BAP
  SERIAL_NO                        :   "", // NUMC (2) Serial number for PReq account assignment segment
  PREQ_QTY                         : "0.0", // QUAN (13.3) Purchase requisition quantity
  DISTR_PERC                       :  "0", // DEC (3.1) Distribution percentage in the case of multiple acct assgt
  G_L_ACCT                         :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number SU3=SAK
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  COST_CTR                         :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  PROJ_EXT                         :   "", // CHAR (24) ALPHA=ABPSN Project definition SU3=PSP
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  SDOC_ITEM                        :   "", // NUMC (6) Sales Document Item SU3=APO
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number SU3=AN1
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber SU3=AN2
  ORDER_NO                         :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  GR_RCPT                          :   "", // CHAR (12) Goods recipient
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  CO_AREA                          :   "", // CHAR (4) Controlling Area SU3=CAC
  TO_COSTCTR                       :   "", // CHAR (1) Posting to cost center?
  TO_ORDER                         :   "", // CHAR (1) Post To Order
  TO_PROJECT                       :   "", // CHAR (1) Post to project
  COST_OBJ                         :   "", // CHAR (12) Cost Object SU3=KTR
  PROF_SEGM                        :   "", // NUMC (10) Profitability Segment Number (CO-PA)
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  WBS_ELEM_E                       :   "", // CHAR (24) ALPHA=ABPSN Work breakdown structure element (WBS element)
  NETWORK                          :   "", // CHAR (12) ALPHA=ALPHA Network Number for Account Assignment SU3=NET
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  RL_EST_KEY                       :   "", // CHAR (8) ALPHA=IMKEY Internal Key for Real Estate Object
  COUNTER                          :   "", // NUMC (8) Internal counter
  PART_ACCT                        :   "", // CHAR (10) ALPHA=ALPHA Partner account number
  CMMT_ITEM                        :   "", // CHAR (14) ALPHA=FMCIS Commitment Item SU3=FIP
  REC_IND                          :   "", // CHAR (2) ALPHA=ALPHA Recovery Indicator
  FUNDS_CTR                        :   "", // CHAR (16) Funds Center SU3=FIS
  FUND                             :   "", // CHAR (10) Fund SU3=FIC
  FUNC_AREA                        :   "", // CHAR (4) Functional Area SU3=FBE
  REF_DATE                         :   "", // DATS (8) Reference date for settlement
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant SU3=GM_GRANT_NBR
  CMMT_ITEM_LONG                   :   "", // CHAR (24) ALPHA=FMCIL Commitment item SU3=FPS
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area SU3=FBE
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period SU3=BUDPER
};

// BAPIRETURN  Processing Errors
const RETURN= [];

// prettier-ignore
const RETURN= {
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
  CODE                             :   "", // CHAR (5) Message code
  MESSAGE                          :   "", // CHAR (220) Message Text
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
};
