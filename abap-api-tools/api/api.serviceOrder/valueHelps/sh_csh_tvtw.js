// SH CSH_TVTW Distribution Channel : abap 2.2.0 at: 2021-04-10 21:53:58

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

const title = "Distribution Channel";

const selectParams = [
  {
    FIELDNAME: "VTWEG",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
    MEMORYID: "VTW"
  },
  {
    FIELDNAME: "VTEXT",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
  }
];