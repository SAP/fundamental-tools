// SH MAT1R Material by task list : abap 2.3.1 at: 2021-07-08 19:01:17

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

const title = "Material by task list";

const selectParams = [
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
  },
  {
    FIELDNAME: "MATNR",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "MAT"
  },
  {
    FIELDNAME: "MAPL_WERKS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "WRK"
  },
  {
    FIELDNAME: "PLNTY",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
    MEMORYID: "PTY"
  },
  {
    FIELDNAME: "PLNNR",
    DATATYPE: "CHAR",
    LENG: 8,
    DECIMALS: 0,
    MEMORYID: "PLN"
  },
  {
    FIELDNAME: "PLNAL",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
    MEMORYID: "PAL"
  },
  {
    FIELDNAME: "DATUV",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  }
];