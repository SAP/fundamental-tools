// SH BUPARLTYP Partners by Relationship : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "BP1_NAME1",
    DATATYPE: "CHAR",
    LENG: 35,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BP1_NAME2",
    DATATYPE: "CHAR",
    LENG: 35,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RELTYP",
    DATATYPE: "CHAR",
    LENG: 6,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PARTNER2",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "BPA"
  },
  {
    FIELDNAME: "BP2_NAME1",
    DATATYPE: "CHAR",
    LENG: 35,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BP2_NAME2",
    DATATYPE: "CHAR",
    LENG: 35,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "RLTY_C",
    DATATYPE: "CHAR",
    LENG: 50,
    DECIMALS: 0,
  },
];