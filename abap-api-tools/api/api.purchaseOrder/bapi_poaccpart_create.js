//
// BAPI_POACCPART_CREATE exception: 0  struct: 1  table: 1  var: 0
//
// abap api
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

PO_HEADER_ITEM    :           {}, // BAPI_EKPOLIGHT Data for Purchase Order Header and Items

// TABLE PARAMETERS

// RETURN         :           [], // BAPIRET2 Return Parameters
};

const result = await client.call("BAPI_POACCPART_CREATE", parameters);

//
// IMPORT PARAMETERS
//

// BAPI_EKPOLIGHT  Data for Purchase Order Header and Items

// prettier-ignore
const PO_HEADER_ITEM = {
  MANDT                            :   "", // CLNT (3) Client
  EBELN                            :   "", // CHAR (10) ALPHA=ALPHA Purchasing Document Number SU3=BES
  EBELP                            :   "", // NUMC (5) Item Number of Purchasing Document SU3=BSP
  LOGSY                            :   "", // CHAR (10) ALPHA=ALPHA Logical System
  BUKRS                            :   "", // CHAR (4) Company Code SU3=BUK
  ERNAM                            :   "", // CHAR (12) Name of Person who Created the Object
  EKGRP                            :   "", // CHAR (3) Purchasing Group SU3=EKG
  WAERS                            :   "", // CUKY (5) Currency Key SU3=FWS
  KUFIX                            :   "", // CHAR (1) Indicator: Fixing of Exchange Rate
  BEDAT                            :   "", // DATS (8) Purchasing Document Date
  KDATB                            :   "", // DATS (8) Start of Validity Period
  KDATE                            :   "", // DATS (8) End of Validity Period
  INCO1                            :   "", // CHAR (3) Incoterms (Part 1)
  INCO2                            :   "", // CHAR (28) Incoterms (Part 2)
  KNUMV                            :   "", // CHAR (10) Number of the document condition
  LANDS                            :   "", // CHAR (3) Country for Tax Return
  LIFNR                            :   "", // CHAR (10) ALPHA=ALPHA Vendor's account number SU3=LIF
  BSART                            :   "", // CHAR (4) Purchasing Document Type SU3=BSA
  LOEKZ                            :   "", // CHAR (1) Deletion indicator in purchasing document
  ZTERM                            :   "", // CHAR (4) Terms of Payment Key
  ZBD1T                            :  "0", // DEC (3) Cash (Prompt Payment) Discount Days
  ZBD2T                            :  "0", // DEC (3) Cash (Prompt Payment) Discount Days
  ZBD3T                            :  "0", // DEC (3) Cash (Prompt Payment) Discount Days
  ZBD1P                            :  "0", // DEC (5.3) Cash discount percentage 1
  ZBD2P                            :  "0", // DEC (5.3) Cash Discount Percentage 2
  WKURS                            :  "0", // DEC (9.5) ALPHA=EXCRT Exchange Rate
  FRGRL                            :   "", // CHAR (1) Release Not Yet Completely Effected
  TXZ01                            :   "", // CHAR (40) Short Text
  MATNR                            :   "", // CHAR (18) ALPHA=MATN1 Material Number SU3=MAT
  EMATN                            :   "", // CHAR (18) ALPHA=MATN1 Material number SU3=MAT
  WERKS                            :   "", // CHAR (4) Plant SU3=WRK
  MATKL                            :   "", // CHAR (9) Material Group SU3=MKL
  MEINS                            :   "", // UNIT (3) ALPHA=CUNIT Order unit
  BPRME                            :   "", // UNIT (3) ALPHA=CUNIT Order Price Unit (Purchasing)
  BPUMZ                            :  "0", // DEC (5) Numerator for Conversion of Order Price Unit into Order Unit
  BPUMN                            :  "0", // DEC (5) Denominator for Conv. of Order Price Unit into Order Unit
  UMREZ                            :  "0", // DEC (5) Numerator for Conversion of Order Unit to Base Unit
  UMREN                            :  "0", // DEC (5) Denominator for Conversion of Order Unit to Base Unit
  NETPR                            : "0.0", // CURR (11.2) Net Price in Purchasing Document (in Document Currency)
  PEINH                            :  "0", // DEC (5) Price unit
  NETWR                            : "0.0", // CURR (13.2) Net Order Value in PO Currency
  MWSKZ                            :   "", // CHAR (2) Tax on sales/purchases code
  BWTAR                            :   "", // CHAR (10) Valuation type SU3=BWT
  BWTTY                            :   "", // CHAR (1) Valuation Category
  EREKZ                            :   "", // CHAR (1) Final Invoice Indicator
  PSTYP                            :   "", // CHAR (1) Item category in purchasing document
  KNTTP                            :   "", // CHAR (1) Account assignment category SU3=KNT
  KZVBR                            :   "", // CHAR (1) Consumption posting
  VRTKZ                            :   "", // CHAR (1) Distribution indicator for multiple account assignment
  TWRKZ                            :   "", // CHAR (1) Partial invoice indicator
  WEPOS                            :   "", // CHAR (1) Goods Receipt Indicator
  WEUNB                            :   "", // CHAR (1) Goods Receipt, Non-Valuated
  REPOS                            :   "", // CHAR (1) Invoice receipt indicator
  WEBRE                            :   "", // CHAR (1) Indicator: GR-Based Invoice Verification
  BSTYP                            :   "", // CHAR (1) Purchasing document category
  XOBLR                            :   "", // CHAR (1) Item affects commitments
  TXJCD                            :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  SOBKZ                            :   "", // CHAR (1) Special Stock Indicator
  XERSY                            :   "", // CHAR (1) Evaluated Receipt Settlement (ERS)
  BANFN                            :   "", // CHAR (10) ALPHA=ALPHA Purchase requisition number SU3=BAN
  BNFPO                            :   "", // NUMC (5) Item number of purchase requisition SU3=BAP
  MTART                            :   "", // CHAR (4) Material type SU3=MTA
  RETPO                            :   "", // CHAR (1) Returns Item
  KZBWS                            :   "", // CHAR (1) Valuation of Special Stock
  LEBRE                            :   "", // CHAR (1) Indicator for Service-Based Invoice Verification
  LIFRE                            :   "", // CHAR (10) ALPHA=ALPHA Different Invoicing Party SU3=LRE
};


//
// TABLE PARAMETERS
//

// BAPIRET2  Return Parameters
const RETURN = [];

// prettier-ignore
const RETURN_line = {
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
