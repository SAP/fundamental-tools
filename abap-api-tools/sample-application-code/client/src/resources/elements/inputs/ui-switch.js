import {customElement, bindable, bindingMode} from 'aurelia-framework';
import {UIEvent} from '../../utils/ui-event';

@customElement('ui-switch')
export class UISwitch {
  static __idCount = 0;
  id = `sw-${UISwitch.__icCount++}`;
  __input;
  __switch;
  __label;
  __theme = '';

  @bindable() labelOn = 'On';
  @bindable() labelOff = 'Off';
  @bindable() disabled = false;
  @bindable() width;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;

  static inject = [Element];
  constructor(element) {
    this.element = element;
  }

  bind() {
    // check theme attributes
    if (this.element.hasAttribute('primary')) this.__theme = 'primary';
    if (this.element.hasAttribute('info')) this.__theme = 'info';
    if (this.element.hasAttribute('danger')) this.__theme = 'danger';
    if (this.element.hasAttribute('success')) this.__theme = 'success';
    if (this.element.hasAttribute('warning')) this.__theme = 'warning';
    if (this.element.hasAttribute('ampm')) this.__theme = 'ampm';
    if (this.element.hasAttribute('gender')) this.__theme = 'gender';

    this.checked = isTrue(this.checked);
    this.disabled = isTrue(this.disabled);
  }

  attached() {
    if (!isNaN(this.width)) this.__switch.style.width = parseInt(this.width, 10) + 'rem';
    this.__switch.classList.add(`ui-switch-${this.__theme}`);
    this.disable();
  }

  disable(disabled) {
    if (this.__input.attributes.getNamedItem('disabled') !== null) {
      this.__input.attributes.removeNamedItem('disabled');
    }
    if (this.__label.attributes.getNamedItem('disabled') !== null) {
      this.__label.attributes.removeNamedItem('disabled');
    }
    if (disabled === true || this.disabled === true) {
      this.__input.attributes.setNamedItem(document.createAttribute('disabled'));
      this.__label.attributes.setNamedItem(document.createAttribute('disabled'));
    }
  }

  disabledChanged(newValue) {
    this.disabled = isTrue(newValue);
    this.disable();
  }

  valueChanged($event) {
    $event.cancelBubble = true;
    UIEvent.fireEvent('change', this.element, this.checked);
  }

  onFocus() {
    this.__switch.classList.add('ui-focus');
  }

  onBlur() {
    this.__switch.classList.remove('ui-focus');
  }
}
