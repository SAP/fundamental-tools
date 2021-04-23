// SH USER_COMP User Responsible for the Profit Center (9) : abap 2.3.0 at: 2021-04-23 11:59:34

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
  {"SH USER_DOCU":{"title":"Users by Description"}},
  {"SH USER_ADDR":{"title":"Users by Address Data"}},
  {"SH USER_LOGON":{"title":"Users by Logon Data"}},
  {"SH USER_PROF":{"title":"Users by Profiles"}},
  {"SH USER_AGRP":{"title":"Users by Roles"}},
  {"SH USER_CUA_SYSTEMS":{"title":"Users by Systems"}},
  {"SH USER_CUA_ROLE":{"title":"Users by System-Specific Roles"}},
  {"SH USER_CUA_PROFILE":{"title":"Users by System-Specific Profiles"}},
  {"SH USER_GROUP":{"title":"Users by User Groups (General)"}},
];