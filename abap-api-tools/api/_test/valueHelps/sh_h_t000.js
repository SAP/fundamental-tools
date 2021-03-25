// SH H_T000 Client : abap 2.2.0 at: 2021-03-25 14:41:38

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
    FIELDNAME: "MANDT",
    DATATYPE: "CLNT",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MTEXT",
    DATATYPE: "CHAR",
    LENG: 25,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ORT01",
    DATATYPE: "CHAR",
    LENG: 25,
    DECIMALS: 0,
  },
];