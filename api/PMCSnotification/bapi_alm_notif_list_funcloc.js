//
// BAPI_ALM_NOTIF_LIST_FUNCLOC var: 11  struct: 1  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// COMPLETE          :          'X', // CHAR (1) Completed Notifications
// EXTERNAL_NUMBER   :           "", // CHAR (40) Functional location label
// FUNCLOC           :           "", // CHAR (30) ALPHA=TPLNR Equipment Number SU3=IFL
// IN_PROCESS        :          'X', // CHAR (1) in process (notification or order)
// LABEL_SYST        :           "", // CHAR (1) Labeling system for functional locations SU3=ILOM_ALKEY
// NOTIFICATION_DATE :     SY-DATUM, // DATS (8) Notification Date
// OUTSTANDING       :          'X', // CHAR (1) Outstanding (notification or order)
// PARTNER           :           "", // NUMC (10) Partner SU3=VPA
// PARTNER_USER      :           "", // CHAR (12) ALPHA=ALPHA Partner
// PARTNERFUNCTION   :           "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
// POSTPONED         :          'X', // CHAR (1) postponed (notification)

// TABLE PARAMETERS

NOTIFICATION         :           [], // BAPI2080_1 Table of service notifications

// EXPORT PARAMETERS

// RETURN            :           {}, // BAPIRETURN Return Parameters
};

const result = await client.call("BAPI_ALM_NOTIF_LIST_FUNCLOC", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI2080_1  Table of service notifications
const NOTIFICATION= [];

// prettier-ignore
const NOTIFICATION= {
  NOTIFDATE                        :   "", // DATS (8) Date of Notification
};


//
// EXPORT PARAMETERS
//

// BAPIRETURN  Return Parameters

// prettier-ignore
const RETURN= {
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
