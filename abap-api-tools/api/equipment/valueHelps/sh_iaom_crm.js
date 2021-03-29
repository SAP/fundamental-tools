// SH IAOM_CRM Internal Orders Created from CRM Service : abap 2.2.0 at: 2021-03-29 15:40:08

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
    FIELDNAME: "OBJECT_ID",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PROCESS_DESCRIPT",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PROCESS_TYPE",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SERVICE_ORG_RESP",
    DATATYPE: "CHAR",
    LENG: 14,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SERVICE_ORG",
    DATATYPE: "CHAR",
    LENG: 14,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "NUMBER_INT",
    DATATYPE: "NUMC",
    LENG: 10,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ITEM_DESCRIPTION",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "ITM_TYPE",
    DATATYPE: "CHAR",
    LENG: 4,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SERVICE_TECH_ORG",
    DATATYPE: "CHAR",
    LENG: 14,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "CATEGORY_ID",
    DATATYPE: "CHAR",
    LENG: 18,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "KUNNR",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "VAG"
  },
];