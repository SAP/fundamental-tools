import {Lazy} from 'aurelia-framework';

import ld from 'lodash';
export let _ = ld;

//import tt from 'tether';
//export let Tether = tt;

window.isTrue = (b) => {
  return (/^(true|yes|1|y|on|X)$/i).test(b);
};

window.isEmpty = (a) => {
  if (typeof a === 'number') return false;
  return a === undefined || a === null || a === '' || Object.keys(a).length === 0 || a.length === 0;
};

window.isFunction = (a) => {
  return _.isFunction(a);
};

window.getParentByTag = (el, selector, last) => {
  selector = selector.toLowerCase();
  if (last) last = last.toLowerCase();
  do {
    if (el.tagName.toLowerCase() === selector) return el;
    if (last && el.tagName.toLowerCase() === last) return null;
    el = el.parentElement;
  } while (el !== null);
  return null;
};

window.getParentByClass = (el, selector, last) => {
  do {
    if (last && el.classList.contains(last)) return null;
    if (el.classList.contains(selector)) return el;
    el = el.parentElement;
  } while (el !== null);
  return null;
};

window.findOne = (haystack, arr) => {
  return arr.some((v) => {
    return haystack.indexOf(v) >= 0;
  });
};

window.closestParent = (el, selector, includeSelf) => {
  let parent = el.parentNode;

  if (includeSelf && el.matches(selector)) return el;

  while (parent && parent !== document.body) {
    if (parent.matches && parent.matches(selector)) {
      return parent;
    }
    else if (parent.parentNode) {
      parent = parent.parentNode;
    }
    else {
      return null;
    }
  }

  return null;
};

// LoDash Mixins
_.mixin({
  'findByValues': function(collection, property, values) {
    if (Array.isArray(collection)) {
      return _.filter(collection, function(item) {
        return _.indexOf(values, item[property] + '') > -1;
      });
    }
    let ret = [];
    _.forEach(collection, function(list) {
      ret.concat(_.filter(list, function(item) {
        return _.indexOf(values, item[property] + '') > -1;
      }));
    });
    return ret;
  },
  'removeByValues': function(collection, property, values) {
    if (Array.isArray(collection)) {
      return _.remove(collection, function(item) {
        return _.indexOf(values, item[property] + '') > -1;
      }) || [];
    }
    let ret = [];
    _.forEach(collection, function(list, key) {
      ret = ret.concat(_.remove(list, function(item) {
        return _.indexOf(values, item[property] + '') > -1;
      }));
    });
    return ret;
  },
  'findDeep': function(collection, property, value) {
    if (Array.isArray(collection)) {
      return _.find(collection, function(item) {
        return item[property] + '' === value + '';
      });
    }
    let ret;
    _.forEach(collection, function(item) {
      ret = _.find(item, v => {
        return v[property] + '' === value + '';
      });
      return ret === undefined;
    });
    return ret;
  }
});


export const UIUtils =  {

  __container: null,

  lazy: (T) => {
    if (!UIUtils.__container) {
      throw new Error('UIUtils.Lazy::Container not set');
    }
    return Lazy.of(T)
      .get(UIUtils.__container)();
  },

  getAscii: (str) => {
    let conversions = {};
    conversions['ae'] = 'ä|æ|ǽ'; // eslint-disable-line dot-notation
    conversions['oe'] = 'ö|œ'; // eslint-disable-line dot-notation
    conversions['ue'] = 'ü'; // eslint-disable-line dot-notation
    conversions['ae'] = 'ä'; // eslint-disable-line dot-notation
    conversions['ue'] = 'ü'; // eslint-disable-line dot-notation
    conversions['oe'] = 'ö'; // eslint-disable-line dot-notation
    conversions['a'] = 'à|á|â|ã|ä|å|ǻ|ā|ă|ą|ǎ'; // eslint-disable-line dot-notation
    conversions['a'] = 'à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª'; // eslint-disable-line dot-notation
    conversions['c'] = 'ç|ć|ĉ|ċ|č'; // eslint-disable-line dot-notation
    conversions['c'] = 'ç|ć|ĉ|ċ|č'; // eslint-disable-line dot-notation
    conversions['d'] = 'ð|ď|đ'; // eslint-disable-line dot-notation
    conversions['d'] = 'ð|ď|đ'; // eslint-disable-line dot-notation
    conversions['e'] = 'è|é|ê|ë|ē|ĕ|ė|ę|ě'; // eslint-disable-line dot-notation
    conversions['e'] = 'è|é|ê|ë|ē|ĕ|ė|ę|ě'; // eslint-disable-line dot-notation
    conversions['g'] = 'ĝ|ğ|ġ|ģ'; // eslint-disable-line dot-notation
    conversions['g'] = 'ĝ|ğ|ġ|ģ'; // eslint-disable-line dot-notation
    conversions['h'] = 'ĥ|ħ'; // eslint-disable-line dot-notation
    conversions['h'] = 'ĥ|ħ'; // eslint-disable-line dot-notation
    conversions['i'] = 'ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|i'; // eslint-disable-line dot-notation
    conversions['i'] = 'ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı'; // eslint-disable-line dot-notation
    conversions['j'] = 'ĵ'; // eslint-disable-line dot-notation
    conversions['j'] = 'ĵ'; // eslint-disable-line dot-notation
    conversions['k'] = 'ķ'; // eslint-disable-line dot-notation
    conversions['k'] = 'ķ'; // eslint-disable-line dot-notation
    conversions['l'] = 'ĺ|ļ|ľ|ŀ|ł'; // eslint-disable-line dot-notation
    conversions['l'] = 'ĺ|ļ|ľ|ŀ|ł'; // eslint-disable-line dot-notation
    conversions['n'] = 'ñ|ń|ņ|ň'; // eslint-disable-line dot-notation
    conversions['n'] = 'ñ|ń|ņ|ň|ŉ'; // eslint-disable-line dot-notation
    conversions['o'] = 'ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ'; // eslint-disable-line dot-notation
    conversions['o'] = 'ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º'; // eslint-disable-line dot-notation
    conversions['r'] = 'ŕ|ŗ|ř'; // eslint-disable-line dot-notation
    conversions['r'] = 'ŕ|ŗ|ř'; // eslint-disable-line dot-notation
    conversions['s'] = 'ś|ŝ|ş|š'; // eslint-disable-line dot-notation
    conversions['s'] = 'ś|ŝ|ş|š|ſ'; // eslint-disable-line dot-notation
    conversions['t'] = 'ţ|ť|ŧ'; // eslint-disable-line dot-notation
    conversions['t'] = 'ţ|ť|ŧ'; // eslint-disable-line dot-notation
    conversions['u'] = 'ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ'; // eslint-disable-line dot-notation
    conversions['u'] = 'ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ'; // eslint-disable-line dot-notation
    conversions['y'] = 'ý|ÿ|ŷ'; // eslint-disable-line dot-notation
    conversions['y'] = 'ý|ÿ|ŷ'; // eslint-disable-line dot-notation
    conversions['w'] = 'ŵ'; // eslint-disable-line dot-notation
    conversions['w'] = 'ŵ'; // eslint-disable-line dot-notation
    conversions['z'] = 'ź|ż|ž'; // eslint-disable-line dot-notation
    conversions['z'] = 'ź|ż|ž'; // eslint-disable-line dot-notation
    conversions['ae'] = 'æ|ǽ'; // eslint-disable-line dot-notation
    conversions['ss'] = 'ß'; // eslint-disable-line dot-notation
    conversions['ij'] = 'ĳ'; // eslint-disable-line dot-notation
    conversions['ij'] = 'ĳ'; // eslint-disable-line dot-notation
    conversions['oe'] = 'œ'; // eslint-disable-line dot-notation
    conversions['f'] = 'ƒ'; // eslint-disable-line dot-notation
    for (let i in conversions) {
      let re = new RegExp(conversions[i], 'g');
      str = str.replace(re, i);
    }
    return str;
  },

  __toastTimeout: 5000,
  __toastRemovalTimeout: 1000,

  showToast: (container, config) => {
    if (typeof config === 'string') config = {message: config};
    if (Array.isArray(config)) {
      for (let c of config) UIUtils.showOneToast(container, c);
    }
    else UIUtils.showOneToast(container, config);
  },

  showOneToast: (container, config) => {
    let tmr;
    let opt = {theme: 'default', autoHide: true, extraClass: ''};
    opt.message = config.message;
    let toast = document.createElement('div');
    toast.classList.add('ui-toast');
    toast.classList.add(opt.theme);
    if (!isEmpty(opt.extraClass))toast.classList.add(opt.extraClass);
    toast.innerHTML = `<div class="ui-toast-wrapper">
			<span class="ui-icon ${opt.icon}"></span>
			<p class="ui-message">${opt.message}</p>
			<span class="ui-close">&times;</span>
		</div>`;

    container.appendChild(toast);
    if (opt.autoHide) tmr = setTimeout(()=>UIUtils.__removeToast(toast), UIUtils.__toastTimeout);
    toast.onclick = ()=> {
      clearTimeout(tmr);
      UIUtils.__removeToast(toast);
    };
    setTimeout(()=>toast.classList.add('ui-toast-show'), 10);
  },

  __removeToast: (toast) => {
    setTimeout(()=>toast.remove(), UIUtils.__toastRemovalTimeout);
    toast.classList.remove('ui-toast-show');
  },

  // ABAP structures handling
  abapStructClone: (obj, fields = {}) => {
    let copy = {};
    if (fields.included) {
      // clone only required fields
      for (let k of fields.included)  copy[k] = obj[k];
    }
    else {
      // clone all fields
      for (let k of Object.keys(obj)) copy[k] = obj[k];
    }
    return copy;
  },

  abapStructDiff: (obj1, obj2, fields = null) => {
    let diff = {};
    if (fields) {
      for (let k of fields) {
        diff[k] = (obj1[k] !== obj2[k]) ? 'X' : '';
      }
    }
    else {
      if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        throw Error('Objects with different keys - field list must be supplied for diff');
      }
      for (let k of Object.keys(obj1)) {
        diff[k] = (obj1[k] !== obj2[k]) ? 'X' : '';
      }
    }
    return diff;
  },

  abapTableClone: (table = [], fields = {}) => {
    let copy = [];
    for (let row of table) copy.push(UIUtils.abapStructClone(row, fields));
    return copy;
  },

  mimeTypeIcon: (mimeType = '') => {
    // http://stackoverflow.com/questions/4212861/what-is-a-correct-mime-type-for-docx-pptx-etc
    if (mimeType.indexOf('msexcel') !== -1) return 'excel-attachment';
    if (mimeType.indexOf('pdf')     !== -1) return 'pdf-attachment';
    if (mimeType.indexOf('image')   !== -1) return 'attachment-photo';
    if ((mimeType.indexOf('video')  !== -1) ||
        (mimeType.indexOf('quicktime') !== -1)) return 'attachment-video';
    if (mimeType.indexOf('zip')     !== -1) return 'attachment-zip-file';
    return 'attachment';
  },

  listFilterChanged: (filter, list) => {
    filter = filter.toUpperCase();
    let found = 0;
    for (let line of list) {
      let hidden = true;
      for (let k of Object.keys(line)) {
        if (line[k] && (line[k].toString().toUpperCase().indexOf(filter) > -1)) {
          hidden = false;
          found++;
          //console.log(found, filter, k, line[k]);
          break;
        }
      }
      line.__hidden = hidden;
    }
    return found;
  }
};

