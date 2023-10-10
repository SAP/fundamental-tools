import {DialogController} from 'aurelia-dialog'; // /dialog-controller';

export class RemovePrompt {

  static inject = [DialogController];
  constructor(controller) {
    this.controller = controller;
    this.answer = null;

    controller.settings.lock = false;
  }

  activate(question) {
    this.question = question;
  }
}
