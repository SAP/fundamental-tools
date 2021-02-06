//
// BAPI_KANBAN_GETLISTFORSUPPLIE1 var: 1  struct: 1  table: 3  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

SUPPLIER         :           "", // CHAR (10) ALPHA=ALPHA Vendor SU3=LIF

// TABLE PARAMETERS

CONTROL_CYCLE    :           [], // BAPICTRLC2 List of Control Cycles
KANBANS          :           [], // BAPI1075_1 List of Kanbans
SUPPLY_AREA      :           [], // BAPISAREA List of Production Supply Areas

// EXPORT PARAMETERS

// RETURN        :           {}, // BAPIRETURN Return Code If No Data Exists
};

const result = await client.call("BAPI_KANBAN_GETLISTFORSUPPLIE1", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPICTRLC2  List of Control Cycles
const CONTROL_CYCLE= [];

// prettier-ignore
const CONTROL_CYCLE= {
  CTRLCYC_NO                       :   "", // CHAR (7) ALPHA=ALPHA Control cycle number SU3=PKNUM
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  SUPPLYAREA                       :   "", // CHAR (10) Production Supply Area SU3=PVB
  KANBAN_CT                        :   "", // NUMC (3) Number of Kanban Containers
  KANBAN_QTY                       : "0.0", // QUAN (13.3) Kanban Quantity
  UNIT_MEAS                        :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  MAX_EMPTY                        :   "", // NUMC (3) Maximum Number of Empty Kanban Containers
  CNTNR_TYPE                       :   "", // CHAR (40) Material description
  SUPPLIER                         :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Agreement Number SU3=VRT
  AGRMT_ITEM                       :   "", // NUMC (5) Agreement Item
  SUPPL_MAT                        :   "", // CHAR (22) Material number used by vendor
  NAME                             :   "", // CHAR (40) Name 1
  NAME_2                           :   "", // CHAR (40) Name 2
  NAME_3                           :   "", // CHAR (40) Name 3
  NAME_4                           :   "", // CHAR (40) Name 4
  STREET                           :   "", // CHAR (60) Street
  CITY                             :   "", // CHAR (40) City
  POSTL_COD1                       :   "", // CHAR (10) City postal code
  COUNTRY                          :   "", // CHAR (3) Country Key SU3=LND
  SUPPL_MAT35                      :   "", // CHAR (35) Material Number Used by Vendor
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI1075_1  List of Kanbans
const KANBANS= [];

// prettier-ignore
const KANBANS= {
  KANBAN_ID                        :   "", // NUMC (10) Identification Number
  STATUS                           :   "", // CHAR (1) Kanban status
};

// BAPISAREA  List of Production Supply Areas
const SUPPLY_AREA= [];

// prettier-ignore
const SUPPLY_AREA= {
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  SUPPLYAREA                       :   "", // CHAR (10) Production Supply Area SU3=PVB
  DESCRIP                          :   "", // CHAR (40) Production supply area description
};


//
// EXPORT PARAMETERS
//

// BAPIRETURN  Return Code If No Data Exists

// prettier-ignore
const RETURN= {
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
  CODE                             :   "", // CHAR (5) Message code
  MESSAGE                          :   "", // CHAR (220) Message Text
  LOG_NO                           :   "", // CHAR (20) Application log: log number
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
};
