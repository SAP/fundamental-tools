import { customAttribute, noView } from 'aurelia-framework';
import { UIHttpService } from '../utils/ui-http-service';
import { UIEvent } from '../utils/ui-event';
import { UIConfigValueInput } from '../utils/ui-constants';
import { DialogService } from 'aurelia-dialog';
import { UIApplication } from '../utils/ui-application';

class LookupHandler {
  static inject = [UIHttpService, UIApplication];

  constructor(httpService, app) {
    this.httpService = httpService;
    this.app = app;
    this.__icons = UIConfigValueInput.__icons;
    this.__map = UIConfigValueInput.__map;
    this.__options = UIConfigValueInput.__options;
  }

  look(lookupName, key, inval = null) {
    let lookup = this.__map[lookupName];
    if (!lookup) {
      this.httpService.app.warn(this.constructor.name, `Lookup definition not found for [${lookupName}]`, this.__map);
      return '?';
    }
    if (lookup.__cache) {
      let val = inval ? inval : lookup.__cache.valueProperty;
      if (lookup.__cache.options && lookup.__cache.options[key]) {
        return lookup.__cache.options[key][val];
      }
      return '?';
    }
    this.app.debug(this.constructor.name, `Lookup ${lookupName} not initialized.`, lookup);
    return '?';
  }

  // rfm to lookup
  rfm2lookup(options, valueProperty = '', displayProperty = '') {
    let keys = Object.keys(options[0]);
    return {
      valueProperty: valueProperty || keys[0],
      displayProperty: displayProperty || keys[1],
      options: options
    };
  }

  // search help to lookup
  shlp2lookup(result, valueProperty = '', displayProperty = '') {
    return {
      valueProperty: valueProperty || result.shlpoutput,
      displayProperty: displayProperty || result.headers[1].field,
      options: result.search_result
    };
  }

  // checktable to lookup
  ct2lookup(lookupName, result, valueProperty = 'ID', displayProperty = 'TEXT') {
    let lookup = this.__map[lookupName];

    if (Array.isArray(lookup.displayProperty)) {
      // multiple fields for display, concatenate
      for (let line of result.ET_RESULT) {
        line._text = false;
        for (let k of lookup.displayProperty) {
          if (line._text) line._text += ' ' + line[k];
          else line._text = line[k];
        }
      }
      lookup.displayProperty = '_text';
    }
    return {
      valueProperty: lookup.valueProperty || valueProperty,
      displayProperty: lookup.displayProperty || displayProperty,
      options: result.ET_RESULT
    };
  }

  getCached(lookupName) {
    if (this.__map[lookupName] && this.__map[lookupName].__cache) {
      return this.__map[lookupName].__cache;
    }
    return null;
  }

  get(lookupName, options = { cache: true }) {
    let lookup = this.__map[lookupName];
    if (!lookup) {
      if (lookupName.slice(0, 2) === 'FV') {
        this.__map[lookupName] = { type: 'FV', id: lookupName.slice(3) };
        lookup = this.__map[lookupName];
      }
      else if (lookupName) {
        this.httpService.app.error(
          this.constructor.name,
          `Lookup not found: [${lookupName}] in [${Object.keys(this.__map)}]`
        );
        return false;
      }
    }

    if (options.cache && lookup.__cache) {
      // found in cache
      if (options.promise) {
        return new Promise(resolve => {
          resolve(lookup.__cache);
        });
      }
      this.httpService.app.broadcast(lookupName, lookup.__cache);
      return true;
    }

    if (lookup.__requested && !options.promise) {
      // already requested, event will be published on backend response
      return true;
    }

    // indicate the lookup request started
    lookup.__requested = true;

    let selection = options.selection;

    switch (lookup.type) {
    //
    // Fixed Domain Values
    //
    case 'FV':
      return this.httpService
        .backend(`/fieldvalues/${lookup.id}`) // domain name
        .then(FROM_ABAP => {
          if (lookup.id === 'BAUMM') {
            for (let l of FROM_ABAP) l.DDTEXT = l.DOMVALUE_L + '-' + l.DOMVALUE_H;
          }
          let lc = this.rfm2lookup(FROM_ABAP, 'DOMVALUE_L', 'DDTEXT');
          // cache if requested
          if (options.cache) lookup.__cache = lc;
          // notify requestors
          if (options.promise) return lc;
          lookup.__requested = null;
          UIEvent.broadcast(lookupName, lc);
        })

        .catch(error => {
          this.httpService.app.error(this.constructor.name, error);
          this.app.debug(this.constructor.name, error);
        });

      //
      // Search Help and Check Tables
      //
    case 'CT': // generic
      //throw Error(`CT Search Help not supported: [${lookup.id}]`);
      return this.httpService
        .backend('/tabselect', {
          IT_SELCRIT_VALUES: lookup.selection ? lookup.selection : [],
          IV_TABNAME: lookup.id,
          IT_REQUESTED_FIELDS: lookup.requestedFields ? lookup.requestedFields : []
        })
        .then(FROM_ABAP => {
          let lc = this.ct2lookup(lookupName, FROM_ABAP);
          // cache if requested
          if (options.cache) lookup.__cache = lc;
          // notify requestors
          if (options.promise) return lc;
          lookup.__requested = null;
          UIEvent.broadcast(lookupName, lc);
        })

        .catch(error => {
          this.httpService.app.error(this.constructor.name, error);
          this.app.debug(this.constructor.name, error);
        });

    case 'SH':
      if (!selection) selection = lookup.selection ? lookup.selection : [];

      return this.httpService
        .backend('/search', { shlpname: `${lookup.type} ${lookup.id}`, selection: selection })

        .then(FROM_ABAP => {
          if (FROM_ABAP.search_result.length > 0) {
            let lc = this.shlp2lookup(FROM_ABAP, lookup.keyfield, lookup.valueProperty);
            // cache if requested
            if (options.cache) lookup.__cache = lc;
            // notify requestors
            if (options.promise) return lc;

            lookup.__requested = null;
            UIEvent.broadcast(lookupName, lc);
          }
          else return null;
        })

        .catch(error => {
          this.httpService.app.error(this.constructor.name, error);
          this.app.debug(this.constructor.name, error);
        });

      //
      // Lookup List
      //
    case 'LL':
      if (!selection) selection = lookup.selection ? lookup.selection : {};
      selection.__rfm = lookup.id;

      return this.httpService
        .backend('/valuelist', selection) // rfm name

        .then(FROM_ABAP => {
          if (FROM_ABAP.length > 0) {
            let lc = this.rfm2lookup(FROM_ABAP, lookup.keyProperty, lookup.valueProperty);
            // cache if requested
            if (options.cache) lookup.__cache = lc;
            // return promise
            if (options.promise) return lc;
            // or broadcast requestors
            lookup.__requested = null;
            UIEvent.broadcast(lookupName, lc);
          }
          else return null;
        })

        .catch(error => {
          this.httpService.app.error(this.constructor.name, error);
          this.app.debug(this.constructor.name, error);
        });

    default:
      // this.httpService.app.toast(`Invalid lookup key: ${lookup.type} ${lookup.id}`);
      this.httpService.app.error(this.constructor.name, 'Invalid lookup type:', `[${lookup.type}] ${lookup.id}`);
      return false;
    }
  }
}

@customAttribute('shlp')
@noView()
export class ShlpCustomAttribute {
  static inject = [Element, LookupHandler, DialogService];

  constructor(element, lookupHandler, dialogService) {
    this.element = element;
    this.lookupHandler = lookupHandler;
    this.dialogService = dialogService;

    this.__setLookup = lookup => {
      if (this.element.__handle && this.element.__handle.__setLookup) {
        this.element.__handle.__setLookup(lookup);
      }
    };
  }

  attached() {
    if (this.value.type === 'SH') {
      if (this.element.__handle) {
        this.element.__handle.suffixIcon = 'sap-icon sap-icon-value-help';
        this.element.__handle.shlp = this;
      }
    }

    if (this.value.type === 'FV' || this.value.type === 'CT') {
      let lookupName = this.value.type + '_' + this.value.id;
      // get from cache
      let lookup = this.lookupHandler.getCached(lookupName);
      if (lookup) {
        this.__setLookup(lookup);
      }
      else {
        // not cached, subscribe to backend response
        let subscription = UIEvent.subscribe(lookupName, lkp => {
          subscription.dispose();
          this.__setLookup(lkp);
        });
        // request values from backend
        if (this.lookupHandler.get(lookupName) === false) {
          // todo: update element placeholder
        }
      }
    }
  }

  getValueInput() {
    console.log('!!', this.value);
    return this.dialogService.open({ viewModel: 'resources/elements/inputs/ui-search-help', model: this.value });
  }
}

@customAttribute('lookup')
@noView()
export class LookupCustomAttribute {
  static inject = [Element, LookupHandler];

  constructor(element, lookupHandler) {
    this.element = element;
    this.lookupHandler = lookupHandler;

    this.__setLookup = lookup => {
      if (this.element.__handle && this.element.__handle.__setLookup) {
        this.element.__handle.__setLookup(lookup);
      }
    };
  }

  valueChanged(newValue) {
    if (isEmpty(newValue)) return;
    // get from cache
    let lookup = this.lookupHandler.getCached(newValue);
    if (lookup) {
      // found in cache
      this.__setLookup(lookup);
    }
    else {
      // not found, request from backend to broadcast when ready
      let subscription = UIEvent.subscribe(newValue, lkp => {
        subscription.dispose();
        this.__setLookup(lkp);
      });
      // request values from backend
      if (this.lookupHandler.get(newValue) === false) {
        // todo: update element placeholder
      }
    }
  }
}
