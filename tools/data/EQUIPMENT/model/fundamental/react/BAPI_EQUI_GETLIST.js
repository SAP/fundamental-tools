//
// BAPI_EQUI_GETLIST 0.2
//

BAPI_EQUI_GETLIST = {

  // INPUT PARAMETERS

  LANGUAGE: '',                            // LANG(1)    BAPI_ITOB_PARMS LANGU          Language Key
  LANGUAGE_ISO: '',                        // CHAR(2)    BAPI_ITOB_PARMS LANGU_ISO      Language According to ISO 639
  PARTNERFUNCTION: '',                     // CHAR(2)    BAPIIHPA PAR_FUNCT             Partner Role

  // OUTPUT PARAMETERS

  RETURN: {},                              // BAPIRET2 : Return Parameter

  // TABLE PARAMETERS

  ADDRESS_CITY_RA: [],                     // BAPI_ITOB_SEL_ADDR_CITY : BAPI Communication Structure: Range for Address City
  ADDRESS_NAME_RA: [],                     // BAPI_ITOB_SEL_ADDR_NAME : BAPI Communication Structure: Range for Address Name
  ADDRESS_POST_CODE_RA: [],                // BAPI_ITOB_SEL_ADDR_POST_CODE : BAPI Communication Structure: Range for Address Postal Code
  ADDRESS_SEARCH_TERM_1_RA: [],            // BAPI_ITOB_SEL_ADDR_SORT1 : BAPI Communication Structure: Range for Address Search Term 1
  ADDRESS_SEARCH_TERM_2_RA: [],            // BAPI_ITOB_SEL_ADDR_SORT2 : BAPI Communication Structure: Range for Address Search Term 2
  ADDRESS_STREET_RA: [],                   // BAPI_ITOB_SEL_ADDR_STREET : BAPI Communication Structure: Range for Address Street
  DESCRIPT_RA: [],                         // BAPI_ITOB_SEL_DESCRIPT : BAPI Communication Structure: Description Range
  EQUIPMENT_LIST: [],                      // BAPI_ITOB_EQ_SEL_RESULT : BAPI Communication Structure: Results List for GetList
  EQUIPMENT_RA: [],                        // BAPI_ITOB_SEL_EQUIPMENT : BAPI Communication Structure: Range for Functional Location
  MAINTPLANT_RA: [],                       // BAPI_ITOB_SEL_MAINTPLANT : BApi Communication Structure: Range for Maintenance Plant
  OBJECTTYPE_RA: [],                       // BAPI_ITOB_SEL_OBJECTTYPE : BAPI Communication Structure: Range for Object Type
  PARTNER_RA: [],                          // BAPI_ITOB_SEL_PARTNER : BAPI Communication Structure: Range for Partner
  PLANGROUP_RA: [],                        // BAPI_ITOB_SEL_PLANGROUP : BAPI Communication Structure: Range for Maintenance Planner Group
  PLANPLANT_RA: [],                        // BAPI_ITOB_SEL_PLANPLANT : BAPI Communication Structure: Range for Maintenance Planning
  SORTFIELD_RA: [],                        // BAPI_ITOB_SEL_SORTFIELD : BAPI Communication Structure: Range for Sort Field
  STATUS_RA: []                            // BAPI_ITOB_SEL_STATUS : BAPI Communication Structure: Range for Status
};

//
// INPUT PARAMETERS
//

//
// OUTPUT PARAMETERS
//

// RETURN BAPIRET2 Return Parameter

/* eslint-disable key-spacing */
// prettier-ignore
RETURN = {
  FIELD                         : '',  // Field in parameter
  ID                            : '',  // Message Class
  LOG_MSG_NO                    : '',  // Application log: Internal message serial number
  LOG_NO                        : '',  // Application log: log number
  MESSAGE                       : '',  // Message Text
  MESSAGE_V1                    : '',  // Message Variable
  MESSAGE_V2                    : '',  // Message Variable
  MESSAGE_V3                    : '',  // Message Variable
  MESSAGE_V4                    : '',  // Message Variable
  NUMBER                        : '',  // Message Number
  PARAMETER                     : '',  // Parameter Name
  ROW                           : 0,  // Lines in parameter
  SYSTEM                        : '',  // Logical system from which message originates
  TYPE                          : ''   // Message type: S Success, E Error, W Warning, I Info, A Abort
};
/* eslint-enable key-spacing */

//
// TABLE PARAMETERS
//

// ADDRESS_CITY_RA BAPI_ITOB_SEL_ADDR_CITY BAPI Communication Structure: Range for Address City

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_CITY_RA = {
  HIGH                          : '',  // City name in Uppercase for Search Help
  LOW                           : '',  // City name in Uppercase for Search Help
  OPTION                        : '',  // Type of OPTION component in row type of a Ranges type
  SIGN                          : ''   // Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// ADDRESS_NAME_RA BAPI_ITOB_SEL_ADDR_NAME BAPI Communication Structure: Range for Address Name

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_NAME_RA = {
  HIGH                          : '',  // Name (Field NAME1) in Uppercase for Search Help
  LOW                           : '',  // Name (Field NAME1) in Uppercase for Search Help
  OPTION                        : '',  // Type of OPTION component in row type of a Ranges type
  SIGN                          : ''   // Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// ADDRESS_POST_CODE_RA BAPI_ITOB_SEL_ADDR_POST_CODE BAPI Communication Structure: Range for Address Postal Code

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_POST_CODE_RA = {
  HIGH                          : '',  // City postal code
  LOW                           : '',  // City postal code
  OPTION                        : '',  // Type of OPTION component in row type of a Ranges type
  SIGN                          : ''   // Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// ADDRESS_SEARCH_TERM_1_RA BAPI_ITOB_SEL_ADDR_SORT1 BAPI Communication Structure: Range for Address Search Term 1

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_SEARCH_TERM_1_RA = {
  HIGH                          : '',  // Search Term 1
  LOW                           : '',  // Search Term 1
  OPTION                        : '',  // Type of OPTION component in row type of a Ranges type
  SIGN                          : ''   // Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// ADDRESS_SEARCH_TERM_2_RA BAPI_ITOB_SEL_ADDR_SORT2 BAPI Communication Structure: Range for Address Search Term 2

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_SEARCH_TERM_2_RA = {
  HIGH                          : '',  // Search Term 2
  LOW                           : '',  // Search Term 2
  OPTION                        : '',  // Type of OPTION component in row type of a Ranges type
  SIGN                          : ''   // Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// ADDRESS_STREET_RA BAPI_ITOB_SEL_ADDR_STREET BAPI Communication Structure: Range for Address Street

/* eslint-disable key-spacing */
// prettier-ignore
ADDRESS_STREET_RA = {
  HIGH                          : '',  // Street Name in Uppercase for Search Help
  LOW                           : '',  // Street Name in Uppercase for Search Help
  OPTION                        : '',  // Type of OPTION component in row type of a Ranges type
  SIGN                          : ''   // Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// DESCRIPT_RA BAPI_ITOB_SEL_DESCRIPT BAPI Communication Structure: Description Range

/* eslint-disable key-spacing */
// prettier-ignore
DESCRIPT_RA = {
  HIGH                          : '',  // Description of Technical Object
  LOW                           : '',  // Description of Technical Object
  OPTION                        : '',  // Selection operator OPTION for range tables
  SIGN                          : ''   // Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// EQUIPMENT_LIST BAPI_ITOB_EQ_SEL_RESULT BAPI Communication Structure: Results List for GetList

/* eslint-disable key-spacing */
// prettier-ignore
EQUIPMENT_LIST = {
  DESCRIPT                      : '',  // Description of Technical Object
  EQUICATGRY                    : '',  // Equipment category
  EQUIPMENT                     : '',  // Equipment Number
  MAINTPLANT                    : '',  // Maintenance plant
  PLANGROUP                     : '',  // Planner Group for Customer Service and Plant Maintenance
  PLANPLANT                     : '',  // Maintenance Planning Plant
  SORTFIELD                     : ''   // Sort field
};
/* eslint-enable key-spacing */

// EQUIPMENT_RA BAPI_ITOB_SEL_EQUIPMENT BAPI Communication Structure: Range for Functional Location

/* eslint-disable key-spacing */
// prettier-ignore
EQUIPMENT_RA = {
  HIGH                          : '',  // Equipment Number
  LOW                           : '',  // Equipment Number
  OPTION                        : '',  // Selection operator OPTION for range tables
  SIGN                          : ''   // Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// MAINTPLANT_RA BAPI_ITOB_SEL_MAINTPLANT BApi Communication Structure: Range for Maintenance Plant

/* eslint-disable key-spacing */
// prettier-ignore
MAINTPLANT_RA = {
  HIGH                          : '',  // Maintenance plant
  LOW                           : '',  // Maintenance plant
  OPTION                        : '',  // Selection operator OPTION for range tables
  SIGN                          : ''   // Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// OBJECTTYPE_RA BAPI_ITOB_SEL_OBJECTTYPE BAPI Communication Structure: Range for Object Type

/* eslint-disable key-spacing */
// prettier-ignore
OBJECTTYPE_RA = {
  HIGH                          : '',  // Type of Technical Object
  LOW                           : '',  // Type of Technical Object
  OPTION                        : '',  // Type of OPTION component in row type of a Ranges type
  SIGN                          : ''   // Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// PARTNER_RA BAPI_ITOB_SEL_PARTNER BAPI Communication Structure: Range for Partner

/* eslint-disable key-spacing */
// prettier-ignore
PARTNER_RA = {
  HIGH                          : '',  // Partner
  LOW                           : '',  // Partner
  OPTION                        : '',  // Type of OPTION component in row type of a Ranges type
  SIGN                          : ''   // Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */

// PLANGROUP_RA BAPI_ITOB_SEL_PLANGROUP BAPI Communication Structure: Range for Maintenance Planner Group

/* eslint-disable key-spacing */
// prettier-ignore
PLANGROUP_RA = {
  HIGH                          : '',  // Planner Group for Customer Service and Plant Maintenance
  LOW                           : '',  // Planner Group for Customer Service and Plant Maintenance
  OPTION                        : '',  // Selection operator OPTION for range tables
  SIGN                          : ''   // Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// PLANPLANT_RA BAPI_ITOB_SEL_PLANPLANT BAPI Communication Structure: Range for Maintenance Planning

/* eslint-disable key-spacing */
// prettier-ignore
PLANPLANT_RA = {
  HIGH                          : '',  // Maintenance Planning Plant
  LOW                           : '',  // Maintenance Planning Plant
  OPTION                        : '',  // Selection operator OPTION for range tables
  SIGN                          : ''   // Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// SORTFIELD_RA BAPI_ITOB_SEL_SORTFIELD BAPI Communication Structure: Range for Sort Field

/* eslint-disable key-spacing */
// prettier-ignore
SORTFIELD_RA = {
  HIGH                          : '',  // Sort field
  LOW                           : '',  // Sort field
  OPTION                        : '',  // Selection operator OPTION for range tables
  SIGN                          : ''   // Inclusion/exclusion criterion SIGN for range tables
};
/* eslint-enable key-spacing */

// STATUS_RA BAPI_ITOB_SEL_STATUS BAPI Communication Structure: Range for Status

/* eslint-disable key-spacing */
// prettier-ignore
STATUS_RA = {
  HIGH                          : '',  // Individual status of an object (short form)
  LOW                           : '',  // Individual status of an object (short form)
  OPTION                        : '',  // Type of OPTION component in row type of a Ranges type
  SIGN                          : ''   // Type of SIGN component in row type of a Ranges type
};
/* eslint-enable key-spacing */
