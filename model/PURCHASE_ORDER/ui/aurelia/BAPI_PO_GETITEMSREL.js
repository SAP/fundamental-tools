//
// BAPI_PO_GETITEMSREL 0.3
//

BAPI_PO_GETITEMSREL = {

  // INPUT PARAMETERS

  // ITEMS_FOR_RELEASE: "X",                  // CHAR(1)    BAPIMMPARA SELECTION           Indicator: Display Purchase Orders Awaiting Release Only
  // REL_CODE: "",                            // CHAR(2)    BAPIMMPARA REL_CODE            Release Code
  // REL_GROUP: "",                           // CHAR(2)    BAPIMMPARA REL_GROUP           Release Group

  // TABLE PARAMETERS

  PO_HEADERS: [],                          // BAPIEKKOL : PO Header Data 
  PO_ITEMS: [],                            // BAPIEKPOC : Purchase Order Items
  RETURN: []                               // BAPIRETURN : Return Messages
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
  AGREEMENT                     : '',  // Number of principal purchase agreement
  APPLIC_BY                     : '',  // Closing Date for Applications
  BIDINV_NO                     : '',  // Bid invitation number
  BINDG_PER                     : '',  // Binding Period for Quotation
  CASH_DISC1                    : 0,  // Cash discount percentage 1
  CASH_DISC2                    : 0,  // Cash Discount Percentage 2
  CNTRL_IND                     : '',  // Control indicator for purchasing document type
  COLL_NO                       : '',  // Collective Number
  COMPL_DLV                     : '',  // Complete Delivery Stipulated for Each Purchase Order
  CO_CODE                       : '',  // Company Code
  CREATED_BY                    : '',  // Name of Person who Created the Object
  CREATED_ON                    : '',  // Date on Which Record Was Created
  CURRENCY                      : '',  // Currency Key
  CURRENCY_ISO                  : '',  // ISO Currency Code
  CUSTOMER                      : '',  // Customer Number
  DELETE_IND                    : '',  // Deletion indicator in purchasing document
  DIFF_INV                      : '',  // Different Invoicing Party
  DOC_CAT                       : '',  // Purchasing Document Category
  DOC_COND                      : '',  // Number of the document condition
  DOC_DATE                      : '',  // Purchasing Document Date
  DOC_TYPE                      : '',  // Purchasing Document Type
  DSCNT1_TO                     : 0,  // Cash discount days 1
  DSCNT2_TO                     : 0,  // Cash discount days 2
  DSCNT3_TO                     : 0,  // Cash discount days 3
  EXCH_RATE                     : 0,  // Direct Quoted Exchange Rate
  EXCH_RATE_CM                  : 0,  // Indirect Quoted Exchange Rate
  EXPORT_NO                     : '',  // Number of foreign trade data in MM and SD documents
  EX_RATE_FX                    : '',  // Indicator: Fixing of Exchange Rate
  GR_MESSAGE                    : '',  // Indicator: Goods Receipt Message
  HOLD                          : '',  // Purchase order not yet complete
  INCOTERMS1                    : '',  // Incoterms (Part 1)
  INCOTERMS2                    : '',  // Incoterms (Part 2)
  ITEM_INTVL                    : '',  // Item Number Interval
  LANGUAGE                      : '',  // Language Key
  LAST_ITEM                     : '',  // Last Item Number
  LOGSYSTEM                     : '',  // Logical System
  MAST_COND                     : '',  // Document with time-dependent conditions
  OUR_REF                       : '',  // Our Reference
  PMNTTRMS                      : '',  // Terms of Payment Key
  PO_NUMBER                     : '',  // Purchasing Document Number
  PROCEDURE                     : '',  // Procedure (Pricing, Output Control, Acct. Det., Costing,...)
  PURCH_ORG                     : '',  // Purchasing organization
  PUR_GROUP                     : '',  // Purchasing Group
  QUOTATION                     : '',  // Quotation Number
  QUOT_DATE                     : '',  // Quotation Submission Date
  QUOT_DEAD                     : '',  // Deadline for Submission of Bid/Quotation
  RCVG_VEND                     : '',  // Field not used
  REF_1                         : '',  // Your Reference
  REJ_REASON                    : '',  // Reason for rejection of quotations and sales orders
  REL_GROUP                     : '',  // Release group
  REL_IND                       : '',  // Release Indicator: Purchasing Document
  REL_STATUS                    : '',  // Release State
  REL_STRAT                     : '',  // Release Strategy
  SALES_PERS                    : '',  // Responsible Salesperson at Vendor's Office
  SCHED_IND                     : '',  // Indicator for scheduling agreement release documentation
  STATUS                        : '',  // Status of Purchasing Document
  SUBITEMINT                    : '',  // Item Number Interval for Subitems
  SUBJ_TO_R                     : '',  // Release Not Yet Completely Effected
  SUPPL_PLNT                    : '',  // Supplying (issuing) plant in case of stock transport order
  SUPPL_VEND                    : '',  // Supplying Vendor
  TARGET_VAL                    : 0,  // Cumulative Planned Value
  TAXR_CNTRY                    : '',  // Country for Tax Return
  TELEPHONE                     : '',  // Vendor's Telephone Number
  UPDATE_GRP                    : '',  // Update group for statistics update
  VENDOR                        : '',  // Vendor's account number
  VEND_NAME                     : '',  // Name 1
  VPER_END                      : '',  // End of Validity Period
  VPER_START                    : '',  // Start of Validity Period
  WARRANTY                      : ''   // Warranty Date
};
/* eslint-enable key-spacing */

// PO_ITEMS BAPIEKPOC Purchase Order Items

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEMS = {
  ACCTASSCAT                    : '',  // Account assignment category
  ACKNOWL_NO                    : '',  // Order Acknowledgment Number
  ACKN_REQD                     : '',  // Order Acknowledgment Requirement
  ADDRESS                       : '',  // Address
  AGMT_ITEM                     : '',  // Item number of principal purchase agreement
  AGREEMENT                     : '',  // Number of principal purchase agreement
  ALLOC_TBL                     : '',  // Allocation Table Number
  AT_ITEM                       : '',  // Item number of allocation table
  AT_RELEV                      : '',  // Relevant to Allocation Table
  CONV_DEN1                     : 0,  // Denominator for Conv. of Order Price Unit into Order Unit
  CONV_NUM1                     : 0,  // Numerator for Conversion of Order Price Unit into Order Unit
  DELETE_IND                    : '',  // Deletion indicator in purchasing document
  DISP_QUAN                     : 0,  // PO quantity: total of all sched. lines for display purposes
  DISTRIB                       : '',  // Distribution indicator for multiple account assignment
  INFO_REC                      : '',  // Number of purchasing info record
  ITEM_CAT                      : '',  // Item category in purchasing document
  ITEM_CAT_EXT                  : '',  // Item category in purchasing document
  KANBAN_IND                    : '',  // Kanban Indicator
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
  NET_PRICE                     : 0,  // Net price in purchasing document (in document currency)
  NO_MORE_GR                    : '',  // "Delivery Completed" Indicator
  NO_ROUNDING                   : '',  // Indicator: suppress rounding in purchase order item
  ORDERPR_UN                    : '',  // Order Price Unit (Purchasing)
  ORDERPR_UN_ISO                : '',  // ISO code for purchase order price unit
  PART_INV                      : '',  // Partial invoice indicator
  PCKG_NO                       : '',  // Package number
  PLANT                         : '',  // Plant
  PLAN_DEL                      : 0,  // Planned Delivery Time in Days
  PO_ITEM                       : '',  // Item Number of Purchasing Document
  PO_NUMBER                     : '',  // Purchasing Document Number
  PO_PRICE                      : '',  // Indicator: adopt price - do not use info record
  PO_UNIT_ISO                   : '',  // Order unit in ISO code
  PREQ_NAME                     : '',  // Name of requisitioner/requester
  PRICE_UNIT                    : 0,  // Price unit
  PROMOTION                     : '',  // Promotion
  PR_CLOSED                     : '',  // Purchase requisition closed
  PUR_MAT                       : '',  // Material number
  PUR_MAT_EXTERNAL              : '',  // Long Material Number for PUR_MAT Field
  PUR_MAT_GUID                  : '',  // External GUID for PUR_MAT Field
  PUR_MAT_LONG                  : '',  // Material Number (40 Characters, Technical Requirement)
  PUR_MAT_VERSION               : '',  // Version Number for PUR_MAT Field
  QUAL_INSP                     : '',  // Stock Type
  REQ_SEGMENT                   : '',  // Requirement Segment
  RET_ITEM                      : '',  // Returns Item
  SHIPPING                      : '',  // Shipping Instructions
  SHORT_TEXT                    : '',  // Short Text
  STK_SEGMENT                   : '',  // Stock Segment
  STORE_LOC                     : '',  // Storage location
  TAX_CODE                      : '',  // Tax on sales/purchases code
  TRACKINGNO                    : '',  // Requirement Tracking Number
  UNIT                          : '',  // Order unit
  VAL_TYPE                      : '',  // Valuation type
  VEND_MAT                      : ''   // Material number used by vendor
};
/* eslint-enable key-spacing */

// RETURN BAPIRETURN Return Messages

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
