import {customElement, bindable, bindingMode, inlineView} from 'aurelia-framework';
import {UIApplication} from '../../utils/ui-application';
import {UIEvent} from '../../utils/ui-event';
import {_} from '../../utils/ui-utils';

@customElement('ui-button')
export class UIButton {
  __button;
  __size = 'normal';

  @bindable() label = '';
  @bindable() value = '';
  @bindable({defaultBindingMode: bindingMode.oneTime}) buttonClass = '';
  @bindable({defaultBindingMode: bindingMode.oneTime}) menuClass = '';
  @bindable({defaultBindingMode: bindingMode.oneWay}) options = [];
  @bindable() iconPrefix = '';
  @bindable() iconSuffix = '';
  @bindable() theme = 'default';
  @bindable() disabled = false;
  @bindable({defaultBindingMode: bindingMode.oneWay}) badge = '';
  @bindable({defaultBindingMode: bindingMode.oneTime}) route = false;

  __hasMenu = false;
  __menu = [];
  __menuEl;

  static inject = [Element, UIApplication];

  constructor(element, app) {
    this.element = element;
    this.app = app;
    this.__hasMenu = this.element.childNodes.length > 0 || this.options.length > 0;
    let content = this.element.querySelector('au-content');
    if (this.__hasMenu) {
      this.element.classList.add('ui-dropdown');
      for (let i = 0, c = content.children; i < c.length; i++) {
        if (c[i].tagName.toLowerCase() === 'menu') {
          this.__menu.push({
            id: c[i].getAttribute('id'),
            text: c[i].textContent,
            icon: c[i].getAttribute('icon'),
            href: c[i].getAttribute('href') || 'javascript:;' // eslint-disable-line no-script-url
          });
        }
        if (c[i].tagName.toLowerCase() === 'section') this.__menu.push(c[i].textContent);
        if (c[i].tagName.toLowerCase() === 'divider') this.__menu.push('-');
      }
    }
  }

  bind() {
    this.__hasMenu = this.__hasMenu || this.options.length > 0;

    if (this.__hasMenu) this.element.classList.add('ui-dropdown');

    if (this.options.length > 0) {
      this.value = this.options[0].id;
      this.label = this.options[0].name;
    }

    // Disabled
    // if (this.element.hasAttribute('disabled')) this.disabled = true;

    // Set Theme
    if (this.element.hasAttribute('accept')) this.theme = 'accept';
    if (this.element.hasAttribute('emphasized')) this.theme = 'emphasized';
    if (this.element.hasAttribute('reject')) this.theme = 'reject';

    if (this.element.hasAttribute('success')) this.theme = 'success';
    if (this.element.hasAttribute('warning')) this.theme = 'warning';
    if (this.element.hasAttribute('error')) this.theme = 'error';
    if (this.element.hasAttribute('transparent')) this.theme = 'transparent';

    // Set Size
    if (this.element.hasAttribute('small')) this.__size = 'small';
    if (this.element.hasAttribute('large')) this.__size = 'large';

    // Set Theme
    this.disabled = isTrue(this.disabled);
  }

  attached() {
    if (this.element.hasAttribute('top')) this.__button.classList.add('ui-icon-top');
    if (this.element.hasAttribute('round')) this.__button.classList.add('ui-button-round');
    if (this.element.hasAttribute('square')) this.__button.classList.add('ui-button-square');

    this.__button.classList.add(`ui-button-${this.__size}`);
    this.disable();
  }

  disable(disabled) {
    if (this.__button.attributes.getNamedItem('disabled') !== null) {
      this.__button.attributes.removeNamedItem('disabled');
    }
    if (disabled === true || this.disabled === true) {
      this.__button.attributes.setNamedItem(document.createAttribute('disabled'));
    }
  }

  disabledChanged(newValue) {
    this.disabled = isTrue(newValue);
    this.disable();
  }

  fireClick($event) {
    $event.preventDefault();
    $event.cancelBubble = true;
    if (this.disabled === true) return false;
    if (this.route !== false) this.app.router.navigate(this.route);
    if (this.__hasMenu) {
      this.__menuEl.classList.add('show');
    }
    else UIEvent.fireEvent('click', this.element, this);
  }
}

@customElement('ui-button-group')
@inlineView('<template class="ui-button-group" click.delegate="fireChange($event)"><slot></slot></template>')
export class UIButtonGroup {
  __size = 'normal';
  __theme = 'default';
  __extraClass = '';

  @bindable() toggle = false;
  @bindable() disabled = false;
  @bindable({defaultBindingMode: bindingMode.twoWay}) value = '';

  static inject = [Element];

  constructor(element) {
    this.element = element;
  }

  bind() {
    // Set Theme
    if (this.element.hasAttribute('primary')) this.__theme = 'primary';
    if (this.element.hasAttribute('info')) this.__theme = 'info';
    if (this.element.hasAttribute('danger')) this.__theme = 'danger';
    if (this.element.hasAttribute('success')) this.__theme = 'success';
    if (this.element.hasAttribute('warning')) this.__theme = 'warning';
    // Set Size
    if (this.element.hasAttribute('small')) this.__size = 'small';
    if (this.element.hasAttribute('large')) this.__size = 'large';

    if (this.element.hasAttribute('top')) this.__extraClass += ' ui-icon-top';
    if (this.element.hasAttribute('round')) {
      this.__extraClass += ' ui-button-round';
    }
    else if (this.element.hasAttribute('square')) this.__extraClass += ' ui-button-square';

    if (this.element.hasAttribute('vertical')) this.element.classList.add('ui-vertical');

    this.disabled = isTrue(this.disabled);
  }

  attached() {
    if (this.toggle !== false) {
      this.element.classList.add(`ui-button-group-${this.__theme}`);
      this.__theme = 'default';
    }

    let buttons = this.element.getElementsByClassName('ui-button');
    for (let b of buttons) {
      b.className = `ui-button ui-button-${this.__theme} ui-button-${this.__size} ${this.__extraClass}`;
    }

    if (this.toggle !== false) {
      if (!isEmpty(this.value)) {
        setTimeout(() => {
          _.forEach((this.value + '').split(','), v => {
            let opt = this.element.querySelector(`.ui-button[data-value="${v}"]`);
            if (opt) opt.classList.add('ui-checked');
          });
        }, 10);
      }
    }
  }

  disable(disabled) {
    let buttons = this.element.getElementsByClassName('ui-button');
    _.forEach(buttons, b => {
      if (b.attributes.getNamedItem('disabled') !== null) {
        b.attributes.removeNamedItem('disabled');
      }
      if (disabled === true || this.disabled === true) {
        b.attributes.setNamedItem(document.createAttribute('disabled'));
      }
    });
  }

  disabledChanged(newValue) {
    this.disabled = isTrue(newValue);
    this.disable();
  }

  toggleChanged(newValue) {
    this.value = '';
  }

  valueChanged(newValue) {
    if (this.toggle !== false) {
      _.forEach(this.element.querySelectorAll('.ui-button.ui-checked'),
          b => b.classList.remove('ui-checked'));
      _.forEach((newValue + '').split(','), v => {
        let opt = this.element.querySelector(`.ui-button[data-value="${v}"]`);
        if (opt) opt.classList.add('ui-checked');
      });
    }
  }

  fireChange($event) {
    $event.preventDefault();
    $event.cancelBubble = true;
    if (this.disabled === true) return false;
    if (this.toggle !== false) {
      if (isEmpty($event.detail.value)) return false;
      if (this.toggle === 'multiple') {
        let v = $event.detail.value;
        let a = isEmpty(this.value) ? [] : (this.value + '').split(',');
        if (a.indexOf(v) === -1) {
          a.push(v);
        }
        else {
          a.splice(a.indexOf(v), 1);
        }
        this.value = a.join(',');
      }
      else {
        this.value = $event.detail.value;
      }
      UIEvent.fireEvent('change', this.element, this.value);
    }
  }
}
