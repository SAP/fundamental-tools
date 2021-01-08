//
// /COE/RBP_PAM_EQUIPMENT_INSTALL 0.2
//

_COE_RBP_PAM_EQUIPMENT_INSTALL = {

  // INPUT PARAMETERS

  IV_EQUIID: '',                           // CHAR(18)   EQUNR                          ?de: Equipmentnummer
  IV_FUNC_LOCATION: '',                    // CHAR(30)   TPLNR                          ?de: Technischer Platz

  // OUTPUT PARAMETERS

  ET_RETURN: []                            // BAPIRET2_TAB : ?de: Fehlermeldungen
};

//
// INPUT PARAMETERS
//

//
// OUTPUT PARAMETERS
//

// ET_RETURN BAPIRET2_TAB ?de: Fehlermeldungen

/* eslint-disable key-spacing */
// prettier-ignore
ET_RETURN = {
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
