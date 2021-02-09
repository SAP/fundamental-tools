// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

import fs from "fs";
import path from "path";

// T002
export const Languages = Object.freeze({
  af: { spras: "a", text: "Afrikaans" },
  sq: { spras: "뽑", text: "Albanian" },
  ag: { spras: "뢇", text: "Algonquian" },
  ar: { spras: "A", text: "Arabic" },
  az: { spras: "뢚", text: "Azerbaijani" },
  bd: { spras: "룤", text: "Banda" },
  bb: { spras: "룢", text: "Bemba" },
  bn: { spras: "룮", text: "Bengali" },
  bk: { spras: "룫", text: "Bikol" },
  bs: { spras: "룳", text: "Bosnian" },
  z9: { spras: "&", text: "Brazilian Prtugu" },
  bg: { spras: "W", text: "Bulgarian" },
  ca: { spras: "c", text: "Catalan" },
  zh: { spras: "1", text: "Chinese" },
  zf: { spras: "M", text: "Chinese trad." },
  kw: { spras: "뱗", text: "Cornish" },
  hr: { spras: "6", text: "Croatian" },
  z1: { spras: "Z", text: "Customer reserve" },
  cs: { spras: "C", text: "Czech" },
  da: { spras: "K", text: "Danish" },
  nl: { spras: "N", text: "Dutch" },
  dm: { spras: "릭", text: "Dutch, Middle" },
  en: { spras: "E", text: "English" },
  "6n": { spras: "둮", text: "English GB" },
  et: { spras: "9", text: "Estonian" },
  fi: { spras: "U", text: "Finnish" },
  fr: { spras: "F", text: "French" },
  "3f": { spras: "덆", text: "French CA" },
  de: { spras: "D", text: "German" },
  "4g": { spras: "뎧", text: "German_CH" },
  el: { spras: "G", text: "Greek" },
  he: { spras: "B", text: "Hebrew" },
  hi: { spras: "묩", text: "Hindi" },
  hu: { spras: "H", text: "Hungarian" },
  is: { spras: "b", text: "Icelandic" },
  in: { spras: "뮎", text: "Indic" },
  id: { spras: "i", text: "Indonesian" },
  ir: { spras: "뮒", text: "Iranian" },
  it: { spras: "I", text: "Italian" },
  ja: { spras: "J", text: "Japanese" },
  kk: { spras: "뱋", text: "Kazakh" },
  ko: { spras: "3", text: "Korean" },
  lv: { spras: "Y", text: "Latvian" },
  lt: { spras: "X", text: "Lithuanian" },
  mk: { spras: "봋", text: "Macedonian" },
  ms: { spras: "7", text: "Malay" },
  mv: { spras: "봖", text: "Manipuri" },
  mo: { spras: "봏", text: "Moldavian" },
  ni: { spras: "뵩", text: "Niger-Kordofa" },
  no: { spras: "O", text: "Norwegian" },
  om: { spras: "뷍", text: "Oromo" },
  p1: { spras: "븑", text: "Phillipine" },
  pl: { spras: "L", text: "Polish" },
  pt: { spras: "P", text: "Portuguese" },
  "1p": { spras: "느", text: "Portuguese PT" },
  pk: { spras: "븫", text: "Prakrit" },
  ro: { spras: "4", text: "Romanian" },
  ru: { spras: "R", text: "Russian" },
  sa: { spras: "뽁", text: "Sanskrit" },
  sr: { spras: "0", text: "Serbian" },
  sh: { spras: "d", text: "Serbian (Latin)" },
  sk: { spras: "Q", text: "Slovak" },
  sl: { spras: "5", text: "Slovenian" },
  es: { spras: "S", text: "Spanish" },
  "1x": { spras: "늘", text: "Spanish MX" },
  sv: { spras: "V", text: "Swedish" },
  ta: { spras: "뾡", text: "Tamil" },
  tt: { spras: "뾴", text: "Tatar" },
  "1q": { spras: "늑", text: "Technical code 1" },
  "2q": { spras: "닱", text: "Technical code 2" },
  th: { spras: "2", text: "Thai" },
  tr: { spras: "T", text: "Turkish" },
  tc: { spras: "뾣", text: "Tuvinain" },
  z8: { spras: ";", text: "US English" },
  uk: { spras: "8", text: "Ukrainian" },
  vi: { spras: "쁩", text: "Vietnamese" },
});

// Parameter types
export const ParamType = Object.freeze({
  var: "var",
  struct: "struct",
  table: "table",
  exception: "exception",
});

// Parameter classes
export const ParamClass = Object.freeze({
  import: "I",
  changing: "C",
  table: "T",
  export: "E",
  exception: "X",
});

// Parameter classes desc
export const ParamClassDesc = Object.freeze({
  [ParamClass.import]: "IMPORT",
  [ParamClass.changing]: "CHANGING",
  [ParamClass.table]: "TABLE",
  [ParamClass.export]: "EXPORT",
  [ParamClass.exception]: "EXCEPTION",
});

// value input type may determines the input element tag
export const ValueInput = Object.freeze({
  binary: "binary",
  list: "list",
});

export const Tagname = Object.freeze({
  [ValueInput.binary]: "checkbox",
  [ValueInput.list]: "combo",
});


// work folder
export const runningInDocker = process.env.container === "docker";
export const DockerVolume = "/work";
const WorkingFolder = runningInDocker ? DockerVolume : "./";

export const DefaultFolder = Object.freeze({
  configuration: path.join(__dirname, "configuration"),
  userConfig: path.join(WorkingFolder, "config"),
  output: path.join(WorkingFolder, "api"),
});

// ui frameworks

function getFrameworks(files: string[]): string[] {
  return files
    .filter((e) => e.match(/-abap\.yaml$/))
    .join(",")
    .replace(/-abap\.yaml/g, "")
    .split(",");
}

export const UIFrameworks: readonly string[] = getFrameworks(
  fs.readdirSync(path.join(DefaultFolder.configuration, "ui"))
);

let localFrameworks: string[] = [];
if (fs.existsSync(DefaultFolder.userConfig)) {
  localFrameworks = getFrameworks(fs.readdirSync(DefaultFolder.userConfig));
}
export const UIFrameworksLocal: readonly string[] = localFrameworks;
export const UIFrameworksAll: readonly string[] = Array.from(
  new Set(UIFrameworks.concat(UIFrameworksLocal))
);
