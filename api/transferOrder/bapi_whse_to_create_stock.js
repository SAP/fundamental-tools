//
// BAPI_WHSE_TO_CREATE_STOCK var: 9  struct: 0  table: 3  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

WHSEMVMT      :           "", // NUMC (3) Movement type for Warehouse Management SU3=BWL
WHSENUMBER    :           "", // CHAR (3) Warehouse number / warehouse complex SU3=LGN
// ADDREFNO   :        SPACE, // CHAR (20) Additional number for transfer requirement
// ADDREM     :        SPACE, // CHAR (4) TO processing comment (code)
// MINWMIND   :        SPACE, // CHAR (1) Transfer order transfers no real storage bin stock
// NOTPRIIND  :        SPACE, // CHAR (1) Do not print transfer order
// PRICTLIND  :        SPACE, // CHAR (2) Indicator: form and sort code for printing transfer orders
// REQNUMBER  :        SPACE, // CHAR (10) ALPHA=ALPHA Requirement Tracking Number
// REQTYPE    :        SPACE, // CHAR (1) Requirement Type

// TABLE PARAMETERS

CREATEDATA    :           [], // BAPICR2018RET BAPI Export Fields for Data Transmission BO 2018
IMPORTDATA    :           [], // BAPI2018D Import Structure D for Business Object WhseTransOrder
RETURN        :           [], // BAPIRET2 Return parameter
};

const result = await client.call("BAPI_WHSE_TO_CREATE_STOCK", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPICR2018RET  BAPI Export Fields for Data Transmission BO 2018
const CREATEDATA= [];

// prettier-ignore
const CREATEDATA= {
  WHSENUMBER                       :   "", // CHAR (3) Warehouse Number / Warehouse Complex SU3=LGN
  TRANSFERORDERNO                  :   "", // NUMC (10) Transfer Order Number SU3=TAN
  TRANSFERORDERPOS                 :   "", // NUMC (4) Transfer order item SU3=TAP
  STGE_TYPE                        :   "", // CHAR (3) Storage Type SU3=LGT
  STGE_BIN                         :   "", // CHAR (10) Storage Bin SU3=LGP
  BIN_POSIT                        :   "", // CHAR (2) Position in storage bin
  QUANT                            :   "", // NUMC (10) Quant SU3=LQN
};

// BAPI2018D  Import Structure D for Business Object WhseTransOrder
const IMPORTDATA= [];

// prettier-ignore
const IMPORTDATA= {
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  REQ_QUTY                         :   "", // CHAR (15) Requested quantity in alternative unit of measure
  ALT_UNIT                         :   "", // UNIT (3) ALPHA=CUNIT Alternative Unit of Measure for Stockkeeping Unit
  ALT_UNIT_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  STGE_LOC                         :   "", // CHAR (4) Storage location SU3=LAG
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  STOCK_CAT                        :   "", // CHAR (1) Stock Category in the Warehouse Management System
  SPEC_STOCK                       :   "", // CHAR (1) Special Stock Indicator
  SP_STCK_NO                       :   "", // CHAR (16) ALPHA=ALPHA Special Stock Number
  STO_UNIT_TYPE                    :   "", // CHAR (3) Storage Unit Type
  GR_RCPT                          :   "", // CHAR (12) Goods recipient
  D_STGE_TYPE                      :   "", // CHAR (3) Destination Storage Type
  D_STGE_AREA                      :   "", // CHAR (3) Destination storage section
  D_STGE_BIN                       :   "", // CHAR (10) Destination Storage Bin
  D_STGE_BIN_P                     :   "", // CHAR (2) Position in destination storage bin
  D_STGE_UNIT_NO                   :   "", // CHAR (20) ALPHA=LENUM Destination storage unit number SU3=LEN
  CONFIRM_IND                      :   "", // CHAR (1) Indicator: confirmation of a transfer order item
  CERTIFIC_NO                      :   "", // CHAR (10) Certificate Number
  GR_DATE                          :   "", // DATS (8) Date of Goods Receipt
  S_STGE_TYPE                      :   "", // CHAR (3) Source Storage Type
  S_STGE_BIN                       :   "", // CHAR (10) Source Storage Bin
  EXPIRYDATE                       :   "", // DATS (8) Shelf Life Expiration or Best-Before Date
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPIRET2  Return parameter
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
