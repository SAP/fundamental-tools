// SH MCGRO Land by Order (Direct Assignment) : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "SWENR",
    DATATYPE: "CHAR",
    LENG: 8,
    DECIMALS: 0,
    MEMORYID: "WEH"
  },
  {
    FIELDNAME: "SGRNR",
    DATATYPE: "CHAR",
    LENG: 8,
    DECIMALS: 0,
    MEMORYID: "GRS"
  },
  {
    FIELDNAME: "XGRTXT",
    DATATYPE: "CHAR",
    LENG: 60,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "AUFNR",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
    MEMORYID: "ANR"
  },
  {
    FIELDNAME: "AUART",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "AAT"
  },
  {
    FIELDNAME: "KTEXT",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "OBJNR",
    DATATYPE: "CHAR",
    LENG: 22,
    DECIMALS: 0,
    MEMORYID: "ONR"
  },
];