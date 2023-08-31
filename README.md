# Fundamental Library for ABAP <!-- omit in toc -->


[![node-rfc release](https://img.shields.io/npm/v/abap-api-tools.svg)](https://www.npmjs.com/package/abap-api-tools)
[![Node.js engines](https://img.shields.io/node/v/abap-api-tools.svg)](https://www.npmjs.com/package/abap-api-tools)
![NPM](https://img.shields.io/npm/l/abap-api-tools)
[![REUSE status](https://api.reuse.software/badge/github.com/SAP/fundamental-tools)](https://api.reuse.software/info/github.com/SAP/fundamental-tools)
[![npm](https://img.shields.io/npm/dm/abap-api-tools)](https://www.npmjs.com/package/abap-api-tools)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM)

- Build cloud extensions of any functional and visual complexity, with minimum of code, maximum performance and unique delivery experience
- with any ui framework and design system:
  - [Angular, React, Vue etc. with SAP design system](https://sap.github.io/fundamental/#libraries)
  - [Angular, React, Vue etc. with Microsoft design system](https://www.fast.design/docs/category/integrations/)
  - [UI5 web components](https://sap.github.io/ui5-webcomponents/), [UI5 web components for React](https://sap.github.io/ui5-webcomponents-react) ...
- and any server framework
  - [SAP Cloud SDK for JavaScript](https://sap.github.io/cloud-sdk/docs/js/overview)
  - [SAP Cloud Applications Programming Model](https://cap.cloud.sap/)
  - Koa, Spark, Jooby, Django, Pyramid, Flask, Tornado ...
- Using Fundamental Library for ABAP components
  - [abap-api-tools](./abap-api-tools/README.md) design-time CLI, to enrich your ui componebts with ABAP metadata: data type, length, data binding, user defaults, Value Helps ...
  - [abap-value-help](./abap-value-help/README.md) run-time API for generic Value Helps

- Few pre-configured docker containers are available [here](./docker/)

## Content <!-- omit in toc -->

- [Requirements](#requirements)
- [Download and installation](#download-and-installation)
- [Usage](#usage)
- [Connectivity and deployment options](#connectivity-and-deployment-options)
- [Known Issues](#known-issues)
- [Getting Support](#getting-support)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- Backend: ABAP system, from latest releases down to 4.6C
- Deployment: SAP BTP or on-premise system, with active supported Java, Node.JS or Python runtime

## Download and installation

```shell
npm install -g abap-api-tools
```

More info: [abap-api-tools/README.md#download-and-installation](abap-api-tools/README.md#installation)

## Usage

- Cloud extension [example](./doc/app.md)
- [abap-api-tools CLI usage](./abap-api-tools/README.md#usage)

## Connectivity and deployment options

Connectivity options

- [SAP Cloud Connector](https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/cloud-connector)
- [SAP Business Connector](https://support.sap.com/en/product/connectors/bc.html)
- SAP connectors for [Node.js](https://github.com/SAP/node-rfc), [Python](https://github.com/SAP/PyRFC), [Java](https://support.sap.com/en/product/connectors/jco.html)
- and other standard and custom connectivity channels and formats, see ["Feature Matrix" here](https://sap.github.io/cloud-sdk/docs/js/overview)

See also: [Deployment options](./doc/app.md#deployment-options)

## Known Issues

Click [here](https://github.com/SAP/fundamental-tools/issues) to view the current issues.

## Getting Support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-tools/issues/new).

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](CONTRIBUTING.md) documentation for contribution guidelines.

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE file](LICENSES/Apache-2.0.txt).
