//
// /COE/RBP_FE_DATATYPES2 exception: 1  struct: 0  table: 1  var: 13
//
// abap 2.2.0 at: 2021-03-29 15:40:08
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// IV_DECF16     :        "0.0", // DECFLOAT16 no text (undefined)
// IV_DECF161    :        '0.0', // DECFLOAT16 no text (undefined)
// IV_DECF34     :        "0.0", // DECFLOAT34 no text (undefined)
// IV_INT1       :            1, // INT1 (3) no text (undefined)
// IV_INT2       :            2, // INT2 (5) no text (undefined)
// IV_INT4       :            4, // INT4 (10) no text (undefined)
// IV_INT8       :            8, // INT8 no text (undefined)

// EXPORT PARAMETERS

// EV_DECF16     :        "0.0", // DECFLOAT16 no text (undefined)
// EV_DECF34     :        "0.0", // DECFLOAT34 no text (undefined)
// EV_INT1       :            0, // INT1 (3) no text (undefined)
// EV_INT2       :            0, // INT2 (5) no text (undefined)
// EV_INT4       :            0, // INT4 (10) no text (undefined)
// EV_INT8       :            0, // INT8 no text (undefined)
// EXP_ISSUE115  :           [], // /COE/TT_TABNAME no text (undefined)

// EXCEPTION PARAMETERS

// EX_EXCEPTION1                   // no text (undefined)
};

const result = await client.call("/COE/RBP_FE_DATATYPES2", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//

// /COE/TT_TABNAME  
const EXP_ISSUE115= [];

// prettier-ignore
const EXP_ISSUE115= {
  ""                               :   "", // CHAR (30) Table Name [line type table] SU3=DTB
};
