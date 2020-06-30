// Application log: log header
CH_BALHDR: {type: 'CH', id: 'BALHDR', valueProperty: 'LOGNUMBER',
    displayProperty: [], selection: [], requestedFields: 'LOGNUMBER' },

// Application log: log message
CH_BALM: {type: 'CH', id: 'BALM', valueProperty: ['b'LOGNUMBER'','b'MSGNUMBER''],
    displayProperty: [], selection: [], requestedFields: ['b'LOGNUMBER'','b'MSGNUMBER''] },

// CT /COE/PAM_FLD_VAL
CT_/COE/PAM_FLD_VAL: {type: 'CT', id: '/COE/PAM_FLD_VAL', valueProperty: 'FIELDNAME',
    displayProperty: [], selection: [], requestedFields: 'FIELDNAME' },

// Addresses (Business Address Services)
CT_ADRC: {type: 'CT', id: 'ADRC', valueProperty: ['b'ADDRNUMBER'','b'DATE_FROM'','b'NATION''],
    displayProperty: [], selection: [], requestedFields: ['b'ADDRNUMBER'','b'DATE_FROM'','b'NATION''] },

// Asset Master Record Segment
CT_ANLA: {type: 'CT', id: 'ANLA', valueProperty: ['b'BUKRS'','b'ANLN1'','b'ANLN2''],
    displayProperty: [], selection: [], requestedFields: ['b'BUKRS'','b'ANLN1'','b'ANLN2''] },

// Main asset number
CT_ANLH: {type: 'CT', id: 'ANLH', valueProperty: ['b'BUKRS'','b'ANLN1''],
    displayProperty: [], selection: [], requestedFields: ['b'BUKRS'','b'ANLN1''] },

// CIM Resource - Entities
CT_CRID: {type: 'CT', id: 'CRID', valueProperty: ['b'OBJTY'','b'OBJID''],
    displayProperty: [], selection: [], requestedFields: ['b'OBJTY'','b'OBJID''] },

// Cost Center Master Record
CT_CSKS: {type: 'CT', id: 'CSKS', valueProperty: ['b'KOKRS'','b'KOSTL'','b'DATBI''],
    displayProperty: [], selection: [], requestedFields: ['b'KOKRS'','b'KOSTL'','b'DATBI''] },

// Table Fields
CT_DD03L: {type: 'CT', id: 'DD03L', valueProperty: ['b'TABNAME'','b'FIELDNAME'','b'AS4LOCAL'','b'AS4VERS'','b'POSITION''],
    displayProperty: [], selection: [], requestedFields: ['b'TABNAME'','b'FIELDNAME'','b'AS4LOCAL'','b'AS4VERS'','b'POSITION''] },

// Document Info Record
CT_DRAW: {type: 'CT', id: 'DRAW', valueProperty: ['b'DOKAR'','b'DOKNR'','b'DOKVR'','b'DOKTL''],
    displayProperty: [], selection: [], requestedFields: ['b'DOKAR'','b'DOKNR'','b'DOKVR'','b'DOKTL''] },

// Offset Type Codes
CT_EAML_D_OFFSET_TC: {type: 'CT', id: 'EAML_D_OFFSET_TC', valueProperty: 'OFFSET_TC',
    displayProperty: [], selection: [], requestedFields: 'OFFSET_TC' },

// Equipment master data
CT_EQUI: {type: 'CT', id: 'EQUI', valueProperty: 'EQUNR',
    displayProperty: [], selection: [], requestedFields: 'EQUNR' },

// General Material Data
CT_MARA: {type: 'CT', id: 'MARA', valueProperty: 'MATNR',
    displayProperty: [], selection: [], requestedFields: 'MATNR' },

// Batches (if Batch Management Cross-Plant)
CT_MCH1: {type: 'CT', id: 'MCH1', valueProperty: ['b'MATNR'','b'CHARG''],
    displayProperty: [], selection: [], requestedFields: ['b'MATNR'','b'CHARG''] },

// General Object Number
CT_ONR00: {type: 'CT', id: 'ONR00', valueProperty: 'OBJNR',
    displayProperty: [], selection: [], requestedFields: 'OBJNR' },

// WBS (Work Breakdown Structure) Element Master Data
CT_PRPS: {type: 'CT', id: 'PRPS', valueProperty: 'PSPNR',
    displayProperty: [], selection: [], requestedFields: 'PSPNR' },

// Quality Notification
CT_QMEL: {type: 'CT', id: 'QMEL', valueProperty: 'QMNUM',
    displayProperty: [], selection: [], requestedFields: 'QMNUM' },

// SDOK: Information object classes
CT_SDOKIOCL: {type: 'CT', id: 'SDOKIOCL', valueProperty: 'IO_CLASS',
    displayProperty: [], selection: [], requestedFields: 'IO_CLASS' },

// Countries
CT_T005: {type: 'CT', id: 'T005', valueProperty: 'LAND1',
    displayProperty: [], selection: [], requestedFields: 'LAND1' },

// Units of Measurement
CT_T006: {type: 'CT', id: 'T006', valueProperty: 'MSEHI',
    displayProperty: [], selection: [], requestedFields: 'MSEHI' },

// ISO codes for units of measurement
CT_T006I: {type: 'CT', id: 'T006I', valueProperty: 'ISOCODE',
    displayProperty: [], selection: [], requestedFields: 'ISOCODE' },

// Message IDs for T100
CT_T100A: {type: 'CT', id: 'T100A', valueProperty: 'ARBGB',
    displayProperty: [], selection: [], requestedFields: 'ARBGB' },

// Technical report
CT_T352B: {type: 'CT', id: 'T352B', valueProperty: 'RBNR',
    displayProperty: [], selection: [], requestedFields: 'RBNR' },

// ABC indicator for technical objects
CT_T370C: {type: 'CT', id: 'T370C', valueProperty: 'ABCKZ',
    displayProperty: [], selection: [], requestedFields: 'ABCKZ' },

// Type of technical object
CT_T370K: {type: 'CT', id: 'T370K', valueProperty: 'EQART',
    displayProperty: [], selection: [], requestedFields: 'EQART' },

// Equipment categories
CT_T370T: {type: 'CT', id: 'T370T', valueProperty: 'EQTYP',
    displayProperty: [], selection: [], requestedFields: 'EQTYP' },

// Logical system
CT_TBDLS: {type: 'CT', id: 'TBDLS', valueProperty: 'LOGSYS',
    displayProperty: [], selection: [], requestedFields: 'LOGSYS' },

// Characteristics Groups
CT_TCMG: {type: 'CT', id: 'TCMG', valueProperty: 'ATKLA',
    displayProperty: [], selection: [], requestedFields: 'ATKLA' },

// Currency Codes
CT_TCURC: {type: 'CT', id: 'TCURC', valueProperty: 'WAERS',
    displayProperty: [], selection: [], requestedFields: 'WAERS' },

// Document Types
CT_TDWA: {type: 'CT', id: 'TDWA', valueProperty: 'DOKAR',
    displayProperty: [], selection: [], requestedFields: 'DOKAR' },

// Notification Types
CT_TQ80: {type: 'CT', id: 'TQ80', valueProperty: 'QMART',
    displayProperty: [], selection: [], requestedFields: 'QMART' },

