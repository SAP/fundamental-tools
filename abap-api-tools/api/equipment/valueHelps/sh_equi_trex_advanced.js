// SH EQUI_TREX_ADVANCED Advanced Search for Equipment via Search Engine : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "VALIDUNTILDATE",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "VALIDFROMDATE",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "S/KD/DATE",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PLANPLANT",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "IWK"
  },
  {
    FIELDNAME: "PLANGROUP",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
    MEMORYID: "IHG"
  },
  {
    FIELDNAME: "WORK_CTR",
    DATATYPE: "NUMC",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SORTFIELD",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MAINTLOC",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MAINTPLANT",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "SWK"
  },
  {
    FIELDNAME: "MANSERNO",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MANFACTURE",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "FUNCT_LOC",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
    MEMORYID: "IFL"
  },
  {
    FIELDNAME: "POSEQUI",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "CLASS_NUM",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "KLA"
  },
  {
    FIELDNAME: "EQUICATGRY",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
    MEMORYID: "EQT"
  },
  {
    FIELDNAME: "MATERIAL",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "MAT"
  },
  {
    FIELDNAME: "SERIALNO",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "SER"
  },
  {
    FIELDNAME: "DESCRIPTION",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "EXTERNAL_KEY",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "EQN"
  },
  {
    FIELDNAME: "OBJECT_TYPE",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BUSINESS_OBJECT",
    DATATYPE: "CHAR",
    LENG: 10,
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