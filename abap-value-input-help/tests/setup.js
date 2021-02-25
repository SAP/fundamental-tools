// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

const Client = require("node-rfc").Client;

module.exports = {
  shlpApi: Object.freeze({
    rfm_domvalues_get: "/COE/RBP_FE_SHLP_DOMVALUES_GET",
    rfm_metadata_get: "/COE/RBP_FE_SHLP_METADATA_GET",
    rfm_search: "/COE/RBP_FE_SHLP_GET",
  }),

  client: new Client({ dest: "MME" }),
};
