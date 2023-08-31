import {
  AbapCliResult,
  AbapCliUiConfig,
  Arguments,
  Command,
  Destination,
  CliHandler,
} from "./abap.js";
import { AnnotationsType } from "./backend.js";
import { Frontend } from "./frontend.js";
import { DefaultLanguage } from "./constants.js";
import { log } from "./utils.js";

export class AbapCliApi {
  private options = {
    lang: DefaultLanguage,
    "sort-fields": false,
    debug: false,
    helps: false,
    ts: false,
  };

  async call(
    dest: Destination,
    rfm_names: string | string[],
    options?: { lang?: string; debug?: boolean; ts?: boolean }
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
      ts: this.options.ts,
    };

    const cli = new CliHandler(args);

    const result = await cli.run();

    return result[""];
  }

  async get(
    dest: Destination,
    rfm_names: string | string[],
    options?: { lang?: string; debug?: boolean; helps?: boolean; ts?: boolean }
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
      helps: this.options.helps,
      ts: this.options.ts,
    };

    const cli = new CliHandler(args);

    const result = await cli.run();

    return result[""];
  }

  make(
    annotations: AnnotationsType,
    ui: string | AbapCliUiConfig,
    options?: {
      "sort-fields"?: boolean;
      debug?: boolean;
      ts?: boolean;
    }
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
      ts: this.options.ts,
    };

    const frontend = new Frontend({ abap: annotations, argv: args });
    const result: AbapCliResult = { frontend: frontend.parse() };
    return result;
  }
}
