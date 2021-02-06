//
// BAPI_WHSE_TO_GET_LIST var: 6  struct: 1  table: 3  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

WAREHOUSENUMBER    :           "", // CHAR (3) Warehouse number / warehouse complex SU3=LGN
// CONFIRMIND      :           "", // CHAR (1) Indicator: confirmation complete
// MATERIAL        :           "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
// MATERIAL_LONG   :           "", // CHAR (40) Material Number (40 Characters, Compatibility Mode)
// MAXROWS         :            0, // INT4 (10) Maximum Number of Lines of Hits
// SRCSTORAGETYPE  :           "", // CHAR (3) Source storage type
// MATERIAL_EVG    :           {}, // BAPIMGVMATNR no text (en)

// TABLE PARAMETERS

RETURN             :           [], // BAPIRET2 Return parameter
TRANSORDERKEY      :           [], // BAPITRANSORDERKEY BAPI Export Structure for Transfer Order (Key Fields)
// SOURCEBINSELECT :           [], // BAPI2018F Import-Struktur F for Business Object WhseTransOrder
};

const result = await client.call("BAPI_WHSE_TO_GET_LIST", parameters);

//
// IMPORT PARAMETERS
//

// BAPIMGVMATNR  

// prettier-ignore
const MATERIAL_EVG= {
  MATERIAL_EXT                     :   "", // CHAR (40) ALPHA=MATNL External Long Material Number
  MATERIAL_VERS                    :   "", // CHAR (10) ALPHA=MATNW Material Version Number SU3=MATVERS
  MATERIAL_GUID                    :   "", // CHAR (32) Material number (external GUID)
};


//
// TABLE PARAMETERS
//

// BAPIRET2  Return parameter
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

// BAPITRANSORDERKEY  BAPI Export Structure for Transfer Order (Key Fields)
const TRANSORDERKEY= [];

// prettier-ignore
const TRANSORDERKEY= {
  CLIENT                           :   "", // CLNT (3) Client
  WHSENUMBER                       :   "", // CHAR (3) Warehouse Number / Warehouse Complex SU3=LGN
  TRANS_ORD                        :   "", // NUMC (10) Transfer Order Number SU3=TAN
  TO_ITEM                          :   "", // NUMC (4) Transfer order item SU3=TAP
};

// BAPI2018F  Import-Struktur F for Business Object WhseTransOrder
const SOURCEBINSELECT= [];

// prettier-ignore
const SOURCEBINSELECT= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STGE_BIN_HIGH                    :   "", // CHAR (10) Source Storage Bin
  STGE_BIN_LOW                     :   "", // CHAR (10) Source Storage Bin
};
