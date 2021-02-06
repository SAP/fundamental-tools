//
// BAPI_INSPOPER_GETDETAIL var: 16  struct: 3  table: 5  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

INSPLOT                         :           "", // NUMC (12) Inspection Lot Number SU3=QLS
INSPOPER                        :           "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
// CHAR_FILTER_NO               :       '1   ', // CHAR (4) Characteristic Filter (Processing Mode) for Inspection Characteristics SU3=QMO
// CHAR_FILTER_TCODE            :       'QE11', // CHAR (20) Transaction Code
// HANDHELD_APPLICATION         :        SPACE, // CHAR (6) QM Handheld: Application
// INSPPOINT_FROM               :            0, // NUMC (6) Inspection Point Number
// MAX_INSPPOINTS               :          100, // INT4 (10) Maximum Number of Lines for Inspection Points
// READ_CHAR_REQUIREMENTS       :        SPACE, // CHAR (1) Read Table CHAR_REQUIREMENTS
// READ_CHAR_RESULTS            :        SPACE, // CHAR (1) Read Table CHAR_RESULTS
// READ_CHARS_WITH_CLASSES      :        SPACE, // CHAR (1) Read Characteristics with Classed Recording
// READ_CHARS_WITHOUT_RECORDING :        SPACE, // CHAR (1) Read Characteristics Without Recording
// READ_INSPPOINTS              :        SPACE, // CHAR (1) Read Table INSPPOINTS
// READ_SAMPLE_RESULTS          :        SPACE, // CHAR (1) Read Table SAMPLE_RESULTS
// READ_SINGLE_RESULTS          :        SPACE, // CHAR (1) Read Table SINGLE_RESULTS
// RES_ORG                      :        SPACE, // CHAR (2) Data Origin
// RESULT_COPY                  :        SPACE, // CHAR (1) Call from Result Copy

// TABLE PARAMETERS

// CHAR_REQUIREMENTS            :           [], // BAPI2045D1 Inspection Specifications - Inspection Lot Characteristics
// CHAR_RESULTS                 :           [], // BAPI2045D2 Inspection Results Characteristic Level
// INSPPOINTS                   :           [], // BAPI2045L4 Inspection Points
// SAMPLE_RESULTS               :           [], // BAPI2045D3 Inspection Results: Sample Level
// SINGLE_RESULTS               :           [], // BAPI2045D4 Inspection Results: Single Value Level

// EXPORT PARAMETERS

// INSPPOINT_REQUIREMENTS       :           {}, // BAPI2045D5 Inspection Specifications-Inspection Points
// OPERATION                    :           {}, // BAPI2045L2 Detail on Inspection Operation
// RETURN                       :           {}, // BAPIRET2 Return Parameter
};

const result = await client.call("BAPI_INSPOPER_GETDETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPI2045D1  Inspection Specifications - Inspection Lot Characteristics
const CHAR_REQUIREMENTS= [];

// prettier-ignore
const CHAR_REQUIREMENTS= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INSPOPER                         :   "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
  INSPCHAR                         :   "", // NUMC (4) Insp. Lot Charac. No.
  STATUS                           :   "", // CHAR (1) Specification Record Status
  CHAR_DESCR                       :   "", // CHAR (40) Short Text for the Inspection Characteristic
  CHAR_TYPE                        :   "", // CHAR (2) Characteristic Type
  CONFIRM_NO                       :   "", // NUMC (8) Confirmation Number for Inspection Characteristic SU3=QRU
  OBLIGATORY                       :   "", // CHAR (1) Required Confirmation for Inspection Characteristic
  SINGLE_RES                       :   "", // CHAR (1) Single Results
  SAMPLE_RES                       :   "", // CHAR (1) Sample Results
  CHAR_RES                         :   "", // CHAR (1) Characteristic Results
  SAMPLES                          :   "", // CHAR (1) Partial Samples Possible
  SAMPLES_NO                       :   "", // CHAR (5) Number of Planned Partial Samples
  SCOPE                            :   "", // NUMC (7) Sample Size to Be Inspected in QM Subsystem
  SCOPE_IND                        :   "", // CHAR (1) Inspection Scope
  DOCU_REQU                        :   "", // CHAR (1) Documentation Required for Inspection Results
  SERIALREQU                       :   "", // CHAR (1) Serial Number To Be Recorded in QM Subsystem
  INSP_POINT                       :   "", // CHAR (1) Indicator: Sampling Procedure for Inspection Points
  GRID                             :   "", // NUMC (3) Inspection Frequency (Only for Inspection with Insp. Points)
  MSTR_CHAR                        :   "", // CHAR (8) Master Characteristic
  VMSTR_CHAR                       :   "", // CHAR (6) ALPHA=ALPHA Version Number of the Master Inspection Characteristic
  PMSTR_CHAR                       :   "", // CHAR (4) Plant for Master Inspection Characteristic
  METHOD                           :   "", // CHAR (8) ALPHA=ALPHA Inspection Method SU3=PMT
  METHOD_TXT                       :   "", // CHAR (40) Short Text for Inspection Method
  VMETHOD                          :   "", // CHAR (6) ALPHA=ALPHA Version Number of the Inspection Method
  PMETHOD                          :   "", // CHAR (4) Plant for Inspection Method
  SMPL_QUANT                       :   "", // NUMC (6) Sample Unit of Measurement Factor for QM Subsystem
  SMPL_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Base Unit of Measure for the Inspection Lot
  SMPL_UNITT                       :   "", // CHAR (20) Short Text for Unit of Measure
  SMPL_UNITC                       :   "", // CHAR (3) ISO Code for Unit of Measure
  PHYS_SMPL                        :   "", // NUMC (6) Number of the Partial Sample
  CH_WGT_COD                       :   "", // CHAR (2) Characteristic Weighting
  CH_WGT_FAC                       :   "", // CHAR (4) Characteristic Weighting Factor
  CH_WGT_TXT                       :   "", // CHAR (40) Text for Characteristic Weighting
  FORMULA                          :   "", // CHAR (120) Complete Formula for Linking Insp. Char. to QM Subsystems
  INFOFIELD1                       :   "", // CHAR (10) Info Field 1 from the Characteristic
  INFOFIELD2                       :   "", // CHAR (20) Info Field 2 from the Characteristic
  INFOFIELD3                       :   "", // CHAR (40) Info Field 3 from the Characteristic
  DEC_PLACES                       :   "", // CHAR (3) Number of Decimal Places
  MEAS_UNIT                        :   "", // CHAR (6) Unit of Measurement (Internal Code)
  MEAS_UNITT                       :   "", // CHAR (20) Short Text for Unit of Measure
  MEAS_UNITC                       :   "", // CHAR (3) ISO Code for Unit of Measure
  TARGET_VAL                       :   "", // CHAR (22) Target Value
  UP_TOL_LMT                       :   "", // CHAR (22) Upper Tolerance Limit
  LW_TOL_LMT                       :   "", // CHAR (22) Lower Tolerance Limit
  UP_LMT_1                         :   "", // CHAR (22) Limit 1 (Upper)
  LW_LMT_1                         :   "", // CHAR (22) Limit 1 (Lower)
  UP_LMT_2                         :   "", // CHAR (22) Limit 2 (Upper)
  LW_LMT_2                         :   "", // CHAR (22) Limit 2 (Lower)
  UP_PLS_LMT                       :   "", // CHAR (22) Plausibility Limit (Upper)
  LW_PLS_LMT                       :   "", // CHAR (22) Plausibility Limit (Lower)
  UP_CTRL_1                        :   "", // CHAR (22) Action Limit 1 (Upper)
  LW_CTRL_1                        :   "", // CHAR (22) Lower Action Limit 1
  UP_CTRL_2                        :   "", // CHAR (22) Action Limit 2 (Upper)
  LW_CTRL_2                        :   "", // CHAR (22) Lower Action Limit 2
  CC_NO                            :   "", // NUMC (12) Control Chart Number in QM
  CC_TYPE                          :   "", // CHAR (3) Control Chart Type
  CC_TYPE_T                        :   "", // CHAR (40) Short Text for Control Chart Type
  SEL_SET1                         :   "", // CHAR (8) Selected Set
  PSEL_SET1                        :   "", // CHAR (4) Plant for Selected Set
  CAT_TYPE1                        :   "", // CHAR (1) Catalog Type
  SEL_SET2                         :   "", // CHAR (8) Selected Set
  PSEL_SET2                        :   "", // CHAR (4) Plant for Selected Set
  CAT_TYPE2                        :   "", // CHAR (1) Catalog Type
  SEL_SET3                         :   "", // CHAR (8) Selected Set
  PSEL_SET3                        :   "", // CHAR (4) Plant for Selected Set
  CAT_TYPE3                        :   "", // CHAR (1) Catalog Type
  SEL_SET4                         :   "", // CHAR (8) Selected Set
  PSEL_SET4                        :   "", // CHAR (4) Plant for Selected Set
  CAT_TYPE4                        :   "", // CHAR (1) Catalog Type
  SEL_SET5                         :   "", // CHAR (8) Selected Set
  PSEL_SET5                        :   "", // CHAR (4) Plant for Selected Set
  CAT_TYPE5                        :   "", // CHAR (1) Catalog Type
  VALN_TYPE                        :   "", // CHAR (1) Valuation Type for Sample for QM Subsystems
  ACCEPT_NO                        :   "", // NUMC (5) Acceptance Number in Attrib. Insp. for QM Subsystems
  REJECT_NO                        :   "", // NUMC (5) Rejection Number in Attributive Insp. for QM Subsystems
  K_FACTOR                         :   "", // CHAR (16) K-Factor for a Variable Inspection
  SHARE_CALC                       :   "", // CHAR (1) Fraction Calculation
  CHARACTERISTIC_NAME              :   "", // CHAR (40) ALPHA=ALPHA Characteristic Description for Quality Data Exchange
  RES_ORG                          :   "", // CHAR (2) Planned Results Data Origin
  CLASSES                          :   "", // CHAR (1) Classed Recording
  NO_RECORDING                     :   "", // CHAR (1) No Characteristic Recording
  INPPROC                          :   "", // CHAR (3) Parameters for Input Processing in QM Results Recording
};

// BAPI2045D2  Inspection Results Characteristic Level
const CHAR_RESULTS= [];

// prettier-ignore
const CHAR_RESULTS= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INSPOPER                         :   "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
  INSPCHAR                         :   "", // NUMC (4) Insp. Lot Charac. No.
  CLOSED                           :   "", // CHAR (1) Close Characteristic or Sample
  EVALUATED                        :   "", // CHAR (1) Copy Valuation from External System
  CHAR_ATTR                        :   "", // CHAR (1) Attribute of the Results Record (Valid, Invalid,...)
  CHAR_INVAL                       :   "", // CHAR (1) Invalid Result
  EVALUATION                       :   "", // CHAR (1) Inspection Result Valuation
  ERR_CLASS                        :   "", // CHAR (2) Defect Class
  VALID_VALS                       :   "", // CHAR (7) No. of Valid Values for Char. Results Upload to QM Subsys.
  NONCONF                          :   "", // CHAR (7) No. of Nonconforming Units for Char. Confirmation via QM-IDI
  DEFECTS                          :   "", // CHAR (7) Number of Defects for Confirmation of Charac. via QM-IDI
  VALS_ABOVE                       :   "", // CHAR (7) Number of Values Above the Tolerance Limit (Characteristic)
  VALS_BELOW                       :   "", // CHAR (7) Number of Values Below the Tolerance Limit (Characteristic)
  MEAN_VALUE                       :   "", // CHAR (22) Mean Value
  VARIANCE                         :   "", // CHAR (22) Variance
  MAXIMUM                          :   "", // CHAR (22) Maximum
  MINIMUM                          :   "", // CHAR (22) Minimum
  START_DATE                       :   "", // DATS (8) Inspection Start Date (QM Subsystem Interface)
  START_TIME                       :   "", // TIMS (6) Inspection Start Time (QM Subsystem Interface)
  END_DATE                         :   "", // DATS (8) Inspection End Date (QM Subsystem Interface)
  END_TIME                         :   "", // TIMS (6) Inspection End Time (QM Subsystem Interface)
  INSPECTOR                        :   "", // CHAR (20) Name of the Inspector
  RES_ORG                          :   "", // CHAR (2) Data Origin
  REMARK                           :   "", // CHAR (40) Inspection Description for Single Value
  CODE1                            :   "", // CHAR (4) Code SU3=QCODE
  CODE_GRP1                        :   "", // CHAR (8) Code Group
  CODE2                            :   "", // CHAR (4) Code SU3=QCODE
  CODE_GRP2                        :   "", // CHAR (8) Code Group
  CODE3                            :   "", // CHAR (4) Code SU3=QCODE
  CODE_GRP3                        :   "", // CHAR (8) Code Group
  CODE4                            :   "", // CHAR (4) Code SU3=QCODE
  CODE_GRP4                        :   "", // CHAR (8) Code Group
  CODE5                            :   "", // CHAR (4) Code SU3=QCODE
  CODE_GRP5                        :   "", // CHAR (8) Code Group
  ORIGINAL_INPUT                   :   "", // CHAR (25) Original Value Before Input Processing
  INPPROC_READY                    :   "", // CHAR (1) Input Processing Successfully Completed
  DIFF_DEC_PLACES                  :    0, // INT2 (5) Different Number of Decimal Places
  ADD_INFO1                        :   "", // CHAR (18) ALPHA=ALPHA General Information
  CONDITION_ACTIVE                 :   "", // CHAR (1) Set Status of Conditional Characteristics to Active
};

// BAPI2045L4  Inspection Points
const INSPPOINTS= [];

// prettier-ignore
const INSPPOINTS= {
  INSPPOINT                        :   "", // NUMC (6) Inspection Point Number
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INSPOPER                         :   "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
};

// BAPI2045D3  Inspection Results: Sample Level
const SAMPLE_RESULTS= [];

// prettier-ignore
const SAMPLE_RESULTS= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INSPOPER                         :   "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
  INSPCHAR                         :   "", // NUMC (4) Insp. Lot Charac. No.
  INSPSAMPLE                       :   "", // NUMC (6) Insp. Lot Sample
  LAST_SMPL                        :   "", // CHAR (1) Last Original Value, Sample or Inspection Point
  CLOSED                           :   "", // CHAR (1) Close Characteristic or Sample
  EVALUATED                        :   "", // CHAR (1) Copy Valuation from External System
  SMPL_ATTR                        :   "", // CHAR (1) Attribute of the Results Record (Valid, Invalid,...)
  SMPL_INVAL                       :   "", // CHAR (1) Invalid Result
  EVALUATION                       :   "", // CHAR (1) Inspection Result Valuation
  ERR_CLASS                        :   "", // CHAR (2) Defect Class
  VALID_VALS                       :   "", // CHAR (7) No. of Valid Values for Char. Results Upload to QM Subsys.
  NONCONF                          :   "", // CHAR (7) No. of Nonconforming Units for Char. Confirmation via QM-IDI
  DEFECTS                          :   "", // CHAR (7) Number of Defects for Confirmation of Charac. via QM-IDI
  VALS_ABOVE                       :   "", // CHAR (7) Number of Values Below the Tolerance Limit (Characteristic)
  VALS_BELOW                       :   "", // CHAR (7) Number of Values Above the Tolerance Limit (Characteristic)
  MEAN_VALUE                       :   "", // CHAR (22) Mean Value
  VARIANCE                         :   "", // CHAR (22) Variance
  MAXIMUM                          :   "", // CHAR (22) Mean Value
  MINIMUM                          :   "", // CHAR (22) Mean Value
  START_DATE                       :   "", // DATS (8) Inspection Start Date (QM Subsystem Interface)
  START_TIME                       :   "", // TIMS (6) Inspection Start Time (QM Subsystem Interface)
  END_DATE                         :   "", // DATS (8) Inspection End Date (QM Subsystem Interface)
  END_TIME                         :   "", // TIMS (6) Inspection End Time (QM Subsystem Interface)
  INSPECTOR                        :   "", // CHAR (20) Name of the Inspector
  RES_ORG                          :   "", // CHAR (2) Data Origin
  REMARK                           :   "", // CHAR (40) Inspection Description for Single Value
  CODE1                            :   "", // CHAR (4) Code SU3=QCODE
  CODE_GRP1                        :   "", // CHAR (8) Code Group
  CODE2                            :   "", // CHAR (4) Code SU3=QCODE
  CODE_GRP2                        :   "", // CHAR (8) Code Group
  CODE3                            :   "", // CHAR (4) Code SU3=QCODE
  CODE_GRP3                        :   "", // CHAR (8) Code Group
  CODE4                            :   "", // CHAR (4) Code SU3=QCODE
  CODE_GRP4                        :   "", // CHAR (8) Code Group
  CODE5                            :   "", // CHAR (4) Code SU3=QCODE
  CODE_GRP5                        :   "", // CHAR (8) Code Group
  ORIGINAL_INPUT                   :   "", // CHAR (25) Original Value Before Input Processing
  INPPROC_READY                    :   "", // CHAR (1) Input Processing Successfully Completed
  DIFF_DEC_PLACES                  :    0, // INT2 (5) Different Number of Decimal Places
  ADD_INFO1                        :   "", // CHAR (18) ALPHA=ALPHA General Information
  ADD_INFO2                        :   "", // CHAR (4) Position on the Machine (QM Interface - Subsystem)
  CONDITION_ACTIVE                 :   "", // CHAR (1) Set Status of Conditional Characteristics to Active
};

// BAPI2045D4  Inspection Results: Single Value Level
const SINGLE_RESULTS= [];

// prettier-ignore
const SINGLE_RESULTS= {
  INSPCHAR                         :   "", // NUMC (4) Insp. Lot Charac. No.
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INSPOPER                         :   "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
  INSPSAMPLE                       :   "", // NUMC (6) Insp. Lot Sample
};


//
// EXPORT PARAMETERS
//

// BAPI2045D5  Inspection Specifications-Inspection Points

// prettier-ignore
const INSPPOINT_REQUIREMENTS= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INSPOPER                         :   "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
  INSPPOINT                        :   "", // NUMC (6) Inspection Point Number
  CAT_TYPE                         :   "", // CHAR (1) Catalog SU3=QKT
  SEL_SET                          :   "", // CHAR (8) Selected Set for Inspection Point Valuation
  PSEL_SET                         :   "", // CHAR (4) Plant of Selected Set for Inspection Point Valuation
  CODE_GRP_A                       :   "", // CHAR (8) Code Group for Inspection Point Valuation
  CODE_ACCEPT                      :   "", // CHAR (4) Code for Inspection Point Valuation
  CODE_GRP_R                       :   "", // CHAR (8) Code Group for Inspection Point Valuation
  CODE_REJECT                      :   "", // CHAR (4) Code for Inspection Point Valuation
  TIME_GRID                        :   "", // CHAR (1) Interval = Time (Time-Related)
  QUANT_GRID                       :   "", // CHAR (1) Creation Cycle = Quantity  (Quantity-Reference)
  FREE_GRID                        :   "", // CHAR (1) Interval Without Reference to Time or Quantity
  TIME_UNIT                        :   "", // UNIT (3) ALPHA=CUNIT Time Unit
  TIME_FAC                         :   "", // NUMC (6) Time Factor
  QUANT_UNIT                       :   "", // UNIT (3) ALPHA=CUNIT Grid Unit of Measure
  QUANT_FAC                        :   "", // CHAR (17) Quantity Between Two Inspections
  IDENT_KEY                        :   "", // CHAR (3) Identification for the Inspection Point Field Combination SU3=QBK
  IP_TYPE                          :   "", // CHAR (1) Inspection Point Type
  EQUI_ORD                         :   "", // CHAR (1) Field Active
  EQUI_TXT                         :   "", // CHAR (20) Keyword for User Field
  F_LOC_ORD                        :   "", // CHAR (1) Field Active
  F_LOC_TXT                        :   "", // CHAR (20) Keyword for User Field
  SMPL_ORD                         :   "", // CHAR (1) Field Active
  SMPL_TXT                         :   "", // CHAR (20) Keyword for User Field
  USERC1_ORD                       :   "", // CHAR (1) Field Active
  USERC1_TXT                       :   "", // CHAR (20) Keyword for User Field
  USERC2_ORD                       :   "", // CHAR (1) Field Active
  USERC2_TXT                       :   "", // CHAR (20) Keyword for User Field
  USERN1_ORD                       :   "", // CHAR (1) Field Active
  USERN1_TXT                       :   "", // CHAR (20) Keyword for User Field
  USERN2_ORD                       :   "", // CHAR (1) Field Active
  USERN2_TXT                       :   "", // CHAR (20) Keyword for User Field
  USERD1_ORD                       :   "", // CHAR (1) Field Active
  USERD1_TXT                       :   "", // CHAR (20) Keyword for User Field
  USERT1_ORD                       :   "", // CHAR (1) Field Active
  USERT1_TXT                       :   "", // CHAR (20) Keyword for User Field
  PARTLOTS                         :   "", // CHAR (1) Partial Lot Assignment Required for an Insp. Point
  BATCHES                          :   "", // CHAR (1) Batch management requirement indicator
  QUANTITIES                       :   "", // CHAR (1) Quantities Must Be Assigned
  QUANTONCE                        :   "", // CHAR (1) Quantity Confirmation for Each Partial Lot
  EVALUATION                       :   "", // CHAR (1) Valuation Required
};

// BAPI2045L2  Detail on Inspection Operation

// prettier-ignore
const OPERATION= {
  INSPLOT                          :   "", // NUMC (12) Inspection Lot Number SU3=QLS
  INSPOPER                         :   "", // CHAR (4) ALPHA=NUMCV Inspection Lot Operation Number
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  TXT_OPER                         :   "", // CHAR (40) Short Text
  WORKCENTER                       :   "", // CHAR (8) Work Center SU3=QAP
  PLNT_WORKC                       :   "", // CHAR (4) Plant SU3=WRK
  TXT_WORKC                        :   "", // CHAR (40) Short Text
  IDI_SUBSYS                       :   "", // CHAR (6) Subsystem Identifier for QM Subsystem Interface
};

// BAPIRET2  Return Parameter

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
