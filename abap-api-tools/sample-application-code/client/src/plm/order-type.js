import {DialogController} from 'aurelia-dialog'; // /dialog-controller';

export class plmOrderType {

  static inject = [DialogController];
  constructor(controller) {
    this.controller = controller;
  }

  activate(createDialog) {
    this.createDialog = createDialog;
  }
}
