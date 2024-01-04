# ABAP Value Help <!-- omit in toc -->

[![npm](https://img.shields.io/npm/v/abap-value-help)](https://www.npmjs.com/package/abap-value-help)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM)
[![REUSE status](https://api.reuse.software/badge/github.com/SAP/fundamental-tools)](https://api.reuse.software/info/github.com/SAP/fundamental-tools)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)

Generic Value Helps for [conventions' based applications](https://github.com/SAP/fundamental-tools/blob/main/doc/app.md), supported by [Fundamental Library for ABAP](https://github.com/SAP/fundamental-tools)

- ABAP API, well-known to SAPGUI developers:
  - ABAP Fixed Domain Values (FV)
  - ABAP Elementary and complex Search Helps (SH)
  - ABAP Check Tables (CT, CH)
  - Custom value helps

- [Installation](#installation)
- [Usage](#usage)
  - [Dynamic Value Help dialog](#dynamic-value-help-dialog)
  - [Static Value Help dialog](#static-value-help-dialog)
- [Components](#components)
  - [ABAP API](#abap-api)
  - [Server](#server)
  - [View-Model and View](#view-model-and-view)
- [Known Issues](#known-issues)
- [Getting Support](#getting-support)
- [Contributing](#contributing)

## Installation

```shell
npm install abap-value-help
```

ABAP API: [doc/abap](https://github.com/SAP/fundamental-tools/blob/main/abap-value-help/doc/abap)

## Usage

As a server runtime component, exposing routes for Value Helps generic customn attribute `shlp`. More info in SCN blog: [Generic ABAP Value Helps using Fundamental Library for ABAP and Web Components](https://blogs.sap.com/2021/03/02/generic-abap-value-helps-powered-by-fundamental-library-for-abap-and-web-components/)



- Expose generic Value Help routes: [#server](#server)

- Register generic Value Help dialog in your application: [#view-model-and-view](#view-model-and-view)

- Custom attribute `shlp` is already added to ui elements pre-fabricated by [abap-api-tools](https://github.com/SAP/fundamental-tools/tree/main/abap-api-tools). The attribute can be removed, changed or added to any other input, radio or combo ui element, like:

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
  shlp.bind="{type: 'SH', id: 'EQUI', blocklist: 'SH EQUIR', autoselect: 'SH EQUIT'}"
></ui-input>
```

### Dynamic Value Help dialog

Custom attribute will add Search Help icon input addon and create and open the Search Help dialog on user request. Input ui component is updated with the Search Help dialog result:

![dialog](https://raw.githubusercontent.com/SAP/fundamental-tools/main/abap-value-help/doc/assets/ValueInputHelpsDialog.jpg)

Dynamically created dialog has two restrictions:

- Some elementary Value Helps return search errors, like "Dynpro sent in background ...".
  Array of their id-s should be passed via `shlp.blocklist`, as shown above, to prevent their usage.
  The "discovery" of these non-working Value Helps, requires manual or automatic test.

- Value Help selection parameters lack Value Helps for themselves

### Static Value Help dialog

Static Value Help dialogs come to the rescue. Automatically generated in design-time, they are activated using the same custom attribute and do not have above mentioned restrictions. They do have two more advantages:

- Can be manually fine-tuned, functionally and visually
- All Value Helps are automatically tested by [abap-api-tools](https://github.com/SAP/fundamental-tools/tree/main/abap-api-tools) generator. In case of search errors, the block-list attribute is attached to non-working Helps

Static Value Help dialogs are generated using [abap-api-tools](https://github.com/SAP/fundamental-tools/blob/main/abap-api-tools/README.md) with `-h` option.

```shell
abap get MME -c config/equipment -h

abap make aurelia -c config/all -h
```

The `get` command will create Value Help descriptors [helps.yaml and descriptors.yaml](https://github.com/SAP/fundamental-tools/tree/main/abap-api-tools/api/equipment/yaml) and `make` command will generate static Value Help dialogs: [api/equipment/valueHelps](https://github.com/SAP/fundamental-tools/tree/main/abap-api-tools/api/equipment/valueHelps)

## Components

Value Help is enabled for the ui component by binding custom attribute `shlp` to Value Help id like  `{type: 'SH', id: 'IFLM'}`:

```html
 <ui-input ddic-length="40" ddic-type="CHAR" label="Functional Location Label"
  value.bind="equipment.ES_SPECIFIC.READ_FLOC"
  shlp.bind="{type: 'SH', id: 'IFLM'}" mid="IFL">
</ui-input>
```

It turns the ui component:

<img src="https://raw.githubusercontent.com/SAP/fundamental-tools/main/abap-value-help/doc/assets/input.png" width="440px">

into Value Help enabled ui component:

<img src="https://raw.githubusercontent.com/SAP/fundamental-tools/main/abap-value-help/doc/assets/input-help.png" width="440px">

On Value Help user request (keyboard or click on icon), the Value Help dialog is presented, to capture the selection criteria (user input). The selection criteria is then passed to Value Help generic search service and the search result returned back to the dialog. User can cancel or confirm one search result value, to be captured as ui component input.

Combo box is the default ui representation of data elements with Fixed Domain Values or Check Table (CT) Value Input type. Instead of the dialog, value list coming from the same generic ABAP API is shown in a drop-down:

<img src="https://raw.githubusercontent.com/SAP/fundamental-tools/main/abap-value-help/doc/assets/combo.png" width="440px"/>

Generic ABAP Value Helps are implemented by four common layers of [pattern based applications](https://github.com/SAP/fundamental-tools/blob/main/doc/app.md)

### ABAP API

Generic ABAP API exposes:

- Value Help descriptors, used for dynamic selection forms' creation
- Search service, returning the search result based on selection criteria (user input)

[API example](https://github.com/SAP/fundamental-tools/tree/main/abap-value-help/doc/abap)

### Server

- [client.js](https://github.com/SAP/fundamental-tools/blob/main/abap-value-help/doc/server/client.js) or [pool.js](https://github.com/SAP/fundamental-tools/blob/main/abap-value-help/doc/server/pool.js)

- Check unit-tests for [data structures'](https://github.com/SAP/fundamental-tools/tree/main/abap-value-help/tests/data) details

Server routes can be tested by REST client JSON payloads, or from any web browser, in which case hardcoded requests are sent to ABAP system:

```shell
cd server
npm install
node pool # or node client

Value Helps server ready:
http://localhost:3000/login
http://localhost:3000/fieldvalues
http://localhost:3000/helpselect
http://localhost:3000/search
http://localhost:3000/logout
```

### View-Model and View

Value Input dialog is dynamically created, based on so called Value Help descriptors. One descriptor describes one "elementary" Value Help and array of descriptors describes a "composite" Value Help. The dialog is identical for both, except the composite Value Help has one dropdown ui element at the top (combo box) to select one particular elementary Value Help, for selection and search.

Aurelia View and View-Model implementation require ca 300 lines of code in total and is portable to other ui frameworks:

[view-model](https://github.com/SAP/fundamental-tools/blob/main/abap-value-help/doc/dialog/ui-search-help.js)

[view](https://github.com/SAP/fundamental-tools/blob/main/abap-value-help/doc/dialog/ui-search-help.html)

and the flow:

![Choreography](https://raw.githubusercontent.com/SAP/fundamental-tools/main/abap-value-help/doc/assets/shflow.png)

## Known Issues

Click [here](https://github.com/SAP/fundamental-tools/issues) to view the current issues.

## Getting Support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-tools/issues/new).

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](https://github.com/SAP/fundamental-tools#contributing) documentation for contribution guidelines.
