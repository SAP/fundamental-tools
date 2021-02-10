// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

import fs from "fs";
import yaml from "js-yaml";
import loglevel from "loglevel";

const log = loglevel;

export { log };

export function getTimestamp(): string {
  const dt = new Date();
  const mm =
    1 + dt.getMonth() < 10
      ? "0" + (1 + dt.getMonth())
      : "" + (1 + dt.getMonth());
  const dd = dt.getDate() < 10 ? "0" + dt.getDate() : "" + dt.getDate();
  return `${dt.getFullYear()}-${mm}-${dd} ${dt.toTimeString().substring(0, 8)}`;
}

export function yamlLoad(fileName: string): unknown {
  log.debug(`yaml load ${fileName}`);
  return yaml.load(fs.readFileSync(fileName, { encoding: "utf-8", flag: "r" }));
}

export function yamlSave(fileName: string, obj: unknown, options = {}): void {
  fs.writeFileSync(fileName, yaml.dump(obj, options));
  log.debug(`yaml save ${fileName}`);
}

export function deleteFile(fileName: string): void {
  try {
    fs.unlinkSync(fileName);
  } catch (ex) {
    if (ex.code !== "ENOENT") throw ex; // ignore file not found error
  }
  log.debug(`deleted ${fileName}`);
}

export function makeDir(dir: string): void {
  if (dir && !fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  log.debug(`mkdir ${dir}`);
}

export function isEmpty(obj: Record<string, unknown>): boolean {
  return Object.keys(obj).length === 0;
}

export type EmptyObject = Record<string, never>;

const FileType = {
  js: "js",
  html: "html",
  py: "py",
};
export class Writer {
  private SPACE = " ";
  private NEWLINE = "\n";

  private fileName: string;
  private saveToFile: boolean;
  private indent_step: number;
  private indent_count: number;
  private indent = "";
  private output: Array<string>;

  constructor(fileName: string, saveToFile: boolean) {
    log.debug(`Writer ${fileName}`);
    this.fileName = fileName;
    this.saveToFile = saveToFile;
    this.indent_step = FileType.js === this.fileName.slice(-2) ? 2 : 4;
    this.indent_step = 2;
    this.indent_count = 0;
    this.indent = "";
    this.output = [];
    this.reset();
  }

  get text(): string {
    return this.output.join(this.NEWLINE);
  }

  reset(): void {
    this.indent_count = 0;
    this.indent = this.SPACE.repeat(this.indent_count);
    this.output = [];
  }

  addindent(): void {
    this.indent_count += this.indent_step;
    this.indent = this.SPACE.repeat(this.indent_count);
  }

  deindent(): void {
    this.indent_count -= this.indent_step;
    if (this.indent_count < 0) {
      throw `Internal indentation error: indent_count=${this.indent_count}`;
    }
    this.indent = this.SPACE.repeat(this.indent_count);
  }

  write(line = ""): void {
    this.output.push(line.length > 0 ? this.indent + line : line);
  }

  newline(): void {
    this.output.push(this.NEWLINE);
  }

  save(): void {
    const ms = this.output.join(this.NEWLINE);
    if (this.saveToFile) {
      const stream = fs.createWriteStream(this.fileName);
      stream.once("open", () => {
        stream.write(ms);
        stream.end();
      });
    } else {
      log.info(ms);
    }
  }
}
