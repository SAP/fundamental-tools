//
// BAPI_INSPPOINT_GETREQUIREMENTS var: 3  struct: 2  table: 0  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

INSPLOT         :           "", // NUMC (12) Inspection lot number SU3=QLS
INSPOPER        :           "", // CHAR (4) ALPHA=NUMCV Inspection lot operation number
// INSPPOINT    :            1, // NUMC (6) Inspection point number

// EXPORT PARAMETERS

// REQUIREMENTS :           {}, // BAPI2045D5 Inspection specifications: Inspection point
// RETURN       :           {}, // BAPIRETURN1 Return value
};

const result = await client.call("BAPI_INSPPOINT_GETREQUIREMENTS", parameters);

//
// IMPORT PARAMETERS
//


//
// EXPORT PARAMETERS
//

// BAPI2045D5  Inspection specifications: Inspection point

// prettier-ignore
const REQUIREMENTS= {
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
