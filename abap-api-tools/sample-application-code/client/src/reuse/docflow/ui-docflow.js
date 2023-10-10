import {bindable, bindingMode, customElement} from 'aurelia-framework';
import {UIApplication, UIHttpService} from '../resources/index';

@customElement('ui-docflow')
export class UIDocFlow {
  @bindable flow = [];
  @bindable document = {};
  @bindable router = null;
  @bindable({defaultBindingMode: bindingMode.oneTime}) showTitle = true;
  @bindable flowFlat = {headers: [], flow: []};

  static inject = [Element, UIApplication, UIHttpService];
  constructor(element, app, httpService) {
    this.element = element;
    this.app = app;
    this.httpService = httpService;
    this.bizDocType = this.app.get('bizDocType');
  }

  get(docType, docId) {
    this.flowFlat = {headers: [], flow: []};
    if (this.httpService && docType && docId) {
      let t = this.bizDocType[docType];
      if (!t) {
        this.app.toastError(`Document type not configured: [${docType}]`);
        return;
      }
      let payload = {
        IV_WITH_OPERATIONS: 'X',
        IV_GET_HIER: 'X',
        IV_GET_FLAT: 'X',
        IV_WITH_TASKLIST: 'X'
      };
      payload[t.param] = docId;
      //console.log('DF::', docType, docId, t, payload);
      return this.httpService.backend('/docflow', payload)
        .then(FROM_ABAP => {
          // add href and icon

          if (FROM_ABAP.ET_DOCFLOW_FLAT.length > 0) {
            let firstLine = FROM_ABAP.ET_DOCFLOW_FLAT[0].LINE_NR;
            let lineNr = firstLine;
            let line = [];

            for (let d of FROM_ABAP.ET_DOCFLOW_FLAT) {
              let dt = this.bizDocType[d.DOC_TYPE];
              if (!dt) {
                this.app.debug(this.constructor.name, `Document Type: [${d.DOC_TYPE}] not configured.`);
                continue;
              }
              if (d.LINE_NR === firstLine) {
                this.flowFlat.headers.push({type: d.DOC_TYPE, name: dt.name});
              }
              d.icon = dt.icon;
              if (d.DOC_TYPE === 'BUS1019') {
                let id = d.DOC_ID.split('/');
                d.href = this.app.webGuiUrl(false, d.DOC_TYPE, id[1], id[2]);
              }
              else {
                d.href = this.app.webGuiUrl(false, d.DOC_TYPE, d.DOC_ID);
              }

              d.id = `${d.DOC_ID}-${d.DOC_POS}`;
              d.show = false;
              if (d.LINE_NR === lineNr) {
                line.push(d);
              }
              else {
                this.flowFlat.flow.push(line);
                line = [];
                lineNr = d.LINE_NR;
                line.push(d);
              }
            }

            if (line.length > 0) {
              this.flowFlat.flow.push(line);
            }

            // console.log(':::', this.flowFlat);
          }


          // add href and icon
          for (let d of FROM_ABAP.ET_DOCFLOW) {
            if (d.DOC_TYPE.trim().length === 0) {
              d.delete = true;
              continue;
            }
            let dt = this.bizDocType[d.DOC_TYPE];
            if (!dt) {
              d.delete = true;
              continue;
            }

            d.DOC_ID = d.DOC_ID.replace(/^0+/, '');

            d.icon = dt.icon;
            d.href = this.app.webGuiUrl(false, d.DOC_TYPE, d.DOC_ID);

            d.id = `${d.DOC_ID}-${d.DOC_POS}`;
            d.show = false;
          }
          for (let i = 0; i < FROM_ABAP.ET_DOCFLOW.length; i++) {
            if (FROM_ABAP.ET_DOCFLOW[i].delete) {
              FROM_ABAP.ET_DOCFLOW.splice(i, 1);
            }
          }
          // update the view
          this.flow = FROM_ABAP.ET_DOCFLOW;
        })
        .catch(error => {
          this.flow = []; this.doc = {};
          this.app.toastError(error);
        });
    }
  }

  select(bizDoc) {
    if (bizDoc.id !== this.document.id) {
      this.document.show = false;
      this.document = bizDoc;
      this.document.show = true;
    }
    else this.document.show = !isTrue(this.document.show);
  }

}
