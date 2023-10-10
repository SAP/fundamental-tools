import {customElement, bindable, inlineView} from 'aurelia-framework';

@customElement('ui-page')
export class UIPage {
  __body;

  @bindable() pageTitle = '';

  static inject = [Element];
  constructor(element) {
    this.element = element;
  }
}

@customElement('ui-section')
@inlineView('<template class="ui-section"><slot></slot></template>')
export class UISection {

  static inject = [Element];
  constructor(element) {
    this.element = element;
  }

  bind() {
    if (this.element.hasAttribute('column')) {
      this.element.classList.add('ui-section-column');
    }
    else {
      this.element.classList.add('ui-section-row');
    }
  }
}

@customElement('ui-content')
@inlineView('<template class="ui-content"><slot></slot></template>')
export class UIContent {

  @bindable size = '';

  static inject = [Element];
  constructor(element) {
    this.element = element;
  }

  bind() {
    if (this.element.hasAttribute('auto')) {
      this.element.classList.add('ui-auto-fit');
    }
    else if (this.element.hasAttribute('scroll')) {
      this.element.classList.add('ui-scroll');
    }
    if (this.element.hasAttribute('padded')) this.element.classList.add('ui-pad-all');

    if (this.size) {
      for (let size of this.size.split(' ')) {
        this.element.classList.add(`ui-content-${size}`);
      }
    }
  }
}

@customElement('ui-sidebar')
@inlineView('<template class="ui-sidebar" role="sidebar" css.bind="{\'flex-basis\':width}"><slot></slot></template>')
export class UISidebar {
  collapsible = false;

  @bindable() width = '220px';

  static inject = [Element];
  constructor(element) {
    this.element = element;
  }

  bind() {
    // TODO: Add collapse functionality
    this.collapsible = this.element.hasAttribute('collapsible');
    if (this.element.hasAttribute('scroll')) this.element.classList.add('ui-scroll');
    if (this.element.hasAttribute('padded')) this.element.classList.add('ui-pad-all');
  }
}

@customElement('ui-divider')
@inlineView('<template class="ui-divider" role="separator"></template>')
export class UIDivider {
}

@customElement('ui-toolbar')
@inlineView('<template class="ui-toolbar ui-button-bar" role="toolbar"><slot></slot></template>')
export class UIToolbar {
}

@customElement('ui-statsbar')
@inlineView('<template class="ui-statsbar"><slot></slot></template>')
export class UIStatsbar {
}

@customElement('ui-stat')
@inlineView('<template class="ui-stat"><span class="${icon}" if.bind="icon"></span><div><h1>${value}</h1><h6><slot></slot></h6></div></template>')
export class UIStat {
  @bindable() value;
  @bindable() icon;
}
