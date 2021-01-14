//
// BAPI_PO_GETRELINFO 
//
// rfmcall.py 1.0 at: 2021-01-14 13:00:36
//

// Variables : 2
// Structures: 3
// Tables    : 2
// Exceptions: 0

BAPI_PO_GETRELINFO = {

  // INPUT PARAMETERS

  PURCHASEORDER                    :   "", // CHAR (10) ALPHA=ALPHA Purchase Order Number
  //PO_REL_CODE                    :   "", // CHAR (2) Release Code

  // TABLE PARAMETERS

  //RELEASE_FINAL                  :   [], // BAPIRLCOPO Final Release
  //RETURN                         :   [], // BAPIRETURN Return Messages

  // OUTPUT PARAMETERS

  GENERAL_RELEASE_INFO             :   {}, // BAPIRLGNPO General Release Information
  RELEASE_ALREADY_POSTED           :   {}, // BAPIRLCOPO Releases to Date
  RELEASE_PREREQUISITES            :   {}, // BAPIRLCOPO Release Prerequisites
};

//
// INPUT PARAMETERS
//

//
// TABLE PARAMETERS
//

// RELEASE_FINAL BAPIRLCOPO Final Release

/* eslint-disable key-spacing */
// prettier-ignore
RELEASE_FINAL = {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  REL_CD_TX1                       :   "", // CHAR (20) Description of release code 1
  REL_CD_TX2                       :   "", // CHAR (20) Description of release code 2
  REL_CD_TX3                       :   "", // CHAR (20) Description of release code 3
  REL_CD_TX4                       :   "", // CHAR (20) Description of release code 4
  REL_CD_TX5                       :   "", // CHAR (20) Description of release code 5
  REL_CD_TX6                       :   "", // CHAR (20) Description of release code 6
  REL_CD_TX7                       :   "", // CHAR (20) Description of release code 7
  REL_CD_TX8                       :   "", // CHAR (20) Description of release code
  REL_CODE1                        :   "", // CHAR (2) Release code 1
  REL_CODE2                        :   "", // CHAR (2) Release code 2
  REL_CODE3                        :   "", // CHAR (2) Release code 3
  REL_CODE4                        :   "", // CHAR (2) Release code 4
  REL_CODE5                        :   "", // CHAR (2) Release code 5
  REL_CODE6                        :   "", // CHAR (2) Release code 6
  REL_CODE7                        :   "", // CHAR (2) Release code 7
  REL_CODE8                        :   "", // CHAR (2) Release code 8
  REL_WF1                          :   "", // CHAR (1) Role resolution for workflow for release code 1
  REL_WF2                          :   "", // CHAR (1) Role resolution for workflow for release code 2
  REL_WF3                          :   "", // CHAR (1) Role resolution for workflow for release code 3
  REL_WF4                          :   "", // CHAR (1) Role resolution for workflow for release code 4
  REL_WF5                          :   "", // CHAR (1) Role resolution for workflow for release code 5
  REL_WF6                          :   "", // CHAR (1) Role resolution for workflow for release code 6
  REL_WF7                          :   "", // CHAR (1) Role resolution for workflow for release code 7
  REL_WF8                          :   "", // CHAR (1) Role resolution for workflow for release code 8
};
/* eslint-enable key-spacing */

// RETURN BAPIRETURN Return Messages

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  CODE                             :   "", // CHAR (5) Message code
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  MESSAGE                          :   "", // CHAR (220) Message Text
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */

//
// OUTPUT PARAMETERS
//

// GENERAL_RELEASE_INFO BAPIRLGNPO General Release Information

/* eslint-disable key-spacing */
// prettier-ignore
GENERAL_RELEASE_INFO = {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  REL_CODE                         :   "", // CHAR (2) Release code
  REL_COD_TX                       :   "", // CHAR (20) Description of release code
  REL_GROUP                        :   "", // CHAR (2) Release group
  REL_GRP_TX                       :   "", // CHAR (20) Description of release group
  REL_IND                          :   "", // CHAR (1) Release indicator
  REL_IND_TX                       :   "", // CHAR (30) Description of Release Indicator
  REL_STRAT                        :   "", // CHAR (2) Release Strategy
  REL_STR_TX                       :   "", // CHAR (20) Description of release strategy
};
/* eslint-enable key-spacing */

// RELEASE_ALREADY_POSTED BAPIRLCOPO Releases to Date

/* eslint-disable key-spacing */
// prettier-ignore
RELEASE_ALREADY_POSTED = {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  REL_CD_TX1                       :   "", // CHAR (20) Description of release code 1
  REL_CD_TX2                       :   "", // CHAR (20) Description of release code 2
  REL_CD_TX3                       :   "", // CHAR (20) Description of release code 3
  REL_CD_TX4                       :   "", // CHAR (20) Description of release code 4
  REL_CD_TX5                       :   "", // CHAR (20) Description of release code 5
  REL_CD_TX6                       :   "", // CHAR (20) Description of release code 6
  REL_CD_TX7                       :   "", // CHAR (20) Description of release code 7
  REL_CD_TX8                       :   "", // CHAR (20) Description of release code
  REL_CODE1                        :   "", // CHAR (2) Release code 1
  REL_CODE2                        :   "", // CHAR (2) Release code 2
  REL_CODE3                        :   "", // CHAR (2) Release code 3
  REL_CODE4                        :   "", // CHAR (2) Release code 4
  REL_CODE5                        :   "", // CHAR (2) Release code 5
  REL_CODE6                        :   "", // CHAR (2) Release code 6
  REL_CODE7                        :   "", // CHAR (2) Release code 7
  REL_CODE8                        :   "", // CHAR (2) Release code 8
  REL_WF1                          :   "", // CHAR (1) Role resolution for workflow for release code 1
  REL_WF2                          :   "", // CHAR (1) Role resolution for workflow for release code 2
  REL_WF3                          :   "", // CHAR (1) Role resolution for workflow for release code 3
  REL_WF4                          :   "", // CHAR (1) Role resolution for workflow for release code 4
  REL_WF5                          :   "", // CHAR (1) Role resolution for workflow for release code 5
  REL_WF6                          :   "", // CHAR (1) Role resolution for workflow for release code 6
  REL_WF7                          :   "", // CHAR (1) Role resolution for workflow for release code 7
  REL_WF8                          :   "", // CHAR (1) Role resolution for workflow for release code 8
};
/* eslint-enable key-spacing */

// RELEASE_PREREQUISITES BAPIRLCOPO Release Prerequisites

/* eslint-disable key-spacing */
// prettier-ignore
RELEASE_PREREQUISITES = {
  PO_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number
  REL_CD_TX1                       :   "", // CHAR (20) Description of release code 1
  REL_CD_TX2                       :   "", // CHAR (20) Description of release code 2
  REL_CD_TX3                       :   "", // CHAR (20) Description of release code 3
  REL_CD_TX4                       :   "", // CHAR (20) Description of release code 4
  REL_CD_TX5                       :   "", // CHAR (20) Description of release code 5
  REL_CD_TX6                       :   "", // CHAR (20) Description of release code 6
  REL_CD_TX7                       :   "", // CHAR (20) Description of release code 7
  REL_CD_TX8                       :   "", // CHAR (20) Description of release code
  REL_CODE1                        :   "", // CHAR (2) Release code 1
  REL_CODE2                        :   "", // CHAR (2) Release code 2
  REL_CODE3                        :   "", // CHAR (2) Release code 3
  REL_CODE4                        :   "", // CHAR (2) Release code 4
  REL_CODE5                        :   "", // CHAR (2) Release code 5
  REL_CODE6                        :   "", // CHAR (2) Release code 6
  REL_CODE7                        :   "", // CHAR (2) Release code 7
  REL_CODE8                        :   "", // CHAR (2) Release code 8
  REL_WF1                          :   "", // CHAR (1) Role resolution for workflow for release code 1
  REL_WF2                          :   "", // CHAR (1) Role resolution for workflow for release code 2
  REL_WF3                          :   "", // CHAR (1) Role resolution for workflow for release code 3
  REL_WF4                          :   "", // CHAR (1) Role resolution for workflow for release code 4
  REL_WF5                          :   "", // CHAR (1) Role resolution for workflow for release code 5
  REL_WF6                          :   "", // CHAR (1) Role resolution for workflow for release code 6
  REL_WF7                          :   "", // CHAR (1) Role resolution for workflow for release code 7
  REL_WF8                          :   "", // CHAR (1) Role resolution for workflow for release code 8
};
/* eslint-enable key-spacing */
