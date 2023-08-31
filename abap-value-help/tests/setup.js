const Client = require("node-rfc").Client;

module.exports = {
  client: new Client({ dest: "MME" }),

  shlpApi: Object.freeze({
    determine: "/COE/RBP_FE_SHLP_DETERM_SEARCH",
    FV_descriptor_get: "/COE/RBP_FE_SHLP_DOMVALUES_GET",
    CT_descriptor_get: "FDT_GET_DDIC_METADATA",
    SH_descriptor_get: "/COE/RBP_FE_SHLP_METADATA_GET",
    search: "/COE/RBP_FE_SHLP_GET",
  }),
};
