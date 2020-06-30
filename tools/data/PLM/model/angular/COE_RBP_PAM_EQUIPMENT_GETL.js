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
