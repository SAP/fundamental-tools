#!/usr/bin/env node

// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

import { parseRFM, defaultParserOptions } from "./rfmparser";

const [, , ...args] = process.argv;
(async () => {
  const Usage =
    "\n\nUsage: rfmcall <abap system> <rfm name> [<option>]\n\n" +
    "where <option> can be:\n" +
    "-h    quick help on rfmcall\n" +
    "-s    save RFM call template to local .js file\n" +
    "-c    cache the metadata into params.json and fields.json\n" +
    "-q    quiet mode, no console echo\n" +
    "-stat echo the number of variables, structures and tables\n";
  try {
    if (args.length === 0) {
      throw new TypeError(Usage);
    }

    if (args.length === 1) {
      if (args[0] !== "-h") {
        throw new TypeError(Usage);
      } else {
        console.log(Usage);
      }
      return;
    }

    const destination = args[0];
    const rfmName = args[1];
    let options = defaultParserOptions;
    for (let ii = 2; ii < args.length; ii++) {
      switch (args[ii]) {
        case "-s":
          options["saveJS"] = true; // no console echo
          break;
        case "-t":
          options["echoTotals"] = true; // echo totals to console
          break;
        case "-c":
          options["cacheMetadata"] = true;
          break;
        case "-q":
          options["quiet"] = true;
          break;
        default:
          throw new TypeError(`Option not supported ${args[ii]}\n\n${Usage}`);
      }
    }
    const rfmParser = new parseRFM(destination, rfmName);
    const metadata: object = await rfmParser.parse(options);
    if (options["echoTotals"]) console.log(metadata["stat"]);
  } catch (ex) {
    console.error(ex);
  }
}).call(this);
