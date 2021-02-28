// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

const ValueInputHelp = require("../dist").ValueInputHelp;
const setup = require("./setup");

const loadFromFile = require("./utils").loadFromFile;
//const saveToFile = require("./utils").saveToFile

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

    expect(R.headers).toEqual(loadFromFile("headers.CH_EKKO.yaml"));
    expect(R.search_result).toEqual(loadFromFile("searchResult.CH_EKKO.yaml"));

    // compact
    R = await VI.search(shlpId, sel, { compact: true });
    expect(R.search_result).toEqual(
      loadFromFile("searchResult.CH_EKKO.compact.yaml")
    );
  });
});
