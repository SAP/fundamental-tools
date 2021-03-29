// SH MAT1B Material by bill of material : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "MAKTG",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MAST_WERKS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "WRK"
  },
  {
    FIELDNAME: "STLAN",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
    MEMORYID: "CSV"
  },
  {
    FIELDNAME: "MATNR",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "MAT"
  },
  {
    FIELDNAME: "STLAL",
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
];