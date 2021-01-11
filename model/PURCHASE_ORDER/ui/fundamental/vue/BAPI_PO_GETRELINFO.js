//
// BAPI_PO_GETRELINFO 0.3
//

BAPI_PO_GETRELINFO = {

  // INPUT PARAMETERS

  // PO_REL_CODE: "",                         // CHAR(2)    BAPIMMPARA PO_REL_COD          Release Code
  PURCHASEORDER: "",                       // CHAR(10)   BAPIMMPARA PO_NUMBER           Purchase Order Number

  // OUTPUT PARAMETERS

  GENERAL_RELEASE_INFO: {},                // BAPIRLGNPO : General Release Information
  RELEASE_ALREADY_POSTED: {},              // BAPIRLCOPO : Releases to Date
  RELEASE_PREREQUISITES: {},               // BAPIRLCOPO : Release Prerequisites

  // TABLE PARAMETERS

  RELEASE_FINAL: [],                       // BAPIRLCOPO : Final Release 
  RETURN: []                               // BAPIRETURN : Return Messages
};

//
// INPUT PARAMETERS
//

//
// OUTPUT PARAMETERS
//

// GENERAL_RELEASE_INFO BAPIRLGNPO General Release Information

/* eslint-disable key-spacing */
// prettier-ignore
GENERAL_RELEASE_INFO = {
  PO_NUMBER                     : '',  // Purchasing Document Number
  REL_CODE                      : '',  // Release code
  REL_COD_TX                    : '',  // Description of release code
  REL_GROUP                     : '',  // Release group
  REL_GRP_TX                    : '',  // Description of release group
  REL_IND                       : '',  // Release indicator
  REL_IND_TX                    : '',  // Description of Release Indicator
  REL_STRAT                     : '',  // Release Strategy
  REL_STR_TX                    : ''   // Description of release strategy
};
/* eslint-enable key-spacing */

// RELEASE_ALREADY_POSTED BAPIRLCOPO Releases to Date

/* eslint-disable key-spacing */
// prettier-ignore
RELEASE_ALREADY_POSTED = {
  PO_NUMBER                     : '',  // Purchasing Document Number
  REL_CD_TX1                    : '',  // Description of release code 1
  REL_CD_TX2                    : '',  // Description of release code 2
  REL_CD_TX3                    : '',  // Description of release code 3
  REL_CD_TX4                    : '',  // Description of release code 4
  REL_CD_TX5                    : '',  // Description of release code 5
  REL_CD_TX6                    : '',  // Description of release code 6
  REL_CD_TX7                    : '',  // Description of release code 7
  REL_CD_TX8                    : '',  // Description of release code
  REL_CODE1                     : '',  // Release code 1
  REL_CODE2                     : '',  // Release code 2
  REL_CODE3                     : '',  // Release code 3
  REL_CODE4                     : '',  // Release code 4
  REL_CODE5                     : '',  // Release code 5
  REL_CODE6                     : '',  // Release code 6
  REL_CODE7                     : '',  // Release code 7
  REL_CODE8                     : '',  // Release code 8
  REL_WF1                       : '',  // Role resolution for workflow for release code 1
  REL_WF2                       : '',  // Role resolution for workflow for release code 2
  REL_WF3                       : '',  // Role resolution for workflow for release code 3
  REL_WF4                       : '',  // Role resolution for workflow for release code 4
  REL_WF5                       : '',  // Role resolution for workflow for release code 5
  REL_WF6                       : '',  // Role resolution for workflow for release code 6
  REL_WF7                       : '',  // Role resolution for workflow for release code 7
  REL_WF8                       : ''   // Role resolution for workflow for release code 8
};
/* eslint-enable key-spacing */

// RELEASE_PREREQUISITES BAPIRLCOPO Release Prerequisites

/* eslint-disable key-spacing */
// prettier-ignore
RELEASE_PREREQUISITES = {
  PO_NUMBER                     : '',  // Purchasing Document Number
  REL_CD_TX1                    : '',  // Description of release code 1
  REL_CD_TX2                    : '',  // Description of release code 2
  REL_CD_TX3                    : '',  // Description of release code 3
  REL_CD_TX4                    : '',  // Description of release code 4
  REL_CD_TX5                    : '',  // Description of release code 5
  REL_CD_TX6                    : '',  // Description of release code 6
  REL_CD_TX7                    : '',  // Description of release code 7
  REL_CD_TX8                    : '',  // Description of release code
  REL_CODE1                     : '',  // Release code 1
  REL_CODE2                     : '',  // Release code 2
  REL_CODE3                     : '',  // Release code 3
  REL_CODE4                     : '',  // Release code 4
  REL_CODE5                     : '',  // Release code 5
  REL_CODE6                     : '',  // Release code 6
  REL_CODE7                     : '',  // Release code 7
  REL_CODE8                     : '',  // Release code 8
  REL_WF1                       : '',  // Role resolution for workflow for release code 1
  REL_WF2                       : '',  // Role resolution for workflow for release code 2
  REL_WF3                       : '',  // Role resolution for workflow for release code 3
  REL_WF4                       : '',  // Role resolution for workflow for release code 4
  REL_WF5                       : '',  // Role resolution for workflow for release code 5
  REL_WF6                       : '',  // Role resolution for workflow for release code 6
  REL_WF7                       : '',  // Role resolution for workflow for release code 7
  REL_WF8                       : ''   // Role resolution for workflow for release code 8
};
/* eslint-enable key-spacing */

//
// TABLE PARAMETERS
//

// RELEASE_FINAL BAPIRLCOPO Final Release

/* eslint-disable key-spacing */
// prettier-ignore
RELEASE_FINAL = {
  PO_NUMBER                     : '',  // Purchasing Document Number
  REL_CD_TX1                    : '',  // Description of release code 1
  REL_CD_TX2                    : '',  // Description of release code 2
  REL_CD_TX3                    : '',  // Description of release code 3
  REL_CD_TX4                    : '',  // Description of release code 4
  REL_CD_TX5                    : '',  // Description of release code 5
  REL_CD_TX6                    : '',  // Description of release code 6
  REL_CD_TX7                    : '',  // Description of release code 7
  REL_CD_TX8                    : '',  // Description of release code
  REL_CODE1                     : '',  // Release code 1
  REL_CODE2                     : '',  // Release code 2
  REL_CODE3                     : '',  // Release code 3
  REL_CODE4                     : '',  // Release code 4
  REL_CODE5                     : '',  // Release code 5
  REL_CODE6                     : '',  // Release code 6
  REL_CODE7                     : '',  // Release code 7
  REL_CODE8                     : '',  // Release code 8
  REL_WF1                       : '',  // Role resolution for workflow for release code 1
  REL_WF2                       : '',  // Role resolution for workflow for release code 2
  REL_WF3                       : '',  // Role resolution for workflow for release code 3
  REL_WF4                       : '',  // Role resolution for workflow for release code 4
  REL_WF5                       : '',  // Role resolution for workflow for release code 5
  REL_WF6                       : '',  // Role resolution for workflow for release code 6
  REL_WF7                       : '',  // Role resolution for workflow for release code 7
  REL_WF8                       : ''   // Role resolution for workflow for release code 8
};
/* eslint-enable key-spacing */

// RETURN BAPIRETURN Return Messages

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  CODE                          : '',  // Message code
  LOG_MSG_NO                    : '',  // Application log: Internal message serial number
  LOG_NO                        : '',  // Application log: log number
  MESSAGE                       : '',  // Message Text
  MESSAGE_V1                    : '',  // Message Variable
  MESSAGE_V2                    : '',  // Message Variable
  MESSAGE_V3                    : '',  // Message Variable
  MESSAGE_V4                    : '',  // Message Variable
  TYPE                          : ''   // Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */
