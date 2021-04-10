// SH MBANV Purchase Requisitions per Sales Document : abap 2.2.0 at: 2021-04-10 21:53:58

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

const title = "Purchase Requisitions per Sales Document";

const selectParams = [
  {
    FIELDNAME: "VBELN",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "AUN"
  },
  {
    FIELDNAME: "VBELP",
    DATATYPE: "NUMC",
    LENG: 6,
    DECIMALS: 0,
    MEMORYID: "APO"
  },
  {
    FIELDNAME: "VETEN",
    DATATYPE: "NUMC",
    LENG: 4,
    DECIMALS: 0,
  },
  {
    FIELDNAME: "BANFN",
    DATATYPE: "CHAR",
    LENG: 10,
    DECIMALS: 0,
    MEMORYID: "BAN"
  },
  {
    FIELDNAME: "BNFPO",
    DATATYPE: "NUMC",
    LENG: 5,
    DECIMALS: 0,
    MEMORYID: "BAP"
  },
  {
    FIELDNAME: "ZEBKN",
    DATATYPE: "NUMC",
    LENG: 2,
    DECIMALS: 0,
  }
];