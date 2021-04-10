// SH PRPM Work breakdown structure element (WBS element) (9) : abap 2.2.0 at: 2021-04-10 21:53:58

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
  {"SH PRPMP":{"title":"WBS element: Project definition and description"}},
  {"SH PRPMK":{"title":"WBS element: short identification"}},
  {"SH PRPMZ":{"title":"WBS element: persons responsible"}},
  {"SH PRPMA":{"title":"WBS: Account assignment elements"}},
  {"SH PRPMB":{"title":"WBS: Billing elements"}},
  {"SH PRPMC":{"blacklist":{"search":"Screen output without connection to user."},"title":"WBS element: Find using classification"}},
  {"SH CN_LDST_PS_PR":{"title":"WBS Element, Short Text"}},
  {"SH IAOM_CPROJECTS_WBS":{"title":"WBS Elements with Assigned cProjects Project Elements"}},
  {"SH JVH_PRPMG":{"title":"Joint Venture"}},
];