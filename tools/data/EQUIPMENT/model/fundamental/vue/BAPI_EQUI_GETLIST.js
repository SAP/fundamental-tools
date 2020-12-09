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
