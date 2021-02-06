//
// BAPI_KANBAN_CHANGESTATUS1 var: 4  struct: 4  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

KANBANIDNUMBER                :           "", // NUMC (10) Identification Number
// BATCH                      :           "", // CHAR (10) Batch Number SU3=CHA
// EXCLUDE_STATUS_RESTRICTION :        SPACE, // CHAR (1) Exclude Authorization Check at Time of Kanban Status Change
// NEXTSTATUS                 :           "", // CHAR (1) Kanban status
// ACTUALQUANTITY             :           {}, // BAPI1075_ACTUAL_QTY Actual Quantity of a Kanban
// DELIVERYNOTES              :           {}, // BAPI1075_4 Reference Document Number
// PHYSICALTIME               :           {}, // BAPI1075_PHYSTIME Time of an Entry in the Kanban Process

// TABLE PARAMETERS

// STATUSCHANGERESULT         :           [], // BAPI1075_3 Result of a Kanban Status Change

// EXPORT PARAMETERS

// RETURN                     :           {}, // BAPIRET2 Notification if Status Change not Possible
};

const result = await client.call("BAPI_KANBAN_CHANGESTATUS1", parameters);

//
// IMPORT PARAMETERS
//

// BAPI1075_ACTUAL_QTY  Actual Quantity of a Kanban

// prettier-ignore
const ACTUALQUANTITY= {
  ACTUAL_QTY                       : "0.0", // QUAN (13.3) Actual quantity
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
};

// BAPI1075_4  Reference Document Number

// prettier-ignore
const DELIVERYNOTES= {
  DELIVERY_NOTE                    :   "", // CHAR (16) Number of External Delivery Note
  DELIVERY_NOTE_LONG               :   "", // CHAR (35) Number of Extern. Delivery Note (Dependencies see Long Text)
};

// BAPI1075_PHYSTIME  Time of an Entry in the Kanban Process

// prettier-ignore
const PHYSICALTIME= {
  PHYSDATE                         :   "", // DATS (8) Created on
  PHYSTIME                         :   "", // TIMS (6) Created at
};


//
// TABLE PARAMETERS
//

// BAPI1075_3  Result of a Kanban Status Change
const STATUSCHANGERESULT= [];

// prettier-ignore
const STATUSCHANGERESULT= {
  KANBAN_ID                        :   "", // NUMC (10) Identification Number
  CTRLCYC_NO                       :   "", // CHAR (7) ALPHA=ALPHA Control cycle number SU3=PKNUM
  KANBAN_NO                        :   "", // NUMC (3) Kanban item number / control cycle item
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  SUPPLYAREA                       :   "", // CHAR (10) Production Supply Area SU3=PVB
  STATUS                           :   "", // CHAR (1) Kanban status
  STATUSTEXT                       :   "", // CHAR (6) Short text - container status Kanban
  KANBAN_QTY                       : "0.0", // QUAN (13.3) Kanban Quantity
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  STATUSDATE                       :   "", // DATS (8) Date of last change
  STATUSTIME                       :   "", // TIMS (6) Time of the last status change
  PLANNEDORDER_NUM                 :   "", // CHAR (10) ALPHA=ALPHA Planned order number SU3=PAF
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  PURCH_NO                         :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  SUMJITCALL                       :   "", // CHAR (10) ALPHA=ALPHA JIT Call Number SU3=PABNUM
  SUMJITCALL_ITEM                  :   "", // NUMC (4) JIT call item
  MAT_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Number of Material Document SU3=MBN
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
  ID                               :   "", // CHAR (20) Message Class
  NUMBER                           :   "", // NUMC (3) Message Number
  MESSAGE                          :   "", // CHAR (220) Message Text
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  PACKINSTRID                      :   "", // CHAR (20) ALPHA=ALPHA Identification number of packing instruction SU3=PIID
  NUMBER_LOADCARRIER               :   "", // NUMC (3) Number of Load Carriers
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};


//
// EXPORT PARAMETERS
//

// BAPIRET2  Notification if Status Change not Possible

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
