//
// BAPI_PO_GETITEMS var: 22  struct: 2  table: 3  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// ACCTASSCAT             :           "", // CHAR (1) Account Assignment Category SU3=KNT
// CREATED_BY             :           "", // CHAR (12) Creator
// DELETED_ITEMS          :        SPACE, // CHAR (1) Including Deleted Items
// DOC_DATE               :           "", // DATS (8) As of PO Date
// DOC_TYPE               :           "", // CHAR (4) Order Type SU3=BSA
// ITEM_CAT               :           "", // CHAR (1) Item Category
// ITEMS_OPEN_FOR_RECEIPT :        SPACE, // CHAR (1) Items with Still-Open Goods Receipt Only
// MAT_GRP                :           "", // CHAR (9) Material Group SU3=MKL
// MATERIAL               :           "", // CHAR (18) ALPHA=MATN1 Material SU3=MAT
// MATERIAL_LONG          :           "", // CHAR (40) Material Number (40 Characters, Necessary for Technical Reasons)
// PLANT                  :           "", // CHAR (4) Plant SU3=WRK
// PREQ_NAME              :        SPACE, // CHAR (12) no text (en)
// PUR_GROUP              :           "", // CHAR (3) Purchasing Group SU3=EKG
// PUR_MAT                :        SPACE, // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
// PUR_MAT_LONG           :        SPACE, // CHAR (40) Material Number (40 Characters, Technical Requirement)
// PURCH_ORG              :           "", // CHAR (4) Purchasing Organization SU3=EKO
// PURCHASEORDER          :           "", // CHAR (10) ALPHA=ALPHA Purchase Order Number SU3=BES
// SHORT_TEXT             :           "", // CHAR (40) Short Text
// SUPPL_PLANT            :           "", // CHAR (4) Supplying Plant
// TRACKINGNO             :           "", // CHAR (10) Requirement Tracking Number
// VENDOR                 :           "", // CHAR (10) ALPHA=ALPHA Vendor SU3=LIF
// WITH_PO_HEADERS        :        SPACE, // CHAR (1) Also Provide Header Data
// MATERIAL_EVG           :           {}, // BAPIMGVMATNR Long Material Number
// PUR_MAT_EVG            :           {}, // BAPIMGVMATNR Long Material Number

// TABLE PARAMETERS

PO_ITEMS                  :           [], // BAPIEKPOC Table of Items
// PO_HEADERS             :           [], // BAPIEKKOL Table of PO Header Data
// RETURN                 :           [], // BAPIRETURN Return Messages
};

const result = await client.call("BAPI_PO_GETITEMS", parameters);

//
// IMPORT PARAMETERS
//

// BAPIMGVMATNR  Long Material Number

// prettier-ignore
const MATERIAL_EVG= {
  MATERIAL_EXT                     :   "", // CHAR (40) ALPHA=MATNL External Long Material Number
  MATERIAL_VERS                    :   "", // CHAR (10) ALPHA=MATNW Material Version Number SU3=MATVERS
  MATERIAL_GUID                    :   "", // CHAR (32) Material number (external GUID)
};

// BAPIMGVMATNR  Long Material Number

// prettier-ignore
const PUR_MAT_EVG= {
  MATERIAL_EXT                     :   "", // CHAR (40) ALPHA=MATNL External Long Material Number
  MATERIAL_VERS                    :   "", // CHAR (10) ALPHA=MATNW Material Version Number SU3=MATVERS
  MATERIAL_GUID                    :   "", // CHAR (32) Material number (external GUID)
};


//
// TABLE PARAMETERS
//

// BAPIEKPOC  Table of Items
const PO_ITEMS= [];

// prettier-ignore
const PO_ITEMS= {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  ADDRESS                          :   "", // CHAR (10) ALPHA=ALPHA Address
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PUR_MAT                          :   "", // CHAR (18) ALPHA=MATN1 Material number SU3=MAT
  INFO_REC                         :   "", // CHAR (10) ALPHA=ALPHA Number of purchasing info record SU3=INF
  ITEM_CAT                         :   "", // CHAR (1) Item category in purchasing document
  ACCTASSCAT                       :   "", // CHAR (1) Account assignment category SU3=KNT
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement SU3=KTR
  AGMT_ITEM                        :   "", // NUMC (5) Item number of principal purchase agreement
  STORE_LOC                        :   "", // CHAR (4) Storage location SU3=LAG
  MAT_GRP                          :   "", // CHAR (9) Material Group SU3=MKL
  SHORT_TEXT                       :   "", // CHAR (40) Short Text
  DISTRIB                          :   "", // CHAR (1) Distribution indicator for multiple account assignment
  PART_INV                         :   "", // CHAR (1) Partial invoice indicator
  KANBAN_IND                       :   "", // CHAR (1) Kanban Indicator
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  ALLOC_TBL                        :   "", // CHAR (10) ALPHA=ALPHA Allocation Table Number SU3=ABE
  AT_ITEM                          :   "", // NUMC (5) Item number of allocation table
  UNIT                             :   "", // UNIT (3) ALPHA=CUNIT Order unit
  NET_PRICE                        :  "0", // DEC (23.4) Net price in purchasing document (in document currency)
  PRICE_UNIT                       :  "0", // DEC (5) Price unit
  CONV_NUM1                        :  "0", // DEC (5) Numerator for Conversion of Order Price Unit into Order Unit
  CONV_DEN1                        :  "0", // DEC (5) Denominator for Conv. of Order Price Unit into Order Unit
  ORDERPR_UN                       :   "", // UNIT (3) ALPHA=CUNIT Order Price Unit (Purchasing)
  PCKG_NO                          :   "", // NUMC (10) Package number
  PROMOTION                        :   "", // CHAR (10) ALPHA=ALPHA Promotion SU3=WAK
  ACKN_REQD                        :   "", // CHAR (1) Order Acknowledgment Requirement
  TRACKINGNO                       :   "", // CHAR (10) Requirement Tracking Number
  PLAN_DEL                         :  "0", // DEC (3) Planned Delivery Time in Days
  RET_ITEM                         :   "", // CHAR (1) Returns Item
  AT_RELEV                         :   "", // CHAR (1) Relevant to Allocation Table
  VEND_MAT                         :   "", // CHAR (22) Material number used by vendor
  MANUF_PROF                       :   "", // CHAR (4) Mfr part profile
  MANU_MAT                         :   "", // CHAR (40) Manufacturer Part Number
  MFR_NO                           :   "", // CHAR (10) ALPHA=ALPHA Manufacturer number
  MFR_NO_EXT                       :   "", // CHAR (10) External manufacturer code name or number
  PO_PRICE                         :   "", // CHAR (1) Indicator: adopt price - do not use info record
  SHIPPING                         :   "", // CHAR (2) Shipping Instructions
  ITEM_CAT_EXT                     :   "", // CHAR (1) Item category in purchasing document
  PO_UNIT_ISO                      :   "", // CHAR (3) Order unit in ISO code
  ORDERPR_UN_ISO                   :   "", // CHAR (3) ISO code for purchase order price unit
  PREQ_NAME                        :   "", // CHAR (12) Name of requisitioner/requester
  DISP_QUAN                        : "0.0", // QUAN (13.3) PO quantity: total of all sched. lines for display purposes
  QUAL_INSP                        :   "", // CHAR (1) Stock Type
  NO_MORE_GR                       :   "", // CHAR (1) "Delivery Completed" Indicator
  DELETE_IND                       :   "", // CHAR (1) Deletion indicator in purchasing document
  NO_ROUNDING                      :   "", // CHAR (1) Indicator: suppress rounding in purchase order item
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  PUR_MAT_EXTERNAL                 :   "", // CHAR (40) ALPHA=MATNL Long Material Number for PUR_MAT Field
  PUR_MAT_GUID                     :   "", // CHAR (32) External GUID for PUR_MAT Field
  PUR_MAT_VERSION                  :   "", // CHAR (10) ALPHA=MATNW Version Number for PUR_MAT Field
  VAL_TYPE                         :   "", // CHAR (10) Valuation type SU3=BWT
  PR_CLOSED                        :   "", // CHAR (1) Purchase requisition closed
  ACKNOWL_NO                       :   "", // CHAR (20) Order Acknowledgment Number
  REQ_SEGMENT                      :   "", // CHAR (16) Requirement Segment SU3=SGT_R
  STK_SEGMENT                      :   "", // CHAR (16) Stock Segment SU3=SGT_S
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  PUR_MAT_LONG                     :   "", // CHAR (40) Material Number (40 Characters, Technical Requirement)
};

// BAPIEKKOL  Table of PO Header Data
const PO_HEADERS= [];

// prettier-ignore
const PO_HEADERS= {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  CO_CODE                          :   "", // CHAR (4) Company Code SU3=BUK
  DOC_CAT                          :   "", // CHAR (1) Purchasing Document Category
  DOC_TYPE                         :   "", // CHAR (4) Purchasing Document Type SU3=BSA
  CNTRL_IND                        :   "", // CHAR (1) Control indicator for purchasing document type
  DELETE_IND                       :   "", // CHAR (1) Deletion indicator in purchasing document
  STATUS                           :   "", // CHAR (1) Status of Purchasing Document
  CREATED_ON                       :   "", // DATS (8) Date on Which Record Was Created
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  ITEM_INTVL                       :   "", // NUMC (5) Item Number Interval
  LAST_ITEM                        :   "", // NUMC (5) Last Item Number
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
  LANGUAGE                         :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  DSCNT1_TO                        :  "0", // DEC (3) Cash discount days 1
  DSCNT2_TO                        :  "0", // DEC (3) Cash discount days 2
  DSCNT3_TO                        :  "0", // DEC (3) Cash discount days 3
  CASH_DISC1                       :  "0", // DEC (5.3) Cash discount percentage 1
  CASH_DISC2                       :  "0", // DEC (5.3) Cash Discount Percentage 2
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization SU3=EKO
  PUR_GROUP                        :   "", // CHAR (3) Purchasing Group SU3=EKG
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  EXCH_RATE                        :  "0", // DEC (9.5) Direct Quoted Exchange Rate
  EX_RATE_FX                       :   "", // CHAR (1) Indicator: Fixing of Exchange Rate
  DOC_DATE                         :   "", // DATS (8) Purchasing Document Date
  VPER_START                       :   "", // DATS (8) Start of Validity Period
  VPER_END                         :   "", // DATS (8) End of Validity Period
  APPLIC_BY                        :   "", // DATS (8) Closing Date for Applications
  QUOT_DEAD                        :   "", // DATS (8) Deadline for Submission of Bid/Quotation
  BINDG_PER                        :   "", // DATS (8) Binding Period for Quotation
  WARRANTY                         :   "", // DATS (8) Warranty Date
  BIDINV_NO                        :   "", // CHAR (10) ALPHA=ALPHA Bid invitation number SU3=BES
  QUOTATION                        :   "", // CHAR (10) Quotation Number
  QUOT_DATE                        :   "", // DATS (8) Quotation Submission Date
  REF_1                            :   "", // CHAR (12) Your Reference
  SALES_PERS                       :   "", // CHAR (30) Responsible Salesperson at Vendor's Office
  TELEPHONE                        :   "", // CHAR (16) Vendor's Telephone Number
  SUPPL_VEND                       :   "", // CHAR (10) ALPHA=ALPHA Supplying Vendor SU3=LLI
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement SU3=KTR
  REJ_REASON                       :   "", // CHAR (2) Reason for rejection of quotations and sales orders
  COMPL_DLV                        :   "", // CHAR (1) Complete Delivery Stipulated for Each Purchase Order
  GR_MESSAGE                       :   "", // CHAR (1) Indicator: Goods Receipt Message
  SUPPL_PLNT                       :   "", // CHAR (4) Supplying (issuing) plant in case of stock transport order
  RCVG_VEND                        :   "", // CHAR (10) ALPHA=ALPHA Field not used SU3=LIF
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  TARGET_VAL                       :  "0", // DEC (23.4) Cumulative Planned Value
  COLL_NO                          :   "", // CHAR (10) Collective Number
  DOC_COND                         :   "", // CHAR (10) Number of the document condition
  PROCEDURE                        :   "", // CHAR (6) Procedure (Pricing, Output Control, Acct. Det., Costing,...)
  UPDATE_GRP                       :   "", // CHAR (6) ALPHA=ALPHA Update group for statistics update SU3=MCF
  DIFF_INV                         :   "", // CHAR (10) ALPHA=ALPHA Different Invoicing Party SU3=LRE
  EXPORT_NO                        :   "", // CHAR (10) Number of foreign trade data in MM and SD documents
  OUR_REF                          :   "", // CHAR (12) Our Reference
  LOGSYSTEM                        :   "", // CHAR (10) ALPHA=ALPHA Logical System
  SUBITEMINT                       :   "", // NUMC (5) Item Number Interval for Subitems
  MAST_COND                        :   "", // CHAR (1) Document with time-dependent conditions
  REL_GROUP                        :   "", // CHAR (2) Release group
  REL_STRAT                        :   "", // CHAR (2) Release Strategy
  REL_IND                          :   "", // CHAR (1) Release Indicator: Purchasing Document
  REL_STATUS                       :   "", // CHAR (8) Release State
  SUBJ_TO_R                        :   "", // CHAR (1) Release Not Yet Completely Effected
  TAXR_CNTRY                       :   "", // CHAR (3) Country for Tax Return
  SCHED_IND                        :   "", // CHAR (1) Indicator for scheduling agreement release documentation
  VEND_NAME                        :   "", // CHAR (35) Name 1
  CURRENCY_ISO                     :   "", // CHAR (3) ISO Currency Code
  EXCH_RATE_CM                     :  "0", // DEC (9.5) Indirect Quoted Exchange Rate
  HOLD                             :   "", // CHAR (1) Purchase order not yet complete
};

// BAPIRETURN  Return Messages
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
