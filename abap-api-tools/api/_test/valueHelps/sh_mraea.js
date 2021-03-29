// SH MRAEA All collective lease-outs : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "E_SMIVE",
    DATATYPE: "CHAR",
    LENG: 13,
    DECIMALS: 0,
    MEMORYID: "MVE"
  },
  {
    FIELDNAME: "SMIVE",
    DATATYPE: "CHAR",
    LENG: 13,
    DECIMALS: 0,
    MEMORYID: "MIV"
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
    FIELDNAME: "DMIBEG",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "DMIEND",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SMVART",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "RECNTYPE"
  },
  {
    FIELDNAME: "SMVANART",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
];