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

describe("SH VBELN", () => {
  test("SH CC_VBELN", async () => {
    expect.assertions(6);
    const shlpId = { type: "SH", name: "CC_VBELN" };

    // descriptor
    const desc = await VI.getShlpDescriptor(shlpId);
    expect(desc).toMatchObject(loadFromFile("descriptor.SH_CC_VBELN.yaml"));

    // search
    const sel = [
      //["AUART", "I", "EQ", "OR", ""],
      ["BSTKD", "I", "EQ", "212345678", ""],
      ["VKORG", "I", "EQ", "1000", ""],
    ];

    const R = await VI.search({ type: "SH", name: "VMVAA" }, sel);

    // search result
    expect(R.search_result).toMatchObject(
      loadFromFile("searchResult.SH_VMVAA.yaml")
    );

    // result headers
    expect(R.headers).toMatchObject(
      loadFromFile("headers.result.SH_VMVAA.yaml")
    );

    // descriptor value
    expect(R.desc).toMatchObject(
      loadFromFile("descriptor.value.SH_VMVAA.yaml")
    );

    // shlpoutput
    expect(R.shlpoutput).toEqual("VBELN");

    // maxrows_exceeded
    expect(R.maxrows_exceeded).toEqual(false);
  });

  test("Getters: title not found", async () => {
    expect.assertions(1);
    const shlpId = {
      type: "SH",
      name: "XYZ",
    };
    try {
      const title = VI.getShlpTitle(shlpId);
    } catch (ex) {
      expect(ex).toEqual(new Error(`Shlp title not found: "SH XYZ"`));
    }
  });

  test("Getters: title, parameters", async () => {
    expect.assertions(3);
    const shlpId = {
      type: "SH",
      name: "VMVAA",
    };

    const desc = await VI.getShlpDescriptor(shlpId);
    expect(desc).toMatchObject(loadFromFile("descriptor.SH_VMVAA.yaml"));

    const title = VI.getShlpTitle(shlpId);
    expect(title).toEqual("Sales document according to customer PO number");

    const params = VI.getShlpParams(shlpId);
    expect(params).toEqual(loadFromFile("params.SH_VMVAA.yaml"));
  });

  test("Multi-output", async () => {
    expect.assertions(2);

    shlpname = "SH H_T001";

    const desc = (await VI.getShlpDescriptor({ type: "SH", name: "H_T001" }))[
      "SH H_T001"
    ];

    expect(desc.SHLPOUTPUT).toEqual("BUKRS");
    expect(desc.ALLOUTPUTS).toEqual(["BUKRS", "BUTXT", "ORT01", "WAERS"]);
  });
});
