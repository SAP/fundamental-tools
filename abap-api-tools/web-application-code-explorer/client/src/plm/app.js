import { UIApplication } from '../resources/index';

export class App {
  static inject = [UIApplication];
  constructor(app) {
    this.app = app;
  }

  configureRouter(config, router) {
    this.router = router;

    config.title = 'PLM';
    config.map([
      {
        route: ['shell/:role?'],
        name: 'shell',
        title: 'Shell',
        moduleId: './shell/view',
        nav: true,
        href: 'shell',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: ['service-confirmation/list/:id?'],
        name: 'confirmation-list',
        title: 'My Confirmations',
        moduleId: './service-confirmation/list',
        nav: true,
        href: 'confirmation',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: ['service-notification/list/:id?'],
        name: 'notification-list',
        title: 'My Incidents',
        moduleId: './service-notification/list',
        nav: true,
        href: 'notification',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: ['service-notification/:action?'],
        name: 'notification',
        title: 'Service Notifications',
        moduleId: './service-notification/view',
        nav: true,
        href: 'notification',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: ['service-order/list/:id?'],
        name: 'order-list',
        title: 'My Service Orders',
        moduleId: './service-order/list',
        nav: true,
        href: 'order',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: ['service-order/:action?'],
        name: 'order',
        title: 'Order',
        moduleId: './service-order/list',
        nav: true,
        href: 'order',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: ['service-order/create'],
        name: 'orderCreate',
        title: 'New Service Order',
        moduleId: './service-order/create',
        nav: true,
        href: 'order',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: ['service-order/:id?'],
        name: 'order',
        title: 'Service Order',
        moduleId: './service-order/view',
        nav: true,
        href: 'order',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: 'equipment/ie04',
        name: 'equipment-ie04',
        title: 'super Installer & Dismantler',
        moduleId: './equipment/ie04',
        nav: true,
        href: 'ie04',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: ['equipment/:id?'],
        name: 'equipment',
        title: 'Equipment Master',
        moduleId: './equipment/view',
        nav: true,
        href: 'equipment',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: ['solution-finder/:id?'],
        name: 'solution-finder',
        title: 'Solution Finder',
        moduleId: 'solution-finder/view',
        nav: true,
        href: 'solution-finder',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: 'super-app',
        name: 'super-app',
        title: 'Super App',
        moduleId: './super-app/app',
        nav: true,
        href: 'super-app',
        roles: ['Z_FAM_TECHNICIAN']
      },

      {
        route: 'esearch',
        name: 'esearch',
        title: 'Search',
        moduleId: './esearch/view',
        nav: true,
        href: 'esearch',
        roles: ['Z_FAM_TECHNICIAN']
      },

      { route: '', redirect: 'shell' }
    ]);

    config.mapUnknownRoutes(instruction => {
      this.app.debug('Unknown route:::', instruction.fragment);
      return './shell';
    });
  }
}
