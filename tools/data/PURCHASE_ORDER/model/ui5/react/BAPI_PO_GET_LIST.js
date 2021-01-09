//
// BAPI_PO_GET_LIST 0.2
//

BAPI_PO_GET_LIST = {

  // INPUT PARAMETERS

  ITEMS_FOR_RELEASE: '',                   // CHAR(1)    BAPIMMPARA SELECTION           Indicator: Display Purchase Orders Awaiting Release Only
  REL_CODE: '',                            // CHAR(2)    BAPIMMPARA REL_CODE            Release Code
  REL_GROUP: '',                           // CHAR(2)    BAPIMMPARA REL_GROUP           Release Group

  // TABLE PARAMETERS

  PO_ADDRESSES: [],                        // BAPIEKAN : Vendor Address for SAP Releases < 4.0A
  PO_ADDRESSES_NEW: [],                    // BAPIADDRESS : Vendor Address for SAP Releases >= 4.0A
  PO_HEADERS: [],                          // BAPIEKKO : PO Header Data  
  PO_ITEMS: [],                            // BAPIEKPO : Purchase Order Items
  RETURN: []                               // BAPIRETURN : Processing Errors That Occurred
};

//
// INPUT PARAMETERS
//

//
// TABLE PARAMETERS
//

// PO_ADDRESSES BAPIEKAN Vendor Address for SAP Releases < 4.0A

/* eslint-disable key-spacing */
// prettier-ignore
PO_ADDRESSES = {
  CITY                          : '',  // City
  CNTRY_KEY                     : '',  // Country Key
  DATA_LINE                     : '',  // Data communication line no.
  FAX_NUMBER                    : '',  // Fax Number
  NAME1                         : '',  // Name 1
  NAME2                         : '',  // Name 1
  NAME3                         : '',  // Name 1
  NAME4                         : '',  // Name 1
  PO_BOX                        : '',  // PO Box
  PO_NUMBER                     : '',  // Purchasing Document Number
  REGION                        : '',  // Region (State, Province, County)
  STREET                        : '',  // Street and House Number
  TELEBOX                       : '',  // Telebox number
  TELETEXT                      : '',  // Teletex number
  TELEX                         : '',  // Telex number
  TITLE                         : '',  // Title
  ZIP_CODE                      : '',  // Postal Code
  ZIP_POBOX                     : ''   // P.O. Box Postal Code
};
/* eslint-enable key-spacing */

// PO_ADDRESSES_NEW BAPIADDRESS Vendor Address for SAP Releases >= 4.0A

/* eslint-disable key-spacing */
// prettier-ignore
PO_ADDRESSES_NEW = {
  ADDRESS_ID                    : '',  // (Not supported) Physical address ID
  ADDRHANDLE                    : '',  // Handle for Creating Addresses/Persons (Bus. Addr. Services)
  ADDRNUMBER                    : '',  // Address number
  ADDRORIGIN                    : '',  // (Not Supported) Address Data Source (Key)
  BUILDING                      : '',  // old: building (no. or abbreviation)
  BUILD_LONG                    : '',  // Building (Number or Code)
  CHCKSTATUS                    : '',  // City file test status
  CITY1                         : '',  // City
  CITY2                         : '',  // District
  CITYP_CODE                    : '',  // District code for City and Street file
  CITY_CODE                     : '',  // City code for city/street file
  CITY_CODE2                    : '',  // City PO box code (City file)
  COUNTRY                       : '',  // Country Key
  DATE                          : '',  // Date referred to
  DATE_FROM                     : '',  // Valid-from date - in current Release only 00010101 possible
  DATE_TO                       : '',  // Valid-to date in current Release only 99991231 possible
  DEFLT_COMM                    : '',  // Communication Method (Key) (Business Address Services)
  EXTENSION1                    : '',  // Extension (only for data conversion) (data line/telebox)
  EXTENSION2                    : '',  // Extension (only for data conversion) (data line/telebox)
  FAX_EXTENS                    : '',  // First fax no.: extension
  FAX_NUMBER                    : '',  // First fax no.: dialling code+number
  FLOOR                         : '',  // Floor in building
  HOUSE_NUM1                    : '',  // House Number
  HOUSE_NUM2                    : '',  // House number supplement
  HOUSE_NUM3                    : '',  // (Not supported) House Number Range
  LANGU                         : '',  // Language Key
  LOCATION                      : '',  // Street 5
  NAME1                         : '',  // Name 1
  NAME2                         : '',  // Name 2
  NAME3                         : '',  // Name 3
  NAME4                         : '',  // Name 4
  NAME_CO                       : '',  // c/o name
  NAME_TXT                      : '',  // Converted name field (with form of address)
  NATION                        : '',  // Version ID for International Addresses
  POSTALAREA                    : '',  // (Not Supported) Post Delivery District
  POST_CODE1                    : '',  // City postal code
  POST_CODE2                    : '',  // PO Box Postal Code
  POST_CODE3                    : '',  // Company Postal Code (for Large Customers)
  PO_BOX                        : '',  // PO Box
  PO_BOX_CTY                    : '',  // PO box country
  PO_BOX_LOC                    : '',  // PO Box city
  PO_BOX_NUM                    : '',  // Flag: PO Box Without Number
  PO_BOX_REG                    : '',  // Region for PO Box (Country, State, Province, ...)
  REGION                        : '',  // Region (State, Province, County)
  REMARK                        : '',  // Address notes
  ROOMNUMBER                    : '',  // Room or Appartment Number
  SORT1                         : '',  // Search Term 1
  SORT2                         : '',  // Search Term 2
  SORT_PHN                      : '',  // (Not Supported) Phonetic Search Sort Field
  STREET                        : '',  // Street
  STREETABBR                    : '',  // (Not Supported) Abbreviation of Street Name
  STREETCODE                    : '',  // Street Number for City/Street File
  STR_SUPPL1                    : '',  // Street 2
  STR_SUPPL2                    : '',  // Street 3
  TAXJURCODE                    : '',  // Tax Jurisdiction
  TEL_EXTENS                    : '',  // First Telephone No.: Extension
  TEL_NUMBER                    : '',  // First telephone no.: dialling code+number
  TIME_ZONE                     : '',  // Address time zone
  TITLE                         : '',  // Form-of-Address Key
  TRANSPZONE                    : ''   // Transportation zone to or from which the goods are delivered
};
/* eslint-enable key-spacing */

// PO_HEADERS BAPIEKKO PO Header Data

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
  VPER_END                      : '',  // End of Validity Period
  VPER_START                    : '',  // Start of Validity Period
  WARRANTY                      : ''   // Warranty Date
};
/* eslint-enable key-spacing */

// PO_ITEMS BAPIEKPO Purchase Order Items

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEMS = {
  ACCTASSCAT                    : '',  // Account assignment category
  ACKNOWL_NO                    : '',  // Order Acknowledgment Number
  ACKN_REQD                     : '',  // Order Acknowledgment Requirement
  ADDRESS                       : '',  // Address
  ADDRESS2                      : '',  // Number of delivery address
  ADVANCE                       : '',  // Advance procurement: project stock
  AGMT_ITEM                     : '',  // Item number of principal purchase agreement
  AGRCUMQTY                     : 0,  // Agreed Cumulative Quantity
  AGREEMENT                     : '',  // Number of principal purchase agreement
  ALLOC_TBL                     : '',  // Allocation Table Number
  AT_ITEM                       : '',  // Item number of allocation table
  AT_RELEV                      : '',  // Relevant to Allocation Table
  BASE_UNIT                     : '',  // Base Unit of Measure
  BASE_UOM_ISO                  : '',  // Base unit of measure in ISO code
  BA_PARTNER                    : '',  // Business area reported to the partner
  BOM_EXPL                      : '',  // Indicator: BOM explosion
  BUDGET_PERIOD                 : '',  // FM: Budget Period
  CERT_TYPE                     : '',  // Certificate Type
  CHANGED_ON                    : '',  // Purchasing Document Item Change Date
  CMMT_ITEM                     : '',  // Commitment Item
  CMMT_ITEM_LONG                : '',  // Commitment item
  COMMENT                       : '',  // Internal Comment on Quotation
  COMMITMENT                    : '',  // Item affects commitments
  COND_GROUP                    : '',  // Condition Group with Vendor
  CONFIG_ORG                    : '',  // Origin of Configuration
  CONF_CTRL                     : '',  // Confirmation Control Key
  CONF_MATL                     : '',  // Cross-Plant Configurable Material
  CONF_MATL_EXTERNAL            : '',  // Long Material Number for CONF_MATL field
  CONF_MATL_GUID                : '',  // External GUID for CONF_MATL Field
  CONF_MATL_LONG                : '',  // Cross-Plant Configurable Material (40 ch tech. necessary)
  CONF_MATL_VERSION             : '',  // Version Number for Field CONF_MATL
  CONSUMPT                      : '',  // Consumption posting
  CONV_DEN1                     : 0,  // Denominator for Conv. of Order Price Unit into Order Unit
  CONV_DEN2                     : 0,  // Denominator for Conversion of Order Unit to Base Unit
  CONV_NUM1                     : 0,  // Numerator for Conversion of Order Price Unit into Order Unit
  CONV_NUM2                     : 0,  // Numerator for Conversion of Order Unit to Base Unit
  CO_CODE                       : '',  // Company Code
  CTR_KEY_QM                    : '',  // Control Key for Quality Management in Procurement
  CUSTOMER                      : '',  // Customer
  DELETE_IND                    : '',  // Deletion indicator in purchasing document
  DEL_COMPL                     : '',  // "Delivery Completed" Indicator
  DEL_TYP_RT                    : '',  // Delivery Type for Returns to Vendors
  DISTRIB                       : '',  // Distribution indicator for multiple account assignment
  DOC_CAT                       : '',  // Purchasing document category
  EAN_UPC                       : '',  // International Article Number (EAN/UPC)
  EFF_VALUE                     : 0,  // Effective value of item
  ERS                           : '',  // Evaluated Receipt Settlement (ERS)
  EST_PRICE                     : '',  // Indicator: Estimated Price
  EXCLUSION                     : '',  // Exclusion in Outline Agreement Item with Material Class
  FINAL_INV                     : '',  // Final Invoice Indicator
  FIRM_ZONE                     : 0,  // Firm Zone (Go-Ahead for Production)
  FUNC_AREA_LONG                : '',  // Functional Area
  FUND                          : '',  // Fund
  FUNDS_CTR                     : '',  // Funds Center
  GRANT_NBR                     : '',  // Grant
  GROSS_WGHT                    : 0,  // Gross weight
  GROS_VALUE                    : 0,  // Gross order value in PO currency
  GRSETTFROM                    : '',  // Start Date for GR-Based Settlement
  GR_BASEDIV                    : '',  // Indicator: GR-Based Invoice Verification
  GR_IND                        : '',  // Goods Receipt Indicator
  GR_NON_VAL                    : '',  // Goods Receipt, Non-Valuated
  GR_PR_TIME                    : 0,  // Goods receipt processing time in days
  GR_TO_DATE                    : '',  // Latest Possible Goods Receipt
  HL_ITEM                       : '',  // Higher-Level Item in Purchasing Documents
  INCOTERMS1                    : '',  // Incoterms (Part 1)
  INCOTERMS2                    : '',  // Incoterms (Part 2)
  INFO_REC                      : '',  // Number of purchasing info record
  INFO_UPD                      : '',  // Indicator: Update Info Record
  INT_OBJ_NO                    : '',  // Configuration (internal object number)
  IR_IND                        : '',  // Invoice receipt indicator
  ITEM_CAT                      : '',  // Item category in purchasing document
  ITEM_CAT_EXT                  : '',  // Item category in purchasing document
  KANBAN_IND                    : '',  // Kanban Indicator
  LAST_TRANS                    : '',  // Last Transmission
  MANUF_PROF                    : '',  // Mfr part profile
  MANU_MAT                      : '',  // Manufacturer Part Number
  MATERIAL                      : '',  // Material Number
  MATERIAL_EXTERNAL             : '',  // Long Material Number for MATERIAL Field
  MATERIAL_GUID                 : '',  // External GUID for MATERIAL Field
  MATERIAL_LONG                 : '',  // Material Number (40 Characters, needed f. technical reasons)
  MATERIAL_VERSION              : '',  // Version Number for MATERIAL Field
  MAT_CAT                       : '',  // Material Category
  MAT_GRP                       : '',  // Material Group
  MAT_TYPE                      : '',  // Material type
  MAX_CMG                       : 0,  // Maximum Cumulative Material Go-Ahead Quantity
  MAX_CPGO                      : 0,  // Maximum Cumulative Production Go-Ahead Quantity
  MFR_NO                        : '',  // Manufacturer number
  MFR_NO_EXT                    : '',  // External manufacturer code name or number
  ML_AKT                        : '',  // Material ledger activated at material level
  NET_PRICE                     : 0,  // Net price in purchasing document (in document currency)
  NET_VALUE                     : 0,  // Net order value in PO currency
  NET_WEIGHT                    : 0,  // Net Weight
  NOND_ITAX                     : 0,  // Non-deductible input tax
  NOT_CHGBL                     : '',  // Quality inspection indicator cannot be changed
  NO_C_DISC                     : '',  // Item Does Not Qualify for Cash Discount
  NUM_REMIND                    : 0,  // Number of Reminders/Expediters
  ORDERPR_UN                    : '',  // Order Price Unit (Purchasing)
  ORDERPR_UN_ISO                : '',  // ISO code for purchase order price unit
  ORD_REAS                      : '',  // Reason for Ordering
  OUTL_TARGV                    : 0,  // Target Value for Outline Agreement in Document Currency
  OVERDELTOL                    : 0,  // Overdelivery Tolerance Limit
  PARTNER_PC                    : '',  // Partner Profit Center
  PART_INV                      : '',  // Partial invoice indicator
  PCKG_NO                       : '',  // Package number
  PLANT                         : '',  // Plant
  PLAN_DEL                      : 0,  // Planned Delivery Time in Days
  POINTS                        : 0,  // Number of Points
  POINTS_UN                     : '',  // Points unit
  POINTS_UN_ISO                 : '',  // ISO code for points unit
  PO_ITEM                       : '',  // Item Number of Purchasing Document
  PO_NUMBER                     : '',  // Purchasing Document Number
  PO_UNIT_ISO                   : '',  // Order unit in ISO code
  PRDTE_CTRL                    : '',  // Material freight group
  PREQ_ITEM                     : '',  // Item number of purchase requisition
  PREQ_NO                       : '',  // Purchase requisition number
  PRICE_CTR                     : '',  // Price Determination (Pricing) Date Control
  PRICE_DATE                    : '',  // Date of Price Determination
  PRICE_UNIT                    : 0,  // Price unit
  PRINT_REL                     : '',  // Indicator: Print-relevant schedule lines exist
  PRIOR_VEND                    : '',  // Prior Vendor
  PRNT_PRICE                    : '',  // Price Printout
  PROFIT_CTR                    : '',  // Profit Center
  PROMOTION                     : '',  // Promotion
  PTR_ASS_BA                    : '',  // assumed business area of the business partner
  PUR_MAT                       : '',  // Material number
  PUR_MAT_EXTERNAL              : '',  // Long Material Number for PUR_MAT Field
  PUR_MAT_GUID                  : '',  // External GUID for PUR_MAT Field
  PUR_MAT_LONG                  : '',  // Material Number (40 Characters, Technical Requirement)
  PUR_MAT_VERSION               : '',  // Version Number for PUR_MAT Field
  QUAL_INSP                     : '',  // Stock Type
  QUANTITY                      : 0,  // Purchase Order Quantity
  QUOTAUSAGE                    : '',  // Quota arrangement usage
  QUOT_DEAD                     : '',  // Deadline for Submission of Bid/Quotation
  RECON_DATE                    : '',  // Reconciliation date for agreed cumulative quantity
  REJ_IND                       : '',  // Rejection Indicator
  RELORD_QTY                    : 0,  // Standard release order quantity
  REMINDER1                     : 0,  // Number of Days for First Reminder/Expediter
  REMINDER2                     : 0,  // Number of Days for Second Reminder/Expediter
  REMINDER3                     : 0,  // Number of Days for Third Reminder/Expediter
  REMSHLIFE                     : 0,  // Minimum Remaining Shelf Life
  RET_ITEM                      : '',  // Returns Item
  REV_LEV                       : '',  // Revision level
  RFQ                           : '',  // RFQ Number
  RFQ_ITEM                      : '',  // Item Number of RFQ
  SC_VENDOR                     : '',  // Subcontracting vendor
  SEASON_TY                     : '',  // Season Category
  SEASON_YR                     : '',  // Season Year
  SER_NO                        : '',  // Sequential Number
  SETRESERNO                    : '',  // Settlement reservation number
  SETTLITMNO                    : '',  // Item number of the settlement reservation
  SETT_GRP1                     : '',  // Settlement Group 1 (Purchasing)
  SETT_GRP_2                    : '',  // Settlement Group 2 (Rebate Settlement, Purchasing)
  SETT_GRP_3                    : '',  // Settlement Group 3 (Rebate Settlement, Purchasing)
  SETT_ITEM                     : '',  // Item Relevant to Subsequent (Period-End Rebate) Settlement
  SHIPPING                      : '',  // Shipping Instructions
  SHORT_TEXT                    : '',  // Short Text
  SI_CAT                        : '',  // Subitem Category, Purchasing Document
  SPEC_STOCK                    : '',  // Special Stock Indicator
  SPSTCK_PHY                    : '',  // Special stock indicator for physical stock transfer
  STATISTIC                     : '',  // Item is statistical
  STATUS                        : '',  // RFQ status
  STORE_LOC                     : '',  // Storage location
  SUBITM_KEY                    : '',  // Processing key for sub-items
  SUBTOTAL_1                    : 0,  // Condition subtotal 1 from calculation schema
  SUBTOTAL_2                    : 0,  // Condition subtotal 2 from calculation schema
  SUBTOTAL_3                    : 0,  // Condition subtotal 3 from calculation schema
  SUBTOTAL_4                    : 0,  // Condition subtotal 4 from calculation schema
  SUBTOTAL_5                    : 0,  // Condition subtotal 5 from calculation schema
  SUBTOTAL_6                    : 0,  // Condition subtotal 6 from calculation schema
  SUB_ITEMS                     : '',  // Subitems Exist
  SUB_RANGE                     : '',  // Vendor Subrange
  SUPPL_VEND                    : '',  // Vendor to be supplied/who is to receive delivery
  TARGET_QTY                    : 0,  // Target Quantity
  TAX_CODE                      : '',  // Tax on sales/purchases code
  TAX_JUR_CD                    : '',  // Tax Jurisdiction
  TRACKINGNO                    : '',  // Requirement Tracking Number
  TRADE_OFF                     : 0,  // Trade-Off Zone (Go-Ahead for Materials Procurement)
  TRANS_TIME                    : '',  // Time
  UNDER_TOL                     : 0,  // Underdelivery Tolerance Limit
  UNIT                          : '',  // Order unit
  UNLIMITED                     : '',  // Indicator: Unlimited Overdelivery Allowed
  UPDATE_GRP                    : '',  // Update group for statistics update
  VAL_CAT                       : '',  // Valuation Category
  VAL_TYPE                      : '',  // Valuation type
  VEND_MAT                      : '',  // Material number used by vendor
  VOLUME                        : 0,  // Volume
  VOLUMEUNIT                    : '',  // Volume unit
  VOLUMEUNIT_ISO                : '',  // Volume unit in ISO code
  WEIGHTUNIT                    : '',  // Unit of Weight
  WEIGHTUNIT_ISO                : ''   // ISO code for unit of weight
};
/* eslint-enable key-spacing */

// RETURN BAPIRETURN Processing Errors That Occurred

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
