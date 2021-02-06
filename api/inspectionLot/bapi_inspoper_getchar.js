//
// BAPI_INSPOPER_GETCHAR var: 7  struct: 2  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

INSPLOT                         :           "", // NUMC (12) Inspection Lot Number SU3=QLS
INSPOPER                        :           "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
// CHAR_FILTER_NO               :       '1   ', // CHAR (4) Filter Number for Characteristics To Be Processed SU3=QMO
// CHAR_FILTER_TCODE            :       'QE11', // CHAR (20) Transaction Code
// READ_CHARS_WITH_CLASSES      :        SPACE, // CHAR (1) X and Blank
// READ_CHARS_WITHOUT_RECORDING :        SPACE, // CHAR (1) X and Blank
// RES_ORG                      :        SPACE, // CHAR (2) Data Origin

// TABLE PARAMETERS

INSPCHAR_LIST                   :           [], // BAPI2045L3 List of Inspection Lot Characteristics

// EXPORT PARAMETERS

// RETURN                       :           {}, // BAPIRETURN1 Return Value
// RETURN2                      :           {}, // BAPIRET2 Return Parameter as BAPIRET2
};

const result = await client.call("BAPI_INSPOPER_GETCHAR", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI2045L3  List of Inspection Lot Characteristics
const INSPCHAR_LIST= [];

// prettier-ignore
const INSPCHAR_LIST= {
  INSPCHAR                         :   "", // NUMC (4) Insp. Lot Charac. No.
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INSPOPER                         :   "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
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

// BAPIRET2  Return Parameter as BAPIRET2

// prettier-ignore
const RETURN2= {
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
