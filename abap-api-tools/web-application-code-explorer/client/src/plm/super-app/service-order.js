import {UIApplication} from '../../resources/index';
import {SuperAppView} from './superAppView';
import {ServiceOrder} from 'plm/service-order/model';

export class SuperAppServiceOrder extends SuperAppView {

  bizDocType = ServiceOrder.__bizDocType;

  static inject = [UIApplication, ServiceOrder];

  constructor(app, serviceOrder) {
    super();

    this.app = app;
    this.serviceOrder = serviceOrder;
  }

  activate(params, routeConfig, navigationInstruction) {
    super.activate(params, routeConfig, navigationInstruction);
    if (this.id) {
      this.serviceOrder.get(this.id)
        .then(() => {
          this.bizDoc.text = this.serviceOrder.id;
          this.bizDoc.href = this.serviceOrder.href;
          this.bizDoc.hrefText = this.serviceOrder.hrefText;
        });
    }
  }

}
