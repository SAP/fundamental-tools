import {UIFormat} from '../utils/ui-formatters';

export class AbapFormatValueConverter {
  toView(abapValue, dataType, dataFormat) {
    //console.log('toView::', abapValue, dataType, dataFormat);
    return abapValue;
  }

  fromView(inputValue, dataType, dataFormat) {
    //console.log('fromView::', inputValue, dataType, dataFormat);
    return inputValue;
  }
}
// Files upload
export class FileListToArrayValueConverter {
  toView(fileList) {
    let files = [];
    if (!fileList) {
      return files;
    }
    for (let file of fileList) {
      files.push(file);
    }
    return files;
  }
}
export class BlobToUrlValueConverter {
  toView(blob) {
    return URL.createObjectURL(blob);
  }
}

// Markdown
export class MarkdownValueConverter {
  toView(value) {
    return UIFormat.toHTML(value || '');
  }
}

export class CodeHighlightValueConverter {
  toView(value) {
    return marked(value || '', {
      highlight: function(code) {
        return hljs.highlightAuto(code).value;
      }
    });
  }
}

// Dates
export class DateFormatValueConverter {
  toView(value, format) {
    return UIFormat.date(value, format);
  }
}
export class TimeFormatValueConverter {
  toView(value, format) {
    return UIFormat.time(value, format);
  }
}
export class FromNowValueConverter {
  toView(value) {
    return UIFormat.fromNow(value);
  }
}

// Numbers
export class NumberValueConverter {
  toView(value, format) {
    return UIFormat.number(value, format);
  }
}
export class CurrencyValueConverter {
  toView(value, symbol, format) {
    return UIFormat.currency(value, symbol, format);
  }
}
export class PercentValueConverter {
  toView(value) {
    return UIFormat.percent(value);
  }
}

// Bytes
export class BytesValueConverter {
  toView(value, format = '0 b') {
    return UIFormat.bytes(value, format);
  }
}

// Objects/Arrays
export class KeysValueConverter {
  toView(object) {
    if (isEmpty(object)) return [];
    return Object.keys(object);
  }
}
export class GroupValueConverter {
  toView(object, property) {
    return _.groupBy(object, property);
  }
}

export class SortValueConverter {
  toView(value, property) {
    return _.sortBy(value, property);
  }
}

export class JsonValueConverter {
  toView(value) {
    return JSON.stringify(value, null, 4);
  }
}
export class IsStringValueConverter {
  toView(value) {
    return _.isString(value);
  }
}
export class IsArrayValueConverter {
  toView(value) {
    return Array.isArray(value);
  }
}
export class IsObjectValueConverter {
  toView(value) {
    return _.isObject(value);
  }
}
export class IsTrueValueConverter {
  toView(value) {
    return isTrue(value);
  }
}
export class IsFalseValueConverter {
  toView(value) {
    return !isTrue(value);
  }
}
