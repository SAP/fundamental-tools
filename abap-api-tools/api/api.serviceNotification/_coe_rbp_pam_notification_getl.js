//
// /COE/RBP_PAM_NOTIFICATION_GETL exception: 0  struct: 6  table: 2  var: 5
//
// abap 2.3.0 at: 2021-04-23 11:59:34
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// IV_COMPLETE          :          'X', // CHAR (1) no text (undefined)
// IV_IN_PROCESS        :          'X', // CHAR (1) no text (undefined)
// IV_NOTIFICATION_DATE :     SY-DATUM, // DATS (8) no text (undefined)
// IV_OUTSTANDING       :          'X', // CHAR (1) no text (undefined)
// IV_POSTPONED         :          'X', // CHAR (1) no text (undefined)
// IS_CUSTOMER          :           {}, // /COE/RBP_S_PAM_NOTIF_CUSTOMER no text (undefined)
// IS_EQUIPMENT         :           {}, // /COE/RBP_S_PAM_NOTIF_EQUI no text (undefined)
// IS_FUNCLOC           :           {}, // /COE/RBP_S_PAM_NOTIF_FUNCLOC no text (undefined)
// IS_PARTNER           :           {}, // /COE/RBP_S_PAM_NOTIF_PARTNER no text (undefined)
// IS_PLANGROUP         :           {}, // /COE/RBP_S_PAM_NOTIF_PLANGRP no text (undefined)
// IS_SORTFIELD         :           {}, // /COE/RBP_S_PAM_NOTIF_SORTF no text (undefined)

// TABLE PARAMETERS

ET_NOTIFICATION         :           [], // EAMS_T_BAPI2080_1 no text (undefined)

// EXPORT PARAMETERS

// ET_RETURN            :           [], // BAPIRET2_TAB no text (undefined)
};

const result = await client.call("/COE/RBP_PAM_NOTIFICATION_GETL", parameters);

//
// IMPORT PARAMETERS
//

// /COE/RBP_S_PAM_NOTIF_CUSTOMER  

// prettier-ignore
const IS_CUSTOMER = {
  CUSTOMERNO                       :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
};

// /COE/RBP_S_PAM_NOTIF_EQUI  

// prettier-ignore
const IS_EQUIPMENT = {
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
};

// /COE/RBP_S_PAM_NOTIF_FUNCLOC  

// prettier-ignore
const IS_FUNCLOC = {
  FUNCLOC_INT                      :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  FUNCLOC_EXT                      :   "", // CHAR (40) Functional Location Label
  FUNCLOC_LABEL_SYST               :   "", // CHAR (1) Labeling system for functional locations SU3=ILOM_ALKEY
};

// /COE/RBP_S_PAM_NOTIF_PARTNER  

// prettier-ignore
const IS_PARTNER = {
  PARTNER                          :   "", // NUMC (10) Number of contact person SU3=VPA
  PARTNERFUNCTION                  :   "", // CHAR (2) ALPHA=PARVW Partner Function SU3=PAR
  PARTNER_USER                     :   "", // CHAR (12) ALPHA=ALPHA Partner
};

// /COE/RBP_S_PAM_NOTIF_PLANGRP  

// prettier-ignore
const IS_PLANGROUP = {
  PLANGROUP                        :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance SU3=IHG
  PLANPLANT                        :   "", // CHAR (4) Maintenance Planning Plant SU3=IWK
};

// /COE/RBP_S_PAM_NOTIF_SORTF  

// prettier-ignore
const IS_SORTFIELD = {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (30) Sort field
  HIGH                             :   "", // CHAR (30) Sort field
};


//
// TABLE PARAMETERS
//

// EAMS_T_BAPI2080_1  
const ET_NOTIFICATION = [];

// prettier-ignore
const ET_NOTIFICATION_line = {
  NOTIFICAT                        :   "", // CHAR (12) ALPHA=ALPHA Notification No SU3=IQM
  NOTIF_TYPE                       :   "", // CHAR (2) Notification Type SU3=QMR
  FUNCLOC                          :   "", // CHAR (30) ALPHA=TPLNR Functional Location SU3=IFL
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number SU3=KUN
  DESCRIPT                         :   "", // CHAR (40) Short Text
  PURCH_NO                         :   "", // CHAR (20) Customer purchase order number
  PURCH_DATE                       :   "", // DATS (8) Customer purchase order date
  S_STATUS                         :   "", // CHAR (40) System status line
  U_STATUS                         :   "", // CHAR (40) User Status Line
  EQUIDESCR                        :   "", // CHAR (40) Description of Technical Object
  FUNCLDESCR                       :   "", // CHAR (40) Description of functional location
  NOTIFDATE                        :   "", // DATS (8) Date of Notification
  NOTIFTIME                        :   "", // TIMS (6) Time of Notification
  PRIOTYPE                         :   "", // CHAR (2) Priority Type
  PRIORITY                         :   "", // CHAR (1) Priority SU3=PRIOK
  COMPLETION                       :   "", // DATS (8) Date for Notification Completion
  STARTDATE                        :   "", // DATS (8) Required start date
  ENDDATE                          :   "", // DATS (8) Required End Date
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
  SCENARIO                         :   "", // CHAR (4) Key for a Scenario
  EXTERNAL_NUMBER                  :   "", // CHAR (40) Functional Location Label
};


//
// EXPORT PARAMETERS
//

// BAPIRET2_TAB  
const ET_RETURN = [];

// prettier-ignore
const ET_RETURN_line = {
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
