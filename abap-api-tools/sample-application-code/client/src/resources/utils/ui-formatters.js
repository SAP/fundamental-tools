import __nm from 'numeral';
import __mm from 'moment';

export let moment = __mm;
export let numeral = __nm;

export const UIFormat = {

  __localeId: 'en',
  __locale: {},

  abapDateFormat: 'YYYYMMDD',
  abapTimeFormat: 'HHmmss',
  abapMinDate: moment('19700101', 'YYYYMMDD'),
  abapMaxDate: moment('21991231', 'YYYYMMDD'),

  ddicToJS: {
  // ddic  type    format
    ACCP: ['text',   'posting'],
    CHAR: ['text',   'uppercase'],
    CLNT: ['text',   'numeric'],
    CUKY: ['text',   'uppercase'],
    LANG: ['text',   'uppercase'],
    NUMC: ['text',   'numeric'],
    LCHR: ['text',   'uppercase'],
    UNIT: ['text',   'uppercase'],

    INT1: ['number', 'integer'],
    INT2: ['number', 'integer'],
    INT4: ['number', 'integer'],
    DEC: ['number', 'decimal'],
    FLTP: ['number', 'float'],
    CURR: ['number', 'currency'],
    QUAN: ['number', 'quantity'],
    PREC: ['number', 'integer'],

    DATS: ['text',   'mixedcase'],
    TIMS: ['text',   'mixecase'],

    STRF: ['string', ''],
    SSTR: ['string', ''],
    STRG: ['string', ''],

    RAW: ['byte',    '']
  },

  abap2view(abapValue, dataType, dataFormat, column = {}, model = {}) {
    //console.log(abapValue, dataType, dataFormat);
    let viewValue = '?';

    if (column.dataType === 'number') {
      if (column.dataFormat === 'currency') {
        viewValue = UIFormat.currency(abapValue, model[column.dataSymbol] || column.dataSymbol || '$', column.dataLocalFormat || UIFormat.__locale.Intl.currencyOptions);
      }
      else if (column.dataFormat === 'quantity') {
        viewValue = UIFormat.quantity(abapValue, model[column.dataSymbol] || column.dataSymbol || '?', column.dataLocalFormat || {style: 'decimal'});
      }
      else if (column.dataFormat === 'integer') {
        viewValue = UIFormat.number(abapValue, column.dataLocalFormat || '0');
      }
      else viewValue = UIFormat.number(abapValue, column.dataLocalFormat || '0');
    }
    else if (column.dataType === 'text') {
      viewValue = abapValue;
    }
    else if (column.dataType === 'date') {
      viewValue = UIFormat.date(abapValue, column.dataLocalFormat || UIFormat.__locale.moment.dateFormat, column.relative);
    }
    else if (column.dataType === 'time') {
      viewValue = UIFormat.time(abapValue, column.dataLocalFormat || UIFormat.__locale.moment.timeFormat, column.relative);
    }
    else if (column.dataType === 'boolean') {
      viewValue = `<span class="sap-icon sap-icon-${abapValue ? 'accept' : ''}" style="font-size: 0.875rem;"></span>`;
    }
    // else if (column.dataType === 'exrate') {
    //  viewValue = UIFormat.exRate(abapValue);
    // }
    // else if (column.dataType === 'color') {
    //  viewValue = `<span class="color-code color-${value}"></span> ${abapValue}`;
    // }
    else viewValue = abapValue;

    return viewValue;
  },

  fromABAP: (abapValue, dataType, dataFormat) => {
    let viewValue = null;
    //console.log('::from-ABAP', abapValue, dataType, dataFormat);

    switch (dataType) {
    case 'boolean':
      viewValue = abapValue.length !== 0;
      break;

    case 'number':
      if (dataFormat === 'float')                                     viewValue = abapValue.toExponential().replace('.', UIFormat.__locale.decimalSeparator);
      else if (dataFormat === 'decimal' || dataFormat === 'numeric')   viewValue = abapValue.toString().replace('.', UIFormat.__locale.decimalSeparator);
        else if (dataFormat === 'currency' || dataFormat === 'quantity') viewValue = abapValue.toString().replace('.', UIFormat.__locale.decimalSeparator);
        else                                                            viewValue = abapValue.toString();
      break;

    case 'text':
      viewValue = abapValue;
      break;

    case 'date':
      viewValue = moment(abapValue, UIFormat.abapDateFormat).format(dataFormat);
      break;
    case 'time':
      viewValue = moment(abapValue, UIFormat.abapTimeFormat).format(dataFormat);
      break;
    default:
      viewValue = abapValue;
    }
    return viewValue;
  },

  toABAP: (viewValue, dataType, dataFormat) => {
    let abapValue = null;
    //console.log('::to-ABAP', viewValue, dataType, dataFormat);

    switch (dataType) {
    case 'boolean':
      abapValue = viewValue ? 'X' : '';
      break;

    case 'text':
      abapValue = viewValue;
      break;

    case 'date':
      abapValue = moment(viewValue, UIFormat.__locale.moment.dateFormat).format(UIFormat.abapDateFormat);
      break;

    case 'time':
      abapValue = moment(viewValue, UIFormat.__locale.moment.timeFormat).format(UIFormat.abapTimeFormat);
      break;

    case 'number':
      if (viewValue.length === 0) abapValue = 0;
      else {
        switch (dataFormat) {
        case 'integer':
          abapValue = parseInt(viewValue, 10);
          break;
        case 'decimal':
        case 'currency':
        case 'quantity':
        case 'float':
          abapValue = Number(viewValue.replace(UIFormat.__locale.decimalSeparator, '.'));
          break;
        default:
        }
      }
      break;

    default:
      throw new Error(`toABAP data type not supported: ${dataType}`);
    }
    return abapValue;
  },

  clear: (dataType) => {
    return dataType === 'number' ? 0 : '';
  },

  toHTML: (md) => {
    return marked(md);
  },

  // Dates
  date: (dt, format = UIFormat.__locale.moment.dateFormat, relative = false) => {
    let m = UIFormat.localMoment(dt, UIFormat.abapDateFormat);
    if (!m.isValid()) return null;
    return relative ? m.fromNow() : m.format(format);
  },

  time: (dt, ft = UIFormat.__locale.moment.timeFormat, relative = false) => {
    let m = UIFormat.localMoment(dt, UIFormat.abapTimeFormat);
    if (!m.isValid()) return null;
    return relative ? m.fromNow() : m.format(ft);
  },

  dateToISO: (dt) => {
    let x = moment(dt);
    return x.isValid() ? x.toISOString() : null;
  },

  // Numbers
  number: (nm, fm = '0,0[.]00', abapType = 'INT') => {
    return nm === null || isNaN(nm) ? '' :
      numeral(nm).format(fm)
        .replace(/[^\d\.]+/g, (txt) => {
          return `<small>${txt.toUpperCase() }</small>`;
        });
  },

  currency: (nm, sy = '$', fm = {style: 'currency'}) => {
    if (!fm.currency) fm.currency = sy;
    return nm === null || isNaN(nm) ? '' :
      //numeral(nm).format(fm)
      new Intl.NumberFormat(UIFormat.__localeId, fm).format(nm)
        .replace(/[^\d\.]+/g, (txt) => {
          return `<small>${txt.toUpperCase() }</small>`;
        });
  },

  quantity: (nm, sy = '?', fm = {style: 'decimal'}) => {
    return nm === null || isNaN(nm) ? '' :
      (new Intl.NumberFormat(UIFormat.__localeId, fm).format(nm) + sy)
        .replace(/[^\d\.]+/g, (txt) => {
          return `<small>&nbsp;${txt.toUpperCase() }</small>`;
        });
  },
  percent: (nm) => {
    return nm === null || isNaN(nm) ? '' :
      numeral(nm > 1 ? nm / 100 : nm)
        .format('0.00 %');
  },

  bytes: (nm, format = '0 b') => {
    return nm === null || isNaN(nm) ? '' :
      numeral(nm).format(format);
  },

  exRate: (nm) => {
    return nm === null || isNaN(nm) ? '' :
      numeral(nm > 0 ? 1 / nm : nm)
        .format('0.0000[a]');
  },

  getFromDate: (interval, fromDate = null, toDate = null) => {
    let result;
    switch (interval) {

      // last 3 years
    case 'l3y':
      result = moment().add(-3, 'years').format('YYYYMMDD');
      break;

      // last 1 years
    case 'l1y':
      result = moment().add(-1, 'years').format('YYYYMMDD');
      break;

      // past 4 weeks
    case 'l4w':
      result = moment().add(-1, 'months').format('YYYYMMDD');
      break;

      // from/to interval
    case 'i':
      result = {from: fromDate, to: toDate};
      break;

    default:
      // todo: error
    }
    //console.log('getFromDate', interval, result, fromDate, toDate);
    return result;
  }
};

