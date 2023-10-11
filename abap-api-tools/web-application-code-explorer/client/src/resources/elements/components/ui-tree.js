import {bindable, useView, computedFrom, customElement, BindingEngine} from 'aurelia-framework';
import {UITreeModel, UITreeOptions} from '../../utils/ui-tree-model';
import {_, UIUtils} from '../../utils/ui-utils';
import {UIEvent} from '../../utils/ui-event';

@customElement('ui-tree')
export class UITree {
  root;
  searchText= '';
  selectedNode = {};

  __subscribeSelect;
  __subscribeChecked;
  __subscribeSearch;

  @bindable() value;
  @bindable() model = null;
  @bindable() options = new UITreeOptions();

  @bindable linkedList = null;
  @bindable idProperty = '';
  @bindable nameProperty = '';
  @bindable parentProperty = '';
  @bindable icons = null;

  static inject = [Element, BindingEngine];
  constructor(element, observer) {
    this.element = element;
    this.observer = observer;
    let self = this;
    this.__subscribeSelect = UIEvent.subscribe('tree-select', v=> self.__itemSelect(v));
    this.__subscribeChecked = UIEvent.subscribe('tree-checked', v=> self.__itemChecked(v));
    this.__subscribeSearch = observer.propertyObserver(this, 'searchText')
      .subscribe(v=> self.__searchTextChanged(v));
  }

  bind() {
    if (this.linkedList) this.linkedListChanged();
    this.root = new UITreeModel(-1, this.options.maxLevels, this.options.checkboxLevel, {
      id: '',
      name: this.options.rootLabel,
      children: this.model
    }, null);
  }

  detached() {
    this.__subscribeSelect.dispose();
    this.__subscribeChecked.dispose();
    this.__subscribeSearch.dispose();
  }

  @computedFrom('root')
  get rootNodes() {
    return this.options.showRoot ? [this.root] : this.root.children;
  }

  __itemSelect(node) {
    if (this.selectedNode) {
      this.selectedNode.active = false;
    }
    (this.selectedNode = node).active = true;
    this.value = this.selectedNode.id;
    UIEvent.fireEvent('change', this.element, this.selectedNode);
  }

  __itemChecked(node) {
    UIEvent.fireEvent('checked', this.element, this.getChecked());
  }

  modelChanged(newValue) {
    this.root = new UITreeModel(-1, this.options.maxLevels, this.options.checkboxLevel, {
      id: '',
      name: this.options.rootLabel,
      children: newValue
    }, null);
  }

  linkedListChanged(newValue) {
    this.model = this.list2model(
        this.linkedList,
        this.idProperty, this.nameProperty, this.parentProperty,
        this.icons);
  }

  valueChanged(newValue) {
  }

  __searchTextChanged(newValue) {
    this.__filter(this.root.children, newValue);
  }

  __filter(obj, value, parentVisible = false) {
    let self = this;
    let ret = false;
    let rx = new RegExp(UIUtils.getAscii(value), 'gi');

    _.forEach(obj, (n) => {
      n.name = n.name.replace(/<b>/gi, '')
        .replace(/<\/b>/gi, '');
      n.expanded = !_.isEmpty(value) && n.level <= 2 && parentVisible === false;

      if (_.isEmpty(value) && self.selectedNode.id === n.id && self.selectedNode.level === n.level) {
        let p = n.parent;
        while (p) {
          p.expanded = true;
          p = p.parent;
        }
      }
      let match = rx.test(UIUtils.getAscii(n.name));
      if (!_.isEmpty(value) && match) {
        n.parent.expanded = true;
        /*n.name            = n.name.replace(rx, b=> {
         return `<b>${b}</b>`
         });*/
        let start = UIUtils.getAscii(n.name)
          .search(rx);
        let name = n.name.substr(0, start + value.length) + '</b>' + n.name.substr(start + value.length);
        n.name = name.substr(0, start) + '<b>' + name.substr(start);
      }

      n.isVisible = n.children.length > 0 ? self.__filter(n.children, value, match || parentVisible) : (match || parentVisible);

      ret = ret || n.isVisible;
    });

    return ret;
  }

  __find(obj, id, level, field, value = true) {
    let self = this;
    return _.find(obj, (n) => {
      let found = n.id === id && n.level === level;
      if (!found && _.isArray(n.children)) {
        found = !_.isEmpty(self.__find(n.children, id, level, field, value));
        n.expanded = found;
      }
      else if (found) {
        if (field === 'active') self.__itemSelect(n);
        if (field === 'expanded') n.expanded = value;
        if (field === 'checked') n.isChecked = value ? 1 : 0;

        setTimeout(() => {
          let e = this.element.querySelector('.ui-active');
          if (e && e.__scrollIntoView) x.scrollIntoView();
        }, 200);
      }

      return found;
    });
  }

  __getChecked(nodes, retVal) {
    let self = this;
    return _.forEach(nodes, (n) => {
      if (n.checked === 2) retVal.partial.push(n.id);
      if (n.checked === 1) retVal.checked.push(n.id);
      if (n.checked === 0) retVal.unchecked.push(n.id);
      if (_.isArray(n.children)) self.__getChecked(n.children, retVal);
    });
  }

  getChecked() {
    let nodes = {checked: [], partial: [], unchecked: []};
    this.__getChecked(this.root.children, nodes);
    return nodes;
  }

  select(id, level) {
    this.__find(this.root.children, id, level, 'active');
  }

  expand(id, level, expand) {
    this.__find(this.root.children, id, level, 'expanded', expand);
  }

  check(id, level, check) {
    this.__find(this.root.children, id, level, 'checked', check);
  }

  list2model(list = [], idProperty, nameProperty, parentIdProperty, icons = this.icons, expanded = false) {
    let parent = {};  // parent (superior) locations map
    let model = [];   // tree model
    for (let l of list) {
      let c = {
        id: l[idProperty],
        name: l[nameProperty],
        expanded: _.isFunction(expanded) ? expanded(l) : expanded, // l.FUNCTLOCATION === 'F2',
        leaf: true,
        children: [],
        iconGlyph: icons ? icons.map[l[icons.iconProperty]] : '' //  'sap-icon sap-icon-functional-location'
      };

      if (parent[l[parentIdProperty]]) {
        // add to the superior location children list
        let n = parent[l[parentIdProperty]].push(c) - 1;
        // a pointer to superior location children list
        parent[l[idProperty]] = parent[l[parentIdProperty]][n].children;
      }
      else {
        // add as a root
        let n = model.push(c) - 1;
        // a pointer to superior location children list
        parent[l[idProperty]] = model[n].children;
      }
    }
    return model;
  }
}

@useView('./ui-tree-node.html')
export class TreeNode {
  @bindable node;
  @bindable options;

  constructor() {
  }

  itemSelect() {
    if (this.node.root) return;

    if (this.options.showCheckbox) {
      if (this.node.level >= this.options.checkboxLevel) {
        this.node.isChecked = !this.node.checked;
        UIEvent.broadcast('tree-checked', this.node);
      }
    }
    else if (this.node.level >= this.options.selectionLevel) {
      UIEvent.broadcast('tree-select', this.node);
    }
  }
}
