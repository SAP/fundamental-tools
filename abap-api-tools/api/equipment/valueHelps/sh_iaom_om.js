// SH IAOM_OM CO  Production Orders Created from OM : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "AUFNR",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
    MEMORYID: "ANR"
  },
  {
    FIELDNAME: "AUART",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "AAT"
  },
  {
    FIELDNAME: "PO_NUMBER",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "BES"
  },
  {
    FIELDNAME: "PO_ITEM_NR",
    DATATYPE: "NUMC",
    LENG: 5,
    DECIMALS: 0,
    MEMORYID: "BSP"
  },
  {
    FIELDNAME: "PO_ORDER_TYPE",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "BSA"
  },
  {
    FIELDNAME: "PURCH_ORG",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
    MEMORYID: "EKO"
  },
  {
    FIELDNAME: "PURCH_GRP",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
    MEMORYID: "EKG"
  },
  {
    FIELDNAME: "VENDOR",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "LIF"
  },
  {
    FIELDNAME: "WORK_ORDER_ID",
    DATATYPE: "CHAR",
    LENG: 35,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "WORK_ORDER_ITEM",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "WO_CREATE_UNAME",
    DATATYPE: "CHAR",
    LENG: 12,
    DECIMALS: 0,
  },
];