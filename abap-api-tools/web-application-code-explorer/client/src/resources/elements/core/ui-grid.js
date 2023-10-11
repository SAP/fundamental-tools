import {inlineView, customElement, bindable} from 'aurelia-framework';

@customElement('ui-row')
@inlineView('<template><slot></slot></template>')
export class UIRow {

  static inject = [Element];
  constructor(element) {
    this.element = element;
  }

  bind() {
    if (this.element.hasAttribute('column')) {
      this.element.classList.add('ui-column-row');
    }
    else {
      this.element.classList.add('ui-row');
    }

    if (this.element.hasAttribute('start')) this.element.classList.add('ui-align-start');
    if (this.element.hasAttribute('end')) this.element.classList.add('ui-align-end');
    if (this.element.hasAttribute('center')) this.element.classList.add('ui-align-center');
    if (this.element.hasAttribute('spaced')) this.element.classList.add('ui-align-spaced');

    if (this.element.hasAttribute('top')) this.element.classList.add('ui-align-top');
    if (this.element.hasAttribute('bottom')) this.element.classList.add('ui-align-bottom');
    if (this.element.hasAttribute('middle')) this.element.classList.add('ui-align-middle');
    if (this.element.hasAttribute('stretch')) this.element.classList.add('ui-align-stretch');
  }
}


@customElement('ui-column')
@inlineView('<template class="ui-column" css.bind="{\'flex-basis\': width}"><slot></slot></template>')
export class UIColumn {

  @bindable() size = '';
  @bindable() width = 'none';

  static inject = [Element];
  constructor(element) {
    this.element = element;
  }

  bind() {
    if (this.element.hasAttribute('fill')) {
      this.element.classList.add('ui-col-fill');
    }
    else if (this.element.hasAttribute('full')) {
      this.element.classList.add('ui-col-full');
    }
    else if (isEmpty(this.size)) {
      this.element.classList.add('ui-col-auto');
    }

    if (this.element.hasAttribute('padded')) this.element.classList.add('ui-pad-all');

    if (this.size) {
      for (let size of this.size.split(' ')) {
        this.element.classList.add(`ui-col-${size}`);
      }
    }

    if (this.element.hasAttribute('top')) this.element.classList.add('ui-align-top');
    if (this.element.hasAttribute('bottom')) this.element.classList.add('ui-align-bottom');
    if (this.element.hasAttribute('middle')) this.element.classList.add('ui-align-middle');
    if (this.element.hasAttribute('stretch')) this.element.classList.add('ui-align-stretch');

    if (this.element.hasAttribute('text-start')) this.element.classList.add('ui-text-start');
    if (this.element.hasAttribute('text-center')) this.element.classList.add('ui-text-center');
    if (this.element.hasAttribute('text-end')) this.element.classList.add('ui-text-end');
    if (this.element.hasAttribute('pull-left')) this.element.classList.add('ui-pull-left');
    if (this.element.hasAttribute('pull-right')) this.element.classList.add('ui-pull-right');

    if (this.element.hasAttribute('scroll')) this.element.classList.add('ui-scroll');
  }
}
