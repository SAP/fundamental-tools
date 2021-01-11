//
// BAPI_EQUI_GETDETAIL
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
