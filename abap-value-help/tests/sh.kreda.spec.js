// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

const ValueInputHelp = require("../dist").ValueInputHelp;
const setup = require("./setup");

const loadFromFile = require("./utils").loadFromFile;
//const saveToFile = require("./utils").saveToFile;

("use strict");

let VI;
beforeAll(async () => {
  const vi = await ValueInputHelp.new(setup.client, setup.shlpApi);
  return (VI = vi);
});

const shlpId = { type: "SH", name: "KREDA" };

describe("SH KREDA", () => {
  test("SH KREDA", async () => {
    expect.assertions(7);

    // descriptor
    let desc = await VI.getShlpDescriptor(shlpId);
    expect(desc).toMatchObject(loadFromFile("descriptor.SH_KREDA.yaml"));

    // title
    const title = VI.getShlpTitle(shlpId);
    expect(title).toEqual("Vendors (General)");

    desc = desc["SH KREDA"];

    // scrlenmax
    expect(desc.SCRLENMAX).toEqual(21);

    // shlpoutput
    expect(desc.SHLPOUTPUT).toEqual("LIFNR");

    // alloutputs
    expect(desc.ALLOUTPUTS).toEqual([
      "BEGRU",
      "LAND1",
      "LIFNR",
      "MCOD1",
      "MCOD3",
      "PSTLZ",
      "SORTL",
    ]);

    // search parameters
    const params = VI.getShlpParams(shlpId);
    expect(params).toEqual(loadFromFile("params.SH_KREDA.yaml"));

    // search result headers
    const headers = VI.getSearchResultHeaders(shlpId);
    expect(headers).toEqual(loadFromFile("headers.SH_KREDA.yaml"));
  });

  test("SH KREDA search", async () => {
    expect.assertions(5);

    const sel = [["PSTLZ", "I", "EQ", "69254", ""]];
    const result = await VI.search(shlpId, sel);

    // shlpoutput
    expect(result.shlpoutput).toEqual("LIFNR");

    // maxrows
    expect(result.maxrows_exceeded).toEqual(false);

    // headers
    expect(result.headers).toEqual(
      loadFromFile("headers.result.SH_KREDA.yaml")
    );

    // search result
    expect(result.search_result).toEqual(loadFromFile("result.SH_KREDA.yaml"));

    // search result compact
    const resultCompact = await VI.search(shlpId, sel, { compact: true });
    expect(resultCompact.search_result).toEqual(
      loadFromFile("result.SH_KREDA.compact.yaml")
    );
  });
});
