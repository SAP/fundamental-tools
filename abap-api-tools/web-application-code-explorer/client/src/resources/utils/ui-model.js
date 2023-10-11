import {transient} from 'aurelia-framework';

@transient()
export class UIModel {

  constructor(validation) {
    //this.validation = validation.on(this);
  }

  validate() {
    //console.log('::uimodel validate')
    //return this.validation.validate();
  }

}
