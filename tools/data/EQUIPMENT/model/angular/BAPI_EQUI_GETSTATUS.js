//
// BAPI_EQUI_GETSTATUS 0.2
//

BAPI_EQUI_GETSTATUS = {

  // INPUT PARAMETERS

  EQUIPMENT: '',                           // CHAR(18)   BAPI_ITOB_PARMS EQUIPMENT      Equipment Number
  LANGUAGE: '',                            // LANG(1)    BAPI_ITOB_PARMS LANGU          Language for reading status texts (both keys initial => no reading)
  LANGUAGE_ISO: '',                        // CHAR(2)    BAPI_ITOB_PARMS LANGU_ISO      ISO 639 Language Key

  // OUTPUT PARAMETERS

  RETURN: {},                              // BAPIRET2 : Return Parameters
  SYSTEMSTATUS: '',                        // CHAR(40)   J_STEXT                        System Status Line
  USERSTATUS: '',                          // CHAR(40)   ASTTX                          User Status Line

  // TABLE PARAMETERS

  SYSTEM_STATUS: [],                       // BAPI_ITOB_STATUS : Equipment System Status
  USER_STATUS: []                          // BAPI_ITOB_STATUS : Equipment User Status
};

//
// INPUT PARAMETERS
//

//
// OUTPUT PARAMETERS
//

// RETURN BAPIRET2 Return Parameters

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  FIELD                         : '',  // Field in parameter
  ID                            : '',  // Message Class
  LOG_MSG_NO                    : '',  // Application log: Internal message serial number
  LOG_NO                        : '',  // Application log: log number
  MESSAGE                       : '',  // Message Text
  MESSAGE_V1                    : '',  // Message Variable
  MESSAGE_V2                    : '',  // Message Variable
  MESSAGE_V3                    : '',  // Message Variable
  MESSAGE_V4                    : '',  // Message Variable
  NUMBER                        : '',  // Message Number
  PARAMETER                     : '',  // Parameter Name
  ROW                           : 0,  // Lines in parameter
  SYSTEM                        : '',  // Logical system from which message originates
  TYPE                          : ''   // Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */

//
// TABLE PARAMETERS
//
