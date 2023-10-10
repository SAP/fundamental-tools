import {customElement, bindable} from 'aurelia-framework';
import {UIEvent} from '../../utils/ui-event';
import {UIApplication} from '../../utils/ui-application';

@customElement('ui-menu')
export class UIMenu {
  @bindable() router;
  @bindable() menu = [];
  @bindable() options = [];

  static inject = [Element, UIApplication];

  constructor(element, app) {
    this.element = element;
    this.app = app;
    if (element.hasAttribute('floating')) element.classList.add('ui-floating');
  }

  bind() {
    for (let i = 0, c = this.element.children; i < c.length; i++) {
      if (c[i].tagName.toLowerCase() === 'menu') {
        this.menu.push({
          id: c[i].getAttribute('id'),
          text: c[i].textContent,
          icon: c[i].getAttribute('icon'),
          href: c[i].getAttribute('href') || 'javascript:;' // eslint-disable-line no-script-url
        });
      }
      if (c[i].tagName.toLowerCase() === 'section') this.menu.push(c[i].textContent);
      if (c[i].tagName.toLowerCase() === 'divider') this.menu.push('-');
    }

    for (let o of this.options) {
      this.menu.push({
        id: o.id,
        text: o.name,
        icon: o.icon,
        href: o.href || 'javascript:;' // eslint-disable-line no-script-url
      });
    }
  }

  isActive(route) {
    return route.isActive || route.href === location.hash ||
        location.hash.indexOf(route.config.redirect || 'QWER') > -1;
  }

  onClick($event) {
    $event.stopPropagation();
    if (this.router) {
      return true;
    }
    $event.cancelBubble = true;
    this.element.classList.remove('show');
    let link = getParentByClass($event.target, 'ui-menu-link', 'ui-menu');
    if (link !== null) UIEvent.fireEvent('menuclick', this.element, {id: link.dataset.id, href: link.getAttribute('href')});
    return true;
  }
}
