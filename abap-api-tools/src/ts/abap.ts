#!/usr/bin/env node

// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

import fs from "fs";
import path from "path";
import yargs from "yargs";
import {
  UIFrameworks,
  UIFrameworksAll,
  UIFrameworksLocal,
  Languages,
  DefaultFolder,
} from "./constants";
import { AbapObject, Backend } from "./backend";
import { Frontend } from "./frontend";
import { yamlLoad, log, makeDir, deleteFile, getTimestamp } from "./utils";

export let Signature: string;

export const Command = Object.freeze({
  call: "call",
  get: "get",
  make: "make",
  set: "cp",
  reset: "rm",
});

export type ApiList = Record<string, string[]>;
export interface Arguments {
  [argName: string]: unknown;
  _: (string | number)[];
  $0: string;
  rfm: string[];
  c: string | string[];
  apilist: ApiList;
  cmd: string;
  ui: string;
  debug: boolean;
  dest: string;
  output: string;
  lang: string;
  save: boolean;
  textOnly: boolean;
}

class CliHandler {
  private argv: Arguments;
  constructor(argv: Arguments) {
    if (argv.c || (argv.rfm && argv.rfm.length)) {
      const apilist: ApiList = {};

      // add apilists
      if (argv.c) {
        const apilist_list: string[] =
          typeof argv.c === "string" ? [argv.c] : argv.c;
        for (let fn of apilist_list) {
          if (!fn.toLowerCase().includes(".yaml")) fn += ".yaml";
          Object.assign(apilist, yamlLoad(fn));
        }
      }

      // add rfms
      if (argv.rfm.length) {
        const rfm = new Set();
        for (const rfm_name of argv.rfm) {
          rfm.add(rfm_name.toUpperCase());
        }
        Object.assign(apilist, { "": Array.from(rfm) });
      }
      argv.apilist = apilist;
    }
    log.debug(argv);
    this.argv = argv;
  }

  async run() {
    try {
      for (const api_name of Object.keys(this.argv.apilist)) {
        let abap: AbapObject = {
          parameters: {},
          fields: {},
          stat: {},
        };
        if ([Command.call, Command.get].includes(this.argv.cmd)) {
          log.debug(`backend run ${api_name}`);
          const backend = new Backend(api_name, this.argv);
          abap = await backend.parse();
        }

        if (
          (this.argv.cmd === Command.get && !this.argv.textOnly) ||
          [Command.call, Command.make].includes(this.argv.cmd)
        ) {
          const frontend = new Frontend(api_name, abap, this.argv);
          log.debug(`frontend run ${api_name}`);
          frontend.parse();
        }
      }
    } catch (ex) {
      log.info(ex);
    }
  }

  removeConfiguration(ui: string) {
    for (const fn of [`${ui}-abap`, `${ui}`]) {
      deleteFile(path.join(DefaultFolder.userConfig, `${fn}.yaml`));
    }
    log.info(`Local configuration removed: ${ui}`);
  }

  copyConfiguration(source: string, target = "") {
    makeDir(DefaultFolder.userConfig);
    if (target.length === 0) target = source;
    for (const suffix of ["", "-abap"]) {
      const sname = `${source}${suffix}.yaml`;
      const tname = `${target}${suffix}.yaml`;
      const sourcePath = path.join(DefaultFolder.configuration, "ui", sname);
      const targetPath = path.join(DefaultFolder.userConfig, tname);
      try {
        fs.copyFileSync(sourcePath, targetPath, fs.constants.COPYFILE_EXCL);
      } catch (ex) {
        if (ex.code !== "EEXIST") throw ex; // ignore already exists error
        throw new Error(`Remove local configuration first: ${tname}`);
      }
    }
    log.info(`Local configuration set: ${target}`);
  }
}

export const argv = yargs(process.argv.slice(2))
  .strict(true)
  .demandCommand()
  .command({
    command: `${Command.call} <dest> <rfm...>`,
    describe: "ABAP function module call template",
    builder: (y) => {
      return y
        .positional("dest", {
          type: "string",
          describe: "ABAP system destination id, from sapnwrfc.ini",
        })
        .positional("rfm", {
          describe: "BAPI/RFM name(s)",
        })
        .option("l", {
          alias: "lang",
          describe: "ABAP texts language",
          type: "string",
          default: "en",
          nargs: 1,
        })
        .option("f", {
          alias: "sort-fields",
          describe: "Sort field names of structures and tables",
          type: "boolean",
          default: false,
          nargs: 0,
        })
        .option("s", {
          alias: "save",
          describe: "Save to local file",
          type: "boolean",
          default: false,
          nargs: 0,
        })
        .option("o", {
          alias: "output",
          describe: "Output folder",
          type: "string",
          default: "",
          nargs: 1,
        })
        .option("d", {
          alias: "debug",
          describe: "Detailed logging",
          type: "boolean",
          default: false,
          nargs: 0,
        });
    },
    handler: (argv) => {
      new CliHandler(argv as Arguments).run();
    },
  })
  .command({
    command: `${Command.get} <dest> [rfm...]`,
    describe: "ABAP API annotations",
    builder: (y) => {
      return y
        .positional("dest", {
          type: "string",
          describe: "ABAP system destination id, from sapnwrfc.ini",
        })
        .positional("rfm", {
          describe: "BAPI/RFM name(s)",
        })
        .option("l", {
          alias: "lang",
          describe: "ABAP texts language",
          type: "string",
          default: "en",
          nargs: 1,
        })
        .option("c", {
          alias: "catalog",
          describe: "Read RFM names from file",
          type: "string",
          nargs: 1,
        })
        .option("t", {
          alias: "text-only",
          describe: "Get only texts in a given language",
          type: "boolean",
          default: false,
          nargs: 0,
        })
        .option("o", {
          alias: "output",
          describe: "Output folder",
          type: "string",
          default: DefaultFolder.output,
          nargs: 1,
        })
        .option("d", {
          alias: "debug",
          describe: "Detailed logging",
          type: "boolean",
          default: false,
          nargs: 0,
        });
    },
    handler: (argv) => {
      return new CliHandler(argv as Arguments).run();
    },
  })
  .command({
    command: `${Command.make} <ui> [rfm...]`,
    describe: "Create ui elements",
    builder: (y) => {
      return y
        .positional("ui", {
          choices: UIFrameworksAll,
          describe: `ui framework`,
        })
        .positional("rfm", {
          describe: "BAPI/RFM name(s)",
        })
        .option("c", {
          alias: "catalog",
          describe: "Read RFM names from file",
          nargs: 1,
        })
        .option("f", {
          alias: "sort-fields",
          describe: "Sort field names of structures and tables",
          type: "boolean",
          default: false,
          nargs: 0,
        })
        .option("o", {
          alias: "output",
          describe: "Output folder",
          type: "string",
          default: DefaultFolder.output,
          nargs: 1,
        })
        .option("d", {
          alias: "debug",
          describe: "Detailed logging",
          type: "boolean",
          default: false,
          nargs: 0,
        });
    },
    handler: (argv) => {
      new CliHandler(argv as Arguments).run();
    },
  })
  .command({
    command: `${Command.set} <ui> [to]`,
    describe: `Copy ui configuration to local folder ${DefaultFolder.userConfig}`,
    builder: (y) => {
      return y
        .positional("ui", {
          choices: UIFrameworks,
          describe: "ui framework name",
        })
        .positional("to", {
          default: "",
          describe: "New name for custom configuration",
        })
        .option("d", {
          alias: "debug",
          describe: "Detailed logging",
          type: "boolean",
          default: false,
          nargs: 0,
        });
    },
    handler: (argv) => {
      new CliHandler(argv as Arguments).copyConfiguration(
        argv.ui as string,
        argv.to as string
      );
    },
  })
  .command({
    command: `${Command.reset} <ui>`,
    describe: "Remove local ui configuration",
    builder: (y) => {
      return y
        .positional("ui", {
          choices: UIFrameworksLocal,
          describe: "ui framework",
        })
        .option("d", {
          alias: "debug",
          describe: "Detailed logging",
          type: "boolean",
          default: false,
          nargs: 0,
        });
    },
    handler: (argv) => {
      new CliHandler(argv as Arguments).removeConfiguration(argv.ui as string);
    },
  })
  .check((argv) => {
    // set command
    argv.cmd = argv._[0];

    // set log level first
    if (argv.d) {
      log.setDefaultLevel(log.levels["DEBUG"]);
    } else {
      log.setDefaultLevel(log.levels["INFO"]);
    }

    log.debug(process.argv);
    log.debug(argv);

    // check duplicates
    for (const flag of ["lang", "output"]) {
      if (Array.isArray(argv[flag])) {
        throw new Error(`Too many arguments: ${flag}`);
      }
    }

    // check language
    if (argv.lang && !Object.keys(Languages).includes(argv.lang as string)) {
      throw new Error(`Language not supported: ${argv.lang}`);
    }

    if (argv.output) {
      // if output folder given, file should be saved
      argv.s = true;
      argv.save = true;
    }

    // text only with lang key
    if (
      argv["text-only"] &&
      Boolean(process.argv.indexOf("-l") === -1) &&
      Boolean(process.argv.indexOf("--lang") === -1)
    ) {
      throw new Error(
        `Text-only option -t requires -l option with language key`
      );
    }

    // output folder
    if ("output" in argv && (argv.output as string).substring(0, 2) !== "./") {
      // add leading ./
      argv.output = `./${argv.output}`;
      argv.o = argv.output;
    }

    // Write CLI version to output signature string
    yargs.parse(
      "--version",
      (err: Error | undefined, argv: { $0: string }, output: string) => {
        Signature = `${path.basename(argv.$0)} ${output} at: ${getTimestamp()}`;
      }
    );

    return true;
  })
  .help()
  .version().argv;
