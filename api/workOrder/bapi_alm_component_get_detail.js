//
// BAPI_ALM_COMPONENT_GET_DETAIL var: 5  struct: 1  table: 5  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

IV_ACTIVITY      :           "", // CHAR (4) ALPHA=NUMCV Operation Number SU3=VGN
IV_ORDERID       :           "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
IV_RES_ITEM      :           "", // NUMC (4) Item number of reservation / dependent requirements SU3=RPO
IV_RESERV_NO     :           "", // NUMC (10) Number of Reservation / Dependent Requirement SU3=RES
// IV_RES_TYPE   :        SPACE, // CHAR (1) Record Type (General Components: ' ', Follow-Up Material: '1' )

// TABLE PARAMETERS

RETURN           :           [], // BAPIRET2 Return Parameters
// ET_TEXT       :           [], // BAPI_ALM_TEXT Text Header for ALM Order BAPIs
// ET_TEXT_LINES :           [], // BAPI_ALM_TEXT_LINES SAPscript: Text Lines
// EXTENSION_IN  :           [], // BAPIPAREX Customer Enhancement In
// EXTENSION_OUT :           [], // BAPIPAREX Customer Enhancement Out

// EXPORT PARAMETERS

// ES_COMPONENT  :           {}, // BAPI_ALM_ORDER_COMPONENT_E PM/CS BAPI Order Components (Export Structure)
};

const result = await client.call("BAPI_ALM_COMPONENT_GET_DETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

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

// BAPI_ALM_TEXT  Text Header for ALM Order BAPIs
const ET_TEXT= [];

// prettier-ignore
const ET_TEXT= {
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  ACTIVITY                         :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_ACTIVITY                     :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  RES_ITEM                         :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  RES_TYPE                         :   "", // CHAR (1) Record type
  ITEM_NO_OF_PRODUCTION_RESOURCE   :   "", // NUMC (4) Item Number for Production Resource/Tool
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  TEXTSTART                        :   "", // NUMC (8) Cursor on the first line of a text
  TEXTEND                          :   "", // NUMC (8) Cursor on the first line of a text
};

// BAPI_ALM_TEXT_LINES  SAPscript: Text Lines
const ET_TEXT_LINES= [];

// prettier-ignore
const ET_TEXT_LINES= {
  TDFORMAT                         :   "", // CHAR (2) Tag column
  TDLINE                           :   "", // CHAR (132) Text Line
};

// BAPIPAREX  Customer Enhancement In
const EXTENSION_IN= [];

// prettier-ignore
const EXTENSION_IN= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIPAREX  Customer Enhancement Out
const EXTENSION_OUT= [];

// prettier-ignore
const EXTENSION_OUT= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};


//
// EXPORT PARAMETERS
//

// BAPI_ALM_ORDER_COMPONENT_E  PM/CS BAPI Order Components (Export Structure)

// prettier-ignore
const ES_COMPONENT= {
  RES_ITEM                         :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  RES_TYPE                         :   "", // CHAR (1) Record type
};
