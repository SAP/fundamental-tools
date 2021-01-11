// Asset Master Record Segment
CH_ANLA: {type: 'CH', id: 'ANLA', valueProperty: ['BUKRS', 'ANLN1', 'ANLN2'],
    displayProperty: [], selection: [], requestedFields: ['BUKRS', 'ANLN1', 'ANLN2'] },

// Main asset number
CH_ANLH: {type: 'CH', id: 'ANLH', valueProperty: ['BUKRS', 'ANLN1'],
    displayProperty: [], selection: [], requestedFields: ['BUKRS', 'ANLN1'] },

// Order master data
CH_AUFK: {type: 'CH', id: 'AUFK', valueProperty: 'AUFNR',
    displayProperty: [], selection: [], requestedFields: 'AUFNR' },

// Allocation Table Document Header
CH_AUKO: {type: 'CH', id: 'AUKO', valueProperty: 'ABELN',
    displayProperty: [], selection: [], requestedFields: 'ABELN' },

// Allocation Table Document Item
CH_AUPO: {type: 'CH', id: 'AUPO', valueProperty: ['ABELN', 'ABELP'],
    displayProperty: [], selection: [], requestedFields: ['ABELN', 'ABELP'] },

// Application log: log header
CH_BALHDR: {type: 'CH', id: 'BALHDR', valueProperty: 'LOGNUMBER',
    displayProperty: [], selection: [], requestedFields: 'LOGNUMBER' },

// Application log: log message
CH_BALM: {type: 'CH', id: 'BALM', valueProperty: ['LOGNUMBER', 'MSGNUMBER'],
    displayProperty: [], selection: [], requestedFields: ['LOGNUMBER', 'MSGNUMBER'] },

// Master Record: Cost Object ID Number
CH_CKPH: {type: 'CH', id: 'CKPH', valueProperty: ['KSTRG', 'DATBI'],
    displayProperty: [], selection: [], requestedFields: ['KSTRG', 'DATBI'] },

// Purchase Requisition
CH_EBAN: {type: 'CH', id: 'EBAN', valueProperty: ['BANFN', 'BNFPO'],
    displayProperty: [], selection: [], requestedFields: ['BANFN', 'BNFPO'] },

// Foreign Trade: Export/Import Header Data
CH_EIKP: {type: 'CH', id: 'EIKP', valueProperty: 'EXNUM',
    displayProperty: [], selection: [], requestedFields: 'EXNUM' },

// Purchasing Info Record: General Data
CH_EINA: {type: 'CH', id: 'EINA', valueProperty: 'INFNR',
    displayProperty: [], selection: [], requestedFields: 'INFNR' },

// Scheduling Agreement Schedule Lines
CH_EKET: {type: 'CH', id: 'EKET', valueProperty: ['EBELN', 'EBELP', 'ETENR'],
    displayProperty: [], selection: [], requestedFields: ['EBELN', 'EBELP', 'ETENR'] },

// Purchasing Document Header
CH_EKKO: {type: 'CH', id: 'EKKO', valueProperty: 'EBELN',
    displayProperty: [], selection: [], requestedFields: 'EBELN' },

// Purchasing Document Item
CH_EKPO: {type: 'CH', id: 'EKPO', valueProperty: ['EBELN', 'EBELP'],
    displayProperty: [], selection: [], requestedFields: ['EBELN', 'EBELP'] },

// Service Type Editions
CH_ESLA: {type: 'CH', id: 'ESLA', valueProperty: ['LBNUM', 'AUSGB'],
    displayProperty: [], selection: [], requestedFields: ['LBNUM', 'AUSGB'] },

// Service Package Header Data
CH_ESLH: {type: 'CH', id: 'ESLH', valueProperty: 'PACKNO',
    displayProperty: [], selection: [], requestedFields: 'PACKNO' },

// Batches (if Batch Management Cross-Plant)
CH_MCH1: {type: 'CH', id: 'MCH1', valueProperty: ['MATNR', 'CHARG'],
    displayProperty: [], selection: [], requestedFields: ['MATNR', 'CHARG'] },

// Reservation/dependent requirements
CH_RESB: {type: 'CH', id: 'RESB', valueProperty: ['RSNUM', 'RSPOS', 'RSART'],
    displayProperty: [], selection: [], requestedFields: ['RSNUM', 'RSPOS', 'RSART'] },

// Sales Document: Schedule Line Data
CH_VBEP: {type: 'CH', id: 'VBEP', valueProperty: ['VBELN', 'POSNR', 'ETENR'],
    displayProperty: [], selection: [], requestedFields: ['VBELN', 'POSNR', 'ETENR'] },

// Sales Document: Header Status and Administrative Data
CH_VBUK: {type: 'CH', id: 'VBUK', valueProperty: 'VBELN',
    displayProperty: [], selection: [], requestedFields: 'VBELN' },

// Sales Document: Item Status
CH_VBUP: {type: 'CH', id: 'VBUP', valueProperty: ['VBELN', 'POSNR'],
    displayProperty: [], selection: [], requestedFields: ['VBELN', 'POSNR'] },

// Addresses (Business Address Services)
CT_ADRC: {type: 'CT', id: 'ADRC', valueProperty: ['ADDRNUMBER', 'DATE_FROM', 'NATION'],
    displayProperty: [], selection: [], requestedFields: ['ADDRNUMBER', 'DATE_FROM', 'NATION'] },

// Regional structure grouping
CT_ADRREGGRP: {type: 'CT', id: 'ADRREGGRP', valueProperty: 'REGIOGROUP',
    displayProperty: [], selection: [], requestedFields: 'REGIOGROUP' },

// Street type
CT_ADRSTRTYPE: {type: 'CT', id: 'ADRSTRTYPE', valueProperty: ['COUNTRY', 'STRTYPEAB'],
    displayProperty: [], selection: [], requestedFields: ['COUNTRY', 'STRTYPEAB'] },

// Asset Master Record Segment
CT_ANLA: {type: 'CT', id: 'ANLA', valueProperty: ['BUKRS', 'ANLN1', 'ANLN2'],
    displayProperty: [], selection: [], requestedFields: ['BUKRS', 'ANLN1', 'ANLN2'] },

// Main asset number
CT_ANLH: {type: 'CT', id: 'ANLH', valueProperty: ['BUKRS', 'ANLN1'],
    displayProperty: [], selection: [], requestedFields: ['BUKRS', 'ANLN1'] },

// Order master data
CT_AUFK: {type: 'CT', id: 'AUFK', valueProperty: 'AUFNR',
    displayProperty: [], selection: [], requestedFields: 'AUFNR' },

// Profit Center Master Data Table
CT_CEPC: {type: 'CT', id: 'CEPC', valueProperty: ['PRCTR', 'DATBI', 'KOKRS'],
    displayProperty: [], selection: [], requestedFields: ['PRCTR', 'DATBI', 'KOKRS'] },

// Master Record: Cost Object ID Number
CT_CKPH: {type: 'CT', id: 'CKPH', valueProperty: ['KSTRG', 'DATBI'],
    displayProperty: [], selection: [], requestedFields: ['KSTRG', 'DATBI'] },

// Cost Center Master Record
CT_CSKS: {type: 'CT', id: 'CSKS', valueProperty: ['KOKRS', 'KOSTL', 'DATBI'],
    displayProperty: [], selection: [], requestedFields: ['KOKRS', 'KOSTL', 'DATBI'] },

// SAP Tables
CT_DD02L: {type: 'CT', id: 'DD02L', valueProperty: ['TABNAME', 'AS4LOCAL', 'AS4VERS'],
    displayProperty: [], selection: [], requestedFields: ['TABNAME', 'AS4LOCAL', 'AS4VERS'] },

// Purchase Requisition
CT_EBAN: {type: 'CT', id: 'EBAN', valueProperty: ['BANFN', 'BNFPO'],
    displayProperty: [], selection: [], requestedFields: ['BANFN', 'BNFPO'] },

// Purchasing Document Item
CT_EKPO: {type: 'CT', id: 'EKPO', valueProperty: ['EBELN', 'EBELP'],
    displayProperty: [], selection: [], requestedFields: ['EBELN', 'EBELP'] },

// Service Package Header Data
CT_ESLH: {type: 'CT', id: 'ESLH', valueProperty: 'PACKNO',
    displayProperty: [], selection: [], requestedFields: 'PACKNO' },

// Commitment items master data
CT_FMCI: {type: 'CT', id: 'FMCI', valueProperty: ['FIKRS', 'GJAHR', 'FIPEX'],
    displayProperty: [], selection: [], requestedFields: ['FIKRS', 'GJAHR', 'FIPEX'] },

// Funds Center Master Record
CT_FMFCTR: {type: 'CT', id: 'FMFCTR', valueProperty: ['FIKRS', 'FICTR', 'DATBIS'],
    displayProperty: [], selection: [], requestedFields: ['FIKRS', 'FICTR', 'DATBIS'] },

// FIFM: Financing code
CT_FMFINCODE: {type: 'CT', id: 'FMFINCODE', valueProperty: ['FIKRS', 'FINCODE'],
    displayProperty: [], selection: [], requestedFields: ['FIKRS', 'FINCODE'] },

// FM: Assignments of Funds to Budget Periods
CT_FMFUNDBPD: {type: 'CT', id: 'FMFUNDBPD', valueProperty: ['FIKRS', 'FINCODE', 'BUDGET_PD'],
    displayProperty: [], selection: [], requestedFields: ['FIKRS', 'FINCODE', 'BUDGET_PD'] },

// Commitment item, internal and external number (conversion)
CT_FMFXPO: {type: 'CT', id: 'FMFXPO', valueProperty: 'FIPOS',
    displayProperty: [], selection: [], requestedFields: 'FIPOS' },

// Document Header: Manual Document Entry
CT_KBLK: {type: 'CT', id: 'KBLK', valueProperty: 'BELNR',
    displayProperty: [], selection: [], requestedFields: 'BELNR' },

// Document Item: Manual Document Entry
CT_KBLP: {type: 'CT', id: 'KBLP', valueProperty: ['BELNR', 'BLPOS'],
    displayProperty: [], selection: [], requestedFields: ['BELNR', 'BLPOS'] },

// General Data in Customer Master
CT_KNA1: {type: 'CT', id: 'KNA1', valueProperty: 'KUNNR',
    displayProperty: [], selection: [], requestedFields: 'KUNNR' },

// Vendor Master (General Section)
CT_LFA1: {type: 'CT', id: 'LFA1', valueProperty: 'LIFNR',
    displayProperty: [], selection: [], requestedFields: 'LIFNR' },

// General Material Data
CT_MARA: {type: 'CT', id: 'MARA', valueProperty: 'MATNR',
    displayProperty: [], selection: [], requestedFields: 'MATNR' },

// Batches (if Batch Management Cross-Plant)
CT_MCH1: {type: 'CT', id: 'MCH1', valueProperty: ['MATNR', 'CHARG'],
    displayProperty: [], selection: [], requestedFields: ['MATNR', 'CHARG'] },

// Countries
CT_T005: {type: 'CT', id: 'T005', valueProperty: 'LAND1',
    displayProperty: [], selection: [], requestedFields: 'LAND1' },

// Taxes: Region (Province) Key
CT_T005S: {type: 'CT', id: 'T005S', valueProperty: ['LAND1', 'BLAND'],
    displayProperty: [], selection: [], requestedFields: ['LAND1', 'BLAND'] },

// Tax Keys
CT_T007A: {type: 'CT', id: 'T007A', valueProperty: ['KALSM', 'MWSKZ'],
    displayProperty: [], selection: [], requestedFields: ['KALSM', 'MWSKZ'] },

// Shipping Instructions, Purchasing
CT_T027A: {type: 'CT', id: 'T027A', valueProperty: 'EVERS',
    displayProperty: [], selection: [], requestedFields: 'EVERS' },

// Global Valuation Types
CT_T149D: {type: 'CT', id: 'T149D', valueProperty: 'BWTAR',
    displayProperty: [], selection: [], requestedFields: 'BWTAR' },

// Purchasing Document Types
CT_T161: {type: 'CT', id: 'T161', valueProperty: ['BSTYP', 'BSART'],
    displayProperty: [], selection: [], requestedFields: ['BSTYP', 'BSART'] },

// Release Codes
CT_T161E: {type: 'CT', id: 'T161E', valueProperty: 'FRGAB',
    displayProperty: [], selection: [], requestedFields: 'FRGAB' },

// Confirmation Categories
CT_T163E: {type: 'CT', id: 'T163E', valueProperty: 'EBTYP',
    displayProperty: [], selection: [], requestedFields: 'EBTYP' },

// Confirmation Control Keys
CT_T163L: {type: 'CT', id: 'T163L', valueProperty: 'BSTAE',
    displayProperty: [], selection: [], requestedFields: 'BSTAE' },

// Formulas for Service Lines
CT_T167F: {type: 'CT', id: 'T167F', valueProperty: 'FORMELNR',
    displayProperty: [], selection: [], requestedFields: 'FORMELNR' },

// Release Indicator: Purchasing Document
CT_T16FB: {type: 'CT', id: 'T16FB', valueProperty: 'FRGKE',
    displayProperty: [], selection: [], requestedFields: 'FRGKE' },

// Release Codes
CT_T16FC: {type: 'CT', id: 'T16FC', valueProperty: ['FRGGR', 'FRGCO'],
    displayProperty: [], selection: [], requestedFields: ['FRGGR', 'FRGCO'] },

// Release Groups
CT_T16FG: {type: 'CT', id: 'T16FG', valueProperty: 'FRGGR',
    displayProperty: [], selection: [], requestedFields: 'FRGGR' },

// Release Strategies
CT_T16FS: {type: 'CT', id: 'T16FS', valueProperty: ['FRGGR', 'FRGSX'],
    displayProperty: [], selection: [], requestedFields: ['FRGGR', 'FRGSX'] },

// Wage Type Valuation
CT_T512W: {type: 'CT', id: 'T512W', valueProperty: ['MOLGA', 'LGART', 'ENDDA'],
    displayProperty: [], selection: [], requestedFields: ['MOLGA', 'LGART', 'ENDDA'] },

// Foreign Trade: Customs Offices
CT_T615: {type: 'CT', id: 'T615', valueProperty: ['LAND1', 'ZOLLA'],
    displayProperty: [], selection: [], requestedFields: ['LAND1', 'ZOLLA'] },

// Foreign Trade: Modes of Transport
CT_T618: {type: 'CT', id: 'T618', valueProperty: ['LAND1', 'EXPVZ'],
    displayProperty: [], selection: [], requestedFields: ['LAND1', 'EXPVZ'] },

// Pricing procedures
CT_T683: {type: 'CT', id: 'T683', valueProperty: ['KVEWE', 'KAPPL', 'KALSM'],
    displayProperty: [], selection: [], requestedFields: ['KVEWE', 'KAPPL', 'KALSM'] },

// Check Table for Season Indicator
CT_T6WSP: {type: 'CT', id: 'T6WSP', valueProperty: 'SAISO',
    displayProperty: [], selection: [], requestedFields: 'SAISO' },

// Recovery Indicator
CT_T8JJ: {type: 'CT', id: 'T8JJ', valueProperty: ['BUKRS', 'RECID'],
    displayProperty: [], selection: [], requestedFields: ['BUKRS', 'RECID'] },

// Logical system
CT_TBDLS: {type: 'CT', id: 'TBDLS', valueProperty: 'LOGSYS',
    displayProperty: [], selection: [], requestedFields: 'LOGSYS' },

// Currency Codes
CT_TCURC: {type: 'CT', id: 'TCURC', valueProperty: 'WAERS',
    displayProperty: [], selection: [], requestedFields: 'WAERS' },

// Functional areas
CT_TFKB: {type: 'CT', id: 'TFKB', valueProperty: 'FKBER',
    displayProperty: [], selection: [], requestedFields: 'FKBER' },

// Business Areas
CT_TGSB: {type: 'CT', id: 'TGSB', valueProperty: 'GSBER',
    displayProperty: [], selection: [], requestedFields: 'GSBER' },

// Controlling Areas
CT_TKA01: {type: 'CT', id: 'TKA01', valueProperty: 'KOKRS',
    displayProperty: [], selection: [], requestedFields: 'KOKRS' },

// Internal Comment on Quotation
CT_TMAM: {type: 'CT', id: 'TMAM', valueProperty: 'AGMEM',
    displayProperty: [], selection: [], requestedFields: 'AGMEM' },

// Material freight groups
CT_TMFG: {type: 'CT', id: 'TMFG', valueProperty: 'MFRGR',
    displayProperty: [], selection: [], requestedFields: 'MFRGR' },

// Control Profile for Manufacturer Part Number Management
CT_TMPPF: {type: 'CT', id: 'TMPPF', valueProperty: 'MPROF',
    displayProperty: [], selection: [], requestedFields: 'MPROF' },

// Sub-Item Category in Purchasing
CT_TMSI1: {type: 'CT', id: 'TMSI1', valueProperty: 'UPTYP',
    displayProperty: [], selection: [], requestedFields: 'UPTYP' },

// Processing Key for Sub-Items
CT_TMSI2: {type: 'CT', id: 'TMSI2', valueProperty: 'SIKGR',
    displayProperty: [], selection: [], requestedFields: 'SIKGR' },

// Entity Table: Catalogs
CT_TMW3T: {type: 'CT', id: 'TMW3T', valueProperty: 'KATALOG',
    displayProperty: [], selection: [], requestedFields: 'KATALOG' },

// Communication Methods (Business Address Services)
CT_TSAC: {type: 'CT', id: 'TSAC', valueProperty: 'COMM_TYPE',
    displayProperty: [], selection: [], requestedFields: 'COMM_TYPE' },

// Forms of Address (Key) (Business Address Services)
CT_TSAD3: {type: 'CT', id: 'TSAD3', valueProperty: 'TITLE',
    displayProperty: [], selection: [], requestedFields: 'TITLE' },

// Source Address or Personal Data (Business Address Services)
CT_TSAD6: {type: 'CT', id: 'TSAD6', valueProperty: 'ORIGIN',
    displayProperty: [], selection: [], requestedFields: 'ORIGIN' },

// International versions of addresses
CT_TSADV: {type: 'CT', id: 'TSADV', valueProperty: 'NATION',
    displayProperty: [], selection: [], requestedFields: 'NATION' },

// Valid text IDs
CT_TTXID: {type: 'CT', id: 'TTXID', valueProperty: ['TDOBJECT', 'TDID'],
    displayProperty: [], selection: [], requestedFields: ['TDOBJECT', 'TDID'] },

// Check Table for Tax Jurisdiction
CT_TTXJ: {type: 'CT', id: 'TTXJ', valueProperty: ['KALSM', 'TXJCD'],
    displayProperty: [], selection: [], requestedFields: ['KALSM', 'TXJCD'] },

// Customers: Regional zones
CT_TZONE: {type: 'CT', id: 'TZONE', valueProperty: ['LAND1', 'ZONE1'],
    displayProperty: [], selection: [], requestedFields: ['LAND1', 'ZONE1'] },

// Sales Document: Schedule Line Data
CT_VBEP: {type: 'CT', id: 'VBEP', valueProperty: ['VBELN', 'POSNR', 'ETENR'],
    displayProperty: [], selection: [], requestedFields: ['VBELN', 'POSNR', 'ETENR'] },

// Sales Document: Header Status and Administrative Data
CT_VBUK: {type: 'CT', id: 'VBUK', valueProperty: 'VBELN',
    displayProperty: [], selection: [], requestedFields: 'VBELN' },

// Sales Document: Item Status
CT_VBUP: {type: 'CT', id: 'VBUP', valueProperty: ['VBELN', 'POSNR'],
    displayProperty: [], selection: [], requestedFields: ['VBELN', 'POSNR'] },

// Promotion Header Data, IS-R
CT_WAKH: {type: 'CT', id: 'WAKH', valueProperty: 'AKTNR',
    displayProperty: [], selection: [], requestedFields: 'AKTNR' },

// Vendor Subrange
CT_WYT1: {type: 'CT', id: 'WYT1', valueProperty: ['LIFNR', 'LTSNR'],
    displayProperty: [], selection: [], requestedFields: ['LIFNR', 'LTSNR'] },

