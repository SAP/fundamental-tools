//
// BAPI_PO_DELETE_HISTORY exception: 0  struct: 0  table: 3  var: 1
//
// abap api
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

PURCHASEORDER     :           "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES

// TABLE PARAMETERS

// POITEMHISTORY  :           [], // BAPIEKBE Transfer Structure for PO History
// RETURN         :           [], // BAPIRET2 Return Parameter
// TOKENREFERENCE :           [], // CSL_TR_EXS CSL: Data Element CSL_TR_EXT as Structure (BAPI Tab.Arg.)
};

const result = await client.call("BAPI_PO_DELETE_HISTORY", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIEKBE  Transfer Structure for PO History
const POITEMHISTORY = [];

// prettier-ignore
const POITEMHISTORY_line = {
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

// BAPIRET2  Return Parameter
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

// CSL_TR_EXS  CSL: Data Element CSL_TR_EXT as Structure (BAPI Tab.Arg.)
const TOKENREFERENCE = [];

// prettier-ignore
const TOKENREFERENCE_line = {
  TR_EXT                           :   "", // CHAR (255) CSL: CSL-External Representation of a Token Reference
};
