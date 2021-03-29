// SH DEBIT Customers by Tax Information : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "KUNNR",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "KUN"
  },
  {
    FIELDNAME: "LAND1",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "MCOD1",
    DATATYPE: "CHAR",
    LENG: 25,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BEGRU",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "STCD1",
    DATATYPE: "CHAR",
    LENG: 16,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "STCD2",
    DATATYPE: "CHAR",
    LENG: 11,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "STCEG",
    DATATYPE: "CHAR",
    LENG: 20,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "STCD3",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "STCD4",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "STCD5",
    DATATYPE: "CHAR",
    LENG: 60,
    DECIMALS: 0,
  },
];