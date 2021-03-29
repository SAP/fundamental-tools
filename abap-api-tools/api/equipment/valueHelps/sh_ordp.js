// SH ORDP Standing order number (13) : abap 2.2.0 at: 2021-03-29 15:40:08

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
  {"SH ORDPA":{"title":"Orders using order type/controlling area"}},
  {"SH ORDPE":{"title":"Orders for preventive maintenance plan"}},
  {"SH ORDPF":{"title":"Orders for fixed asset"}},
  {"SH ORDPG":{"title":"Orders for cost center"}},
  {"SH ORDPH":{"title":"Orders for superior order"}},
  {"SH ORDPL":{"title":"PM orders using order list"}},
  {"SH ORDPQ":{"title":"Service orders using order list"}},
  {"SH ORDPK":{"title":"Service orders for the customer"}},
  {"SH ORDER_REAL_ESTATE":{"title":"Orders for Real Estate Object"}},
  {"SH ORDP_ES_SIMPLE":{"title":"Simple search for Service Orders using Search Engine"}},
  {"SH ORDP_ES_ADVANCED_E":{"title":"Advanced Search for Service Orders using Search Engine"}},
  {"SH PM_ORDP_ES_SIMPLE":{"title":"Simple Search for PM Orders using Enterprise Search"}},
  {"SH PM_ORDP_ES_ADVANCED_E":{"title":"Advanced Search for PM Orders using Enterprise Search"}},
];