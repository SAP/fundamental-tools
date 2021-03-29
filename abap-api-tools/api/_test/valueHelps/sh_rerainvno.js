// SH RERAINVNO Invoice Number : abap 2.2.0 at: 2021-03-29 15:40:08

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

const selectParams = [
  {
    FIELDNAME: "BUKRS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "BUK"
  },
  {
    FIELDNAME: "INVNO",
    DATATYPE: "NUMC",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "FISC_YEAR",
    DATATYPE: "NUMC",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "GJR"
  },
  {
    FIELDNAME: "PROCESSID",
    DATATYPE: "CHAR",
    LENG: 16,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PARTNER",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "BPA"
  },
  {
    FIELDNAME: "FLG_REVERSAL",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RERF",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "DERF",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "TERF",
    DATATYPE: "TIMS",
    LENG: 6,
    DECIMALS: 0,
  },
];