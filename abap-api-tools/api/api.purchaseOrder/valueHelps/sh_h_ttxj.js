// SH H_TTXJ Tax Jurisdiction : abap 2.3.0 at: 2021-04-23 11:59:34

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

const title = "Tax Jurisdiction";

const selectParams = [
  {
    FIELDNAME: "KALSM",
    DATATYPE: "CHAR",
    LENG: 6,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "TXJCD",
    DATATYPE: "CHAR",
    LENG: 15,
    DECIMALS: 0,
    MEMORYID: "TXJ"
  },
  {
    FIELDNAME: "TEXT1",
    DATATYPE: "CHAR",
    LENG: 50,
    DECIMALS: 0,
  }
];