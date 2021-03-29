// SH MAT1_TREX_ADVANCED Advanced Search for Material Using Search Engine : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "S/RP/SEARCH_TERM",
    DATATYPE: "CHAR",
    LENG: 45,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "S/RP/MODE_FUZZY",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BUSINESS_OBJECT",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "OBJECT_TYPE",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "OBJECT_ID",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "MAT"
  },
  {
    FIELDNAME: "EXTERNAL_KEY",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "OLD_MAT_NO",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "STD_DESCR",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "EAN_UPC",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "EAN"
  },
  {
    FIELDNAME: "MATL_TYPE",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "MTA"
  },
  {
    FIELDNAME: "MATL_CAT",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
    MEMORYID: "MTY"
  },
  {
    FIELDNAME: "MAKTG",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "DESCRIPTION",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PROD_HIER",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "VPR"
  },
  {
    FIELDNAME: "MATL_GROUP",
    DATATYPE: "CHAR",
    LENG: 9,
    DECIMALS: 0,
    MEMORYID: "MKL"
  },
  {
    FIELDNAME: "PLANT",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "WRK"
  },
  {
    FIELDNAME: "SALESORG",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "VKO"
  },
  {
    FIELDNAME: "DISTR_CHAN",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
    MEMORYID: "VTW"
  },
  {
    FIELDNAME: "DIVISION",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
    MEMORYID: "SPA"
  },
  {
    FIELDNAME: "DEL_FLAG",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
];