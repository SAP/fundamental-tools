// SH MAT1 Material Number (30) : abap 2.2.0 at: 2021-03-29 15:40:08

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
  {"SH MAT0M":{"title":"Material Number/Material Description"}},
  {"SH MAT1A":{"title":"Material by old material number"}},
  {"SH MAT1B":{"title":"Material by bill of material"}},
  {"SH MAT1C":{"title":"Material transferred from CAD system"}},
  {"SH MAT1E":{"title":"Competitive product by competitor"}},
  {"SH MAT1F_E":{"title":"Production Resources/Tools by Description/PRT Grouping"}},
  {"SH MAT1H":{"title":"Sales material by general product hierarchy"}},
  {"SH MAT1I":{"title":"Material by vendor's material number"}},
  {"SH MAT1J":{"title":"Material by material category"}},
  {"SH MAT1K":{"blacklist":{"search":"Screen output without connection to user."},"title":"Materials for class"}},
  {"SH MAT1L":{"title":"Material by material group"}},
  {"SH MAT1N":{"title":"Material by EAN (International Article Number)"}},
  {"SH MAT1O":{"blacklist":{"search":"Screen output without connection to user."},"title":"Materials by several classes"}},
  {"SH MAT1P":{"title":"Material by product hierarchy"}},
  {"SH MAT1R":{"title":"Material by task list"}},
  {"SH MAT1S":{"title":"Sales material by description"}},
  {"SH MAT1T_E":{"title":"Material by Material Type"}},
  {"SH MAT1V":{"title":"Material by Supply Area"}},
  {"SH MAT1W_E":{"title":"Plant Material by Description"}},
  {"SH FSHH_MATNR":{"title":"Material with Fashion Fields"}},
  {"SH SGT_MATNR_S_E":{"title":"Material with Segmentation"}},
  {"SH WRF_MAT_CHAR_VAL":{"title":"Material by Characteristic Value"}},
  {"SH MAT1MPN":{"title":"Search Help for Manufacturer Part Number"}},
  {"SH MAT2MPN":{"title":"Search Help for Manufacturer Part Number with AMPL"}},
  {"SH MAT1_TREX_SIMPLE":{"title":"Quick Search for Material Using Search Engine"}},
  {"SH MAT1_TREX_ADVANCED":{"title":"Advanced Search for Material Using Search Engine"}},
  {"SH EANE_RFQ_QUOTE_H":{"title":"Material for International Article Numbers: Vendor-Specific"}},
  {"SH /BEV2/EDMATNR_SH_E":{"title":"Excise Duty Material for Description"}},
  {"SH MAT1_ESH_SIMPLE_E_E":{"title":"Simple Search Help for Material (via Enterprise Search)"}},
  {"SH MAT1_ESH_TREX_BASIC_E":{"title":"Advanced Search for Material using Search Engine"}},
];