import {UIApplication, UIHttpService} from '../../resources/index';
export class IE04 {

  static inject = [UIApplication, UIHttpService];

  installList = [];
  installDetail = {};
  __showInstall = false;
  __showInstallDetail = false;

  constructor(app, httpService) {
    this.app = app;
    this.httpService = httpService;
  }

  activate(params, routeConfig, navigationInstruction) {
    this.routeTitle = routeConfig.title;
  }

  getInstallList() {
    this.list = [];
    this.detail = {};
    this.__showInstall = false;
    this.httpService.upload('/xlsd', this.files)
      .then(b => {
        this.__showInstall = true;
        this.installHeader = b.header;
        this.installList = b.list;
        if (this.installList.length > 0) this.installDetail = this.installList[0];
      })
      .catch(e => {
        let error;
        if (e.status === 500) {
          error = {
            type: error,
            message: e.statusText
          };
        }
        else error = e;
        this.app.toastError(error);
      });
  }

  selectInstallDetail(detail) {
    if (detail.index !== this.installDetail.index) {
      this.installDetail = detail;
      this.__showInstallDetail = true;
    }
    else this.__showInstallDetail = ! this.__showInstallDetail;
  }

  postInstalls() {
    for (let install of this.installList) {
      if (install.__status === 'ok') continue;
      let payload = {
        IV_EQUIID: install.equiId,
        IV_FUNC_LOCATION: install.supLocId
      };
      this.httpService.backend('/equipment/install', payload)
        .then(backend => {
          install.__status = 'ok';
        })
        .catch(error => {
          install.__status = 'error';
        });
    }
  }

  __statusIcons = {
    'ok': '<span class="sap-icon sap-icon-accept" style="color: #38a338;"></span>',
    'error': '<span class="sap-icon sap-icon-error ui-accent3"></span>'
  }
}
