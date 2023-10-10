import {UIApplication} from '../resources/index';

export class User {

  static inject = [Element, UIApplication];
  constructor(element, app) {
    this.element = element;
    this.app = app;

    this.url = app.webGuiUrl('SU01', false, app.User.username);

    this.paramLen = Object.keys(app.User.params).length;
  }

}
