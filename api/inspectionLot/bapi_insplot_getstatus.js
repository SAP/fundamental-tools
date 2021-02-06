//
// BAPI_INSPLOT_GETSTATUS var: 1  struct: 2  table: 2  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

NUMBER           :           "", // NUMC (12) Inspection Lot SU3=QLS
LANGUAGE         :           {}, // BAPI2045LA Language Key (Non-ISO and ISO)

// TABLE PARAMETERS

SYSTEM_STATUS    :           [], // BAPI2045SS Inspection Lot System Status
USER_STATUS      :           [], // BAPI2045US User Status for the Inspection Lot

// EXPORT PARAMETERS

// RETURN        :           {}, // BAPIRETURN1 Return Values
};

const result = await client.call("BAPI_INSPLOT_GETSTATUS", parameters);

//
// IMPORT PARAMETERS
//

// BAPI2045LA  Language Key (Non-ISO and ISO)

// prettier-ignore
const LANGUAGE= {
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
};


//
// TABLE PARAMETERS
//

// BAPI2045SS  Inspection Lot System Status
const SYSTEM_STATUS= [];

// prettier-ignore
const SYSTEM_STATUS= {
  SYS_STATUS                       :   "", // CHAR (5) System status
  SY_ST_TEXT                       :   "", // CHAR (4) Individual status of an object (short form)
  SY_ST_DSCR                       :   "", // CHAR (30) Object status
};

// BAPI2045US  User Status for the Inspection Lot
const USER_STATUS= [];

// prettier-ignore
const USER_STATUS= {
  STAT_PROF                        :   "", // CHAR (8) Status Profile
  USR_STATUS                       :   "", // CHAR (5) User Status
  US_ST_NUMB                       :   "", // NUMC (2) Status Order Number
  US_ST_TEXT                       :   "", // CHAR (4) Individual status of an object (short form)
  US_ST_DSCR                       :   "", // CHAR (30) Object status
};


//
// EXPORT PARAMETERS
//

// BAPIRETURN1  Return Values

// prettier-ignore
const RETURN= {
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
  ID                               :   "", // CHAR (20) Message Class
  NUMBER                           :   "", // NUMC (3) Message Number
  MESSAGE                          :   "", // CHAR (220) Message Text
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
};
