// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

const express = require("express");
//const ValueHelp = require("../../dist").ValueInputHelp;
const ValueHelp = require("abap-value-help").ValueInputHelp;
const Pool = require("node-rfc").Pool;

// Generic ABAP Value Help API used in prototyping system
const shlpApi = {
  determine: "/COE/RBP_FE_SHLP_DETERM_SEARCH",
  FV_descriptor_get: "/COE/RBP_FE_SHLP_DOMVALUES_GET",
  CT_descriptor_get: "FDT_GET_DDIC_METADATA",
  SH_descriptor_get: "/COE/RBP_FE_SHLP_METADATA_GET",
  search: "/COE/RBP_FE_SHLP_GET",
};

const PORT = 3000;
const app = express();
let pool;
let valueHelpClient;
let valueHelp;

app.use(express.json());

// Authenticate and open client connection
// Closed in /logout or automatically
app.route("/login").all(async (req, res) => {
  try {
    pool = new Pool(
      Object.keys(req.body).length > 0
        ? req.body
        : { connectionParameters: { dest: "MME" } }
    );
    valueHelpClient = await pool.acquire();
    const user = await valueHelpClient.call("BAPI_USER_GET_DETAIL", {
      USERNAME: req.body.username || "DEMO",
    });
    // User parameters (SU3) passed to Value Helps handler
    // make user defaults appear in Value Help web forms just like in SAPGUI
    valueHelp = new ValueHelp(valueHelpClient, shlpApi, user.PARAMETER);
    res.json("connected");
  } catch (ex) {
    res.json(ex.message);
  }
});

// Fixed domain values
app.route("/fieldvalues").all(async (req, res) => {
  if (!pool) {
    return res.json("Do the login first");
  }
  const result = await valueHelp.getDomainValues(
    Object.keys(req.body).length > 0 ? req.body : "RET_TYPE"
  );
  //res.json(result);
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(result, null, 4));
});

// Complex/elementary Value Help descriptor (SH type)
// used to dynamically build the frontend Value Input dialog
app.route("/helpselect").all(async (req, res) => {
  if (!pool) {
    return res.json("Do the login first");
  }
  const descriptor = await valueHelp.getShlpDescriptor(
    Object.keys(req.body).length > 0
      ? req.body
      : { type: "SH", name: "CC_VBELN" }
  );
  //res.json(descriptor);
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(descriptor, null, 4));
});

// Run the search using selection parameters from Value Input Dialog
app.route("/search").all(async (req, res) => {
  if (!pool) {
    return res.json("Do the login first");
  }

  const shlpId = req.body.shlpId
    ? req.body.shlpId
    : { type: "SH", name: "VMVAA" };

  const selection = req.body.selection
    ? req.body.selection
    : [
        //["AUART", "I", "EQ", "OR", ""],
        ["BSTKD", "I", "EQ", "212345678", ""],
        ["VKORG", "I", "EQ", "1000", ""],
      ];

  const result = await valueHelp.search(shlpId, selection);

  //res.json(result);
  res.header("Content-Type", "application/json");
  res.send(JSON.stringify(result, null, 4));
});

// Close the connection (optional)
app.route("/logout").all(async (req, res) => {
  if (pool && valueHelpClient.alive) await pool.release(valueHelpClient);
  res.json("disconnected");
});

app.listen(PORT, () =>
  console.log(
    "Value Helps server ready:",
    `\nhttp://localhost:${PORT}/login`,
    `\nhttp://localhost:${PORT}/fieldvalues`,
    `\nhttp://localhost:${PORT}/helpselect`,
    `\nhttp://localhost:${PORT}/search`,
    `\nhttp://localhost:${PORT}/logout`
  )
);
