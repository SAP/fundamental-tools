//
// BAPI_EQUI_GETSTATUS 
//
// rfmcall.py 1.0 at: 2021-01-12 14:46:14
//

// Variables : 5
// Structures: 1
// Tables    : 2
// Exceptions: 0

BAPI_EQUI_GETSTATUS = {

  // INPUT PARAMETERS

  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number
  //LANGUAGE                       : SY-LANGU, // LANG (1) ALPHA=ISOLA Language for reading status texts (both keys initial => no reading)
  //LANGUAGE_ISO                   :   "", // CHAR (2) ISO 639 Language Key

  // TABLE PARAMETERS

  SYSTEM_STATUS                    :   [], // BAPI_ITOB_STATUS Equipment System Status
  USER_STATUS                      :   [], // BAPI_ITOB_STATUS Equipment User Status

  // OUTPUT PARAMETERS

  RETURN                           :   {}, // BAPIRET2 Return Parameters
  SYSTEMSTATUS                     :   "", // CHAR (40) System Status Line
  USERSTATUS                       :   "", // CHAR (40) User Status Line
};

//
// INPUT PARAMETERS
//

//
// TABLE PARAMETERS
//

// SYSTEM_STATUS BAPI_ITOB_STATUS Equipment System Status

/* eslint-disable key-spacing */
// prettier-ignore
SYSTEM_STATUS = {
  DESCRIPTION                      :   "", // CHAR (30) Object status
  STATUS                           :   "", // CHAR (5) Object status
  TEXT                             :   "", // CHAR (4) Individual status of an object (short form)
};
/* eslint-enable key-spacing */

// USER_STATUS BAPI_ITOB_STATUS Equipment User Status

/* eslint-disable key-spacing */
// prettier-ignore
USER_STATUS = {
  DESCRIPTION                      :   "", // CHAR (30) Object status
  STATUS                           :   "", // CHAR (5) Object status
  TEXT                             :   "", // CHAR (4) Individual status of an object (short form)
};
/* eslint-enable key-spacing */

//
// OUTPUT PARAMETERS
//

// RETURN BAPIRET2 Return Parameters

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  FIELD                            :   "", // CHAR (30) Field in parameter
  ID                               :   "", // CHAR (20) Message Class
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  MESSAGE                          :   "", // CHAR (220) Message Text
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
  NUMBER                           :   "", // NUMC (3) Message Number
  PARAMETER                        :   "", // CHAR (32) Parameter Name
  ROW                              :    0, // INT4 (10) Lines in parameter
  SYSTEM                           :   "", // CHAR (10) ALPHA=ALPHA Logical system from which message originates
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */
