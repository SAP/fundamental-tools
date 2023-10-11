import {customElement, bindable, useView, bindingMode} from 'aurelia-framework';
import {UIEvent} from '../../utils/ui-event';

export class UIOption {
  static __idCount = 0;
  __id = `opt-${UIOption.__idCount++}`;
  __input;

  checked = false;
  disabled = false;

  static inject = [Element];
  constructor(element) {
    this.element = element;
  }

  bind() {
    this.disabled = isTrue(this.disabled);
  }

  attached() {
    this.disable();
  }

  disable(disabled) {
    if (this.__input.attributes.getNamedItem('disabled') !== null) {
      this.__input.attributes.removeNamedItem('disabled');
    }
    if (disabled === true || this.disabled === true) {
      this.__input.attributes.setNamedItem(document.createAttribute('disabled'));
    }
  }

  toggleChecked($event) {
    this.checked = !isTrue(this.checked);
  }

  disabledChanged(newValue) {
    this.disabled = isTrue(newValue);
    this.disable();
  }
}

@useView('./ui-option.html')
@customElement('ui-checkbox')
export class UICheckbox extends UIOption {
  __type = 'checkbox';

  @bindable() disabled = false;
  @bindable({defaultBindingMode: bindingMode.twoWay}) value = '';
  @bindable({defaultBindingMode: bindingMode.twoWay}) checked = false;
  @bindable({defaultBindingMode: bindingMode.oneTime}) label='';

  static inject = [Element];
  constructor(element) {
    super(element);
  }

  bind() {
    super.bind();
    if (this.value) this.checked = true;
  }

  attached() {
    super.attached();
    this.element.classList.add('ui-checkbox');
  }

  valueChanged() {
    this.checked = isTrue(this.value); // model -> view
  }

  inputChanged($event) {
    this.checked = !this.checked;
    this.value = this.checked ? 'X' : ''; // view -> model
    $event.cancelBubble = true;
    UIEvent.fireEvent('change', this.element, this.checked);
  }

  toggle($event) {
    this.toggleChecked($event);
  }
}

@useView('./ui-option.html')
@customElement('ui-radio')
export class UIRadio extends UIOption {
  __type = 'radio';

  @bindable() value = '';
  @bindable() disabled = false;
  @bindable({defaultBindingMode: bindingMode.twoWay}) checked = '';

  static inject = [Element];
  constructor(element) {
    super(element);
  }

  attached() {
    if (!this.element.parentElement.classList.contains('ui-option-group')) {
      throw new Error('UIRadio must be a child of UIOptionGroup');
    }

    super.attached();
    this.element.classList.add('ui-radio');
  }

  inputChanged($event) {
    $event.cancelBubble = true;
    UIEvent.fireEvent('change', this.element, this.value);
  }
}

@useView('./ui-option-group.html')
@customElement('ui-option-group')
export class UIOptionGroup {
  __label;
  static __idCount = 0;
  __name = `opg-${UIOptionGroup.__idCount++}`;

  @bindable() label = '';
  @bindable() name = '';
  @bindable({defaultBindingMode: bindingMode.twoWay}) value = '';

  static inject = [Element];
  constructor(element) {
    this.element = element;
  }

  attached() {
    // set selected radio
    setTimeout(() => {
      _.forEach(this.element.querySelectorAll('.ui-radio .ui-option-input'), o => {
        o.setAttribute('name', this.name || this.__name);
        if (this.value + '' === o.value + '') {
          o.setAttribute('checked', 'true');
          o.checked = true;
        }
      });
    }, 200);
    if (this.element.hasAttribute('required')) this.__label.classList.add('ui-required');
  }

  checkChanged($event) {
    let opt = this.element.querySelector(`.ui-option-input[value="${this.value}"]`);
    if (opt && this.value !== $event.detail) {
      opt.setAttribute('checked', 'false');
      opt.checked = false;
    }
    this.value = $event.detail;
    $event.cancelBubble = true;
    UIEvent.fireEvent('change', this.element, this.value);
  }

  valueChanged(newValue) {
    let opt = this.element.querySelector(`.ui-option-input[value="${newValue}"]`);
    if (opt) {
      opt.setAttribute('checked', 'true');
      opt.checked = true;
    }
  }
}
