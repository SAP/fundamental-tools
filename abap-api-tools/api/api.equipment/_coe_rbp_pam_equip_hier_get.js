//
// /COE/RBP_PAM_EQUIP_HIER_GET exception: 0  struct: 0  table: 4  var: 3
//
// abap 2.3.0 at: 2021-04-23 11:59:34
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

IV_LOCATION         :           "", // CHAR (30) ALPHA=TPLNR no text (undefined) SU3=IFL
// IV_DEF_VAL       :           "", // CHAR (1) no text (undefined)
// IV_EQUIP_TYPE    :           "", // CHAR (9) no text (undefined) SU3=MKL

// TABLE PARAMETERS

ET_DEF_VAL          :           [], // /COE/RBP_T_PAM_DEF_VALS_EQ no text (undefined)
ET_EQUIP_LIST       :           [], // /COE/RBP_T_PAM_EQUI_DAT_HIER_L no text (undefined)
ET_FUNC_LOC_LIST    :           [], // /COE/RBP_T_PAM_FUNC_LOC_EQUI_L no text (undefined)
ET_RETURN           :           [], // BAPIRET2_TAB no text (undefined)
};

const result = await client.call("/COE/RBP_PAM_EQUIP_HIER_GET", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// /COE/RBP_T_PAM_DEF_VALS_EQ  
const ET_DEF_VAL = [];

// prettier-ignore
const ET_DEF_VAL_line = {
  EQUNR                            :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  FIELDNAME                        :   "", // CHAR (30) No field text
  DEF_VALUE                        :   "", // CHAR (40) No field text
};

// /COE/RBP_T_PAM_EQUI_DAT_HIER_L  
const ET_EQUIP_LIST = [];

// prettier-ignore
const ET_EQUIP_LIST_line = {
  LOCATION                         :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  EQUIPMENT_DESCR                  :   "", // CHAR (40) Description of Technical Object
  EQUIP_TYPE                       :   "", // CHAR (9) Material Group SU3=MKL
  H_EQUIPMENT                      :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  INVENT_NO                        :   "", // CHAR (25) Inventory number
  SERIAL_NO                        :   "", // CHAR (18) ALPHA=GERNR Serial Number SU3=SER
  VALID_FROM                       :   "", // DATS (8) Valid-From Date
  VALID_TO                         :   "", // DATS (8) Valid To Date
  WEIGHT                           : "0.0", // QUAN (13.3) Weight of object
  UOM                              :   "", // UNIT (3) ALPHA=CUNIT Unit of weight
  YEAR_OF_CONSTRUCT                :   "", // CHAR (4) ALPHA=GJAHR Year of construction
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  STATUS                           :   "", // CHAR (4) Individual status of an object (short form)
  STATUS_DESCR                     :   "", // CHAR (30) Object status
};

// /COE/RBP_T_PAM_FUNC_LOC_EQUI_L  
const ET_FUNC_LOC_LIST = [];

// prettier-ignore
const ET_FUNC_LOC_LIST_line = {
  FUNCTLOCATION                    :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  DESCRIPT                         :   "", // CHAR (40) Description of Technical Object
  FUNC_LOC_CAT                     :   "", // CHAR (15) No field text
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
