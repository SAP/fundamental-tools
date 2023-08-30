# Cloud extension example <!-- omit in toc -->

Assume the scenario in which Functional Consultant together with customer defined how one or more ABAP transactions with old UI could be replaced with more convenient and effective app.

In this example, app shall be provided to maintain Equipment, with Variant Characteristics, as alternative to old UI:

<img src="./assets/equipment-oldui.png" width="600px"/>

The new UI with same functionality ([live @ coevi76/plm3](http://coevi76/plm3) (SAP VPN url)) looks like this:

<img src="./assets/equipment-newui.jpg" width="600px"/>

The transition from old to new UI, using SAP Fundamental Library for ABAP, is done in 4 steps, providing four components of new cloud extension app: ABAP API, App Server, View Model and View.

Let build these four layers, with the little help of [`abap` CLI tool](https://www.npmjs.com/package/abap-api-tools):

- [ABAP API](#abap-api) exposed as a set of remote-enabled Function Modules (RFMs)
- [App server](#app-server-java-node-python), mapping ABAP API to server routes
- [View Model](#view-model-js), consuming server routes and implementing frontend logic (browser)
- [View](#view-html-or-js), rendering the View Model (browser)
- [Value Helps](#value-helps)
- [Low code by design](#low-code-by-design)
- [Deployment options](#deployment-options)

## ABAP API

Functional Consultant starts with *functional mockup*, describing bussiness functions to be provided in new UI. Together with ABAP developer BAPIs or other ABAP building modules are identified, providing required business functions. The functional mockup can be drawn on paper or old UI elements' screenshots can be used in Excel, Powerpoint etc. Tasks of this first step are:

- Clarify app functional requirementa and localize ABAP business logic
- Expose the business logic via remote-enabled Function Modules (ABAP API)
- Write ABAP API endpoints' names into `my-app.yaml` file (used later)

`my-app.yaml`

```yaml
equipment:
  - BAPI_EQUI_CHANGE # Change Equipment
  - BAPI_EQUI_CREATE # Create Equipment
  - BAPI_EQUI_CREATE_BY_REFERENCE # Anlegen Equipment mit Vorlageequipment
  - BAPI_EQUI_DISMANTLE # Install Equipment (Functional Location, Superior Equipment)
  - BAPI_EQUI_GETDETAIL # Read Equipment
  - BAPI_EQUI_GETLIST # Selection of Equipment List
  - BAPI_EQUI_GETSTATUS # Read (System-/User-)Status Equi
  - BAPI_EQUI_INSTALL # Install Equipment (Functional Location, Superior Equipment)
```

Cloud/web knowledge and skills are not mandatory here, it is regular ABAP development, like the ui will be implemented in ABAP.

## App Server (Java, Node, Python)

The next steps are server routes, exposing ABAP API. The example below is implemented with Python Flask, exposing ABAP API for Equipment maintenance app.

The NodeJS or Java code is almost identical and data mappings work the same way:

| ABAP      | Node                      | Python                | Example                                                                                                                                                                |
| --------- | ------------------------- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Variable  | Variable                  | Variable              |                                                                                                                                                                        |
| Structure | Plain JS object           | Python dictionary     | `{ INSTDATE: ”20180327”, EQUI: “1000485” …}`                                                                                                                           |
| Table     | Array of JS plain objects | Array of Python dicts | `[`<br>&nbsp;&nbsp;&nbsp;&nbsp;```{ INSTDATE: ”20180327”, EQUI: “1000485” …}```,<br>&nbsp;&nbsp;&nbsp;&nbsp;```{ INSTDATE: ”20200912”, EQUI: “1000486” …}``` … <br>`]` |

```python
# Equipment
@app.route('/equipment/<path:path>', methods=['POST'])
def equipment(path):
    try:
        req = json.loads(request.data)

        if path == 'get':
            res = client.call('BAPI_EQUI_GETDETAIL', req)
        elif path == 'getlist':
            res = client.call('BAPI_EQUI_GETLIST', req)
        elif path == 'change':
            res = client.call('BAPI_EQUI_CHANG', req)
        elif path == 'install':
            res = client.call('BAPI_EQUI_INSTALL', req)
        elif path == 'dismantle':
            res = client.call('BAPI_EQUI_DISMANTLE', req)
        else:
            raise Exception('not implemented: %s' % path)

        return to_json(res)

    except Exception as e:
        return serverError(e), 500
```

- App server is RFC connected with ABAP system and the programming model is therefore still ABAP, with ABAP data structures, only in another programming language.
- Nice opportunity for ABAP developers to start with NodeJS, Python or Java
- By default ABAP stateful, COMMIT BAPI can be invoked after CHANGE BAPI for example
- ABAP API adaptations, extensions, choreography, orchestration, caching etc. can be added here, covering industry or customer specific requirements
- The server logic sometimes need access to ABAP data stuctures at field level. `abap` CLI [call templates](../abap-api-tools/README.md#abap-function-module-call-template) can help here.

### View Model (JS)

Via server routes, ABAP data structures reach the View-Model. The programming language is now JavaScript and the business logic processing can be also here done the ABAP way. Calling BAPI COMMIT after BAPI CHANGE still possible for example, via server routes now.

- Modern object oriented JavaScript makes also this layer doable by ABAP developers interested in JavaScript
- One the same logic can run on app server or View Model level. With JavaScript servers, even the same code can be shifted back and forth, between app server and view model.

The model pattern depends on ABAP API structure and app requirements, may look like this:

```JavaScript
import { UIApp, UIHttp, UIUtils } from '../../resources/index';

export class Equipment {
  static inject = [UIApplication, UIHttpService];
  static __bizDocType = 'BUSEQUI';
  constructor(app, httpService) {
    this.app = app;
    this.httpService = httpService;
    this.reset();
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

  save() {
    // set X-fields
    let header = [
      'MANFACTURE',
      'MANMODEL',
      'MANPARNO',
      'MANSERNO',
      'MAINTPLANT',
      'OBJECTTYPE',
      'ABCINDIC',
      'WORK_CTR'
    ];
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

// get ...
```

JS files with View Model initializers of ABAP data structures can be used in app server or View Model logic, for fields' level processing.

```JavaScript
//
// INPUT PARAMETERS
//

// DATA_FLEET BAPI_FLEET Vehicle-Specific Data

/* eslint-disable key-spacing */
// prettier-ignore
DATA_FLEET = {
  CARD_NUM                      : '',  // Fuel card number
  CHASSIS_NUM                   : '',  // Chassis number
  DIM_UNIT_ISO                  : '',  // ISO code for unit of measurement
  ENGINE_CAP                    : 0,  // Engine capacity
  ENGINE_CYL                    : '',  // Number of cylinders
  ENGINE_POWER                  : 0,  // Power at specific number of revolutions per minute
  ENGINE_SNR                    : '',  // Engine serial number of manufacturer
  FLEET_LEN                     : 0,  // Maximum fleet object length
```


### View (HTML or JS)

HTML or JS Views comprise of generic ui components, grouped together into frontend layout elements.


![](assets/View.png)

ui components are bound to View Model data structures, which are ABAP data structures. Components' templates can be therefore generated using `abap` CLI [get](../abap-api-tools/README.md#abap-api-annotations-for-ui-elements) and [make](../abap-api-tools/README.md#ui-elements) commands and reused in Views, with or without adaptations:

```shell
abap make aurelia -c my-app # from the first ABAP API step above
```

`abap make` use is optional. Ui components can be manually coded from scratch and generated app components can be changed, like add/remove SU3 id, value input help etc.

- ABAP developers can build also this layer, by reusing (copy/paste) standard patterns for components positioning and grouping. Learning a bit more about HTML/JS, developers can start modifying standard patterns and buil their own.

- Standard ui components' templates (default ui configurations) can be pure HTML, pure JS or the combination of both. It depends on ui framework and standard usage pattern can be easy changed (custom ui configurations).

Example with input, datepicker and checkbox:

```html
<section class="fd-section">
    <ui-input value.bind="DATA_GENERAL.DISTR_CHAN" shlp.bind='{"type":"SH", "id":"CSH_TVTW"}'
        data-abap.bind='{"ddic":"CHAR", "type":"string", "length":"2", "mid":"VTW"}'
        label="Distribution Channel">
    </ui-input>

    <ui-checkbox value.bind="DATA_SPECIFIC.READ_CUREF" label="Referenced Configuration"></ui-checkbox>

    <ui-date date.bind="DATA_FLEET.EXPIRY_DATE" label="Validity end date"></ui-date>
</section>
```

More examples: [SAP-samples/node-rfc-samples/fundamental-tools](https://github.com/SAP-samples/node-rfc-samples/tree/main/fundamental-tools)

## Value Helps

Generic and custom Value Helps can be attched to any ui component using `shlp` custom attribute: [abap-value-help](../abap-value-help/README.md)

- Generated, adapted or built from scratch in design time

- Dynamically generated in run-time

```html
<!-- Fixed Domain Values -->
<ui-input data-abap.bind="{ddic:'CHAR', type:'string', length:1}" label="Partial/Final Confirmation"
  value.bind="serviceOrder.confirmation.FIN_CONF"
  shlp.bind="{type:'FV', id:'AUERU_VS'}"
></ui-input>

<!-- Check Tables -->
<ui-combo clear ddic-length="1" ddic-type="CHAR" mid="EQT" label="Equipment category"
  value.bind="equipment.ES_SPECIFIC.EQUICATGRY"
  shlp.bind="{type: 'CT', id: 'T370T'}"
></ui-combo>

<!-- Complex/Elementary Helps Search Helps -->
<ui-input ddic-length="18" ddic-type="CHAR" label="Equipment #"
  value.bind="installDetail.equiId"
  shlp.bind="{type: 'SH', id: 'EQUI', blacklist: 'SH EQUIR', autoselect: 'SH EQUIT'}"
></ui-input>
```

## Low code by design

Fully functional app shown below, is implemented with ca. 400 lines of code:

| App Component                 |     LoC |
| ----------------------------- | ------: |
| App Server (Node/Java/Python) |      20 |
| View Model (ES/TS)            |     213 |
| View (HTML)                   |     172 |
| **Total**                     | **405** |

Features:

- Equipment read/update
- Grouped and ungrouped Classifications/Characteristics read/update
- Attachments preview/upload/download

The implementation is under full developer's control, without any magic added by `abap` CLI and without run-time dependencies of this toolkit, except for inevitable Value Helps.

![App](assets/equipment-newui.jpg)

## Deployment options

Above mentioned components can be deployed on-premise or in the cloud, as follows

<img src="../doc/assets/deployments.png" width="640px"/>

