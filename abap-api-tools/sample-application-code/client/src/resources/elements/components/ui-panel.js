import {bindable, customElement, inlineView, children, DOM} from 'aurelia-framework';
import {UIEvent} from '../../utils/ui-event';

@customElement('ui-panel-group')
@inlineView('<template class="ui-panel-group" collapse.delegate="__unCollapse()"><slot></slot></template>')
export class UIPanelGroup {
  static inject=[Element];
  constructor(element) { this.element = element; }

  attached() {
    if (_.find(this.panels, ['collapsed', false]) === null) this.panels[0].collapsed = false;
  }

  @children('ui-panel') panels;

  __unCollapse() {
    let panel = _.find(this.panels, ['collapsed', false]);
    if (panel) panel.collapsed = true;
  }
}

@customElement('ui-panel')
@inlineView('<template class="ui-panel ${collapsed?\'ui-collapse\':\'\'}" collapse.trigger="toggleCollapse()" close.trigger="closePanel()"><slot></slot></template>')
export class UIPanel {
  static inject=[Element];
  constructor(element) {
    this.element = element;
    this.collapsed = element.hasAttribute('collapsed');
  }

  closePanel() {
    DOM.removeNode(this.element);
  }

  collapsed = false;
  toggleCollapse() {
    setTimeout(() => this.collapsed = !this.collapsed, 200);
  }
}

@customElement('ui-panel-body')
@inlineView('<template class="ui-panel-body" css.bind="{\'max-height\': maxHeight,\'flex-basis\':height}"><slot></slot></template>')
export class UIContent {
  static inject = [Element];
  constructor(element) {
    this.element = element;
    if (element.hasAttribute('flex')) element.classList.add('ui-row-column');
    if (element.hasAttribute('scroll')) element.classList.add('ui-scroll');
    if (element.hasAttribute('padded')) element.classList.add('ui-pad-all');
  }
  __wrapperClass = '';

  @bindable() height = 'auto';
  @bindable() maxHeight = 'auto';
}

@customElement('ui-header-tool')
@inlineView(`<template><button tabindex="-1" class="ui-header-button ui-\${__type}" click.trigger="fireEvent($event)">
  <slot><span class="sap-icon sap-icon-\${__icon}"></span></slot></button></template>`)
export class UIHeaderTool {
  static inject = [Element];
  constructor(element) {
    this.element = element;
    if (element.hasAttribute('collapse')) this.__type = 'collapse';
    if (element.hasAttribute('collapse')) this.__icon = 'slim-arrow-up'; // fi-ui-angle-up
    if (element.hasAttribute('minimize')) this.__type = 'minimize';
    if (element.hasAttribute('minimize')) this.__icon = 'minimize';
    if (element.hasAttribute('maximize')) this.__type = 'maximize';
    if (element.hasAttribute('maximize')) this.__icon = 'header';
    if (element.hasAttribute('close')) this.__type = 'close';
    if (element.hasAttribute('close')) this.__icon = 'decline';
    if (element.hasAttribute('refresh')) this.__type = 'refresh';
    if (element.hasAttribute('refresh')) this.__icon = 'refresh';
  }

  __type;
  __icon;

  fireEvent(evt) {
    if (evt.button !== 0) return true;
    return UIEvent.fireEvent(this.__type, this.element);
  }
}

@customElement('ui-header-icon')
@inlineView('<template class="ui-header-icon ui-inline-block"><span class="ui-icon ${icon}"></span>&nbsp;</template>')
export class UIHeaderIcon {
  static inject = [Element];
  constructor(element) {
    this.element = element;
  }

  @bindable() icon = '';
}

@customElement('ui-header-title')
@inlineView('<template class="ui-header-title ui-inline-block ui-col-fill"><slot></slot></template>')
export class UIHeaderTitle {
  static inject = [Element];
  constructor(element) {
    this.element = element;
  }
}

@customElement('ui-header')
@inlineView('<template class="ui-header"><slot></slot></template>')
export class UIHeader {
  static inject = [Element];
  constructor(element) {
    this.element = element;
    if (this.element.hasAttribute('primary')) element.classList.add('ui-primary');
    else if (this.element.hasAttribute('secondary')) element.classList.add('ui-secondary');
    else if (this.element.hasAttribute('dark')) element.classList.add('ui-dark');
    else if (this.element.hasAttribute('light')) element.classList.add('ui-light');
    else if (this.element.hasAttribute('info')) element.classList.add('ui-info');
    else if (this.element.hasAttribute('danger')) element.classList.add('ui-danger');
    else if (this.element.hasAttribute('success')) element.classList.add('ui-success');
    else if (this.element.hasAttribute('warning')) element.classList.add('ui-warning');
  }
}

