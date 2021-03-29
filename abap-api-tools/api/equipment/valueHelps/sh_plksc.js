// SH PLKSC Search using material : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "MATNR",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "MAT"
  },
  {
    FIELDNAME: "WERKS",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "WRK"
  },
  {
    FIELDNAME: "VBELN",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "AUN"
  },
  {
    FIELDNAME: "POSNR",
    DATATYPE: "NUMC",
    LENG: 6,
    DECIMALS: 0,
    MEMORYID: "APO"
  },
  {
    FIELDNAME: "PSPNR",
    DATATYPE: "NUMC",
    LENG: 8,
    DECIMALS: 0,
    MEMORYID: "PEI"
  },
  {
    FIELDNAME: "PLNTY",
    DATATYPE: "CHAR",
    LENG: 1,
    DECIMALS: 0,
    MEMORYID: "PTY"
  },
  {
    FIELDNAME: "PLNNR",
    DATATYPE: "CHAR",
    LENG: 8,
    DECIMALS: 0,
    MEMORYID: "PLN"
  },
  {
    FIELDNAME: "PLNAL",
    DATATYPE: "CHAR",
    LENG: 2,
    DECIMALS: 0,
    MEMORYID: "PAL"
  },
  {
    FIELDNAME: "DATUV",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "KTEXT",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "STATU",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "VERWE",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
  },
];