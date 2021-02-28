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

describe("FV Helps", () => {
  test("FV RET_TYPE", async () => {
    expect.assertions(1);

    const R = await VI.getDomainValues("RET_TYPE");
    expect(R).toEqual(loadFromFile("fieldValues.RET_TYPE.yaml"));
  });

  test("FV MM_MEMORYTYPE", async () => {
    expect.assertions(1);

    const R = await VI.getDomainValues("MM_MEMORYTYPE");
    expect(R).toEqual(loadFromFile("fieldValues.MM_MEMORYTYPE.yaml"));
  });

  test("FV ESTAK", async () => {
    expect.assertions(1);

    const R = await VI.getDomainValues("ESTAK");
    expect(R).toEqual(loadFromFile("fieldValues.ESTAK.yaml"));
  });
});
