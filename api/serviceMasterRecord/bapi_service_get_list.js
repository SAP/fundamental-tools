//
// BAPI_SERVICE_GET_LIST var: 0  struct: 0  table: 7  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// TABLE PARAMETERS

RETURN                   :           [], // BAPIRET2 System Messages for Selection
// SERVICELIST           :           [], // BAPISRVLST List of Service Master Records Found
// SERVICESELECTION      :           [], // BAPIASNRAN Number of Service Master Record
// SRVGROUPSELECTION     :           [], // BAPIMTKRAN Material/Service Group
// SRVSHORTTEXTSELECTION :           [], // BAPIASKRAN Service Short Text
// SRVSTLVSELECTION      :           [], // BAPISTLRAN Standard Service Catalog Number
// SRVTYPSELECTION       :           [], // BAPIASTRAN Service Category
};

const result = await client.call("BAPI_SERVICE_GET_LIST", parameters);

//
// TABLE PARAMETERS
//

// BAPIRET2  System Messages for Selection
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

// BAPISRVLST  List of Service Master Records Found
const SERVICELIST= [];

// prettier-ignore
const SERVICELIST= {
  SERVICE                          :   "", // CHAR (18) ALPHA=ALPHA Activity Number SU3=ASN
  MATL_GROUP                       :   "", // CHAR (9) Material Group SU3=MKL
  SERV_CAT                         :   "", // CHAR (4) Service Category SU3=ASY
  SHORT_TEXT                       :   "", // CHAR (40) Service Short Text
  SERV_TYPE                        :   "", // CHAR (3) Short Description of Service Type SU3=LBR
  EDITION                          :   "", // NUMC (4) Edition of Service Type SU3=AGB
  SSC_ITEM                         :   "", // CHAR (18) Standard Service Catalog Item
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) Base unit of measure in ISO code
};

// BAPIASNRAN  Number of Service Master Record
const SERVICESELECTION= [];

// prettier-ignore
const SERVICESELECTION= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  SERVICE_LOW                      :   "", // CHAR (18) ALPHA=ALPHA Service number from
  SERVICE_HIGH                     :   "", // CHAR (18) ALPHA=ALPHA Service number to
};

// BAPIMTKRAN  Material/Service Group
const SRVGROUPSELECTION= [];

// prettier-ignore
const SRVGROUPSELECTION= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  MATL_GROUP_LOW                   :   "", // CHAR (9) Material/service group from
  MATL_GROUP_HIGH                  :   "", // CHAR (9) Material/service group to
};

// BAPIASKRAN  Service Short Text
const SRVSHORTTEXTSELECTION= [];

// prettier-ignore
const SRVSHORTTEXTSELECTION= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  SHORT_TEXT_LOW                   :   "", // CHAR (40) Service short text (short description) from
  SHORT_TEXT_HIGH                  :   "", // CHAR (40) Service short text (short description) to
};

// BAPISTLRAN  Standard Service Catalog Number
const SRVSTLVSELECTION= [];

// prettier-ignore
const SRVSTLVSELECTION= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  SSC_ITEM_LOW                     :   "", // CHAR (18) Standard service specifications: Item from
  SSC_ITEM_HIGH                    :   "", // CHAR (18) Standard service specifications: Item to
};

// BAPIASTRAN  Service Category
const SRVTYPSELECTION= [];

// prettier-ignore
const SRVTYPSELECTION= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  SERV_CAT_LOW                     :   "", // CHAR (4) Service category from
  SERV_CAT_HIGH                    :   "", // CHAR (4) Service category to
};
