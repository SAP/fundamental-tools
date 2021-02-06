//
// BAPI_ALM_OPERATION_GET_DETAIL var: 3  struct: 1  table: 8  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

IV_ACTIVITY        :           "", // CHAR (4) ALPHA=NUMCV Operation Number SU3=VGN
IV_ORDERID         :           "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
// IV_SUB_ACTIVITY :           "", // CHAR (4) ALPHA=NUMCV Suboperation Number

// TABLE PARAMETERS

ET_TEXT            :           [], // BAPI_ALM_TEXT Text Header for ALM Order BAPIs
ET_TEXT_LINES      :           [], // BAPI_ALM_TEXT_LINES SAPscript: Text Lines
RETURN             :           [], // BAPIRET2 Return Parameter Table
// COMP_PMCO_OP    :           [], // PMCO_KGR_OP PMCO extract: Plan/actual costs and revenues by val.category
// ET_SRULES       :           [], // BAPI_ALM_ORDER_SRULE_E Export Structure for PM/CS BAPIs Settlement Rule
// EXTENSION_IN    :           [], // BAPIPAREX Reference Structure for BAPI Parameter ExtensionIn
// EXTENSION_OUT   :           [], // BAPIPAREX Reference Structure for BAPI Parameter ExtensionOut
// LIST_PMCO_OP    :           [], // PMCO_EXT_OP PMCO extract: Total costs and revenues of a PM order

// EXPORT PARAMETERS

// ES_OPERATION    :           {}, // BAPI_ALM_ORDER_OPERATION_E Export Structure for PM/CS BAPIs Operations
};

const result = await client.call("BAPI_ALM_OPERATION_GET_DETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI_ALM_TEXT  Text Header for ALM Order BAPIs
const ET_TEXT= [];

// prettier-ignore
const ET_TEXT= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  RES_ITEM                         :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  RES_TYPE                         :   "", // CHAR (1) Record type
  ITEM_NO_OF_PRODUCTION_RESOURCE   :   "", // NUMC (4) Item Number for Production Resource/Tool
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  TEXTSTART                        :   "", // NUMC (8) Cursor on the first line of a text
  TEXTEND                          :   "", // NUMC (8) Cursor on the first line of a text
};

// BAPI_ALM_TEXT_LINES  SAPscript: Text Lines
const ET_TEXT_LINES= [];

// prettier-ignore
const ET_TEXT_LINES= {
  TDFORMAT                         :   "", // CHAR (2) Tag column
  TDLINE                           :   "", // CHAR (132) Text Line
};

// BAPIRET2  Return Parameter Table
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

// PMCO_KGR_OP  PMCO extract: Plan/actual costs and revenues by val.category
const COMP_PMCO_OP= [];

// prettier-ignore
const COMP_PMCO_OP= {
  AUFNR                            :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  VORNR                            :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  UVORN                            :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  BELTP                            :   "", // NUMC (1) Debit type
  ACPOS                            :   "", // CHAR (14) Value category
  BEMOT                            :   "", // CHAR (2) Accounting Indicator
  VORGA                            :   "", // CHAR (4) Budget Type Budgeting/Planning
  IKOSTENKGR                       : "0.0", // CURR (15.2) Maintenance Costs (Actual) by Value Category
  PKOSTENKGR                       : "0.0", // CURR (15.2) Maintenance Costs (Planned) by Value Category
  SKOSTENKGR                       : "0.0", // CURR (15.2) Maintenance Costs (Estimated) by Value Category
  IERTRAGKGR                       : "0.0", // CURR (15.2) Maintenance revenue (actual) by value category
  PERTRAGKGR                       : "0.0", // CURR (15.2) Maintenance revenue (planned) by value category
  SERTRAGKGR                       : "0.0", // CURR (15.2) Maintenance revenue (estimated) by value category
  IGESAMTKGR                       : "0.0", // CURR (15.2) Sum total (actual) by value category
  PGESAMTKGR                       : "0.0", // CURR (15.2) Sum total (planned) by value category
  SGESAMTKGR                       : "0.0", // CURR (15.2) Sum total (estimated) by value category
  WAERS                            :   "", // CUKY (5) Currency for diplaying PM order costs
};

// BAPI_ALM_ORDER_SRULE_E  Export Structure for PM/CS BAPIs Settlement Rule
const ET_SRULES= [];

// prettier-ignore
const ET_SRULES= {
  OBJECT_NO                        :   "", // CHAR (22) Object number SU3=ONR
  DIST_RULE_GROUP                  :   "", // NUMC (3) Distribution rule group
  DIST_RULE_SEQ_NUMBER             :   "", // NUMC (3) Sequence number of distribution rule
  SETTL_TYPE                       :   "", // CHAR (3) ALPHA=PERBZ Settlement type
  SOURCE                           :   "", // CHAR (3) ALPHA=ALPHA Source Assignment
  VALID_FROM_YEAR                  :   "", // NUMC (4) ALPHA=GJAHR Valid-from year
  VALID_FROM_PER                   :   "", // NUMC (3) Valid-from period
  VALID_TO_YEAR                    :   "", // NUMC (4) ALPHA=GJAHR Valid-to year
  VALID_TO_PER                     :   "", // NUMC (3) Valid to
  PERCENTAGE                       :  "0", // DEC (5.2) Settlement percentage rate
  EQUIV_NUMBER                     :  "0", // DEC (10) Equivalence number for order settlement
  BMENG                            : "0.0", // QUAN (15.3) Quantity for settlement
  BEINH                            :   "", // UNIT (3) ALPHA=CUNIT Unit of measure
  BEINH_ISO                        :   "", // CHAR (3) ISO code for unit of measurement
  AMOUNT                           : "0.0", // CURR (15.2) Amount for amount rule
  CURRENCY                         :   "", // CUKY (5) Currency for the amount in the amount rule
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
  BRTYP                            :   "", // CHAR (2) ALPHA=ALPHA Amount rule type
  BREST                            : "0.0", // CURR (15.2) Remaining Amount for Amount Settlement w. Amount Rule Cat.
  FIRST_USED_YEAR                  :   "", // NUMC (4) ALPHA=GJAHR Year first used
  FIRST_USED_PER                   :   "", // NUMC (3) Period of first use
  LAST_USED_YEAR                   :   "", // NUMC (4) ALPHA=GJAHR Year last used
  LAST_USED_PER                    :   "", // NUMC (3) Period of last use
  ZINCL                            :   "", // CHAR (1) "Including overheads" - indicator
  DFREG                            :   "", // CHAR (3) ALPHA=ALPHA Default Rule
  AVORG                            :   "", // CHAR (4) Settlement transaction
  VERSION                          :   "", // CHAR (3) ALPHA=ALPHA Version SU3=KVS
  KONTY                            :   "", // CHAR (2) ALPHA=OBART Account assignment category
  KOKRS                            :   "", // CHAR (4) Controlling area of receiver SU3=CAC
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  GL_ACCOUNT                       :   "", // CHAR (10) ALPHA=ALPHA G/L Account Number SU3=SAK
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Receiver cost center SU3=KOS
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  WBS_ELEMENT                      :   "", // CHAR (24) ALPHA=ABPSN Work Breakdown Structure Element (WBS Element) SU3=PRO
  ASSETMAINO                       :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number SU3=AN1
  ASSETSUBNO                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber SU3=AN2
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  VAL_TYPE                         :   "", // CHAR (10) Valuation type SU3=BWT
  NETWORK                          :   "", // CHAR (12) ALPHA=ALPHA Network Number for Account Assignment SU3=NET
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  PROFIT_SEGM_NO                   :   "", // NUMC (10) Profitability Segment Number (CO-PA)
  PASUBNR                          :   "", // NUMC (4) Profitability Segment Changes (CO-PA)
  SALES_ORD                        :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  S_ORD_ITEM                       :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  REC_IND                          :   "", // CHAR (2) ALPHA=ALPHA Recovery Indicator
  RIFIND                           :   "", // CHAR (1) Derivation Rule for Recovery Indicator in Settlement (JV)
  ORDER_ITNO                       :   "", // NUMC (4) Order item number
  COSTOBJECT                       :   "", // CHAR (12) Cost Object SU3=KTR
  CO_BUSPROC                       :   "", // CHAR (12) ALPHA=ALPHA Business Process SU3=KWP
  REC_OBJNR1                       :   "", // CHAR (22) Object number for settlement receiver
  REC_OBJNR2                       :   "", // CHAR (22) Object number for settlement receiver
  MRULE                            :   "", // CHAR (4) Manipulation Rule
  EXTNR                            :   "", // NUMC (3) Distribution Rule Number
  METH_TRACING_FACTOR              :   "", // NUMC (3) Method for Determining the Tracing Factor for Settlement
  MOVEMENTTYPE                     :   "", // CHAR (3) Asset Transaction Type
  SETTL_STRATEGY                   :   "", // CHAR (3) Strategy for automatic generation of settlement rules
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPIPAREX  Reference Structure for BAPI Parameter ExtensionIn
const EXTENSION_IN= [];

// prettier-ignore
const EXTENSION_IN= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIPAREX  Reference Structure for BAPI Parameter ExtensionOut
const EXTENSION_OUT= [];

// prettier-ignore
const EXTENSION_OUT= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// PMCO_EXT_OP  PMCO extract: Total costs and revenues of a PM order
const LIST_PMCO_OP= [];

// prettier-ignore
const LIST_PMCO_OP= {
  AUFNR                            :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  VORNR                            :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  UVORN                            :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  IKOSTEN                          : "0.0", // CURR (15.2) Total(actual) maintenance costs
  PKOSTEN                          : "0.0", // CURR (15.2) Total plant maintenance costs (planned)
  SKOSTEN                          : "0.0", // CURR (15.2) Total maintenance costs (estimated)
  AKOSTEN                          : "0.0", // CURR (15.2) Total Settlement Costs (PMCO)
  IERTRAG                          : "0.0", // CURR (15.2) Total plant maintenance revenues (actual)
  PERTRAG                          : "0.0", // CURR (15.2) Total (planned) maintenance revenues
  SERTRAG                          : "0.0", // CURR (15.2) Total maintenance revenue (estimated)
  IGESAMT                          : "0.0", // CURR (15.2) Actual sum of maintenance order (costs - revenues)
  PGESAMT                          : "0.0", // CURR (15.2) Plan sum of maintenance order (costs - revenues)
  SGESAMT                          : "0.0", // CURR (15.2) Estimated total of maintenance order (costs - revenue)
  WAERS                            :   "", // CUKY (5) Currency for diplaying PM order costs
};


//
// EXPORT PARAMETERS
//

// BAPI_ALM_ORDER_OPERATION_E  Export Structure for PM/CS BAPIs Operations

// prettier-ignore
const ES_OPERATION= {
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
};
