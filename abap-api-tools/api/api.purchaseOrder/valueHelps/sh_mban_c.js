// SH MBAN_C Purchase requisition number (14) : abap 2.3.0 at: 2021-04-23 11:59:34

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

const helpSelector = [
  {"SH MBANA":{"title":"Purchase Requisitions per Asset"}},
  {"SH MBANB":{"title":"Purchase Requisitions per Requirement Tracking Number"}},
  {"SH MBAND":{"title":"Purchase Requisitions with Services"}},
  {"SH MBANE":{"title":"Purchase Requisitions per Purchasing Group"}},
  {"SH MBANG":{"title":"Purchase Requisitions per Order"}},
  {"SH MBANK":{"title":"Purchase Requisitions per Cost Center"}},
  {"SH MBANM":{"title":"Purchase Requisitions per Material"}},
  {"SH MBANN":{"title":"Purchase Requisitions per Network"}},
  {"SH MBANP":{"title":"Purchase Requisitions for Project"}},
  {"SH MBANV":{"title":"Purchase Requisitions per Sales Document"}},
  {"SH MBAN_TREX_SIMPLE":{"title":"Simple Search for Purchase Requisitions via Search Engine"}},
  {"SH MBAN_TREX_ADVANCED":{"title":"Advanced Search for Purchase Requisitions via Search Engine"}},
  {"SH MBAN_ESO_SIMPLE_E":{"title":"Simple Search for Purchase Requisitions via Enterpr. Search"}},
  {"SH MBAN_ESO_ADVANCED_E":{"title":"Advanced Search for Purchase Requisitions via Enterp. Search"}},
];