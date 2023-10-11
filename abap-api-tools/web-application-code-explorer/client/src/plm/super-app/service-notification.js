import {UIApplication} from '../../resources/index';
import {SuperAppView} from './superAppView';
import {ServiceNotification} from 'plm/service-notification/model';

export class SuperAppServiceNotification extends SuperAppView {

  bizDocType = ServiceNotification.__bizDocType;

  static inject = [UIApplication, ServiceNotification];

  constructor(app, serviceNotification) {
    super();

    this.app = app;
    this.serviceNotification = serviceNotification;
  }
  activate(params, routeConfig, navigationInstruction) {
    super.activate(params, routeConfig, navigationInstruction);
    if (this.id) {
      this.serviceNotification.get(this.id)
        .then(() => {
          this.bizDoc.text = this.serviceNotification.id;
          this.bizDoc.href = this.serviceNotification.href;
          this.bizDoc.hrefText = this.serviceNotification.hrefText;
        });
    }
  }

}
