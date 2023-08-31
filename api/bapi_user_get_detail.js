//
// BAPI_USER_GET_DETAIL var: 2  struct: 13  table: 23  exception: 0
//
// abap api
//

// prettier-ignore
const parameters = {

// IMPORT PARAMETERS

USERNAME          :           "", // CHAR (12) User Name SU3=XUS
// CACHE_RESULTS  :          'X', // CHAR (1) Temporarily buffer results in work process

// TABLE PARAMETERS

RETURN            :           [], // BAPIRET2 Return Structure
// ACTIVITYGROUPS :           [], // BAPIAGR Activity Groups
// ADDCOMREM      :           [], // BAPICOMREM BAPI Structure Communication Comments
// ADDFAX         :           [], // BAPIADFAX BAPI Structure Fax Numbers
// ADDPAG         :           [], // BAPIADPAG BAPI Structure Pager Numbers
// ADDPRT         :           [], // BAPIADPRT BAPI Structure Printer Addresses
// ADDRFC         :           [], // BAPIADRFC BAPI Structure RFC Addresses
// ADDRML         :           [], // BAPIADRML Inhouse Mail BAPI Structure
// ADDSMTP        :           [], // BAPIADSMTP E-Mail Addresses BAPI Structure
// ADDSSF         :           [], // BAPIADSSF BAPI Structure SSF Addresses
// ADDTEL         :           [], // BAPIADTEL BAPI Structure Telephone Numbers
// ADDTLX         :           [], // BAPIADTLX BAPI Structure Telex Numbers
// ADDTTX         :           [], // BAPIADTTX BAPI Structure Teletex Numbers
// ADDURI         :           [], // BAPIADURI BAPI Structure: URL, FTP, and so on
// ADDX400        :           [], // BAPIADX400 BAPI Structure X400 Addresses
// EXTIDHEAD      :           [], // BAPIUSEXTIDHEAD Header Data for External ID of a User
// EXTIDPART      :           [], // BAPIUSEXTIDPART Part of a Long Field for the External ID of a User
// GROUPS         :           [], // BAPIGROUPS Transfer Structure for a List of User Groups
// PARAMETER      :           [], // BAPIPARAM Table with User Parameters
// PARAMETER1     :           [], // BAPIPARAM1 Replaces Parameter (Length 18 -> 40)
// PROFILES       :           [], // BAPIPROF Profiles
// SYSTEMS        :           [], // BAPIRCVSYS BAPI Structure for CUA Target Systems
// UCLASSSYS      :           [], // BAPIUCLASSSYS System-Specific License-Related User Classification

// EXPORT PARAMETERS

// ADDRESS        :           {}, // BAPIADDR3 Address Data
// ADMINDATA      :           {}, // BAPIUSERADMIN User: Administration Data
// ALIAS          :           {}, // BAPIALIAS User Name Alias
// COMPANY        :           {}, // BAPIUSCOMP Company for Company Address
// DEFAULTS       :           {}, // BAPIDEFAUL Structure with User Defaults
// DESCRIPTION    :           {}, // BAPIUSDESC Description
// IDENTITY       :           {}, // BAPIIDENTITY Person Assignment of an Identity
// ISLOCKED       :           {}, // BAPISLOCKD User Lock
// LASTMODIFIED   :           {}, // BAPIMODDAT User: Last Change (Date and Time)
// LOGONDATA      :           {}, // BAPILOGOND Structure with Logon Data
// REF_USER       :           {}, // BAPIREFUS User Name of the Reference User
// SNC            :           {}, // BAPISNCU Secure Network Communication Data
// UCLASS         :           {}, // BAPIUCLASS License-Related User Classification
};

const result = await client.call("BAPI_USER_GET_DETAIL", parameters);

//
// IMPORT PARAMETERS
//


//
// TABLE PARAMETERS
//

// BAPIRET2  Return Structure
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

// BAPIAGR  Activity Groups
const ACTIVITYGROUPS = [];

// prettier-ignore
const ACTIVITYGROUPS_line = {
  AGR_NAME                         :   "", // CHAR (30) Role Name
  FROM_DAT                         :   "", // DATS (8) Date of menu generation
  TO_DAT                           :   "", // DATS (8) Date of menu generation
  AGR_TEXT                         :   "", // CHAR (80) Role Description
  ORG_FLAG                         :   "", // CHAR (1) Indicator: Indirect Assignment of the User to the Role
};

// BAPICOMREM  BAPI Structure Communication Comments
const ADDCOMREM = [];

// prettier-ignore
const ADDCOMREM_line = {
  COMM_TYPE                        :   "", // CHAR (3) Communication Method (Key) (Business Address Services)
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  COMM_NOTES                       :   "", // CHAR (50) Communication link notes
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
};

// BAPIADFAX  BAPI Structure Fax Numbers
const ADDFAX = [];

// prettier-ignore
const ADDFAX_line = {
  COUNTRY                          :   "", // CHAR (3) Country for telephone/fax number SU3=LND
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  FAX                              :   "", // CHAR (30) Fax number: dialling code+number
  EXTENSION                        :   "", // CHAR (10) Fax no.: Extension
  FAX_NO                           :   "", // CHAR (30) Complete number: dialling code+number+extension
  SENDER_NO                        :   "", // CHAR (30) Fax number for finding sender
  FAX_GROUP                        :   "", // CHAR (1) Fax group (G3, G4, ...)
  STD_RECIP                        :   "", // CHAR (1) Flag: Recipient is standard recipient for this number
  R_3_USER                         :   "", // CHAR (1) Flag: Connected to an SAP System
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIADPAG  BAPI Structure Pager Numbers
const ADDPAG = [];

// prettier-ignore
const ADDPAG_line = {
  COUNTRY                          :   "", // CHAR (3) Country for telephone/fax number SU3=LND
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  PAGER_TYPE                       :   "", // CHAR (4) Pager Service
  PAGER                            :   "", // CHAR (30) Pager number
  PAGER_NO                         :   "", // CHAR (30) Normalized pager search field
  CALLER_NO                        :   "", // CHAR (30) Pager number for finding sender
  STD_RECIP                        :   "", // CHAR (1) Encoded Reference to a Sequence Number
  R_3_USER                         :   "", // CHAR (1) Encoded Reference to a Sequence Number
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIADPRT  BAPI Structure Printer Addresses
const ADDPRT = [];

// prettier-ignore
const ADDPRT_line = {
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  PRINT_DEST                       :   "", // CHAR (4) ALPHA=SPDEV Spool: Output device
  STD_RECIP                        :   "", // CHAR (1) Flag: Recipient is standard recipient for this number
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIADRFC  BAPI Structure RFC Addresses
const ADDRFC = [];

// prettier-ignore
const ADDRFC_line = {
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  LOG_DEST                         :   "", // CHAR (32) RFC logical destination
  STD_RECIP                        :   "", // CHAR (1) Flag: Recipient is standard recipient for this number
  R_3_USER                         :   "", // CHAR (1) Flag: Connected to an SAP System
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIADRML  Inhouse Mail BAPI Structure
const ADDRML = [];

// prettier-ignore
const ADDRML_line = {
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  SYMB_DEST                        :   "", // CHAR (10) Symbolic destination
  REC_TYPE                         :   "", // CHAR (1) Recipient type (not currently used)
  R_MAIL_CLT                       :   "", // CHAR (3) RML- Client (Remote Mail, SAP - SAP - Communication)
  R_MAIL                           :   "", // CHAR (12) RML Name (Remote Mail, SAP - SAP - Communication)
  STD_RECIP                        :   "", // CHAR (1) Flag: Recipient is standard recipient for this number
  R_3_USER                         :   "", // CHAR (1) Flag: Connected to an SAP System
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIADSMTP  E-Mail Addresses BAPI Structure
const ADDSMTP = [];

// prettier-ignore
const ADDSMTP_line = {
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  E_MAIL                           :   "", // CHAR (241) ALPHA=SXIDN E-Mail Address
  EMAIL_SRCH                       :   "", // CHAR (20) E-Mail Address Search Field
  STD_RECIP                        :   "", // CHAR (1) Flag: Recipient is standard recipient for this number
  R_3_USER                         :   "", // CHAR (1) Flag: Connected to an SAP System
  ENCODE                           :   "", // CHAR (1) Required Data Encoding (E-Mail)
  TNEF                             :   "", // CHAR (1) Flag: Receiver can receive TNEF encoding by SMTP
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIADSSF  BAPI Structure SSF Addresses
const ADDSSF = [];

// prettier-ignore
const ADDSSF_line = {
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  DUMMY                            :   "", // CHAR (1) Single-Character Flag
  STD_RECIP                        :   "", // CHAR (1) Flag: Recipient is standard recipient for this number
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  RFCDEST                          :   "", // CHAR (32) Logical destination (specified in function call) SU3=RFC
  SSFIDSHORT                       :   "", // CHAR (132) SSFID Field for Dynpro Display
  SSF_NS                           :   "", // CHAR (10) SSF Namespace label
  SSF_PROF                         :   "", // CHAR (132) SSF profile name
  SSFIDPART1                       :   "", // CHAR (250) SSF name signatory/recipient: Parts 1-8
  SSFIDPART2                       :   "", // CHAR (250) SSF name signatory/recipient: Parts 1-8
  SSFIDPART3                       :   "", // CHAR (250) SSF name signatory/recipient: Parts 1-8
  SSFIDPART4                       :   "", // CHAR (250) SSF name signatory/recipient: Parts 1-8
  SSFIDPART5                       :   "", // CHAR (250) SSF name signatory/recipient: Parts 1-8
  SSFIDPART6                       :   "", // CHAR (250) SSF name signatory/recipient: Parts 1-8
  SSFIDPART7                       :   "", // CHAR (250) SSF name signatory/recipient: Parts 1-8
  SSFIDPART8                       :   "", // CHAR (250) SSF name signatory/recipient: Parts 1-8
  SSFIDPART9                       :   "", // CHAR (48) SSF name signatory/recipient - part 9
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIADTEL  BAPI Structure Telephone Numbers
const ADDTEL = [];

// prettier-ignore
const ADDTEL_line = {
  COUNTRY                          :   "", // CHAR (3) Country for telephone/fax number SU3=LND
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  TELEPHONE                        :   "", // CHAR (30) Telephone no.: dialling code+number
  EXTENSION                        :   "", // CHAR (10) Telephone no.: Extension
  TEL_NO                           :   "", // CHAR (30) Complete number: dialling code+number+extension
  CALLER_NO                        :   "", // CHAR (30) Telephone number for determining caller
  STD_RECIP                        :   "", // CHAR (1) Indicator: Telephone is SMS-Enabled
  R_3_USER                         :   "", // CHAR (1) Indicator: Telephone is a Mobile Telephone
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIADTLX  BAPI Structure Telex Numbers
const ADDTLX = [];

// prettier-ignore
const ADDTLX_line = {
  COUNTRY                          :   "", // CHAR (3) Country Key SU3=LND
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  TELEX_NO                         :   "", // CHAR (30) Telex number
  STD_RECIP                        :   "", // CHAR (1) Flag: Recipient is standard recipient for this number
  R_3_USER                         :   "", // CHAR (1) Flag: Connected to an SAP System
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIADTTX  BAPI Structure Teletex Numbers
const ADDTTX = [];

// prettier-ignore
const ADDTTX_line = {
  COUNTRY                          :   "", // CHAR (3) Country Key SU3=LND
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  TELETEX                          :   "", // CHAR (30) Teletex number
  STD_RECIP                        :   "", // CHAR (1) Flag: Recipient is standard recipient for this number
  R_3_USER                         :   "", // CHAR (1) Flag: Connected to an SAP System
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIADURI  BAPI Structure: URL, FTP, and so on
const ADDURI = [];

// prettier-ignore
const ADDURI_line = {
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  URI_TYPE                         :   "", // CHAR (3) URI type flag
  URI                              :   "", // CHAR (132) URI, e.g. Homepage or ftp Address
  STD_RECIP                        :   "", // CHAR (1) Flag: Recipient is standard recipient for this number
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  URI_PART1                        :   "", // CHAR (250) Universal Resource Identifier (URI): Parts 1-8
  URI_PART2                        :   "", // CHAR (250) Universal Resource Identifier (URI): Parts 1-8
  URI_PART3                        :   "", // CHAR (250) Universal Resource Identifier (URI): Parts 1-8
  URI_PART4                        :   "", // CHAR (250) Universal Resource Identifier (URI): Parts 1-8
  URI_PART5                        :   "", // CHAR (250) Universal Resource Identifier (URI): Parts 1-8
  URI_PART6                        :   "", // CHAR (250) Universal Resource Identifier (URI): Parts 1-8
  URI_PART7                        :   "", // CHAR (250) Universal Resource Identifier (URI): Parts 1-8
  URI_PART8                        :   "", // CHAR (250) Universal Resource Identifier (URI): Parts 1-8
  URI_PART9                        :   "", // CHAR (48) Universal Resource Identifier (URI) - Part 9
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIADX400  BAPI Structure X400 Addresses
const ADDX400 = [];

// prettier-ignore
const ADDX400_line = {
  STD_NO                           :   "", // CHAR (1) Standard Sender Address in this Communication Type
  COUNTRY                          :   "", // CHAR (3) X.400 country code
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  ADM_DOM                          :   "", // CHAR (16) X.400 administration domain
  PRIV_DOM                         :   "", // CHAR (16) X.400 private domain
  ORGANIZATN                       :   "", // CHAR (64) X.400 organization
  ORG_UNIT_1                       :   "", // CHAR (32) X.400 organizational unit 1
  ORG_UNIT_2                       :   "", // CHAR (32) X.400 organizational unit 2
  ORG_UNIT_3                       :   "", // CHAR (32) X.400 organizational unit 3
  ORG_UNIT_4                       :   "", // CHAR (32) X.400 organizational unit 4
  LASTNAME                         :   "", // CHAR (40) X.400 last name
  FIRSTNAME                        :   "", // CHAR (16) X.400 first name
  INITIALS                         :   "", // CHAR (5) X.400 Initials
  GENERATION                       :   "", // CHAR (3) X.400 generation
  X_121_ADDR                       :   "", // CHAR (15) X.400 X.121 network address
  TERM_ID                          :   "", // CHAR (24) X.400 Terminal ID
  TERM_TYPE                        :   "", // CHAR (1) X.400 terminal type
  UANID                            :   "", // CHAR (32) X.400 user agent numeric ID
  DDA_TYPE1                        :   "", // CHAR (8) X.400 domain defined attribute, type 1
  DDA_VALUE1                       :   "", // CHAR (128) X.400 domain defined attribute, value 1
  DDA_TYPE2                        :   "", // CHAR (8) X.400 domain defined attribute, type 2
  DDA_VALUE2                       :   "", // CHAR (128) X.400 domain defined attribute, value 2
  DDA_TYPE3                        :   "", // CHAR (8) X.400 domain defined attribute, type 3
  DDA_VALUE3                       :   "", // CHAR (128) X.400 domain defined attribute, value 3
  DDA_TYPE4                        :   "", // CHAR (8) X.400 domain defined attribute, type 4
  DDA_VALUE4                       :   "", // CHAR (128) X.400 domain defined attribute, value 4
  STD_RECIP                        :   "", // CHAR (1) Flag: Recipient is standard recipient for this number
  R_3_USER                         :   "", // CHAR (1) Flag: Connected to an SAP System
  TXT_ENCODE                       :   "", // CHAR (1) Required Text Data Encoding (X.400)
  TNEF                             :   "", // CHAR (1) Flag: Receiver can receive TNEF encoding by X.400
  HOME_FLAG                        :   "", // CHAR (1) Recipient address in this communication type (mail sys.grp)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  FLG_NOUSE                        :   "", // CHAR (1) Flag: This Communication Number is Not Used
  VALID_FROM                       :   "", // CHAR (14) Communication Data: Valid From (YYYYMMDDHHMMSS)
  VALID_TO                         :   "", // CHAR (14) Communication Data: Valid To (YYYYMMDDHHMMSS)
};

// BAPIUSEXTIDHEAD  Header Data for External ID of a User
const EXTIDHEAD = [];

// prettier-ignore
const EXTIDHEAD_line = {
  SEQ_NO_ID                        :   "", // NUMC (4) Sequence Number of External ID of a User
  TYPE                             :   "", // CHAR (2) External ID type
  CODE_TYPE                        :   "", // CHAR (1) Way in Which Data is Coded
  EXTID_LEN                        :    0, // INT2 (5) Length of an LCHR or LRAW field in the database
  ISSUER_LEN                       :    0, // INT2 (5) Length of an LCHR or LRAW field in the database
  SERIAL_LEN                       :    0, // INT2 (5) Length of an LCHR or LRAW field in the database
  VALITYINFO                       : Buffer.alloc(16), // RAW (16) Validity Information for External ID of a User
  VERSION                          :    0, // INT1 (3) Version of Validity Information for External ID of a User
  STATUS                           :   "", // CHAR (1) Status of entry for external ID
  EXTFLAG                          :   "", // CHAR (4) Indicator for External ID
};

// BAPIUSEXTIDPART  Part of a Long Field for the External ID of a User
const EXTIDPART = [];

// prettier-ignore
const EXTIDPART_line = {
  SEQ_NO_ID                        :   "", // NUMC (4) Sequence Number of External ID of a User
  FIELDNAME                        :   "", // CHAR (30) Field Name for a Part of an External ID of a User
  SEQ_NO_PART                      :   "", // NUMC (4) Sequence Number of Part of a Field of an External ID
  PART_DATA                        :   "", // CHAR (192) Content of a Part of a Field of an External ID
  EXTFLAG                          :   "", // CHAR (4) Indicator for External ID
};

// BAPIGROUPS  Transfer Structure for a List of User Groups
const GROUPS = [];

// prettier-ignore
const GROUPS_line = {
  USERGROUP                        :   "", // CHAR (12) User group in user master maintenance SU3=XUG
};

// BAPIPARAM  Table with User Parameters
const PARAMETER = [];

// prettier-ignore
const PARAMETER_line = {
  PARID                            :   "", // CHAR (20) Set/Get parameter ID
  PARVA                            :   "", // CHAR (18) Parameter value
  PARTXT                           :   "", // CHAR (60) Short Description of Repository Objects
};

// BAPIPARAM1  Replaces Parameter (Length 18 -> 40)
const PARAMETER1 = [];

// prettier-ignore
const PARAMETER1_line = {
  PARID                            :   "", // CHAR (20) Set/Get parameter ID
  PARVA                            :   "", // CHAR (40) Parameter value
  PARTXT                           :   "", // CHAR (60) Short Description of Repository Objects
};

// BAPIPROF  Profiles
const PROFILES = [];

// prettier-ignore
const PROFILES_line = {
  BAPIPROF                         :   "", // CHAR (12) Profile name SU3=XUP
  BAPIPTEXT                        :   "", // CHAR (60) Texts in user master/authorizations SU3=XUT
  BAPITYPE                         :   "", // CHAR (1) ALPHA=XUTYP Type of Profile (Composite or Single)
  BAPIAKTPS                        :   "", // CHAR (1) ALPHA=AKTPA Active or maintenance version
};

// BAPIRCVSYS  BAPI Structure for CUA Target Systems
const SYSTEMS = [];

// prettier-ignore
const SYSTEMS_line = {
  SUBSYSTEM                        :   "", // CHAR (10) ALPHA=ALPHA Receiving system for central user administration
};

// BAPIUCLASSSYS  System-Specific License-Related User Classification
const UCLASSSYS = [];

// prettier-ignore
const UCLASSSYS_line = {
  RCVSYSTEM                        :   "", // CHAR (10) ALPHA=ALPHA Receiving system for central user administration
  LIC_TYPE                         :   "", // CHAR (2) ID for the User Types of the SAP System
  SPEC_VERS                        :   "", // CHAR (2) Assignment to special version
  COUNTRY_SURCHARGE                :  "0", // DEC (3) System Measurement: Country Surcharge (3 Characters)
  SUBSTITUTE_FROM                  :   "", // DATS (8) Substitute 'from date'
  SUBSTITUTE_UNTIL                 :   "", // DATS (8) Substitute 'to date'
  SYSID                            :   "", // CHAR (8) Name of SAP System
  CLIENT                           :   "", // CLNT (3) Client
  BNAME_CHARGEABLE                 :   "", // CHAR (12) Chargeable User SU3=XUS
};


//
// EXPORT PARAMETERS
//

// BAPIADDR3  Address Data

// prettier-ignore
const ADDRESS = {
  PERS_NO                          :   "", // CHAR (10) ALPHA=ALPHA Person number SU3=CDT
  ADDR_NO                          :   "", // CHAR (10) ALPHA=ALPHA Address number SU3=ADR
  TITLE_P                          :   "", // CHAR (30) Title text
  FIRSTNAME                        :   "", // CHAR (40) First name
  LASTNAME                         :   "", // CHAR (40) Last name
  BIRTH_NAME                       :   "", // CHAR (40) Name of person at birth
  MIDDLENAME                       :   "", // CHAR (40) Middle name or second forename of a person
  SECONDNAME                       :   "", // CHAR (40) Other Last Name of a Person
  FULLNAME                         :   "", // CHAR (80) Full Name of Person
  FULLNAME_X                       :   "", // CHAR (1) Status of Field 'Full Name' NAME_TEXT
  TITLE_ACA1                       :   "", // CHAR (20) Academic Title: Written Form
  TITLE_ACA2                       :   "", // CHAR (20) 2nd academic title: written form
  PREFIX1                          :   "", // CHAR (20) Name prefix
  PREFIX2                          :   "", // CHAR (20) 2nd name prefix
  TITLE_SPPL                       :   "", // CHAR (20) Name supplement, e.g. noble title (written form)
  NICKNAME                         :   "", // CHAR (40) Nickname or name used
  INITIALS                         :   "", // CHAR (10) "Middle Initial" or personal initials
  NAMEFORMAT                       :   "", // CHAR (2) Name format
  NAMCOUNTRY                       :   "", // CHAR (3) Country for Name Format Rule
  LANGU_P                          :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGUP_ISO                       :   "", // CHAR (2) 2-Character SAP Language Code
  SORT1_P                          :   "", // CHAR (20) Search Term 1
  SORT2_P                          :   "", // CHAR (20) Search Term 2
  DEPARTMENT                       :   "", // CHAR (40) Department
  FUNCTION                         :   "", // CHAR (40) Function
  BUILDING_P                       :   "", // CHAR (10) Building (number or code)
  FLOOR_P                          :   "", // CHAR (10) Floor in building
  ROOM_NO_P                        :   "", // CHAR (10) Room or Appartment Number
  INITS_SIG                        :   "", // CHAR (10) Short name for correspondence
  INHOUSE_ML                       :   "", // CHAR (10) Internal Mail Postal Code
  COMM_TYPE                        :   "", // CHAR (3) Communication Method (Key) (Business Address Services)
  TITLE                            :   "", // CHAR (30) Title text
  NAME                             :   "", // CHAR (40) Name 1
  NAME_2                           :   "", // CHAR (40) Name 2
  NAME_3                           :   "", // CHAR (40) Name 3
  NAME_4                           :   "", // CHAR (40) Name 4
  C_O_NAME                         :   "", // CHAR (40) c/o name
  CITY                             :   "", // CHAR (40) City
  DISTRICT                         :   "", // CHAR (40) District
  CITY_NO                          :   "", // CHAR (12) ALPHA=ALPHA City code for city/street file
  DISTRCT_NO                       :   "", // CHAR (8) ALPHA=ALPHA District code for City and Street file
  CHCKSTATUS                       :   "", // CHAR (1) City file test status
  POSTL_COD1                       :   "", // CHAR (10) City postal code
  POSTL_COD2                       :   "", // CHAR (10) PO Box Postal Code
  POSTL_COD3                       :   "", // CHAR (10) Company Postal Code (for Large Customers)
  PO_BOX                           :   "", // CHAR (10) PO Box
  PO_BOX_CIT                       :   "", // CHAR (40) PO Box city
  PBOXCIT_NO                       :   "", // CHAR (12) ALPHA=ALPHA City PO box code (City file)
  DELIV_DIS                        :   "", // CHAR (15) (Not Supported) Post Delivery District
  TRANSPZONE                       :   "", // CHAR (10) Transportation zone to or from which the goods are delivered
  STREET                           :   "", // CHAR (60) Street
  STREET_NO                        :   "", // CHAR (12) ALPHA=ALPHA Street Number for City/Street File
  STR_ABBR                         :   "", // CHAR (2) (Not Supported) Abbreviation of Street Name
  HOUSE_NO                         :   "", // CHAR (10) House Number
  HOUSE_NO2                        :   "", // CHAR (10) House number supplement
  STR_SUPPL1                       :   "", // CHAR (40) Street 2
  STR_SUPPL2                       :   "", // CHAR (40) Street 3
  STR_SUPPL3                       :   "", // CHAR (40) Street 4
  LOCATION                         :   "", // CHAR (40) Street 5
  BUILDING                         :   "", // CHAR (10) old: building (no. or abbreviation)
  FLOOR                            :   "", // CHAR (10) Floor in building
  ROOM_NO                          :   "", // CHAR (10) Room or Appartment Number
  COUNTRY                          :   "", // CHAR (3) Country Key SU3=LND
  COUNTRYISO                       :   "", // CHAR (2) Country ISO code
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key SU3=SPR
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
  REGION                           :   "", // CHAR (3) Region (State, Province, County)
  SORT1                            :   "", // CHAR (20) Search Term 1
  SORT2                            :   "", // CHAR (20) Search Term 2
  TIME_ZONE                        :   "", // CHAR (6) Address time zone
  TAXJURCODE                       :   "", // CHAR (15) Tax Jurisdiction SU3=TXJ
  ADR_NOTES                        :   "", // CHAR (50) Address notes
  TEL1_NUMBR                       :   "", // CHAR (30) First telephone no.: dialling code+number
  TEL1_EXT                         :   "", // CHAR (10) First Telephone No.: Extension
  FAX_NUMBER                       :   "", // CHAR (30) First fax no.: dialling code+number
  FAX_EXTENS                       :   "", // CHAR (10) First fax no.: extension
  E_MAIL                           :   "", // CHAR (241) ALPHA=SXIDN E-Mail Address
  BUILD_LONG                       :   "", // CHAR (20) Building (Number or Code)
  REGIOGROUP                       :   "", // CHAR (8) Regional structure grouping
  HOME_CITY                        :   "", // CHAR (40) City (different from postal city)
  HOMECITYNO                       :   "", // CHAR (12) ALPHA=ALPHA Different city for city/street file
  PCODE1_EXT                       :   "", // CHAR (10) (Not Supported)City Postal Code Extension, e.g. ZIP+4+2 Code
  PCODE2_EXT                       :   "", // CHAR (10) (Not Supported) PO Box Postal Code Extension
  PCODE3_EXT                       :   "", // CHAR (10) (Not Supported) Major Customer Postal Code Extension
  PO_W_O_NO                        :   "", // CHAR (1) Flag: PO Box Without Number
  PO_BOX_REG                       :   "", // CHAR (3) Region for PO Box (Country, State, Province, ...)
  POBOX_CTRY                       :   "", // CHAR (3) PO box country
  PO_CTRYISO                       :   "", // CHAR (2) Country ISO code
  DONT_USE_S                       :   "", // CHAR (4) Street Address Undeliverable Flag
  DONT_USE_P                       :   "", // CHAR (4) PO Box Address Undeliverable Flag
  HOUSE_NO3                        :   "", // CHAR (10) (Not supported) House Number Range
  LANGU_CR_P                       :   "", // LANG (1) ALPHA=ISOLA Address record creation original language
  LANGUCPISO                       :   "", // CHAR (2) 2-Character SAP Language Code
  PO_BOX_LOBBY                     :   "", // CHAR (40) PO Box Lobby
  DELI_SERV_TYPE                   :   "", // CHAR (4) Type of Delivery Service
  DELI_SERV_NUMBER                 :   "", // CHAR (10) Number of Delivery Service
  COUNTY_CODE                      :   "", // CHAR (8) ALPHA=ALPHA County code for county
  COUNTY                           :   "", // CHAR (40) County
  TOWNSHIP_CODE                    :   "", // CHAR (8) ALPHA=ALPHA Township code for Township
  TOWNSHIP                         :   "", // CHAR (40) Township
};

// BAPIUSERADMIN  User: Administration Data

// prettier-ignore
const ADMINDATA = {
  ANAME                            :   "", // CHAR (12) Creator of the User Master Record
  ERDAT                            :   "", // DATS (8) Creation Date of the User Master Record
  TRDAT                            :   "", // DATS (8) Last Logon Date
};

// BAPIALIAS  User Name Alias

// prettier-ignore
const ALIAS = {
  USERALIAS                        :   "", // CHAR (40) Internet user alias
};

// BAPIUSCOMP  Company for Company Address

// prettier-ignore
const COMPANY = {
  COMPANY                          :   "", // CHAR (42) Company address, cross-system key
};

// BAPIDEFAUL  Structure with User Defaults

// prettier-ignore
const DEFAULTS = {
  STCOD                            :   "", // CHAR (20) Start menu (old, replaced by XUSTART)
  SPLD                             :   "", // CHAR (4) ALPHA=SPDEV Spool: Output device
  SPLG                             :   "", // CHAR (1) Print parameter 1
  SPDB                             :   "", // CHAR (1) Print parameter 2
  SPDA                             :   "", // CHAR (1) Print parameter 3
  DATFM                            :   "", // CHAR (1) Date format
  DCPFM                            :   "", // CHAR (1) Decimal Format
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Logon Language SU3=SPR
  CATTKENNZ                        :   "", // CHAR (1) CATT: Test Status
  KOSTL                            :   "", // CHAR (8) Cost center
  START_MENU                       :   "", // CHAR (30) Start Menu
  TIMEFM                           :   "", // CHAR (1) Time Format (12-/24-Hour Specification)
};

// BAPIUSDESC  Description

// prettier-ignore
const DESCRIPTION = {
  RESPONSIBLE                      :   "", // CHAR (12) User Responsible for Technical User Account
  TECHDESC                         :   "", // CHAR (80) Description of the Technical User Account
};

// BAPIIDENTITY  Person Assignment of an Identity

// prettier-ignore
const IDENTITY = {
  IDENTITY_UUID                    :   "", // CHAR (36) Identity API: UUID for Identity (Char 36)
  BPPERSON                         :   "", // CHAR (36) BP-APIs: UUID for Business Partner (Char 36)
};

// BAPISLOCKD  User Lock

// prettier-ignore
const ISLOCKED = {
  WRNG_LOGON                       :   "", // CHAR (1) Status of User Lock
  LOCAL_LOCK                       :   "", // CHAR (1) Status of User Lock
  GLOB_LOCK                        :   "", // CHAR (1) Status of User Lock
  NO_USER_PW                       :   "", // CHAR (1) Status of User Lock
};

// BAPIMODDAT  User: Last Change (Date and Time)

// prettier-ignore
const LASTMODIFIED = {
  MODDATE                          :   "", // DATS (8) Modification date
  MODTIME                          :   "", // TIMS (6) Modification time
  MODIFIER                         :   "", // CHAR (12) Last Changed By
};

// BAPILOGOND  Structure with Logon Data

// prettier-ignore
const LOGONDATA = {
  GLTGV                            :   "", // DATS (8) User valid from
  GLTGB                            :   "", // DATS (8) User valid to
  USTYP                            :   "", // CHAR (1) ALPHA=USTYP User Type
  CLASS                            :   "", // CHAR (12) User group in user master maintenance SU3=XUG
  ACCNT                            :   "", // CHAR (12) Account ID
  TZONE                            :   "", // CHAR (6) Time Zone
  LTIME                            :   "", // TIMS (6) Last Logon Time
  BCODE                            : Buffer.alloc(8), // RAW (8) Password Hash Key
  CODVN                            :   "", // CHAR (1) Code Version of Password Hash Algorithm (Old Systems)
  PASSCODE                         : Buffer.alloc(20), // RAW (20) Password Hash Value (SHA1, 160 Bit)
  CODVC                            :   "", // CHAR (1) Code Version of Password Hash Algorithm (New Systems)
  PWDSALTEDHASH                    :   "", // CHAR (255) Password Hash Value (Various Algorithms and Codings)
  CODVS                            :   "", // CHAR (1) Code Version of Password Hash Algorithm (New Systems)
  SECURITY_POLICY                  :   "", // CHAR (40) Security Policy Name
};

// BAPIREFUS  User Name of the Reference User

// prettier-ignore
const REF_USER = {
  REF_USER                         :   "", // CHAR (12) User Name in User Master Record SU3=XUS
};

// BAPISNCU  Secure Network Communication Data

// prettier-ignore
const SNC = {
  GUIFLAG                          :   "", // CHAR (1) Allow password logon for SAP GUI (user-specific)
  PNAME                            :   "", // CHAR (255) SNC: Printable name
};

// BAPIUCLASS  License-Related User Classification

// prettier-ignore
const UCLASS = {
  LIC_TYPE                         :   "", // CHAR (2) ID for the User Types of the SAP System
  SPEC_VERS                        :   "", // CHAR (2) Assignment to special version
  COUNTRY_SURCHARGE                :  "0", // DEC (3) System Measurement: Country Surcharge (3 Characters)
  SUBSTITUTE_FROM                  :   "", // DATS (8) Substitute 'from date'
  SUBSTITUTE_UNTIL                 :   "", // DATS (8) Substitute 'to date'
  SYSID                            :   "", // CHAR (8) Name of SAP System
  CLIENT                           :   "", // CLNT (3) Client
  BNAME_CHARGEABLE                 :   "", // CHAR (12) Chargeable User SU3=XUS
};
