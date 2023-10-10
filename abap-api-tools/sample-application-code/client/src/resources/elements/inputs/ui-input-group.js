import { UIEvent } from '../../utils/ui-event';
import { UIFormat } from '../../utils/ui-formatters';

export class UIInputGroup {
  static __instanceCount = 0;
  __id = `ui-input-${UIInputGroup.__instanceCount++}`;
  __input;
  __input2;
  __label = '';
  __chkbox;

  __type = 'text';
  __format = 'uppercase';
  __sign = '';
  __length = 0;
  __decimals = 0;
  __mask = new RegExp(/./);
  __value = '';
  __value2 = '';
  __clear = false;
  __checkbox = false;

  __midValue = null;

  dir = '';
  value = '';
  unit = '';
  valueSecond = '';
  checked = false;
  readonly = false;
  disabled = false;

  /**
   * valid acceptable character list for all unicode supported languages
   */
  ALPHA =
    '\\u0041-\\u005a\\u0061-\\u007a\\u00aa\\u00c0-\\u02af\\u0370-\\u0481\\u048a-\\u05ea\\u0621-\\u065e\\u066e-\\u06ef\\u0710-\\u072f\\u074d-\\u07a5\\u07ca-\\u07ea\\u0800-\\u082c\\u0900-\\u0964' +
    '\\u0981-\\u09e3\\u0a01-\\u0a5e\\u0a81-\\u0ae3\\u0b01-\\u0b63\\u0b82-\\u0bd7\\u0c01-\\u0c63\\u0c82-\\u0ce3\\u0d63\\u0d7a-\\u0e4f\\u0e5a-\\u0ecd\\u0f00-\\u0f1f\\u0f34-\\u103f\\u104c-\\u108f\\u109a-\\u1368' +
    '\\u1380-\\u17dd\\u17f0-\\u180e\\u1820-\\u1940\\u1950-\\u19c9\\u19e0-\\u1a7f\\u1aa0-\\u1b4b\\u1b80-\\u1baf\\u1c00-\\u1c3f\\u1c5a-\\u1dbf\\u1dd3-\\u1ffe\\u2c00-\\u2dff\\u3041-\\u3243\\ua000-\\ua827' +
    '\\ua840-\\ua8cf\\ua90a-\\ua9cf\\uaa00-\\uaa4d\\uaa60-\\ufdfb\\ufe70-\\ufefc\\u3400-\\u4db5\\u4e00-\\u9fa5';

  /**
   * valid acceptable digits list for all unicode supported languages
   */
  DIGIT =
    '\\u0030-\\u0039\\u0660-\\u0669\\u06f0-\\u06f9\\u07c0-\\u07c9\\u0966-\\u096f\\u09e6-\\u09ef\\u0a66-\\u0a6f\\u0ae6-\\u0aef\\u0b66-\\u0b6f\\u0be6-\\u0bef\\u0c66-\\u0c6f\\u0ce6-\\u0cef\\u0d66-\\u0d6f' +
    '\\u0e50-\\u0e59\\u0ed0-\\u0ed9\\u0f20-\\u0f33\\u1040-\\u1049\\u1090-\\u1099\\u1369-\\u137c\\u17e0-\\u17e9\\u1810-\\u1819\\u1946-\\u194f\\u19d0-\\u19d9\\u1a80-\\u1a99\\u1b50-\\u1b59\\u1bb0-\\u1bb9\\u1c40-\\u1c49' +
    '\\u1c50-\\u1c59\\ua620-\\ua629\\ua8d0-\\ua8d9\\ua900-\\ua909\\ua9d0-\\ua9d9\\uaa50-\\uaa59\\uabf0-\\uabf9';

  constructor(element, app) {
    this.element = element;
    this.app = app;
    this.__clear = this.element.hasAttribute('clear');
    if (this.element.hasAttribute('auto-width')) this.element.classList.add('ui-auto');
    if (this.element.hasAttribute('label-top')) this.element.classList.add('ui-label-top');
    if (this.element.hasAttribute('label-hide')) this.element.classList.add('ui-label-hide');

    this.element.focus = () => this.__input.focus();

    if (this.element.hasAttribute('password')) {
      this.__type = 'password';
    }
    else if (this.element.hasAttribute('search')) {
      this.__type = 'search';
    }
    else if (this.element.hasAttribute('file')) {
      this.__type = 'file';
    }
  }

  bind() {
    if (this.dataAbap) {
      if (this.dataAbap.mid) this.mid = this.dataAbap.mid;

      if (this.dataAbap.length) this.ddicLength = this.dataAbap.length;

      if (this.dataAbap.type === 'string') {
        switch (this.dataAbap.format) {
        case 'numeric':
          this.__format = 'numeric';
          break;
        case 'accp':
          this.__format = 'posting';
          this.__length = 6;
          break;
        default:
          break;
        }
      }
      else if (this.dataAbap.type === 'number') {
        switch (this.dataAbap.format) {
        case 'integer':
          this.__format = 'number';
          break;
        case 'float':
        case 'decimal':
        case 'currency':
        case 'quantity':
          this.__format = this.dataAbap.format;
          break;
        default:
          break;
        }
      }
    }

    this.__checkbox = this.element.hasAttribute('checkbox');
    if (!this.__checkbox) this.checked = true;

    if (this.__checkbox) this.checked = isTrue(this.checked);
    this.disabled = this.element.hasAttribute('disabled') || isTrue(this.disabled);
    this.readonly = this.element.hasAttribute('readonly') || isTrue(this.readonly);

    if (!isEmpty(this.value)) this.__value = this.value;
    if (!isEmpty(this.valueSecond)) this.__value2 = this.valueSecond;

    if (this.__type === 'search') {
      this.suffixIcon = 'sap-icon sap-icon-filter';
      this.placeholder = 'Search...';
      this.__input.classList.add('ui-input-filter');
    }

    // ddic length -> sign, length (of the intiger part), decimals (decimal places)
    if (this.ddicLength) {
      let ddicLen = this.ddicLength.split('.');
      if (ddicLen[0] === '+') {
        this.sign = ddicLen[0];
      }
      this.__length = 0 | ddicLen[0];
      if (ddicLen.length > 1) {
        this.__decimals = 0 | ddicLen[1];
      }
    }

    // set input max-width
    if (this.element.tagName === 'UI-DATE') {
      //this.__length = 16; // 12
    }
    if (this.element.tagName !== 'UI-COMBO') {
      if (this.__length > 0) {
        this.__input.parentElement.style['max-width'] = this.__length + this.__decimals + 2 + 'rem';
      }
    }
    else {
      //let list = this.element.querySelector('.ui-input-wrapper .ui-list');
      //list.style.width = this.element.parentElement.style.width + 28 + 'px';
    }

    // get mid
    if (this.mid && this.app.User.params && this.app.User.params[this.mid]) {
      this.__midValue = this.app.User.params[this.mid].value;
    }

    // set type and format per DDIC, if provided, in dynamic forms for example
    if (this.ddicType && this.__type !== 'search') {
      [this.__type, this.__format] = UIFormat.ddicToJS[this.ddicType];
    }
    // Text
    if (this.element.hasAttribute('mixedcase')) {
      this.__format = 'mixedcase';
    }
    else if (this.element.hasAttribute('lowercase')) {
      this.__format = 'lowercase';
    }
    // input mask
    switch (this.__format) {
    case 'numeric':
      this.__mask = new RegExp(`^\\d{0,${this.__length}}$`);
      break;
    case 'posting':
      // todo  this.mask = RegExp('^(197[2-9]|19[89][0-9]|2[01][0-9]{2})(0[1-9]|1[0-2])$'); // 197201 - 219912
      this.__mask = new RegExp(`^\\d{0,${this.__length}}$`);
      break;

    case 'float':
    case 'decimal':
    case 'currency':
    case 'quantity':
      if (this.__decimals) {
        // http://stackoverflow.com/questions/10256061/regular-expression-for-finding-decimal-float-numbers
        // Optionally match a + or - at the beginning, followed by one or more decimal digits,
        // optional followed by a decimal point and one or more decimal digits util the end of the string
        this.__mask = new RegExp(
          `^([+-]?\\d{0,${this.__length}})(\\${UIFormat.__locale.decimalSeparator}\\d{0,${this.__decimals}})?$`
        );
        // perhaps even better http://stackoverflow.com/questions/6248621/regex-matcing-numeric-values-with-or-without-thousand-separators
        // or http://stackoverflow.com/questions/6190312/validate-currency-amount-using-regular-expressions-in-javascript
      }
      else {
        this.__mask = new RegExp(`^[+-]?\\d{0,${this.__length}}$`);
      }
      break;

    case 'uppercase':
    case 'lowercase':
    case 'mixedcase':
    default:
      this.__mask = new RegExp(`^\.{0,${this.__length}}$`);
    }
    // search
    if (this.__type === 'search') {
      this.__length = 32;
      this.__mask = new RegExp(`^\.{0,${this.__length}}$`);
    }
  }

  attached() {
    this.element.__handle = this;

    if (this.element.hasAttribute('required')) this.__label.classList.add('ui-required');

    if (this.readonly === true) {
      this.__input.attributes.setNamedItem(document.createAttribute('readonly'));
      if (this.__input2) this.__input2.attributes.setNamedItem(document.createAttribute('readonly'));
    }
    if (this.disabled === true || this.checked === false) {
      this.__input.attributes.setNamedItem(document.createAttribute('disabled'));
      if (this.__input2) this.__input2.attributes.setNamedItem(document.createAttribute('disabled'));
    }
    if (this.__chkbox && this.disabled === true) {
      this.__chkbox.attributes.setNamedItem(document.createAttribute('disabled'));
    }

    this.__input.oninput = evt => (this.value = this.formatter(evt));
    this.__input.onkeypress = evt => this.keyPress(evt);
    this.__input.onchange = evt => (evt.detail = this);

    this.__input.onblur = evt => {
      UIEvent.fireEvent('blur', this.element, 'blurring');
    };

    if (this.__input2) {
      this.__input2.oninput = evt => (this.valueSecond = this.formatter(evt));
      this.__input2.onkeypress = evt => this.keyPress(evt);
      this.__input2.onchange = evt => (evt.detail = this);
    }

    // if not bound, set the initial value by MID or technical default
    // or, if bound, by view-model or by MID, if MID maintained :)
    if (this.value === null || this.value === undefined) {
      // not bound to view-model, initialize by mid or technical default
      if (this.__midValue) {
        this.value = this.__midValue;
      }
      else {
        this.value = this.dataType === 'number' ? 0 : '';
      }
    }
    else {
      // bound to view-model, override by MID, if exists
      if (this.__midValue) this.value = this.__midValue;
      //else
      //  this.valueChanged();
    }

    if (this.__midValue) {
      //console.log('//', this.__midValue, this.value);
    }

    // remove label if empty
    if (this.__label && /^\s*$/.test(this.__label.textContent)) this.__label.parentElement.removeChild(this.__label);
  }

  focus() {
    this.__input.focus();
  }

  clearInput(isSecond) {
    if (isSecond === true) {
      this.valueSecond = '';
      this.__input2.focus();
    }
    if (isSecond !== true) {
      this.value = '';
      this.__input.focus();
    }
  }

  checkedChanged() {
    if (!this.__chkbox) return;
    if (this.__input.attributes.getNamedItem('disabled') !== null) {
      this.__input.attributes.removeNamedItem('disabled');
      if (this.__input2) this.__input2.attributes.removeNamedItem('disabled');
    }
    if (this.checked === false) {
      this.__input.attributes.setNamedItem(document.createAttribute('disabled'));
      if (this.__input2) this.__input2.attributes.setNamedItem(document.createAttribute('disabled'));
    }
    UIEvent.fireEvent('checked', this.element, this.checked);
  }

  readonlyChanged() {
    if (this.__input.attributes.getNamedItem('readonly') !== null) {
      this.__input.attributes.removeNamedItem('readonly');
      if (this.__input2) this.__input2.attributes.removeNamedItem('readonly');
    }
    if (this.readonly === true) {
      this.__input.attributes.setNamedItem(document.createAttribute('readonly'));
      if (this.__input2) this.__input2.attributes.setNamedItem(document.createAttribute('readonly'));
    }
    if (this.__chkbox && this.__chkbox.attributes.getNamedItem('disabled') !== null) {
      this.__chkbox.attributes.removeNamedItem('disabled');
    }
    if (this.__chkbox && (this.readonly === true || this.disabled === true)) {
      this.__chkbox.attributes.setNamedItem(document.createAttribute('disabled'));
    }
  }

  valueChanged(newValue) {
    this.__value = newValue;
  }

  valueSecondChanged(newValue) {
    this.__value2 = newValue;
  }

  disabledChanged() {
    this.disable();
  }

  disable(disabled) {
    if (this.__input.attributes.getNamedItem('disabled') !== null) {
      this.__input.attributes.removeNamedItem('disabled');
      if (this.__input2) this.__input2.attributes.removeNamedItem('disabled');
    }
    if (disabled === true || this.disabled === true || this.checked === false) {
      this.__input.attributes.setNamedItem(document.createAttribute('disabled'));
      if (this.__input2) this.__input2.attributes.setNamedItem(document.createAttribute('disabled'));
    }
    if (this.__chkbox && this.__chkbox.attributes.getNamedItem('disabled') !== null) {
      this.__chkbox.attributes.removeNamedItem('disabled');
    }
    if (this.__chkbox && (disabled === true || this.disabled === true || this.readonly === true)) {
      this.__chkbox.attributes.setNamedItem(document.createAttribute('disabled'));
    }
  }

  onAddonClick($event) {
    let valueInput = $event.target.parentElement.querySelector('.sap-icon.sap-icon-value-help');
    if (valueInput) {
      // https://aurelia.io/docs/plugins/dialog#using-the-plugin
      this.shlp.getValueInput().whenClosed(response => {
        if (!response.wasCancelled && response.output) {
          this.value = response.output.selectedValue;
          this.valueText = response.output.selectedText;
        }
      });
    }
    else {
      $event.preventDefault();
      UIEvent.fireEvent('buttonclick', this.element, this);
    }
  }

  keyPress(evt) {
    if (evt.ctrlKey || evt.altKey || evt.metaKey || evt.charCode === 0) return true;

    if (evt.target.type !== 'textarea') {
      if ((evt.which || evt.keyCode) === 13) {
        this.formatter(evt);
        return UIEvent.fireEvent('enterpressed', this.element, this);
      }

      let rx = '.'; // text
      if (this.__type === 'tel') rx = '[0-9]';
      else if ('number,numeric'.indexOf(this.__format) !== -1) rx = '[0-9\\-]';
      else if ('decimal,currency,quantity'.indexOf(this.__format) !== -1) rx = '[0-9\\-\\.]';
      else if (this.__type === 'email') rx = '[A-Za-z0-9\\-\\.@_\\+$/]';
      else if (this.__type === 'url') rx = '[A-Za-z0-9\\-\\.?:\\{\\}\\[\\]=&#%!()^_\\+$/]';

      //console.log(this.__type, this.__format, rx, this.value, this.__value, String.fromCharCode(evt.charCode));
      if (this.__decimals === 0) {
        if (this.__length && this.__value.length >= this.__length) return false;
      }
      else {
        if (this.__value.length >= this.__length + this.__decimals + 1) return false;
      }

      let c = this.__value + String.fromCharCode(evt.charCode);
      // console.log(c, rx, this.__mask, this.__format, this.__mask.test(c));
      //return new RegExp(rx).test(String.fromCharCode(evt.charCode));
      return this.__mask.test(c);
    }
    return true;
  }

  formatter(evt) {
    return isEmpty(evt.target.value) ? '' : evt.target.value;
  }
}
