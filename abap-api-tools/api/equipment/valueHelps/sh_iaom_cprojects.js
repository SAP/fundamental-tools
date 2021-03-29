// SH IAOM_CPROJECTS Internal Orders Created from cProjects : abap 2.2.0 at: 2021-03-29 15:40:08

const helpSign = [{ id: 'I', name: 'Include' }, { id: 'E', name: 'Exclude' }];
  const helpOption = [
  { id: 'EQ', name: 'is' },
  { id: 'NE', name: 'is not' },
  { id: 'GT', name: 'greater than' },
  { id: 'LT', name: 'less than' },
  { id: 'GE', name: 'not less' },
  { id: 'LE', name: 'not greater' },
  { id: 'BT', name: 'between' },
  { id: 'NB', name: 'not between' },
  { id: 'CP', name: 'with pattern' },
  { id: 'NP', name: 'w/o pattern' }
  ];

const selectParams = [
  {
    FIELDNAME: "AUFNR",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
    MEMORYID: "ANR"
  },
  {
    FIELDNAME: "AUART",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "AAT"
  },
  {
    FIELDNAME: "PROJECT_ID",
    DATATYPE: "CHAR",
    LENG: 24,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BEZEICH",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RESP_ORG_UNIT",
    DATATYPE: "NUMC",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PRIORITY",
    DATATYPE: "NUMC",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PRO_TYPE",
    DATATYPE: "CHAR",
    LENG: 15,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "CAUSE",
    DATATYPE: "CHAR",
    LENG: 15,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "GROUPING",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SEARCH_FIELD",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "TEMP_EXTERNAL_ID",
    DATATYPE: "CHAR",
    LENG: 24,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "CUSTOMER",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "VAG"
  },
];