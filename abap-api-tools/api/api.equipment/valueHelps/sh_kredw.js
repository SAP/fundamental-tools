// SH KREDW Vendors with Plant Reference : abap 2.3.1 at: 2021-07-08 19:01:17

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

const title = "Vendors with Plant Reference";

const selectParams = [
  {
    FIELDNAME: "SORTL",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "LAND1",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PSTLZ",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MCOD3",
    DATATYPE: "CHAR",
    LENG: 25,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MCOD1",
    DATATYPE: "CHAR",
    LENG: 25,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "WERKS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "WRK"
  },
  {
    FIELDNAME: "LIFNR",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "LIF"
  },
  {
    FIELDNAME: "BEGRU",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
  }
];