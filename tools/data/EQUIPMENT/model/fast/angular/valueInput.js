// Application log: log header
CH_BALHDR: {type: 'CH', id: 'BALHDR', valueProperty: 'LOGNUMBER',
    displayProperty: [], selection: [], requestedFields: 'LOGNUMBER' },

// Application log: log message
CH_BALM: {type: 'CH', id: 'BALM', valueProperty: ['LOGNUMBER', 'MSGNUMBER'],
    displayProperty: [], selection: [], requestedFields: ['LOGNUMBER', 'MSGNUMBER'] },

// Addresses (Business Address Services)
CT_ADRC: {type: 'CT', id: 'ADRC', valueProperty: ['ADDRNUMBER', 'DATE_FROM', 'NATION'],
    displayProperty: [], selection: [], requestedFields: ['ADDRNUMBER', 'DATE_FROM', 'NATION'] },

// Asset Master Record Segment
CT_ANLA: {type: 'CT', id: 'ANLA', valueProperty: ['BUKRS', 'ANLN1', 'ANLN2'],
    displayProperty: [], selection: [], requestedFields: ['BUKRS', 'ANLN1', 'ANLN2'] },

// Main asset number
CT_ANLH: {type: 'CT', id: 'ANLH', valueProperty: ['BUKRS', 'ANLN1'],
    displayProperty: [], selection: [], requestedFields: ['BUKRS', 'ANLN1'] },

// CIM Resource - Entities
CT_CRID: {type: 'CT', id: 'CRID', valueProperty: ['OBJTY', 'OBJID'],
    displayProperty: [], selection: [], requestedFields: ['OBJTY', 'OBJID'] },

// Cost Center Master Record
CT_CSKS: {type: 'CT', id: 'CSKS', valueProperty: ['KOKRS', 'KOSTL', 'DATBI'],
    displayProperty: [], selection: [], requestedFields: ['KOKRS', 'KOSTL', 'DATBI'] },

// SAP Tables
CT_DD02L: {type: 'CT', id: 'DD02L', valueProperty: ['TABNAME', 'AS4LOCAL', 'AS4VERS'],
    displayProperty: [], selection: [], requestedFields: ['TABNAME', 'AS4LOCAL', 'AS4VERS'] },

// Table Fields
CT_DD03L: {type: 'CT', id: 'DD03L', valueProperty: ['TABNAME', 'FIELDNAME', 'AS4LOCAL', 'AS4VERS', 'POSITION'],
    displayProperty: [], selection: [], requestedFields: ['TABNAME', 'FIELDNAME', 'AS4LOCAL', 'AS4VERS', 'POSITION'] },

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
CT_MCH1: {type: 'CT', id: 'MCH1', valueProperty: ['MATNR', 'CHARG'],
    displayProperty: [], selection: [], requestedFields: ['MATNR', 'CHARG'] },

// General Object Number
CT_ONR00: {type: 'CT', id: 'ONR00', valueProperty: 'OBJNR',
    displayProperty: [], selection: [], requestedFields: 'OBJNR' },

// WBS (Work Breakdown Structure) Element Master Data
CT_PRPS: {type: 'CT', id: 'PRPS', valueProperty: 'PSPNR',
    displayProperty: [], selection: [], requestedFields: 'PSPNR' },

// Plants/Branches
CT_T001W: {type: 'CT', id: 'T001W', valueProperty: 'WERKS',
    displayProperty: [], selection: [], requestedFields: 'WERKS' },

// Countries
CT_T005: {type: 'CT', id: 'T005', valueProperty: 'LAND1',
    displayProperty: [], selection: [], requestedFields: 'LAND1' },

// Units of Measurement
CT_T006: {type: 'CT', id: 'T006', valueProperty: 'MSEHI',
    displayProperty: [], selection: [], requestedFields: 'MSEHI' },

// ISO codes for units of measurement
CT_T006I: {type: 'CT', id: 'T006I', valueProperty: 'ISOCODE',
    displayProperty: [], selection: [], requestedFields: 'ISOCODE' },

// Maintenance planner groups
CT_T024I: {type: 'CT', id: 'T024I', valueProperty: ['IWERK', 'INGRP'],
    displayProperty: [], selection: [], requestedFields: ['IWERK', 'INGRP'] },

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

// Currency Codes
CT_TCURC: {type: 'CT', id: 'TCURC', valueProperty: 'WAERS',
    displayProperty: [], selection: [], requestedFields: 'WAERS' },

// Notification Types
CT_TQ80: {type: 'CT', id: 'TQ80', valueProperty: 'QMART',
    displayProperty: [], selection: [], requestedFields: 'QMART' },

