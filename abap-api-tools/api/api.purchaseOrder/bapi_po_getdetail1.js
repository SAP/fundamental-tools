//
// BAPI_PO_GETDETAIL1 exception: 0  struct: 2  table: 26  var: 9
//
// abap api
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

PURCHASEORDER         :           "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
// ACCOUNT_ASSIGNMENT :        SPACE, // CHAR (1) Account Assignment Data
// DELIVERY_ADDRESS   :        SPACE, // CHAR (1) Delivery address
// HEADER_TEXT        :        SPACE, // CHAR (1) Header Txt
// INVOICEPLAN        :        SPACE, // CHAR (1) Invoicing Plan
// ITEM_TEXT          :        SPACE, // CHAR (1) Item Text
// SERIALNUMBERS      :        SPACE, // CHAR (1) Serial Numbers
// SERVICES           :        SPACE, // CHAR (1) External Service Data
// VERSION            :        SPACE, // CHAR (1) Version Management

// TABLE PARAMETERS

// ALLVERSIONS        :           [], // BAPIMEDCM_ALLVERSIONS Version Data
// EXTENSIONOUT       :           [], // BAPIPAREX ExtensionOut
// INVPLANHEADER      :           [], // BAPI_INVOICE_PLAN_HEADER Invoicing Plan: Header Data
// INVPLANITEM        :           [], // BAPI_INVOICE_PLAN_ITEM Invoicing Plan: Item Data
// POACCOUNT          :           [], // BAPIMEPOACCOUNT Account Assignment Fields
// POADDRDELIVERY     :           [], // BAPIMEPOADDRDELIVERY Addresses for Inward Delivery (Item)
// POCOMPONENTS       :           [], // BAPIMEPOCOMPONENT BAPI Structure for Components
// POCOND             :           [], // BAPIMEPOCOND Conditions (Items)
// POCONDHEADER       :           [], // BAPIMEPOCONDHEADER Conditions (header)
// POCONFIRMATION     :           [], // BAPIEKES Vendor Confirmation
// POCONTRACTLIMITS   :           [], // BAPIESUCC Communication Structure: Contract Limits
// POEXPIMPITEM       :           [], // BAPIEIPO Foreign Trade: Item Data
// POHISTORY          :           [], // BAPIEKBE Purchase Order History
// POHISTORY_MA       :           [], // BAPIEKBE_MA Transfer Structure for Purchase Order History Account Assignment Level
// POHISTORY_TOTALS   :           [], // BAPIEKBES Purchase Order History - Totals
// POITEM             :           [], // BAPIMEPOITEM Purchase Order Item
// POLIMITS           :           [], // BAPIESUHC External Services: Limits
// POPARTNER          :           [], // BAPIEKKOP Partner
// POSCHEDULE         :           [], // BAPIMEPOSCHEDULE Delivery Schedule
// POSERVICES         :           [], // BAPIESLLC Communication Structure: Create Service Line
// POSHIPPINGEXP      :           [], // BAPIMEPOSHIPPEXP Export Structure for Shipping Data
// POSRVACCESSVALUES  :           [], // BAPIESKLC External Services: Account Assignment Distribution for Service Lines
// POTEXTHEADER       :           [], // BAPIMEPOTEXTHEADER Header Texts
// POTEXTITEM         :           [], // BAPIMEPOTEXT Item Texts
// RETURN             :           [], // BAPIRET2 Return Parameter(s)
// SERIALNUMBER       :           [], // BAPIMEPOSERIALNO Serial Numbers in Purchase Order BAPIs

// EXPORT PARAMETERS

// POEXPIMPHEADER     :           {}, // BAPIEIKP Foreign Trade: Export/Import: Header Data
// POHEADER           :           {}, // BAPIMEPOHEADER Purchase Order Header Data
};

const result = await client.call("BAPI_PO_GETDETAIL1", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIMEDCM_ALLVERSIONS  Version Data
const ALLVERSIONS = [];

// prettier-ignore
const ALLVERSIONS_line = {
  DOC_TYPE                         :   "", // CHAR (1) Purchasing Document Category
  DOC_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Object Number in Purchasing
  ITEM_NUMBER                      :   "", // NUMC (5) Purchasing object: item
  VERSION                          :   "", // CHAR (8) ALPHA=ALPHA Version number in Purchasing
  CREATED_BY                       :   "", // CHAR (12) Name of Person who Created the Object
  CR_ON                            :   "", // DATS (8) Date on Which Record Was Created
  REC_TIME                         :   "", // TIMS (6) Entry time
  RELEASED_BY                      :   "", // CHAR (12) Name of person effecting release
  RELEASE_DATE                     :   "", // DATS (8) Date of release
  RELEASE_TIME                     :   "", // TIMS (6) Time of release
  RELEASEBY_PUR                    :   "", // CHAR (12) Name of approving buyer
  RELEASEDATE_PUR                  :   "", // DATS (8) Date of buyer approval
  RELEASETIME_PUR                  :   "", // TIMS (6) Time of buyer approval
  REASON                           :   "", // CHAR (4) Reason for change
  DESCRIPTION                      :   "", // CHAR (60) Description of version
  REQ_BY_EXT                       :   "", // CHAR (20) External Change Number of Version
  REQ_BY                           :   "", // CHAR (12) Person requesting change
  NET_VALUE                        : "0.0", // CURR (13.2) Net Order Value in PO Currency
  VALUE_CHANGED                    : "0.0", // CURR (13.2) Value change due to version
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO code currency
  POST_DATE                        :   "", // DATS (8) Posting date of version
  COMPLETED                        :   "", // CHAR (1) Status "version completed"
  STATUS                           :   "", // CHAR (1) Version status
  DELETE_IND                       :   "", // CHAR (1) Deletion indicator in purchasing document
  STATUS_DOC_OLD                   :   "", // CHAR (2) Old processing state in purchasing document before version
};

// BAPIPAREX  ExtensionOut
const EXTENSIONOUT = [];

// prettier-ignore
const EXTENSIONOUT_line = {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPI_INVOICE_PLAN_HEADER  Invoicing Plan: Header Data
const INVPLANHEADER = [];

// prettier-ignore
const INVPLANHEADER_line = {
  DOC_ITEM                         :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  IV_PLAN_NUM                      :   "", // CHAR (10) Billing plan number / invoicing plan number
  CATEGORY                         :   "", // CHAR (1) Billing plan category
  IP_TYPE                          :   "", // CHAR (2) Billing/Invoicing Plan Type
  SORT_FLD                         :   "", // CHAR (10) Sort field
  START_DATE                       :   "", // DATS (8) Start date for billing plan/invoice plan
  END_DATE                         :   "", // DATS (8) End date billing plan/invoice plan
  HORIZON                          :   "", // CHAR (2) Rule for Determining Horizon in Billing/Invoicing Plan
  ORGN_ST_DAT                      :   "", // CHAR (2) Rule for Origin of Start Date of Billing/Invoicing Plan
  ORGN_END_DAT                     :   "", // CHAR (2) Rule for Origin of End Date for Billing/Invoicing Plan
  PERIOD                           :   "", // CHAR (2) Rule for Origin of Next Billing/Invoice Date
  LNGTH_STAND_PRD                  :   "", // NUMC (3) Length of a standard period in the billing plan
  REF_IV_PLAN_NUM                  :   "", // CHAR (10) Standard Billing/Invoicing Plan Number
  DATES_FROM                       :   "", // DATS (8) Dates from
  IN_ADVANCE                       :   "", // CHAR (1) Billing/Invoice Creation in Advance
  ORGN_FROM_DAT                    :   "", // CHAR (2) Rule for Origin of Start Dates
  DEV_BILL_DAT                     :   "", // CHAR (2) Rule for Determination of a Deviating Billing/Invoice Date
  CALENDER_ID                      :   "", // CHAR (2) Calendar for Defining Days Relevant to Billing/Invoicing
  DATES_TO                         :   "", // DATS (8) Dates to
  ORGN_UNTIL_DAT                   :   "", // CHAR (2) Rule for Origin of End Dates
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  UNLIMITED                        :   "", // NUMC (6) Item unlimited in value
  AUTO_COR_DAT                     :   "", // CHAR (1) Automatic creation of correction dates in billing plan
};

// BAPI_INVOICE_PLAN_ITEM  Invoicing Plan: Item Data
const INVPLANITEM = [];

// prettier-ignore
const INVPLANITEM_line = {
  DOC_ITEM                         :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  IV_PLAN_NUM                      :   "", // CHAR (10) Billing plan number / invoicing plan number
  IV_PLAN_ITEM                     :   "", // NUMC (6) Item for billing plan/invoice plan/payment cards
  DEL_IND                          :   "", // CHAR (1) Deletion Indicator
  DATE_CATG                        :   "", // CHAR (2) Date category
  DATE_DESC                        :   "", // CHAR (4) Date description
  SETT_DATE_FROM                   :   "", // DATS (8) Settlement date for deadline
  BILL_RULE                        :   "", // CHAR (1) Rule in billing plan/invoice plan
  INVOICE_PERCENTAGE               :  "0", // DEC (5.2) Percentage of value to be invoiced
  CURRENCY                         :   "", // CUKY (5) Currency Key of Credit Control Area
  CURRENCY_ISO                     :   "", // CHAR (3) ISO code currency
  EXCHG_RAT_DAT                    :  "0", // DEC (9.5) ALPHA=EXCRT Exchange rate for date in billing plan
  BILL_VALUE                       :  "0", // DEC (23.4) Values to Be Invoiced/Calculated in Invoice Plan Date
  BILLING_BLOCK                    :   "", // CHAR (2) Billing block for billing plan/invoice plan dates
  BILLING_STATUS                   :   "", // CHAR (1) Billing status for the billing plan/invoice plan date
  SETT_DATE_TO                     :   "", // DATS (8) Settlement date for deadline
  CALENDER_ID                      :   "", // CHAR (2) Calendar for Defining Days Relevant to Billing/Invoicing
  BILL_DATE                        :   "", // DATS (8) Billing date for billing index and printout
  CASH_DISCOUNT                    : "0.0", // CURR (13.2) Amount eligible for cash discount in document currency
  REBATE_BASIS1                    : "0.0", // CURR (13.2) Rebate basis 1
  PRICING_OK                       :   "", // CHAR (1) Pricing is OK
  MILESTONE_NUM                    :   "", // NUMC (12) Milestone number
  MILESTONE_USE                    :   "", // CHAR (5) Usage
  MANUALLY                         :   "", // CHAR (1) Process as for manually entered date
};

// BAPIMEPOACCOUNT  Account Assignment Fields
const POACCOUNT = [];

// prettier-ignore
const POACCOUNT_line = {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator: Purchasing Document Account Assignment
  CREAT_DATE                       :   "", // DATS (8) Date on Which Record Was Created
  QUANTITY                         : "0.0", // QUAN (13.3) Quantity
  DISTR_PERC                       :  "0", // DEC (3.1) Distribution percentage in the case of multiple acct assgt
  NET_VALUE                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number SU3=SAK
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item SU3=APO
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number SU3=AN1
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber SU3=AN2
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  GR_RCPT                          :   "", // CHAR (12) Goods recipient
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  CO_AREA                          :   "", // CHAR (4) Controlling Area SU3=CAC
  COSTOBJECT                       :   "", // CHAR (12) Cost Object SU3=KTR
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  WBS_ELEMENT                      :   "", // CHAR (24) ALPHA=ABPSN Work Breakdown Structure Element (WBS Element) SU3=PRO
  NETWORK                          :   "", // CHAR (12) ALPHA=ALPHA Network Number for Account Assignment SU3=NET
  RL_EST_KEY                       :   "", // CHAR (8) ALPHA=IMKEY Internal Key for Real Estate Object
  PART_ACCT                        :   "", // CHAR (10) ALPHA=ALPHA Partner account number
  CMMT_ITEM                        :   "", // CHAR (14) ALPHA=FMCIS Commitment Item SU3=FIP
  REC_IND                          :   "", // CHAR (2) ALPHA=ALPHA Recovery Indicator
  FUNDS_CTR                        :   "", // CHAR (16) Funds Center SU3=FIS
  FUND                             :   "", // CHAR (10) Fund SU3=FIC
  FUNC_AREA                        :   "", // CHAR (4) Functional Area SU3=FBE
  REF_DATE                         :   "", // DATS (8) Reference date for settlement
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  NOND_ITAX                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  ACTTYPE                          :   "", // CHAR (6) Activity Type SU3=LAR
  CO_BUSPROC                       :   "", // CHAR (12) ALPHA=ALPHA Business Process SU3=KWP
  RES_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document Number for Earmarked Funds SU3=KBL
  RES_ITEM                         :   "", // NUMC (3) Earmarked Funds: Document Item SU3=KBP
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant SU3=GM_GRANT_NBR
  CMMT_ITEM_LONG                   :   "", // CHAR (24) ALPHA=FMCIL Commitment item SU3=FPS
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area SU3=FBE
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period SU3=BUDPER
  FINAL_IND                        :   "", // CHAR (1) Final Account Assignment Indicator
  FINAL_REASON                     :   "", // CHAR (2) Final Account Assignment Reason Code
};

// BAPIMEPOADDRDELIVERY  Addresses for Inward Delivery (Item)
const POADDRDELIVERY = [];

// prettier-ignore
const POADDRDELIVERY_line = {
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

// BAPIMEPOCOMPONENT  BAPI Structure for Components
const POCOMPONENTS = [];

// prettier-ignore
const POCOMPONENTS_line = {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  ITEM_NO                          :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  ENTRY_QUANTITY                   : "0.0", // QUAN (13.3) Requirement Quantity of Component
  ENTRY_UOM                        :   "", // UNIT (3) ALPHA=CUNIT Unit of entry
  ENTRY_UOM_ISO                    :   "", // CHAR (3) Unit of entry in ISO code
  FIXED_QUAN                       :   "", // CHAR (1) Quantity is fixed
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  REQ_DATE                         :   "", // DATS (8) Requirements date for the component
  CHANGE_ID                        :   "", // CHAR (1) Change Type (U, I, E, D)
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  ITEM_CAT                         :   "", // CHAR (1) Item category (bill of material)
  REQ_QUAN                         : "0.0", // QUAN (13.3) Requirement Quantity
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) Base unit of measure in ISO code
  PHANT_ITEM                       :   "", // CHAR (1) Phantom item indicator
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  MAT_PROVISION                    :   "", // CHAR (1) Material Provision Indicator
  ISS_ST_LOC                       :   "", // CHAR (4) Issue Storage Location
  REV_LEV                          :   "", // CHAR (2) ALPHA=NUMCV Revision level SU3=RVS
  REQ_SEGMENT                      :   "", // CHAR (16) Requirement Segment SU3=SGT_R
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPIMEPOCOND  Conditions (Items)
const POCOND = [];

// prettier-ignore
const POCOND_line = {
  CONDITION_NO                     :   "", // CHAR (10) Number of the document condition
  ITM_NUMBER                       :   "", // NUMC (6) Condition item number
  COND_ST_NO                       :   "", // NUMC (3) Step number
  COND_COUNT                       :   "", // NUMC (2) Condition counter
  COND_TYPE                        :   "", // CHAR (4) Condition Type SU3=VKS
  COND_VALUE                       :  "0", // DEC (28.9) Condition rate
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO code currency
  COND_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  COND_UNIT_ISO                    :   "", // CHAR (3) Condition unit of measure in UoM
  COND_P_UNT                       :  "0", // DEC (5) Condition pricing unit
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
  CONDCNTRL                        :   "", // CHAR (1) Condition control
  CONDISACTI                       :   "", // CHAR (1) Condition is inactive
  CONDCLASS                        :   "", // CHAR (1) Condition class
  FACTBASVAL                       : "0.0", // FLTP (16.16) Factor for condition base value
  SCALEBASIN                       :   "", // CHAR (1) Scale basis indicator
  SCALBASVAL                       :  "0", // DEC (28.9) Scale base value of the condition
  UNITMEASUR                       :   "", // UNIT (3) ALPHA=CUNIT Condition scale unit of measure
  UNITMEASUR_ISO                   :   "", // CHAR (3) ISO code for unit of measurement
  CURRENCKEY                       :   "", // CUKY (5) Scale currency SU3=FWS
  CURRENCKEY_ISO                   :   "", // CHAR (3) ISO code currency
  CONDINCOMP                       :   "", // CHAR (1) Condition for inter-company billing
  CONDCONFIG                       :   "", // CHAR (1) Condition for configuration
  CONDCHAMAN                       :   "", // CHAR (1) Condition changed manually
  COND_NO                          :   "", // CHAR (10) Condition record number
  CHANGE_ID                        :   "", // CHAR (1) Change Type (U, I, E, D)
  VENDOR_NO                        :   "", // CHAR (10) ALPHA=ALPHA Account Number of Vendor or Creditor SU3=LIF
};

// BAPIMEPOCONDHEADER  Conditions (header)
const POCONDHEADER = [];

// prettier-ignore
const POCONDHEADER_line = {
  CONDITION_NO                     :   "", // CHAR (10) Number of the document condition
  ITM_NUMBER                       :   "", // NUMC (6) Condition item number
  COND_ST_NO                       :   "", // NUMC (3) Step number
  COND_COUNT                       :   "", // NUMC (2) Condition counter
  COND_TYPE                        :   "", // CHAR (4) Condition Type SU3=VKS
  COND_VALUE                       :  "0", // DEC (28.9) Condition rate
  CURRENCY                         :   "", // CUKY (5) Currency Key SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO code currency
  COND_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  COND_UNIT_ISO                    :   "", // CHAR (3) Condition unit of measure in UoM
  COND_P_UNT                       :  "0", // DEC (5) Condition pricing unit
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
  CONDCNTRL                        :   "", // CHAR (1) Condition control
  CONDISACTI                       :   "", // CHAR (1) Condition is inactive
  CONDCLASS                        :   "", // CHAR (1) Condition class
  FACTBASVAL                       : "0.0", // FLTP (16.16) Factor for condition base value
  SCALEBASIN                       :   "", // CHAR (1) Scale basis indicator
  SCALBASVAL                       :  "0", // DEC (28.9) Scale base value of the condition
  UNITMEASUR                       :   "", // UNIT (3) ALPHA=CUNIT Condition scale unit of measure
  UNITMEASUR_ISO                   :   "", // CHAR (3) ISO code for unit of measurement
  CURRENCKEY                       :   "", // CUKY (5) Scale currency SU3=FWS
  CURRENCKEY_ISO                   :   "", // CHAR (3) ISO code currency
  CONDINCOMP                       :   "", // CHAR (1) Condition for inter-company billing
  CONDCONFIG                       :   "", // CHAR (1) Condition for configuration
  CONDCHAMAN                       :   "", // CHAR (1) Condition changed manually
  COND_NO                          :   "", // CHAR (10) Condition record number
  CHANGE_ID                        :   "", // CHAR (1) Change Type (U, I, E, D)
  VENDOR_NO                        :   "", // CHAR (10) ALPHA=ALPHA Account Number of Vendor or Creditor SU3=LIF
};

// BAPIEKES  Vendor Confirmation
const POCONFIRMATION = [];

// prettier-ignore
const POCONFIRMATION_line = {
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

// BAPIESUCC  Communication Structure: Contract Limits
const POCONTRACTLIMITS = [];

// prettier-ignore
const POCONTRACTLIMITS_line = {
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

// BAPIEIPO  Foreign Trade: Item Data
const POEXPIMPITEM = [];

// prettier-ignore
const POEXPIMPITEM_line = {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  BUSINESS_TRANSACTION_TYPE        :   "", // CHAR (2) Business Transaction Type for Foreign Trade SU3=EXA
  EXPORT_IMPORT_PROCEDURE          :   "", // CHAR (8) Export/Import Procedure for Foreign Trade
  COUNTRYORI                       :   "", // CHAR (3) Country of Origin of Material (Non-Preferential Origin) SU3=LND
  COUNTRYORI_ISO                   :   "", // CHAR (2) Country ISO code
  REGIONORIG                       :   "", // CHAR (3) Region of Origin of Material (Non-Preferential Origin)
  COMM_CODE                        :   "", // CHAR (17) Commodity Code/Import Code Number for Foreign Trade
  SHIPPING_COUNTRY                 :   "", // CHAR (3) Country of dispatch for Foreign Trade
  SHIPPING_COUNTRY_ISO             :   "", // CHAR (2) Country ISO code
};

// BAPIEKBE  Purchase Order History
const POHISTORY = [];

// prettier-ignore
const POHISTORY_line = {
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

// BAPIEKBE_MA  Transfer Structure for Purchase Order History Account Assignment Level
const POHISTORY_MA = [];

// prettier-ignore
const POHISTORY_MA_line = {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  PROCESS_ID                       :   "", // CHAR (1) Transaction/event type, purchase order history
  DOC_YEAR                         :   "", // NUMC (4) ALPHA=GJAHR Material Document Year SU3=MJA
  MAT_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Number of Material Document SU3=MBN
  MATDOC_ITM                       :   "", // NUMC (4) Item in Material Document SU3=POS
  REF_DOC_YR                       :   "", // NUMC (4) ALPHA=GJAHR Fiscal Year of a Reference Document
  REF_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Document No. of a Reference Document
  REF_DOC_IT                       :   "", // NUMC (4) Item of a Reference Document
  DB_CR_IND                        :   "", // CHAR (1) Debit/Credit Indicator
  QUANTITY_F                       : "0.0", // FLTP (16.16) Quantity (Floating Point Number - Internal Field)
  QUANTITY                         : "0.0", // QUAN (13.3) Quantity
  VAL_LOCCUR                       :  "0", // DEC (23.4) Amount in local currency
  VAL_FORCUR                       :  "0", // DEC (23.4) Amount in document currency
  CL_VAL_LOC                       :  "0", // DEC (23.4) GR/IR account clearing value in local currency
  IVVAL_LOC                        :  "0", // DEC (23.4) Entered invoice value in local currency
  IVVAL_FOR                        :  "0", // DEC (23.4) Entered invoice value in foreign currency
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
};

// BAPIEKBES  Purchase Order History - Totals
const POHISTORY_TOTALS = [];

// prettier-ignore
const POHISTORY_TOTALS_line = {
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

// BAPIMEPOITEM  Purchase Order Item
const POITEM = [];

// prettier-ignore
const POITEM_line = {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  DELETE_IND                       :   "", // CHAR (1) Deletion indicator in purchasing document
  SHORT_TEXT                       :   "", // CHAR (40) Short Text
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  EMATERIAL                        :   "", // CHAR (18) ALPHA=MATN1 Material number SU3=MAT
  EMATERIAL_EXTERNAL               :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  EMATERIAL_GUID                   :   "", // CHAR (32) External GUID for MATERIAL Field
  EMATERIAL_VERSION                :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  STGE_LOC                         :   "", // CHAR (4) Storage location SU3=LAG
  TRACKINGNO                       :   "", // CHAR (10) Requirement Tracking Number
  MATL_GROUP                       :   "", // CHAR (9) Material Group SU3=MKL
  INFO_REC                         :   "", // CHAR (10) ALPHA=ALPHA Number of purchasing info record SU3=INF
  VEND_MAT                         :   "", // CHAR (35) Material Number Used by Vendor
  QUANTITY                         : "0.0", // QUAN (13.3) Purchase Order Quantity
  PO_UNIT                          :   "", // UNIT (3) ALPHA=CUNIT Order unit
  PO_UNIT_ISO                      :   "", // CHAR (3) Order unit in ISO code
  ORDERPR_UN                       :   "", // UNIT (3) ALPHA=CUNIT Order Price Unit (Purchasing)
  ORDERPR_UN_ISO                   :   "", // CHAR (3) ISO code for purchase order price unit
  CONV_NUM1                        :  "0", // DEC (5) Numerator for Conversion of Order Price Unit into Order Unit
  CONV_DEN1                        :  "0", // DEC (5) Denominator for Conv. of Order Price Unit into Order Unit
  NET_PRICE                        :  "0", // DEC (28.9) Currency amount for BAPIS (with 9 decimal places)
  PRICE_UNIT                       :  "0", // DEC (5) Price unit
  GR_PR_TIME                       :  "0", // DEC (3) Goods receipt processing time in days
  TAX_CODE                         :   "", // CHAR (2) Tax on sales/purchases code
  BON_GRP1                         :   "", // CHAR (2) Settlement Group 1 (Purchasing)
  QUAL_INSP                        :   "", // CHAR (1) Stock Type
  INFO_UPD                         :   "", // CHAR (1) Indicator: Update Info Record
  PRNT_PRICE                       :   "", // CHAR (1) Price Printout
  EST_PRICE                        :   "", // CHAR (1) Indicator: Estimated Price
  REMINDER1                        :  "0", // DEC (3) Number of Days for First Reminder/Expediter
  REMINDER2                        :  "0", // DEC (3) Number of Days for Second Reminder/Expediter
  REMINDER3                        :  "0", // DEC (3) Number of Days for Third Reminder/Expediter
  OVER_DLV_TOL                     :  "0", // DEC (3.1) Overdelivery Tolerance Limit
  UNLIMITED_DLV                    :   "", // CHAR (1) Indicator: Unlimited Overdelivery Allowed
  UNDER_DLV_TOL                    :  "0", // DEC (3.1) Underdelivery Tolerance Limit
  VAL_TYPE                         :   "", // CHAR (10) Valuation type SU3=BWT
  NO_MORE_GR                       :   "", // CHAR (1) "Delivery Completed" Indicator
  FINAL_INV                        :   "", // CHAR (1) Final Invoice Indicator
  ITEM_CAT                         :   "", // CHAR (1) Item category in purchasing document
  ACCTASSCAT                       :   "", // CHAR (1) Account assignment category SU3=KNT
  DISTRIB                          :   "", // CHAR (1) Distribution indicator for multiple account assignment
  PART_INV                         :   "", // CHAR (1) Partial invoice indicator
  GR_IND                           :   "", // CHAR (1) Goods Receipt Indicator
  GR_NON_VAL                       :   "", // CHAR (1) Goods Receipt, Non-Valuated
  IR_IND                           :   "", // CHAR (1) Invoice receipt indicator
  FREE_ITEM                        :   "", // CHAR (1) Free Item
  GR_BASEDIV                       :   "", // CHAR (1) Indicator: GR-Based Invoice Verification
  ACKN_REQD                        :   "", // CHAR (1) Order Acknowledgment Requirement
  ACKNOWL_NO                       :   "", // CHAR (20) Order Acknowledgment Number
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Number of principal purchase agreement SU3=KTR
  AGMT_ITEM                        :   "", // NUMC (5) Item number of principal purchase agreement
  SHIPPING                         :   "", // CHAR (2) Shipping Instructions
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer SU3=KUN
  COND_GROUP                       :   "", // CHAR (4) Condition Group with Vendor
  NO_DISCT                         :   "", // CHAR (1) Item Does Not Qualify for Cash Discount
  PLAN_DEL                         :  "0", // DEC (3) Planned Delivery Time in Days
  NET_WEIGHT                       : "0.0", // QUAN (13.3) Net Weight
  WEIGHTUNIT                       :   "", // UNIT (3) ALPHA=CUNIT Unit of Weight
  WEIGHTUNIT_ISO                   :   "", // CHAR (3) ISO code for unit of weight
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  CTRL_KEY                         :   "", // CHAR (8) Control Key for Quality Management in Procurement
  CONF_CTRL                        :   "", // CHAR (4) Confirmation Control Key
  REV_LEV                          :   "", // CHAR (2) ALPHA=NUMCV Revision level SU3=RVS
  FUND                             :   "", // CHAR (10) Fund SU3=FIC
  FUNDS_CTR                        :   "", // CHAR (16) Funds Center SU3=FIS
  CMMT_ITEM                        :   "", // CHAR (14) ALPHA=FMCIS Commitment Item SU3=FIP
  PRICEDATE                        :   "", // CHAR (1) Price Determination (Pricing) Date Control
  PRICE_DATE                       :   "", // DATS (8) Date of Price Determination
  GROSS_WT                         : "0.0", // QUAN (13.3) Gross weight
  VOLUME                           : "0.0", // QUAN (13.3) Volume
  VOLUMEUNIT                       :   "", // UNIT (3) ALPHA=CUNIT Volume unit
  VOLUMEUNIT_ISO                   :   "", // CHAR (3) Volume unit in ISO code
  INCOTERMS1                       :   "", // CHAR (3) Incoterms (Part 1)
  INCOTERMS2                       :   "", // CHAR (28) Incoterms (Part 2)
  PRE_VENDOR                       :   "", // CHAR (10) ALPHA=ALPHA Prior Vendor
  VEND_PART                        :   "", // CHAR (6) Vendor Subrange
  HL_ITEM                          :   "", // NUMC (5) Higher-Level Item in Purchasing Documents
  GR_TO_DATE                       :   "", // DATS (8) Latest Possible Goods Receipt
  SUPP_VENDOR                      :   "", // CHAR (10) ALPHA=ALPHA Vendor to be supplied/who is to receive delivery
  SC_VENDOR                        :   "", // CHAR (1) Subcontracting vendor
  KANBAN_IND                       :   "", // CHAR (1) Kanban Indicator
  ERS                              :   "", // CHAR (1) Evaluated Receipt Settlement (ERS)
  R_PROMO                          :   "", // CHAR (10) ALPHA=ALPHA Promotion SU3=WAK
  POINTS                           : "0.0", // QUAN (13.3) Number of Points
  POINT_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Points unit
  POINT_UNIT_ISO                   :   "", // CHAR (3) ISO code for points unit
  SEASON                           :   "", // CHAR (4) Season Category SU3=SAISO
  SEASON_YR                        :   "", // CHAR (4) ALPHA=GJAHR Season Year SU3=WMSAISJ
  BON_GRP2                         :   "", // CHAR (2) Settlement Group 2 (Rebate Settlement, Purchasing)
  BON_GRP3                         :   "", // CHAR (2) Settlement Group 3 (Rebate Settlement, Purchasing)
  SETT_ITEM                        :   "", // CHAR (1) Item Relevant to Subsequent (Period-End Rebate) Settlement
  MINREMLIFE                       :  "0", // DEC (4) Minimum Remaining Shelf Life
  RFQ_NO                           :   "", // CHAR (10) ALPHA=ALPHA RFQ Number SU3=ANF
  RFQ_ITEM                         :   "", // NUMC (5) Item Number of RFQ
  PREQ_NO                          :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number SU3=BAN
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition SU3=BAP
  REF_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Reference Document Number
  REF_ITEM                         :   "", // NUMC (5) Item of reference document
  SI_CAT                           :   "", // CHAR (1) Subitem Category, Purchasing Document
  RET_ITEM                         :   "", // CHAR (1) Returns Item
  AT_RELEV                         :   "", // CHAR (1) Relevant to Allocation Table
  ORDER_REASON                     :   "", // CHAR (3) Reason for Ordering
  BRAS_NBM                         :   "", // CHAR (16) Brazilian NCM Code
  MATL_USAGE                       :   "", // CHAR (1) Usage of the material
  MAT_ORIGIN                       :   "", // CHAR (1) Origin of the material
  IN_HOUSE                         :   "", // CHAR (1) Produced in-house
  INDUS3                           :   "", // CHAR (2) ALPHA=ALPHA Material CFOP category
  INF_INDEX                        :   "", // CHAR (5) Inflation Index
  UNTIL_DATE                       :   "", // DATS (8) Inflation Index Date
  DELIV_COMPL                      :   "", // CHAR (1) "Outward Delivery Completed" Indicator
  PART_DELIV                       :   "", // CHAR (1) Partial Delivery at Item Level (Stock Transfer)
  SHIP_BLOCKED                     :   "", // CHAR (1) Item blocked for SD delivery
  PREQ_NAME                        :   "", // CHAR (12) Name of requisitioner/requester
  PERIOD_IND_EXPIRATION_DATE       :   "", // CHAR (1) ALPHA=PERKZ Period Indicator for Shelf Life Expiration Date
  INT_OBJ_NO                       :   "", // NUMC (18) Configuration (internal object number) SU3=CUX
  PCKG_NO                          :   "", // NUMC (10) Package number
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  VENDRBATCH                       :   "", // CHAR (15) Vendor Batch Number
  CALCTYPE                         :   "", // CHAR (1) Pricing type
  GRANT_NBR                        :   "", // CHAR (20) ALPHA=ALPHA Grant SU3=GM_GRANT_NBR
  CMMT_ITEM_LONG                   :   "", // CHAR (24) ALPHA=FMCIL Commitment item SU3=FPS
  FUNC_AREA_LONG                   :   "", // CHAR (16) Functional Area SU3=FBE
  NO_ROUNDING                      :   "", // CHAR (1) Indicator: suppress rounding in purchase order item
  PO_PRICE                         :   "", // CHAR (1) Price Adoption: 1 = Gross, 2 = Net
  SUPPL_STLOC                      :   "", // CHAR (4) Issuing Storage Location for Stock Transport Order
  SRV_BASED_IV                     :   "", // CHAR (1) Indicator for Service-Based Invoice Verification
  FUNDS_RES                        :   "", // CHAR (10) ALPHA=ALPHA Document number for earmarked funds SU3=KBL
  RES_ITEM                         :   "", // NUMC (3) Earmarked Funds: Document Item SU3=KBP
  ORIG_ACCEPT                      :   "", // CHAR (1) Acceptance At Origin
  ALLOC_TBL                        :   "", // CHAR (10) ALPHA=ALPHA Allocation Table Number SU3=ABE
  ALLOC_TBL_ITEM                   :   "", // NUMC (5) Item number of allocation table
  SRC_STOCK_TYPE                   :   "", // CHAR (1) Stock Type of Source Storage Location in STO
  REASON_REJ                       :   "", // CHAR (2) Reason for rejection of quotations and sales orders
  CRM_SALES_ORDER_NO               :   "", // CHAR (10) ALPHA=ALPHA CRM Sales Order Number for TPOP Process
  CRM_SALES_ORDER_ITEM_NO          :   "", // NUMC (6) CRM Sales Order Item Number in TPOP Process
  CRM_REF_SALES_ORDER_NO           :   "", // CHAR (35) ALPHA=ALPHA CRM Reference Order Number for TPOP Process
  CRM_REF_SO_ITEM_NO               :   "", // CHAR (6) CRM Reference Sales Order Item Number in TPOP Process
  PRIO_URGENCY                     :   "", // NUMC (2) Requirement Urgency
  PRIO_REQUIREMENT                 :   "", // NUMC (3) Requirement Priority
  REASON_CODE                      :   "", // CHAR (4) Goods Receipt Reason Code
  FUND_LONG                        :   "", // CHAR (20) Long Fund (Obsolete)
  LONG_ITEM_NUMBER                 :   "", // CHAR (40) Item Number Length
  EXTERNAL_SORT_NUMBER             :   "", // NUMC (5) External Sorting
  EXTERNAL_HIERARCHY_TYPE          :   "", // CHAR (4) External Hierarchy Category
  RETENTION_PERCENTAGE             :  "0", // DEC (5.2) Retention in Percent
  DOWNPAY_TYPE                     :   "", // CHAR (4) Down Payment Indicator
  DOWNPAY_AMOUNT                   :  "0", // DEC (23.4) Down Payment Amount in BAPI
  DOWNPAY_PERCENT                  :  "0", // DEC (5.2) Down Payment Percentage
  DOWNPAY_DUEDATE                  :   "", // DATS (8) Due Date for Down Payment
  EXT_RFX_NUMBER                   :   "", // CHAR (35) Document Number of External Document
  EXT_RFX_ITEM                     :   "", // CHAR (10) Item Number of External Document
  EXT_RFX_SYSTEM                   :   "", // CHAR (10) ALPHA=ALPHA Logical System
  SRM_CONTRACT_ID                  :   "", // CHAR (10) ALPHA=ALPHA Central Contract
  SRM_CONTRACT_ITM                 :   "", // NUMC (10) Central Contract Item Number
  BUDGET_PERIOD                    :   "", // CHAR (10) FM: Budget Period SU3=BUDPER
  BLOCK_REASON_ID                  :   "", // CHAR (4) Blocking Reason - ID
  BLOCK_REASON_TEXT                :   "", // CHAR (40) Blocking Reason - Text
  SPE_CRM_FKREL                    :   "", // CHAR (1) Billing Relevance CRM
  DATE_QTY_FIXED                   :   "", // CHAR (1) Delivery Date and Quantity Fixed
  GI_BASED_GR                      :   "", // CHAR (1) Indicator for GI-based goods receipt
  SHIPTYPE                         :   "", // CHAR (2) Shipping type
  HANDOVERLOC                      :   "", // CHAR (10) ALPHA=ALPHA Location for a physical handover of goods
  TC_AUT_DET                       :   "", // CHAR (2) Tax Code Automatically Determined
  MANUAL_TC_REASON                 :   "", // CHAR (2) Manual Tax Code Reason
  FISCAL_INCENTIVE                 :   "", // CHAR (4) Tax Incentive Type
  FISCAL_INCENTIVE_ID              :   "", // CHAR (4) Incentive ID
  TAX_SUBJECT_ST                   :   "", // CHAR (1) Tax Subject to Substituição Tributária
  REQ_SEGMENT                      :   "", // CHAR (16) Requirement Segment SU3=SGT_R
  STK_SEGMENT                      :   "", // CHAR (16) Stock Segment SU3=SGT_S
  SF_TXJCD                         :   "", // CHAR (15) Jurisdiction Code of the Point of Origin
  INCOTERMS2L                      :   "", // CHAR (70) Incoterms Location 1
  INCOTERMS3L                      :   "", // CHAR (70) Incoterms Location 2
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  EMATERIAL_LONG                   :   "", // CHAR (40) Material Number (40 Characters, Technical Requirement)
};

// BAPIESUHC  External Services: Limits
const POLIMITS = [];

// prettier-ignore
const POLIMITS_line = {
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

// BAPIEKKOP  Partner
const POPARTNER = [];

// prettier-ignore
const POPARTNER_line = {
  PARTNERDESC                      :   "", // CHAR (2) Language-specific description of partner function
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  BUSPARTNO                        :   "", // CHAR (10) ALPHA=ALPHA Number of a Business Partner in Vendor Master Record
  DELETE_IND                       :   "", // CHAR (1) Deletion Indicator
};

// BAPIMEPOSCHEDULE  Delivery Schedule
const POSCHEDULE = [];

// prettier-ignore
const POSCHEDULE_line = {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  DEL_DATCAT_EXT                   :   "", // CHAR (1) Category of delivery date
  DELIVERY_DATE                    :   "", // CHAR (10) Delivery Date
  QUANTITY                         : "0.0", // QUAN (13.3) Scheduled Quantity
  DELIV_TIME                       :   "", // TIMS (6) Delivery Date Time-Spot
  STAT_DATE                        :   "", // DATS (8) Statistics-Relevant Delivery Date
  PREQ_NO                          :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number SU3=BAN
  PREQ_ITEM                        :   "", // NUMC (5) Item number of purchase requisition SU3=BAP
  PO_DATE                          :   "", // DATS (8) Order date of schedule line
  ROUTESCHED                       :   "", // CHAR (10) Route Schedule
  MS_DATE                          :   "", // DATS (8) Material Availability Date
  MS_TIME                          :   "", // TIMS (6) Material Staging Time (Local, Relating to a Plant)
  LOAD_DATE                        :   "", // DATS (8) Loading Date
  LOAD_TIME                        :   "", // TIMS (6) Loading Time (Local Time Relating to a Shipping Point)
  TP_DATE                          :   "", // DATS (8) Transportation Planning Date
  TP_TIME                          :   "", // TIMS (6) Transp. Planning Time (Local, Relating to a Shipping Point)
  GI_DATE                          :   "", // DATS (8) Goods Issue Date
  GI_TIME                          :   "", // TIMS (6) Time of Goods Issue (Local, Relating to a Plant)
  DELETE_IND                       :   "", // CHAR (1) Deletion indicator in purchasing document
  REQ_CLOSED                       :   "", // CHAR (1) Purchase requisition closed
  GR_END_DATE                      :   "", // DATS (8) Goods Receipt End Date
  GR_END_TIME                      :   "", // TIMS (6) Goods Receipt End Time (Local, Relating to a Plant)
  COM_QTY                          : "0.0", // QUAN (13.3) Committed quantity
  COM_DATE                         :   "", // DATS (8) Committed date
  GEO_ROUTE                        :   "", // CHAR (10) Description of a Geographical Route
  HANDOVERDATE                     :   "", // DATS (8) Handover Date at the Handover Location
  HANDOVERTIME                     :   "", // TIMS (6) Handover time at the handover location
};

// BAPIESLLC  Communication Structure: Create Service Line
const POSERVICES = [];

// prettier-ignore
const POSERVICES_line = {
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

// BAPIMEPOSHIPPEXP  Export Structure for Shipping Data
const POSHIPPINGEXP = [];

// prettier-ignore
const POSHIPPINGEXP_line = {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  SHIP_POINT                       :   "", // CHAR (4) Shipping Point/Receiving Point SU3=VST
  DLV_PRIO                         :   "", // NUMC (2) Delivery Priority
  ROUTE                            :   "", // CHAR (6) Route
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  SOLD_TO                          :   "", // CHAR (10) ALPHA=ALPHA Sold-to party SU3=VAG
  FWDAGENT                         :   "", // CHAR (10) ALPHA=ALPHA Forwarding agent
  SALESORG                         :   "", // CHAR (4) Sales Organization SU3=VKO
  DISTR_CHAN                       :   "", // CHAR (2) Distribution Channel SU3=VTW
  DIVISION                         :   "", // CHAR (2) Division SU3=SPA
  DEL_CREATE_DATE                  :   "", // DATS (8) Delivery Creation Date
  PLND_DELRY                       :  "0", // DEC (3) Planned delivery time in days
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) ISO code for language key
  SHIP_COND                        :   "", // CHAR (2) Shipping conditions
  LOADINGGRP                       :   "", // CHAR (4) Loading Group
  TRANS_GRP                        :   "", // CHAR (4) Transportation Group
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  ORDCOMBIND                       :   "", // CHAR (1) Order Combination Indicator
  TIME_ZONE                        :   "", // CHAR (6) Time zone of delivering location
  AUTH_NUMBER                      :   "", // CHAR (20) ALPHA=ALPHA Return Material Authorization Number
  SRC_DLV_NO                       :   "", // CHAR (10) ALPHA=ALPHA Source delivery number
  SRC_HANDLG_UNIT                  :   "", // CHAR (20) ALPHA=ALPHA Source/Target handling unit (external ID)
  INSPOUT_GUID                     :   "", // CHAR (32) Inspection Outcome: Stock  GUID set by EWM
  FOLLOW_UP                        :   "", // CHAR (4) Default Follow-Up Activity Code
};

// BAPIESKLC  External Services: Account Assignment Distribution for Service Lines
const POSRVACCESSVALUES = [];

// prettier-ignore
const POSRVACCESSVALUES_line = {
  PCKG_NO                          :   "", // NUMC (10) Package number
  LINE_NO                          :   "", // NUMC (10) Line Number
  SERNO_LINE                       :   "", // NUMC (2) Seq. Number of Acc. Assignment Specification: Service Line
  PERCENTAGE                       :  "0", // DEC (4.1) Percentage for Account Assignment Value Distribution
  SERIAL_NO                        :   "", // NUMC (2) Sequential Number of Account Assignment
  QUANTITY                         : "0.0", // QUAN (13.3) Quantity with Sign
  NET_VALUE                        : "0.0", // CURR (11.2) Net Value of Item
};

// BAPIMEPOTEXTHEADER  Header Texts
const POTEXTHEADER = [];

// prettier-ignore
const POTEXTHEADER_line = {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  TEXT_ID                          :   "", // CHAR (4) Text ID
  TEXT_FORM                        :   "", // CHAR (2) Tag column
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};

// BAPIMEPOTEXT  Item Texts
const POTEXTITEM = [];

// prettier-ignore
const POTEXTITEM_line = {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  TEXT_ID                          :   "", // CHAR (4) Text ID
  TEXT_FORM                        :   "", // CHAR (2) Tag column
  TEXT_LINE                        :   "", // CHAR (132) Text Line
};

// BAPIRET2  Return Parameter(s)
const RETURN = [];

// prettier-ignore
const RETURN_line = {
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

// BAPIMEPOSERIALNO  Serial Numbers in Purchase Order BAPIs
const SERIALNUMBER = [];

// prettier-ignore
const SERIALNUMBER_line = {
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  SCHED_LINE                       :   "", // NUMC (4) Schedule line
  DELETE_IND                       :   "", // CHAR (1) Deletion indicator in purchasing document
  SERIALNO                         :   "", // CHAR (18) ALPHA=GERNR Serial Number SU3=SER
  UII                              :   "", // CHAR (72) Unique Item Identifier SU3=UII
};


//
// EXPORT PARAMETERS
//

// BAPIEIKP  Foreign Trade: Export/Import: Header Data

// prettier-ignore
const POEXPIMPHEADER = {
  TRANSPORT_MODE                   :   "", // CHAR (1) Mode of Transport for Foreign Trade
  CUSTOMS                          :   "", // CHAR (6) Customs Office: Office of Exit/Entry for Foreign Trade
};

// BAPIMEPOHEADER  Purchase Order Header Data

// prettier-ignore
const POHEADER = {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
};
