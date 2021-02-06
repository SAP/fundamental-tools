//
// BAPI_BUSPARTNER_GETDETAIL var: 4  struct: 11  table: 15  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

BPARTNERID              :           "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
// COMP_CODE            :           "", // CHAR (4) Company Code SU3=BUK
// INSTITUTION          :           "", // CHAR (4) ALPHA=ALPHA IS-H: Institution SU3=EIN

// TABLE PARAMETERS

// ADD_PHONE            :           [], // BAPINADDR2 IS-H BAPI Additional Telephone Numbers
// ASS_FEEB             :           [], // BAPI1309FEEB BAPI Fee Recipient-Fee Authorization Assignment
// ASS_FEEK             :           [], // BAPI1309FEEK BAPI Fee Recipient-Vendor Assignment
// ASS_FEER             :           [], // BAPI1309FEER BAPI Fee Recipient-Rank Assignment
// ASS_PER_KVPHYSNO     :           [], // BAPI1309PERPHYSNO IS-H BAPI Person-HI Physician Number Assignment
// ASS_PER_NASHOSP      :           [], // /ISHFR/BAPI1309NASHOSP Hospitals Assigned
// ASS_PER_QLDI         :           [], // BAPI1309PERQLDI IS-H CH: BAPI Person-to-Qualitative Grade Assignment
// ASS_PER_QTDI         :           [], // BAPI1309PERQTDI IS-H CH: BAPI Person-to-Quantitative Grade Assignment
// ASS_PER_SPEC         :           [], // BAPI1309PERSPEC IS-H BAPI Person-to-Specialty Assignment
// ASS_PER_USR          :           [], // BAPI1309PERUSR IS-H BAPI Person-to-User Name Assignment
// ASS_PER_WORKNO       :           [], // BAPI1309PERWORKNO IS-H BAPI Person-Place of Work Number Assignment
// CUSTOMER_BANK        :           [], // BAPI1309FIBANK IS-H BAPI Business Partner FI Bank Data Return Data
// INSPROVIDER_INSTITU  :           [], // BAPI1309INSPROV_INSTITU Institution-Dependent Insurance Provider Data
// INSPROVIDER_REL      :           [], // BAPI1309INSPROVIDER_REL IS-H BAPI Insurance Provider Relationships
// RETURN               :           [], // BAPIRET2 Return Parameters

// EXPORT PARAMETERS

// WORST_RETURNED_MSGTY :           "", // CHAR (1) IS-H: Most Severe Message Type Generated
// ADDRESS_DATA         :           {}, // BAPINADDR IS-H: Addresses (Central Address Structure)
// BPARTNER_DATA        :           {}, // BAPI1309BPARTNER IS-H BAPI Business Partner Data
// CUSTOMER_DATA        :           {}, // BAPI1309CUSTOMER IS-H BAPI Business Partner - Customer Data
// DEFAULT_CSCHEME      :           {}, // BAPI1309CONTSCHEMEDEFAULT IS-H BAPI Business Partner - Default Contract Scheme-Ins.Provider
// EMPLOYER_DATA        :           {}, // BAPI1309EMPLOYER IS-H BAPI Business Partner - Employer Data
// FEE_DATA             :           {}, // BAPI1309FEE IS-H BAPI Business Partner - Fee Recipient Data
// FICUSTOMER_DATA      :           {}, // BAPI1309FICUSTOMER IS-H BAPI Business Partner FI Customer Data Return Data
// HOSPITAL_DATA        :           {}, // BAPI1309HOSPITAL IS-H BAPI Business Partner - Hospital Data
// INSPROVIDER_DATA     :           {}, // BAPI1309INS_PROVIDER IS-H BAPI Business Partner - Insurance Provider Data
// IP_TYPE_DATA         :           {}, // BAPI1309INS_PROVIDER_TYPE IS-H Business Partner - Insurance Provider Type
// PERSON_DATA          :           {}, // BAPI1309PERSON IS-H BAPI Business Partner - Person Data
};

const result = await client.call("BAPI_BUSPARTNER_GETDETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPINADDR2  IS-H BAPI Additional Telephone Numbers
const ADD_PHONE= [];

// prettier-ignore
const ADD_PHONE= {
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA IS-H: Address Number
  SEQ_NO                           :   "", // NUMC (3) IS-H: Sequence Number of Telephone Number
  PHONENO                          :   "", // CHAR (30) IS-H: Telephone Number
  EXTENSION                        :   "", // CHAR (10) Telephone Number - Extension
};

// BAPI1309FEEB  BAPI Fee Recipient-Fee Authorization Assignment
const ASS_FEEB= [];

// prettier-ignore
const ASS_FEEB= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  FEE_AUTHORIZATION                :   "", // CHAR (10) Fee Authorization
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309FEEK  BAPI Fee Recipient-Vendor Assignment
const ASS_FEEK= [];

// prettier-ignore
const ASS_FEEK= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  MAIN_VENDOR                      :   "", // CHAR (16) ALPHA=ALPHA Main Vendor SU3=LIF
};

// BAPI1309FEER  BAPI Fee Recipient-Rank Assignment
const ASS_FEER= [];

// prettier-ignore
const ASS_FEER= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309PERPHYSNO  IS-H BAPI Person-HI Physician Number Assignment
const ASS_PER_KVPHYSNO= [];

// prettier-ignore
const ASS_PER_KVPHYSNO= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  KVPHYSNO                         :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// /ISHFR/BAPI1309NASHOSP  Hospitals Assigned
const ASS_PER_NASHOSP= [];

// prettier-ignore
const ASS_PER_NASHOSP= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  ASSIGNED_HOSPITAL                :   "", // CHAR (10) ALPHA=ALPHA Hospital Assigned
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309PERQLDI  IS-H CH: BAPI Person-to-Qualitative Grade Assignment
const ASS_PER_QLDI= [];

// prettier-ignore
const ASS_PER_QLDI= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  QUAL_DIG                         :   "", // CHAR (4) IS-H CH: Qualitative Grade
  FROM_DATE                        :   "", // DATS (8) Start Date
  TO_DATE                          :   "", // DATS (8) End Date
  CREATION_DATE                    :   "", // DATS (8) IS-H: Date when Record Created
  CREATION_USER                    :   "", // CHAR (12) IS-H: Name of Employee who Created Record
  CREATION_TIME                    :   "", // TIMS (6) IS-H: Time when Data Record Created
  UPDATE_DATE                      :   "", // DATS (8) IS-H: Date of Last Change
  UPDATE_USER                      :   "", // CHAR (12) IS-H: Name of Person who Last Changed Data
  UPDATE_TIME                      :   "", // TIMS (6) IS-H: Time Data Record was Last Changed
};

// BAPI1309PERQTDI  IS-H CH: BAPI Person-to-Quantitative Grade Assignment
const ASS_PER_QTDI= [];

// prettier-ignore
const ASS_PER_QTDI= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  QUNT_DIG                         :   "", // CHAR (5) No field text
  FROM_DATE                        :   "", // DATS (8) Start Date
  TO_DATE                          :   "", // DATS (8) End Date
  CREATION_DATE                    :   "", // DATS (8) IS-H: Date when Record Created
  CREATION_USER                    :   "", // CHAR (12) IS-H: Name of Employee who Created Record
  CREATION_TIME                    :   "", // TIMS (6) IS-H: Time when Data Record Created
  UPDATE_DATE                      :   "", // DATS (8) IS-H: Date of Last Change
  UPDATE_USER                      :   "", // CHAR (12) IS-H: Name of Person who Last Changed Data
  UPDATE_TIME                      :   "", // TIMS (6) IS-H: Time Data Record was Last Changed
};

// BAPI1309PERSPEC  IS-H BAPI Person-to-Specialty Assignment
const ASS_PER_SPEC= [];

// prettier-ignore
const ASS_PER_SPEC= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  SPEC_CTGRY                       :   "", // CHAR (1) Category of Specialty Key
  SPECIALTY                        :   "", // CHAR (4) ALPHA=ALPHA Specialty
};

// BAPI1309PERUSR  IS-H BAPI Person-to-User Name Assignment
const ASS_PER_USR= [];

// prettier-ignore
const ASS_PER_USR= {
  CLIENT                           :   "", // CLNT (3) Client
  BPARTNER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
  USER_NAME                        :   "", // CHAR (12) IS-H: Business Partner User
};

// BAPI1309PERWORKNO  IS-H BAPI Person-Place of Work Number Assignment
const ASS_PER_WORKNO= [];

// prettier-ignore
const ASS_PER_WORKNO= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  WORKNO                           :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309FIBANK  IS-H BAPI Business Partner FI Bank Data Return Data
const CUSTOMER_BANK= [];

// prettier-ignore
const CUSTOMER_BANK= {
  CLIENT                           :   "", // CLNT (3) Client
  BANK_CTRY                        :   "", // CHAR (3) Bank country key SU3=BKL
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  BANK_NO                          :   "", // CHAR (15) Bank number SU3=BLZ
  BANK_ACCT                        :   "", // CHAR (18) Bank account number
  COLL_AUTH                        :   "", // CHAR (1) Indicator: Is there collection authorization ?
  BANK_NAME                        :   "", // CHAR (60) Name of bank
  IBAN                             :   "", // CHAR (34) IBAN (International Bank Account Number)
};

// BAPI1309INSPROV_INSTITU  Institution-Dependent Insurance Provider Data
const INSPROVIDER_INSTITU= [];

// prettier-ignore
const INSPROVIDER_INSTITU= {
  CLIENT                           :   "", // CLNT (3) Client
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  COPAYMENT_PROC                   :   "", // CHAR (1) IS-H: Copayment Procedure for Billing
  EFFECTIVE_DATE                   :   "", // DATS (8) Effective Date for Changeover of Copayment Procedure
  PREV_COPAYMENT_PROC              :   "", // CHAR (1) IS-H: Copayment Procedure Before Changeover
  CHANGE_UP_TO_DATE                :   "", // DATS (8) IS-H: Change-to date (RNCUCURR1)
  CREATION_USER                    :   "", // CHAR (12) IS-H: Name of Employee who Created Record
  CREATION_DATE                    :   "", // DATS (8) IS-H: Date when Record Created
  CREATION_TIME                    :   "", // TIMS (6) IS-H: Time Record Created
  UPDATE_USER                      :   "", // CHAR (12) IS-H: Name of Person who Last Changed Data
  UPDATE_DATE                      :   "", // DATS (8) IS-H: Date of Last Change
  UPDATE_TIME                      :   "", // TIMS (6) IS-H: Time of Last Change
};

// BAPI1309INSPROVIDER_REL  IS-H BAPI Insurance Provider Relationships
const INSPROVIDER_REL= [];

// prettier-ignore
const INSPROVIDER_REL= {
  CLIENT                           :   "", // CLNT (3) Client
  INS_PROVIDER                     :   "", // CHAR (10) ALPHA=ALPHA IS-H: Insurance Provider SU3=KOT
  RGPART2                          :   "", // CHAR (3) IS-H: Business Partner - Relationship
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  CASETYPE                         :   "", // CHAR (1) IS-H: Case Type
  BPARTNER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
};

// BAPIRET2  Return Parameters
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


//
// EXPORT PARAMETERS
//

// BAPINADDR  IS-H: Addresses (Central Address Structure)

// prettier-ignore
const ADDRESS_DATA= {
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA IS-H: Address Number
  COUNTRY                          :   "", // CHAR (3) IS-H: Country
  COUNTRY_ISO                      :   "", // CHAR (2) Country ISO code
  COUNTRY_TEXT                     :   "", // CHAR (15) Country Name
  REGION                           :   "", // CHAR (3) IS-H: Region (Federal State, Province, County)
  REGION_TEXT                      :   "", // CHAR (20) Description
  PCD                              :   "", // CHAR (10) IS-H: Postal Code of City
  CITY                             :   "", // CHAR (40) IS-H: City
  STD_CITY                         :   "", // CHAR (40) Standardized City Name
  DISTRICT                         :   "", // CHAR (40) IS-H: District
  STD_DISTRICT                     :   "", // CHAR (40) Standardized District
  STR_NO                           :   "", // CHAR (40) IS-H: Street
  STD_STREET                       :   "", // CHAR (40) Standardized Street (40 Characters)
  STR_SUP                          :   "", // CHAR (40) IS-H: Other Designation Qualifying the Address
  STD_STR_SUP                      :   "", // CHAR (40) IS-H: Standardized Street Supplement
  GEOGR_AREA                       :   "", // CHAR (9) IS-H: Geographical Area
  GEOGR_AREA_TEXT                  :   "", // CHAR (40) IS-H: Name of Geographical Area
  POBOX_PCD                        :   "", // CHAR (10) IS-H: Postal Code of P.O. Box
  POBOX                            :   "", // CHAR (10) IS-H: Post Office Box
  POB_COUNTRY                      :   "", // CHAR (3) Country of Post Office Box
  POB_COUNTRY_ISO                  :   "", // CHAR (2) Country ISO code
  POB_COUNTRY_TXT                  :   "", // CHAR (15) Country Name
  POBOX_CITY                       :   "", // CHAR (40) IS-H: PO Box City
  STD_POBOXCITY                    :   "", // CHAR (40) Standardized City Name of P.O. Box
  COMPANY_PCD                      :   "", // CHAR (10) IS-H: Postal Code of Company (for Major Accounts)
  PHONENO                          :   "", // CHAR (30) IS-H: Telephone Number
  EXTENSION                        :   "", // CHAR (10) Telephone Number - Extension
  OTHER_PHONES                     :   "", // CHAR (1) IS-H: Indicator that More Tel. Nos. Exist for Address
  FAXNO                            :   "", // CHAR (30) Fax Number
  FAXEXTENSION                     :   "", // CHAR (10) IS-H: Fax Number - Extension
  TELEXNO                          :   "", // CHAR (30) IS-H: Telex Number
  BUILDING                         :   "", // CHAR (10) IS-H: Block/House
  FLOOR                            :   "", // CHAR (10) IS-H: Block/House Level
  UNIT                             :   "", // CHAR (10) IS-H: Unit Number
  ADDR_STRING                      :   "", // CHAR (50) IS-H: Address
  E_MAIL                           :   "", // CHAR (241) ALPHA=SXIDN IS-H: Internet Mail (SMTP) Address
  HOUSE_NO                         :   "", // CHAR (10) House Number
  STREET_LONG                      :   "", // CHAR (60) Street
  STD_STREET_LONG                  :   "", // CHAR (60) Standardized Street
  STR_SUPPL1                       :   "", // CHAR (40) Supplement 2
  C_O_NAME                         :   "", // CHAR (40) c/o Name
  DEFLT_COMM                       :   "", // CHAR (3) IS-H: Standard Communication Type if ISH_BP_OM Active
  MOB_NMBR                         :   "", // CHAR (30) IS-H: Cell Phone if ISH_BP_OM Active
  OTHER_MOBILES                    :   "", // CHAR (1) IS-H: Indicator for Additional Cell Phones for Address
};

// BAPI1309BPARTNER  IS-H BAPI Business Partner Data

// prettier-ignore
const BPARTNER_DATA= {
  BPARTNER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
};

// BAPI1309CUSTOMER  IS-H BAPI Business Partner - Customer Data

// prettier-ignore
const CUSTOMER_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Customer (IS-H supplement) SU3=DEB
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  REF_CUST                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number of FI Customer SU3=KUN
  COMMENT_CUST                     :   "", // CHAR (50) IS-H: Comment on Customer
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
};

// BAPI1309CONTSCHEMEDEFAULT  IS-H BAPI Business Partner - Default Contract Scheme-Ins.Provider

// prettier-ignore
const DEFAULT_CSCHEME= {
  CLIENT                           :   "", // CLNT (3) Client
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  IPTYPE                           :   "", // CHAR (3) ALPHA=ALPHA IS-H: Insurance Provider Type (e.g. Private, Statutory)
  INS_PROVIDER                     :   "", // CHAR (10) ALPHA=ALPHA IS-H: Insurance Provider SU3=KOT
  CONT_SCHEME                      :   "", // CHAR (6) ALPHA=ALPHA IS-H: Insurance Contract Scheme
};

// BAPI1309EMPLOYER  IS-H BAPI Business Partner - Employer Data

// prettier-ignore
const EMPLOYER_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  EMPLOYER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Employer SU3=ABG
  COMMENT_EMPL                     :   "", // CHAR (50) IS-H: Comment on Employer
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  ACCDNT_INS                       :   "", // CHAR (10) ALPHA=ALPHA Reference to Responsible Workers' Compensation Association
};

// BAPI1309FEE  IS-H BAPI Business Partner - Fee Recipient Data

// prettier-ignore
const FEE_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  FEE_AUTHORIZATION                :   "", // CHAR (10) Fee Authorization
  BEGIN_FEE_AUTHORIZATION          :   "", // DATS (8) Start of Validity of Fee Authorization Assignment
  END_FEE_AUTHORIZATION            :   "", // DATS (8) End of Validity of Fee Authorization Assignment
  BEGIN_FEE_BLOCK                  :   "", // DATS (8) Start Date of Fee Block
  END_FEE_BLOCK                    :   "", // DATS (8) End Date of Fee Block
  EXT_PERSONNEL_NUMBER             :   "", // CHAR (20) External Personnel Number
  MAIN_VENDOR                      :   "", // CHAR (16) ALPHA=ALPHA Main Vendor SU3=LIF
  ENTRYDATE                        :   "", // DATS (8) Physician's Entry Date
  LEAVINGDATE                      :   "", // DATS (8) Physician's Leaving Date
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  AHV_NUMBER                       :   "", // CHAR (20) AHV Number
  USERFIELD1                       :   "", // CHAR (50) User Field 1
  USERFIELD2                       :   "", // CHAR (20) User Field 2
  USERFIELD3                       :   "", // CHAR (20) User Field 3
};

// BAPI1309FICUSTOMER  IS-H BAPI Business Partner FI Customer Data Return Data

// prettier-ignore
const FICUSTOMER_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  REF_CUST                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number of FI Customer SU3=KUN
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  ACCNT_GRP                        :   "", // CHAR (4) Customer Account Group SU3=KGD
  CONTROL_ACCOUNT                  :   "", // CHAR (10) ALPHA=ALPHA Reconciliation Account in General Ledger
  SORT_KEY                         :   "", // CHAR (3) Key for sorting according to assignment numbers
  PMNTTRMS                         :   "", // CHAR (4) Terms of Payment Key
  DUNN_PROC                        :   "", // CHAR (4) Dunning Procedure
};

// BAPI1309HOSPITAL  IS-H BAPI Business Partner - Hospital Data

// prettier-ignore
const HOSPITAL_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  HOSPITAL                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Identification of Hospital SU3=KRH
  COMMENT_HOSP                     :   "", // CHAR (50) IS-H: Comment on Hospital
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  HOSPITAL_TYPE                    :   "", // CHAR (2) ALPHA=ALPHA IS-H: Hospital Type / Category
  SIRET                            :   "", // CHAR (14) SIRET Number
};

// BAPI1309INS_PROVIDER  IS-H BAPI Business Partner - Insurance Provider Data

// prettier-ignore
const INSPROVIDER_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  INS_PROVIDER                     :   "", // CHAR (10) ALPHA=ALPHA IS-H: Insurance Provider SU3=KOT
  GRP_IND                          :   "", // CHAR (1) IS-H: Indicator Denoting Insurance Provider Group
  IPTYPE                           :   "", // CHAR (3) ALPHA=ALPHA IS-H: Insurance Provider Type (e.g. Private, Statutory)
  IPT_CTRL                         :   "", // CHAR (1) IS-H: Determine IV Control Parameters Using Ins. Prov. Type
  HD_OFFICE                        :   "", // CHAR (10) ALPHA=ALPHA Key Identifying Insurance Provider's Head Office
  HI_COMPANY_NUMBER                :   "", // CHAR (12) ALPHA=ALPHA IS-H: Number Identifying the Health Insurer
  RESPONSIBLE_PPA                  :   "", // CHAR (10) ALPHA=ALPHA IS-H: Responsible PPA (panel physician association)
  HICNO_HCSC                       :   "", // CHAR (10) ALPHA=ALPHA IS-H: Health Insurer Number as per Healthcare Smart Card
  COMMENT_IP                       :   "", // CHAR (50) IS-H: Comment on Insurance Provider
  LONG_TEXT                        :   "", // CHAR (1) Indicator that Long Text Exists
  CPERS_INPATIENT                  :   "", // CHAR (30) Contact Person, e.g. Inpatient
  CPERS_OUTPATIENT                 :   "", // CHAR (30) Contact Person, e.g. Outpatient
  IV_PROCEDURE                     :   "", // CHAR (1) IS-H: Insurance Verification Procedure 'X'=Yes, ' '=No
  MANUALLY_INVOICE_PROC            :   "", // CHAR (1) IS-H: Manual Invoice Processing is Allowed
  INVOICE_LIST                     :   "", // CHAR (1) IS-H: Invoice List Output per IP at Invoice Print
  INTERIM_BILL                     :   "", // CHAR (1) IS-H: Ind. Specifying if Int. Bill. is to be Performed
  SORT_RULES                       :   "", // CHAR (2) IS-H: Sort Rules for Billing
  INTBILL_WO_IVC                   :   "", // CHAR (1) IS-H: Interim Billing for Svces w/o Confirmation of Coverage
  FINBILL_WO_IVC                   :   "", // CHAR (1) IS-H: Final Billing for Svces w/o Confirmation of Coverage
  FINBILL_DIAG                     :   "", // CHAR (1) IS-H: Final Billing only if Diagnosis Entered
  SEP_INVOICE                      :   "", // CHAR (1) IS-H: Separate Invoice for Companion
  INTBILL_DAYS                     :   "", // NUMC (3) IS-H: Interim Billing After x Days as of Admission
  INTBILL_INTERV                   :   "", // NUMC (3) IS-H: Interim Billing Interval (Weeks/Days/Quarter)
  FINBILL_INTERV                   :   "", // NUMC (3) IS-H: Final Billing Interval (Weekly, Every 2 Weeks,Monthly)
  IV_REMINDER                      :   "", // CHAR (1) IS-H: Insurance Verification Reminder; 'X'=Yes ' '=No
  REMINDER_PERIOD                  :   "", // NUMC (3) IS-H: Reminder Period for IV Request in Days
  IV_DISPATCH                      :   "", // CHAR (1) IS-H: Send IV Request Only if Diagnosis Is Maintained
  PRINT_DIAGN                      :   "", // CHAR (1) IS-H: Print Diagnosis on IV Request (Yes/No)
  ADMISSION_NOTIFIC                :   "", // CHAR (1) IS-H: Admission Notif. to Be Printed in Standard Form Print
  DISCHARGE_NOTIFIC                :   "", // CHAR (1) IS-H: Discharge Notification to Be Created
  EXTENSION_IVR                    :   "", // NUMC (3) IS-H: Interval for Extending IV Requests
  PERIOD_IVR                       :   "", // NUMC (3) IS-H: Interval for Creating IV Requests
  COPAYMENT_OBL                    :   "", // CHAR (1) IS-H: Insurance Provider Requires Copayment
  COPAYMENT_PROC                   :   "", // CHAR (1) IS-H: Copayment Procedure for Billing
  START_DAY                        :   "", // NUMC (2) IS-H: Start Day for Interval
  CURRENCY                         :   "", // CUKY (5) IS-H: Currency of Insurance Provider SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO Currency Code
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  TAX_CLASS                        :   "", // CHAR (1) IS-H: Tax Classification of Insurance Provider
  DATA_COLLECTION_POINT            :   "", // CHAR (10) Data Collection Point for EDI Message Transmission
  HO_NOT_RELEVANT                  :   "", // CHAR (1) IS-H:Head Office for HC Smart Card, not Relevant for Billing
  CORRESP_TO_HO                    :   "", // CHAR (1) IS-H: Head Office Valid for Forms
  SEARCHNAME                       :   "", // CHAR (60) IS-H: HI Search Name From Ins. Provider Master File (PPA)
  HIC_SNAME                        :   "", // CHAR (60) IS-H: Stnd. HI Search Name from Ins. Provider Master File
  IV_REJ_DEADLINE                  :   "", // NUMC (3) IS-H CH: Rejection deadline for insurance verification
  IV_PROC                          :   "", // CHAR (2) IS-H CH: IV procedure
  EANO                             :   "", // CHAR (13) IS-H CH: European Article Number (EAN)
  INVOICE_PRINT                    :   "", // CHAR (1) IS-H: Control for Invoice Print
  ZERO_BILL                        :   "", // CHAR (1) IS-H: Print Pro Forma Invoice
  TIERS_PAY                        :   "", // CHAR (1) No field text
  SOCIAL_INS                       :   "", // CHAR (1) IS-H: Indicator for Social Insurance
  PRIVATE_SIGN                     :   "", // CHAR (1) Institution Is Private
  COMPLEMENT_INS                   :   "", // CHAR (1) IS-H FR: Complementary Insurance
  INS_PROV_ELSASS                  :   "", // CHAR (1) IS-H FR: Insurance Provider ALSACE
  LIM_PAYDIST_OVER_VTYP            :   "", // CHAR (1) IS-H FR: Limit for Payment Distribution by Contract Scheme
  WITHOUT_FLAT_RATE                :   "", // CHAR (1) IS-H FR: Without Per Diem
  HEALTH_INS_SCHEME_TYP            :   "", // NUMC (2) IS-H FR: Health Insurer Type
  COUNCIL_GEN                      :   "", // CHAR (1) IS-H FR: General Council
};

// BAPI1309INS_PROVIDER_TYPE  IS-H Business Partner - Insurance Provider Type

// prettier-ignore
const IP_TYPE_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  IPTYPE                           :   "", // CHAR (3) ALPHA=ALPHA IS-H: Insurance Provider Type (e.g. Private, Statutory)
  SUBGR                            :   "", // CHAR (2) ALPHA=ALPHA IS-H: Insurance Subgroup
  BILL_TYPE                        :   "", // NUMC (1) IS-H: Classification of Billing Type According to PPA-BDT
  IV_PROCEDURE                     :   "", // CHAR (1) IS-H: Insurance Verification Procedure 'X'=Yes, ' '=No
  MANUALLY_INVOICE_PROC            :   "", // CHAR (1) IS-H: Manual Invoice Processing is Allowed
  INVOICE_LIST                     :   "", // CHAR (1) IS-H: Invoice List Output per IP at Invoice Print
  INTERIM_BILL                     :   "", // CHAR (1) IS-H: Ind. Specifying if Int. Bill. is to be Performed
  SORT_RULES                       :   "", // CHAR (2) IS-H: Sort Rules for Billing
  INTBILL_WO_IVC                   :   "", // CHAR (1) IS-H: Interim Billing for Svces w/o Confirmation of Coverage
  FINBILL_WO_IVC                   :   "", // CHAR (1) IS-H: Final Billing for Svces w/o Confirmation of Coverage
  FINBILL_DIAG                     :   "", // CHAR (1) IS-H: Final Billing only if Diagnosis Entered
  SEP_INVOICE                      :   "", // CHAR (1) IS-H: Separate Invoice for Companion
  INTBILL_DAYS                     :   "", // NUMC (3) IS-H: Interim Billing After x Days as of Admission
  INTBILL_INTERV                   :   "", // NUMC (3) IS-H: Interim Billing Interval (Weeks/Days/Quarter)
  FINBILL_INTERV                   :   "", // NUMC (3) IS-H: Final Billing Interval (Weekly, Every 2 Weeks,Monthly)
  IV_REMINDER                      :   "", // CHAR (1) IS-H: Insurance Verification Reminder; 'X'=Yes ' '=No
  REMINDER_PERIOD                  :   "", // NUMC (3) IS-H: Reminder Period for IV Request in Days
  IV_DISPATCH                      :   "", // CHAR (1) IS-H: Send IV Request Only if Diagnosis Is Maintained
  PRINT_DIAGN                      :   "", // CHAR (1) IS-H: Print Diagnosis on IV Request (Yes/No)
  ADMISSION_NOTIFIC                :   "", // CHAR (1) IS-H: Admission Notif. to Be Printed in Standard Form Print
  DISCHARGE_NOTIFIC                :   "", // CHAR (1) IS-H: Discharge Notification to Be Created
  EXTENSION_IVR                    :   "", // NUMC (3) IS-H: Interval for Extending IV Requests
  PERIOD_IVR                       :   "", // NUMC (3) IS-H: Interval for Creating IV Requests
  COPAYMENT_OBL                    :   "", // CHAR (1) IS-H: Insurance Provider Requires Copayment
  COPAYMENT_PROC                   :   "", // CHAR (1) IS-H: Copayment Procedure for Billing
  START_DAY                        :   "", // NUMC (2) IS-H: Start Day for Interval
  CHARGE_CAT                       :   "", // CHAR (1) IS-H: Charge Catalog (PPA billing Germany)
  IP_CATEGORY                      :   "", // CHAR (2) IS-H: Internal Insurance Provider Category
  IV_REJ_DEADLINE                  :   "", // NUMC (3) IS-H CH: Rejection deadline for insurance verification
  IV_PROC                          :   "", // CHAR (2) IS-H CH: IV procedure
  INVOICE_PRINT                    :   "", // CHAR (1) IS-H: Control for Invoice Print
  ZERO_BILL                        :   "", // CHAR (1) IS-H: Print Pro Forma Invoice
  SOCIAL_INS                       :   "", // CHAR (1) IS-H: Indicator for Social Insurance
  PRIVATE_SIGN                     :   "", // CHAR (1) Institution Is Private
};

// BAPI1309PERSON  IS-H BAPI Business Partner - Person Data

// prettier-ignore
const PERSON_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  DOB                              :   "", // DATS (8) IS-H: Birthdate
  PHONE                            :   "", // CHAR (16) IS-H: Extension Number
  EMPL_IND                         :   "", // CHAR (1) Is-H: Person is Employee
  HR_IND                           :   "", // CHAR (1) IS-H: Personal Data Originates in HR System
  EX_PER_NO                        :   "", // CHAR (10) ALPHA=ALPHA IS-H: External Personnel Number
  PHYS_IND                         :   "", // CHAR (1) IS-H: Indicator that Person Is Physician
  PHYS_NO                          :   "", // CHAR (12) IS-H: Identifier for a Physician
  NURSE_IND                        :   "", // CHAR (1) IS-H: Indicator that Person is Nurse
  EXT_PHYS_IND                     :   "", // CHAR (1) IS-H: Indicator that Person is External Physician
  ACCRED_IND                       :   "", // CHAR (1) IS-H: Physician Has External Accreditation
  ACCRED_ALLOW                     :   "", // CHAR (1) IS-H: Indicator that physician has internal accreditation
  COMMENT_PER                      :   "", // CHAR (50) IS-H: Comment on Person
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  SPECIALTY                        :   "", // CHAR (4) ALPHA=ALPHA Specialty
  SPEC_TYPE                        :   "", // CHAR (2) ALPHA=ALPHA IS-H: Specialist Type
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  RKDATE                           :   "", // DATS (8) Start of Validity for Rank of a Person
  OLD_RANK                         :   "", // CHAR (3) ALPHA=ALPHA IS-H: Prior Rank
  NIFNO                            :   "", // CHAR (12) IS-H CH: NIF number
  FIXKVNO                          :   "", // CHAR (7) No field text
  VOLUNTEER                        :   "", // CHAR (1) Indicates That Person Is Volunteer
  ZSR_NUM                          :   "", // CHAR (10) No field text
};
