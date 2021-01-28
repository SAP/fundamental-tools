# abap api tools<!-- omit in toc -->

[![REUSE status](https://api.reuse.software/badge/github.com/SAP/fundamental-tools)](https://api.reuse.software/info/github.com/SAP/fundamental-tools)

Command line tool for pattern based applications with ABAP/HANA systems and any ui framework.

- BAPI/RFM call templates
- ui components'with ABAP data annotations:
  - [Aurelia](http://aurelia.io/)
  - Angular, React and Vue by [SAP Fundamenal Library](https://sap.github.io/fundamental/)
  - Angular by [Microsot FAST](https://www.fast.design/docs/introduction/)
  - UI5 web components for [React](https://sap.github.io/ui5-webcomponents-react/?path=/story/getting-started--page)

## Content<!-- omit in toc -->

- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
  - [ABAP Function Module call template](#abap-function-module-call-template)
  - [ABAP API annotations for ui elements](#abap-api-annotations-for-ui-elements)
  - [ui elements](#ui-elements)
- [Custom ui configurations](#custom-ui-configurations)
- [Known Issues](#known-issues)
- [Getting Support](#getting-support)
- [Contributing](#contributing)
- [License](#license)

## Installation

Check [prerequisites](https://github.com/SAP/node-rfc#prerequisites) and install globally or locally:

```shell
npm install -g abap-api-tools
```

## Usage

Create project folder and maintain ABAP system(s) destinations in `sapnwrfc.ini` file:

`sapnwrfc.ini`

```ini
# TRACE=3

DEST=MME
USER=demo
PASSWD=welcome
ASHOST=coevi51
SYSNR=00
CLIENT=620
LANG=EN
```

ABAP API for Value Input Help annotations, if implemented in backend system (see [ABAP helpers](https://github.com/SAP/fundamental-tools/tree/master/abap-helpers)), shall be maindefined in `config/system.yaml` file. Use the same destination name like in `sapnwrfc.ini`:

```yaml
MME:
  search_help_api:
    determine: YWS_SHLP_DETERMINE
    dom_values: YWS_SHLP_DOMVALUES_GET
```

Run `abap` command to show help:

```shell
abap

Commands:
  abap call <dest> <rfm...> ABAP function module call template
  abap get <dest> [rfm...]  ABAP API annotations for ui elements
  abap make <ui> [rfm...]   Create ui elements for ABAP API
  abap cp <ui>              Copy ui configuration to local config folder
  abap rm <ui>              Remove local ui configuration

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

NodeJS call template of single ABAP function module.

Echoed to console or saved to `bapi_user_get_details.js` when the `-s` option given:

```shell
abap call MME stfc_connection -s
```

More than one ABAP function module

```shell
abap call MME stfc_connection stfc_performance
```
### ABAP API annotations for ui elements

```shell
abap get MME stfc_connection stfc_performancr bapi_user_get_detail
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

Using `-c` option a path to yaml file with ABAP function modules' names can be provided:

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

Now we have one `js` file and one `html` file for each ABAP function module:

```shell
bapi_whse_to_get_detail.js
bapi_whse_to_get_detail.html
```

The **js file** is ABAP function module call template, with all parameters and data structure reset values:

- Optional parameters are commented and initialized with ABAP default values
- Required parameters are initialized with standard defaults, like empty string or zero number
- Conversion ("ALPHA") exit, if attached to data element, is mentioned in data element comment

The **html file** contains ui component template, for each BAPI/RFM parameter and structure/table data field. Components are annoted with:

- Data type, length
- Texts (label, caption)
- Currency or quantity reference fields (unit of measure, currency)
- Value Input Help: field domain values, check table, elementary or complex search help
- SU3 parameters (User SET/GET parameters)

Ui components look like this (Aurelia example):

```html
<ui-input value.bind="DATA_GENERAL.DISTR_CHAN" shlp.bind='{type:"SH", id:"CSH_TVTW"}'
    data-abap.bind='{type:"CHAR",  length:"2", mid:"VTW"}'
    label="Distribution Channel">
</ui-input>

<ui-checkbox value.bind="DATA_SPECIFIC.READ_CUREF" label="Referenced Configuration"></ui-checkbox>

<ui-date date.bind="DATA_FLEET.EXPIRY_DATE" label="Validity end date"></ui-date>

<ui-combo value.bind="DATA_GENERAL.COSTCENTER" shlp.bind='{type:"CT", id:"CSKS"}'
    data-abap.bind='{type:"CHAR", length:"10", mid:"KOS", alpha: "ALPHA"}'
    label="Cost Center">
</ui-combo>

<ui-combo value.bind="DATA_SPECIFIC.EQUICATGRY" shlp.bind='{type:"CT", id:"T370T"}'
    data-abap.bind='{type:"CHAR", length:"1", mid:"EQT"}'
    label="Equipment category">
</ui-combo>
```

## Custom ui configurations

Standard ui components' templates can be changed using local ui configuration.

Using copy command, the `ui5-react` configuration for example is copied to local config folder:

```shell
abap cp ui5-react

tree config
config
├── ui5-react-abap.yaml
└── ui5-react.yaml
```

The configuration file with `-abap` suffix defines the mapping of ABAP data types to ui components:

`ui5-react-abap.yaml`

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

ABAP `DATS` datatype shall be here represented by `datepicker` ui component.

The ui component layout is defined in the ui config file without `abap` suffix:

`ui5-react.yaml`

```yaml
datepicker: >-
  <FormItem label="~label">
      <DatePicker value={this.~bind}/>
  </FormItem>
```

Using these two config files, you can map ABAP data types to your own ui components and use practically any ui framework.

Elements with tilde prefix `~` are placeholders for texts, data binding and value input helps, documented in `yaml` files.

Custom configuration in local config folder, if present, is used instead of the standard configuration. To go back to standard, remove it from `config` folder or run:

```shell
abap rm ui5-react
```

## Known Issues

Click [here](https://github.com/SAP/fundamental-toolset/issues) to view the current issues.

## Getting Support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-toolset/issues/new).

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](https://github.com/SAP/fundamental-tools#contributing) documentation for contribution guidelines.

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](https://github.com/SAP/fundamental-tools#license).
