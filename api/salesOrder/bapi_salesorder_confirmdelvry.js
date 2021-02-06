//
// BAPI_SALESORDER_CONFIRMDELVRY var: 1  struct: 0  table: 4  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

SALESDOCUMENT     :           "", // CHAR (10) ALPHA=ALPHA Sales Document SU3=AUN

// TABLE PARAMETERS

DLVITEM           :           [], // BAPISDDLVITEM BAPI: Delivery Confirmation
DLVITEMDATA       :           [], // BAPISDDLVITEMDATA BAPI: Delivery Confirmation Data
// RETURN         :           [], // BAPIRET2 Return Parameter
// TOKENREFERENCE :           [], // CSL_TR_EXS CSL: Data Element CSL_TR_EXT as Structure (BAPI Tab.Arg.)
};

const result = await client.call("BAPI_SALESORDER_CONFIRMDELVRY", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPISDDLVITEM  BAPI: Delivery Confirmation
const DLVITEM= [];

// prettier-ignore
const DLVITEM= {
  ITM_NUMBER                       :   "", // NUMC (6) Sales Document Item SU3=APO
  DELIV_NUMB                       :   "", // CHAR (10) ALPHA=ALPHA Delivery SU3=VL
  DELIV_ITEM                       :   "", // NUMC (6) Delivery Item
  DOCCATEGOR                       :   "", // CHAR (1) Document category of subsequent document
  LOG_SYSTEM                       :   "", // CHAR (10) ALPHA=ALPHA Logical system
  REDELIVER                        :   "", // CHAR (1) AIP: Deliver Order Item
  DELETEFLAG                       :   "", // CHAR (1) Checkbox
  DATA_NUMBER                      :   "", // NUMC (6) Item number of the SD document
  DOCCATEGOR_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
};

// BAPISDDLVITEMDATA  BAPI: Delivery Confirmation Data
const DLVITEMDATA= [];

// prettier-ignore
const DLVITEMDATA= {
  DATA_NUMBER                      :   "", // NUMC (6) Item number of the SD document
  DLV_QTY                          : "0.0", // QUAN (13.3) Actual quantity delivered (in sales units)
  DLV_QTY_FLO                      : "0.0", // FLTP (16.16) Internal field/ Do not use     / LFIMG in float / MUM
  DLV_UNIT                         :   "", // UNIT (3) ALPHA=CUNIT Sales unit
  DLV_UNIT_ISO                     :   "", // CHAR (3) Sales unit in ISO code
  DLV_QTY_STOCK                    : "0.0", // QUAN (13.3) Actual quantity delivered in stockkeeping units
  DLV_QTY_ST_FLO                   : "0.0", // FLTP (16.16) Internal field/ Do not use     / LGMNG in float / MUM
  GOODSMVSTA                       :   "", // CHAR (1) Goods movement status
};

// BAPIRET2  Return Parameter
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

// CSL_TR_EXS  CSL: Data Element CSL_TR_EXT as Structure (BAPI Tab.Arg.)
const TOKENREFERENCE= [];

// prettier-ignore
const TOKENREFERENCE= {
  TR_EXT                           :   "", // CHAR (255) CSL: CSL-External Representation of a Token Reference
};
