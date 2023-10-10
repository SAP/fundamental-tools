export function configure(aurelia) {
  //** Core **
  aurelia.globalResources('./elements/core/ui-viewport');
  aurelia.globalResources('./elements/core/ui-page');
  aurelia.globalResources('./elements/core/ui-grid');

  //** Components **
  aurelia.globalResources('./elements/components/ui-datagrid');
  aurelia.globalResources('./elements/components/ui-form');
  aurelia.globalResources('./elements/components/ui-login');
  aurelia.globalResources('./elements/components/ui-menu');
  aurelia.globalResources('./elements/components/ui-shell-tile');
  aurelia.globalResources('./elements/components/ui-tab-panel');
  aurelia.globalResources('./elements/components/ui-panel');
  aurelia.globalResources('./elements/components/ui-tree');

  //** Inputs **
  aurelia.globalResources('./elements/inputs/ui-button');
  aurelia.globalResources('./elements/inputs/ui-input');
  aurelia.globalResources('./elements/inputs/ui-combo');
  aurelia.globalResources('./elements/inputs/ui-date');
  aurelia.globalResources('./elements/inputs/ui-date-view');
  aurelia.globalResources('./elements/inputs/ui-file');
  aurelia.globalResources('./elements/inputs/ui-option');
  aurelia.globalResources('./elements/inputs/ui-textarea');
  aurelia.globalResources('./elements/inputs/ui-option');
  aurelia.globalResources('./elements/inputs/ui-list');
  aurelia.globalResources('./elements/inputs/ui-tags');
  aurelia.globalResources('./elements/inputs/ui-switch');

  //** Utils **
  aurelia.globalResources('./value-converters/ui-converters');
  //** Custom Attributes **
  aurelia.globalResources('./attributes/ui-lookup');
  aurelia.globalResources('./attributes/ui-yt-player');
  //aurelia.globalResources('./utils/ui-smooth-scroll');
}

export {UIEvent} from './utils/ui-event';
export {UIFormat, moment, numeral} from './utils/ui-formatters';

//export {UIUtils, _, Tether} from './utils/ui-utils';
export {UIUtils, _} from './utils/ui-utils';
export {UIModel} from './utils/ui-model';

export {UIHttpService} from './utils/ui-http-service';
export {UIApplication, AuthInterceptor} from './utils/ui-application';
//export {UIValidationStrategy} from './utils/ui-validations';
export {UITreeModel, UITreeOptions} from './utils/ui-tree-model';
