//
// BAPI_PO_GETDETAIL 
//
// rfmcall.py 1.0 at: 2021-01-12 14:46:14
//

// Variables : 11
// Structures: 2
// Tables    : 15
// Exceptions: 0

BAPI_PO_GETDETAIL = {

  // INPUT PARAMETERS

  PURCHASEORDER                    :   "", // CHAR (10) ALPHA=ALPHA Purchase Order Number
  //ACCOUNT_ASSIGNMENT             : SPACE, // CHAR (1) Also Provide Account Assignment Data
  //CONFIRMATIONS                  : SPACE, // CHAR (1) Also Provide Confirmations
  //EXTENSIONS                     : SPACE, // CHAR (1) Also Provide Customer's Own Fields
  //HEADER_TEXTS                   : SPACE, // CHAR (1) Also Provide Header Texts
  //HISTORY                        : SPACE, // CHAR (1) Also Provide PO History
  //ITEMS                          :  "X", // CHAR (1) Also Provide Item Data
  //ITEM_TEXTS                     : SPACE, // CHAR (1) Also Provide Item Texts
  //SCHEDULES                      : SPACE, // CHAR (1) Also Provide Schedule Lines
  //SERVICES                       : SPACE, // CHAR (1) Also Provide Services and Limits
  //SERVICE_TEXTS                  : SPACE, // CHAR (1) Also Provide Service Texts

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

  // OUTPUT PARAMETERS

  PO_ADDRESS                       :   {}, // BAPIADDRESS Ordering Address Data
  PO_HEADER                        :   {}, // BAPIEKKOL PO Header Data
};

//
// INPUT PARAMETERS
//

//
// TABLE PARAMETERS
//

// EXTENSIONOUT BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT

/* eslint-disable key-spacing */
// prettier-ignore
EXTENSIONOUT = {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};
/* eslint-enable key-spacing */

// PO_HEADER_TEXTS BAPIEKKOTX PO Header Texts

/* eslint-disable key-spacing */
// prettier-ignore
PO_HEADER_TEXTS = {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  TEXT_FORM                        :   "", // CHAR (2) Tag column
  TEXT_ID                          :   "", // CHAR (4) Text ID
  TEXT_LINE                        :   "", // CHAR (132) Text Line
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

// PO_ITEM_ACCOUNT_ASSIGNMENT BAPIEKKN Account Assignment Data for Item

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

// PO_ITEM_CONFIRMATIONS BAPIEKES Confirmations for Item

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_CONFIRMATIONS = {
  CONF_NAME                        :   "", // CHAR (20) Confirmation Category: Description
  CONF_SER                         :   "", // NUMC (4) Sequential Number of Vendor Confirmation
  CONF_TYPE                        :   "", // CHAR (2) Confirmation Category
  DELETE_IND                       :   "", // CHAR (1) Vendor confirmation deletion indicator
  DELIV_DATE                       :   "", // DATS (8) Delivery Date of Vendor Confirmation
  DELIV_ITEM                       :   "", // NUMC (6) Delivery Item
  DELIV_NUMB                       :   "", // CHAR (10) ALPHA=ALPHA Delivery
  DELIV_TIME                       :   "", // TIMS (6) Delivery Date Time-Spot in Vendor Confirmation
  DEL_DATCAT                       :   "", // CHAR (1) Date category of delivery date in vendor confirmation
  DEL_DATCAT_EXT                   :   "", // CHAR (1) Category of delivery date
  DISPO_REL                        :   "", // CHAR (1) Indicator: Confirmation is Relevant to Materials Planning
  EXT_DOC                          :   "", // CHAR (20) External Document Number of Vendor Confirmation
  EXT_DOC_LONG                     :   "", // CHAR (35) Reference Document Number (for Dependencies see Long Text)
  HANDOVERDATE                     :   "", // DATS (8) Handover Date at the Handover Location
  HANDOVERTIME                     :   "", // TIMS (6) Handover time at the handover location
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document
  QUANTITY                         :  0.0, // QUAN (13.3) Quantity as Per Vendor Confirmation
  RECEIPT_REL                      :   "", // CHAR (1) Indicator: Confirmation is GR-Relevant
};
/* eslint-enable key-spacing */

// PO_ITEM_CONTRACT_LIMITS BAPIESUC Limits with Contract Reference

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_CONTRACT_LIMITS = {
  ACT_VALUE                        :    0, // DEC (23.4) Total value of unplanned entered services
  CON_ITEM                         :   "", // NUMC (5) Item number, contract
  CON_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Contract number
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
  KTEXT1                           :   "", // CHAR (40) Short Text 1
  LIMIT                            :    0, // DEC (23.4) Overall limit
  LINE_NO                          :   "", // NUMC (10) Internal line number for limits
  NO_LIMIT                         :   "", // CHAR (1) No Limit
  PCKG_NO                          :   "", // NUMC (10) Package number
  PRICE_CHG                        :   "", // CHAR (1) Price Change in Entry Sheet
  SHORT_TEXT                       :   "", // CHAR (40) Short Text 1
  SUB_PACKNO                       :   "", // NUMC (10) Package number
};
/* eslint-enable key-spacing */

// PO_ITEM_HISTORY BAPIEKBE PO History for Item

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_HISTORY = {
  BATCH                            :   "", // CHAR (10) Batch Number
  BLOCKED_QY                       :  0.0, // QUAN (13.3) Goods Receipt Blocked Stock in Order Unit
  BL_QTY                           :  0.0, // QUAN (13.3) Quantity in GR blocked stock in order price unit
  CL_VAL_LOC                       :    0, // DEC (23.4) GR/IR account clearing value in local currency
  CONDITION                        :   "", // CHAR (10) Number of the document condition
  CONF_SER                         :   "", // NUMC (4) Sequential Number of Vendor Confirmation
  CURRENCY                         :   "", // CUKY (5) Currency Key
  CURRENCY_ISO                     :   "", // CHAR (3) ISO Currency Code
  DB_CR_IND                        :   "", // CHAR (1) Debit/Credit Indicator
  DELIV_QTY                        :  0.0, // QUAN (13.3) Quantity in Unit of Measure from Delivery Note
  DELIV_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Unit of Measure From Delivery Note
  DELIV_UNIT_ISO                   :   "", // CHAR (3) ISO code for unit of measure of delivery note
  DOC_DATE                         :   "", // DATS (8) Document Date in Document
  DOC_YEAR                         :   "", // NUMC (4) ALPHA=GJAHR Material Document Year
  ENTRY_DATE                       :   "", // DATS (8) Day On Which Accounting Document Was Entered
  ENTRY_TIME                       :   "", // TIMS (6) Time of Entry
  HIST_TYPE                        :   "", // CHAR (1) Purchase Order History Category
  IVVAL_FOR                        :    0, // DEC (23.4) Entered invoice value in foreign currency
  IVVAL_LOC                        :    0, // DEC (23.4) Entered invoice value in local currency
  LOC_CURR                         :   "", // CUKY (5) Local currency key
  LOC_CURR_ISO                     :   "", // CHAR (3) ISO code for local currency
  MATDOC_ITM                       :   "", // NUMC (4) Item in Material Document
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MAT_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Number of Material Document
  MOVE_REAS                        :   "", // NUMC (4) Reason for Movement
  MOVE_TYPE                        :   "", // CHAR (3) Movement type (inventory management)
  NO_MORE_GR                       :   "", // CHAR (1) "Delivery Completed" Indicator
  PLANT                            :   "", // CHAR (4) Plant
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document
  PROCESS_ID                       :   "", // CHAR (1) Transaction/event type, purchase order history
  PSTNG_DATE                       :   "", // DATS (8) Posting Date in the Document
  PUR_MAT                          :   "", // CHAR (18) ALPHA=MATN1 Material number
  PUR_MAT_EXTERNAL                 :   "", // CHAR (40) ALPHA=MATNL Long Material Number for PUR_MAT Field
  PUR_MAT_GUID                     :   "", // CHAR (32) External GUID for PUR_MAT Field
  PUR_MAT_LONG                     :   "", // CHAR (40) Material Number (40 Characters, Technical Requirement)
  PUR_MAT_VERSION                  :   "", // CHAR (10) ALPHA=MATNW Version Number for PUR_MAT Field
  QUANTITY                         :  0.0, // QUAN (13.3) Quantity
  REF_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document No. of a Reference Document
  REF_DOC_IT                       :   "", // NUMC (4) Item of a Reference Document
  REF_DOC_NO                       :   "", // CHAR (16) Reference Document Number
  REF_DOC_NO_LONG                  :   "", // CHAR (35) Reference Document Number (for Dependencies see Long Text)
  REF_DOC_YR                       :   "", // NUMC (4) ALPHA=GJAHR Fiscal Year of a Reference Document
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  STK_SEGMENT                      :   "", // CHAR (16) Stock Segment
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  VAL_FORCUR                       :    0, // DEC (23.4) Amount in document currency
  VAL_LOCCUR                       :    0, // DEC (23.4) Amount in local currency
  VAL_TYPE                         :   "", // CHAR (10) Valuation type
};
/* eslint-enable key-spacing */

// PO_ITEM_HISTORY_TOTALS BAPIEKBES PO History for Item: Totals

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_HISTORY_TOTALS = {
  BLOCKED_QY                       :  0.0, // QUAN (13.3) Goods Receipt Blocked Stock in Order Unit
  BL_QTY                           :  0.0, // QUAN (13.3) Quantity in GR blocked stock in order price unit
  BL_QTY_TOTAL                     :  0.0, // QUAN (13.3) GR blocked stock in order unit (absolute amount)
  CL_VAL_FOR                       :    0, // DEC (23.4) Clearing value on GR/IR account in foreign currency
  CL_VAL_LOC                       :    0, // DEC (23.4) GR/IR account clearing value in local currency
  CURRENCY                         :   "", // CUKY (5) Currency Key
  CURRENCY_ISO                     :   "", // CHAR (3) ISO Currency Code
  DELIV_QTY                        :  0.0, // QUAN (13.3) Quantity of Goods Received
  DL_QTY_TOTAL                     :  0.0, // QUAN (13.3) Goods receipt quantity: Absolute amount
  DL_QTY_TRSP                      :  0.0, // QUAN (13.3) Quantity Delivered (Stock Transfer)
  DOP_VL_LOC                       :    0, // DEC (23.4) Total Down Payments in Local Currency
  IVVAL_FOR                        :    0, // DEC (23.4) Entered invoice value in foreign currency
  IVVAL_LOC                        :    0, // DEC (23.4) Entered invoice value in local currency
  IV_QTY                           :  0.0, // QUAN (13.3) Quantity invoiced
  IV_QTY_PO                        :  0.0, // QUAN (13.3) Invoice receipt quantity in order price unit
  IV_QTY_TOTAL                     :  0.0, // QUAN (13.3) Invoice receipt quantity: Absolute amount
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document
  PO_PR_QNT                        :  0.0, // QUAN (13.3) Quantity in Purchase Order Price Unit
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  VAL_GR_FOR                       :    0, // DEC (23.4) Value of goods received in foreign currency
  VAL_GR_LOC                       :    0, // DEC (23.4) Value of goods received in local currency
  VAL_IV_FOR                       :    0, // DEC (23.4) Invoice amount in foreign currency
  VAL_IV_LOC                       :    0, // DEC (23.4) Invoice amount in local currency
  WITHDR_QTY                       :  0.0, // QUAN (13.3) Issued Quantity
};
/* eslint-enable key-spacing */

// PO_ITEM_LIMITS BAPIESUH Limits

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_LIMITS = {
  ACT_VALUE                        :    0, // DEC (23.4) Total value of unplanned entered services
  CONT_PERC                        :    0, // DEC (3.1) Percentage for price determination
  CON_EXIST                        :   "", // CHAR (1) Limit on contract items exists
  CURRENCY                         :   "", // CUKY (5) Currency Key
  CURR_ISOCD                       :   "", // CHAR (3) ISO currency code
  EDITION                          :   "", // NUMC (4) Edition of Service Type
  EXP_VALUE                        :    0, // DEC (23.4) Expected value
  FREACT_VAL                       :    0, // DEC (23.4) Actual value (from other sources)
  FREE_LIMIT                       :    0, // DEC (23.4) Free limit
  LIMIT                            :    0, // DEC (23.4) Overall limit
  NO_FRLIMIT                       :   "", // CHAR (1) No Limit
  NO_LIMIT                         :   "", // CHAR (1) No Limit
  PCKG_NO                          :   "", // NUMC (10) Package number
  PRICE_CHG                        :   "", // CHAR (1) Price Change in Entry Sheet
  SERV_TYPE                        :   "", // CHAR (3) Short Description of Service Type
  SSC_ACTVAL                       :    0, // DEC (23.4) "Actual" value on service type limit
  SSC_EXIST                        :   "", // CHAR (1) Limits exist for service types
  SSC_LIMIT                        :    0, // DEC (23.4) Value limits on service types
  SSC_NOLIM                        :   "", // CHAR (1) No limit on standard service type
  SSC_PERC                         :    0, // DEC (3.1) Percentage for price determination
  SSC_PRSCHG                       :   "", // CHAR (1) Price Change in Entry Sheet
  TMP_ACTVAL                       :    0, // DEC (23.4) "Actual" value on model specifications limits
  TMP_EXIST                        :   "", // CHAR (1) Limit on service packages exists
  TMP_LIMIT                        :    0, // DEC (23.4) Limits on model service specifications
  TMP_NOLIM                        :   "", // CHAR (1) No Limit on Model Specifications
  TMP_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Number of a Set of Model Service Specifications
  TMP_PERC                         :    0, // DEC (3.1) Percentage for Price Determination
  TMP_PRSCHG                       :   "", // CHAR (1) Price Change in Entry Sheet
};
/* eslint-enable key-spacing */

// PO_ITEM_SCHEDULES BAPIEKET Schedule Lines for Item

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

// PO_ITEM_SERVICES BAPIESLL Services

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_SERVICES = {
  ACTUAL_QTY                       :  0.0, // QUAN (13.3) Purchase Order: Entered Quantity
  ACTUAL_VAL                       :    0, // DEC (23.4) Purchase order: Entered value
  ALTERNAT                         :   "", // CHAR (1) Alternative Line
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASIC_LINE                       :   "", // CHAR (1) Basic Line
  BASLINE_NO                       :   "", // NUMC (10) Alternatives: Reference to basic item
  BEGINTIME                        :   "", // TIMS (6) Start Time
  BIDDER                           :   "", // CHAR (1) Bidder's Line
  BLANKET                          :   "", // CHAR (1) Blanket Line
  CON_LINE                         :   "", // NUMC (10) Entry: Unplanned from contract
  CON_PCKG                         :   "", // NUMC (10) Entry: Unplanned from contract
  CON_QTY                          :  0.0, // QUAN (13.3) Contract: Quantity Released (by Issue of Release Orders)
  CON_VALUE                        :    0, // DEC (23.4) Contract: Value released (via release orders)
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
  GROSS_VAL                        :    0, // DEC (23.4) Gross value
  GR_PRICE                         :    0, // DEC (23.4) Gross price
  HI_LINE_NO                       :   "", // NUMC (10) Hierarchically superior line number
  INFORM                           :   "", // CHAR (1) Informatory Line
  LIMIT_LINE                       :   "", // NUMC (10) Entry: Unplanned, limit line
  LINE_NO                          :   "", // NUMC (10) Internal line number
  MATL_GROUP                       :   "", // CHAR (9) Material Group
  NET_VALUE                        :    0, // DEC (23.4) Net value
  NOND_ITAX                        :    0, // DEC (23.4) Non-deductible input tax
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
  UNPL_QTY                         :  0.0, // QUAN (13.3) Contract: Unplanned Released Quantity
  UNPL_VAL                         :    0, // DEC (23.4) Contract: Unplanned released value
  UOM_ISO                          :   "", // CHAR (3) ISO code for unit of measurement
  USERF1_NUM                       :   "", // NUMC (10) User-Defined Field
  USERF1_TXT                       :   "", // CHAR (40) User-Defined Field
  USERF2_NUM                       :  0.0, // QUAN (13.3) User-Defined Field
  USERF2_TXT                       :   "", // CHAR (10) User-Defined Field
  WAGETYPE                         :   "", // CHAR (4) Wage Type
};
/* eslint-enable key-spacing */

// PO_ITEM_SRV_ACCASS_VALUES BAPIESKL Value/Link to Service Account Assignment

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_SRV_ACCASS_VALUES = {
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
  HPACKNO                          :   "", // NUMC (10) Highest package number
  INACTIVE                         :   "", // CHAR (1) Inactive account assignment specification
  LINE_NO                          :   "", // NUMC (10) Line Number
  NET_VALUE                        :    0, // DEC (23.4) Net value
  PCKG_NO                          :   "", // NUMC (10) Package number
  PERCENTAGE                       :    0, // DEC (4.1) Percentage for Account Assignment Value Distribution
  QUANTITY                         :  0.0, // QUAN (13.3) Quantity
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  SERNO_LINE                       :   "", // NUMC (2) Seq. Number of Acc. Assignment Specification: Service Line
};
/* eslint-enable key-spacing */

// PO_ITEM_TEXTS BAPIEKPOTX Texts for Item

/* eslint-disable key-spacing */
// prettier-ignore
PO_ITEM_TEXTS = {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  TEXT_FORM                        :   "", // CHAR (2) Tag column
  TEXT_ID                          :   "", // CHAR (4) Text ID
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};
/* eslint-enable key-spacing */

// PO_SERVICES_TEXTS BAPIESLLTX Long Texts for Service Line

/* eslint-disable key-spacing */
// prettier-ignore
PO_SERVICES_TEXTS = {
  FORMAT_COL                       :   "", // CHAR (2) Tag column
  LINE_NO                          :   "", // NUMC (10) Internal line number
  PCKG_NO                          :   "", // NUMC (10) Package number
  TEXT_ID                          :   "", // CHAR (4) Text ID
  TEXT_LINE                        :   "", // CHAR (132) Text Line
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

// PO_ADDRESS BAPIADDRESS Ordering Address Data

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

// PO_HEADER BAPIEKKOL PO Header Data

/* eslint-disable key-spacing */
// prettier-ignore
PO_HEADER = {
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
