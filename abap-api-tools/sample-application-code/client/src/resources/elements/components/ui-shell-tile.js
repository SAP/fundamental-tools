import {bindable, customElement, inlineView} from 'aurelia-framework';
import {UIApplication} from '../../utils/ui-application';

@customElement('ui-shell-tile')
export class UIShellTile {
  @bindable tileClass = '';
  @bindable row = 0;
  @bindable col = 0;
  @bindable sizeX = 1;
  @bindable sizeY = 1;
  @bindable route = '';

  @bindable tileDef = null;

  static __idCount = 0;

  static inject = [Element, UIApplication];
  constructor(element, app) {
    this.element = element;
    this.app = app;
    if (!element.id) this.element.id = `ui-tile-${++UIShellTile.__idCount}`;
  }

  bind() {
    this.row = this.row | 0;
    this.col = this.col | 0;
    this.sizeX = this.sizeX | 0;
    this.sizeY = this.sizeY | 0;
  }

  attached() {
    if (/^\s*$/.test(this.__pullover.textContent) && this.__pullover.children.length === 0) {
      this.__pullover.parentElement.removeChild(this.__pullover);
    }
  }

  onClick(evt) {
    if (this.route) this.app.navigate(this.route);
  }
}


@customElement('ui-shell-panel')
@inlineView('<template><div class="ui-shell-panel"><div class="ui-title">${title}</div><slot></slot></div></template>')
export class UIShellPanel {
  @bindable title=''
}
