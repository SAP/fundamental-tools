//
// BAPI_INSPCHAR_GETREQUIREMENTS var: 3  struct: 2  table: 0  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

INSPCHAR        :           "", // NUMC (4) Inspection lot characteristic number
INSPLOT         :           "", // NUMC (12) Inspection lot number SU3=QLS
INSPOPER        :           "", // CHAR (4) ALPHA=NUMCV Inspection lot operation number

// EXPORT PARAMETERS

// REQUIREMENTS :           {}, // BAPI2045D1 Inspection characteristic specifications
// RETURN       :           {}, // BAPIRETURN1 Return parameter
};

const result = await client.call("BAPI_INSPCHAR_GETREQUIREMENTS", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//

// BAPI2045D1  Inspection characteristic specifications

// prettier-ignore
const REQUIREMENTS= {
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

// BAPIRETURN1  Return parameter

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
