## rfmcall

Calling an ABAP RFM from NodeJS requires mapping the NodeJS data into ABAP RFM input parameters.

[![NPM](https://nodei.co/npm/rfmcall.png?downloads=true&downloadRank=true)](https://nodei.co/npm/node-rfc/)

[![license](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
[![release](https://img.shields.io/npm/v/rfmcall.svg)](https://www.npmjs.com/package/rfmcall)
[![dt](https://img.shields.io/npm/dt/rfmcall.svg)](https://www.npmjs.com/package/node-rfc)
[![dm](https://img.shields.io/npm/dm/rfmcall.svg)](https://www.npmjs.com/package/rfmcall)

One has to check the ABAP system or the documentation, to find out the ABAP RFM parameters' structure
and code the RFM call from NodeJS accordingly. With many parameters, complex ABAP data structures,
some mandatory, others not, some with conversion ("ALPHA") exits etc., this work can be
tedious and error prone.

The `rfmcall` CLI utility provides a RFM call template, with pre-initialized ABAP data
structures and with helpful comments, saving the developers' time.

### Usage

Invoke the utility with ABAP backend destination (maintained in `sapnwrfc.ini`) and ABAP RFM name.

The RFM call template is by default echoed to console, with RFM parameters initialization and RFM invocation:

```shell
$ npm install rfmcall

$ rfmcall MME STFC_CONNECTION
//
// STFC_CONNECTION
//

let params = {

  // IMPORT PARAMETERS

  REQUTEXT                         :   "", // CHAR (255)
};

result = await client.call("STFC_CONNECTION", params);
```

Using the `-s` option, the template is saved to local `js` file:

```shell
$ rfmcall MME BAPI_USER_GET_DETAIL -s

$ cat BAPI_USER_GET_DETAIL.js
```

### RFM Template

The RFM call template starts with ABAP RFM parameters initialization, followed by RFM call.

- Optional parameters are commented out
- RFM elementary parameters (variables) are initialized with a NodeJS number of string
- RFM structure and table parameters are initialized with empty object `{}` or array `[]`
- The structure name is provided in a comment, with the detailed field level initialization following below
- The name of conversion (ALPHA) exit, if relevant for certain parameter or field, is provided in a comment (see BAPICOMREM/LANGU below )

**BAPI_USER_GET_DETAIL.js**

```js
//
// BAPI_USER_GET_DETAIL
//

let params = {
  // IMPORT PARAMETERS

  USERNAME: "", // CHAR (12) User Name
  //CACHE_RESULTS                  :   "", // CHAR (1) Temporarily buffer results in work process

  // TABLE PARAMETERS

  RETURN: [], // BAPIRET2 Return Structure
  //ACTIVITYGROUPS                 :   [], // BAPIAGR Activity Groups
  //ADDCOMREM                      :   [], // BAPICOMREM BAPI Structure Communication Comments
  //ADDFAX                         :   [], // BAPIADFAX BAPI Structure Fax Numbers
  ...
  ...
};

...
...
// ACTIVITYGROUPS BAPIAGR Activity Groups

let ACTIVITYGROUPS                    =   []; // BAPIAGR Activity Groups

let BAPIAGR = {
  AGR_NAME                         :   "", // CHAR (30) Role Name
  AGR_TEXT                         :   "", // CHAR (80) Role Description
  FROM_DAT                         :   "", // DATS (8) Date of menu generation
  ORG_FLAG                         :   "", // CHAR (1) Indicator: Indirect Assignment of the User to the Role
  TO_DAT                           :   "", // DATS (8) Date of menu generation
};

// ADDCOMREM BAPICOMREM BAPI Structure Communication Comments

let ADDCOMREM                         =   []; // BAPICOMREM BAPI Structure Communication Comments

let BAPICOMREM = {
  COMM_NOTES                       :   "", // CHAR (50) Communication link notes
  COMM_TYPE                        :   "", // CHAR (3) Communication Method (Key) (Business Address Services)
  CONSNUMBER                       :   "", // NUMC (3) Sequence Number
  ERRORFLAG                        :   "", // CHAR (1) Flag: Record not processed
  LANGU                            :   "", // LANG (1) ALPHA=ISOLA Language Key
  LANGU_ISO                        :   "", // CHAR (2) 2-Character SAP Language Code
};
```

Enjoy!
