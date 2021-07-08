//
// /COE/RBP_PAM_EQUIPMENT_DISMTLE exception: 0  struct: 0  table: 1  var: 1
//
// abap 2.3.1 at: 2021-07-08 19:01:17
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// IV_EQUIID :           "", // CHAR (18) ALPHA=ALPHA no text (undefined) SU3=EQN

// EXPORT PARAMETERS

// ET_RETURN :           [], // BAPIRET2_TAB no text (undefined)
};

const result = await client.call("/COE/RBP_PAM_EQUIPMENT_DISMTLE", parameters);

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
