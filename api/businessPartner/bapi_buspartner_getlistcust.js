//
// BAPI_BUSPARTNER_GETLISTCUST var: 2  struct: 0  table: 12  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// MAXCNT               :            0, // INT4 (10) Read Maximum Number of Business Partners from Database

// TABLE PARAMETERS

BUSPARTNER_DATA         :           [], // BAPI1309BPARTNERHITS Hit List of Determined Business Partners
// FILTER_BUSPARTNER    :           [], // BAPI1309RNGBUSPART Filter for Business Partner
// FILTER_CITY          :           [], // BAPI1309RNGCITY Filter for City
// FILTER_COMP_CODE     :           [], // BAPI1309RNGCOMPCODE Filter for Company Code
// FILTER_FIRSTNAME     :           [], // BAPI1309RNGFNAME Filter for 1st / 2nd Name
// FILTER_INSTITUTION   :           [], // BAPI1309RNGINSTITUTION Filter for Institution
// FILTER_LASTNAME      :           [], // BAPI1309RNGLNAME Filter for Last Name
// FILTER_PARTNER_GUID  :           [], // BAPI1309RNGPARTNER_GUID Filter for GUID
// FILTER_PARTNER_NO    :           [], // BAPI1309RNGPARTNER_NO Filter for External Partner Number
// FILTER_PCODE         :           [], // BAPI1309RNGPCODE Filter for Postal Code
// FILTER_SHORTNAME     :           [], // BAPI1309RNGSNAME Filter for Short Name
// RETURN               :           [], // BAPIRET2 Return Parameters

// EXPORT PARAMETERS

// WORST_RETURNED_MSGTY :           "", // CHAR (1) IS-H: Most Severe Message Type Generated
};

const result = await client.call("BAPI_BUSPARTNER_GETLISTCUST", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI1309BPARTNERHITS  Hit List of Determined Business Partners
const BUSPARTNER_DATA= [];

// prettier-ignore
const BUSPARTNER_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  BPARTNER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
  LAST_NAME_BP                     :   "", // CHAR (35) IS-H: Last Name/ 1st Name SU3=NA1
  FRST_NAME_BP                     :   "", // CHAR (35) First Name / Second Name
  SHORT_NAME_BP                    :   "", // CHAR (12) IS-H: Short Name of Business Partner
  SEX_EXT                          :   "", // CHAR (1) IS-H: Sex Indicator - User-Specific
  PERS_IND                         :   "", // CHAR (1) IS-H: Text Designating the EMPLOYEE Function
  INSURPROV_IND                    :   "", // CHAR (1) IS-H: Text Designating the INSURANCE PROVIDER Function
  CUST_IND                         :   "", // CHAR (1) Text Designating the CUSTOMER Function
  EMPL_IND                         :   "", // CHAR (1) IS-H: Text Designating the EMPLOYER Function
  HOSP_IND                         :   "", // CHAR (1) IS-H: Text Designating the HOSPITAL Function
  PCODE                            :   "", // CHAR (10) IS-H: Postal Code of Business Partner
  CITY                             :   "", // CHAR (40) IS-H: City
  PARTNER_NO                       :   "", // CHAR (15) IS-H: External Partner Number
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  PARTNER_GUID                     : bytes(), // RAW (16) IS-H: GUID of Business Partner
  ZSR_NUM                          :   "", // CHAR (10) No field text
  FEE_IND                          :   "", // CHAR (1) IS-H: Text Indicating the Function FEE RECIPIENT
};

// BAPI1309RNGBUSPART  Filter for Business Partner
const FILTER_BUSPARTNER= [];

// prettier-ignore
const FILTER_BUSPARTNER= {
  SIGN                             :   "", // CHAR (1) Sign (like RANGES table)
  OPTION                           :   "", // CHAR (2) Option (like RANGES table)
  LOW                              :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
  HIGH                             :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
};

// BAPI1309RNGCITY  Filter for City
const FILTER_CITY= [];

// prettier-ignore
const FILTER_CITY= {
  SIGN                             :   "", // CHAR (1) Sign (like RANGES table)
  OPTION                           :   "", // CHAR (2) Option (like RANGES table)
  LOW                              :   "", // CHAR (40) IS-H: City
  HIGH                             :   "", // CHAR (40) IS-H: City
};

// BAPI1309RNGCOMPCODE  Filter for Company Code
const FILTER_COMP_CODE= [];

// prettier-ignore
const FILTER_COMP_CODE= {
  SIGN                             :   "", // CHAR (1) Sign (like RANGES table)
  OPTION                           :   "", // CHAR (2) Option (like RANGES table)
  LOW                              :   "", // CHAR (4) Company Code SU3=BUK
  HIGH                             :   "", // CHAR (4) Company Code SU3=BUK
};

// BAPI1309RNGFNAME  Filter for 1st / 2nd Name
const FILTER_FIRSTNAME= [];

// prettier-ignore
const FILTER_FIRSTNAME= {
  SIGN                             :   "", // CHAR (1) Sign (like RANGES table)
  OPTION                           :   "", // CHAR (2) Option (like RANGES table)
  LOW                              :   "", // CHAR (35) First Name / Second Name
  HIGH                             :   "", // CHAR (35) First Name / Second Name
};

// BAPI1309RNGINSTITUTION  Filter for Institution
const FILTER_INSTITUTION= [];

// prettier-ignore
const FILTER_INSTITUTION= {
  SIGN                             :   "", // CHAR (1) IS-H: SIGN Parameter of Range Table
  OPTION                           :   "", // CHAR (2) IS-H: OPTION Parameter of Range Table
  LOW                              :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  HIGH                             :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
};

// BAPI1309RNGLNAME  Filter for Last Name
const FILTER_LASTNAME= [];

// prettier-ignore
const FILTER_LASTNAME= {
  SIGN                             :   "", // CHAR (1) Sign (like RANGES table)
  OPTION                           :   "", // CHAR (2) Option (like RANGES table)
  LOW                              :   "", // CHAR (35) IS-H: Last Name/ 1st Name SU3=NA1
  HIGH                             :   "", // CHAR (35) IS-H: Last Name/ 1st Name SU3=NA1
};

// BAPI1309RNGPARTNER_GUID  Filter for GUID
const FILTER_PARTNER_GUID= [];

// prettier-ignore
const FILTER_PARTNER_GUID= {
  SIGN                             :   "", // CHAR (1) Sign (like RANGES table)
  OPTION                           :   "", // CHAR (2) Option (like RANGES table)
  LOW                              : bytes(), // RAW (16) IS-H: GUID of Business Partner
  HIGH                             : bytes(), // RAW (16) IS-H: GUID of Business Partner
};

// BAPI1309RNGPARTNER_NO  Filter for External Partner Number
const FILTER_PARTNER_NO= [];

// prettier-ignore
const FILTER_PARTNER_NO= {
  SIGN                             :   "", // CHAR (1) Sign (like RANGES table)
  OPTION                           :   "", // CHAR (2) Option (like RANGES table)
  LOW                              :   "", // CHAR (15) IS-H: External Partner Number
  HIGH                             :   "", // CHAR (15) IS-H: External Partner Number
};

// BAPI1309RNGPCODE  Filter for Postal Code
const FILTER_PCODE= [];

// prettier-ignore
const FILTER_PCODE= {
  SIGN                             :   "", // CHAR (1) Sign (like RANGES table)
  OPTION                           :   "", // CHAR (2) Option (like RANGES table)
  LOW                              :   "", // CHAR (10) IS-H: Postal Code of Business Partner
  HIGH                             :   "", // CHAR (10) IS-H: Postal Code of Business Partner
};

// BAPI1309RNGSNAME  Filter for Short Name
const FILTER_SHORTNAME= [];

// prettier-ignore
const FILTER_SHORTNAME= {
  SIGN                             :   "", // CHAR (1) Sign (like RANGES table)
  OPTION                           :   "", // CHAR (2) Option (like RANGES table)
  LOW                              :   "", // CHAR (12) IS-H: Short Name of Business Partner
  HIGH                             :   "", // CHAR (12) IS-H: Short Name of Business Partner
};

// BAPIRET2  Return Parameters
const RETURN= [];

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
  PARAMETER                        :   "", // CHAR (32) Parameter Name
  ROW                              :    0, // INT4 (10) Lines in parameter
  FIELD                            :   "", // CHAR (30) Field in parameter
  SYSTEM                           :   "", // CHAR (10) ALPHA=ALPHA Logical system from which message originates
};


//
// EXPORT PARAMETERS
//
