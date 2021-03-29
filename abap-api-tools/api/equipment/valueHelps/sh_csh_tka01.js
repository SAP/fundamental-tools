// SH CSH_TKA01 Controlling Area : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "KOKRS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "CAC"
  },
  {
    FIELDNAME: "BEZEI",
    DATATYPE: "CHAR",
    LENG: 25,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "WAERS",
    DATATYPE: "CUKY",
    LENG: 5,
    DECIMALS: 0,
    MEMORYID: "FWS"
  },
  {
    FIELDNAME: "KTOPL",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "KPL"
  },
  {
    FIELDNAME: "LMONA",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "KHINR",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
  },
];