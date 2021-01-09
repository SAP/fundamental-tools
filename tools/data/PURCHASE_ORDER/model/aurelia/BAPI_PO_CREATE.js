//
// BAPI_PO_CREATE 0.2
//

BAPI_PO_CREATE = {

  // INPUT PARAMETERS

  HEADER_ADD_DATA_RELEVANT: '',            // CHAR(1)    BAPIMMPARA SELECTION           Indicator: Additional Data (Header) Relevant
  HEADER_TECH_FIELDS: {},                  // BAPITECH : Technical Header Fields
  ITEM_ADD_DATA_RELEVANT: '',              // CHAR(1)    BAPIMMPARA SELECTION           Indicator: Additional Data (Item) Relevant
  PO_ADDRESS: {},                          // BAPIADDRESS : Ordering Address for One-Time Vendor
  PO_HEADER: {},                           // BAPIEKKOC : PO Header Data 
  PO_HEADER_ADD_DATA: {},                  // BAPIEKKOA : Additional Data: PO Header
  SKIP_ITEMS_WITH_ERROR: '',               // CHAR(1)    BAPIMMPARA SELECTION           Indicator: Skip Faulty Items

  // OUTPUT PARAMETERS

  PURCHASEORDER: '',                       // CHAR(10)   BAPIEKKOC PO_NUMBER            Purchase Order Number

  // TABLE PARAMETERS

  EXTENSIONIN: [],                         // BAPIPAREX : Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
  POADDRDELIVERY: [],                      // BAPIMEPOADDRDELIVERY : PO Item: Address Structure BAPIADDR1 for Inbound Delivery
  PO_BUSINESS_PARTNER: [],                 // BAPIEKKOP : Partner Roles  
  PO_CONTRACT_LIMITS: [],                  // BAPIESUCC : Limits with Contract Reference
  PO_ITEMS: [],                            // BAPIEKPOC : Table of PO Items
  PO_ITEM_ACCOUNT_ASSIGNMENT: [],          // BAPIEKKN : Table of Account Assignments
  PO_ITEM_ADD_DATA: [],                    // BAPIEKPOA : Additional Data: PO Item
  PO_ITEM_SCHEDULES: [],                   // BAPIEKET : Table of Schedule Lines
  PO_ITEM_TEXT: [],                        // BAPIEKPOTX : Table of Item Texts
  PO_LIMITS: [],                           // BAPIESUHC : Limits         
  PO_SERVICES: [],                         // BAPIESLLC : Services       
  PO_SERVICES_TEXT: [],                    // BAPIESLLTX : Text for Service Line
  PO_SRV_ACCASS_VALUES: [],                // BAPIESKLC : Value/Link to Service Account Assignment
  RETURN: []                               // BAPIRETURN : Return Messages
};

//
// INPUT PARAMETERS
//

// HEADER_TECH_FIELDS BAPITECH Technical Header Fields

/* eslint-disable key-spacing */
// prettier-ignore
HEADER_TECH_FIELDS = {
  NO_AUTHORITY                  : '',  // Checkbox
  NO_MESSAGE_REQ                : '',  // Checkbox
  NO_MESSAGING                  : '',  // Checkbox
  NO_PRICE_FROM_PO              : ''   // Checkbox
};
/* eslint-enable key-spacing */

// PO_ADDRESS BAPIADDRESS Ordering Address for One-Time Vendor

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

// PO_HEADER BAPIEKKOC PO Header Data

/* eslint-disable key-spacing */
// prettier-ignore
PO_HEADER = {
  AGREEMENT                     : '',  // Number of principal purchase agreement
  CO_CODE                       : '',  // Company Code
  CREATED_BY                    : '',  // Name of Person who Created the Object
  DOC_CAT                       : '',  // Purchasing Document Category
  DOC_DATE                      : '',  // Purchasing Document Date
  DOC_TYPE                      : '',  // Purchasing Document Type
  LANGU                         : '',  // Language Key
  LANGU_ISO                     : '',  // ISO code for language key
  PO_NUMBER                     : '',  // Purchasing Document Number
  PURCH_ORG                     : '',  // Purchasing organization
  PUR_GROUP                     : '',  // Purchasing Group
  SUPPL_PLNT                    : '',  // Supplying (issuing) plant in case of stock transport order
  VENDOR                        : ''   // Vendor's account number
};
/* eslint-enable key-spacing */

// PO_HEADER_ADD_DATA BAPIEKKOA Additional Data: PO Header

/* eslint-disable key-spacing */
// prettier-ignore
PO_HEADER_ADD_DATA = {
  CASH_DISC1                    : 0,  // Cash discount percentage 1
  CASH_DISC2                    : 0,  // Cash Discount Percentage 2
  CREATED_BY                    : '',  // Name of Person who Created the Object
  CURRENCY                      : '',  // Currency Key
  CUSTOMS                       : '',  // Customs Office: Office of Exit/Entry for Foreign Trade
  DSCNT1_TO                     : 0,  // Cash discount days 1
  DSCNT2_TO                     : 0,  // Cash discount days 2
  DSCNT3_TO                     : 0,  // Cash discount days 3
  EXCH_RATE                     : 0,  // Direct Quoted Exchange Rate
  EXCH_RATE_CM                  : 0,  // Indirect Quoted Exchange Rate
  EX_RATE_FX                    : '',  // Indicator: Fixing of Exchange Rate
  INCOTERMS1                    : '',  // Incoterms (Part 1)
  INCOTERMS2                    : '',  // Incoterms (Part 2)
  OUR_REF                       : '',  // Our Reference
  PMNTTRMS                      : '',  // Terms of Payment Key
  REF_1                         : '',  // Your Reference
  SALES_PERS                    : '',  // Responsible Salesperson at Vendor's Office
  TELEPHONE                     : '',  // Vendor's Telephone Number
  TRNSP_MODE                    : '',  // Mode of Transport for Foreign Trade
  VPER_END                      : '',  // End of Validity Period
  VPER_START                    : ''   // Start of Validity Period
};
/* eslint-enable key-spacing */

//
// OUTPUT PARAMETERS
//

//
// TABLE PARAMETERS
//

// EXTENSIONIN BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT

/* eslint-disable key-spacing */
// prettier-ignore
EXTENSIONIN = {
  STRUCTURE                     : '',  // Structure name of  BAPI table extension
  VALUEPART1                    : '',  // Data part of BAPI extension parameter
  VALUEPART2                    : '',  // Data part of BAPI extension parameter
  VALUEPART3                    : '',  // Data part of BAPI extension parameter
  VALUEPART4                    : ''   // Data part of BAPI extension parameter
};
/* eslint-enable key-spacing */

// POADDRDELIVERY BAPIMEPOADDRDELIVERY PO Item: Address Structure BAPIADDR1 for Inbound Delivery

/* eslint-disable key-spacing */
// prettier-ignore
POADDRDELIVERY = {
  ADDR_NO                       : '',  // Address number
  ADR_NOTES                     : '',  // Address notes
  BUILDING                      : '',  // old: building (no. or abbreviation)
  BUILD_LONG                    : '',  // Building (Number or Code)
  CHCKSTATUS                    : '',  // City file test status
  CITY                          : '',  // City
  CITY_NO                       : '',  // City code for city/street file
  COMM_TYPE                     : '',  // Communication Method (Key) (Business Address Services)
  COUNTRY                       : '',  // Country Key
  COUNTRYISO                    : '',  // Country ISO code
  CUSTOMER                      : '',  // Customer
  C_O_NAME                      : '',  // c/o name
  DELIV_DIS                     : '',  // (Not Supported) Post Delivery District
  DISTRCT_NO                    : '',  // District code for City and Street file
  DISTRICT                      : '',  // District
  E_MAIL                        : '',  // E-Mail Address
  FAX_EXTENS                    : '',  // First fax no.: extension
  FAX_NUMBER                    : '',  // First fax no.: dialling code+number
  FLOOR                         : '',  // Floor in building
  FORMOFADDR                    : '',  // Form of address text
  HOUSE_NO                      : '',  // House Number
  HOUSE_NO2                     : '',  // House number supplement
  LANGU                         : '',  // Language Key
  LANGU_ISO                     : '',  // 2-Character SAP Language Code
  LOCATION                      : '',  // Street 5
  NAME                          : '',  // Name 1
  NAME_2                        : '',  // Name 2
  NAME_3                        : '',  // Name 3
  NAME_4                        : '',  // Name 4
  PBOXCIT_NO                    : '',  // City PO box code (City file)
  POSTL_COD1                    : '',  // City postal code
  POSTL_COD2                    : '',  // PO Box Postal Code
  POSTL_COD3                    : '',  // Company Postal Code (for Large Customers)
  PO_BOX                        : '',  // PO Box
  PO_BOX_CIT                    : '',  // PO Box city
  PO_ITEM                       : '',  // Item Number of Purchasing Document
  REGIOGROUP                    : '',  // Regional structure grouping
  REGION                        : '',  // Region (State, Province, County)
  ROOM_NO                       : '',  // Room or Appartment Number
  SC_VENDOR                     : '',  // Subcontracting vendor
  SORT1                         : '',  // Search Term 1
  SORT2                         : '',  // Search Term 2
  STREET                        : '',  // Street
  STREET_LNG                    : '',  // Street
  STREET_NO                     : '',  // Street Number for City/Street File
  STR_ABBR                      : '',  // (Not Supported) Abbreviation of Street Name
  STR_SUPPL1                    : '',  // Street 2
  STR_SUPPL2                    : '',  // Street 3
  STR_SUPPL3                    : '',  // Street 4
  SUPP_VENDOR                   : '',  // Vendor to be supplied/who is to receive delivery
  TAXJURCODE                    : '',  // Tax Jurisdiction
  TEL1_EXT                      : '',  // First Telephone No.: Extension
  TEL1_NUMBR                    : '',  // First telephone no.: dialling code+number
  TIME_ZONE                     : '',  // Address time zone
  TITLE                         : '',  // Title text
  TRANSPZONE                    : ''   // Transportation zone to or from which the goods are delivered
};
/* eslint-enable key-spacing */

// PO_BUSINESS_PARTNER BAPIEKKOP Partner Roles

/* eslint-disable key-spacing */
// prettier-ignore
PO_BUSINESS_PARTNER = {
  BUSPARTNO                     : '',  // Number of a Business Partner in Vendor Master Record
  DELETE_IND                    : '',  // Deletion Indicator
  LANGU                         : '',  // Language Key
  PARTNERDESC                   : ''   // Language-specific description of partner function
};
/* eslint-enable key-spacing */

// PO_CONTRACT_LIMITS BAPIESUCC Limits with Contract Reference

/* eslint-disable key-spacing */
// prettier-ignore
PO_CONTRACT_LIMITS = {
  CON_ITEM                      : '',  // Item number, contract
  CON_NUMBER                    : '',  // Contract number
  DELETE_IND                    : '',  // Deletion Indicator
  LIMIT                         : 0,  // Overall limit
  LINE_NO                       : '',  // Internal line number for limits
  NO_LIMIT                      : '',  // No Limit
  PCKG_NO                       : '',  // Package number
  PRICE_CHG                     : '',  // Price Change in Entry Sheet
  SHORT_TEXT                    : ''   // Short Text 1
};
/* eslint-enable key-spacing */

// PO_ITEMS BAPIEKPOC Table of PO Items

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

// PO_ITEM_ACCOUNT_ASSIGNMENT BAPIEKKN Table of Account Assignments

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

// PO_ITEM_ADD_DATA BAPIEKPOA Additional Data: PO Item

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_ADD_DATA = {
  BUS_TRANST                    : '',  // Business Transaction Type for Foreign Trade
  COMM_CODE                     : '',  // Commodity Code/Import Code Number for Foreign Trade
  COUNT_ORIG                    : '',  // Country of Origin of Material (Non-Preferential Origin)
  DEL_COMPL                     : '',  // "Delivery Completed" Indicator
  EXPIMPPROC                    : '',  // Export/Import procedure for foreign trade (5 digits)
  FINAL_INV                     : '',  // Final Invoice Indicator
  GR_IND                        : '',  // Goods Receipt Indicator
  GR_NON_VAL                    : '',  // Goods Receipt, Non-Valuated
  INFO_UPD                      : '',  // Indicator: Update Info Record
  IR_IND                        : '',  // Invoice receipt indicator
  OVERDELTOL                    : 0,  // Overdelivery Tolerance Limit
  PO_ITEM                       : '',  // Item Number of Purchasing Document
  REG_ORIGIN                    : '',  // Region of Origin of Material (Non-Preferential Origin)
  REMINDER1                     : 0,  // Number of Days for First Reminder/Expediter
  REMINDER2                     : 0,  // Number of Days for Second Reminder/Expediter
  REMINDER3                     : 0,  // Number of Days for Third Reminder/Expediter
  UNDER_TOL                     : 0,  // Underdelivery Tolerance Limit
  UNLIMITED                     : ''   // Indicator: Unlimited Overdelivery Allowed
};
/* eslint-enable key-spacing */

// PO_ITEM_SCHEDULES BAPIEKET Table of Schedule Lines

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

// PO_ITEM_TEXT BAPIEKPOTX Table of Item Texts

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_TEXT = {
  PO_ITEM                       : '',  // Item Number of Purchasing Document
  PO_NUMBER                     : '',  // Purchasing Document Number
  TEXT_FORM                     : '',  // Tag column
  TEXT_ID                       : '',  // Text ID
  TEXT_LINE                     : ''   // Text Line
};
/* eslint-enable key-spacing */

// PO_LIMITS BAPIESUHC Limits

/* eslint-disable key-spacing */
// prettier-ignore
PO_LIMITS = {
  CONT_PERC                     : 0,  // Percentage for price determination
  CON_EXIST                     : '',  // Limit on contract items exists
  EDITION                       : '',  // Edition of Service Type
  EXP_VALUE                     : 0,  // Expected value
  FREE_LIMIT                    : 0,  // Free limit
  LIMIT                         : 0,  // Overall limit
  NO_FRLIMIT                    : '',  // No Limit
  NO_LIMIT                      : '',  // No Limit
  PCKG_NO                       : '',  // Package number
  PRICE_CHG                     : '',  // Price Change in Entry Sheet
  SERV_TYPE                     : '',  // Short Description of Service Type
  SSC_EXIST                     : '',  // Limits exist for service types
  SSC_LIMIT                     : 0,  // Value limits on service types
  SSC_NOLIM                     : '',  // No limit on standard service type
  SSC_PERC                      : 0,  // Percentage for price determination
  SSC_PRSCHG                    : '',  // Price Change in Entry Sheet
  TMP_EXIST                     : '',  // Limit on service packages exists
  TMP_LIMIT                     : 0,  // Limits on model service specifications
  TMP_NOLIM                     : '',  // No Limit on Model Specifications
  TMP_NUMBER                    : '',  // Number of a Set of Model Service Specifications
  TMP_PERC                      : 0,  // Percentage for Price Determination
  TMP_PRSCHG                    : ''   // Price Change in Entry Sheet
};
/* eslint-enable key-spacing */

// PO_SERVICES BAPIESLLC Services

/* eslint-disable key-spacing */
// prettier-ignore
PO_SERVICES = {
  ALTERNAT                      : '',  // Alternative Line
  BASE_UOM                      : '',  // Base Unit of Measure
  BASIC_LINE                    : '',  // Basic Line
  BASLINE_NO                    : '',  // Alternatives: Reference to basic item
  BEGINTIME                     : '',  // Start Time
  BIDDER                        : '',  // Bidder's Line
  BLANKET                       : '',  // Blanket Line
  CON_LINE                      : '',  // Entry: Unplanned from contract
  CON_PCKG                      : '',  // Entry: Unplanned from contract
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
  GR_PRICE                      : 0,  // Gross price
  HI_LINE_NO                    : '',  // Hierarchically superior line number
  INFORM                        : '',  // Informatory Line
  LIMIT_LINE                    : '',  // Entry: Unplanned, limit line
  LINE_NO                       : '',  // Internal line number
  MATL_GROUP                    : '',  // Material Group
  NET_VALUE                     : 0,  // Net value
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
  UOM_ISO                       : '',  // ISO code for unit of measurement
  USERF1_NUM                    : '',  // User-Defined Field
  USERF1_TXT                    : '',  // User-Defined Field
  USERF2_NUM                    : 0,  // User-Defined Field
  USERF2_TXT                    : '',  // User-Defined Field
  WAGETYPE                      : ''   // Wage Type
};
/* eslint-enable key-spacing */

// PO_SERVICES_TEXT BAPIESLLTX Text for Service Line

/* eslint-disable key-spacing */
// prettier-ignore
PO_SERVICES_TEXT = {
  FORMAT_COL                    : '',  // Tag column
  LINE_NO                       : '',  // Internal line number
  PCKG_NO                       : '',  // Package number
  TEXT_ID                       : '',  // Text ID
  TEXT_LINE                     : ''   // Text Line
};
/* eslint-enable key-spacing */

// PO_SRV_ACCASS_VALUES BAPIESKLC Value/Link to Service Account Assignment

/* eslint-disable key-spacing */
// prettier-ignore
PO_SRV_ACCASS_VALUES = {
  LINE_NO                       : '',  // Line Number
  NET_VALUE                     : 0,  // Net Value of Item
  PCKG_NO                       : '',  // Package number
  PERCENTAGE                    : 0,  // Percentage for Account Assignment Value Distribution
  QUANTITY                      : 0,  // Quantity with Sign
  SERIAL_NO                     : '',  // Sequential Number of Account Assignment
  SERNO_LINE                    : ''   // Seq. Number of Acc. Assignment Specification: Service Line
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
