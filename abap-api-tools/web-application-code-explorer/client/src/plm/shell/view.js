import { UIApplication, UIFormat, moment } from '../../resources/index';
import { ServiceNotification } from '../service-notification/model';
import { ServiceOrder } from '../service-order/model';

export class ShellView {
  static inject = [Element, UIApplication, ServiceNotification, ServiceOrder];

  constructor(element, app, serviceNotification, serviceOrder) {
    this.element = element;
    this.app = app;

    this.serviceNotification = serviceNotification;
    this.serviceOrder = serviceOrder;
    this.pastDate = this.app.__config.pastDate;
    this.lastWeek = UIFormat.toABAP(moment().add(-1, 'weeks'), 'date');
  }

  activate(params, routeConfig) {
    this.serviceNotification.getList({ IV_NOTIFICATION_DATE: this.app.__config.pastDate }, false);

    // let d = (this.app.User.role.AGR_NAME === '/COE/RBP_PRT_TECHNICIAN') ? moment().add(-3, 'years') : moment().add(-1, 'month');
    this.serviceOrder.getList(
      {
        records: 1000,
        totals: true,
        fromDate: this.app.__config.pastDate
        //fromDate: UIFormat.toABAP(d, 'date')
      },
      false
    );
  }
}
