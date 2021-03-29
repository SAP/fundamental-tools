// SH KOSTN_SES_ADVANCED Extended Search Cost Centers : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "S/RP/SEARCH_TERM",
    DATATYPE: "CHAR",
    LENG: 45,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "S/RP/MODE_FUZZY",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BUSINESS_OBJECT",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "OBJECT_TYPE",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "KOKRS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "CAC"
  },
  {
    FIELDNAME: "BUKRS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "BUK"
  },
  {
    FIELDNAME: "KOSAR",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
    MEMORYID: "PCA_KOSAR"
  },
  {
    FIELDNAME: "VERAK",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "VERAK_USER",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
    MEMORYID: "XUS"
  },
  {
    FIELDNAME: "FKBER",
    DATATYPE: "CHAR",
    LENG: 16,
    DECIMALS: 0,
    MEMORYID: "FBE"
  },
  {
    FIELDNAME: "PRCTR",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "PRC"
  },
  {
    FIELDNAME: "EXTERNAL_KEY",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "KOS"
  },
  {
    FIELDNAME: "DATAB",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "DATBI",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "DESCRIPTION",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
  },
];