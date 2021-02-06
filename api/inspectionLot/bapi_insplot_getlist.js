//
// BAPI_INSPLOT_GETLIST var: 21  struct: 2  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// BATCH           :           "", // CHAR (10) Batch Number SU3=CHA
// CREAT_DAT       :           "", // DATS (8) Start Date for Selection
// CUSTOMER        :           "", // CHAR (10) ALPHA=ALPHA Customer Number
// DELIV_ITEM      :           "", // NUMC (6) Delivery Item
// DELIV_NUMB      :           "", // CHAR (10) ALPHA=ALPHA Delivery SU3=VL
// MANUFACTURER    :           "", // CHAR (10) ALPHA=ALPHA Manufacturer SU3=LIF
// MAT_DOC         :           "", // CHAR (10) ALPHA=ALPHA Material Document SU3=MBN
// MATDOC_ITM      :           "", // NUMC (4) Item in Material Document SU3=POS
// MATERIAL        :           "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
// MAX_ROWS        :          100, // INT4 (10) Upper Limit for Number of Inspection Lots
// ORDER           :           "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
// PLANT           :           "", // CHAR (4) Plant SU3=WRK
// PO_ITEM         :           "", // NUMC (5) Item in Purchasing Document SU3=BSP
// PO_NUMBER       :           "", // CHAR (10) ALPHA=ALPHA Purchasing Document SU3=BES
// RS_ORDER        :           "", // CHAR (12) ALPHA=ALPHA Production Version Number
// SELECTION_ID    :        SPACE, // CHAR (7) Status Selection Profile
// STATUS_CREATED  :          'X', // CHAR (1) Use Created Lots
// STATUS_RELEASED :          'X', // CHAR (1) Use Released Lots
// STATUS_UD       :          'X', // CHAR (1) Use Lots with Usage Decision
// VENDOR          :           "", // CHAR (10) ALPHA=ALPHA Vendor Number SU3=LIF
// VERSION         :           "", // CHAR (4) Production Version SU3=VER
// MATERIAL_EVG    :           {}, // BAPIMGVMATNR Long Material Number

// TABLE PARAMETERS

INSPLOT_LIST       :           [], // BAPI2045L1 List of Inspection Lots

// EXPORT PARAMETERS

// RETURN          :           {}, // BAPIRETURN1 Return Value
};

const result = await client.call("BAPI_INSPLOT_GETLIST", parameters);

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

// BAPI2045L1  List of Inspection Lots
const INSPLOT_LIST= [];

// prettier-ignore
const INSPLOT_LIST= {
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  CREAT_DAT                        :   "", // DATS (8) Date on Which the Data Record Was Created
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer (Ship-To Party)
  DELIV_ITEM                       :   "", // NUMC (6) Delivery Item
  DELIV_NUMB                       :   "", // CHAR (10) ALPHA=ALPHA Delivery SU3=VL
  MAT_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Number of Material Document SU3=MBN
  MATDOC_ITM                       :   "", // NUMC (4) Item in Material Document SU3=POS
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  ORDER_NO                         :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  PO_ITEM                          :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
};


//
// EXPORT PARAMETERS
//

// BAPIRETURN1  Return Value

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
};
