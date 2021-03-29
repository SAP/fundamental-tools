// SH IFLSW Historical labels : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "TPLNR",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
    MEMORYID: "IFL"
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
  },
];