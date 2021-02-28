# ABAP Value Help <!-- omit in toc -->

![License](https://img.shields.io/npm/l/abap-value-help)
[![npm](https://img.shields.io/npm/v/abap-value-help)](https://www.npmjs.com/package/abap-value-help)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM)
[![REUSE status](https://api.reuse.software/badge/github.com/SAP/fundamental-tools)](https://api.reuse.software/info/github.com/SAP/fundamental-tools)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)

Server component exposing generic Value Helps for [pattern based applications](https://github.com/SAP/fundamental-tools/blob/main/doc/app.md) and ui frameworks supported by [Fundamental Library for ABAP](https://github.com/SAP/fundamental-tools).

- ABAP API works the way ABAP developers are familiar with: like in SAPGUI:

  - ABAP Fixed Domain Values (FV)
  - ABAP Elementary and complex Search Helps (SH)
  - ABAP Check Tables (CT, CH)
  - Custom input helps

- [Documentation](https://github.com/SAP/fundamental-tools/blob/main/abap-value-help/doc/README.md)

## Installation

```shell
npm install abap-value-help
```

ABAP API: [doc/abap](https://github.com/SAP/fundamental-tools/blob/main/abap-value-help/doc/abap/README.md)

## Usage

- Expose generic Value Help routes: [doc/server](https://github.com/SAP/fundamental-tools/blob/main/abap-value-help/doc/README.md#server)

- Register generic Value Help dialog in your application: [doc/dialog](https://github.com/SAP/fundamental-tools/blob/main/abap-value-help/doc/README.md#view-model-and-view)

- Add custom attribute `shlp` to input component, like:

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

Custom attribute will add Search Help icon input addon and run the Search Help dialog using abovementioned routes. Input ui component is updated with the Search Help dialog result:

![](https://raw.githubusercontent.com/SAP/fundamental-tools/main/abap-value-help/doc/assets/ValueInputHelpsDialog.jpg)

## Known Issues

Click [here](https://github.com/SAP/fundamental-tools/issues) to view the current issues.

## Getting Support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-tools/issues/new).

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](https://github.com/SAP/fundamental-tools#contributing) documentation for contribution guidelines.

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](https://github.com/SAP/fundamental-tools#license).
