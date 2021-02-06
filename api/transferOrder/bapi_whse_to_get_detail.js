//
// BAPI_WHSE_TO_GET_DETAIL var: 3  struct: 0  table: 4  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

TRANSFERORDERNO      :           "", // NUMC (10) Transfer Order Number SU3=TAN
WHSENUMBER           :           "", // CHAR (3) Warehouse number / warehouse complex SU3=LGN
// TRANSFERORDERITEM :           "", // NUMC (4) Transfer order item SU3=TAP

// TABLE PARAMETERS

EXTENSIONOUT         :           [], // BAPIPAREX Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
RETURN               :           [], // BAPIRET2 Return parameter
TOHEADERDATA         :           [], // BAPITOHEAD BAPI Export Structure for TO Header / Table LTAK
TOITEMDATA           :           [], // BAPITOITEM BAPI Export Structure for TO Item / Table LTAP
};

const result = await client.call("BAPI_WHSE_TO_GET_DETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIPAREX  Reference Structure for BAPI Parameters EXTENSIONIN/EXTENSIONOUT
const EXTENSIONOUT= [];

// prettier-ignore
const EXTENSIONOUT= {
  STRUCTURE                        :   "", // CHAR (30) Structure name of  BAPI table extension
  VALUEPART1                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART2                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART3                       :   "", // CHAR (240) Data part of BAPI extension parameter
  VALUEPART4                       :   "", // CHAR (240) Data part of BAPI extension parameter
};

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

// BAPITOHEAD  BAPI Export Structure for TO Header / Table LTAK
const TOHEADERDATA= [];

// prettier-ignore
const TOHEADERDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  WHSENUMBER                       :   "", // CHAR (3) Warehouse Number / Warehouse Complex SU3=LGN
  TRANS_ORD                        :   "", // NUMC (10) Transfer Order Number SU3=TAN
  MOVE_TYPE                        :   "", // CHAR (3) Movement type (inventory management) SU3=BWA
  WHSE_MVMT                        :   "", // NUMC (3) Movement Type for Warehouse Management SU3=BWL
  TR_PRIOR                         :   "", // CHAR (1) Transfer Priority
  TRANS_TYPE                       :   "", // CHAR (1) Shipment Type
  TO_DATE                          :   "", // DATS (8) Creation Date of Transfer Order
  TO_TIME                          :   "", // TIMS (6) Creation time of transfer order
  TO_USER                          :   "", // CHAR (12) User Name
  GROUP                            :   "", // CHAR (10) ALPHA=ALPHA Group SU3=REFNR
  TRANS_REQ                        :   "", // NUMC (10) Transfer Requirement Number SU3=TBN
  POST_CHANG                       :   "", // NUMC (10) Posting Change Number SU3=UBN
  SD_DOC                           :   "", // CHAR (10) ALPHA=ALPHA Sales and Distribution Document Number SU3=AUN
  CONF_IND                         :   "", // CHAR (1) Indicator: Confirmation
  CONF_DATE                        :   "", // DATS (8) Date of Confirmation
  MAT_DOC                          :   "", // CHAR (10) ALPHA=ALPHA Number of Material Document SU3=MBN
  DOC_YEAR                         :   "", // NUMC (4) ALPHA=GJAHR Material Document Year SU3=MJA
  REGMT_TYPE                       :   "", // CHAR (1) Requirement Type
  REGMT_NO                         :   "", // CHAR (10) ALPHA=ALPHA Requirement Number
  PRINT_CODE                       :   "", // CHAR (2) Indicator: form and sort code for printing transfer orders
  PRINT_IND                        :   "", // CHAR (1) Indicator: Transfer Order is Printed
  PART_SUPPLY                      :   "", // CHAR (1) Ind.: partial supply for documents in multiple processing
  IND_IMMED                        :   "", // CHAR (1) Indicator: Call up R/2 immediately (RM posting)
  IND_ACCUM                        :   "", // CHAR (1) Indicator: R/2 control accumulated (RM posting)
  IND_DIFF                         :   "", // CHAR (1) Indicator: Pass on diff. to R/2 immediately (RM posting)
  IND_PLND                         :   "", // CHAR (1) Indicator: preplanned transfer order
  DATE_PLND                        :   "", // DATS (8) Planned execution date for a transfer order
  RESERV_NO                        :   "", // NUMC (10) Number of reservation/dependent requirements SU3=RES
  ADDIT_NO                         :   "", // CHAR (20) Additional Reference Number for Transport
  REQ_TYPE                         :   "", // CHAR (2) Requirement type SU3=BDA
  KANBANCONTROLCYCLE               :   "", // CHAR (7) ALPHA=ALPHA Control cycle number SU3=PKNUM
  KANBAN_NO                        :   "", // NUMC (3) Kanban item number / control cycle item
  PERF_DATA                        :   "", // CHAR (1) Indicator for performance data
  ACT_TIMETO                       :   "", // CHAR (1) Indicator: Actual time required in TO
  REQACTDATA                       :   "", // CHAR (1) Indicator: Input requirement for actual data
  PERSNO                           :   "", // NUMC (8) Personnel Number of User
  PLAN_TIME                        : "0.0", // QUAN (13.3) Planned Transfer Order Processing Time From WM
  PLAN_EXT                         : "0.0", // QUAN (13.3) Planned Transfer Order Processing Time from External System
  ACTLTIME                         : "0.0", // QUAN (13.3) Actual Time of the WM Transfer Order
  TIMEUNIT                         :   "", // UNIT (3) ALPHA=CUNIT Time unit for performance data
  TIMEUNIT_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  HR_STATUS                        :   "", // CHAR (1) Transfer Order Human Resources (HR) Status
  START_DATE                       :   "", // DATS (8) Start Date of the Transfer Order
  END_DATE                         :   "", // DATS (8) Transfer Order End Date
  START_TIME                       :   "", // TIMS (6) Start time of the transfer order
  END_TIME                         :   "", // TIMS (6) Transfer Order End Time
  TO_TYPE2                         :   "", // CHAR (1) Transfer Order Type in 2-Step Picking
  LEAN_WM                          :   "", // CHAR (1) Transfer order transfers no real storage bin stock
  DOOR                             :   "", // CHAR (3) Door for Warehouse Number
  STGINGAREA                       :   "", // CHAR (10) Staging Area for Warehouse Complex
  PACK_WM                          :   "", // CHAR (1) Indicator: Connection to packaging in WM
  DEV_P_A                          :   "", // NUMC (4) Threshold value of planned/actual time deviation as percent
  COMMENT                          :   "", // CHAR (4) TO processing comment (code)
  SPECIFIC                         :   "", // CHAR (1) Indicator special reference
  SD_DOC_CAT                       :   "", // CHAR (1) SD document category
  QUEUE                            :   "", // CHAR (10) Queue
  SEP_CONF                         :   "", // CHAR (1) Indicator: Separate confirmation possible
  DLV_PRIO                         :   "", // NUMC (2) Transfer order priority
  PICK_CNFMD                       :   "", // CHAR (1) Indicator: Material pick has been confirmed
  CONFIRM_HU                       :   "", // CHAR (1) Indicator, confirm HU
  NO_ITEM                          :   "", // NUMC (4) Current number of items in TO
  SD_DOC_CAT_LONG                  :   "", // CHAR (4) Field is not supported – needed for technical reasons only
};

// BAPITOITEM  BAPI Export Structure for TO Item / Table LTAP
const TOITEMDATA= [];

// prettier-ignore
const TOITEMDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  WHSENUMBER                       :   "", // CHAR (3) Warehouse Number / Warehouse Complex SU3=LGN
  TRANS_ORD                        :   "", // NUMC (10) Transfer Order Number SU3=TAN
  TO_ITEM                          :   "", // NUMC (4) Transfer order item SU3=TAP
  TT_ITEM                          :   "", // NUMC (4) Transfer Requirement Item SU3=TBP
  ITM_NUMBER                       :   "", // NUMC (6) Item number of the SD document
  MATERIAL                         :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  BATCH                            :   "", // CHAR (10) Batch Number SU3=CHA
  STOCK_CAT                        :   "", // CHAR (1) Stock Category in the Warehouse Management System
  SPEC_STOCK                       :   "", // CHAR (1) Special Stock Indicator
  SP_STCK_NO                       :   "", // CHAR (16) ALPHA=ALPHA Special Stock Number
  HAZ_MAT_NO                       :   "", // CHAR (18) ALPHA=MATN3 Hazardous material number SU3=STO
  BASE_UOM                         :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure
  BASE_UOM_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  ALT_UNIT                         :   "", // UNIT (3) ALPHA=CUNIT Alternative Unit of Measure for Stockkeeping Unit
  ALT_UNIT_ISO                     :   "", // CHAR (3) ISO code for unit of measurement
  NUMERATOR                        :  "0", // DEC (5) Numerator for Conversion to Base Units of Measure
  DENOMINATR                       :  "0", // DEC (5) Denominator for conversion to base units of measure
  UNITTYPE_1                       :   "", // CHAR (3) Storage Unit Type
  PREALLSTCK                       :   "", // CHAR (1) Indicator: pre-allocated stock
  CURR_NO                          :   "", // NUMC (3) Sequence number
  CONF_REQ                         :   "", // CHAR (1) Indicator: confirmation required
  ZEROSTKCHK                       :   "", // CHAR (1) Indicator: Execute Zero Stock Check
  ZEROSTOCK                        :   "", // NUMC (1) Status of zero stock check in transfer order item
  INV_METHOD                       :   "", // CHAR (2) Inventory indicators
  INV_RECORD                       :   "", // CHAR (10) ALPHA=ALPHA Number of system inventory record SU3=IVN
  CONFIRM_IND                      :   "", // CHAR (1) Indicator: confirmation complete
  CONF_DATE                        :   "", // DATS (8) Date of confirmation
  CONF_TIME                        :   "", // TIMS (6) Time of confirmation
  TO_USER                          :   "", // CHAR (12) User name
  GROSS_WEIGHT                     :  "0", // DEC (11.3) Gross weight of transfer order item
  UNIT_OF_WT                       :   "", // UNIT (3) ALPHA=CUNIT Weight Unit
  UNIT_OF_WT_ISO                   :   "", // CHAR (3) ISO code for unit of measurement
  MATDOC_ITM                       :   "", // NUMC (4) Item in Material Document SU3=POS
  GR_RCPT                          :   "", // CHAR (12) Goods recipient
  UNLOAD_PT                        :   "", // CHAR (25) Unloading Point
  WDATU                            :   "", // DATS (8) Date of Goods Receipt
  GR_NUMBER                        :   "", // CHAR (10) ALPHA=ALPHA Goods Receipt Number
  GR_DATE                          :   "", // NUMC (4) Goods receipt item
  CERT_NO                          :   "", // CHAR (10) Certificate Number
  PRINTER                          :   "", // CHAR (4) ALPHA=SPDEV Name of printer SU3=PRI
  PROCESS                          :   "", // CHAR (2) Transfer procedure
  SOURCE_TYPE                      :   "", // CHAR (3) Source Storage Type
  SRCSTORSEC                       :   "", // CHAR (3) Source storage section
  SOURCE_BIN                       :   "", // CHAR (10) Source Storage Bin
  SRC_DYN_BIN                      :   "", // CHAR (1) Indicator: dynamic storage bin
  SRC_BIN_POS                      :   "", // CHAR (2) Position in source storage bin
  ST_REM_SU                        :  "0", // DEC (9.3) Number of storage units to be transferred from bulk storage
  PAR_PALLET                       :   "", // CHAR (1) Indicator: partial pallet quantity exists
  SRCTGTQTYB                       : "0.0", // QUAN (13.3) Source target quantity in stockkeeping unit
  SRC_A_QTYB                       : "0.0", // QUAN (13.3) Source actual quantity in stockkeeping unit
  SRC_B_DIFB                       : "0.0", // QUAN (13.3) Difference in source storage bin in stockkeeping unit
  SRCTGTQTYA                       : "0.0", // QUAN (13.3) Source target quantity in alternate unit
  SRC_A_QTYA                       : "0.0", // QUAN (13.3) Source actual quantity in alternative unit of measure
  SRC_B_DIFA                       : "0.0", // QUAN (13.3) Difference in source storage bin in alternative unit
  QUANT                            :   "", // NUMC (10) Quant SU3=LQN
  SOURCEAPPC                       :   "", // CHAR (1) Ind.: Pass on source item to APPC interface
  DEST_TYPE                        :   "", // CHAR (3) Destination Storage Type
  DEST_SECT                        :   "", // CHAR (3) Destination storage section
  DEST_BIN                         :   "", // CHAR (10) Destination Storage Bin
  DEST_DYN_BIN                     :   "", // CHAR (1) Indicator: dynamic storage bin
  DEST_BIN_POS                     :   "", // CHAR (2) Position in destination storage bin
  SU_PL_STCK                       :  "0", // DEC (9.3) Number of storage units to be transferred to bulk storage
  PART_PALL                        :   "", // CHAR (1) Indicator: partial pallet quantity exists
  DEST_TARGB                       : "0.0", // QUAN (13.3) Destination target quantity in stockkeeping unit
  DEST_ACTB                        : "0.0", // QUAN (13.3) Destination actual quantity in stockkeeping unit
  DEST_DIFB                        : "0.0", // QUAN (13.3) Destination difference quantity in stockkeeping unit
  DEST_TARGA                       : "0.0", // QUAN (13.3) Destination target quantity in alternative unit
  DEST_ACTA                        : "0.0", // QUAN (13.3) Actual destination quantity in alternative unit
  DEST_DIFA                        : "0.0", // QUAN (13.3) Destination difference qty. in alternative unit
  DEST_QUANT                       :   "", // NUMC (10) Quant SU3=LQN
  DEST_APPC                        :   "", // CHAR (1) Indicator: pass on destination item to APPC interface
  RET_TYPE                         :   "", // CHAR (3) Return storage type
  RET_AREA                         :   "", // CHAR (3) Return storage area
  RET_BIN                          :   "", // CHAR (10) Return storage bin
  RET_BIN_POS                      :   "", // CHAR (2) Position in return storage bin
  RET_TARGB                        : "0.0", // QUAN (13.3) Return target quantity in stockkeeping unit
  RET_ACTB                         : "0.0", // QUAN (13.3) Actual returned quantity in stockkeeping unit
  RET_DIFB                         : "0.0", // QUAN (13.3) Return difference quantity in stockkeeping unit
  RET_TARGA                        : "0.0", // QUAN (13.3) Return target quantity in alternative unit
  RET_ACTA                         : "0.0", // QUAN (13.3) Actual return quantity in alternate unit of measure
  RET_DIFA                         : "0.0", // QUAN (13.3) Return difference quantity in alternative unit
  RET_QUANT                        :   "", // NUMC (10) Quant SU3=LQN
  RET_APPC                         :   "", // CHAR (1) Indicator: pass on return item to APPC interface
  DIF_TYPE                         :   "", // CHAR (3) Difference storage type
  DIF_BIN                          :   "", // CHAR (10) Difference storage bin
  DIF_QUANT                        :   "", // NUMC (10) Difference quant
  DIF_QTYB                         : "0.0", // QUAN (13.3) Quantity of difference posting in stockkeeping unit
  DIF_QTYA                         : "0.0", // QUAN (13.3) Difference quantity in alternate unit of measure
  DIF_IND                          :   "", // CHAR (1) Difference indicator
  MATL_DESC                        :   "", // CHAR (40) Material description
  TO_IT_PRTD                       :   "", // CHAR (1) Indicator: transfer order item is printed
  SRC_SU                           :   "", // CHAR (20) ALPHA=LENUM Source storage unit number SU3=LEN
  DEST_SU                          :   "", // CHAR (20) ALPHA=LENUM Destination storage unit number SU3=LEN
  DIF_SU                           :   "", // CHAR (20) ALPHA=LENUM Number of storage unit for difference quantities SU3=LEN
  SRC_SU_ST                        :   "", // CHAR (1) Status of source storage unit
  DEST_SU_ST                       :   "", // CHAR (1) Status of destination storage unit
  SU_CONTNTS                       :   "", // CHAR (1) Indicator: print storage unit contents
  HOM_ST_UN                        :   "", // CHAR (1) Indicator: stock removal of a total, homogenous storage unit
  ITEM_CAT                         :   "", // CHAR (1) Type of transfer order item
  ORIG_ITEM                        :   "", // NUMC (4) TO item from which current TO item was generated
  SRC_TOTALS                       :   "", // CHAR (1) Level of totals information SOURCE
  SRC_MIX_BAT                      :   "", // CHAR (1) Blocks with mixed batches SOURCE
  DEST_TOTALS                      :   "", // CHAR (1) Level of totals information DEST.
  DEST_MIC_BAT                     :   "", // CHAR (1) Blocks with mixed batches DEST
  RES_ITEM                         :   "", // NUMC (4) Item Number of Reservation / Dependent Requirements SU3=RPO
  EXPIRYDATE                       :   "", // DATS (8) Shelf Life Expiration or Best-Before Date
  CAPAC_MAT                        :  "0", // DEC (11.3) Capacity usage of transferred material
  SRC_CAP_CHK                      :   "", // CHAR (1) Capacity check for source storage type
  DEST_CAP_CHK                     :   "", // CHAR (1) Capacity check for destination storage type
  RET_CAP_CHK                      :   "", // CHAR (1) Capacity check return storage type
  SUBSYSTEM                        :   "", // CHAR (1) Indicator: pass on TO item to subsystem
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INSPLOTX                         :   "", // NUMC (12) Inspection Lot on Which the Usage Decision is Based SU3=QLS
  INV_SAMP                         :   "", // CHAR (1) Indicator: transfer of insp.sample
  RES_TYPE                         :   "", // CHAR (1) Record type
  CONF_BATCH                       :   "", // CHAR (1) Indicator: Confirm Batch to PP
  PICK_AREA                        :   "", // CHAR (3) Picking Area
  STGE_LOC                         :   "", // CHAR (4) Storage location SU3=LAG
  PLAN_TIME                        : "0.0", // QUAN (13.3) Planned proc.time in transfer order item
  TIME_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Time unit for performance data
  TIME_UNIT_ISO                    :   "", // CHAR (3) ISO code for unit of measurement
  REL_TWO                          :   "", // CHAR (1) Relevance for 2-step picking
  VOLUME                           : "0.0", // QUAN (13.3) Volume
  VOLUMEUNIT                       :   "", // UNIT (3) ALPHA=CUNIT Volume unit
  VOLUMEUNIT_ISO                   :   "", // CHAR (3) ISO code for unit of measurement
  INDINVMANG                       :   "", // CHAR (1) Indicator Inventory Management active
  IM_RELEVANT                      :   "", // CHAR (1) Trigger posting in Inventory Management
  INGRED_QTY                       : "0.0", // QUAN (13.3) Transferred ingredient qty
  INGRED_UOM                       :   "", // UNIT (3) ALPHA=CUNIT Active ingredient unit of measure
  INGRED_UOM_ISO                   :   "", // CHAR (3) ISO code for unit of measurement
  DEST_BIN_CHG                     :   "", // CHAR (1) Dest.stor.bin changeable during confirmation
  KANBAN_IND                       :   "", // CHAR (1) Kanban Indicator
  CANCEL_REQ                       :   "", // CHAR (1) Cancellation req. for TO item (currently only from Kanban)
  SEP_CONF                         :   "", // CHAR (1) Indicator: Separate confirmation possible
  MAT_PICK                         :   "", // CHAR (1) Indicator: Material pick has been confirmed
  ECONF_DATE                       :   "", // DATS (8) Date of Pick Confirmation (First Step)
  ECONF_TIME                       :   "", // TIMS (6) Time of Pick Confirmation (First Step)
  CONF_USER                        :   "", // CHAR (12) User Name in Pick Confirmation (First Step)
  FLG_LEAD_UNIT                    :   "", // CHAR (1) ID: Leading unit of measure for completing a transaction
  SUB_TWO_STEP                     :   "", // CHAR (1) Confirmation ind.: Two-step confirmation for external system
  HU_ITEM                          :   "", // CHAR (1) Flag: Transfer order item is HU TO item
  SRC_HU_NEST                      :   "", // CHAR (1) Indicates whether the source storage unit is a nested HU
  PACK_MAT                         :   "", // CHAR (18) ALPHA=MATN1 Packaging Materials
  SRC_SU_HU                        :   "", // CHAR (1) Indicator: Source SU is pseudo SU (only HUs)
  DEST_SU_HU                       :   "", // CHAR (1) Indicator: Destination SU is pseudo SU (only HUs)
  SRC_SU_SER                       :   "", // CHAR (1) Indicator: Source SU is a HU with serial numbers
  SRC_HU_PICK                      :   "", // CHAR (1) Indicator: source HU suggested as pick HU at confirmation
  HU_EXID                          :   "", // CHAR (20) ALPHA=ALPHA External Handling Unit Identification
  NO_CONTROL                       :   "", // CHAR (1) Flag: Do not update whse controlling during TO creation
  SU_NO_PICK                       :   "", // CHAR (1) Flag: Do not transfer SU to pick point (for SU block stor.)
  TA_POS_HU                        :   "", // CHAR (1) Assignment of TO item to handling unit is required
  MATERIAL_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for MATERIAL Field
  MATERIAL_GUID                    :   "", // CHAR (32) External GUID for MATERIAL Field
  MATERIAL_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for MATERIAL Field
  PACK_MAT_EXTERNAL                :   "", // CHAR (40) ALPHA=MATNL Long Material Number for PACK_MAT Field
  PACK_MAT_GUID                    :   "", // CHAR (32) External GUID for PACK_MAT Field
  PACK_MAT_VERSION                 :   "", // CHAR (10) ALPHA=MATNW Version Number for PACK_MAT Field
  MATERIAL_LONG                    :   "", // CHAR (40) Material Number (40 Characters, needed f. technical reasons)
  HAZ_MAT_NO_LONG                  :   "", // CHAR (40) Hazardous Material Number (40 Chars, Technically Required)
  PACK_MAT_LONG                    :   "", // CHAR (40) Packaging Materials
};
