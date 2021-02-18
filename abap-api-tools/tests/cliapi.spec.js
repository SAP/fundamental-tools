// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

const AbapCliApi = require("../dist/abap").AbapCliApi;

const Result = require("./results");

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

  test("call: stfc_connection, connection parameters", async () => {
    expect.assertions(2);

    const result = await api.call(cp, "stfc_connection");

    expect(Object.keys(result)).toEqual(["frontend"]);
    expect(result.frontend).toMatchObject(Result.Call1.frontend);
  });

  test("call: array rfm, destination", async () => {
    expect.assertions(2);

    const result = await api.call("MME", ["stfc_connection", "stfc_structure"]);

    expect(Object.keys(result)).toEqual(["frontend"]);
    expect(result.frontend).toMatchObject(Result.Call2.frontend);
  });

  test("get : stfc_connection destination", async () => {
    expect.assertions(2);

    const result = await api.get("MME", "stfc_connection");

    expect(result.annotations).toMatchObject(Result.GetStfcConn.annotations);
    expect(result.frontend).toMatchObject(Result.GetStfcConn.frontend);
  });

  test("get : stfc_structure, connection parameters", async () => {
    expect.assertions(2);

    const result = await api.get(cp, "stfc_structure");

    expect(result.annotations).toEqual(Result.GetStfcStruct.annotations);
    expect(result.frontend).toMatchObject(Result.GetStfcStruct.frontend);
  });

  test("get : array rfm, destination", async () => {
    expect.assertions(2);

    const result = await api.get("MME", ["stfc_connection", "stfc_structure"]);

    expect(result.annotations).toMatchObject(Result.Get2.annotations);
    expect(result.frontend).toMatchObject(Result.Get2.frontend);
  });

  test("make: stfc_structure", async () => {
    expect.assertions(1);

    const result = api.make(
      Result.GetStfcStruct.annotations,
      "fundamental-ngx"
    );

    expect(result.frontend.STFC_STRUCTURE.html).toEqual(
      Result.MakeStfcStruct.frontend.STFC_STRUCTURE.html
    );
  });
});
