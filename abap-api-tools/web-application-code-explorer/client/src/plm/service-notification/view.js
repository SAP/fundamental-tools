import {UIApplication, UIHttpService} from '../../resources/index';
import {ServiceNotification} from './model';

export class ServiceNotificationView {

  static inject = [UIApplication, UIHttpService, ServiceNotification];

  constructor(app, httpService, serviceNotification) {
    this.app = app;
    this.httpService = httpService;
    this.serviceNotification = serviceNotification;
  }

  activate(params, routeConfig, navigationInstruction) {
    //console.log('!!', params, routeConfig, navigationInstruction);
    this.__action = params.action;
    this.routeTitle = routeConfig.title;
    this.serviceNotification.reset(this.__action);
  }

  save() {
    if (this.__action === 'create') this.serviceNotification.create();
    else                            this.serviceNotification.save();
  }
}
