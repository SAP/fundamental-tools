// SH IFLSI Uppermost locations by category : abap 2.3.1 at: 2021-07-08 19:01:17

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

const title = "Uppermost locations by category";

const selectParams = [
  {
    FIELDNAME: "TPLNR",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
    MEMORYID: "IFL"
  },
  {
    FIELDNAME: "FLTYP",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
    MEMORYID: "IFT"
  },
  {
    FIELDNAME: "TPLMA",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ALKEY",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
    MEMORYID: "ILOM_ALKEY"
  },
  {
    FIELDNAME: "ACTVS",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "STRNO",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "KZMLA",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PLTXT",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  }
];