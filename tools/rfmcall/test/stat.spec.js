// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

describe("stat", () => {
  const RfmParser = require("../dist/rfmparser").parseRFM;
  const connection = "MME";
  const quiet = { quiet: true };
  test("BAPI_BUPA_CENTRAL_GETDETAIL", async () => {
    expect.assertions(1);
    const rfm_name = "BAPI_BUPA_CENTRAL_GETDETAIL";
    const rfmparser = new RfmParser(connection, rfm_name);
    const metadata = await rfmparser.parse(quiet);
    expect(metadata.stat).toEqual({ variables: 3, structures: 5, tables: 15 });
  });

  test("/COE/RBP_FE_DATATYPES", async () => {
    expect.assertions(1);
    const rfm_name = "/COE/RBP_FE_DATATYPES";
    const rfmparser = new RfmParser(connection, rfm_name);
    const metadata = await rfmparser.parse(quiet);
    expect(metadata.stat).toEqual({ variables: 15, structures: 3, tables: 3 });
  });
});

(async () => {})();
