// SH MRTAP Selection via any partner : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "SMIVE",
    DATATYPE: "CHAR",
    LENG: 13,
    DECIMALS: 0,
    MEMORYID: "MIV"
  },
  {
    FIELDNAME: "OBJNR",
    DATATYPE: "CHAR",
    LENG: 22,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ROLETYP",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "BPR"
  },
  {
    FIELDNAME: "NAME1",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "NAME2",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MC_NAME1",
    DATATYPE: "CHAR",
    LENG: 25,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MC_NAME2",
    DATATYPE: "CHAR",
    LENG: 25,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BIRTH_DATE",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
];