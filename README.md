# Fundamental Library for ABAP <!-- omit in toc -->

[![REUSE status](https://api.reuse.software/badge/github.com/SAP/fundamental-tools)](https://api.reuse.software/info/github.com/SAP/fundamental-tools)

Command line tools for pattern based web applications with ABAP/HANA systems.

- Any old or new ABAP system
- Front-end frameworks:
  - [Aurelia](http://aurelia.io/)
  - Angular, React and Vue by [SAP Fundamenal Library](https://sap.github.io/fundamental/)
  - Angular, React and Vue by [Microsot FAST](https://www.fast.design/docs/introduction/)
  - UI5 web components for [React](https://sap.github.io/ui5-webcomponents-react/?path=/story/getting-started--page)
- Servers
  - SAP Cloud Platform
  - Koa, express, Spark, Jooby, Sanic, Django, Pyramid, Flask, Tornado ...
- Application frameworks: electron, NW.js ...
- Blog: [Fundamental Library for ABAP](https://blogs.sap.com/2020/08/23/fundamental-library-for-abap/)

## Content <!-- omit in toc -->

- [Prerequisites](#prerequisites)
- [Installation](./abap-api-tools/README.md#installation)
- [Usage](./abap-api-tools/README.md#usage)
- [Examples](./abap-api-tools/README.md#examples)
  - [ABAP Function Module call template](./abap-api-tools/README.md#abap-function-module-call-template)
  - [ABAP API annotations for ui elements](./abap-api-tools/README.md#abap-api-annotations-for-ui-elements)
  - [ui elements](./abap-api-tools/README.md#ui-elements)
- [Custom ui configurations](./abap-api-tools/README.md#custom-ui-configurations)
- [Building a pattern based app](./doc/app.md)
- NodeJS and Python [docker images](./docker)

## Prerequisites

- ABAP backend: from latest releases, down to 4.6C
- [ABAP helpers](/abap-helpers)
- App server
  - SAP Cloud Platform or on-premise Windows, Linux, Darwin system/notebook
  - Runtimes
  - Java with [SAP Cloud Connector](https://help.sap.com/viewer/cca91383641e40ffbe03bdc78f00f681/Cloud/en-US/e6c7616abb5710148cfcf3e75d96d596.html) or [SAP Java Connector](https://support.sap.com/en/product/connectors/jco.html)
  - Python with [PyRFC](https://github.com/SAP/PyRFC)
  - NodeJS with [node-rfc](https://github.com/SAP/node-rfc)

## Known Issues

Click [here](https://github.com/SAP/fundamental-toolset/issues) to view the current issues.

## Getting Support

If you encounter an issue, you can [create a ticket](https://github.com/SAP/fundamental-toolset/issues/new).

## Contributing

If you want to contribute, please check the [CONTRIBUTING.md](CONTRIBUTING.md) documentation for contribution guidelines.

## License

Copyright (c) 2018 SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the [LICENSE file](LICENSE).
