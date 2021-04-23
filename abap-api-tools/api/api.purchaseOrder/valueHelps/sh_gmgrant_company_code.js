// SH GMGRANT_COMPANY_CODE Grant lookup by company code : abap 2.3.0 at: 2021-04-23 11:59:34

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

const title = "Grant lookup by company code";

const selectParams = [
  {
    FIELDNAME: "GRANT_NBR",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
    MEMORYID: "GM_GRANT_NBR"
  },
  {
    FIELDNAME: "COMPANY_CODE",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "BUK"
  }
];