//
// CTS_API_CREATE_CHANGE_REQUEST var: 7  struct: 0  table: 0  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

CATEGORY       :           "", // CHAR (1) no text (en)
CLIENT         :           "", // CHAR (3) no text (en)
DESCRIPTION    :           "", // CHAR (60) Description
OWNER          :           "", // CHAR (12) no text (en)

// EXPORT PARAMETERS

// MESSAGE     :           "", // CHAR (80) Error Message
// REQUEST     :           "", // CHAR (20) Change Request
// RETCODE     :           "", // CHAR (3) Return code
};

const result = await client.call("CTS_API_CREATE_CHANGE_REQUEST", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//
