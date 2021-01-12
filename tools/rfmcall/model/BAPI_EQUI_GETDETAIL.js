//
// BAPI_EQUI_GETDETAIL
//
// rfmcall.js 1.3.0 at: 2021-01-12 13:51:45
//

// Variables : 1
// Structures: 4
// Tables    : 1
// Exceptions: 0

let params = {

  // IMPORT PARAMETERS

  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Number of Equipment to be Read

  // TABLE PARAMETERS

  //EXTENSIONOUT                   :   [], // BAPIPAREX Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut

  // EXPORT PARAMETERS

  // DATA_FLEET_EXP                :   {}, // BAPI_FLEET Vehicle-Specific Data
  // DATA_GENERAL_EXP              :   {}, // BAPI_ITOB General Data for Technical Objects
  // DATA_SPECIFIC_EXP             :   {}, // BAPI_ITOB_EQ_ONLY Equipment-Specific data
  // RETURN                        :   {}, // BAPIRET2 Return Parameter
};

result = await client.call("BAPI_EQUI_GETDETAIL", params);

//
// TABLE PARAMETERS
//

// EXTENSIONOUT BAPIPAREX Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut

let EXTENSIONOUT                      =   []; // BAPIPAREX Reference Structure for BAPI Parameters ExtensionIn/ExtensionOut

let BAPIPAREX = {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};
