// SH GL_ACCT_CA_FLAGS G/L account with delete/lock flag in chart of accounts : abap 2.2.0 at: 2021-04-10 21:53:58

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

const title = "G/L account with delete/lock flag in chart of accounts";

const selectParams = [
  {
    FIELDNAME: "KTOPL",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "KPL"
  },
  {
    FIELDNAME: "SAKNR",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "SAK"
  },
  {
    FIELDNAME: "SAKAN",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "TXT50",
    DATATYPE: "CHAR",
    LENG: 50,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "XLOEV",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "XSPEA",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "XSPEB",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "XSPEP",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  }
];