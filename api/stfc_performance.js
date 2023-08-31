//
// STFC_PERFORMANCE var: 8  struct: 0  table: 4  exception: 0
//
// abap api
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

CHECKTAB    :           "", // CHAR (1) no text (en)
LGET0332    :           "", // NUMC (5) no text (en)
LGET1000    :           "", // NUMC (5) no text (en)
LGIT0332    :           "", // NUMC (5) no text (en)
LGIT1000    :           "", // NUMC (5) no text (en)

// TABLE PARAMETERS

ETAB0332    :           [], // H332 no text (en)
ETAB1000    :           [], // H1000 no text (en)
ITAB0332    :           [], // H332 no text (en)
ITAB1000    :           [], // H1000 no text (en)

// EXPORT PARAMETERS

// EXITCODE :           "", // CHAR (1) no text (en)
// TEXT0332 :           "", // CHAR (72) no text (en)
// TEXT1000 :           "", // CHAR (72) no text (en)
};

const result = await client.call("STFC_PERFORMANCE", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// H332  
const ETAB0332 = [];

// prettier-ignore
const ETAB0332_line = {
  LINE1                            :   "", // CHAR (200) CHAR(200)
  LINE2                            :   "", // CHAR (50) CHAR50 for SYST
  LINE3                            :   "", // CHAR (50) CHAR50 for SYST
  LINE4                            :   "", // CHAR (32) CHAR32 data element for SYST
};

// H1000  
const ETAB1000 = [];

// prettier-ignore
const ETAB1000_line = {
  LINE1                            :   "", // CHAR (200) CHAR(200)
  LINE2                            :   "", // CHAR (200) CHAR(200)
  LINE3                            :   "", // CHAR (200) CHAR(200)
  LINE4                            :   "", // CHAR (200) CHAR(200)
  LINE5                            :   "", // CHAR (200) CHAR(200)
};

// H332  
const ITAB0332 = [];

// prettier-ignore
const ITAB0332_line = {
  LINE1                            :   "", // CHAR (200) CHAR(200)
  LINE2                            :   "", // CHAR (50) CHAR50 for SYST
  LINE3                            :   "", // CHAR (50) CHAR50 for SYST
  LINE4                            :   "", // CHAR (32) CHAR32 data element for SYST
};

// H1000  
const ITAB1000 = [];

// prettier-ignore
const ITAB1000_line = {
  LINE1                            :   "", // CHAR (200) CHAR(200)
  LINE2                            :   "", // CHAR (200) CHAR(200)
  LINE3                            :   "", // CHAR (200) CHAR(200)
  LINE4                            :   "", // CHAR (200) CHAR(200)
  LINE5                            :   "", // CHAR (200) CHAR(200)
};


//
// EXPORT PARAMETERS
//
