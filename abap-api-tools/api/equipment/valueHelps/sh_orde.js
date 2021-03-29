// SH ORDE Settlement order (20) : abap 2.2.0 at: 2021-03-29 15:40:08

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
  {"SH ORDEA":{"title":"Search by controlling area / processing group"}},
  {"SH ORDEB":{"title":"Search by controlling area / order type"}},
  {"SH ORDER_SES_QUICK":{"title":"Simple Search for Orders"}},
  {"SH ORDER_SES_ADVANCED":{"title":"Advanced Search for Orders"}},
  {"SH ORDEC":{"title":"Prod. Orders for Original Order (Trigger Point Function)"}},
  {"SH ORDED":{"title":"Production Orders per MRP Scheduler"}},
  {"SH ORDEE":{"blacklist":{"search":"Screen output without connection to user."},"title":"Production orders using the info system"}},
  {"SH ORDEF":{"title":"Production Orders for Production Supervisor"}},
  {"SH ORDEK":{"blacklist":{"search":"Screen output without connection to user."},"title":"Search using classification data"}},
  {"SH ORDEL":{"title":"PM orders using order list"}},
  {"SH ORDEQ":{"title":"Service orders using order list"}},
  {"SH ORDER_REAL_ESTATE":{"title":"Orders for Real Estate Object"}},
  {"SH ORDES":{"title":"Process orders for original order (trigger point function)"}},
  {"SH ORDET":{"title":"Process Orders for MRP Controller"}},
  {"SH ORDBI":{"blacklist":{"search":"Screen output without connection to user."},"title":"Process Orders Using Info System"}},
  {"SH ORDEU":{"title":"Process Orders for Production Supervisor"}},
  {"SH IAOM_CPROJECTS":{"title":"Internal Orders Created from cProjects"}},
  {"SH IAOM_CRM":{"title":"Internal Orders Created from CRM Service"}},
  {"SH IAOM_OM":{"title":"CO  Production Orders Created from OM"}},
  {"SH JVH_ORDEI":{"title":"Joint Venture"}},
];