// SH MRTA Lease-Out Number (9) : abap 2.2.0 at: 2021-03-29 15:40:08

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
  {"SH MRTAA":{"title":"All lease-outs"}},
  {"SH MRTAB":{"title":"Active lease-outs"}},
  {"SH MRTAC":{"title":"Inactive lease-outs"}},
  {"SH MRTAE":{"title":"Collective Lease-Out Selection"}},
  {"SH MRTAF":{"title":"Selection via rental unit"}},
  {"SH MRTAM":{"title":"Selection via master tenant"}},
  {"SH MRTAN":{"title":"Selection via master tenant with address"}},
  {"SH MRTAP":{"title":"Selection via any partner"}},
  {"SH MRTAQ":{"title":"Selection via any partner with address"}},
];