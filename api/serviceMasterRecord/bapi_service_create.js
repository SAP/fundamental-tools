//
// BAPI_SERVICE_CREATE var: 3  struct: 4  table: 5  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

IM_SERVICE_DATA          :           {}, // BAPISRV_ASMD General Data for Service, Import
IM_SERVICE_DATAX         :           {}, // BAPISRV_ASMDX Change Parameter for Service Data, Import
// NO_NUMBER_RANGE_CHECK :           "", // CHAR (1) Indicator to Circumvent the Number Range Check
// TESTRUN               :           "", // CHAR (1) Switch to Simulation Mode for Write BAPIs

// TABLE PARAMETERS

// EXTENSION_IN          :           [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
// EXTENSION_OUT         :           [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
// RETURN                :           [], // BAPIRET2 Return Parameter(s)
// SERVICE_DESCRIPTION   :           [], // BAPISRV_ASMDT Communication Structure Short Text: Service Master
// SERVICE_LONG_TEXTS    :           [], // BAPISRV_TEXT Communication Structure Long Text: Service Master

// EXPORT PARAMETERS

// SERVICE               :           "", // CHAR (18) ALPHA=ALPHA Service Number SU3=ASN
// EX_SERVICE_DATA       :           {}, // BAPISRV_ASMD General Data for Service, Export
// EX_SERVICE_DATAX      :           {}, // BAPISRV_ASMDX Change Parameter for Service Data, Export
};

const result = await client.call("BAPI_SERVICE_CREATE", parameters);

//
// IMPORT PARAMETERS
//

// BAPISRV_ASMD  General Data for Service, Import

// prettier-ignore
const IM_SERVICE_DATA= {
  SERVICE                          :   "", // CHAR (18) ALPHA=ALPHA Activity Number SU3=ASN
};

// BAPISRV_ASMDX  Change Parameter for Service Data, Import

// prettier-ignore
const IM_SERVICE_DATAX= {
  SERVICE                          :   "", // CHAR (18) ALPHA=ALPHA Activity Number SU3=ASN
  DEL_IND                          :   "", // CHAR (1) Updated information in related user data field
  MATL_GROUP                       :   "", // CHAR (1) Updated information in related user data field
  BASE_UOM                         :   "", // CHAR (1) Updated information in related user data field
  BASE_UOM_ISO                     :   "", // CHAR (1) Updated information in related user data field
  SERV_CAT                         :   "", // CHAR (1) Updated information in related user data field
  EAN_UPC                          :   "", // CHAR (1) Updated information in related user data field
  EAN_CAT                          :   "", // CHAR (1) Updated information in related user data field
  DIVISION                         :   "", // CHAR (1) Updated information in related user data field
  AUTH_GROUP                       :   "", // CHAR (1) Updated information in related user data field
  P_STATUS                         :   "", // CHAR (1) Updated information in related user data field
  VALID_FROM                       :   "", // CHAR (1) Updated information in related user data field
  VAL_CLASS                        :   "", // CHAR (1) Updated information in related user data field
  HIER_SERV                        :   "", // CHAR (1) Updated information in related user data field
  MASTER_LANGU                     :   "", // CHAR (1) Updated information in related user data field
  MASTER_LANGU_ISO                 :   "", // CHAR (1) Updated information in related user data field
  WAGETYPE                         :   "", // CHAR (1) Updated information in related user data field
  SERV_TYPE                        :   "", // CHAR (1) Updated information in related user data field
  EDITION                          :   "", // CHAR (1) Updated information in related user data field
  SSC_ITEM                         :   "", // CHAR (1) Updated information in related user data field
  TAX_IND                          :   "", // CHAR (1) Updated information in related user data field
  CONV_NUM                         :   "", // CHAR (1) Updated information in related user data field
  CONV_DEN                         :   "", // CHAR (1) Updated information in related user data field
  WORK_UOM                         :   "", // CHAR (1) Updated information in related user data field
  WORK_UOM_ISO                     :   "", // CHAR (1) Updated information in related user data field
  FORMULA                          :   "", // CHAR (1) Updated information in related user data field
  CHGTEXT                          :   "", // CHAR (1) Updated information in related user data field
  GRAPHIC_URL                      :   "", // CHAR (1) Updated information in related user data field
  CREATED_ON                       :   "", // CHAR (1) Updated information in related user data field
  CREATED_BY                       :   "", // CHAR (1) Updated information in related user data field
  CHANGED_ON                       :   "", // CHAR (1) Updated information in related user data field
  CHANGED_BY                       :   "", // CHAR (1) Updated information in related user data field
};


//
// TABLE PARAMETERS
//

// BAPIPAREX  Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
const EXTENSION_IN= [];

// prettier-ignore
const EXTENSION_IN= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIPAREX  Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
const EXTENSION_OUT= [];

// prettier-ignore
const EXTENSION_OUT= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIRET2  Return Parameter(s)
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

// BAPISRV_ASMDT  Communication Structure Short Text: Service Master
const SERVICE_DESCRIPTION= [];

// prettier-ignore
const SERVICE_DESCRIPTION= {
  LANGUAGE                         :   "", // LANG (1) ALPHA=ISOLA Language Key
  LANGUAGE_ISO                     :   "", // CHAR (2) 2-Character SAP Language Code
  SHORT_TEXT                       :   "", // CHAR (40) Service Short Text
  CHANGE_ID                        :   "", // CHAR (1) Control Selection of Text in Service Master
};

// BAPISRV_TEXT  Communication Structure Long Text: Service Master
const SERVICE_LONG_TEXTS= [];

// prettier-ignore
const SERVICE_LONG_TEXTS= {
  LANGUAGE                         :   "", // LANG (1) ALPHA=ISOLA Language Key
  LANGUAGE_ISO                     :   "", // CHAR (2) 2-Character SAP Language Code
  FORMAT                           :   "", // CHAR (2) Tag column
  LINE                             :   "", // CHAR (132) Text Line
  CHANGE_ID                        :   "", // CHAR (1) Control Selection of Text in Service Master
};


//
// EXPORT PARAMETERS
//

// BAPISRV_ASMD  General Data for Service, Export

// prettier-ignore
const EX_SERVICE_DATA= {
  SERVICE                          :   "", // CHAR (18) ALPHA=ALPHA Activity Number SU3=ASN
};

// BAPISRV_ASMDX  Change Parameter for Service Data, Export

// prettier-ignore
const EX_SERVICE_DATAX= {
  SERVICE                          :   "", // CHAR (18) ALPHA=ALPHA Activity Number SU3=ASN
  DEL_IND                          :   "", // CHAR (1) Updated information in related user data field
  MATL_GROUP                       :   "", // CHAR (1) Updated information in related user data field
  BASE_UOM                         :   "", // CHAR (1) Updated information in related user data field
  BASE_UOM_ISO                     :   "", // CHAR (1) Updated information in related user data field
  SERV_CAT                         :   "", // CHAR (1) Updated information in related user data field
  EAN_UPC                          :   "", // CHAR (1) Updated information in related user data field
  EAN_CAT                          :   "", // CHAR (1) Updated information in related user data field
  DIVISION                         :   "", // CHAR (1) Updated information in related user data field
  AUTH_GROUP                       :   "", // CHAR (1) Updated information in related user data field
  P_STATUS                         :   "", // CHAR (1) Updated information in related user data field
  VALID_FROM                       :   "", // CHAR (1) Updated information in related user data field
  VAL_CLASS                        :   "", // CHAR (1) Updated information in related user data field
  HIER_SERV                        :   "", // CHAR (1) Updated information in related user data field
  MASTER_LANGU                     :   "", // CHAR (1) Updated information in related user data field
  MASTER_LANGU_ISO                 :   "", // CHAR (1) Updated information in related user data field
  WAGETYPE                         :   "", // CHAR (1) Updated information in related user data field
  SERV_TYPE                        :   "", // CHAR (1) Updated information in related user data field
  EDITION                          :   "", // CHAR (1) Updated information in related user data field
  SSC_ITEM                         :   "", // CHAR (1) Updated information in related user data field
  TAX_IND                          :   "", // CHAR (1) Updated information in related user data field
  CONV_NUM                         :   "", // CHAR (1) Updated information in related user data field
  CONV_DEN                         :   "", // CHAR (1) Updated information in related user data field
  WORK_UOM                         :   "", // CHAR (1) Updated information in related user data field
  WORK_UOM_ISO                     :   "", // CHAR (1) Updated information in related user data field
  FORMULA                          :   "", // CHAR (1) Updated information in related user data field
  CHGTEXT                          :   "", // CHAR (1) Updated information in related user data field
  GRAPHIC_URL                      :   "", // CHAR (1) Updated information in related user data field
  CREATED_ON                       :   "", // CHAR (1) Updated information in related user data field
  CREATED_BY                       :   "", // CHAR (1) Updated information in related user data field
  CHANGED_ON                       :   "", // CHAR (1) Updated information in related user data field
  CHANGED_BY                       :   "", // CHAR (1) Updated information in related user data field
};
