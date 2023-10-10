import {computedFrom} from 'aurelia-framework';
import {_} from './ui-utils';

export class UITreeModel {
  id;
  name = '';
  level = 0;

  iconGlyph = '';

  root = false;
  leaf = false;
  active = false;
  expanded = false;

  children = [];

  // 0=false, 1=true, 2=partial
  checked = 0;

  parent = null;

  isVisible = true;

  __checkLevel = 0;

  constructor(level,
              maxLevels,
              checkLevel,
              model,
              parent) {
    this.id = model.id;
    this.name = model.name || model.text;
    this.level = level;

    this.iconGlyph = model.iconGlyph;

    this.root = level === -1;
    this.leaf = (model.children || []).length === 0 || level === maxLevels;
    this.active = model.active || false;
    this.expanded = model.expanded || false;

    this.checked = model.checked ? 1 : 0;
    this.parent = parent;

    this.__checkLevel = checkLevel;

    if (level < maxLevels && (model.children || []).length > 0) {
      _.each(
          model.children, (m) => {
            this.children.push(new UITreeModel(level + 1, maxLevels, checkLevel, m, this));
          });
    }
    this.updatePartial();
  }

  set isChecked(v) {
    this.checked = v = v ? 1 : 0;
    _.forEach(
        this.children, (c) => {
          c.updateChild(v);
        });
    if (this.parent && this.level > this.__checkLevel) {
      this.parent.updatePartial();
    }
  }

  updateChild(v) {
    this.checked = v;
    _.forEach(
        this.children, (c) => {
          c.updateChild(v);
        });
  }

  updatePartial() {
    if (this.children && this.children.length > 0) {
      let c = _.countBy(this.children, 'checked');
      let v = 2;
      if (!c[1] && !c[2]) v = 0;

      if (!c[0] && !c[2]) v = 1;

      this.checked = v;
    }

    if (this.parent && this.level > this.__checkLevel) {
      this.parent.updatePartial();
    }
  }

  @computedFrom('leaf', 'iconGlyph')
  get isLeaf() {
    return this.leaf && !this.iconGlyph;
  }
}

export class UITreeOptions {
  // show maximum of ? levels
  maxLevels= 99;

  // show checkboxes
  showCheckbox= false;
  // show checkbox only at ? level, -1/null all levels
  checkboxLevel= -1;

  showRoot= false;
  rootLabel= 'Root';

  selectionLevel= -1;

  constructor(obj = {}) {
    Object.assign(this, obj);
  }
}

/*
export interface UITreePanel {
  select(id: any,
      level: number);
  expand(id: any,
      level: number,
      expand: boolean);
  check(id: any,
      level: number,
      check: boolean);
}
*/
