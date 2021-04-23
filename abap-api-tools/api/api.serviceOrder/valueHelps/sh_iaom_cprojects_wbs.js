// SH IAOM_CPROJECTS_WBS WBS Elements with Assigned cProjects Project Elements : abap 2.3.0 at: 2021-04-23 11:59:34

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

const title = "WBS Elements with Assigned cProjects Project Elements";

const selectParams = [
  {
    FIELDNAME: "POSID",
    DATATYPE: "CHAR",
    LENG: 24,
    DECIMALS: 0,
    MEMORYID: "PRO"
  },
  {
    FIELDNAME: "RESP_ORG_UNIT",
    DATATYPE: "NUMC",
    LENG: 8,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PRIORITY",
    DATATYPE: "NUMC",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "PRO_TYPE",
    DATATYPE: "CHAR",
    LENG: 15,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "CAUSE",
    DATATYPE: "CHAR",
    LENG: 15,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "GROUPING",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "SEARCH_FIELD",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "TEMP_EXTERNAL_ID",
    DATATYPE: "CHAR",
    LENG: 24,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "CUSTOMER",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "VAG"
  },
  {
    FIELDNAME: "PROJ_ELEMENT_ID",
    DATATYPE: "CHAR",
    LENG: 24,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "OBJECT_TYPE",
    DATATYPE: "CHAR",
    LENG: 3,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BEZEICH_PRJ_ELEM",
    DATATYPE: "CHAR",
    LENG: 40,
    DECIMALS: 0,
  }
];