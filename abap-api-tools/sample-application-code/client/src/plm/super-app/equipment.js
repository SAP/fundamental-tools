import {UIApplication} from '../../resources/index';
import {SuperAppView} from './superAppView';
import {Equipment} from 'plm/equipment/model';

export class SuperAppEquipment extends SuperAppView {

  bizDocType = Equipment.__bizDocType;

  static inject = [UIApplication, Equipment];

  constructor(app, equipment) {
    super();

    this.app = app;
    this.equipment = equipment;
  }

  activate(params, routeConfig, navigationInstruction) {
    super.activate(params, routeConfig, navigationInstruction);
    if (this.id) {
      this.equipment.get(this.id)
        .then(() => {
          this.bizDoc.text = this.equipment.id;
          this.bizDoc.href = this.equipment.href;
          this.bizDoc.hrefText = this.equipment.hrefText;
        });
    }
  }
}
