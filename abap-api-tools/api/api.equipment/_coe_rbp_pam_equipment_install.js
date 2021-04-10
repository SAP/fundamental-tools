//
// /COE/RBP_PAM_EQUIPMENT_INSTALL exception: 0  struct: 0  table: 1  var: 2
//
// abap 2.2.0 at: 2021-04-10 21:53:58
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// IV_EQUIID        :           "", // CHAR (18) ALPHA=ALPHA no text (undefined) SU3=EQN
// IV_FUNC_LOCATION :           "", // CHAR (30) ALPHA=TPLNR no text (undefined) SU3=IFL

// EXPORT PARAMETERS

// ET_RETURN        :           [], // BAPIRET2_TAB no text (undefined)
};

const result = await client.call("/COE/RBP_PAM_EQUIPMENT_INSTALL", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//

// BAPIRET2_TAB  
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
