//
// BAPI_PO_CREATE 
//
// rfmcall.py 1.0 at: 2021-01-13 09:35:36
//

// Variables : 4
// Structures: 4
// Tables    : 14
// Exceptions: 0

BAPI_PO_CREATE = {

  // INPUT PARAMETERS

  PO_HEADER                        :   {}, // BAPIEKKOC PO Header Data
  //HEADER_ADD_DATA_RELEVANT       :   "", // CHAR (1) Indicator: Additional Data (Header) Relevant
  //HEADER_TECH_FIELDS             :   {}, // BAPITECH Technical Header Fields
  //ITEM_ADD_DATA_RELEVANT         :   "", // CHAR (1) Indicator: Additional Data (Item) Relevant
  //PO_ADDRESS                     :   {}, // BAPIADDRESS Ordering Address for One-Time Vendor
  //PO_HEADER_ADD_DATA             :   {}, // BAPIEKKOA Additional Data: PO Header
  //SKIP_ITEMS_WITH_ERROR          :  "X", // CHAR (1) Indicator: Skip Faulty Items

  // TABLE PARAMETERS

  PO_ITEMS                         :   [], // BAPIEKPOC Table of PO Items
  PO_ITEM_SCHEDULES                :   [], // BAPIEKET Table of Schedule Lines
  //EXTENSIONIN                    :   [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
  //POADDRDELIVERY                 :   [], // BAPIMEPOADDRDELIVERY PO Item: Address Structure BAPIADDR1 for Inbound Delivery
  //PO_BUSINESS_PARTNER            :   [], // BAPIEKKOP Partner Roles
  //PO_CONTRACT_LIMITS             :   [], // BAPIESUCC Limits with Contract Reference
  //PO_ITEM_ACCOUNT_ASSIGNMENT     :   [], // BAPIEKKN Table of Account Assignments
  //PO_ITEM_ADD_DATA               :   [], // BAPIEKPOA Additional Data: PO Item
  //PO_ITEM_TEXT                   :   [], // BAPIEKPOTX Table of Item Texts
  //PO_LIMITS                      :   [], // BAPIESUHC Limits
  //PO_SERVICES                    :   [], // BAPIESLLC Services
  //PO_SERVICES_TEXT               :   [], // BAPIESLLTX Text for Service Line
  //PO_SRV_ACCASS_VALUES           :   [], // BAPIESKLC Value/Link to Service Account Assignment
  //RETURN                         :   [], // BAPIRETURN Return Messages

  // OUTPUT PARAMETERS

  PURCHASEORDER                    :   "", // CHAR (10) ALPHA=ALPHA Purchase Order Number
};

//
// INPUT PARAMETERS
//

// PO_HEADER BAPIEKKOC PO Header Data

/* eslint-disable key-spacing */
// prettier-ignore
PO_HEADER = {
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement
  CO_CODE                          :   "", // CHAR (4) Company Code
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  DOC_CAT                          :   "", // CHAR (1) Purchasing Document Category
  DOC_DATE                         :   "", // DATS (8) Purchasing Document Date
  DOC_TYPE                         :   "", // CHAR (4) Purchasing Document Type
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  LANGU_ISO                        :   "", // CHAR (2) ISO code for language key
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization
  PUR_GROUP                        :   "", // CHAR (3) Purchasing Group
  SUPPL_PLNT                       :   "", // CHAR (4) Supplying (issuing) plant in case of stock transport order
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number
};
/* eslint-enable key-spacing */

// HEADER_TECH_FIELDS BAPITECH Technical Header Fields

/* eslint-disable key-spacing */
// prettier-ignore
HEADER_TECH_FIELDS = {
  NO_AUTHORITY                     :   "", // CHAR (1) Checkbox
  NO_MESSAGE_REQ                   :   "", // CHAR (1) Checkbox
  NO_MESSAGING                     :   "", // CHAR (1) Checkbox
  NO_PRICE_FROM_PO                 :   "", // CHAR (1) Checkbox
};
/* eslint-enable key-spacing */

// PO_ADDRESS BAPIADDRESS Ordering Address for One-Time Vendor

/* eslint-disable key-spacing */
// prettier-ignore
PO_ADDRESS = {
  ADDRESS_ID                       :   "", // CHAR (10) ALPHA=ALPHA (Not supported) Physical address ID
  ADDRHANDLE                       :   "", // CHAR (140) Handle for Creating Addresses/Persons (Bus. Addr. Services)
  ADDRNUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Address number
  ADDRORIGIN                       :   "", // CHAR (4) (Not Supported) Address Data Source (Key)
  BUILDING                         :   "", // CHAR (10) old: building (no. or abbreviation)
  BUILD_LONG                       :   "", // CHAR (20) Building (Number or Code)
  CHCKSTATUS                       :   "", // CHAR (1) City file test status
  CITY1                            :   "", // CHAR (40) City
  CITY2                            :   "", // CHAR (40) District
  CITYP_CODE                       :   "", // CHAR (8) ALPHA=ALPHA District code for City and Street file
  CITY_CODE                        :   "", // CHAR (12) ALPHA=ALPHA City code for city/street file
  CITY_CODE2                       :   "", // CHAR (12) ALPHA=ALPHA City PO box code (City file)
  COUNTRY                          :   "", // CHAR (3) Country Key
  DATE                             :   "", // DATS (8) Date referred to
  DATE_FROM                        :   "", // DATS (8) Valid-from date - in current Release only 00010101 possible
  DATE_TO                          :   "", // DATS (8) Valid-to date in current Release only 99991231 possible
  DEFLT_COMM                       :   "", // CHAR (3) Communication Method (Key) (Business Address Services)
  EXTENSION1                       :   "", // CHAR (40) Extension (only for data conversion) (data line/telebox)
  EXTENSION2                       :   "", // CHAR (40) Extension (only for data conversion) (data line/telebox)
  FAX_EXTENS                       :   "", // CHAR (10) First fax no.: extension
  FAX_NUMBER                       :   "", // CHAR (30) First fax no.: dialling code+number
  FLOOR                            :   "", // CHAR (10) Floor in building
  HOUSE_NUM1                       :   "", // CHAR (10) House Number
  HOUSE_NUM2                       :   "", // CHAR (10) House number supplement
  HOUSE_NUM3                       :   "", // CHAR (10) (Not supported) House Number Range
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  LOCATION                         :   "", // CHAR (40) Street 5
  NAME1                            :   "", // CHAR (40) Name 1
  NAME2                            :   "", // CHAR (40) Name 2
  NAME3                            :   "", // CHAR (40) Name 3
  NAME4                            :   "", // CHAR (40) Name 4
  NAME_CO                          :   "", // CHAR (40) c/o name
  NAME_TXT                         :   "", // CHAR (50) Converted name field (with form of address)
  NATION                           :   "", // CHAR (1) Version ID for International Addresses
  POSTALAREA                       :   "", // CHAR (15) (Not Supported) Post Delivery District
  POST_CODE1                       :   "", // CHAR (10) City postal code
  POST_CODE2                       :   "", // CHAR (10) PO Box Postal Code
  POST_CODE3                       :   "", // CHAR (10) Company Postal Code (for Large Customers)
  PO_BOX                           :   "", // CHAR (10) PO Box
  PO_BOX_CTY                       :   "", // CHAR (3) PO box country
  PO_BOX_LOC                       :   "", // CHAR (40) PO Box city
  PO_BOX_NUM                       :   "", // CHAR (1) Flag: PO Box Without Number
  PO_BOX_REG                       :   "", // CHAR (3) Region for PO Box (Country, State, Province, ...)
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  REMARK                           :   "", // CHAR (50) Address notes
  ROOMNUMBER                       :   "", // CHAR (10) Room or Appartment Number
  SORT1                            :   "", // CHAR (20) Search Term 1
  SORT2                            :   "", // CHAR (20) Search Term 2
  SORT_PHN                         :   "", // CHAR (20) (Not Supported) Phonetic Search Sort Field
  STREET                           :   "", // CHAR (60) Street
  STREETABBR                       :   "", // CHAR (2) (Not Supported) Abbreviation of Street Name
  STREETCODE                       :   "", // CHAR (12) ALPHA=ALPHA Street Number for City/Street File
  STR_SUPPL1                       :   "", // CHAR (40) Street 2
  STR_SUPPL2                       :   "", // CHAR (40) Street 3
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction
  TEL_EXTENS                       :   "", // CHAR (10) First Telephone No.: Extension
  TEL_NUMBER                       :   "", // CHAR (30) First telephone no.: dialling code+number
  TIME_ZONE                        :   "", // CHAR (6) Address time zone
  TITLE                            :   "", // CHAR (4) Form-of-Address Key
  TRANSPZONE                       :   "", // CHAR (10) Transportation zone to or from which the goods are delivered
};
/* eslint-enable key-spacing */

// PO_HEADER_ADD_DATA BAPIEKKOA Additional Data: PO Header

/* eslint-disable key-spacing */
// prettier-ignore
PO_HEADER_ADD_DATA = {
  CASH_DISC1                       :    0, // DEC (5.3) Cash discount percentage 1
  CASH_DISC2                       :    0, // DEC (5.3) Cash Discount Percentage 2
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CURRENCY                         :   "", // CUKY (5) Currency Key
  CUSTOMS                          :   "", // CHAR (6) Customs Office: Office of Exit/Entry for Foreign Trade
  DSCNT1_TO                        :    0, // DEC (3) Cash discount days 1
  DSCNT2_TO                        :    0, // DEC (3) Cash discount days 2
  DSCNT3_TO                        :    0, // DEC (3) Cash discount days 3
  EXCH_RATE                        :    0, // DEC (9.5) Direct Quoted Exchange Rate
  EXCH_RATE_CM                     :    0, // DEC (9.5) Indirect Quoted Exchange Rate
  EX_RATE_FX                       :   "", // CHAR (1) Indicator: Fixing of Exchange Rate
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  OUR_REF                          :   "", // CHAR (12) Our Reference
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  REF_1                            :   "", // CHAR (12) Your Reference
  SALES_PERS                       :   "", // CHAR (30) Responsible Salesperson at Vendor's Office
  TELEPHONE                        :   "", // CHAR (16) Vendor's Telephone Number
  TRNSP_MODE                       :   "", // CHAR (1) Mode of Transport for Foreign Trade
  VPER_END                         :   "", // DATS (8) End of Validity Period
  VPER_START                       :   "", // DATS (8) Start of Validity Period
};
/* eslint-enable key-spacing */

//
// TABLE PARAMETERS
//

// PO_ITEMS BAPIEKPOC Table of PO Items

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

// PO_ITEM_SCHEDULES BAPIEKET Table of Schedule Lines

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_SCHEDULES = {
  BATCH                            :   "", // CHAR (10) Batch Number
  BOMEXPL_NO                       :   "", // CHAR (8) BOM explosion number
  CREATE_IND                       :   "", // CHAR (1) Creation indicator (purchase requisition/schedule lines)
  DELIV_DATE                       :   "", // DATS (8) Item delivery date
  DELIV_TIME                       :   "", // TIMS (6) Delivery Date Time-Spot
  DEL_DATCAT                       :   "", // CHAR (1) Date type (day, week, month, interval)
  DEL_DATCAT_EXT                   :   "", // CHAR (1) Category of delivery date
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition
  PREQ_NO                          :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number
  QUANTITY                         :  0.0, // QUAN (13.3) Scheduled Quantity
  QUOTA_ITEM                       :   "", // NUMC (3) Quota arrangement item
  QUOTA_NO                         :   "", // CHAR (10) ALPHA=ALPHA Number of quota arrangement
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements
  SERIAL_NO                        :   "", // NUMC (4) Delivery Schedule Line Counter
  VEND_BATCH                       :   "", // CHAR (15) Vendor Batch Number
  VERSION                          :   "", // CHAR (4) Production Version
};
/* eslint-enable key-spacing */

// EXTENSIONIN BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT

/* eslint-disable key-spacing */
// prettier-ignore
EXTENSIONIN = {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};
/* eslint-enable key-spacing */

// POADDRDELIVERY BAPIMEPOADDRDELIVERY PO Item: Address Structure BAPIADDR1 for Inbound Delivery

/* eslint-disable key-spacing */
// prettier-ignore
POADDRDELIVERY = {
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA Address number
  ADR_NOTES                        :   "", // CHAR (50) Address notes
  BUILDING                         :   "", // CHAR (10) old: building (no. or abbreviation)
  BUILD_LONG                       :   "", // CHAR (20) Building (Number or Code)
  CHCKSTATUS                       :   "", // CHAR (1) City file test status
  CITY                             :   "", // CHAR (40) City
  CITY_NO                          :   "", // CHAR (12) ALPHA=ALPHA City code for city/street file
  COMM_TYPE                        :   "", // CHAR (3) Communication Method (Key) (Business Address Services)
  COUNTRY                          :   "", // CHAR (3) Country Key
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer
  C_O_NAME                         :   "", // CHAR (40) c/o name
  DELIV_DIS                        :   "", // CHAR (15) (Not Supported) Post Delivery District
  DISTRCT_NO                       :   "", // CHAR (8) ALPHA=ALPHA District code for City and Street file
  DISTRICT                         :   "", // CHAR (40) District
  E_MAIL                           :   "", // CHAR (241) ALPHA=SXIDN E-Mail Address
  FAX_EXTENS                       :   "", // CHAR (10) First fax no.: extension
  FAX_NUMBER                       :   "", // CHAR (30) First fax no.: dialling code+number
  FLOOR                            :   "", // CHAR (10) Floor in building
  FORMOFADDR                       :   "", // CHAR (20) Form of address text
  HOUSE_NO                         :   "", // CHAR (10) House Number
  HOUSE_NO2                        :   "", // CHAR (10) House number supplement
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  LOCATION                         :   "", // CHAR (40) Street 5
  NAME                             :   "", // CHAR (40) Name 1
  NAME_2                           :   "", // CHAR (40) Name 2
  NAME_3                           :   "", // CHAR (40) Name 3
  NAME_4                           :   "", // CHAR (40) Name 4
  PBOXCIT_NO                       :   "", // CHAR (12) ALPHA=ALPHA City PO box code (City file)
  POSTL_COD1                       :   "", // CHAR (10) City postal code
  POSTL_COD2                       :   "", // CHAR (10) PO Box Postal Code
  POSTL_COD3                       :   "", // CHAR (10) Company Postal Code (for Large Customers)
  PO_BOX                           :   "", // CHAR (10) PO Box
  PO_BOX_CIT                       :   "", // CHAR (40) PO Box city
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document
  REGIOGROUP                       :   "", // CHAR (8) Regional structure grouping
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  ROOM_NO                          :   "", // CHAR (10) Room or Appartment Number
  SC_VENDOR                        :   "", // CHAR (1) Subcontracting vendor
  SORT1                            :   "", // CHAR (20) Search Term 1
  SORT2                            :   "", // CHAR (20) Search Term 2
  STREET                           :   "", // CHAR (60) Street
  STREET_LNG                       :   "", // CHAR (60) Street
  STREET_NO                        :   "", // CHAR (12) ALPHA=ALPHA Street Number for City/Street File
  STR_ABBR                         :   "", // CHAR (2) (Not Supported) Abbreviation of Street Name
  STR_SUPPL1                       :   "", // CHAR (40) Street 2
  STR_SUPPL2                       :   "", // CHAR (40) Street 3
  STR_SUPPL3                       :   "", // CHAR (40) Street 4
  SUPP_VENDOR                      :   "", // CHAR (10) ALPHA=ALPHA Vendor to be supplied/who is to receive delivery
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction
  TEL1_EXT                         :   "", // CHAR (10) First Telephone No.: Extension
  TEL1_NUMBR                       :   "", // CHAR (30) First telephone no.: dialling code+number
  TIME_ZONE                        :   "", // CHAR (6) Address time zone
  TITLE                            :   "", // CHAR (30) Title text
  TRANSPZONE                       :   "", // CHAR (10) Transportation zone to or from which the goods are delivered
};
/* eslint-enable key-spacing */

// PO_BUSINESS_PARTNER BAPIEKKOP Partner Roles

/* eslint-disable key-spacing */
// prettier-ignore
PO_BUSINESS_PARTNER = {
  BUSPARTNO                        :   "", // CHAR (10) ALPHA=ALPHA Number of a Business Partner in Vendor Master Record
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  PARTNERDESC                      :   "", // CHAR (2) Language-specific description of partner function
};
/* eslint-enable key-spacing */

// PO_CONTRACT_LIMITS BAPIESUCC Limits with Contract Reference

/* eslint-disable key-spacing */
// prettier-ignore
PO_CONTRACT_LIMITS = {
  CON_ITEM                         :   "", // NUMC (5) Item number, contract
  CON_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Contract number
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
  LIMIT                            :    0, // DEC (23.4) Overall limit
  LINE_NO                          :   "", // NUMC (10) Internal line number for limits
  NO_LIMIT                         :   "", // CHAR (1) No Limit
  PCKG_NO                          :   "", // NUMC (10) Package number
  PRICE_CHG                        :   "", // CHAR (1) Price Change in Entry Sheet
  SHORT_TEXT                       :   "", // CHAR (40) Short Text 1
};
/* eslint-enable key-spacing */

// PO_ITEM_ACCOUNT_ASSIGNMENT BAPIEKKN Table of Account Assignments

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_ACCOUNT_ASSIGNMENT = {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period
  BUS_AREA                         :   "", // CHAR (4) Business Area
  CMMT_ITEM                        :   "", // CHAR (14) ALPHA=FMCIS Commitment Item
  CMMT_ITEM_LONG                   :   "", // CHAR (24) ALPHA=FMCIL Commitment item
  COST_CTR                         :   "", // CHAR (10) ALPHA=ALPHA Cost Center
  COST_OBJ                         :   "", // CHAR (12) Cost Object
  COUNTER                          :   "", // NUMC (8) Internal counter
  CO_AREA                          :   "", // CHAR (4) Controlling Area
  DISTR_PERC                       :    0, // DEC (3.1) Distribution percentage in the case of multiple acct assgt
  FUNC_AREA                        :   "", // CHAR (4) Functional Area
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area
  FUND                             :   "", // CHAR (10) Fund
  FUNDS_CTR                        :   "", // CHAR (16) Funds Center
  FUNDS_RES                        :   "", // CHAR (10) ALPHA=ALPHA Document number for earmarked funds
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant
  GR_RCPT                          :   "", // CHAR (12) Goods recipient
  G_L_ACCT                         :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number
  NETWORK                          :   "", // CHAR (12) ALPHA=ALPHA Network Number for Account Assignment
  ORDER_NO                         :   "", // CHAR (12) ALPHA=ALPHA Order Number
  PART_ACCT                        :   "", // CHAR (10) ALPHA=ALPHA Partner account number
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center
  PROF_SEGM                        :   "", // NUMC (10) Profitability Segment Number (CO-PA)
  PROJ_EXT                         :   "", // CHAR (24) ALPHA=ABPSN Project definition
  QUANTITY                         :  0.0, // QUAN (13.3) Quantity
  REC_IND                          :   "", // CHAR (2) ALPHA=ALPHA Recovery Indicator
  REF_DATE                         :   "", // DATS (8) Reference date for settlement
  RES_ITEM                         :   "", // NUMC (3) Earmarked Funds: Document Item
  RL_EST_KEY                       :   "", // CHAR (8) ALPHA=IMKEY Internal Key for Real Estate Object
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  SDOC_ITEM                        :   "", // NUMC (6) Sales Document Item
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber
  TO_COSTCTR                       :   "", // CHAR (1) Posting to cost center?
  TO_ORDER                         :   "", // CHAR (1) Post To Order
  TO_PROJECT                       :   "", // CHAR (1) Post to project
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  WBS_ELEM_E                       :   "", // CHAR (24) ALPHA=ABPSN Work breakdown structure element (WBS element)
};
/* eslint-enable key-spacing */

// PO_ITEM_ADD_DATA BAPIEKPOA Additional Data: PO Item

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_ADD_DATA = {
  BUS_TRANST                       :   "", // CHAR (2) Business Transaction Type for Foreign Trade
  COMM_CODE                        :   "", // CHAR (17) Commodity Code/Import Code Number for Foreign Trade
  COUNT_ORIG                       :   "", // CHAR (3) Country of Origin of Material (Non-Preferential Origin)
  DEL_COMPL                        :   "", // CHAR (1) "Delivery Completed" Indicator
  EXPIMPPROC                       :   "", // CHAR (5) Export/Import procedure for foreign trade (5 digits)
  FINAL_INV                        :   "", // CHAR (1) Final Invoice Indicator
  GR_IND                           :   "", // CHAR (1) Goods Receipt Indicator
  GR_NON_VAL                       :   "", // CHAR (1) Goods Receipt, Non-Valuated
  INFO_UPD                         :   "", // CHAR (1) Indicator: Update Info Record
  IR_IND                           :   "", // CHAR (1) Invoice receipt indicator
  OVERDELTOL                       :    0, // DEC (3.1) Overdelivery Tolerance Limit
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document
  REG_ORIGIN                       :   "", // CHAR (3) Region of Origin of Material (Non-Preferential Origin)
  REMINDER1                        :    0, // DEC (3) Number of Days for First Reminder/Expediter
  REMINDER2                        :    0, // DEC (3) Number of Days for Second Reminder/Expediter
  REMINDER3                        :    0, // DEC (3) Number of Days for Third Reminder/Expediter
  UNDER_TOL                        :    0, // DEC (3.1) Underdelivery Tolerance Limit
  UNLIMITED                        :   "", // CHAR (1) Indicator: Unlimited Overdelivery Allowed
};
/* eslint-enable key-spacing */

// PO_ITEM_TEXT BAPIEKPOTX Table of Item Texts

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_TEXT = {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  TEXT_FORM                        :   "", // CHAR (2) Tag column
  TEXT_ID                          :   "", // CHAR (4) Text ID
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};
/* eslint-enable key-spacing */

// PO_LIMITS BAPIESUHC Limits

/* eslint-disable key-spacing */
// prettier-ignore
PO_LIMITS = {
  CONT_PERC                        :    0, // DEC (3.1) Percentage for price determination
  CON_EXIST                        :   "", // CHAR (1) Limit on contract items exists
  EDITION                          :   "", // NUMC (4) Edition of Service Type
  EXP_VALUE                        :    0, // DEC (23.4) Expected value
  FREE_LIMIT                       :    0, // DEC (23.4) Free limit
  LIMIT                            :    0, // DEC (23.4) Overall limit
  NO_FRLIMIT                       :   "", // CHAR (1) No Limit
  NO_LIMIT                         :   "", // CHAR (1) No Limit
  PCKG_NO                          :   "", // NUMC (10) Package number
  PRICE_CHG                        :   "", // CHAR (1) Price Change in Entry Sheet
  SERV_TYPE                        :   "", // CHAR (3) Short Description of Service Type
  SSC_EXIST                        :   "", // CHAR (1) Limits exist for service types
  SSC_LIMIT                        :    0, // DEC (23.4) Value limits on service types
  SSC_NOLIM                        :   "", // CHAR (1) No limit on standard service type
  SSC_PERC                         :    0, // DEC (3.1) Percentage for price determination
  SSC_PRSCHG                       :   "", // CHAR (1) Price Change in Entry Sheet
  TMP_EXIST                        :   "", // CHAR (1) Limit on service packages exists
  TMP_LIMIT                        :    0, // DEC (23.4) Limits on model service specifications
  TMP_NOLIM                        :   "", // CHAR (1) No Limit on Model Specifications
  TMP_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Number of a Set of Model Service Specifications
  TMP_PERC                         :    0, // DEC (3.1) Percentage for Price Determination
  TMP_PRSCHG                       :   "", // CHAR (1) Price Change in Entry Sheet
};
/* eslint-enable key-spacing */

// PO_SERVICES BAPIESLLC Services

/* eslint-disable key-spacing */
// prettier-ignore
PO_SERVICES = {
  ALTERNAT                         :   "", // CHAR (1) Alternative Line
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASIC_LINE                       :   "", // CHAR (1) Basic Line
  BASLINE_NO                       :   "", // NUMC (10) Alternatives: Reference to basic item
  BEGINTIME                        :   "", // TIMS (6) Start Time
  BIDDER                           :   "", // CHAR (1) Bidder's Line
  BLANKET                          :   "", // CHAR (1) Blanket Line
  CON_LINE                         :   "", // NUMC (10) Entry: Unplanned from contract
  CON_PCKG                         :   "", // NUMC (10) Entry: Unplanned from contract
  DATE                             :   "", // DATS (8) Date
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
  DISTRIB                          :   "", // CHAR (1) Distribution indicator for multiple account assignment
  EDITION                          :   "", // NUMC (4) Edition of Service Type
  ENDTIME                          :   "", // TIMS (6) End Time
  EVENTUAL                         :   "", // CHAR (1) Contingency Line
  EXTERNAL_ITEM_ID                 :   "", // CHAR (40) SRM Reference Key
  EXTPERS_NO                       :   "", // CHAR (40) External Personnel Number
  EXTREFKEY                        :   "", // CHAR (40) External Reference Key for Service
  EXT_LINE                         :   "", // NUMC (10) Line Number
  EXT_SERV                         :   "", // CHAR (18) Vendor's Service Number
  FORMULA                          :   "", // CHAR (10) Formula Number
  FORM_VAL1                        :  0.0, // QUAN (13.3) Formula Value
  FORM_VAL2                        :  0.0, // QUAN (13.3) Formula value
  FORM_VAL3                        :  0.0, // QUAN (13.3) Formula value
  FORM_VAL4                        :  0.0, // QUAN (13.3) Formula value
  FORM_VAL5                        :  0.0, // QUAN (13.3) Formula value
  FROM_LINE                        :   "", // CHAR (6) Lower Limit
  GR_PRICE                         :    0, // DEC (23.4) Gross price
  HI_LINE_NO                       :   "", // NUMC (10) Hierarchically superior line number
  INFORM                           :   "", // CHAR (1) Informatory Line
  LIMIT_LINE                       :   "", // NUMC (10) Entry: Unplanned, limit line
  LINE_NO                          :   "", // NUMC (10) Internal line number
  MATL_GROUP                       :   "", // CHAR (9) Material Group
  NET_VALUE                        :    0, // DEC (23.4) Net value
  OPEN_QTY                         :   "", // CHAR (1) Line with Open Quantity
  OUTL_IND                         :   "", // CHAR (1) Indicator: Outline line
  OUTL_LEVEL                       :    0, // INT1 (3) Hierarchy level of group
  OUTL_NO                          :   "", // CHAR (8) Outline Level
  OVF_TOL                          :    0, // DEC (3.1) Overfulfillment Tolerance
  OVF_UNLIM                        :   "", // CHAR (1) Unlimited Overfulfillment
  PCKG_NO                          :   "", // NUMC (10) Package number
  PERS_NO                          :   "", // NUMC (8) Personnel Number
  PER_EDATE                        :   "", // DATS (8) Period of Performance End Date
  PER_SDATE                        :   "", // DATS (8) Period of Performance Start Date
  PLN_LINE                         :   "", // NUMC (10) Entry: Planned package line
  PLN_PCKG                         :   "", // NUMC (10) Source package number
  PRICE_CHG                        :   "", // CHAR (1) Price Change in Entry Sheet
  PRICE_UNIT                       :    0, // DEC (5) Price unit
  QUANTITY                         :  0.0, // QUAN (13.3) Quantity with Sign
  SERVICE                          :   "", // CHAR (18) ALPHA=ALPHA Activity Number
  SERVICE_ITEM_KEY                 :   "", // NUMC (10) Item Key for eSOA Messages
  SERV_TYPE                        :   "", // CHAR (3) Short Description of Service Type
  SHORT_TEXT                       :   "", // CHAR (40) Short Text
  SSC_ITEM                         :   "", // CHAR (18) Standard Service Catalog Item
  SSC_LIM                          :   "", // CHAR (1) Service line refers to standard service catalog limits
  SUBPCKG_NO                       :   "", // NUMC (10) Subpackage number
  SUPP_LINE                        :   "", // CHAR (1) Supplementary Line
  TARGET_VAL                       :    0, // DEC (23.4) Target Value
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  TMP_LINE                         :   "", // NUMC (10) Entry: Unplanned service from model specifications
  TMP_PCKG                         :   "", // NUMC (10) Entry: Unplanned service from model specifications
  TO_LINE                          :   "", // CHAR (6) Upper Limit
  UOM_ISO                          :   "", // CHAR (3) ISO code for unit of measurement
  USERF1_NUM                       :   "", // NUMC (10) User-Defined Field
  USERF1_TXT                       :   "", // CHAR (40) User-Defined Field
  USERF2_NUM                       :  0.0, // QUAN (13.3) User-Defined Field
  USERF2_TXT                       :   "", // CHAR (10) User-Defined Field
  WAGETYPE                         :   "", // CHAR (4) Wage Type
};
/* eslint-enable key-spacing */

// PO_SERVICES_TEXT BAPIESLLTX Text for Service Line

/* eslint-disable key-spacing */
// prettier-ignore
PO_SERVICES_TEXT = {
  FORMAT_COL                       :   "", // CHAR (2) Tag column
  LINE_NO                          :   "", // NUMC (10) Internal line number
  PCKG_NO                          :   "", // NUMC (10) Package number
  TEXT_ID                          :   "", // CHAR (4) Text ID
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};
/* eslint-enable key-spacing */

// PO_SRV_ACCASS_VALUES BAPIESKLC Value/Link to Service Account Assignment

/* eslint-disable key-spacing */
// prettier-ignore
PO_SRV_ACCASS_VALUES = {
  LINE_NO                          :   "", // NUMC (10) Line Number
  NET_VALUE                        :  0.0, // CURR (11.2) Net Value of Item
  PCKG_NO                          :   "", // NUMC (10) Package number
  PERCENTAGE                       :    0, // DEC (4.1) Percentage for Account Assignment Value Distribution
  QUANTITY                         :  0.0, // QUAN (13.3) Quantity with Sign
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  SERNO_LINE                       :   "", // NUMC (2) Seq. Number of Acc. Assignment Specification: Service Line
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

//
// OUTPUT PARAMETERS
//
