import { DialogController } from 'aurelia-dialog'; // /dialog-controller';

export class Prompt {
  static inject = [DialogController];
  constructor(controller) {
    this.controller = controller;
    this.answer = null;
  }

  activate(question) {
    this.question = question;
  }
}
