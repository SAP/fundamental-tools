# Value Input Helps <!-- omit in toc -->

![License](https://img.shields.io/npm/l/abap-value-input-help)
[![npm](https://img.shields.io/npm/v/abap-value-input-help)](https://www.npmjs.com/package/abap-value-input-help)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM)
[![REUSE status](https://api.reuse.software/badge/github.com/SAP/fundamental-tools)](https://api.reuse.software/info/github.com/SAP/fundamental-tools)
[![npm](https://img.shields.io/npm/dm/abap-value-input-help)](https://www.npmjs.com/package/value-input-help)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)

Server component exposing generic Value Input Helps for [pattern based applications](https://github.com/SAP/fundamental-tools/blob/main/doc/app.md) and ui frameworks supported by [Fundamental Library for ABAP](https://github.com/SAP/fundamental-tools). ABAP developers already know how it works (like in SAPGUI):

- ABAP Fixed Domain Values (FV)
- ABAP Elementary and complex Search Helps (SH)
- ABAP Check Tables (CT, CH)
- Custom input helps

## Installation

Server runtime component:

```shell
npm install abap-value-input-help
```

## Usage

Add server routes for generic [ABAP Search Helps API](./abap-api/README.md)

| Search Help Type                         | route                       | ABAP API                                  |
| ---------------------------------------- | --------------------------- | ----------------------------------------- |
| Fixed domain values (FV)                 | `/fieldvalues/<path>`       | `SHLP_DOMVALUES_GET`                      |
| Elementary and Complex Search Helps (SH) | `/helpselect`<br/>`/search` | `SHLP_METADATA_GET`<br/>`SHLP_VALUES_GET` |
| Check Tables (CT)                        | `/tabselect`                | CT/CH tables' query                       |
| Custom input helps                       | `/valuelist/`               | any ABP RFM                               |

More API details: [unit tests](https://github.com/SAP/fundamental-tools/tree/main/abap-value-input-help/tests)

Add custom attribute `shlp` to input component, like:

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

Custom attribute will add Search Help icon input addon and run the Search Help dialog using abovementioned exposed routes. Input ui component is updated with the Search Help dialog result:

![](https://raw.githubusercontent.com/SAP/fundamental-tools/main/abap-value-input-help/doc/assets/ValueInputHelpsDialog.jpg)

## Known Issues

Click [here](https://github.com/SAP/fundamental-tools/issues) to view the current issues.

## Getting Support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-tools/issues/new).

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](https://github.com/SAP/fundamental-tools#contributing) documentation for contribution guidelines.

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](https://github.com/SAP/fundamental-tools#license).
