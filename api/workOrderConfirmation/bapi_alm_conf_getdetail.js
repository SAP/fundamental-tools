//
// BAPI_ALM_CONF_GETDETAIL var: 2  struct: 2  table: 2  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

CONFIRMATION           :           "", // NUMC (10) Confirmation SU3=RCK
CONFIRMATIONCOUNTER    :           "", // NUMC (8) Confirmation counter SU3=RZL

// TABLE PARAMETERS

// FAILEDGMOVES        :           [], // BAPI_CORU_FGM Incorrect or Flagged Goods Movements
// GOODSMOVEMENTS      :           [], // BAPI2017_GM_ITEM_SHOW Successfully Posted Goods Movements

// EXPORT PARAMETERS

// CONF_DETAIL         :           {}, // BAPI_ALM_CONFIRMATION Display Structure for PM/CS Confirmation
// RETURN              :           {}, // BAPIRET2 Return Parameter
};

const result = await client.call("BAPI_ALM_CONF_GETDETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI_CORU_FGM  Incorrect or Flagged Goods Movements
const FAILEDGMOVES= [];

// prettier-ignore
const FAILEDGMOVES= {
  DOC_NO                           :   "", // CHAR (10) ALPHA=ALPHA Number of a document from a goods movement with errors
  DOC_ITM                          :   "", // NUMC (8) Internal counter
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CREATED_DATE                     :   "", // DATS (8) Created On
  CREATED_TIME                     :   "", // TIMS (6) Entry time
  FAILED_DATE                      :   "", // DATS (8) Date when the error first arose
  FAILED_TIME                      :   "", // TIMS (6) Time when the error first arose
  MSG_ID                           :   "", // CHAR (20) Message Class
  MSG_NO                           :   "", // CHAR (3) System Message Number
  MSG_TYPE                         :   "", // CHAR (1) Message Type
  MSG_V1                           :   "", // CHAR (50) Message variable 01
  MSG_V2                           :   "", // CHAR (50) Message variable 02
  MSG_V3                           :   "", // CHAR (50) Message variable 03
  MSG_V4                           :   "", // CHAR (50) Message variable 04
  PSTNG_DATE                       :   "", // DATS (8) Posting Date in the Document
  DOC_DATE                         :   "", // DATS (8) Document Date in Document
  EXPIRYDATE                       :   "", // DATS (8) SLED/Best-Before Date or Date of Production
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  STGE_LOC                         :   "", // CHAR (4) Storage location SU3=LAG
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  MOVE_TYPE                        :   "", // CHAR (3) Movement type (inventory management) SU3=BWA
  STCK_TYPE                        :   "", // CHAR (1) Stock Type
  SPEC_STOCK                       :   "", // CHAR (1) Special Stock Indicator
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Account Number of Vendor or Creditor SU3=LIF
  SALES_ORD                        :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  S_ORD_ITEM                       :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  SCHED_LINE                       :   "", // NUMC (4) Delivery schedule for sales order
  ENTRY_UOM                        :   "", // UNIT (3) ALPHA=CUNIT Unit of entry
  ENTRY_UOM_ISO                    :   "", // CHAR (3) ISO code for unit of measurement
  ENTRY_QNT                        : "0.0", // QUAN (13.3) Quantity in unit of entry
  NO_MORE_GR                       :   "", // CHAR (1) "Delivery Completed" Indicator
  GR_RCPT                          :   "", // CHAR (12) Goods recipient
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  ORDERID_ITNO                     :   "", // NUMC (4) Order item number
  CALC_MOTIVE                      :   "", // CHAR (2) Accounting Indicator
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  RES_ITEM                         :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  RES_TYPE                         :   "", // CHAR (1) Record type
  WITHDRAWN                        :   "", // CHAR (1) Final issue for this reservation
  MVT_IND                          :   "", // CHAR (1) Movement Indicator
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI2017_GM_ITEM_SHOW  Successfully Posted Goods Movements
const GOODSMOVEMENTS= [];

// prettier-ignore
const GOODSMOVEMENTS= {
  MAT_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Number of Material Document SU3=MBN
  DOC_YEAR                         :   "", // NUMC (4) ALPHA=GJAHR Material Document Year SU3=MJA
  MATDOC_ITM                       :   "", // NUMC (4) Item in Material Document SU3=POS
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  STGE_LOC                         :   "", // CHAR (4) Storage location SU3=LAG
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  MOVE_TYPE                        :   "", // CHAR (3) Movement type (inventory management) SU3=BWA
  STCK_TYPE                        :   "", // CHAR (1) Stock Type
  SPEC_STOCK                       :   "", // CHAR (1) Special Stock Indicator
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Account number of customer SU3=KUN
  SALES_ORD                        :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  S_ORD_ITEM                       :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  SCHED_LINE                       :   "", // NUMC (4) Delivery schedule for sales order
  VAL_TYPE                         :   "", // CHAR (10) Valuation type SU3=BWT
  ENTRY_QNT                        : "0.0", // QUAN (13.3) Quantity in unit of entry
  ENTRY_UOM                        :   "", // UNIT (3) ALPHA=CUNIT Unit of entry
  ENTRY_UOM_ISO                    :   "", // CHAR (3) ISO code for unit of measurement
  PO_PR_QNT                        : "0.0", // QUAN (13.3) Quantity in Purchase Order Price Unit
  ORDERPR_UN                       :   "", // UNIT (3) ALPHA=CUNIT Order Price Unit (Purchasing)
  ORDERPR_UN_ISO                   :   "", // CHAR (3) ISO code for unit of measurement
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchase order number SU3=BES
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  SHIPPING                         :   "", // CHAR (2) Shipping Instructions
  COMP_SHIP                        :   "", // CHAR (2) Compliance with Shipping Instructions
  NO_MORE_GR                       :   "", // CHAR (1) "Delivery Completed" Indicator
  ITEM_TEXT                        :   "", // CHAR (50) Item Text
  GR_RCPT                          :   "", // CHAR (12) Goods recipient
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  ORDER_ITNO                       :   "", // NUMC (4) Order item number
  CALC_MOTIVE                      :   "", // CHAR (2) Accounting Indicator
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number SU3=AN1
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber SU3=AN2
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  RES_ITEM                         :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  RES_TYPE                         :   "", // CHAR (1) Record type
  WITHDRAWN                        :   "", // CHAR (1) Final issue for this reservation
  MOVE_MAT                         :   "", // CHAR (18) ALPHA=MATN1 Receiving/Issuing Material
  MOVE_PLANT                       :   "", // CHAR (4) Receiving plant/issuing plant
  MOVE_STLOC                       :   "", // CHAR (4) Receiving/issuing storage location
  MOVE_BATCH                       :   "", // CHAR (10) Receiving/Issuing Batch
  MOVE_VAL_TYPE                    :   "", // CHAR (10) Valuation Type of Transfer Batch
  MVT_IND                          :   "", // CHAR (1) Movement Indicator
  MOVE_REAS                        :   "", // NUMC (4) Reason for Movement
  RL_EST_KEY                       :   "", // CHAR (8) ALPHA=IMKEY Internal Key for Real Estate Object
  REF_DATE                         :   "", // DATS (8) Reference date for settlement
  COST_OBJ                         :   "", // CHAR (12) Cost Object SU3=KTR
  PROFIT_SEGM_NO                   :   "", // NUMC (10) Profitability Segment Number (CO-PA)
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  WBS_ELEM                         :   "", // CHAR (24) ALPHA=ABPSN Work Breakdown Structure Element (WBS Element) SU3=PRO
  NETWORK                          :   "", // CHAR (12) ALPHA=ALPHA Network Number for Account Assignment SU3=NET
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  PART_ACCT                        :   "", // CHAR (10) ALPHA=ALPHA Partner account number
  AMOUNT_LC                        :  "0", // DEC (23.4) Externally entered posting amount in local currency
  AMOUNT_SV                        :  "0", // DEC (23.4) Externally entered sales value in local currency
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
  REF_DOC_YR                       :   "", // NUMC (4) ALPHA=GJAHR Fiscal Year of a Reference Document
  REF_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document No. of a Reference Document
  REF_DOC_IT                       :   "", // NUMC (4) Item of a Reference Document
  EXPIRYDATE                       :   "", // DATS (8) Shelf Life Expiration or Best-Before Date
  PROD_DATE                        :   "", // DATS (8) Date of Manufacture
  FUND                             :   "", // CHAR (10) Fund SU3=FIC
  FUNDS_CTR                        :   "", // CHAR (16) Funds Center SU3=FIS
  CMMT_ITEM                        :   "", // CHAR (14) ALPHA=FMCIS Commitment Item SU3=FIP
  VAL_SALES_ORD                    :   "", // CHAR (10) ALPHA=ALPHA Sales order number of valuated sales order stock SU3=AUN
  VAL_S_ORD_ITEM                   :   "", // NUMC (6) Sales Order Item of Valuated Sales Order Stock SU3=KPO
  VAL_WBS_ELEM                     :   "", // CHAR (24) ALPHA=ABPSN Work Breakdown Structure Element (WBS Element) SU3=PRO
  CO_BUSPROC                       :   "", // CHAR (12) ALPHA=ALPHA Business Process SU3=KWP
  ACTTYPE                          :   "", // CHAR (6) Activity Type SU3=LAR
  SUPPL_VEND                       :   "", // CHAR (10) ALPHA=ALPHA Supplying Vendor SU3=LLI
  X_AUTO_CRE                       :   "", // CHAR (1) Item automatically created
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MOVE_MAT_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MOVE_MAT Field
  MOVE_MAT_GUID                    :   "", // CHAR (32) External GUID for MOVE_MAT Field
  MOVE_MAT_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MOVE_MAT Field
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant SU3=GM_GRANT_NBR
  CMMT_ITEM_LONG                   :   "", // CHAR (24) ALPHA=FMCIL Commitment item SU3=FPS
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area SU3=FBE
  LINE_ID                          :   "", // NUMC (6) Unique identification of document line
  PARENT_ID                        :   "", // NUMC (6) Identifier of immediately superior line
  LINE_DEPTH                       :   "", // NUMC (2) Hierarchy level of line in document
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period SU3=BUDPER
  EARMARKED_NUMBER                 :   "", // CHAR (10) ALPHA=ALPHA Document Number for Earmarked Funds SU3=KBL
  EARMARKED_ITEM                   :   "", // NUMC (3) Earmarked Funds: Document Item SU3=KBP
  STK_SEGMENT                      :   "", // CHAR (16) Stock Segment SU3=SGT_S
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  MOVE_MAT_LONG                    :   "", // CHAR (40) Receiving/Issuing Material
};


//
// EXPORT PARAMETERS
//

// BAPI_ALM_CONFIRMATION  Display Structure for PM/CS Confirmation

// prettier-ignore
const CONF_DETAIL= {
  CONF_TEXT                        :   "", // CHAR (40) Confirmation text
  POSTG_DATE                       :   "", // DATS (8) Posting Date
  OPERATION                        :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_OPER                         :   "", // CHAR (4) ALPHA=NUMCV Suboperation
};

// BAPIRET2  Return Parameter

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
