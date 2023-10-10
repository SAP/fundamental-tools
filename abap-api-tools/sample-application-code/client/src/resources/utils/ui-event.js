import {UIUtils} from './ui-utils';
import {BindingEngine, DOM} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';

export class UIEvent extends CustomEvent {

  static fireEvent(event, element, data) {
    //console.log('fire::', event, 'e:', element, 'd:',data);
    let e = DOM.createCustomEvent(event, {bubbles: true, cancelable: true, detail: data});
    return element.dispatchEvent(e);
  }

  static ea;
  static ob;

  static observe(object, prop) {
    if (!UIEvent.ob) UIEvent.ob = UIUtils.lazy(BindingEngine);
    return UIEvent.ob.propertyObserver(object, prop);
  }

  static broadcast(evt, data) {
    if (!UIEvent.ea) UIEvent.ea = UIUtils.lazy(EventAggregator);
    UIEvent.ea.publish(evt, data);
  }

  static subscribe(evt, fn) {
    if (!UIEvent.ea) UIEvent.ea = UIUtils.lazy(EventAggregator);
    return UIEvent.ea.subscribe(evt, fn);
  }
}
