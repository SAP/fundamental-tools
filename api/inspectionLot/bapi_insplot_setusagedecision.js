//
// BAPI_INSPLOT_SETUSAGEDECISION var: 1  struct: 5  table: 2  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

NUMBER            :           "", // NUMC (12) Inspection Lot SU3=QLS
UD_DATA           :           {}, // BAPI2045UD Data for Making Usage Decision
// LANGUAGE       :           {}, // BAPI2045LA Language (Non-ISO and ISO)

// TABLE PARAMETERS

// SYSTEM_STATUS  :           [], // BAPI2045SS System Status for Inspection Lot
// USER_STATUS    :           [], // BAPI2045US User Status for Inspection Lot

// EXPORT PARAMETERS

// RETURN         :           {}, // BAPIRETURN1 Message Structure
// STOCK_DATA     :           {}, // BAPI2045D_IL2 Stock Data for Inspection Lot
// UD_RETURN_DATA :           {}, // BAPI2045UD_RETURN Return Values After Making Usage Decision
};

const result = await client.call("BAPI_INSPLOT_SETUSAGEDECISION", parameters);

//
// IMPORT PARAMETERS
//

// BAPI2045UD  Data for Making Usage Decision

// prettier-ignore
const UD_DATA= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
};

// BAPI2045LA  Language (Non-ISO and ISO)

// prettier-ignore
const LANGUAGE= {
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
};


//
// TABLE PARAMETERS
//

// BAPI2045SS  System Status for Inspection Lot
const SYSTEM_STATUS= [];

// prettier-ignore
const SYSTEM_STATUS= {
  SYS_STATUS                       :   "", // CHAR (5) System status
  SY_ST_TEXT                       :   "", // CHAR (4) Individual status of an object (short form)
  SY_ST_DSCR                       :   "", // CHAR (30) Object status
};

// BAPI2045US  User Status for Inspection Lot
const USER_STATUS= [];

// prettier-ignore
const USER_STATUS= {
  STAT_PROF                        :   "", // CHAR (8) Status Profile
  USR_STATUS                       :   "", // CHAR (5) User Status
  US_ST_NUMB                       :   "", // NUMC (2) Status Order Number
  US_ST_TEXT                       :   "", // CHAR (4) Individual status of an object (short form)
  US_ST_DSCR                       :   "", // CHAR (30) Object status
};


//
// EXPORT PARAMETERS
//

// BAPIRETURN1  Message Structure

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
};

// BAPI2045D_IL2  Stock Data for Inspection Lot

// prettier-ignore
const STOCK_DATA= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  IND_GR_BLOCKED                   :   "", // CHAR (1) GR blocked stock
  IND_QUAL_INSPECTION              :   "", // CHAR (1) Quantity Is or Was in Inspection Stock
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  IND_BATCH_MGNT                   :   "", // CHAR (1) Batch management requirement indicator
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  BATCH_STGE_LOC                   :   "", // CHAR (4) Storage location SU3=LAG
  STOCK_PLANT                      :   "", // CHAR (4) Plant Where Stock for Inspection Lot Is Held
  STOCK_STGE_LOC                   :   "", // CHAR (4) Storage Location for Inspection Lot Stock
  SPEC_STOCK                       :   "", // CHAR (1) Special Stock Indicator
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
  WBS_ELEM                         :   "", // NUMC (8) ALPHA=ABPSP Valuated Sales Order Stock WBS Element
  WBS_ELEMENT_EXT                  :   "", // CHAR (24) ALPHA=ABPSN Work Breakdown Structure Element (WBS Element) SU3=PRO
  SALES_ORD                        :   "", // CHAR (10) ALPHA=ALPHA Sales order number of valuated sales order stock SU3=AUN
  S_ORD_ITEM                       :   "", // NUMC (6) Sales Order Item of Valuated Sales Order Stock SU3=KPO
  INSPLOT_SIZE                     : "0.0", // QUAN (13.3) Inspection Lot Quantity
  INSPLOT_BASE_UOM                 :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure for Inspection Lot Quantity
  INSPLOT_BASE_UOM_ISO             :   "", // CHAR (3) ISO code for unit of measurement
  NO_OF_CONTAINERS                 : "0.0", // QUAN (6.3) QM - No. of Containers
  INSPLOT_CONTAINER_UOM            :   "", // UNIT (3) ALPHA=CUNIT Lot Container
  INSPLOT_CONTAINER_UOM_ISO        :   "", // CHAR (3) ISO code for unit of measurement
  SAMPLE_SIZE                      : "0.0", // QUAN (13.3) Sample Size
  SAMPLE_BASE_UOM                  :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure for the Sample Unit
  SAMPLE_BASE_UOM_ISO              :   "", // CHAR (3) ISO code for unit of measurement
  SAMPLE_WHSE_SIZE                 : "0.0", // QUAN (13.3) Sample in base unit of measure provided by WM
  SAMPLE_WHSE_NO                   :   "", // CHAR (3) Warehouse Number / Warehouse Complex SU3=LGN
  SAMPLE_STGE_TYPE                 :   "", // CHAR (3) Storage Type SU3=LGT
  SAMPLE_STGE_BIN                  :   "", // CHAR (10) Storage Bin SU3=LGP
  QUANTITY_UOM                     :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure for Inspection Lot Quantity
  QUANTITY_UOM_ISO                 :   "", // CHAR (3) ISO code for unit of measurement
  QUANTITY_AVAILABLE               : "0.0", // QUAN (13.3) Quantity Posted to Unrestricted-Use Stock
  QUANTITY_SCRAP                   : "0.0", // QUAN (13.3) Quantity Posted to Scrap
  QUANTITY_SAMPLE                  : "0.0", // QUAN (13.3) Quantity Posted to Sample
  QUANTITY_BLOCKED                 : "0.0", // QUAN (13.3) Quantity Posted to Blocked Stock
  QUANTITY_RESERVES                : "0.0", // QUAN (13.3) Quantity Posted to Reserves
  QUANTITY_NEW_MATERIAL            : "0.0", // QUAN (13.3) Quantity Posted to Another Material
  NEW_MATERIAL                     :   "", // CHAR (18) ALPHA=MATN1 Material Number to Which the Quantity is Posted SU3=MAT
  NEW_BATCH                        :   "", // CHAR (10) Batch to Which Goods Are Transferred SU3=CHA
  QUANTITY_RETURNED_TO_VENDOR      : "0.0", // QUAN (13.3) Quantity Returned to Vendor
  QUANTITY_OTHER                   : "0.0", // QUAN (13.3) Other Quantity Posted from Inspection Lot Stock
  QUANTITY_TO_BE_POSTED            : "0.0", // QUAN (13.3) Quantity That Must Be Posted
  QUANTITY_ACTUAL                  : "0.0", // QUAN (13.3) Actual Lot Quantity
  IND_UD_LOGS                      :   "", // CHAR (1) Logs Exist for Usage Decision
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  NEW_MATERIAL_EXTERNAL            :   "", // CHAR (40) ALPHA=MATNL Long Material Number for NEW_MATERIAL Field
  NEW_MATERIAL_GUID                :   "", // CHAR (32) External GUID for NEW_MATERIAL Field
  NEW_MATERIAL_VERSION             :   "", // CHAR (10) ALPHA=MATNW Version Number for NEW_MATERIAL Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  NEW_MATERIAL_LONG                :   "", // CHAR (40) Material Number to Which the Quantity is Posted SU3=MAT
};

// BAPI2045UD_RETURN  Return Values After Making Usage Decision

// prettier-ignore
const UD_RETURN_DATA= {
  QUALITY_SCORE                    :  "0", // DEC (3) Quality Score
  INSPLOT_FRACTION_NONCONFORMING   : "0.0", // FLTP (16.16) Share of Scrap in Inspection Lot
  FOLLOW_UP_ACTION                 :   "", // CHAR (8) Follow-Up Action
  COUNTER_FOLLOW_UP                :    0, // INT2 (5) Number of Function Modules, Called After Update
  IND_COMPLETION_FORCED            :   "", // CHAR (1) Inspection Completion Forced
};
