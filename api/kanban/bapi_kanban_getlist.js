//
// BAPI_KANBAN_GETLIST var: 1  struct: 1  table: 7  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// MAXROWS                 :          500, // INT4 (10) Maximum Number of Data Records Read

// TABLE PARAMETERS

KANBANLIST                 :           [], // BAPI1075_LIST List of Kanbans
// KANBANCONTROLCYCLERANGE :           [], // BAPI1172_PKNUM_RANGE Selection Table for Control Cycle Number
// KANBANIDRANGE           :           [], // BAPI1075_PKKEY_RANGE Selection Table for Kanban Identification Number
// KANBANNUMBERRANGE       :           [], // BAPI1075_PKPOS_RANGE Selection Table for Kanban Number
// STATUSDATERANGE         :           [], // BAPI1075_SAEDT_RANGE Selection Table for Date of Status Change
// STATUSRANGE             :           [], // BAPI1075_PKBST_RANGE Selection table for the Status of a Kanban
// STATUSTIMERANGE         :           [], // BAPI1075_SAEUZ_RANGE Selection Table for the Time of Status Change

// EXPORT PARAMETERS

// RETURN                  :           {}, // BAPIRET2 Message if Function not Possible
};

const result = await client.call("BAPI_KANBAN_GETLIST", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI1075_LIST  List of Kanbans
const KANBANLIST= [];

// prettier-ignore
const KANBANLIST= {
  KANBAN_ID                        :   "", // NUMC (10) Identification Number
  KANBANCONTROLCYCLE               :   "", // CHAR (7) ALPHA=ALPHA Control cycle number SU3=PKNUM
  KANBAN_NO                        :   "", // NUMC (3) Kanban item number / control cycle item
};

// BAPI1172_PKNUM_RANGE  Selection Table for Control Cycle Number
const KANBANCONTROLCYCLERANGE= [];

// prettier-ignore
const KANBANCONTROLCYCLERANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  CTRLCYC_NO_LOW                   :   "", // CHAR (7) ALPHA=ALPHA Control cycle number SU3=PKNUM
  CTRLCYC_NO_HIGH                  :   "", // CHAR (7) ALPHA=ALPHA Control cycle number SU3=PKNUM
};

// BAPI1075_PKKEY_RANGE  Selection Table for Kanban Identification Number
const KANBANIDRANGE= [];

// prettier-ignore
const KANBANIDRANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  KANBAN_ID_LOW                    :   "", // NUMC (10) Identification Number
  KANBAN_ID_HIGH                   :   "", // NUMC (10) Identification Number
};

// BAPI1075_PKPOS_RANGE  Selection Table for Kanban Number
const KANBANNUMBERRANGE= [];

// prettier-ignore
const KANBANNUMBERRANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  KANBAN_NO_LOW                    :   "", // NUMC (3) Kanban item number / control cycle item
  KANBAN_NO_HIGH                   :   "", // NUMC (3) Kanban item number / control cycle item
};

// BAPI1075_SAEDT_RANGE  Selection Table for Date of Status Change
const STATUSDATERANGE= [];

// prettier-ignore
const STATUSDATERANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STATUSDATE_LOW                   :   "", // DATS (8) Date of last change
  STATUSDATE_HIGH                  :   "", // DATS (8) Date of last change
};

// BAPI1075_PKBST_RANGE  Selection table for the Status of a Kanban
const STATUSRANGE= [];

// prettier-ignore
const STATUSRANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STATUS_LOW                       :   "", // CHAR (1) Kanban status
  STATUS_HIGH                      :   "", // CHAR (1) Kanban status
};

// BAPI1075_SAEUZ_RANGE  Selection Table for the Time of Status Change
const STATUSTIMERANGE= [];

// prettier-ignore
const STATUSTIMERANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STATUSTIME_LOW                   :   "", // TIMS (6) Time of the last status change
  STATUSTIME_HIGH                  :   "", // TIMS (6) Time of the last status change
};


//
// EXPORT PARAMETERS
//

// BAPIRET2  Message if Function not Possible

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
