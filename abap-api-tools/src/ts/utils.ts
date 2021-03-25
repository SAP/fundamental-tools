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

export function fileLoad(fileName: string): unknown {
  log.debug(`file load ${fileName}`);

  const content = fs.readFileSync(fileName, {
    encoding: "utf-8",
    flag: "r",
  });
  return fileName.match(/\.(yaml|yml)$/) ? yaml.load(content) : content;
}

export function fileSave(
  fileName: string,
  content: unknown,
  options: yaml.DumpOptions = {}
): void {
  log.debug(`file save ${fileName}`, options);
  try {
    if (typeof content !== "string") {
      content = yaml.dump(content, options);
      if (!fileName.match(/\.(yaml|yml)$/)) fileName += ".yaml";
    }
    fs.writeFileSync(fileName, content as string);
  } catch (ex) {
    log.error(`write error`, ex);
    log.error("content", content);
  }
}

export function deleteFile(fileName: string): void {
  try {
    fs.unlinkSync(fileName);
  } catch (ex) {
    if (ex.code !== "ENOENT") throw ex; // ignore file not found error
  }
  log.debug(`deleted ${fileName}`);
}

export function fileExists(fileName: string): boolean {
  return fs.existsSync(fileName);
}

export function makeDir(dir: string): void {
  if (dir && !fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  log.debug(`mkdir ${dir}`);
}

export function rmDir(dir: string): void {
  fs.rmSync(dir, { recursive: true, force: true });
  log.debug(`rmdir ${dir}`);
}

export function isEmpty(obj?: unknown[] | Record<string, unknown>): boolean {
  if (obj === undefined) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  return Object.keys(obj).length === 0;
}

export type EmptyObject = Record<string, never>;

const FileType = {
  js: "js",
  html: "html",
  py: "py",
};

export interface IWriter {
  fileName?: string;
  echoOnSave?: boolean;
  indent?: number;
}
export class Writer {
  private SPACE = " ";
  private NEWLINE = "\n";

  private fileName: string;
  private echoOnSave: boolean;
  private indent_step: number;
  private indent_count: number;
  private indent = "";
  private output: Array<string>;

  constructor(context?: IWriter) {
    if (!context) context = {} as IWriter;
    this.fileName = context.fileName || "";
    this.echoOnSave = context.echoOnSave || false;
    this.indent_step = context.indent || 2;

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

  write(line: string | string[] = ""): void {
    if (Array.isArray(line)) line = line.join("");
    this.output.push(line.length > 0 ? this.indent + line : line);
  }

  newline(): void {
    this.output.push(this.NEWLINE);
  }

  save(): string {
    const ms: string = this.output.join(this.NEWLINE);
    if (this.fileName) {
      const stream = fs.createWriteStream(this.fileName);
      stream.once("open", () => {
        stream.write(ms);
        stream.end();
      });
    } else {
      if (this.echoOnSave) log.info(ms);
    }
    return ms;
  }
}
