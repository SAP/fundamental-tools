//
// BAPI_ALM_GET_PROP var: 0  struct: 2  table: 2  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

// PROPOSAL      :           {}, // BAPI_ALM_CONF_PROP Indicators - Suggest Confirmation Data in PM/CS

// TABLE PARAMETERS

TIMETICKETS      :           [], // BAPI_ALM_TIMECONFIRMATION BAPI Structure for Confirmation in PM/CS
// DETAIL_RETURN :           [], // BAPI_ALM_RETURN Return Information for APIs

// EXPORT PARAMETERS

// RETURN        :           {}, // BAPIRET2 Return Parameter
};

const result = await client.call("BAPI_ALM_GET_PROP", parameters);

//
// IMPORT PARAMETERS
//

// BAPI_ALM_CONF_PROP  Indicators - Suggest Confirmation Data in PM/CS

// prettier-ignore
const PROPOSAL= {
  ACTIVITY                         :   "", // CHAR (1) Propose activities
  DATE_AND_TIME                    :   "", // CHAR (1) Propose dates
};


//
// TABLE PARAMETERS
//

// BAPI_ALM_TIMECONFIRMATION  BAPI Structure for Confirmation in PM/CS
const TIMETICKETS= [];

// prettier-ignore
const TIMETICKETS= {
  CONF_NO                          :   "", // NUMC (10) Completion confirmation number for the operation SU3=RCK
  ORDERID                          :   "", // CHAR (12) ALPHA=ALPHA Order Number SU3=ANR
  OPERATION                        :   "", // CHAR (4) ALPHA=NUMCV Activity Number SU3=VGN
  SUB_OPER                         :   "", // CHAR (4) ALPHA=NUMCV Suboperation
  CAPA_CATEGORY                    :   "", // CHAR (3) Capacity category SU3=CAA
  SPLIT                            :    0, // INT1 (3) Split number
  FIN_CONF                         :   "", // CHAR (1) Partial/Final Confirmation
  COMPLETE                         :   "", // CHAR (1) Indicator: No Remaining Work Expected
  CLEAR_RES                        :   "", // CHAR (1) Clear Open Reservations
  POSTG_DATE                       :   "", // DATS (8) Posting Date
  DEV_REASON                       :   "", // CHAR (4) Reason for Variance
  CONF_TEXT                        :   "", // CHAR (40) Confirmation text
  PLANT                            :   "", // CHAR (4) Plant SU3=WRK
  WORK_CNTR                        :   "", // CHAR (8) Work center SU3=AGR
  ACT_WORK                         : "0.0", // QUAN (7.1) Actual work
  UN_WORK                          :   "", // UNIT (3) ALPHA=CUNIT Unit for work
  UN_WORK_ISO                      :   "", // CHAR (3) ISO code for unit of measurement
  REM_WORK                         : "0.0", // QUAN (7.1) Remaining work
  UN_REM_WRK                       :   "", // UNIT (3) ALPHA=CUNIT Unit of measure for remaining work
  UN_REM_WRK_ISO                   :   "", // CHAR (3) ISO code for unit of measurement
  ACTUAL_DUR                       : "0.0", // QUAN (5.1) Actual Duration for Confirmation
  UN_ACT_DUR                       :   "", // UNIT (3) ALPHA=CUNIT Unit for actual duration
  UN_ACT_DUR_ISO                   :   "", // CHAR (3) ISO code for unit of measurement
  EXEC_START_DATE                  :   "", // DATS (8) Confirmed Start Date of Execution
  EXEC_START_TIME                  :   "", // TIMS (6) Confirmed Time for 'Start Execution'
  EXEC_FIN_DATE                    :   "", // DATS (8) Confirmed Finish Date of Execution SU3=EDR
  EXEC_FIN_TIME                    :   "", // TIMS (6) Confirmed Time for 'Finish Execution' SU3=EZR
  FCST_FIN_DATE                    :   "", // DATS (8) Forecast finish date of operation from confirmation
  FCST_FIN_TIME                    :   "", // TIMS (6) Forecast End Time of Operation from Confirmation
  PERS_NO                          :   "", // NUMC (8) Personnel number SU3=PER
  TIMEID_NO                        :   "", // NUMC (8) Time Recording ID Number
  ACT_TYPE                         :   "", // CHAR (6) Activity Type for Confirmation
  WAGETYPE                         :   "", // CHAR (4) Wage type
  CALC_MOTIVE                      :   "", // CHAR (2) Accounting Indicator
  EX_CREATED_BY                    :   "", // CHAR (12) External creator of confirmation
  EX_CREATED_DATE                  :   "", // DATS (8) External date of entry for confirmation
  EX_CREATED_TIME                  :   "", // TIMS (6) External time of entry for confirmation
  EX_IDENT                         :   "", // CHAR (32) External key of a confirmation (for example from PDC system)
  ACT_WORK_2                       : "0.0", // QUAN (8.2) Actual Work
  REM_WORK_2                       : "0.0", // QUAN (8.2) Remaining Work
  START_POINT                      :   "", // CHAR (18) Start Point
  END_POINT                        :   "", // CHAR (18) End Point
  LINEAR_LENGTH                    :   "", // CHAR (18) Length
  LINEAR_UNIT                      :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Linear Data
  LINEAR_UNIT_ISO                  :   "", // CHAR (3) Unit of Measurement for Linear Data in ISO Code
  FIRST_OFFSET_TYPE_CODE           :   "", // CHAR (2) Type of First Offset
  FIRST_OFFSET_VALUE               :   "", // CHAR (18) Value of Offset 1
  FIRST_OFFSET_UNIT                :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Offset 1
  FIRST_OFFSET_UNIT_ISO            :   "", // CHAR (3) Unit of Measurement for Offset 1 in ISO Code
  SECOND_OFFSET_TYPE_CODE          :   "", // CHAR (2) Type of Second Offset
  SECOND_OFFSET_VALUE              :   "", // CHAR (18) Value of Offset 2
  SECOND_OFFSET_UNIT               :   "", // UNIT (3) ALPHA=CUNIT Unit of Measurement for Offset 2
  SECOND_OFFSET_UNIT_ISO           :   "", // CHAR (3) Unit of Measurement for Offset 2 in ISO Code
  MARKER_START_POINT               :   "", // CHAR (18) Marker for Start Point
  MARKER_DISTANCE_START_POINT      :   "", // CHAR (18) Distance between Marker and Start Point
  MARKER_END_POINT                 :   "", // CHAR (18) Marker for End Point
  MARKER_DISTANCE_END_POINT        :   "", // CHAR (18) Length Spec for Distance between Marker and End Point
  MARKER_DISTANCE_UNIT             :   "", // UNIT (3) ALPHA=CUNIT Unit for the Distance from Marker
  MARKER_DISTANCE_UNIT_ISO         :   "", // CHAR (3) Unit for the Distance from Marker in ISO Code
};

// BAPI_ALM_RETURN  Return Information for APIs
const DETAIL_RETURN= [];

// prettier-ignore
const DETAIL_RETURN= {
  TYPE                             :   "", // CHAR (1) Message type: S Success, E Error, W Warning, I Info, A Abort
  MESSAGE_ID                       :   "", // CHAR (20) Message Class
  MESSAGE_NUMBER                   :   "", // NUMC (3) Message Number
  MESSAGE                          :   "", // CHAR (220) Message Text
  LOG_NUMBER                       :   "", // CHAR (20) Application log: log number
  LOG_MSG_NO                       :   "", // NUMC (6) Application log: Internal message serial number
  MESSAGE_V1                       :   "", // CHAR (50) Message Variable
  MESSAGE_V2                       :   "", // CHAR (50) Message Variable
  MESSAGE_V3                       :   "", // CHAR (50) Message Variable
  MESSAGE_V4                       :   "", // CHAR (50) Message Variable
  PARAMETER                        :   "", // CHAR (32) Parameter Name
  ROW                              :    0, // INT4 (10) Lines in parameter
  FIELD                            :   "", // CHAR (30) Field in parameter
  SYSTEM                           :   "", // CHAR (10) ALPHA=ALPHA Logical system from which message originates
  FLG_LOCKED                       :   "", // CHAR (1) Indicator: Entry blocked
  CONF_NO                          :   "", // NUMC (10) Completion confirmation number for the operation SU3=RCK
  CONF_CNT                         :   "", // NUMC (8) Confirmation counter SU3=RZL
};


//
// EXPORT PARAMETERS
//

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
