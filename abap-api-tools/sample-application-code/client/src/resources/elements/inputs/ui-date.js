import {customElement, bindable, bindingMode} from 'aurelia-framework';
import {UIInputGroup} from './ui-input-group';
import {UIFormat, moment} from '../../utils/ui-formatters';
import {UIApplication} from '../../utils/ui-application';

@customElement('ui-date')
export class UIDate extends UIInputGroup {
  __dual = false;

  @bindable label = '';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) __date = '';
  @bindable({ defaultBindingMode: bindingMode.twoWay }) date = null;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) time = null;
  @bindable({ defaultBindingMode: bindingMode.twoWay }) dateEnd = moment().format();
  @bindable({ defaultBindingMode: bindingMode.twoWay }) checked = false;
  @bindable() disabled = false;

  @bindable() suffixIcon;
  @bindable() suffixText;
  @bindable() buttonIcon;
  @bindable() buttonText;

  @bindable() helpText;

  @bindable() placeholder = '';
  @bindable() placeholderSecond = '';

  @bindable() dir = '';

  @bindable() format = null;

  @bindable() options = new UIDateOptions();

  __today;
  __dateStart = new UIDateOptions();
  __dateEnd = new UIDateOptions();
  showtime = false;

  __dateFormat = UIFormat.__locale.moment.dateFormat;
  __timeFormat = UIFormat.__locale.moment.timeFormat;

  static inject = [Element, UIApplication];
  constructor(element, app) {
    super(element, app);
  }

  bind() {
    this.readonly = this.element.hasAttribute('readonly') || isTrue(this.readonly);
    super.bind();
    this.__dual = this.element.hasAttribute('range');
    this.__showtime = (this.time !== null);
    //if (this.format === null) this.format = this.__showtime ? 'DD-MM-YY HH:mm' : 'DD-MM-YY';
    if (this.format === null) {
      this.format = this.__showtime ?
        this.__dateFormat + ' ' + this.__timeFormat : this.__dateFormat;
    }

    this.__today = moment().format(this.format);
    if (this.element.hasAttribute('now')) this.__date = moment().format();

    Object.assign(this.__dateStart, this.options);
    Object.assign(this.__dateEnd, this.options);

    this.showTime = true; // this.format.toLowerCase().indexOf('hh:mm') > 0
  }

  attached() {
    if (this.readonly === true) {
      this.__input.attributes.setNamedItem(document.createAttribute('readonly'));
    }
  }

  __dateChanged(newValue) {
    if (moment(newValue).isValid()) {
      this.__value = moment(newValue).format(this.format);
      this.date = moment(newValue).format(UIFormat.abapDateFormat);
      this.time = moment(newValue).format(UIFormat.abapTimeFormat);
    }
    else {
      this.__value = '';
    }
  }

  dateChanged() {
    let abap; let format;
    setTimeout(() => {
      if (this.__showtime && this.time) {
        abap = `${this.date} ${this.time}`;
        format = `${UIFormat.abapDateFormat} ${UIFormat.abapTimeFormat}`;
      }
      else {
        abap = `${this.date}`;
        format = `${UIFormat.abapDateFormat}`;
      }
      let m = moment(abap, format);
      if (m.isValid()) this.__date = m.format();
      else this.__date = '';
    }, 200);
  }

  timeChanged() {
    let abap; let format;
    setTimeout(() => {
      if (this.__showtime && this.time) {
        abap = `${this.date} ${this.time}`;
        format = `${UIFormat.abapDateFormat} ${UIFormat.abapTimeFormat}`;
      }
      else {
        abap = `${this.date}`;
        format = `${UIFormat.abapDateFormat}`;
      }
      let m = moment(abap, format);
      if (m.isValid()) this.__date = m.format();
      else this.__date = '';
    }, 200);
  }
}

/*
export class UIDateOptions {
  minDate = null;
  maxDate = null;
  showTime = false;
  validDates = Array<any>|Function;
  invalidDates = Array<any>|Function;

  constructor(o = {}) {
    Object.assign(this, o);
  }
}
*/

export class UIDateOptions {
  // https://bevacqua.github.io/rome/
  minDate = UIFormat.abapMinDate;
  maxDate = UIFormat.abapMaxDate;
  showTime = false;

  dateValidator = (dt) => {
    if (dt.day() === 0) return false; // todo: Sun = 4 ??
    if (dt.day() === 6) return false; // todo: Sat = 5 ??
    if (dt.isBefore(this.minDate, 'day')) return false;
    if (dt.isAfter(this.maxDate, 'day')) return false;
    return true;
  };

  constructor(o = {}) {
    Object.assign(this, o);
  }
}
