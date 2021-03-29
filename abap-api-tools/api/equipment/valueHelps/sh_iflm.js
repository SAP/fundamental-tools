// SH IFLM Functional Location (31) : abap 2.2.0 at: 2021-03-29 15:40:08

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
  {"SH IFLMA":{"title":"Asset"}},
  {"SH IFLMC":{"title":"Cost center"}},
  {"SH IFLMH":{"title":"Uppermost FunctLocs by StructIndicator"}},
  {"SH IFLMI":{"title":"Uppermost FunctLocs by category"}},
  {"SH IFLMK":{"title":"Uppermost FunctLocations by company area"}},
  {"SH IFLML":{"title":"Uppermost FunctLocations by location"}},
  {"SH IFLMP":{"title":"Location list"}},
  {"SH IFLMR":{"title":"Address"}},
  {"SH IFLMT":{"title":"Text (= Description)"}},
  {"SH IFLMQ":{"title":"Functional location list (service)"}},
  {"SH IFLMS":{"title":"Structural display"}},
  {"SH IFLMU":{"blacklist":{"search":"Screen output without connection to user."},"title":"Classification"}},
  {"SH IFLSA":{"title":"Asset"}},
  {"SH IFLSC":{"title":"Cost center"}},
  {"SH IFLSH":{"title":"Uppermost locations by structure indicator"}},
  {"SH IFLSI":{"title":"Uppermost locations by category"}},
  {"SH IFLSK":{"title":"Uppermost locations by company area"}},
  {"SH IFLSL":{"title":"Uppermost FunctLocations by location"}},
  {"SH IFLSP":{"blacklist":{"search":"Screen output without connection to user."},"title":"Location list"}},
  {"SH IFLSR":{"title":"Address"}},
  {"SH IFLST":{"title":"Text (= Description)"}},
  {"SH IFLSQ":{"blacklist":{"search":"Screen output without connection to user."},"title":"Location list (service)"}},
  {"SH IFLSS":{"blacklist":{"search":"Screen output without connection to user."},"title":"Structural display"}},
  {"SH IFLSU":{"blacklist":{"search":"Screen output without connection to user."},"title":"Classification"}},
  {"SH IFLSW":{"title":"Historical labels"}},
  {"SH IFLS_REAL_ESTATE":{"title":"Real Estate Object"}},
  {"SH IFL_ES_SIMPLE":{"title":"Simple Search for Functional Locations (Enterprise Search)"}},
  {"SH IFL_ES_ADVANCED":{"title":"Advanced Search for Functional Locations (Enterprise Search)"}},
  {"SH IFLM_REAL_ESTATE":{"title":"Real Estate Object"}},
  {"SH IFL_TREX_SIMPLE":{"title":"Quick Search of Functional Location via Search Engine"}},
  {"SH IFL_TREX_ADVANCED":{"title":"Advanced Search of Functional Location via Search Engine"}},
];