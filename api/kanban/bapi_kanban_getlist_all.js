//
// BAPI_KANBAN_GETLIST_ALL var: 2  struct: 5  table: 30  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// LANGUAGE_KEY              :           "", // LANG (1) ALPHA=ISOLA Language Key of Current Text Environment
// MAXROWS                   :            0, // INT4 (10) Maximum Number of Lines of Hits
// EXPORT_CONTROLCYCLE       :           {}, // BAPIFLAG ID for Export of Control Cycle Table
// SELECT_BATCH              :           {}, // BAPIFLAG ID for Selection of Batches and Quantities in Kanban
// SELECT_DELIV              :           {}, // BAPIFLAG ID for Selection of Additional Data for Kanban with Delivery
// SELECT_DEV_CC_DATA        :           {}, // BAPIFLAG Indicator for Selection of Alternative Control Cycle Data for Kanban

// TABLE PARAMETERS

KANBAN_LIST                  :           [], // BAPI1075_LIST_ALL Table for Kanban Data
// BATCH_LIST                :           [], // BAPI1075_BATCH Table for Batch Data
// CALC_PROFILE_RANGE        :           [], // BAPI1172_KCPRF_RANGE Selection Table for Calculation Profile
// CONTROLCYCLE_LIST         :           [], // BAPI1172_LIST_ALL Table for Control Cycle
// CONTROLCYCLE_TYPE_RANGE   :           [], // BAPI1172_RKSTA_RANGE Selection Table for Control Cycle Category
// COSTCENTER_RANGE          :           [], // BAPI1172_KOSTL_RANGE Selection Table for Cost Center
// DELIV_LIST                :           [], // BAPI1075_DELIV Table of Additional Data for Kanban with Delivery
// DEVDATA_LIST              :           [], // BAPI1075_DEV_DATA Table for Different Control Cycle Data
// EXT_PROCURE_RANGE         :           [], // BAPI1172_PKSTF_RANGE Selection Table for Replenishment with External Production
// EXTENSIONIN               :           [], // BAPIPAREX Reference Structure for Customer Data
// EXTENSIONOUT              :           [], // BAPIPAREX Reference Structure for Customer Data
// IN_HOUSEPROD_RANGE        :           [], // BAPI1172_PKSTE_RANGE Selection Table for Replenishment with In-House Production
// ISSUINGPLANT_RANGE        :           [], // BAPI1172_PKUMW_RANGE Selection Table for Supplying Plant
// ISSUINGSTGE_LOC_RANGE     :           [], // BAPI1172_UMLGO_RANGE Selection Table for Supplying Storage Location
// JIT_PROFILE_RANGE         :           [], // BAPI1172_PABPRF_RANGE Selection Table for JIT Call Profile
// KANBANCONTROL_CYCLE_RANGE :           [], // BAPI1172_PKNUM_RANGE Selection Table for Control Cycle Number
// KANBANID_RANGE            :           [], // BAPI1075_PKKEY_RANGE Selection Table for Kanban ID Number
// KANBANNUMBER_RANGE        :           [], // BAPI1075_PKPOS_RANGE Selection Table for Kanban Number
// MATERIAL_RANGE            :           [], // BAPIMATRAM Selection Table for Material Number
// PLANT_RANGE               :           [], // BAPIMATRAW Selection Table for Plant
// PURCH_ORG_RANGE           :           [], // BAPI1172_EKORG_RANGE Selection Table for Purchasing Organization
// RESPONSIBLE_RANGE         :           [], // BAPI1172_QUVER_RANGE Selection Table for Person Responsible for Supply Source
// STATUS_RANGE              :           [], // BAPI1075_PKBST_RANGE Selection Table for Kanban Status
// STATUSDATE_RANGE          :           [], // BAPI1075_SAEDT_RANGE Selection Table for Date of Status Switch
// STATUSTIME_RANGE          :           [], // BAPI1075_SAEUZ_RANGE Selection Table for Time of Status Switch
// STGE_NUM_RANGE            :           [], // BAPI1172_LGNUM_RANGE Selection Table for Warehouse Number (WMS)
// STGE_TYPE_RANGE           :           [], // BAPI1172_LGTYP_RANGE Selection Table for Storage Type (WMS)
// STOCK_MOVEMNT_RANGE       :           [], // BAPI1172_PKSTU_RANGE Selection Table for Replenishment with Stock Transfer
// SUPPLYAREA_RANGE          :           [], // BAPI1172_PRVBE_RANGE Selection Table for Supply Area
// VENDOR_RANGE              :           [], // BAPI1172_LIFNR_RANGE Selection Table for Vendor

// EXPORT PARAMETERS

// RETURN                    :           {}, // BAPIRET2 Return Parameter(s)
};

const result = await client.call("BAPI_KANBAN_GETLIST_ALL", parameters);

//
// IMPORT PARAMETERS
//

// BAPIFLAG  ID for Export of Control Cycle Table

// prettier-ignore
const EXPORT_CONTROLCYCLE= {
  BAPIFLAG                         :   "", // CHAR (1) Single-Character Flag
};

// BAPIFLAG  ID for Selection of Batches and Quantities in Kanban

// prettier-ignore
const SELECT_BATCH= {
  BAPIFLAG                         :   "", // CHAR (1) Single-Character Flag
};

// BAPIFLAG  ID for Selection of Additional Data for Kanban with Delivery

// prettier-ignore
const SELECT_DELIV= {
  BAPIFLAG                         :   "", // CHAR (1) Single-Character Flag
};

// BAPIFLAG  Indicator for Selection of Alternative Control Cycle Data for Kanban

// prettier-ignore
const SELECT_DEV_CC_DATA= {
  BAPIFLAG                         :   "", // CHAR (1) Single-Character Flag
};


//
// TABLE PARAMETERS
//

// BAPI1075_LIST_ALL  Table for Kanban Data
const KANBAN_LIST= [];

// prettier-ignore
const KANBAN_LIST= {
  KANBAN_ID                        :   "", // NUMC (10) Identification Number
};

// BAPI1075_BATCH  Table for Batch Data
const BATCH_LIST= [];

// prettier-ignore
const BATCH_LIST= {
  KANBAN_ID                        :   "", // NUMC (10) Identification Number
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  ACTUAL_QTY                       : "0.0", // QUAN (13.3) Actual quantity
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
};

// BAPI1172_KCPRF_RANGE  Selection Table for Calculation Profile
const CALC_PROFILE_RANGE= [];

// prettier-ignore
const CALC_PROFILE_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  KANBAN_CALC_PROF_LOW             :   "", // CHAR (4) Kanban Calculation Profile
  KANBAN_CALC_PROF_HIGH            :   "", // CHAR (4) Kanban Calculation Profile
};

// BAPI1172_LIST_ALL  Table for Control Cycle
const CONTROLCYCLE_LIST= [];

// prettier-ignore
const CONTROLCYCLE_LIST= {
  KANBANCONTROLCYCLE               :   "", // CHAR (7) ALPHA=ALPHA Control cycle number SU3=PKNUM
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  SUPPLYAREA                       :   "", // CHAR (10) Production Supply Area SU3=PVB
  KANBAN_CT                        :   "", // NUMC (3) Number of Kanban Containers
  KANBAN_QTY                       : "0.0", // QUAN (13.3) Kanban Quantity
  VERSION                          :   "", // CHAR (4) Production Version SU3=VER
  MAX_EMPTY                        :   "", // NUMC (3) Maximum Number of Empty Kanban Containers
  RESP_SUPPLY_SOURCE               :   "", // CHAR (3) Person Responsible for Supply Source SU3=DGR
  STRATEGY_INHOUSE_PROD            :   "", // CHAR (4) Control Cycle Replenishment Strategy for In-House Production
  MAT_STAG_INDICATOR               :   "", // CHAR (1) Material Staging Indicator for Production Supply
  WHSENUMBER                       :   "", // CHAR (3) Warehouse Number / Warehouse Complex SU3=LGN
  STGE_TYPE                        :   "", // CHAR (3) Storage Type SU3=LGT
  STGE_BIN                         :   "", // CHAR (10) Storage Bin SU3=LGP
  DYN_DESTINATION_BIN              :   "", // CHAR (1) Indicator: dynamic destination bin
  STRATEGY_EXT_REPL                :   "", // CHAR (4) Replenishment Strategy of Control Cycle - Ext. Procurement
  STRATEGY_STOCK_TRANSF            :   "", // CHAR (4) Control Cycle Replenishment Strategy for Stock Transfer
  VENDOR                           :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
  PURCH_ORG                        :   "", // CHAR (4) Purchasing organization SU3=EKO
  AGREEMENT                        :   "", // CHAR (10) ALPHA=ALPHA Agreement Number SU3=VRT
  AGRMT_ITEM                       :   "", // NUMC (5) Agreement Item
  INDEP_REPL                       :   "", // CHAR (1) Replenishment Controlled Independently By Supply Source
  KANBANCONTAINER                  :   "", // CHAR (18) ALPHA=MATN1 Kanban Container
  SEPARATE_GR_IF_FULL              :   "", // CHAR (1) Separate GR If Status Changed to Full
  STGE_LOC                         :   "", // CHAR (4) Storage location SU3=LAG
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  CC_STATUS                        :   "", // CHAR (1) Control Cycle Category
  COSTCENTER                       :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  OUTPUT_DEVICE                    :   "", // CHAR (4) ALPHA=SPDEV Spool Output Device
  KANBAN_PRINT_CONTROL             :   "", // CHAR (1) Kanban Card Print Control
  ISSUINGPLANT                     :   "", // CHAR (4) Issuing Plant in Kanban Processing
  DELIV_ADDR                       :   "", // CHAR (10) ALPHA=ALPHA Kanban delivery address
  STAT_SEQ                         :   "", // CHAR (4) Status Sequence Kanban
  LOGIC_SET_EMPTY                  :   "", // CHAR (1) Logic for Setting Kanban to Empty
  TRIGGER_QTY                      : "0.0", // QUAN (13.3) Kanban Trigger Quantity
  STORING_POS                      :   "", // CHAR (25) Storing Position
  CC_CALCU_INDEX                   :   "", // CHAR (1) Ind.: Whether and How a Kanban Control Cycle is Calculated
  SAFTYFACTOR                      :  "0", // DEC (5.3) Safety Factor for Kanban Calculation
  CONST_KANBAN_CALC                :    0, // INT1 (3) Constant for Kanban Calculation
  ROUNDING_QTY                     : "0.0", // QUAN (13.3) Rounding Quantity
  FIX_KANBAN_QTY                   : "0.0", // QUAN (13.3) Fixed Kanban Quantity
  KANBAN_CALC_PROF                 :   "", // CHAR (4) Kanban Calculation Profile
  REPL_LEADTIME_DAY                :  "0", // DEC (3) Replenishment Lead Time in Workdays
  REPL_LEADTIME_MIN                :  "0", // DEC (11) ALPHA=TSTRN Replenishment Lead Time in Hours/Minutes
  SD_SCHED_AGRMNT                  :   "", // CHAR (10) ALPHA=ALPHA SD Scheduling Agreement (Sales Doc.) in Kanban Processing
  SD_SCHED_AGRMNT_ITEM             :   "", // NUMC (6) SD Scheduling Agreement Item in Kanban Processing
  SOURCE_SUPP_AREA                 :   "", // CHAR (10) Source Production Supply Area for Kanban Stock Transfers
  JIT_CALL_PROF                    :   "", // CHAR (4) JIT Call Profile
  INTERNAL_PACK_OBJ                :   "", // CHAR (22) Unique internal packing object number
  NUMBER_LOADCARRIER               :   "", // NUMC (3) Number of Load Carriers
  CC_CARD                          :   "", // CHAR (16) Card for Printing Control Cycle Data
  MATL_DESC                        :   "", // CHAR (40) Material description
  PLANT_DESC                       :   "", // CHAR (30) Name
  SUPPLYAREA_DESC                  :   "", // CHAR (40) Production supply area description
  STRATEGY_INHOUSE_DESC            :   "", // CHAR (40) Description: Kanban replenishment strategy
  STRATEGY_EXT_REPL_DESC           :   "", // CHAR (40) Description: Kanban replenishment strategy
  STRATEGY_STOCK_TRANSF_DESC       :   "", // CHAR (40) Description: Kanban replenishment strategy
  PACKINSTRID                      :   "", // CHAR (20) ALPHA=ALPHA Identification number of packing instruction SU3=PIID
  KANBANCONTAINER_DESC             :   "", // CHAR (40) Material description
  REP_POINT                        :   "", // CHAR (4) ALPHA=NUMCV Reporting Point
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  KANBANCONTAINER_EXTERNAL         :   "", // CHAR (40) ALPHA=MATNL Long Material Number for KANBANCONTAINER Field
  KANBANCONTAINER_VERSION          :   "", // CHAR (10) ALPHA=MATNW Version Number for KANBANCONTAINER Field
  KANBANCONTAINER_GUID             :   "", // CHAR (32) External GUID for KANBANCONTAINER Field
  LIFECYCLE_STATUS                 :   "", // CHAR (1) Lifecycle Status of Control Cycle
  CREATION_DATE                    :   "", // DATS (8) Creation Date of Control Cycle
  RELEASE_DATE                     :   "", // DATS (8) Release Date for Control Cycle
  LOCK_DATE                        :   "", // DATS (8) Control Cycle Lock Date
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  KANBANCONTAINER_LONG             :   "", // CHAR (40) Kanban Container
};

// BAPI1172_RKSTA_RANGE  Selection Table for Control Cycle Category
const CONTROLCYCLE_TYPE_RANGE= [];

// prettier-ignore
const CONTROLCYCLE_TYPE_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  CTRLCYC_STAT_LOW                 :   "", // CHAR (1) Control Cycle Category
  CTRLCYC_STAT_HIGH                :   "", // CHAR (1) Control Cycle Category
};

// BAPI1172_KOSTL_RANGE  Selection Table for Cost Center
const COSTCENTER_RANGE= [];

// prettier-ignore
const COSTCENTER_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  COSTCENTER_LOW                   :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
  COSTCENTER_HIGH                  :   "", // CHAR (10) ALPHA=ALPHA Cost Center SU3=KOS
};

// BAPI1075_DELIV  Table of Additional Data for Kanban with Delivery
const DELIV_LIST= [];

// prettier-ignore
const DELIV_LIST= {
  KANBAN_ID                        :   "", // NUMC (10) Identification Number
  SOLD_TO                          :   "", // CHAR (10) ALPHA=ALPHA Sold-to party SU3=VAG
  PURCH_NO_C                       :   "", // CHAR (35) Customer purchase order number
  DELIV_NUMB                       :   "", // CHAR (10) ALPHA=ALPHA Delivery SU3=VL
  DELIV_ITEM                       :   "", // NUMC (6) Delivery Item
};

// BAPI1075_DEV_DATA  Table for Different Control Cycle Data
const DEVDATA_LIST= [];

// prettier-ignore
const DEVDATA_LIST= {
  KANBAN_ID                        :   "", // NUMC (10) Identification Number
  PACK_OBJ_ID                      :   "", // CHAR (22) Unique internal packing object number
  NUMBER_LOADCARRIER               :   "", // NUMC (3) Number of Load Carriers
};

// BAPI1172_PKSTF_RANGE  Selection Table for Replenishment with External Production
const EXT_PROCURE_RANGE= [];

// prettier-ignore
const EXT_PROCURE_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STRATEGY_EXT_REPL_LOW            :   "", // CHAR (4) Replenishment Strategy of Control Cycle - Ext. Procurement
  STRATEGY_EXT_REPL_HIGH           :   "", // CHAR (4) Replenishment Strategy of Control Cycle - Ext. Procurement
};

// BAPIPAREX  Reference Structure for Customer Data
const EXTENSIONIN= [];

// prettier-ignore
const EXTENSIONIN= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPIPAREX  Reference Structure for Customer Data
const EXTENSIONOUT= [];

// prettier-ignore
const EXTENSIONOUT= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

// BAPI1172_PKSTE_RANGE  Selection Table for Replenishment with In-House Production
const IN_HOUSEPROD_RANGE= [];

// prettier-ignore
const IN_HOUSEPROD_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STRATEGY_INHOUSE_PROD_LOW        :   "", // CHAR (4) Control Cycle Replenishment Strategy for In-House Production
  STRATEGY_INHOUSE_PROD_HIGH       :   "", // CHAR (4) Control Cycle Replenishment Strategy for In-House Production
};

// BAPI1172_PKUMW_RANGE  Selection Table for Supplying Plant
const ISSUINGPLANT_RANGE= [];

// prettier-ignore
const ISSUINGPLANT_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  ISSUINGPLANT_LOW                 :   "", // CHAR (4) Issuing Plant in Kanban Processing
  ISSUINGPLANT_HIGH                :   "", // CHAR (4) Issuing Plant in Kanban Processing
};

// BAPI1172_UMLGO_RANGE  Selection Table for Supplying Storage Location
const ISSUINGSTGE_LOC_RANGE= [];

// prettier-ignore
const ISSUINGSTGE_LOC_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STGE_LOC_LOW                     :   "", // CHAR (4) Storage location SU3=LAG
  STGE_LOC_HIGH                    :   "", // CHAR (4) Storage location SU3=LAG
};

// BAPI1172_PABPRF_RANGE  Selection Table for JIT Call Profile
const JIT_PROFILE_RANGE= [];

// prettier-ignore
const JIT_PROFILE_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  JIT_CALL_PROF_LOW                :   "", // CHAR (4) JIT Call Profile
  JIT_CALL_PROF_HIGH               :   "", // CHAR (4) JIT Call Profile
};

// BAPI1172_PKNUM_RANGE  Selection Table for Control Cycle Number
const KANBANCONTROL_CYCLE_RANGE= [];

// prettier-ignore
const KANBANCONTROL_CYCLE_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  CTRLCYC_NO_LOW                   :   "", // CHAR (7) ALPHA=ALPHA Control cycle number SU3=PKNUM
  CTRLCYC_NO_HIGH                  :   "", // CHAR (7) ALPHA=ALPHA Control cycle number SU3=PKNUM
};

// BAPI1075_PKKEY_RANGE  Selection Table for Kanban ID Number
const KANBANID_RANGE= [];

// prettier-ignore
const KANBANID_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  KANBAN_ID_LOW                    :   "", // NUMC (10) Identification Number
  KANBAN_ID_HIGH                   :   "", // NUMC (10) Identification Number
};

// BAPI1075_PKPOS_RANGE  Selection Table for Kanban Number
const KANBANNUMBER_RANGE= [];

// prettier-ignore
const KANBANNUMBER_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  KANBAN_NO_LOW                    :   "", // NUMC (3) Kanban item number / control cycle item
  KANBAN_NO_HIGH                   :   "", // NUMC (3) Kanban item number / control cycle item
};

// BAPIMATRAM  Selection Table for Material Number
const MATERIAL_RANGE= [];

// prettier-ignore
const MATERIAL_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  MATNR_LOW                        :   "", // CHAR (18) ALPHA=MATN1 From material number
  MATNR_HIGH                       :   "", // CHAR (18) ALPHA=MATN1 To material number
  MATNR_HIGH_EXTERNAL              :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATNR Field
  MATNR_HIGH_GUID                  :   "", // CHAR (32) External GUID for MATNR_HIGH Field
  MATNR_HIGH_VERSION               :   "", // CHAR (10) ALPHA=MATNW Version Number for MATNR_HIGH Field
  MATNR_LOW_EXTERNAL               :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATNR_LOW Field
  MATNR_LOW_GUID                   :   "", // CHAR (32) External GUID for MATNR_LOW Field
  MATNR_LOW_VERSION                :   "", // CHAR (10) ALPHA=MATNW Version Number for MATNR_LOW Field
  MATNR_LOW_LONG                   :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  MATNR_HIGH_LONG                  :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
};

// BAPIMATRAW  Selection Table for Plant
const PLANT_RANGE= [];

// prettier-ignore
const PLANT_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  PLANT_LOW                        :   "", // CHAR (4) From plant
  PLANT_HIGH                       :   "", // CHAR (4) To plant
};

// BAPI1172_EKORG_RANGE  Selection Table for Purchasing Organization
const PURCH_ORG_RANGE= [];

// prettier-ignore
const PURCH_ORG_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  PURCH_ORG_LOW                    :   "", // CHAR (4) Purchasing organization SU3=EKO
  PURCH_ORG_HIGH                   :   "", // CHAR (4) Purchasing organization SU3=EKO
};

// BAPI1172_QUVER_RANGE  Selection Table for Person Responsible for Supply Source
const RESPONSIBLE_RANGE= [];

// prettier-ignore
const RESPONSIBLE_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  RESP_SUPPLY_SOURCE_LOW           :   "", // CHAR (3) Person Responsible for Supply Source SU3=DGR
  RESP_SUPPLY_SOURCE_HIGH          :   "", // CHAR (3) Person Responsible for Supply Source SU3=DGR
};

// BAPI1075_PKBST_RANGE  Selection Table for Kanban Status
const STATUS_RANGE= [];

// prettier-ignore
const STATUS_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STATUS_LOW                       :   "", // CHAR (1) Kanban status
  STATUS_HIGH                      :   "", // CHAR (1) Kanban status
};

// BAPI1075_SAEDT_RANGE  Selection Table for Date of Status Switch
const STATUSDATE_RANGE= [];

// prettier-ignore
const STATUSDATE_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STATUSDATE_LOW                   :   "", // DATS (8) Date of last change
  STATUSDATE_HIGH                  :   "", // DATS (8) Date of last change
};

// BAPI1075_SAEUZ_RANGE  Selection Table for Time of Status Switch
const STATUSTIME_RANGE= [];

// prettier-ignore
const STATUSTIME_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STATUSTIME_LOW                   :   "", // TIMS (6) Time of the last status change
  STATUSTIME_HIGH                  :   "", // TIMS (6) Time of the last status change
};

// BAPI1172_LGNUM_RANGE  Selection Table for Warehouse Number (WMS)
const STGE_NUM_RANGE= [];

// prettier-ignore
const STGE_NUM_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  WHSENUMBER_LOW                   :   "", // CHAR (3) Warehouse Number / Warehouse Complex SU3=LGN
  WHSENUMBER_HIGH                  :   "", // CHAR (3) Warehouse Number / Warehouse Complex SU3=LGN
};

// BAPI1172_LGTYP_RANGE  Selection Table for Storage Type (WMS)
const STGE_TYPE_RANGE= [];

// prettier-ignore
const STGE_TYPE_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STGE_TYPE_LOW                    :   "", // CHAR (3) Storage Type SU3=LGT
  STGE_TYPE_HIGH                   :   "", // CHAR (3) Storage Type SU3=LGT
};

// BAPI1172_PKSTU_RANGE  Selection Table for Replenishment with Stock Transfer
const STOCK_MOVEMNT_RANGE= [];

// prettier-ignore
const STOCK_MOVEMNT_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  STRATEGY_STOCK_TRANSF_LOW        :   "", // CHAR (4) Control Cycle Replenishment Strategy for Stock Transfer
  STRATEGY_STOCK_TRANSF_HIGH       :   "", // CHAR (4) Control Cycle Replenishment Strategy for Stock Transfer
};

// BAPI1172_PRVBE_RANGE  Selection Table for Supply Area
const SUPPLYAREA_RANGE= [];

// prettier-ignore
const SUPPLYAREA_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  SUPPLYAREA_LOW                   :   "", // CHAR (10) Production Supply Area SU3=PVB
  SUPPLYAREA_HIGH                  :   "", // CHAR (10) Production Supply Area SU3=PVB
};

// BAPI1172_LIFNR_RANGE  Selection Table for Vendor
const VENDOR_RANGE= [];

// prettier-ignore
const VENDOR_RANGE= {
  SIGN                             :   "", // CHAR (1) Inclusion/exclusion criterion SIGN for range tables
  OPTION                           :   "", // CHAR (2) Selection operator OPTION for range tables
  VENDOR_LOW                       :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
  VENDOR_HIGH                      :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
};


//
// EXPORT PARAMETERS
//

// BAPIRET2  Return Parameter(s)

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
