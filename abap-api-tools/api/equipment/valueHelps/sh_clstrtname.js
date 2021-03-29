// SH CLSTRTNAME Street : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "LANGU",
    DATATYPE: "LANG",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "COUNTRY",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
    MEMORYID: "LND"
  },
  {
    FIELDNAME: "STRT_CODE",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
    MEMORYID: "STN"
  },
  {
    FIELDNAME: "CITY_CODE",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
    MEMORYID: "ORT"
  },
  {
    FIELDNAME: "MC_STREET",
    DATATYPE: "CHAR",
    LENG: 25,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "STREET",
    DATATYPE: "CHAR",
    LENG: 60,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "REGION",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "CITY_NAME",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MC_CITY",
    DATATYPE: "CHAR",
    LENG: 25,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "CITY_EXT",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
  },
];