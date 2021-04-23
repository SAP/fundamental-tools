// SH H_T8J6C JIB/JIBE Subclass A : abap 2.3.0 at: 2021-04-23 11:59:34

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

const title = "JIB/JIBE Subclass A";

const selectParams = [
  {
    FIELDNAME: "BUKRS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "BUK"
  },
  {
    FIELDNAME: "CLASS",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
    MEMORYID: "JIB"
  },
  {
    FIELDNAME: "SUBCLASS",
    DATATYPE: "CHAR",
    LENG: 5,
    DECIMALS: 0,
    MEMORYID: "JBS"
  },
  {
    FIELDNAME: "CTEXT",
    DATATYPE: "CHAR",
    LENG: 35,
    DECIMALS: 0,
  }
];