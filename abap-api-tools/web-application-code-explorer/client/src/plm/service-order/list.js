import {UIApplication, UIUtils} from '../../resources/index';
import {ServiceOrder} from './model';

export class ListOrders {

  listFilter = '';
  listFilterFound = 0;

  static inject = [UIApplication, ServiceOrder];
  constructor(app, serviceOrder) {
    this.app = app;
    this.serviceOrder = serviceOrder;
  }

  activate() {
    if (this.app.IsAuthenticated) this.serviceOrder.getList();
  }

  listClick(index, orderId) {
    // console.log(index, orderId);
    this.serviceOrder.get(orderId);
    if (this.__list) {
      if (this.__item) this.__item.classList.remove('ui-selected');
      this.__item = this.__list.querySelector(`li:nth-child(${index + 1})`);
      if (this.__item) this.__item.classList.add('ui-selected');
    }
  }

  listFilterChanged(filter, list) {
    this.listFilterFound = UIUtils.listFilterChanged(filter, list);
  }
}
