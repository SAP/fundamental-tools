import {DOM} from 'aurelia-framework';
import environment from './environment';
import Backend from 'i18next-xhr-backend';

Promise.config({
  warnings: {
    wForgottenReturn: false
  }
});

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-animator-css')
    .plugin('aurelia-ui-virtualization')
    .plugin('aurelia-validation')
    .plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.lock = false;
      config.settings.centerHorizontalOnly = false;
      config.settings.startingZIndex = 1005;
    })
    .plugin('aurelia-i18n', (instance) => {
      instance.i18next.use(Backend);
      return instance.setup({
        backend: {
          loadPath: 'locales/{{lng}}/{{ns}}.json'
        },
        lng: 'en',
        attributes: ['t', 'i18n'],
        fallbackLng: 'en',
        debug: false
      });
    })
    .feature('resources');
    //.feature('resources', config => { config.init(); });

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin('aurelia-testing');
  }

  aurelia.start()
    .then(() => aurelia.setRoot())
    .then(() => DOM.removeNode(document.querySelector('.ui-splash')));
  /*
  let splash = document.querySelector('.ui-splash');
  splash.classList.add('animate');
  setTimeout(() => {
    splash.parentElement.removeChild(splash);
  }, 1000);
  */
}
