// SH AANLI Inventory number : abap 2.3.1 at: 2021-07-08 19:01:17

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

const title = "Inventory number";

const selectParams = [
  {
    FIELDNAME: "BUKRS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "BUK"
  },
  {
    FIELDNAME: "INVNR",
    DATATYPE: "CHAR",
    LENG: 25,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ANLKL",
    DATATYPE: "CHAR",
    LENG: 8,
    DECIMALS: 0,
    MEMORYID: "ANK"
  },
  {
    FIELDNAME: "MCOA1",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ANLN1",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
    MEMORYID: "AN1"
  },
  {
    FIELDNAME: "ANLN2",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "AN2"
  }
];