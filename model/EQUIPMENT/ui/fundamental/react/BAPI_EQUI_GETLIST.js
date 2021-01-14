//
// BAPI_EQUI_GETLIST 
//
// rfmcall.py 1.0 at: 2021-01-14 13:00:36
//

// Variables : 3
// Structures: 1
// Tables    : 16
// Exceptions: 0

BAPI_EQUI_GETLIST = {

  // INPUT PARAMETERS

  //LANGUAGE                       : SY-LANGU, // LANG (1) ALPHA=ISOLA Language Key
  //LANGUAGE_ISO                   :   "", // CHAR (2) Language According to ISO 639
  //PARTNERFUNCTION                :   "", // CHAR (2) ALPHA=PARVW Partner Role

  // TABLE PARAMETERS

  EQUIPMENT_LIST                   :   [], // BAPI_ITOB_EQ_SEL_RESULT BAPI Communication Structure: Results List for GetList
  //ADDRESS_CITY_RA                :   [], // BAPI_ITOB_SEL_ADDR_CITY BAPI Communication Structure: Range for Address City
  //ADDRESS_NAME_RA                :   [], // BAPI_ITOB_SEL_ADDR_NAME BAPI Communication Structure: Range for Address Name
  //ADDRESS_POST_CODE_RA           :   [], // BAPI_ITOB_SEL_ADDR_POST_CODE BAPI Communication Structure: Range for Address Postal Code
  //ADDRESS_SEARCH_TERM_1_RA       :   [], // BAPI_ITOB_SEL_ADDR_SORT1 BAPI Communication Structure: Range for Address Search Term 1
  //ADDRESS_SEARCH_TERM_2_RA       :   [], // BAPI_ITOB_SEL_ADDR_SORT2 BAPI Communication Structure: Range for Address Search Term 2
  //ADDRESS_STREET_RA              :   [], // BAPI_ITOB_SEL_ADDR_STREET BAPI Communication Structure: Range for Address Street
  //DESCRIPT_RA                    :   [], // BAPI_ITOB_SEL_DESCRIPT BAPI Communication Structure: Description Range
  //EQUIPMENT_RA                   :   [], // BAPI_ITOB_SEL_EQUIPMENT BAPI Communication Structure: Range for Functional Location
  //MAINTPLANT_RA                  :   [], // BAPI_ITOB_SEL_MAINTPLANT BApi Communication Structure: Range for Maintenance Plant
  //OBJECTTYPE_RA                  :   [], // BAPI_ITOB_SEL_OBJECTTYPE BAPI Communication Structure: Range for Object Type
  //PARTNER_RA                     :   [], // BAPI_ITOB_SEL_PARTNER BAPI Communication Structure: Range for Partner
  //PLANGROUP_RA                   :   [], // BAPI_ITOB_SEL_PLANGROUP BAPI Communication Structure: Range for Maintenance Planner Group
  //PLANPLANT_RA                   :   [], // BAPI_ITOB_SEL_PLANPLANT BAPI Communication Structure: Range for Maintenance Planning
  //SORTFIELD_RA                   :   [], // BAPI_ITOB_SEL_SORTFIELD BAPI Communication Structure: Range for Sort Field
  //STATUS_RA                      :   [], // BAPI_ITOB_SEL_STATUS BAPI Communication Structure: Range for Status

  // OUTPUT PARAMETERS

  RETURN                           :   {}, // BAPIRET2 Return Parameter
};

//
// INPUT PARAMETERS
//

//
// TABLE PARAMETERS
//

// EQUIPMENT_LIST BAPI_ITOB_EQ_SEL_RESULT BAPI Communication Structure: Results List for GetList

/* eslint-disable key-spacing */
// prettier-ignore
EQUIPMENT_LIST = {
  DESCRIPT                         :   "", // CHAR (40) Description of Technical Object
  EQUICATGRY                       :   "", // CHAR (1) Equipment category
  EQUIPMENT                        :   "", // CHAR (18) ALPHA=ALPHA Equipment Number
  MAINTPLANT                       :   "", // CHAR (4) Maintenance plant
  PLANGROUP                        :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance
  PLANPLANT                        :   "", // CHAR (4) Maintenance Planning Plant
  SORTFIELD                        :   "", // CHAR (30) Sort field
};
/* eslint-enable key-spacing */

// ADDRESS_CITY_RA BAPI_ITOB_SEL_ADDR_CITY BAPI Communication Structure: Range for Address City

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_CITY_RA = {
  HIGH                             :   "", // CHAR (25) City name in Uppercase for Search Help
  LOW                              :   "", // CHAR (25) City name in Uppercase for Search Help
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// ADDRESS_NAME_RA BAPI_ITOB_SEL_ADDR_NAME BAPI Communication Structure: Range for Address Name

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_NAME_RA = {
  HIGH                             :   "", // CHAR (25) Name (Field NAME1) in Uppercase for Search Help
  LOW                              :   "", // CHAR (25) Name (Field NAME1) in Uppercase for Search Help
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// ADDRESS_POST_CODE_RA BAPI_ITOB_SEL_ADDR_POST_CODE BAPI Communication Structure: Range for Address Postal Code

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_POST_CODE_RA = {
  HIGH                             :   "", // CHAR (10) City postal code
  LOW                              :   "", // CHAR (10) City postal code
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// ADDRESS_SEARCH_TERM_1_RA BAPI_ITOB_SEL_ADDR_SORT1 BAPI Communication Structure: Range for Address Search Term 1

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_SEARCH_TERM_1_RA = {
  HIGH                             :   "", // CHAR (20) Search Term 1
  LOW                              :   "", // CHAR (20) Search Term 1
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// ADDRESS_SEARCH_TERM_2_RA BAPI_ITOB_SEL_ADDR_SORT2 BAPI Communication Structure: Range for Address Search Term 2

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_SEARCH_TERM_2_RA = {
  HIGH                             :   "", // CHAR (20) Search Term 2
  LOW                              :   "", // CHAR (20) Search Term 2
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// ADDRESS_STREET_RA BAPI_ITOB_SEL_ADDR_STREET BAPI Communication Structure: Range for Address Street

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_STREET_RA = {
  HIGH                             :   "", // CHAR (25) Street Name in Uppercase for Search Help
  LOW                              :   "", // CHAR (25) Street Name in Uppercase for Search Help
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// DESCRIPT_RA BAPI_ITOB_SEL_DESCRIPT BAPI Communication Structure: Description Range

/* eslint-disable key-spacing */
// prettier-ignore
DESCRIPT_RA = {
  HIGH                             :   "", // CHAR (40) Description of Technical Object
  LOW                              :   "", // CHAR (40) Description of Technical Object
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// EQUIPMENT_RA BAPI_ITOB_SEL_EQUIPMENT BAPI Communication Structure: Range for Functional Location

/* eslint-disable key-spacing */
// prettier-ignore
EQUIPMENT_RA = {
  HIGH                             :   "", // CHAR (18) ALPHA=ALPHA Equipment Number
  LOW                              :   "", // CHAR (18) ALPHA=ALPHA Equipment Number
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// MAINTPLANT_RA BAPI_ITOB_SEL_MAINTPLANT BApi Communication Structure: Range for Maintenance Plant

/* eslint-disable key-spacing */
// prettier-ignore
MAINTPLANT_RA = {
  HIGH                             :   "", // CHAR (4) Maintenance plant
  LOW                              :   "", // CHAR (4) Maintenance plant
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// OBJECTTYPE_RA BAPI_ITOB_SEL_OBJECTTYPE BAPI Communication Structure: Range for Object Type

/* eslint-disable key-spacing */
// prettier-ignore
OBJECTTYPE_RA = {
  HIGH                             :   "", // CHAR (10) Type of Technical Object
  LOW                              :   "", // CHAR (10) Type of Technical Object
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// PARTNER_RA BAPI_ITOB_SEL_PARTNER BAPI Communication Structure: Range for Partner

/* eslint-disable key-spacing */
// prettier-ignore
PARTNER_RA = {
  HIGH                             :   "", // CHAR (12) ALPHA=ALPHA Partner
  LOW                              :   "", // CHAR (12) ALPHA=ALPHA Partner
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// PLANGROUP_RA BAPI_ITOB_SEL_PLANGROUP BAPI Communication Structure: Range for Maintenance Planner Group

/* eslint-disable key-spacing */
// prettier-ignore
PLANGROUP_RA = {
  HIGH                             :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance
  LOW                              :   "", // CHAR (3) Planner Group for Customer Service and Plant Maintenance
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// PLANPLANT_RA BAPI_ITOB_SEL_PLANPLANT BAPI Communication Structure: Range for Maintenance Planning

/* eslint-disable key-spacing */
// prettier-ignore
PLANPLANT_RA = {
  HIGH                             :   "", // CHAR (4) Maintenance Planning Plant
  LOW                              :   "", // CHAR (4) Maintenance Planning Plant
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// SORTFIELD_RA BAPI_ITOB_SEL_SORTFIELD BAPI Communication Structure: Range for Sort Field

/* eslint-disable key-spacing */
// prettier-ignore
SORTFIELD_RA = {
  HIGH                             :   "", // CHAR (30) Sort field
  LOW                              :   "", // CHAR (30) Sort field
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// STATUS_RA BAPI_ITOB_SEL_STATUS BAPI Communication Structure: Range for Status

/* eslint-disable key-spacing */
// prettier-ignore
STATUS_RA = {
  HIGH                             :   "", // CHAR (4) Individual status of an object (short form)
  LOW                              :   "", // CHAR (4) Individual status of an object (short form)
  OPTION                           :   "", // CHAR (2) Type of OPTION component in row type of a Ranges type
  SIGN                             :   "", // CHAR (1) Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

//
// OUTPUT PARAMETERS
//

// RETURN BAPIRET2 Return Parameter

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  FIELD                            :   "", // CHAR (30) Field in parameter
  ID                               :   "", // CHAR (20) Message Class
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  MESSAGE                          :   "", // CHAR (220) Message Text
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
  NUMBER                           :   "", // NUMC (3) Message Number
  PARAMETER                        :   "", // CHAR (32) Parameter Name
  ROW                              :    0, // INT4 (10) Lines in parameter
  SYSTEM                           :   "", // CHAR (10) ALPHA=ALPHA Logical system from which message originates
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */
