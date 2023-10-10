import { singleton } from 'aurelia-framework';
import { Router, Redirect } from 'aurelia-router';
import { getLogger } from 'aurelia-logging';
import { Container } from 'aurelia-dependency-injection';
import { EventAggregator } from 'aurelia-event-aggregator';
import { I18N } from 'aurelia-i18n';
import { UIFormat } from './ui-formatters';
import { UIUtils } from './ui-utils';
import { moment } from './ui-formatters';
import { UIEvent } from './ui-event';
//import {Validation} from 'aurelia-validatejs';
//import {UIValidationStrategy} from './ui-validations';
import { UIConfigApp, UIConfigServer } from './ui-constants';
@singleton()
export class UIApplication {
  IsAuthenticated = false;
  IsHttpInUse = false;
  AllowAuthHeader = false;

  __logger;

  __config = {};
  __configBackend = {};

  User = {};

  static inject = [Router, EventAggregator, Container, I18N]; // , Validation)
  constructor(router, eventAggregator, container, i18n) {
    // , validation) {
    //this.validation = validation;
    this.router = router;
    this.eventAggregator = eventAggregator;
    this.i18n = i18n;
    UIUtils.__container = container;

    this.__logger = getLogger('UIApplication');
    this.__logger.debug('Initialized');

    this.eventAggregator.subscribe('Unauthorized', () => {
      this.__logger.debug('Unauthorized');
      this.Username = null;
      this.IsAuthenticated = false;
      this.navigateTo('login', { message: '401 Unauthorized' });
    });
    this.eventAggregator.subscribe('Logout', () => {
      this.__logger.debug('Logout');
      this.Username = null;
      this.IsAuthenticated = false;
      this.navigateTo('login');
    });
  }

  /** Logger **/
  info(tag, msg, ...rest) {
    this.__logger.info(`${tag}::${msg}`, ...rest);
  }

  warn(tag, msg, ...rest) {
    this.__logger.warn(`${tag}::${msg}`, ...rest);
  }

  debug(tag, msg, ...rest) {
    this.__logger.debug(`${tag}::${msg}`, ...rest);
  }

  error(tag, msg, ...rest) {
    this.__logger.error(`${tag}::${msg}`, ...rest);
  }

  //** Navigation **
  navigate(hash) {
    this.__logger.info('navigate::' + hash);
    this.router.navigate(hash);
  }

  navigateTo(route, params = {}) {
    this._current = null;
    this.__logger.debug(`navigateTo::${route}`, this.router);
    this.router.navigateToRoute(route, params, {});
  }

  //** Notifications **

  __overlayContainer;

  toast(config) {
    if (!this.__overlayContainer) {
      this.__overlayContainer = document.body.querySelector('.ui-viewport .ui-overlay-container');
    }
    if (typeof config === 'string') config = { message: config };
    UIUtils.showToast(this.__overlayContainer, config);
  }

  toastSuccess(config) {
    if (!this.__overlayContainer) {
      this.__overlayContainer = document.body.querySelector('.ui-viewport .ui-overlay-container');
    }
    if (typeof config === 'string') config = { message: config };
    config.theme = 'success';
    UIUtils.showToast(this.__overlayContainer, config);
  }

  toastWarning(config) {
    if (!this.__overlayContainer) {
      this.__overlayContainer = document.body.querySelector('.ui-viewport .ui-overlay-container');
    }
    if (typeof config === 'string') config = { message: config };
    config.theme = 'warning';
    UIUtils.showToast(this.__overlayContainer, config);
  }

  toastError(config) {
    this.__logger.error('error', '', config);
    if (!this.__overlayContainer) {
      this.__overlayContainer = document.body.querySelector('.ui-viewport .ui-overlay-container');
    }
    if (Array.isArray(config)) {
      for (let c of config) {
        console.error(c); // eslint-disable-line no-console
        if (typeof c === 'string') c = { message: c };
        if (!c.message) c = { message: c.toString() };
        if (!c.theme) c.theme = 'danger';
        UIUtils.showToast(this.__overlayContainer, c);
      }
    }
    else {
      if (typeof config === 'string') config = { message: config };
      if (!config.message) config = { message: config.toString() };
      config.theme = 'danger';
      UIUtils.showToast(this.__overlayContainer, config);
    }
  }

  //** Session and Persistent(Local) State **
  session(key, value = '§') {
    if (window.sessionStorage) {
      if (value === '§') {
        return JSON.parse(window.sessionStorage.getItem('Key:' + key));
      }
      else if (value === null) {
        window.sessionStorage.removeItem('Key:' + key);
      }
      else {
        window.sessionStorage.setItem('Key:' + key, JSON.stringify(value));
      }
    }
    return null;
  }

  clearSession() {
    if (window.sessionStorage) window.sessionStorage.clear();
  }

  persist(key, value = '§') {
    if (window.localStorage) {
      if (value === '§') {
        return JSON.parse(window.localStorage.getItem('Key:' + key));
      }
      else if (value === null) {
        window.localStorage.removeItem('Key:' + key);
      }
      else {
        window.localStorage.setItem('Key:' + key, JSON.stringify(value));
      }
    }
    return null;
  }

  loadConfig() {
    this.__config = UIConfigApp;
    this.release = this.__config.release;
    this.__abapsysid = UIConfigServer.api.sysid;
    this.__ashost = UIConfigServer.host;
    this.__logger.info('Configuration loaded: ', this.__config);

    // default toast timeout
    UIUtils.__toastTimeout = this.__config.toast.timeout;
    UIUtils.__toastRemovalTimeout = this.__config.toast.removalTimeout;

    // default user
    this.User = this.__config.User;
    // logon locale
    this.setLocale(this.User.locale);
  }

  setLocale(localeId) {
    UIFormat.__localeId = localeId;
    UIFormat.__locale = this.__config.localesSupported[localeId];

    if (UIFormat.__locale.moment) {
      UIFormat.localMoment = moment;
      UIFormat.localMoment.locale(localeId);
    }

    this.__logger.info(`Localized plugins configured for: ${localeId}`);

    return this.i18n.setLocale(localeId);
  }

  get(key) {
    let keys = key.split('.');
    let i = 0;
    let value = this.__config;
    while (value !== undefined && i < keys.length) value = value[keys[i++]];
    return value !== undefined ? value : null;
  }

  set(key, value) {
    if (key.indexOf('.') === -1) {
      this.__config[key] = value;
    }
    else {
      let splitKey = key.split('.');
      let parent = splitKey[0];
      let child = splitKey[1];

      if (this.__config[parent] === undefined) {
        this.__config[parent] = {};
      }

      this.__config[parent][child] = value;
    }
    return value;
  }

  webGuiUrl(tcode = false, docType = false, ...id) {
    let part;

    if (!(tcode || docType)) {
      this.__logger.error('Either the TCode or DocType must be supplied');
      return false;
    }

    if (!tcode) {
      let dt = this.__config.bizDocType[docType];
      if (!dt) {
        this.__logger.error(`DocType [${docType}] not configured`);
        return false;
      }
      tcode = dt.tcode;
    }

    part = this.__config.webGUI[tcode];
    if (!part) {
      this.__logger.error(`ITS not configured for: [${tcode}]`);
      return false;
    }

    for (let i = 0; i < id.length; i++) {
      part = part.replace(`id[${i}]`, id[i]);
    }

    return `${UIConfigServer.api.webguiHTML}/sap/bc/gui/sap/its/webgui?~transaction=*${part}&sap-client=${
      this.__abapBackend.client
    }&sap-language=${this.User.locale}`;
  }

  webGuiLink(tcode, ...id) {
    let url = this.webGuiUrl(tcode, false, id);
    return `<a href="${url}" target="_blank">${id[0]}</a>`;
  }
}

@singleton()
export class AuthInterceptor {
  static inject = [UIApplication];
  constructor(app) {
    this.app = app;
    this.app.info(this.constructor.name, 'Initialized');
    UIEvent.subscribe('Unauthorized', () => this.app.navigateTo('/login', { status: 401 }));
  }

  run(routingContext, next) {
    // console.log('route::', routingContext);

    // Check if the route has an "auth" key
    // The reason for using `nextInstructions` is because this includes child routes.
    if (routingContext.getAllInstructions().some(r => r.config.auth)) {
      if (!isTrue(this.app.IsAuthenticated)) {
        this.app.warn(this.constructor.name, 'Not authenticated');
        let url = routingContext.router.generate('login', { status: 401 });
        this.app.IsAuthenticated = false;
        this.app.session('AppCurrentRoute', routingContext.fragment);
        return next.reject(new Redirect(url));
      }
      this.app.session('AppCurrentRoute', null);
    }
    // Check if route is not login then check if the user group is allowed to access the route
    //if (!routingContext.config.isLogin && !this.isAllowed(routingContext.config.role)) {
    //  this.app.toast({message: '⚠︎ Access Denied', theme: 'danger'});
    //  return next.reject();
    //}

    return next();
  }

  // Test user lead role against permitted route roles
  isAllowed(routeRoles) {
    let granted = true;
    if (this.app.User.role === '__all__' || !routeRoles) return granted; // todo remove  for produciton

    if (routeRoles && !Array.isArray(routeRoles)) routeRoles = [routeRoles];
    if (routeRoles && this.app.User.role) {
      granted = routeRoles.indexOf(this.app.User.role) !== -1;
    }

    if (granted) {
      this.app.info(this.constructor.name, 'access granted for: ', this.app.User.routeRoles, 'to : ', routeRoles);
      return true;
    }

    this.app.warn(this.constructor.name, 'no access for', this.app.User.routeRoles, 'to', routeRoles);
    return false;
  }
}
