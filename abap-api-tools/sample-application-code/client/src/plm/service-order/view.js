import {UIApplication, UIHttpService} from '../../resources/index';
import {ServiceOrder} from './model';

export class ServiceOrderView {

  static inject = [UIApplication, UIHttpService, ServiceOrder];

  constructor(app, httpService, serviceOrder) {
    this.app = app;
    this.httpService = httpService;
    this.serviceOrder = serviceOrder;
  }

  activate(params, routeConfig, navigationInstruction) {
    // console.log('!!', params, routeConfig, navigationInstruction);
    this.__action = params.action;
    this.routeTitle = routeConfig.title;
    if (this.__action && this.__action !== 'create') this.notification.get(this.__action);
  }
  save() {
    if (this.__action === 'create') this.serviceOrder.create();
    else                            this.serviceOrder.save();
  }
}
