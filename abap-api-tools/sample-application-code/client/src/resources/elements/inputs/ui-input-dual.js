import {customElement, useView, bindable, bindingMode} from 'aurelia-framework';
import {UIInputGroup} from './ui-input-group';

@useView('./ui-input.html')
@customElement('ui-input-dual')
export class UIInputDual extends UIInputGroup {
  __dual = true;

  @bindable({ defaultBindingMode: bindingMode.twoWay }) value = '';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) valueSecond = '';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;
  @bindable() disabled = false;
  @bindable() readonly = false;

  @bindable() prefixIcon;
  @bindable() prefixText;
  @bindable() suffixIcon;
  @bindable() suffixText;
  @bindable() centerIcon;
  @bindable() centerText;
  @bindable() buttonIcon;
  @bindable() buttonText;

  @bindable() helpText;

  @bindable() placeholder = '';
  @bindable() placeholderSecond = '';

  @bindable() dir = '';

  @bindable() name = '';

  @bindable() nameSecond = '';

  static inject = [Element];
  constructor(element) {
    super(element);
    this.element.isDual = true;
  }

  bind() {
    super.bind();

    if (this.element.hasAttribute('number')) {
      //this.__type   = 'number';
      this.__format = 'number';
    }
    else if (this.element.hasAttribute('decimal')) {
      //this.__type   = 'number';
      this.__format = 'decimal';
    }
    else if (this.element.hasAttribute('capitalize')) {
      this.__format = 'title';
    }
    else if (this.element.hasAttribute('email')) {
      // this.__type   = 'email';
      this.__format = 'email';
    }
    else if (this.element.hasAttribute('url')) {
      // this.__type   = 'url';
      this.__format = 'url';
    }
    else if (this.element.hasAttribute('password')) {
      this.__type = 'password';
    }
    else if (this.element.hasAttribute('search')) {
      this.__type = 'search';
    }
  }

  formatter(evt) {
    let val = isEmpty(evt.target.value) ? '' : evt.target.value;
    let start = evt.target.selectionStart;
    if (this.__format === 'title') {
      val = val.replace(new RegExp(`[${this.ALPHA}'\\-']+(?=[\\.&\\s]*)`, 'g'), (txt) => {
        if (txt.toLowerCase().indexOf('mc') === 0) {
          return txt.substr(0, 1).toUpperCase() +
            txt.substr(1, 1).toLowerCase() +
            txt.substr(2, 1).toUpperCase() +
            txt.substr(3);
        }
        if (txt.toLowerCase().indexOf('mac') === 0) {
          return txt.substr(0, 1).toUpperCase() +
            txt.substr(1, 2).toLowerCase() +
            txt.substr(3, 1).toUpperCase() +
            txt.substr(4);
        }
        return txt.charAt(0).toUpperCase() + txt.substr(1);
      });
    }
    else if (this.__format === 'email' || this.__format === 'url') {
      val = val.toLowerCase();
    }
    evt.target.value = val;
    setTimeout(() => evt.target.selectionStart = evt.target.selectionEnd = start, 10);
    return val;
  }
}
