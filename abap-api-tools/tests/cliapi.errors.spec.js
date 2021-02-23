// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

const AbapCliApi = require("../dist/abap").AbapCliApi;

const loadFromFile = require("./utils").loadFromFile;
const saveToFile = require("./utils").saveToFile;

("use strict");

describe("Integration API errors checks", () => {
  const api = new AbapCliApi();

  const cp = {
    user: "demo",
    passwd: "welcome",
    ashost: "10.68.110.51",
    sysnr: "00",
    client: "620",
    lang: "EN",
  };

  test("get : stfc_structure, invalid shlp key", async () => {
    try {
      await api.get(
        {
          connectionParameters: cp,
          searchHelpApi: {
            xdetermine: "/COE/RBP_FE_SHLP_DETERM_SEARCH",
            dom_values: "/COE/RBP_FE_SHLP_DOMVALUES_GET",
          },
        },
        "stfc_structure"
      );
    } catch (ex) {
      expect(ex).toEqual(
        new Error(`Search Help API key not supported: "xdetermine"`)
      );
    }
  });

  test("get : stfc_structure, invalid shlp key", async () => {
    try {
      await api.get(
        {
          connectionParameters: cp,
          searchHelpApi: {
            determine: "/COE/RBP_FE_SHLP_DETERM_SEARCH",
            dom_values: "/COE/RBP_FE_SHLP_DOMVALUES_GETXXXXX",
          },
        },
        "stfc_structure"
      );
    } catch (ex) {
      expect(ex).toEqual(
        new Error(
          `Search help API name too long: "/COE/RBP_FE_SHLP_DOMVALUES_GETXXXXX"`
        )
      );
    }
  });
});
