const express = require("express");
const ValueHelp = require("abap-value-help").ValueInputHelp;
const Client = require("abap-value-help").Client;

// Generic ABAP Value Help API used in prototyping system
const shlpApi = {
  rfm_domvalues_get: "/COE/RBP_FE_SHLP_DOMVALUES_GET",
  rfm_metadata_get: "/COE/RBP_FE_SHLP_METADATA_GET",
  rfm_search: "/COE/RBP_FE_SHLP_GET",
};

const PORT = 3000;
const app = express();
let client;
let valueHelp;

app.use(express.json());

// Authenticate and open client connection
// Closed in /logout or automatically
app.route("/login").all(async (req, res) => {
  try {
    client = new Client(Object.keys(req.body) > 0 ? req.body : { dest: "MME" });
    await client.open();
    const user = await client.call("BAPI_USER_GET_DETAIL", {
      USERNAME: req.body.username || "DEMO",
    });
    // User parameters (SU3) passed to Value Helps handler
    // make user defaults appear in Value Help web forms just like in SAPGUI
    valueHelp = new ValueHelp(client, shlpApi, user.PARAMETER);
    res.json("connected");
  } catch (ex) {
    res.json(ex.message);
  }
});

// Fixed domain values
app.route("/fieldvalues").all(async (req, res) => {
  if (!(client && client.alive)) {
    return res.json("Do the login first");
  }
  const result = await valueHelp.getDomainValues(
    Object.keys(req.body) > 0 ? req.body : "RET_TYPE"
  );
  res.json(result);
});

// Complex/elementary Value Help descriptor (SH type)
// used to dynamically build the frontend Value Input dialog
app.route("/helpselect").all(async (req, res) => {
  if (!(client && client.alive)) {
    return res.json("Do the login first");
  }
  const descriptor = await valueHelp.getShlpDescriptor(
    Object.keys(req.body) > 0 ? req.body : { type: "SH", name: "CC_VBELN" }
  );
  res.json(descriptor);
});

// Run the search using selection parameters from Value Input Dialog
app.route("/search").all(async (req, res) => {
  if (!(client && client.alive)) {
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

  res.json(result);
});

// Close the connection (optional)
app.route("/logout").all(async (req, res) => {
  if (client && client.alive) await client.close();
  res.json("disconnected");
});

app.listen(PORT, () =>
  console.log(
    "ABAP Value Help server ready:",
    `\nhttp://localhost:${PORT}/login`,
    `\nhttp://localhost:${PORT}/fieldvalues`,
    `\nhttp://localhost:${PORT}/helpselect`,
    `\nhttp://localhost:${PORT}/search`,
    `\nhttp://localhost:${PORT}/logout`
  )
);
