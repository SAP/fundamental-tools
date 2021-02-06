//
// BAPI_SALESORDER_SIMULATE var: 2  struct: 5  table: 17  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

ORDER_HEADER_IN        :           {}, // BAPISDHEAD Order Header
// CONVERT_PARVW_AUART :        SPACE, // CHAR (1) Conversion of partner function + order type

// TABLE PARAMETERS

ORDER_ITEMS_IN         :           [], // BAPIITEMIN Item Data Input
ORDER_PARTNERS         :           [], // BAPIPARTNR Partners
// EXTENSIONIN         :           [], // BAPIPAREX Customer enhancment import
// MESSAGETABLE        :           [], // BAPIRET2 Warning table (XVBFS)
// ORDER_CCARD         :           [], // BAPICCARD Credit Card Data
// ORDER_CCARD_EX      :           [], // BAPICCARD_EX Credit card data output
// ORDER_CFGS_BLOB     :           [], // BAPICUBLB Internal configuration data (SCE)
// ORDER_CFGS_INST     :           [], // BAPICUINS Configuration: Instances
// ORDER_CFGS_PART_OF  :           [], // BAPICUPRT Configuration: Part-of Specifications
// ORDER_CFGS_REF      :           [], // BAPICUCFG Configuration: Reference Data
// ORDER_CFGS_VALUE    :           [], // BAPICUVAL Configuration: Characteristic Values
// ORDER_CONDITION_EX  :           [], // BAPICOND Conditions Output
// ORDER_INCOMPLETE    :           [], // BAPIINCOMP no text (en)
// ORDER_ITEMS_OUT     :           [], // BAPIITEMEX Item Data Output
// ORDER_SCHEDULE_EX   :           [], // BAPISDHEDU Schedule line data output
// ORDER_SCHEDULE_IN   :           [], // BAPISCHDL Schedule Line Data Input
// PARTNERADDRESSES    :           [], // BAPIADDR1 BAPI Reference Structure for Addresses (Org./Company)

// EXPORT PARAMETERS

// SALESDOCUMENT       :           "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
// BILLING_PARTY       :           {}, // BAPIPAYER Payer
// RETURN              :           {}, // BAPIRETURN Error Text
// SHIP_TO_PARTY       :           {}, // BAPISHIPTO Ship-To Party
// SOLD_TO_PARTY       :           {}, // BAPISOLDTO Sold-to party
};

const result = await client.call("BAPI_SALESORDER_SIMULATE", parameters);

//
// IMPORT PARAMETERS
//

// BAPISDHEAD  Order Header

// prettier-ignore
const ORDER_HEADER_IN= {
  DOC_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Sales Document SU3=AUN
  DOC_TYPE                         :   "", // CHAR (4) ALPHA=AUART Sales Document Type SU3=AAT
  COLLECT_NO                       :   "", // CHAR (10) Collective Number
  SALES_ORG                        :   "", // CHAR (4) Sales Organization SU3=VKO
  DISTR_CHAN                       :   "", // CHAR (2) Distribution Channel SU3=VTW
  DIVISION                         :   "", // CHAR (2) Division SU3=SPA
  SALES_GRP                        :   "", // CHAR (3) Sales group SU3=VKG
  SALES_OFF                        :   "", // CHAR (4) Sales office SU3=VKB
  REQ_DATE_H                       :   "", // DATS (8) Requested delivery date
  DATE_TYPE                        :   "", // CHAR (1) Proposed date type
  PURCH_NO                         :   "", // CHAR (20) Customer purchase order number
  PURCH_DATE                       :   "", // DATS (8) Customer purchase order date
  PO_METHOD                        :   "", // CHAR (4) Customer purchase order type
  PO_SUPPLEM                       :   "", // CHAR (4) Purchase order number supplement
  REF_1                            :   "", // CHAR (12) Your Reference
  NAME                             :   "", // CHAR (30) Branching Name
  TELEPHONE                        :   "", // CHAR (16) Telephone Number
  PRICE_GRP                        :   "", // CHAR (2) Price group (customer) SU3=VKA
  CUST_GROUP                       :   "", // CHAR (2) Customer group SU3=VKD
  SALES_DIST                       :   "", // CHAR (6) Sales district SU3=BZI
  PRICE_LIST                       :   "", // CHAR (2) Price list type SU3=VPL
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  DLV_BLOCK                        :   "", // CHAR (2) Delivery block (document header)
  BILL_BLOCK                       :   "", // CHAR (2) Billing block in SD document
  ORD_REASON                       :   "", // CHAR (3) Order reason (reason for the business transaction)
  COMPL_DLV                        :   "", // CHAR (1) Complete delivery defined for each sales order?
  PRICE_DATE                       :   "", // DATS (8) Date for pricing and exchange rate
  QT_VALID_F                       :   "", // DATS (8) Quotation/Inquiry is valid from
  QT_VALID_T                       :   "", // DATS (8) Date until which bid/quotation is binding (valid-to date)
  CT_VALID_F                       :   "", // DATS (8) Valid-from date (outline agreements, product proposals)
  CT_VALID_T                       :   "", // DATS (8) Valid-to date (outline agreements, product proposals)
  CUST_GRP1                        :   "", // CHAR (3) Customer group 1
  CUST_GRP2                        :   "", // CHAR (3) Customer group 2
  CUST_GRP3                        :   "", // CHAR (3) Customer group 3
  CUST_GRP4                        :   "", // CHAR (3) Customer group 4
  CUST_GRP5                        :   "", // CHAR (3) Customer group 5
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
  PURCH_NO_S                       :   "", // CHAR (35) Ship-to Party's Purchase Order Number
  PO_DAT_S                         :   "", // DATS (8) Ship-to party's PO date
  PO_METH_S                        :   "", // CHAR (4) Ship-to party purchase order type
  REF_1_S                          :   "", // CHAR (12) Ship-to party character
  SD_DOC_CAT                       :   "", // CHAR (1) SD document category
  SHIP_COND                        :   "", // CHAR (2) Shipping conditions
  CURRENCY                         :   "", // CUKY (5) SD document currency SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO code currency
  DLV_TIME                         :   "", // CHAR (3) Agreed delivery time
  CD_TYPE1                         :   "", // CHAR (4) Condition Type SU3=VKS
  CD_VALUE1                        :  "0", // DEC (23.4) Condition rate
  CD_P_UNT1                        :   "", // NUMC (5) Condition pricing unit
  CD_D_UNT1                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit in the document
  CD_D_UISO1                       :   "", // CHAR (3) Condition unit of measure in UoM
  CD_CURR1                         :   "", // CUKY (5) Currency Key SU3=FWS
  CD_CU_ISO1                       :   "", // CHAR (3) ISO code currency
  CD_TYPE2                         :   "", // CHAR (4) Condition Type SU3=VKS
  CD_VALUE2                        :  "0", // DEC (23.4) Condition rate
  CD_P_UNT2                        :   "", // NUMC (5) Condition pricing unit
  CD_D_UNT2                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit in the document
  CD_D_UISO2                       :   "", // CHAR (3) Condition unit of measure in UoM
  CD_CURR2                         :   "", // CUKY (5) Currency Key SU3=FWS
  CD_CU_ISO2                       :   "", // CHAR (3) ISO code currency
  CD_TYPE3                         :   "", // CHAR (4) Condition Type SU3=VKS
  CD_VALUE3                        :  "0", // DEC (23.4) Condition rate
  CD_P_UNT3                        :   "", // NUMC (5) Condition pricing unit
  CD_D_UNT3                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit in the document
  CD_D_UISO3                       :   "", // CHAR (3) Condition unit of measure in UoM
  CD_CURR3                         :   "", // CUKY (5) Currency Key SU3=FWS
  CD_CU_ISO3                       :   "", // CHAR (3) ISO code currency
  CD_TYPE4                         :   "", // CHAR (4) Condition Type SU3=VKS
  CD_VALUE4                        :  "0", // DEC (23.4) Condition rate
  CD_P_UNT4                        :   "", // NUMC (5) Condition pricing unit
  CD_D_UNT4                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit in the document
  CD_D_UISO4                       :   "", // CHAR (3) Condition unit of measure in UoM
  CD_CURR4                         :   "", // CUKY (5) Currency Key SU3=FWS
  CD_CU_ISO4                       :   "", // CHAR (3) ISO code currency
  FKK_CONACCT                      :   "", // CHAR (12) Character Field of Length 12
  REF_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document number of the reference document
  REF_DOC_CA                       :   "", // CHAR (1) Document category of preceding SD document
  SEPA_MANDATE_ID                  :   "", // CHAR (35) Unique Reference to Mandate for each Payee
  SD_DOC_CAT_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
  REF_DOC_CA_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
  INCOTERMSV                       :   "", // CHAR (4) Incoterms Version
  INCOTERMS2L                      :   "", // CHAR (70) Incoterms Location 1
  INCOTERMS3L                      :   "", // CHAR (70) Incoterms Location 2
};


//
// TABLE PARAMETERS
//

// BAPIITEMIN  Item Data Input
const ORDER_ITEMS_IN= [];

// prettier-ignore
const ORDER_ITEMS_IN= {
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item SU3=APO
  HG_LV_ITEM                       :   "", // NUMC (6) Higher-level item in bill of material structures
  PO_ITM_NO                        :   "", // CHAR (6) ALPHA=ALPHA Item Number of the Underlying Purchase Order
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  CUST_MAT                         :   "", // CHAR (22) Material belonging to the customer
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  DLV_GROUP                        :   "", // NUMC (3) Delivery group (items are delivered together)
  PART_DLV                         :   "", // CHAR (1) Partial delivery at item level
  REASON_REJ                       :   "", // CHAR (2) Reason for rejection of quotations and sales orders
  BILL_BLOCK                       :   "", // CHAR (2) Block
  BILL_DATE                        :   "", // DATS (8) Billing date for billing index and printout
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  STORE_LOC                        :   "", // CHAR (4) Storage location SU3=LAG
  TARGET_QTY                       :   "", // NUMC (13) Target quantity with 3 decimal places (in sales units)
  TARGET_QU                        :   "", // UNIT (3) ALPHA=CUNIT Target quantity UoM
  REQ_QTY                          :   "", // NUMC (13) Order qty in sales units - 00009001 corresponds to 9.001
  SALES_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Sales unit
  ITEM_CATEG                       :   "", // CHAR (4) Sales document item category
  SHORT_TEXT                       :   "", // CHAR (40) Short text for sales order item
  REQ_DATE                         :   "", // DATS (8) Schedule line date
  DATE_TYPE                        :   "", // CHAR (1) Date type (day, week, month, interval)
  REQ_TIME                         :   "", // TIMS (6) Arrival time
  COND_TYPE                        :   "", // CHAR (4) Condition Type SU3=VKS
  COND_VALUE                       : "0.0", // CURR (11.2) Rate (condition amount or percentage)
  COND_P_UNT                       :   "", // NUMC (5) Condition pricing unit
  COND_D_UNT                       :   "", // UNIT (3) ALPHA=CUNIT Condition unit in the document
  PRC_GROUP1                       :   "", // CHAR (3) Material group 1
  PRC_GROUP2                       :   "", // CHAR (3) Material group 2
  PRC_GROUP3                       :   "", // CHAR (3) Material group 3
  PRC_GROUP4                       :   "", // CHAR (3) Material group 4
  PRC_GROUP5                       :   "", // CHAR (3) Material group 5
  PROD_HIERA                       :   "", // CHAR (18) Product Hierarchy SU3=VPR
  MATL_GROUP                       :   "", // CHAR (9) Material Group SU3=MKL
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
  PURCH_DATE                       :   "", // DATS (8) Customer purchase order date
  PO_METHOD                        :   "", // CHAR (4) Customer purchase order type
  REF_1                            :   "", // CHAR (12) Your Reference
  PURCH_NO_S                       :   "", // CHAR (35) Ship-to Party's Purchase Order Number
  PO_DAT_S                         :   "", // DATS (8) Ship-to party's PO date
  PO_METH_S                        :   "", // CHAR (4) Ship-to party purchase order type
  REF_1_S                          :   "", // CHAR (12) Ship-to party character
  PO_ITM_NO_S                      :   "", // CHAR (6) ALPHA=ALPHA Item Number of the Underlying Purchase Order
  COND_VAL1                        :  "0", // DEC (23.4) Condition rate
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURR_ISO                         :   "", // CHAR (3) ISO code currency
  T_UNIT_ISO                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  S_UNIT_ISO                       :   "", // CHAR (3) Sales unit in ISO code
  CD_UNT_ISO                       :   "", // CHAR (3) Condition unit of measure in UoM
  CUST_MAT35                       :   "", // CHAR (35) Material belonging to the customer
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  DLV_TIME                         :   "", // CHAR (3) Agreed delivery time
  ASSORT_MOD                       :   "", // CHAR (18) ALPHA=ALPHA Assortment module SU3=WBS
  VAL_CONTR                        :   "", // CHAR (10) ALPHA=ALPHA Value contract no.
  VAL_CON_I                        :   "", // NUMC (6) Value contract item
  REF_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document number of the reference document
  REF_DOC_IT                       :   "", // NUMC (6) Item number of the reference item
  REF_DOC_CA                       :   "", // CHAR (1) Document category of preceding SD document
  CD_TYPE2                         :   "", // CHAR (4) Condition Type SU3=VKS
  CD_VALUE2                        :  "0", // DEC (23.4) Condition rate
  CD_P_UNT2                        :   "", // NUMC (5) Condition pricing unit
  CD_D_UNT2                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit in the document
  CD_D_UISO2                       :   "", // CHAR (3) Condition unit of measure in UoM
  CD_CURR2                         :   "", // CUKY (5) Currency Key SU3=FWS
  CD_CU_ISO2                       :   "", // CHAR (3) ISO code currency
  CD_TYPE3                         :   "", // CHAR (4) Condition Type SU3=VKS
  CD_VALUE3                        :  "0", // DEC (23.4) Condition rate
  CD_P_UNT3                        :   "", // NUMC (5) Condition pricing unit
  CD_D_UNT3                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit in the document
  CD_D_UISO3                       :   "", // CHAR (3) Condition unit of measure in UoM
  CD_CURR3                         :   "", // CUKY (5) Currency Key SU3=FWS
  CD_CU_ISO3                       :   "", // CHAR (3) ISO code currency
  CD_TYPE4                         :   "", // CHAR (4) Condition Type SU3=VKS
  CD_VALUE4                        :  "0", // DEC (23.4) Condition rate
  CD_P_UNT4                        :   "", // NUMC (5) Condition pricing unit
  CD_D_UNT4                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit in the document
  CD_D_UISO4                       :   "", // CHAR (3) Condition unit of measure in UoM
  CD_CURR4                         :   "", // CUKY (5) Currency Key SU3=FWS
  CD_CU_ISO4                       :   "", // CHAR (3) ISO code currency
  MAT_EXT                          :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MAT_GUID                         :   "", // CHAR (32) External GUID for MATERIAL Field
  MAT_VERS                         :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  ALTERN_BOM                       :   "", // CHAR (2) ALPHA=ALPHA Alternative BOM
  FKK_CONACCT                      :   "", // CHAR (12) Character Field of Length 12
  EAN_UPC                          :   "", // CHAR (18) ALPHA=EAN11 International Article Number (EAN/UPC) SU3=EAN
  SHIP_POINT                       :   "", // CHAR (4) Shipping Point/Receiving Point SU3=VST
  PRODCAT                          :   "", // CHAR (10) Product catalog number SU3=WMI
  SGT_RCAT                         :   "", // CHAR (16) Requirement Segment SU3=SGT_R
  INCOTERMSV                       :   "", // CHAR (4) Incoterms Version
  INCOTERMS2L                      :   "", // CHAR (70) Incoterms Location 1
  INCOTERMS3L                      :   "", // CHAR (70) Incoterms Location 2
  REF_DOC_CA_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPIPARTNR  Partners
const ORDER_PARTNERS= [];

// prettier-ignore
const ORDER_PARTNERS= {
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTN_NUMB                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  TITLE                            :   "", // CHAR (15) Form of address
  NAME                             :   "", // CHAR (35) Name 1
  NAME_2                           :   "", // CHAR (35) Name 2
  NAME_3                           :   "", // CHAR (35) Name 3
  NAME_4                           :   "", // CHAR (35) Name 4
  STREET                           :   "", // CHAR (35) Street and House Number
  COUNTRY                          :   "", // CHAR (3) Country Key SU3=LND
  COUNTRY_ISO                      :   "", // CHAR (2) Country key in ISO code
  POSTL_CODE                       :   "", // CHAR (10) Postal Code
  POBX_PCD                         :   "", // CHAR (10) P.O. Box Postal Code
  POBX_CTY                         :   "", // CHAR (35) PO Box city
  CITY                             :   "", // CHAR (35) City
  DISTRICT                         :   "", // CHAR (35) District
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  PO_BOX                           :   "", // CHAR (10) PO Box
  TELEPHONE                        :   "", // CHAR (16) First telephone number
  TELEPHONE2                       :   "", // CHAR (16) Second telephone number
  TELEBOX                          :   "", // CHAR (15) Telebox number
  FAX_NUMBER                       :   "", // CHAR (31) Fax Number
  TELETEX_NO                       :   "", // CHAR (30) Teletex number
  TELEX_NO                         :   "", // CHAR (30) Telex number
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  TRANSPZONE                       :   "", // CHAR (10) Transportation zone to or from which the goods are delivered
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  ADDRESS                          :   "", // CHAR (10) ALPHA=ALPHA Address
  PRIV_ADDR                        :   "", // CHAR (10) ALPHA=ALPHA Home address
  ADDR_TYPE                        :   "", // CHAR (1) Address type (1=Organization, 2=Person, 3=Contact person)
  ADDR_ORIG                        :   "", // CHAR (1) Origin of an address
  ADDR_LINK                        :   "", // CHAR (10) ALPHA=ALPHA Link to address number SU3=ADR
  VAT_REG_NO                       :   "", // CHAR (20) VAT Registration Number
};

// BAPIPAREX  Customer enhancment import
const EXTENSIONIN= [];

// prettier-ignore
const EXTENSIONIN= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIRET2  Warning table (XVBFS)
const MESSAGETABLE= [];

// prettier-ignore
const MESSAGETABLE= {
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

// BAPICCARD  Credit Card Data
const ORDER_CCARD= [];

// prettier-ignore
const ORDER_CCARD= {
  PRE_AUTH                         :   "", // CHAR (1) Payment cards: Preauthorization
  CC_SEQ_NO                        :   "", // CHAR (10) Payment cards: Payment card suffix
  AMOUNTCHAN                       :   "", // CHAR (1) Payment cards: Amount changed
  AUTHORTYPE                       :   "", // CHAR (1) Payment cards: Authorization type
  DATAORIGIN                       :   "", // CHAR (1) Payment cards: Entry mode
  RADRCHECK1                       :   "", // CHAR (4) Payment Cards: Result of Address Check (Address Result)
  RADRCHECK2                       :   "", // CHAR (4) Payment Cards: Result of Address Check (Address Approval)
  RADRCHECK3                       :   "", // CHAR (4) Payment Cards: Result of Address Check (ZIP Code Result)
  RCARDCHECK                       :   "", // CHAR (4) Payment cards: Result of card check (response code)
  CC_LIMITED                       :   "", // CHAR (1) Payment cards: Limit amount
};

// BAPICCARD_EX  Credit card data output
const ORDER_CCARD_EX= [];

// prettier-ignore
const ORDER_CCARD_EX= {
  PAY_TYPE                         :   "", // CHAR (1) Means of payment for classifying payment card plan lines
  CC_TYPE                          :   "", // CHAR (4) Payment cards: Card type
  CC_NUMBER                        :   "", // CHAR (25) Payment cards: Card number
  CC_SEQ_NO                        :   "", // CHAR (10) Payment cards: Payment card suffix
  CC_VALID_F                       :   "", // DATS (8) Payment cards: Valid from
  CC_VALID_T                       :   "", // DATS (8) Payment Cards: Valid To
  CC_NAME                          :   "", // CHAR (40) Payment cards: Name of cardholder
  AUTHAMOUNT                       :  "0", // DEC (23.4) Payment cards: Authorized amount
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURR_ISO                         :   "", // CHAR (3) ISO code currency
  AUTH_DATE                        :   "", // DATS (8) Payment cards: Authorization date
  AUTH_TIME                        :   "", // TIMS (6) Payment cards: Authorization time
  MERCHIDCL                        :   "", // CHAR (15) Payment cards: Merchant ID at the clearing house
  TERMINAL                         :   "", // CHAR (10) Payment cards: Terminal
  BILLAMOUNT                       :  "0", // DEC (23.4) Value to be billed on the date specified in billing plan
  CC_LI_AMOUNT                     :   "", // CHAR (1) Payment cards: Limit amount
  CC_AUTTH_NO                      :   "", // CHAR (10) Payment cards: Authorization number
  BILLSTATUS                       :   "", // CHAR (1) Billing status for the billing plan/invoice plan date
  DATAORIGIN                       :   "", // CHAR (1) Payment cards: Entry mode
  CC_SETTLED                       :   "", // CHAR (1) Payment cards: Settlement carried out
  AUTH_REFNO                       :   "", // CHAR (15) Payment cards: Authoriz. reference code of clearing house
  PTOFRCPT                         :   "", // CHAR (10) Payment cards: Point of receipt for the transaction
  CC_REACT                         :   "", // CHAR (1) Payment cards: Response to authorization checks
  AUTH_FLAG                        :   "", // CHAR (1) Payment cards: Authorization to be transferred
  BILL_PLAN                        :   "", // CHAR (10) Billing plan number / invoicing plan number
  BILL_PLANI                       :   "", // NUMC (6) Item for billing plan/invoice plan/payment cards
  CC_RE_AMOUNT                     :  "0", // DEC (23.4) Currency amount in BAPI interfaces
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number SU3=SAK
  CC_STAT_EX                       :   "", // CHAR (1) Payment cards: Status when external system is called?
  CC_REACT_T                       :   "", // CHAR (40) Payment cards: Result text
  RFCAUT                           :   "", // CHAR (32) Logical destination (specified in function call) SU3=RFC
  AUT_SETINIT                      :   "", // CHAR (30) Payment Cards: Function for Initialization SET Authorization
  AUT_SETINFO                      :   "", // CHAR (30) Payment Cards: Function for Result of Authorization (SET)
  PRE_AUTH                         :   "", // CHAR (1) Payment cards: Preauthorization
};

// BAPICUBLB  Internal configuration data (SCE)
const ORDER_CFGS_BLOB= [];

// prettier-ignore
const ORDER_CFGS_BLOB= {
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  CONTEXT                          :   "", // CHAR (250) CU: Configuration BLOB (SCE)
};

// BAPICUINS  Configuration: Instances
const ORDER_CFGS_INST= [];

// prettier-ignore
const ORDER_CFGS_INST= {
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  OBJ_TYPE                         :   "", // CHAR (10) CUIB: External Type of (Referencing) Object
  CLASS_TYPE                       :   "", // CHAR (3) Class Type SU3=KAR
  OBJ_KEY                          :   "", // CHAR (50) CUIB: Key of Referencing Object
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

// BAPICUPRT  Configuration: Part-of Specifications
const ORDER_CFGS_PART_OF= [];

// prettier-ignore
const ORDER_CFGS_PART_OF= {
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  PARENT_ID                        :   "", // CHAR (8) Instance Number in Configuration
  INST_ID                          :   "", // CHAR (8) Instance Number in Configuration
  PART_OF_NO                       :   "", // CHAR (4) Part_of Item Number
  OBJ_TYPE                         :   "", // CHAR (10) CUIB: External Type of (Referencing) Object
  CLASS_TYPE                       :   "", // CHAR (3) Class Type SU3=KAR
  OBJ_KEY                          :   "", // CHAR (50) CUIB: Key of Referencing Object
  AUTHOR                           :   "", // CHAR (1) Statement was Inferred
  SALES_RELEVANT                   :   "", // CHAR (1) Part is Sales-Relevant
  PART_OF_GUID                     :   "", // CHAR (32) GUID for PART_OF Statement for Instance
};

// BAPICUCFG  Configuration: Reference Data
const ORDER_CFGS_REF= [];

// prettier-ignore
const ORDER_CFGS_REF= {
  POSEX                            :   "", // CHAR (6) External Item Number
  CONFIG_ID                        :   "", // CHAR (6) External Configuration ID (Temporary)
  ROOT_ID                          :   "", // CHAR (8) Instance Number in Configuration
  SCE                              :   "", // CHAR (1) CUX: Configuration Type
  KBNAME                           :   "", // CHAR (30) Knowledge-Base Object
  KBVERSION                        :   "", // CHAR (30) Runtime Version of SCE Knowledge Base
  COMPLETE                         :   "", // CHAR (1) General Indicator
  CONSISTENT                       :   "", // CHAR (1) General Indicator
  CFGINFO                          :   "", // CHAR (250) CU: Configuration BLOB (SCE)
  KBPROFILE                        :   "", // CHAR (30) Knowledge-Base Profile
  KBLANGUAGE                       :   "", // LANG (1) ALPHA=ISOLA Configuration Language
  CBASE_ID                         :   "", // CHAR (32) Instance Number (Persistent)
  CBASE_ID_TYPE                    :   "", // CHAR (1) Type of Instance Number (Persistent)
};

// BAPICUVAL  Configuration: Characteristic Values
const ORDER_CFGS_VALUE= [];

// prettier-ignore
const ORDER_CFGS_VALUE= {
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

// BAPICOND  Conditions Output
const ORDER_CONDITION_EX= [];

// prettier-ignore
const ORDER_CONDITION_EX= {
  ITM_NUMBER                       :   "", // NUMC (6) Condition item number
  COND_ST_NO                       :   "", // NUMC (3) Step number
  COND_COUNT                       :   "", // NUMC (2) Condition counter
  COND_TYPE                        :   "", // CHAR (4) Condition Type SU3=VKS
  COND_VALUE                       :  "0", // DEC (28.9) Condition rate
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  COND_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  COND_P_UNT                       :  "0", // DEC (5) Condition pricing unit
  CURR_ISO                         :   "", // CHAR (3) ISO code currency
  CD_UNT_ISO                       :   "", // CHAR (3) Condition unit of measure in UoM
  REFOBJTYPE                       :   "", // CHAR (10) Object Type SU3=OBJ
  REFOBJKEY                        :   "", // CHAR (70) Object key
  REFLOGSYS                        :   "", // CHAR (10) ALPHA=ALPHA Logical system
  APPLICATIO                       :   "", // CHAR (2) Application SU3=KAP
  CONPRICDAT                       :   "", // DATS (8) Condition pricing date
  CALCTYPCON                       :   "", // CHAR (1) Calculation type for condition
  CONBASEVAL                       :  "0", // DEC (28.9) Condition base value
  CONEXCHRAT                       :  "0", // DEC (9.5) ALPHA=EXCRT Condition exchange rate for conversion to local currency
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
  CONDCOUNT                        :   "", // NUMC (2) Sequential number of the condition
  ROUNDOFFDI                       :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  CONDVALUE                        :  "0", // DEC (28.9) Condition value
  CURRENCY_2                       :   "", // CUKY (5) SD document currency SU3=FWS
  CURR_ISO_2                       :   "", // CHAR (3) ISO code currency
  CONDCNTRL                        :   "", // CHAR (1) Condition control
  CONDISACTI                       :   "", // CHAR (1) Condition is inactive
  CONDCLASS                        :   "", // CHAR (1) Condition class
  FACTBASVAL                       : "0.0", // FLTP (16.16) Factor for condition base value
  SCALEBASIN                       :   "", // CHAR (1) Scale basis indicator
  SCALBASVAL                       :  "0", // DEC (28.9) Scale base value of the condition
  UNITMEASUR                       :   "", // UNIT (3) ALPHA=CUNIT Condition scale unit of measure
  ISO_UNIT                         :   "", // CHAR (3) ISO code for unit of measurement
  CURRENCKEY                       :   "", // CUKY (5) Scale currency SU3=FWS
  CURRENISO                        :   "", // CHAR (3) ISO code currency
  CONDINCOMP                       :   "", // CHAR (1) Condition for inter-company billing
  CONDCONFIG                       :   "", // CHAR (1) Condition for configuration
  CONDCHAMAN                       :   "", // CHAR (1) Condition changed manually
  COND_NO                          :   "", // CHAR (10) Condition record number
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  VARCOND                          :   "", // CHAR (26) Variant condition
  ACCOUNTKEY                       :   "", // CHAR (3) Account key
  ACCOUNT_KE                       :   "", // CHAR (3) Account key - accruals / provisions
  WT_WITHCD                        :   "", // CHAR (2) Withholding tax code
  STRUCTCOND                       :   "", // CHAR (1) Structure condition
  FACTCONBAS                       : "0.0", // FLTP (16.16) Factor for condition basis (period)
  CONDCOINHD                       :   "", // NUMC (2) Condition counter for (header conditions)
};

// BAPIINCOMP  
const ORDER_INCOMPLETE= [];

// prettier-ignore
const ORDER_INCOMPLETE= {
  DOC_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  PARTN_ROLE                       :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  TABLE_NAME                       :   "", // CHAR (30) Table for documents in sales and distribution
  FIELD_NAME                       :   "", // CHAR (30) Document field name
  FIELD_TEXT                       :   "", // CHAR (40) Long Field Label
};

// BAPIITEMEX  Item Data Output
const ORDER_ITEMS_OUT= [];

// prettier-ignore
const ORDER_ITEMS_OUT= {
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item SU3=APO
  PO_ITM_NO                        :   "", // CHAR (6) ALPHA=ALPHA Item Number of the Underlying Purchase Order
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  MAT_ENTRD                        :   "", // CHAR (18) ALPHA=MATN1 Material entered SU3=MAT
  SHORT_TEXT                       :   "", // CHAR (40) Short text for sales order item
  NET_VALUE                        :   "", // NUMC (15) Net value as num. field - 00000901 equals 9,01
  CURRENCY                         :   "", // CUKY (5) SD document currency SU3=FWS
  SUBTOTAL_1                       :   "", // NUMC (15) Subtotal-1 as num. field - 00000901 equals 9,01
  SUBTOTAL_2                       :   "", // NUMC (15) Subtotal-2 as num. field - 00000901 equals 9,01
  SUBTOTAL_3                       :   "", // NUMC (15) Subtotal-3 as num. field - 00000901 equals 9,01
  SUBTOTAL_4                       :   "", // NUMC (15) Subtotal-4 as num. field - 00000901 equals 9,01
  SUBTOTAL_5                       :   "", // NUMC (15) Subtotal-5 as num. field - 00000901 equals 9,01
  SUBTOTAL_6                       :   "", // NUMC (15) Subtotal-6 as num. field - 00000901 equals 9,01
  SALES_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Sales unit
  QTY_REQ_DT                       :   "", // NUMC (13) Qty for required date num. field - 00009001 equals 9,001
  DLV_DATE                         :   "", // DATS (8) Schedule line date
  REPL_TIME                        :   "", // NUMC (3) Total replenishment lead time in days
  CONFIGURED                       :   "", // CHAR (1) Configurable Material
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
  PURCH_DATE                       :   "", // DATS (8) Customer purchase order date
  PO_METHOD                        :   "", // CHAR (4) Customer purchase order type
  REF_1                            :   "", // CHAR (12) Your Reference
  PURCH_NO_S                       :   "", // CHAR (35) Ship-to Party's Purchase Order Number
  PO_DAT_S                         :   "", // DATS (8) Ship-to party's PO date
  PO_METH_S                        :   "", // CHAR (4) Ship-to party purchase order type
  REF_1_S                          :   "", // CHAR (12) Ship-to party character
  PO_ITM_NO_S                      :   "", // CHAR (6) ALPHA=ALPHA Item Number of the Underlying Purchase Order
  NET_VALUE1                       :  "0", // DEC (23.4) Net value
  CURR_ISO                         :   "", // CHAR (3) ISO code currency
  S_UNIT_ISO                       :   "", // CHAR (3) Sales unit in ISO code
  REQ_QTY                          : "0.0", // QUAN (15.3) Cumulative order quantity in sales units
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  TX_DOC_CUR                       :  "0", // DEC (23.4) Tax Amount in Document Currency
  MAT_EXT                          :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MAT_GUID                         :   "", // CHAR (32) External GUID for MATERIAL Field
  MAT_VERS                         :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MAT_E_EXT                        :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MAT_ENTRD Field
  MAT_E_GUID                       :   "", // CHAR (32) External GUID for MAT_ENTRD Field
  MAT_E_VERS                       :   "", // CHAR (10) ALPHA=MATNW Version Number for MAT_ENTRD Field
  TARGET_QTY                       : "0.0", // QUAN (13.3) Target quantity in sales units
  TARGET_QU                        :   "", // UNIT (3) ALPHA=CUNIT Target quantity UoM
  T_UNIT_ISO                       :   "", // CHAR (3) Target quantity unit of measure in ISO code
  ITEM_CATEG                       :   "", // CHAR (4) Sales document item category
  SHIP_POINT                       :   "", // CHAR (4) Shipping Point/Receiving Point SU3=VST
  HG_LV_ITEM                       :   "", // NUMC (6) Higher-level item in bill of material structures
  CUST_MAT                         :   "", // CHAR (35) Material belonging to the customer
  PART_DLV                         :   "", // CHAR (1) Partial delivery at item level
  REASON_REJ                       :   "", // CHAR (2) Reason for rejection of quotations and sales orders
  BILL_BLOCK                       :   "", // CHAR (2) Block
  STGE_LOC                         :   "", // CHAR (4) Storage location SU3=LAG
  PROD_HIER                        :   "", // CHAR (18) Product hierarchy SU3=VPR
  MATL_GROUP                       :   "", // CHAR (9) Material Group SU3=MKL
  SUBTOTAL1                        :  "0", // DEC (23.4) Condition subtotal 1 from calculation schema
  SUBTOTAL2                        :  "0", // DEC (23.4) Condition subtotal 2 from calculation schema
  SUBTOTAL3                        :  "0", // DEC (23.4) Condition subtotal 3 from calculation schema
  SUBTOTAL4                        :  "0", // DEC (23.4) Condition subtotal 4 from calculation schema
  SUBTOTAL5                        :  "0", // DEC (23.4) Condition subtotal 5 from calculation schema
  SUBTOTAL6                        :  "0", // DEC (23.4) Condition subtotal 6 from calculation schema
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  MAT_ENTRD_LONG                   :   "", // CHAR (40) Material entered SU3=MAT
  REQ_SEGMENT                      :   "", // CHAR (16) Requirement Segment SU3=SGT_R
};

// BAPISDHEDU  Schedule line data output
const ORDER_SCHEDULE_EX= [];

// prettier-ignore
const ORDER_SCHEDULE_EX= {
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

// BAPISCHDL  Schedule Line Data Input
const ORDER_SCHEDULE_IN= [];

// prettier-ignore
const ORDER_SCHEDULE_IN= {
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item SU3=APO
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  REQ_DATE                         :   "", // DATS (8) Schedule line date
  DATE_TYPE                        :   "", // CHAR (1) Date type (day, week, month, interval)
  REQ_TIME                         :   "", // TIMS (6) Arrival time
  REQ_QTY                          : "0.0", // QUAN (13.3) Order quantity in sales units
  REQ_DLV_BL                       :   "", // CHAR (2) Schedule line blocked for delivery
  SCHED_TYPE                       :   "", // CHAR (2) Schedule line category
  TP_DATE                          :   "", // DATS (8) Transportation Planning Date
  MS_DATE                          :   "", // DATS (8) Material Availability Date
  LOAD_DATE                        :   "", // DATS (8) Loading Date
  GI_DATE                          :   "", // DATS (8) Goods Issue Date
  TP_TIME                          :   "", // TIMS (6) Transp. Planning Time (Local, Relating to a Shipping Point)
  MS_TIME                          :   "", // TIMS (6) Material Staging Time (Local, Relating to a Plant)
  LOAD_TIME                        :   "", // TIMS (6) Loading Time (Local Time Relating to a Shipping Point)
  GI_TIME                          :   "", // TIMS (6) Time of Goods Issue (Local, Relating to a Plant)
  REFOBJTYPE                       :   "", // CHAR (10) Object Type SU3=OBJ
  REFOBJKEY                        :   "", // CHAR (70) Object key
  REFLOGSYS                        :   "", // CHAR (10) ALPHA=ALPHA Logical system
  DLV_DATE                         :   "", // DATS (8) Schedule line date
  DLV_TIME                         :   "", // TIMS (6) Arrival time
  REL_TYPE                         :   "", // CHAR (1) Rel. Type
  PLAN_SCHED_TYPE                  :   "", // CHAR (1) Schedule line type EDI
};

// BAPIADDR1  BAPI Reference Structure for Addresses (Org./Company)
const PARTNERADDRESSES= [];

// prettier-ignore
const PARTNERADDRESSES= {
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
  STREET                           :   "", // CHAR (40) Street
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
  HOME_CITY                        :   "", // CHAR (40) City (different from postal city)
  HOMECITYNO                       :   "", // CHAR (12) ALPHA=ALPHA Different city for city/street file
  PCODE1_EXT                       :   "", // CHAR (10) (Not Supported)City Postal Code Extension, e.g. ZIP+4+2 Code
  PCODE2_EXT                       :   "", // CHAR (10) (Not Supported) PO Box Postal Code Extension
  PCODE3_EXT                       :   "", // CHAR (10) (Not Supported) Major Customer Postal Code Extension
  PO_W_O_NO                        :   "", // CHAR (1) Flag: PO Box Without Number
  PO_BOX_REG                       :   "", // CHAR (3) Region for PO Box (Country, State, Province, ...)
  POBOX_CTRY                       :   "", // CHAR (3) PO box country
  PO_CTRYISO                       :   "", // CHAR (2) Country ISO code
  HOMEPAGE                         :   "", // CHAR (132) URI, e.g. Homepage or ftp Address
  DONT_USE_S                       :   "", // CHAR (4) Street Address Undeliverable Flag
  DONT_USE_P                       :   "", // CHAR (4) PO Box Address Undeliverable Flag
  HOUSE_NO3                        :   "", // CHAR (10) (Not supported) House Number Range
  LANGU_CR                         :   "", // LANG (1) ALPHA=ISOLA Address record creation original language
  LANGUCRISO                       :   "", // CHAR (2) 2-Character SAP Language Code
  PO_BOX_LOBBY                     :   "", // CHAR (40) PO Box Lobby
  DELI_SERV_TYPE                   :   "", // CHAR (4) Type of Delivery Service
  DELI_SERV_NUMBER                 :   "", // CHAR (10) Number of Delivery Service
  URI_TYPE                         :   "", // CHAR (3) URI type flag
  COUNTY_CODE                      :   "", // CHAR (8) ALPHA=ALPHA County code for county
  COUNTY                           :   "", // CHAR (40) County
  TOWNSHIP_CODE                    :   "", // CHAR (8) ALPHA=ALPHA Township code for Township
  TOWNSHIP                         :   "", // CHAR (40) Township
};


//
// EXPORT PARAMETERS
//

// BAPIPAYER  Payer

// prettier-ignore
const BILLING_PARTY= {
  PAYER                            :   "", // CHAR (10) ALPHA=ALPHA Payer
  NAME                             :   "", // CHAR (35) Name 1
  STREET                           :   "", // CHAR (30) Street and House Number
  PO_BOX                           :   "", // CHAR (10) PO Box
  POSTL_CODE                       :   "", // CHAR (10) Postal Code
  POBX_PCD                         :   "", // CHAR (10) P.O. Box Postal Code
  CITY                             :   "", // CHAR (25) City
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  COUNTRY                          :   "", // CHAR (3) Country Key SU3=LND
  TELEPHONE                        :   "", // CHAR (16) First telephone number
  C_CTR_AREA                       :   "", // CHAR (4) Credit control area SU3=KKB
  CRED_ACCNT                       :   "", // CHAR (10) ALPHA=ALPHA Customer's account number with credit limit reference
  CRED_LIMIT                       : "0.0", // CURR (15.2) Customer's credit limit
  ORDER_VALS                       : "0.0", // CURR (15.2) Total of the sales values for the credit limit check
  RCVBL_VALS                       : "0.0", // CURR (15.2) Total receivables (for credit limit check)
  CRED_LIAB                        : "0.0", // CURR (15.2) Relevant special liabilities for credit limit check
  CURRENCY                         :   "", // CUKY (5) Currency in which the credit limit is to be managed
  MN_INVOICE                       :   "", // CHAR (1) Manual invoice maintenance
  BILL_SCHED                       :   "", // CHAR (2) Invoice dates (calendar identification)
  LIST_SCHED                       :   "", // CHAR (2) Invoice list schedule (calendar identification)
  VAL_LIMIT                        : "0.0", // CURR (13.2) Value limit for cost estimate (inactive)
  ACCNT_ASGN                       :   "", // CHAR (2) Account assignment group for this customer
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  ADD_VAL_DY                       :   "", // NUMC (2) Additional value days
  FIX_VAL_DY                       :   "", // DATS (8) Fixed value date
  PROD_PROP                        :   "", // CHAR (10) ALPHA=ALPHA Item proposal
  BILL_BLOCK                       :   "", // CHAR (2) Billing block for customer (sales and distribution)
  ORDER_BLCK                       :   "", // CHAR (2) Customer blocked for orders
  VAT_REG_NO                       :   "", // CHAR (20) VAT Registration Number
  VAT_CNTRY                        :   "", // CHAR (3) Country of Sales Tax ID Number SU3=LND
  TAX_CLASS1                       :   "", // CHAR (1) Tax classification 1 for customer
  TAX_CLASS2                       :   "", // CHAR (1) Tax classification 2 for customer
  TAX_CLASS3                       :   "", // CHAR (1) Tax classification 3 for customer
  TAX_CLASS4                       :   "", // CHAR (1) Tax Classification 4 Customer
  TAX_CLASS5                       :   "", // CHAR (1) Tax classification 5 for customer
  TAX_CLASS6                       :   "", // CHAR (1) Tax classification 6 for customer
  TAX_CLASS7                       :   "", // CHAR (1) Tax classification 7 for customer
  TAX_CLASS8                       :   "", // CHAR (1) Tax classification 8 for customer
  TAX_CLASS9                       :   "", // CHAR (1) Tax classification 9 for customer
  REBATE_REL                       :   "", // CHAR (1) Indicator: Customer Is Rebate-Relevant
  REBATE_FRM                       :   "", // DATS (8) Start of validity per.for the rebate index for the customer
  CRED_GROUP                       :   "", // CHAR (4) Customer Credit Group
  REPR_GROUP                       :   "", // CHAR (3) Credit representative group for credit management SU3=KBG
  RISK_CATEG                       :   "", // CHAR (3) Credit management: Risk category
  TRADE_ID                         :   "", // CHAR (6) ALPHA=ALPHA Company ID of trading partner SU3=PGS
};

// BAPIRETURN  Error Text

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

// BAPISHIPTO  Ship-To Party

// prettier-ignore
const SHIP_TO_PARTY= {
  SHIP_TO                          :   "", // CHAR (10) ALPHA=ALPHA Ship-To Party
  NAME                             :   "", // CHAR (35) Name 1
  STREET                           :   "", // CHAR (30) Street and House Number
  PO_BOX                           :   "", // CHAR (10) PO Box
  POSTL_CODE                       :   "", // CHAR (10) Postal Code
  POBX_PCD                         :   "", // CHAR (10) P.O. Box Postal Code
  CITY                             :   "", // CHAR (25) City
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  DEST_CNTRY                       :   "", // CHAR (3) Country of Destination SU3=VLL
  TRNSP_ZONE                       :   "", // CHAR (10) Transportation zone to or from which the goods are delivered
  TRAIN_STAT                       :   "", // CHAR (25) Train station
  EXPR_STAT                        :   "", // CHAR (25) Express train station
  TELEPHONE                        :   "", // CHAR (16) First telephone number
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  FAC_CALEND                       :   "", // CHAR (2) Customer factory calendar
  RECV_HOURS                       :   "", // CHAR (3) Goods receiving hours ID (default value)
  MO_AM_FROM                       :   "", // TIMS (6) Goods receipt times: Monday morning from ...
  MO_AM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Monday morning until ...
  MO_PM_FROM                       :   "", // TIMS (6) Goods receiving hours: Monday afternoon from ...
  MO_PM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Monday afternoon until ...
  TU_AM_FROM                       :   "", // TIMS (6) Goods receiving hours: Tuesday morning from...
  TU_AM_UNTL                       :   "", // TIMS (6) Goods receipt times: Tuesday morning until ...
  TU_PM_FROM                       :   "", // TIMS (6) Goods receiving hours: Tuesday afternoon from ...
  TU_PM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Tuesday afternoon until ...
  WE_AM_FROM                       :   "", // TIMS (6) Goods receiving hours: Wednesday morning from ...
  WR_AM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Wednesday morning until ...
  WE_PM_FROM                       :   "", // TIMS (6) Goods receiving hours: Wednesday afternoon from ...
  WE_PM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Wednesday afternoon until ...
  TH_AM_FROM                       :   "", // TIMS (6) Goods receiving hours: Thursday morning from ...
  TH_AM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Thursday morning until ...
  TH_PM_FROM                       :   "", // TIMS (6) Goods receiving hours: Thursday afternoon from ...
  TH_PM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Thursday afternoon until...
  FR_AM_FROM                       :   "", // TIMS (6) Goods receiving hours: Friday morning from ...
  FR_AM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Friday morning until ...
  FR_PM_FROM                       :   "", // TIMS (6) Goods receiving hours: Friday afternoon from ...
  FR_PM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Friday afternoon until ...
  SA_AM_FROM                       :   "", // TIMS (6) Goods receiving hours: Saturday morning from ...
  SA_AM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Saturday morning from ...
  SA_PM_FROM                       :   "", // TIMS (6) Goods receiving hours: Saturday afternoon from ...
  SA_PM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Saturday afternoon until ...
  SU_AM_FROM                       :   "", // TIMS (6) Goods receiving hours: Sunday morning from ...
  SU_AM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Sunday morning until ...
  SU_PM_FROM                       :   "", // TIMS (6) Goods receiving hours: Sunday afternoon from ...
  SU_PM_UNTL                       :   "", // TIMS (6) Goods receiving hours: Sunday afternoon until ...
  VAT_REG_NO                       :   "", // CHAR (20) VAT Registration Number
  TAX_CLASS1                       :   "", // CHAR (1) Tax classification 1 for customer
  TAX_CLASS2                       :   "", // CHAR (1) Tax classification 2 for customer
  TAX_CLASS3                       :   "", // CHAR (1) Tax classification 3 for customer
  TAX_CLASS4                       :   "", // CHAR (1) Tax Classification 4 Customer
  TAX_CLASS5                       :   "", // CHAR (1) Tax classification 5 for customer
  TAX_CLASS6                       :   "", // CHAR (1) Tax classification 6 for customer
  TAX_CLASS7                       :   "", // CHAR (1) Tax classification 7 for customer
  TAX_CLASS8                       :   "", // CHAR (1) Tax classification 8 for customer
  TAX_CLASS9                       :   "", // CHAR (1) Tax classification 9 for customer
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  COUNTY_CDE                       :   "", // CHAR (3) County Code
  CITY_CODE                        :   "", // CHAR (4) City Code
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  CTRDATA_OK                       :   "", // CHAR (1) Control data sucessfully read from cust. master country seg.
  DLV_PLANT                        :   "", // CHAR (4) Delivering Plant
  DLV_BLOCK                        :   "", // CHAR (2) Customer delivery block (sales area)
  ORDER_BLCK                       :   "", // CHAR (2) Customer blocked for orders
  PROD_PROP                        :   "", // CHAR (10) ALPHA=ALPHA Item proposal
  SHIP_COND                        :   "", // CHAR (2) Shipping conditions
  ACC_1_TIME                       :   "", // CHAR (1) Indicator: Is the account a one-time account?
  ACCNT_GRP                        :   "", // CHAR (4) Customer Account Group SU3=KGD
  DESC_PARTN                       :   "", // CHAR (30) Customer description of partner (plant, storage location) SU3=KNREF
  FY_VARIANT                       :   "", // CHAR (2) Fiscal Year Variant
  PROD_ATTR1                       :   "", // CHAR (1) ID for product attribute 1
  PROD_ATTR2                       :   "", // CHAR (1) ID for product attribute 2
  PROD_ATTR3                       :   "", // CHAR (1) ID for product attribute 3
  PROD_ATTR4                       :   "", // CHAR (1) ID for product attribute 4
  PROD_ATTR5                       :   "", // CHAR (1) ID for product attribute 5
  PROD_ATTR6                       :   "", // CHAR (1) ID for product attribute 6
  PROD_ATTR7                       :   "", // CHAR (1) ID for product attribute 7
  PROD_ATTR8                       :   "", // CHAR (1) ID for product attribute 8
  PROD_ATTR9                       :   "", // CHAR (1) ID for product attribute 9
  PROD_ATTRA                       :   "", // CHAR (1) ID for product attribute 10
};

// BAPISOLDTO  Sold-to party

// prettier-ignore
const SOLD_TO_PARTY= {
  SOLD_TO                          :   "", // CHAR (10) ALPHA=ALPHA Sold-to party SU3=VAG
  NAME                             :   "", // CHAR (35) Name 1
  STREET                           :   "", // CHAR (30) Street and House Number
  PO_BOX                           :   "", // CHAR (10) PO Box
  POSTL_CODE                       :   "", // CHAR (10) Postal Code
  POBX_PCD                         :   "", // CHAR (10) P.O. Box Postal Code
  CITY                             :   "", // CHAR (25) City
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  COUNTRY                          :   "", // CHAR (3) Country Key SU3=LND
  TELEPHONE                        :   "", // CHAR (16) First telephone number
  STAT_GROUP                       :   "", // CHAR (1) Statistics group
  ORDER_BLCK                       :   "", // CHAR (2) Customer blocked for orders
  PRC_PROCED                       :   "", // CHAR (1) Pricing procedure assigned to this customer
  CUST_GROUP                       :   "", // CHAR (2) Customer group SU3=VKD
  SALES_DIST                       :   "", // CHAR (6) Sales district SU3=BZI
  PRICE_GRP                        :   "", // CHAR (2) Price group (customer) SU3=VKA
  PRICE_LIST                       :   "", // CHAR (2) Price list type SU3=VPL
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  COMPL_DLV                        :   "", // CHAR (1) Complete delivery defined for each sales order?
  MAX_PL_DLV                       :  "0", // DEC (1) Maximum Number of Partial Deliveries Allowed Per Item
  ORDER_COMB                       :   "", // CHAR (1) Order Combination Indicator
  BTCH_SPLIT                       :   "", // CHAR (1) Batch split allowed
  DLV_PRIO                         :   "", // NUMC (2) Delivery Priority
  CURRENCY                         :   "", // CUKY (5) SD document currency SU3=FWS
  EXCHG_RATE                       :   "", // CHAR (4) Exchange Rate Type SU3=KUT
  SHIP_COND                        :   "", // CHAR (2) Shipping conditions
  PART_DLV                         :   "", // CHAR (1) Partial delivery at item level
  ORDER_PROB                       :   "", // NUMC (3) Order probability of the item
  DLV_BLOCK                        :   "", // CHAR (2) Customer delivery block (sales area)
  PROD_PROP                        :   "", // CHAR (10) ALPHA=ALPHA Item proposal
  ACC_1_TIME                       :   "", // CHAR (1) Indicator: Is the account a one-time account?
  SALES_OFF                        :   "", // CHAR (4) Sales office SU3=VKB
  SALES_GRP                        :   "", // CHAR (3) Sales group SU3=VKG
  VAT_REG_NO                       :   "", // CHAR (20) VAT Registration Number
  TAX_CLASS1                       :   "", // CHAR (1) Tax classification 1 for customer
  TAX_CLASS2                       :   "", // CHAR (1) Tax classification 2 for customer
  TAX_CLASS3                       :   "", // CHAR (1) Tax classification 3 for customer
  TAX_CLASS4                       :   "", // CHAR (1) Tax Classification 4 Customer
  TAX_CLASS5                       :   "", // CHAR (1) Tax classification 5 for customer
  TAX_CLASS6                       :   "", // CHAR (1) Tax classification 6 for customer
  TAX_CLASS7                       :   "", // CHAR (1) Tax classification 7 for customer
  TAX_CLASS8                       :   "", // CHAR (1) Tax classification 8 for customer
  TAX_CLASS9                       :   "", // CHAR (1) Tax classification 9 for customer
  COMPANY_ID                       :   "", // CHAR (6) ALPHA=ALPHA Company ID
  INCOTERMSV                       :   "", // CHAR (4) Incoterms Version
  INCOTERMS2L                      :   "", // CHAR (70) Incoterms Location 1
  INCOTERMS3L                      :   "", // CHAR (70) Incoterms Location 2
};
