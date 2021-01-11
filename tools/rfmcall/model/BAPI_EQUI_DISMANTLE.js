//
// BAPI_EQUI_DISMANTLE
//

// Variables : 5
// Structures: 3
// Tables    : 0
// Exceptions: 0

let params = {

  // IMPORT PARAMETERS

  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Number of Equipment to be Installed
  //DISM_DATE                      : SY-DATUM, // DATS (8) Date of Dismantling
  //DISM_TIME                      : SY-UZEIT, // TIMS (6) Time of Dismantling
  //FUNCLOC                        :   "", // CHAR (40) Number of Previous Installation Location (Functional Location)
  //SUPEQUI                        :   "", // CHAR (18) ALPHA=ALPHA Number of Previous Installation Location (Superior Equipment)
};

result = await client.call("BAPI_EQUI_DISMANTLE", params);