// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

const AbapCliApi = require("../dist/abap").AbapCliApi;

const loadFromFile = require("./utils").loadFromFile;
const saveToFile = require("./utils").saveToFile;

("use strict");

describe("Integration API", () => {
  const api = new AbapCliApi();

  const cp = {
    user: "demo",
    passwd: "welcome",
    ashost: "10.68.110.51",
    sysnr: "00",
    client: "620",
    lang: "EN",
  };

  const shlpApi_MME = {
    determine: "/COE/RBP_FE_SHLP_DETERM_SEARCH",
    dom_values: "/COE/RBP_FE_SHLP_DOMVALUES_GET",
  };

  test("call: stfc_connection, connection parameters", async () => {
    expect.assertions(2);

    const expectedFn = "call_stfc_connection.yaml";
    const result = await api.call(
      { connectionParameters: cp },
      "stfc_connection"
    );
    //saveToFile(expectedFn, result);

    const expectedResult = loadFromFile(expectedFn);
    expect(Object.keys(result)).toEqual(["annotations", "frontend"]);
    expect(result.frontend).toMatchObject(expectedResult.frontend);
  });

  test("call: array rfm, destination", async () => {
    expect.assertions(2);

    const expectedFn = "call_stfc_connection_stfc_structure1.yaml";
    const result = await api.call("MME", ["stfc_connection", "stfc_structure"]);
    //saveToFile(expectedFn, result);

    const expectedResult = loadFromFile(expectedFn);
    expect(Object.keys(result)).toEqual(["annotations", "frontend"]);
    expect(result.frontend).toMatchObject(expectedResult.frontend);
  });

  test("get : stfc_connection destination", async () => {
    expect.assertions(2);

    const expectedFn = "get_stfc_connection.yaml";
    const result = await api.get("MME", "stfc_connection");
    //saveToFile(expectedFn, result);

    const expectedResult = loadFromFile(expectedFn);
    expect(result.annotations).toMatchObject(expectedResult.annotations);
    expect(result.frontend).toMatchObject(expectedResult.frontend);
  });

  test("get : stfc_structure, connection parameters", async () => {
    expect.assertions(2);

    const expectedFn = "get_stfc_structure.yaml";
    const result = await api.get(
      { connectionParameters: cp, searchHelpApi: shlpApi_MME },
      "stfc_structure"
    );
    //saveToFile(expectedFn, result);

    const expectedResult = loadFromFile(expectedFn);
    expect(result.annotations).toEqual(expectedResult.annotations);
    expect(result.frontend).toMatchObject(expectedResult.frontend);
  });

  test("get : array rfm, destination", async () => {
    expect.assertions(2);

    const expectedFn = "get_stfc_connection_stfc_structure.yaml";
    const result = await api.get({ connectionParameters: cp }, [
      "stfc_connection",
      "stfc_structure",
    ]);
    //saveToFile(expectedFn, result);

    const expectedResult = loadFromFile(expectedFn);
    expect(result.annotations).toMatchObject(expectedResult.annotations);
    expect(result.frontend).toMatchObject(expectedResult.frontend);
  });

  test("make: stfc_structure", async () => {
    expect.assertions(1);

    const expectedFn = "make_stfc_structure.yaml";

    const annotations = loadFromFile("get_stfc_structure.yaml").annotations;
    const result = api.make(annotations, "fundamental-ngx");
    //saveToFile(expectedFn, result);

    const expectedResult = loadFromFile(expectedFn);
    expect(result.frontend.STFC_STRUCTURE.html).toEqual(
      expectedResult.frontend.STFC_STRUCTURE.html
    );
  });

  test("make: stfc_structure with custom ui configuration", async () => {
    expect.assertions(1);

    const expectedFn = "make_stfc_structure_custom.yaml";

    const annotations = loadFromFile("get_stfc_structure.yaml").annotations;
    const customUi = loadFromFile("ui5-custom.yaml");
    const customAbap = loadFromFile("ui5-custom-abap.yaml");
    const result = api.make(annotations, {
      ui: customUi,
      abap: customAbap,
    });
    //saveToFile(expectedFn, result);

    const expectedResult = loadFromFile(expectedFn);
    expect(result.frontend.STFC_STRUCTURE.html).toEqual(
      expectedResult.frontend.STFC_STRUCTURE.html
    );
  });
});
