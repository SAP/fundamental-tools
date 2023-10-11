import {bindable, bindingMode, customElement} from 'aurelia-framework';
import {DialogService} from 'aurelia-dialog';
import {UIApplication, UIHttpService, UIUtils} from '../resources/index';

@customElement('ui-attachments')
export class UIattachments {
  DMS = {};
  imageUrl = false;

  @bindable({defaultBindingMode: bindingMode.oneWay}) attachments = [];
  @bindable({defaultBindingMode: bindingMode.oneTime}) showTitle = true;

  static inject = [Element, UIApplication, UIHttpService, DialogService];
  constructor(element, app, httpService, dialogService) {
    this.element = element;
    this.app = app;
    this.httpService = httpService;
    this.dialogService = dialogService;
  }

  attachmentsChanged() {
    // check if equipment image returned
    this.imageUrl = false;
    // fix mime types todo: fix in backend
    for (let doc of this.attachments) {
      let ext = doc.FILE_NAME.split('.');
      ext = ext[ext.length - 1].toLowerCase();
      if ('jpeg,jpg,gif,png'.indexOf(ext) !== -1) doc.MIMETYPE = `image/${ext}`;
      else if (ext === 'mp4' || ext === 'm4v') doc.MIMETYPE = 'video/mp4';
      else if (ext === 'mov') doc.MIMETYPE = 'quicktime/mov';
      else if (ext === 'zip') doc.MIMETYPE = 'application/zip';
      doc.video = (doc.MIMETYPE.indexOf('video') !== -1) || (doc.MIMETYPE.indexOf('quicktime') !== -1);
      // save DMS parameters, for the upload later on
      if (!this.DMS.DOCUMENTTYPE) {
        this.DMS.DOCUMENTTYPE = doc.DOCUMENTTYPE;
        this.DMS.DOCUMENTNUMBER = doc.DOCUMENTNUMBER;
        this.DMS.DOCUMENTVERSION = doc.DOCUMENTVERSION;
        this.DMS.DOCUMENTPART = doc.DOCUMENTPART;
      }
      doc.icon = UIUtils.mimeTypeIcon(doc.MIMETYPE);
      if (!this.imageUrl && (doc.MIMETYPE.indexOf('image') !== -1)) {
        // todo: if no pushState, ensure no leading "/" here !
        this.imageUrl = `${this.httpService.__apiPrefix}/dms?CLASS=${doc.CLASS}&OBJID=${doc.OBJID}&MIMETYPE=${doc.MIMETYPE}`;
      }
      doc.show = false;
      doc.ext = ext;
      doc.src = `${this.httpService.__apiPrefix}/dms?CLASS=${doc.CLASS}&OBJID=${doc.OBJID}&MIMETYPE=${doc.MIMETYPE}`;
    }
  }


  dms(doc, method, index) {
    if (method === 'get') {
      if (doc.show) {
        doc.show = false; // data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9wEGAkECkJtuNEAAAAMaVRYdENvbW1lbnQAAAAAALyuspkAAAANSURBVAjXY2BgYGAAAAAFAAFe8yo6AAAAAElFTkSuQmCC';
      }
      else {
        doc.show = true;
      }
    }
    else if (method === 'delete') {
      this.dialogService.open({ viewModel: 'reuse/dialog/prompt', model: `Delete ${doc.FILE_NAME} ?`, useCss: 'di.css'}).then(response => {
        if (response.wasCancelled) return;

        let request = '/dms?';
        for (let k of ['DOCUMENTTYPE', 'DOCUMENTNUMBER', 'DOCUMENTPART', 'DOCUMENTVERSION', 'FILE_NAME']) {
          request += `${k}=${doc[k]}&`;
        }
        this.httpService.delete(request)
          .then(result => {
            this.attachments.splice(index, 1);
          })
          .catch(error => {
            this.app.debug(this.constructor.name, error);
            this.app.toastError(error);
          });
      });
    }
    else if (method === 'post') {
      this.httpService.upload('/dms', this.files, this.DMS).then(r => {
        this.files = [];
        //this.attachments.push(this.attachments[0])
      });
    }
  }
}
