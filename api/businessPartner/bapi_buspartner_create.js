//
// BAPI_BUSPARTNER_CREATE var: 14  struct: 16  table: 25  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

CLIENT                            :           "", // CLNT (3) Client
BPARTNER_CREATE                   :           {}, // BAPI1309BPARTIN Create Structure: General Business Partner
// BPARTNERID                     :        SPACE, // CHAR (10) ALPHA=ALPHA Business Partner Number (with External Number Assignment) SU3=NGP
// ROLE_CUST                      :        SPACE, // CHAR (1) Checkbox: Create Customer
// ROLE_EMPL                      :        SPACE, // CHAR (1) Checkbox: Create Employer
// ROLE_FEE                       :        SPACE, // CHAR (1) Checkbox: Create Fee Recipient
// ROLE_HOSP                      :        SPACE, // CHAR (1) Checkbox: Create Hospital
// ROLE_INS                       :        SPACE, // CHAR (1) Checkbox: Create Insurance Provider
// ROLE_PERS                      :        SPACE, // CHAR (1) Checkbox: Create Person (Physician/Employee)
// SAP_BPARTNERID                 :           "", // CHAR (10) ALPHA=ALPHA Business Partner Number SU3=BPA
// SAP_BPCATEGORY                 :           "", // CHAR (1) SAP Business Partner Category SU3=BPY
// SAP_BPGROUP                    :           "", // CHAR (4) SAP Business Partner Grouping SU3=BPP
// TESTRUN                        :        SPACE, // CHAR (1) Test Mode (No Changes in Database)
// TRANSACT_MODE                  :          'N', // CHAR (1) Transaction Mode for Number Assignment
// ADDRESS_CREATE                 :           {}, // BAPINADDR Create Structure: Address General Business Partner
// CUSTOMER_CREATE                :           {}, // BAPI1309CUSTIN Create Structure: Function "IS-H Customer"
// EMPLOYER_CREATE                :           {}, // BAPI1309EMPLIN Create Structure: Function "Employer"
// FEE_CREATE                     :           {}, // BAPI1309FEEIN Create Structure: Function "Fee Recipient"
// HOSPITAL_CREATE                :           {}, // BAPI1309HOSPIN Create Structure: Function "Hospital"
// INSPROVIDER_CREATE             :           {}, // BAPI1309INSPROVIN Create Structure: Function "Insurance Provider"
// PERSON_CREATE                  :           {}, // BAPI1309PERSIN Create Structure: Function "Person"

// TABLE PARAMETERS

// ADD_PHONE_CREATE               :           [], // BAPINADDR2 Additional Telephone Number(s) to Be Created
// ADD_PHONE_DATA                 :           [], // BAPINADDR2 Additional Telephone Numbers Created
// ASS_FEEB_CREATE                :           [], // BAPI1309FEEB Fee Recipient Authorization to Be Created
// ASS_FEEB_DATA                  :           [], // BAPI1309FEEB Fee Recipient Authorization Created
// ASS_FEEK_CREATE                :           [], // BAPI1309FEEK Fee Recipient Vendors to Be Created
// ASS_FEEK_DATA                  :           [], // BAPI1309FEEK Fee Recipient Vendors Created
// ASS_FEER_CREATE                :           [], // BAPI1309FEER Fee Recipient Ranks to Be Created
// ASS_FEER_DATA                  :           [], // BAPI1309FEER Fee Recipient Ranks Created
// ASS_INSPROVIDER_INSTITU_CREATE :           [], // BAPI1309INSPROV_INSTITUIN Institution-Dependent Insurance Provider Data to Be Created
// ASS_INSPROVIDER_INSTITU_DATA   :           [], // BAPI1309INSPROV_INSTITU Created Institution-Dependent Insurance Provider Data
// ASS_PER_KVPHYSNO_CREATE        :           [], // BAPI1309PERPHYSNO Person-HI Physician Number Assignment to Be Created
// ASS_PER_KVPHYSNO_DATA          :           [], // BAPI1309PERPHYSNO Created Person-HI Physician Number Assignment
// ASS_PER_NASHOSP_CREATE         :           [], // /ISHFR/BAPI1309NASHOSP Assigned Hospitals to Be Created
// ASS_PER_NASHOSP_DATA           :           [], // /ISHFR/BAPI1309NASHOSP Assigned Hospitals Created
// ASS_PER_QLDI_CREATE            :           [], // BAPI1309PERQLDI IS-H CH: Person-to-Qualitative Grade Asgmt to Be Created
// ASS_PER_QLDI_DATA              :           [], // BAPI1309PERQLDI IS-H CH: Created Person-to-Qualitative Grade Assignment
// ASS_PER_QTDI_CREATE            :           [], // BAPI1309PERQTDI IS-H CH: Person-to-Quantitative Grade Asgmt to Be Created
// ASS_PER_QTDI_DATA              :           [], // BAPI1309PERQTDI IS-H CH: Created Person-to-Quantitative Grade Assignment
// ASS_PER_SPEC_CREATE            :           [], // BAPI1309PERSPEC Person-to-Specialty Assignment to Be Created
// ASS_PER_SPEC_DATA              :           [], // BAPI1309PERSPEC Created Person-to-Specialty Assignment
// ASS_PER_USR_CREATE             :           [], // BAPI1309PERUSR Person-to-User Name Assignment to Be Created
// ASS_PER_USR_DATA               :           [], // BAPI1309PERUSR Created Person-to-User Name Assignment
// ASS_PER_WORKNO_CREATE          :           [], // BAPI1309PERWORKNO Person-Place of Work Number Assignment to Be Created
// ASS_PER_WORKNO_DATA            :           [], // BAPI1309PERWORKNO Created Person-Place of Work Number Assignment
// RETURN                         :           [], // BAPIRET2 Return Parameters

// EXPORT PARAMETERS

// WORST_RETURNED_MSGTY           :           "", // CHAR (1) IS-H: Most Severe Message Type Generated
// ADDRESS_DATA                   :           {}, // BAPINADDR Created Address
// BPARTNER_DATA                  :           {}, // BAPI1309BPARTNER Created General Business Partner
// CUSTOMER_DATA                  :           {}, // BAPI1309CUSTOMER Created IS-H Customer
// EMPLOYER_DATA                  :           {}, // BAPI1309EMPLOYER Created Employer
// FEE_DATA                       :           {}, // BAPI1309FEE Fee Recipient Created
// HOSPITAL_DATA                  :           {}, // BAPI1309HOSPITAL Created Hospital
// INSPROVIDER_DATA               :           {}, // BAPI1309INS_PROVIDER Created Insurance Provider
// PERSON_DATA                    :           {}, // BAPI1309PERSON Created Person
};

const result = await client.call("BAPI_BUSPARTNER_CREATE", parameters);

//
// IMPORT PARAMETERS
//

// BAPI1309BPARTIN  Create Structure: General Business Partner

// prettier-ignore
const BPARTNER_CREATE= {
  INSTITUTE_IND                    :   "", // CHAR (10) ALPHA=ALPHA IS-H: Institute Indicator
  LAST_NAME_BP                     :   "", // CHAR (35) IS-H: Last Name/ 1st Name SU3=NA1
  FRST_NAME_BP                     :   "", // CHAR (35) First Name / Second Name
  THIRD_NAME_BP                    :   "", // CHAR (35) Third Name
  SHORT_NAME_BP                    :   "", // CHAR (12) IS-H: Short Name of Business Partner
  PERSON_FLAG                      :   "", // CHAR (1) IS-H: Indicator for Natural Person (for Address Control)
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA IS-H: Language of Business Partner
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  FORM_ADDRS                       :   "", // CHAR (5) IS-H: Form-of-Address ID
  TITLE                            :   "", // CHAR (15) IS-H: Title
  AFFIX                            :   "", // CHAR (15) IS-H: Name Affix
  PREFIX                           :   "", // CHAR (15) IS-H: Name Prefix
  SEX                              :   "", // CHAR (1) IS-H: Sex Indicator - User-Specific
  COMMENT_BP                       :   "", // CHAR (50) IS-H: Comment on Business Partner
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  BLOCK_FROM                       :   "", // DATS (8) Blocking Date From (Entry Block)
  BLOCK_TO                         :   "", // DATS (8) IS-H: Blocking Date To (Entry Block To)
  BLCK_REAS                        :   "", // CHAR (50) Reason for Blocking
  PARTNER_NO                       :   "", // CHAR (15) IS-H: External Partner Number
  TAX_NO_1                         :   "", // CHAR (16) Tax Number 1
  PARTNER_GUID                     : bytes(), // RAW (16) IS-H: GUID of Business Partner
  TITLE1                           :   "", // CHAR (15) IS-H: Title
};

// BAPINADDR  Create Structure: Address General Business Partner

// prettier-ignore
const ADDRESS_CREATE= {
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

// BAPI1309CUSTIN  Create Structure: Function "IS-H Customer"

// prettier-ignore
const CUSTOMER_CREATE= {
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  REF_CUST                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number of FI Customer SU3=KUN
  COMMENT_CUST                     :   "", // CHAR (50) IS-H: Comment on Customer
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
};

// BAPI1309EMPLIN  Create Structure: Function "Employer"

// prettier-ignore
const EMPLOYER_CREATE= {
  COMMENT_EMPL                     :   "", // CHAR (50) IS-H: Comment on Employer
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  ACCDNT_INS                       :   "", // CHAR (10) ALPHA=ALPHA Reference to Responsible Workers' Compensation Association
};

// BAPI1309FEEIN  Create Structure: Function "Fee Recipient"

// prettier-ignore
const FEE_CREATE= {
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

// BAPI1309HOSPIN  Create Structure: Function "Hospital"

// prettier-ignore
const HOSPITAL_CREATE= {
  COMMENT_HOSP                     :   "", // CHAR (50) IS-H: Comment on Hospital
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  HOSPITAL_TYPE                    :   "", // CHAR (2) ALPHA=ALPHA IS-H: Hospital Type / Category
  SIRET                            :   "", // CHAR (14) SIRET Number
};

// BAPI1309INSPROVIN  Create Structure: Function "Insurance Provider"

// prettier-ignore
const INSPROVIDER_CREATE= {
  IPTYPE                           :   "", // CHAR (3) ALPHA=ALPHA IS-H: Insurance Provider Type (e.g. Private, Statutory)
  IPT_CTRL                         :   "", // CHAR (1) IS-H: Determine IV Control Parameters Using Ins. Prov. Type
  HD_OFFICE                        :   "", // CHAR (10) ALPHA=ALPHA Key Identifying Insurance Provider's Head Office
  HI_COMPANY_NUMBER                :   "", // CHAR (12) ALPHA=ALPHA IS-H: Number Identifying the Health Insurer
  RESPONSIBLE_PPA                  :   "", // CHAR (10) ALPHA=ALPHA IS-H: Responsible PPA (panel physician association)
  HICNO_HCSC                       :   "", // CHAR (10) ALPHA=ALPHA IS-H: Health Insurer Number as per Healthcare Smart Card
  COMMENT_IP                       :   "", // CHAR (50) IS-H: Comment on Insurance Provider
  CPERS_INPATIENT                  :   "", // CHAR (30) Contact Person, e.g. Inpatient
  CPERS_OUTPATIENT                 :   "", // CHAR (30) Contact Person, e.g. Outpatient
  IV_PROCEDURE                     :   "", // CHAR (1) IS-H: Insurance Verification Procedure 'X'=Yes, ' '=No
  MANUALLY_INVOICE_PROC            :   "", // CHAR (1) IS-H: Manual Invoice Processing is Allowed
  INVOICE_LIST                     :   "", // CHAR (1) IS-H: Invoice List Output per IP at Invoice Print
  INTERIM_BILL                     :   "", // CHAR (1) IS-H: Ind. Specifying if Int. Bill. is to be Performed
  INTBILL_WO_IVC                   :   "", // CHAR (1) IS-H: Interim Billing for Svces w/o Confirmation of Coverage
  FINBILL_WO_IVC                   :   "", // CHAR (1) IS-H: Final Billing for Svces w/o Confirmation of Coverage
  FINBILL_DIAG                     :   "", // CHAR (1) IS-H: Final Billing only if Diagnosis Entered
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
  CURRENCY                         :   "", // CUKY (5) IS-H: Currency of Insurance Provider SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO Currency Code
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  TAX_CLASS                        :   "", // CHAR (1) IS-H: Tax Classification of Insurance Provider
  HO_NOT_RELEVANT                  :   "", // CHAR (1) IS-H:Head Office for HC Smart Card, not Relevant for Billing
  CORRESP_TO_HO                    :   "", // CHAR (1) IS-H: Head Office Valid for Forms
  SEARCHNAME                       :   "", // CHAR (60) IS-H: HI Search Name From Ins. Provider Master File (PPA)
  INVOICE_PRINT                    :   "", // CHAR (1) IS-H: Control for Invoice Print
  ZERO_BILL                        :   "", // CHAR (1) IS-H: Print Pro Forma Invoice
  SOCIAL_INS                       :   "", // CHAR (1) IS-H: Indicator for Social Insurance
  TIERS_PAY                        :   "", // CHAR (1) No field text
  IV_PROC                          :   "", // CHAR (2) IS-H CH: IV procedure
  IV_REJ_DEADLINE                  :   "", // NUMC (3) IS-H CH: Rejection deadline for insurance verification
  EANO                             :   "", // CHAR (13) IS-H CH: European Article Number (EAN)
  PRIVATE_SIGN                     :   "", // CHAR (1) Institution Is Private
  COMPLEMENT_INS                   :   "", // CHAR (1) IS-H FR: Complementary Insurance
  INS_PROV_ELSASS                  :   "", // CHAR (1) IS-H FR: Insurance Provider ALSACE
  LIM_PAYDIST_OVER_VTYP            :   "", // CHAR (1) IS-H FR: Limit for Payment Distribution by Contract Scheme
  WITHOUT_FLAT_RATE                :   "", // CHAR (1) IS-H FR: Without Per Diem
  HEALTH_INS_SCHEME_TYP            :   "", // NUMC (2) IS-H FR: Health Insurer Type
  COUNCIL_GEN                      :   "", // CHAR (1) IS-H FR: General Council
};

// BAPI1309PERSIN  Create Structure: Function "Person"

// prettier-ignore
const PERSON_CREATE= {
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
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  SPEC_TYPE                        :   "", // CHAR (2) ALPHA=ALPHA IS-H: Specialist Type
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  RKDATE                           :   "", // DATS (8) Start of Validity for Rank of a Person
  FIXKVNO                          :   "", // CHAR (7) No field text
  VOLUNTEER                        :   "", // CHAR (1) Indicates That Person Is Volunteer
  ZSR_NUM                          :   "", // CHAR (10) No field text
};


//
// TABLE PARAMETERS
//

// BAPINADDR2  Additional Telephone Number(s) to Be Created
const ADD_PHONE_CREATE= [];

// prettier-ignore
const ADD_PHONE_CREATE= {
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA IS-H: Address Number
  SEQ_NO                           :   "", // NUMC (3) IS-H: Sequence Number of Telephone Number
  PHONENO                          :   "", // CHAR (30) IS-H: Telephone Number
  EXTENSION                        :   "", // CHAR (10) Telephone Number - Extension
};

// BAPINADDR2  Additional Telephone Numbers Created
const ADD_PHONE_DATA= [];

// prettier-ignore
const ADD_PHONE_DATA= {
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA IS-H: Address Number
  SEQ_NO                           :   "", // NUMC (3) IS-H: Sequence Number of Telephone Number
  PHONENO                          :   "", // CHAR (30) IS-H: Telephone Number
  EXTENSION                        :   "", // CHAR (10) Telephone Number - Extension
};

// BAPI1309FEEB  Fee Recipient Authorization to Be Created
const ASS_FEEB_CREATE= [];

// prettier-ignore
const ASS_FEEB_CREATE= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  FEE_AUTHORIZATION                :   "", // CHAR (10) Fee Authorization
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309FEEB  Fee Recipient Authorization Created
const ASS_FEEB_DATA= [];

// prettier-ignore
const ASS_FEEB_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  FEE_AUTHORIZATION                :   "", // CHAR (10) Fee Authorization
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309FEEK  Fee Recipient Vendors to Be Created
const ASS_FEEK_CREATE= [];

// prettier-ignore
const ASS_FEEK_CREATE= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  MAIN_VENDOR                      :   "", // CHAR (16) ALPHA=ALPHA Main Vendor SU3=LIF
};

// BAPI1309FEEK  Fee Recipient Vendors Created
const ASS_FEEK_DATA= [];

// prettier-ignore
const ASS_FEEK_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  MAIN_VENDOR                      :   "", // CHAR (16) ALPHA=ALPHA Main Vendor SU3=LIF
};

// BAPI1309FEER  Fee Recipient Ranks to Be Created
const ASS_FEER_CREATE= [];

// prettier-ignore
const ASS_FEER_CREATE= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309FEER  Fee Recipient Ranks Created
const ASS_FEER_DATA= [];

// prettier-ignore
const ASS_FEER_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309INSPROV_INSTITUIN  Institution-Dependent Insurance Provider Data to Be Created
const ASS_INSPROVIDER_INSTITU_CREATE= [];

// prettier-ignore
const ASS_INSPROVIDER_INSTITU_CREATE= {
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  COPAYMENT_PROC                   :   "", // CHAR (1) IS-H: Copayment Procedure for Billing
};

// BAPI1309INSPROV_INSTITU  Created Institution-Dependent Insurance Provider Data
const ASS_INSPROVIDER_INSTITU_DATA= [];

// prettier-ignore
const ASS_INSPROVIDER_INSTITU_DATA= {
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

// BAPI1309PERPHYSNO  Person-HI Physician Number Assignment to Be Created
const ASS_PER_KVPHYSNO_CREATE= [];

// prettier-ignore
const ASS_PER_KVPHYSNO_CREATE= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  KVPHYSNO                         :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309PERPHYSNO  Created Person-HI Physician Number Assignment
const ASS_PER_KVPHYSNO_DATA= [];

// prettier-ignore
const ASS_PER_KVPHYSNO_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  KVPHYSNO                         :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// /ISHFR/BAPI1309NASHOSP  Assigned Hospitals to Be Created
const ASS_PER_NASHOSP_CREATE= [];

// prettier-ignore
const ASS_PER_NASHOSP_CREATE= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  ASSIGNED_HOSPITAL                :   "", // CHAR (10) ALPHA=ALPHA Hospital Assigned
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// /ISHFR/BAPI1309NASHOSP  Assigned Hospitals Created
const ASS_PER_NASHOSP_DATA= [];

// prettier-ignore
const ASS_PER_NASHOSP_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  ASSIGNED_HOSPITAL                :   "", // CHAR (10) ALPHA=ALPHA Hospital Assigned
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309PERQLDI  IS-H CH: Person-to-Qualitative Grade Asgmt to Be Created
const ASS_PER_QLDI_CREATE= [];

// prettier-ignore
const ASS_PER_QLDI_CREATE= {
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

// BAPI1309PERQLDI  IS-H CH: Created Person-to-Qualitative Grade Assignment
const ASS_PER_QLDI_DATA= [];

// prettier-ignore
const ASS_PER_QLDI_DATA= {
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

// BAPI1309PERQTDI  IS-H CH: Person-to-Quantitative Grade Asgmt to Be Created
const ASS_PER_QTDI_CREATE= [];

// prettier-ignore
const ASS_PER_QTDI_CREATE= {
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

// BAPI1309PERQTDI  IS-H CH: Created Person-to-Quantitative Grade Assignment
const ASS_PER_QTDI_DATA= [];

// prettier-ignore
const ASS_PER_QTDI_DATA= {
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

// BAPI1309PERSPEC  Person-to-Specialty Assignment to Be Created
const ASS_PER_SPEC_CREATE= [];

// prettier-ignore
const ASS_PER_SPEC_CREATE= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  SPEC_CTGRY                       :   "", // CHAR (1) Category of Specialty Key
  SPECIALTY                        :   "", // CHAR (4) ALPHA=ALPHA Specialty
};

// BAPI1309PERSPEC  Created Person-to-Specialty Assignment
const ASS_PER_SPEC_DATA= [];

// prettier-ignore
const ASS_PER_SPEC_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  SPEC_CTGRY                       :   "", // CHAR (1) Category of Specialty Key
  SPECIALTY                        :   "", // CHAR (4) ALPHA=ALPHA Specialty
};

// BAPI1309PERUSR  Person-to-User Name Assignment to Be Created
const ASS_PER_USR_CREATE= [];

// prettier-ignore
const ASS_PER_USR_CREATE= {
  CLIENT                           :   "", // CLNT (3) Client
  BPARTNER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
  USER_NAME                        :   "", // CHAR (12) IS-H: Business Partner User
};

// BAPI1309PERUSR  Created Person-to-User Name Assignment
const ASS_PER_USR_DATA= [];

// prettier-ignore
const ASS_PER_USR_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  BPARTNER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
  USER_NAME                        :   "", // CHAR (12) IS-H: Business Partner User
};

// BAPI1309PERWORKNO  Person-Place of Work Number Assignment to Be Created
const ASS_PER_WORKNO_CREATE= [];

// prettier-ignore
const ASS_PER_WORKNO_CREATE= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  WORKNO                           :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309PERWORKNO  Created Person-Place of Work Number Assignment
const ASS_PER_WORKNO_DATA= [];

// prettier-ignore
const ASS_PER_WORKNO_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  WORKNO                           :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
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

// BAPINADDR  Created Address

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

// BAPI1309BPARTNER  Created General Business Partner

// prettier-ignore
const BPARTNER_DATA= {
  BPARTNER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
};

// BAPI1309CUSTOMER  Created IS-H Customer

// prettier-ignore
const CUSTOMER_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Customer (IS-H supplement) SU3=DEB
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  REF_CUST                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number of FI Customer SU3=KUN
  COMMENT_CUST                     :   "", // CHAR (50) IS-H: Comment on Customer
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
};

// BAPI1309EMPLOYER  Created Employer

// prettier-ignore
const EMPLOYER_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  EMPLOYER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Employer SU3=ABG
  COMMENT_EMPL                     :   "", // CHAR (50) IS-H: Comment on Employer
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  ACCDNT_INS                       :   "", // CHAR (10) ALPHA=ALPHA Reference to Responsible Workers' Compensation Association
};

// BAPI1309FEE  Fee Recipient Created

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

// BAPI1309HOSPITAL  Created Hospital

// prettier-ignore
const HOSPITAL_DATA= {
  CLIENT                           :   "", // CLNT (3) Client
  HOSPITAL                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Identification of Hospital SU3=KRH
  COMMENT_HOSP                     :   "", // CHAR (50) IS-H: Comment on Hospital
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  HOSPITAL_TYPE                    :   "", // CHAR (2) ALPHA=ALPHA IS-H: Hospital Type / Category
  SIRET                            :   "", // CHAR (14) SIRET Number
};

// BAPI1309INS_PROVIDER  Created Insurance Provider

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

// BAPI1309PERSON  Created Person

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
