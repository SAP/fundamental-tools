import { _, UIApplication } from '../resources/index';
import { countries } from '../resources/data/countries';

export class Logon {
  error = '';
  languages = {};

  date = '';
  time = '';

  static inject = [UIApplication];
  constructor(app, plm) {
    this.app = app;

    this.allCountries = _.groupBy(countries, 'continent');
    this.testCountries = ['.de', '.fr', '.cs', '.jp', '.ru', '.us'].join();
    this.languages = {};
    for (let k in this.allCountries) {
      this.languages[k] = [];
      for (let c of this.allCountries[k]) {
        if (this.testCountries.indexOf(c.tld) !== -1) this.languages[k].push(c);
      }
    }
    for (let k in this.languages) {
      if (this.languages[k].length === 0) delete this.languages[k];
    }
  }

  activate(params, routeConfig) {
    if (params && params.status === '401') {
      this.error = 'Unauthorized Access !';
    }
  }

  doLogin() {
    this.app.IsAuthenticated = true;
    if (this.app.User.role === false) {
      this.app.toastError(`Role not assigned to user: ${this.app.User.fullName} (${this.app.User.username})`);
    }
    else {
      let url = this.app.session('AppCurrentRoute');
      if (url) {
        this.app.session('AppCurrentRoute', null);
        this.app.navigate(url);
      }
      else {
        switch (this.app.User.role.AGR_NAME) {
        default:
          this.app.navigate('plm'); // /shell/technician');
        }
      }
    }
  }
}
