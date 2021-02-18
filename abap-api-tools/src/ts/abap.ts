#!/usr/bin/env node

// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

import fs from "fs";
import path from "path";
import yargs from "yargs";
import { RfcConnectionParameters } from "node-rfc";
import {
  UIFrameworks,
  UIFrameworksAll,
  UIFrameworksLocal,
  Languages,
  DefaultLanguage,
  DefaultFolder,
  runningInDocker,
  DockerVolume,
} from "./constants";
import { AnnotationsType, Backend } from "./backend";
import { Frontend, FrontendResult } from "./frontend";
import { yamlLoad, log, makeDir, deleteFile, getTimestamp } from "./utils";

export let Signature = `abap api`;

export const Command = Object.freeze({
  call: "call",
  get: "get",
  make: "make",
  copy: "cp",
  remove: "rm",
  languages: "languages",
});

export type ApiListType = Record<string, string[]>;

export type Destination = string | RfcConnectionParameters;
export { RfcConnectionParameters, AnnotationsType };

export type Arguments = {
  //[argName: string]: unknown;
  _: (string | number)[];
  $0: string;
  cmd: string;
  output: string;
  lang: string;
  apilist?: ApiListType;
  rfm?: string[];
  c?: string | string[];
  debug?: boolean;
  dest?: Destination;
  save?: boolean;
  textOnly?: string;
  ui?: string;
  "sort-fields"?: boolean;
  runInBg?: boolean;
};

export type AbapCliResult = {
  annotations?: AnnotationsType;
  frontend?: FrontendResult;
};

class CliHandler {
  private argv: Arguments;

  constructor(argv: Arguments) {
    log.debug(argv);
    log.debug(DefaultFolder);

    if (argv.c || (argv.rfm && argv.rfm.length)) {
      const apilist: ApiListType = {};

      // add apilists
      if (argv.c) {
        const apilist_list: string[] =
          typeof argv.c === "string" ? [argv.c] : argv.c;
        for (let fn of apilist_list) {
          if (!fn.toLowerCase().includes(".yaml")) fn += ".yaml";
          Object.assign(
            apilist,
            yamlLoad(runningInDocker ? path.join(DockerVolume, fn) : fn)
          );
        }
      }

      // add rfms
      if (argv.rfm && argv.rfm.length) {
        const rfm = new Set();
        for (const rfm_name of argv.rfm) {
          rfm.add(rfm_name.toUpperCase());
        }
        Object.assign(apilist, { "": Array.from(rfm) });
      }
      argv.apilist = apilist;
    }

    this.argv = argv;
    log.debug(argv);
  }

  async run(): Promise<AbapCliResult> {
    const result: AbapCliResult = {};
    if (this.argv.apilist) {
      for (const api_name of Object.keys(this.argv.apilist)) {
        let annotations = {} as AnnotationsType;
        if ([Command.call, Command.get].includes(this.argv.cmd)) {
          log.debug(`backend run ${api_name}`);
          const backend = new Backend(api_name, this.argv);
          annotations = await backend.parse();
          // call method annotations are w/o search helps
          result[api_name] = { annotations: annotations };
        }

        if (
          (this.argv.cmd === Command.get && !this.argv.textOnly) ||
          [Command.call, Command.make].includes(this.argv.cmd)
        ) {
          const frontend = new Frontend(api_name, annotations, this.argv);
          log.debug(`frontend run ${api_name}`);
          if (!result[api_name]) result[api_name] = {};
          result[api_name]["frontend"] = frontend.parse();
        }
      }
    }

    return result;
  }

  removeConfiguration(ui: string): void {
    for (const fn of [`${ui}-abap`, `${ui}`]) {
      deleteFile(path.join(DefaultFolder.userConfig, `${fn}.yaml`));
    }
    log.info(`Local configuration removed: ${ui}`);
  }

  copyConfiguration(source: string, target = ""): void {
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

export class AbapCliApi {
  private options = {
    lang: DefaultLanguage,
    "sort-fields": false,
    debug: false,
  };

  async call(
    dest: Destination,
    rfm_names: string | string[],
    options?: { lang?: string; debug?: boolean }
  ): Promise<AbapCliResult> {
    if (options) {
      Object.assign(this.options, options);
    }

    log.setDefaultLevel(
      this.options.debug ? log.levels.DEBUG : log.levels.SILENT
    );

    const args: Arguments = {
      _: [Command.call],
      $0: "abap",
      rfm: typeof rfm_names === "string" ? [rfm_names] : rfm_names,
      cmd: Command.call,
      dest: dest,
      output: "",
      lang: this.options.lang,
      debug: this.options.debug,
      runInBg: true,
    };

    const cli = new CliHandler(args);

    const result = await cli.run();

    return result[""];
  }

  async get(
    dest: Destination,
    rfm_names: string | string[],
    options?: { lang?: string; debug?: boolean }
  ): Promise<AbapCliResult> {
    if (options) {
      Object.assign(this.options, options);
    }

    log.setDefaultLevel(
      this.options.debug ? log.levels.DEBUG : log.levels.SILENT
    );

    const args: Arguments = {
      _: [Command.get],
      $0: "abap",
      rfm: typeof rfm_names === "string" ? [rfm_names] : rfm_names,
      cmd: Command.get,
      dest: dest,
      output: "",
      lang: this.options.lang,
      debug: this.options.debug,
      runInBg: true,
    };

    const cli = new CliHandler(args);

    const result = await cli.run();

    return result[""];
  }

  make(
    annotations: AnnotationsType,
    ui: string,
    options?: { "sort-fields"?: boolean; debug?: boolean }
  ): AbapCliResult {
    if (options) {
      Object.assign(this.options, options);
    }

    log.setDefaultLevel(
      this.options.debug ? log.levels.DEBUG : log.levels.SILENT
    );

    const args: Arguments = {
      _: [Command.make],
      $0: "abap",
      cmd: Command.make,
      output: "",
      apilist: { "": Object.keys(annotations.parameters) },
      ui: ui,
      "sort-fields": this.options["sort-fields"],
      lang: this.options.lang,
      debug: this.options.debug,
      runInBg: true,
    };

    const frontend = new Frontend("", annotations, args);
    const result: AbapCliResult = { frontend: frontend.parse() };
    return result;
  }
}

// invoked via CLI
if (require.main === module)
  yargs(process.argv.slice(2))
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
            default: DefaultLanguage,
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
            default: DefaultLanguage,
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
            type: "string",
            default: "",
            nargs: 1,
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
      command: `${Command.languages}`,
      describe: "Supported languages",
      handler: () => {
        log.info(Languages);
      },
    })
    .command({
      command: `${Command.copy} <ui> [to]`,
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
      command: `${Command.remove} <ui>`,
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
        new CliHandler(argv as Arguments).removeConfiguration(
          argv.ui as string
        );
      },
    })
    .check((argv) => {
      // critical error, docker volume not mounted
      if (runningInDocker && !fs.existsSync(DockerVolume)) {
        throw new Error(
          `Docker volume ${DockerVolume} not mounted. Re-build the container: https://github.com/SAP/fundamental-tools/tree/main/docker#abap-api-tools`
        );
      }

      // set command
      argv.cmd = argv._[0];

      // set log level first
      log.setDefaultLevel(argv.d ? log.levels.DEBUG : log.levels.INFO);

      log.debug(process.argv);

      // check duplicates
      for (const flag of ["lang", "output", "text-only"]) {
        if (Array.isArray(argv[flag])) {
          throw new Error(`Too many arguments: ${flag}`);
        }
      }

      if (argv.output) {
        // if output folder given, file should be saved
        argv.s = true;
        argv.save = true;
      }

      // text only with lang key
      if (argv["text-only"]) {
        if (
          process.argv.indexOf("-l") !== -1 ||
          process.argv.indexOf("--lang") !== -1
        ) {
          throw new Error(`Text-only option is not allowed with lang options`);
        }
        // lang set by text-only
        argv.l = argv.textOnly;
        argv.lang = argv.textOnly;
      }

      // check language
      if (argv.lang && !Object.keys(Languages).includes(argv.lang as string)) {
        throw new Error(`Language not supported: ${argv.lang}`);
      }

      // output folder
      if (
        "output" in argv &&
        (argv.output as string).substring(0, 2) !== "./"
      ) {
        // add leading ./
        argv.output = `./${argv.output}`;
        argv.o = argv.output;
      }

      // Write CLI version to output signature string
      yargs.parse(
        "--version",
        (err: Error | undefined, argv: { $0: string }, output: string) => {
          Signature = `${path.basename(
            argv.$0
          )} ${output} at: ${getTimestamp()}`;
        }
      );

      return true;
    })
    .help()
    .version().argv;
