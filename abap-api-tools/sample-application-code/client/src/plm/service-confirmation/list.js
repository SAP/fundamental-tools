import {Router} from 'aurelia-router';
import {UIApplication, UIUtils} from '../../resources/index';
import {ServiceOrder} from '../service-order/model';
import {DialogService} from 'aurelia-dialog';

export class ListConfirmations {

  listFilter = '';
  listFilterFound = 0;

  static inject = [Element, Router, DialogService, UIApplication, ServiceOrder];

  constructor(element, router, dialogService, app, serviceOrder) {
    this.element = element;
    this.router = router;
    this.dialogService = dialogService;
    this.app = app;
    this.serviceOrder = serviceOrder;
  }

  attached() {
    this.__list = this.element.querySelector('.ui-master-list');
  }

  activate(params, routeConfig, navigationInstruction) {
    //console.log('!!route', this.__list, this.__item, params, routeConfig, navigationInstruction);
    if (params && params.id) {
      this.serviceOrder.getConfirmations(params.id);
    }
    else {
      this.serviceOrder.getList({IV_NOTIFICATION_DATE: this.app.__config.pastDate}, true);
    }
  }


  listClick(index, orderId) {
    let currentRoute = this.router.currentInstruction.config.name;
    if (this.serviceOrder.isChanged()) {
      this.dialogService.open({ viewModel: 'reuse/dialog/prompt', model: 'Abandon changes ?', useCss: 'di.css'})
        .then(response => {
          if (! response.wasCancelled) {
            if (this.__list) {
              if (this.__item) this.__item.classList.remove('ui-selected');
              this.__item = this.__list.querySelector(`li:nth-child(${index + 1})`);
              if (this.__item) this.__item.classList.add('ui-selected');
            }
            this.router.navigateToRoute(currentRoute, {id: orderId});
          }
        });
    }
    else {
      if (this.__list) {
        if (this.__item) this.__item.classList.remove('ui-selected');
        this.__item = this.__list.querySelector(`li:nth-child(${index + 1})`);
        if (this.__item) this.__item.classList.add('ui-selected');
      }
      this.router.navigateToRoute(currentRoute, {id: orderId});
    }
  }

  listFilterChanged(filter, list) {
    this.listFilterFound = UIUtils.listFilterChanged(filter, list);
  }
}
