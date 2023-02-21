//
// BAPI_PO_GET_LIST exception: 2  struct: 0  table: 5  var: 3
//
// abap api
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// ITEMS_FOR_RELEASE          :          'X', // CHAR (1) Indicator: Display Purchase Orders Awaiting Release Only
// REL_CODE                   :           "", // CHAR (2) Release Code SU3=BFC
// REL_GROUP                  :           "", // CHAR (2) Release Group

// TABLE PARAMETERS

PO_HEADERS                    :           [], // BAPIEKKO PO Header Data
PO_ITEMS                      :           [], // BAPIEKPO Purchase Order Items
// PO_ADDRESSES               :           [], // BAPIEKAN Vendor Address for SAP Releases < 4.0A
// PO_ADDRESSES_NEW           :           [], // BAPIADDRESS Vendor Address for SAP Releases >= 4.0A
// RETURN                     :           [], // BAPIRETURN Processing Errors That Occurred

// EXCEPTION PARAMETERS

// REL_AUTHORITY_CHECK_FAILED      // No Authorization to Release
// REL_CODE_MISSING                // Release Code Missing
};

const result = await client.call("BAPI_PO_GET_LIST", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIEKKO  PO Header Data
const PO_HEADERS = [];

// prettier-ignore
const PO_HEADERS_line = {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  DOC_DATE                         :   "", // DATS (8) Purchasing Document Date
  DOC_TYPE                         :   "", // CHAR (4) Purchasing Document Type SU3=BSA
  PUR_GROUP                        :   "", // CHAR (3) Purchasing Group SU3=EKG
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization SU3=EKO
  SUPPL_PLNT                       :   "", // CHAR (4) Supplying (issuing) plant in case of stock transport order
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
};

// BAPIEKPO  Purchase Order Items
const PO_ITEMS = [];

// prettier-ignore
const PO_ITEMS_line = {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  DELETE_IND                       :   "", // CHAR (1) Deletion indicator in purchasing document
  STATUS                           :   "", // CHAR (1) RFQ status
  CHANGED_ON                       :   "", // DATS (8) Purchasing Document Item Change Date
  SHORT_TEXT                       :   "", // CHAR (40) Short Text
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PUR_MAT                          :   "", // CHAR (18) ALPHA=MATN1 Material number SU3=MAT
  CO_CODE                          :   "", // CHAR (4) Company Code SU3=BUK
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  STORE_LOC                        :   "", // CHAR (4) Storage location SU3=LAG
  TRACKINGNO                       :   "", // CHAR (10) Requirement Tracking Number
  MAT_GRP                          :   "", // CHAR (9) Material Group SU3=MKL
  INFO_REC                         :   "", // CHAR (10) ALPHA=ALPHA Number of purchasing info record SU3=INF
  VEND_MAT                         :   "", // CHAR (22) Material number used by vendor
  TARGET_QTY                       : "0.0", // QUAN (13.3) Target Quantity
  QUANTITY                         : "0.0", // QUAN (13.3) Purchase Order Quantity
  UNIT                             :   "", // UNIT (3) ALPHA=CUNIT Order unit
  ORDERPR_UN                       :   "", // UNIT (3) ALPHA=CUNIT Order Price Unit (Purchasing)
  CONV_NUM1                        :  "0", // DEC (5) Numerator for Conversion of Order Price Unit into Order Unit
  CONV_DEN1                        :  "0", // DEC (5) Denominator for Conv. of Order Price Unit into Order Unit
  CONV_NUM2                        :  "0", // DEC (5) Numerator for Conversion of Order Unit to Base Unit
  CONV_DEN2                        :  "0", // DEC (5) Denominator for Conversion of Order Unit to Base Unit
  NET_PRICE                        :  "0", // DEC (23.4) Net price in purchasing document (in document currency)
  PRICE_UNIT                       :  "0", // DEC (5) Price unit
  NET_VALUE                        :  "0", // DEC (23.4) Net order value in PO currency
  GROS_VALUE                       :  "0", // DEC (23.4) Gross order value in PO currency
  QUOT_DEAD                        :   "", // DATS (8) Deadline for Submission of Bid/Quotation
  GR_PR_TIME                       :  "0", // DEC (3) Goods receipt processing time in days
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  SETT_GRP1                        :   "", // CHAR (2) Settlement Group 1 (Purchasing)
  QUAL_INSP                        :   "", // CHAR (1) Stock Type
  INFO_UPD                         :   "", // CHAR (1) Indicator: Update Info Record
  PRNT_PRICE                       :   "", // CHAR (1) Price Printout
  EST_PRICE                        :   "", // CHAR (1) Indicator: Estimated Price
  NUM_REMIND                       :  "0", // DEC (3) Number of Reminders/Expediters
  REMINDER1                        :  "0", // DEC (3) Number of Days for First Reminder/Expediter
  REMINDER2                        :  "0", // DEC (3) Number of Days for Second Reminder/Expediter
  REMINDER3                        :  "0", // DEC (3) Number of Days for Third Reminder/Expediter
  OVERDELTOL                       :  "0", // DEC (3.1) Overdelivery Tolerance Limit
  UNLIMITED                        :   "", // CHAR (1) Indicator: Unlimited Overdelivery Allowed
  UNDER_TOL                        :  "0", // DEC (3.1) Underdelivery Tolerance Limit
  VAL_TYPE                         :   "", // CHAR (10) Valuation type SU3=BWT
  VAL_CAT                          :   "", // CHAR (1) Valuation Category
  REJ_IND                          :   "", // CHAR (1) Rejection Indicator
  COMMENT                          :   "", // CHAR (3) Internal Comment on Quotation
  DEL_COMPL                        :   "", // CHAR (1) "Delivery Completed" Indicator
  FINAL_INV                        :   "", // CHAR (1) Final Invoice Indicator
  ITEM_CAT                         :   "", // CHAR (1) Item category in purchasing document
  ACCTASSCAT                       :   "", // CHAR (1) Account assignment category SU3=KNT
  CONSUMPT                         :   "", // CHAR (1) Consumption posting
  DISTRIB                          :   "", // CHAR (1) Distribution indicator for multiple account assignment
  PART_INV                         :   "", // CHAR (1) Partial invoice indicator
  GR_IND                           :   "", // CHAR (1) Goods Receipt Indicator
  GR_NON_VAL                       :   "", // CHAR (1) Goods Receipt, Non-Valuated
  IR_IND                           :   "", // CHAR (1) Invoice receipt indicator
  GR_BASEDIV                       :   "", // CHAR (1) Indicator: GR-Based Invoice Verification
  ACKN_REQD                        :   "", // CHAR (1) Order Acknowledgment Requirement
  ACKNOWL_NO                       :   "", // CHAR (20) Order Acknowledgment Number
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement SU3=KTR
  AGMT_ITEM                        :   "", // NUMC (5) Item number of principal purchase agreement
  RECON_DATE                       :   "", // DATS (8) Reconciliation date for agreed cumulative quantity
  AGRCUMQTY                        : "0.0", // QUAN (13.3) Agreed Cumulative Quantity
  FIRM_ZONE                        :  "0", // DEC (3) Firm Zone (Go-Ahead for Production)
  TRADE_OFF                        :  "0", // DEC (3) Trade-Off Zone (Go-Ahead for Materials Procurement)
  BOM_EXPL                         :   "", // CHAR (1) Indicator: BOM explosion
  EXCLUSION                        :   "", // CHAR (1) Exclusion in Outline Agreement Item with Material Class
  BASE_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  SHIPPING                         :   "", // CHAR (2) Shipping Instructions
  OUTL_TARGV                       :  "0", // DEC (23.4) Target Value for Outline Agreement in Document Currency
  NOND_ITAX                        :  "0", // DEC (23.4) Non-deductible input tax
  RELORD_QTY                       : "0.0", // QUAN (13.3) Standard release order quantity
  PRICE_DATE                       :   "", // DATS (8) Date of Price Determination
  DOC_CAT                          :   "", // CHAR (1) Purchasing document category
  EFF_VALUE                        :  "0", // DEC (23.4) Effective value of item
  COMMITMENT                       :   "", // CHAR (1) Item affects commitments
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer SU3=KUN
  ADDRESS                          :   "", // CHAR (10) ALPHA=ALPHA Address
  COND_GROUP                       :   "", // CHAR (4) Condition Group with Vendor
  NO_C_DISC                        :   "", // CHAR (1) Item Does Not Qualify for Cash Discount
  UPDATE_GRP                       :   "", // CHAR (6) ALPHA=ALPHA Update group for statistics update SU3=MCF
  PLAN_DEL                         :  "0", // DEC (3) Planned Delivery Time in Days
  NET_WEIGHT                       : "0.0", // QUAN (13.3) Net Weight
  WEIGHTUNIT                       :   "", // UNIT (3) ALPHA=CUNIT Unit of Weight
  TAX_JUR_CD                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  PRINT_REL                        :   "", // CHAR (1) Indicator: Print-relevant schedule lines exist
  SPEC_STOCK                       :   "", // CHAR (1) Special Stock Indicator
  SETRESERNO                       :   "", // NUMC (10) Settlement reservation number
  SETTLITMNO                       :   "", // NUMC (4) Item number of the settlement reservation
  NOT_CHGBL                        :   "", // CHAR (1) Quality inspection indicator cannot be changed
  CTR_KEY_QM                       :   "", // CHAR (8) Control Key for Quality Management in Procurement
  CERT_TYPE                        :   "", // CHAR (4) Certificate Type SU3=QCT
  EAN_UPC                          :   "", // CHAR (18) ALPHA=EAN11 International Article Number (EAN/UPC) SU3=EAN
  CONF_CTRL                        :   "", // CHAR (4) Confirmation Control Key
  REV_LEV                          :   "", // CHAR (2) ALPHA=NUMCV Revision level SU3=RVS
  FUND                             :   "", // CHAR (10) Fund SU3=FIC
  FUNDS_CTR                        :   "", // CHAR (16) Funds Center SU3=FIS
  CMMT_ITEM                        :   "", // CHAR (14) ALPHA=FMCIS Commitment Item SU3=FIP
  BA_PARTNER                       :   "", // CHAR (4) Business area reported to the partner
  PTR_ASS_BA                       :   "", // CHAR (4) assumed business area of the business partner
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  PARTNER_PC                       :   "", // CHAR (10) ALPHA=ALPHA Partner Profit Center SU3=PPC
  PRICE_CTR                        :   "", // CHAR (1) Price Determination (Pricing) Date Control
  GROSS_WGHT                       : "0.0", // QUAN (13.3) Gross weight
  VOLUME                           : "0.0", // QUAN (13.3) Volume
  VOLUMEUNIT                       :   "", // UNIT (3) ALPHA=CUNIT Volume unit
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  ADVANCE                          :   "", // CHAR (1) Advance procurement: project stock
  PRIOR_VEND                       :   "", // CHAR (10) ALPHA=ALPHA Prior Vendor
  SUB_RANGE                        :   "", // CHAR (6) Vendor Subrange
  PCKG_NO                          :   "", // NUMC (10) Package number
  STATISTIC                        :   "", // CHAR (1) Item is statistical
  HL_ITEM                          :   "", // NUMC (5) Higher-Level Item in Purchasing Documents
  GR_TO_DATE                       :   "", // DATS (8) Latest Possible Goods Receipt
  SUPPL_VEND                       :   "", // CHAR (10) ALPHA=ALPHA Vendor to be supplied/who is to receive delivery
  SC_VENDOR                        :   "", // CHAR (1) Subcontracting vendor
  CONF_MATL                        :   "", // CHAR (18) ALPHA=MATN1 Cross-Plant Configurable Material
  MAT_CAT                          :   "", // CHAR (2) Material Category SU3=MTY
  KANBAN_IND                       :   "", // CHAR (1) Kanban Indicator
  ADDRESS2                         :   "", // CHAR (10) ALPHA=ALPHA Number of delivery address
  INT_OBJ_NO                       :   "", // NUMC (18) Configuration (internal object number) SU3=CUX
  ERS                              :   "", // CHAR (1) Evaluated Receipt Settlement (ERS)
  GRSETTFROM                       :   "", // DATS (8) Start Date for GR-Based Settlement
  LAST_TRANS                       :   "", // DATS (8) Last Transmission
  TRANS_TIME                       :   "", // TIMS (6) Time
  SER_NO                           :   "", // NUMC (4) Sequential Number
  PROMOTION                        :   "", // CHAR (10) ALPHA=ALPHA Promotion SU3=WAK
  ALLOC_TBL                        :   "", // CHAR (10) ALPHA=ALPHA Allocation Table Number SU3=ABE
  AT_ITEM                          :   "", // NUMC (5) Item number of allocation table
  POINTS                           : "0.0", // QUAN (13.3) Number of Points
  POINTS_UN                        :   "", // UNIT (3) ALPHA=CUNIT Points unit
  SEASON_TY                        :   "", // CHAR (4) Season Category SU3=SAISO
  SEASON_YR                        :   "", // CHAR (4) ALPHA=GJAHR Season Year SU3=WMSAISJ
  SETT_GRP_2                       :   "", // CHAR (2) Settlement Group 2 (Rebate Settlement, Purchasing)
  SETT_GRP_3                       :   "", // CHAR (2) Settlement Group 3 (Rebate Settlement, Purchasing)
  SETT_ITEM                        :   "", // CHAR (1) Item Relevant to Subsequent (Period-End Rebate) Settlement
  ML_AKT                           :   "", // CHAR (1) Material ledger activated at material level
  REMSHLIFE                        :  "0", // DEC (4) Minimum Remaining Shelf Life
  RFQ                              :   "", // CHAR (10) ALPHA=ALPHA RFQ Number SU3=ANF
  RFQ_ITEM                         :   "", // NUMC (5) Item Number of RFQ
  CONFIG_ORG                       :   "", // CHAR (1) Origin of Configuration
  QUOTAUSAGE                       :   "", // CHAR (1) Quota arrangement usage
  SPSTCK_PHY                       :   "", // CHAR (1) Special stock indicator for physical stock transfer
  PREQ_NO                          :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number SU3=BAN
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition SU3=BAP
  MAT_TYPE                         :   "", // CHAR (4) Material type SU3=MTA
  SI_CAT                           :   "", // CHAR (1) Subitem Category, Purchasing Document
  SUB_ITEMS                        :   "", // CHAR (1) Subitems Exist
  SUBTOTAL_1                       :  "0", // DEC (23.4) Condition subtotal 1 from calculation schema
  SUBTOTAL_2                       :  "0", // DEC (23.4) Condition subtotal 2 from calculation schema
  SUBTOTAL_3                       :  "0", // DEC (23.4) Condition subtotal 3 from calculation schema
  SUBTOTAL_4                       :  "0", // DEC (23.4) Condition subtotal 4 from calculation schema
  SUBTOTAL_5                       :  "0", // DEC (23.4) Condition subtotal 5 from calculation schema
  SUBTOTAL_6                       :  "0", // DEC (23.4) Condition subtotal 6 from calculation schema
  SUBITM_KEY                       :   "", // CHAR (3) Processing key for sub-items
  MAX_CMG                          : "0.0", // QUAN (15.3) Maximum Cumulative Material Go-Ahead Quantity
  MAX_CPGO                         : "0.0", // QUAN (15.3) Maximum Cumulative Production Go-Ahead Quantity
  RET_ITEM                         :   "", // CHAR (1) Returns Item
  AT_RELEV                         :   "", // CHAR (1) Relevant to Allocation Table
  ORD_REAS                         :   "", // CHAR (3) Reason for Ordering
  DEL_TYP_RT                       :   "", // CHAR (4) Delivery Type for Returns to Vendors
  PRDTE_CTRL                       :   "", // CHAR (8) Material freight group
  MANUF_PROF                       :   "", // CHAR (4) Mfr part profile
  MANU_MAT                         :   "", // CHAR (40) Manufacturer Part Number
  MFR_NO                           :   "", // CHAR (10) ALPHA=ALPHA Manufacturer number
  MFR_NO_EXT                       :   "", // CHAR (10) External manufacturer code name or number
  ITEM_CAT_EXT                     :   "", // CHAR (1) Item category in purchasing document
  PO_UNIT_ISO                      :   "", // CHAR (3) Order unit in ISO code
  ORDERPR_UN_ISO                   :   "", // CHAR (3) ISO code for purchase order price unit
  BASE_UOM_ISO                     :   "", // CHAR (3) Base unit of measure in ISO code
  WEIGHTUNIT_ISO                   :   "", // CHAR (3) ISO code for unit of weight
  VOLUMEUNIT_ISO                   :   "", // CHAR (3) Volume unit in ISO code
  POINTS_UN_ISO                    :   "", // CHAR (3) ISO code for points unit
  CONF_MATL_EXTERNAL               :   "", // CHAR (40) ALPHA=MATNL Long Material Number for CONF_MATL field
  CONF_MATL_GUID                   :   "", // CHAR (32) External GUID for CONF_MATL Field
  CONF_MATL_VERSION                :   "", // CHAR (10) ALPHA=MATNW Version Number for Field CONF_MATL
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  PUR_MAT_EXTERNAL                 :   "", // CHAR (40) ALPHA=MATNL Long Material Number for PUR_MAT Field
  PUR_MAT_GUID                     :   "", // CHAR (32) External GUID for PUR_MAT Field
  PUR_MAT_VERSION                  :   "", // CHAR (10) ALPHA=MATNW Version Number for PUR_MAT Field
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant SU3=GM_GRANT_NBR
  CMMT_ITEM_LONG                   :   "", // CHAR (24) ALPHA=FMCIL Commitment item SU3=FPS
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area SU3=FBE
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period SU3=BUDPER
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  PUR_MAT_LONG                     :   "", // CHAR (40) Material Number (40 Characters, Technical Requirement)
  CONF_MATL_LONG                   :   "", // CHAR (40) Cross-Plant Configurable Material (40 ch tech. necessary)
};

// BAPIEKAN  Vendor Address for SAP Releases < 4.0A
const PO_ADDRESSES = [];

// prettier-ignore
const PO_ADDRESSES_line = {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  NAME1                            :   "", // CHAR (35) Name 1
  NAME2                            :   "", // CHAR (35) Name 1
  NAME3                            :   "", // CHAR (35) Name 1
  NAME4                            :   "", // CHAR (35) Name 1
  ZIP_CODE                         :   "", // CHAR (10) Postal Code
  CITY                             :   "", // CHAR (35) City
  CNTRY_KEY                        :   "", // CHAR (3) Country Key SU3=LND
  STREET                           :   "", // CHAR (35) Street and House Number
  PO_BOX                           :   "", // CHAR (10) PO Box
  ZIP_POBOX                        :   "", // CHAR (10) P.O. Box Postal Code
  TITLE                            :   "", // CHAR (15) Title
  TELEX                            :   "", // CHAR (30) Telex number
  FAX_NUMBER                       :   "", // CHAR (31) Fax Number
  TELETEXT                         :   "", // CHAR (30) Teletex number
  DATA_LINE                        :   "", // CHAR (14) Data communication line no.
  TELEBOX                          :   "", // CHAR (15) Telebox number
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
};

// BAPIADDRESS  Vendor Address for SAP Releases >= 4.0A
const PO_ADDRESSES_NEW = [];

// prettier-ignore
const PO_ADDRESSES_NEW_line = {
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

// BAPIRETURN  Processing Errors That Occurred
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
