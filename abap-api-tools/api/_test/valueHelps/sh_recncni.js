// SH RECNCNI Contracts by Resubmit Date : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "RSDATE",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RESPONSIBLE",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RSREASON",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RSRULE",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RSDONE",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RSINFO",
    DATATYPE: "CHAR",
    LENG: 60,
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
    FIELDNAME: "BENOCN",
    DATATYPE: "CHAR",
    LENG: 8,
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