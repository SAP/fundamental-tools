// SH MAT1_ESH_TREX_BASIC_E Advanced Search for Material using Search Engine : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "WERKS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "WRK"
  },
  {
    FIELDNAME: "MSTAV",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MFRPN",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "WRKST",
    DATATYPE: "CHAR",
    LENG: 48,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "LABOR",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MSTAE",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MEINS",
    DATATYPE: "UNIT",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "AENAM",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "LAEDA",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ERNAM",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ERSDA",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "CADKZ",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SPART",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
    MEMORYID: "SPA"
  },
  {
    FIELDNAME: "MATKL",
    DATATYPE: "CHAR",
    LENG: 9,
    DECIMALS: 0,
    MEMORYID: "MKL"
  },
  {
    FIELDNAME: "PRDHA",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "VPR"
  },
  {
    FIELDNAME: "MAKTX",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ATTYP",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
    MEMORYID: "MTY"
  },
  {
    FIELDNAME: "MTART",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "MTA"
  },
  {
    FIELDNAME: "EAN11",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "EAN"
  },
  {
    FIELDNAME: "NORMT",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BISMT",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MATNR_EXT",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MATNR",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "MAT"
  },
  {
    FIELDNAME: "REQUEST",
    DATATYPE: "CHAR",
    LENG: 32,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "OBJECT_TYPE_ID",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "S/RP/MODE_FUZZY",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "S/RP/SEARCH_TERM",
    DATATYPE: "CHAR",
    LENG: 45,
    DECIMALS: 0,
  },
];