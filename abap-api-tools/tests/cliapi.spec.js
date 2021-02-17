// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

const CliApi = require("../dist/abap").CliApi;

("use strict");

describe("Pool Options", () => {
  const api = new CliApi();

  const cp = {
    user: "demo",
    passwd: "welcome",
    ashost: "10.68.110.51",
    sysnr: "00",
    client: "620",
    lang: "EN",
  };

  const RESULT1 = {
    annotations: {
      alpha: { all: [], rfm: {} },
      fields: {
        SYST: {
          LISEL: {
            format: {
              DATATYPE: "CHAR",
              DOMNAME: "SYCHAR255",
              INTTYPE: "C",
              LENG: 255,
              OUTPUTLEN: 255,
              ROLLNAME: "SYST_LISEL",
            },
            text: {
              FIELDTEXT: "ABAP System Field: Content of Selected List Line",
              REPTEXT: "Line Content",
              SCRTEXT_L: "Line Content",
              SCRTEXT_M: "Line Content",
              SCRTEXT_S: "Line",
            },
          },
        },
      },
      helps: {},
      parameters: {
        STFC_CONNECTION: {
          ECHOTEXT: {
            FIELDNAME: "LISEL",
            PARAMCLASS: "E",
            PARAMTEXT: "",
            TABNAME: "SYST",
            functionName: "STFC_CONNECTION",
            paramName: "ECHOTEXT",
            paramType: "var",
            required: true,
          },
          REQUTEXT: {
            FIELDNAME: "LISEL",
            PARAMCLASS: "I",
            PARAMTEXT: "",
            TABNAME: "SYST",
            functionName: "STFC_CONNECTION",
            paramName: "REQUTEXT",
            paramType: "var",
            required: true,
          },
          RESPTEXT: {
            FIELDNAME: "LISEL",
            PARAMCLASS: "E",
            PARAMTEXT: "",
            TABNAME: "SYST",
            functionName: "STFC_CONNECTION",
            paramName: "RESPTEXT",
            paramType: "var",
            required: true,
          },
        },
      },
      stat: {
        STFC_CONNECTION: { exception: 0, struct: 0, table: 0, var: 3 },
      },
      usage: {},
    },
    frontend: {
      STFC_CONNECTION: {
        js:
          "//\n" +
          "// STFC_CONNECTION var: 3  struct: 0  table: 0  exception: 0\n" +
          "//\n" +
          "// abap api\n" +
          "//\n" +
          "\n" +
          "// prettier-ignore\n" +
          "const parameters = {\n" +
          "\n" +
          "// IMPORT PARAMETERS\n" +
          "\n" +
          'REQUTEXT    :           "", // CHAR (255) no text (en)\n' +
          "\n" +
          "// EXPORT PARAMETERS\n" +
          "\n" +
          '// ECHOTEXT :           "", // CHAR (255) no text (en)\n' +
          '// RESPTEXT :           "", // CHAR (255) no text (en)\n' +
          "};\n" +
          "\n" +
          'const result = await client.call("STFC_CONNECTION", parameters);\n' +
          "\n" +
          "//\n" +
          "// IMPORT PARAMETERS\n" +
          "//\n" +
          "\n" +
          "\n" +
          "//\n" +
          "// EXPORT PARAMETERS\n" +
          "//\n",
      },
    },
  };

  const RESULT2 = {
    annotations: {
      alpha: { all: [], rfm: {} },
      fields: {
        RFCTEST: {
          RFCCHAR1: {
            format: {
              DATATYPE: "CHAR",
              DOMNAME: "RFCCHAR1",
              INTTYPE: "C",
              LENG: 1,
              LOWERCASE: "X",
              OUTPUTLEN: 1,
              ROLLNAME: "RFCCHAR1",
            },
            text: {
              FIELDTEXT: "Character field of length 1",
              REPTEXT: "char1",
              SCRTEXT_L: "char1",
              SCRTEXT_M: "char1",
              SCRTEXT_S: "char1",
            },
          },
          RFCCHAR2: {
            format: {
              DATATYPE: "CHAR",
              DOMNAME: "RFCCHAR2",
              INTTYPE: "C",
              LENG: 2,
              OUTPUTLEN: 2,
              ROLLNAME: "RFCCHAR2",
            },
            text: {
              FIELDTEXT: "Character field of length 2",
              REPTEXT: "char2",
              SCRTEXT_L: "char2",
              SCRTEXT_M: "char2",
              SCRTEXT_S: "char2",
            },
          },
          RFCCHAR4: {
            format: {
              DATATYPE: "CHAR",
              DOMNAME: "RFCCHAR4",
              INTTYPE: "C",
              LENG: 4,
              LOWERCASE: "X",
              OUTPUTLEN: 4,
              ROLLNAME: "RFCCHAR4",
            },
            text: {
              FIELDTEXT: "Character field of length 4",
              REPTEXT: "char4",
              SCRTEXT_L: "char4",
              SCRTEXT_M: "char4",
              SCRTEXT_S: "char4",
            },
          },
          RFCDATA1: {
            format: {
              DATATYPE: "CHAR",
              DOMNAME: "TEXT50",
              INTTYPE: "C",
              LENG: 50,
              LOWERCASE: "X",
              OUTPUTLEN: 50,
              ROLLNAME: "CHAR50",
            },
            text: {
              FIELDTEXT: "Comment",
              REPTEXT: "c",
              SCRTEXT_L: "c",
              SCRTEXT_M: "c",
              SCRTEXT_S: "c",
            },
          },
          RFCDATA2: {
            format: {
              DATATYPE: "CHAR",
              DOMNAME: "TEXT50",
              INTTYPE: "C",
              LENG: 50,
              LOWERCASE: "X",
              OUTPUTLEN: 50,
              ROLLNAME: "CHAR50",
            },
            text: {
              FIELDTEXT: "Comment",
              REPTEXT: "c",
              SCRTEXT_L: "c",
              SCRTEXT_M: "c",
              SCRTEXT_S: "c",
            },
          },
          RFCDATE: {
            format: {
              DATATYPE: "DATS",
              DOMNAME: "RFCDATE",
              INTTYPE: "D",
              LENG: 8,
              OUTPUTLEN: 10,
              ROLLNAME: "RFCDATE",
            },
            text: {
              FIELDTEXT: "Date field",
              REPTEXT: "Date",
              SCRTEXT_L: "Date",
              SCRTEXT_M: "Date",
              SCRTEXT_S: "Date",
            },
          },
          RFCFLOAT: {
            format: {
              DATATYPE: "FLTP",
              DECIMALS: 16,
              DOMNAME: "RFCFLOAT",
              INTTYPE: "F",
              LENG: 16,
              OUTPUTLEN: 22,
              ROLLNAME: "RFCFLOAT",
            },
            text: {
              FIELDTEXT: "Float field",
              REPTEXT: "Float",
              SCRTEXT_L: "Float",
              SCRTEXT_M: "Float",
              SCRTEXT_S: "Float",
            },
          },
          RFCHEX3: {
            format: {
              DATATYPE: "RAW",
              DOMNAME: "RFCHEX3",
              INTTYPE: "X",
              LENG: 3,
              OUTPUTLEN: 6,
              ROLLNAME: "RFCHEX3",
            },
            text: {
              FIELDTEXT: "HEX field of length 3",
              REPTEXT: "hex3",
              SCRTEXT_L: "hex3",
              SCRTEXT_M: "hex3",
              SCRTEXT_S: "hex3",
            },
          },
          RFCINT1: {
            format: {
              DATATYPE: "INT1",
              DOMNAME: "RFCINT1",
              INTTYPE: "b",
              LENG: 3,
              OUTPUTLEN: 3,
              ROLLNAME: "RFCINT1",
            },
            text: {
              FIELDTEXT: "INT1 field",
              REPTEXT: "INT1",
              SCRTEXT_L: "INT1",
              SCRTEXT_M: "INT1",
              SCRTEXT_S: "INT1",
            },
          },
          RFCINT2: {
            format: {
              DATATYPE: "INT2",
              DOMNAME: "RFCINT2",
              INTTYPE: "s",
              LENG: 5,
              OUTPUTLEN: 5,
              ROLLNAME: "RFCINT2",
            },
            text: {
              FIELDTEXT: "INT2 field",
              REPTEXT: "INT2",
              SCRTEXT_L: "INT2",
              SCRTEXT_M: "INT2",
              SCRTEXT_S: "INT2",
            },
          },
          RFCINT4: {
            format: {
              DATATYPE: "INT4",
              DOMNAME: "RFCINT4",
              INTTYPE: "I",
              LENG: 10,
              OUTPUTLEN: 10,
              ROLLNAME: "RFCINT4",
            },
            text: {
              FIELDTEXT: "INT4 field",
              REPTEXT: "INT4",
              SCRTEXT_L: "INT4",
              SCRTEXT_M: "INT4",
              SCRTEXT_S: "INT4",
            },
          },
          RFCTIME: {
            format: {
              DATATYPE: "TIMS",
              DOMNAME: "RFCTIME",
              INTTYPE: "T",
              LENG: 6,
              OUTPUTLEN: 8,
              ROLLNAME: "RFCTIME",
            },
            text: {
              FIELDTEXT: "Validity Period",
              REPTEXT: "Validity Period",
              SCRTEXT_L: "Validity Period",
              SCRTEXT_M: "Validity Period",
              SCRTEXT_S: "Duration",
            },
          },
        },
        SYST: {
          LISEL: {
            format: {
              DATATYPE: "CHAR",
              DOMNAME: "SYCHAR255",
              INTTYPE: "C",
              LENG: 255,
              OUTPUTLEN: 255,
              ROLLNAME: "SYST_LISEL",
            },
            text: {
              FIELDTEXT: "ABAP System Field: Content of Selected List Line",
              REPTEXT: "Line Content",
              SCRTEXT_L: "Line Content",
              SCRTEXT_M: "Line Content",
              SCRTEXT_S: "Line",
            },
          },
        },
      },
      helps: {},
      parameters: {
        STFC_CONNECTION: {
          ECHOTEXT: {
            FIELDNAME: "LISEL",
            PARAMCLASS: "E",
            PARAMTEXT: "",
            TABNAME: "SYST",
            functionName: "STFC_CONNECTION",
            paramName: "ECHOTEXT",
            paramType: "var",
            required: true,
          },
          REQUTEXT: {
            FIELDNAME: "LISEL",
            PARAMCLASS: "I",
            PARAMTEXT: "",
            TABNAME: "SYST",
            functionName: "STFC_CONNECTION",
            paramName: "REQUTEXT",
            paramType: "var",
            required: true,
          },
          RESPTEXT: {
            FIELDNAME: "LISEL",
            PARAMCLASS: "E",
            PARAMTEXT: "",
            TABNAME: "SYST",
            functionName: "STFC_CONNECTION",
            paramName: "RESPTEXT",
            paramType: "var",
            required: true,
          },
        },
        STFC_STRUCTURE: {
          ECHOSTRUCT: {
            PARAMCLASS: "E",
            PARAMTEXT: "Exporting structure",
            TABNAME: "RFCTEST",
            functionName: "STFC_STRUCTURE",
            paramName: "ECHOSTRUCT",
            paramType: "struct",
            required: true,
          },
          IMPORTSTRUCT: {
            PARAMCLASS: "I",
            PARAMTEXT: "Importing structure",
            TABNAME: "RFCTEST",
            functionName: "STFC_STRUCTURE",
            paramName: "IMPORTSTRUCT",
            paramType: "struct",
            required: true,
          },
          RESPTEXT: {
            FIELDNAME: "LISEL",
            PARAMCLASS: "E",
            PARAMTEXT: "Exporting response message",
            TABNAME: "SYST",
            functionName: "STFC_STRUCTURE",
            paramName: "RESPTEXT",
            paramType: "var",
            required: true,
          },
          RFCTABLE: {
            PARAMCLASS: "T",
            PARAMTEXT: "Importing/exporting table",
            TABNAME: "RFCTEST",
            functionName: "STFC_STRUCTURE",
            paramName: "RFCTABLE",
            paramType: "table",
            required: true,
          },
        },
      },
      stat: {
        STFC_CONNECTION: { exception: 0, struct: 0, table: 0, var: 3 },
        STFC_STRUCTURE: { exception: 0, struct: 2, table: 1, var: 1 },
      },
      usage: { RFCTEST: ["STFC_STRUCTURE"] },
    },
    frontend: {
      STFC_CONNECTION: {
        js:
          "//\n" +
          "// STFC_CONNECTION var: 3  struct: 0  table: 0  exception: 0\n" +
          "//\n" +
          "// abap api\n" +
          "//\n" +
          "\n" +
          "// prettier-ignore\n" +
          "const parameters = {\n" +
          "\n" +
          "// IMPORT PARAMETERS\n" +
          "\n" +
          'REQUTEXT    :           "", // CHAR (255) no text (en)\n' +
          "\n" +
          "// EXPORT PARAMETERS\n" +
          "\n" +
          '// ECHOTEXT :           "", // CHAR (255) no text (en)\n' +
          '// RESPTEXT :           "", // CHAR (255) no text (en)\n' +
          "};\n" +
          "\n" +
          'const result = await client.call("STFC_CONNECTION", parameters);\n' +
          "\n" +
          "//\n" +
          "// IMPORT PARAMETERS\n" +
          "//\n" +
          "\n" +
          "\n" +
          "//\n" +
          "// EXPORT PARAMETERS\n" +
          "//\n",
      },
      STFC_STRUCTURE: {
        js:
          "//\n" +
          "// STFC_STRUCTURE var: 1  struct: 2  table: 1  exception: 0\n" +
          "//\n" +
          "// abap api\n" +
          "//\n" +
          "\n" +
          "// prettier-ignore\n" +
          "const parameters = {\n" +
          "\n" +
          "// IMPORT PARAMETERS\n" +
          "\n" +
          "IMPORTSTRUCT    :           {}, // RFCTEST Importing structure\n" +
          "\n" +
          "// TABLE PARAMETERS\n" +
          "\n" +
          "RFCTABLE        :           [], // RFCTEST Importing/exporting table\n" +
          "\n" +
          "// EXPORT PARAMETERS\n" +
          "\n" +
          '// RESPTEXT     :           "", // CHAR (255) Exporting response message\n' +
          "// ECHOSTRUCT   :           {}, // RFCTEST Exporting structure\n" +
          "};\n" +
          "\n" +
          'const result = await client.call("STFC_STRUCTURE", parameters);\n' +
          "\n" +
          "//\n" +
          "// IMPORT PARAMETERS\n" +
          "//\n" +
          "\n" +
          "// RFCTEST  Importing structure\n" +
          "\n" +
          "// prettier-ignore\n" +
          "const IMPORTSTRUCT= {\n" +
          '  RFCFLOAT                         : "0.0", // FLTP (16.16) Float field\n' +
          '  RFCCHAR1                         :   "", // CHAR (1) Character field of length 1\n' +
          "  RFCINT2                          :    0, // INT2 (5) INT2 field\n" +
          "  RFCINT1                          :    0, // INT1 (3) INT1 field\n" +
          '  RFCCHAR4                         :   "", // CHAR (4) Character field of length 4\n' +
          "  RFCINT4                          :    0, // INT4 (10) INT4 field\n" +
          "  RFCHEX3                          : bytes(), // RAW (3) HEX field of length 3\n" +
          '  RFCCHAR2                         :   "", // CHAR (2) Character field of length 2\n' +
          '  RFCTIME                          :   "", // TIMS (6) Validity Period\n' +
          '  RFCDATE                          :   "", // DATS (8) Date field\n' +
          '  RFCDATA1                         :   "", // CHAR (50) Comment\n' +
          '  RFCDATA2                         :   "", // CHAR (50) Comment\n' +
          "};\n" +
          "\n" +
          "\n" +
          "//\n" +
          "// TABLE PARAMETERS\n" +
          "//\n" +
          "\n" +
          "// RFCTEST  Importing/exporting table\n" +
          "const RFCTABLE= [];\n" +
          "\n" +
          "// prettier-ignore\n" +
          "const RFCTABLE= {\n" +
          '  RFCFLOAT                         : "0.0", // FLTP (16.16) Float field\n' +
          '  RFCCHAR1                         :   "", // CHAR (1) Character field of length 1\n' +
          "  RFCINT2                          :    0, // INT2 (5) INT2 field\n" +
          "  RFCINT1                          :    0, // INT1 (3) INT1 field\n" +
          '  RFCCHAR4                         :   "", // CHAR (4) Character field of length 4\n' +
          "  RFCINT4                          :    0, // INT4 (10) INT4 field\n" +
          "  RFCHEX3                          : bytes(), // RAW (3) HEX field of length 3\n" +
          '  RFCCHAR2                         :   "", // CHAR (2) Character field of length 2\n' +
          '  RFCTIME                          :   "", // TIMS (6) Validity Period\n' +
          '  RFCDATE                          :   "", // DATS (8) Date field\n' +
          '  RFCDATA1                         :   "", // CHAR (50) Comment\n' +
          '  RFCDATA2                         :   "", // CHAR (50) Comment\n' +
          "};\n" +
          "\n" +
          "\n" +
          "//\n" +
          "// EXPORT PARAMETERS\n" +
          "//\n" +
          "\n" +
          "// RFCTEST  Exporting structure\n" +
          "\n" +
          "// prettier-ignore\n" +
          "const ECHOSTRUCT= {\n" +
          '  RFCFLOAT                         : "0.0", // FLTP (16.16) Float field\n' +
          '  RFCCHAR1                         :   "", // CHAR (1) Character field of length 1\n' +
          "  RFCINT2                          :    0, // INT2 (5) INT2 field\n" +
          "  RFCINT1                          :    0, // INT1 (3) INT1 field\n" +
          '  RFCCHAR4                         :   "", // CHAR (4) Character field of length 4\n' +
          "  RFCINT4                          :    0, // INT4 (10) INT4 field\n" +
          "  RFCHEX3                          : bytes(), // RAW (3) HEX field of length 3\n" +
          '  RFCCHAR2                         :   "", // CHAR (2) Character field of length 2\n' +
          '  RFCTIME                          :   "", // TIMS (6) Validity Period\n' +
          '  RFCDATE                          :   "", // DATS (8) Date field\n' +
          '  RFCDATA1                         :   "", // CHAR (50) Comment\n' +
          '  RFCDATA2                         :   "", // CHAR (50) Comment\n' +
          "};\n",
      },
    },
  };

  test("api: single rfm, destination", async () => {
    expect.assertions(2);
    const result = await api.get("MME", "stfc_connection");

    expect(result.annotations).toMatchObject(RESULT1.annotations);
    expect(result.frontend).toMatchObject(RESULT1.frontend);
  });

  test("api: single rfm, connection parameters", async () => {
    expect.assertions(2);
    const result = await api.get(cp, "stfc_connection");

    expect(result.annotations).toMatchObject(RESULT1.annotations);
    expect(result.frontend).toMatchObject(RESULT1.frontend);
  });

  test("api: array rfm, destination", async () => {
    expect.assertions(2);
    const result = await api.get("MME", ["stfc_connection", "stfc_structure"]);

    expect(result.annotations).toMatchObject(RESULT2.annotations);
    expect(result.frontend).toMatchObject(RESULT2.frontend);
  });
});
