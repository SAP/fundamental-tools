import { bindable, transient, customElement, containerless } from 'aurelia-framework';
import { UIEvent } from '../../utils/ui-event';
import { UIApplication } from '../../utils/ui-application';
import { UIHttpService } from '../../utils/ui-http-service';
//import {languages} from '../data/languages';

//import {length, required, date, datetime, email, equality, exclusion, inclusion, format, url, numericality} from 'aurelia-validatejs';
//import {Validator, ValidationEngine, ValidationRenderer} from 'aurelia-validation';
import { Validator } from 'aurelia-validation';

@customElement('ui-login')
@containerless()
export class UILogin {
  @bindable
  error = '';
  @bindable
  busy = false;
  @bindable
  languages = {};

  static inject = [Element, UIApplication, UIHttpService];
  constructor(element, app, httpService) {
    this.element = element;
    this.app = app;
    this.httpService = httpService;

    this.model = new LoginModel(this.app.User);
  }

  doLogin() {
    this.error = '';

    //this.model.validator.validate();

    let logonData = {
      user: this.model.User.username,
      passwd: this.model.User.password,
      lang: this.model.User.locale
    };
    //console.log(this.httpService);
    this.httpService
      .backend('/login', logonData)
      .then(FROM_ABAP => {
        this.app.__abapBackend = FROM_ABAP.backend;
        // todo this.validation.configure(config => {
        //  config.useLocale('de-DE');
        // });
        // todo, config validation based on logon lang
        this.app.IsAuthenticated = true;
        this.app.User.name = logonData.user;
        this.app.User.fullName = FROM_ABAP.address.FULLNAME;
        this.app.User.roles = FROM_ABAP.user_roles;
        this.app.User.role = false;
        // set the collective role as the lead user role
        for (let role of this.app.User.roles) {
          if (/RBP_PRT/.test(role.AGR_NAME)) {
            this.app.User.role = role;
            break;
          }
        }
        // set SU3 parameters
        this.app.User.params = {};
        for (let p of FROM_ABAP.user_params) this.app.User.params[p.PARID] = { value: p.PARVA, text: p.PARTXT };
        this.app.setLocale(this.model.User.locale);
        // get server dist last commit hash, for testing
        this.app.__commitHash = FROM_ABAP.commitHash;

        this.app.debug(this.constructor.name, 'Logon User::', this.app.User);

        UIEvent.fireEvent('login', this.element, this.model);
      })
      .catch(error => {
        this.app.toastError(error);
      });
  }
}

@transient()
export class LoginModel {
  constructor(User) {
    this.User = User;

    this.validator = new Validator(this);
    //.ensure('User.username').required()
    //.ensure('User.password').required()
    //.ensure('User.locale').required();
  }
}
