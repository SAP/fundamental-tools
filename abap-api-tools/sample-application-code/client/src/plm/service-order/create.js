import {UIApplication, UIHttpService} from '../../resources/index';
import {ServiceOrder} from './model';

export class ServiceOrderCreate {

  static inject = [UIApplication, UIHttpService, ServiceOrder];

  constructor(app, httpService, serviceOrder) {
    this.app = app;
    this.httpService = httpService;
    this.serviceOrder = serviceOrder;
  }

  activate(params, routeConfig, navigationInstruction) {
    this.routeTitle = routeConfig.title;
  }

}
