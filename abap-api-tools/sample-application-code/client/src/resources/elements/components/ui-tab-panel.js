import {customElement, bindable, inlineView} from 'aurelia-framework';

@customElement('ui-tab-panel')
export class UITabPanel {
  __tabs;
  __tabButtons;
  __selectedTab;

  tabs = [];

  @bindable activeTab = 0;

  static inject = [Element];

  constructor(element) {
    this.element = element;
  }

  attached() {
    for (let tab of this.element.querySelectorAll('ui-tab')) {
      if (tab.hasAttribute('separator')) tab.classList.add('ui-separator');
      this.tabs.push(tab.au.controller.viewModel);
    }
    this.activeTabChanged(this.activeTab);
  }

  itemsChanged(mutations) {
    //if (this.items.length > 0) {
    //  if (!this.selectedItem || this.items.indexOf(this.selectedItem) === -1) {
    //    this.selectItem(this.items[0]);
    //  }
    //}
  }

  activeTabChanged(newValue) {
    if (this.__selectedTab) this.__selectedTab.isSelected = false;
    if (this.tabs[newValue]) {
      (this.__selectedTab = this.tabs[newValue]).isSelected = true;
    }
    if (this.__selectedTab.select) this.__selectedTab.select();
    // if (this.tabs[newValue]) {
    // 	try {
    // 		let active;
    // 		if ((active = this.__tabButtons.querySelector('.ui-active')) !== null) {
    // 			active.classList
    // 				  .remove('ui-active');
    // 		}
    // 		if ((active = this.__tabs.querySelector('.ui-active')) !== null) {
    // 			active.classList
    // 				  .remove('ui-active');
    // 		}
    // 	} catch (e) {
    // 	}
    //
    // 	this.__tabButtons
    // 		.querySelector(`[data-index="${newValue}"]`)
    // 		.classList
    // 		 .add('ui-active');
    // 	this.tabs[newValue]
    // 		.classList
    // 		.add('ui-active');
    // }
  }
}

@inlineView('<template class="ui-tab-content ${isSelected?\'ui-active\':\'\'}"><slot></slot></template>')
@customElement('ui-tab')
export class UITab {
  @bindable label = '';
  @bindable icon = '';
  @bindable topLeft = null;
  @bindable topRight = null;
  @bindable bottomLeft = null;
  @bindable bottomRight = null;
  @bindable itemClass = '';
  @bindable visible = true;

  isSelected = false;

  @bindable select;
  static inject = [Element];

  constructor(element) {
    this.element = element;
    if (this.element.hasAttribute('scroll'))    this.element.classList.add('ui-scroll');
    if (this.element.hasAttribute('padded'))    this.element.classList.add('ui-pad-all');
    if (this.element.hasAttribute('flex'))      this.element.classList.add('ui-column-row');
    if (this.element.hasAttribute('separator')) this.itemClass += ' ui-separator ';
  }

  isSelectedChanged() {
    if (this.isSelected && this.select) this.select();
  }
}
