import { DialogService } from 'aurelia-dialog';
import { UIApplication, UIHttpService, UIUtils } from '../../resources/index';
import { moment } from '../../resources/index';

export class ServiceNotification {
  static __bizDocType = 'BUS2038';

  static inject = [UIApplication, UIHttpService, DialogService];

  constructor(app, httpService, dialogService) {
    this.app = app;
    this.httpService = httpService;
    this.dialogService = dialogService;
  }

  reset(action = false) {
    this.selection = {};
    this.list = [];
    this.header = UIUtils.abapStructClone(this.IS_NOTIF_HEADER_IN);
    this.text = '';
    this.longtext = [];
    this.href = '';
    this.hrefText = '';
    this.systemStatus = [];
    this.attachments = [];

    this.items = [];
    this.is_notitem = {};

    this.__action = action;
    this.__visibleItems = this.items.length > 0;
    this.__visibleTexts = this.longtext.length > 0;
    if (action) {
      if (action === 'create') {
        this.header.REPORTEDBY = this.app.User.name;
      }
      else {
        this.get(action);
      }
    }
    if (action && action !== 'create') this.get(action);
  }

  save() {
    if (this.header.NOTIF_NO) this.change();
    else this.create();
  }

  getList(selection = this.selection, getDetail = true) {
    this.list = [];

    return this.httpService
      .backend('/service_notification/getlist', selection)
      .then(FROM_ABAP => {
        this.list = FROM_ABAP.ET_NOTIFICATION;
        if (this.list.length > 0 && getDetail) this.get(this.list[0].NOTIFICAT);
      })
      .catch(error => {
        this.list = [];
        this.app.toastError(error);
      });
  }

  get(id = null) {
    if (id) {
      return this.httpService
        .backend('/service_notification/get', { IV_NOTIFNO: id })
        .then(FROM_ABAP => {
          this.header = FROM_ABAP.ES_HEADER;
          this.systemStatus = FROM_ABAP.ET_SYSSTATUS;
          this.text = '';
          this.longtext = this.getLongTexts(FROM_ABAP.ET_NOTICE);
          this.href = this.app.webGuiUrl('IW23', false, id);
          this.hrefText = FROM_ABAP.ES_HEADER.SHORT_TEXT + ' (' + FROM_ABAP.ES_HEADER.NOTIF_NO + ')';

          // Items
          this.items = FROM_ABAP.ET_NOTITEM;
          if (this.items.length > 0) {
            let item = this.items[0];
            if (item.D_CODEGRP === 'DEPRDA') {
              this.is_notitem._code_damage = item.D_CODE;
              this.is_notitem._text_damage = item.DESCRIPT;
              this.is_notitem.DL_CODEGERP = item.DL_CODEGRP;
              this.is_notitem.DL_CODE = item.DL_CODE;
            }
            else if (item.D_CODEGRP === 'DEPRCA') {
              this.is_notitem._code_cause = item.D_CODE;
              this.is_notitem._text_cause = item.DESCRIPT;
              this.is_notitem.DL_CODEGERP = item.DL_CODEGRP;
              this.is_notitem.DL_CODE = item.DL_CODE;
            }
          }
          else this.is_notitem = {};

          this.__visibleItems = this.items.length > 0;
          this.__visibleTexts = this.longtext.length > 0;

          // change clones
          this.__header = UIUtils.abapStructClone(this.header);
        })
        .catch(error => {
          this.reset();
          this.app.toastError(error);
        });
    }
  }

  isChanged() {
    let changed = false;
    for (let k of Object.keys(this.header)) {
      if (this.header[k] !== this.__header[k]) {
        console.log(k, this.header[k], this.__header[k]);
        changed = true;
        break;
      }
    }
    return changed;
  }

  create() {
    // Items
    let ct_notitem = [];
    let item_sort_no = 0;
    if (this.is_notitem._code_damage) {
      item_sort_no += 1;
      let sitem = '0000' + item_sort_no;
      ct_notitem.push({
        ITEM_SORT_NO: sitem.substr(sitem.length - 4),
        DESCRIPT: this.is_notitem._text_damage,
        D_CODEGRP: 'DEPRDA',
        D_CODE: this.is_notitem._code_damage,
        DL_CODEGRP: 'DEPROP',
        DL_CODE: this.is_notitem.DL_CODE
      });
    }
    if (this.is_notitem._code_cause) {
      item_sort_no += 1;
      let sitem = '0000' + item_sort_no;
      ct_notitem.push({
        ITEM_SORT_NO: sitem.substr(sitem.length - 4),
        DESCRIPT: this.is_notitem._text_cause,
        D_CODEGRP: 'DEPRCA',
        D_CODE: this.is_notitem._code_cause,
        DL_CODEGRP: 'DEPROP',
        DL_CODE: this.is_notitem.DL_CODE
      });
    }

    // Header
    let is_header = {};
    for (let k of Object.keys(this.IS_NOTIF_HEADER_IN)) is_header[k] = this.header[k];

    return this.httpService
      .backend('/service_notification/create', {
        IV_NOTIF_TYPE: this.header.NOTIF_TYPE,
        IS_NOTIF_HEADER_IN: is_header,
        IV_NEW_NOTICE: this.text,
        CT_NOTITEM: ct_notitem
      })
      .then(FROM_ABAP => {
        this.header = FROM_ABAP.ES_NOTIF_HEADER_OUT;
        this.text = '';
        this.longtext = this.getLongTexts(FROM_ABAP.ET_NOTICE);
        this.systemStatus = FROM_ABAP.ET_SYSSTATUS;
        this.longtextShow = this.longtext.length > 0;
        this.href = this.app.webGuiUrl('IW23', false, this.header.NOTIF_NO);
        this.hrefText = this.header.SHORT_TEXT + ' (' + this.header.NOTIF_NO + ')';

        // change clones
        this.__header = UIUtils.abapStructClone(this.header);

        this.app.toastSuccess(`Service Notification created: ${this.header.NOTIF_NO}`);
      })
      .catch(error => {
        //this.reset();
        this.app.toastError(error);
      });
  }

  change() {
    let payload = { IV_NOTIFNO: this.header.NOTIF_NO };

    if (this.text) {
      payload.IV_NEW_NOTICE = this.text;
    }

    let header_change = {};
    let header_change_x = {};
    for (let k of Object.keys(this.header)) {
      if (this.header[k] !== this.__header[k]) {
        header_change[k] = this.header[k];
        header_change_x[k] = 'X';
      }
    }

    if (Object.keys(header_change).length > 0) {
      payload.IS_NOTIF_HEADER = header_change;
      payload.IS_NOTIF_HEADER_X = header_change_x;
    }

    this.httpService
      .backend('/service_notification/change', payload)
      .then(FROM_ABAP => {
        if (FROM_ABAP.ES_NOTIF_HEADER.NOTIF_NO) {
          // header output filled
          this.header = FROM_ABAP.ES_NOTIF_HEADER;
          this.text = '';
          this.longtext = this.getLongTexts(FROM_ABAP.ET_NOTICE);
          this.systemStatus = FROM_ABAP.ET_SYSSTATUS;
          this.longtextShow = this.longtext.length > 0;
          this.__header = UIUtils.abapStructClone(this.header);
        }

        this.app.toastSuccess(`Service Notification changed: ${this.header.NOTIF_NO}`);
      })
      .catch(error => {
        //this.reset();
        this.app.toastError(error);
      });
  }

  serviceOrderCreate(order_id = this.header.NOTIF_NO, order_type = 'MM01') {
    let createDialog = { orderType: 'MM02', title: 'Select Order Type' };
    this.dialogService.open({ viewModel: 'plm/order-type', model: createDialog, useCss: 'di.css' }).then(response => {
      if (response.wasCancelled) return;

      order_type = createDialog.orderType;

      this.httpService
        .backend('/service_order/create_from_notification', {
          IV_NOTIFNO: order_id,
          IV_ORDER_TYPE: order_type
        })
        .then(FROM_ABAP => {
          let serviceOrderLink = this.app.webGuiLink('IW33', FROM_ABAP.EV_ORDERID);
          this.app.toastSuccess(`Service Order created: ${serviceOrderLink}`);
        })
        .catch(error => {
          this.app.toastError(error);
        });
    });
  }

  getLongTexts(longTexts) {
    let line;
    let longText = [];
    for (let i = longTexts.length - 1; i >= 0; i--) {
      line = longTexts[i];
      longText.push({
        datum: moment.utc(line.DATETIME, 'YYYYMMDDhhmmss').fromNow(), // format('LL h:mm:ss'),
        historyLine: line.HISTORY_LINE,
        message: line.NOTICE
      });
    }
    return longText;
  }

  selectNotice(evt) {
    this.notice = evt.detail;
  }

  IS_NOTIF_HEADER_IN = {
    ASSEMBLY: '', // Assembly
    ASSEMBLY_EXTERNAL: '', // Long Material Number for Field ASSEMBLY
    ASSEMBLY_GUID: '', // External GUID for ASSEMBLY Field
    ASSEMBLY_LONG: '', // Assembly
    ASSEMBLY_VERSION: '', // Version Number for ASSEMBLY Field
    BREAKDOWN: '', // Breakdown Indicator
    CODE_GROUP: '', // Code Group - Coding
    CODING: '', // Coding
    DESENDDATE: '', // Required End Date
    DESENDTM: '', // Requested End Time
    DESSTDATE: '', // Required start date
    DESSTTIME: '', // Required Start Time
    DEVICEDATA: '', // Additional Device Data
    DISTR_CHAN: '', // Distribution Channel
    DIVISION: '', // Division
    DOC_NUMBER: '', // Sales Document
    EFFECT: '', // Effect on Operation
    ENDMLFNDATE: '', // End of Malfunction (Date)
    ENDMLFNTIME: '', // End of Malfunction (Time)
    END_POINT: '', // End Point
    EQUIPMENT: '10000027', // Equipment Number
    FIRST_OFFSET_TYPE_CODE: '', // Type of First Offset
    FIRST_OFFSET_UNIT: '', // Unit of Measurement for Offset 1
    FIRST_OFFSET_UNIT_ISO: '', // Unit of Measurement for Offset 1 in ISO Code
    FIRST_OFFSET_VALUE: '', // Value of Offset 1
    FUNCT_LOC: '', // Functional Location
    ITM_NUMBER: '', // Sales Document Item
    LINEAR_LENGTH: '', // Length
    LINEAR_UNIT: '', // Unit of Measurement for Linear Data
    LINEAR_UNIT_ISO: '', // Unit of Measurement for Linear Data in ISO Code
    MAINTLOC: '', // Asset location
    MAINTPLANT: '', // Maintenance plant
    MAINTROOM: '', // Room
    MARKER_DISTANCE_END_POINT: '', // Length Spec for Distance between Marker and End Point
    MARKER_DISTANCE_START_POINT: '', // Distance between Marker and Start Point
    MARKER_DISTANCE_UNIT: '', // Unit for the Distance from Marker
    MARKER_DISTANCE_UNIT_ISO: '', // Unit for the Distance from Marker in ISO Code
    MARKER_END_POINT: '', // Marker for End Point
    MARKER_START_POINT: '', // Marker for Start Point
    MATERIAL: '', // Material Number
    MATERIAL_EXTERNAL: '', // Long Material Number for MATERIAL Field
    MATERIAL_GUID: '', // External GUID for MATERIAL Field
    MATERIAL_LONG: '', // Material Number (40 Characters, needed f. technical reasons)
    MATERIAL_VERSION: '', // Version Number for MATERIAL Field
    NOTIFTIME: '', // Time of Notification
    NOTIF_DATE: '', // Date of Notification
    PLANGROUP: '', // Planner Group for Customer Service and Plant Maintenance
    PLANPLANT: '', // Maintenance Planning Plant
    PM_WKCTR: '', // Object ID of the Work Center
    PRIORITY: '', // Priority
    PURCH_DATE: '', // Customer purchase order date
    PURCH_NO_C: '', // Customer purchase order number
    REFOBJECTKEY: '', // Object key
    REFOBJECTTYPE: '', // Object Type
    REFRELTYPE: '', // Relationship type
    REPORTEDBY: '', // Name of Person Reporting Notification
    SALES_GRP: '', // Sales group
    SALES_OFFICE: '', // Sales office
    SALES_ORG: '', // Sales Organization
    SCENARIO: '', // Key for a Scenario
    SECOND_OFFSET_TYPE_CODE: '', // Type of Second Offset
    SECOND_OFFSET_UNIT: '', // Unit of Measurement for Offset 2
    SECOND_OFFSET_UNIT_ISO: '', // Unit of Measurement for Offset 2 in ISO Code
    SECOND_OFFSET_VALUE: '', // Value of Offset 2
    SERIALNO: '', // Serial Number
    SHORT_TEXT: 'Test', // Short Text
    SORTFIELD: '', // Sort field
    START_POINT: '', // Start Point
    STRMLFNDATE: '', // Start of Malfunction (Date)
    STRMLFNTIME: '', // Start of Malfunction (Time)
    USERSTATUS_INT: ''
  };
}
