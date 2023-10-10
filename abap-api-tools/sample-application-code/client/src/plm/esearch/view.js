import {bindable} from 'aurelia-framework';
import {UIApplication, UIHttpService} from '../../resources/index';

export class SearchView {

  @bindable searchString = 'Walze';
  @bindable searchDetails = false;

  static inject = [UIApplication, UIHttpService];

  constructor(app, httpService) {
    this.app = app;
    this.httpService = httpService;
  }

  search() {
    let payload = {
      IV_SEARCHSTRING: this.searchString,
      //IV_LANGU
      //IV_CATEGORY_ID
      IV_START_INDEX: 1,
      IV_PAGE_SIZE: 100,
      IV_WITH_DETAILS: this.searchDetails ? 'X' : ''
    };
    //console.log(payload);
    this.httpService.backend('/esearch', payload)
      .then(FROM_ABAP => {

        // console.log(FROM_ABAP)

      })
      .catch(error => {
        this.result = [];
        this.app.toastError(error);
      });
  }


}
