//
// BAPI_PERSDATA_GETLIST var: 3  struct: 1  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

EMPLOYEENUMBER      :           "", // NUMC (8) Personnel number SU3=PER
// TIMEINTERVALHIGH :   '99991231', // DATS (8) Valid To Date
// TIMEINTERVALLOW  :   '18000101', // DATS (8) Valid from date

// TABLE PARAMETERS

PERSONALDATAKEY     :           [], // BAPIPAKEY Key for HR master data

// EXPORT PARAMETERS

// RETURN           :           {}, // BAPIRETURN1 Structure for return code
};

const result = await client.call("BAPI_PERSDATA_GETLIST", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIPAKEY  Key for HR master data
const PERSONALDATAKEY= [];

// prettier-ignore
const PERSONALDATAKEY= {
  EMPLOYEENO                       :   "", // NUMC (8) Personnel Number SU3=PER
  SUBTYPE                          :   "", // CHAR (4) Subtype SU3=SUB
  OBJECTID                         :   "", // CHAR (2) Object Identification SU3=OPS
  LOCKINDIC                        :   "", // CHAR (1) Lock Indicator for HR Master Data Record
  VALIDEND                         :   "", // DATS (8) End Date
  VALIDBEGIN                       :   "", // DATS (8) Start Date
  RECORDNR                         :   "", // NUMC (3) Number of Infotype Record With Same Key
};


//
// EXPORT PARAMETERS
//

// BAPIRETURN1  Structure for return code

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
