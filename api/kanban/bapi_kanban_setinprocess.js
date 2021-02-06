//
// BAPI_KANBAN_SETINPROCESS var: 1  struct: 1  table: 3  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// EXCLUDE_STATUS_RESTRICTION :        SPACE, // CHAR (1) Exclude Authorization Check at Time of Kanban Status Change

// TABLE PARAMETERS

KANBANS                       :           [], // BAPI1075_1 Kanbans to Be Set to Status "In Process"
// KANBANS_NOT_UPDATED        :           [], // BAPI1075_1 Kanbans that Were Not Set to Status "In Process"
// KANBANS_UPDATED            :           [], // BAPI1075_1 Kanbans that Were Set to Status "In Process"

// EXPORT PARAMETERS

// RETURN                     :           {}, // BAPIRETURN Return Code
};

const result = await client.call("BAPI_KANBAN_SETINPROCESS", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI1075_1  Kanbans to Be Set to Status "In Process"
const KANBANS= [];

// prettier-ignore
const KANBANS= {
  KANBAN_ID                        :   "", // NUMC (10) Identification Number
  STATUS                           :   "", // CHAR (1) Kanban status
};

// BAPI1075_1  Kanbans that Were Not Set to Status "In Process"
const KANBANS_NOT_UPDATED= [];

// prettier-ignore
const KANBANS_NOT_UPDATED= {
  KANBAN_ID                        :   "", // NUMC (10) Identification Number
  STATUS                           :   "", // CHAR (1) Kanban status
};

// BAPI1075_1  Kanbans that Were Set to Status "In Process"
const KANBANS_UPDATED= [];

// prettier-ignore
const KANBANS_UPDATED= {
  KANBAN_ID                        :   "", // NUMC (10) Identification Number
  STATUS                           :   "", // CHAR (1) Kanban status
};


//
// EXPORT PARAMETERS
//

// BAPIRETURN  Return Code

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
