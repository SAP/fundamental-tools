//
// BAPI_PO_GETITEMSREL exception: 0  struct: 0  table: 3  var: 3
//
// abap api
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// ITEMS_FOR_RELEASE :          'X', // CHAR (1) Indicator: Display Purchase Orders Awaiting Release Only
// REL_CODE          :           "", // CHAR (2) Release Code SU3=BFC
// REL_GROUP         :           "", // CHAR (2) Release Group

// TABLE PARAMETERS

PO_HEADERS           :           [], // BAPIEKKOL PO Header Data
PO_ITEMS             :           [], // BAPIEKPOC Purchase Order Items
// RETURN            :           [], // BAPIRETURN Return Messages
};

const result = await client.call("BAPI_PO_GETITEMSREL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIEKKOL  PO Header Data
const PO_HEADERS = [];

// prettier-ignore
const PO_HEADERS_line = {
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

// BAPIEKPOC  Purchase Order Items
const PO_ITEMS = [];

// prettier-ignore
const PO_ITEMS_line = {
  PREQ_NAME                        :   "", // CHAR (12) Name of requisitioner/requester
};

// BAPIRETURN  Return Messages
const RETURN = [];

// prettier-ignore
const RETURN_line = {
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
