//
// BAPI_SALESORDER_GETSTATUS var: 1  struct: 1  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

SALESDOCUMENT    :           "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN

// TABLE PARAMETERS

// STATUSINFO    :           [], // BAPISDSTAT Status Information

// EXPORT PARAMETERS

// RETURN        :           {}, // BAPIRETURN Error Text
};

const result = await client.call("BAPI_SALESORDER_GETSTATUS", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPISDSTAT  Status Information
const STATUSINFO= [];

// prettier-ignore
const STATUSINFO= {
  DOC_NUMBER                       :   "", // CHAR (10) ALPHA=ALPHA Sales Document SU3=AUN
  DOC_DATE                         :   "", // DATS (8) Document Date (Date Received/Sent)
  PURCH_NO                         :   "", // CHAR (20) Customer purchase order number
  PRC_STAT_H                       :   "", // CHAR (1) Overall processing status of document
  DLV_STAT_H                       :   "", // CHAR (1) Overall delivery status for all items
  REQ_DATE_H                       :   "", // DATS (8) Requested delivery date
  DLV_BLOCK                        :   "", // CHAR (2) Delivery block (document header)
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item SU3=APO
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  SHORT_TEXT                       :   "", // CHAR (40) Short text for sales order item
  REQ_DATE                         :   "", // DATS (8) Schedule line date
  REQ_QTY                          : "0.0", // QUAN (15.3) Cumulative order quantity in sales units
  CUM_CF_QTY                       : "0.0", // QUAN (15.3) Cumulative confirmed quantity in sales unit
  SALES_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Sales unit
  NET_VALUE                        : "0.0", // CURR (15.2) Net value of the order item in document currency
  CURRENCY                         :   "", // CUKY (5) SD document currency SU3=FWS
  NET_PRICE                        : "0.0", // CURR (11.2) Net price
  COND_P_UNT                       :  "0", // DEC (5) Condition pricing unit
  COND_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Condition unit
  DLV_STAT_I                       :   "", // CHAR (1) Overall delivery status of the item
  DELIV_NUMB                       :   "", // CHAR (10) ALPHA=ALPHA Delivery SU3=VL
  DELIV_ITEM                       :   "", // NUMC (6) Delivery Item
  DELIV_DATE                       :   "", // DATS (8) Delivery date
  DLV_QTY                          : "0.0", // QUAN (13.3) Actual quantity delivered (in sales units)
  REF_QTY                          : "0.0", // QUAN (15.3) Referenced quantity in base unit of measure
  S_UNIT_ISO                       :   "", // CHAR (3) Sales unit in ISO code
  CD_UNT_ISO                       :   "", // CHAR (3) Condition unit of measure in UoM
  CURR_ISO                         :   "", // CHAR (3) ISO code currency
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  PO_ITM_NO                        :   "", // CHAR (6) ALPHA=ALPHA Item Number of the Underlying Purchase Order
  CREATION_DATE                    :   "", // DATS (8) Date on Which Record Was Created
  CREATION_TIME                    :   "", // TIMS (6) Entry time
  S_UNIT_DLV                       :   "", // UNIT (3) ALPHA=CUNIT Delivery unit
  DLV_UNIT_ISO                     :   "", // CHAR (3) Unit of measure for delivery unit in ISO code
  REA_FOR_RE                       :   "", // CHAR (2) Reason for rejection of quotations and sales orders
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};


//
// EXPORT PARAMETERS
//

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
