import {EventAggregator} from 'aurelia-event-aggregator';
import {UIApplication} from '../../resources/index';
import {SuperAppView} from './superAppView';
import {Solution} from 'solution-finder/model';

export class SuperAppSolution extends SuperAppView {

  bizDocType = '';

  static inject = [EventAggregator, UIApplication, Solution];

  constructor(ea, app, solutionFinder) {
    super();

    this.app = app;
    this.solutionFinder = solutionFinder;
    ea.subscribe('ytplayer:init:getScript', payload => {
      let scriptElement = document.createElement('script');
      scriptElement.src = payload.data;
      document.querySelector('head').appendChild(scriptElement);
    });
  }

  activate(params, routeConfig, navigationInstruction) {
    super.activate(params, routeConfig, navigationInstruction);
    if (this.id > '499999999999') {
      // solution
      this.solutionFinder.symptom = {};
      if (this.id) {
        this.solutionFinder.getSolution(this.id)
          .then(() => {
            this.bizDoc.text = this.solutionFinder.id;
            this.bizDoc.href = this.solutionFinder.href;
            this.bizDoc.hrefText = this.solutionFinder.hrefText;
          });
      }
    }
    else {
      // symptom
      this.solutionFinder.solution.ES_SOLHEAD.SOLU_NO = false;
      for (let symptom of this.solutionFinder.searchResult.ET_SYMPTOM) {
        if (symptom.ISMNR === this.id) {
          this.solutionFinder.symptom = symptom;
          break;
        }
      }
    }
  }

}
