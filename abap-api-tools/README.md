# abap api tools<!-- omit in toc -->

![NPM](https://img.shields.io/npm/l/abap-api-tools)

Command line tool for pattern based applications with ABAP/HANA systems.

- BAPI/RFM call templates ([What is BAPI/RFM?](https://sap.github.io/cloud-sdk/docs/java/features/bapi-and-rfc/bapi-and-rfc-overview/))
- ui components'with ABAP data annotations:
  - [Aurelia](http://aurelia.io/)
  - Angular, React and Vue by [SAP Fundamenal Library](https://sap.github.io/fundamental/)
  - Angular, React and Vue by [Microsoft FAST](https://www.fast.design/docs/introduction/)
  - UI5 web components for [React](https://sap.github.io/ui5-webcomponents-react/?path=/story/getting-started--page)
- [Building a pattern based app](https://github.com/SAP/fundamental-tools/blob/main/doc/app.md)

## Content<!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [ABAP Function Module call template](#abap-function-module-call-template)
  - [ABAP API annotations for ui elements](#abap-api-annotations-for-ui-elements)
  - [ui elements](#ui-elements)
- [Custom ui configurations](#custom-ui-configurations)
- [i18n](#i18n)
- [CLI API](#cli-api)
- [Known Issues](#known-issues)
- [Getting Support](#getting-support)
- [Contributing](#contributing)
- [License](#license)

## Installation

```shell
npm install -g abap-api-tools

abap
```

[SAP NWRFC SDK](https://support.sap.com/en/product/connectors/nwrfcsdk.html) binaries shall be installed on your notebook, for CLI connectivity to ABAP systems. Check [where to download](https://launchpad.support.sap.com/#/notes/2573790) and [how to install](https://github.com/SAP/node-rfc/blob/master/doc/installation.md#sap-nwrfc-sdk-installation).

Without [SAP NWRFC SDK](https://support.sap.com/en/product/connectors/nwrfcsdk.html), the `make` command and [custom ui configurations](#custom-ui-configurations) can be tested with [ABAP  annotations sample](https://github.com/SAP/fundamental-tools/tree/sample):

```shell
npm -g abap-api-tools

gh repo clone SAP/fundamental-tools sample -- --branch sample --single-branch
cd sample

abap make fundamental-ngx -c config/equipment
# check results in api/equipment folder
```

Using CLI from [docker container](https://github.com/SAP/fundamental-tools/tree/main/docker#abap-api-tools), only docker is required on your notebook:

```shell
gh repo clone SAP/fundamental-tools sample -- --branch sample --single-branch
cd sample

docker run --name cli -v /pathTo/sample:/work abap-api-tools
docker exec cli abap make ui5-react -c config/equipment
```

## Usage

Create project folder and maintain ABAP system(s) destinations in `sapnwrfc.ini` file, for example:

`sapnwrfc.ini`

```ini
DEFAULT
# TRACE=3

# user/password
DEST=MME
USER=demo
PASSWD=welcome
ASHOST=10.68.110.51
SYSNR=00
CLIENT=620
LANG=EN

# single sign-on
DEST=MME_SSO
SNC_LIB=C:\Program Files\SAP\FrontEnd\SecureLogin\libsapcrypto.dll
SNC_PARTNERNAME=p/secude:CN=MME, O=SAP-AG, C=DE
ASHOST=coevi51
SYSNR=20
CLIENT=71
```

ABAP API for Value Input Help annotations, if exposed in backend system (see [ABAP helpers](https://github.com/SAP/fundamental-tools/tree/master/abap-helpers)), shall be defined in `config/system.yaml` file. Use the same destination name like in `sapnwrfc.ini`:

```yaml
MME:
  search_help_api:
    determine: YWS_SHLP_DETERMINE
    dom_values: YWS_SHLP_DOMVALUES_GET
```

Run `abap` command, to show help:

```shell
abap

Commands:
  abap call <dest> <rfm...>  ABAP function module call template
  abap get <dest> [rfm...]   ABAP API annotations
  abap make <ui> [rfm...]    Create ui elements
  abap cp <ui> [to]          Copy ui configuration to local folder ./config
  abap rm <ui>               Remove local ui configuration

Options:
  --help     Show help
  --version  Show version number
```

or subcommand help:

```shell
abap call
```

## Examples

### ABAP Function Module call template

NodeJS call template of a single ABAP function module.

Echoed to console or saved to local `js` file if the `-s` option is used:

```shell
abap call MME stfc_structure -s
```

The call template provides a source code for ABAP function module invocation, with all parameters and their data structures:

- Optional parameters are commented and initialized with ABAP default values
- Required parameters are initialized with empty string, buffer or zero number
- Conversion Exit ("ALPHA Exit") and User Profile parameter (SU3) are mentioned in parameter or field comment

More than one ABAP function module

```shell
abap call MME stfc_connection stfc_performance
```

### ABAP API annotations for ui elements

```shell
abap get MME stfc_connection stfc_performance bapi_user_get_detail
```

Call templates are now saved in `api` folder and annnotations for ui elements in `api/yaml`:

```shell
api
├── bapi_user_get_detail.js
├── stfc_connection.js
├── stfc_performance.js
└── yaml
    ├── alpha.yaml
    ├── fields.yaml
    ├── helps.yaml
    ├── parameters.yaml
    ├── stat.yaml
    └── usage.yaml
```

Use `-o` option for output folder other than the default `api`.

Using `-c|--catalog` option a path to yaml file with ABAP function modules' names can be provided:

`my-api.yaml`

```yaml
transferOrder:
  - BAPI_WHSE_TO_CREATE_STOCK
  - BAPI_WHSE_TO_GET_DETAIL
  - BAPI_WHSE_TO_GET_LIST
FI:
  - BAPI_ACC_DOCUMENT_POST
  ```

```shell
abap get MME -c my-api # .yaml extension optional
```

Call templates and annotations are saved in respective sub-folders:

```shell
api
├── FI
│   ├── bapi_acc_document_post.js
│   └── yaml
│       ├── alpha.yaml
│       ├── fields.yaml
│       ├── helps.yaml
│       ├── parameters.yaml
│       ├── stat.yaml
│       └── usage.yaml
└── transferOrder
    ├── bapi_whse_to_create_stock.js
    ├── bapi_whse_to_get_detail.js
    ├── bapi_whse_to_get_list.js
    └── yaml
        ├── alpha.yaml
        ├── fields.yaml
        ├── helps.yaml
        ├── parameters.yaml
        ├── stat.yaml
        └── usage.yaml
```

### ui elements

After annotations are saved, ui elements can be created:

```shell
abap make fudamental-ngx -c my-api # .yaml extension optional
```

Now we have one `js` file with a call template one `html` file with ui components, for each ABAP function module:

```shell
bapi_whse_to_get_detail.js
bapi_whse_to_get_detail.html
```

The `html` file contains ui elements, for each BAPI/RFM parameter and structure/table data field.

Annoted with:

- Default binding
- Data type, length
- Texts (label, caption)
- Currency or quantity reference fields (unit of measure, currency)
- Value Input Help: field domain values, check table, elementary or complex search help
- SU3 parameters (User SET/GET parameters)

Aurelia example:

```html
<ui-input bind="DATA_GENERAL.DISTR_CHAN" shlp.bind="{type: 'SH', id: 'CSH_TVTW'}"
    data-abap.bind="{type:'CHAR', mid:'VTW', length:'2'}"
    label="Distribution Channel">
</ui-input>

<ui-checkbox value.bind="DATA_SPECIFIC.READ_CUREF" label="Referenced Configuration"></ui-checkbox>

<ui-date date.bind="DATA_FLEET.EXPIRY_DATE" label="Validity end date"></ui-date>

<ui-combo bind="DATA_GENERAL.COSTCENTER" shlp.bind="{type: 'CT', id: 'CSKS'}"
    data-abap.bind="{type:'CHAR', alpha:'ALPHA', mid:'KOS', length:'10'}"
    label="Cost Center">
</ui-combo>

<ui-combo bind="INSPROVIDER_X.IV_DISPATCH" shlp.bind="{type: 'FV', id: 'KUEVERS'}"
    data-abap.bind="{type:'CHAR', length:'1'}"
    label="IS-H: Send IV Request Only if Diagnosis Is Maintained">
</ui-combo>
```

## Custom ui configurations

Using two configuration files, ABAP data types can be mapped to custom ui components, of practically any ui framework.

To modify existing ui configuration, first copy that configuration to local config folder:

```shell
abap cp ui5-react my-ui5

tree config
config
├── my-ui5-abap.yaml
└── my-ui5.yaml
```

The file with `-abap` suffix defines mapping of ABAP data types to ui components:

`my-ui5-abap.yaml`

```yaml
# Date field (YYYYMMDD) stored as char(8)
DATS:
  type: string
  format: date
  tag: datepicker
  initial: >-
    ""
  comment: YYYYMMDD
```

ABAP `DATS` datatype is here mapped to `datepicker` ui component.

The ui component layout is defined in the ui config file without `abap` suffix:

`my-ui5.yaml`

```yaml
datepicker: >-
  <FormItem label="~label">
      <DatePicker value={this.~bind}/>
  </FormItem>
```

You can edit both config files and use them with `make` command:

```shell
abap make my-ui5 -c my-api
```

Elements with tilde prefix `~` are placeholders for texts, data binding and value input helps, described in standard ui configuration `yaml` file.

Custom configuration with the same name as standard one, if present in local folder, is used instead of the standard configuration. To go back to standard, remove it from `config` folder or run:

```shell
abap rm my-ui5
```

## i18n

Translations' texts are saved in `texts.yaml`, for the language used in `get` command:

```shell
abap get MME -c my-api # default lang = en
```

`texts.yaml`

```yaml
en: City postal code
short:
  en:
    FIELDTEXT: City postal code
    REPTEXT: Postl Code
    SCRTEXT_L: Postal Code
    SCRTEXT_M: Postal Code
    SCRTEXT_S: Postl Code
```

Texts in additional languages are added using `-t|--text-only` option:

```shell
abap get MME -c my-api -t de
```

`texts.yaml`

```yaml
de: Postleitzahl des Orts
en: City postal code
short:
  de:
    FIELDTEXT: Postleitzahl des Orts
    REPTEXT: PLZ
    SCRTEXT_L: Postleitzahl
    SCRTEXT_M: Postleitzahl
    SCRTEXT_S: PLZ
  en:
    FIELDTEXT: City postal code
    REPTEXT: Postl Code
    SCRTEXT_L: Postal Code
    SCRTEXT_M: Postal Code
    SCRTEXT_S: Postl Code
```

## CLI API

Your tools and applications can use CLI API `call` and `get` methods, to access ABAP annotations and call templates.

Either the destination id or connection parameters can be provided, together with one single RFM name or array of RFM names.

Check [unit tests](https://github.com/SAP/fundamental-tools/tree/main/abap-api-tools/tests) for data structures.

```ts
import { CliApi, CliResult, RfcConnectionParameters } from "abap-api-tools";

const cp: RfcConnectionParameters = {
  user: "demo",
  passwd: "welcome",
  ashost: "11.12.13.14",
  sysnr: "01",
  client: "321",
  lang: "de",
};

(async () => {
  let R:CliResult;

  const api = new CliApi();

  R = await a.get(cp, ["stfc_connection", "stfc_structure"]); // annotations only

  R = await a.call("MME", "stfc_connection");                 // annotations and call templates

})();
```

## Known Issues

Click [here](https://github.com/SAP/fundamental-tools/issues) to view the current issues.

## Getting Support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-tools/issues/new).

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](https://github.com/SAP/fundamental-tools#contributing) documentation for contribution guidelines.

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](https://github.com/SAP/fundamental-tools#license).
