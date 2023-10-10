import {bindable, Container, customElement} from 'aurelia-framework';
import {UIApplication} from '../../utils/ui-application';
import {UIHttpService} from '../../utils/ui-http-service';
import {UIEvent} from '../../utils/ui-event';

@customElement('ui-viewport')
export class UIViewport {
  @bindable() router;

  @bindable() subtitle = '';
  @bindable() copyright = '';
  @bindable() showMenu= true;
  @bindable() showTaskbar = true;

  static inject = [Element, UIApplication, UIHttpService, Container];
  constructor(element, app, httpService, container) {
    this.element = element;
    this.app = app;
    this.httpService = httpService;
    this.app.info(this.constructor.name, 'UIViewport Created', container);
  }

  bind() {
    this.showMenu = isTrue(this.showMenu);
    this.showTaskbar = isTrue(this.showTaskbar);
  }
  __showMenu($event) {
    $event.stopPropagation();
    this.element.classList.add('show-menu');
    this.app.info(this.constructor.name, 'showMenu');
  }
  __hideMenu($event) {
    let menu = document.querySelector('.ui-floating.show');
    if (menu) menu.classList.remove('show');
    let focusRow = document.querySelector('.ui-datagrid-row.focus');
    if (focusRow) focusRow.classList.remove('focus');


    if (this.element.classList.contains('show-menu')) {
      this.app.info(this.constructor.name, 'hideMenu');
      this.element.classList.remove('show-menu');
    }
    //let appView = this.element.querySelector('.ui-app-view');
    //if (appView && appView.classList.contains('ui-sidebar-show')) {
    //  this.app.info(this.constructor.name, 'hideMenu');
    //  appView.classList.remove('ui-sidebar-show');
    //}
    return true;
  }

  appMenu(evt) {
    if (evt.detail.id === 'logout') {
      this.httpService.backend('/logout').then((response) => {
        this.app.IsAuthenticated = false;
        this.app.info(this.constructor.name, 'fire logout event');
        UIEvent.fireEvent('logout', this.element);
      });
    }
  }
}

