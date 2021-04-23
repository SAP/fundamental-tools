//
// BAPI_PO_RELEASE exception: 6  struct: 0  table: 1  var: 7
//
// abap 2.3.0 at: 2021-04-23 11:59:34
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

PO_REL_CODE               :           "", // CHAR (2) Release Code SU3=FAB
PURCHASEORDER             :           "", // CHAR (10) ALPHA=ALPHA Purchase Order Number SU3=BES
// NO_COMMIT              :          ' ', // CHAR (1) Commit Work Yes/No
// USE_EXCEPTIONS         :          'X', // CHAR (1) Set Exceptions and Issue Error Messages

// TABLE PARAMETERS

// RETURN                 :           [], // BAPIRETURN Return Messages

// EXPORT PARAMETERS

// REL_INDICATOR_NEW      :           "", // CHAR (1) New Release Indicator
// REL_STATUS_NEW         :           "", // CHAR (8) New Release Status
// RET_CODE               :            0, // INT4 (10) Return Value, Return Value After ABAP Statements

// EXCEPTION PARAMETERS

// AUTHORITY_CHECK_FAIL            // No Authorization to Release
// DOCUMENT_NOT_FOUND              // Purchase order does not exist
// ENQUEUE_FAIL                    // Purchase Order Blocked
// PREREQUISITE_FAIL               // Release Prerequisite Not Satisfied
// RELEASE_ALREADY_POSTED          // Release Already Effected
// RESPONSIBILITY_FAIL             // Responsibility for Release Missing
};

const result = await client.call("BAPI_PO_RELEASE", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIRETURN  Return Messages
const RETURN = [];

// prettier-ignore
const RETURN_line = {
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
  CODE                             :   "", // CHAR (5) Message code
  MESSAGE                          :   "", // CHAR (220) Message Text
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
};


//
// EXPORT PARAMETERS
//
