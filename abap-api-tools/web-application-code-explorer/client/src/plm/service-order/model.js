import {DialogService} from 'aurelia-dialog';
//import {BindingSignaler} from 'aurelia-templating-resources';
import {UIApplication, UIHttpService, UIFormat, UIUtils} from '../../resources/index';

export class ServiceOrder {

  static __bizDocType = 'BUS2007';

  static inject = [UIApplication, UIHttpService, DialogService];
  constructor(app, httpService, dialogService) { //}, signaler) {
    this.app = app;
    this.httpService = httpService;
    this.dialogService = dialogService;

    this.reset();
  }

  reset() {
    this.listSelection = {
      // BAPI_ALM_ORDER_LISTHEAD_PARAMS

      //SHOW_OPEN_DOCUMENTS: 'X',
      //SHOW_DOCUMENTS_IN_PROCESS: 'X',
      //SHOW_COMPLETED_DOCUMENTS: 'X',
      //SHOW_HISTORICAL_DOCUMENTS: 'X',
      //USE_SELECTION_ID: '',
      //SHOW_DOCS_WITH_PARTN_ROLE: '',
      //SHOW_DOCS_WITH_PARTNER: '',
      //SHOW_DOCS_WITH_CURRENCY: '',
      //SEARCH_IN_OBJECT_LIST_ENTRIES: '',
      //SHOW_DOCS_WITH_ACC_ASSIGNM_CAT: '',
      //SHOW_DOCS_WITH_FROM_DATE: '20010101',
      // SHOW_DOCS_WITH_TO_DATE: this.config.get('abapMaxDate'), // '21991231'

      //userStatus: this.userStatus,
      interval: '',
      fromDate: '',
      toDate: '',
      //user: (this.topRole.AGR_NAME === 'Z_NS_BIZ') ? this.config.get('user.username') : '',
      records: 1000
    };
    this.list = [];
    this.orderReset();
  }

  isChanged() {
    return false;
  }

  orderReset() {
    this.id = '';
    this.message = '';
    this.subject = '';    // FROM_ABAP.EV_NOTICE
    this.docFlow = [];
    this.document = {};
    this.header = {}; //FROM_ABAP.ES_HEADER
    this.components = []; // FROM_ABAP.ET_COMPONENTS
    this.component = {};
    this.operations = []; // FROM_ABAP.ET_OPERATIONS
    this.operation = {};
    this.permits = [];  // FROM_ABAP.ET_PERMIT
    this.__permits = [];  // FROM_ABAP.ET_PERMIT
    this.permit = {show: false};
    this.partners = []; // FROM_ABAP.ET_PARTNER;
    this.costs = []; // FROM_ABAP.ET_COSTS_DETAILS;
    this.costSum = []; // FROM_ABAP.EV_COST_SUM;
    this.notificationLongText = []; // FROM_ABAP.ET_NOTICE_NOTIFICATION;
    this.url = {};

    this.confirmations = [];
    this.confirmation = {};

    this.Attachments = [];
    this.showDetail = {};
    this.showAllOperations = false;

    //this.signaler.signal('order-detail');
  }

  getList(selection = null, getDetail = true) {
    let payload = {
      // default sort one - newest first, see https://coeportal175.saphosting.de/projects/nsfm/wiki/ABAPAPI#5-Service-Order
      sortOrder: [
        // {NAME: 'ENTER_DATE', DESCENDING: 'X', ASTEXT: ''}
        {NAME: 'ORDERID', DESCENDING: 'X', ASTEXT: ''}
      ]
    };

    if (selection) {
      Object.assign(payload, selection);
    }
    else {
      // User
      if (this.listSelection.user)        payload.username = this.listSelection.user;

      // User Status(es)
      if (this.listSelection.userStatus)  payload.userStatus = this.listSelection.userStatus;

      // Dates to ABAP dates
      if (this.listSelection.interval === 'i') {
        let di = UIFormat.getFromDate('i', this.listSelection.fromDate, this.listSelection.toDate);
        payload.fromDate = di.from;
        payload.toDate = di.to;
      }
      else {
        payload.fromDate = this.listSelection.fromDate;
        // payload.toDate = this.config.get('abapMaxDate'); // '21991231'
      }
    }
    this.list = [];
    return this.httpService.backend('/service_order/getlist', payload)
      .then(FROM_ABAP => {
        this.list = FROM_ABAP.ET_RESULT;
        if (this.list.length && getDetail) {
          this.get(this.list[0].ORDERID);
        }
      })

      .catch(error => {
        this.list = [];
        this.app.toastError(error);
      });
  }

  get(id = null) {
    if (id) {
      //this.orderReset();
      this.permit = {};
      this.component = {};
      this.operation = {};
      return this.httpService.backend('/service_order/get', {
        IV_ORDERID: id,
        IV_GET_NOTIFICATION: '',
        IV_GET_TASKLIST: 'X',
        IV_GET_DOCUMENT: 'X'
      })
        .then(FROM_ABAP => {
          this.id = id;

          this.message = '';
          this.subject = FROM_ABAP.EV_NOTICE;
          this.header = FROM_ABAP.ES_HEADER;
          this.components = FROM_ABAP.ET_COMPONENTS;
          this.operations = FROM_ABAP.ET_OPERATIONS;
          this.operationComponents = {};
          this.partners = FROM_ABAP.ET_PARTNER;
          this.costs = FROM_ABAP.ET_COSTS_DETAILS;
          this.costSum = FROM_ABAP.EV_COST_SUM;
          this.notificationLongText = FROM_ABAP.ET_NOTICE_NOTIFICATION;

          // webGui URLs
          this.href = this.app.webGuiUrl('IW33', false, id);
          this.hrefText = this.header.SHORT_TEXT + ' (' + id + ')';
          this.hrefFloc = this.app.webGuiUrl('IL03', false, this.header.FUNCT_LOC);
          this.hrefEqui = this.app.webGuiUrl('IE03', false, this.header.EQUIPMENT);

          this.app.info(this.constructor.name, `get[${id}]`, this);

          this.showDetail = {};
          this.showAllOperations = false;

          // operation components
          for (let o of this.operations) {
            o.components = [];
            for (let c of this.components) {
              if (c.ACTIVITY === o.ACTIVITY) {
                o.components.push(c);
              }
            }
          }

          // DMS Attachments
          this.Attachments = FROM_ABAP.ET_DOCUMENT;

          //this.signaler.signal('order-detail');
          /*
           // look descriptions
           this.statustext = this.config.Lookup.look('UserStatus', this.header.USERSTATUS);
           this.priority = this.config.Lookup.look('Priority', this.header.PRIORITY);
           // icons
           this.iconMAT = this.MATIcons[this.header.PMACTTYPE];

           if (this.topRole.AGR_NAME === 'Z_NS_FM_SPRV') {
           // supervisor can always edit
           this.disabled = false;
           } else {
           this.disabled = this.header.USERSTATUS !== 'APP1' && this.header.USERSTATUS !== 'CRTE';
           }

           */
          // long text
          let line;
          let longText = [];
          for (let i = FROM_ABAP.ET_NOTICE_NOTIFICATION.length - 1; i >= 0; i--) {
            line = FROM_ABAP.ET_NOTICE_NOTIFICATION[i];

            longText.push({
              datum: moment(line.DATETIME, 'YYYYMMDDhhmmss').format('ll ddd [at] h:mm:ss a'),
              historyLine: line.HISTORY_LINE,
              message: line.NOTICE
            });
          }
          this.longText = longText;
          /*
           // edit disabled if Biz User and User Status <> CRTE
           this._noedit = (this.topRole.AGR_NAME === 'Z_NS_BIZ') && (this.header.USERSTATUS !== 'CRTE');
           //console.log(this.topRole.AGR_NAME, this.header.USERSTATUS, this._noedit);
           */

          this.permits = FROM_ABAP.ET_PERMIT_ISSUE_COMBINED;
          this.__permits = UIUtils.abapTableClone(FROM_ABAP.ET_PERMIT_ISSUE_COMBINED);
        })

        .catch(error => {
          this.orderReset();
          this.app.toastError(error);
        });
    }

    // get Doc Flow
    if (id) this.getDocFlow(id);
  }

  save(status) {
    if (status) this.header.USERSTATUS = status;

    // header
    let header = {};
    let headerX = {};
    for (let k of ['PMACTTYPE', 'PRIORITY', 'FUNCT_LOC', 'EQUIPMENT', 'MN_WK_CTR']) {
      header[k] = this.header[k];
      headerX[k] = 'X';
    }

    // prepare notice
    this.it_notice = [];
    // split per newline
    let textlines = this.message ? this.message.split('\n') : [];
    // split into 132 chunks
    for (let line of textlines) {
      let chunks = line.match(/.{1,132}/g);
      if (chunks) {
        for (let c of chunks) this.it_notice.push({'': c});
      }
    }

    // permits
    // console.log('!!', this.permits, this.__permits);

    // update Maintenance Order
    return this.httpService.backend('/service_order/change', {
      IV_ORDERID: this.id,
      IS_HEADER: header,
      IS_HEADER_X: headerX,
      IV_USER_STATUS: status,
      IV_NOTICE: this.subject,
      IT_NOTICE_NOTIFICATION: this.it_notice
    })
      .then(FROM_ABAP => {
        /*
         if (this.topRole.AGR_NAME === 'Z_NS_BIZ') {
         this.config.notify({type: 'success', message: `Request updated: ${this.subject} (${this.id})`});
         } else {
         switch (status) {
         case 'APP1':
         this.config.notify({type: 'success', message: `Request approved: ${this.subject} (${this.id})`});
         break;
         case 'REJT':
         this.config.notify({type: 'success', message: `Request rejected: ${this.subject} (${this.id})`});
         break;
         case 'CRTE':
         this.config.notify({type: 'success', message: `Request put on hold: ${this.subject} (${this.id})`});
         break;
         default:
         this.config.notify({
         type: 'success',
         message: `Order changed: ${this.subject} (${this.id})`
         });
         }
         }
         */
        this.get(this.id);
      })

      .catch(error => {
        this.app.toastError(error);
      });
  }

  getDocFlow(id) {
    return this.httpService.backend('/docflow', {IV_ORDERID: id})
      .then(FROM_ABAP => {
        this.docFlow = FROM_ABAP.ET_DOCFLOW;
      });
  }

  getConfirmations(id = false, ivOperation = '') {
    if (id) {
      this.httpService.backend('/service_confirmation/getlist', {
        IV_OPERATION: ivOperation,
        IT_ORDER_RANGE: [{SIGN: 'I', OPTION: 'EQ', LOW: id}]
      })
        .then(FROM_ABAP => {
          this.confirmations = FROM_ABAP.ET_CONFIRMATIONS;
          this.confirmation = {};
        })
        .catch(error => {
          this.confirmations = [];
          this.confirmation = {show: false, _disabled: true};
          if (error.message) {
            if (error.message.indexOf('BAPIRET E 047') !== 0) this.app.toastError(error);
          }
          else this.app.debug(error);
        });
    }
  }

  selectConfirmation(confirmation) {
    if ((this.confirmation.CONF_NO !== confirmation.CONF_NO) ||
      (this.confirmation.CONF_CNT !== confirmation.CONF_CNT)) {
      this.httpService.backend('/service_confirmation/get', {
        IV_CONFIRMATION: confirmation.CONF_NO,
        IV_CONFIRMATIONCOUNTER: confirmation.CONF_CNT
      })
        .then(FROM_ABAP => {
          this.confirmation.show = false;
          this.confirmation = FROM_ABAP.ES_CONF_DETAIL;
          this.confirmation.LONGTEXT = FROM_ABAP.EV_LONGTEXT;
          this.confirmation._disabled = true;
          this.confirmation.show = true;
        });
    }
    else this.confirmation.show = !isTrue(this.confirmation.show);
  }

  createConfirmation() {
    let confirmation = {
      ACTUAL_DUR: 0,  // Actual Duration for Confirmation
      ACT_TYPE: '',  // Activity Type for Confirmation
      ACT_WORK: 0,  // Actual work
      ACT_WORK_2: 0,  // Actual Work
      CALC_MOTIVE: '',  // Accounting Indicator
      CAPA_CATEGORY: '',  // Capacity category
      CLEAR_RES: '',  // Clear Open Reservations
      COMPLETE: '',  // Indicator: No Remaining Work Expected
      CONF_NO: '',  // Completion confirmation number for the operation
      CONF_TEXT: '',  // Confirmation text
      DEV_REASON: '',  // Reason for Variance
      END_POINT: '',  // End Point
      EXEC_FIN_DATE: '',  // Confirmed Finish Date of Execution
      EXEC_FIN_TIME: '',  // Confirmed Time for 'Finish Execution'
      EXEC_START_DATE: '',  // Confirmed Start Date of Execution
      EXEC_START_TIME: '',  // Confirmed Time for 'Start Execution'
      EX_CREATED_BY: '',  // External creator of confirmation
      EX_CREATED_DATE: '',  // External date of entry for confirmation
      EX_CREATED_TIME: '',  // External time of entry for confirmation
      EX_IDENT: '',  // External key of a confirmation (for example from PDC system)
      FCST_FIN_DATE: '',  // Forecast finish date of operation from confirmation
      FCST_FIN_TIME: '',  // Forecast End Time of Operation from Confirmation
      FIN_CONF: '',  // Partial/Final Confirmation
      FIRST_OFFSET_TYPE_CODE: '',  // Type of First Offset
      FIRST_OFFSET_UNIT: '',  // Unit of Measurement for Offset 1
      FIRST_OFFSET_UNIT_ISO: '',  // Unit of Measurement for Offset 1 in ISO Code
      FIRST_OFFSET_VALUE: '',  // Value of Offset 1
      LINEAR_LENGTH: '',  // Length
      LINEAR_UNIT: '',  // Unit of Measurement for Linear Data
      LINEAR_UNIT_ISO: '',  // Unit of Measurement for Linear Data in ISO Code
      LONGTEXT: '',  // todo: no field text
      MARKER_DISTANCE_END_POINT: '',  // Length Spec for Distance between Marker and End Point
      MARKER_DISTANCE_START_POINT: '',  // Distance between Marker and Start Point
      MARKER_DISTANCE_UNIT: '',  // Unit for the Distance from Marker
      MARKER_DISTANCE_UNIT_ISO: '',  // Unit for the Distance from Marker in ISO Code
      MARKER_END_POINT: '',  // Marker for End Point
      MARKER_START_POINT: '',  // Marker for Start Point
      OPERATION: '',  // Activity Number
      ORDERID: '',  // Order Number
      PERS_NO: '',  // Personnel number
      PLANT: '',  // Plant
      POSTG_DATE: '',  // Posting Date
      REM_WORK: 0,  // Remaining work
      REM_WORK_2: 0,  // Remaining Work
      SECOND_OFFSET_TYPE_CODE: '',  // Type of Second Offset
      SECOND_OFFSET_UNIT: '',  // Unit of Measurement for Offset 2
      SECOND_OFFSET_UNIT_ISO: '',  // Unit of Measurement for Offset 2 in ISO Code
      SECOND_OFFSET_VALUE: '',  // Value of Offset 2
      SPLIT: 0,  // Split number
      START_POINT: '',  // Start Point
      SUB_OPER: '',  // Suboperation
      TIMEID_NO: '',  // Time Recording ID Number
      UN_ACT_DUR: '',  // Unit for actual duration
      UN_ACT_DUR_ISO: '',  // ISO code for unit of measurement
      UN_REM_WRK: '',  // Unit of measure for remaining work
      UN_REM_WRK_ISO: '',  // ISO code for unit of measurement
      UN_WORK: '',  // Unit for work
      UN_WORK_ISO: '',  // ISO code for unit of measurement
      WAGETYPE: '',  // Wage type
      WORK_CNTR: ''  // Work center
    };

    for (let k of Object.keys(confirmation)) confirmation[k] = this.confirmation[k];

    this.httpService.backend('/service_confirmation/create', {
      IT_TIMETICKETS: [ confirmation ]
    })
      .then(FROM_ABAP => {
        this.getConfirmations(this.header.ORDERID);
      })
      .catch(error => {
        this.confirmations = [];
        this.confirmation = {show: false, _disabled: true};
        if (error.message) {
          if (error.message.indexOf('BAPIRET E 047') !== 0) this.app.toastError(error);
        }
        else this.app.debug(this.constructor.name, error);
      });
  }


  editConfirmation() {
    this.confirmation._disabled = !this.confirmation._disabled;
  }

  selectComponent(component) {
    if (this.component.ITEM_NUMBER !== component.ITEM_NUMBER) {
      this.component.show = false;
      this.component = component;
      this.component.show = true;
    }
    else this.component.show = !isTrue(this.component.show);
  }

  selectOperation(operation) {
    if (this.operation.ACTIVITY !== operation.ACTIVITY) {
      this.operation.show = false;
      this.operation = operation;
      this.operation.show = true;

      this.getConfirmations(this.header.ORDERID, this.operation.ACTIVITY);
    }
    else this.operation.show = !isTrue(this.operation.show);
  }

  selectWorkPermit(permit) {
    if (this.permit.PERMIT !== permit.PERMIT) {
      this.permit.show = false;
      this.permit = permit;
      this.permit.show = true;
    }
    else this.permit.show = !isTrue(this.permit.show);
  }

  selectDocument(document) {
    this.document = document;
  }

  showComponents(operation) {
    for (let o of this.operations) {
      if (o.ACTIVITY === operation.ACTIVITY) {
        o.showComponents = !isTrue(o.showComponents);
      }
      else o.showComponents = false;
    }
  }

  showDetail(entity) {
    this.detail[entity] = !isTrue(this.detail[entity]);
  }

  editOperation(operation, index) {
    for (let o of this.operations) {
      if (o === operation) {
        o.showDetail = !isTrue(o.showDetail);
      }
      else o.showDetail = false;
    }
    this.operation = operation;
  }

  deleteOperation(operation, index) {
    this.dialogService.open({ viewModel: 'plm/order-type', model: 'Delete operation: ', useCss: 'di.css'}).then(response => {
      if (response.wasCancelled) return;

      this.operations.splice(index, 1);
    });
  }

  lookup(query) {
    return query.value;
  }

  create() {
    this.IS_HEADER = {
      ABCINDIC: '',  // ABC indicator for technical object
      ASSEMBLY: '',  // Assembly
      ASSEMBLY_EXTERNAL: '',  // Long Material Number for Field ASSEMBLY
      ASSEMBLY_GUID: '',  // External GUID for ASSEMBLY Field
      ASSEMBLY_LONG: '',  // Assembly
      ASSEMBLY_VERSION: '',  // Version Number for ASSEMBLY Field
      ASSET_NO: '',  // Main Asset Number
      AUTOSCHED: '',  // Indicator: Schedule automatically
      BASICSTART: '',  // Basic Start (Time)
      BASIC_FIN: '',  // Basic finish (time)
      BUS_AREA: '',  // Business Area
      CALC_MOTIVE: '',  // Accounting Indicator
      CALID: '',  // Factory Calendar
      CAP_REQMTS: '',  // Indicator: Calculate capacity requirements
      COSTCENTER: '',  // Cost Center
      CSTG_SHEET: '',  // Costing Sheet
      CURRENCY: '',  // Order Currency
      CURRENCY_ISO: '',  // ISO currency code
      DEVICEDATA: '',  // Additional Device Data
      DISTR_CHAN: '',  // Distribution Channel
      DIVISION: '',  // Division
      END_POINT: '',  // End Point
      ENVIR_INVEST: '',  // Reason for environmental investment
      EQUIPMENT: '',  // Equipment Number
      ESTIMATED_COSTS: 0,  // Estimated total costs of order
      FINISH_DATE: '',  // Basic finish date
      FIRST_OFFSET_TYPE_CODE: '',  // Type of First Offset
      FIRST_OFFSET_UNIT: '',  // Unit of Measurement for Offset 1
      FIRST_OFFSET_UNIT_ISO: '',  // Unit of Measurement for Offset 1 in ISO Code
      FIRST_OFFSET_VALUE: '',  // Value of Offset 1
      FUNCT_LOC: '',  // Functional Location
      FUNC_AREA: '',  // Functional Area
      INVEST_PROFILE: '',  // Investment measure profile
      INV_REASON: '',  // Reason for investment
      KALSN: '',  // Calendar Selection for Order
      LINEAR_LENGTH: '',  // Length
      LINEAR_UNIT: '',  // Unit of Measurement for Linear Data
      LINEAR_UNIT_ISO: '',  // Unit of Measurement for Linear Data in ISO Code
      LOCATION: '',  // Asset location
      LOC_BUS_AREA: '',  // Business Area
      LOC_COMP_CODE: '',  // Company Code
      LOC_WBS_ELEM: '',  // Work Breakdown Structure Element (WBS Element)
      LOC_WK_CTR: '',  // Work center
      MAINTPLANT: '',  // Maintenance plant
      MAINTROOM: '',  // Room
      MARKER_DISTANCE_END_POINT: '',  // Length Spec for Distance between Marker and End Point
      MARKER_DISTANCE_START_POINT: '',  // Distance between Marker and Start Point
      MARKER_DISTANCE_UNIT: '',  // Unit for the Distance from Marker
      MARKER_DISTANCE_UNIT_ISO: '',  // Unit for the Distance from Marker in ISO Code
      MARKER_END_POINT: '',  // Marker for End Point
      MARKER_START_POINT: '',  // Marker for Start Point
      MATERIAL: '',  // Material Number
      MATERIAL_EXTERNAL: '',  // Long Material Number for MATERIAL Field
      MATERIAL_GUID: '',  // External GUID for MATERIAL Field
      MATERIAL_LONG: '',  // Material Number (40 Characters, needed f. technical reasons)
      MATERIAL_VERSION: '',  // Version Number for MATERIAL Field
      MN_WK_CTR: '',  // Main work center for maintenance tasks
      MRP_RELEVANT: '',  // Reservation Relevance/Generation of Purchase Requisition
      NOTIF_NO: '',  // Notification No
      NOTIF_TYPE: '',  // Notification Type
      ORDERID: '',  // Order Number
      ORDER_TYPE: '',  // Order Type
      ORDPLANID: '',  // Maintenance order planning indicator
      OVERHEAD_KEY: '',  // Overhead key
      PLANGROUP: '',  // Planner Group for Customer Service and Plant Maintenance
      PLANPLANT: '',  // Maintenance Planning Plant
      PLANT: '',  // Plant associated with main work center
      PLSECTN: '',  // Plant section
      PMACTTYPE: '',  // Maintenance activity type
      PRIORITY: '',  // Priority
      PROCESSING_GROUP: '',  // Processing group
      PROFIT_CTR: '',  // Profit Center
      REFERENCE_ORDER: '',  // Reference order number
      RESPCCTR: '',  // Responsible cost center
      RES_ANAL_KEY: '',  // Results Analysis Key
      REVISION: '',  // Revision for Plant Maintenance and Customer Service
      SALESORG: '',  // Sales Organization
      SALES_ORD: '',  // Sales Order Number
      SCALE: '',  // Scale of investment objects
      SCENARIO: '',  // Scenario or Subscreen Category
      SCHEDULING_EXACT_BREAK_TIMES: '',  // Indicator:  Scheduling allowing for breaks
      SCHED_TYPE: '',  // Scheduling type
      SECOND_OFFSET_TYPE_CODE: '',  // Type of Second Offset
      SECOND_OFFSET_UNIT: '',  // Unit of Measurement for Offset 2
      SECOND_OFFSET_UNIT_ISO: '',  // Unit of Measurement for Offset 2 in ISO Code
      SECOND_OFFSET_VALUE: '',  // Value of Offset 2
      SERIALNO: '',  // Serial Number
      SETTLORDER: '',  // Settlement order
      SHORT_TEXT: '',  // Description
      SORTFIELD: '',  // Sort field
      STANDORDER: '',  // Standing order number
      START_DATE: '',  // Basic start date
      START_POINT: '',  // Start Point
      SUB_NUMBER: '',  // Asset Subnumber
      SUPERIOR_ACTIVITY: '',  // Activity number in network and standard network
      SUPERIOR_NETWORK: '',  // Number of superior network
      SUPERIOR_ORDERID: '',  // Number of Superior Order
      SYSTCOND: '',  // Syst.Condition
      S_ORD_ITEM: '',  // Item number in Sales Order
      TAXJURCODE: '',  // Tax Jurisdiction
      TECO_REF_DATE: '',  // PM Order: Reference Date
      TECO_REF_TIME: '',  // Time of Reference Date
      VERSION: '',  // Version of Available Capacity
      WBS_ELEM: ''  // Work Breakdown Structure Element (WBS Element)
    };

    this.header.ORDERID = '';

    for (let k of Object.keys(this.IS_HEADER)) {
      if (this.header[k]) {
        this.IS_HEADER[k] = this.header[k];
        //console.log(`${k}:: ${this.IS_HEADER[k]}`);
      }
    }
    this.httpService.backend('/service_order/create', {
      IV_USER_STATUS: this.header.USERSTATUS,
      IS_HEADER: this.IS_HEADER
    }).then(Backend => {
      // console.log(Backend);
    })
    .catch(error => {
      //this.reset();
      this.app.toastError(error);
    });
  }

  /*

  getList:
    BAPI_ALM_ORDER_LISTHEAD_RESULT

  getDetail:
    ES_HEADER: {},                           // BAPI_ALM_ORDER_HEADER_E : ?de: Export-Struktur für ALM-Auftragskopf
    ES_HEADER_NOTIFICATION: {},              // BAPI2080_NOTHDRE : ?de: BAPI Servicemeldungskopf
    ET_COMPONENTS: [],                       // /COE/RBP_T_PAM_ORDER_COMP_GET : ?de: Get Component of Service Order
    ET_COSTS_DETAILS: [],                    // /COE/RBP_T_PAM_ORDER_COSTS : ?de: Costs of Service Order
    ET_DOCUMENT: [],                         // /COE/RBP_T_PAM_DOCUMENT : ?de: DMS Document Info
    ET_NOTICE_NOTIFICATION: [],              // /COE/RBP_T_PAM_NOTICE_LOG : ?de: Notice Log
    ET_OPERATIONS: [],                       // /COE/RBP_T_PAM_ORDER_OPER_GET : ?de: Get Operation of Service Order
    ET_PARTNER: [],                          // /COE/RBP_T_PAM_ORDER_PARTNER : ?de: Order Partner
    ET_PERMIT: [],                           // BAPI_ALM_ORDER_PERMIT_READ_T : todo: param text
    ET_PERMIT_ISSUE: [],                     // BAPI_ALM_ORDER_PER_ISSUE_R_T : todo: param text
    ET_RELATIONS: [],                        // BAPI_ALM_ORDER_RELATION_ET : ?de: Tabelle m. Anordnungsbeziehungen Bapi-Schnittstelle (Export)
    ET_RETURN: [],                           // BAPIRETTAB : ?de: Tabelle mit BAPI Return Informationen
    ET_TASKLIST: [],                         // /COE/RBP_T_PAM_PMPLAN : ?de: RBP - PM-Arbeitsplan-Struktur (Kopf)
    EV_COST_SUM: 0                           // CURR(15)   DGPLERTRAG

  change:
   // INPUT PARAMETERS

    IS_HEADER: {},                           // BAPI_ALM_ORDER_HEADERS_I : ?de: Import-Struktur für ALM-Auftragsköpfe
    IS_HEADER_X: {},                         // BAPI_ALM_ORDER_HEADERS_UP : ?de: Update-Struktur für ALM-Auftragsköpfe
    IS_REJECT_REASON: {},                    // /COE/RBP_S_PAM_REJECT_REASON : ?de: Reject Reason
    IT_COMPONENTS: [],                       // /COE/RBP_T_PAM_ORDER_COMP : ?de: Component of Service Order
    IT_COMPONENTS_X: [],                     // /COE/RBP_T_PAM_ORDER_COMPX : ?de: Component of Service Order
    IT_NOTICE_NOTIFICATION: [],              // RE_T_TEXTLINE : ?de: Textzeilen (132 Zeichen)
    IT_OPERATIONS: [],                       // /COE/RBP_T_PAM_ORDER_OPER : ?de: Operation of Service Order
    IT_OPERATIONS_X: [],                     // /COE/RBP_T_PAM_ORDER_OPERX : ?de: X Operation of Service Order
    IT_PERMIT: [],                           // BAPI_ALM_ORDER_PERMIT_T : todo: param text
    IT_PERMIT_ISSUE: [],                     // BAPI_ALM_ORDER_PERMITISSUE_T : todo: param text
    IT_PERMIT_X: [],                         // BAPI_ALM_ORDER_PERMIT_UP_T : todo: param text
    IV_ORDERID: '',                          // CHAR(12)   AUFNR                          ?de: Auftragsnummer
    IV_USER_STATUS: '',                      // CHAR(4)    J_TXT04                        ?de: Einzelstatus eines Objekts (Kurzform)

  create:
    IS_HEADER: {},                           // BAPI_ALM_ORDER_HEADERS_I : ?de: Import-Struktur für ALM-Auftragsköpfe
    IT_COMPONENTS: [],                       // /COE/RBP_T_PAM_ORDER_COMP : ?de: Component of Service Order
    IT_NOTICE_NOTIFICATION: [],              // RE_T_TEXTLINE : ?de: Textzeilen (132 Zeichen)
    IT_OPERATIONS: [],                       // /COE/RBP_T_PAM_ORDER_OPER : ?de: Operation of Service Order
    IT_PERMIT: [],                           // BAPI_ALM_ORDER_PERMIT_T : todo: param text
    IT_PERMIT_ISSUE: [],                     // BAPI_ALM_ORDER_PERMITISSUE_T : todo: param text
    IT_PERMIT_X: [],                         // BAPI_ALM_ORDER_PERMIT_UP_T : todo: param text
    IV_USER_STATUS: '',                      // CHAR(4)    J_TXT04                        ?de: Einzelstatus eines Objekts (Kurzform)

   */

}


