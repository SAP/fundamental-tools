# Fundamental Library for ABAP <!-- omit in toc -->

[![node-rfc release](https://img.shields.io/npm/v/abap-api-tools.svg)](https://www.npmjs.com/package/abap-api-tools)
[![Node.js engines](https://img.shields.io/node/v/abap-api-tools.svg)](https://www.npmjs.com/package/abap-api-tools)
![NPM](https://img.shields.io/npm/l/abap-api-tools)
[![REUSE status](https://api.reuse.software/badge/github.com/SAP/fundamental-tools)](https://api.reuse.software/info/github.com/SAP/fundamental-tools)
[![npm](https://img.shields.io/npm/dm/abap-api-tools)](https://www.npmjs.com/package/abap-api-tools)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](https://www.typescriptlang.org/)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-f8bc45.svg)](https://github.com/prettier/prettier)
[![Slack](https://img.shields.io/badge/slack-ui--fundamentals-blue.svg?logo=slack)](https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM)

Build powerful on-premise and cloud extensions of any ABAP system, with minimum coding efforts and maximum performance.

This repository provides two NPM packages

- [abap-api-tools](./abap-api-tools/README.md) design-time CLI, to enrich your ui componebts with ABAP metadata: data type, length, data binding, user defaults, Value Helps ...
- [abap-value-help](./abap-value-help/README.md) run-time API for generic ABAP Value Helps

used to build cloud extensions of ABAP backend systems, using

- Popular web frameworks and design systems:
  - [Angular, React, Vue etc. with SAP design system](https://sap.github.io/fundamental/#libraries)
  - [Angular, React, Vue etc. with Microsoft design system](https://www.fast.design/docs/category/integrations/)
  - [UI5 web components](https://sap.github.io/ui5-webcomponents/), [UI5 web components for React](https://sap.github.io/ui5-webcomponents-react)
- and any server framework
  - [SAP Cloud SDK for JavaScript](https://sap.github.io/cloud-sdk/docs/js/overview)
  - [SAP Cloud Applications Programming Model](https://cap.cloud.sap/)
  - express, NestJS, Flask, Koa, Spark, Jooby, Django, Pyramid, Tornado ...

The "etc" under web frameworks means practically any web framework because [configurable](abap-api-tools/README.md#custom-ui-configurations) by developer.

Few pre-configured docker containers with RFC connectivity are provided in [docker](./docker/) folder

## Content <!-- omit in toc -->

- [Requirements](#requirements)
- [Download and installation](#download-and-installation)
- [Usage](#usage)
- [Deployment](#deployment)
- [Known Issues](#known-issues)
- [Getting Support](#getting-support)
- [Contributing](#contributing)
- [Code of Conduct](#code-of-conduct)
- [License](#license)

## Requirements

- Backend: ABAP system on-premise or in the cloud (like SAP S/4HANA Cloud or Steampunk)
- Frontend: Web app built using above mentioned frameworks
- No run-time dependencies. Check respective web and server frameworks, mentioned above, for their dependencies and prerequisites

## Download and installation

```shell
npm install -g abap-api-tools
```

More info: [abap-api-tools/README.md#download-and-installation](abap-api-tools/README.md#installation)

## Usage

- Cloud extension [example](./doc/app.md)
- [abap-api-tools CLI usage](./abap-api-tools/README.md#usage)

## Deployment

On-premise application RFC connectivity to ABAP system requires platform specific RFC connector

- Java: [SAP JCo](https://support.sap.com/en/product/connectors/jco.html)
- Microsoft NET: [SAP NCo](https://support.sap.com/en/product/connectors/msnet.html)
- Python: [SAP/PyRFC](https://github.com/SAP/PyRFC) open source
- Node.JS: [SAP/node-rfc](https://github.com/SAP/node-rfc) open source

<img src="doc/assets/deployment.png" width="640px"/>

Java cloud application RFC connectivity to on-premise ABAP system is supported "out of box", by [SAP Cloud Connector](https://help.sap.com/docs/connectivity/sap-btp-connectivity-cf/cloud-connector).

Node.JS or Python application requires custom buildpack, with [SAP NW RFC SDK](https://support.sap.com/en/product/connectors/nwrfcsdk.html) binaries added to `LD_LIBRARY_PATH`. The application can then use [WebSocket RFC](https://blogs.sap.com/2021/07/19/websocket-rfc-rfc-for-the-internet/) connection parameters, to reach ABAP on-premise system with WebSocket RFC support, outside company firewall. If WebSocket RFC protocol is not supported by ABAP system, or connection outside firewall not wanted, the [SAP Business Connector](https://support.sap.com/en/product/connectors/bc.html) is required on-premise, inside firewall. More info you can find in SAP blogs

- [WebSocket RFC – RFC For the Internet](https://blogs.sap.com/2021/07/19/websocket-rfc-rfc-for-the-internet/)
- [WebSocket RFC to Cloud Using SAP Business Connector](https://blogs.sap.com/?p=1616280)


## Known Issues

Click [here](https://github.com/SAP/fundamental-tools/issues) to view the current issues.

## Getting Support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-tools/issues/new).

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](CONTRIBUTING.md) documentation for contribution guidelines.

## Code of Conduct

See [Code of Conduct](./CODE_OF_CONDUCT.md)

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, version 2.0 except as noted otherwise in the [LICENSE file](LICENSES/Apache-2.0.txt).
