//
// /COE/RBP_FE_DATATYPES2 var: 13  struct: 0  table: 1  exception: 1
//
// abap 2.2.0 at: 2021-03-25 12:31:53
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// IV_DECF16     :        "0.0", // DECFLOAT16 no text (en)
// IV_DECF161    :        '0.0', // DECFLOAT16 no text (en)
// IV_DECF34     :        "0.0", // DECFLOAT34 no text (en)
// IV_INT1       :            1, // INT1 (3) no text (en)
// IV_INT2       :            2, // INT2 (5) no text (en)
// IV_INT4       :            4, // INT4 (10) no text (en)
// IV_INT8       :            8, // INT8 no text (en)

// EXPORT PARAMETERS

// EV_DECF16     :        "0.0", // DECFLOAT16 no text (en)
// EV_DECF34     :        "0.0", // DECFLOAT34 no text (en)
// EV_INT1       :            0, // INT1 (3) no text (en)
// EV_INT2       :            0, // INT2 (5) no text (en)
// EV_INT4       :            0, // INT4 (10) no text (en)
// EV_INT8       :            0, // INT8 no text (en)
// EXP_ISSUE115  :           [], // /COE/TT_TABNAME no text (en)

// EXCEPTION PARAMETERS

// EX_EXCEPTION1                   // no text (en)
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
