import {customElement, bindable, bindingMode} from 'aurelia-framework';
import {UIListBehaviour} from './ui-listing';
import {_} from '../../utils/ui-utils';

@customElement('ui-list')
export class UIList extends UIListBehaviour {

  @bindable({defaultBindingMode: bindingMode.twoWay}) value = '';
  @bindable({defaultBindingMode: bindingMode.twoWay}) options = [];
  @bindable() disabled = false;
  @bindable() readonly = false;

  @bindable() helpText;

  @bindable() valueProperty = 'id';
  @bindable() displayProperty = 'name';
  @bindable() countProperty = 'count';
  @bindable() iconProperty = '';
  @bindable() iconClass = '';

  placeholder = 'Filter...';

  __modeCopy = false;
  __searchable = false;

  __value = [];
  __onlyAvailable = true;

  __ignoreChange = false;

  static inject = [Element];

  constructor(element) {
    super(element);
    if (element.hasAttribute('copy')) this.__modeCopy = true;
    if (element.hasAttribute('searchable')) this.__searchable = true;
  }

  bind() {
    this.disabled = this.element.hasAttribute('disabled') || isTrue(this.disabled);
    this.readonly = this.element.hasAttribute('readonly') || isTrue(this.readonly);

    super.bind();

    this.optionsChanged(this.options);
    this.valueChanged(this.value);
  }

  valueChanged(newValue) {
    if (this.__ignoreChange) return;
    let v = newValue || [];
    if (!_.isArray(v)) v = v.split(',');
    this.__options = this.__available = _.cloneDeep(this.options);
    this.__value = _.removeByValues(this.__available, this.valueProperty, v);
  }

  optionsChanged(newValue) {
    this.__noResult = isEmpty(newValue);
    this.options = newValue;
    this.__isFiltered = false;
    this.__isGrouped = !_.isArray(newValue);
    this.__options = this.__available = _.cloneDeep(this.options);
  }

  formatter() {
    return this.value;
  }

  __select(item) {
    this.__isNew = true;
    this.__moveRight(item.model[this.valueProperty]);
    if (this.__isFiltered) {
      this.__isFiltered = false;
      this.__searchText = '';
      this.__options = _.cloneDeep(this.__available);
      this.__noResult = isEmpty(this.__options);
    }
    this.__focus = false;
  }

  addAll() {
    this.__searchText = '';
    if (!this.__modeCopy) {
      this.__value = _.cloneDeep(this.options);
      this.__options = this.__available = [];
    }
    this.__updateValue();
  }

  removeAll() {
    this.__searchText = '';
    this.__value = [];
    this.__options = this.__available = _.cloneDeep(this.options);
    this.__updateValue();
  }

  addEl($event) {
    let el = getParentByClass($event.target, 'ui-list-item', 'ui-list-group');
    this.__isNew = true;
    if (el) this.__moveRight(el.model[this.valueProperty]);
  }

  removeEl($event) {
    let el = getParentByClass($event.target, 'ui-list-item', 'ui-list-group');
    this.__isNew = false;
    if (el) this.__moveLeft(el.model[this.valueProperty]);
  }

  __moveLeft(value) {
    if (this.__isNew) return;
    if (!this.__modeCopy) {
      this.__options = _.concat(this.__options, _.remove(this.__value, [this.valueProperty, value]));
      this.__searchText = '';
      this.__available = _.cloneDeep(this.__options || []);
    }
    else {
      let o = _.find(this.__value, [this.valueProperty, value]);
      if (o[this.countProperty] > 1) {
        o[this.countProperty]--;
      }
      else {
        _.remove(this.__value, [this.valueProperty, value]);
      }
    }
    this.__updateValue();
  }

  __moveRight(value) {
    if (!this.__isNew) return;
    if (!this.__modeCopy) {
      this.__value = _.concat(this.__value, _.remove(this.__options, [this.valueProperty, value]));
      this.__available = _.cloneDeep(this.__options || []);
    }
    else {
      let o = _.find(this.__value, [this.valueProperty, value]);
      let p = _.find(this.__options, [this.valueProperty, value]);
      if (o !== undefined) {
        o[this.countProperty]++;
      }
      else {
        p[this.countProperty] = 1;
        this.__value = _.concat(this.__value, [p]);
      }
    }
    this.__updateValue();
  }

  __updateValue() {
    this.__ignoreChange = true;
    if (!this.__modeCopy) {
      this.value = _.map(this.__value, this.valueProperty).join(',');
    }
    else this.value = _.chain(this.__value).mapKeys(this.valueProperty).mapValues('count');
    setTimeout(() => this.__ignoreChange = false, 500);
  }

  __isNew;
  __model;

  __dragStart($event, isNew) {
    if (!$event.target.classList.contains('ui-list-item')) return false;
    this.__isNew = isNew;
    this.__model = $event.target.model[this.valueProperty];
    return true;
  }

  __dragEnter($event) {
    $event.preventDefault();
    return false;
  }
}
