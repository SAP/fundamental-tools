//
// BAPI_INSPLOT_GETDETAIL var: 1  struct: 8  table: 3  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

NUMBER                   :           "", // NUMC (12) Inspection Lot SU3=QLS
// LANGUAGE              :           {}, // BAPI2045LA Language Key (Non-ISO and ISO)

// TABLE PARAMETERS

// MATERIAL_DOCUMENTS    :           [], // BAPI2045MD References Between Inspection Lots and Material Documents
// SYSTEM_STATUS         :           [], // BAPI2045SS Inspection Lot System Status
// USER_STATUS           :           [], // BAPI2045US User Status for the Inspection Lot

// EXPORT PARAMETERS

// ACCOUNTING_DATA       :           {}, // BAPI2045D_IL3 Account Assignment Data for Inspection Lot
// CUSTOMER_INCLUDE_DATA :           {}, // BAPI2045CI Customer Fields for Include CI_QALS
// GENERAL_DATA          :           {}, // BAPI2045D_IL0 General Data for Inspection Lot
// RETURN                :           {}, // BAPIRETURN1 Return Values
// STOCK_DATA            :           {}, // BAPI2045D_IL2 Stock Data for Inspection Lot
// TASK_LIST_DATA        :           {}, // BAPI2045D_IL1 Task List Assignment for Inspection Lot
// USAGE_DECISION_DATA   :           {}, // BAPI2045D_IL4 Usage Decision for the Inspection Lot
};

const result = await client.call("BAPI_INSPLOT_GETDETAIL", parameters);

//
// IMPORT PARAMETERS
//

// BAPI2045LA  Language Key (Non-ISO and ISO)

// prettier-ignore
const LANGUAGE= {
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
};


//
// TABLE PARAMETERS
//

// BAPI2045MD  References Between Inspection Lots and Material Documents
const MATERIAL_DOCUMENTS= [];

// prettier-ignore
const MATERIAL_DOCUMENTS= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INT_COUNTER                      :   "", // NUMC (6) Internal Counter for DB Objects
  REFERENCE_TYPE                   :   "", // CHAR (1) Type of Reference Between Inspection Lot and Material Doc.
  MAT_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Number of Material Document SU3=MBN
  DOC_YEAR                         :   "", // NUMC (4) ALPHA=GJAHR Material Document Year SU3=MJA
  MATDOC_ITM                       :   "", // NUMC (4) Item in Material Document SU3=POS
  ENTRY_DATE                       :   "", // DATS (8) Day On Which Accounting Document Was Entered
  ENTRY_TIME                       :   "", // TIMS (6) Time of Entry
};

// BAPI2045SS  Inspection Lot System Status
const SYSTEM_STATUS= [];

// prettier-ignore
const SYSTEM_STATUS= {
  SYS_STATUS                       :   "", // CHAR (5) System status
  SY_ST_TEXT                       :   "", // CHAR (4) Individual status of an object (short form)
  SY_ST_DSCR                       :   "", // CHAR (30) Object status
};

// BAPI2045US  User Status for the Inspection Lot
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

// BAPI2045D_IL3  Account Assignment Data for Inspection Lot

// prettier-ignore
const ACCOUNTING_DATA= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  IND_SPECIAL_QM_ORDER             :   "", // CHAR (1) Record Appraisal Costs in Individual QM Order
  QM_ORDERID                       :   "", // CHAR (12) ALPHA=ALPHA Order Number for Recording Appraisal Costs SU3=ANR
  BUS_AREA                         :   "", // CHAR (4) Business Area SU3=GSB
  CO_AREA                          :   "", // CHAR (4) Controlling Area SU3=CAC
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  PROFIT_CTR                       :   "", // CHAR (10) ALPHA=ALPHA Profit Center SU3=PRC
  INSPLOT_ACCTNG_KEY               :   "", // CHAR (1) Account Assignment Key: Inspection Lot
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  ASSET_NO                         :   "", // CHAR (12) ALPHA=ALPHA Main Asset Number SU3=AN1
  SUB_NUMBER                       :   "", // CHAR (4) ALPHA=ALPHA Asset Subnumber SU3=AN2
  ACCTNG_WBS_ELEM                  :   "", // NUMC (8) ALPHA=ABPSP Work Breakdown Structure Element (WBS Element)
  ACCTNG_WBS_ELEMENT_EXT           :   "", // CHAR (24) ALPHA=ABPSN Work Breakdown Structure Element (WBS Element) SU3=PRO
  ACCTNG_SALES_ORD                 :   "", // CHAR (10) ALPHA=ALPHA Sales Order Number SU3=AUN
  ACCTNG_S_ORD_ITEM                :   "", // NUMC (6) Item number in Sales Order SU3=KPO
  PROFIT_SEGM_NO                   :   "", // NUMC (10) Profitability Segment Number (CO-PA)
};

// BAPI2045CI  Customer Fields for Include CI_QALS

// prettier-ignore
const CUSTOMER_INCLUDE_DATA= {
  DMY_UNUSED                       :   "", // CHAR (1) Field Not Used as of 3.0       Field Reserved for SAP
};

// BAPI2045D_IL0  General Data for Inspection Lot

// prettier-ignore
const GENERAL_DATA= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  MANUFACTURER                     :   "", // CHAR (10) ALPHA=ALPHA Number of Manufacturer SU3=LIF
  VERSION                          :   "", // CHAR (4) Production Version SU3=VER
};

// BAPIRETURN1  Return Values

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

// BAPI2045D_IL1  Task List Assignment for Inspection Lot

// prettier-ignore
const TASK_LIST_DATA= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  IND_TASK_LIST_REQUIRED           :   "", // CHAR (1) Inspection Plan Required
  IND_SPEC_MATSPEC                 :   "", // CHAR (1) Inspect with Material Specification
  IND_SPEC_CONFIG                  :   "", // CHAR (1) Inspection Specifications from Configuration
  IND_SPEC_BATCH                   :   "", // CHAR (1) Inspection Specifications from Batch Determination
  TASK_LIST_TYPE                   :   "", // CHAR (1) Task List Type SU3=PTY
  TASK_LIST_NUMBER                 :   "", // CHAR (8) ALPHA=ALPHA Key for Task List Group SU3=PLN
  TASK_LIST_USAGE                  :   "", // CHAR (3) Task list usage
  TASK_LIST_COUNTER                :   "", // CHAR (2) ALPHA=ALPHA Group Counter SU3=PAL
  TASK_LIST_VALID_FROM_DATE        :   "", // DATS (8) Valid-From Date
  MAT_TL_ASSGNMT_VALID_FROM_DATE   :   "", // DATS (8) Valid-From Date
  SPEC_SEL_MATERIAL                :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  SPEC_SEL_REV_LEV                 :   "", // CHAR (2) ALPHA=NUMCV Revision level SU3=RVS
  SPEC_SEL_PLANT                   :   "", // CHAR (4) Plant SU3=WRK
  SPEC_SEL_VENDOR                  :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
  IND_MATPARTNO_MGNT_ACTIVE        :   "", // CHAR (1) Manufacturer Part No. Processing Active
  SPEC_SEL_MANUFACTURER            :   "", // CHAR (10) ALPHA=ALPHA Number of Manufacturer SU3=LIF
  SPEC_SEL_CUSTOMER                :   "", // CHAR (10) ALPHA=ALPHA Account number of customer SU3=KUN
  SPEC_SEL_TASK_LIST_USAGE         :   "", // CHAR (3) Task list usage
  SPEC_SEL_TL_VALID_FROM_DATE      :   "", // DATS (8) Valid-From Date
  SPEC_SEL_MATERIAL_EXTERNAL       :   "", // CHAR (40) ALPHA=MATNL Long Material Number for SPEC_SEL_MATERIAL Field
  SPEC_SEL_MATERIAL_GUID           :   "", // CHAR (32) External GUID for SPEC_SEL_MATERIAL Field
  SPEC_SEL_MATERIAL_VERSION        :   "", // CHAR (10) ALPHA=MATNW Version Number for SPEC_SEL_MA Field
  SPEC_SEL_MATERIAL_LONG           :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPI2045D_IL4  Usage Decision for the Inspection Lot

// prettier-ignore
const USAGE_DECISION_DATA= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  IND_AUTOMATIC_UD                 :   "", // CHAR (1) Automatic Usage Decision Planned
  IND_DIG_SIGN_USAGE_DECISION      :   "", // CHAR (1) Digital Signature for Insp. Lot when Usage Decision Made
  UD_MODE                          :   "", // CHAR (1) Usage Decision Mmode (UD Origin)
  UD_CATALOG_TYPE                  :   "", // CHAR (1) Catalog SU3=QKT
  UD_PLANT                         :   "", // CHAR (4) Plant SU3=WRK
  UD_SELECTED_SET                  :   "", // CHAR (8) Selected Set of the Usage Decision
  UD_CODE_GROUP                    :   "", // CHAR (8) Code Group of the Usage Decision SU3=CGP
  UD_CODE                          :   "", // CHAR (4) Usage Decision Code
  CODE_VALUATION                   :   "", // CHAR (1) Code Valuation
  DYN_MODIF_VALUATION              :   "", // CHAR (1) Dynamic Modif. Valuation According to Worst Case Principle
  FOLLOW_UP_ACTION                 :   "", // CHAR (8) Follow-Up Action
  QUALITY_SCORE                    :  "0", // DEC (3) Quality Score
  IND_UD_LONG_TEXT                 :   "", // CHAR (1) Long Text for Usage Decision
  UD_RECORDED_BY_USER              :   "", // CHAR (12) Person who Made the Usage Decision
  UD_RECORDED_ON_DATE              :   "", // DATS (8) Date of Code Used for Usage Decision
  UD_RECORDED_AT_TIME              :   "", // TIMS (6) Time when Usage Decision Was Recorded
  UD_CHANGED_BY_USER               :   "", // CHAR (12) Person who Changed the Usage Decision
  UD_CHANGED_ON_DATE               :   "", // DATS (8) Change Date of Usage Decision
  UD_CHANGED_AT_TIME               :   "", // TIMS (6) Time when Usage Decision Changed
};
