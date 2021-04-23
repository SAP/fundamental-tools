// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

// import path from "path";

// import { Arguments } from "./abap";
// import { DefaultFolder } from "./constants";
// import { log, fileLoad } from "./utils";

// type ModelDefType = Record<string, { rfm: string }>;

// export class Model {
//   private definition: ModelDefType = {};
//   private argv = {} as Arguments;

//   constructor(argv: Arguments) {
//     const modelPath = path.join(DefaultFolder.userConfig, argv.def || "");
//     try {
//       this.definition = fileLoad(modelPath) as ModelDefType;
//       this.argv = argv;
//     } catch (ex) {
//       throw ex.code === "ENOENT"
//         ? new Error(`Model definition not found: ${modelPath}`)
//         : ex;
//     }
//   }
//   parse(): void {
//     log.info("Model");
//   }
// }
