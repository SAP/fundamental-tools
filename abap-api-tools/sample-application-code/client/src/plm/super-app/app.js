import {UIApplication, UIFormat, UIUtils, moment} from '../../resources/index';

import {ServiceOrder} from 'plm/service-order/model';
import {ServiceNotification} from 'plm/service-notification/model';
import {Equipment} from 'plm/equipment/model';
import {Solution} from 'solution-finder/model';

export class App {
  bizDoc = {};

  Flow = [];
  document = {};

  static inject = [UIApplication, Equipment, ServiceOrder, ServiceNotification, Solution];
  constructor(app, equipment, serviceOrder, serviceNotification, solutionFinder) {
    this.app = app;
    this.equipment = equipment;
    this.serviceOrder = serviceOrder;
    this.serviceNotification = serviceNotification;
    this.solutionFinder = solutionFinder;
  }

  configureRouter(config, router) {
    config.title = 'super App';
    config.options.showLogo = true;
    config.options.showAuthentication = true;
    config.map([
      {route: '', redirect: 'view'},
      {
        route: 'view',
        name: 'view',
        moduleId: './view',
        href: 'view',
        nav: false,
        title: 'View',
        settings: {icon: 'sap-icon sap-icon-account'}
      },
      {
        route: 'service-notification/:id',
        name: 'serviceNotification',
        moduleId: './service-notification',
        href: 'service-notification',
        nav: true,
        title: this.app.get('bizDocType.BUS2038').name,
        settings: {
          bizDocType: 'BUS2038'
        }
      },
      {
        route: 'service-order/:id',
        //route: ['service-order', 'service-order/:id'],
        name: 'serviceOrder',
        moduleId: './service-order',
        href: 'service-order',
        nav: true,
        title: this.app.get('bizDocType.BUS2007').name,
        settings: {
          bizDocType: 'BUS2007'
        }
      },
      {
        route: 'equipment/:id',
        name: 'equipment',
        moduleId: './equipment',
        href: 'equipment',
        nav: true,
        title: this.app.get('bizDocType.BUSEQUI').name,
        settings: {
          bizDocType: 'BUSEQUI'
        }
      },
      {
        route: 'solution-finder/:id',
        //route: ['service-order', 'service-order/:id'],
        name: 'solutionFinder',
        moduleId: './solution-finder',
        href: 'solution-finder',
        nav: true,
        title: this.app.get('bizDocType._SOLDB').name,
        settings: {
          bizDocType: '_SOLDB'
        }
      },
      {route: '', redirect: 'view'}
    ]);

    config.mapUnknownRoutes(instruction => {
      this.app.debug(this.constructor.name, 'Unknown route:::', instruction.fragment);
      return 'view';
    });

    this.router = router;
  }

  activate() {
    this.equipment.getlist();

    this.serviceNotification.getList({IV_NOTIFICATION_DATE: '20150101'}, false);

    let d = (this.app.User.role.AGR_NAME === '/COE/RBP_PRT_TECHNICIAN') ? moment().add(-3, 'years') : moment().add(-1, 'month');
    this.serviceOrder.getList({
      records: 1000,
      totals: true,
      fromDate: UIFormat.toABAP(d, 'date')
    }, false);
  }

  selectDocument(document) {
    this.document = document;
  }

  listFilterChanged(filter, list) {
    UIUtils.listFilterChanged(filter, this.serviceNotification.list);
    UIUtils.listFilterChanged(filter, this.serviceOrder.list);
    UIUtils.listFilterChanged(filter, this.equipment.list);

    this.solutionFinder.search(filter);
  }
}
