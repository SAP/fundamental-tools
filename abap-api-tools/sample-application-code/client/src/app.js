import {UIApplication, AuthInterceptor} from 'resources/index';

export class App {
  static inject = [UIApplication];
  constructor(app) {
    this.app = app;
    // pre-logon locales
    this.app.loadConfig();
  }

  configureRouter(config, router) {
    this.router = router;

    config.title = this.app.get('release.title');
    if (this.app.get('httpConfig.pushState')) {
      //config.options.pushState = true;
      //config.options.root = '/';
      //config.options.hashChange = true;
    }
    config.options.showLogo = true;
    config.options.showAuthentication = true;
    config.addPipelineStep('authorize', AuthInterceptor);
    config.map([
      {route: '', redirect: 'login'},
      {route: 'login',        name: 'login',    moduleId: 'login/login',      nav: true,  title: 'Login'},
      {route: 'user',         name: 'user',     moduleId: 'login/user',       nav: true, title: 'User',   settings: {icon: 'sap-icon sap-icon-account'}, auth: true},

      {route: 'plm',  name: 'PLM',  moduleId: 'plm/app',  nav: true, title: 'PLM', auth: true},
      {route: 'home', name: 'Home', moduleId: 'home/app', nav: true, title: 'home'}
    ]);
    config.mapUnknownRoutes(instruction => {
      this.app.debug(this.constructor.name, 'Unknown route:::', instruction.fragment);
      return 'login/login';
    });
  }

  toggleDir() {
    document.body.dir = document.body.dir === 'rtl' ? 'ltr' : 'rtl';
  }

  logout() {
    this.app.navigateTo('login');
  }

  toggleTheme() {
    this.app.debug(this.constructor.name, 'toggleTheme', 'todo');
    //let css = document.getElementById('baseStyle');
    //css.href = css.href.indexOf('bluecrystal') === -1 ? 'styles/app.css' : 'styles/app-hcb.css';
  }
}
