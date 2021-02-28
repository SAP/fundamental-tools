// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

import { DialogController } from 'aurelia-dialog';
import { UIApplication } from '../../utils/ui-application';
import { UIHttpService } from '../../utils/ui-http-service';

export class UISearchHelp {
  searchParams = [];
  searchResult = [];

  helpSelector = [];
  helpSelectorDisabled = false;

  helpSign = [{ id: 'I', name: 'Include' }, { id: 'E', name: 'Exclude' }];
  helpOption = [
    { id: 'EQ', name: 'is' },
    { id: 'NE', name: 'is not' },
    { id: 'GT', name: 'greater than' },
    { id: 'LT', name: 'less than' },
    { id: 'GE', name: 'not less' },
    { id: 'LE', name: 'not greater' },
    { id: 'BT', name: 'between' },
    { id: 'NB', name: 'not between' },
    { id: 'CP', name: 'with pattern' },
    { id: 'NP', name: 'w/o pattern' }
  ];

  static inject = [UIApplication, UIHttpService, DialogController, Element];

  constructor(app, httpService, controller, element) {
    this.app = app;
    this.userParams = this.app.User.params;
    this.httpService = httpService;
    this.controller = controller;
    this.element = element;
  }

  activate(shlp) {
    this.shlp = shlp;

    // get the collective help list and open the first elementary help search form
    this.httpService
      .backend('/helpselect', shlp)

      .then(FROM_ABAP => {
        this.elementaryHelps = FROM_ABAP.elementary_helps;
        // update help selection list
        let helpList = [];
        if (this.shlp.blacklist) this.shlp.blacklist = this.shlp.blacklist.toString();
        else this.shlp.blacklist = '';
        for (let shlpname of FROM_ABAP.sort_order) {
          if (this.shlp.blacklist.indexOf(shlpname) !== -1) continue; // no no
          helpList.push({ id: shlpname, name: this.elementaryHelps[shlpname].INTDESCR.DDTEXT });
        }
        this.helpSelector = helpList;
        this.helpSelectorDisabled = helpList.length === 1;

        if (this.shlp.autoselect) this.selectHelp(this.shlp.autoselect);
        else this.selectHelp(helpList[0].id);
      })

      .catch(error => {
        this.app.toastError(error);
      });
  }

  clearSearchResult() {
    this.selectedRow = [];
    this.searchResult = [];
    this.valueColumn = '';
    this.selectedValue = null;
    this.maxRowsExceeded = false;
  }

  selectHelp(shlpname = null) {
    if (shlpname === null) return; // todo
    this.maxRows = 500;
    this.clearSearchResult();

    //selected Help
    this.shlpname = shlpname;

    //if (Boolean(this.elementaryHelps[shlpname])) {
    //  this.shlptitle = this.elementaryHelps[shlpname].INTDESCR.DDTEXT;
    //}

    // set search params
    this.searchParams = this.elementaryHelps[shlpname].FIELDDESCR;
    for (let param of this.searchParams) {
      if (this.shlp.selection && this.shlp.selection[param.FIELDNAME] !== undefined) {
        param.PARVA = this.shlp.selection[param.FIELDNAME];
      }
      param.OPTION = 'EQ';
      param.SIGN = 'I';
      param.HIGH = '';
      param.LOW = param.PARVA;
      param.STYLE = {};
      // param.STYLE.width = param.STYLE.width;
      // FIXME: to takeover all user defaults, uncomment following check
      if (param.MEMORYID && this.userParams) {
        if (this.userParams[param.MEMORYID]) {
          let midValue = this.userParams[param.MEMORYID].value;
          param.LOW = midValue !== null ? midValue : '';
        }
      }
    }
    // console.log('elementary Params', this.shlpname, 'Params:', this.searchParams);

    if (this.shlp.run) {
      // autorun
      // this.search(); todo
    }
    else {
      setTimeout(() => {
        let firstInput = this.element.querySelector('.ui-f4-param .ui-input-group:not(.ui-combo) input');
        if (firstInput) firstInput.focus();
      }, 200);
    }
  }

  search() {
    // init the result
    this.clearSearchResult();
    // prepare selection parameters
    let selection = [];
    let selectionLine = [];
    for (let param of this.searchParams) {
      selectionLine = [];
      // console.log(i, this.searchParams[i]);
      if (param.OPTION !== 'BT' && param.OPTION !== 'NB') {
        if (param.LOW.length > 0) {
          selectionLine.push(param.FIELDNAME);
          selectionLine.push(param.SIGN);
          selectionLine.push(param.OPTION);
          selectionLine.push(param.LOW);
          selectionLine.push('');
        }
      }
      else if (param.LOW.length > 0 || param.HIGH.length > 0) {
        selectionLine.push(param.FIELDNAME);
        selectionLine.push(param.SIGN);
        selectionLine.push(param.OPTION);
        selectionLine.push(param.LOW);
        selectionLine.push(param.HIGH);
      }
      if (selectionLine.length > 0) {
        selection.push(selectionLine);
      }
    }

    this.httpService
      .backend('/search', {
        shlpname: this.shlpname,
        selection: selection,
        maxrows: this.maxRows,
        compact: false
      })

      .then(FROM_ABAP => {
        this.maxRowsExceeded = isTrue(FROM_ABAP.maxrows_exceeded);

        // result value column index (used in compact mode)
        //for (let i = 0; i < this.Headers.length; i++) {
        //  if (this.Headers[i][0] === this.valueColumn) {
        //    this.valueColumnIndex = i;
        //    break;
        //  }
        //}

        // search result columns
        let columns = [];
        for (let h of FROM_ABAP.headers) {
          let c = {
            __title: h.title,
            ddicType: h.abaptype,
            dataLength: h.len,
            dataId: h.field,
            align: h.text_align,

            __sortable: true
          };
          columns.push(c);
        }

        // search result data
        this.searchResult = FROM_ABAP.search_result;
        this.__result.__handle.refresh(columns, this.searchResult);

        // output column
        this.valueColumn = this.shlp.valueColumn || FROM_ABAP.shlpoutput;
      })

      .catch(error => {
        this.app.toastError(error);
      });
  }

  rowSelect(evt) {
    this.selectedRow = evt.detail;
    this.selectedValue = evt.detail[this.valueColumn];
  }

  cancel() {
    this.controller.cancel();
  }

  confirm() {
    let result = {
      selectedValue: this.selectedValue,
      selectedRow: this.selectedRow
    };
    if (this.shlp.textColumn) result.selectedText = this.selectedRow[this.shlp.textColumn];
    this.controller.ok(result);
  }
}
