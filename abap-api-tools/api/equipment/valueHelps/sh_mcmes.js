// SH MCMES Rental Units with Separate Ownership : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "SMENR",
    DATATYPE: "CHAR",
    LENG: 8,
    DECIMALS: 0,
    MEMORYID: "MEH"
  },
  {
    FIELDNAME: "SGENR",
    DATATYPE: "CHAR",
    LENG: 8,
    DECIMALS: 0,
    MEMORYID: "GEB"
  },
  {
    FIELDNAME: "SGRNR",
    DATATYPE: "CHAR",
    LENG: 8,
    DECIMALS: 0,
    MEMORYID: "GRS"
  },
  {
    FIELDNAME: "SALTNR",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "DBEZU",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "XSTOCKK",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RLGESCH",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SPRAS",
    DATATYPE: "LANG",
    LENG: 1,
    DECIMALS: 0,
    MEMORYID: "SPR"
  },
  {
    FIELDNAME: "XMETXT",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "OBJNR",
    DATATYPE: "CHAR",
    LENG: 22,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "IMKEY",
    DATATYPE: "CHAR",
    LENG: 8,
    DECIMALS: 0,
  },
];