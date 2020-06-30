//
// /COE/RBP_PAM_EQUIP_HIER_GET 0.2
//

_COE_RBP_PAM_EQUIP_HIER_GET = {

  // INPUT PARAMETERS

  IV_DEF_VAL: '',                          // CHAR(1)    BOOLEAN                        ?de: boolsche Variable (X=true, -=false, space=unknown)
  IV_EQUIP_TYPE: '',                       // CHAR(9)    MATKL                          ?de: Warengruppe
  IV_LOCATION: '',                         // CHAR(30)   TPLNR                          ?de: Technischer Platz

  // TABLE PARAMETERS

  ET_DEF_VAL: [],                          // /COE/RBP_T_PAM_DEF_VALS_EQ : ?de: Fehlermeldungen
  ET_EQUIP_LIST: [],                       // /COE/RBP_T_PAM_EQUI_DAT_HIER_L : ?de: Fehlermeldungen
  ET_FUNC_LOC_LIST: [],                    // /COE/RBP_T_PAM_FUNC_LOC_EQUI_L : ?de: Fehlermeldungen
  ET_RETURN: []                            // BAPIRET2_TAB : ?de: Fehlermeldungen
};

//
// INPUT PARAMETERS
//

//
// TABLE PARAMETERS
//

// ET_DEF_VAL /COE/RBP_T_PAM_DEF_VALS_EQ ?de: Fehlermeldungen

/* eslint-disable key-spacing */
// prettier-ignore
ET_DEF_VAL = {
  DEF_VALUE                     : '',  // ?de: WevPoS: Default Value
  EQUNR                         : '',  // Equipment Number
  FIELDNAME                     : ''   // ?de: WebPoS: Fieldname
};
/* eslint-enable key-spacing */

// ET_EQUIP_LIST /COE/RBP_T_PAM_EQUI_DAT_HIER_L ?de: Fehlermeldungen

/* eslint-disable key-spacing */
// prettier-ignore
ET_EQUIP_LIST = {
  EQUIPMENT                     : '',  // Equipment Number
  EQUIPMENT_DESCR               : '',  // Description of Technical Object
  EQUIP_TYPE                    : '',  // Material Group
  H_EQUIPMENT                   : '',  // Equipment Number
  INVENT_NO                     : '',  // Inventory number
  LOCATION                      : '',  // Functional Location
  MATERIAL                      : '',  // Material Number
  SERIAL_NO                     : '',  // Serial Number
  STATUS                        : '',  // Individual status of an object (short form)
  STATUS_DESCR                  : '',  // Object status
  UOM                           : '',  // Unit of weight
  VALID_FROM                    : '',  // Valid-From Date
  VALID_TO                      : '',  // Valid To Date
  WEIGHT                        : 0,  // Weight of object
  YEAR_OF_CONSTRUCT             : ''   // Year of construction
};
/* eslint-enable key-spacing */

// ET_FUNC_LOC_LIST /COE/RBP_T_PAM_FUNC_LOC_EQUI_L ?de: Fehlermeldungen

/* eslint-disable key-spacing */
// prettier-ignore
ET_FUNC_LOC_LIST = {
  DESCRIPT                      : '',  // Description of Technical Object
  FUNCTLOCATION                 : '',  // Functional Location
  FUNC_LOC_CAT                  : ''   // ?de: data element for function location category
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
