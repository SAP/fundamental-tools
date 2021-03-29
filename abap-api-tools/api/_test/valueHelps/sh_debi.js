// SH DEBI Customer Number (20) : abap 2.2.0 at: 2021-03-29 15:40:08

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
  {"SH DEBIA":{"title":"Customers (general)"}},
  {"SH DEBID":{"title":"Customers (by company code)"}},
  {"SH DEBIE":{"title":"Customers by country/company code"}},
  {"SH DEBIL":{"title":"Customers by country"}},
  {"SH DEBIP":{"title":"Customers by personnel number"}},
  {"SH DEBIT":{"title":"Customers by Tax Information"}},
  {"SH DEBIX":{"title":"Customers by Address Attributes"}},
  {"SH DEBIY":{"title":"Customers by Address Attributes (Fuzzy Search)"}},
  {"SH FM_DEBI_FMPSOIS":{"title":"Proceed Initially According to Customer Sub-Ledger Account"}},
  {"SH JVH_VPTNR":{"title":"JV partner in coding block"}},
  {"SH DEBIK":{"title":"Customers per account group"}},
  {"SH DEBIM":{"title":"Customers With Lease-Out"}},
  {"SH DEBIS":{"title":"Customers per sales group"}},
  {"SH DEBIW":{"title":"Customers with plant reference"}},
  {"SH DEBIZ":{"title":"Customers for Head Offices"}},
  {"SH DEBIC":{"blacklist":{"search":"Screen output without connection to user."},"title":"Customers (by class)"}},
  {"SH DEBI_ES_SIMPLE":{"title":"Simple Search for Customers using Search Engine"}},
  {"SH DEBI_ES_ADVANCED":{"title":"Advanced Search for Customers using Search Engine"}},
  {"SH REKUNNRCN":{"title":"Customer By Real Estate Contract"}},
  {"SH REKUNNR_VIRAINV":{"title":"Customer for Invoice Number (Real Estate)"}},
];