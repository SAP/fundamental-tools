export const UIConfigValueInput = {

  __icons: {
    // Material Activity Type
    activityType: {
      F10: 'heating-cooling', // HVAC
      F20: 'bulb', // Electrical
      F30: 'wrench',  // Plumbing
      F40: 'wrench',  // Janitorial
      F50: 'home',  // Furniture
      F60: 'move', // Move request
      F70: 'request' // Miscalaneous
    }
  },

  __options: {
    // Control Key
    CONTROL_KEY: [
      {id: 'PM01', name: 'Internal'},
      {id: 'PM02', name: 'External'}
    ],
    // Item Category
    ITEM_CAT: [
      {id: 'L', name: 'Stock'},
      {id: 'N', name: 'Non-stock'}
    ]
  },


  __map: {
    // RFMs
    userStatus: {type: 'LL', id: '/COE/RBP_PAM_USERSTAT_LOOKUP'},

    //equipmentList: {type: 'LL', id: 'Z_FAM_EQUIPMENT_GETLIST'},
    //activityType: {
    //  type: 'LL',
    //  id: 'Z_FAM_ACTIVITY_TYPE_LOOKUP',
    //  keyProperty: 'ILART',
    //  valueProperty: 'ILATX'
    //  // icons: valueInput.__icons.activityType
    //},
    //priority: {type: 'LL', id: 'Z_FAM_PRIORITY_LOOKUP', keyProperty: 'PRIOK', valueProperty: 'PRIOKX'},
    workCenter: {type: 'LL', id: '/COE/RBP_PAM_WORKCTR_LOOKUP', selection: {IV_PLANT: '1000', IV_CATEGORY: '0005'}},


    // CT Helps, implemented as LL
    CT_T370T: {type: 'LL', id: '/COE/RBP_PAM_EQUICAT_LOOKUP'},
    CT_T370K: {type: 'LL', id: '/COE/RBP_PAM_EQUITYPE_LOOKUP'},
    CT_T370C: {type: 'LL', id: '/COE/RBP_PAM_EQUIABC_LOOKUP'},


    // CT Helps, by generic method
    CT_357G: {type: 'CT', id: 'T357G'},
    CT_CRHD_V1: {type: 'CT', id: 'CRHD_V1', valueProperty: 'OBJID', displayProperty: ['ARBPL', 'KTEXT'],
      selection: [
        {SELNAME: 'OBJTY', SIGN: 'I', OPTION: 'EQ', LOW: 'A'},
        {SELNAME: 'WERKS', SIGN: 'I', OPTION: 'EQ', LOW: '1000'},
        {SELNAME: 'VERWE', SIGN: 'I', OPTION: 'EQ', LOW: '0005'},
        {SELNAME: 'SPRAS', SIGN: 'I', OPTION: 'EQ', LOW: 'E'}
      ]
    },

    CT_ServiceOrderType: {type: 'CT', id: 'T350', valueProperty: 'AUART', displayProperty: 'AUART',
      selection: [{'SELNAME': 'NOTDAT', 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': 'X'}],
      requestedFields: [{'': 'AUART'}, {'': 'QMART'}]
    },

    CT_NotificationType: {type: 'CT', id: 'TQ80', valueProperty: 'QMART', displayProperty: ['QMARTX', 'QMART'],
      selection: [ {'SELNAME': 'QMART', 'SIGN': 'I', 'OPTION': 'BT', 'LOW': 'P1', 'HIGH': 'P3'} ],
      requestedFields: [{'': 'QMART'}, {'': 'QMTYP'}, {'': 'QMARTX'}, {'': 'STSMA'}, {'': 'ARTPR'}]
    },
    CT_NotificationPriority: {type: 'CT', id: 'T356', valueProperty: 'PRIOK', displayProperty: 'PRIOKX',
      selection: [ {'SELNAME': 'ARTPR', 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': 'PM'} ],
      requestedFields: [{'': 'ARTPR'}, {'': 'PRIOK'}, {'': 'PRIOKX'}]
    },
    CT_NotificationUserStatus: {type: 'CT', id: 'TJ30', valueProperty: 'ESTAT', displayProperty: ['TXT30', 'TXT04'],
      selection: [ {'SELNAME': 'STSMA', 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': 'DEMM0002'} ],
      requestedFields: [{'': 'ESTAT'}, {'': 'TXT04'}, {'': 'TXT30'}, {'': 'INIST'}]
    },
    CT_NotificationSystemStatus: {type: 'CT', id: 'TJ02', valueProperty: 'TXT04', displayProperty: 'TXT30',
      selection: [],
      requestedFields: [{'': 'ISTAT'}, {'': 'TXT04'}, {'': 'TXT30'}]
    },
    CT_CatalogParts: {type: 'CT', id: 'QPCD', valueProperty: 'CODE', displayProperty: ['CODE', 'KURZTEXT'],
      selection: [ {'SELNAME': 'KATALOGART', 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': 'B'},
                   {'SELNAME': 'CODEGRUPPE', 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': 'DEPROP'} ],
      requestedFields: [{'': 'CODE'}, {'': 'KURZTEXT'}]
    },
    CT_CatalogDamage: {type: 'CT', id: 'QPCD', valueProperty: 'CODE', displayProperty: ['CODE', 'KURZTEXT'],
      selection: [ {'SELNAME': 'KATALOGART', 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': 'C'},
                   {'SELNAME': 'CODEGRUPPE', 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': 'DEPRDA'} ],
      requestedFields: [{'': 'CODE'}, {'': 'KURZTEXT'}]
    },
    CT_CatalogCause: {type: 'CT', id: 'QPCD', valueProperty: 'CODE', displayProperty: ['CODE', 'KURZTEXT'],
      selection: [ {'SELNAME': 'KATALOGART', 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': '5'},
                   {'SELNAME': 'CODEGRUPPE', 'SIGN': 'I', 'OPTION': 'EQ', 'LOW': 'DEPRCA'} ],
      requestedFields: [{'': 'CODE'}, {'': 'KURZTEXT'}]
    },

    // SH Helps
    orderType: {
      type: 'SH',
      id: 'AUART',
      keyProperty: 'AUART',
      valueProperty: 'TXT',
      selection: [['AUTYP', 'I', 'EQ', '30', ''], ['AUART', 'I', 'CP', 'FM*', ''], ['SPRAS', 'I', 'EQ', 'E', '']]
    },
    controlKey: {
      type: 'SH',
      id: 'H_T430',
      keyProperty: 'STEUS',
      valueProperty: 'TXT',
      selection: [['STEUS', 'I', 'CP', 'PM*', '']]
    },
    itemCategory: {type: 'SH', id: 'H_T418', keyProperty: 'POSTP', valueProperty: 'PTEXT'}
    //ActivityType: {type: 'SH', id: 'H_T350I', keyProperty: 'ILART', valueProperty: 'ILATX', selection: [['AUART','I','EQ','FM01',''], ['SPRAS','I','EQ','E','']]}
  }
};
