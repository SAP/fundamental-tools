//
// /COE/RBP_PAM_SERVICE_ORD_CC exception: 0  struct: 0  table: 3  var: 1
//
// abap 2.3.0 at: 2021-04-23 11:59:34
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// IV_ORDERID       :           "", // CHAR (12) ALPHA=ALPHA no text (undefined) SU3=ANR

// EXPORT PARAMETERS

// ET_COSTS_DETAILS :           [], // /COE/RBP_T_PAM_ORDER_COSTS no text (undefined)
// ET_COSTS_SUM     :           [], // BAPI_ALM_ORDER_COSTS_SUM_ET no text (undefined)
// ET_RETURN        :           [], // BAPIRETTAB no text (undefined)
};

const result = await client.call("/COE/RBP_PAM_SERVICE_ORD_CC", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//

// /COE/RBP_T_PAM_ORDER_COSTS  
const ET_COSTS_DETAILS = [];

// prettier-ignore
const ET_COSTS_DETAILS_line = {
  DEBIT_TYPE                       :   "", // NUMC (1) Debit type
  VALUE_CATEGORY                   :   "", // CHAR (14) Value category
  CALC_MOTIVE                      :   "", // CHAR (2) Accounting Indicator
  BUDGET_TYPE                      :   "", // CHAR (4) Budget Type Budgeting/Planning
  COSTS_ACT                        : "0.0", // CURR (15.2) Maintenance Costs (Actual) by Value Category
  COSTS_PLAN                       : "0.0", // CURR (15.2) Maintenance Costs (Planned) by Value Category
  COSTS_EST                        : "0.0", // CURR (15.2) Maintenance Costs (Estimated) by Value Category
  REVENUES_ACT                     : "0.0", // CURR (15.2) Maintenance revenue (actual) by value category
  REVENUES_PLAN                    : "0.0", // CURR (15.2) Maintenance revenue (planned) by value category
  REVENUES_EST                     : "0.0", // CURR (15.2) Maintenance revenue (estimated) by value category
  SUM_TOTAL_ACT_BY_CAT             : "0.0", // CURR (15.2) Sum total (actual) by value category
  SUM_TOTAL_PLAN_BY_CAT            : "0.0", // CURR (15.2) Sum total (planned) by value category
  SUM_TOTAL_EST_BY_CAT             : "0.0", // CURR (15.2) Sum total (estimated) by value category
  CURRENCY                         :   "", // CUKY (5) Currency for diplaying PM order costs
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
  TEXT                             :   "", // CHAR (30) Text
};

// BAPI_ALM_ORDER_COSTS_SUM_ET  
const ET_COSTS_SUM = [];

// prettier-ignore
const ET_COSTS_SUM_line = {
  TOTAL_COSTS_ACT                  : "0.0", // CURR (15.2) Total(actual) maintenance costs
  TOTAL_COSTS_PLAN                 : "0.0", // CURR (15.2) Total plant maintenance costs (planned)
  TOTAL_COSTS_EST                  : "0.0", // CURR (15.2) Total maintenance costs (estimated)
  TOTAL_SETTLEMENT_COSTS           : "0.0", // CURR (15.2) Total Settlement Costs (PMCO)
  TOTAL_REVENUES_ACT               : "0.0", // CURR (15.2) Total plant maintenance revenues (actual)
  TOTAL_REVENUES_PLAN              : "0.0", // CURR (15.2) Total (planned) maintenance revenues
  TOTAL_REVENUES_EST               : "0.0", // CURR (15.2) Total maintenance revenue (estimated)
  TOTAL_SUM_ACT                    : "0.0", // CURR (15.2) Actual sum of maintenance order (costs - revenues)
  TOTAL_SUM_PLAN                   : "0.0", // CURR (15.2) Plan sum of maintenance order (costs - revenues)
  TOTAL_SUM_EST                    : "0.0", // CURR (15.2) Estimated total of maintenance order (costs - revenue)
  CURRENCY                         :   "", // CUKY (5) Currency for diplaying PM order costs
  CURRENCY_ISO                     :   "", // CHAR (3) ISO currency code
};

// BAPIRETTAB  
const ET_RETURN = [];

// prettier-ignore
const ET_RETURN_line = {
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
