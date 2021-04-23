// SH C_SAKNR G/L Account Number (8) : abap 2.3.0 at: 2021-04-23 11:59:34

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
  {"SH GL_ACCT_CA_NO":{"title":"G/L account no. in chart of accounts"}},
  {"SH GL_ACCT_CA_TEXT":{"title":"G/L account description in chart of accounts"}},
  {"SH GL_ACCT_CA_FLAGS":{"title":"G/L account with delete/lock flag in chart of accounts"}},
  {"SH GL_ACCT_CA_KEY":{"title":"Key words"}},
  {"SH GL_ACCT_CC_NO":{"title":"G/L account number in company code"}},
  {"SH GL_ACCT_CC_TEXT":{"title":"G/L account description in company code"}},
  {"SH GL_ACCT_CC_FLAGS":{"title":"G/L account with delete/lock flag in company code"}},
  {"SH GL_ACCT_CC_ALTERNATIV_NO":{"title":"Alternative account number"}},
];