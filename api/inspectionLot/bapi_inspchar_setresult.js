//
// BAPI_INSPCHAR_SETRESULT var: 4  struct: 3  table: 1  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

INSPCHAR          :           "", // NUMC (4) Inspection lot characteristic number
INSPLOT           :           "", // NUMC (12) Inspection lot number SU3=QLS
INSPOPER          :           "", // CHAR (4) ALPHA=NUMCV Inspection lot operation number
// INSPSAMPLE     :            1, // NUMC (6) Inspection lot sample number
// CHAR_RESULT    :           {}, // BAPI2045D2 Inspection Result - Characteristic Level
// SAMPLE_RESULT  :           {}, // BAPI2045D3 Inspection Result - Sample Level

// TABLE PARAMETERS

// SINGLE_RESULTS :           [], // BAPI2045D4 Inspection results: Single value level

// EXPORT PARAMETERS

// RETURN         :           {}, // BAPIRETURN1 Return value
};

const result = await client.call("BAPI_INSPCHAR_SETRESULT", parameters);

//
// IMPORT PARAMETERS
//

// BAPI2045D2  Inspection Result - Characteristic Level

// prettier-ignore
const CHAR_RESULT= {
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

// BAPI2045D3  Inspection Result - Sample Level

// prettier-ignore
const SAMPLE_RESULT= {
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


//
// TABLE PARAMETERS
//

// BAPI2045D4  Inspection results: Single value level
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

// BAPIRETURN1  Return value

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
