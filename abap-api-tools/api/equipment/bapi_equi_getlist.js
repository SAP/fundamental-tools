//
// BAPI_EQUI_GETLIST exception: 0  struct: 1  table: 16  var: 3
//
// abap 2.2.0 at: 2021-03-29 15:40:08
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// LANGUAGE                 :     SY-LANGU, // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
// LANGUAGE_ISO             :           "", // CHAR (2) Language According to ISO 639
// PARTNERFUNCTION          :           "", // CHAR (2) ALPHA=PARVW Partner Role SU3=PAR

// TABLE PARAMETERS

EQUIPMENT_LIST              :           [], // BAPI_ITOB_EQ_SEL_RESULT BAPI Communication Structure: Results List for GetList
// ADDRESS_CITY_RA          :           [], // BAPI_ITOB_SEL_ADDR_CITY BAPI Communication Structure: Range for Address City
// ADDRESS_NAME_RA          :           [], // BAPI_ITOB_SEL_ADDR_NAME BAPI Communication Structure: Range for Address Name
// ADDRESS_POST_CODE_RA     :           [], // BAPI_ITOB_SEL_ADDR_POST_CODE BAPI Communication Structure: Range for Address Postal Code
// ADDRESS_SEARCH_TERM_1_RA :           [], // BAPI_ITOB_SEL_ADDR_SORT1 BAPI Communication Structure: Range for Address Search Term 1
// ADDRESS_SEARCH_TERM_2_RA :           [], // BAPI_ITOB_SEL_ADDR_SORT2 BAPI Communication Structure: Range for Address Search Term 2
// ADDRESS_STREET_RA        :           [], // BAPI_ITOB_SEL_ADDR_STREET BAPI Communication Structure: Range for Address Street
// DESCRIPT_RA              :           [], // BAPI_ITOB_SEL_DESCRIPT BAPI Communication Structure: Description Range
// EQUIPMENT_RA             :           [], // BAPI_ITOB_SEL_EQUIPMENT BAPI Communication Structure: Range for Functional Location
// MAINTPLANT_RA            :           [], // BAPI_ITOB_SEL_MAINTPLANT BApi Communication Structure: Range for Maintenance Plant
// OBJECTTYPE_RA            :           [], // BAPI_ITOB_SEL_OBJECTTYPE BAPI Communication Structure: Range for Object Type
// PARTNER_RA               :           [], // BAPI_ITOB_SEL_PARTNER BAPI Communication Structure: Range for Partner
// PLANGROUP_RA             :           [], // BAPI_ITOB_SEL_PLANGROUP BAPI Communication Structure: Range for Maintenance Planner Group
// PLANPLANT_RA             :           [], // BAPI_ITOB_SEL_PLANPLANT BAPI Communication Structure: Range for Maintenance Planning
// SORTFIELD_RA             :           [], // BAPI_ITOB_SEL_SORTFIELD BAPI Communication Structure: Range for Sort Field
// STATUS_RA                :           [], // BAPI_ITOB_SEL_STATUS BAPI Communication Structure: Range for Status

// EXPORT PARAMETERS

// RETURN                   :           {}, // BAPIRET2 Return Parameter
};

const result = await client.call("BAPI_EQUI_GETLIST", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI_ITOB_EQ_SEL_RESULT  BAPI Communication Structure: Results List for GetList
const EQUIPMENT_LIST= [];

// prettier-ignore
const EQUIPMENT_LIST= {
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  DESCRIPT                         :   "", // CHAR (40) Description of Technical Object
  EQUICATGRY                       :   "", // CHAR (1) Equipment category SU3=EQT
  PLANPLANT                        :   "", // CHAR (4) Maintenance Planning Plant SU3=IWK
  MAINTPLANT                       :   "", // CHAR (4) Maintenance plant SU3=SWK
  PLANGROUP                        :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance SU3=IHG
  SORTFIELD                        :   "", // CHAR (30) Sort field
};

// BAPI_ITOB_SEL_ADDR_CITY  BAPI Communication Structure: Range for Address City
const ADDRESS_CITY_RA= [];

// prettier-ignore
const ADDRESS_CITY_RA= {
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  LOW                              :   "", // CHAR (25) City name in Uppercase for Search Help
  HIGH                             :   "", // CHAR (25) City name in Uppercase for Search Help
};

// BAPI_ITOB_SEL_ADDR_NAME  BAPI Communication Structure: Range for Address Name
const ADDRESS_NAME_RA= [];

// prettier-ignore
const ADDRESS_NAME_RA= {
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  LOW                              :   "", // CHAR (25) Name (Field NAME1) in Uppercase for Search Help
  HIGH                             :   "", // CHAR (25) Name (Field NAME1) in Uppercase for Search Help
};

// BAPI_ITOB_SEL_ADDR_POST_CODE  BAPI Communication Structure: Range for Address Postal Code
const ADDRESS_POST_CODE_RA= [];

// prettier-ignore
const ADDRESS_POST_CODE_RA= {
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  LOW                              :   "", // CHAR (10) City postal code
  HIGH                             :   "", // CHAR (10) City postal code
};

// BAPI_ITOB_SEL_ADDR_SORT1  BAPI Communication Structure: Range for Address Search Term 1
const ADDRESS_SEARCH_TERM_1_RA= [];

// prettier-ignore
const ADDRESS_SEARCH_TERM_1_RA= {
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  LOW                              :   "", // CHAR (20) Search Term 1
  HIGH                             :   "", // CHAR (20) Search Term 1
};

// BAPI_ITOB_SEL_ADDR_SORT2  BAPI Communication Structure: Range for Address Search Term 2
const ADDRESS_SEARCH_TERM_2_RA= [];

// prettier-ignore
const ADDRESS_SEARCH_TERM_2_RA= {
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  LOW                              :   "", // CHAR (20) Search Term 2
  HIGH                             :   "", // CHAR (20) Search Term 2
};

// BAPI_ITOB_SEL_ADDR_STREET  BAPI Communication Structure: Range for Address Street
const ADDRESS_STREET_RA= [];

// prettier-ignore
const ADDRESS_STREET_RA= {
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  LOW                              :   "", // CHAR (25) Street Name in Uppercase for Search Help
  HIGH                             :   "", // CHAR (25) Street Name in Uppercase for Search Help
};

// BAPI_ITOB_SEL_DESCRIPT  BAPI Communication Structure: Description Range
const DESCRIPT_RA= [];

// prettier-ignore
const DESCRIPT_RA= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (40) Description of Technical Object
  HIGH                             :   "", // CHAR (40) Description of Technical Object
};

// BAPI_ITOB_SEL_EQUIPMENT  BAPI Communication Structure: Range for Functional Location
const EQUIPMENT_RA= [];

// prettier-ignore
const EQUIPMENT_RA= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
  HIGH                             :   "", // CHAR (18) ALPHA=ALPHA Equipment Number SU3=EQN
};

// BAPI_ITOB_SEL_MAINTPLANT  BApi Communication Structure: Range for Maintenance Plant
const MAINTPLANT_RA= [];

// prettier-ignore
const MAINTPLANT_RA= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (4) Maintenance plant SU3=SWK
  HIGH                             :   "", // CHAR (4) Maintenance plant SU3=SWK
};

// BAPI_ITOB_SEL_OBJECTTYPE  BAPI Communication Structure: Range for Object Type
const OBJECTTYPE_RA= [];

// prettier-ignore
const OBJECTTYPE_RA= {
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  LOW                              :   "", // CHAR (10) Type of Technical Object
  HIGH                             :   "", // CHAR (10) Type of Technical Object
};

// BAPI_ITOB_SEL_PARTNER  BAPI Communication Structure: Range for Partner
const PARTNER_RA= [];

// prettier-ignore
const PARTNER_RA= {
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  LOW                              :   "", // CHAR (12) ALPHA=ALPHA Partner
  HIGH                             :   "", // CHAR (12) ALPHA=ALPHA Partner
};

// BAPI_ITOB_SEL_PLANGROUP  BAPI Communication Structure: Range for Maintenance Planner Group
const PLANGROUP_RA= [];

// prettier-ignore
const PLANGROUP_RA= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance SU3=IHG
  HIGH                             :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance SU3=IHG
};

// BAPI_ITOB_SEL_PLANPLANT  BAPI Communication Structure: Range for Maintenance Planning
const PLANPLANT_RA= [];

// prettier-ignore
const PLANPLANT_RA= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (4) Maintenance Planning Plant SU3=IWK
  HIGH                             :   "", // CHAR (4) Maintenance Planning Plant SU3=IWK
};

// BAPI_ITOB_SEL_SORTFIELD  BAPI Communication Structure: Range for Sort Field
const SORTFIELD_RA= [];

// prettier-ignore
const SORTFIELD_RA= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  LOW                              :   "", // CHAR (30) Sort field
  HIGH                             :   "", // CHAR (30) Sort field
};

// BAPI_ITOB_SEL_STATUS  BAPI Communication Structure: Range for Status
const STATUS_RA= [];

// prettier-ignore
const STATUS_RA= {
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  LOW                              :   "", // CHAR (4) Individual status of an object (short form)
  HIGH                             :   "", // CHAR (4) Individual status of an object (short form)
};


//
// EXPORT PARAMETERS
//

// BAPIRET2  Return Parameter

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
