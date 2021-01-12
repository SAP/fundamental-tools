//
// BAPI_PO_GETITEMSREL 
//
// rfmcall.py 1.0 at: 2021-01-12 14:46:14
//

// Variables : 3
// Structures: 0
// Tables    : 3
// Exceptions: 0

BAPI_PO_GETITEMSREL = {

  // INPUT PARAMETERS

  //ITEMS_FOR_RELEASE              :  "X", // CHAR (1) Indicator: Display Purchase Orders Awaiting Release Only
  //REL_CODE                       :   "", // CHAR (2) Release Code
  //REL_GROUP                      :   "", // CHAR (2) Release Group

  // TABLE PARAMETERS

  PO_HEADERS                       :   [], // BAPIEKKOL PO Header Data
  PO_ITEMS                         :   [], // BAPIEKPOC Purchase Order Items
  //RETURN                         :   [], // BAPIRETURN Return Messages
};

//
// INPUT PARAMETERS
//

//
// TABLE PARAMETERS
//

// PO_HEADERS BAPIEKKOL PO Header Data

/* eslint-disable key-spacing */
// prettier-ignore
PO_HEADERS = {
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement
  APPLIC_BY                        :   "", // DATS (8) Closing Date for Applications
  BIDINV_NO                        :   "", // CHAR (10) ALPHA=ALPHA Bid invitation number
  BINDG_PER                        :   "", // DATS (8) Binding Period for Quotation
  CASH_DISC1                       :    0, // DEC (5.3) Cash discount percentage 1
  CASH_DISC2                       :    0, // DEC (5.3) Cash Discount Percentage 2
  CNTRL_IND                        :   "", // CHAR (1) Control indicator for purchasing document type
  COLL_NO                          :   "", // CHAR (10) Collective Number
  COMPL_DLV                        :   "", // CHAR (1) Complete Delivery Stipulated for Each Purchase Order
  CO_CODE                          :   "", // CHAR (4) Company Code
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CREATED_ON                       :   "", // DATS (8) Date on Which Record Was Created
  CURRENCY                         :   "", // CUKY (5) Currency Key
  CURRENCY_ISO                     :   "", // CHAR (3) ISO Currency Code
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number
  DELETE_IND                       :   "", // CHAR (1) Deletion indicator in purchasing document
  DIFF_INV                         :   "", // CHAR (10) ALPHA=ALPHA Different Invoicing Party
  DOC_CAT                          :   "", // CHAR (1) Purchasing Document Category
  DOC_COND                         :   "", // CHAR (10) Number of the document condition
  DOC_DATE                         :   "", // DATS (8) Purchasing Document Date
  DOC_TYPE                         :   "", // CHAR (4) Purchasing Document Type
  DSCNT1_TO                        :    0, // DEC (3) Cash discount days 1
  DSCNT2_TO                        :    0, // DEC (3) Cash discount days 2
  DSCNT3_TO                        :    0, // DEC (3) Cash discount days 3
  EXCH_RATE                        :    0, // DEC (9.5) Direct Quoted Exchange Rate
  EXCH_RATE_CM                     :    0, // DEC (9.5) Indirect Quoted Exchange Rate
  EXPORT_NO                        :   "", // CHAR (10) Number of foreign trade data in MM and SD documents
  EX_RATE_FX                       :   "", // CHAR (1) Indicator: Fixing of Exchange Rate
  GR_MESSAGE                       :   "", // CHAR (1) Indicator: Goods Receipt Message
  HOLD                             :   "", // CHAR (1) Purchase order not yet complete
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  ITEM_INTVL                       :   "", // NUMC (5) Item Number Interval
  LANGUAGE                         :   "", // LANG (1) ALPHA=ISOLA Language Key
  LAST_ITEM                        :   "", // NUMC (5) Last Item Number
  LOGSYSTEM                        :   "", // CHAR (10) ALPHA=ALPHA Logical System
  MAST_COND                        :   "", // CHAR (1) Document with time-dependent conditions
  OUR_REF                          :   "", // CHAR (12) Our Reference
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  PROCEDURE                        :   "", // CHAR (6) Procedure (Pricing, Output Control, Acct. Det., Costing,...)
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization
  PUR_GROUP                        :   "", // CHAR (3) Purchasing Group
  QUOTATION                        :   "", // CHAR (10) Quotation Number
  QUOT_DATE                        :   "", // DATS (8) Quotation Submission Date
  QUOT_DEAD                        :   "", // DATS (8) Deadline for Submission of Bid/Quotation
  RCVG_VEND                        :   "", // CHAR (10) ALPHA=ALPHA Field not used
  REF_1                            :   "", // CHAR (12) Your Reference
  REJ_REASON                       :   "", // CHAR (2) Reason for rejection of quotations and sales orders
  REL_GROUP                        :   "", // CHAR (2) Release group
  REL_IND                          :   "", // CHAR (1) Release Indicator: Purchasing Document
  REL_STATUS                       :   "", // CHAR (8) Release State
  REL_STRAT                        :   "", // CHAR (2) Release Strategy
  SALES_PERS                       :   "", // CHAR (30) Responsible Salesperson at Vendor's Office
  SCHED_IND                        :   "", // CHAR (1) Indicator for scheduling agreement release documentation
  STATUS                           :   "", // CHAR (1) Status of Purchasing Document
  SUBITEMINT                       :   "", // NUMC (5) Item Number Interval for Subitems
  SUBJ_TO_R                        :   "", // CHAR (1) Release Not Yet Completely Effected
  SUPPL_PLNT                       :   "", // CHAR (4) Supplying (issuing) plant in case of stock transport order
  SUPPL_VEND                       :   "", // CHAR (10) ALPHA=ALPHA Supplying Vendor
  TARGET_VAL                       :    0, // DEC (23.4) Cumulative Planned Value
  TAXR_CNTRY                       :   "", // CHAR (3) Country for Tax Return
  TELEPHONE                        :   "", // CHAR (16) Vendor's Telephone Number
  UPDATE_GRP                       :   "", // CHAR (6) ALPHA=ALPHA Update group for statistics update
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number
  VEND_NAME                        :   "", // CHAR (35) Name 1
  VPER_END                         :   "", // DATS (8) End of Validity Period
  VPER_START                       :   "", // DATS (8) Start of Validity Period
  WARRANTY                         :   "", // DATS (8) Warranty Date
};
/* eslint-enable key-spacing */

// PO_ITEMS BAPIEKPOC Purchase Order Items

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEMS = {
  ACCTASSCAT                       :   "", // CHAR (1) Account assignment category
  ACKNOWL_NO                       :   "", // CHAR (20) Order Acknowledgment Number
  ACKN_REQD                        :   "", // CHAR (1) Order Acknowledgment Requirement
  ADDRESS                          :   "", // CHAR (10) ALPHA=ALPHA Address
  AGMT_ITEM                        :   "", // NUMC (5) Item number of principal purchase agreement
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement
  ALLOC_TBL                        :   "", // CHAR (10) ALPHA=ALPHA Allocation Table Number
  AT_ITEM                          :   "", // NUMC (5) Item number of allocation table
  AT_RELEV                         :   "", // CHAR (1) Relevant to Allocation Table
  CONV_DEN1                        :    0, // DEC (5) Denominator for Conv. of Order Price Unit into Order Unit
  CONV_NUM1                        :    0, // DEC (5) Numerator for Conversion of Order Price Unit into Order Unit
  DELETE_IND                       :   "", // CHAR (1) Deletion indicator in purchasing document
  DISP_QUAN                        :  0.0, // QUAN (13.3) PO quantity: total of all sched. lines for display purposes
  DISTRIB                          :   "", // CHAR (1) Distribution indicator for multiple account assignment
  INFO_REC                         :   "", // CHAR (10) ALPHA=ALPHA Number of purchasing info record
  ITEM_CAT                         :   "", // CHAR (1) Item category in purchasing document
  ITEM_CAT_EXT                     :   "", // CHAR (1) Item category in purchasing document
  KANBAN_IND                       :   "", // CHAR (1) Kanban Indicator
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
  NET_PRICE                        :    0, // DEC (23.4) Net price in purchasing document (in document currency)
  NO_MORE_GR                       :   "", // CHAR (1) "Delivery Completed" Indicator
  NO_ROUNDING                      :   "", // CHAR (1) Indicator: suppress rounding in purchase order item
  ORDERPR_UN                       :   "", // UNIT (3) ALPHA=CUNIT Order Price Unit (Purchasing)
  ORDERPR_UN_ISO                   :   "", // CHAR (3) ISO code for purchase order price unit
  PART_INV                         :   "", // CHAR (1) Partial invoice indicator
  PCKG_NO                          :   "", // NUMC (10) Package number
  PLANT                            :   "", // CHAR (4) Plant
  PLAN_DEL                         :    0, // DEC (3) Planned Delivery Time in Days
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  PO_PRICE                         :   "", // CHAR (1) Indicator: adopt price - do not use info record
  PO_UNIT_ISO                      :   "", // CHAR (3) Order unit in ISO code
  PREQ_NAME                        :   "", // CHAR (12) Name of requisitioner/requester
  PRICE_UNIT                       :    0, // DEC (5) Price unit
  PROMOTION                        :   "", // CHAR (10) ALPHA=ALPHA Promotion
  PR_CLOSED                        :   "", // CHAR (1) Purchase requisition closed
  PUR_MAT                          :   "", // CHAR (18) ALPHA=MATN1 Material number
  PUR_MAT_EXTERNAL                 :   "", // CHAR (40) ALPHA=MATNL Long Material Number for PUR_MAT Field
  PUR_MAT_GUID                     :   "", // CHAR (32) External GUID for PUR_MAT Field
  PUR_MAT_LONG                     :   "", // CHAR (40) Material Number (40 Characters, Technical Requirement)
  PUR_MAT_VERSION                  :   "", // CHAR (10) ALPHA=MATNW Version Number for PUR_MAT Field
  QUAL_INSP                        :   "", // CHAR (1) Stock Type
  REQ_SEGMENT                      :   "", // CHAR (16) Requirement Segment
  RET_ITEM                         :   "", // CHAR (1) Returns Item
  SHIPPING                         :   "", // CHAR (2) Shipping Instructions
  SHORT_TEXT                       :   "", // CHAR (40) Short Text
  STK_SEGMENT                      :   "", // CHAR (16) Stock Segment
  STORE_LOC                        :   "", // CHAR (4) Storage location
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  TRACKINGNO                       :   "", // CHAR (10) Requirement Tracking Number
  UNIT                             :   "", // UNIT (3) ALPHA=CUNIT Order unit
  VAL_TYPE                         :   "", // CHAR (10) Valuation type
  VEND_MAT                         :   "", // CHAR (22) Material number used by vendor
};
/* eslint-enable key-spacing */

// RETURN BAPIRETURN Return Messages

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
