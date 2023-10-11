import {customElement, bindable, bindingMode} from 'aurelia-framework';
import {UIListBehaviour} from './ui-listing';
import {_} from '../../utils/ui-utils';
import {UIEvent} from '../../utils/ui-event';
import {UIApplication} from '../../utils/ui-application';

@customElement('ui-combo')
export class UIComboBox extends UIListBehaviour {

  static inject = [Element, UIApplication];
  constructor(element, app) {
    super(element, app);
  }

  @bindable({defaultBindingMode: bindingMode.twoWay}) value = '';
  @bindable({defaultBindingMode: bindingMode.twoWay}) checked = false;
  @bindable() disabled = false;
  @bindable() readonly = true;
  @bindable label = '';
  @bindable mid = '';

  @bindable() prefixIcon;
  @bindable() prefixText;
  @bindable() suffixIcon;
  @bindable() suffixText;
  @bindable() buttonIcon;
  @bindable() buttonText;

  @bindable() helpText;

  @bindable() placeholder = '';

  @bindable() dir = '';

  @bindable() options = [];
  @bindable() valueProperty = 'id';
  @bindable() displayProperty = 'name';
  @bindable() iconProperty = '';
  @bindable() iconClass = '';

  @bindable() emptyText = 'No Results Found...';

  bind() {
    super.bind();
    this.optionsChanged(this.options);
  }

  attached() {
    this.element.__handle = this;
    super.attached();
    setTimeout(() => this.valueChanged(this.value), 500);
  }

  detached() {
  }

  valueChanged(newValue) {
    if (!isEmpty(newValue)) {
      let v = _.findDeep(this.options, this.valueProperty, newValue);
      this.__searchText = v ? v[this.displayProperty] : '';
      if (v === null) this.value = null;
      UIEvent.fireEvent('select', this.element, v);
    }
    else {
      this.value = this.__searchText = '';
      UIEvent.fireEvent('select', this.element, null);
    }
  }

  optionsChanged(newValue) {
    this.__noResult = isEmpty(newValue);
    this.options = newValue;
    this.__isFiltered = false;
    this.__isGrouped = !_.isArray(newValue);
    this.__options = _.cloneDeep(this.options || []);
    // setTimeout(() => this.valueChanged(this.value), 500);
  }

  __setLookup(lookup) {
    this.valueProperty = lookup.valueProperty;
    this.displayProperty = lookup.displayProperty;
    this.options = lookup.options;
  }

  __select(item) {
    if (item !== null) {
      this.value = item.dataset.value;
      this.__searchText = item.model[this.displayProperty];
    }
    else {
      this.value = this.__searchText = '';
    }
    if (this.__isFiltered) {
      this.__isFiltered = false;
      this.__options = _.cloneDeep(this.options);
      this.__noResult = isEmpty(this.__options);
    }
    this.__focus = false;
  }

  __clicked($event) {
    let o = getParentByClass($event.target, 'ui-list-item', 'ui-list');
    if (o !== null) {
      this.__select(this.__hilight = o);
    }
  }

  __gotFocus() {
    this.__hilight = this.__list.querySelector(`[data-value="${this.value}"]`);
    this.__focus = true;

    let el = this.element;
    if (el.offsetParent.scrollTop + el.offsetParent.offsetHeight < el.offsetHeight + el.offsetTop + 50) {
      this.__reverse = true;
      this.__list.style.bottom = el.offsetHeight + 'px';
    }
    else {
      this.__reverse = false;
      this.__list.style.bottom = 'auto';
    }
    setTimeout(() => {
      this.__input.select();
      this.__scrollIntoView();
    }, 20);
  }

  __lostFocus() {
    this.__select(this.__hilight);
    this.__focus = false;
  }

  formatter() {
    return this.value;
  }

  __scrollIntoView() {
    this.__list.scrollTop = (this.__hilight !== null ? this.__hilight.offsetTop - (this.__list.offsetHeight / 2) : 0);
  }
}
