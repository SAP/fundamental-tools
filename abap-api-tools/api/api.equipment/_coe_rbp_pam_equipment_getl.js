//
// /COE/RBP_PAM_EQUIPMENT_GETL var: 3  struct: 0  table: 2  exception: 0
//
// abap api
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// IV_EQUIPMENT_DESCR :           "", // CHAR (40) no text (en)
// IV_FUNC_LOC        :           "", // CHAR (30) ALPHA=TPLNR no text (en) SU3=IFL
// IV_PLANT           :           "", // CHAR (4) no text (en) SU3=WRK

// EXPORT PARAMETERS

// ET_EQUIPMENT       :           [], // /COE/RBP_T_PAM_EQUIPMENT no text (en)
// ET_RETURN          :           [], // BAPIRET2_TAB no text (en)
};

const result = await client.call("/COE/RBP_PAM_EQUIPMENT_GETL", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//

// /COE/RBP_T_PAM_EQUIPMENT  
const ET_EQUIPMENT = [];

// prettier-ignore
const ET_EQUIPMENT_line = {
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  EQUIPMENT_DESCR                  :   "", // CHAR (40) Description of Technical Object
};

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
