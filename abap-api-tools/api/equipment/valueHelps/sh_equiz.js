// SH EQUIZ Equipment by Fleet Identification Data : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "FLEET_NUM",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "LICENSE_NUM",
    DATATYPE: "CHAR",
    LENG: 15,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "EXPIRY_DATE",
    DATATYPE: "DATS",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "FLEET_VIN",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "CHASSIS_NUM",
    DATATYPE: "CHAR",
    LENG: 30,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "EQUNR",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
    MEMORYID: "EQN"
  },
  {
    FIELDNAME: "EQKTU",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SPRAS",
    DATATYPE: "LANG",
    LENG: 1,
    DECIMALS: 0,
    MEMORYID: "SPR"
  },
];