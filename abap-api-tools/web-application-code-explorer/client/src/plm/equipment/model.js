import { UIApplication, UIHttpService, UIUtils, UITreeOptions } from '../../resources/index';
import { Mohn } from '../../resources/data/test/treeListLocations';

export class Equipment {
  static inject = [UIApplication, UIHttpService];

  static __bizDocType = 'BUSEQUI';

  constructor(app, httpService) {
    this.app = app;
    this.httpService = httpService;
    this.reset();
  }

  reset() {
    this.selection = {};
    this.url = {};
    this.ES_HEADER = {};
    this.ES_SPECIFIC = {};
    this.Attachments = [];
    this.Characteristics = [];
    this.image = {};
    this.DMS = false;
    this.KPI = [];
    this.list = [];
  }

  getlist() {
    this.list = [];
    return this.httpService
      .backend('/equipment/getlist', {
        IV_PLANT: '1000'
      })
      .then(FROM_ABAP => {
        this.list = FROM_ABAP.ET_EQUIPMENT;
      })
      .catch(error => {
        this.reset();
        this.app.toastError(error);
      });
  }

  get(id = null) {
    if (id) this.selection.EQUIID = id;
    return this.httpService
      .backend('/equipment/get', {
        IV_EQUIID: this.selection.EQUIID,
        IV_CHARACTERISTICS: 'X',
        IV_DOCUMENT: 'X',
        IV_WITH_TIMESTATS: 'X'
      })
      .then(FROM_ABAP => {
        // header
        this.ES_HEADER = FROM_ABAP.ES_HEADER;
        this.ES_SPECIFIC = FROM_ABAP.ES_SPECIFIC;

        // clone structures for X-fields change detection
        this.IS_HEADER = UIUtils.abapStructClone(this.ES_HEADER);
        this.IS_SPECIFIC = UIUtils.abapStructClone(this.ES_SPECIFIC);

        // user status
        this.ET_STATUS = FROM_ABAP.ET_USER_STATUS;

        // DMS Attachments
        this.Attachments = FROM_ABAP.ET_DOCUMENT;

        //// get the image
        //if (image) {
        //  this.httpService.backend(`/document/download/${image.FILE_ID}?mime_type=${image.MIMETYPE}`)
        //    .then(IMAGE => {
        //      //this.Image = {
        //      //  imageMimeType: mimeType,
        //      this.image.content = IMAGE.EV_CONTENT;
        //      //}
        //    })
        //    .catch(error => {
        //      this.app.toastError(error);
        //    });
        //}

        // its url
        this.href = this.app.webGuiUrl('IE03', false, this.selection.EQUIID);
        this.hrefText = this.IS_HEADER.DESCRIPT + ' (' + this.selection.EQUIID + ')';

        // Characteristics todo: optimize
        this.Characteristics = [];

        // add grouped characteristics
        for (let chGroup of FROM_ABAP.ET_CHARACT_GROUP) {
          this.addCharactGroup(FROM_ABAP.ET_CHARACTERISTICS, chGroup.CHARACT_GROUP, chGroup.CHARACT_GROUP_NAME);
        }

        // add ungrouped characteristics
        this.addCharactGroup(FROM_ABAP.ET_CHARACTERISTICS, '', 'Ungrouped');

        // let the View update
        // this.app.toastSuccess(`Equipment found: ${this.selection.EQUIID}`);

        // mttr/mtbf kpi
        this.KPI = [];
        if (this.IS_HEADER.START_FROM) {
          if (FROM_ABAP.ET_RESULT.length) {
            this.KPI = [
              { id: 'BMON', name: 'No. of breakdowns reported in month', value: '' },
              { id: 'TBR', name: 'Time between repairs', value: '' },
              { id: 'BACT', name: 'No. of actual breakdowns', value: '' },
              { id: 'MTBR', name: 'Mean time between repairs ', value: '' },
              { id: 'TLDM', name: 'Total length of downtime in month', value: '' },
              { id: 'MTTRM', name: 'Mean Time To Repair in Month', value: '' }
            ];
            let result = FROM_ABAP.ET_RESULT[0];
            for (let line of this.KPI) {
              if (line.id === 'BMON') line.value = result.NBDEFF;
              else if (line.id === 'TBR') line.value = result.STBRHRS;
              else if (line.id === 'BACT') line.value = result.SNBDREP;
              else if (line.id === 'TLDM') line.value = result.STTRHRS;
            }
            for (let line of this.KPI) {
              if (line.id === 'MTBR') if (result.SNBDREP) line.value = result.STBRHRS / result.NBDEFF;
              if (line.id === 'TLDM') if (result.SNBDREP) line.value = result.STBRHRS / result.SNBDREP;
              if (line.id === 'MTTRM') if (result.NBDEFF) line.value = result.STTRHRS / result.NBDEFF;
              if (line.id !== 'BMON' && line.id !== 'BACT') {
                line.value += ' H';
              }
            }
          }
        }
      })

      .catch(error => {
        this.reset();
        this.app.toastError(error);
      });
  }

  addCharactGroup(ET_CHARACTERISTICS, groupId, groupName) {
    let chlist = [];

    // add group
    for (let ch of ET_CHARACTERISTICS) {
      if (ch.CHARACT_GROUP === groupId) {
        ch.NUMBER_DIGITS -= ch.NUMBER_DECIMALS; // adapt for MNUMBER :-)
        chlist.push(ch);
      }
    }

    if (chlist.length) {
      this.Characteristics.push({
        groupId: groupId ? groupId : 'GROUPID',
        groupDesc: groupName,
        CHARLIST: chlist
      });
    }
  }

  save() {
    // structures are identical, set X-fields for header and specific
    let header = ['MANFACTURE', 'MANMODEL', 'MANPARNO', 'MANSERNO', 'MAINTPLANT', 'OBJECTTYPE', 'ABCINDIC', 'WORK_CTR'];
    let specific = ['EQUICATGRY', 'READ_FLOC'];
    this.IS_HEADER_X = UIUtils.abapStructDiff(this.ES_HEADER, this.IS_HEADER, header);
    this.IS_SPECIFIC_X = UIUtils.abapStructDiff(this.ES_SPECIFIC, this.IS_SPECIFIC, specific);
    // characteristics
    let itChar = [];
    for (let chGroup of this.Characteristics) {
      for (let ch of chGroup.CHARLIST) {
        itChar.push({
          CLASS: ch.CLASS,
          CHARACT: ch.NAME_CHAR,
          VALUE: ch.VALUE,
          VALUE_FROM: ch.VALUE_FROM,
          VALUE_TO: ch.VALUE_TO
        });
      }
    }

    return this.httpService
      .backend('/equipment/change', {
        IV_EQUIID: this.selection.EQUIID,
        IS_HEADER: this.ES_HEADER, // changed data in ES_
        IS_HEADER_X: this.IS_HEADER_X,
        IS_DATA_SPECIFIC: this.ES_SPECIFIC, // changed data in ES_
        IS_DATA_SPECIFIC_X: this.IS_SPECIFIC_X,
        IT_CHARACTERISTICS: itChar
      })
      .then(FROM_ABAP => {
        this.app.toastSuccess({ type: 'success', message: `Equipment saved: ${this.selection.EQUIID}` });
      })
      .catch(error => {
        this.app.toastError(error);
      });
  }
}
