//
// BAPI_PO_GETDETAIL var: 11  struct: 2  table: 15  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

PURCHASEORDER                 :           "", // CHAR (10) ALPHA=ALPHA Purchase Order Number SU3=BES
// ACCOUNT_ASSIGNMENT         :        SPACE, // CHAR (1) Also Provide Account Assignment Data
// CONFIRMATIONS              :        SPACE, // CHAR (1) Also Provide Confirmations
// EXTENSIONS                 :        SPACE, // CHAR (1) Also Provide Customer's Own Fields
// HEADER_TEXTS               :        SPACE, // CHAR (1) Also Provide Header Texts
// HISTORY                    :        SPACE, // CHAR (1) Also Provide PO History
// ITEM_TEXTS                 :        SPACE, // CHAR (1) Also Provide Item Texts
// ITEMS                      :          'X', // CHAR (1) Also Provide Item Data
// SCHEDULES                  :        SPACE, // CHAR (1) Also Provide Schedule Lines
// SERVICE_TEXTS              :        SPACE, // CHAR (1) Also Provide Service Texts
// SERVICES                   :        SPACE, // CHAR (1) Also Provide Services and Limits

// TABLE PARAMETERS

// EXTENSIONOUT               :           [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
// PO_HEADER_TEXTS            :           [], // BAPIEKKOTX PO Header Texts
// PO_ITEM_ACCOUNT_ASSIGNMENT :           [], // BAPIEKKN Account Assignment Data for Item
// PO_ITEM_CONFIRMATIONS      :           [], // BAPIEKES Confirmations for Item
// PO_ITEM_CONTRACT_LIMITS    :           [], // BAPIESUC Limits with Contract Reference
// PO_ITEM_HISTORY            :           [], // BAPIEKBE PO History for Item
// PO_ITEM_HISTORY_TOTALS     :           [], // BAPIEKBES PO History for Item: Totals
// PO_ITEM_LIMITS             :           [], // BAPIESUH Limits
// PO_ITEM_SCHEDULES          :           [], // BAPIEKET Schedule Lines for Item
// PO_ITEM_SERVICES           :           [], // BAPIESLL Services
// PO_ITEM_SRV_ACCASS_VALUES  :           [], // BAPIESKL Value/Link to Service Account Assignment
// PO_ITEM_TEXTS              :           [], // BAPIEKPOTX Texts for Item
// PO_ITEMS                   :           [], // BAPIEKPO Purchase Order Items
// PO_SERVICES_TEXTS          :           [], // BAPIESLLTX Long Texts for Service Line
// RETURN                     :           [], // BAPIRETURN Return Messages

// EXPORT PARAMETERS

// PO_ADDRESS                 :           {}, // BAPIADDRESS Ordering Address Data
// PO_HEADER                  :           {}, // BAPIEKKOL PO Header Data
};

const result = await client.call("BAPI_PO_GETDETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIPAREX  Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
const EXTENSIONOUT= [];

// prettier-ignore
const EXTENSIONOUT= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIEKKOTX  PO Header Texts
const PO_HEADER_TEXTS= [];

// prettier-ignore
const PO_HEADER_TEXTS= {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  TEXT_ID                          :   "", // CHAR (4) Text ID
  TEXT_FORM                        :   "", // CHAR (2) Tag column
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};

// BAPIEKKN  Account Assignment Data for Item
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

// BAPIEKES  Confirmations for Item
const PO_ITEM_CONFIRMATIONS= [];

// prettier-ignore
const PO_ITEM_CONFIRMATIONS= {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  CONF_SER                         :   "", // NUMC (4) Sequential Number of Vendor Confirmation
  CONF_TYPE                        :   "", // CHAR (2) Confirmation Category
  CONF_NAME                        :   "", // CHAR (20) Confirmation Category: Description
  DEL_DATCAT                       :   "", // CHAR (1) Date category of delivery date in vendor confirmation
  DEL_DATCAT_EXT                   :   "", // CHAR (1) Category of delivery date
  DELIV_DATE                       :   "", // DATS (8) Delivery Date of Vendor Confirmation
  DELIV_TIME                       :   "", // TIMS (6) Delivery Date Time-Spot in Vendor Confirmation
  QUANTITY                         : "0.0", // QUAN (13.3) Quantity as Per Vendor Confirmation
  DELETE_IND                       :   "", // CHAR (1) Vendor confirmation deletion indicator
  DISPO_REL                        :   "", // CHAR (1) Indicator: Confirmation is Relevant to Materials Planning
  RECEIPT_REL                      :   "", // CHAR (1) Indicator: Confirmation is GR-Relevant
  EXT_DOC                          :   "", // CHAR (20) External Document Number of Vendor Confirmation
  DELIV_NUMB                       :   "", // CHAR (10) ALPHA=ALPHA Delivery SU3=VL
  DELIV_ITEM                       :   "", // NUMC (6) Delivery Item
  EXT_DOC_LONG                     :   "", // CHAR (35) Reference Document Number (for Dependencies see Long Text)
  HANDOVERDATE                     :   "", // DATS (8) Handover Date at the Handover Location
  HANDOVERTIME                     :   "", // TIMS (6) Handover time at the handover location
};

// BAPIESUC  Limits with Contract Reference
const PO_ITEM_CONTRACT_LIMITS= [];

// prettier-ignore
const PO_ITEM_CONTRACT_LIMITS= {
  PCKG_NO                          :   "", // NUMC (10) Package number
  LINE_NO                          :   "", // NUMC (10) Internal line number for limits
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
  CON_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Contract number
  CON_ITEM                         :   "", // NUMC (5) Item number, contract
  LIMIT                            :  "0", // DEC (23.4) Overall limit
  NO_LIMIT                         :   "", // CHAR (1) No Limit
  ACT_VALUE                        :  "0", // DEC (23.4) Total value of unplanned entered services
  PRICE_CHG                        :   "", // CHAR (1) Price Change in Entry Sheet
  SHORT_TEXT                       :   "", // CHAR (40) Short Text 1
  KTEXT1                           :   "", // CHAR (40) Short Text 1
  SUB_PACKNO                       :   "", // NUMC (10) Package number
};

// BAPIEKBE  PO History for Item
const PO_ITEM_HISTORY= [];

// prettier-ignore
const PO_ITEM_HISTORY= {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  PROCESS_ID                       :   "", // CHAR (1) Transaction/event type, purchase order history
  DOC_YEAR                         :   "", // NUMC (4) ALPHA=GJAHR Material Document Year SU3=MJA
  MAT_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Number of Material Document SU3=MBN
  MATDOC_ITM                       :   "", // NUMC (4) Item in Material Document SU3=POS
  HIST_TYPE                        :   "", // CHAR (1) Purchase Order History Category
  MOVE_TYPE                        :   "", // CHAR (3) Movement type (inventory management) SU3=BWA
  PSTNG_DATE                       :   "", // DATS (8) Posting Date in the Document
  QUANTITY                         : "0.0", // QUAN (13.3) Quantity
  VAL_LOCCUR                       :  "0", // DEC (23.4) Amount in local currency
  VAL_FORCUR                       :  "0", // DEC (23.4) Amount in document currency
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CL_VAL_LOC                       :  "0", // DEC (23.4) GR/IR account clearing value in local currency
  BLOCKED_QY                       : "0.0", // QUAN (13.3) Goods Receipt Blocked Stock in Order Unit
  BL_QTY                           : "0.0", // QUAN (13.3) Quantity in GR blocked stock in order price unit
  DB_CR_IND                        :   "", // CHAR (1) Debit/Credit Indicator
  VAL_TYPE                         :   "", // CHAR (10) Valuation type SU3=BWT
  NO_MORE_GR                       :   "", // CHAR (1) "Delivery Completed" Indicator
  REF_DOC_NO                       :   "", // CHAR (16) Reference Document Number
  REF_DOC_YR                       :   "", // NUMC (4) ALPHA=GJAHR Fiscal Year of a Reference Document
  REF_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document No. of a Reference Document
  REF_DOC_IT                       :   "", // NUMC (4) Item of a Reference Document
  MOVE_REAS                        :   "", // NUMC (4) Reason for Movement
  ENTRY_DATE                       :   "", // DATS (8) Day On Which Accounting Document Was Entered
  ENTRY_TIME                       :   "", // TIMS (6) Time of Entry
  IVVAL_LOC                        :  "0", // DEC (23.4) Entered invoice value in local currency
  IVVAL_FOR                        :  "0", // DEC (23.4) Entered invoice value in foreign currency
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  CONF_SER                         :   "", // NUMC (4) Sequential Number of Vendor Confirmation
  CONDITION                        :   "", // CHAR (10) Number of the document condition
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  DELIV_QTY                        : "0.0", // QUAN (13.3) Quantity in Unit of Measure from Delivery Note
  DELIV_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Unit of Measure From Delivery Note
  PUR_MAT                          :   "", // CHAR (18) ALPHA=MATN1 Material number SU3=MAT
  LOC_CURR                         :   "", // CUKY (5) Local currency key
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  DOC_DATE                         :   "", // DATS (8) Document Date in Document
  CURRENCY_ISO                     :   "", // CHAR (3) ISO Currency Code
  LOC_CURR_ISO                     :   "", // CHAR (3) ISO code for local currency
  DELIV_UNIT_ISO                   :   "", // CHAR (3) ISO code for unit of measure of delivery note
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  PUR_MAT_EXTERNAL                 :   "", // CHAR (40) ALPHA=MATNL Long Material Number for PUR_MAT Field
  PUR_MAT_GUID                     :   "", // CHAR (32) External GUID for PUR_MAT Field
  PUR_MAT_VERSION                  :   "", // CHAR (10) ALPHA=MATNW Version Number for PUR_MAT Field
  REF_DOC_NO_LONG                  :   "", // CHAR (35) Reference Document Number (for Dependencies see Long Text)
  STK_SEGMENT                      :   "", // CHAR (16) Stock Segment SU3=SGT_S
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  PUR_MAT_LONG                     :   "", // CHAR (40) Material Number (40 Characters, Technical Requirement)
};

// BAPIEKBES  PO History for Item: Totals
const PO_ITEM_HISTORY_TOTALS= [];

// prettier-ignore
const PO_ITEM_HISTORY_TOTALS= {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  WITHDR_QTY                       : "0.0", // QUAN (13.3) Issued Quantity
  BLOCKED_QY                       : "0.0", // QUAN (13.3) Goods Receipt Blocked Stock in Order Unit
  BL_QTY                           : "0.0", // QUAN (13.3) Quantity in GR blocked stock in order price unit
  DELIV_QTY                        : "0.0", // QUAN (13.3) Quantity of Goods Received
  PO_PR_QNT                        : "0.0", // QUAN (13.3) Quantity in Purchase Order Price Unit
  VAL_GR_LOC                       :  "0", // DEC (23.4) Value of goods received in local currency
  VAL_GR_FOR                       :  "0", // DEC (23.4) Value of goods received in foreign currency
  IV_QTY                           : "0.0", // QUAN (13.3) Quantity invoiced
  IV_QTY_PO                        : "0.0", // QUAN (13.3) Invoice receipt quantity in order price unit
  VAL_IV_LOC                       :  "0", // DEC (23.4) Invoice amount in local currency
  VAL_IV_FOR                       :  "0", // DEC (23.4) Invoice amount in foreign currency
  CL_VAL_LOC                       :  "0", // DEC (23.4) GR/IR account clearing value in local currency
  CL_VAL_FOR                       :  "0", // DEC (23.4) Clearing value on GR/IR account in foreign currency
  DOP_VL_LOC                       :  "0", // DEC (23.4) Total Down Payments in Local Currency
  IVVAL_LOC                        :  "0", // DEC (23.4) Entered invoice value in local currency
  IVVAL_FOR                        :  "0", // DEC (23.4) Entered invoice value in foreign currency
  DL_QTY_TRSP                      : "0.0", // QUAN (13.3) Quantity Delivered (Stock Transfer)
  BL_QTY_TOTAL                     : "0.0", // QUAN (13.3) GR blocked stock in order unit (absolute amount)
  DL_QTY_TOTAL                     : "0.0", // QUAN (13.3) Goods receipt quantity: Absolute amount
  IV_QTY_TOTAL                     : "0.0", // QUAN (13.3) Invoice receipt quantity: Absolute amount
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO Currency Code
};

// BAPIESUH  Limits
const PO_ITEM_LIMITS= [];

// prettier-ignore
const PO_ITEM_LIMITS= {
  PCKG_NO                          :   "", // NUMC (10) Package number
  LIMIT                            :  "0", // DEC (23.4) Overall limit
  NO_LIMIT                         :   "", // CHAR (1) No Limit
  EXP_VALUE                        :  "0", // DEC (23.4) Expected value
  ACT_VALUE                        :  "0", // DEC (23.4) Total value of unplanned entered services
  SSC_EXIST                        :   "", // CHAR (1) Limits exist for service types
  CON_EXIST                        :   "", // CHAR (1) Limit on contract items exists
  TMP_EXIST                        :   "", // CHAR (1) Limit on service packages exists
  PRICE_CHG                        :   "", // CHAR (1) Price Change in Entry Sheet
  FREE_LIMIT                       :  "0", // DEC (23.4) Free limit
  NO_FRLIMIT                       :   "", // CHAR (1) No Limit
  FREACT_VAL                       :  "0", // DEC (23.4) Actual value (from other sources)
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURR_ISOCD                       :   "", // CHAR (3) ISO currency code
  SERV_TYPE                        :   "", // CHAR (3) Short Description of Service Type SU3=LBR
  EDITION                          :   "", // NUMC (4) Edition of Service Type SU3=AGB
  SSC_LIMIT                        :  "0", // DEC (23.4) Value limits on service types
  SSC_NOLIM                        :   "", // CHAR (1) No limit on standard service type
  SSC_ACTVAL                       :  "0", // DEC (23.4) "Actual" value on service type limit
  SSC_PRSCHG                       :   "", // CHAR (1) Price Change in Entry Sheet
  SSC_PERC                         :  "0", // DEC (3.1) Percentage for price determination
  TMP_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Number of a Set of Model Service Specifications SU3=MSP
  TMP_LIMIT                        :  "0", // DEC (23.4) Limits on model service specifications
  TMP_NOLIM                        :   "", // CHAR (1) No Limit on Model Specifications
  TMP_ACTVAL                       :  "0", // DEC (23.4) "Actual" value on model specifications limits
  TMP_PRSCHG                       :   "", // CHAR (1) Price Change in Entry Sheet
  TMP_PERC                         :  "0", // DEC (3.1) Percentage for Price Determination
  CONT_PERC                        :  "0", // DEC (3.1) Percentage for price determination
};

// BAPIEKET  Schedule Lines for Item
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

// BAPIESLL  Services
const PO_ITEM_SERVICES= [];

// prettier-ignore
const PO_ITEM_SERVICES= {
  PCKG_NO                          :   "", // NUMC (10) Package number
  LINE_NO                          :   "", // NUMC (10) Internal line number
  EXT_LINE                         :   "", // NUMC (10) Line Number
  OUTL_LEVEL                       :    0, // INT1 (3) Hierarchy level of group
  OUTL_NO                          :   "", // CHAR (8) Outline Level
  OUTL_IND                         :   "", // CHAR (1) Indicator: Outline line
  SUBPCKG_NO                       :   "", // NUMC (10) Subpackage number
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
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
  GROSS_VAL                        :  "0", // DEC (23.4) Gross value
  NET_VALUE                        :  "0", // DEC (23.4) Net value
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
  ACTUAL_QTY                       : "0.0", // QUAN (13.3) Purchase Order: Entered Quantity
  ACTUAL_VAL                       :  "0", // DEC (23.4) Purchase order: Entered value
  CON_VALUE                        :  "0", // DEC (23.4) Contract: Value released (via release orders)
  CON_QTY                          : "0.0", // QUAN (13.3) Contract: Quantity Released (by Issue of Release Orders)
  TARGET_VAL                       :  "0", // DEC (23.4) Target Value
  UNPL_VAL                         :  "0", // DEC (23.4) Contract: Unplanned released value
  UNPL_QTY                         : "0.0", // QUAN (13.3) Contract: Unplanned Released Quantity
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
  NOND_ITAX                        :  "0", // DEC (23.4) Non-deductible input tax
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
  GR_PRICE                         :  "0", // DEC (23.4) Gross price
  HI_LINE_NO                       :   "", // NUMC (10) Hierarchically superior line number
  EXTREFKEY                        :   "", // CHAR (40) External Reference Key for Service
  PER_SDATE                        :   "", // DATS (8) Period of Performance Start Date
  PER_EDATE                        :   "", // DATS (8) Period of Performance End Date
  EXTERNAL_ITEM_ID                 :   "", // CHAR (40) SRM Reference Key
  SERVICE_ITEM_KEY                 :   "", // NUMC (10) Item Key for eSOA Messages
};

// BAPIESKL  Value/Link to Service Account Assignment
const PO_ITEM_SRV_ACCASS_VALUES= [];

// prettier-ignore
const PO_ITEM_SRV_ACCASS_VALUES= {
  PCKG_NO                          :   "", // NUMC (10) Package number
  LINE_NO                          :   "", // NUMC (10) Line Number
  SERNO_LINE                       :   "", // NUMC (2) Seq. Number of Acc. Assignment Specification: Service Line
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
  INACTIVE                         :   "", // CHAR (1) Inactive account assignment specification
  QUANTITY                         : "0.0", // QUAN (13.3) Quantity
  PERCENTAGE                       :  "0", // DEC (4.1) Percentage for Account Assignment Value Distribution
  NET_VALUE                        :  "0", // DEC (23.4) Net value
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  HPACKNO                          :   "", // NUMC (10) Highest package number
};

// BAPIEKPOTX  Texts for Item
const PO_ITEM_TEXTS= [];

// prettier-ignore
const PO_ITEM_TEXTS= {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  TEXT_ID                          :   "", // CHAR (4) Text ID
  TEXT_FORM                        :   "", // CHAR (2) Tag column
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};

// BAPIEKPO  Purchase Order Items
const PO_ITEMS= [];

// prettier-ignore
const PO_ITEMS= {
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

// BAPIESLLTX  Long Texts for Service Line
const PO_SERVICES_TEXTS= [];

// prettier-ignore
const PO_SERVICES_TEXTS= {
  PCKG_NO                          :   "", // NUMC (10) Package number
  LINE_NO                          :   "", // NUMC (10) Internal line number
  TEXT_ID                          :   "", // CHAR (4) Text ID
  FORMAT_COL                       :   "", // CHAR (2) Tag column
  TEXT_LINE                        :   "", // CHAR (132) Text Line
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

// BAPIADDRESS  Ordering Address Data

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

// BAPIEKKOL  PO Header Data

// prettier-ignore
const PO_HEADER= {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  CO_CODE                          :   "", // CHAR (4) Company Code SU3=BUK
  DOC_CAT                          :   "", // CHAR (1) Purchasing Document Category
  DOC_TYPE                         :   "", // CHAR (4) Purchasing Document Type SU3=BSA
  CNTRL_IND                        :   "", // CHAR (1) Control indicator for purchasing document type
  DELETE_IND                       :   "", // CHAR (1) Deletion indicator in purchasing document
  STATUS                           :   "", // CHAR (1) Status of Purchasing Document
  CREATED_ON                       :   "", // DATS (8) Date on Which Record Was Created
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  ITEM_INTVL                       :   "", // NUMC (5) Item Number Interval
  LAST_ITEM                        :   "", // NUMC (5) Last Item Number
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
  LANGUAGE                         :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  DSCNT1_TO                        :  "0", // DEC (3) Cash discount days 1
  DSCNT2_TO                        :  "0", // DEC (3) Cash discount days 2
  DSCNT3_TO                        :  "0", // DEC (3) Cash discount days 3
  CASH_DISC1                       :  "0", // DEC (5.3) Cash discount percentage 1
  CASH_DISC2                       :  "0", // DEC (5.3) Cash Discount Percentage 2
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization SU3=EKO
  PUR_GROUP                        :   "", // CHAR (3) Purchasing Group SU3=EKG
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  EXCH_RATE                        :  "0", // DEC (9.5) Direct Quoted Exchange Rate
  EX_RATE_FX                       :   "", // CHAR (1) Indicator: Fixing of Exchange Rate
  DOC_DATE                         :   "", // DATS (8) Purchasing Document Date
  VPER_START                       :   "", // DATS (8) Start of Validity Period
  VPER_END                         :   "", // DATS (8) End of Validity Period
  APPLIC_BY                        :   "", // DATS (8) Closing Date for Applications
  QUOT_DEAD                        :   "", // DATS (8) Deadline for Submission of Bid/Quotation
  BINDG_PER                        :   "", // DATS (8) Binding Period for Quotation
  WARRANTY                         :   "", // DATS (8) Warranty Date
  BIDINV_NO                        :   "", // CHAR (10) ALPHA=ALPHA Bid invitation number SU3=BES
  QUOTATION                        :   "", // CHAR (10) Quotation Number
  QUOT_DATE                        :   "", // DATS (8) Quotation Submission Date
  REF_1                            :   "", // CHAR (12) Your Reference
  SALES_PERS                       :   "", // CHAR (30) Responsible Salesperson at Vendor's Office
  TELEPHONE                        :   "", // CHAR (16) Vendor's Telephone Number
  SUPPL_VEND                       :   "", // CHAR (10) ALPHA=ALPHA Supplying Vendor SU3=LLI
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement SU3=KTR
  REJ_REASON                       :   "", // CHAR (2) Reason for rejection of quotations and sales orders
  COMPL_DLV                        :   "", // CHAR (1) Complete Delivery Stipulated for Each Purchase Order
  GR_MESSAGE                       :   "", // CHAR (1) Indicator: Goods Receipt Message
  SUPPL_PLNT                       :   "", // CHAR (4) Supplying (issuing) plant in case of stock transport order
  RCVG_VEND                        :   "", // CHAR (10) ALPHA=ALPHA Field not used SU3=LIF
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  TARGET_VAL                       :  "0", // DEC (23.4) Cumulative Planned Value
  COLL_NO                          :   "", // CHAR (10) Collective Number
  DOC_COND                         :   "", // CHAR (10) Number of the document condition
  PROCEDURE                        :   "", // CHAR (6) Procedure (Pricing, Output Control, Acct. Det., Costing,...)
  UPDATE_GRP                       :   "", // CHAR (6) ALPHA=ALPHA Update group for statistics update SU3=MCF
  DIFF_INV                         :   "", // CHAR (10) ALPHA=ALPHA Different Invoicing Party SU3=LRE
  EXPORT_NO                        :   "", // CHAR (10) Number of foreign trade data in MM and SD documents
  OUR_REF                          :   "", // CHAR (12) Our Reference
  LOGSYSTEM                        :   "", // CHAR (10) ALPHA=ALPHA Logical System
  SUBITEMINT                       :   "", // NUMC (5) Item Number Interval for Subitems
  MAST_COND                        :   "", // CHAR (1) Document with time-dependent conditions
  REL_GROUP                        :   "", // CHAR (2) Release group
  REL_STRAT                        :   "", // CHAR (2) Release Strategy
  REL_IND                          :   "", // CHAR (1) Release Indicator: Purchasing Document
  REL_STATUS                       :   "", // CHAR (8) Release State
  SUBJ_TO_R                        :   "", // CHAR (1) Release Not Yet Completely Effected
  TAXR_CNTRY                       :   "", // CHAR (3) Country for Tax Return
  SCHED_IND                        :   "", // CHAR (1) Indicator for scheduling agreement release documentation
  VEND_NAME                        :   "", // CHAR (35) Name 1
  CURRENCY_ISO                     :   "", // CHAR (3) ISO Currency Code
  EXCH_RATE_CM                     :  "0", // DEC (9.5) Indirect Quoted Exchange Rate
  HOLD                             :   "", // CHAR (1) Purchase order not yet complete
};
