//
// BAPI_PERSDATA_CHANGE var: 40  struct: 1  table: 0  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

EMPLOYEENUMBER           :           "", // NUMC (8) Personnel number SU3=PER
LOCKINDICATOR            :           "", // CHAR (1) Lock indicator for HR master record
OBJECTID                 :           "", // CHAR (2) Object ID SU3=OPS
RECORDNUMBER             :           "", // NUMC (3) Number of Infotype Record
SUBTYPE                  :           "", // CHAR (4) Subtype SU3=SUB
VALIDITYBEGIN            :           "", // DATS (8) Valid from date
VALIDITYEND              :           "", // DATS (8) Valid To Date
// ACADEMICGRADE         :           "", // CHAR (15) Title
// ARISTROCRATICTITLE    :           "", // CHAR (15) Other title
// BIRTHPLACE            :           "", // CHAR (40) Birthplace
// COUNTRYOFBIRTH        :           "", // CHAR (3) Country of Birth
// DATEOFBIRTH           :           "", // DATS (8) ALPHA=PDATE Date of birth
// FIRSTNAME             :           "", // CHAR (40) First name
// FORMOFADDRESS         :           "", // CHAR (1) Form-of-address key
// FULLNAME              :           "", // CHAR (80) Full employee name
// GENDER                :           "", // CHAR (1) Gender key
// IDNUMBER              :           "", // CHAR (20) Personnel ID number
// INITIALS              :           "", // CHAR (10) Employee's Initials
// KNOWNAS               :           "", // CHAR (40) Known As
// LANGUAGE              :           "", // LANG (1) ALPHA=ISOLA Language key SU3=SPR
// LANGUAGE_ISO          :           "", // CHAR (2) Language according to ISO 639
// LASTNAME              :           "", // CHAR (40) Last name
// MARITALSTATUS         :           "", // CHAR (1) Marital status key
// MARITALSTATUSSINCE    :           "", // DATS (8) Valid from date of current marital status
// MIDDLENAME            :           "", // CHAR (40) Middle name
// NAME_FORMAT_INDICATOR :           "", // NUMC (2) no text (en)
// NAMEATBIRTH           :           "", // CHAR (40) Name at Birth
// NATIONALITY           :           "", // CHAR (3) Nationality SU3=NAT
// NOCOMMIT              :           "", // CHAR (1) COMMIT control at BAPI interface
// NUMBEROFCHILDREN      :           "", // NUMC (3) Number of children
// RELIGION              :           "", // CHAR (2) Religious denomination key
// SECONDACADGRADE       :           "", // CHAR (15) Second title
// SECONDARISTROTITLE    :           "", // CHAR (15) Other Title for Birth Name
// SECONDNAME            :           "", // CHAR (40) Second name
// SECONDNAMEPREFIX      :           "", // CHAR (15) Second name prefix
// SECONDNATIONALITY     :           "", // CHAR (3) Second nationality
// STATEOFBIRTH          :           "", // CHAR (3) State
// SURNAMEPREFIX         :           "", // CHAR (15) Name Prefix
// THIRDNATIONALITY      :           "", // CHAR (3) Third nationality
// UPDATE_ONLY_GBDAT     :           "", // CHAR (1) Flag: Only Update on GBDAT

// EXPORT PARAMETERS

// RETURN                :           {}, // BAPIRETURN1 Structure for return code
};

const result = await client.call("BAPI_PERSDATA_CHANGE", parameters);

//
// IMPORT PARAMETERS
//


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
