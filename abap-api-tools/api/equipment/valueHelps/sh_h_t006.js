// SH H_T006 Unit for the Distance from Marker : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "MSEH3",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MSEHI",
    DATATYPE: "UNIT",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MSEHL",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "TXDIM",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
  },
];