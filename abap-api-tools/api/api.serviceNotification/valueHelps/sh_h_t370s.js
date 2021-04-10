// SH H_T370S Functional location structure indicator : abap 2.2.0 at: 2021-04-10 21:53:58

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

const title = "Functional location structure indicator";

const selectParams = [
  {
    FIELDNAME: "TPLKZ",
    DATATYPE: "CHAR",
    LENG: 5,
    DECIMALS: 0,
    MEMORYID: "ISR"
  },
  {
    FIELDNAME: "EDITM",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "TPLXT",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  }
];