
## Building an app<!-- omit in toc -->

Pattern-based app comprises of four levels:

- ABAP backend logic exposed as a set of remote-enabled Function Modules (RFMs)
- Java/NodeJS/Python App Server like express, Flask, Jetty etc. mapping server routes to ABAP API
- ES/TS View Model, invoking server routes
- HTML View, rendering the View Model

Let build them from scratch.

- [Step 1: ABAP API Annotations](#step-1-abap-api-annotations)
- [Step 2: App Server Model](#step-2-app-server-model)
- [Step 3: View Model](#step-3-view-model)
- [Step 4: View (HTML)](#step-4-view-html)
- [ABAP API + Server Model + View Model + View = App](#abap-api--server-model--view-model--view--app)

### Step 1: ABAP API Annotations

Preparation:

- Maintain ABAP system RFC destination in `sapnwrfc.ini`
- Maintain RFM names in local config file

`sapnwrfc.ini`

```ini
# TRACE=3

MME
DEST=MME
USER=demo
PASSWD=welcome
ASHOST=coevi51
SYSNR=00
CLIENT=620
LANG=EN
```

`myapp.yaml`

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

### Step 2: App Server Model

Manually implemented.

The example below shows Python Flask server, exposing ABAP API for Equipment maintenance app. NodeJS or Java implementations looks almost identical:

```python
# Equipment
@app.route('/equipment/<path:path>', methods=['POST'])
def equipment(path):
    try:
        payload = json.loads(request.data)

        if path == 'get':
            result = client.call('BAPI_EQUI_GETDETAIL', payload)
        elif path == 'getlist':
            result = client.call('BAPI_EQUI_GETLIST', payload)
        elif path == 'change':
            result = client.call('BAPI_EQUI_CHANG', payload)
        elif path == 'install':
            result = client.call('BAPI_EQUI_INSTALL', payload)
        elif path == 'dismantle':
            result = client.call('BAPI_EQUI_DISMANTLE', payload)
        else:
            raise Exception('not implemented: %s' % path)

        return to_json(result)

    except Exception as e:
        return serverError(e), 500
```

The app server programming model is by default ABAP stateful, ie. COMMIT BAPI can be invoked after CHANGE BAPI for example. ABAP API choreography, orchestration, caching, harmonization can be also implemented here, if needed.

If the server logic operates with some ABAP data stuctures at field level, the `abap get` command can generate ABAP API call templates in local `config/equipment` folder. No need to open SE80 or SE37 in ABAP system, to check ABAP API details:

```shell
abap get MME -c myapp
```

See also: [abap-api-tools/templates](../abap-api-tools/README.md#abap-function-module-call-template)

### Step 3: View Model

Implemented manually.

The frontend works with ABAP data structures, in JavaScript JSON format. The model pattern depends on ABAP API structure and app requirements and may look like this:

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

### Step 4: View (HTML)

Run the `abap ui` command to get ui components annotated with ABAP API metadata, with default bidirectional bindings to ABAP API data fields:

```shell
abap ui aurelia -c myapp
```

See also: [abap-api-tools: ui elements annotations](../abap-api-tools/README.md#abap-api-annotations-for-ui-elements)

The output HTML and JavaScript files are written in a data model sub-directory (default: `api`), for example:

```
abap-api-tools/api/equipment
├── bapi_equi_change.html
├── bapi_equi_change.js
├── bapi_equi_create.html
├── bapi_equi_create.js
...
```

HTML files contain UI components annotated with default bi-directional bindings to ABAP data model and with custom-attributes for:

- Data type, length
- Texts (label, caption)
- Unit of measure
- Value Input Help: field domain values, check tables, elementary and complex search helps
- SU3 parameters (User SET/GET parameters)

Attributes can be modified, added or removed manually, from any UI element, no matter of generator default output.

HTML files look like:

```html
<!-- prettier-ignore -->
<ui-input value.bind="DATA_GENERAL.DISTR_CHAN" shlp.bind='{"type":"SH", "id":"CSH_TVTW"}'
    data-abap.bind='{"ddic":"CHAR", "type":"string", "length":"2", "mid":"VTW"}'
    label="Distribution Channel">
</ui-input>

<!-- prettier-ignore -->
<ui-checkbox value.bind="DATA_SPECIFIC.READ_CUREF" label="Referenced Configuration"></ui-checkbox>

<!-- prettier-ignore -->
<ui-date date.bind="DATA_FLEET.EXPIRY_DATE" label="Validity end date"></ui-date>

<!-- prettier-ignore -->
<ui-combo value.bind="DATA_GENERAL.COSTCENTER" shlp.bind='{"type":"CT", "id":"CSKS"}'
    data-abap.bind='{"ddic":"CHAR", "type":"string", "length":"10", "mid":"KOS"}' alpha-exit="ALPHA"
    label="Cost Center">
</ui-combo>

<!-- prettier-ignore -->
<ui-combo value.bind="DATA_SPECIFIC.EQUICATGRY" shlp.bind='{"type":"CT", "id":"T370T"}'
    data-abap.bind='{"ddic":"CHAR", "type":"string", "length":"1", "mid":"EQT"}'
    label="Equipment category">
</ui-combo>
```

JS files with View Model initializers of ABAP data structures look like:

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
  CONSUMP_MOVE                  : '',  // Indicator Consumption Recording: Material Movement
  CONSUMP_TOL                   : '',  // Indicator Consumption Recording: Permitted Tolerances
  DIM_UNIT                      : '',  // Unit of length
  DIM_UNIT_ISO                  : '',  // ISO code for unit of measurement
  ENGINE_CAP                    : 0,  // Engine capacity
  ENGINE_CYL                    : '',  // Number of cylinders
  ENGINE_POWER                  : 0,  // Power at specific number of revolutions per minute
  ENGINE_SNR                    : '',  // Engine serial number of manufacturer
  ENGINE_TYPE                   : '',  // Engine type
  EXPIRY_DATE                   : '',  // Validity end date
  FLEET_HGT                     : 0,  // Maximum fleet object height
  FLEET_LEN                     : 0,  // Maximum fleet object length
```

HTML UI components can be copy/pasted to your app layouts and views, with or withot modifications. Components can be of also written from scratch, without using this toolset.

```html
<!-- prettier-ignore -->
<section class="fd-section">
    <!-- prettier-ignore -->
    <ui-input value.bind="DATA_GENERAL.DISTR_CHAN" shlp.bind='{"type":"SH", "id":"CSH_TVTW"}'
        data-abap.bind='{"ddic":"CHAR", "type":"string", "length":"2", "mid":"VTW"}'
        label="Distribution Channel">
    </ui-input>

    <!-- prettier-ignore -->
    <ui-checkbox value.bind="DATA_SPECIFIC.READ_CUREF" label="Referenced Configuration"></ui-checkbox>

    <!-- prettier-ignore -->
    <ui-date date.bind="DATA_FLEET.EXPIRY_DATE" label="Validity end date"></ui-date>
</section>
```

### ABAP API + Server Model + View Model + View = App

Fully functional app, shown below, implemented with ca. 400 lines of code:

| App Component                   |     LoC |
| ------------------------------- | ------: |
| Server Model (Node/Java/Python) |      20 |
| View (HTML)                     |     172 |
| View Model (ES/TS)              |     213 |
| **Total**                       | **405** |

Features:

- Equipment display/update
- Grouped and ungrouped Classifications/Characteristics display/update
- Attachments preview/upload/download

The implementation is under full developer's control, without any magic added by this toolset.

![](assets/Equipment.jpg)
