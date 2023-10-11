let host = 'http://coevi76'; // eslint-disable-line no-unused-vars
//let host = 'http://192.168.154.245';               // eslint-disable-line no-unused-vars
//let host   = 'https://coeportal118.saphosting.de'; // eslint-disable-line no-unused-vars

module.exports = {
  // app uses this host to generate urls and api calls and
  // api proxy of the run.js build task also redirects here
  host: host,

  // api server parameters
  api: {
    // used by app server, app, nginx and local proxy
    prefix: '/plm3/api',
    // used by app server
    port: 7001,
    // app server only
    sysid: 'MME',
    poolSize: 4,
    poolTreshold: 0,
    webguiHTML: 'http://coevi51.wdf.sap.corp:8000', // no /its proxy on webserver, backend in SAP-Corp
    // webguiHTML: `${host}/its`, // webserver /its proxy to backend
    // webguiHTML: 'https://coeportal118.saphosting.de/its',
    sendEmails: false,
    logRequests: false
  }
};
