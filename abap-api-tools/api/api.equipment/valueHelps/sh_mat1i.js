// SH MAT1I Material by vendor's material number : abap 2.3.0 at: 2021-04-23 11:59:34

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

const title = "Material by vendor's material number";

const selectParams = [
  {
    FIELDNAME: "IDNLF",
    DATATYPE: "CHAR",
    LENG: 35,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "LIFNR",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "LIF"
  },
  {
    FIELDNAME: "MATNR",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "MAT"
  },
  {
    FIELDNAME: "MAKTG",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SPRAS",
    DATATYPE: "LANG",
    LENG: 1,
    DECIMALS: 0,
    MEMORYID: "SPR"
  }
];