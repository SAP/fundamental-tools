import {bindable, noView, customAttribute, Animator} from 'aurelia-framework';
@customAttribute('smooth-scroll')
@noView
export class SmoothScroll {

  @bindable duration;
  @bindable easing;

  subs = [];

  static defaultConfig = {
    duration: 400,
    easing: 'ease-in'
  };

  static inject = [Element, Animator];
  constructor(element, animator) {
    this.element = element;
    this.animator = animator;

    let config = SmoothScroll.defaultConfig;
    if (config.duration) this.duration = config.duration;
    if (config.easing) this.easing = config.easing;

    this.onClick = (event) => {
      event.preventDefault();
      this.scrollTo(this.element.getAttribute('href'), {}, document.body);
    };
  }

  attached() {
    let sub = this.onClick.bind(this);
    this.subs.push();
    this.element.addEventListener('click', sub);
  }

  detached() {
    for (let sub of this.subs) sub();
  }

  /**
   * Scroll to an element or named anchor
   *
   * @param elementOrHash   element to scroll to or named anchor
   * @param options         animator options
   * @param container       the container element (defaults to document.body)
   *
   * @returns {Promise} resolved when scrolling is done
   */
  scrollTo(elementOrHash, options = {}, container = document.body.querySelector('.ui-ap-view')) {
    //console.log(elementOrHash, options, container);
    let target = elementOrHash;
    let hash = null;
    //find target by id or name
////    if (typeof elementOrHash === 'string' && elementOrHash.indexOf('#') === 0) {
////      hash = elementOrHash.slice(1, elementOrHash.length);
    if (typeof elementOrHash === 'string') {
      hash = elementOrHash;
      if (hash) {
        target = container.querySelector(`[id="${hash}"]`);
        if (!target) container.querySelector(`[name="${hash}"]`);
      }
      else target = document.body;

      if (history) {
////        history.pushState(null, null, '#' + hash);
        history.pushState(null, null, hash);
      }
      else {
        //fallback to location.hash
        let t = container.scrollTop;
        location.hash = hash;
        container.scrollTop = t;
      }
    }

    //console.log(target, history, elementOrHash, options, container);
    if (!target || typeof target === 'string') return Promise.resolve();

    return this.animator.animate(target, 'scroll',
        Object.assign({
          duration: this.duration,
          offset: SmoothScroll.getOffset(),
          easing: this.easing
        }, options)
    );
  }

  static getOffset() {
    let l = - document.querySelector('.ui-app-view').offsetTop;
    //console.log(l);
    return l;
  }

}
