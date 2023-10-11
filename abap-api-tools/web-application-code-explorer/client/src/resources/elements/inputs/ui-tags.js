import {customElement, bindable, bindingMode} from 'aurelia-framework';
import {UIListBehaviour} from './ui-listing';
import {_} from '../../utils/ui-utils';

@customElement('ui-tags')
export class UITags extends UIListBehaviour {
  __tagInput;
  __ignoreChange;
  __subscribeSearch;

  __tags = [];
  __onlyAvailable = true;

  static inject = [Element];

  constructor(element) {
    super(element);
  }
  @bindable({defaultBindingMode: bindingMode.oneTime}) label = '';
  @bindable({defaultBindingMode: bindingMode.twoWay}) value = '';
  @bindable({defaultBindingMode: bindingMode.twoWay}) checked = false;
  @bindable() disabled = false;
  @bindable() readonly = false;

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

  @bindable() autoset = false;

  @bindable() emptyText = 'No Results Found...';

  bind() {
    super.bind();
    this.optionsChanged(this.options);
    this.__noList = this.element.hasAttribute('no-list');
  }

  attached() {
    super.attached();
    setTimeout(() => this.valueChanged(this.value), 500);
  }

  detached() {
  }

  valueChanged(newValue) {
    let v = newValue || [];
    if (!_.isArray(v)) v = v.split(',');
    if (this.__noList) {
      this.__tags = v;
    }
    else {
      this.__options = this.__available = _.cloneDeep(this.options);
      this.__tags = _.removeByValues(this.__available, this.valueProperty, v);
    }
  }

  optionsChanged(newValue) {
    this.__noResult = isEmpty(newValue);
    this.options = newValue;
    this.__isFiltered = false;
    this.__isGrouped = !_.isArray(newValue);
    this.__options = this.__available = _.cloneDeep(this.options);
    let value = [];
    if (this.autoset && this.options !== undefined) {
      for (let option of this.options) {
        value.push(option[this.valueProperty]);
      }
      this.value = value;
    }
  }

  readonlyChanged() {
    super.readonlyChanged();
    if (isTrue(this.readonly)) {
      this.__tagInput.classList.add('ui-readonly');
    }
    else {
      this.__tagInput.classList.remove('ui-readonly');
    }
  }

  disable(disabled) {
    super.disable(disabled);
    if (disabled === true || this.disabled === true || this.checked === false) {
      this.__tagInput.classList.add('ui-disabled');
    }
    else {
      this.__tagInput.classList.remove('ui-disabled');
    }
  }

  __select(item) {
    if (this.__noList) {
      let v = _.trim(this.__searchText);
      if (!isEmpty(v) && this.__tags.indexOf(v) === -1) this.__tags.push(v);
      this.value = this.__tags.join(',');
      this.__searchText = '';
      this.__focus = true;
    }
    else if (item) {
      this.__searchText = '';
      this.__tags.push(item.model);
      this.value = _.map(this.__tags, this.valueProperty).join(',');
    }
  }

  __deselect(item) {
    this.__tags.splice(this.__tags.indexOf(item), 1);
    if (this.__noList) {
      this.value = this.__tags.join(',');
    }
    else {
      // _.remove(this.__tags, [this.valueProperty, item[this.valueProperty]]);
      this.value = _.map(this.__tags, this.valueProperty).join(',');
    }
  }

  __clicked($event) {
    let o = getParentByClass($event.target, 'ui-list-item', 'ui-list');
    if (o !== null) {
      this.__select(o);
    }
  }

  __gotFocus() {
    this.__focus = true;
    if (!this.__noList) {
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
    this.__tagInput.classList.add('ui-focus');
  }

  __lostFocus() {
    this.__focus = false;
    this.__tagInput.classList.remove('ui-focus');
  }

  inputClicked(evt) {
    let b = getParentByClass(evt.target, 'ui-tag', 'ui-input');
    if (b !== null) this.__deselect(b.model);
  }

  formatter() {
    return this.value;
  }

  __scrollIntoView() {
  }
}
