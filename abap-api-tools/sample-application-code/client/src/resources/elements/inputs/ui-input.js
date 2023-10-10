import {customElement, bindable, bindingMode} from 'aurelia-framework';
import {UIInputGroup} from './ui-input-group';
import {UIApplication} from '../../utils/ui-application';

@customElement('ui-input')
export class UIInput extends UIInputGroup {
  @bindable({defaultBindingMode: bindingMode.twoWay}) value = '';
  @bindable({defaultBindingMode: bindingMode.twoWay}) unit = '';
  @bindable({defaultBindingMode: bindingMode.twoWay}) checked = false;
  @bindable({defaultBindingMode: bindingMode.oneTime}) label = '';
  @bindable({defaultBindingMode: bindingMode.oneTime}) placeholder = '';
  @bindable({defaultBindingMode: bindingMode.oneTime}) length = '';
  @bindable({defaultBindingMode: bindingMode.oneTime}) mid = '';

  @bindable({defaultBindingMode: bindingMode.oneTime}) dataAbap = '';
  @bindable({defaultBindingMode: bindingMode.oneTime}) ddicType = '';
  @bindable({defaultBindingMode: bindingMode.oneTime}) ddicLength = '';

  @bindable() disabled = false;
  @bindable() readonly = false;

  @bindable() prefixIcon;
  @bindable() prefixText;
  @bindable() suffixIcon = '';
  @bindable() suffixText;
  @bindable() buttonIcon;
  @bindable() buttonText;

  @bindable() helpText;

  @bindable() dir = '';

  @bindable() name = '';

  static inject = [Element, UIApplication];

  constructor(element, app) {
    super(element, app);
  }

  bind() {
    super.bind();
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
    else if (this.__format === 'email') {
      val = val.toLowerCase();
    }
    evt.target.value = val;
    setTimeout(() => evt.target.selectionStart = evt.target.selectionEnd = start, 10);
    switch (this.__format) {
    case 'uppercase':
      val = val.toUpperCase();
      break;
    case 'lowercase':
      val = val.toLowerCase();
      break;
    case 'numeric':
    case 'posting':
        // todo
      break;
    case 'quantity':
        // todo
      break;
    case 'currency':
        // todo
      break;
    default:
      break;
    }
    return val;
  }
}
