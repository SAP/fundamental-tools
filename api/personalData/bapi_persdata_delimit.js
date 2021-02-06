//
// BAPI_PERSDATA_DELIMIT var: 9  struct: 2  table: 0  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

DELIMIT_DATE       :           "", // DATS (8) Delimitation date
EMPLOYEENUMBER     :           "", // NUMC (8) no text (en) SU3=PER
LOCKINDICATOR      :           "", // CHAR (1) no text (en)
OBJECTID           :           "", // CHAR (2) no text (en) SU3=OPS
RECORDNUMBER       :           "", // NUMC (3) no text (en)
SUBTYPE            :           "", // CHAR (4) no text (en) SU3=SUB
VALIDITYBEGIN      :           "", // DATS (8) no text (en)
VALIDITYEND        :           "", // DATS (8) no text (en)
// NOCOMMIT        :           "", // CHAR (1) COMMIT control at BAPI interface

// EXPORT PARAMETERS

// PERSONALDATAKEY :           {}, // BAPIPAKEY Personnel number
// RETURN          :           {}, // BAPIRETURN1 Structure for Return Code
};

const result = await client.call("BAPI_PERSDATA_DELIMIT", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//

// BAPIPAKEY  Personnel number

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

// BAPIRETURN1  Structure for Return Code

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
