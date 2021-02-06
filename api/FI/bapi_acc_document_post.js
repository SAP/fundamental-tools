//
// BAPI_ACC_DOCUMENT_POST var: 3  struct: 3  table: 14  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

DOCUMENTHEADER       :           {}, // BAPIACHE09 Header
// CONTRACTHEADER    :           {}, // BAPIACCAHD Additional Contract Accounts Recievable and Payable Header Line
// CUSTOMERCPD       :           {}, // BAPIACPA09 One-time customer

// TABLE PARAMETERS

CURRENCYAMOUNT       :           [], // BAPIACCR09 Currency Items
RETURN               :           [], // BAPIRET2 Return parameter
// ACCOUNTGL         :           [], // BAPIACGL09 G/L account item
// ACCOUNTPAYABLE    :           [], // BAPIACAP09 Vendor Item
// ACCOUNTRECEIVABLE :           [], // BAPIACAR09 Customer Item
// ACCOUNTTAX        :           [], // BAPIACTX09 Tax item
// ACCOUNTWT         :           [], // BAPIACWT09 Withholding tax information for FI Interface
// CONTRACTITEM      :           [], // BAPIACCAIT Additional Contract Accounts Recieviable and Payable Document Line Item
// CRITERIA          :           [], // BAPIACKEC9 CO-PA Account Assignment Characteristics
// EXTENSION1        :           [], // BAPIACEXTC Container for 'Customer Exit' Parameter
// EXTENSION2        :           [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
// PAYMENTCARD       :           [], // BAPIACPC09 Payment Card Information
// REALESTATE        :           [], // BAPIACRE09 Real Estate Account Assignment Data
// VALUEFIELD        :           [], // BAPIACKEV9 CO-PA Account Assignment Value Fields

// EXPORT PARAMETERS

// OBJ_KEY           :           "", // CHAR (20) Reference key
// OBJ_SYS           :           "", // CHAR (10) ALPHA=ALPHA Logical system of source document
// OBJ_TYPE          :           "", // CHAR (5) Reference procedure
};

const result = await client.call("BAPI_ACC_DOCUMENT_POST", parameters);

//
// IMPORT PARAMETERS
//

// BAPIACHE09  Header

// prettier-ignore
const DOCUMENTHEADER= {
  OBJ_TYPE                         :   "", // CHAR (5) Reference procedure
  OBJ_KEY                          :   "", // CHAR (20) Object key
  OBJ_SYS                          :   "", // CHAR (10) ALPHA=ALPHA Logical system of source document
  BUS_ACT                          :   "", // CHAR (4) Business Transaction
  USERNAME                         :   "", // CHAR (12) User Name SU3=USR
  HEADER_TXT                       :   "", // CHAR (25) Document Header Text
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  DOC_DATE                         :   "", // DATS (8) Document Date in Document
  PSTNG_DATE                       :   "", // DATS (8) Posting Date in the Document
  TRANS_DATE                       :   "", // DATS (8) Translation date
  FISC_YEAR                        :   "", // NUMC (4) ALPHA=GJAHR Fiscal Year SU3=GJR
  FIS_PERIOD                       :   "", // NUMC (2) Fiscal period
  DOC_TYPE                         :   "", // CHAR (2) Document type SU3=BAR
  REF_DOC_NO                       :   "", // CHAR (16) Reference Document Number
  AC_DOC_NO                        :   "", // CHAR (10) ALPHA=ALPHA Accounting Document Number SU3=BLN
  OBJ_KEY_R                        :   "", // CHAR (20) Cancel: object key (AWREF_REV and AWORG_REV)
  REASON_REV                       :   "", // CHAR (2) Reason for reversal
  COMPO_ACC                        :   "", // CHAR (4) Component in ACC Interface
  REF_DOC_NO_LONG                  :   "", // CHAR (35) Reference Document Number (for Dependencies see Long Text)
  ACC_PRINCIPLE                    :   "", // CHAR (4) Accounting Principle SU3=ACCOUNTING_PRINCIPLE
  NEG_POSTNG                       :   "", // CHAR (1) Indicator: Negative posting
  OBJ_KEY_INV                      :   "", // CHAR (20) Invoice Ref.: Object Key (AWREF_REB and AWORG_REB)
  BILL_CATEGORY                    :   "", // CHAR (1) Billing category
  VATDATE                          :   "", // DATS (8) Tax Reporting Date
  INVOICE_REC_DATE                 :   "", // DATS (8) Invoice Receipt Date
  ECS_ENV                          :   "", // CHAR (10) ECS Environment
  PARTIAL_REV                      :   "", // CHAR (1) Indicator: Partial Reversal
  DOC_STATUS                       :   "", // CHAR (1) Document Status
};

// BAPIACCAHD  Additional Contract Accounts Recievable and Payable Header Line

// prettier-ignore
const CONTRACTHEADER= {
  DOC_NO                           :   "", // CHAR (12) FI CA: External Document Number for Contract AP/AR
  DOC_TYPE_CA                      :   "", // CHAR (2) FI-CA: Doc.Type for Contract Accounts Receivable and Payable
  RES_KEY                          :   "", // CHAR (30) FI-CA: Reservation Key
  FIKEY                            :   "", // CHAR (12) FI-CA: Reconciliation Key for General Ledger Accounting
  PAYMENT_FORM_REF                 :   "", // CHAR (30) FI-CA: Payment Form Reference
};

// BAPIACPA09  One-time customer

// prettier-ignore
const CUSTOMERCPD= {
  NAME                             :   "", // CHAR (35) Name 1
  NAME_2                           :   "", // CHAR (35) Name 2
  NAME_3                           :   "", // CHAR (35) Name 3
  NAME_4                           :   "", // CHAR (35) Name 4
  POSTL_CODE                       :   "", // CHAR (10) Postal Code
  CITY                             :   "", // CHAR (35) City
  COUNTRY                          :   "", // CHAR (3) Country Key
  COUNTRY_ISO                      :   "", // CHAR (2) Country key in ISO code
  STREET                           :   "", // CHAR (35) Street and House Number
  PO_BOX                           :   "", // CHAR (10) PO Box
  POBX_PCD                         :   "", // CHAR (10) P.O. Box Postal Code
  POBK_CURAC                       :   "", // CHAR (16) Account Number of Bank Account At Post Office
  BANK_ACCT                        :   "", // CHAR (18) Bank account number
  BANK_NO                          :   "", // CHAR (15) Bank number SU3=BLZ
  BANK_CTRY                        :   "", // CHAR (3) Bank country key SU3=BKL
  BANK_CTRY_ISO                    :   "", // CHAR (2) Bank country key in ISO code SU3=BKL
  TAX_NO_1                         :   "", // CHAR (16) Tax Number 1
  TAX_NO_2                         :   "", // CHAR (11) Tax Number 2
  TAX                              :   "", // CHAR (1) Liable for VAT
  EQUAL_TAX                        :   "", // CHAR (1) Indicator: Business partner subject to equalization tax ?
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  CTRL_KEY                         :   "", // CHAR (2) Bank Control Key
  INSTR_KEY                        :   "", // CHAR (2) Instruction key for data medium exchange
  DME_IND                          :   "", // CHAR (1) Report key for data medium exchange
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  IBAN                             :   "", // CHAR (34) IBAN (International Bank Account Number)
  SWIFT_CODE                       :   "", // CHAR (11) SWIFT/BIC for International Payments
  TAX_NO_3                         :   "", // CHAR (18) Tax Number 3
  TAX_NO_4                         :   "", // CHAR (18) Tax Number 4
  TITLE                            :   "", // CHAR (15) Title
};


//
// TABLE PARAMETERS
//

// BAPIACCR09  Currency Items
const CURRENCYAMOUNT= [];

// prettier-ignore
const CURRENCYAMOUNT= {
  ITEMNO_ACC                       :   "", // NUMC (10) Accounting Document Line Item Number
  CURR_TYPE                        :   "", // CHAR (2) Currency type and valuation view
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO code currency
  AMT_DOCCUR                       :  "0", // DEC (23.4) Amount in Document Currency
  EXCH_RATE                        :  "0", // DEC (9.5) ALPHA=EXCRT Exchange rate
  EXCH_RATE_V                      :  "0", // DEC (9.5) ALPHA=EXCRT Indirect quoted exchange rate
  AMT_BASE                         :  "0", // DEC (23.4) Tax Base Amount in Document Currency
  DISC_BASE                        :  "0", // DEC (23.4) Amount eligible for cash discount in document currency
  DISC_AMT                         :  "0", // DEC (23.4) Cash discount amount in the currency of the currency types
  TAX_AMT                          :  "0", // DEC (23.4) Amount in Document Currency
};

// BAPIRET2  Return parameter
const RETURN= [];

// prettier-ignore
const RETURN= {
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
  ID                               :   "", // CHAR (20) Message Class
  NUMBER                           :   "", // NUMC (3) Message Number
  MESSAGE                          :   "", // CHAR (220) Message Text
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
  PARAMETER                        :   "", // CHAR (32) Parameter Name
  ROW                              :    0, // INT4 (10) Lines in parameter
  FIELD                            :   "", // CHAR (30) Field in parameter
  SYSTEM                           :   "", // CHAR (10) ALPHA=ALPHA Logical system from which message originates
};

// BAPIACGL09  G/L account item
const ACCOUNTGL= [];

// prettier-ignore
const ACCOUNTGL= {
  ITEMNO_ACC                       :   "", // NUMC (10) Accounting Document Line Item Number
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA General Ledger Account
  ITEM_TEXT                        :   "", // CHAR (50) Item Text
  STAT_CON                         :   "", // CHAR (1) Indicator for statistical line items
  LOG_PROC                         :   "", // CHAR (6) Logical Transaction
  AC_DOC_NO                        :   "", // CHAR (10) ALPHA=ALPHA Accounting Document Number SU3=BLN
  REF_KEY_1                        :   "", // CHAR (12) Business Partner Reference Key
  REF_KEY_2                        :   "", // CHAR (12) Business Partner Reference Key
  REF_KEY_3                        :   "", // CHAR (20) Reference key for line item
  ACCT_KEY                         :   "", // CHAR (3) Transaction Key
  ACCT_TYPE                        :   "", // CHAR (1) Account type
  DOC_TYPE                         :   "", // CHAR (2) Document type SU3=BAR
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  FUNC_AREA                        :   "", // CHAR (4) Functional Area SU3=FBE
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  FIS_PERIOD                       :   "", // NUMC (2) Fiscal period
  FISC_YEAR                        :   "", // NUMC (4) ALPHA=GJAHR Fiscal Year SU3=GJR
  PSTNG_DATE                       :   "", // DATS (8) Posting Date in the Document
  VALUE_DATE                       :   "", // DATS (8) Value date
  FM_AREA                          :   "", // CHAR (4) Financial Management Area SU3=FIK
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  CSHDIS_IND                       :   "", // CHAR (1) Indicator: Line Item Not Liable to Cash Discount?
  VENDOR_NO                        :   "", // CHAR (10) ALPHA=ALPHA Account Number of Vendor or Creditor SU3=LIF
  ALLOC_NMBR                       :   "", // CHAR (18) Assignment Number
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  EXT_OBJECT_ID                    :   "", // CHAR (34) Technical Key of External Object
  BUS_SCENARIO                     :   "", // CHAR (16) Business Scenario in Controlling for Logistical Objects
  COSTOBJECT                       :   "", // CHAR (12) Cost Object SU3=KTR
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  ACTTYPE                          :   "", // CHAR (6) Activity Type SU3=LAR
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  PART_PRCTR                       :   "", // CHAR (10) ALPHA=ALPHA Partner Profit Center SU3=PPC
  NETWORK                          :   "", // CHAR (12) ALPHA=ALPHA Network Number for Account Assignment SU3=NET
  WBS_ELEMENT                      :   "", // CHAR (24) ALPHA=ABPSN Work Breakdown Structure Element (WBS Element) SU3=PRO
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  ORDER_ITNO                       :   "", // NUMC (4) Order item number
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  COND_TYPE                        :   "", // CHAR (4) Condition Type SU3=VKS
  COND_COUNT                       :   "", // NUMC (2) Condition Counter
  COND_ST_NO                       :   "", // NUMC (3) Level Number
  FUND                             :   "", // CHAR (10) Fund SU3=FIC
  FUNDS_CTR                        :   "", // CHAR (16) Funds Center SU3=FIS
  CMMT_ITEM                        :   "", // CHAR (14) ALPHA=FMCIS Commitment Item SU3=FIP
  CO_BUSPROC                       :   "", // CHAR (12) ALPHA=ALPHA Business Process SU3=KWP
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number SU3=AN1
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber SU3=AN2
  BILL_TYPE                        :   "", // CHAR (4) Billing Type
  SALES_ORD                        :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  S_ORD_ITEM                       :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  DISTR_CHAN                       :   "", // CHAR (2) Distribution Channel SU3=VTW
  DIVISION                         :   "", // CHAR (2) Division SU3=SPA
  SALESORG                         :   "", // CHAR (4) Sales Organization SU3=VKO
  SALES_GRP                        :   "", // CHAR (3) Sales group SU3=VKG
  SALES_OFF                        :   "", // CHAR (4) Sales office SU3=VKB
  SOLD_TO                          :   "", // CHAR (10) ALPHA=ALPHA Sold-to party SU3=VAG
  DE_CRE_IND                       :   "", // CHAR (1) Indicator: subsequent debit/credit
  P_EL_PRCTR                       :   "", // CHAR (10) ALPHA=ALPHA Partner profit center for elimination of internal business
  XMFRW                            :   "", // CHAR (1) Indicator: Update quantity in RW
  QUANTITY                         : "0.0", // QUAN (13.3) Quantity
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) Base unit of measure in ISO code
  INV_QTY                          : "0.0", // QUAN (13.3) Actual Invoiced Quantity
  INV_QTY_SU                       : "0.0", // QUAN (13.3) Billing quantity in stockkeeping unit
  SALES_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Sales unit
  SALES_UNIT_ISO                   :   "", // CHAR (3) Sales unit in ISO code
  PO_PR_QNT                        : "0.0", // QUAN (13.3) Quantity in order price quantity unit
  PO_PR_UOM                        :   "", // UNIT (3) ALPHA=CUNIT Order price unit (purchasing)
  PO_PR_UOM_ISO                    :   "", // CHAR (3) Purchase order price unit in ISO code
  ENTRY_QNT                        : "0.0", // QUAN (13.3) Quantity in unit of entry
  ENTRY_UOM                        :   "", // UNIT (3) ALPHA=CUNIT Unit of entry
  ENTRY_UOM_ISO                    :   "", // CHAR (3) Unit of entry in ISO code
  VOLUME                           : "0.0", // QUAN (15.3) Volume
  VOLUMEUNIT                       :   "", // UNIT (3) ALPHA=CUNIT Volume unit
  VOLUMEUNIT_ISO                   :   "", // CHAR (3) Volume unit in ISO code
  GROSS_WT                         : "0.0", // QUAN (15.3) Gross Weight
  NET_WEIGHT                       : "0.0", // QUAN (15.3) Net weight
  UNIT_OF_WT                       :   "", // UNIT (3) ALPHA=CUNIT Weight unit
  UNIT_OF_WT_ISO                   :   "", // CHAR (3) Unit of weight in ISO code
  ITEM_CAT                         :   "", // CHAR (1) Item category in purchasing document
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  MATL_TYPE                        :   "", // CHAR (4) Material Type
  MVT_IND                          :   "", // CHAR (1) Movement Indicator
  REVAL_IND                        :   "", // CHAR (1) Revaluation
  ORIG_GROUP                       :   "", // CHAR (4) Origin Group as Subdivision of Cost Element
  ORIG_MAT                         :   "", // CHAR (1) Material-related origin
  SERIAL_NO                        :   "", // NUMC (2) Sequential number of account assignment
  PART_ACCT                        :   "", // CHAR (10) ALPHA=ALPHA Partner account number
  TR_PART_BA                       :   "", // CHAR (4) Trading partner's business area SU3=GSB
  TRADE_ID                         :   "", // CHAR (6) ALPHA=ALPHA Company ID of trading partner SU3=PGS
  VAL_AREA                         :   "", // CHAR (4) Valuation area SU3=BWK
  VAL_TYPE                         :   "", // CHAR (10) Valuation type SU3=BWT
  ASVAL_DATE                       :   "", // DATS (8) Reference date
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  COND_CATEGORY                    :   "", // CHAR (1) Condition Category (Examples: Tax, Freight, Price, Cost)
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area SU3=FBE
  CMMT_ITEM_LONG                   :   "", // CHAR (24) ALPHA=FMCIL Commitment item SU3=FPS
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant SU3=GM_GRANT_NBR
  CS_TRANS_T                       :   "", // CHAR (3) Transaction type
  MEASURE                          :   "", // CHAR (24) Funded Program SU3=FM_MEASURE
  SEGMENT                          :   "", // CHAR (10) ALPHA=ALPHA Segment for Segmental Reporting
  PARTNER_SEGMENT                  :   "", // CHAR (10) ALPHA=ALPHA Partner Segment for Segmental Reporting
  RES_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document Number for Earmarked Funds SU3=KBL
  RES_ITEM                         :   "", // NUMC (3) Earmarked Funds: Document Item SU3=KBP
  BILLING_PERIOD_START_DATE        :   "", // DATS (8) Billing Period of Performance Start Date
  BILLING_PERIOD_END_DATE          :   "", // DATS (8) Billing Period of Performance End Date
  PPA_EX_IND                       :   "", // CHAR (1) PPA Exclude Indicator
  FASTPAY                          :   "", // CHAR (1) PPA Fast Pay Indicator
  PARTNER_GRANT_NBR                :   "", // CHAR (20) ALPHA=ALPHA Partner Grant
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period SU3=BUDPER
  PARTNER_BUDGET_PERIOD            :   "", // CHAR (10) FM: Partner Budget Period SU3=BUDPER
  PARTNER_FUND                     :   "", // CHAR (10) Partner Fund SU3=PARTNER_FUND
  ITEMNO_TAX                       :   "", // NUMC (6) Document item number refering to tax document.
  PAYMENT_TYPE                     :   "", // CHAR (4) Payment Type for Grantor
  EXPENSE_TYPE                     :   "", // CHAR (4) Expense Type for Grantor
  PROGRAM_PROFILE                  :   "", // CHAR (10) Grantor Program Profile
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPIACAP09  Vendor Item
const ACCOUNTPAYABLE= [];

// prettier-ignore
const ACCOUNTPAYABLE= {
  ITEMNO_ACC                       :   "", // NUMC (10) Accounting Document Line Item Number
  VENDOR_NO                        :   "", // CHAR (10) ALPHA=ALPHA Account Number of Vendor or Creditor SU3=LIF
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA General Ledger Account
  REF_KEY_1                        :   "", // CHAR (12) Business Partner Reference Key
  REF_KEY_2                        :   "", // CHAR (12) Business Partner Reference Key
  REF_KEY_3                        :   "", // CHAR (20) Reference key for line item
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  BLINE_DATE                       :   "", // DATS (8) Baseline Date For Due Date Calculation
  DSCT_DAYS1                       :  "0", // DEC (3) Days for first cash discount
  DSCT_DAYS2                       :  "0", // DEC (3) Days for second cash discount
  NETTERMS                         :  "0", // DEC (3) Deadline for net conditions
  DSCT_PCT1                        :  "0", // DEC (5.3) Percentage for First Cash Discount
  DSCT_PCT2                        :  "0", // DEC (5.3) Percentage for Second Cash Discount
  PYMT_METH                        :   "", // CHAR (1) Payment method
  PMTMTHSUPL                       :   "", // CHAR (2) Payment method supplement
  PMNT_BLOCK                       :   "", // CHAR (1) Payment block key SU3=SPE
  SCBANK_IND                       :   "", // CHAR (3) State central bank indicator
  SUPCOUNTRY                       :   "", // CHAR (3) Supplying Country
  SUPCOUNTRY_ISO                   :   "", // CHAR (2) Supplier country ISO code
  BLLSRV_IND                       :   "", // CHAR (1) Service indicator (foreign payment)
  ALLOC_NMBR                       :   "", // CHAR (18) Assignment Number
  ITEM_TEXT                        :   "", // CHAR (50) Item Text
  PO_SUB_NO                        :   "", // CHAR (11) POR subscriber number
  PO_CHECKDG                       :   "", // CHAR (2) POR check digit
  PO_REF_NO                        :   "", // CHAR (27) ALPHA=ALPHA POR reference number
  W_TAX_CODE                       :   "", // CHAR (2) Withholding tax code
  BUSINESSPLACE                    :   "", // CHAR (4) Stores
  SECTIONCODE                      :   "", // CHAR (4) Section Code
  INSTR1                           :   "", // NUMC (2) Instruction Key 1
  INSTR2                           :   "", // NUMC (2) Instruction Key 2
  INSTR3                           :   "", // NUMC (2) Instruction key 3
  INSTR4                           :   "", // NUMC (2) Instruction key 4
  BRANCH                           :   "", // CHAR (10) ALPHA=ALPHA Account number of the branch
  PYMT_CUR                         :   "", // CUKY (5) Currency for automatic payment
  PYMT_AMT                         :  "0", // DEC (23.4) Amount in Payment Currency
  PYMT_CUR_ISO                     :   "", // CHAR (3) ISO code currency
  SP_GL_IND                        :   "", // CHAR (1) Special G/L Indicator
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  TAX_DATE                         :   "", // DATS (8) Date Relevant for Determining the Tax Rate
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  ALT_PAYEE                        :   "", // CHAR (10) ALPHA=ALPHA Alternative payee
  ALT_PAYEE_BANK                   :   "", // CHAR (4) Bank type of alternative payer
  PARTNER_BK                       :   "", // CHAR (4) Partner bank type
  BANK_ID                          :   "", // CHAR (5) Short key for a house bank
  PARTNER_GUID                     :   "", // CHAR (32) Com. Interface: Business Partner GUID
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  FUND                             :   "", // CHAR (10) Fund SU3=FIC
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant SU3=GM_GRANT_NBR
  MEASURE                          :   "", // CHAR (24) Funded Program SU3=FM_MEASURE
  HOUSEBANKACCTID                  :   "", // CHAR (5) ID for account details
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period SU3=BUDPER
  PPA_EX_IND                       :   "", // CHAR (1) PPA Exclude Indicator
  PART_BUSINESSPLACE               :   "", // CHAR (5) Branch Code
};

// BAPIACAR09  Customer Item
const ACCOUNTRECEIVABLE= [];

// prettier-ignore
const ACCOUNTRECEIVABLE= {
  ITEMNO_ACC                       :   "", // NUMC (10) Accounting Document Line Item Number
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA General Ledger Account
  REF_KEY_1                        :   "", // CHAR (12) Business Partner Reference Key
  REF_KEY_2                        :   "", // CHAR (12) Business Partner Reference Key
  REF_KEY_3                        :   "", // CHAR (20) Reference key for line item
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  BLINE_DATE                       :   "", // DATS (8) Baseline Date For Due Date Calculation
  DSCT_DAYS1                       :  "0", // DEC (3) Days for first cash discount
  DSCT_DAYS2                       :  "0", // DEC (3) Days for second cash discount
  NETTERMS                         :  "0", // DEC (3) Deadline for net conditions
  DSCT_PCT1                        :  "0", // DEC (5.3) Percentage for First Cash Discount
  DSCT_PCT2                        :  "0", // DEC (5.3) Percentage for Second Cash Discount
  PYMT_METH                        :   "", // CHAR (1) Payment method
  PMTMTHSUPL                       :   "", // CHAR (2) Payment method supplement
  PAYMT_REF                        :   "", // CHAR (30) Payment Reference
  DUNN_KEY                         :   "", // CHAR (1) Dunning keys
  DUNN_BLOCK                       :   "", // CHAR (1) Dunning block
  PMNT_BLOCK                       :   "", // CHAR (1) Payment block key SU3=SPE
  VAT_REG_NO                       :   "", // CHAR (20) VAT Registration Number
  ALLOC_NMBR                       :   "", // CHAR (18) Assignment Number
  ITEM_TEXT                        :   "", // CHAR (50) Item Text
  PARTNER_BK                       :   "", // CHAR (4) Partner bank type
  SCBANK_IND                       :   "", // CHAR (3) State central bank indicator
  BUSINESSPLACE                    :   "", // CHAR (4) Stores
  SECTIONCODE                      :   "", // CHAR (4) Section Code
  BRANCH                           :   "", // CHAR (10) ALPHA=ALPHA Account number of the branch
  PYMT_CUR                         :   "", // CUKY (5) Currency for automatic payment
  PYMT_CUR_ISO                     :   "", // CHAR (3) ISO code currency
  PYMT_AMT                         :  "0", // DEC (23.4) Amount in Payment Currency
  C_CTR_AREA                       :   "", // CHAR (4) Credit control area
  BANK_ID                          :   "", // CHAR (5) Short key for a house bank
  SUPCOUNTRY                       :   "", // CHAR (3) Supplying Country
  SUPCOUNTRY_ISO                   :   "", // CHAR (2) Supplier country ISO code
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  TAX_DATE                         :   "", // DATS (8) Date Relevant for Determining the Tax Rate
  SP_GL_IND                        :   "", // CHAR (1) Special G/L Indicator
  PARTNER_GUID                     :   "", // CHAR (32) Com. Interface: Business Partner GUID
  ALT_PAYEE                        :   "", // CHAR (10) ALPHA=ALPHA Alternative payee
  ALT_PAYEE_BANK                   :   "", // CHAR (4) Bank type of alternative payer
  DUNN_AREA                        :   "", // CHAR (2) Dunning Area
  CASE_GUID                        :   "", // CHAR (32) Technical Case Key (Case GUID)
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  FUND                             :   "", // CHAR (10) Fund SU3=FIC
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant SU3=GM_GRANT_NBR
  MEASURE                          :   "", // CHAR (24) Funded Program SU3=FM_MEASURE
  HOUSEBANKACCTID                  :   "", // CHAR (5) ID for account details
  RES_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document Number for Earmarked Funds SU3=KBL
  RES_ITEM                         :   "", // NUMC (3) Earmarked Funds: Document Item SU3=KBP
  FUND_LONG                        :   "", // CHAR (20) Long Fund (Obsolete)
  DISPUTE_IF_TYPE                  :   "", // CHAR (1) Dispute Management: Dispute Interface Category
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period SU3=BUDPER
  PAYS_PROV                        :   "", // CHAR (4) Payment Service Provider
  PAYS_TRAN                        :   "", // CHAR (35) Payment Reference of Payment Service Provider
  SEPA_MANDATE_ID                  :   "", // CHAR (35) Unique Reference to Mandate for each Payee
  PART_BUSINESSPLACE               :   "", // CHAR (5) Branch Code
};

// BAPIACTX09  Tax item
const ACCOUNTTAX= [];

// prettier-ignore
const ACCOUNTTAX= {
  ITEMNO_ACC                       :   "", // NUMC (10) Accounting Document Line Item Number
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA General Ledger Account
  COND_KEY                         :   "", // CHAR (4) Condition type SU3=VKS
  ACCT_KEY                         :   "", // CHAR (3) Transaction Key
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  TAX_RATE                         :  "0", // DEC (7.3) Tax rate
  TAX_DATE                         :   "", // DATS (8) Date Relevant for Determining the Tax Rate
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  TAXJURCODE_DEEP                  :   "", // CHAR (15) Tax jurisdiction code - jurisdiction for lowest level tax SU3=TXJ
  TAXJURCODE_LEVEL                 :   "", // CHAR (1) Tax Jurisdiction Code Level
  ITEMNO_TAX                       :   "", // NUMC (6) Document item number refering to tax document.
  DIRECT_TAX                       :   "", // CHAR (1) Indicator: Direct Tax Posting
};

// BAPIACWT09  Withholding tax information for FI Interface
const ACCOUNTWT= [];

// prettier-ignore
const ACCOUNTWT= {
  ITEMNO_ACC                       :   "", // NUMC (10) Accounting Document Line Item Number
  WT_TYPE                          :   "", // CHAR (2) Indicator for withholding tax type
  WT_CODE                          :   "", // CHAR (2) Withholding tax code
  BAS_AMT_LC                       :  "0", // DEC (23.4) Withholding Tax Base Amount (Local Currency)
  BAS_AMT_TC                       :  "0", // DEC (23.4) Withholding tax base amount in document currency
  BAS_AMT_L2                       :  "0", // DEC (23.4) Withholding tax base amount in 2nd local currency
  BAS_AMT_L3                       :  "0", // DEC (23.4) Withholding tax base amount in 3rd local currency
  MAN_AMT_LC                       :  "0", // DEC (23.4) Enter withholding tax amount in local currency manually
  MAN_AMT_TC                       :  "0", // DEC (23.4) Enter withholding tax amount in document currency manually
  MAN_AMT_L2                       :  "0", // DEC (23.4) Manually entered with/tax amount in 2nd local currency
  MAN_AMT_L3                       :  "0", // DEC (23.4) With/tax amount in 3rd local currency entered manually
  AWH_AMT_LC                       :  "0", // DEC (23.4) Withholding tax amount (in local currency) already withheld
  AWH_AMT_TC                       :  "0", // DEC (23.4) Withholding tax amount already withheld in document currency
  AWH_AMT_L2                       :  "0", // DEC (23.4) Withholding tax amount already withheld in 2nd local curr.
  AWH_AMT_L3                       :  "0", // DEC (23.4) With/tax amount already withheld in 3rd local currency
  BAS_AMT_IND                      :   "", // CHAR (1) Indicator: Withholding tax base amount entered manually
  MAN_AMT_IND                      :   "", // CHAR (1) Indicator: Withholding tax amount entered manually
};

// BAPIACCAIT  Additional Contract Accounts Recieviable and Payable Document Line Item
const CONTRACTITEM= [];

// prettier-ignore
const CONTRACTITEM= {
  ITEMNO_ACC                       :   "", // NUMC (10) Accounting Document Line Item Number
  CONT_ACCT                        :   "", // CHAR (12) FI-CA: Contract Account Number
  MAIN_TRANS                       :   "", // CHAR (4) FI-CA: Main Transaction for Line Item
  SUB_TRANS                        :   "", // CHAR (4) FI-CA: Subtransaction for Line Item
  FUNC_AREA                        :   "", // CHAR (4) Functional Area SU3=FBE
  FM_AREA                          :   "", // CHAR (4) Financial Management Area SU3=FIK
  CMMT_ITEM                        :   "", // CHAR (14) ALPHA=FMCIS Commitment Item SU3=FIP
  FUNDS_CTR                        :   "", // CHAR (16) Funds Center SU3=FIS
  FUND                             :   "", // CHAR (10) Fund SU3=FIC
  AGREEMENT_GUID                   : bytes(), // RAW (16) UUID in X form (binary)
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area SU3=FBE
  CMMT_ITEM_LONG                   :   "", // CHAR (24) ALPHA=FMCIL Commitment item SU3=FPS
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant SU3=GM_GRANT_NBR
  VTREF                            :   "", // CHAR (20) FI-CA: Reference Specifications from Contract
  VTREF_GUID                       : bytes(), // RAW (16) UUID in X form (binary)
  EXT_OBJECT_ID                    :   "", // CHAR (34) Technical Key of External Object
  BUS_SCENARIO                     :   "", // CHAR (16) Business Scenario in Controlling for Logistical Objects
  REFERENCE_NO                     :   "", // CHAR (16) FI-CA: Reference to FI-CA Document
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period SU3=BUDPER
};

// BAPIACKEC9  CO-PA Account Assignment Characteristics
const CRITERIA= [];

// prettier-ignore
const CRITERIA= {
  ITEMNO_ACC                       :   "", // NUMC (10) Accounting Document Line Item Number
  FIELDNAME                        :   "", // CHAR (30) Field Name SU3=DFD
  CHARACTER                        :   "", // CHAR (18) Characteristic (concrete use ==> EDIMAP)
};

// BAPIACEXTC  Container for 'Customer Exit' Parameter
const EXTENSION1= [];

// prettier-ignore
const EXTENSION1= {
  FIELD1                           :   "", // CHAR (250) Character field with length 250
  FIELD2                           :   "", // CHAR (250) Character field with length 250
  FIELD3                           :   "", // CHAR (250) Character field with length 250
  FIELD4                           :   "", // CHAR (250) Character field with length 250
};

// BAPIPAREX  Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
const EXTENSION2= [];

// prettier-ignore
const EXTENSION2= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIACPC09  Payment Card Information
const PAYMENTCARD= [];

// prettier-ignore
const PAYMENTCARD= {
  ITEMNO_ACC                       :   "", // NUMC (10) Accounting Document Line Item Number
  CC_GLACCOUNT                     :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number for Payment Card Receivables
  CC_TYPE                          :   "", // CHAR (4) Payment cards: Card type
  CC_NUMBER                        :   "", // CHAR (25) Payment cards: Card number
  CC_SEQ_NO                        :   "", // CHAR (10) Payment cards: Payment card suffix
  CC_VALID_F                       :   "", // DATS (8) Payment cards: Valid from
  CC_VALID_T                       :   "", // DATS (8) Payment Cards: Valid To
  CC_NAME                          :   "", // CHAR (40) Payment cards: Name of cardholder
  DATAORIGIN                       :   "", // CHAR (1) Payment cards: Entry mode
  AUTHAMOUNT                       :  "0", // DEC (23.4) Payment Cards: Authorized Amount
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO code currency
  CC_AUTTH_NO                      :   "", // CHAR (10) Payment cards: Authorization number
  AUTH_REFNO                       :   "", // CHAR (15) Payment cards: Authoriz. reference code of clearing house
  AUTH_DATE                        :   "", // DATS (8) Payment cards: Authorization date
  AUTH_TIME                        :   "", // TIMS (6) Payment cards: Authorization time
  MERCHIDCL                        :   "", // CHAR (15) Payment cards: Merchant ID at the clearing house
  POINT_OF_RECEIPT                 :   "", // CHAR (10) Payment cards: Point of receipt for the transaction
  TERMINAL                         :   "", // CHAR (10) Payment cards: Terminal
  CCTYP                            :   "", // CHAR (2) Payment cards: Card category
};

// BAPIACRE09  Real Estate Account Assignment Data
const REALESTATE= [];

// prettier-ignore
const REALESTATE= {
  ITEMNO_ACC                       :   "", // NUMC (10) Accounting Document Line Item Number
  BUSINESS_ENTITY                  :   "", // CHAR (8) ALPHA=SWENR Business Entity Number SU3=WEH
  BUILDING                         :   "", // CHAR (8) ALPHA=SGENR Building Number SU3=GEB
  PROPERTY                         :   "", // CHAR (8) ALPHA=SGRNR Land Number for BE SU3=GRS
  RENTAL_OBJECT                    :   "", // CHAR (8) ALPHA=SMENR Number of Rental Object SU3=MEH
  SERV_CHARGE_KEY                  :   "", // CHAR (4) ALPHA=ALPHA Service Charge Key SU3=NKL
  SETTLEMENT_UNIT                  :   "", // CHAR (5) ALPHA=ALPHA Settlement Unit SU3=EMP
  CONTRACT_NO                      :   "", // CHAR (13) ALPHA=ALPHA Contract Number SU3=RAN
  FLOW_TYPE                        :   "", // CHAR (4) Flow Type
  CORR_ITEM                        :   "", // CHAR (10) ALPHA=ALPHA Correction item number SU3=BEB
  REF_DATE                         :   "", // DATS (8) Reference date for settlement
  OPTION_RATE                      :  "0", // DEC (9.6) Real Estate Option Rate
};

// BAPIACKEV9  CO-PA Account Assignment Value Fields
const VALUEFIELD= [];

// prettier-ignore
const VALUEFIELD= {
  ITEMNO_ACC                       :   "", // NUMC (10) Accounting Document Line Item Number
  FIELDNAME                        :   "", // CHAR (30) Field Name SU3=DFD
  CURR_TYPE                        :   "", // CHAR (2) Currency type and valuation view
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO code currency
  AMT_VALCOM                       :  "0", // DEC (23.4) Value components: Currency field
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) Base unit of measure in ISO code
  QUA_VALCOM                       : "0.0", // QUAN (15.3) Value fields: Quantities
};


//
// EXPORT PARAMETERS
//
