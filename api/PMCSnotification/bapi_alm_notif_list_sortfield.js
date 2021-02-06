//
// BAPI_ALM_NOTIF_LIST_SORTFIELD var: 5  struct: 2  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

SORTFIELD            :           {}, // BAPI_ITOB_SEL_SORTFIELD BAPI Communication Structure: Range for Sort Field
// COMPLETE          :          'X', // CHAR (1) Completed Notifications
// NOTIFICATION_DATE :     SY-DATUM, // DATS (8) Notification Date
// PARTNER           :           "", // NUMC (10) Partner SU3=VPA
// PARTNER_USER      :           "", // CHAR (12) ALPHA=ALPHA Partner
// PARTNERFUNCTION   :           "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR

// TABLE PARAMETERS

NOTIFICATION         :           [], // BAPI2080_1 Table of service notifications

// EXPORT PARAMETERS

// RETURN            :           {}, // BAPIRETURN Return Parameters
};

const result = await client.call("BAPI_ALM_NOTIF_LIST_SORTFIELD", parameters);

//
// IMPORT PARAMETERS
//

// BAPI_ITOB_SEL_SORTFIELD  BAPI Communication Structure: Range for Sort Field

// prettier-ignore
const SORTFIELD= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (30) Sort field
  HIGH                             :   "", // CHAR (30) Sort field
};


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
