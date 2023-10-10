import {UIApplication, UIHttpService} from '../../resources/index';
import {Equipment} from './model';

export class EquipmentView {

  static inject = [UIApplication, UIHttpService, Equipment];

  routeTitle = '';

  constructor(app, httpService, equipment) {
    this.app = app;
    this.httpService = httpService;
    this.equipment = equipment;
  }

  activate(params, routeConfig, navigationInstruction) {
    this.routeTitle = routeConfig.title;
    this.equipment.get(params.id || '10000003');
  }
}
