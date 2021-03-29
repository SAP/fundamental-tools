//
// BAPI_EQUI_GETSTATUS exception: 0  struct: 1  table: 2  var: 5
//
// abap 2.2.0 at: 2021-03-29 15:40:08
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

EQUIPMENT        :           "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
// LANGUAGE      :     SY-LANGU, // LANG (1) ALPHA=ISOLA Language for reading status texts (both keys initial => no reading) SU3=SPR
// LANGUAGE_ISO  :           "", // CHAR (2) ISO 639 Language Key

// TABLE PARAMETERS

SYSTEM_STATUS    :           [], // BAPI_ITOB_STATUS Equipment System Status
USER_STATUS      :           [], // BAPI_ITOB_STATUS Equipment User Status

// EXPORT PARAMETERS

// SYSTEMSTATUS  :           "", // CHAR (40) System Status Line
// USERSTATUS    :           "", // CHAR (40) User Status Line
// RETURN        :           {}, // BAPIRET2 Return Parameters
};

const result = await client.call("BAPI_EQUI_GETSTATUS", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI_ITOB_STATUS  Equipment System Status
const SYSTEM_STATUS= [];

// prettier-ignore
const SYSTEM_STATUS= {
  STATUS                           :   "", // CHAR (5) Object status
  TEXT                             :   "", // CHAR (4) Individual status of an object (short form)
  DESCRIPTION                      :   "", // CHAR (30) Object status
};

// BAPI_ITOB_STATUS  Equipment User Status
const USER_STATUS= [];

// prettier-ignore
const USER_STATUS= {
  STATUS                           :   "", // CHAR (5) Object status
  TEXT                             :   "", // CHAR (4) Individual status of an object (short form)
  DESCRIPTION                      :   "", // CHAR (30) Object status
};


//
// EXPORT PARAMETERS
//

// BAPIRET2  Return Parameters

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
