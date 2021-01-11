//
// BAPI_PO_GETDETAIL 0.3
//

BAPI_PO_GETDETAIL = {

  // INPUT PARAMETERS

  //ACCOUNT_ASSIGNMENT             : SPACE, // CHAR (1) Also Provide Account Assignment Data
  //CONFIRMATIONS                  : SPACE, // CHAR (1) Also Provide Confirmations
  //EXTENSIONS                     : SPACE, // CHAR (1) Also Provide Customer's Own Fields
  //HEADER_TEXTS                   : SPACE, // CHAR (1) Also Provide Header Texts
  //HISTORY                        : SPACE, // CHAR (1) Also Provide PO History
  //ITEMS                          :  "X", // CHAR (1) Also Provide Item Data
  //ITEM_TEXTS                     : SPACE, // CHAR (1) Also Provide Item Texts
  PURCHASEORDER                    :   "", // CHAR (10) ALPHA=ALPHA Purchase Order Number
  //SCHEDULES                      : SPACE, // CHAR (1) Also Provide Schedule Lines
  //SERVICES                       : SPACE, // CHAR (1) Also Provide Services and Limits
  //SERVICE_TEXTS                  : SPACE, // CHAR (1) Also Provide Service Texts

  // OUTPUT PARAMETERS

  PO_ADDRESS                       :   {}, // BAPIADDRESS Ordering Address Data
  PO_HEADER                        :   {}, // BAPIEKKOL PO Header Data

  // TABLE PARAMETERS

  //EXTENSIONOUT                   :   [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
  //PO_HEADER_TEXTS                :   [], // BAPIEKKOTX PO Header Texts
  //PO_ITEMS                       :   [], // BAPIEKPO Purchase Order Items
  //PO_ITEM_ACCOUNT_ASSIGNMENT     :   [], // BAPIEKKN Account Assignment Data for Item
  //PO_ITEM_CONFIRMATIONS          :   [], // BAPIEKES Confirmations for Item
  //PO_ITEM_CONTRACT_LIMITS        :   [], // BAPIESUC Limits with Contract Reference
  //PO_ITEM_HISTORY                :   [], // BAPIEKBE PO History for Item
  //PO_ITEM_HISTORY_TOTALS         :   [], // BAPIEKBES PO History for Item: Totals
  //PO_ITEM_LIMITS                 :   [], // BAPIESUH Limits
  //PO_ITEM_SCHEDULES              :   [], // BAPIEKET Schedule Lines for Item
  //PO_ITEM_SERVICES               :   [], // BAPIESLL Services
  //PO_ITEM_SRV_ACCASS_VALUES      :   [], // BAPIESKL Value/Link to Service Account Assignment
  //PO_ITEM_TEXTS                  :   [], // BAPIEKPOTX Texts for Item
  //PO_SERVICES_TEXTS              :   [], // BAPIESLLTX Long Texts for Service Line
  //RETURN                         :   [], // BAPIRETURN Return Messages
};

//
// INPUT PARAMETERS
//

//
// OUTPUT PARAMETERS
//

// PO_ADDRESS BAPIADDRESS Ordering Address Data

/* eslint-disable key-spacing */
// prettier-ignore
PO_ADDRESS = {
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

// PO_HEADER BAPIEKKOL PO Header Data

/* eslint-disable key-spacing */
// prettier-ignore
PO_HEADER = {
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

//
// TABLE PARAMETERS
//

// EXTENSIONOUT BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT

/* eslint-disable key-spacing */
// prettier-ignore
EXTENSIONOUT = {
  STRUCTURE                     : '',  // Structure name of  BAPI table extension
  VALUEPART1                    : '',  // Data part of BAPI extension parameter
  VALUEPART2                    : '',  // Data part of BAPI extension parameter
  VALUEPART3                    : '',  // Data part of BAPI extension parameter
  VALUEPART4                    : ''   // Data part of BAPI extension parameter
};
/* eslint-enable key-spacing */

// PO_HEADER_TEXTS BAPIEKKOTX PO Header Texts

/* eslint-disable key-spacing */
// prettier-ignore
PO_HEADER_TEXTS = {
  PO_NUMBER                     : '',  // Purchasing Document Number
  TEXT_FORM                     : '',  // Tag column
  TEXT_ID                       : '',  // Text ID
  TEXT_LINE                     : ''   // Text Line
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

// PO_ITEM_ACCOUNT_ASSIGNMENT BAPIEKKN Account Assignment Data for Item

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_ACCOUNT_ASSIGNMENT = {
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
  FUNDS_RES                     : '',  // Document number for earmarked funds
  GRANT_NBR                     : '',  // Grant
  GR_RCPT                       : '',  // Goods recipient
  G_L_ACCT                      : '',  // G/L Account Number
  NETWORK                       : '',  // Network Number for Account Assignment
  ORDER_NO                      : '',  // Order Number
  PART_ACCT                     : '',  // Partner account number
  PO_ITEM                       : '',  // Item Number of Purchasing Document
  PROFIT_CTR                    : '',  // Profit Center
  PROF_SEGM                     : '',  // Profitability Segment Number (CO-PA)
  PROJ_EXT                      : '',  // Project definition
  QUANTITY                      : 0,  // Quantity
  REC_IND                       : '',  // Recovery Indicator
  REF_DATE                      : '',  // Reference date for settlement
  RES_ITEM                      : '',  // Earmarked Funds: Document Item
  RL_EST_KEY                    : '',  // Internal Key for Real Estate Object
  ROUTING_NO                    : '',  // Routing number of operations in the order
  SCHED_LINE                    : '',  // Schedule line
  SDOC_ITEM                     : '',  // Sales Document Item
  SD_DOC                        : '',  // Sales and Distribution Document Number
  SERIAL_NO                     : '',  // Sequential Number of Account Assignment
  SUB_NUMBER                    : '',  // Asset Subnumber
  TO_COSTCTR                    : '',  // Posting to cost center?
  TO_ORDER                      : '',  // Post To Order
  TO_PROJECT                    : '',  // Post to project
  UNLOAD_PT                     : '',  // Unloading Point
  WBS_ELEM_E                    : ''   // Work breakdown structure element (WBS element)
};
/* eslint-enable key-spacing */

// PO_ITEM_CONFIRMATIONS BAPIEKES Confirmations for Item

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_CONFIRMATIONS = {
  CONF_NAME                     : '',  // Confirmation Category: Description
  CONF_SER                      : '',  // Sequential Number of Vendor Confirmation
  CONF_TYPE                     : '',  // Confirmation Category
  DELETE_IND                    : '',  // Vendor confirmation deletion indicator
  DELIV_DATE                    : '',  // Delivery Date of Vendor Confirmation
  DELIV_ITEM                    : '',  // Delivery Item
  DELIV_NUMB                    : '',  // Delivery
  DELIV_TIME                    : '',  // Delivery Date Time-Spot in Vendor Confirmation
  DEL_DATCAT                    : '',  // Date category of delivery date in vendor confirmation
  DEL_DATCAT_EXT                : '',  // Category of delivery date
  DISPO_REL                     : '',  // Indicator: Confirmation is Relevant to Materials Planning
  EXT_DOC                       : '',  // External Document Number of Vendor Confirmation
  EXT_DOC_LONG                  : '',  // Reference Document Number (for Dependencies see Long Text)
  HANDOVERDATE                  : '',  // Handover Date at the Handover Location
  HANDOVERTIME                  : '',  // Handover time at the handover location
  PO_ITEM                       : '',  // Item Number of Purchasing Document
  QUANTITY                      : 0,  // Quantity as Per Vendor Confirmation
  RECEIPT_REL                   : ''   // Indicator: Confirmation is GR-Relevant
};
/* eslint-enable key-spacing */

// PO_ITEM_CONTRACT_LIMITS BAPIESUC Limits with Contract Reference

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_CONTRACT_LIMITS = {
  ACT_VALUE                     : 0,  // Total value of unplanned entered services
  CON_ITEM                      : '',  // Item number, contract
  CON_NUMBER                    : '',  // Contract number
  DELETE_IND                    : '',  // Deletion Indicator
  KTEXT1                        : '',  // Short Text 1
  LIMIT                         : 0,  // Overall limit
  LINE_NO                       : '',  // Internal line number for limits
  NO_LIMIT                      : '',  // No Limit
  PCKG_NO                       : '',  // Package number
  PRICE_CHG                     : '',  // Price Change in Entry Sheet
  SHORT_TEXT                    : '',  // Short Text 1
  SUB_PACKNO                    : ''   // Package number
};
/* eslint-enable key-spacing */

// PO_ITEM_HISTORY BAPIEKBE PO History for Item

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_HISTORY = {
  BATCH                         : '',  // Batch Number
  BLOCKED_QY                    : 0,  // Goods Receipt Blocked Stock in Order Unit
  BL_QTY                        : 0,  // Quantity in GR blocked stock in order price unit
  CL_VAL_LOC                    : 0,  // GR/IR account clearing value in local currency
  CONDITION                     : '',  // Number of the document condition
  CONF_SER                      : '',  // Sequential Number of Vendor Confirmation
  CURRENCY                      : '',  // Currency Key
  CURRENCY_ISO                  : '',  // ISO Currency Code
  DB_CR_IND                     : '',  // Debit/Credit Indicator
  DELIV_QTY                     : 0,  // Quantity in Unit of Measure from Delivery Note
  DELIV_UNIT                    : '',  // Unit of Measure From Delivery Note
  DELIV_UNIT_ISO                : '',  // ISO code for unit of measure of delivery note
  DOC_DATE                      : '',  // Document Date in Document
  DOC_YEAR                      : '',  // Material Document Year
  ENTRY_DATE                    : '',  // Day On Which Accounting Document Was Entered
  ENTRY_TIME                    : '',  // Time of Entry
  HIST_TYPE                     : '',  // Purchase Order History Category
  IVVAL_FOR                     : 0,  // Entered invoice value in foreign currency
  IVVAL_LOC                     : 0,  // Entered invoice value in local currency
  LOC_CURR                      : '',  // Local currency key
  LOC_CURR_ISO                  : '',  // ISO code for local currency
  MATDOC_ITM                    : '',  // Item in Material Document
  MATERIAL                      : '',  // Material Number
  MATERIAL_EXTERNAL             : '',  // Long Material Number for MATERIAL Field
  MATERIAL_GUID                 : '',  // External GUID for MATERIAL Field
  MATERIAL_LONG                 : '',  // Material Number (40 Characters, needed f. technical reasons)
  MATERIAL_VERSION              : '',  // Version Number for MATERIAL Field
  MAT_DOC                       : '',  // Number of Material Document
  MOVE_REAS                     : '',  // Reason for Movement
  MOVE_TYPE                     : '',  // Movement type (inventory management)
  NO_MORE_GR                    : '',  // "Delivery Completed" Indicator
  PLANT                         : '',  // Plant
  PO_ITEM                       : '',  // Item Number of Purchasing Document
  PROCESS_ID                    : '',  // Transaction/event type, purchase order history
  PSTNG_DATE                    : '',  // Posting Date in the Document
  PUR_MAT                       : '',  // Material number
  PUR_MAT_EXTERNAL              : '',  // Long Material Number for PUR_MAT Field
  PUR_MAT_GUID                  : '',  // External GUID for PUR_MAT Field
  PUR_MAT_LONG                  : '',  // Material Number (40 Characters, Technical Requirement)
  PUR_MAT_VERSION               : '',  // Version Number for PUR_MAT Field
  QUANTITY                      : 0,  // Quantity
  REF_DOC                       : '',  // Document No. of a Reference Document
  REF_DOC_IT                    : '',  // Item of a Reference Document
  REF_DOC_NO                    : '',  // Reference Document Number
  REF_DOC_NO_LONG               : '',  // Reference Document Number (for Dependencies see Long Text)
  REF_DOC_YR                    : '',  // Fiscal Year of a Reference Document
  SERIAL_NO                     : '',  // Sequential Number of Account Assignment
  STK_SEGMENT                   : '',  // Stock Segment
  TAX_CODE                      : '',  // Tax on sales/purchases code
  VAL_FORCUR                    : 0,  // Amount in document currency
  VAL_LOCCUR                    : 0,  // Amount in local currency
  VAL_TYPE                      : ''   // Valuation type
};
/* eslint-enable key-spacing */

// PO_ITEM_HISTORY_TOTALS BAPIEKBES PO History for Item: Totals

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_HISTORY_TOTALS = {
  BLOCKED_QY                    : 0,  // Goods Receipt Blocked Stock in Order Unit
  BL_QTY                        : 0,  // Quantity in GR blocked stock in order price unit
  BL_QTY_TOTAL                  : 0,  // GR blocked stock in order unit (absolute amount)
  CL_VAL_FOR                    : 0,  // Clearing value on GR/IR account in foreign currency
  CL_VAL_LOC                    : 0,  // GR/IR account clearing value in local currency
  CURRENCY                      : '',  // Currency Key
  CURRENCY_ISO                  : '',  // ISO Currency Code
  DELIV_QTY                     : 0,  // Quantity of Goods Received
  DL_QTY_TOTAL                  : 0,  // Goods receipt quantity: Absolute amount
  DL_QTY_TRSP                   : 0,  // Quantity Delivered (Stock Transfer)
  DOP_VL_LOC                    : 0,  // Total Down Payments in Local Currency
  IVVAL_FOR                     : 0,  // Entered invoice value in foreign currency
  IVVAL_LOC                     : 0,  // Entered invoice value in local currency
  IV_QTY                        : 0,  // Quantity invoiced
  IV_QTY_PO                     : 0,  // Invoice receipt quantity in order price unit
  IV_QTY_TOTAL                  : 0,  // Invoice receipt quantity: Absolute amount
  PO_ITEM                       : '',  // Item Number of Purchasing Document
  PO_PR_QNT                     : 0,  // Quantity in Purchase Order Price Unit
  SERIAL_NO                     : '',  // Sequential Number of Account Assignment
  VAL_GR_FOR                    : 0,  // Value of goods received in foreign currency
  VAL_GR_LOC                    : 0,  // Value of goods received in local currency
  VAL_IV_FOR                    : 0,  // Invoice amount in foreign currency
  VAL_IV_LOC                    : 0,  // Invoice amount in local currency
  WITHDR_QTY                    : 0   // Issued Quantity
};
/* eslint-enable key-spacing */

// PO_ITEM_LIMITS BAPIESUH Limits

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_LIMITS = {
  ACT_VALUE                     : 0,  // Total value of unplanned entered services
  CONT_PERC                     : 0,  // Percentage for price determination
  CON_EXIST                     : '',  // Limit on contract items exists
  CURRENCY                      : '',  // Currency Key
  CURR_ISOCD                    : '',  // ISO currency code
  EDITION                       : '',  // Edition of Service Type
  EXP_VALUE                     : 0,  // Expected value
  FREACT_VAL                    : 0,  // Actual value (from other sources)
  FREE_LIMIT                    : 0,  // Free limit
  LIMIT                         : 0,  // Overall limit
  NO_FRLIMIT                    : '',  // No Limit
  NO_LIMIT                      : '',  // No Limit
  PCKG_NO                       : '',  // Package number
  PRICE_CHG                     : '',  // Price Change in Entry Sheet
  SERV_TYPE                     : '',  // Short Description of Service Type
  SSC_ACTVAL                    : 0,  // "Actual" value on service type limit
  SSC_EXIST                     : '',  // Limits exist for service types
  SSC_LIMIT                     : 0,  // Value limits on service types
  SSC_NOLIM                     : '',  // No limit on standard service type
  SSC_PERC                      : 0,  // Percentage for price determination
  SSC_PRSCHG                    : '',  // Price Change in Entry Sheet
  TMP_ACTVAL                    : 0,  // "Actual" value on model specifications limits
  TMP_EXIST                     : '',  // Limit on service packages exists
  TMP_LIMIT                     : 0,  // Limits on model service specifications
  TMP_NOLIM                     : '',  // No Limit on Model Specifications
  TMP_NUMBER                    : '',  // Number of a Set of Model Service Specifications
  TMP_PERC                      : 0,  // Percentage for Price Determination
  TMP_PRSCHG                    : ''   // Price Change in Entry Sheet
};
/* eslint-enable key-spacing */

// PO_ITEM_SCHEDULES BAPIEKET Schedule Lines for Item

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_SCHEDULES = {
  BATCH                         : '',  // Batch Number
  BOMEXPL_NO                    : '',  // BOM explosion number
  CREATE_IND                    : '',  // Creation indicator (purchase requisition/schedule lines)
  DELIV_DATE                    : '',  // Item delivery date
  DELIV_TIME                    : '',  // Delivery Date Time-Spot
  DEL_DATCAT                    : '',  // Date type (day, week, month, interval)
  DEL_DATCAT_EXT                : '',  // Category of delivery date
  PO_ITEM                       : '',  // Item Number of Purchasing Document
  PREQ_ITEM                     : '',  // Item number of purchase requisition
  PREQ_NO                       : '',  // Purchase requisition number
  QUANTITY                      : 0,  // Scheduled Quantity
  QUOTA_ITEM                    : '',  // Quota arrangement item
  QUOTA_NO                      : '',  // Number of quota arrangement
  RESERV_NO                     : '',  // Number of reservation/dependent requirements
  SERIAL_NO                     : '',  // Delivery Schedule Line Counter
  VEND_BATCH                    : '',  // Vendor Batch Number
  VERSION                       : ''   // Production Version
};
/* eslint-enable key-spacing */

// PO_ITEM_SERVICES BAPIESLL Services

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_SERVICES = {
  ACTUAL_QTY                    : 0,  // Purchase Order: Entered Quantity
  ACTUAL_VAL                    : 0,  // Purchase order: Entered value
  ALTERNAT                      : '',  // Alternative Line
  BASE_UOM                      : '',  // Base Unit of Measure
  BASIC_LINE                    : '',  // Basic Line
  BASLINE_NO                    : '',  // Alternatives: Reference to basic item
  BEGINTIME                     : '',  // Start Time
  BIDDER                        : '',  // Bidder's Line
  BLANKET                       : '',  // Blanket Line
  CON_LINE                      : '',  // Entry: Unplanned from contract
  CON_PCKG                      : '',  // Entry: Unplanned from contract
  CON_QTY                       : 0,  // Contract: Quantity Released (by Issue of Release Orders)
  CON_VALUE                     : 0,  // Contract: Value released (via release orders)
  DATE                          : '',  // Date
  DELETE_IND                    : '',  // Deletion Indicator
  DISTRIB                       : '',  // Distribution indicator for multiple account assignment
  EDITION                       : '',  // Edition of Service Type
  ENDTIME                       : '',  // End Time
  EVENTUAL                      : '',  // Contingency Line
  EXTERNAL_ITEM_ID              : '',  // SRM Reference Key
  EXTPERS_NO                    : '',  // External Personnel Number
  EXTREFKEY                     : '',  // External Reference Key for Service
  EXT_LINE                      : '',  // Line Number
  EXT_SERV                      : '',  // Vendor's Service Number
  FORMULA                       : '',  // Formula Number
  FORM_VAL1                     : 0,  // Formula Value
  FORM_VAL2                     : 0,  // Formula value
  FORM_VAL3                     : 0,  // Formula value
  FORM_VAL4                     : 0,  // Formula value
  FORM_VAL5                     : 0,  // Formula value
  FROM_LINE                     : '',  // Lower Limit
  GROSS_VAL                     : 0,  // Gross value
  GR_PRICE                      : 0,  // Gross price
  HI_LINE_NO                    : '',  // Hierarchically superior line number
  INFORM                        : '',  // Informatory Line
  LIMIT_LINE                    : '',  // Entry: Unplanned, limit line
  LINE_NO                       : '',  // Internal line number
  MATL_GROUP                    : '',  // Material Group
  NET_VALUE                     : 0,  // Net value
  NOND_ITAX                     : 0,  // Non-deductible input tax
  OPEN_QTY                      : '',  // Line with Open Quantity
  OUTL_IND                      : '',  // Indicator: Outline line
  OUTL_LEVEL                    : 0,  // Hierarchy level of group
  OUTL_NO                       : '',  // Outline Level
  OVF_TOL                       : 0,  // Overfulfillment Tolerance
  OVF_UNLIM                     : '',  // Unlimited Overfulfillment
  PCKG_NO                       : '',  // Package number
  PERS_NO                       : '',  // Personnel Number
  PER_EDATE                     : '',  // Period of Performance End Date
  PER_SDATE                     : '',  // Period of Performance Start Date
  PLN_LINE                      : '',  // Entry: Planned package line
  PLN_PCKG                      : '',  // Source package number
  PRICE_CHG                     : '',  // Price Change in Entry Sheet
  PRICE_UNIT                    : 0,  // Price unit
  QUANTITY                      : 0,  // Quantity with Sign
  SERVICE                       : '',  // Activity Number
  SERVICE_ITEM_KEY              : '',  // Item Key for eSOA Messages
  SERV_TYPE                     : '',  // Short Description of Service Type
  SHORT_TEXT                    : '',  // Short Text
  SSC_ITEM                      : '',  // Standard Service Catalog Item
  SSC_LIM                       : '',  // Service line refers to standard service catalog limits
  SUBPCKG_NO                    : '',  // Subpackage number
  SUPP_LINE                     : '',  // Supplementary Line
  TARGET_VAL                    : 0,  // Target Value
  TAXJURCODE                    : '',  // Tax Jurisdiction
  TAX_CODE                      : '',  // Tax on sales/purchases code
  TMP_LINE                      : '',  // Entry: Unplanned service from model specifications
  TMP_PCKG                      : '',  // Entry: Unplanned service from model specifications
  TO_LINE                       : '',  // Upper Limit
  UNPL_QTY                      : 0,  // Contract: Unplanned Released Quantity
  UNPL_VAL                      : 0,  // Contract: Unplanned released value
  UOM_ISO                       : '',  // ISO code for unit of measurement
  USERF1_NUM                    : '',  // User-Defined Field
  USERF1_TXT                    : '',  // User-Defined Field
  USERF2_NUM                    : 0,  // User-Defined Field
  USERF2_TXT                    : '',  // User-Defined Field
  WAGETYPE                      : ''   // Wage Type
};
/* eslint-enable key-spacing */

// PO_ITEM_SRV_ACCASS_VALUES BAPIESKL Value/Link to Service Account Assignment

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_SRV_ACCASS_VALUES = {
  DELETE_IND                    : '',  // Deletion Indicator
  HPACKNO                       : '',  // Highest package number
  INACTIVE                      : '',  // Inactive account assignment specification
  LINE_NO                       : '',  // Line Number
  NET_VALUE                     : 0,  // Net value
  PCKG_NO                       : '',  // Package number
  PERCENTAGE                    : 0,  // Percentage for Account Assignment Value Distribution
  QUANTITY                      : 0,  // Quantity
  SERIAL_NO                     : '',  // Sequential Number of Account Assignment
  SERNO_LINE                    : ''   // Seq. Number of Acc. Assignment Specification: Service Line
};
/* eslint-enable key-spacing */

// PO_ITEM_TEXTS BAPIEKPOTX Texts for Item

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_TEXTS = {
  PO_ITEM                       : '',  // Item Number of Purchasing Document
  PO_NUMBER                     : '',  // Purchasing Document Number
  TEXT_FORM                     : '',  // Tag column
  TEXT_ID                       : '',  // Text ID
  TEXT_LINE                     : ''   // Text Line
};
/* eslint-enable key-spacing */

// PO_SERVICES_TEXTS BAPIESLLTX Long Texts for Service Line

/* eslint-disable key-spacing */
// prettier-ignore
PO_SERVICES_TEXTS = {
  FORMAT_COL                    : '',  // Tag column
  LINE_NO                       : '',  // Internal line number
  PCKG_NO                       : '',  // Package number
  TEXT_ID                       : '',  // Text ID
  TEXT_LINE                     : ''   // Text Line
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
