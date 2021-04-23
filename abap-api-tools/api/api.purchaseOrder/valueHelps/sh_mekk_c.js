// SH MEKK_C Purchasing Document Number (24) : abap 2.3.0 at: 2021-04-23 11:59:34

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
  {"SH MEKKA":{"title":"Purchasing Documents per Asset"}},
  {"SH MEKKB":{"title":"Purchasing Documents per Requirement Tracking Number"}},
  {"SH MEKKC":{"title":"Requests for Quotation per RFQ Date"}},
  {"SH MEKKD":{"title":"Purchase Orders per PO Date"}},
  {"SH MEKKE":{"title":"Schedule Lines per Purchase Requisition"}},
  {"SH MEKKG":{"title":"Purchasing Documents per Order"}},
  {"SH MEKKH":{"title":"Purchase Orders for Services"}},
  {"SH MEKKI":{"title":"Contracts for Services"}},
  {"SH MEKKK":{"title":"Purchasing Documents per Cost Center"}},
  {"SH MEKKL":{"title":"Purchasing Documents per Vendor"}},
  {"SH MEKKM":{"title":"Purchasing Documents for Material"}},
  {"SH MEKKN":{"title":"Purchasing Documents per Network"}},
  {"SH MEKKP":{"title":"Purchasing Documents per Project"}},
  {"SH MEKKS":{"title":"Purchasing Documents per Collective Number"}},
  {"SH MEKKT":{"title":"Contracts per Agreement Date"}},
  {"SH MEKKU":{"title":"Scheduling Agreements per Agreement Date"}},
  {"SH MEKKV":{"title":"Purchasing Documents per Sales Document"}},
  {"SH MEKKW":{"title":"Purchasing Documents per Supplying Plant"}},
  {"SH MEKK_TREX_SIMPLE":{"title":"Simple Search for Purchasing Documents via Search Engine"}},
  {"SH MEKK_TREX_ADVANCED":{"title":"Advanced Search for Purchasing Documents via Search Engine"}},
  {"SH MMBSI_MEKK_DBSH_CC_E":{"title":"Search Help for Central Contracts"}},
  {"SH MMBSI_MEKK_TREX_CC_E":{"title":"Text Search for Central Contracts via Search Engine"}},
  {"SH MEKK_ESO_SIMPLE_E":{"title":"Simple Search for Purchasing Documents via Enterprise Search"}},
  {"SH MEKK_ESO_ADVANCED_E":{"title":"Advanced Search for Purchasing Documents via Enterpr. Search"}},
];