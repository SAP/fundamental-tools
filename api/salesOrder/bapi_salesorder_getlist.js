//
// BAPI_SALESORDER_GETLIST var: 9  struct: 2  table: 3  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

CUSTOMER_NUMBER          :           "", // CHAR (10) ALPHA=ALPHA Customer number SU3=KUN
SALES_ORGANIZATION       :           "", // CHAR (4) Sales organization SU3=VKO
// DOCUMENT_DATE         :           "", // DATS (8) Entry date
// DOCUMENT_DATE_TO      :           "", // DATS (8) Entry date up to and including
// MATERIAL              :           "", // CHAR (18) ALPHA=MATN1 Material number SU3=MAT
// MATERIAL_LONG         :           "", // CHAR (40) Material Number (40 Characters, Necessary for Technical Reasons)
// PURCHASE_ORDER        :           "", // CHAR (20) Customer purchase order number
// PURCHASE_ORDER_NUMBER :           "", // CHAR (35) Customer Purchase Order Number
// TRANSACTION_GROUP     :            0, // CHAR (1) Single-Character Indicator
// MATERIAL_EVG          :           {}, // BAPIMGVMATNR Long Material Number

// TABLE PARAMETERS

SALES_ORDERS             :           [], // BAPIORDERS Table of orders for the customer
// EXTENSIONEX           :           [], // BAPIPAREX Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut
// EXTENSIONIN           :           [], // BAPIPAREX Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut

// EXPORT PARAMETERS

// RETURN                :           {}, // BAPIRETURN Error Text
};

const result = await client.call("BAPI_SALESORDER_GETLIST", parameters);

//
// IMPORT PARAMETERS
//

// BAPIMGVMATNR  Long Material Number

// prettier-ignore
const MATERIAL_EVG= {
  MATERIAL_EXT                     :   "", // CHAR (40) ALPHA=MATNL External Long Material Number
  MATERIAL_VERS                    :   "", // CHAR (10) ALPHA=MATNW Material Version Number SU3=MATVERS
  MATERIAL_GUID                    :   "", // CHAR (32) Material number (external GUID)
};


//
// TABLE PARAMETERS
//

// BAPIORDERS  Table of orders for the customer
const SALES_ORDERS= [];

// prettier-ignore
const SALES_ORDERS= {
  SALES_ORG                        :   "", // CHAR (4) Sales Organization SU3=VKO
  DOC_DATE                         :   "", // DATS (8) Document Date (Date Received/Sent)
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  PURCH_NO                         :   "", // CHAR (20) Customer purchase order number
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
};

// BAPIPAREX  Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut
const EXTENSIONEX= [];

// prettier-ignore
const EXTENSIONEX= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIPAREX  Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut
const EXTENSIONIN= [];

// prettier-ignore
const EXTENSIONIN= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
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
