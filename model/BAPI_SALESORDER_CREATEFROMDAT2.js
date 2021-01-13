//
// BAPI_SALESORDER_CREATEFROMDAT2 
//
// rfmcall.py 1.0 at: 2021-01-13 12:08:22
//

// Variables : 7
// Structures: 4
// Tables    : 21
// Exceptions: 0

BAPI_SALESORDER_CREATEFROMDAT2 = {

  // INPUT PARAMETERS

  ORDER_HEADER_IN                  :   {}, // BAPISDHD1 Order Header
  //BEHAVE_WHEN_ERROR              :   "", // CHAR (1) Error Handling
  //BINARY_RELATIONSHIPTYPE        :   "", // CHAR (4) Binary Relationship Type (Private)
  //CONVERT                        : SPACE, // CHAR (1) Conversion of Partner Function + Order Type
  //INT_NUMBER_ASSIGNMENT          :   "", // CHAR (1) Internal Item Number Assignment
  //LOGIC_SWITCH                   :   {}, // BAPISDLS Internal Control Parameter
  //ORDER_HEADER_INX               :   {}, // BAPISDHD1X Sales Order Check List
  //SALESDOCUMENTIN                :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number
  //SENDER                         :   {}, // BAPI_SENDER Logical System - Sender
  //TESTRUN                        :   "", // CHAR (1) Test Run

  // TABLE PARAMETERS

  ORDER_PARTNERS                   :   [], // BAPIPARNR Document Partner
  //EXTENSIONEX                    :   [], // BAPIPAREX Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut
  //EXTENSIONIN                    :   [], // BAPIPAREX Customer Enhancement for VBAK, VBAP, VBEP
  //ORDER_CCARD                    :   [], // BAPICCARD Credit Card Data
  //ORDER_CFGS_BLOB                :   [], // BAPICUBLB Configuration: BLOB Internal Data (SCE)
  //ORDER_CFGS_INST                :   [], // BAPICUINS Configuration: Instances
  //ORDER_CFGS_PART_OF             :   [], // BAPICUPRT Configuration: Part-of Specifications
  //ORDER_CFGS_REF                 :   [], // BAPICUCFG Configuration: Reference Data
  //ORDER_CFGS_REFINST             :   [], // BAPICUREF Configuration: Reference Item / Instance
  //ORDER_CFGS_VALUE               :   [], // BAPICUVAL Configuration: Characteristic Values
  //ORDER_CFGS_VK                  :   [], // BAPICUVK Configuration: Variant Condition Key
  //ORDER_CONDITIONS_IN            :   [], // BAPICOND Conditions
  //ORDER_CONDITIONS_INX           :   [], // BAPICONDX Conditions Checkbox
  //ORDER_ITEMS_IN                 :   [], // BAPISDITM Item Data
  //ORDER_ITEMS_INX                :   [], // BAPISDITMX Item Data Checkbox
  //ORDER_KEYS                     :   [], // BAPISDKEY Output Table of Reference Keys
  //ORDER_SCHEDULES_IN             :   [], // BAPISCHDL Schedule Line Data
  //ORDER_SCHEDULES_INX            :   [], // BAPISCHDLX Checkbox Schedule Line Data
  //ORDER_TEXT                     :   [], // BAPISDTEXT Texts
  //PARTNERADDRESSES               :   [], // BAPIADDR1 BAPI Reference Structure for Addresses (Org./Company)
  //RETURN                         :   [], // BAPIRET2 Return Messages

  // OUTPUT PARAMETERS

  SALESDOCUMENT                    :   "", // CHAR (10) ALPHA=ALPHA Number of Generated Document
};

//
// INPUT PARAMETERS
//

// ORDER_HEADER_IN BAPISDHD1 Order Header

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_HEADER_IN = {
  ACCNT_ASGN                       :   "", // CHAR (2) Account assignment group for this customer
  ADD_VAL_DY                       :   "", // NUMC (2) Additional value days
  ALTTAX_CLS                       :   "", // CHAR (1) Alternative tax classification
  ASS_NUMBER                       :   "", // CHAR (18) Assignment number
  BILL_BLOCK                       :   "", // CHAR (2) Billing block in SD document
  BILL_DATE                        :   "", // DATS (8) Billing date for billing index and printout
  BILL_SCHED                       :   "", // CHAR (2) Invoice dates (calendar identification)
  BUSINESS_EVENT_TCODE             :   "", // CHAR (10) Business Event Transaction Code
  BUSINESS_PARTNER_NO              :   "", // CHAR (6) ALPHA=ALPHA Business Partner Number
  CALC_MOTIVE                      :   "", // CHAR (2) Accounting Indicator
  CAMPAIGN                         : bytes(), // RAW (16) Generic project planning: GUID from external R/3 system
  CANCELLATION_ALLOWED             :   "", // CHAR (1) Cancellation Allowed
  CHKPRTAUTH                       :   "", // CHAR (1) Check partner authorizations
  CMLQTY_DAT                       :   "", // DATS (8) Cml delivery order qty date
  COLLECT_NO                       :   "", // CHAR (10) Collective Number
  COMPL_DLV                        :   "", // CHAR (1) Complete delivery defined for each sales order?
  COMP_CDE_B                       :   "", // CHAR (4) Company code to be billed
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CSTCNDGRP1                       :   "", // CHAR (2) Customer condition group 1
  CSTCNDGRP2                       :   "", // CHAR (2) Customer condition group 2
  CSTCNDGRP3                       :   "", // CHAR (2) Customer condition group 3
  CSTCNDGRP4                       :   "", // CHAR (2) Customer condition group 4
  CSTCNDGRP5                       :   "", // CHAR (2) Customer condition group 5
  CT_VALID_F                       :   "", // DATS (8) Valid-from date (outline agreements, product proposals)
  CT_VALID_T                       :   "", // DATS (8) Valid-to date (outline agreements, product proposals)
  CURRENCY                         :   "", // CUKY (5) SD document currency
  CURR_ISO                         :   "", // CHAR (3) ISO code currency
  CUST_GROUP                       :   "", // CHAR (2) Customer group
  CUST_GRP1                        :   "", // CHAR (3) Customer group 1
  CUST_GRP2                        :   "", // CHAR (3) Customer group 2
  CUST_GRP3                        :   "", // CHAR (3) Customer group 3
  CUST_GRP4                        :   "", // CHAR (3) Customer group 4
  CUST_GRP5                        :   "", // CHAR (3) Customer group 5
  DATE_TYPE                        :   "", // CHAR (1) Proposed date type
  DEPARTM_NO                       :   "", // CHAR (4) Department number
  DISTR_CHAN                       :   "", // CHAR (2) Distribution Channel
  DIVISION                         :   "", // CHAR (2) Division
  DLVSCHDUSE                       :   "", // CHAR (3) Usage Indicator
  DLV_BLOCK                        :   "", // CHAR (2) Delivery block (document header)
  DLV_TIME                         :   "", // CHAR (3) Agreed delivery time
  DOC_CLASS                        :   "", // CHAR (9) Original system with release and transaction control
  DOC_DATE                         :   "", // DATS (8) Document Date (Date Received/Sent)
  DOC_NUM_FI                       :   "", // CHAR (10) ALPHA=ALPHA Financial doc. processing: Internal financial doc. number
  DOC_TYPE                         :   "", // CHAR (4) ALPHA=AUART Sales Document Type
  DUNN_BLOCK                       :   "", // CHAR (1) Dunning Block
  DUNN_KEY                         :   "", // CHAR (1) Dunning Key
  DUN_COUNT                        :    0, // DEC (3) Number of contacts from the customer
  DUN_DATE                         :   "", // DATS (8) Last customer contact date
  EUTRI_DEAL                       :   "", // CHAR (1) Indicator: Triangular deal within the EU ?
  EXCHG_RATE                       :    0, // DEC (9.5) Directly quoted exchange rate for pricing and statistics
  EXCHG_RATE_V                     :    0, // DEC (9.5) Indirectly quoted exchange rate for pricing and statistics
  EXCH_RATE_FI_V                   :    0, // DEC (9.5) ALPHA=EXCRT Indirectly quoted exchange rate for FI postings
  EXRATE_FI                        :    0, // DEC (9.5) ALPHA=EXCRT Directly quoted exchange rate for FI postings
  FIX_VAL_DY                       :   "", // DATS (8) Fixed value date
  FKK_CONACCT                      :   "", // CHAR (12) Character field of length 12
  H_CURR                           :   "", // CUKY (5) Currency Key
  H_CURR_ISO                       :   "", // CHAR (3) ISO currency code
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  INCOTERMS2L                      :   "", // CHAR (70) Incoterms Location 1
  INCOTERMS3L                      :   "", // CHAR (70) Incoterms Location 2
  INCOTERMSV                       :   "", // CHAR (4) Incoterms Version
  INVO_SCHED                       :   "", // CHAR (2) Invoice list schedule (calendar identification)
  LINE_TIME                        :   "", // TIMS (6) Proposed schedule line time (local with ref. to sales org.)
  MAST_CONTR                       :   "", // CHAR (10) ALPHA=ALPHA Mster contract number
  MN_INVOICE                       :   "", // CHAR (1) Manual invoice maintenance
  MODIFICATION_ALLOWED             :   "", // CHAR (1) Modification Allowed
  NAME                             :   "", // CHAR (35) Name of orderer
  NOTIF_NO                         :   "", // CHAR (12) ALPHA=ALPHA Notification No
  ORDCOMB_IN                       :   "", // CHAR (1) Order Combination Indicator
  ORD_REASON                       :   "", // CHAR (3) Order reason (reason for the business transaction)
  PAYMENT_METHODS                  :   "", // CHAR (10) List of Respected Payment Methods
  PLDLVSTYP                        :   "", // CHAR (1) MRP for delivery schedule types
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  PMTGAR_PRO                       :   "", // CHAR (6) Payment guarantee procedure
  PO_DAT_S                         :   "", // DATS (8) Ship-to party's PO date
  PO_METHOD                        :   "", // CHAR (4) Customer purchase order type
  PO_METH_S                        :   "", // CHAR (4) Ship-to party purchase order type
  PO_SUPPLEM                       :   "", // CHAR (4) Purchase order number supplement
  PP_SEARCH                        :   "", // CHAR (40) Search term for product proposal
  PRICE_DATE                       :   "", // DATS (8) Date for pricing and exchange rate
  PRICE_GRP                        :   "", // CHAR (2) Price group (customer)
  PRICE_LIST                       :   "", // CHAR (2) Price list type
  PSM_PSTNG_DATE                   :   "", // DATS (8) Posting Date in the Document
  PURCH_DATE                       :   "", // DATS (8) Customer purchase order date
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
  PURCH_NO_S                       :   "", // CHAR (35) Ship-to Party's Purchase Order Number
  PYMT_METH                        :   "", // CHAR (1) Payment Method
  QT_VALID_F                       :   "", // DATS (8) Quotation/Inquiry is valid from
  QT_VALID_T                       :   "", // DATS (8) Date until which bid/quotation is binding (valid-to date)
  REC_POINT                        :   "", // CHAR (25) Receiving point
  REFDOCTYPE                       :   "", // CHAR (10) Document type of reference object
  REFDOC_CAT                       :   "", // CHAR (1) Document category of preceding SD document
  REFDOC_CAT_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
  REFOBJKEY                        :   "", // CHAR (70) Object key
  REFOBJTYPE                       :   "", // CHAR (10) Object Type
  REF_1                            :   "", // CHAR (12) Your Reference
  REF_1_S                          :   "", // CHAR (12) Ship-to party character
  REF_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document number of the reference document
  REF_DOC_L                        :   "", // CHAR (16) Reference Document Number
  REF_DOC_L_LONG                   :   "", // CHAR (35) Reference Document Number (See long text for dependencies)
  REF_PROC                         :   "", // CHAR (4) Referencing requirement: Procedure
  REPORTING_FREQ                   :   "", // CHAR (3) Reporting Frequency
  REQ_DATE_H                       :   "", // DATS (8) Requested delivery date
  SALES_DIST                       :   "", // CHAR (6) Sales district
  SALES_GRP                        :   "", // CHAR (3) Sales group
  SALES_OFF                        :   "", // CHAR (4) Sales office
  SALES_ORG                        :   "", // CHAR (4) Sales Organization
  SD_DOC_CAT                       :   "", // CHAR (1) SD document category
  SD_DOC_CAT_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
  SEPA_MANDATE_ID                  :   "", // CHAR (35) Unique Reference to Mandate for each Payee
  SERV_DATE                        :   "", // DATS (8) Date on which services rendered
  SHIP_COND                        :   "", // CHAR (2) Shipping conditions
  SHIP_TYPE                        :   "", // CHAR (2) Shipping type
  S_PROC_IND                       :   "", // CHAR (4) Special processing indicator
  TAXDEP_CTY                       :   "", // CHAR (3) Tax departure country
  TAXDST_CTY                       :   "", // CHAR (3) Tax Destination Country
  TAX_CLASS2                       :   "", // CHAR (1) Tax classification 2 for customer
  TAX_CLASS3                       :   "", // CHAR (1) Tax classification 3 for customer
  TAX_CLASS4                       :   "", // CHAR (1) Tax Classification 4 Customer
  TAX_CLASS5                       :   "", // CHAR (1) Tax classification 5 for customer
  TAX_CLASS6                       :   "", // CHAR (1) Tax classification 6 for customer
  TAX_CLASS7                       :   "", // CHAR (1) Tax classification 7 for customer
  TAX_CLASS8                       :   "", // CHAR (1) Tax classification 8 for customer
  TAX_CLASS9                       :   "", // CHAR (1) Tax classification 9 for customer
  TELEPHONE                        :   "", // CHAR (16) Telephone Number
  TREASURY_ACC_SYMBOL              :   "", // CHAR (30) Treasury Account Symbol
  VERSION                          :   "", // CHAR (12) Sales document version number
  WAR_DATE                         :   "", // DATS (8) Guarantee date
  WBS_ELEM                         :   "", // CHAR (24) ALPHA=ABPSN Work Breakdown Structure Element (WBS Element)
};
/* eslint-enable key-spacing */

// LOGIC_SWITCH BAPISDLS Internal Control Parameter

/* eslint-disable key-spacing */
// prettier-ignore
LOGIC_SWITCH = {
  ADDR_CHECK                       :   "", // CHAR (1) Single-Character Flag
  ATP_WRKMOD                       :   "", // CHAR (1) ATP session: Pick up result / new determination APO-ATP
  COND_HANDL                       :   "", // CHAR (1) Selection: Condition lines handling (SD document change)
  NOSTRUCTURE                      :   "", // CHAR (1) Checkbox
  PRICING                          :   "", // CHAR (1) Pricing type
  SCHEDULING                       :   "", // CHAR (1) Single-Character Flag
};
/* eslint-enable key-spacing */

// ORDER_HEADER_INX BAPISDHD1X Sales Order Check List

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_HEADER_INX = {
  ACCNT_ASGN                       :   "", // CHAR (1) Updated information in related user data field
  ADD_VAL_DY                       :   "", // CHAR (1) Updated information in related user data field
  ALTTAX_CLS                       :   "", // CHAR (1) Updated information in related user data field
  ASS_NUMBER                       :   "", // CHAR (1) Updated information in related user data field
  BILL_BLOCK                       :   "", // CHAR (1) Updated information in related user data field
  BILL_DATE                        :   "", // CHAR (1) Updated information in related user data field
  BILL_SCHED                       :   "", // CHAR (1) Updated information in related user data field
  BUSINESS_EVENT_TCODE             :   "", // CHAR (1) Updated information in related user data field
  BUSINESS_PARTNER_NO              :   "", // CHAR (1) Updated information in related user data field
  CALC_MOTIVE                      :   "", // CHAR (1) Updated information in related user data field
  CAMPAIGN                         :   "", // CHAR (1) Updated information in related user data field
  CANCELLATION_ALLOWED             :   "", // CHAR (1) Updated information in related user data field
  CHKPRTAUTH                       :   "", // CHAR (1) Updated information in related user data field
  CMLQTY_DAT                       :   "", // CHAR (1) Updated information in related user data field
  COLLECT_NO                       :   "", // CHAR (1) Updated information in related user data field
  COMPL_DLV                        :   "", // CHAR (1) Updated information in related user data field
  COMP_CDE_B                       :   "", // CHAR (1) Updated information in related user data field
  CSTCNDGRP1                       :   "", // CHAR (1) Updated information in related user data field
  CSTCNDGRP2                       :   "", // CHAR (1) Updated information in related user data field
  CSTCNDGRP3                       :   "", // CHAR (1) Updated information in related user data field
  CSTCNDGRP4                       :   "", // CHAR (1) Updated information in related user data field
  CSTCNDGRP5                       :   "", // CHAR (1) Updated information in related user data field
  CT_VALID_F                       :   "", // CHAR (1) Updated information in related user data field
  CT_VALID_T                       :   "", // CHAR (1) Updated information in related user data field
  CURRENCY                         :   "", // CHAR (1) Updated information in related user data field
  CUST_GROUP                       :   "", // CHAR (1) Updated information in related user data field
  CUST_GRP1                        :   "", // CHAR (1) Updated information in related user data field
  CUST_GRP2                        :   "", // CHAR (1) Updated information in related user data field
  CUST_GRP3                        :   "", // CHAR (1) Updated information in related user data field
  CUST_GRP4                        :   "", // CHAR (1) Updated information in related user data field
  CUST_GRP5                        :   "", // CHAR (1) Updated information in related user data field
  DATE_TYPE                        :   "", // CHAR (1) Updated information in related user data field
  DEPARTM_NO                       :   "", // CHAR (1) Updated information in related user data field
  DISTR_CHAN                       :   "", // CHAR (1) Updated information in related user data field
  DIVISION                         :   "", // CHAR (1) Updated information in related user data field
  DLVSCHDUSE                       :   "", // CHAR (1) Updated information in related user data field
  DLV_BLOCK                        :   "", // CHAR (1) Updated information in related user data field
  DLV_TIME                         :   "", // CHAR (1) Updated information in related user data field
  DOC_CLASS                        :   "", // CHAR (1) Updated information in related user data field
  DOC_DATE                         :   "", // CHAR (1) Updated information in related user data field
  DOC_NUM_FI                       :   "", // CHAR (1) Updated information in related user data field
  DOC_TYPE                         :   "", // CHAR (1) Updated information in related user data field
  DUNN_BLOCK                       :   "", // CHAR (1) Updated information in related user data field
  DUNN_KEY                         :   "", // CHAR (1) Updated information in related user data field
  DUN_COUNT                        :   "", // CHAR (1) Updated information in related user data field
  DUN_DATE                         :   "", // CHAR (1) Updated information in related user data field
  EUTRI_DEAL                       :   "", // CHAR (1) Updated information in related user data field
  EXCHG_RATE                       :   "", // CHAR (1) Updated information in related user data field
  EXCHG_RATE_V                     :   "", // CHAR (1) Updated information in related user data field
  EXCH_RATE_FI_V                   :   "", // CHAR (1) Updated information in related user data field
  EXRATE_FI                        :   "", // CHAR (1) Updated information in related user data field
  FIX_VAL_DY                       :   "", // CHAR (1) Updated information in related user data field
  FKK_CONACCT                      :   "", // CHAR (1) Updated information in related user data field
  H_CURR                           :   "", // CHAR (1) Updated information in related user data field
  INCOTERMS1                       :   "", // CHAR (1) Updated information in related user data field
  INCOTERMS2                       :   "", // CHAR (1) Updated information in related user data field
  INCOTERMS2L                      :   "", // CHAR (1) Updated information in related user data field
  INCOTERMS3L                      :   "", // CHAR (1) Updated information in related user data field
  INCOTERMSV                       :   "", // CHAR (1) Updated information in related user data field
  INVO_SCHED                       :   "", // CHAR (1) Updated information in related user data field
  LINE_TIME                        :   "", // CHAR (1) Updated information in related user data field
  MAST_CONTR                       :   "", // CHAR (1) Updated information in related user data field
  MN_INVOICE                       :   "", // CHAR (1) Updated information in related user data field
  MODIFICATION_ALLOWED             :   "", // CHAR (1) Updated information in related user data field
  NAME                             :   "", // CHAR (1) Updated information in related user data field
  NOTIF_NO                         :   "", // CHAR (1) Updated information in related user data field
  ORDCOMB_IN                       :   "", // CHAR (1) Updated information in related user data field
  ORD_REASON                       :   "", // CHAR (1) Updated information in related user data field
  PAYMENT_METHODS                  :   "", // CHAR (1) Updated information in related user data field
  PLDLVSTYP                        :   "", // CHAR (1) Updated information in related user data field
  PMNTTRMS                         :   "", // CHAR (1) Updated information in related user data field
  PMTGAR_PRO                       :   "", // CHAR (1) Updated information in related user data field
  POITM_NO_S                       :   "", // CHAR (1) Updated information in related user data field
  PO_DAT_S                         :   "", // CHAR (1) Updated information in related user data field
  PO_METHOD                        :   "", // CHAR (1) Updated information in related user data field
  PO_METH_S                        :   "", // CHAR (1) Updated information in related user data field
  PO_SUPPLEM                       :   "", // CHAR (1) Updated information in related user data field
  PP_SEARCH                        :   "", // CHAR (1) Updated information in related user data field
  PRICE_DATE                       :   "", // CHAR (1) Updated information in related user data field
  PRICE_GRP                        :   "", // CHAR (1) Updated information in related user data field
  PRICE_LIST                       :   "", // CHAR (1) Updated information in related user data field
  PROMOTION                        :   "", // CHAR (1) Updated information in related user data field
  PSM_PSTNG_DATE                   :   "", // CHAR (1) Updated information in related user data field
  PURCH_DATE                       :   "", // CHAR (1) Updated information in related user data field
  PURCH_NO_C                       :   "", // CHAR (1) Updated information in related user data field
  PURCH_NO_S                       :   "", // CHAR (1) Updated information in related user data field
  PYMT_METH                        :   "", // CHAR (1) Updated information in related user data field
  QT_VALID_F                       :   "", // CHAR (1) Updated information in related user data field
  QT_VALID_T                       :   "", // CHAR (1) Updated information in related user data field
  REC_POINT                        :   "", // CHAR (1) Updated information in related user data field
  REFDOC_CAT                       :   "", // CHAR (1) Updated information in related user data field
  REFDOC_CAT_LONG                  :   "", // CHAR (1) Updated information in related user data field
  REF_1                            :   "", // CHAR (1) Updated information in related user data field
  REF_1_S                          :   "", // CHAR (1) Updated information in related user data field
  REF_DOC                          :   "", // CHAR (1) Updated information in related user data field
  REF_DOC_L                        :   "", // CHAR (1) Updated information in related user data field
  REF_PROC                         :   "", // CHAR (1) Updated information in related user data field
  REPORTING_FREQ                   :   "", // CHAR (1) Updated information in related user data field
  REQ_DATE_H                       :   "", // CHAR (1) Updated information in related user data field
  SALES_DIST                       :   "", // CHAR (1) Updated information in related user data field
  SALES_GRP                        :   "", // CHAR (1) Updated information in related user data field
  SALES_OFF                        :   "", // CHAR (1) Updated information in related user data field
  SALES_ORG                        :   "", // CHAR (1) Updated information in related user data field
  SD_DOC_CAT                       :   "", // CHAR (1) Updated information in related user data field
  SD_DOC_CAT_LONG                  :   "", // CHAR (1) Updated information in related user data field
  SEPA_MANDATE_ID                  :   "", // CHAR (1) Updated information in related user data field
  SERV_DATE                        :   "", // CHAR (1) Updated information in related user data field
  SHIP_COND                        :   "", // CHAR (1) Updated information in related user data field
  SHIP_TYPE                        :   "", // CHAR (1) Updated information in related user data field
  S_PROC_IND                       :   "", // CHAR (1) Updated information in related user data field
  TAXDEP_CTY                       :   "", // CHAR (1) Updated information in related user data field
  TAXDST_CTY                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS2                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS3                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS4                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS5                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS6                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS7                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS8                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS9                       :   "", // CHAR (1) Updated information in related user data field
  TELEPHONE                        :   "", // CHAR (1) Updated information in related user data field
  TREASURY_ACC_SYMBOL              :   "", // CHAR (1) Updated information in related user data field
  UPDATEFLAG                       :   "", // CHAR (1) Update indicator
  VERSION                          :   "", // CHAR (1) Updated information in related user data field
  WAR_DATE                         :   "", // CHAR (1) Updated information in related user data field
  WBS_ELEM                         :   "", // CHAR (1) Updated information in related user data field
};
/* eslint-enable key-spacing */

// SENDER BAPI_SENDER Logical System - Sender

/* eslint-disable key-spacing */
// prettier-ignore
SENDER = {
  LOG_SYSTEM                       :   "", // CHAR (10) ALPHA=ALPHA Logical system
};
/* eslint-enable key-spacing */

//
// TABLE PARAMETERS
//

// ORDER_PARTNERS BAPIPARNR Document Partner

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_PARTNERS = {
  ADDRESS                          :   "", // CHAR (10) ALPHA=ALPHA Address
  ADDR_LINK                        :   "", // CHAR (10) ALPHA=ALPHA Link to address number
  ADDR_ORIG                        :   "", // CHAR (1) Origin of an address
  ADDR_TYPE                        :   "", // CHAR (1) Address type (1=Organization, 2=Person, 3=Contact person)
  CITY                             :   "", // CHAR (35) City
  COUNTRY                          :   "", // CHAR (3) Country Key
  COUNTR_ISO                       :   "", // CHAR (2) Country key in ISO code
  DISTRICT                         :   "", // CHAR (35) District
  FAX_NUMBER                       :   "", // CHAR (31) Fax Number
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  NAME                             :   "", // CHAR (35) Name 1
  NAME_2                           :   "", // CHAR (35) Name 2
  NAME_3                           :   "", // CHAR (35) Name 3
  NAME_4                           :   "", // CHAR (35) Name 4
  PARTN_NUMB                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Partner Function
  POBX_CTY                         :   "", // CHAR (35) PO Box city
  POBX_PCD                         :   "", // CHAR (10) P.O. Box Postal Code
  POSTL_CODE                       :   "", // CHAR (10) Postal Code
  PO_BOX                           :   "", // CHAR (10) PO Box
  PRIV_ADDR                        :   "", // CHAR (10) ALPHA=ALPHA Home address
  REFLOGSYS                        :   "", // CHAR (10) ALPHA=ALPHA Logical system
  REFOBJKEY                        :   "", // CHAR (70) Object key
  REFOBJTYPE                       :   "", // CHAR (10) Object Type
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  STREET                           :   "", // CHAR (35) Street and House Number
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction
  TELEBOX                          :   "", // CHAR (15) Telebox number
  TELEPHONE                        :   "", // CHAR (16) First telephone number
  TELEPHONE2                       :   "", // CHAR (16) Second telephone number
  TELETEX_NO                       :   "", // CHAR (30) Teletex number
  TELEX_NO                         :   "", // CHAR (30) Telex number
  TITLE                            :   "", // CHAR (15) Form of address
  TRANSPZONE                       :   "", // CHAR (10) Transportation zone to or from which the goods are delivered
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
};
/* eslint-enable key-spacing */

// EXTENSIONEX BAPIPAREX Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut

/* eslint-disable key-spacing */
// prettier-ignore
EXTENSIONEX = {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};
/* eslint-enable key-spacing */

// EXTENSIONIN BAPIPAREX Customer Enhancement for VBAK, VBAP, VBEP

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

// ORDER_CCARD BAPICCARD Credit Card Data

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_CCARD = {
  AMOUNTCHAN                       :   "", // CHAR (1) Payment cards: Amount changed
  AUTHORTYPE                       :   "", // CHAR (1) Payment cards: Authorization type
  CC_LIMITED                       :   "", // CHAR (1) Payment cards: Limit amount
  CC_SEQ_NO                        :   "", // CHAR (10) Payment cards: Payment card suffix
  DATAORIGIN                       :   "", // CHAR (1) Payment cards: Entry mode
  PRE_AUTH                         :   "", // CHAR (1) Payment cards: Preauthorization
  RADRCHECK1                       :   "", // CHAR (4) Payment Cards: Result of Address Check (Address Result)
  RADRCHECK2                       :   "", // CHAR (4) Payment Cards: Result of Address Check (Address Approval)
  RADRCHECK3                       :   "", // CHAR (4) Payment Cards: Result of Address Check (ZIP Code Result)
  RCARDCHECK                       :   "", // CHAR (4) Payment cards: Result of card check (response code)
};
/* eslint-enable key-spacing */

// ORDER_CFGS_BLOB BAPICUBLB Configuration: BLOB Internal Data (SCE)

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_CFGS_BLOB = {
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  CONTEXT                          :   "", // CHAR (250) CU: Configuration BLOB (SCE)
};
/* eslint-enable key-spacing */

// ORDER_CFGS_INST BAPICUINS Configuration: Instances

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_CFGS_INST = {
  AUTHOR                           :   "", // CHAR (1) Statement was Inferred
  CLASS_TYPE                       :   "", // CHAR (3) Class Type
  COMPLETE                         :   "", // CHAR (1) General Indicator
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  CONSISTENT                       :   "", // CHAR (1) General Indicator
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  OBJECT_GUID                      :   "", // CHAR (32) GUID for TYPE_OF Statement of Instance
  OBJ_KEY                          :   "", // CHAR (50) CUIB: Key of Referencing Object
  OBJ_TXT                          :   "", // CHAR (70) Language-Dependent Object Description
  OBJ_TYPE                         :   "", // CHAR (10) CUIB: External Type of (Referencing) Object
  PERSIST_ID                       :   "", // CHAR (32) Instance Number (Persistent)
  PERSIST_ID_TYPE                  :   "", // CHAR (1) Type of Instance Number (Persistent)
  QUANTITY                         :   "", // CHAR (15) Instance Quantity
  QUANTITY_UNIT                    :   "", // UNIT (3) ALPHA=CUNIT Unit of Measure
};
/* eslint-enable key-spacing */

// ORDER_CFGS_PART_OF BAPICUPRT Configuration: Part-of Specifications

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_CFGS_PART_OF = {
  AUTHOR                           :   "", // CHAR (1) Statement was Inferred
  CLASS_TYPE                       :   "", // CHAR (3) Class Type
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  OBJ_KEY                          :   "", // CHAR (50) CUIB: Key of Referencing Object
  OBJ_TYPE                         :   "", // CHAR (10) CUIB: External Type of (Referencing) Object
  PARENT_ID                        :   "", // CHAR (8) Instance Number in Configuration
  PART_OF_GUID                     :   "", // CHAR (32) GUID for PART_OF Statement for Instance
  PART_OF_NO                       :   "", // CHAR (4) Part_of Item Number
  SALES_RELEVANT                   :   "", // CHAR (1) Part is Sales-Relevant
};
/* eslint-enable key-spacing */

// ORDER_CFGS_REF BAPICUCFG Configuration: Reference Data

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_CFGS_REF = {
  CBASE_ID                         :   "", // CHAR (32) Instance Number (Persistent)
  CBASE_ID_TYPE                    :   "", // CHAR (1) Type of Instance Number (Persistent)
  CFGINFO                          :   "", // CHAR (250) CU: Configuration BLOB (SCE)
  COMPLETE                         :   "", // CHAR (1) General Indicator
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  CONSISTENT                       :   "", // CHAR (1) General Indicator
  KBLANGUAGE                       :   "", // LANG (1) ALPHA=ISOLA Configuration Language
  KBNAME                           :   "", // CHAR (30) Knowledge-Base Object
  KBPROFILE                        :   "", // CHAR (30) Knowledge-Base Profile
  KBVERSION                        :   "", // CHAR (30) Runtime Version of SCE Knowledge Base
  POSEX                            :   "", // CHAR (6) External Item Number
  ROOT_ID                          :   "", // CHAR (8) Instance Number in Configuration
  SCE                              :   "", // CHAR (1) CUX: Configuration Type
};
/* eslint-enable key-spacing */

// ORDER_CFGS_REFINST BAPICUREF Configuration: Reference Item / Instance

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_CFGS_REFINST = {
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  POSEX                            :   "", // CHAR (6) External Item Number
};
/* eslint-enable key-spacing */

// ORDER_CFGS_VALUE BAPICUVAL Configuration: Characteristic Values

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_CFGS_VALUE = {
  AUTHOR                           :   "", // CHAR (1) Statement was Inferred
  CHARC                            :   "", // CHAR (40) Characteristic Name
  CHARC_TXT                        :   "", // CHAR (70) Language-Dependent Characteristic Description
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  VALCODE                          :   "", // CHAR (1) Value Type: Interval Limits - Single Values
  VALUE                            :   "", // CHAR (40) Characteristic Value
  VALUE_TO                         :   "", // CHAR (40) Characteristic Value
  VALUE_TXT                        :   "", // CHAR (70) Language-Dependent Description of Characteristic Value
};
/* eslint-enable key-spacing */

// ORDER_CFGS_VK BAPICUVK Configuration: Variant Condition Key

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_CFGS_VK = {
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  FACTOR                           :   "", // CHAR (15) Weighting Factor for Variant Conditions
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  VKEY                             :   "", // CHAR (26) Variant Condition Name
};
/* eslint-enable key-spacing */

// ORDER_CONDITIONS_IN BAPICOND Conditions

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_CONDITIONS_IN = {
  ACCESS_SEQ                       :   "", // NUMC (2) Access sequence - Access number
  ACCOUNTKEY                       :   "", // CHAR (3) Account key
  ACCOUNT_KE                       :   "", // CHAR (3) Account key - accruals / provisions
  ACCRUALS                         :   "", // CHAR (1) Condition is Relevant for Accrual  (e.g. Freight)
  APPLICATIO                       :   "", // CHAR (2) Application
  CALCTYPCON                       :   "", // CHAR (1) Calculation type for condition
  CD_UNT_ISO                       :   "", // CHAR (3) Condition unit of measure in UoM
  CONBASEVAL                       :    0, // DEC (28.9) Condition base value
  CONDCHAMAN                       :   "", // CHAR (1) Condition changed manually
  CONDCLASS                        :   "", // CHAR (1) Condition class
  CONDCNTRL                        :   "", // CHAR (1) Condition control
  CONDCOINHD                       :   "", // NUMC (2) Condition counter for (header conditions)
  CONDCONFIG                       :   "", // CHAR (1) Condition for configuration
  CONDCOUNT                        :   "", // NUMC (2) Sequential number of the condition
  CONDINCOMP                       :   "", // CHAR (1) Condition for inter-company billing
  CONDISACTI                       :   "", // CHAR (1) Condition is inactive
  CONDORIGIN                       :   "", // CHAR (1) Origin of the condition
  CONDTYPE                         :   "", // CHAR (1) Condition category (examples: tax, freight, price, cost)
  CONDVALUE                        :    0, // DEC (28.9) Condition value
  COND_COUNT                       :   "", // NUMC (2) Condition counter
  COND_NO                          :   "", // CHAR (10) Condition record number
  COND_P_UNT                       :    0, // DEC (5) Condition pricing unit
  COND_ST_NO                       :   "", // NUMC (3) Step number
  COND_TYPE                        :   "", // CHAR (4) Condition Type
  COND_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  COND_UPDAT                       :   "", // CHAR (1) Condition update
  COND_VALUE                       :    0, // DEC (28.9) Condition rate
  CONEXCHRAT                       :    0, // DEC (9.5) ALPHA=EXCRT Condition exchange rate for conversion to local currency
  CONINVOLST                       :   "", // CHAR (1) Condition for invoice list
  CONPRICDAT                       :   "", // DATS (8) Condition pricing date
  CURRENCKEY                       :   "", // CUKY (5) Scale currency
  CURRENCY                         :   "", // CUKY (5) Currency Key
  CURRENCY_2                       :   "", // CUKY (5) SD document currency
  CURRENISO                        :   "", // CHAR (3) ISO code currency
  CURR_ISO                         :   "", // CHAR (3) ISO code currency
  CURR_ISO_2                       :   "", // CHAR (3) ISO code currency
  DENOMINATO                       :    0, // DEC (5) Denominator for converting condition units to base units
  FACTBASVAL                       :  0.0, // FLTP (16.16) Factor for condition base value
  FACTCONBAS                       :  0.0, // FLTP (16.16) Factor for condition basis (period)
  GROUPCOND                        :   "", // CHAR (1) Group condition
  ISO_UNIT                         :   "", // CHAR (3) ISO code for unit of measurement
  ITM_NUMBER                       :   "", // NUMC (6) Condition item number
  NUMCONVERT                       :    0, // DEC (5) Numerator for converting condition units to base units
  REFLOGSYS                        :   "", // CHAR (10) ALPHA=ALPHA Logical system
  REFOBJKEY                        :   "", // CHAR (70) Object key
  REFOBJTYPE                       :   "", // CHAR (10) Object Type
  ROUNDOFFDI                       :    0, // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  SCALBASVAL                       :    0, // DEC (28.9) Scale base value of the condition
  SCALEBASIN                       :   "", // CHAR (1) Scale basis indicator
  SCALETYPE                        :   "", // CHAR (1) Scale Type
  STAT_CON                         :   "", // CHAR (1) Condition is used for statistics
  STRUCTCOND                       :   "", // CHAR (1) Structure condition
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  UNITMEASUR                       :   "", // UNIT (3) ALPHA=CUNIT Condition scale unit of measure
  VARCOND                          :   "", // CHAR (26) Variant condition
  WT_WITHCD                        :   "", // CHAR (2) Withholding tax code
};
/* eslint-enable key-spacing */

// ORDER_CONDITIONS_INX BAPICONDX Conditions Checkbox

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_CONDITIONS_INX = {
  COND_COUNT                       :   "", // NUMC (2) Sequential number of the condition
  COND_P_UNT                       :   "", // CHAR (1) Updated information in related user data field
  COND_ST_NO                       :   "", // NUMC (3) Step number
  COND_TYPE                        :   "", // CHAR (4) Condition Type
  COND_UNIT                        :   "", // CHAR (1) Updated information in related user data field
  COND_VALUE                       :   "", // CHAR (1) Updated information in related user data field
  CURRENCY                         :   "", // CHAR (1) Updated information in related user data field
  ITM_NUMBER                       :   "", // NUMC (6) Condition item number
  UPDATEFLAG                       :   "", // CHAR (1) Update indicator
  VARCOND                          :   "", // CHAR (26) Variant condition
};
/* eslint-enable key-spacing */

// ORDER_ITEMS_IN BAPISDITM Item Data

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_ITEMS_IN = {
  ACCNT_ASGN                       :   "", // CHAR (2) Account assignment group for this customer
  ADD_VAL_DY                       :   "", // NUMC (2) Additional value days
  ALTERN_BOM                       :   "", // CHAR (2) ALPHA=ALPHA Alternative BOM
  ALT_TO_ITM                       :   "", // NUMC (6) Item for which this item is an alternative
  ASSORT_MOD                       :   "", // CHAR (18) ALPHA=ALPHA Assortment module
  BATCH                            :   "", // CHAR (10) Batch Number
  BEGDEM_PER                       :   "", // CHAR (1) Proposed start date for accrual period
  BILL_BLOCK                       :   "", // CHAR (2) Block
  BILL_DATE                        :   "", // DATS (8) Billing date for billing index and printout
  BILL_REL                         :   "", // CHAR (1) Billing Relevance (CRM)
  BILL_SCHED                       :   "", // CHAR (2) Invoice dates (calendar identification)
  BIL_FORM                         :   "", // CHAR (2) Billing form
  BOMEXPL_NO                       :   "", // CHAR (8) BOM explosion number
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period
  BUSINESS_EVENT_TCODE             :   "", // CHAR (10) Business Event Transaction Code
  BUSINESS_PARTNER_NO              :   "", // CHAR (6) ALPHA=ALPHA Business Partner Number
  BUS_TRANST                       :   "", // CHAR (2) Business Transaction Type for Foreign Trade
  CALC_MOTIVE                      :   "", // CHAR (2) Accounting Indicator
  CAMPAIGN                         : bytes(), // RAW (16) Generic project planning: GUID from external R/3 system
  CANCELLATION_ALLOWED             :   "", // CHAR (1) Cancellation Allowed
  CFOP_CODE                        :   "", // CHAR (5) CFOP code and extension (old 5 char version)
  CFOP_LONG                        :   "", // CHAR (10) CFOP code and extension
  CMMT_ITEM                        :   "", // CHAR (24) ALPHA=FMCIL Commitment item
  COMPREAS                         :   "", // CHAR (4) Abbreviation for Complaints Reason
  COMP_QUANT                       :  0.0, // QUAN (13.3) Component quantity
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CSTCNDGRP1                       :   "", // CHAR (2) Customer condition group 1
  CSTCNDGRP2                       :   "", // CHAR (2) Customer condition group 2
  CSTCNDGRP3                       :   "", // CHAR (2) Customer condition group 3
  CSTCNDGRP4                       :   "", // CHAR (2) Customer condition group 4
  CSTCNDGRP5                       :   "", // CHAR (2) Customer condition group 5
  CSTG_SHEET                       :   "", // CHAR (6) Costing Sheet
  CURRENCY                         :   "", // CUKY (5) SD document currency
  CURR_ISO                         :   "", // CHAR (3) ISO code currency
  CUST_GROUP                       :   "", // CHAR (2) Customer group
  CUST_MAT22                       :   "", // CHAR (22) Customer's material number (obsolete)
  CUST_MAT35                       :   "", // CHAR (35) Material belonging to the customer
  DEPARTM_NO                       :   "", // CHAR (4) Department number
  DEPREC_PER                       :    0, // DEC (5.2) Depreciation percentage for financial document processing
  DIVISION                         :   "", // CHAR (2) Division
  DLI_PROFIL                       :   "", // CHAR (8) Dynamic Item Processor Profile
  DLVSCHDUSE                       :   "", // CHAR (3) Usage Indicator
  DLV_GROUP                        :   "", // NUMC (3) Delivery group (items are delivered together)
  DLV_PRIO                         :   "", // NUMC (2) Delivery Priority
  DLV_TIME                         :   "", // CHAR (3) Agreed delivery time
  DOC_NUM_FI                       :   "", // CHAR (10) ALPHA=ALPHA Financial doc. processing: Internal financial doc. number
  DUNN_BLOCK                       :   "", // CHAR (1) Dunning Block
  DUNN_KEY                         :   "", // CHAR (1) Dunning Key
  EAN_UPC                          :   "", // CHAR (18) ALPHA=EAN11 International Article Number (EAN/UPC)
  EXCHG_RATE                       :    0, // DEC (9.5) Directly quoted exchange rate for pricing and statistics
  EXCHG_RATE_V                     :    0, // DEC (9.5) Indirectly quoted exchange rate for pricing and statistics
  EXCH_RATE_FI_V                   :    0, // DEC (9.5) ALPHA=EXCRT Indirectly quoted exchange rate for FI postings
  EX_RATE_FI                       :    0, // DEC (9.5) ALPHA=EXCRT Directly quoted exchange rate for FI postings
  FIXDAT_QTY                       :   "", // CHAR (1) Delivery date and quantity fixed
  FIXED_QUAN                       :   "", // CHAR (1) Quantity is fixed
  FIX_VAL_DY                       :   "", // DATS (8) Fixed value date
  FKK_CONACCT                      :   "", // CHAR (12) Character Field of Length 12
  FUNC_AREA                        :   "", // CHAR (4) Functional Area
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area
  FUND                             :   "", // CHAR (10) Fund
  FUNDS_CTR                        :   "", // CHAR (16) Funds Center
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant
  GROSS_WGHT                       :  0.0, // QUAN (15.3) Gross Weight of the Item
  HG_LV_ITEM                       :   "", // NUMC (6) Higher-level item in bill of material structures
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  INCOTERMS2L                      :   "", // CHAR (70) Incoterms Location 1
  INCOTERMS3L                      :   "", // CHAR (70) Incoterms Location 2
  INCOTERMSV                       :   "", // CHAR (4) Incoterms Version
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  INVO_SCHED                       :   "", // CHAR (2) Invoice list schedule (calendar identification)
  ITEMGUID_ATP                     :   "", // CHAR (22) ATP: Encryption of DELNR and DELPS
  ITEM_CATEG                       :   "", // CHAR (4) Sales document item category
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item
  ITM_TYPE_USAGE                   :   "", // CHAR (4) Item usage
  LOC_ACTCODE                      :   "", // CHAR (2) Activity Code for Gross Income Tax
  LOC_DISTTYPE                     :   "", // CHAR (2) Distribution Type for Employment Tax
  LOC_TAXCAT                       :   "", // CHAR (2) Tax type
  LOC_TXRELCLAS                    :   "", // CHAR (10) Tax relevant classification
  LOC_ZEROVAT                      :   "", // CHAR (1) Reason for zero VAT
  LOG_SYSTEM_OWN                   :   "", // CHAR (10) ALPHA=ALPHA Logical system
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  MATFRGTGRP                       :   "", // CHAR (8) Material freight group
  MATL_GROUP                       :   "", // CHAR (9) Material Group
  MAT_ENTRD                        :   "", // CHAR (18) ALPHA=MATN1 Material entered
  MAT_ENTRD_EXTERNAL               :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MAT_ENTRD Field
  MAT_ENTRD_GUID                   :   "", // CHAR (32) External GUID for MAT_ENTRD Field
  MAT_ENTRD_LONG                   :   "", // CHAR (40) Material entered
  MAT_ENTRD_VERSION                :   "", // CHAR (10) ALPHA=MATNW Version Number for MAT_ENTRD Field
  MAT_EXT                          :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MAT_GUID                         :   "", // CHAR (32) External GUID for MATERIAL Field
  MAT_PR_GRP                       :   "", // CHAR (2) Material Pricing Group
  MAT_VERS                         :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MAXDEVAMNT                       :  0.0, // QUAN (13.3) Allowed deviation in quantity (absolute)
  MAXDEVPER                        :    0, // DEC (3) Allowed deviation in quantity (in percent)
  MAXDEV_DAY                       :    0, // DEC (3) Days by which the quantity can be shifted
  MAX_PL_DLV                       :    0, // DEC (1) Maximum Number of Partial Deliveries Allowed Per Item
  MN_INVOICE                       :   "", // CHAR (1) Manual invoice maintenance
  MODIFICATION_ALLOWED             :   "", // CHAR (1) Modification Allowed
  NET_WEIGHT                       :  0.0, // QUAN (15.3) Net Weight of the Item
  NO_GR_POST                       :   "", // CHAR (1) Customer has not posted goods receipt
  ORDCOMP_IN                       :   "", // CHAR (1) Order Combination Indicator
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number
  ORDER_PROB                       :   "", // NUMC (3) Order probability of the item
  OVERDLVTOL                       :    0, // DEC (3.1) Overdelivery Tolerance Limit
  OVERHD_KEY                       :   "", // CHAR (6) Overhead key
  PART_DLV                         :   "", // CHAR (1) Partial delivery at item level
  PAYMENT_METHODS                  :   "", // CHAR (10) List of Respected Payment Methods
  PLANT                            :   "", // CHAR (4) Plant
  PLDLVSHDIN                       :   "", // CHAR (4) Planning delivery schedule instruction
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  PMTGAR_PRO                       :   "", // CHAR (6) Payment guarantee procedure
  POITM_NO_S                       :   "", // CHAR (6) ALPHA=ALPHA Item Number of the Underlying Purchase Order
  PO_DAT_S                         :   "", // DATS (8) Ship-to party's PO date
  PO_ITM_NO                        :   "", // CHAR (6) ALPHA=ALPHA Item Number of the Underlying Purchase Order
  PO_METHOD                        :   "", // CHAR (4) Customer purchase order type
  PO_METH_S                        :   "", // CHAR (4) Ship-to party purchase order type
  PRC_GROUP1                       :   "", // CHAR (3) Material group 1
  PRC_GROUP2                       :   "", // CHAR (3) Material group 2
  PRC_GROUP3                       :   "", // CHAR (3) Material group 3
  PRC_GROUP4                       :   "", // CHAR (3) Material group 4
  PRC_GROUP5                       :   "", // CHAR (3) Material group 5
  PRICE_DATE                       :   "", // DATS (8) Date for pricing and exchange rate
  PRICE_GRP                        :   "", // CHAR (2) Price group (customer)
  PRICE_LIST                       :   "", // CHAR (2) Price list type
  PRODCAT                          :   "", // CHAR (10) Product catalog number
  PROD_HIERA                       :   "", // CHAR (18) Product hierarchy
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center
  PROMOTION                        :   "", // CHAR (10) ALPHA=ALPHA Promotion
  PR_REF_MAT                       :   "", // CHAR (18) ALPHA=MATN1 Pricing Reference Material
  PR_REF_MAT_LONG                  :   "", // CHAR (40) Pricing Reference Material
  PURCH_DATE                       :   "", // DATS (8) Customer purchase order date
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
  PURCH_NO_S                       :   "", // CHAR (35) Ship-to Party's Purchase Order Number
  PYMT_METH                        :   "", // CHAR (1) Payment Method
  P_MAT_EXT                        :   "", // CHAR (40) ALPHA=MATNL Long Material Number for PR_REF_MAT Field
  P_MAT_GUID                       :   "", // CHAR (32) External GUID for PR_REF_MAT Field
  P_MAT_VERS                       :   "", // CHAR (10) ALPHA=MATNW Version Number for PR_REF_MAT Field
  REASON_REJ                       :   "", // CHAR (2) Reason for rejection of quotations and sales orders
  REC_POINT                        :   "", // CHAR (25) Receiving point
  REFLOGSYS                        :   "", // CHAR (10) ALPHA=ALPHA Logical system
  REFOBJKEY                        :   "", // CHAR (70) Object key
  REFOBJTYPE                       :   "", // CHAR (10) Object Type
  REF_1                            :   "", // CHAR (12) Your Reference
  REF_1_S                          :   "", // CHAR (12) Ship-to party character
  REF_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document number of the reference document
  REF_DOC_CA                       :   "", // CHAR (1) Document category of preceding SD document
  REF_DOC_CA_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
  REF_DOC_IT                       :   "", // NUMC (6) Item number of the reference item
  REPORTING_FREQ                   :   "", // CHAR (3) Reporting Frequency
  REQMTS_TYP                       :   "", // CHAR (4) Requirements type
  REQ_SEGMENT                      :   "", // CHAR (16) Requirement Segment
  RESANALKEY                       :   "", // CHAR (6) Results Analysis Key
  REVACC_REFID                     :   "", // CHAR (30) Revenue Accounting: Reference ID
  REVACC_REFTYPE                   :   "", // CHAR (3) Revenue Accounting: Reference Type
  REV_TYPE                         :   "", // CHAR (1) Revenue recognition category
  RNDDLV_QTY                       :  0.0, // QUAN (13.3) Rounding quantity for delivery
  ROUTE                            :   "", // CHAR (6) Route
  SALES_DIST                       :   "", // CHAR (6) Sales district
  SALES_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Sales unit
  SALQTYDEN                        :    0, // DEC (5) Denominator (Divisor) for Conversion of Sales Qty into SKU
  SALQTYNUM                        :    0, // DEC (5) Numerator (factor) for conversion of sales quantity into SKU
  SD_TAXCODE                       :   "", // CHAR (2) SD tax code
  SELECTION                        :   "", // CHAR (32) Selection ID (Persistent)
  SEPA_MANDATE_ID                  :   "", // CHAR (35) Unique Reference to Mandate for each Payee
  SEQ_NO                           :   "", // CHAR (35) KANBAN/sequence number
  SERV_DATE                        :   "", // DATS (8) Date on which services rendered
  SHIP_POINT                       :   "", // CHAR (4) Shipping Point/Receiving Point
  SHIP_TYPE                        :   "", // CHAR (2) Shipping type
  SHORT_TEXT                       :   "", // CHAR (40) Short text for sales order item
  STORE_LOC                        :   "", // CHAR (4) Storage location
  S_PROC_IND                       :   "", // CHAR (4) Special processing indicator
  S_UNIT_ISO                       :   "", // CHAR (3) ISO code for unit of measurement
  TARGET_QTY                       :  0.0, // QUAN (13.3) Target quantity in sales units
  TARGET_QU                        :   "", // UNIT (3) ALPHA=CUNIT Target quantity UoM
  TARGET_VAL                       :    0, // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  TAXLAWCOFINS                     :   "", // CHAR (3) ALPHA=ALPHA COFINS Tax Law
  TAXLAWICMS                       :   "", // CHAR (3) ALPHA=ALPHA Tax law: ICMS
  TAXLAWIPI                        :   "", // CHAR (3) ALPHA=ALPHA Tax law: IPI
  TAXLAWISS                        :   "", // CHAR (3) ALPHA=ALPHA ISS Tax Law
  TAXLAWPIS                        :   "", // CHAR (3) ALPHA=ALPHA PIS Tax Law
  TAX_CLASS1                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS2                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS3                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS4                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS5                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS6                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS7                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS8                       :   "", // CHAR (1) Tax classification material
  TAX_CLASS9                       :   "", // CHAR (1) Tax classification material
  TP_AGENCID                       :   "", // CHAR (3) Agency Identifier (AID) for Trading Partner
  TP_ALTRAID                       :   "", // CHAR (3) Allocation Transfer Agency Identifier (ATA) Trading Partner
  TP_AVTYPE                        :   "", // CHAR (1) Availability Type Code (A) for Trading Partner
  TP_BEGPER                        :   "", // NUMC (4) Beginning Period of Availability (BPOA) for Trading Partner
  TP_BETC                          :   "", // CHAR (10) Business Event Type Code for Trading Partner
  TP_ENDPER                        :   "", // NUMC (4) Ending Period of Availability (EPOA) for Trading Partner
  TP_MAIN_ACCT                     :   "", // CHAR (4) Main Account for Trading Partner
  TP_SUBLEVL                       :   "", // CHAR (2) Sublevel Prefix (SP) for Trading Partner
  TP_SUB_ACCT                      :   "", // CHAR (3) Subaccount for Trading Partner
  TREASURY_ACC_SYMBOL              :   "", // CHAR (30) Treasury Account Symbol
  TRGQTY_DEN                       :    0, // DEC (5) Factor for converting sales units to base units (target qty)
  TRG_QTY_NO                       :    0, // DEC (5) Factor for converting sales units to base units (target qty)
  T_UNIT_ISO                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  UNDDLV_TOL                       :    0, // DEC (3.1) Underdelivery Tolerance Limit
  UNLMT_DLV                        :   "", // CHAR (1) Indicator: Unlimited Overdelivery Allowed
  UNOF_WTISO                       :   "", // CHAR (3) Unit of weight in ISO code
  UNTOF_WGHT                       :   "", // UNIT (3) ALPHA=CUNIT Weight Unit
  USAGE_IND                        :   "", // CHAR (3) Unused - Reserve Length 3
  VAL_CONTR                        :   "", // CHAR (10) ALPHA=ALPHA Value contract no.
  VAL_CON_I                        :   "", // NUMC (6) Value contract item
  VAL_TYPE                         :   "", // CHAR (10) Valuation type
  VOLUME                           :  0.0, // QUAN (15.3) Volume of the item
  VOLUNIT                          :   "", // UNIT (3) ALPHA=CUNIT Volume unit
  VOLUNITISO                       :   "", // CHAR (3) Volume unit in ISO code
  VW_UEPOS                         :   "", // CHAR (1) ID for higher-level item usage
  WBS_ELEM                         :   "", // CHAR (24) ALPHA=ABPSN Work Breakdown Structure Element (WBS Element)
};
/* eslint-enable key-spacing */

// ORDER_ITEMS_INX BAPISDITMX Item Data Checkbox

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_ITEMS_INX = {
  ACCNT_ASGN                       :   "", // CHAR (1) Updated information in related user data field
  ADD_VAL_DY                       :   "", // CHAR (1) Updated information in related user data field
  ALTERN_BOM                       :   "", // CHAR (1) Updated information in related user data field
  ALT_TO_ITM                       :   "", // CHAR (1) Updated information in related user data field
  ASSORT_MOD                       :   "", // CHAR (1) Updated information in related user data field
  BATCH                            :   "", // CHAR (1) Updated information in related user data field
  BEGDEM_PER                       :   "", // CHAR (1) Updated information in related user data field
  BILL_BLOCK                       :   "", // CHAR (1) Updated information in related user data field
  BILL_DATE                        :   "", // CHAR (1) Updated information in related user data field
  BILL_REL                         :   "", // CHAR (1) Updated information in related user data field
  BILL_SCHED                       :   "", // CHAR (1) Updated information in related user data field
  BIL_FORM                         :   "", // CHAR (1) Updated information in related user data field
  BOMEXPL_NO                       :   "", // CHAR (1) Updated information in related user data field
  BUDGET_PERIOD                    :   "", // CHAR (1) Updated information in related user data field
  BUSINESS_EVENT_TCODE             :   "", // CHAR (1) Updated information in related user data field
  BUSINESS_PARTNER_NO              :   "", // CHAR (1) Updated information in related user data field
  BUS_TRANST                       :   "", // CHAR (1) Updated information in related user data field
  CALC_MOTIVE                      :   "", // CHAR (1) Updated information in related user data field
  CAMPAIGN                         :   "", // CHAR (1) Updated information in related user data field
  CANCELLATION_ALLOWED             :   "", // CHAR (1) Updated information in related user data field
  CFOP_CODE                        :   "", // CHAR (1) Updated information in related user data field
  CFOP_LONG                        :   "", // CHAR (1) Updated information in related user data field
  CMMT_ITEM                        :   "", // CHAR (1) Updated information in related user data field
  COMP_QUANT                       :   "", // CHAR (1) Updated information in related user data field
  CONFIG_ID                        :   "", // CHAR (1) Updated information in related user data field
  CSTCNDGRP1                       :   "", // CHAR (1) Updated information in related user data field
  CSTCNDGRP2                       :   "", // CHAR (1) Updated information in related user data field
  CSTCNDGRP3                       :   "", // CHAR (1) Updated information in related user data field
  CSTCNDGRP4                       :   "", // CHAR (1) Updated information in related user data field
  CSTCNDGRP5                       :   "", // CHAR (1) Updated information in related user data field
  CSTG_SHEET                       :   "", // CHAR (1) Updated information in related user data field
  CUST_GROUP                       :   "", // CHAR (1) Updated information in related user data field
  CUST_MAT22                       :   "", // CHAR (1) Updated information in related user data field
  CUST_MAT35                       :   "", // CHAR (1) Updated information in related user data field
  DEPARTM_NO                       :   "", // CHAR (1) Updated information in related user data field
  DEPREC_PER                       :   "", // CHAR (1) Updated information in related user data field
  DIVISION                         :   "", // CHAR (1) Updated information in related user data field
  DLI_PROFIL                       :   "", // CHAR (1) Updated information in related user data field
  DLVSCHDUSE                       :   "", // CHAR (1) Updated information in related user data field
  DLV_GROUP                        :   "", // CHAR (1) Updated information in related user data field
  DLV_PRIO                         :   "", // CHAR (1) Updated information in related user data field
  DLV_TIME                         :   "", // CHAR (1) Updated information in related user data field
  DOC_NUM_FI                       :   "", // CHAR (1) Updated information in related user data field
  DUNN_BLOCK                       :   "", // CHAR (1) Updated information in related user data field
  DUNN_KEY                         :   "", // CHAR (1) Updated information in related user data field
  EAN_UPC                          :   "", // CHAR (1) Updated information in related user data field
  EXCHG_RATE                       :   "", // CHAR (1) Updated information in related user data field
  EXCHG_RATE_V                     :   "", // CHAR (1) Updated information in related user data field
  EXCH_RATE_FI_V                   :   "", // CHAR (1) Updated information in related user data field
  EX_RATE_FI                       :   "", // CHAR (1) Updated information in related user data field
  FIXDAT_QTY                       :   "", // CHAR (1) Updated information in related user data field
  FIXED_QUAN                       :   "", // CHAR (1) Updated information in related user data field
  FIX_VAL_DY                       :   "", // CHAR (1) Updated information in related user data field
  FKK_CONACCT                      :   "", // CHAR (1) Updated information in related user data field
  FUNC_AREA                        :   "", // CHAR (1) Updated information in related user data field
  FUND                             :   "", // CHAR (1) Updated information in related user data field
  FUNDS_CTR                        :   "", // CHAR (1) Updated information in related user data field
  GRANT_NBR                        :   "", // CHAR (1) Updated information in related user data field
  GROSS_WGHT                       :   "", // CHAR (1) Updated information in related user data field
  HG_LV_ITEM                       :   "", // CHAR (1) Updated information in related user data field
  INCOTERMS1                       :   "", // CHAR (1) Updated information in related user data field
  INCOTERMS2                       :   "", // CHAR (1) Updated information in related user data field
  INCOTERMS2L                      :   "", // CHAR (1) Updated information in related user data field
  INCOTERMS3L                      :   "", // CHAR (1) Updated information in related user data field
  INCOTERMSV                       :   "", // CHAR (1) Updated information in related user data field
  INST_ID                          :   "", // CHAR (1) Updated information in related user data field
  INVO_SCHED                       :   "", // CHAR (1) Updated information in related user data field
  ITEMGUID_ATP                     :   "", // CHAR (1) Updated information in related user data field
  ITEM_CATEG                       :   "", // CHAR (1) Updated information in related user data field
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item
  ITM_TYPE_USAGE                   :   "", // CHAR (1) Updated information in related user data field
  LOC_ACTCODE                      :   "", // CHAR (1) Updated information in related user data field
  LOC_DISTTYPE                     :   "", // CHAR (1) Updated information in related user data field
  LOC_TAXCAT                       :   "", // CHAR (1) Updated information in related user data field
  LOC_TXRELCLAS                    :   "", // CHAR (1) Updated information in related user data field
  LOC_ZEROVAT                      :   "", // CHAR (1) Updated information in related user data field
  LOG_SYSTEM_OWN                   :   "", // CHAR (1) Updated information in related user data field
  MATERIAL                         :   "", // CHAR (1) Updated information in related user data field
  MATERIAL_LONG                    :   "", // CHAR (1) Updated information in related user data field
  MATFRGTGRP                       :   "", // CHAR (1) Updated information in related user data field
  MATL_GROUP                       :   "", // CHAR (1) Updated information in related user data field
  MAT_ENTRD                        :   "", // CHAR (1) Updated information in related user data field
  MAT_ENTRD_EXTERNAL               :   "", // CHAR (1) Updated information in related user data field
  MAT_ENTRD_GUID                   :   "", // CHAR (1) Updated information in related user data field
  MAT_ENTRD_LONG                   :   "", // CHAR (1) Updated information in related user data field
  MAT_ENTRD_VERSION                :   "", // CHAR (1) Updated information in related user data field
  MAT_EXT                          :   "", // CHAR (1) Updated information in related user data field
  MAT_GUID                         :   "", // CHAR (1) Updated information in related user data field
  MAT_PR_GRP                       :   "", // CHAR (1) Updated information in related user data field
  MAT_VERS                         :   "", // CHAR (1) Updated information in related user data field
  MAXDEVAMNT                       :   "", // CHAR (1) Updated information in related user data field
  MAXDEVPER                        :   "", // CHAR (1) Updated information in related user data field
  MAXDEV_DAY                       :   "", // CHAR (1) Updated information in related user data field
  MAX_PL_DLV                       :   "", // CHAR (1) Updated information in related user data field
  MN_INVOICE                       :   "", // CHAR (1) Updated information in related user data field
  MODIFICATION_ALLOWED             :   "", // CHAR (1) Updated information in related user data field
  NET_WEIGHT                       :   "", // CHAR (1) Updated information in related user data field
  NO_GR_POST                       :   "", // CHAR (1) Updated information in related user data field
  ORDCOMP_IN                       :   "", // CHAR (1) Updated information in related user data field
  ORDERID                          :   "", // CHAR (1) Updated information in related user data field
  ORDER_PROB                       :   "", // CHAR (1) Updated information in related user data field
  OVERDLVTOL                       :   "", // CHAR (1) Updated information in related user data field
  OVERHD_KEY                       :   "", // CHAR (1) Updated information in related user data field
  PART_DLV                         :   "", // CHAR (1) Updated information in related user data field
  PAYMENT_METHODS                  :   "", // CHAR (1) Updated information in related user data field
  PLANT                            :   "", // CHAR (1) Updated information in related user data field
  PLDLVSHDIN                       :   "", // CHAR (1) Updated information in related user data field
  PMNTTRMS                         :   "", // CHAR (1) Updated information in related user data field
  PMTGAR_PRO                       :   "", // CHAR (1) Updated information in related user data field
  POITM_NO_S                       :   "", // CHAR (1) Updated information in related user data field
  PO_DAT_S                         :   "", // CHAR (1) Updated information in related user data field
  PO_ITM_NO                        :   "", // CHAR (1) Updated information in related user data field
  PO_METHOD                        :   "", // CHAR (1) Updated information in related user data field
  PO_METH_S                        :   "", // CHAR (1) Updated information in related user data field
  PRC_GROUP1                       :   "", // CHAR (1) Updated information in related user data field
  PRC_GROUP2                       :   "", // CHAR (1) Updated information in related user data field
  PRC_GROUP3                       :   "", // CHAR (1) Updated information in related user data field
  PRC_GROUP4                       :   "", // CHAR (1) Updated information in related user data field
  PRC_GROUP5                       :   "", // CHAR (1) Updated information in related user data field
  PRICE_DATE                       :   "", // CHAR (1) Updated information in related user data field
  PRICE_GRP                        :   "", // CHAR (1) Updated information in related user data field
  PRICE_LIST                       :   "", // CHAR (1) Updated information in related user data field
  PRODCAT                          :   "", // CHAR (1) Updated information in related user data field
  PROD_HIERA                       :   "", // CHAR (1) Updated information in related user data field
  PROFIT_CTR                       :   "", // CHAR (1) Updated information in related user data field
  PROMOTION                        :   "", // CHAR (1) Updated information in related user data field
  PR_REF_MAT                       :   "", // CHAR (1) Updated information in related user data field
  PR_REF_MAT_LONG                  :   "", // CHAR (1) Updated information in related user data field
  PURCH_DATE                       :   "", // CHAR (1) Updated information in related user data field
  PURCH_NO_C                       :   "", // CHAR (1) Updated information in related user data field
  PURCH_NO_S                       :   "", // CHAR (1) Updated information in related user data field
  PYMT_METH                        :   "", // CHAR (1) Updated information in related user data field
  P_MAT_EXT                        :   "", // CHAR (1) Updated information in related user data field
  P_MAT_GUID                       :   "", // CHAR (1) Updated information in related user data field
  P_MAT_VERS                       :   "", // CHAR (1) Updated information in related user data field
  REASON_REJ                       :   "", // CHAR (1) Updated information in related user data field
  REC_POINT                        :   "", // CHAR (1) Updated information in related user data field
  REFLOGSYS                        :   "", // CHAR (1) Updated information in related user data field
  REFOBJKEY                        :   "", // CHAR (1) Updated information in related user data field
  REFOBJTYPE                       :   "", // CHAR (1) Updated information in related user data field
  REF_1                            :   "", // CHAR (1) Updated information in related user data field
  REF_1_S                          :   "", // CHAR (1) Updated information in related user data field
  REF_DOC                          :   "", // CHAR (1) Updated information in related user data field
  REF_DOC_CA                       :   "", // CHAR (1) Updated information in related user data field
  REF_DOC_CA_LONG                  :   "", // CHAR (1) Updated information in related user data field
  REF_DOC_IT                       :   "", // CHAR (1) Updated information in related user data field
  REPORTING_FREQ                   :   "", // CHAR (1) Updated information in related user data field
  REQMTS_TYP                       :   "", // CHAR (1) Updated information in related user data field
  REQ_SEGMENT                      :   "", // CHAR (1) Updated information in related user data field
  RESANALKEY                       :   "", // CHAR (1) Updated information in related user data field
  REVACC_REFID                     :   "", // CHAR (1) Updated information in related user data field
  REVACC_REFTYPE                   :   "", // CHAR (1) Updated information in related user data field
  REV_TYPE                         :   "", // CHAR (1) Updated information in related user data field
  RNDDLV_QTY                       :   "", // CHAR (1) Updated information in related user data field
  ROUTE                            :   "", // CHAR (1) Updated information in related user data field
  SALES_DIST                       :   "", // CHAR (1) Updated information in related user data field
  SALES_UNIT                       :   "", // CHAR (1) Updated information in related user data field
  SALQTYDEN                        :   "", // CHAR (1) Updated information in related user data field
  SALQTYNUM                        :   "", // CHAR (1) Updated information in related user data field
  SD_TAXCODE                       :   "", // CHAR (1) Updated information in related user data field
  SELECTION                        :   "", // CHAR (1) Updated information in related user data field
  SEPA_MANDATE_ID                  :   "", // CHAR (1) Updated information in related user data field
  SEQ_NO                           :   "", // CHAR (1) Updated information in related user data field
  SERV_DATE                        :   "", // CHAR (1) Updated information in related user data field
  SHIP_POINT                       :   "", // CHAR (1) Updated information in related user data field
  SHIP_TYPE                        :   "", // CHAR (1) Updated information in related user data field
  SHORT_TEXT                       :   "", // CHAR (1) Updated information in related user data field
  STORE_LOC                        :   "", // CHAR (1) Updated information in related user data field
  S_PROC_IND                       :   "", // CHAR (1) Updated information in related user data field
  TARGET_QTY                       :   "", // CHAR (1) Updated information in related user data field
  TARGET_QU                        :   "", // CHAR (1) Updated information in related user data field
  TARGET_VAL                       :   "", // CHAR (1) Updated information in related user data field
  TAXLAWCOFINS                     :   "", // CHAR (1) Updated information in related user data field
  TAXLAWICMS                       :   "", // CHAR (1) Updated information in related user data field
  TAXLAWIPI                        :   "", // CHAR (1) Updated information in related user data field
  TAXLAWISS                        :   "", // CHAR (1) Updated information in related user data field
  TAXLAWPIS                        :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS1                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS2                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS3                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS4                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS5                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS6                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS7                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS8                       :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS9                       :   "", // CHAR (1) Updated information in related user data field
  TP_AGENCID                       :   "", // CHAR (1) Updated information in related user data field
  TP_ALTRAID                       :   "", // CHAR (1) Updated information in related user data field
  TP_AVTYPE                        :   "", // CHAR (1) Updated information in related user data field
  TP_BEGPER                        :   "", // CHAR (1) Updated information in related user data field
  TP_BETC                          :   "", // CHAR (1) Updated information in related user data field
  TP_ENDPER                        :   "", // CHAR (1) Updated information in related user data field
  TP_MAIN_ACCT                     :   "", // CHAR (1) Updated information in related user data field
  TP_SUBLEVL                       :   "", // CHAR (1) Updated information in related user data field
  TP_SUB_ACCT                      :   "", // CHAR (1) Updated information in related user data field
  TREASURY_ACC_SYMBOL              :   "", // CHAR (1) Updated information in related user data field
  TRGQTY_DEN                       :   "", // CHAR (1) Updated information in related user data field
  TRG_QTY_NO                       :   "", // CHAR (1) Updated information in related user data field
  T_UNIT_ISO                       :   "", // CHAR (1) Updated information in related user data field
  UNDDLV_TOL                       :   "", // CHAR (1) Updated information in related user data field
  UNLMT_DLV                        :   "", // CHAR (1) Updated information in related user data field
  UNTOF_WGHT                       :   "", // CHAR (1) Updated information in related user data field
  UPDATEFLAG                       :   "", // CHAR (1) Update indicator
  USAGE_IND                        :   "", // CHAR (1) Updated information in related user data field
  VAL_CONTR                        :   "", // CHAR (1) Updated information in related user data field
  VAL_CON_I                        :   "", // CHAR (1) Updated information in related user data field
  VAL_TYPE                         :   "", // CHAR (1) Updated information in related user data field
  VOLUME                           :   "", // CHAR (1) Updated information in related user data field
  VOLUNIT                          :   "", // CHAR (1) Updated information in related user data field
  VW_UEPOS                         :   "", // CHAR (1) Updated information in related user data field
  WBS_ELEM                         :   "", // CHAR (1) Updated information in related user data field
};
/* eslint-enable key-spacing */

// ORDER_KEYS BAPISDKEY Output Table of Reference Keys

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_KEYS = {
  ABART                            :   "", // CHAR (1) Rel. Type
  ABRLI                            :   "", // NUMC (4) Internal delivery schedule number
  ADDRESS                          :   "", // CHAR (10) ALPHA=ALPHA Address
  CONDITEMNO                       :   "", // NUMC (6) Condition item number
  COND_COUNT                       :   "", // NUMC (2) Condition counter
  COND_NO                          :   "", // CHAR (10) Number of the document condition
  COND_ST_NO                       :   "", // NUMC (3) Step number
  COND_TYPE                        :   "", // CHAR (4) Condition Type
  DOC_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item
  REFLOGSYS                        :   "", // CHAR (10) ALPHA=ALPHA Logical system
  REFOBJECT                        :   "", // CHAR (32) Object name
  REFOBJKEY                        :   "", // CHAR (70) Object key
  REFOBJTYP                        :   "", // CHAR (10) Object Type
  SCHED_LIN                        :   "", // NUMC (4) Schedule line
  STATUS                           :   "", // CHAR (1) Single-Character Flag
  TINDEX                           :   "", // NUMC (6) Numeric field: Length 6
};
/* eslint-enable key-spacing */

// ORDER_SCHEDULES_IN BAPISCHDL Schedule Line Data

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_SCHEDULES_IN = {
  DATE_TYPE                        :   "", // CHAR (1) Date type (day, week, month, interval)
  DLV_DATE                         :   "", // DATS (8) Schedule line date
  DLV_TIME                         :   "", // TIMS (6) Arrival time
  GI_DATE                          :   "", // DATS (8) Goods Issue Date
  GI_TIME                          :   "", // TIMS (6) Time of Goods Issue (Local, Relating to a Plant)
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item
  LOAD_DATE                        :   "", // DATS (8) Loading Date
  LOAD_TIME                        :   "", // TIMS (6) Loading Time (Local Time Relating to a Shipping Point)
  MS_DATE                          :   "", // DATS (8) Material Availability Date
  MS_TIME                          :   "", // TIMS (6) Material Staging Time (Local, Relating to a Plant)
  PLAN_SCHED_TYPE                  :   "", // CHAR (1) Schedule line type EDI
  REFLOGSYS                        :   "", // CHAR (10) ALPHA=ALPHA Logical system
  REFOBJKEY                        :   "", // CHAR (70) Object key
  REFOBJTYPE                       :   "", // CHAR (10) Object Type
  REL_TYPE                         :   "", // CHAR (1) Rel. Type
  REQ_DATE                         :   "", // DATS (8) Schedule line date
  REQ_DLV_BL                       :   "", // CHAR (2) Schedule line blocked for delivery
  REQ_QTY                          :  0.0, // QUAN (13.3) Order quantity in sales units
  REQ_TIME                         :   "", // TIMS (6) Arrival time
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  SCHED_TYPE                       :   "", // CHAR (2) Schedule line category
  TP_DATE                          :   "", // DATS (8) Transportation Planning Date
  TP_TIME                          :   "", // TIMS (6) Transp. Planning Time (Local, Relating to a Shipping Point)
};
/* eslint-enable key-spacing */

// ORDER_SCHEDULES_INX BAPISCHDLX Checkbox Schedule Line Data

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_SCHEDULES_INX = {
  DATE_TYPE                        :   "", // CHAR (1) Updated information in related user data field
  DLV_DATE                         :   "", // CHAR (1) Updated information in related user data field
  DLV_TIME                         :   "", // CHAR (1) Updated information in related user data field
  GI_DATE                          :   "", // CHAR (1) Updated information in related user data field
  GI_TIME                          :   "", // CHAR (1) Updated information in related user data field
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item
  LOAD_DATE                        :   "", // CHAR (1) Updated information in related user data field
  LOAD_TIME                        :   "", // CHAR (1) Updated information in related user data field
  MS_DATE                          :   "", // CHAR (1) Updated information in related user data field
  MS_TIME                          :   "", // CHAR (1) Updated information in related user data field
  PLAN_SCHED_TYPE                  :   "", // CHAR (1) Updated information in related user data field
  REFOBJKEY                        :   "", // CHAR (70) Object key
  REFOBJTYPE                       :   "", // CHAR (10) Object Type
  REL_TYPE                         :   "", // CHAR (1) Updated information in related user data field
  REQ_DATE                         :   "", // CHAR (1) Updated information in related user data field
  REQ_DLV_BL                       :   "", // CHAR (1) Updated information in related user data field
  REQ_QTY                          :   "", // CHAR (1) Updated information in related user data field
  REQ_TIME                         :   "", // CHAR (1) Updated information in related user data field
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  SCHED_TYPE                       :   "", // CHAR (1) Updated information in related user data field
  TP_DATE                          :   "", // CHAR (1) Updated information in related user data field
  TP_TIME                          :   "", // CHAR (1) Updated information in related user data field
  UPDATEFLAG                       :   "", // CHAR (1) Update indicator
};
/* eslint-enable key-spacing */

// ORDER_TEXT BAPISDTEXT Texts

/* eslint-disable key-spacing */
// prettier-ignore
ORDER_TEXT = {
  DOC_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Sales Document
  FORMAT_COL                       :   "", // CHAR (2) Tag column
  FUNCTION                         :   "", // CHAR (3) Function
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  TEXT_ID                          :   "", // CHAR (4) Text ID
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};
/* eslint-enable key-spacing */

// PARTNERADDRESSES BAPIADDR1 BAPI Reference Structure for Addresses (Org./Company)

/* eslint-disable key-spacing */
// prettier-ignore
PARTNERADDRESSES = {
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
  COUNTY                           :   "", // CHAR (40) County
  COUNTY_CODE                      :   "", // CHAR (8) ALPHA=ALPHA County code for county
  C_O_NAME                         :   "", // CHAR (40) c/o name
  DELIV_DIS                        :   "", // CHAR (15) (Not Supported) Post Delivery District
  DELI_SERV_NUMBER                 :   "", // CHAR (10) Number of Delivery Service
  DELI_SERV_TYPE                   :   "", // CHAR (4) Type of Delivery Service
  DISTRCT_NO                       :   "", // CHAR (8) ALPHA=ALPHA District code for City and Street file
  DISTRICT                         :   "", // CHAR (40) District
  DONT_USE_P                       :   "", // CHAR (4) PO Box Address Undeliverable Flag
  DONT_USE_S                       :   "", // CHAR (4) Street Address Undeliverable Flag
  E_MAIL                           :   "", // CHAR (241) ALPHA=SXIDN E-Mail Address
  FAX_EXTENS                       :   "", // CHAR (10) First fax no.: extension
  FAX_NUMBER                       :   "", // CHAR (30) First fax no.: dialling code+number
  FLOOR                            :   "", // CHAR (10) Floor in building
  FORMOFADDR                       :   "", // CHAR (20) Form of address text
  HOMECITYNO                       :   "", // CHAR (12) ALPHA=ALPHA Different city for city/street file
  HOMEPAGE                         :   "", // CHAR (132) URI, e.g. Homepage or ftp Address
  HOME_CITY                        :   "", // CHAR (40) City (different from postal city)
  HOUSE_NO                         :   "", // CHAR (10) House Number
  HOUSE_NO2                        :   "", // CHAR (10) House number supplement
  HOUSE_NO3                        :   "", // CHAR (10) (Not supported) House Number Range
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  LANGUCRISO                       :   "", // CHAR (2) 2-Character SAP Language Code
  LANGU_CR                         :   "", // LANG (1) ALPHA=ISOLA Address record creation original language
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  LOCATION                         :   "", // CHAR (40) Street 5
  NAME                             :   "", // CHAR (40) Name 1
  NAME_2                           :   "", // CHAR (40) Name 2
  NAME_3                           :   "", // CHAR (40) Name 3
  NAME_4                           :   "", // CHAR (40) Name 4
  PBOXCIT_NO                       :   "", // CHAR (12) ALPHA=ALPHA City PO box code (City file)
  PCODE1_EXT                       :   "", // CHAR (10) (Not Supported)City Postal Code Extension, e.g. ZIP+4+2 Code
  PCODE2_EXT                       :   "", // CHAR (10) (Not Supported) PO Box Postal Code Extension
  PCODE3_EXT                       :   "", // CHAR (10) (Not Supported) Major Customer Postal Code Extension
  POBOX_CTRY                       :   "", // CHAR (3) PO box country
  POSTL_COD1                       :   "", // CHAR (10) City postal code
  POSTL_COD2                       :   "", // CHAR (10) PO Box Postal Code
  POSTL_COD3                       :   "", // CHAR (10) Company Postal Code (for Large Customers)
  PO_BOX                           :   "", // CHAR (10) PO Box
  PO_BOX_CIT                       :   "", // CHAR (40) PO Box city
  PO_BOX_LOBBY                     :   "", // CHAR (40) PO Box Lobby
  PO_BOX_REG                       :   "", // CHAR (3) Region for PO Box (Country, State, Province, ...)
  PO_CTRYISO                       :   "", // CHAR (2) Country ISO code
  PO_W_O_NO                        :   "", // CHAR (1) Flag: PO Box Without Number
  REGIOGROUP                       :   "", // CHAR (8) Regional structure grouping
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  ROOM_NO                          :   "", // CHAR (10) Room or Appartment Number
  SORT1                            :   "", // CHAR (20) Search Term 1
  SORT2                            :   "", // CHAR (20) Search Term 2
  STREET                           :   "", // CHAR (40) Street
  STREET_LNG                       :   "", // CHAR (60) Street
  STREET_NO                        :   "", // CHAR (12) ALPHA=ALPHA Street Number for City/Street File
  STR_ABBR                         :   "", // CHAR (2) (Not Supported) Abbreviation of Street Name
  STR_SUPPL1                       :   "", // CHAR (40) Street 2
  STR_SUPPL2                       :   "", // CHAR (40) Street 3
  STR_SUPPL3                       :   "", // CHAR (40) Street 4
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction
  TEL1_EXT                         :   "", // CHAR (10) First Telephone No.: Extension
  TEL1_NUMBR                       :   "", // CHAR (30) First telephone no.: dialling code+number
  TIME_ZONE                        :   "", // CHAR (6) Address time zone
  TITLE                            :   "", // CHAR (30) Title text
  TOWNSHIP                         :   "", // CHAR (40) Township
  TOWNSHIP_CODE                    :   "", // CHAR (8) ALPHA=ALPHA Township code for Township
  TRANSPZONE                       :   "", // CHAR (10) Transportation zone to or from which the goods are delivered
  URI_TYPE                         :   "", // CHAR (3) URI type flag
};
/* eslint-enable key-spacing */

// RETURN BAPIRET2 Return Messages

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  FIELD                            :   "", // CHAR (30) Field in parameter
  ID                               :   "", // CHAR (20) Message Class
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  MESSAGE                          :   "", // CHAR (220) Message Text
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
  NUMBER                           :   "", // NUMC (3) Message Number
  PARAMETER                        :   "", // CHAR (32) Parameter Name
  ROW                              :    0, // INT4 (10) Lines in parameter
  SYSTEM                           :   "", // CHAR (10) ALPHA=ALPHA Logical system from which message originates
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */

//
// OUTPUT PARAMETERS
//
