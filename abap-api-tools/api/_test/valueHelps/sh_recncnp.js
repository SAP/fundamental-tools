// SH RECNCNP Contracts by Partner Without Address : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "PARTNER",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "BPA"
  },
  {
    FIELDNAME: "NAME_LAST",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "NAME_FIRST",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MC_NAME1",
    DATATYPE: "CHAR",
    LENG: 35,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MC_NAME2",
    DATATYPE: "CHAR",
    LENG: 35,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "NAME_ORG1",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "NAME_GRP1",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BU_SORT1",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BU_SORT2",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "IND_SECTOR",
    DATATYPE: "CHAR",
    LENG: 10,
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
    FIELDNAME: "RECNTYPE",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "RECNTYPE"
  },
  {
    FIELDNAME: "RECNNR",
    DATATYPE: "CHAR",
    LENG: 13,
    DECIMALS: 0,
    MEMORYID: "RECNNR"
  },
  {
    FIELDNAME: "RECNBEG",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BENOCN",
    DATATYPE: "CHAR",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RECNENDABS",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RECNTXT",
    DATATYPE: "CHAR",
    LENG: 80,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "OBJNR",
    DATATYPE: "CHAR",
    LENG: 22,
    DECIMALS: 0,
    MEMORYID: "ONR"
  },
  {
    FIELDNAME: "IMKEY",
    DATATYPE: "CHAR",
    LENG: 8,
    DECIMALS: 0,
  },
];