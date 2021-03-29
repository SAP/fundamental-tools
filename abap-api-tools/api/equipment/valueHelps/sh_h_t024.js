// SH H_T024 Purchasing Group : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "EKGRP",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
    MEMORYID: "EKG"
  },
  {
    FIELDNAME: "EKNAM",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "EKTEL",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "TELFX",
    DATATYPE: "CHAR",
    LENG: 31,
    DECIMALS: 0,
  },
];