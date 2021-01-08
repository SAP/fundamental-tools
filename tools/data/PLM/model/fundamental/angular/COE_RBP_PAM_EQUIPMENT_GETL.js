//
// /COE/RBP_PAM_EQUIPMENT_GETL 0.2
//

_COE_RBP_PAM_EQUIPMENT_GETL = {

  // INPUT PARAMETERS

  IV_EQUIPMENT_DESCR: '',                  // CHAR(40)   KTX01                          ?de: Bezeichnung technisches Objekt
  IV_FUNC_LOC: '',                         // CHAR(30)   TPLNR                          ?de: Technischer Platz
  IV_PLANT: '',                            // CHAR(4)    WERKS_D                        ?de: Werk

  // OUTPUT PARAMETERS

  ET_EQUIPMENT: [],                        // /COE/RBP_T_PAM_EQUIPMENT : ?de: Equipment
  ET_RETURN: []                            // BAPIRET2_TAB : ?de: Fehlermeldungen
};

//
// INPUT PARAMETERS
//

//
// OUTPUT PARAMETERS
//

// ET_EQUIPMENT /COE/RBP_T_PAM_EQUIPMENT ?de: Equipment

/* eslint-disable key-spacing */
// prettier-ignore
ET_EQUIPMENT = {
  EQUIPMENT                     : '',  // Equipment Number
  EQUIPMENT_DESCR               : ''   // Description of Technical Object
};
/* eslint-enable key-spacing */

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
