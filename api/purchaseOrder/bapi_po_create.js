//
// BAPI_PO_CREATE var: 4  struct: 4  table: 14  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

PO_HEADER                     :           {}, // BAPIEKKOC PO Header Data
// HEADER_ADD_DATA_RELEVANT   :           "", // CHAR (1) Indicator: Additional Data (Header) Relevant
// ITEM_ADD_DATA_RELEVANT     :           "", // CHAR (1) Indicator: Additional Data (Item) Relevant
// SKIP_ITEMS_WITH_ERROR      :          'X', // CHAR (1) Indicator: Skip Faulty Items
// HEADER_TECH_FIELDS         :           {}, // BAPITECH Technical Header Fields
// PO_ADDRESS                 :           {}, // BAPIADDRESS Ordering Address for One-Time Vendor
// PO_HEADER_ADD_DATA         :           {}, // BAPIEKKOA Additional Data: PO Header

// TABLE PARAMETERS

PO_ITEM_SCHEDULES             :           [], // BAPIEKET Table of Schedule Lines
PO_ITEMS                      :           [], // BAPIEKPOC Table of PO Items
// EXTENSIONIN                :           [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
// PO_BUSINESS_PARTNER        :           [], // BAPIEKKOP Partner Roles
// PO_CONTRACT_LIMITS         :           [], // BAPIESUCC Limits with Contract Reference
// PO_ITEM_ACCOUNT_ASSIGNMENT :           [], // BAPIEKKN Table of Account Assignments
// PO_ITEM_ADD_DATA           :           [], // BAPIEKPOA Additional Data: PO Item
// PO_ITEM_TEXT               :           [], // BAPIEKPOTX Table of Item Texts
// PO_LIMITS                  :           [], // BAPIESUHC Limits
// PO_SERVICES                :           [], // BAPIESLLC Services
// PO_SERVICES_TEXT           :           [], // BAPIESLLTX Text for Service Line
// PO_SRV_ACCASS_VALUES       :           [], // BAPIESKLC Value/Link to Service Account Assignment
// POADDRDELIVERY             :           [], // BAPIMEPOADDRDELIVERY PO Item: Address Structure BAPIADDR1 for Inbound Delivery
// RETURN                     :           [], // BAPIRETURN Return Messages

// EXPORT PARAMETERS

// PURCHASEORDER              :           "", // CHAR (10) ALPHA=ALPHA Purchase Order Number SU3=BES
};

const result = await client.call("BAPI_PO_CREATE", parameters);

//
// IMPORT PARAMETERS
//

// BAPIEKKOC  PO Header Data

// prettier-ignore
const PO_HEADER= {
  DOC_DATE                         :   "", // DATS (8) Purchasing Document Date
  DOC_TYPE                         :   "", // CHAR (4) Purchasing Document Type SU3=BSA
  DOC_CAT                          :   "", // CHAR (1) Purchasing Document Category
  CO_CODE                          :   "", // CHAR (4) Company Code SU3=BUK
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization SU3=EKO
  PUR_GROUP                        :   "", // CHAR (3) Purchasing Group SU3=EKG
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement SU3=KTR
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  SUPPL_PLNT                       :   "", // CHAR (4) Supplying (issuing) plant in case of stock transport order
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) ISO code for language key
};

// BAPITECH  Technical Header Fields

// prettier-ignore
const HEADER_TECH_FIELDS= {
  NO_PRICE_FROM_PO                 :   "", // CHAR (1) Checkbox
  NO_MESSAGING                     :   "", // CHAR (1) Checkbox
  NO_MESSAGE_REQ                   :   "", // CHAR (1) Checkbox
  NO_AUTHORITY                     :   "", // CHAR (1) Checkbox
};

// BAPIADDRESS  Ordering Address for One-Time Vendor

// prettier-ignore
const PO_ADDRESS= {
  ADDRNUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Address number SU3=ADR
  ADDRHANDLE                       :   "", // CHAR (140) Handle for Creating Addresses/Persons (Bus. Addr. Services)
  NATION                           :   "", // CHAR (1) Version ID for International Addresses SU3=ADDRESS_NATION
  DATE                             :   "", // DATS (8) Date referred to
  DATE_FROM                        :   "", // DATS (8) Valid-from date - in current Release only 00010101 possible
  DATE_TO                          :   "", // DATS (8) Valid-to date in current Release only 99991231 possible
  TITLE                            :   "", // CHAR (4) Form-of-Address Key
  NAME1                            :   "", // CHAR (40) Name 1
  NAME2                            :   "", // CHAR (40) Name 2
  NAME3                            :   "", // CHAR (40) Name 3
  NAME4                            :   "", // CHAR (40) Name 4
  NAME_TXT                         :   "", // CHAR (50) Converted name field (with form of address)
  NAME_CO                          :   "", // CHAR (40) c/o name
  CITY1                            :   "", // CHAR (40) City
  CITY2                            :   "", // CHAR (40) District
  CITY_CODE                        :   "", // CHAR (12) ALPHA=ALPHA City code for city/street file
  CITYP_CODE                       :   "", // CHAR (8) ALPHA=ALPHA District code for City and Street file
  CHCKSTATUS                       :   "", // CHAR (1) City file test status
  POST_CODE1                       :   "", // CHAR (10) City postal code
  POST_CODE2                       :   "", // CHAR (10) PO Box Postal Code
  POST_CODE3                       :   "", // CHAR (10) Company Postal Code (for Large Customers)
  PO_BOX                           :   "", // CHAR (10) PO Box
  PO_BOX_NUM                       :   "", // CHAR (1) Flag: PO Box Without Number
  PO_BOX_LOC                       :   "", // CHAR (40) PO Box city
  CITY_CODE2                       :   "", // CHAR (12) ALPHA=ALPHA City PO box code (City file)
  PO_BOX_REG                       :   "", // CHAR (3) Region for PO Box (Country, State, Province, ...)
  PO_BOX_CTY                       :   "", // CHAR (3) PO box country
  POSTALAREA                       :   "", // CHAR (15) (Not Supported) Post Delivery District
  TRANSPZONE                       :   "", // CHAR (10) Transportation zone to or from which the goods are delivered
  STREET                           :   "", // CHAR (60) Street
  STREETCODE                       :   "", // CHAR (12) ALPHA=ALPHA Street Number for City/Street File
  STREETABBR                       :   "", // CHAR (2) (Not Supported) Abbreviation of Street Name
  HOUSE_NUM1                       :   "", // CHAR (10) House Number
  HOUSE_NUM2                       :   "", // CHAR (10) House number supplement
  HOUSE_NUM3                       :   "", // CHAR (10) (Not supported) House Number Range
  STR_SUPPL1                       :   "", // CHAR (40) Street 2
  STR_SUPPL2                       :   "", // CHAR (40) Street 3
  LOCATION                         :   "", // CHAR (40) Street 5
  BUILDING                         :   "", // CHAR (10) old: building (no. or abbreviation)
  FLOOR                            :   "", // CHAR (10) Floor in building
  ROOMNUMBER                       :   "", // CHAR (10) Room or Appartment Number
  COUNTRY                          :   "", // CHAR (3) Country Key SU3=LND
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  SORT1                            :   "", // CHAR (20) Search Term 1
  SORT2                            :   "", // CHAR (20) Search Term 2
  SORT_PHN                         :   "", // CHAR (20) (Not Supported) Phonetic Search Sort Field
  ADDRORIGIN                       :   "", // CHAR (4) (Not Supported) Address Data Source (Key)
  EXTENSION1                       :   "", // CHAR (40) Extension (only for data conversion) (data line/telebox)
  EXTENSION2                       :   "", // CHAR (40) Extension (only for data conversion) (data line/telebox)
  TIME_ZONE                        :   "", // CHAR (6) Address time zone
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  ADDRESS_ID                       :   "", // CHAR (10) ALPHA=ALPHA (Not supported) Physical address ID
  REMARK                           :   "", // CHAR (50) Address notes
  DEFLT_COMM                       :   "", // CHAR (3) Communication Method (Key) (Business Address Services)
  TEL_NUMBER                       :   "", // CHAR (30) First telephone no.: dialling code+number
  TEL_EXTENS                       :   "", // CHAR (10) First Telephone No.: Extension
  FAX_NUMBER                       :   "", // CHAR (30) First fax no.: dialling code+number
  FAX_EXTENS                       :   "", // CHAR (10) First fax no.: extension
  BUILD_LONG                       :   "", // CHAR (20) Building (Number or Code)
};

// BAPIEKKOA  Additional Data: PO Header

// prettier-ignore
const PO_HEADER_ADD_DATA= {
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  DSCNT1_TO                        :  "0", // DEC (3) Cash discount days 1
  DSCNT2_TO                        :  "0", // DEC (3) Cash discount days 2
  DSCNT3_TO                        :  "0", // DEC (3) Cash discount days 3
  CASH_DISC1                       :  "0", // DEC (5.3) Cash discount percentage 1
  CASH_DISC2                       :  "0", // DEC (5.3) Cash Discount Percentage 2
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  EXCH_RATE                        :  "0", // DEC (9.5) Direct Quoted Exchange Rate
  EX_RATE_FX                       :   "", // CHAR (1) Indicator: Fixing of Exchange Rate
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  REF_1                            :   "", // CHAR (12) Your Reference
  SALES_PERS                       :   "", // CHAR (30) Responsible Salesperson at Vendor's Office
  TELEPHONE                        :   "", // CHAR (16) Vendor's Telephone Number
  TRNSP_MODE                       :   "", // CHAR (1) Mode of Transport for Foreign Trade
  CUSTOMS                          :   "", // CHAR (6) Customs Office: Office of Exit/Entry for Foreign Trade
  EXCH_RATE_CM                     :  "0", // DEC (9.5) Indirect Quoted Exchange Rate
  VPER_START                       :   "", // DATS (8) Start of Validity Period
  VPER_END                         :   "", // DATS (8) End of Validity Period
  OUR_REF                          :   "", // CHAR (12) Our Reference
};


//
// TABLE PARAMETERS
//

// BAPIEKET  Table of Schedule Lines
const PO_ITEM_SCHEDULES= [];

// prettier-ignore
const PO_ITEM_SCHEDULES= {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  SERIAL_NO                        :   "", // NUMC (4) Delivery Schedule Line Counter
  DEL_DATCAT                       :   "", // CHAR (1) Date type (day, week, month, interval)
  DELIV_DATE                       :   "", // DATS (8) Item delivery date
  DELIV_TIME                       :   "", // TIMS (6) Delivery Date Time-Spot
  QUANTITY                         : "0.0", // QUAN (13.3) Scheduled Quantity
  PREQ_NO                          :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number SU3=BAN
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition SU3=BAP
  CREATE_IND                       :   "", // CHAR (1) Creation indicator (purchase requisition/schedule lines)
  QUOTA_NO                         :   "", // CHAR (10) ALPHA=ALPHA Number of quota arrangement
  QUOTA_ITEM                       :   "", // NUMC (3) Quota arrangement item
  BOMEXPL_NO                       :   "", // CHAR (8) BOM explosion number
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  VEND_BATCH                       :   "", // CHAR (15) Vendor Batch Number
  VERSION                          :   "", // CHAR (4) Production Version SU3=VER
  DEL_DATCAT_EXT                   :   "", // CHAR (1) Category of delivery date
};

// BAPIEKPOC  Table of PO Items
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

// BAPIPAREX  Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
const EXTENSIONIN= [];

// prettier-ignore
const EXTENSIONIN= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIEKKOP  Partner Roles
const PO_BUSINESS_PARTNER= [];

// prettier-ignore
const PO_BUSINESS_PARTNER= {
  PARTNERDESC                      :   "", // CHAR (2) Language-specific description of partner function
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  BUSPARTNO                        :   "", // CHAR (10) ALPHA=ALPHA Number of a Business Partner in Vendor Master Record
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
};

// BAPIESUCC  Limits with Contract Reference
const PO_CONTRACT_LIMITS= [];

// prettier-ignore
const PO_CONTRACT_LIMITS= {
  PCKG_NO                          :   "", // NUMC (10) Package number
  LINE_NO                          :   "", // NUMC (10) Internal line number for limits
  CON_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Contract number
  CON_ITEM                         :   "", // NUMC (5) Item number, contract
  LIMIT                            :  "0", // DEC (23.4) Overall limit
  NO_LIMIT                         :   "", // CHAR (1) No Limit
  PRICE_CHG                        :   "", // CHAR (1) Price Change in Entry Sheet
  SHORT_TEXT                       :   "", // CHAR (40) Short Text 1
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
};

// BAPIEKKN  Table of Account Assignments
const PO_ITEM_ACCOUNT_ASSIGNMENT= [];

// prettier-ignore
const PO_ITEM_ACCOUNT_ASSIGNMENT= {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  QUANTITY                         : "0.0", // QUAN (13.3) Quantity
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
  FUNDS_RES                        :   "", // CHAR (10) ALPHA=ALPHA Document number for earmarked funds SU3=KBL
  RES_ITEM                         :   "", // NUMC (3) Earmarked Funds: Document Item SU3=KBP
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period SU3=BUDPER
};

// BAPIEKPOA  Additional Data: PO Item
const PO_ITEM_ADD_DATA= [];

// prettier-ignore
const PO_ITEM_ADD_DATA= {
  INFO_UPD                         :   "", // CHAR (1) Indicator: Update Info Record
  REMINDER1                        :  "0", // DEC (3) Number of Days for First Reminder/Expediter
  REMINDER2                        :  "0", // DEC (3) Number of Days for Second Reminder/Expediter
  REMINDER3                        :  "0", // DEC (3) Number of Days for Third Reminder/Expediter
  OVERDELTOL                       :  "0", // DEC (3.1) Overdelivery Tolerance Limit
  UNLIMITED                        :   "", // CHAR (1) Indicator: Unlimited Overdelivery Allowed
  UNDER_TOL                        :  "0", // DEC (3.1) Underdelivery Tolerance Limit
  GR_IND                           :   "", // CHAR (1) Goods Receipt Indicator
  GR_NON_VAL                       :   "", // CHAR (1) Goods Receipt, Non-Valuated
  IR_IND                           :   "", // CHAR (1) Invoice receipt indicator
  DEL_COMPL                        :   "", // CHAR (1) "Delivery Completed" Indicator
  FINAL_INV                        :   "", // CHAR (1) Final Invoice Indicator
  BUS_TRANST                       :   "", // CHAR (2) Business Transaction Type for Foreign Trade SU3=EXA
  EXPIMPPROC                       :   "", // CHAR (5) Export/Import procedure for foreign trade (5 digits)
  COMM_CODE                        :   "", // CHAR (17) Commodity Code/Import Code Number for Foreign Trade
  REG_ORIGIN                       :   "", // CHAR (3) Region of Origin of Material (Non-Preferential Origin)
  COUNT_ORIG                       :   "", // CHAR (3) Country of Origin of Material (Non-Preferential Origin) SU3=LND
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
};

// BAPIEKPOTX  Table of Item Texts
const PO_ITEM_TEXT= [];

// prettier-ignore
const PO_ITEM_TEXT= {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  TEXT_ID                          :   "", // CHAR (4) Text ID
  TEXT_FORM                        :   "", // CHAR (2) Tag column
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};

// BAPIESUHC  Limits
const PO_LIMITS= [];

// prettier-ignore
const PO_LIMITS= {
  PCKG_NO                          :   "", // NUMC (10) Package number
  LIMIT                            :  "0", // DEC (23.4) Overall limit
  NO_LIMIT                         :   "", // CHAR (1) No Limit
  EXP_VALUE                        :  "0", // DEC (23.4) Expected value
  SSC_EXIST                        :   "", // CHAR (1) Limits exist for service types
  CON_EXIST                        :   "", // CHAR (1) Limit on contract items exists
  TMP_EXIST                        :   "", // CHAR (1) Limit on service packages exists
  PRICE_CHG                        :   "", // CHAR (1) Price Change in Entry Sheet
  FREE_LIMIT                       :  "0", // DEC (23.4) Free limit
  NO_FRLIMIT                       :   "", // CHAR (1) No Limit
  SERV_TYPE                        :   "", // CHAR (3) Short Description of Service Type SU3=LBR
  EDITION                          :   "", // NUMC (4) Edition of Service Type SU3=AGB
  SSC_LIMIT                        :  "0", // DEC (23.4) Value limits on service types
  SSC_NOLIM                        :   "", // CHAR (1) No limit on standard service type
  SSC_PRSCHG                       :   "", // CHAR (1) Price Change in Entry Sheet
  SSC_PERC                         :  "0", // DEC (3.1) Percentage for price determination
  TMP_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Number of a Set of Model Service Specifications SU3=MSP
  TMP_LIMIT                        :  "0", // DEC (23.4) Limits on model service specifications
  TMP_NOLIM                        :   "", // CHAR (1) No Limit on Model Specifications
  TMP_PRSCHG                       :   "", // CHAR (1) Price Change in Entry Sheet
  TMP_PERC                         :  "0", // DEC (3.1) Percentage for Price Determination
  CONT_PERC                        :  "0", // DEC (3.1) Percentage for price determination
};

// BAPIESLLC  Services
const PO_SERVICES= [];

// prettier-ignore
const PO_SERVICES= {
  PCKG_NO                          :   "", // NUMC (10) Package number
  LINE_NO                          :   "", // NUMC (10) Internal line number
  EXT_LINE                         :   "", // NUMC (10) Line Number
  OUTL_LEVEL                       :    0, // INT1 (3) Hierarchy level of group
  OUTL_NO                          :   "", // CHAR (8) Outline Level
  OUTL_IND                         :   "", // CHAR (1) Indicator: Outline line
  SUBPCKG_NO                       :   "", // NUMC (10) Subpackage number
  SERVICE                          :   "", // CHAR (18) ALPHA=ALPHA Activity Number SU3=ASN
  SERV_TYPE                        :   "", // CHAR (3) Short Description of Service Type SU3=LBR
  EDITION                          :   "", // NUMC (4) Edition of Service Type SU3=AGB
  SSC_ITEM                         :   "", // CHAR (18) Standard Service Catalog Item
  EXT_SERV                         :   "", // CHAR (18) Vendor's Service Number
  QUANTITY                         : "0.0", // QUAN (13.3) Quantity with Sign
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  UOM_ISO                          :   "", // CHAR (3) ISO code for unit of measurement
  OVF_TOL                          :  "0", // DEC (3.1) Overfulfillment Tolerance
  OVF_UNLIM                        :   "", // CHAR (1) Unlimited Overfulfillment
  PRICE_UNIT                       :  "0", // DEC (5) Price unit
  GR_PRICE                         :  "0", // DEC (23.4) Gross price
  FROM_LINE                        :   "", // CHAR (6) Lower Limit
  TO_LINE                          :   "", // CHAR (6) Upper Limit
  SHORT_TEXT                       :   "", // CHAR (40) Short Text
  DISTRIB                          :   "", // CHAR (1) Distribution indicator for multiple account assignment
  PERS_NO                          :   "", // NUMC (8) Personnel Number SU3=PER
  WAGETYPE                         :   "", // CHAR (4) Wage Type
  PLN_PCKG                         :   "", // NUMC (10) Source package number
  PLN_LINE                         :   "", // NUMC (10) Entry: Planned package line
  CON_PCKG                         :   "", // NUMC (10) Entry: Unplanned from contract
  CON_LINE                         :   "", // NUMC (10) Entry: Unplanned from contract
  TMP_PCKG                         :   "", // NUMC (10) Entry: Unplanned service from model specifications
  TMP_LINE                         :   "", // NUMC (10) Entry: Unplanned service from model specifications
  SSC_LIM                          :   "", // CHAR (1) Service line refers to standard service catalog limits
  LIMIT_LINE                       :   "", // NUMC (10) Entry: Unplanned, limit line
  TARGET_VAL                       :  "0", // DEC (23.4) Target Value
  BASLINE_NO                       :   "", // NUMC (10) Alternatives: Reference to basic item
  BASIC_LINE                       :   "", // CHAR (1) Basic Line
  ALTERNAT                         :   "", // CHAR (1) Alternative Line
  BIDDER                           :   "", // CHAR (1) Bidder's Line
  SUPP_LINE                        :   "", // CHAR (1) Supplementary Line
  OPEN_QTY                         :   "", // CHAR (1) Line with Open Quantity
  INFORM                           :   "", // CHAR (1) Informatory Line
  BLANKET                          :   "", // CHAR (1) Blanket Line
  EVENTUAL                         :   "", // CHAR (1) Contingency Line
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  PRICE_CHG                        :   "", // CHAR (1) Price Change in Entry Sheet
  MATL_GROUP                       :   "", // CHAR (9) Material Group SU3=MKL
  DATE                             :   "", // DATS (8) Date
  BEGINTIME                        :   "", // TIMS (6) Start Time
  ENDTIME                          :   "", // TIMS (6) End Time
  EXTPERS_NO                       :   "", // CHAR (40) External Personnel Number
  FORMULA                          :   "", // CHAR (10) Formula Number
  FORM_VAL1                        : "0.0", // QUAN (13.3) Formula Value
  FORM_VAL2                        : "0.0", // QUAN (13.3) Formula value
  FORM_VAL3                        : "0.0", // QUAN (13.3) Formula value
  FORM_VAL4                        : "0.0", // QUAN (13.3) Formula value
  FORM_VAL5                        : "0.0", // QUAN (13.3) Formula value
  USERF1_NUM                       :   "", // NUMC (10) User-Defined Field
  USERF2_NUM                       : "0.0", // QUAN (13.3) User-Defined Field
  USERF1_TXT                       :   "", // CHAR (40) User-Defined Field
  USERF2_TXT                       :   "", // CHAR (10) User-Defined Field
  HI_LINE_NO                       :   "", // NUMC (10) Hierarchically superior line number
  EXTREFKEY                        :   "", // CHAR (40) External Reference Key for Service
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
  PER_SDATE                        :   "", // DATS (8) Period of Performance Start Date
  PER_EDATE                        :   "", // DATS (8) Period of Performance End Date
  EXTERNAL_ITEM_ID                 :   "", // CHAR (40) SRM Reference Key
  SERVICE_ITEM_KEY                 :   "", // NUMC (10) Item Key for eSOA Messages
  NET_VALUE                        :  "0", // DEC (23.4) Net value
};

// BAPIESLLTX  Text for Service Line
const PO_SERVICES_TEXT= [];

// prettier-ignore
const PO_SERVICES_TEXT= {
  PCKG_NO                          :   "", // NUMC (10) Package number
  LINE_NO                          :   "", // NUMC (10) Internal line number
  TEXT_ID                          :   "", // CHAR (4) Text ID
  FORMAT_COL                       :   "", // CHAR (2) Tag column
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};

// BAPIESKLC  Value/Link to Service Account Assignment
const PO_SRV_ACCASS_VALUES= [];

// prettier-ignore
const PO_SRV_ACCASS_VALUES= {
  PCKG_NO                          :   "", // NUMC (10) Package number
  LINE_NO                          :   "", // NUMC (10) Line Number
  SERNO_LINE                       :   "", // NUMC (2) Seq. Number of Acc. Assignment Specification: Service Line
  PERCENTAGE                       :  "0", // DEC (4.1) Percentage for Account Assignment Value Distribution
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  QUANTITY                         : "0.0", // QUAN (13.3) Quantity with Sign
  NET_VALUE                        : "0.0", // CURR (11.2) Net Value of Item
};

// BAPIMEPOADDRDELIVERY  PO Item: Address Structure BAPIADDR1 for Inbound Delivery
const POADDRDELIVERY= [];

// prettier-ignore
const POADDRDELIVERY= {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA Address number SU3=ADR
  FORMOFADDR                       :   "", // CHAR (20) Form of address text
  NAME                             :   "", // CHAR (40) Name 1
  NAME_2                           :   "", // CHAR (40) Name 2
  NAME_3                           :   "", // CHAR (40) Name 3
  NAME_4                           :   "", // CHAR (40) Name 4
  C_O_NAME                         :   "", // CHAR (40) c/o name
  CITY                             :   "", // CHAR (40) City
  DISTRICT                         :   "", // CHAR (40) District
  CITY_NO                          :   "", // CHAR (12) ALPHA=ALPHA City code for city/street file
  POSTL_COD1                       :   "", // CHAR (10) City postal code
  POSTL_COD2                       :   "", // CHAR (10) PO Box Postal Code
  POSTL_COD3                       :   "", // CHAR (10) Company Postal Code (for Large Customers)
  PO_BOX                           :   "", // CHAR (10) PO Box
  PO_BOX_CIT                       :   "", // CHAR (40) PO Box city
  DELIV_DIS                        :   "", // CHAR (15) (Not Supported) Post Delivery District
  STREET                           :   "", // CHAR (60) Street
  STREET_NO                        :   "", // CHAR (12) ALPHA=ALPHA Street Number for City/Street File
  STR_ABBR                         :   "", // CHAR (2) (Not Supported) Abbreviation of Street Name
  HOUSE_NO                         :   "", // CHAR (10) House Number
  STR_SUPPL1                       :   "", // CHAR (40) Street 2
  STR_SUPPL2                       :   "", // CHAR (40) Street 3
  LOCATION                         :   "", // CHAR (40) Street 5
  BUILDING                         :   "", // CHAR (10) old: building (no. or abbreviation)
  FLOOR                            :   "", // CHAR (10) Floor in building
  ROOM_NO                          :   "", // CHAR (10) Room or Appartment Number
  COUNTRY                          :   "", // CHAR (3) Country Key SU3=LND
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  SORT1                            :   "", // CHAR (20) Search Term 1
  SORT2                            :   "", // CHAR (20) Search Term 2
  TIME_ZONE                        :   "", // CHAR (6) Address time zone
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  ADR_NOTES                        :   "", // CHAR (50) Address notes
  COMM_TYPE                        :   "", // CHAR (3) Communication Method (Key) (Business Address Services)
  TEL1_NUMBR                       :   "", // CHAR (30) First telephone no.: dialling code+number
  TEL1_EXT                         :   "", // CHAR (10) First Telephone No.: Extension
  FAX_NUMBER                       :   "", // CHAR (30) First fax no.: dialling code+number
  FAX_EXTENS                       :   "", // CHAR (10) First fax no.: extension
  STREET_LNG                       :   "", // CHAR (60) Street
  DISTRCT_NO                       :   "", // CHAR (8) ALPHA=ALPHA District code for City and Street file
  CHCKSTATUS                       :   "", // CHAR (1) City file test status
  PBOXCIT_NO                       :   "", // CHAR (12) ALPHA=ALPHA City PO box code (City file)
  TRANSPZONE                       :   "", // CHAR (10) Transportation zone to or from which the goods are delivered
  HOUSE_NO2                        :   "", // CHAR (10) House number supplement
  E_MAIL                           :   "", // CHAR (241) ALPHA=SXIDN E-Mail Address
  STR_SUPPL3                       :   "", // CHAR (40) Street 4
  TITLE                            :   "", // CHAR (30) Title text
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  BUILD_LONG                       :   "", // CHAR (20) Building (Number or Code)
  REGIOGROUP                       :   "", // CHAR (8) Regional structure grouping
  SUPP_VENDOR                      :   "", // CHAR (10) ALPHA=ALPHA Vendor to be supplied/who is to receive delivery
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer SU3=KUN
  SC_VENDOR                        :   "", // CHAR (1) Subcontracting vendor
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


//
// EXPORT PARAMETERS
//
