//
// BAPISDORDER_GETDETAILEDLIST var: 2  struct: 1  table: 29  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

I_BAPI_VIEW                 :           {}, // ORDER_VIEW Bapi View for Data Reduction
// I_MEMORY_READ            :           "", // CHAR (1) no text (en)
// I_WITH_HEADER_CONDITIONS :        SPACE, // CHAR (1) no text (en)

// TABLE PARAMETERS

SALES_DOCUMENTS             :           [], // SALES_KEY Document Numbers to Be Selected
// EXTENSIONOUT             :           [], // BAPIPAREX no text (en)
// ORDER_ADDRESS_OUT        :           [], // BAPISDCOAD no text (en)
// ORDER_BILLINGDATES_OUT   :           [], // BAPISDBPLD Billing Plan Deadlines for Document Numbers
// ORDER_BILLINGPLANS_OUT   :           [], // BAPISDBPL Billing Plan for Document Numbers
// ORDER_BUSINESS_OUT       :           [], // BAPISDBUSI Business Data for Document Numbers
// ORDER_CFGS_CUBLBS_OUT    :           [], // BAPICUBLBM Configuration BLOB for Document Numbers
// ORDER_CFGS_CUCFGS_OUT    :           [], // BAPICUCFGM Configuration Data for Document Numbers
// ORDER_CFGS_CUINS_OUT     :           [], // BAPICUINSM Instance Data for Document Numbers
// ORDER_CFGS_CUPRTS_OUT    :           [], // BAPICUPRTM PartOf Data for Document Numbers
// ORDER_CFGS_CUREFS_OUT    :           [], // BAPICUREFM Instance in the Configuration for Document Numbers
// ORDER_CFGS_CUVALS_OUT    :           [], // BAPICUVALM Characteristic Value Assignment for Document Numbers
// ORDER_CFGS_CUVKS_OUT     :           [], // BAPICUVKM no text (en)
// ORDER_COND_HEAD          :           [], // BAPICONDHD no text (en)
// ORDER_COND_ITEM          :           [], // BAPICONDIT no text (en)
// ORDER_COND_QTY_SCALE     :           [], // BAPICONDQS no text (en)
// ORDER_COND_VAL_SCALE     :           [], // BAPICONDVS no text (en)
// ORDER_CONDITIONS_OUT     :           [], // BAPISDCOND Order Conditions for Document Numbers
// ORDER_CONTRACTS_OUT      :           [], // BAPISDCNTR Contract Data for Document Numbers
// ORDER_CREDITCARDS_OUT    :           [], // BAPICCARDM Credit Cards for Document Numbers
// ORDER_FLOWS_OUT          :           [], // BAPISDFLOW Document Flows for Document Numbers
// ORDER_HEADERS_OUT        :           [], // BAPISDHD Order Headers for Document Numbers
// ORDER_ITEMS_OUT          :           [], // BAPISDIT Order Item Data for Document Numbers
// ORDER_PARTNERS_OUT       :           [], // BAPISDPART Order Partners for Document Numbers
// ORDER_SCHEDULES_OUT      :           [], // BAPISDHEDU Order Schedule Lines for Document Numbers
// ORDER_STATUSHEADERS_OUT  :           [], // BAPISDHDST Header Status for Document Numbers
// ORDER_STATUSITEMS_OUT    :           [], // BAPISDITST Item Status for Document Numbers
// ORDER_TEXTHEADERS_OUT    :           [], // BAPISDTEHD Text Header Information for Document Numbers
// ORDER_TEXTLINES_OUT      :           [], // BAPITEXTLI Text Lines for Document Numbers
};

const result = await client.call("BAPISDORDER_GETDETAILEDLIST", parameters);

//
// IMPORT PARAMETERS
//

// ORDER_VIEW  Bapi View for Data Reduction

// prettier-ignore
const I_BAPI_VIEW= {
  HEADER                           :   "", // CHAR (1) Checkbox
  ITEM                             :   "", // CHAR (1) Checkbox
  SDSCHEDULE                       :   "", // CHAR (1) Checkbox
  BUSINESS                         :   "", // CHAR (1) Checkbox
  PARTNER                          :   "", // CHAR (1) Checkbox
  ADDRESS                          :   "", // CHAR (1) Checkbox
  STATUS_H                         :   "", // CHAR (1) Checkbox
  STATUS_I                         :   "", // CHAR (1) Checkbox
  SDCOND                           :   "", // CHAR (1) Checkbox
  SDCOND_ADD                       :   "", // CHAR (1) Checkbox
  CONTRACT                         :   "", // CHAR (1) Checkbox
  TEXT                             :   "", // CHAR (1) Checkbox
  FLOW                             :   "", // CHAR (1) Checkbox
  BILLPLAN                         :   "", // CHAR (1) Checkbox
  CONFIGURE                        :   "", // CHAR (1) Checkbox
  CREDCARD                         :   "", // CHAR (1) Checkbox
  INCOMP_LOG                       :   "", // CHAR (1) Checkbox
};


//
// TABLE PARAMETERS
//

// SALES_KEY  Document Numbers to Be Selected
const SALES_DOCUMENTS= [];

// prettier-ignore
const SALES_DOCUMENTS= {
  VBELN                            :   "", // CHAR (10) ALPHA=ALPHA Sales Document SU3=AUN
};

// BAPIPAREX  
const EXTENSIONOUT= [];

// prettier-ignore
const EXTENSIONOUT= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPISDCOAD  
const ORDER_ADDRESS_OUT= [];

// prettier-ignore
const ORDER_ADDRESS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  DOC_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Sales Document SU3=AUN
  ADDRESS                          :   "", // CHAR (10) ALPHA=ALPHA Address
  FORMOFADDR                       :   "", // CHAR (15) Form of address
  NAME                             :   "", // CHAR (35) Name 1
  NAME_2                           :   "", // CHAR (35) Name 2
  NAME_3                           :   "", // CHAR (35) Name 3
  NAME_4                           :   "", // CHAR (35) Name 4
  STREET                           :   "", // CHAR (35) Street and House Number
  COUNTRY                          :   "", // CHAR (3) Country Key
  COUNTRYISO                       :   "", // CHAR (2) Departure country in ISO code
  POSTL_CODE                       :   "", // CHAR (10) Postal Code
  POBX_PCD                         :   "", // CHAR (10) P.O. Box Postal Code
  POBX_CTY                         :   "", // CHAR (35) PO Box city
  CITY                             :   "", // CHAR (35) City
  DISTRICT                         :   "", // CHAR (35) District
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  CITY_CODE                        :   "", // CHAR (4) City Code
  COUNTY_CDE                       :   "", // CHAR (3) County Code
  PO_BOX                           :   "", // CHAR (10) PO Box
  TELEPHONE                        :   "", // CHAR (16) First telephone number
  TELEPHONE2                       :   "", // CHAR (16) Second telephone number
  TELEBOX                          :   "", // CHAR (15) Telebox number
  FAX_NUMBER                       :   "", // CHAR (31) Fax Number
  TELETEX                          :   "", // CHAR (30) Teletex number
  TELEX                            :   "", // CHAR (30) Telex number
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  TRANSPZONE                       :   "", // CHAR (10) Transportation zone to or from which the goods are delivered
  HOUSE_NO                         :   "", // NUMC (6) House Number
  GENDER                           :   "", // CHAR (1) Partner's gender
  NAME_LIST                        :   "", // CHAR (35) Name of list display
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  PERS_NO                          :   "", // CHAR (10) ALPHA=ALPHA Person number SU3=CDT
  ADDR_TYPE                        :   "", // CHAR (1) Address type (1=Organization, 2=Person, 3=Contact person)
  NRELSTAT                         :   "", // CHAR (1) Status of data transfer into subsequent release
  INDIUPDATE                       :   "", // CHAR (1) Update indicator
  STREETNA                         :   "", // CHAR (35) Street Name (Without House Number)
  HOUSE_NO_LONG                    :   "", // CHAR (10) Character Field Length = 10
};

// BAPISDBPLD  Billing Plan Deadlines for Document Numbers
const ORDER_BILLINGDATES_OUT= [];

// prettier-ignore
const ORDER_BILLINGDATES_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  BILL_PLAN                        :   "", // CHAR (10) Billing plan number / invoicing plan number
  BILL_PLANI                       :   "", // NUMC (6) Item for billing plan/invoice plan/payment cards
  DATETYPE                         :   "", // CHAR (2) Date category
  DATEDESCRI                       :   "", // CHAR (4) Date description
  SETTLEDATE                       :   "", // DATS (8) Settlement date for deadline
  IDADOPTBIL                       :   "", // CHAR (1) ID for adopting billing/invoice date
  RULEBILLPL                       :   "", // CHAR (1) Rule in billing plan/invoice plan
  INVOICEPER                       :  "0", // DEC (5.2) Percentage of value to be invoiced
  CURRENCKEY                       :   "", // CUKY (5) Currency Key of Credit Control Area
  CURRENCISO                       :   "", // CHAR (3) ISO code currency
  EXCHANRATE                       :  "0", // DEC (9.5) ALPHA=EXCRT Direct quotation exchange rate for deadline in billing plan
  VALONDATE                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  BILLBLOCK                        :   "", // CHAR (2) Billing block for billing plan/invoice plan dates
  ORDBILLTYP                       :   "", // CHAR (4) Proposed billing type for an order-related billing document
  STATBILLPL                       :   "", // CHAR (1) Billing status for the billing plan/invoice plan date
  RULEORINEX                       :   "", // CHAR (2) Rule for Origin of Next Billing/Invoice Date
  LENSTANPER                       :   "", // NUMC (3) Length of a standard period in the billing plan
  MILESTONNO                       :   "", // NUMC (12) Milestone number
  MILESTONE                        :   "", // CHAR (5) Usage
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  PAYER                            :   "", // CHAR (10) ALPHA=ALPHA Payer
  TAX_CLASS1                       :   "", // CHAR (1) Tax classification 1 for customer
  TAX_CLASS2                       :   "", // CHAR (1) Tax classification 2 for customer
  TAX_CLASS3                       :   "", // CHAR (1) Tax classification 3 for customer
  TAX_CLASS4                       :   "", // CHAR (1) Tax Classification 4 Customer
  TAX_CLASS5                       :   "", // CHAR (1) Tax classification 5 for customer
  TAX_CLASS6                       :   "", // CHAR (1) Tax classification 6 for customer
  TAX_CLASS7                       :   "", // CHAR (1) Tax classification 7 for customer
  TAX_CLASS8                       :   "", // CHAR (1) Tax classification 8 for customer
  TAX_CLASS9                       :   "", // CHAR (1) Tax classification 9 for customer
  ADD_VAL_DY                       :   "", // NUMC (2) Additional value days
  FIX_VAL_DY                       :   "", // DATS (8) Fixed value date
  SETTLEDAT                        :   "", // DATS (8) Settlement date for deadline
  PROCASMANU                       :   "", // CHAR (1) Process as for manually entered date
  CALDEFDAYS                       :   "", // CHAR (2) Calendar for Defining Days Relevant to Billing/Invoicing
  BILL_DATE                        :   "", // DATS (8) Billing date for billing index and printout
  NET_VALUE                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  NET_PRICE                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  COST_DOC_C                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP1                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP2                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP3                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP4                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP5                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP6                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CREDPRICIT                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  AMOUNTELIG                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  REBATEBAS                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CURRENCY                         :   "", // CUKY (5) SD document currency SU3=FWS
  CURREN_ISO                       :   "", // CHAR (3) ISO code currency
  PRICE_OK                         :   "", // CHAR (1) Pricing is OK
  MEANSOFPAY                       :   "", // CHAR (1) Means of payment for classifying payment card plan lines
  CREDITPRED                       : "0.0", // FLTP (16.16) Item credit price
  HILEVPAYNO                       :   "", // CHAR (10) Higher-level payment card plan number for billing
  HILEVITBIL                       :   "", // NUMC (6) Higher-level item in billing plan
  EXCHRATEFI                       :  "0", // DEC (9.5) ALPHA=EXCRT Directly quoted exchange rate for FI postings
  ACCOUNTNO                        :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number for Payment Card Receivables
  INDICORDAT                       :   "", // CHAR (1) Indicator for correction date in billing plan
  ORIGBILDAT                       :   "", // DATS (8) Baseline date for determining AFDAT
  EXCHANRATE_V                     :  "0", // DEC (9.5) ALPHA=EXCRT Indirect quotation exchange rate for deadline in billing pla
  EXCHRATEFI_V                     :  "0", // DEC (9.5) ALPHA=EXCRT Indirectly quoted exchange rate for FI postings
};

// BAPISDBPL  Billing Plan for Document Numbers
const ORDER_BILLINGPLANS_OUT= [];

// prettier-ignore
const ORDER_BILLINGPLANS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  BILL_PLAN                        :   "", // CHAR (10) Billing plan number / invoicing plan number
  BILLPLATYP                       :   "", // CHAR (1) Billing plan category
  B_INPLATYP                       :   "", // CHAR (2) Billing/Invoicing Plan Type
  SORT_FLD                         :   "", // CHAR (10) Sort field
  BILLSTADAT                       :   "", // DATS (8) Start date for billing plan/invoice plan
  BILLENDDAT                       :   "", // DATS (8) End date billing plan/invoice plan
  RULEDETHOR                       :   "", // CHAR (2) Rule for Determining Horizon in Billing/Invoicing Plan
  RULEORISTA                       :   "", // CHAR (2) Rule for Origin of Start Date of Billing/Invoicing Plan
  RULEORIEND                       :   "", // CHAR (2) Rule for Origin of End Date for Billing/Invoicing Plan
  RULEORINEX                       :   "", // CHAR (2) Rule for Origin of Next Billing/Invoice Date
  LENSTANPER                       :   "", // NUMC (3) Length of a standard period in the billing plan
  STANBILLNO                       :   "", // CHAR (10) Standard Billing/Invoicing Plan Number
  DATESFROM                        :   "", // DATS (8) Dates from
  BILLCREAIA                       :   "", // CHAR (1) Billing/Invoice Creation in Advance
  RULEDATFRO                       :   "", // CHAR (2) Rule for Origin of Start Dates
  RULEDETBIL                       :   "", // CHAR (2) Rule for Determination of a Deviating Billing/Invoice Date
  CALDEFDAYS                       :   "", // CHAR (2) Calendar for Defining Days Relevant to Billing/Invoicing
  DATESTO                          :   "", // DATS (8) Dates to
  RULDATESTO                       :   "", // CHAR (2) Rule for Origin of End Dates
  ROUTING_NO                       :   "", // NUMC (10) Routing number of operations in the order
  CO_APLZL                         :   "", // NUMC (8) General counter for order
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  RES_ITEM                         :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  ITUNLIMIT                        :   "", // NUMC (6) Item unlimited in value
  PAYCARDS1                        :   "", // CHAR (1) Payment cards: Status regarding requirements
  PAYCARDS2                        :   "", // CHAR (1) Payment cards: Totals status - Call external system
  PAYCARDS3                        :   "", // CHAR (1) Payment cards: Overall status - Responses from ext. system
  PAYCARDS4                        :   "", // CHAR (1) Payment cards: Reserve
  PAYCARDS5                        :   "", // CHAR (1) Payment cards: Authorization block
  INTPROJNO                        :   "", // NUMC (8) ALPHA=ABPSP WBS Element
  AUTOCREATE                       :   "", // CHAR (1) Automatic creation of correction dates in billing plan
};

// BAPISDBUSI  Business Data for Document Numbers
const ORDER_BUSINESS_OUT= [];

// prettier-ignore
const ORDER_BUSINESS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  PRICE_GRP                        :   "", // CHAR (2) Price group (customer) SU3=VKA
  CUST_GROUP                       :   "", // CHAR (2) Customer group SU3=VKD
  SALES_DIST                       :   "", // CHAR (6) Sales district SU3=BZI
  PRICE_LIST                       :   "", // CHAR (2) Price list type SU3=VPL
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  ORDCOMBIND                       :   "", // CHAR (1) Order Combination Indicator
  BILL_SCHED                       :   "", // CHAR (2) Invoice dates (calendar identification)
  INVO_SCHED                       :   "", // CHAR (2) Invoice list schedule (calendar identification)
  MN_INVOICE                       :   "", // CHAR (1) Manual invoice maintenance
  EXCHRATEFI                       :  "0", // DEC (9.5) ALPHA=EXCRT Directly quoted exchange rate for FI postings
  ADD_VAL_DY                       :   "", // NUMC (2) Additional value days
  FIX_VAL_DY                       :   "", // DATS (8) Fixed value date
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  PAYMETHODE                       :   "", // CHAR (1) Payment Method
  ACCNT_ASGN                       :   "", // CHAR (2) Account assignment group for this customer
  EXCHG_RATE                       :  "0", // DEC (9.5) Directly quoted exchange rate for pricing and statistics
  PRICE_DATE                       :   "", // DATS (8) Date for pricing and exchange rate
  BILL_DATE                        :   "", // DATS (8) Billing date for billing index and printout
  SERV_DATE                        :   "", // DATS (8) Date on which services rendered
  FISC_YEAR                        :   "", // NUMC (4) ALPHA=GJAHR Fiscal Year SU3=GJR
  POSTPERIOD                       :   "", // NUMC (3) Posting period SU3=POPR
  EXCHRATEST                       :  "0", // DEC (9.5) ALPHA=EXCRT Directly quoted exchange rate for statistics
  DUNN_KEY                         :   "", // CHAR (1) Dunning Key
  DUNN_BLOCK                       :   "", // CHAR (1) Dunning Block
  BILL_PLAN                        :   "", // CHAR (10) Billing plan number / invoicing plan number
  PROMOTION                        :   "", // CHAR (10) ALPHA=ALPHA Promotion SU3=WAK
  PAY_GUARAN                       :   "", // CHAR (6) Payment guarantee procedure
  FINDOCPROC                       :   "", // CHAR (10) ALPHA=ALPHA Financial doc. processing: Internal financial doc. number SU3=AKN
  J_1AFITP_D                       :   "", // CHAR (2) Tax type
  REAS_0_VAT                       :   "", // CHAR (1) Reason for zero VAT
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  ACTIVICODE                       :   "", // CHAR (2) Activity Code for Gross Income Tax
  DISTRIBTYP                       :   "", // CHAR (2) Distribution Type for Employment Tax
  TAX_CLASS                        :   "", // CHAR (10) Tax relevant classification
  DEPART_NO                        :   "", // CHAR (4) Department number
  REC_POINT                        :   "", // CHAR (25) Receiving point
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
  PURCH_DATE                       :   "", // DATS (8) Customer purchase order date
  PO_METHOD                        :   "", // CHAR (4) Customer purchase order type
  REF_1                            :   "", // CHAR (12) Your Reference
  PURCH_NO_S                       :   "", // CHAR (35) Ship-to Party's Purchase Order Number
  PO_DAT_S                         :   "", // DATS (8) Ship-to party's PO date
  PO_METH_S                        :   "", // CHAR (4) Ship-to party purchase order type
  REF_1_S                          :   "", // CHAR (12) Ship-to party character
  POITMNOS                         :   "", // CHAR (6) ALPHA=ALPHA Item Number of the Underlying Purchase Order
  TRANS_DATE                       :   "", // DATS (8) Translation date
  TRANSDATE                        :   "", // DATS (8) Translation date
  CUSTCONGR1                       :   "", // CHAR (2) Customer condition group 1
  CUSTCONGR2                       :   "", // CHAR (2) Customer condition group 2
  CUSTCONGR3                       :   "", // CHAR (2) Customer condition group 3
  CUSTCONGR4                       :   "", // CHAR (2) Customer condition group 4
  CUSTCONGR5                       :   "", // CHAR (2) Customer condition group 5
  VALCONTCUR                       :   "", // CUKY (5) Value contract currency
  ISOVALCONT                       :   "", // CHAR (3) ISO code currency
  EXCHRATECO                       :  "0", // DEC (9.5) ALPHA=EXCRT Direct noted exchange rate in value contract currency
  CURRENCKEY                       :   "", // CUKY (5) Currency key for letter-of-credit procg in foreign trade SU3=FWS
  ISOCURRKEY                       :   "", // CHAR (3) ISO code currency
  EXCHRATELC                       :  "0", // DEC (9.5) ALPHA=EXCRT Price-quotation rate for processing letters of credit in FT
  CEPRPERCEN                       :  "0", // DEC (5.2) Depreciation percentage for financial document processing
  INFLAT_IDX                       :   "", // CHAR (5) Inflation Index
  BASDATEIDX                       :   "", // DATS (8) Indexing base date
  CUST_PO_NO                       :   "", // CHAR (35) Customer PO number as matchcode field
  DLV_TIME                         :   "", // CHAR (3) Agreed delivery time
  DLI_PROFIL                       :   "", // CHAR (8) Dynamic Item Processor Profile SU3=AD0
  CALC_MOTIVE                      :   "", // CHAR (2) Accounting Indicator
  BILL_FORM                        :   "", // CHAR (2) Billing form
  REVENUETYP                       :   "", // CHAR (1) Revenue recognition category
  BEGDEMAPER                       :   "", // CHAR (1) Proposed start date for accrual period
  EXCHRATELC_V                     :  "0", // DEC (9.5) ALPHA=EXCRT Indir.-quotation rate for processing letters of credit in FT
  EXCH_RATE_FI_V                   :  "0", // DEC (9.5) ALPHA=EXCRT Indirectly quoted exchange rate for FI postings
  EXCHG_RATE_V                     :  "0", // DEC (9.5) Indirectly quoted exchange rate for pricing and statistics
  EXCHRATEST_V                     :  "0", // DEC (9.5) ALPHA=EXCRT Indirectly quoted exchange rate for statistics
  EXCHRATECO_V                     :  "0", // DEC (9.5) ALPHA=EXCRT Indirect noted exchange rate in value contract currency
  DELIV_TYPE                       :   "", // CHAR (2) Shipping type
  TRANS_CAT                        :   "", // CHAR (4) Means of Transport Type
  TRANS_MAT                        :   "", // CHAR (18) ALPHA=MATN1 Means of Transport
  SPEC_PROC                        :   "", // CHAR (4) Special processing indicator
  PRODCAT                          :   "", // CHAR (10) Product catalog number SU3=WMI
  FUNC_AREA                        :   "", // CHAR (4) Functional Area SU3=FBE
  POD_PROC                         :   "", // CHAR (1) Relevant for POD processing
  CAMPAIGN                         : bytes(), // RAW (16) Generic project planning: GUID from external R/3 system
  FKK_CONACCT                      :   "", // CHAR (12) Character field of length 12
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area SU3=FBE
  FKK_CONACCT_GUID                 : bytes(), // RAW (16) GUID in 'RAW' format
  TRANS_MAT_EXTERNAL               :   "", // CHAR (40) ALPHA=MATNL Long Material Number for TRANS_MAT Field
  TRANS_MAT_GUID                   :   "", // CHAR (32) External GUID for TRANS_MAT Field
  TRANS_MAT_VERSION                :   "", // CHAR (10) ALPHA=MATNW Version Number for TRANS_MAT Field
  SEPA_MANDATE_ID                  :   "", // CHAR (35) Unique Reference to Mandate for each Payee
  INCOTERMSV                       :   "", // CHAR (4) Incoterms Version
  INCOTERMS2L                      :   "", // CHAR (70) Incoterms Location 1
  INCOTERMS3L                      :   "", // CHAR (70) Incoterms Location 2
  TRANS_MAT_LONG                   :   "", // CHAR (40) Means of Transport
};

// BAPICUBLBM  Configuration BLOB for Document Numbers
const ORDER_CFGS_CUBLBS_OUT= [];

// prettier-ignore
const ORDER_CFGS_CUBLBS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  CONTEXT                          :   "", // CHAR (250) CU: Configuration BLOB (SCE)
};

// BAPICUCFGM  Configuration Data for Document Numbers
const ORDER_CFGS_CUCFGS_OUT= [];

// prettier-ignore
const ORDER_CFGS_CUCFGS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  POSEX                            :   "", // CHAR (6) External Item Number
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  ROOT_ID                          :   "", // CHAR (8) Instance Number in Configuration
  SCE                              :   "", // CHAR (1) CU: Only Information Transferred from SCE to Configuration
  KBNAME                           :   "", // CHAR (30) Knowledge-Base Object SU3=KBO
  KBVERSION                        :   "", // CHAR (30) Runtime Version of SCE Knowledge Base SU3=KBR
  COMPLETE                         :   "", // CHAR (1) General Indicator
  CONSISTENT                       :   "", // CHAR (1) General Indicator
  CFGINFO                          :   "", // CHAR (250) CU: Configuration BLOB (SCE)
  KBPROFILE                        :   "", // CHAR (30) Knowledge-Base Profile
  KBLANGUAGE                       :   "", // LANG (1) ALPHA=ISOLA Configuration Language
  CBASE_ID                         :   "", // CHAR (32) Instance Number (Persistent)
  CBASE_ID_TYPE                    :   "", // CHAR (1) Type of Instance Number (Persistent)
};

// BAPICUINSM  Instance Data for Document Numbers
const ORDER_CFGS_CUINS_OUT= [];

// prettier-ignore
const ORDER_CFGS_CUINS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  OBJ_TYPE                         :   "", // CHAR (10) Object type
  CLASS_TYPE                       :   "", // CHAR (3) Class Type
  OBJ_KEY                          :   "", // CHAR (50) Object key
  OBJ_TXT                          :   "", // CHAR (70) Language-Dependent Object Description
  QUANTITY                         :   "", // CHAR (15) Instance Quantity
  AUTHOR                           :   "", // CHAR (1) Statement was Inferred
  QUANTITY_UNIT                    :   "", // UNIT (3) ALPHA=CUNIT Unit of Measure
  COMPLETE                         :   "", // CHAR (1) General Indicator
  CONSISTENT                       :   "", // CHAR (1) General Indicator
  OBJECT_GUID                      :   "", // CHAR (32) GUID for TYPE_OF Statement of Instance
  PERSIST_ID                       :   "", // CHAR (32) Instance Number (Persistent)
  PERSIST_ID_TYPE                  :   "", // CHAR (1) Type of Instance Number (Persistent)
};

// BAPICUPRTM  PartOf Data for Document Numbers
const ORDER_CFGS_CUPRTS_OUT= [];

// prettier-ignore
const ORDER_CFGS_CUPRTS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  PARENT_ID                        :   "", // CHAR (8) Instance Number in Configuration
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  PART_OF_NO                       :   "", // CHAR (4) Part_of Item Number
  OBJ_TYPE                         :   "", // CHAR (10) Object type
  CLASS_TYPE                       :   "", // CHAR (3) Class Type
  OBJ_KEY                          :   "", // CHAR (50) Object key
  AUTHOR                           :   "", // CHAR (1) Statement was Inferred
  SALES_RELEVANT                   :   "", // CHAR (1) Part is Sales-Relevant
  PART_OF_GUID                     :   "", // CHAR (32) GUID for PART_OF Statement for Instance
};

// BAPICUREFM  Instance in the Configuration for Document Numbers
const ORDER_CFGS_CUREFS_OUT= [];

// prettier-ignore
const ORDER_CFGS_CUREFS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  POSEX                            :   "", // CHAR (6) External Item Number
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
};

// BAPICUVALM  Characteristic Value Assignment for Document Numbers
const ORDER_CFGS_CUVALS_OUT= [];

// prettier-ignore
const ORDER_CFGS_CUVALS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  CHARC                            :   "", // CHAR (40) Characteristic Name
  CHARC_TXT                        :   "", // CHAR (70) Language-Dependent Characteristic Description
  VALUE                            :   "", // CHAR (40) Characteristic Value
  VALUE_TXT                        :   "", // CHAR (70) Language-Dependent Description of Characteristic Value
  AUTHOR                           :   "", // CHAR (1) Statement was Inferred
  VALUE_TO                         :   "", // CHAR (40) Characteristic Value
  VALCODE                          :   "", // CHAR (1) Value Type: Interval Limits - Single Values
};

// BAPICUVKM  
const ORDER_CFGS_CUVKS_OUT= [];

// prettier-ignore
const ORDER_CFGS_CUVKS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  VKEY                             :   "", // CHAR (26) Character field length 26
  FACTOR                           :   "", // CHAR (15) Char 15
};

// BAPICONDHD  
const ORDER_COND_HEAD= [];

// prettier-ignore
const ORDER_COND_HEAD= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  COND_NO                          :   "", // CHAR (10) Condition record number
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CREAT_DATE                       :   "", // DATS (8) Date on Which Record Was Created
  COND_USAGE                       :   "", // CHAR (1) Usage of the condition table SU3=KVW
  TABLE_NO                         :   "", // CHAR (3) ALPHA=KOTAB Condition table SU3=KON
  APPLICATIO                       :   "", // CHAR (2) Application SU3=KAP
  COND_TYPE                        :   "", // CHAR (4) Condition Type SU3=VKS
  VARKEY                           :   "", // CHAR (100) Character 100
  VALID_FROM                       :   "", // DATS (8) Valid-From Date
  VALID_TO                         :   "", // DATS (8) Valid To Date
  SEARCHTERM                       :   "", // CHAR (10) Search term for conditions
  RESPONS                          :   "", // CHAR (3) Responsibility in SD for condition/material
  PROMOT_NO                        :   "", // CHAR (10) ALPHA=ALPHA Promotion SU3=VPI
  SALES_DEAL                       :   "", // CHAR (10) ALPHA=ALPHA Sales deal SU3=VK1
  SALESQUOTE                       :   "", // CHAR (10) ALPHA=ALPHA Sales quote SU3=VK3
  STD_AGRMNT                       :   "", // CHAR (10) ALPHA=ALPHA Standard agreement SU3=VK2
  PROMOTION                        :   "", // CHAR (10) ALPHA=ALPHA Promotion SU3=WAK
  REBAGREEMT                       :   "", // CHAR (10) ALPHA=ALPHA Agreement (subsequent settlement) SU3=VBO
  LIC_NO                           :   "", // CHAR (20) Tax exemption license number
  LIC_DATE                         :   "", // DATS (8) Date license granted
  VARDATE                          :   "", // CHAR (100) Character 100
};

// BAPICONDIT  
const ORDER_COND_ITEM= [];

// prettier-ignore
const ORDER_COND_ITEM= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  COND_NO                          :   "", // CHAR (10) Condition record number
  COND_COUNT                       :   "", // NUMC (2) Sequential number of the condition
  APPLICATIO                       :   "", // CHAR (2) Application SU3=KAP
  COND_TYPE                        :   "", // CHAR (4) Condition Type SU3=VKS
  TEXT_NO                          :   "", // CHAR (10) Number of texts
  SCALETYPE                        :   "", // CHAR (1) Scale Type
  SCALEBASIN                       :   "", // CHAR (1) Scale basis indicator
  SCALE_QTY                        : "0.0", // QUAN (15.3) Condition scale quantity
  UNITMEASUR                       :   "", // UNIT (3) ALPHA=CUNIT Condition scale unit of measure
  MEASUR_ISO                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  SCALE_VAL                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CURRENCKEY                       :   "", // CUKY (5) Scale currency SU3=FWS
  CURREN_ISO                       :   "", // CHAR (3) ISO Currency Code
  CALCTYPCON                       :   "", // CHAR (1) Calculation type for condition
  COND_VALUE                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CONDCURR                         :   "", // CUKY (5) Rate unit (currency or percentage)
  COND_ISO                         :   "", // CHAR (3) ISO Currency Code
  COND_P_UNT                       :  "0", // DEC (5) Condition pricing unit
  COND_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  CONUNITISO                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  PRICELEVEL                       :   "", // CHAR (4) Price levels
  NUMCONVERT                       :  "0", // DEC (5) Numerator for converting condition units to base units
  DENOMINATO                       :  "0", // DEC (5) Denominator for converting condition units to base units
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASEQTYISO                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  LOWERLIMIT                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  UPPERLIMIT                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  PLCONDVAL                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CUM_VALUE                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CUMM_ACCR                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURR_ISO                         :   "", // CHAR (3) ISO Currency Code
  CONDCURREN                       :   "", // CUKY (5) Condition currency (for cumulation fields) SU3=FWS
  ISOCURRENC                       :   "", // CHAR (3) ISO Currency Code
  PLAN_BASIS                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  RATE_UNIT                        :   "", // CUKY (5) Rate unit (currency, sales unit, or %)
  EXCLUSION                        :   "", // CHAR (1) Condition exclusion indicator
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  VENDOR_NO                        :   "", // CHAR (10) ALPHA=ALPHA Account Number of Vendor or Creditor SU3=LIF
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  INDIDELETE                       :   "", // CHAR (1) Deletion Indicator for Condition Item
  CONDITIDX                        :   "", // NUMC (2) Condition item index
  MATLSETTL                        :   "", // CHAR (18) ALPHA=MATN1 Material for rebate settlement SU3=MAT
  ACCRUALS                         :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  REB_RETROA                       :   "", // CHAR (1) Rebate was set up retroactively
  STATOFAGRE                       :   "", // CHAR (1) Status of the agreement
  PROMOT_NO                        :   "", // CHAR (10) ALPHA=ALPHA Promotion SU3=VPI
  SALES_DEAL                       :   "", // CHAR (10) ALPHA=ALPHA Sales deal SU3=VK1
  SALESQUOTE                       :   "", // CHAR (10) ALPHA=ALPHA Sales quote SU3=VK3
  ADD_VAL_DY                       :   "", // NUMC (2) Additional value days
  FIX_VAL_DY                       :   "", // DATS (8) Fixed value date
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  NUMBORDERS                       :   "", // NUMC (2) Maximum number of sales orders per condition record
  MINCONBAVA                       : "0.0", // QUAN (15.3) Minimum condition base value
  MAXCONBAVA                       : "0.0", // QUAN (15.3) Maximum condition base value
  MAXCONVAL                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  INCR_SCALE                       :   "", // NUMC (4) Number of incremental scale
  PRICSCALE                        :   "", // NUMC (4) Scale number for pricing
  RELPRCG                          :   "", // CHAR (1) Sales Price Calculation: Relevant to pricing
  PROMOTION                        :   "", // CHAR (10) ALPHA=ALPHA Promotion SU3=WAK
  REBAGREEMT                       :   "", // CHAR (10) ALPHA=ALPHA Agreement (subsequent settlement) SU3=VBO
  WITHTAXCOD                       :   "", // CHAR (2) Withholding tax code
  CONTRACT                         :   "", // CHAR (1) Contract Type
  CONTRACTNO                       :   "", // CHAR (13) ALPHA=ALPHA Contract Number SU3=RAN
  FLOW_TYPE                        :   "", // CHAR (4) Flow Type
  INDIMATMAI                       :   "", // CHAR (1) Indicator: Matrix maintenance
  STATUS                           :   "", // CHAR (1) Release status
  UMSABST                          :   "", // CHAR (1) Status of business volume comparison for a condition
  MATLSETTL_EXTERNAL               :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATLSETTL Field
  MATLSETTL_GUID                   :   "", // CHAR (32) External GUID for MATLSETTL Field
  MATLSETTL_VERSION                :   "", // CHAR (10) ALPHA=MATNW Version Number for MATLSETTL Field
  MATLSETTL_LONG                   :   "", // CHAR (40) Material for rebate settlement SU3=MAT
};

// BAPICONDQS  
const ORDER_COND_QTY_SCALE= [];

// prettier-ignore
const ORDER_COND_QTY_SCALE= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  COND_NO                          :   "", // CHAR (10) Condition record number
  COND_COUNT                       :   "", // NUMC (2) Sequential number of the condition
  LINE_NO                          :   "", // NUMC (4) Current number of the line scale
  SCALE_QTY                        : "0.0", // QUAN (15.3) Condition scale quantity
  COND_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  T_UNIT_ISO                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  CURRENCY                         :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CONDCURR                         :   "", // CUKY (5) Rate unit (currency or percentage)
  CURREN_ISO                       :   "", // CHAR (3) ISO Currency Code
};

// BAPICONDVS  
const ORDER_COND_VAL_SCALE= [];

// prettier-ignore
const ORDER_COND_VAL_SCALE= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  COND_NO                          :   "", // CHAR (10) Condition record number
  COND_COUNT                       :   "", // NUMC (2) Sequential number of the condition
  LINE_NO                          :   "", // NUMC (4) Current number of the line scale
  SCALE_VAL                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CURRENCKEY                       :   "", // CUKY (5) Scale currency SU3=FWS
  CURRENCISO                       :   "", // CHAR (3) ISO Currency Code
  CURRENCY                         :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CONDCURR                         :   "", // CUKY (5) Rate unit (currency or percentage)
  CURREN_ISO                       :   "", // CHAR (3) ISO Currency Code
};

// BAPISDCOND  Order Conditions for Document Numbers
const ORDER_CONDITIONS_OUT= [];

// prettier-ignore
const ORDER_CONDITIONS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  CONDIT_NO                        :   "", // CHAR (10) Number of the document condition
  ITM_NUMBER                       :   "", // NUMC (6) Condition item number
  COND_ST_NO                       :   "", // NUMC (3) Step number
  COND_COUNT                       :   "", // NUMC (2) Condition counter
  APPLICATIO                       :   "", // CHAR (2) Application SU3=KAP
  COND_TYPE                        :   "", // CHAR (4) Condition Type SU3=VKS
  CONPRICDAT                       :   "", // DATS (8) Condition pricing date
  CALCTYPCON                       :   "", // CHAR (1) Calculation type for condition
  CONBASEVAL                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SDCURRENCY                       :   "", // CUKY (5) SD document currency SU3=FWS
  CURREN_ISO                       :   "", // CHAR (3) ISO code currency
  COND_VALUE                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCISO                       :   "", // CHAR (3) ISO code currency
  CONEXCHRAT                       :  "0", // DEC (9.5) Price noted cond. exch. rate for conv. into local curr. rate
  COND_P_UNT                       :  "0", // DEC (5) Condition pricing unit
  COND_D_UNT                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit in the document
  T_UNIT_ISO                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  NUMCONVERT                       :  "0", // DEC (5) Numerator for converting condition units to base units
  DENOMINATO                       :  "0", // DEC (5) Denominator for converting condition units to base units
  CONDTYPE                         :   "", // CHAR (1) Condition category (examples: tax, freight, price, cost)
  STAT_CON                         :   "", // CHAR (1) Condition is used for statistics
  SCALETYPE                        :   "", // CHAR (1) Scale Type
  ACCRUALS                         :   "", // CHAR (1) Condition is Relevant for Accrual  (e.g. Freight)
  CONINVOLST                       :   "", // CHAR (1) Condition for invoice list
  CONDORIGIN                       :   "", // CHAR (1) Origin of the condition
  GROUPCOND                        :   "", // CHAR (1) Group condition
  COND_UPDAT                       :   "", // CHAR (1) Condition update
  ACCESS_SEQ                       :   "", // NUMC (2) Access sequence - Access number
  COND_NO                          :   "", // CHAR (10) Condition record number
  CONDCOUNT                        :   "", // NUMC (2) Sequential number of the condition
  ACCOUNTKEY                       :   "", // CHAR (3) Account key
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number SU3=SAK
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  ACCOUNT_KE                       :   "", // CHAR (3) Account key - accruals / provisions
  GLACCOUNT                        :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number SU3=SAK
  WITHTAXCOD                       :   "", // CHAR (2) Withholding tax code
  VENDOR_NO                        :   "", // CHAR (10) ALPHA=ALPHA Account Number of Vendor or Creditor SU3=LIF
  CUSTNO_RR                        :   "", // CHAR (10) ALPHA=ALPHA Customer number (rebate recipient) SU3=KUN
  ROUNDOFFDI                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CONDVALUE                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CONDCNTRL                        :   "", // CHAR (1) Condition control
  CONDISACTI                       :   "", // CHAR (1) Condition is inactive
  CONDCLASS                        :   "", // CHAR (1) Condition class
  CONDCOINHD                       :   "", // NUMC (2) Condition counter for (header conditions)
  INDIBASVAL                       :   "", // CHAR (1) Indicator for maximum condition base value
  INDICONVAL                       :   "", // CHAR (1) Indicator for maximum condition amount
  FACTBASVAL                       : "0.0", // FLTP (16.16) Factor for condition base value
  STRUCTCOND                       :   "", // CHAR (1) Structure condition
  FACTCONBAS                       : "0.0", // FLTP (16.16) Factor for condition basis (period)
  PRICELEVEL                       :   "", // CHAR (4) Price levels
  CONDFORMUL                       :   "", // NUMC (3) Condition formula for alternative calculation type
  SCALETYP                         :   "", // CHAR (1) Scale Type
  INCREMSCAL                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  INCREASCAL                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  INDEX_NO                         :    0, // INT4 (10) Natural number
  INDEXNO                          :    0, // INT4 (10) Natural number
  CONDITIDX                        :   "", // NUMC (2) Condition item index
  PRINT_ID                         :   "", // CHAR (1) Print ID for condition lines
  FROREFSTEP                       :   "", // NUMC (3) From Ref. Step for Percentage Conditions
  FROMREFSTE                       :   "", // NUMC (3) From Ref. Step for Percentage Conditions
  CONDSUBTOT                       :   "", // CHAR (1) Condition subtotal
  COND_FORM                        :   "", // NUMC (3) Alternative formula for condition base value
  COND_FORM1                       :   "", // NUMC (3) Formula for scale base value
  MAKMANENTR                       :   "", // CHAR (1) Making manual entries
  ROUNDRULE                        :   "", // CHAR (1) Rounding rule
  PMSIGNAMOU                       :   "", // CHAR (1) Plus/minus sign of the condition amount
  CURRCONVER                       :   "", // CHAR (1) Indicator: Currency Translation after Multiplication
  CONDISMAND                       :   "", // CHAR (1) Condition is mandatory
  RATEOFCHA1                       :   "", // CHAR (1) Condition rate of change for amount/percentage
  RATEOFCHA2                       :   "", // CHAR (1) Scope for changing the value
  RATEOFCHA3                       :   "", // CHAR (1) Scope for changing conversion factors
  RATEOFCHA4                       :   "", // CHAR (1) Calculation type can be changed
  RATEOFCHA5                       :   "", // CHAR (1) Delete the scope for changing rate
  RATEOFCHA6                       :   "", // CHAR (1) Condition scope of change for unit of measure
  TERMSOFPAY                       :   "", // CHAR (1) Terms of payment ID in the condition
  MESSAGENO                        :   "", // CHAR (3) Message number
  INDIUPDATE                       :   "", // CHAR (1) Update indicator
  SELECTION                        :   "", // CHAR (1) Selection flag
  SCALEBASIN                       :   "", // CHAR (1) Scale basis indicator
  SCALBASVAL                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  UNITMEASUR                       :   "", // UNIT (3) ALPHA=CUNIT Condition scale unit of measure
  TUNITISO                         :   "", // CHAR (3) Target quantity unit of measure in ISO code
  CURRENCKEY                       :   "", // CUKY (5) Scale currency SU3=FWS
  CORRENISO                        :   "", // CHAR (3) ISO code currency
  CONDCURREN                       :   "", // CUKY (5) Condition currency (for cumulation fields) SU3=FWS
  CORR_ISO                         :   "", // CHAR (3) ISO code currency
  CONBASVAL                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CONDIVALUE                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CONDINCOMP                       :   "", // CHAR (1) Condition for inter-company billing
  CONDCONFIG                       :   "", // CHAR (1) Condition for configuration
  CONDCHAMAN                       :   "", // CHAR (1) Condition changed manually
  PRICESOURC                       :   "", // CHAR (1) Price source
  VARIANCOND                       :   "", // CHAR (26) Variant condition
  LEVEL_BOM                        :  "0", // DEC (2) Level (in multi-level BOM explosions)
  PATH_BOM                         :  "0", // DEC (4) Path (for multi-level BOM explosions)
  STATOFAGRE                       :   "", // CHAR (1) Status of the agreement
  REB_RETROA                       :   "", // CHAR (1) Rebate was set up retroactively
  INDIDELETE                       :   "", // CHAR (1) Deletion Indicator for Condition Item
  AGREE_COND                       :   "", // CHAR (10) ALPHA=ALPHA Agreement (various conditions grouped together)
  CALCULBASE                       :   "", // CHAR (1) Calculation Base
  SH_MAT_TYP                       :   "", // CHAR (4) Packaging Material Type
  ROUNDDIFCO                       :   "", // CHAR (1) Rounding difference comparison
  QTYCONVERS                       :   "", // CHAR (1) Quantity conversion
  CONCBUFFER                       :   "", // CHAR (1) Condition read from buffer
  RELACCASSI                       :   "", // CHAR (1) Relevance for account assignment
  INDIMATMAI                       :   "", // CHAR (1) Indicator: Matrix maintenance
  TAXJURISDI                       :   "", // CHAR (1) Tax jurisdiction code level
  CONEXCHRAT_V                     :  "0", // DEC (9.5) Indirectly quoted cond. exch. rate for conv. in local curr.
};

// BAPISDCNTR  Contract Data for Document Numbers
const ORDER_CONTRACTS_OUT= [];

// prettier-ignore
const ORDER_CONTRACTS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  DOC_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Sales Document SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item SU3=APO
  VAL_PER                          :   "", // NUMC (3) Validity period of contract
  VALPERUNIT                       :   "", // CHAR (1) Unit of validity period of contract
  VALPERCAT                        :   "", // CHAR (2) Validity period category of contract
  INST_DATE                        :   "", // DATS (8) Installation date
  ACCEPTDATE                       :   "", // DATS (8) Agreement acceptance date
  CONTSTADAT                       :   "", // DATS (8) Contract start date
  CONTSIGDAT                       :   "", // DATS (8) Date on which contract is signed
  CANC_PROC                        :   "", // CHAR (4) Assignment cancellation procedure/cancellation rule
  CONTENDACT                       :   "", // CHAR (4) Action at end of contract
  CONTCANDAT                       :   "", // DATS (8) Date on which cancellation request was received
  REQCANCDAT                       :   "", // DATS (8) Requested cancellation date
  CANC_PARTY                       :   "", // CHAR (1) Cancellation party
  CANCREASON                       :   "", // CHAR (2) Reason for Cancellation of Contract
  CONTENDDAT                       :   "", // DATS (8) Contract end date
  CANC_DOC                         :   "", // CHAR (20) Cancellation document number of contract partner
  CANCDOCDAT                       :   "", // DATS (8) Date of cancellation document from contract partner
  CONTSTARUL                       :   "", // CHAR (2) Rule for calculating contract start date
  LEADTIMACT                       :   "", // NUMC (3) Lead time for cancellation prevention activities
  LEADTIMUNI                       :   "", // CHAR (1) Time unit of lead time
  DISM_DATE                        :   "", // DATS (8) Dismantling date
  ACTIONDATE                       :   "", // DATS (8) Date for action
  WI_ID                            :   "", // NUMC (12) Work item ID
  ACTDATRULE                       :   "", // CHAR (2) Date rule for action
  CONTENDRUL                       :   "", // CHAR (2) Rule for contract end date
};

// BAPICCARDM  Credit Cards for Document Numbers
const ORDER_CREDITCARDS_OUT= [];

// prettier-ignore
const ORDER_CREDITCARDS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  CC_TYPE                          :   "", // CHAR (4) Payment cards: Card type
  CC_NUMBER                        :   "", // CHAR (25) Payment cards: Card number
  CC_VALID_F                       :   "", // DATS (8) Payment cards: Valid from
  CC_VALID_T                       :   "", // DATS (8) Payment Cards: Valid To
  CC_NAME                          :   "", // CHAR (40) Payment cards: Name of cardholder
  DATAORIGIN                       :   "", // CHAR (1) Payment cards: Entry mode
  AUTHAMOUNT                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURR_ISO                         :   "", // CHAR (3) ISO code currency
  CC_SETTLED                       :   "", // CHAR (1) Payment cards: Settlement carried out
  AUTH_CC_NO                       :   "", // CHAR (10) Payment cards: Authorization number
  AUTH_REFNO                       :   "", // CHAR (15) Payment cards: Authoriz. reference code of clearing house
  AUTH_DATE                        :   "", // DATS (8) Payment cards: Authorization date
  AUTH_TIME                        :   "", // TIMS (6) Payment cards: Authorization time
  MERCHIDCL                        :   "", // CHAR (15) Payment cards: Merchant ID at the clearing house
  PNTOFRECEI                       :   "", // CHAR (10) Payment cards: Point of receipt for the transaction
  TERMINAL                         :   "", // CHAR (10) Payment cards: Terminal
  SETTLEMRUN                       :   "", // CHAR (10) ALPHA=ALPHA Payment cards: Settlement run
  CARDCATEGO                       :   "", // CHAR (2) Payment cards: Card category
  AUTHORTYPE                       :   "", // CHAR (1) Payment cards: Authorization type
  STATEXTSYS                       :   "", // CHAR (1) Payment cards: Status when external system is called?
  CC_REACT                         :   "", // CHAR (1) Payment cards: Response to authorization checks
  AMOUNTAUTH                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CURR_CRED                        :   "", // CUKY (5) Currency key of credit control area
  CURCREDISO                       :   "", // CHAR (3) ISO code currency
  AUTH_EXPIR                       :   "", // CHAR (1) Payment cards: Authorization has expired
  AMOUNTCHAN                       :   "", // CHAR (1) Payment cards: Amount changed
  PRE_AUTH                         :   "", // CHAR (1) Payment cards: Preauthorization
  HIGHLEAUTH                       :   "", // NUMC (6) Higher-level authorization for billing plan
  RADRCHECK1                       :   "", // CHAR (4) Payment Cards: Result of Address Check (Address Result)
  RADRCHECK2                       :   "", // CHAR (4) Payment Cards: Result of Address Check (Address Approval)
  RADRCHECK3                       :   "", // CHAR (4) Payment Cards: Result of Address Check (ZIP Code Result)
  RCARDCHECK                       :   "", // CHAR (4) Payment cards: Result of card check (response code)
  REASONTEXT                       :   "", // CHAR (40) Payment cards: Result text
  CC_LIMIT                         :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  AUTH_USED                        :   "", // CHAR (1) Payment card: Authorization Used
  CC_LIMITED                       :   "", // CHAR (1) Payment cards: Limit amount
};

// BAPISDFLOW  Document Flows for Document Numbers
const ORDER_FLOWS_OUT= [];

// prettier-ignore
const ORDER_FLOWS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  PRECSDDOC                        :   "", // CHAR (10) ALPHA=ALPHA Preceding sales and distribution document SU3=AUF
  PREDITDOC                        :   "", // NUMC (6) Preceding item of an SD document
  SUBSSDDOC                        :   "", // CHAR (10) ALPHA=ALPHA Subsequent sales and distribution document SU3=AUF
  SUBSITDOC                        :   "", // NUMC (6) Subsequent item of an SD document
  DOCCATEGOR                       :   "", // CHAR (1) Document category of subsequent document
  REF_QTY                          : "0.0", // QUAN (15.3) Referenced quantity in base unit of measure
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  T_UNIT_ISO                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  REFERENVAL                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  STATISCURR                       :   "", // CUKY (5) Statistics currency
  CURRENCISO                       :   "", // CHAR (3) ISO code currency
  DOC_CAT_SD                       :   "", // CHAR (1) Document category of preceding SD document
  QTYPOSCALC                       :   "", // CHAR (1) Quantity is calculated positively, negatively or not at all
  ID_MM_WM                         :   "", // CHAR (1) ID: MM-WM transfer order confirmed
  CREAT_DATE                       :   "", // DATS (8) Date on Which Record Was Created
  REC_TIME                         :   "", // TIMS (6) Entry time
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  MOVE_TYP                         :   "", // CHAR (3) Movement type (inventory management) SU3=BWA
  REQ_TYPE                         :   "", // CHAR (2) Requirement type SU3=BDA
  PLTYPE                           :   "", // CHAR (1) Planning type
  LEVELFLOWR                       :   "", // NUMC (2) Level of the document flow record
  WHSE_NO                          :   "", // CHAR (3) Warehouse Number / Warehouse Complex SU3=LGN
  CH_ON                            :   "", // DATS (8) Date of Last Change
  BILLINGTYP                       :   "", // CHAR (1) Billing category
  GROSS_WT                         : "0.0", // QUAN (15.3) Gross weight
  UNIT_OF_WT                       :   "", // UNIT (3) ALPHA=CUNIT Weight Unit
  UNITWTISO                        :   "", // CHAR (3) Unit of weight in ISO code
  VOLUME                           : "0.0", // QUAN (15.3) Volume
  VOLUMEUNIT                       :   "", // UNIT (3) ALPHA=CUNIT Volume unit
  VOLUNITISO                       :   "", // CHAR (3) Volume unit in ISO code
  BILL_PLAN                        :   "", // CHAR (10) Billing plan number / invoicing plan number
  BILL_PLANI                       :   "", // NUMC (6) Item for billing plan/invoice plan/payment cards
  REFQTYUNIT                       : "0.0", // FLTP (16.16) Referenced quantity in sales unit (float)
  REFQTYFLOA                       : "0.0", // FLTP (16.16) Referenced quantity in base unit of measure (float)
  SALES_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Sales unit
  ISOCODUNIT                       :   "", // CHAR (3) ISO code for unit of measurement
  GURANTEED                        : "0.0", // FLTP (16.16) Guaranteed (factor between 0 and 1)
  SPEC_STOCK                       :   "", // CHAR (1) Special Stock Indicator
  SP_STCK_NO                       :   "", // CHAR (16) ALPHA=ALPHA Special Stock Number
  INDINVMANG                       :   "", // CHAR (1) Indicator Inventory Management active
  NET_WEIGHT                       : "0.0", // QUAN (13.3) Net weight
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  DOCCATEGOR_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
  DOC_CAT_SD_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
};

// BAPISDHD  Order Headers for Document Numbers
const ORDER_HEADERS_OUT= [];

// prettier-ignore
const ORDER_HEADERS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  DOC_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Sales Document SU3=AUN
  REC_DATE                         :   "", // DATS (8) Date on Which Record Was Created
  REC_TIME                         :   "", // TIMS (6) Entry time
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  QT_VALID_F                       :   "", // DATS (8) Quotation/Inquiry is valid from
  QT_VALID_T                       :   "", // DATS (8) Date until which bid/quotation is binding (valid-to date)
  DOC_DATE                         :   "", // DATS (8) Document Date (Date Received/Sent)
  SD_DOC_CAT                       :   "", // CHAR (1) SD document category
  TRAN_GROUP                       :   "", // CHAR (1) Transaction group SU3=VTV
  DOC_TYPE                         :   "", // CHAR (4) ALPHA=AUART Sales Document Type SU3=AAT
  ORD_REASON                       :   "", // CHAR (3) Order reason (reason for the business transaction)
  WAR_DATE                         :   "", // DATS (8) Guarantee date
  SD_COL_NUM                       :   "", // CHAR (10) Collective number (SD)
  DLV_BLOCK                        :   "", // CHAR (2) Delivery block (document header)
  BILL_BLOCK                       :   "", // CHAR (2) Billing block in SD document
  NET_VAL_HD                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CURRENCY                         :   "", // CUKY (5) SD document currency SU3=FWS
  CURREN_ISO                       :   "", // CHAR (3) ISO code currency
  SALES_ORG                        :   "", // CHAR (4) Sales Organization SU3=VKO
  DISTR_CHAN                       :   "", // CHAR (2) Distribution Channel SU3=VTW
  DIVISION                         :   "", // CHAR (2) Division SU3=SPA
  SALES_GRP                        :   "", // CHAR (3) Sales group SU3=VKG
  SALES_OFF                        :   "", // CHAR (4) Sales office SU3=VKB
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  CT_AREA                          :   "", // CHAR (4) Business area from cost center
  CT_VALID_F                       :   "", // DATS (8) Valid-from date (outline agreements, product proposals)
  CT_VALID_T                       :   "", // DATS (8) Valid-to date (outline agreements, product proposals)
  CONDITIONS                       :   "", // CHAR (10) Number of the document condition
  REQ_DATE_H                       :   "", // DATS (8) Requested delivery date
  DATE_TYPE                        :   "", // CHAR (1) Proposed date type
  COMPL_DLV                        :   "", // CHAR (1) Complete delivery defined for each sales order?
  DOC_CLASS                        :   "", // CHAR (9) Original system with release and transaction control
  DOC_INDIC                        :   "", // CHAR (1) SD document indicator
  SD_PRIC_PR                       :   "", // CHAR (6) Sales and Distribution: Pricing Procedure in Pricing
  SHIP_COND                        :   "", // CHAR (2) Shipping conditions
  ORDBILLTYP                       :   "", // CHAR (4) Proposed billing type for an order-related billing document
  ORD_PROBAB                       :   "", // NUMC (3) Sales probability
  SEAR_PRPR                        :   "", // CHAR (40) Search term for product proposal
  PURCH_NO                         :   "", // CHAR (20) Customer purchase order number
  PO_METHOD                        :   "", // CHAR (4) Customer purchase order type
  PURCH_DATE                       :   "", // DATS (8) Customer purchase order date
  PO_SUPPLEM                       :   "", // CHAR (4) Purchase order number supplement
  REF_1                            :   "", // CHAR (12) Your Reference
  ORDERER_NA                       :   "", // CHAR (35) Name of orderer
  TELEPHONE                        :   "", // CHAR (16) Telephone Number
  DUN_COUNT                        :  "0", // DEC (3) Number of contacts from the customer
  DUN_DATE                         :   "", // DATS (8) Last customer contact date
  SOLD_TO                          :   "", // CHAR (10) ALPHA=ALPHA Sold-to party SU3=VAG
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  UPDATE_GRP                       :   "", // CHAR (6) ALPHA=ALPHA Update group for statistics update SU3=MCF
  STAT_CURR                        :   "", // CUKY (5) Statistics currency
  ISOSTATCUR                       :   "", // CHAR (3) ISO code currency
  CH_ON                            :   "", // DATS (8) Date of Last Change
  CUST_GRP1                        :   "", // CHAR (3) Customer group 1
  CUST_GRP2                        :   "", // CHAR (3) Customer group 2
  CUST_GRP3                        :   "", // CHAR (3) Customer group 3
  CUST_GRP4                        :   "", // CHAR (3) Customer group 4
  CUST_GRP5                        :   "", // CHAR (3) Customer group 5
  AGREE_COND                       :   "", // CHAR (10) ALPHA=ALPHA Agreement (various conditions grouped together)
  CO_AREA                          :   "", // CHAR (4) Controlling Area SU3=CAC
  WBS_ELEM                         :   "", // NUMC (8) ALPHA=ABPSP Work Breakdown Structure Element (WBS Element)
  EXCHG_RATE                       :   "", // CHAR (4) Exchange Rate Type SU3=KUT
  C_CTR_AREA                       :   "", // CHAR (4) Credit control area SU3=KKB
  CRED_ACCNT                       :   "", // CHAR (10) ALPHA=ALPHA Customer's account number with credit limit reference
  CRED_GROUP                       :   "", // CHAR (4) Customer Credit Group
  REPR_GROUP                       :   "", // CHAR (3) Credit representative group for credit management SU3=KBG
  RISK_CATEG                       :   "", // CHAR (3) Credit management: Risk category
  CURR_CRED                        :   "", // CUKY (5) Currency key of credit control area
  ISOCURRCRE                       :   "", // CHAR (3) ISO code currency
  REL_DAT_DD                       :   "", // DATS (8) Release date of the document determined by credit management
  NEXT_CHDAT                       :   "", // DATS (8) Date of next credit check of document
  NEXT_DATE                        :   "", // DATS (8) Next date
  REL_CREDIT                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  HI_TYPE_PR                       :   "", // CHAR (1) Hierarchy type for pricing
  DLVSCHEDUS                       :   "", // CHAR (3) Usage Indicator
  PLAN_DLV                         :   "", // CHAR (1) MRP for delivery schedule types
  REF_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document number of the reference document
  OB_JNR_HD                        :   "", // CHAR (22) Object number at header level
  COMP_CODE                        :   "", // CHAR (4) Company code to be billed SU3=BUK
  ALT_TAX_CL                       :   "", // CHAR (1) Alternative tax classification
  TAX_CLASS2                       :   "", // CHAR (1) Tax classification 2 for customer
  TAX_CLASS3                       :   "", // CHAR (1) Tax classification 3 for customer
  TAX_CLASS4                       :   "", // CHAR (1) Tax Classification 4 Customer
  TAX_CLASS5                       :   "", // CHAR (1) Tax classification 5 for customer
  TAX_CLASS6                       :   "", // CHAR (1) Tax classification 6 for customer
  TAX_CLASS7                       :   "", // CHAR (1) Tax classification 7 for customer
  TAX_CLASS8                       :   "", // CHAR (1) Tax classification 8 for customer
  TAX_CLASS9                       :   "", // CHAR (1) Tax classification 9 for customer
  REF_DOC_L                        :   "", // CHAR (16) Reference Document Number
  ASS_NUMBER                       :   "", // CHAR (18) Assignment number
  DOC_CAT_SD                       :   "", // CHAR (1) Document category of preceding SD document
  KALSM_CH                         :   "", // CHAR (6) Search procedure for batch determination
  ACC_PERIOD                       :   "", // NUMC (2) Accrual period for order-related billing docs.to be accrued
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  MASTER_CON                       :   "", // CHAR (10) ALPHA=ALPHA Mster contract number
  REF_PROC                         :   "", // CHAR (4) Referencing requirement: Procedure
  CHECK_PART                       :   "", // CHAR (1) Check partner authorizations
  PICK_UP_DA                       :   "", // DATS (8) Pick up date
  PICK_UP_T1                       :   "", // TIMS (6) Pick up time
  PICK_UP_T2                       :   "", // TIMS (6) Pick up time
  NUM_PAY_CA                       :   "", // CHAR (10) Number of payment card plan type
  LINE_TIME                        :   "", // TIMS (6) Proposed schedule line time (local with ref. to sales org.)
  TAX_DEST_CT                      :   "", // CHAR (3) Tax Destination Country SU3=LND
  ISOTAXDEST                       :   "", // CHAR (2) Country ISO code
  TAX_DEPART                       :   "", // CHAR (3) Tax departure country SU3=LND
  ISOTAXDEPA                       :   "", // CHAR (2) Country ISO code
  EU_TRIANG                        :   "", // CHAR (1) Indicator: Triangular deal within the EU ?
  MAST_CONTR                       :   "", // CHAR (1) Block master contr. until all lower level contracts updated
  CML_QTY_DA                       :   "", // DATS (8) Cml delivery order qty date
  MS_DATE                          :   "", // DATS (8) Material Availability Date
  VERSION                          :   "", // CHAR (12) Sales document version number
  REF_DOC_L_LONG                   :   "", // CHAR (35) Reference Document Number (See long text for dependencies)
  CRM_GUID                         :   "", // CHAR (70) Character field, length 70
  SD_DOC_CAT_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
  DOC_CAT_SD_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
};

// BAPISDIT  Order Item Data for Document Numbers
const ORDER_ITEMS_OUT= [];

// prettier-ignore
const ORDER_ITEMS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  DOC_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Sales Document SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item SU3=APO
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  MAT_ENTRD                        :   "", // CHAR (18) ALPHA=MATN1 Material entered SU3=MAT
  PR_REF_MAT                       :   "", // CHAR (18) ALPHA=MATN1 Pricing Reference Material SU3=MAT
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  MATL_GROUP                       :   "", // CHAR (9) Material Group SU3=MKL
  SHORT_TEXT                       :   "", // CHAR (40) Short text for sales order item
  ITEM_CATEG                       :   "", // CHAR (4) Sales document item category
  ITEM_TYPE                        :   "", // CHAR (1) Item type
  REL_FOR_DE                       :   "", // CHAR (1) Item is relevant for delivery
  REL_FOR_BI                       :   "", // CHAR (1) Relevant for Billing
  HG_LV_ITEM                       :   "", // NUMC (6) Higher-level item in bill of material structures
  ALTERN_ITM                       :   "", // NUMC (6) Item for which this item is an alternative
  REA_FOR_RE                       :   "", // CHAR (2) Reason for rejection of quotations and sales orders
  PROD_HIER                        :   "", // CHAR (18) Product hierarchy SU3=VPR
  OUT_AGR_TA                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  TARGET_QTY                       : "0.0", // QUAN (13.3) Target quantity in sales units
  TARGET_QU                        :   "", // UNIT (3) ALPHA=CUNIT Target quantity UoM
  T_UNIT_ISO                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  TARG_QTY_N                       :  "0", // DEC (5) Factor for converting sales units to base units (target qty)
  TARG_QTY_D                       :  "0", // DEC (5) Factor for converting sales units to base units (target qty)
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  T_BAS_UNIT                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  SCALE_QUAN                       : "0.0", // QUAN (13.3) Scale quantity in base unit of measure
  ROUND_DLV                        : "0.0", // QUAN (13.3) Rounding quantity for delivery
  RECON_DATE                       :   "", // DATS (8) Reconciliation date for agreed cumulative quantity
  MAX_DEVIAT                       : "0.0", // QUAN (13.3) Allowed deviation in quantity (absolute)
  PO_ITM_NO                        :   "", // CHAR (6) ALPHA=ALPHA Item Number of the Underlying Purchase Order
  CUST_MAT22                       :   "", // CHAR (22) Material belonging to the customer
  MAX_DEV_PE                       :  "0", // DEC (3) Allowed deviation in quantity (in percent)
  MAX_DEV_DA                       :  "0", // DEC (3) Days by which the quantity can be shifted
  REPAIR_PRO                       :   "", // CHAR (3) Repair Processing: Classification of Items
  DLVSCHEDUS                       :   "", // CHAR (3) Usage Indicator
  DLV_GROUP                        :   "", // NUMC (3) Delivery group (items are delivered together)
  FIXED_QUAN                       :   "", // CHAR (1) Quantity is fixed
  DELI_UNLIM                       :   "", // CHAR (1) Unlimited overdelivery allowed
  OVER_DLV_T                       :  "0", // DEC (3.1) Overdelivery Tolerance Limit
  UNDER_DLV                        :  "0", // DEC (3.1) Underdelivery Tolerance Limit
  BILL_BLOCK                       :   "", // CHAR (2) Billing block for item
  REPLACE_PT                       :   "", // CHAR (1) Replacement part
  METH_BILL                        :   "", // CHAR (1) Method of billing for CO/PPC orders
  DIVISION                         :   "", // CHAR (2) Division SU3=SPA
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  NET_VALUE                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CURRENCY                         :   "", // CUKY (5) SD document currency SU3=FWS
  CURREN_ISO                       :   "", // CHAR (3) ISO code currency
  MAX_PL_DLV                       :  "0", // DEC (1) Maximum Number of Partial Deliveries Allowed Per Item
  PART_DLV                         :   "", // CHAR (1) Partial delivery at item level
  BTCH_SPLIT                       :   "", // CHAR (1) Batch split allowed
  REQ_QTY                          : "0.0", // QUAN (15.3) Cumulative order quantity in sales units
  CUM_REQ_DE                       : "0.0", // QUAN (15.3) Cumulative required delivery qty (all dlv-relev.sched.lines)
  CUM_CF_QTY                       : "0.0", // QUAN (15.3) Cumulative confirmed quantity in sales unit
  CUM_CON_QU                       : "0.0", // QUAN (15.3) Cumulative confirmed quantity in base unit
  SALES_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Sales unit
  ISOCODUNIT                       :   "", // CHAR (3) ISO code for unit of measurement
  SALES_QTY1                       :  "0", // DEC (5) Numerator (factor) for conversion of sales quantity into SKU
  SALES_QTY2                       :  "0", // DEC (5) Denominator (Divisor) for Conversion of Sales Qty into SKU
  GROSS_WEIG                       : "0.0", // QUAN (15.3) Gross Weight of the Item
  NET_WEIGHT                       : "0.0", // QUAN (15.3) Net Weight of the Item
  UNIT_OF_WT                       :   "", // UNIT (3) ALPHA=CUNIT Weight Unit
  UNIT_WTISO                       :   "", // CHAR (3) Unit of weight in ISO code
  VOLUME                           : "0.0", // QUAN (15.3) Volume of the item
  VOLUMEUNIT                       :   "", // UNIT (3) ALPHA=CUNIT Volume unit
  VOLUNITISO                       :   "", // CHAR (3) Volume unit in ISO code
  CAU_VBELN                        :   "", // CHAR (10) ALPHA=ALPHA Originating document
  CAU_POSNR                        :   "", // NUMC (6) Originating item
  REF_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document number of the reference document
  POSNR_VOR                        :   "", // NUMC (6) Item number of the reference item
  OBJ_COPY                         :   "", // CHAR (1) Complete reference indicator
  UPDAT_FLAG                       :   "", // CHAR (1) Update indicator for sales document document flow
  END_RULE                         :   "", // CHAR (1) Completion rule for quotation / contract
  DLV_PRIO                         :   "", // NUMC (2) Delivery Priority
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  STGE_LOC                         :   "", // CHAR (4) Storage location SU3=LAG
  SHIP_POINT                       :   "", // CHAR (4) Shipping Point/Receiving Point SU3=VST
  ROUTE                            :   "", // CHAR (6) Route
  KEY_ST                           :   "", // CHAR (1) Origin of the bill of material
  DATE_ST                          :   "", // DATS (8) Key date of the bill of material
  NBR_ST                           :   "", // CHAR (8) ALPHA=NUMCV Bill of material
  STPOS_VBAP                       :  "0", // DEC (5) Bill of material item number VBAP not used
  ORDER_PROB                       :   "", // NUMC (3) Order probability of the item
  CREAT_DATE                       :   "", // DATS (8) Date on Which Record Was Created
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  REC_TIME                         :   "", // TIMS (6) Entry time
  TAX_CLASS1                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS2                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS3                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS4                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS5                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS6                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS7                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS8                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS9                       :   "", // CHAR (1) Tax classification material
  FIX_SP_DAY                       :  "0", // DEC (5.2) Fixed shipping processing time in days (= setup time)
  VAR_SP_DAY                       :  "0", // DEC (5.2) Variable shipping processing time in days
  PREC_DOC                         :   "", // CHAR (1) Preceding document has resulted from reference
  NET_PRICE                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  COND_P_UNT                       :  "0", // DEC (5) Condition pricing unit
  COND_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  CONISOUNIT                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  RETOURE                          :   "", // CHAR (1) Returns Item
  CASH_DISC                        :   "", // CHAR (1) Cash discount indicator
  AVAILCHECK                       :   "", // CHAR (2) Checking Group for Availability Check
  SUM_REQUIR                       :   "", // CHAR (1) Summing up of requirements
  MAT_PR_GRP                       :   "", // CHAR (2) Material Pricing Group SU3=VKM
  ACCT_ASSGT                       :   "", // CHAR (2) Account assignment group for this material
  REBATE_GRP                       :   "", // CHAR (2) Volume rebate group
  COMM_GROUP                       :   "", // CHAR (2) Commission group
  EUR_ART_NR                       :   "", // CHAR (13) European Article Number (EAN) - obsolete!!!!! SU3=EAN
  PRICE_OK                         :   "", // CHAR (1) Pricing is OK
  VAL_TYPE                         :   "", // CHAR (10) Valuation type SU3=BWT
  SEP_VALUAT                       :   "", // CHAR (1) Indicator: Separate valuation
  BATCH_MGMT                       :   "", // CHAR (1) Batch management requirement indicator
  IND_BTCH                         :   "", // CHAR (1) Batch management indicator (internal)
  MIN_DELY                         : "0.0", // QUAN (13.3) Minimum delivery quantity in delivery note processing
  UPDATE_GRP                       :   "", // CHAR (6) ALPHA=ALPHA Update group for statistics update SU3=MCF
  COST_DOC_C                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP1                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP2                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP3                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP4                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP5                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SUBTOT_PP6                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  EXCH_RATE                        :  "0", // DEC (9.5) ALPHA=EXCRT Directly quoted exchange rate for statistics
  CH_ON                            :   "", // DATS (8) Date of Last Change
  EAN_UPC                          :   "", // CHAR (18) ALPHA=EAN11 International Article Number (EAN/UPC) SU3=EAN
  FIX_DATE                         :   "", // CHAR (1) Delivery date and quantity fixed
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  PRC_GROUP1                       :   "", // CHAR (3) Material group 1
  PRC_GROUP2                       :   "", // CHAR (3) Material group 2
  PRC_GROUP3                       :   "", // CHAR (3) Material group 3
  PRC_GROUP4                       :   "", // CHAR (3) Material group 4
  PRC_GROUP5                       :   "", // CHAR (3) Material group 5
  COMPON_QTY                       : "0.0", // QUAN (13.3) Component quantity
  SUBSTREASO                       :   "", // CHAR (4) Reason for material substitution SU3=VDG
  SPEC_STOCK                       :   "", // CHAR (1) Special Stock Indicator
  ALLOC_INDI                       :   "", // CHAR (1) Allocation Indicator
  PROFIT_SEG                       :   "", // NUMC (10) Profitability Segment Number (CO-PA)
  WBS_ELEM                         :   "", // NUMC (8) ALPHA=ABPSP Work Breakdown Structure Element (WBS Element)
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  PLNG_MATL                        :   "", // CHAR (18) ALPHA=MATN1 Planning material
  PLNG_PLANT                       :   "", // CHAR (4) Planning plant
  BASE_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Base unit of measure for product group
  ISOBASUNIT                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  CONV_FACT                        : "0.0", // FLTP (16.16) Conversion factor: quantities
  ACCTASSCAT                       :   "", // CHAR (1) Account assignment category SU3=KNT
  CONSUMPT                         :   "", // CHAR (1) Consumption posting
  BOMEXPLNO                        :   "", // CHAR (8) BOM explosion number
  OBJ_NR_IT                        :   "", // CHAR (22) Object number at item level
  RES_ANAL                         :   "", // CHAR (6) Results Analysis Key SU3=ACS
  REQMTSTYP                        :   "", // CHAR (4) Requirements type SU3=BDA
  CREDPRICIT                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  PARTRELID                        :   "", // CHAR (1) ID for partial release of order item, credit block
  ACTCREDID                        :   "", // CHAR (1) ID: Item with active credit function / relevant for credit
  CR_EXCHRAT                       :  "0", // DEC (9.5) ALPHA=EXCRT Directly quoted exch. rate for credit data on req. dely date
  CONFIG                           :   "", // NUMC (18) Configuration
  CHCLASS_IN                       :   "", // NUMC (18) Internal object number of the batch classification
  STAT_PRICE                       :   "", // CHAR (1) Status expected price
  COND_UPDAT                       :   "", // CHAR (1) Condition update
  SERNO_PROF                       :   "", // CHAR (4) Serial Number Profile
  NO_OF_SERI                       :    0, // INT4 (10) Number of serial numbers
  NOGRPOSTED                       :   "", // CHAR (1) Customer has not posted goods receipt
  MAT_GRP_SM                       :   "", // CHAR (4) Material Group: Packaging Materials
  MAN_PR_CH                        :   "", // CHAR (1) Status manual price change
  DOC_CAT_SD                       :   "", // CHAR (1) Document category of preceding SD document
  MATDETERID                       :   "", // CHAR (1) ID for material determination
  ITUSAGEID                        :   "", // CHAR (1) ID for higher-level item usage
  COSTESTNR                        :   "", // NUMC (12) Cost Estimate Number for Cost Est. w/o Qty Structure SU3=KNR
  CSTG_VRNT                        :   "", // CHAR (4) Costing Variant SU3=KRT
  BOMITEMNR                        :   "", // CHAR (4) ALPHA=NUMCV BOM Item Number
  STAT_VAL                         :   "", // CHAR (1) Statistical values
  STAT_DATE                        :   "", // DATS (8) Statistics date
  BUS_TRANST                       :   "", // CHAR (2) Business Transaction Type for Foreign Trade SU3=EXA
  PREF_INDIC                       :   "", // CHAR (1) Preference indicator in export/import
  NRCONDREC                        :   "", // CHAR (10) Number of condition record from batch determination
  INTCLASSNR                       :   "", // NUMC (10) Internal Class Number
  BATCH_EXIT                       :   "", // NUMC (3) Batches: Exit to quantity proposal
  BOM_CATEGO                       :   "", // CHAR (1) BOM category
  BOM_IT_NR                        :   "", // NUMC (8) BOM item node number
  COUNTER                          :   "", // NUMC (8) Internal counter
  INCONSCONF                       :   "", // CHAR (1) Inconsistent configuration
  OVERH_KEY                        :   "", // CHAR (6) Overhead key
  CSTG_SHEET                       :   "", // CHAR (6) Costing Sheet
  CSTG_VRNT1                       :   "", // CHAR (4) Costing Variant SU3=KRT
  PROD_ALLOC                       :   "", // CHAR (18) Product allocation determination procedure
  PRICE_REF                        :   "", // CHAR (18) ALPHA=MATN1 Pricing reference material of main item
  MATPRICGRP                       :   "", // CHAR (2) Material pricing group of main item
  MATFRGTGRP                       :   "", // CHAR (8) Material freight group
  PLANDLVSCH                       :   "", // CHAR (4) Planning delivery schedule instruction
  SEQUENCENO                       :   "", // CHAR (35) KANBAN/sequence number
  CREDPRIC                         : "0.0", // FLTP (16.16) Item credit price
  PAY_GUARAN                       :   "", // CHAR (2) Form of payment guarantee
  GURANTEED                        : "0.0", // FLTP (16.16) Guaranteed (factor between 0 and 1)
  CFOP_CODE                        :   "", // CHAR (5) CFOP code and extension (old 5 char version)
  TAXLAWICMS                       :   "", // CHAR (3) ALPHA=ALPHA Tax law: ICMS
  TAXLAWIPI                        :   "", // CHAR (3) ALPHA=ALPHA Tax law: IPI
  SD_TAXCODE                       :   "", // CHAR (2) SD tax code
  VALCONTRNR                       :   "", // CHAR (10) ALPHA=ALPHA Value contract no.
  VALCONTRIT                       :   "", // NUMC (6) Value contract item
  ASSORT_MOD                       :   "", // CHAR (18) ALPHA=ALPHA Assortment module SU3=WBS
  VALSPECSTO                       :   "", // CHAR (1) Valuation of Special Stock
  MATGRHIE1                        :   "", // CHAR (18) Material group hierarchy 1
  MATGRHIE2                        :   "", // CHAR (18) Material group hierarchy 2
  PROMOTION                        :   "", // CHAR (10) ALPHA=ALPHA Promotion SU3=VPI
  SALES_DEAL                       :   "", // CHAR (10) ALPHA=ALPHA Sales deal SU3=VK1
  FLGLEADUNI                       :   "", // CHAR (1) ID: Leading unit of measure for completing a transaction
  FREE_GOODS                       :   "", // CHAR (1) Free goods delivery control
  VALID_OBJ                        :   "", // CHAR (12) Parameter Variant/Standard Variant
  TAX_AMOUNT                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  MRP_AREA                         :   "", // CHAR (10) MRP Area SU3=BERID
  CUST_MAT35                       :   "", // CHAR (35) Material belonging to the customer
  CR_EXCHRAT_V                     :  "0", // DEC (9.5) ALPHA=EXCRT Indirectly quoted exch.rate for credit data on req.dely date
  EXCHRATEST_V                     :  "0", // DEC (9.5) ALPHA=EXCRT Indirectly quoted exchange rate for statistics
  ITM_TYPE_USAGE                   :   "", // CHAR (4) Item usage
  CFOP_LONG                        :   "", // CHAR (10) CFOP code and extension
  GROSS_VAL                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  LOG_SYSTEM_OWN                   :   "", // CHAR (10) ALPHA=ALPHA Logical system
  TAXLAWISS                        :   "", // CHAR (3) ALPHA=ALPHA ISS Tax Law
  TAXLAWCOFINS                     :   "", // CHAR (3) ALPHA=ALPHA COFINS Tax Law
  TAXLAWPIS                        :   "", // CHAR (3) ALPHA=ALPHA PIS Tax Law
  DOC_CAT_SD_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  MAT_ENTRD_LONG                   :   "", // CHAR (40) Material entered SU3=MAT
  PR_REF_MAT_LONG                  :   "", // CHAR (40) Pricing Reference Material SU3=MAT
  PLNG_MATL_LONG                   :   "", // CHAR (40) Planning material
  PRICE_REF_LONG                   :   "", // CHAR (40) Pricing reference material of main item
};

// BAPISDPART  Order Partners for Document Numbers
const ORDER_PARTNERS_OUT= [];

// prettier-ignore
const ORDER_PARTNERS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  VENDOR_NO                        :   "", // CHAR (10) ALPHA=ALPHA Account Number of Vendor or Creditor SU3=LIF
  PERSON_NO                        :   "", // NUMC (8) Personnel Number SU3=PER
  CONTACT                          :   "", // NUMC (10) Number of contact person SU3=VPA
  ADDRESS                          :   "", // CHAR (10) ALPHA=ALPHA Address
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  COUNTRY                          :   "", // CHAR (3) Country Key SU3=LND
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  ADDRE_INDI                       :   "", // CHAR (1) Address indicator
  ACC_1_TIME                       :   "", // CHAR (1) Indicator: Is the account a one-time account?
  CUSTHITYP                        :   "", // CHAR (1) Customer hierarchy type
  PRIC_REL                         :   "", // CHAR (1) Relevant for price determination ID
  REBATE_REL                       :   "", // CHAR (1) Indicator: Customer Is Rebate-Relevant
  LEVEL_NR                         :   "", // NUMC (2) Level number within hierarchy
  DESC_PARTN                       :   "", // CHAR (30) Customer description of partner (plant, storage location) SU3=KNREF
  TRANSPZONE                       :   "", // CHAR (10) Transportation zone to or from which the goods are delivered
  ASSIGN_HI                        :   "", // NUMC (2) Assignment to Hierarchy
  VAT_REG_NO                       :   "", // CHAR (20) VAT Registration Number
  FURTHERPAR                       :   "", // CHAR (1) Indicator 'further partners in this function' (VBPA2)
  PERS_NO                          :   "", // CHAR (10) ALPHA=ALPHA Person number SU3=CDT
  CALEND_UPD                       :   "", // CHAR (1) Maintain appointments in calendar
};

// BAPISDHEDU  Order Schedule Lines for Document Numbers
const ORDER_SCHEDULES_OUT= [];

// prettier-ignore
const ORDER_SCHEDULES_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  DOC_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Sales Document SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item SU3=APO
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  SCHED_TYPE                       :   "", // CHAR (2) Schedule line category
  RELFORDEL                        :   "", // CHAR (1) Item is relevant for delivery
  REQ_DATE                         :   "", // DATS (8) Schedule line date
  REQ_TIME                         :   "", // TIMS (6) Arrival time
  REQ_QTY                          : "0.0", // QUAN (13.3) Order quantity in sales units
  CONFIR_QTY                       : "0.0", // QUAN (13.3) Confirmed Quantity
  SALES_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Sales unit
  ISOCODUNIT                       :   "", // CHAR (3) ISO code for unit of measurement
  REQ_QTY1                         : "0.0", // QUAN (13.3) Required quantity for mat.management in stockkeeping units
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  ISOBASUNIT                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  REQ_DATE1                        :   "", // DATS (8) Requirement date (deadline for procurement)
  REQ_TYPE                         :   "", // CHAR (2) Requirement type SU3=BDA
  PLTYPE                           :   "", // CHAR (1) Planning type
  BUSIDOCNR                        :   "", // CHAR (10) ALPHA=ALPHA Business document number
  BUSIITNR                         :   "", // NUMC (6) Business item number
  SCHED_LIN1                       :   "", // NUMC (4) Schedule line
  EARL_DATE                        :   "", // DATS (8) Earliest possible reservation date
  MAINT_REQ                        :   "", // NUMC (10) ALPHA=ALPHA Maintenance request
  PREQ_NO                          :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number SU3=BAN
  PO_TYPE                          :   "", // CHAR (4) Order Type (Purchasing) SU3=BSA
  DOC_CAT                          :   "", // CHAR (1) Purchasing document category
  CONF_STAT                        :   "", // CHAR (1) Confirmation status of schedule line (incl.ALE)
  IR_IND                           :   "", // CHAR (1) Invoice receipt indicator
  RETURNDATE                       :   "", // DATS (8) Return date for returnable packaging
  DATE_TYPE                        :   "", // CHAR (1) Date type (day, week, month, interval)
  TP_DATE                          :   "", // DATS (8) Transportation Planning Date
  MS_DATE                          :   "", // DATS (8) Material Availability Date
  LOAD_DATE                        :   "", // DATS (8) Loading Date
  GI_DATE                          :   "", // DATS (8) Goods Issue Date
  CORR_QTY                         : "0.0", // QUAN (13.3) Corrected quantity in sales unit
  REQ_DLV_BL                       :   "", // CHAR (2) Schedule line blocked for delivery
  GRP_DEFIN                        :   "", // NUMC (3) Group definition of structure data
  RELEASTYP                        :   "", // CHAR (1) Rel. Type
  FORCAST_NR                       :   "", // NUMC (10) Forecast Delivery schedule number
  COMMIT_QTY                       : "0.0", // QUAN (13.3) Committed quantity
  SIZE2                            : "0.0", // QUAN (13.3) Size 2
  SIZE3                            : "0.0", // QUAN (13.3) Size 3
  UNIT_MEAS                        :   "", // UNIT (3) ALPHA=CUNIT Unit of measure for sizes 1 to 3
  ISO_ROMEI                        :   "", // CHAR (3) Target quantity unit of measure in ISO code
  FORMULAKEY                       :   "", // CHAR (2) Formula key
  SALESQTYNR                       :  "0", // DEC (5) Numerator (factor) for conversion of sales quantity into SKU
  SALESQTYDE                       :  "0", // DEC (5) Denominator (Divisor) for Conversion of Sales Qty into SKU
  AVAIL_CON                        :   "", // CHAR (1) Availability confirmed automatically
  MOVE_TYPE                        :   "", // CHAR (3) Movement type (inventory management) SU3=BWA
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition SU3=BAP
  LINTYP_EDI                       :   "", // CHAR (1) Schedule line type EDI
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  PLANORDNR                        :   "", // CHAR (10) ALPHA=ALPHA Planned order number SU3=PAF
  BOMEXPL_NO                       :   "", // CHAR (8) BOM explosion number
  CUSTCHSTAT                       :   "", // CHAR (17) Customer Engineering Change Status
  GURANTEED                        : "0.0", // FLTP (16.16) Guaranteed (factor between 0 and 1)
  MS_TIME                          :   "", // TIMS (6) Material Staging Time (Local, Relating to a Plant)
  TP_TIME                          :   "", // TIMS (6) Transp. Planning Time (Local, Relating to a Shipping Point)
  LOAD_TIME                        :   "", // TIMS (6) Loading Time (Local Time Relating to a Shipping Point)
  GI_TIME                          :   "", // TIMS (6) Time of Goods Issue (Local, Relating to a Plant)
  ROUTESCHED                       :   "", // CHAR (10) Route Schedule
};

// BAPISDHDST  Header Status for Document Numbers
const ORDER_STATUSHEADERS_OUT= [];

// prettier-ignore
const ORDER_STATUSHEADERS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  REFDOCHDST                       :   "", // CHAR (1) Reference document header status
  TOTREFSTAT                       :   "", // CHAR (1) Total reference status of all items
  CONFIRSTAT                       :   "", // CHAR (1) Confirmation status
  DELIV_STAT                       :   "", // CHAR (1) Delivery status
  DLV_STAT_H                       :   "", // CHAR (1) Overall delivery status for all items
  TOTGOODSMV                       :   "", // CHAR (1) Total goods movement status
  BILLSTATUS                       :   "", // CHAR (1) Billing status
  BILLINGSTA                       :   "", // CHAR (1) Billing status (order-related billing document)
  ACCOUNTSTA                       :   "", // CHAR (1) Posting Status of Billing Document
  OVERALLREJ                       :   "", // CHAR (1) Overall rejection status of all document items
  PRC_STAT_H                       :   "", // CHAR (1) Overall processing status of document
  OVERALLPIC                       :   "", // CHAR (1) Overall picking / putaway status
  OVERALL_WM                       :   "", // CHAR (1) Overall status of warehouse management activities
  TOTINCOMPL                       :   "", // CHAR (1) Total incompletion status of all items in general
  TOTINCOMIT                       :   "", // CHAR (1) Total incompletion status of all items: Delivery
  TOTINCOMBI                       :   "", // CHAR (1) Total incompletion status of all items: Billing
  GENINCOMHD                       :   "", // CHAR (1) General incompletion status of the header
  HDIMCOMDEL                       :   "", // CHAR (1) Header incompletion status concerning delivery
  HDINCOMBIL                       :   "", // CHAR (1) Header incompletion status with respect to billing
  DOCIMCOMPR                       :   "", // CHAR (1) Document is incomplete with respect to pricing
  SD_DOC_CAT                       :   "", // CHAR (1) SD document category
  SDDOCOBJ                         :   "", // CHAR (1) SD document object
  CH_ON                            :   "", // DATS (8) Date of Last Change
  BILTOTSTAT                       :   "", // CHAR (1) Billing totals status for intercompany billing
  INVOICSTAT                       :   "", // CHAR (1) Invoice list status of billing document
  CUSTRESHD1                       :   "", // CHAR (1) Customer reserves 1: Header status
  CUSTRESHD2                       :   "", // CHAR (1) Customer reserves 2: Header status
  CUSTRESHD3                       :   "", // CHAR (1) Customer reserves 3: Header status
  CUSTRESHD4                       :   "", // CHAR (1) Custmer reserves 4: Header status
  CUSTRESHD5                       :   "", // CHAR (1) Customer reserves 5: Header status
  CUSTRESIT1                       :   "", // CHAR (1) Customer reserves 1: Sum of all items
  CUSTRESIT2                       :   "", // CHAR (1) Customer reserves 2: Sum of all items
  CUSTRESIT3                       :   "", // CHAR (1) Customer reserves 3: Sum of all items
  CUSTRESIT4                       :   "", // CHAR (1) Customer reserves 4: Sum of all items
  CUSTRESIT5                       :   "", // CHAR (1) Customer reserves 5: Sum of all items
  TOTSTATIT                        :   "", // CHAR (1) Overall packing status of all items
  STATSTACLC                       :   "", // CHAR (1) Status of static credit limit check
  STATDYNCLC                       :   "", // CHAR (1) Status of dynamic credit limit check in the credit horizon
  STATCREDCH                       :   "", // CHAR (1) Status of credit check against maximum document value
  STATCRECH1                       :   "", // CHAR (1) Status of credit check against terms of payment
  STATCRECH2                       :   "", // CHAR (1) Status of credit check against customer review date
  STATCRECH3                       :   "", // CHAR (1) Status of credit check against open items due
  STATCRECH4                       :   "", // CHAR (1) Status of credit check against oldest open items
  STATCRECH5                       :   "", // CHAR (1) Status of credit check against highest dunning level
  STATCRECH6                       :   "", // CHAR (1) Status of credit check against financial document
  STATCRECH7                       :   "", // CHAR (1) Status of credit check against export credit insurance
  STATCRECH8                       :   "", // CHAR (1) Status of credit check against payment card authorization
  STATCRECH9                       :   "", // CHAR (1) Status of credit check of reserves 4
  STATCRECHA                       :   "", // CHAR (1) Status of credit check for customer reserve 1
  STATCRECHB                       :   "", // CHAR (1) Status of credit check for customer reserve 2
  STATCRECHC                       :   "", // CHAR (1) Status of credit check for customer reserve 3
  TOTSTATCCH                       :   "", // CHAR (1) Overall status of credit checks
  TRNSPLANST                       :   "", // CHAR (1) Transportation planning status
  QUITTSTAT                        :   "", // CHAR (1) Status of pick confirmation
  CONFIRMSTA                       :   "", // CHAR (1) Confirmation status for ALE
  SAPRELEASE                       :   "", // CHAR (4) SAP Release
  TOTINCOMI                        :   "", // CHAR (1) Totals incomplete status for all items: packaging
  TOTINCOMI1                       :   "", // CHAR (1) Totals incomplete status for all items: Picking
  TOTINCOMI2                       :   "", // CHAR (1) Total incomplete status of all items: post goods movement
  HDINCOMPL                        :   "", // CHAR (1) Header incomplete status for packaging
  HDINCOMPL1                       :   "", // CHAR (1) Header incomplete status for picking/putaway
  HDINCOMPL2                       :   "", // CHAR (1) Post header incomplete status for goods movement
  HDINCOMPL3                       :   "", // CHAR (1) UNUSED
  CREDCHECK                        :   "", // CHAR (1) Credit check data is obsolete
  DELAYSTAT                        :   "", // CHAR (1) Delay status
  SHIPPUNIT                        :   "", // CHAR (1) Handling Unit Placed in Stock
  DISTRISTAT                       :   "", // CHAR (1) Distribution Status (Decentralized Warehouse Processing)
  REVDETSTAT                       :   "", // CHAR (1) Revenue determination status
  INDIDOCACH                       :   "", // CHAR (1) Indicator: Document preselected for archiving
  TOBILBLOST                       :   "", // CHAR (1) Overall billing block status
  TODELBLOST                       :   "", // CHAR (1) Overall delivery block status
  TOBLOCKSTA                       :   "", // CHAR (1) Overall blocked status
  LEBHEADSTA                       :   "", // CHAR (1) POD status on header level
  FMSTATUS                         :   "", // CHAR (1) Status Funds Management
  SD_DOC_CAT_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
};

// BAPISDITST  Item Status for Document Numbers
const ORDER_STATUSITEMS_OUT= [];

// prettier-ignore
const ORDER_STATUSITEMS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  REFERNSTAT                       :   "", // CHAR (1) Reference status
  REFTOTSTAT                       :   "", // CHAR (1) Overall status of reference
  CONFSTATIT                       :   "", // CHAR (1) Confirmation Status of Document Item
  DELIV_STAT                       :   "", // CHAR (1) Delivery status
  DLV_STAT_I                       :   "", // CHAR (1) Overall delivery status of the item
  GOODSMVSTA                       :   "", // CHAR (1) Goods movement status
  BILLSTATHD                       :   "", // CHAR (1) Billing status of delivery-related billing documents
  BILLSTATIT                       :   "", // CHAR (1) Billing Status for Order-Related Billing Documents
  REJSTATIT                        :   "", // CHAR (1) Rejection status for SD item
  OVRPROCSTA                       :   "", // CHAR (1) Overall processing status of the SD document item
  PICKINGSTA                       :   "", // CHAR (1) Picking status/Putaway status
  WHMANAGSTA                       :   "", // CHAR (1) Status of warehouse management activities
  GENINCOMST                       :   "", // CHAR (1) General Incompletion Status of Item
  INCOMSTDEL                       :   "", // CHAR (1) Incompletion status of the item with regard to delivery
  INCOMSTBIL                       :   "", // CHAR (1) Item Incompletion Status with Respect to Billing
  INCOMSTPRI                       :   "", // CHAR (1) Pricing for item is incomplete
  BILLSTAINT                       :   "", // CHAR (1) Intercompany Billing Status
  CUSTRESIT1                       :   "", // CHAR (1) Customer reserves 1: Item status
  CUSTRESIT2                       :   "", // CHAR (1) Customer reserves 2: Item status
  CUSTRESIT3                       :   "", // CHAR (1) Item reserves 3: Item status
  CUSTRESIT4                       :   "", // CHAR (1) Item reserves 4: Item status
  CUSTRESIT5                       :   "", // CHAR (1) Customer reserves 5: Item status
  PACKSTSTIT                       :   "", // CHAR (1) Packing status of item
  STAPICKCON                       :   "", // CHAR (1) Confirmation status of picking/putaway
  CONFIRMSTA                       :   "", // CHAR (1) Confirmation status for ALE
  STATCRECH6                       :   "", // CHAR (1) Status of credit check against financial document
  STATCRECH7                       :   "", // CHAR (1) Status of credit check against export credit insurance
  INCOMSTAIT                       :   "", // CHAR (1) Incomplete status of item for picking/putaway
  INCOMSTAPA                       :   "", // CHAR (1) Incomplete status of item for packaging
  INCOSTAGOO                       :   "", // CHAR (1) Incomplete status of item regarding goods issue
  DELAYSTAT                        :   "", // CHAR (1) Delay status
  REVDETSTAT                       :   "", // CHAR (1) Revenue determination status
  DECTWHOUSE                       :   "", // CHAR (1) Decentralized whse processing
  ITBILBLOST                       :   "", // CHAR (1) Billing block status for items
  ITDELBLOST                       :   "", // CHAR (1) Delivery block status for item
  LEBITEMSTA                       :   "", // CHAR (1) POD status on item level
};

// BAPISDTEHD  Text Header Information for Document Numbers
const ORDER_TEXTHEADERS_OUT= [];

// prettier-ignore
const ORDER_TEXTHEADERS_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  APPLOBJECT                       :   "", // CHAR (10) Texts: application object
  TEXT_NAME                        :   "", // CHAR (70) Name
  TEXT_ID                          :   "", // CHAR (4) Text ID
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  TITLE                            :   "", // CHAR (50) Title in dialog box
  FORM                             :   "", // CHAR (16) Form name
  STYLE                            :   "", // CHAR (8) Style Name
  VERSION                          :   "", // NUMC (5) Version
  CREATEUSER                       :   "", // CHAR (12) Created by
  CREATEREL                        :   "", // CHAR (4) Release
  CREATEDATE                       :   "", // DATS (8) Date created
  CREATETIME                       :   "", // TIMS (6) Time Created
  CHANGEUSER                       :   "", // CHAR (12) Last changed by
  CHANGEREL                        :   "", // CHAR (4) Last Changed in Release
  CHANGEDATE                       :   "", // DATS (8) Changed On
  CHANGETIME                       :   "", // TIMS (6) Last Changed At
  LINESIZE                         :   "", // NUMC (3) Line Width
  LINEAMOUNT                       :   "", // NUMC (5) Number of Text Lines in Line Table
  HYPHENAT                         :   "", // CHAR (1) Hyphenation Active
  ORGSPRAS                         :   "", // LANG (1) ALPHA=ISOLA Original language
  ORGSPRAISO                       :   "", // CHAR (2) 2-Character SAP Language Code
  TRANSTAT                         :   "", // NUMC (1) Translation status
  MATCHCOD1                        :   "", // CHAR (16) Short Title 1
  MATCHCOD2                        :   "", // CHAR (16) Short Title 2
  REFOBJECT                        :   "", // CHAR (10) Object of Referenced Text
  REFNAME                          :   "", // CHAR (70) Name of Referenced Text
  REFID                            :   "", // CHAR (4) ID of Referenced Text
  TEXTTYPE                         :   "", // CHAR (6) SAPscript: Format of Text
  COMPRESSTD                       :   "", // CHAR (1) SAPscript: Text is compressed
  OBJ_CLASS                        :   "", // CHAR (4) SAPscript: Object Class
};

// BAPITEXTLI  Text Lines for Document Numbers
const ORDER_TEXTLINES_OUT= [];

// prettier-ignore
const ORDER_TEXTLINES_OUT= {
  OPERATION                        :   "", // CHAR (3) Function
  APPLOBJECT                       :   "", // CHAR (10) Texts: application object
  TEXT_NAME                        :   "", // CHAR (70) Name
  TEXT_ID                          :   "", // CHAR (4) Text ID
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  LINE_CNT                         :   "", // NUMC (8) Internal counter
  LINE                             :   "", // CHAR (132) Text Line
  FORMAT_COL                       :   "", // CHAR (2) Tag column
};
