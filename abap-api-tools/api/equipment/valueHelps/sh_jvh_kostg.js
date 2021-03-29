// SH JVH_KOSTG Joint venture : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "KOSTL",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "KOS"
  },
  {
    FIELDNAME: "KTEXT",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BUKRS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "BUK"
  },
  {
    FIELDNAME: "VNAME",
    DATATYPE: "CHAR",
    LENG: 6,
    DECIMALS: 0,
    MEMORYID: "JVV"
  },
  {
    FIELDNAME: "RECID",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ETYPE",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "JV_OTYPE",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "JV_JIBCL",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
    MEMORYID: "JIB"
  },
  {
    FIELDNAME: "JV_JIBSA",
    DATATYPE: "CHAR",
    LENG: 5,
    DECIMALS: 0,
    MEMORYID: "JBS"
  },
];