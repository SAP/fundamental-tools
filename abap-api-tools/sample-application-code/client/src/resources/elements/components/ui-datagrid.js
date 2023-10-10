import {customElement, bindable, useView, bindingMode, inlineView, BindingEngine} from 'aurelia-framework';
import {BindingSignaler} from 'aurelia-templating-resources';
import {UIFormat} from '../../utils/ui-formatters';
import {UIEvent} from '../../utils/ui-event';
import {_} from '../../utils/ui-utils';
import {UIApplication} from '../../utils/ui-application';

@customElement('ui-datagrid')
export class UIDataGrid {
  static __id = 0;

  __id;
  __data;
  __table;
  __tableLocked;
  __columns;
  __columnsLocked;
  __columnsList;
  __ghost;
  __indicator;
  __focusRow = 2;
  __isProcessing = false;

  columns = [];

  __sortColumn;
  __sortOrder;

  @bindable() defaultSort = 'id';
  @bindable() defaultOrder = 'asc';
  @bindable() dataList = [];
  @bindable() summaryRow = false;
  @bindable() emptyText = '';

  __allowSelect = false;

  __dataListChangeSubscriber;

  static inject = [Element, BindingSignaler, BindingEngine, UIApplication];

  constructor(element, signaler, bindingEngine, app) {
    this.element = element;
    this.signaler = signaler;
    this.bindingEngine = bindingEngine;
    this.app = app;
    this.__id = `UIDataGrid${UIDataGrid.__id++}:Refresh`;
    if (element.hasAttribute('auto-height')) this.element.classList.add('ui-auto-height');

    this.element.__handle = this;
  }

  bind() {
    this.__sortColumn = this.defaultSort;
    this.__sortOrder = this.defaultOrder;

    this.__allowSelect = this.element.hasAttribute('selectable');

    this.__doSort(this.dataList);

    this.__dataListChangeSubscriber = this.bindingEngine.collectionObserver(this.dataList).subscribe(e => {
      this.dataListChanged(this.dataList);
    });
  }

  unbind() {
    this.__dataListChangeSubscriber.dispose();
  }

  attached() {
    this.refresh();
  }

  refresh(cols = [], data = []) {
    if (cols.length === 0) {
      _.forEach(this.__columns.children, c => {
        cols.push(c.columnDef);
      });
    }
    this.columns = _.orderBy(cols, ['__locked'], ['desc']);

    this.__columnsLocked = _.filter(cols, ['__locked', true]);
    this.__columnsList = _.filter(cols, ['__locked', false]);

    let w = 0;
    _.forEach(this.__columnsList, c => {
      c.edge = w;
      w += parseInt(c.width || 250);
      // return c.__locked;
    });
    this.__table.width = w;

    if (data.length > 0) {
      this.dataList = data;
    }
    else {
      this.__doSort(this.dataList);
    }
  }


  dataListChanged(newValue) {
    this.__table.style.tableLayout = 'auto';
    this.__doSort(newValue);
    this.__table.style.tableLayout = 'fixed';
    this.signaler.signal(this.__id);
  }

  isLastLocked(locked, index) {
    return (locked && !(this.columns[index + 1] || {__locked: false}).__locked);
  }

  linkClicked($event, col, model) {
    $event.preventDefault();
    $event.cancelBubble = true;
    $event.stopPropagation();
    if (getParentByClass($event.target, 'ui-button', 'dg-col') === null &&
      getParentByClass($event.target, 'ui-link', 'dg-col') === null) {
      return false;
    }
    try {
      let target = getParentByClass($event.target, 'ui-button', 'dg-col') ||
        getParentByClass($event.target, 'ui-link', 'dg-col');
      if (!col.__hasMenu) {
        UIEvent.fireEvent('linkclick', this.element, {dataId: col.dataId, target: target, model: model});
      }
      if (col.__hasMenu) {
        let menu = document.querySelector('.ui-floating.show');
        if (menu) {
          menu.classList.remove('show');
          getParentByTag(menu, 'tr').classList.remove('focus');
        }

        // let el = <HTMLElement>target.parentElement.nextElementSibling;
        // let sc = el.parentElement.offsetParent.offsetParent.offsetParent;
        // if (sc.scrollTop + sc['offsetHeight'] < el.offsetHeight + el.offsetTop + 50) {
        // 	// this.__reverse = true;
        // 	el.style.bottom = el.offsetHeight + 'px';
        // }
        // else {
        // 	// this.__reverse = false;
        // 	el.style.bottom = "auto";
        // }

        target.parentElement.nextElementSibling.classList.add('show');
        getParentByTag(target, 'tr').classList.add('focus');
      }
    }
    catch (e) {
      this.app.debug(this.constructor.name, e);
    }
    return false;
  }

  menuClicked($event, col, model) {
    $event.preventDefault();
    $event.cancelBubble = true;
    $event.stopPropagation();
    getParentByTag($event.target, 'tr').classList.remove('focus');
    UIEvent.fireEvent('linkclick', this.element, {dataId: $event.detail, target: $event.target, model: model});
    return false;
  }

  rowSelect(model) {
    if (this.__allowSelect) UIEvent.fireEvent('rowselect', this.element, model);
    return false;
  }

  sort($event, column) {
    //console.log($event, column, this.dataList);
    if (column.__sortable !== true) return;

    this.__isProcessing = true;
    this.__sortColumn = column.dataId;
    this.__sortOrder = $event.target.classList.contains('asc') ? 'desc' : 'asc';
    setTimeout(() => {
      this.__doSort(this.dataList);
      this.__isProcessing = false;
    }, 100);
  }

  summary(column) {
    if (_.isObject(this.summaryRow)) {
      return this.format(this.summaryRow[column.dataId], column, this.summaryRow);
    }
    if (!_.isEmpty(column.summary)) {
      let v = 0;
      let prefix = '';
      switch (column.summary) {
      case 'sum':
        v = _.sumBy(this.__data, column.dataId);
        break;
      case 'avg':
        prefix = 'avg. ';
        v = _.sumBy(this.__data, column.dataId) / this.__data.length;
        break;
      default:
        return column.summary;
      }
      return `<small>${prefix}</small>${this.format(v, column, {})}`;
    }
    return '&nbsp;';
  }

  buildButton(value, column, model) {
    let ret;
    let obj = {
      enabled: true, theme: column.buttonTheme, title: column.buttonTitle, icon: column.buttonIcon
    };
    if (isFunction(column.button)) {
      ret = column.button({value: value, column: column, model: model});
    }
    if (_.isString(ret)) return `<span>${ret}</span>`;
    Object.assign(obj, ret || {});
    if (!obj.enabled) return '<span>&nbsp;</span>';
    return `<button class="ui-button ui-button-${obj.theme} ui-button-small">
					${obj.icon ? '<span class="' + obj.icon + '"></span>' : ''}
					${obj.title ? '<span>' + obj.title + '</span>' : ''}
				</button>`;
  }

  format(value, column, model) {
    let retVal = '';
    if (column.labels) {
      retVal = column.labels[value];
    }
    else if (isFunction(column.value)) {
      retVal = column.value({value: value, column: column, model: model});
    }
    else if (isFunction(column.display)) {
      retVal = column.display({value: value, column: column, model: model});
    }
    else {
      retVal = UIFormat.abap2view(value, column.dataType, column.dataFormat, column, model);
    }
    return isEmpty(retVal) ? '&nbsp;' : retVal;
  }

  __doSort(data) {
    if (this.columns.length === 0) return;
    let column = _.find(this.columns, ['dataId', this.__sortColumn]);
    if (!column) column = this.columns[0];
    let columnId = column.dataId || this.defaultSort;
    let siblingId = column.dataSort || this.defaultSort;
    this.__data = _.orderBy(data,
      [columnId, siblingId],
      [this.__sortOrder, this.defaultOrder]);
    setTimeout(()=> this.signaler.signal(this.__id + 'Button'), 100);
  }

  __isResizing = false;
  __startX = 0;
  __diff = 0;
  __index;
  __column;

  __move;
  __stop;

  resizeStart($event) {
    if ($event.button !== 0) return;
    if (!$event.target.classList.contains('resizer')) return;

    this.__index = $event.target.dataset.index;

    let column = this.columns[this.__index];

    if (column.__resizeable !== true) return;

    document.addEventListener('mousemove', this.__move = e => this.resize(e));
    document.addEventListener('mouseup', this.__stop = e => this.resizeEnd(e));

    this.__column = this.__table.querySelector(`colgroup col[data-index="${this.__index}"]`);
    if (!this.__column) this.__column = this.__tableLocked.querySelector(`colgroup col[data-index="${this.__index}"]`);
    this.__startX = ($event.x || $event.clientX);
    this.__isResizing = true;
    this.__diff = 0;

    this.__ghost.classList.add('resize');
    this.__ghost.classList.remove('ui-hide');
    //this.__ghost.style.left = (this.__column.offsetLeft + parseInt(this.__column.width)) + 'px';
    this.__ghost.style.left = (this.__startX + this.__column.offsetLeft) + 'px';
  }

  resize($event) {
    if (!this.__isResizing) return;

    let column = this.columns[this.__index];
    let x = ($event.x || $event.clientX) - this.__startX;
    if (x < 0 && (parseInt(this.__column.width) + this.__diff) <= (column.minWidth || 80)) return;
    if (x > 0 && (parseInt(this.__column.width) + this.__diff) >= (500)) return;

    this.__startX = ($event.x || $event.clientX);
    this.__diff += x;
    this.__ghost.style.left = (parseInt(this.__ghost.style.left) + x) + 'px';
  }

  resizeEnd($event) {
    document.removeEventListener('mousemove', this.__move);
    document.removeEventListener('mouseup', this.__stop);

    if (!this.__isResizing) return;
    this.__ghost.classList.add('ui-hide');
    this.__ghost.classList.remove('resize');

    let column = this.columns[this.__index];
    this.__isResizing = false;

    this.__column.width = column.width = (parseInt(this.__column.width) + this.__diff);
    if (!column.__locked) this.__table.width = parseInt(this.__table.width) + this.__diff;

    // let w = 0;
    // _.forEach(this.columns, (c) => {
    // 	c.edge = w;
    // 	w += parseInt(c.width || 250);
    // 	return c.__locked;
    // });
  }
}

@customElement('ui-data-column')
@inlineView('<template><slot></slot>${title}</template>')
export class UIDataColumn {
  @bindable title = '';
  @bindable dataId = '';
  @bindable ddicType = null;
  @bindable dataLength = '';
  @bindable dataType = '';
  @bindable dataFormat = '';
  @bindable dataSymbol = '';
  @bindable dataLocalFormat = '';
  @bindable({defaultBindingMode: bindingMode.oneTime}) dataAbap = false;

  @bindable dataSort = '';

  @bindable format = '';
  @bindable summary = '';
  @bindable labels;

  @bindable value;
  @bindable button;
  @bindable display;

  @bindable buttonTitle = '';
  @bindable buttonIcon = '';
  @bindable buttonTheme = '';
  @bindable buttonMenu = [];

  @bindable class = '';

  @bindable({defaultBindingMode: bindingMode.oneTime}) width;
  @bindable({defaultBindingMode: bindingMode.oneTime}) minWidth;

  edge = 0;

  __title = '';
  __type = 'text';
  __align = 'start';
  __link = false;
  __button = false;
  __locked = false;
  __sortable = false;
  __resizeable = false;
  __hasMenu = false;

  static inject = [Element];

  constructor(element) {
    this.element = element;
    if (this.element.hasAttribute('center')) this.__align = 'center';
    if (this.element.hasAttribute('end')) this.__align = 'end';

    this.__link = this.element.hasAttribute('link');
    this.__locked = this.element.hasAttribute('locked');
    this.__sortable = this.element.hasAttribute('sortable');
    this.__resizeable = this.element.hasAttribute('resizeable');

    this.element.columnDef = this;
  }

  bind() {
    if (this.dataAbap) {
      this.dataId = this.element.getAttribute('field');

      this.ddicType = this.dataAbap.ddic;

      if (this.dataAbap.type === 'string') {
        this.dataType = 'text';
      }
      else if (this.dataAbap.type === 'number') {
        this.dataType = 'number';
      }
      else this.dataType = this.dataAbap.type;

      if (this.dataAbap.length) {
        this.dataLength = this.dataAbap.length;
      }
      switch (this.dataAbap.format) {
      case 'boolean':
        this.dataType = 'boolean';
        break;
      case 'numeric':
        this.dataType = 'numeric';
        break;

      case 'time':
        this.dataType = 'time';
        break;
      case 'date':
        this.dataType = 'date';
        break;
      default:
        break;
      }
      //console.log('@@', this.dataId, this.dataAbap, this.dataType, this.dataLength);
    }

    // if DDIC provided, set the type/format accordingly, in dynamic forms for example
    if (this.ddicType) {
      if (UIFormat.ddicToJS[this.ddicType]) {
        [this.__type, this.__format] = UIFormat.ddicToJS[this.ddicType];
      }
      else {
        throw new Error(`DDIC type not supported: [${this.ddicType}]`);
      }
    }

    if (this.element.hasAttribute('view')) this.buttonIcon = this.buttonIcon || 'sap-icon sap-icon-display';
    if (this.element.hasAttribute('edit')) this.buttonIcon = this.buttonIcon || 'sap-icon sap-icon-edit';
    if (this.element.hasAttribute('delete')) this.buttonIcon = this.buttonIcon || 'sap-icon sap-icon-delete';

    this.__hasMenu = !!this.buttonMenu && this.buttonMenu.length > 0;
    if (this.__hasMenu) this.buttonIcon = this.buttonIcon || 'fi-ui-overflow-menu-alt';

    this.__button = !isEmpty(this.buttonIcon);
    if (this.__button && isEmpty(this.buttonTitle) && !this.element.hasAttribute('button')) this.__align = 'center';

    if (!this.width && !isEmpty(this.buttonIcon) && isEmpty(this.buttonTitle)) {
      this.width = 36;
    }
    else {
      switch (this.dataType) {
      case 'boolean':
        this.width = this.width || 50;
        this.__align = this.__align || 'center';
        break;

      case 'text':
        this.width = this.width || 150;
        this.__align = this.__align || 'center';
        break;

      case 'numeric':
        this.width = this.width || 120;
        this.__align = this.__align || 'end';
        break;

      case 'number':
        this.width = this.width || 120;
        this.__align = this.__align || 'end';
        break;

      case 'date':
        this.width = this.width || 150;
        this.__align = this.__align || 'center';
        this.relative = this.element.hasAttribute('relative');
        break;

      case 'time':
        this.width = this.width || 120;
        this.__align = this.__align || 'center';
        this.relative = this.element.hasAttribute('relative');
        break;

      case 'currency':
        this.width = this.width || 120;
        this.__align = this.__align || 'end';
        break;

      case 'quantity':
        this.width = this.width || 120;
        this.__align = this.__align || 'end';
        break;

      default:
        this.width = this.width || 250;
        this.__align = this.__align || 'start';
      //this.dataType && console.log(this.dataId, this.dataType, this.width);
      }
    }

//    if (this.__type == 'date') {
//      this.width = 150;
//      this.__align = 'center';
//    }
//    else if (this.__type == 'datetime') {
//      this.width = 180;
//      this.__align = 'center';
//    }
//    else if (this.__type == 'exrate') {
//      this.width = 100;
//      this.__align = 'end';
//    }
//    else if (this.__type == 'fromnow') {
//      this.width = 120;
//    }
//    else if (this.__type == 'number') {
//      this.width = 120;
//      this.__align = 'end';
//    }
//    else if (this.__type == 'currency') {
//      this.width = 120;
//      this.__align = 'end';
//    }
//    else {
//      this.width = this.width || this.minWidth || 250;
//    }
  }

  attached() {
    if (this.dataAbap) this.__title = this.element.getAttribute('label');
    else this.__title = this.element.textContent;
  }
}


@customElement('ui-pager')
@useView('./ui-pager.html')
export class UIPager {
  @bindable({defaultBindingMode: bindingMode.twoWay})
  current = 1;
  @bindable({defaultBindingMode: bindingMode.twoWay})
  total = 1;

  static inject = [Element];

  constructor(element) {
    this.element = element;
  }

  currentChanged(newValue) {
    if (isNaN(parseInt(newValue))) {
      newValue = this.current;
    }
    else {
      if (parseInt(newValue) < 1) newValue = 1;
      if (parseInt(newValue) > this.total) newValue = this.total;
      this.current = parseInt(newValue);
    }
  }

  fireChange(n) {
    if (n < 1 && this.current === 1) return;
    if (n > 0 && this.current === this.total) return;
    if (n === 0) this.current = 1;
    if (n === -1) this.current--;
    if (n === 1) this.current++;
    if (n === 2) this.current = this.total;
    UIEvent.fireEvent('pagechanged', this.element, this.current);
  }

  keyCheck(evt) {
    if (evt.ctrlKey || evt.altKey || evt.metaKey || evt.charCode === 0) return true;

    if ((evt.which || evt.keyCode) === 13) {
      return UIEvent.fireEvent('pagechanged', this.element, this.current);
    }
    return /[0-9]/.test(String.fromCharCode(evt.charCode));
  }
}

