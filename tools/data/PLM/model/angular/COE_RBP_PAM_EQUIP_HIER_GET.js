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
