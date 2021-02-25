// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

const ValueInputHelp = require("../dist").ValueInputHelp;
const setup = require("./setup");

("use strict");

let VI;
beforeAll(async () => {
  const vi = await ValueInputHelp.new(setup.client, setup.shlpApi);
  return (VI = vi);
});

describe("CH Helps", () => {
  test("Error: unsupported help type", async () => {
    expect.assertions(1);

    try {
      await VI.getShlpDescriptor({ type: "CL", name: "any" });
    } catch (ex) {
      expect(ex).toEqual(
        new Error(`Search Help type "CL" not supported, only: SH, CH and CT`)
      );
    }
  });

  test("CH EKKO", async () => {
    expect.assertions(3);

    const shlpId = { type: "CH", name: "EKPO" };
    const sel = [["EBELN", "I", "CP", "450000007*", ""]];

    let R = await VI.search(shlpId, sel);

    expect(R.headers).toEqual([
      {
        field: "EBELN",
        len: 10,
        abaptype: "CHAR",
        title: "Purch.doc.",
        text_align: "left",
        position: "",
      },
      {
        field: "EBELP",
        len: 5,
        abaptype: "NUMC",
        title: "Item",
        text_align: "left",
        position: "",
      },
    ]);

    // full
    expect(R.search_result).toEqual([
      { EBELN: "4500000070", EBELP: "00010" },
      { EBELN: "4500000071", EBELP: "00010" },
      { EBELN: "4500000072", EBELP: "00010" },
      { EBELN: "4500000073", EBELP: "00010" },
      { EBELN: "4500000074", EBELP: "00010" },
      { EBELN: "4500000075", EBELP: "00010" },
      { EBELN: "4500000076", EBELP: "00010" },
      { EBELN: "4500000077", EBELP: "00010" },
      { EBELN: "4500000078", EBELP: "00010" },
      { EBELN: "4500000079", EBELP: "00010" },
    ]);

    // compact
    R = await VI.search(shlpId, sel, { compact: true });
    expect(R.search_result).toEqual([
      ["4500000070", "00010"],
      ["4500000071", "00010"],
      ["4500000072", "00010"],
      ["4500000073", "00010"],
      ["4500000074", "00010"],
      ["4500000075", "00010"],
      ["4500000076", "00010"],
      ["4500000077", "00010"],
      ["4500000078", "00010"],
      ["4500000079", "00010"],
    ]);
  });
});
