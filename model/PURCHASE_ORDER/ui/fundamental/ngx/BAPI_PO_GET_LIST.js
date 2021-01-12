//
// BAPI_PO_GET_LIST 
//
// rfmcall.py 1.0 at: 2021-01-12 13:35:21
//

// Variables : 3
// Structures: 0
// Tables    : 5
// Exceptions: 0

BAPI_PO_GET_LIST = {

  // INPUT PARAMETERS

  //ITEMS_FOR_RELEASE              :  "X", // CHAR (1) Indicator: Display Purchase Orders Awaiting Release Only
  //REL_CODE                       :   "", // CHAR (2) Release Code
  //REL_GROUP                      :   "", // CHAR (2) Release Group

  // TABLE PARAMETERS

  PO_HEADERS                       :   [], // BAPIEKKO PO Header Data
  PO_ITEMS                         :   [], // BAPIEKPO Purchase Order Items
  //PO_ADDRESSES                   :   [], // BAPIEKAN Vendor Address for SAP Releases < 4.0A
  //PO_ADDRESSES_NEW               :   [], // BAPIADDRESS Vendor Address for SAP Releases >= 4.0A
  //RETURN                         :   [], // BAPIRETURN Processing Errors That Occurred
};

//
// INPUT PARAMETERS
//

//
// TABLE PARAMETERS
//

// PO_HEADERS BAPIEKKO PO Header Data

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
  VPER_END                         :   "", // DATS (8) End of Validity Period
  VPER_START                       :   "", // DATS (8) Start of Validity Period
  WARRANTY                         :   "", // DATS (8) Warranty Date
};
/* eslint-enable key-spacing */

// PO_ITEMS BAPIEKPO Purchase Order Items

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEMS = {
  ACCTASSCAT                       :   "", // CHAR (1) Account assignment category
  ACKNOWL_NO                       :   "", // CHAR (20) Order Acknowledgment Number
  ACKN_REQD                        :   "", // CHAR (1) Order Acknowledgment Requirement
  ADDRESS                          :   "", // CHAR (10) ALPHA=ALPHA Address
  ADDRESS2                         :   "", // CHAR (10) ALPHA=ALPHA Number of delivery address
  ADVANCE                          :   "", // CHAR (1) Advance procurement: project stock
  AGMT_ITEM                        :   "", // NUMC (5) Item number of principal purchase agreement
  AGRCUMQTY                        :  0.0, // QUAN (13.3) Agreed Cumulative Quantity
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement
  ALLOC_TBL                        :   "", // CHAR (10) ALPHA=ALPHA Allocation Table Number
  AT_ITEM                          :   "", // NUMC (5) Item number of allocation table
  AT_RELEV                         :   "", // CHAR (1) Relevant to Allocation Table
  BASE_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) Base unit of measure in ISO code
  BA_PARTNER                       :   "", // CHAR (4) Business area reported to the partner
  BOM_EXPL                         :   "", // CHAR (1) Indicator: BOM explosion
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period
  CERT_TYPE                        :   "", // CHAR (4) Certificate Type
  CHANGED_ON                       :   "", // DATS (8) Purchasing Document Item Change Date
  CMMT_ITEM                        :   "", // CHAR (14) ALPHA=FMCIS Commitment Item
  CMMT_ITEM_LONG                   :   "", // CHAR (24) ALPHA=FMCIL Commitment item
  COMMENT                          :   "", // CHAR (3) Internal Comment on Quotation
  COMMITMENT                       :   "", // CHAR (1) Item affects commitments
  COND_GROUP                       :   "", // CHAR (4) Condition Group with Vendor
  CONFIG_ORG                       :   "", // CHAR (1) Origin of Configuration
  CONF_CTRL                        :   "", // CHAR (4) Confirmation Control Key
  CONF_MATL                        :   "", // CHAR (18) ALPHA=MATN1 Cross-Plant Configurable Material
  CONF_MATL_EXTERNAL               :   "", // CHAR (40) ALPHA=MATNL Long Material Number for CONF_MATL field
  CONF_MATL_GUID                   :   "", // CHAR (32) External GUID for CONF_MATL Field
  CONF_MATL_LONG                   :   "", // CHAR (40) Cross-Plant Configurable Material (40 ch tech. necessary)
  CONF_MATL_VERSION                :   "", // CHAR (10) ALPHA=MATNW Version Number for Field CONF_MATL
  CONSUMPT                         :   "", // CHAR (1) Consumption posting
  CONV_DEN1                        :    0, // DEC (5) Denominator for Conv. of Order Price Unit into Order Unit
  CONV_DEN2                        :    0, // DEC (5) Denominator for Conversion of Order Unit to Base Unit
  CONV_NUM1                        :    0, // DEC (5) Numerator for Conversion of Order Price Unit into Order Unit
  CONV_NUM2                        :    0, // DEC (5) Numerator for Conversion of Order Unit to Base Unit
  CO_CODE                          :   "", // CHAR (4) Company Code
  CTR_KEY_QM                       :   "", // CHAR (8) Control Key for Quality Management in Procurement
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer
  DELETE_IND                       :   "", // CHAR (1) Deletion indicator in purchasing document
  DEL_COMPL                        :   "", // CHAR (1) "Delivery Completed" Indicator
  DEL_TYP_RT                       :   "", // CHAR (4) Delivery Type for Returns to Vendors
  DISTRIB                          :   "", // CHAR (1) Distribution indicator for multiple account assignment
  DOC_CAT                          :   "", // CHAR (1) Purchasing document category
  EAN_UPC                          :   "", // CHAR (18) ALPHA=EAN11 International Article Number (EAN/UPC)
  EFF_VALUE                        :    0, // DEC (23.4) Effective value of item
  ERS                              :   "", // CHAR (1) Evaluated Receipt Settlement (ERS)
  EST_PRICE                        :   "", // CHAR (1) Indicator: Estimated Price
  EXCLUSION                        :   "", // CHAR (1) Exclusion in Outline Agreement Item with Material Class
  FINAL_INV                        :   "", // CHAR (1) Final Invoice Indicator
  FIRM_ZONE                        :    0, // DEC (3) Firm Zone (Go-Ahead for Production)
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area
  FUND                             :   "", // CHAR (10) Fund
  FUNDS_CTR                        :   "", // CHAR (16) Funds Center
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant
  GROSS_WGHT                       :  0.0, // QUAN (13.3) Gross weight
  GROS_VALUE                       :    0, // DEC (23.4) Gross order value in PO currency
  GRSETTFROM                       :   "", // DATS (8) Start Date for GR-Based Settlement
  GR_BASEDIV                       :   "", // CHAR (1) Indicator: GR-Based Invoice Verification
  GR_IND                           :   "", // CHAR (1) Goods Receipt Indicator
  GR_NON_VAL                       :   "", // CHAR (1) Goods Receipt, Non-Valuated
  GR_PR_TIME                       :    0, // DEC (3) Goods receipt processing time in days
  GR_TO_DATE                       :   "", // DATS (8) Latest Possible Goods Receipt
  HL_ITEM                          :   "", // NUMC (5) Higher-Level Item in Purchasing Documents
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  INFO_REC                         :   "", // CHAR (10) ALPHA=ALPHA Number of purchasing info record
  INFO_UPD                         :   "", // CHAR (1) Indicator: Update Info Record
  INT_OBJ_NO                       :   "", // NUMC (18) Configuration (internal object number)
  IR_IND                           :   "", // CHAR (1) Invoice receipt indicator
  ITEM_CAT                         :   "", // CHAR (1) Item category in purchasing document
  ITEM_CAT_EXT                     :   "", // CHAR (1) Item category in purchasing document
  KANBAN_IND                       :   "", // CHAR (1) Kanban Indicator
  LAST_TRANS                       :   "", // DATS (8) Last Transmission
  MANUF_PROF                       :   "", // CHAR (4) Mfr part profile
  MANU_MAT                         :   "", // CHAR (40) Manufacturer Part Number
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MAT_CAT                          :   "", // CHAR (2) Material Category
  MAT_GRP                          :   "", // CHAR (9) Material Group
  MAT_TYPE                         :   "", // CHAR (4) Material type
  MAX_CMG                          :  0.0, // QUAN (15.3) Maximum Cumulative Material Go-Ahead Quantity
  MAX_CPGO                         :  0.0, // QUAN (15.3) Maximum Cumulative Production Go-Ahead Quantity
  MFR_NO                           :   "", // CHAR (10) ALPHA=ALPHA Manufacturer number
  MFR_NO_EXT                       :   "", // CHAR (10) External manufacturer code name or number
  ML_AKT                           :   "", // CHAR (1) Material ledger activated at material level
  NET_PRICE                        :    0, // DEC (23.4) Net price in purchasing document (in document currency)
  NET_VALUE                        :    0, // DEC (23.4) Net order value in PO currency
  NET_WEIGHT                       :  0.0, // QUAN (13.3) Net Weight
  NOND_ITAX                        :    0, // DEC (23.4) Non-deductible input tax
  NOT_CHGBL                        :   "", // CHAR (1) Quality inspection indicator cannot be changed
  NO_C_DISC                        :   "", // CHAR (1) Item Does Not Qualify for Cash Discount
  NUM_REMIND                       :    0, // DEC (3) Number of Reminders/Expediters
  ORDERPR_UN                       :   "", // UNIT (3) ALPHA=CUNIT Order Price Unit (Purchasing)
  ORDERPR_UN_ISO                   :   "", // CHAR (3) ISO code for purchase order price unit
  ORD_REAS                         :   "", // CHAR (3) Reason for Ordering
  OUTL_TARGV                       :    0, // DEC (23.4) Target Value for Outline Agreement in Document Currency
  OVERDELTOL                       :    0, // DEC (3.1) Overdelivery Tolerance Limit
  PARTNER_PC                       :   "", // CHAR (10) ALPHA=ALPHA Partner Profit Center
  PART_INV                         :   "", // CHAR (1) Partial invoice indicator
  PCKG_NO                          :   "", // NUMC (10) Package number
  PLANT                            :   "", // CHAR (4) Plant
  PLAN_DEL                         :    0, // DEC (3) Planned Delivery Time in Days
  POINTS                           :  0.0, // QUAN (13.3) Number of Points
  POINTS_UN                        :   "", // UNIT (3) ALPHA=CUNIT Points unit
  POINTS_UN_ISO                    :   "", // CHAR (3) ISO code for points unit
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  PO_UNIT_ISO                      :   "", // CHAR (3) Order unit in ISO code
  PRDTE_CTRL                       :   "", // CHAR (8) Material freight group
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition
  PREQ_NO                          :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number
  PRICE_CTR                        :   "", // CHAR (1) Price Determination (Pricing) Date Control
  PRICE_DATE                       :   "", // DATS (8) Date of Price Determination
  PRICE_UNIT                       :    0, // DEC (5) Price unit
  PRINT_REL                        :   "", // CHAR (1) Indicator: Print-relevant schedule lines exist
  PRIOR_VEND                       :   "", // CHAR (10) ALPHA=ALPHA Prior Vendor
  PRNT_PRICE                       :   "", // CHAR (1) Price Printout
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center
  PROMOTION                        :   "", // CHAR (10) ALPHA=ALPHA Promotion
  PTR_ASS_BA                       :   "", // CHAR (4) assumed business area of the business partner
  PUR_MAT                          :   "", // CHAR (18) ALPHA=MATN1 Material number
  PUR_MAT_EXTERNAL                 :   "", // CHAR (40) ALPHA=MATNL Long Material Number for PUR_MAT Field
  PUR_MAT_GUID                     :   "", // CHAR (32) External GUID for PUR_MAT Field
  PUR_MAT_LONG                     :   "", // CHAR (40) Material Number (40 Characters, Technical Requirement)
  PUR_MAT_VERSION                  :   "", // CHAR (10) ALPHA=MATNW Version Number for PUR_MAT Field
  QUAL_INSP                        :   "", // CHAR (1) Stock Type
  QUANTITY                         :  0.0, // QUAN (13.3) Purchase Order Quantity
  QUOTAUSAGE                       :   "", // CHAR (1) Quota arrangement usage
  QUOT_DEAD                        :   "", // DATS (8) Deadline for Submission of Bid/Quotation
  RECON_DATE                       :   "", // DATS (8) Reconciliation date for agreed cumulative quantity
  REJ_IND                          :   "", // CHAR (1) Rejection Indicator
  RELORD_QTY                       :  0.0, // QUAN (13.3) Standard release order quantity
  REMINDER1                        :    0, // DEC (3) Number of Days for First Reminder/Expediter
  REMINDER2                        :    0, // DEC (3) Number of Days for Second Reminder/Expediter
  REMINDER3                        :    0, // DEC (3) Number of Days for Third Reminder/Expediter
  REMSHLIFE                        :    0, // DEC (4) Minimum Remaining Shelf Life
  RET_ITEM                         :   "", // CHAR (1) Returns Item
  REV_LEV                          :   "", // CHAR (2) ALPHA=NUMCV Revision level
  RFQ                              :   "", // CHAR (10) ALPHA=ALPHA RFQ Number
  RFQ_ITEM                         :   "", // NUMC (5) Item Number of RFQ
  SC_VENDOR                        :   "", // CHAR (1) Subcontracting vendor
  SEASON_TY                        :   "", // CHAR (4) Season Category
  SEASON_YR                        :   "", // CHAR (4) ALPHA=GJAHR Season Year
  SER_NO                           :   "", // NUMC (4) Sequential Number
  SETRESERNO                       :   "", // NUMC (10) Settlement reservation number
  SETTLITMNO                       :   "", // NUMC (4) Item number of the settlement reservation
  SETT_GRP1                        :   "", // CHAR (2) Settlement Group 1 (Purchasing)
  SETT_GRP_2                       :   "", // CHAR (2) Settlement Group 2 (Rebate Settlement, Purchasing)
  SETT_GRP_3                       :   "", // CHAR (2) Settlement Group 3 (Rebate Settlement, Purchasing)
  SETT_ITEM                        :   "", // CHAR (1) Item Relevant to Subsequent (Period-End Rebate) Settlement
  SHIPPING                         :   "", // CHAR (2) Shipping Instructions
  SHORT_TEXT                       :   "", // CHAR (40) Short Text
  SI_CAT                           :   "", // CHAR (1) Subitem Category, Purchasing Document
  SPEC_STOCK                       :   "", // CHAR (1) Special Stock Indicator
  SPSTCK_PHY                       :   "", // CHAR (1) Special stock indicator for physical stock transfer
  STATISTIC                        :   "", // CHAR (1) Item is statistical
  STATUS                           :   "", // CHAR (1) RFQ status
  STORE_LOC                        :   "", // CHAR (4) Storage location
  SUBITM_KEY                       :   "", // CHAR (3) Processing key for sub-items
  SUBTOTAL_1                       :    0, // DEC (23.4) Condition subtotal 1 from calculation schema
  SUBTOTAL_2                       :    0, // DEC (23.4) Condition subtotal 2 from calculation schema
  SUBTOTAL_3                       :    0, // DEC (23.4) Condition subtotal 3 from calculation schema
  SUBTOTAL_4                       :    0, // DEC (23.4) Condition subtotal 4 from calculation schema
  SUBTOTAL_5                       :    0, // DEC (23.4) Condition subtotal 5 from calculation schema
  SUBTOTAL_6                       :    0, // DEC (23.4) Condition subtotal 6 from calculation schema
  SUB_ITEMS                        :   "", // CHAR (1) Subitems Exist
  SUB_RANGE                        :   "", // CHAR (6) Vendor Subrange
  SUPPL_VEND                       :   "", // CHAR (10) ALPHA=ALPHA Vendor to be supplied/who is to receive delivery
  TARGET_QTY                       :  0.0, // QUAN (13.3) Target Quantity
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  TAX_JUR_CD                       :   "", // CHAR (15) Tax Jurisdiction
  TRACKINGNO                       :   "", // CHAR (10) Requirement Tracking Number
  TRADE_OFF                        :    0, // DEC (3) Trade-Off Zone (Go-Ahead for Materials Procurement)
  TRANS_TIME                       :   "", // TIMS (6) Time
  UNDER_TOL                        :    0, // DEC (3.1) Underdelivery Tolerance Limit
  UNIT                             :   "", // UNIT (3) ALPHA=CUNIT Order unit
  UNLIMITED                        :   "", // CHAR (1) Indicator: Unlimited Overdelivery Allowed
  UPDATE_GRP                       :   "", // CHAR (6) ALPHA=ALPHA Update group for statistics update
  VAL_CAT                          :   "", // CHAR (1) Valuation Category
  VAL_TYPE                         :   "", // CHAR (10) Valuation type
  VEND_MAT                         :   "", // CHAR (22) Material number used by vendor
  VOLUME                           :  0.0, // QUAN (13.3) Volume
  VOLUMEUNIT                       :   "", // UNIT (3) ALPHA=CUNIT Volume unit
  VOLUMEUNIT_ISO                   :   "", // CHAR (3) Volume unit in ISO code
  WEIGHTUNIT                       :   "", // UNIT (3) ALPHA=CUNIT Unit of Weight
  WEIGHTUNIT_ISO                   :   "", // CHAR (3) ISO code for unit of weight
};
/* eslint-enable key-spacing */

// PO_ADDRESSES BAPIEKAN Vendor Address for SAP Releases < 4.0A

/* eslint-disable key-spacing */
// prettier-ignore
PO_ADDRESSES = {
  CITY                             :   "", // CHAR (35) City
  CNTRY_KEY                        :   "", // CHAR (3) Country Key
  DATA_LINE                        :   "", // CHAR (14) Data communication line no.
  FAX_NUMBER                       :   "", // CHAR (31) Fax Number
  NAME1                            :   "", // CHAR (35) Name 1
  NAME2                            :   "", // CHAR (35) Name 1
  NAME3                            :   "", // CHAR (35) Name 1
  NAME4                            :   "", // CHAR (35) Name 1
  PO_BOX                           :   "", // CHAR (10) PO Box
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  STREET                           :   "", // CHAR (35) Street and House Number
  TELEBOX                          :   "", // CHAR (15) Telebox number
  TELETEXT                         :   "", // CHAR (30) Teletex number
  TELEX                            :   "", // CHAR (30) Telex number
  TITLE                            :   "", // CHAR (15) Title
  ZIP_CODE                         :   "", // CHAR (10) Postal Code
  ZIP_POBOX                        :   "", // CHAR (10) P.O. Box Postal Code
};
/* eslint-enable key-spacing */

// PO_ADDRESSES_NEW BAPIADDRESS Vendor Address for SAP Releases >= 4.0A

/* eslint-disable key-spacing */
// prettier-ignore
PO_ADDRESSES_NEW = {
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

// RETURN BAPIRETURN Processing Errors That Occurred

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
