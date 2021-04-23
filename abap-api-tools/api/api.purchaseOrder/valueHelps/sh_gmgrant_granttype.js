// SH GMGRANT_GRANTTYPE Search grants with grant types : abap 2.3.0 at: 2021-04-23 11:59:34

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

const title = "Search grants with grant types";

const selectParams = [
  {
    FIELDNAME: "GRANT_NBR",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
    MEMORYID: "GM_GRANT_NBR"
  },
  {
    FIELDNAME: "GRANT_TYPE",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
    MEMORYID: "GM_GRANT_TYPE"
  },
  {
    FIELDNAME: "COMPANY_CODE",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "BUK"
  },
  {
    FIELDNAME: "PARTNER",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "BPA"
  },
  {
    FIELDNAME: "OUTGOING",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  }
];