export const UIConfigApp = {
  release: {
    appKey: 'fundamental-library-for-abap',
    title: 'plm3',
    subTitle: 'Value Prototyping Center of Excellence',
    version: '0.1',
    startYear: '2018',
    copyright: 'srdjan.boskovic@sap.com',
    license: 'Apache 2.0'
  },

  httpConfig: {
    defaults: {
      Mode: 'same-origin',
      Headers: {
        'X-Requested-With': 'Fetch',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      AuthorizationHeader: true
    },
    pushState: true
  },

  pastDate: '20170201',

  User: {
    fullName: '',
    username: 'MM-TECH-02',
    password: 'welcome',
    locale: 'en',
    roles: []
  },

  localesSupported: {
    en: {
      groupSeparator: ',',
      decimalSeparator: '.',
      moment: {
        dateFormat: 'D MMM YY',
        timeFormat: 'HH:mm'
      },
      numeral: {},
      Intl: {
        dateOptions: {
          weekday: 'short',
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        },
        timeOptions: {
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit'
        },
        numberOptions: {
          style: 'decimal',
          useGrouping: true
        },
        currencyOptions: {
          currency: 'USD',
          style: 'currency',
          currencyDisplay: 'symbol',
          useGrouping: true
        },
        relativeOptions: {}
      }
    },

    de: {
      groupSeparator: '.',
      decimalSeparator: ',',
      moment: {
        dateFormat: 'DD.MM.YY',
        timeFormat: 'HH:mm'
      },
      numeral: {},
      Intl: {
        dateOptions: {},
        timeOptions: {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        },
        numberOptions: {
          style: 'decimal',
          useGrouping: true
        },
        currencyOptions: {
          currency: 'EUR',
          style: 'currency',
          currencyDisplay: 'symbol',
          useGrouping: true
        },
        relativeOptions: {}
      }
    }
  },

  toast: {
    timeout: 5000,
    removalTimeout: 1000
  },

  bizDocType: {
    BUS2007: { name: 'Service Order', tcode: 'IW33', icon: 'sap-icon sap-icon-eam-work-order', param: 'IV_ORDERID' },
    BUS2038: {
      name: 'Service Notification',
      tcode: 'IW23',
      icon: 'sap-icon sap-icon-notification-2',
      param: 'IV_NOTIFNO'
    },
    BUSEQUI: { name: 'Equipment', tcode: 'IE03', icon: 'sap-icon sap-icon-technical-object', param: 'IV_EQUIID' },
    BUS2128: { name: 'ServiceConfirmation', tcode: 'IW43', icon: 'sap-icon sap-icon-post' },
    BUS2012: { name: 'Purchase Order', tcode: 'ME23', icon: 'sap-icon sap-icon-cart' },
    BUS2105: { name: 'Purchase Requisition', tcode: 'ME53', icon: 'sap-icon sap-icon-cart' },
    BUS1019: { name: 'Task List', tcode: 'IA07' },
    _SOLDB: { name: 'Solution Finder', tcode: 'XX13' }
  },

  webGUI: {
    IA07: 'IA07 RC271-PLNNR=id[0];RC271-PLNAL=id[1];DYNP_OK_CODE=XALU',
    IE03: 'IE03 RM63E-EQUNR=id[0];DYNP_OKCODE=SD',
    IL03: 'IL03 IFLO-TPLNR=id[0];DYNP_OKCODE=/00',
    PA30: 'PA30 RP50G-PERNR=id[0];DYNP_OKCODE=/00',
    IW33: 'IW33 CAUFVD-AUFNR=id[0];DYNP_OKCODE=/00',
    IW23: 'IW23 RIWO00-QMNUM=id[0];DYNP_OKCODE=MELD',
    IW43: 'IW43 CORUF-RUECK=id[0];DYNP_OKCODE=ENTR',
    ME23: 'ME23 RM06E-BSTNR=ID[0];DYNP_OKCODE=AB',
    ME53: 'ME53 EBAN-BANFN=id[0];DYNP_OKCODE=AB',
    SU01: 'SU01 SUID_ST_BNAME-BNAME=id[0];DYNP_OKCODE=SHOW',
    XX13: 'XX13'
  }
};
