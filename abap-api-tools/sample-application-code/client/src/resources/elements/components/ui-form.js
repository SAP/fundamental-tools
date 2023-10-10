import {customElement, bindable, inlineView} from 'aurelia-framework';
//import {Validation} from 'aurelia-validation';
import {UIEvent} from '../../utils/ui-event';

@customElement('ui-form')
export class UIForm {
  @bindable title = '';
  @bindable busy = false;
  @bindable validation;

  __form;

  static inject = [Element];

  constructor(element) {
    this.element = element;
    this.transparent = element.hasAttribute('transparent');
  }

  attached() {
    setTimeout(() => {
      let el = this.__form.querySelector('input,textarea');
      if (!isEmpty(el)) el.focus();
    }, 10);

    if (this.busy) setTimeout(() => this.busyChanged(true), 200);
  }

  busyChanged(newValue) {
    let els = this.element.querySelectorAll('ui-button,ui-combo,ui-date,ui-input,ui-input-dual,ui-language,ui-markdown,ui-checkbox,ui-radio,ui-phone,ui-switch,ui-tags,ui-textarea');
    for (el of els) {
      try {
        el.au.controller.viewModel.disable(isTrue(newValue));
      }
      catch (e) {
        // todo
      }
    }
  }

  fireSubmit() {
    UIEvent.fireEvent('submit', this.element, this);
  }

  getForm() {
    return this.__form;
  }
}

@customElement('ui-fieldset')
@inlineView('<template class="ui-fieldset"><fieldset><legend if.bind="label"><ui-checkbox checked.bind="enabled" if.bind="checkbox">${label}</ui-checkbox><span if.bind="!checkbox">${label}</span></legend><slot></slot></fieldset></template>')
export class UIFieldset {
  @bindable() label = '';
  @bindable() enabled = true;

  checkbox = false;

  static inject = [Element];

  constructor(element) {
    this.element = element;
    this.checkbox = this.element.hasAttribute('enabled');
  }

  bind() {
    this.enabled = isTrue(this.enabled);
  }

  enabledChanged(newValue) {
    this.enabled = isTrue(newValue);
    this.element.classList[this.enabled ? 'remove' : 'add']('ui-disabled');
  }
}
