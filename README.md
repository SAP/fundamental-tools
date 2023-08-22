# Fundamental Library for ABAP <!-- omit in toc -->

![NPM](https://img.shields.io/npm/l/abap-api-tools)
[![npm](https://img.shields.io/npm/v/abap-api-tools)](https://www.npmjs.com/package/abap-api-tools)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM)
[![REUSE status](https://api.reuse.software/badge/github.com/SAP/fundamental-tools)](https://api.reuse.software/info/github.com/SAP/fundamental-tools)
[![npm](https://img.shields.io/npm/dm/abap-api-tools)](https://www.npmjs.com/package/abap-api-tools)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)

- Cloud etensions with by factors less code and by factors more performance
- Works with any frontend framework
  - [Aurelia](http://aurelia.io/)
  - Angular, React and Vue by [SAP Fundamenal Library](https://sap.github.io/fundamental/)
  - Angular, React and Vue by [Microsoft FAST](https://www.fast.design/docs/introduction/)
  - UI5 web components for [React](https://sap.github.io/ui5-webcomponents-react/?path=/story/getting-started--page)
- Servers
  - SAP BTP, CAP 
  - Koa, express, Spark, Jooby, Sanic, Django, Pyramid, Flask, Tornado ...
- Frameworks: electron, NW.js ...
- [Usage](./abap-api-tools/README.md#usage)
- Components
  - [abap-api-tools](./abap-api-tools/README.md) node CLI tool, app elements generator
  - [abap-value-help](./abap-value-help/README.md) Generic Value Helps server API
- Examples: [SAP-samples/node-rfc-samples/fundamental-tools](https://github.com/SAP-samples/node-rfc-samples/tree/main/fundamental-tools)
- [Building standards based app with ABAP programming model](./doc/app.md)

## Content <!-- omit in toc -->

- [Requirements](#requirements)
- [Download and installation](#download-and-installation)
- [Known Issues](#known-issues)
- [Getting Support](#getting-support)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- ABAP backend: from latest releases, down to 4.6C
- SAP Cloud Platform or on-premise Windows, Linux, Darwin platforms
- Runtimes
  - Java with [SAP Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html) or [SAP Java Connector](https://support.sap.com/en/product/connectors/jco.html)
  - Python with [PyRFC](https://github.com/SAP/PyRFC)
  - NodeJS with [node-rfc](https://github.com/SAP/node-rfc)

## Download and installation

```shell
npm install -g abap-api-tools
```

More info: [abap-api-tools/README.md#download-and-installation](abap-api-tools/README.md#download-and-installation)

## Known Issues

Click [here](https://github.com/SAP/fundamental-tools/issues) to view the current issues.

## Getting Support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-tools/issues/new).

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](CONTRIBUTING.md) documentation for contribution guidelines.

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](LICENSES/Apache-2.0.txt).
