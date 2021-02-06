//
// BAPI_BUSPARTNER_CHANGE var: 10  struct: 22  table: 46  exception: 0
//
// abap 1.4.0 at: 2021-02-05 20:16:36
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

BPARTNERID                       :           "", // CHAR (10) ALPHA=ALPHA Business Partner Number SU3=NGP
CLIENT                           :           "", // CLNT (3) Client
// ROLE_CUST                     :        SPACE, // CHAR (1) Checkbox: Change/Create Customer
// ROLE_EMPL                     :        SPACE, // CHAR (1) Checkbox: Change/Create Employer
// ROLE_FEE                      :        SPACE, // CHAR (1) Checkbox: Change/Create Fee Recipient
// ROLE_HOSP                     :        SPACE, // CHAR (1) Checkbox: Change/Create Hospital
// ROLE_INS                      :        SPACE, // CHAR (1) Checkbox: Change/Create Insurance Provider
// ROLE_PERS                     :        SPACE, // CHAR (1) Checkbox: Change/Create Person (Physician/Employee)
// TESTRUN                       :        SPACE, // CHAR (1) Test Mode (No Changes in Database)
// ADDRESS_X                     :           {}, // BAPINADDRX Change Structure: Address General Business Partner
// BPARTNER_X                    :           {}, // BAPI1309BPARTINX Change Structure: General Business Partner
// CUSTOMER_X                    :           {}, // BAPI1309CUSTINX Change Structure/Create Structure: Function "IS-H Customer"
// EMPLOYER_X                    :           {}, // BAPI1309EMPLINX Change Structure/Create Structure: Function "Employer"
// FEE_X                         :           {}, // BAPI1309FEEINX Change/Create Structure: Function "Fee Recipient"
// HOSPITAL_X                    :           {}, // BAPI1309HOSPINX Change Structure/Create Structure: Function "Hospital"
// INSPROVIDER_X                 :           {}, // BAPI1309INSPROVINX Change Structure/Create Structure: Function "Insurance Provider"
// PERSON_X                      :           {}, // BAPI1309PERSINX Change Structure/Create Structure: Function "Person"

// TABLE PARAMETERS

// ADD_PHONE_DDATA               :           [], // BAPINADDR2 Deleted Telephone Numbers
// ADD_PHONE_IDATA               :           [], // BAPINADDR2 Created Telephone Numbers
// ADD_PHONE_X                   :           [], // BAPI1309RNADR2X Change Data: Telephone Numbers
// ASS_FEEB_DDATA                :           [], // BAPI1309FEEB Fee Recipient Fee Authorizations Deleted
// ASS_FEEB_IDATA                :           [], // BAPI1309FEEB Fee Recipient Fee Authorizations Created
// ASS_FEEB_UDATA                :           [], // BAPI1309FEEB Fee Recipient Fee Authorizations Changed
// ASS_FEEB_X                    :           [], // BAPI1309FEEBX Change Data: Fee Recipient Fee Authorizations
// ASS_FEEK_DDATA                :           [], // BAPI1309FEEK Fee Recipient Vendors Deleted
// ASS_FEEK_IDATA                :           [], // BAPI1309FEEK Fee Recipient Vendors Created
// ASS_FEEK_UDATA                :           [], // BAPI1309FEEK Fee Recipient Vendors Changed
// ASS_FEEK_X                    :           [], // BAPI1309FEEKX Change Data: Fee Recipient Vendors
// ASS_FEER_DDATA                :           [], // BAPI1309FEER Fee Recipient Ranks Deleted
// ASS_FEER_IDATA                :           [], // BAPI1309FEER Fee Recipient Ranks Created
// ASS_FEER_UDATA                :           [], // BAPI1309FEER Fee Recipient Ranks Changed
// ASS_FEER_X                    :           [], // BAPI1309FEERX Change Data: Fee Recipient Ranks
// ASS_INSPROVIDER_INSTITU_DDATA :           [], // BAPI1309INSPROV_INSTITU Deleted Institution-Dependent Insurance Provider Data
// ASS_INSPROVIDER_INSTITU_IDATA :           [], // BAPI1309INSPROV_INSTITU Created Institution-Dependent Insurance Provider Data
// ASS_INSPROVIDER_INSTITU_UDATA :           [], // BAPI1309INSPROV_INSTITU Changed Institution-Dependent Insurance Provider Data
// ASS_INSPROVIDER_INSTITU_X     :           [], // BAPI1309INSPROV_INSTITU_X Change Data: Institution-Dependent Insurance Provider Data
// ASS_PER_KVPHYSNO_DDATA        :           [], // BAPI1309PERPHYSNO Deleted Person-HI Physician Number Assignment
// ASS_PER_KVPHYSNO_IDATA        :           [], // BAPI1309PERPHYSNO Created Person-HI Physician Number Assignment
// ASS_PER_KVPHYSNO_UDATA        :           [], // BAPI1309PERPHYSNO Changed Person-HI Physician Number Assignment
// ASS_PER_KVPHYSNO_X            :           [], // BAPI1309PERPHYSNOX Change Data: Change Structure for Person-HI Physician Number Assignment
// ASS_PER_NASHOSP_DDATA         :           [], // /ISHFR/BAPI1309NASHOSP BAPI: Assigned Hospitals
// ASS_PER_NASHOSP_IDATA         :           [], // /ISHFR/BAPI1309NASHOSP BAPI: Assigned Hospitals
// ASS_PER_NASHOSP_UDATA         :           [], // /ISHFR/BAPI1309NASHOSP BAPI: Assigned Hospitals
// ASS_PER_NASHOSP_X             :           [], // /ISHFR/BAPI1309NASHOSPX BAPI: Assigned Hospitals - Change Structure
// ASS_PER_QLDI_DDATA            :           [], // BAPI1309PERQLDI Deleted Person-to-Qualitative Grade Assignment
// ASS_PER_QLDI_IDATA            :           [], // BAPI1309PERQLDI Created Person-to-Qualitative Grade Assignment
// ASS_PER_QLDI_UDATA            :           [], // BAPI1309PERQLDI Changed Person-to-Qualitative Grade Assignment
// ASS_PER_QLDI_X                :           [], // BAPI1309PERQLDIX Change Data: Person-to-Qualitative Grade Asgmt
// ASS_PER_QTDI_DDATA            :           [], // BAPI1309PERQTDI Deleted Person-to-Quantitative Grade Assignment
// ASS_PER_QTDI_IDATA            :           [], // BAPI1309PERQTDI Created Person-to-Quantitative Grade Assignment
// ASS_PER_QTDI_UDATA            :           [], // BAPI1309PERQTDI Changed Person-to-Quantitative Grade Assignment
// ASS_PER_QTDI_X                :           [], // BAPI1309PERQTDIX Change Data: Person-to-Quantitative Grade Asgmt
// ASS_PER_SPEC_DDATA            :           [], // BAPI1309PERSPEC Deleted Person-to-Specialty Assignment
// ASS_PER_SPEC_IDATA            :           [], // BAPI1309PERSPEC Created Person-to-Specialty Assignment
// ASS_PER_SPEC_X                :           [], // BAPI1309PERSPECX Change Date: Person-to-Specialty Assignment
// ASS_PER_USR_DDATA             :           [], // BAPI1309PERUSR Deleted Person-to-User Name Assignment
// ASS_PER_USR_IDATA             :           [], // BAPI1309PERUSR Created Person-to-User Name Assignment
// ASS_PER_USR_X                 :           [], // BAPI1309PERUSRX Change Data: Person-to-User Name Assignment
// ASS_PER_WORKNO_DDATA          :           [], // BAPI1309PERWORKNO Deleted Person-Place of Work Number Assignment
// ASS_PER_WORKNO_IDATA          :           [], // BAPI1309PERWORKNO Created Person-Place of Work Number Assignment
// ASS_PER_WORKNO_UDATA          :           [], // BAPI1309PERWORKNO Changed Person-Place of Work Number Assignment
// ASS_PER_WORKNO_X              :           [], // BAPI1309PERWORKNOX Change Data: Person-Place of Work Number Assignment
// RETURN                        :           [], // BAPIRET2 Return Parameters

// EXPORT PARAMETERS

// WORST_RETURNED_MSGTY          :           "", // CHAR (1) IS-H: Most Severe Message Type Generated
// ADDRESS_CDATA                 :           {}, // BAPINADDR Changed Address
// BPARTNER_CDATA                :           {}, // BAPI1309BPARTNER Changed General Business Partner
// CUSTOMER_CDATA                :           {}, // BAPI1309CUSTOMER Changed IS-H Customer
// CUSTOMER_IDATA                :           {}, // BAPI1309CUSTOMER Created IS-H Customer
// EMPLOYER_CDATA                :           {}, // BAPI1309EMPLOYER Changed Employer
// EMPLOYER_IDATA                :           {}, // BAPI1309EMPLOYER Created Employer
// FEE_CDATA                     :           {}, // BAPI1309FEE Fee Recipient Changed
// FEE_IDATA                     :           {}, // BAPI1309FEE Fee Recipient Created
// HOSPITAL_CDATA                :           {}, // BAPI1309HOSPITAL Changed Hospital
// HOSPITAL_IDATA                :           {}, // BAPI1309HOSPITAL Created Hospital
// INSPROVIDER_CDATA             :           {}, // BAPI1309INS_PROVIDER Changed Insurance Provider
// INSPROVIDER_IDATA             :           {}, // BAPI1309INS_PROVIDER Created Insurance Provider
// PERSON_CDATA                  :           {}, // BAPI1309PERSON Changed Person
// PERSON_IDATA                  :           {}, // BAPI1309PERSON Created Person
};

const result = await client.call("BAPI_BUSPARTNER_CHANGE", parameters);

//
// IMPORT PARAMETERS
//

// BAPINADDRX  Change Structure: Address General Business Partner

// prettier-ignore
const ADDRESS_X= {
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA IS-H: Address Number
  COUNTRY                          :   "", // CHAR (3) IS-H: Country
  COUNTRYX                         :   "", // CHAR (1) Updated information in related user data field
  COUNTRY_ISO                      :   "", // CHAR (2) Country ISO code
  REGION                           :   "", // CHAR (3) IS-H: Region (Federal State, Province, County)
  REGIONX                          :   "", // CHAR (1) Updated information in related user data field
  PCD                              :   "", // CHAR (10) IS-H: Postal Code of City
  PCDX                             :   "", // CHAR (1) Updated information in related user data field
  CITY                             :   "", // CHAR (40) IS-H: City
  CITYX                            :   "", // CHAR (1) Updated information in related user data field
  STD_CITY                         :   "", // CHAR (40) Standardized City Name
  DISTRICT                         :   "", // CHAR (40) IS-H: District
  DISTRICTX                        :   "", // CHAR (1) Updated information in related user data field
  STR_NO                           :   "", // CHAR (40) IS-H: Street
  STR_NOX                          :   "", // CHAR (1) Updated information in related user data field
  STR_SUP                          :   "", // CHAR (40) IS-H: Other Designation Qualifying the Address
  STR_SUPX                         :   "", // CHAR (1) Updated information in related user data field
  GEOGR_AREA                       :   "", // CHAR (9) IS-H: Geographical Area
  GEOGR_AREAX                      :   "", // CHAR (1) Updated information in related user data field
  POBOX_PCD                        :   "", // CHAR (10) IS-H: Postal Code of P.O. Box
  POBOX_PCDX                       :   "", // CHAR (1) Updated information in related user data field
  POBOX                            :   "", // CHAR (10) IS-H: Post Office Box
  POBOXX                           :   "", // CHAR (1) Updated information in related user data field
  POB_COUNTRY                      :   "", // CHAR (3) Country of Post Office Box
  POB_COUNTRYX                     :   "", // CHAR (1) Updated information in related user data field
  POB_COUNTRY_ISO                  :   "", // CHAR (2) Country ISO code
  POBOX_CITY                       :   "", // CHAR (40) IS-H: PO Box City
  POBOX_CITYX                      :   "", // CHAR (1) Updated information in related user data field
  COMPANY_PCD                      :   "", // CHAR (10) IS-H: Postal Code of Company (for Major Accounts)
  COMPANY_PCDX                     :   "", // CHAR (1) Updated information in related user data field
  PHONESX                          :   "", // CHAR (1) Updated information in related user data field
  FAXNO                            :   "", // CHAR (30) Fax Number
  FAXNOX                           :   "", // CHAR (1) Updated information in related user data field
  FAXEXTENSION                     :   "", // CHAR (10) IS-H: Fax Number - Extension
  FAXEXTENSIONX                    :   "", // CHAR (1) Updated information in related user data field
  TELEXNO                          :   "", // CHAR (30) IS-H: Telex Number
  TELEXNOX                         :   "", // CHAR (1) Updated information in related user data field
  BUILDING                         :   "", // CHAR (10) IS-H: Block/House
  BUILDINGX                        :   "", // CHAR (1) Updated information in related user data field
  FLOOR                            :   "", // CHAR (10) IS-H: Block/House Level
  FLOORX                           :   "", // CHAR (1) Updated information in related user data field
  UNIT                             :   "", // CHAR (10) IS-H: Unit Number
  UNITX                            :   "", // CHAR (1) Updated information in related user data field
  E_MAIL                           :   "", // CHAR (241) ALPHA=SXIDN IS-H: Internet Mail (SMTP) Address
  E_MAILX                          :   "", // CHAR (1) Updated information in related user data field
  HOUSE_NO                         :   "", // CHAR (10) House Number
  HOUSE_NOX                        :   "", // CHAR (1) Updated information in related user data field
  STREET_LONG                      :   "", // CHAR (60) Street
  STREET_LONGX                     :   "", // CHAR (1) Updated information in related user data field
  STR_SUPPL1                       :   "", // CHAR (40) Supplement 2
  STR_SUPPL1X                      :   "", // CHAR (1) Updated information in related user data field
  C_O_NAME                         :   "", // CHAR (40) c/o Name
  C_O_NAMEX                        :   "", // CHAR (1) Updated information in related user data field
  DEFLT_COMM                       :   "", // CHAR (3) Standard Communication Type
  DEFLT_COMMX                      :   "", // CHAR (1) Updated information in related user data field
};

// BAPI1309BPARTINX  Change Structure: General Business Partner

// prettier-ignore
const BPARTNER_X= {
  INSTITUTE_IND                    :   "", // CHAR (10) ALPHA=ALPHA IS-H: Institute Indicator
  INSTITUTE_INDX                   :   "", // CHAR (1) Updated information in related user data field
  LAST_NAME_BP                     :   "", // CHAR (35) IS-H: Last Name/ 1st Name SU3=NA1
  LAST_NAME_BPX                    :   "", // CHAR (1) Updated information in related user data field
  FRST_NAME_BP                     :   "", // CHAR (35) First Name / Second Name
  FRST_NAME_BPX                    :   "", // CHAR (1) Updated information in related user data field
  THIRD_NAME_BP                    :   "", // CHAR (35) Third Name
  THIRD_NAME_BPX                   :   "", // CHAR (1) Updated information in related user data field
  PERSON_FLAG                      :   "", // CHAR (1) IS-H: Indicator for Natural Person (for Address Control)
  PERSON_FLAGX                     :   "", // CHAR (1) Updated information in related user data field
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA IS-H: Language of Business Partner
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  LANGUX                           :   "", // CHAR (1) Updated information in related user data field
  FORM_ADDRS                       :   "", // CHAR (5) IS-H: Form-of-Address ID
  FORM_ADDRSX                      :   "", // CHAR (1) Updated information in related user data field
  TITLE                            :   "", // CHAR (15) IS-H: Title
  TITLEX                           :   "", // CHAR (1) Updated information in related user data field
  AFFIX                            :   "", // CHAR (15) IS-H: Name Affix
  AFFIXX                           :   "", // CHAR (1) Updated information in related user data field
  PREFIX                           :   "", // CHAR (15) IS-H: Name Prefix
  PREFIXX                          :   "", // CHAR (1) Updated information in related user data field
  SEX                              :   "", // CHAR (1) IS-H: Sex Indicator - User-Specific
  SEXX                             :   "", // CHAR (1) Updated information in related user data field
  COMMENT_BP                       :   "", // CHAR (50) IS-H: Comment on Business Partner
  COMMENT_BPX                      :   "", // CHAR (1) Updated information in related user data field
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  DELETION_INDX                    :   "", // CHAR (1) Updated information in related user data field
  BLOCK_FROM                       :   "", // DATS (8) Blocking Date From (Entry Block)
  BLOCK_FROMX                      :   "", // CHAR (1) Updated information in related user data field
  BLOCK_TO                         :   "", // DATS (8) IS-H: Blocking Date To (Entry Block To)
  BLOCK_TOX                        :   "", // CHAR (1) Updated information in related user data field
  BLCK_REAS                        :   "", // CHAR (50) Reason for Blocking
  BLCK_REASX                       :   "", // CHAR (1) Updated information in related user data field
  PARTNER_NO                       :   "", // CHAR (15) IS-H: External Partner Number
  PARTNER_NOX                      :   "", // CHAR (1) Updated information in related user data field
  TAX_NO_1                         :   "", // CHAR (16) Tax Number 1
  TAX_NO_1X                        :   "", // CHAR (1) Updated information in related user data field
  TITLE1                           :   "", // CHAR (15) IS-H: Title
  TITLE1X                          :   "", // CHAR (1) Updated information in related user data field
  SHORT_NAME_BP                    :   "", // CHAR (12) IS-H: Short Name of Business Partner
  SHORT_NAME_BPX                   :   "", // CHAR (1) Updated information in related user data field
};

// BAPI1309CUSTINX  Change Structure/Create Structure: Function "IS-H Customer"

// prettier-ignore
const CUSTOMER_X= {
  REF_CUST                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number of FI Customer SU3=KUN
  REF_CUSTX                        :   "", // CHAR (1) Updated information in related user data field
  COMMENT_CUST                     :   "", // CHAR (50) IS-H: Comment on Customer
  COMMENT_CUSTX                    :   "", // CHAR (1) Updated information in related user data field
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  DELETION_INDX                    :   "", // CHAR (1) Updated information in related user data field
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
};

// BAPI1309EMPLINX  Change Structure/Create Structure: Function "Employer"

// prettier-ignore
const EMPLOYER_X= {
  COMMENT_EMPL                     :   "", // CHAR (50) IS-H: Comment on Employer
  COMMENT_EMPLX                    :   "", // CHAR (1) Updated information in related user data field
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  DELETION_INDX                    :   "", // CHAR (1) Updated information in related user data field
  ACCDNT_INS                       :   "", // CHAR (10) ALPHA=ALPHA Reference to Responsible Workers' Compensation Association
  ACCDNT_INSX                      :   "", // CHAR (1) Updated information in related user data field
};

// BAPI1309FEEINX  Change/Create Structure: Function "Fee Recipient"

// prettier-ignore
const FEE_X= {
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  RANKX                            :   "", // CHAR (1) Updated information in related user data field
  FEE_AUTHORIZATION                :   "", // CHAR (10) Fee Authorization
  FEE_AUTHORIZATIONX               :   "", // CHAR (1) Updated information in related user data field
  BEGIN_FEE_AUTHORIZATION          :   "", // DATS (8) Start of Validity of Fee Authorization Assignment
  BEGIN_FEE_AUTHORIZATIONX         :   "", // CHAR (1) Updated information in related user data field
  END_FEE_AUTHORIZATION            :   "", // DATS (8) End of Validity of Fee Authorization Assignment
  END_FEE_AUTHORIZATIONX           :   "", // CHAR (1) Updated information in related user data field
  BEGIN_FEE_BLOCK                  :   "", // DATS (8) Start Date of Fee Block
  BEGIN_FEE_BLOCKX                 :   "", // CHAR (1) Updated information in related user data field
  END_FEE_BLOCK                    :   "", // DATS (8) End Date of Fee Block
  END_FEE_BLOCKX                   :   "", // CHAR (1) Updated information in related user data field
  EXT_PERSONNEL_NUMBER             :   "", // CHAR (20) External Personnel Number
  EXT_PERSONNEL_NUMBERX            :   "", // CHAR (1) Updated information in related user data field
  MAIN_VENDOR                      :   "", // CHAR (16) ALPHA=ALPHA Main Vendor SU3=LIF
  MAIN_VENDORX                     :   "", // CHAR (1) Updated information in related user data field
  ENTRYDATE                        :   "", // DATS (8) Physician's Entry Date
  ENTRYDATEX                       :   "", // CHAR (1) Updated information in related user data field
  LEAVINGDATE                      :   "", // DATS (8) Physician's Leaving Date
  LEAVINGDATEX                     :   "", // CHAR (1) Updated information in related user data field
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  DELETION_INDX                    :   "", // CHAR (1) Updated information in related user data field
  AHV_NUMBER                       :   "", // CHAR (20) AHV Number
  AHV_NUMBERX                      :   "", // CHAR (1) Updated information in related user data field
  USERFIELD1                       :   "", // CHAR (50) User Field 1
  USERFIELD1X                      :   "", // CHAR (1) Updated information in related user data field
  USERFIELD2                       :   "", // CHAR (20) User Field 2
  USERFIELD2X                      :   "", // CHAR (1) Updated information in related user data field
  USERFIELD3                       :   "", // CHAR (20) User Field 3
  USERFIELD3X                      :   "", // CHAR (1) Updated information in related user data field
};

// BAPI1309HOSPINX  Change Structure/Create Structure: Function "Hospital"

// prettier-ignore
const HOSPITAL_X= {
  COMMENT_HOSP                     :   "", // CHAR (50) IS-H: Comment on Hospital
  COMMENT_HOSPX                    :   "", // CHAR (1) Updated information in related user data field
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  DELETION_INDX                    :   "", // CHAR (1) Updated information in related user data field
  HOSPITAL_TYPE                    :   "", // CHAR (2) ALPHA=ALPHA IS-H: Hospital Type / Category
  HOSPITAL_TYPEX                   :   "", // CHAR (1) Updated information in related user data field
  SIRET                            :   "", // CHAR (14) SIRET Number
  SIRETX                           :   "", // CHAR (1) Updated information in related user data field
};

// BAPI1309INSPROVINX  Change Structure/Create Structure: Function "Insurance Provider"

// prettier-ignore
const INSPROVIDER_X= {
  IPTYPE                           :   "", // CHAR (3) ALPHA=ALPHA IS-H: Insurance Provider Type (e.g. Private, Statutory)
  IPTYPEX                          :   "", // CHAR (1) Updated information in related user data field
  IPT_CTRL                         :   "", // CHAR (1) IS-H: Determine IV Control Parameters Using Ins. Prov. Type
  IPT_CTRLX                        :   "", // CHAR (1) Updated information in related user data field
  HD_OFFICE                        :   "", // CHAR (10) ALPHA=ALPHA Key Identifying Insurance Provider's Head Office
  HD_OFFICEX                       :   "", // CHAR (1) Updated information in related user data field
  HI_COMPANY_NUMBER                :   "", // CHAR (12) ALPHA=ALPHA IS-H: Number Identifying the Health Insurer
  HI_COMPANY_NUMBERX               :   "", // CHAR (1) Updated information in related user data field
  RESPONSIBLE_PPA                  :   "", // CHAR (10) ALPHA=ALPHA IS-H: Responsible PPA (panel physician association)
  RESPONSIBLE_PPAX                 :   "", // CHAR (1) Updated information in related user data field
  HICNO_HCSC                       :   "", // CHAR (10) ALPHA=ALPHA IS-H: Health Insurer Number as per Healthcare Smart Card
  HICNO_HCSCX                      :   "", // CHAR (1) Updated information in related user data field
  COMMENT_IP                       :   "", // CHAR (50) IS-H: Comment on Insurance Provider
  COMMENT_IPX                      :   "", // CHAR (1) Updated information in related user data field
  CPERS_INPATIENT                  :   "", // CHAR (30) Contact Person, e.g. Inpatient
  CPERS_INPATIENTX                 :   "", // CHAR (1) Updated information in related user data field
  CPERS_OUTPATIENT                 :   "", // CHAR (30) Contact Person, e.g. Outpatient
  CPERS_OUTPATIENTX                :   "", // CHAR (1) Updated information in related user data field
  IV_PROCEDURE                     :   "", // CHAR (1) IS-H: Insurance Verification Procedure 'X'=Yes, ' '=No
  IV_PROCEDUREX                    :   "", // CHAR (1) Updated information in related user data field
  MANUALLY_INVOICE_PROC            :   "", // CHAR (1) IS-H: Manual Invoice Processing is Allowed
  MANUALLY_INVOICE_PROCX           :   "", // CHAR (1) Updated information in related user data field
  INVOICE_LIST                     :   "", // CHAR (1) IS-H: Invoice List Output per IP at Invoice Print
  INVOICE_LISTX                    :   "", // CHAR (1) Updated information in related user data field
  INTERIM_BILL                     :   "", // CHAR (1) IS-H: Ind. Specifying if Int. Bill. is to be Performed
  INTERIM_BILLX                    :   "", // CHAR (1) Updated information in related user data field
  INTBILL_WO_IVC                   :   "", // CHAR (1) IS-H: Interim Billing for Svces w/o Confirmation of Coverage
  INTBILL_WO_IVCX                  :   "", // CHAR (1) Updated information in related user data field
  FINBILL_WO_IVC                   :   "", // CHAR (1) IS-H: Final Billing for Svces w/o Confirmation of Coverage
  FINBILL_WO_IVCX                  :   "", // CHAR (1) Updated information in related user data field
  FINBILL_DIAG                     :   "", // CHAR (1) IS-H: Final Billing only if Diagnosis Entered
  FINBILL_DIAGX                    :   "", // CHAR (1) Updated information in related user data field
  INTBILL_DAYS                     :   "", // NUMC (3) IS-H: Interim Billing After x Days as of Admission
  INTBILL_DAYSX                    :   "", // CHAR (1) Updated information in related user data field
  INTBILL_INTERV                   :   "", // NUMC (3) IS-H: Interim Billing Interval (Weeks/Days/Quarter)
  INTBILL_INTERVX                  :   "", // CHAR (1) Updated information in related user data field
  FINBILL_INTERV                   :   "", // NUMC (3) IS-H: Final Billing Interval (Weekly, Every 2 Weeks,Monthly)
  FINBILL_INTERVX                  :   "", // CHAR (1) Updated information in related user data field
  IV_REMINDER                      :   "", // CHAR (1) IS-H: Insurance Verification Reminder; 'X'=Yes ' '=No
  IV_REMINDERX                     :   "", // CHAR (1) Updated information in related user data field
  REMINDER_PERIOD                  :   "", // NUMC (3) IS-H: Reminder Period for IV Request in Days
  REMINDER_PERIODX                 :   "", // CHAR (1) Updated information in related user data field
  IV_DISPATCH                      :   "", // CHAR (1) IS-H: Send IV Request Only if Diagnosis Is Maintained
  IV_DISPATCHX                     :   "", // CHAR (1) Updated information in related user data field
  PRINT_DIAGN                      :   "", // CHAR (1) IS-H: Print Diagnosis on IV Request (Yes/No)
  PRINT_DIAGNX                     :   "", // CHAR (1) Updated information in related user data field
  ADMISSION_NOTIFIC                :   "", // CHAR (1) IS-H: Admission Notif. to Be Printed in Standard Form Print
  ADMISSION_NOTIFICX               :   "", // CHAR (1) Updated information in related user data field
  DISCHARGE_NOTIFIC                :   "", // CHAR (1) IS-H: Discharge Notification to Be Created
  DISCHARGE_NOTIFICX               :   "", // CHAR (1) Updated information in related user data field
  EXTENSION_IVR                    :   "", // NUMC (3) IS-H: Interval for Extending IV Requests
  EXTENSION_IVRX                   :   "", // CHAR (1) Updated information in related user data field
  PERIOD_IVR                       :   "", // NUMC (3) IS-H: Interval for Creating IV Requests
  PERIOD_IVRX                      :   "", // CHAR (1) Updated information in related user data field
  COPAYMENT_OBL                    :   "", // CHAR (1) IS-H: Insurance Provider Requires Copayment
  COPAYMENT_OBLX                   :   "", // CHAR (1) Updated information in related user data field
  COPAYMENT_PROC                   :   "", // CHAR (1) IS-H: Copayment Procedure for Billing
  COPAYMENT_PROCX                  :   "", // CHAR (1) Updated information in related user data field
  CURRENCY                         :   "", // CUKY (5) IS-H: Currency of Insurance Provider SU3=FWS
  CURRENCY_ISO                     :   "", // CHAR (3) ISO Currency Code
  CURRENCYX                        :   "", // CHAR (1) Updated information in related user data field
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  DELETION_INDX                    :   "", // CHAR (1) Updated information in related user data field
  TAX_CLASS                        :   "", // CHAR (1) IS-H: Tax Classification of Insurance Provider
  TAX_CLASSX                       :   "", // CHAR (1) Updated information in related user data field
  HO_NOT_RELEVANT                  :   "", // CHAR (1) IS-H:Head Office for HC Smart Card, not Relevant for Billing
  HO_NOT_RELEVANTX                 :   "", // CHAR (1) Updated information in related user data field
  CORRESP_TO_HO                    :   "", // CHAR (1) IS-H: Head Office Valid for Forms
  CORRESP_TO_HOX                   :   "", // CHAR (1) Updated information in related user data field
  SEARCHNAME                       :   "", // CHAR (60) IS-H: HI Search Name From Ins. Provider Master File (PPA)
  SEARCHNAMEX                      :   "", // CHAR (1) Updated information in related user data field
  INVOICE_PRINT                    :   "", // CHAR (1) IS-H: Control for Invoice Print
  INVOICE_PRINTX                   :   "", // CHAR (1) Updated information in related user data field
  ZERO_BILL                        :   "", // CHAR (1) IS-H: Print Pro Forma Invoice
  ZERO_BILLX                       :   "", // CHAR (1) Updated information in related user data field
  SOCIAL_INS                       :   "", // CHAR (1) IS-H: Indicator for Social Insurance
  SOCIAL_INSX                      :   "", // CHAR (1) Updated information in related user data field
  TIERS_PAY                        :   "", // CHAR (1) No field text
  TIERS_PAYX                       :   "", // CHAR (1) Updated information in related user data field
  IV_PROC                          :   "", // CHAR (2) IS-H CH: IV procedure
  IV_PROCX                         :   "", // CHAR (1) Updated information in related user data field
  IV_REJ_DEADLINE                  :   "", // NUMC (3) IS-H CH: Rejection deadline for insurance verification
  IV_REJ_DEADLINEX                 :   "", // CHAR (1) Updated information in related user data field
  EANO                             :   "", // CHAR (13) IS-H CH: European Article Number (EAN)
  EANOX                            :   "", // CHAR (1) Updated information in related user data field
  PRIVATE_SIGN                     :   "", // CHAR (1) Institution Is Private
  PRIVATE_SIGNX                    :   "", // CHAR (1) Updated information in related user data field
  COMPLEMENT_INS                   :   "", // CHAR (1) IS-H FR: Complementary Insurance
  COMPLEMENT_INSX                  :   "", // CHAR (1) Updated information in related user data field
  INS_PROV_ELSASS                  :   "", // CHAR (1) IS-H FR: Insurance Provider ALSACE
  INS_PROV_ELSASSX                 :   "", // CHAR (1) Updated information in related user data field
  LIM_PAYDIST_OVER_VTYP            :   "", // CHAR (1) IS-H FR: Limit for Payment Distribution by Contract Scheme
  LIM_PAYDIST_OVER_VTYPX           :   "", // CHAR (1) Updated information in related user data field
  WITHOUT_FLAT_RATE                :   "", // CHAR (1) IS-H FR: Without Per Diem
  WITHOUT_FLAT_RATEX               :   "", // CHAR (1) Updated information in related user data field
  HEALTH_INS_SCHEME_TYP            :   "", // NUMC (2) IS-H FR: Health Insurer Type
  HEALTH_INS_SCHEME_TYPX           :   "", // CHAR (1) Updated information in related user data field
  INSPROV_INSTITUX                 :   "", // CHAR (1) Updated information in related user data field
};

// BAPI1309PERSINX  Change Structure/Create Structure: Function "Person"

// prettier-ignore
const PERSON_X= {
  DOB                              :   "", // DATS (8) IS-H: Birthdate
  DOBX                             :   "", // CHAR (1) Updated information in related user data field
  PHONE                            :   "", // CHAR (16) IS-H: Extension Number
  PHONEX                           :   "", // CHAR (1) Updated information in related user data field
  EMPL_IND                         :   "", // CHAR (1) Is-H: Person is Employee
  EMPL_INDX                        :   "", // CHAR (1) Updated information in related user data field
  HR_IND                           :   "", // CHAR (1) IS-H: Personal Data Originates in HR System
  HR_INDX                          :   "", // CHAR (1) Updated information in related user data field
  EX_PER_NO                        :   "", // CHAR (10) ALPHA=ALPHA IS-H: External Personnel Number
  EX_PER_NOX                       :   "", // CHAR (1) Updated information in related user data field
  PHYS_IND                         :   "", // CHAR (1) IS-H: Indicator that Person Is Physician
  PHYS_INDX                        :   "", // CHAR (1) Updated information in related user data field
  PHYS_NO                          :   "", // CHAR (12) IS-H: Identifier for a Physician
  PHYS_NOX                         :   "", // CHAR (1) Updated information in related user data field
  NURSE_IND                        :   "", // CHAR (1) IS-H: Indicator that Person is Nurse
  NURSE_INDX                       :   "", // CHAR (1) Updated information in related user data field
  EXT_PHYS_IND                     :   "", // CHAR (1) IS-H: Indicator that Person is External Physician
  EXT_PHYS_INDX                    :   "", // CHAR (1) Updated information in related user data field
  ACCRED_IND                       :   "", // CHAR (1) IS-H: Physician Has External Accreditation
  ACCRED_INDX                      :   "", // CHAR (1) Updated information in related user data field
  ACCRED_ALLOW                     :   "", // CHAR (1) IS-H: Indicator that physician has internal accreditation
  ACCRED_ALLOWX                    :   "", // CHAR (1) Updated information in related user data field
  COMMENT_PER                      :   "", // CHAR (50) IS-H: Comment on Person
  COMMENT_PERX                     :   "", // CHAR (1) Updated information in related user data field
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  DELETION_INDX                    :   "", // CHAR (1) Updated information in related user data field
  SPEC_TYPE                        :   "", // CHAR (2) ALPHA=ALPHA IS-H: Specialist Type
  SPEC_TYPEX                       :   "", // CHAR (1) Updated information in related user data field
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  RANKX                            :   "", // CHAR (1) Updated information in related user data field
  RKDATE                           :   "", // DATS (8) Start of Validity for Rank of a Person
  RKDATEX                          :   "", // CHAR (1) Updated information in related user data field
  SPECIALTYX                       :   "", // CHAR (1) Updated information in related user data field
  USERX                            :   "", // CHAR (1) Updated information in related user data field
  QLDIX                            :   "", // CHAR (1) Updated information in related user data field
  QTDIX                            :   "", // CHAR (1) Updated information in related user data field
  KVPHYSNOX                        :   "", // CHAR (1) Updated information in related user data field
  WORKNOX                          :   "", // CHAR (1) Updated information in related user data field
  FIXKVNO                          :   "", // CHAR (7) No field text
  FIXKVNOX                         :   "", // CHAR (1) Updated information in related user data field
  VOLUNTEER                        :   "", // CHAR (1) Indicates That Person Is Volunteer
  VOLUNTEERX                       :   "", // CHAR (1) Updated information in related user data field
  NASHOSP_X                        :   "", // CHAR (1) Updated information in related user data field
  ZSR_NUM                          :   "", // CHAR (10) No field text
  ZSR_NUM_X                        :   "", // CHAR (1) Updated information in related user data field
};


//
// TABLE PARAMETERS
//

// BAPINADDR2  Deleted Telephone Numbers
const ADD_PHONE_DDATA= [];

// prettier-ignore
const ADD_PHONE_DDATA= {
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA IS-H: Address Number
  SEQ_NO                           :   "", // NUMC (3) IS-H: Sequence Number of Telephone Number
  PHONENO                          :   "", // CHAR (30) IS-H: Telephone Number
  EXTENSION                        :   "", // CHAR (10) Telephone Number - Extension
};

// BAPINADDR2  Created Telephone Numbers
const ADD_PHONE_IDATA= [];

// prettier-ignore
const ADD_PHONE_IDATA= {
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA IS-H: Address Number
  SEQ_NO                           :   "", // NUMC (3) IS-H: Sequence Number of Telephone Number
  PHONENO                          :   "", // CHAR (30) IS-H: Telephone Number
  EXTENSION                        :   "", // CHAR (10) Telephone Number - Extension
};

// BAPI1309RNADR2X  Change Data: Telephone Numbers
const ADD_PHONE_X= [];

// prettier-ignore
const ADD_PHONE_X= {
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
  PHONENO                          :   "", // CHAR (30) IS-H: Telephone Number
  EXTENSION                        :   "", // CHAR (10) Telephone Number - Extension
};

// BAPI1309FEEB  Fee Recipient Fee Authorizations Deleted
const ASS_FEEB_DDATA= [];

// prettier-ignore
const ASS_FEEB_DDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  FEE_AUTHORIZATION                :   "", // CHAR (10) Fee Authorization
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309FEEB  Fee Recipient Fee Authorizations Created
const ASS_FEEB_IDATA= [];

// prettier-ignore
const ASS_FEEB_IDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  FEE_AUTHORIZATION                :   "", // CHAR (10) Fee Authorization
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309FEEB  Fee Recipient Fee Authorizations Changed
const ASS_FEEB_UDATA= [];

// prettier-ignore
const ASS_FEEB_UDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  FEE_AUTHORIZATION                :   "", // CHAR (10) Fee Authorization
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309FEEBX  Change Data: Fee Recipient Fee Authorizations
const ASS_FEEB_X= [];

// prettier-ignore
const ASS_FEEB_X= {
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  FEE_AUTHORIZATION                :   "", // CHAR (10) Fee Authorization
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
  ENDDATEX                         :   "", // CHAR (1) Updated information in related user data field
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
};

// BAPI1309FEEK  Fee Recipient Vendors Deleted
const ASS_FEEK_DDATA= [];

// prettier-ignore
const ASS_FEEK_DDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  MAIN_VENDOR                      :   "", // CHAR (16) ALPHA=ALPHA Main Vendor SU3=LIF
};

// BAPI1309FEEK  Fee Recipient Vendors Created
const ASS_FEEK_IDATA= [];

// prettier-ignore
const ASS_FEEK_IDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  MAIN_VENDOR                      :   "", // CHAR (16) ALPHA=ALPHA Main Vendor SU3=LIF
};

// BAPI1309FEEK  Fee Recipient Vendors Changed
const ASS_FEEK_UDATA= [];

// prettier-ignore
const ASS_FEEK_UDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  MAIN_VENDOR                      :   "", // CHAR (16) ALPHA=ALPHA Main Vendor SU3=LIF
};

// BAPI1309FEEKX  Change Data: Fee Recipient Vendors
const ASS_FEEK_X= [];

// prettier-ignore
const ASS_FEEK_X= {
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  MAIN_VENDOR                      :   "", // CHAR (16) ALPHA=ALPHA Main Vendor SU3=LIF
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
};

// BAPI1309FEER  Fee Recipient Ranks Deleted
const ASS_FEER_DDATA= [];

// prettier-ignore
const ASS_FEER_DDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309FEER  Fee Recipient Ranks Created
const ASS_FEER_IDATA= [];

// prettier-ignore
const ASS_FEER_IDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309FEER  Fee Recipient Ranks Changed
const ASS_FEER_UDATA= [];

// prettier-ignore
const ASS_FEER_UDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309FEERX  Change Data: Fee Recipient Ranks
const ASS_FEER_X= [];

// prettier-ignore
const ASS_FEER_X= {
  PARTNER                          :   "", // CHAR (10) ALPHA=ALPHA Person Number
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  RANK                             :   "", // CHAR (3) ALPHA=ALPHA IS-H: Rank
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
  BEGDATEX                         :   "", // CHAR (1) Updated information in related user data field
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
};

// BAPI1309INSPROV_INSTITU  Deleted Institution-Dependent Insurance Provider Data
const ASS_INSPROVIDER_INSTITU_DDATA= [];

// prettier-ignore
const ASS_INSPROVIDER_INSTITU_DDATA= {
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

// BAPI1309INSPROV_INSTITU  Created Institution-Dependent Insurance Provider Data
const ASS_INSPROVIDER_INSTITU_IDATA= [];

// prettier-ignore
const ASS_INSPROVIDER_INSTITU_IDATA= {
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

// BAPI1309INSPROV_INSTITU  Changed Institution-Dependent Insurance Provider Data
const ASS_INSPROVIDER_INSTITU_UDATA= [];

// prettier-ignore
const ASS_INSPROVIDER_INSTITU_UDATA= {
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

// BAPI1309INSPROV_INSTITU_X  Change Data: Institution-Dependent Insurance Provider Data
const ASS_INSPROVIDER_INSTITU_X= [];

// prettier-ignore
const ASS_INSPROVIDER_INSTITU_X= {
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
  INSTITUTION                      :   "", // CHAR (4) ALPHA=ALPHA Institution SU3=EIN
  COPAYMENT_PROC                   :   "", // CHAR (1) IS-H: Copayment Procedure for Billing
  COPAYMENT_PROCX                  :   "", // CHAR (1) Updated information in related user data field
};

// BAPI1309PERPHYSNO  Deleted Person-HI Physician Number Assignment
const ASS_PER_KVPHYSNO_DDATA= [];

// prettier-ignore
const ASS_PER_KVPHYSNO_DDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  KVPHYSNO                         :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309PERPHYSNO  Created Person-HI Physician Number Assignment
const ASS_PER_KVPHYSNO_IDATA= [];

// prettier-ignore
const ASS_PER_KVPHYSNO_IDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  KVPHYSNO                         :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309PERPHYSNO  Changed Person-HI Physician Number Assignment
const ASS_PER_KVPHYSNO_UDATA= [];

// prettier-ignore
const ASS_PER_KVPHYSNO_UDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  KVPHYSNO                         :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309PERPHYSNOX  Change Data: Change Structure for Person-HI Physician Number Assignment
const ASS_PER_KVPHYSNO_X= [];

// prettier-ignore
const ASS_PER_KVPHYSNO_X= {
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
  KVPHYSNO                         :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  BEGDATEX                         :   "", // CHAR (1) Updated information in related user data field
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
  ENDDATEX                         :   "", // CHAR (1) Updated information in related user data field
};

// /ISHFR/BAPI1309NASHOSP  BAPI: Assigned Hospitals
const ASS_PER_NASHOSP_DDATA= [];

// prettier-ignore
const ASS_PER_NASHOSP_DDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  ASSIGNED_HOSPITAL                :   "", // CHAR (10) ALPHA=ALPHA Hospital Assigned
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// /ISHFR/BAPI1309NASHOSP  BAPI: Assigned Hospitals
const ASS_PER_NASHOSP_IDATA= [];

// prettier-ignore
const ASS_PER_NASHOSP_IDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  ASSIGNED_HOSPITAL                :   "", // CHAR (10) ALPHA=ALPHA Hospital Assigned
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// /ISHFR/BAPI1309NASHOSP  BAPI: Assigned Hospitals
const ASS_PER_NASHOSP_UDATA= [];

// prettier-ignore
const ASS_PER_NASHOSP_UDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  ASSIGNED_HOSPITAL                :   "", // CHAR (10) ALPHA=ALPHA Hospital Assigned
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// /ISHFR/BAPI1309NASHOSPX  BAPI: Assigned Hospitals - Change Structure
const ASS_PER_NASHOSP_X= [];

// prettier-ignore
const ASS_PER_NASHOSP_X= {
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  ASSIGNED_HOSPITAL                :   "", // CHAR (10) ALPHA=ALPHA Hospital Assigned
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  BEGDATEX                         :   "", // CHAR (1) Updated information in related user data field
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
  ENDDATEX                         :   "", // CHAR (1) Updated information in related user data field
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
};

// BAPI1309PERQLDI  Deleted Person-to-Qualitative Grade Assignment
const ASS_PER_QLDI_DDATA= [];

// prettier-ignore
const ASS_PER_QLDI_DDATA= {
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

// BAPI1309PERQLDI  Created Person-to-Qualitative Grade Assignment
const ASS_PER_QLDI_IDATA= [];

// prettier-ignore
const ASS_PER_QLDI_IDATA= {
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

// BAPI1309PERQLDI  Changed Person-to-Qualitative Grade Assignment
const ASS_PER_QLDI_UDATA= [];

// prettier-ignore
const ASS_PER_QLDI_UDATA= {
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

// BAPI1309PERQLDIX  Change Data: Person-to-Qualitative Grade Asgmt
const ASS_PER_QLDI_X= [];

// prettier-ignore
const ASS_PER_QLDI_X= {
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  QUAL_DIG                         :   "", // CHAR (4) IS-H CH: Qualitative Grade
  FROM_DATE                        :   "", // DATS (8) Start Date
  TO_DATE                          :   "", // DATS (8) End Date
  TO_DATEX                         :   "", // CHAR (1) Updated information in related user data field
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
};

// BAPI1309PERQTDI  Deleted Person-to-Quantitative Grade Assignment
const ASS_PER_QTDI_DDATA= [];

// prettier-ignore
const ASS_PER_QTDI_DDATA= {
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

// BAPI1309PERQTDI  Created Person-to-Quantitative Grade Assignment
const ASS_PER_QTDI_IDATA= [];

// prettier-ignore
const ASS_PER_QTDI_IDATA= {
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

// BAPI1309PERQTDI  Changed Person-to-Quantitative Grade Assignment
const ASS_PER_QTDI_UDATA= [];

// prettier-ignore
const ASS_PER_QTDI_UDATA= {
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

// BAPI1309PERQTDIX  Change Data: Person-to-Quantitative Grade Asgmt
const ASS_PER_QTDI_X= [];

// prettier-ignore
const ASS_PER_QTDI_X= {
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  QUNT_DIG                         :   "", // CHAR (5) No field text
  FROM_DATE                        :   "", // DATS (8) Start Date
  TO_DATE                          :   "", // DATS (8) End Date
  TO_DATEX                         :   "", // CHAR (1) Updated information in related user data field
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
};

// BAPI1309PERSPEC  Deleted Person-to-Specialty Assignment
const ASS_PER_SPEC_DDATA= [];

// prettier-ignore
const ASS_PER_SPEC_DDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  SPEC_CTGRY                       :   "", // CHAR (1) Category of Specialty Key
  SPECIALTY                        :   "", // CHAR (4) ALPHA=ALPHA Specialty
};

// BAPI1309PERSPEC  Created Person-to-Specialty Assignment
const ASS_PER_SPEC_IDATA= [];

// prettier-ignore
const ASS_PER_SPEC_IDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  SPEC_CTGRY                       :   "", // CHAR (1) Category of Specialty Key
  SPECIALTY                        :   "", // CHAR (4) ALPHA=ALPHA Specialty
};

// BAPI1309PERSPECX  Change Date: Person-to-Specialty Assignment
const ASS_PER_SPEC_X= [];

// prettier-ignore
const ASS_PER_SPEC_X= {
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
  SPECIALTY                        :   "", // CHAR (4) ALPHA=ALPHA Specialty
};

// BAPI1309PERUSR  Deleted Person-to-User Name Assignment
const ASS_PER_USR_DDATA= [];

// prettier-ignore
const ASS_PER_USR_DDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  BPARTNER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
  USER_NAME                        :   "", // CHAR (12) IS-H: Business Partner User
};

// BAPI1309PERUSR  Created Person-to-User Name Assignment
const ASS_PER_USR_IDATA= [];

// prettier-ignore
const ASS_PER_USR_IDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  BPARTNER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
  USER_NAME                        :   "", // CHAR (12) IS-H: Business Partner User
};

// BAPI1309PERUSRX  Change Data: Person-to-User Name Assignment
const ASS_PER_USR_X= [];

// prettier-ignore
const ASS_PER_USR_X= {
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
  USER_NAME                        :   "", // CHAR (12) IS-H: Business Partner User
};

// BAPI1309PERWORKNO  Deleted Person-Place of Work Number Assignment
const ASS_PER_WORKNO_DDATA= [];

// prettier-ignore
const ASS_PER_WORKNO_DDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  WORKNO                           :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309PERWORKNO  Created Person-Place of Work Number Assignment
const ASS_PER_WORKNO_IDATA= [];

// prettier-ignore
const ASS_PER_WORKNO_IDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  WORKNO                           :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309PERWORKNO  Changed Person-Place of Work Number Assignment
const ASS_PER_WORKNO_UDATA= [];

// prettier-ignore
const ASS_PER_WORKNO_UDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  PERSON                           :   "", // CHAR (10) ALPHA=ALPHA IS-H: Person Number SU3=NGP
  WORKNO                           :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
};

// BAPI1309PERWORKNOX  Change Data: Person-Place of Work Number Assignment
const ASS_PER_WORKNO_X= [];

// prettier-ignore
const ASS_PER_WORKNO_X= {
  ACTION                           :   "", // CHAR (1) IS-H: Action Type
  WORKNO                           :   "", // CHAR (9) No field text
  BEGDATE                          :   "", // DATS (8) IS-H: Valid-From Date of Record
  BEGDATEX                         :   "", // CHAR (1) Updated information in related user data field
  ENDDATE                          :   "", // DATS (8) IS-H: Valid-To Date of Record
  ENDDATEX                         :   "", // CHAR (1) Updated information in related user data field
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

// BAPINADDR  Changed Address

// prettier-ignore
const ADDRESS_CDATA= {
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

// BAPI1309BPARTNER  Changed General Business Partner

// prettier-ignore
const BPARTNER_CDATA= {
  BPARTNER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Business Partner SU3=NGP
};

// BAPI1309CUSTOMER  Changed IS-H Customer

// prettier-ignore
const CUSTOMER_CDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Customer (IS-H supplement) SU3=DEB
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  REF_CUST                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number of FI Customer SU3=KUN
  COMMENT_CUST                     :   "", // CHAR (50) IS-H: Comment on Customer
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
};

// BAPI1309CUSTOMER  Created IS-H Customer

// prettier-ignore
const CUSTOMER_IDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  CUSTOMER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Customer (IS-H supplement) SU3=DEB
  COMP_CODE                        :   "", // CHAR (4) Company Code SU3=BUK
  REF_CUST                         :   "", // CHAR (10) ALPHA=ALPHA Customer Number of FI Customer SU3=KUN
  COMMENT_CUST                     :   "", // CHAR (50) IS-H: Comment on Customer
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
};

// BAPI1309EMPLOYER  Changed Employer

// prettier-ignore
const EMPLOYER_CDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  EMPLOYER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Employer SU3=ABG
  COMMENT_EMPL                     :   "", // CHAR (50) IS-H: Comment on Employer
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  ACCDNT_INS                       :   "", // CHAR (10) ALPHA=ALPHA Reference to Responsible Workers' Compensation Association
};

// BAPI1309EMPLOYER  Created Employer

// prettier-ignore
const EMPLOYER_IDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  EMPLOYER                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Employer SU3=ABG
  COMMENT_EMPL                     :   "", // CHAR (50) IS-H: Comment on Employer
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  ACCDNT_INS                       :   "", // CHAR (10) ALPHA=ALPHA Reference to Responsible Workers' Compensation Association
};

// BAPI1309FEE  Fee Recipient Changed

// prettier-ignore
const FEE_CDATA= {
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

// BAPI1309FEE  Fee Recipient Created

// prettier-ignore
const FEE_IDATA= {
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

// BAPI1309HOSPITAL  Changed Hospital

// prettier-ignore
const HOSPITAL_CDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  HOSPITAL                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Identification of Hospital SU3=KRH
  COMMENT_HOSP                     :   "", // CHAR (50) IS-H: Comment on Hospital
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  HOSPITAL_TYPE                    :   "", // CHAR (2) ALPHA=ALPHA IS-H: Hospital Type / Category
  SIRET                            :   "", // CHAR (14) SIRET Number
};

// BAPI1309HOSPITAL  Created Hospital

// prettier-ignore
const HOSPITAL_IDATA= {
  CLIENT                           :   "", // CLNT (3) Client
  HOSPITAL                         :   "", // CHAR (10) ALPHA=ALPHA IS-H: Identification of Hospital SU3=KRH
  COMMENT_HOSP                     :   "", // CHAR (50) IS-H: Comment on Hospital
  DELETION_IND                     :   "", // CHAR (1) Deletion Flag/Indicator
  HOSPITAL_TYPE                    :   "", // CHAR (2) ALPHA=ALPHA IS-H: Hospital Type / Category
  SIRET                            :   "", // CHAR (14) SIRET Number
};

// BAPI1309INS_PROVIDER  Changed Insurance Provider

// prettier-ignore
const INSPROVIDER_CDATA= {
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

// BAPI1309INS_PROVIDER  Created Insurance Provider

// prettier-ignore
const INSPROVIDER_IDATA= {
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

// BAPI1309PERSON  Changed Person

// prettier-ignore
const PERSON_CDATA= {
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

// BAPI1309PERSON  Created Person

// prettier-ignore
const PERSON_IDATA= {
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
