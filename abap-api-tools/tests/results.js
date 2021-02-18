exports.Call1 = {
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

exports.Call2 = {
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

exports.GetStfcConn = {
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

exports.GetStfcStruct = {
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
    stat: { STFC_STRUCTURE: { exception: 0, struct: 2, table: 1, var: 1 } },
    usage: { RFCTEST: ["STFC_STRUCTURE"] },
  },
  frontend: {
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

exports.Get2 = {
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

exports.MakeStfcStruct = {
  frontend: {
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
      html: `<!--
STFC_STRUCTURE exception: 0  struct: 2  table: 1  var: 1

abap api
-->

<!--
EXPORT PARAMETERS
-->

<!-- Parameter: ECHOSTRUCT structure: RFCTEST  Exporting structure -->

<div fd-form-item>
    <label fd-form-label>Character field of length 1</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"ECHOSTRUCT.RFCCHAR1\"
            data-abap=\"{type:'CHAR', length:'1'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Character field of length 2</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"ECHOSTRUCT.RFCCHAR2\"
            data-abap=\"{type:'CHAR', length:'2'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Character field of length 4</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"ECHOSTRUCT.RFCCHAR4\"
            data-abap=\"{type:'CHAR', length:'4'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Comment</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"ECHOSTRUCT.RFCDATA1\"
            data-abap=\"{type:'CHAR', length:'50'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Comment</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"ECHOSTRUCT.RFCDATA2\"
            data-abap=\"{type:'CHAR', length:'50'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Date field</label>
    <fd-date-picker [type]=\"single\" [(ngModel)]=\"ECHOSTRUCT.RFCDATE\"></fd-date-picker>
</div>

<div fd-form-item>
    <label fd-form-label>Float field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"ECHOSTRUCT.RFCFLOAT\"
            data-abap=\"{type:'FLTP', length:'1.15'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>HEX field of length 3</label>
    <textarea fd-form-control
        [(ngModel)]=\"ECHOSTRUCT.RFCHEX3\"
        data-abap=\"{type:'RAW', length:'3'}\"
        aria-required=\"true\"
    ></textarea>
</div>

<div fd-form-item>
    <label fd-form-label>INT1 field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"ECHOSTRUCT.RFCINT1\"
            data-abap=\"{type:'INT1', length:'3'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>INT2 field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"ECHOSTRUCT.RFCINT2\"
            data-abap=\"{type:'INT2', length:'5'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>INT4 field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"ECHOSTRUCT.RFCINT4\"
            data-abap=\"{type:'INT4', length:'10'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Validity Period</label>
    <fd-time-picker [(ngModel)]=\"ECHOSTRUCT.RFCTIME\"></fd-time-picker>
</div>


<!--
IMPORT PARAMETERS
-->

<!-- Parameter: IMPORTSTRUCT structure: RFCTEST  Importing structure -->

<div fd-form-item>
    <label fd-form-label>Character field of length 1</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"IMPORTSTRUCT.RFCCHAR1\"
            data-abap=\"{type:'CHAR', length:'1'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Character field of length 2</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"IMPORTSTRUCT.RFCCHAR2\"
            data-abap=\"{type:'CHAR', length:'2'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Character field of length 4</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"IMPORTSTRUCT.RFCCHAR4\"
            data-abap=\"{type:'CHAR', length:'4'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Comment</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"IMPORTSTRUCT.RFCDATA1\"
            data-abap=\"{type:'CHAR', length:'50'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Comment</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"IMPORTSTRUCT.RFCDATA2\"
            data-abap=\"{type:'CHAR', length:'50'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Date field</label>
    <fd-date-picker [type]=\"single\" [(ngModel)]=\"IMPORTSTRUCT.RFCDATE\"></fd-date-picker>
</div>

<div fd-form-item>
    <label fd-form-label>Float field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"IMPORTSTRUCT.RFCFLOAT\"
            data-abap=\"{type:'FLTP', length:'1.15'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>HEX field of length 3</label>
    <textarea fd-form-control
        [(ngModel)]=\"IMPORTSTRUCT.RFCHEX3\"
        data-abap=\"{type:'RAW', length:'3'}\"
        aria-required=\"true\"
    ></textarea>
</div>

<div fd-form-item>
    <label fd-form-label>INT1 field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"IMPORTSTRUCT.RFCINT1\"
            data-abap=\"{type:'INT1', length:'3'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>INT2 field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"IMPORTSTRUCT.RFCINT2\"
            data-abap=\"{type:'INT2', length:'5'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>INT4 field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"IMPORTSTRUCT.RFCINT4\"
            data-abap=\"{type:'INT4', length:'10'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Validity Period</label>
    <fd-time-picker [(ngModel)]=\"IMPORTSTRUCT.RFCTIME\"></fd-time-picker>
</div>


<!--
EXPORT PARAMETERS
-->

<div fd-form-item>
    <label fd-form-label>Exporting response message</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"RESPTEXT\"
            data-abap=\"{type:'CHAR', length:'255'}\"
        />
</div>


<!--
TABLE PARAMETERS
-->

<!-- Parameter: RFCTABLE structure: RFCTEST  Importing/exporting table -->

<table fd-table>
  <thead fd-table-header>
    <tr fd-table-row>
      <th fd-table-cell>Character field of length 1</th>
      <th fd-table-cell>Character field of length 2</th>
      <th fd-table-cell>Character field of length 4</th>
      <th fd-table-cell>Comment</th>
      <th fd-table-cell>Comment</th>
      <th fd-table-cell>Date field</th>
      <th fd-table-cell>Float field</th>
      <th fd-table-cell>HEX field of length 3</th>
      <th fd-table-cell>INT1 field</th>
      <th fd-table-cell>INT2 field</th>
      <th fd-table-cell>INT4 field</th>
      <th fd-table-cell>Validity Period</th>
    </tr>
  </thead>
  <tbody fd-table-body>
    <tr *ngFor=\"let row of RFCTABLE\" fd-table-row>
       <td fd-table-cell>{{ RFCCHAR1 }}</td>
       <td fd-table-cell>{{ RFCCHAR2 }}</td>
       <td fd-table-cell>{{ RFCCHAR4 }}</td>
       <td fd-table-cell>{{ RFCDATA1 }}</td>
       <td fd-table-cell>{{ RFCDATA2 }}</td>
       <td fd-table-cell>{{ RFCDATE }}</td>
       <td fd-table-cell>{{ RFCFLOAT }}</td>
       <td fd-table-cell>{{ RFCHEX3 }}</td>
       <td fd-table-cell>{{ RFCINT1 }}</td>
       <td fd-table-cell>{{ RFCINT2 }}</td>
       <td fd-table-cell>{{ RFCINT4 }}</td>
       <td fd-table-cell>{{ RFCTIME }}</td>
    </tr>
  </tbody>
</table>

<div fd-form-item>
    <label fd-form-label>Character field of length 1</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"RFCTABLE.RFCCHAR1\"
            data-abap=\"{type:'CHAR', length:'1'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Character field of length 2</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"RFCTABLE.RFCCHAR2\"
            data-abap=\"{type:'CHAR', length:'2'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Character field of length 4</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"RFCTABLE.RFCCHAR4\"
            data-abap=\"{type:'CHAR', length:'4'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Comment</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"RFCTABLE.RFCDATA1\"
            data-abap=\"{type:'CHAR', length:'50'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Comment</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"RFCTABLE.RFCDATA2\"
            data-abap=\"{type:'CHAR', length:'50'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Date field</label>
    <fd-date-picker [type]=\"single\" [(ngModel)]=\"RFCTABLE.RFCDATE\"></fd-date-picker>
</div>

<div fd-form-item>
    <label fd-form-label>Float field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"RFCTABLE.RFCFLOAT\"
            data-abap=\"{type:'FLTP', length:'1.15'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>HEX field of length 3</label>
    <textarea fd-form-control
        [(ngModel)]=\"RFCTABLE.RFCHEX3\"
        data-abap=\"{type:'RAW', length:'3'}\"
        aria-required=\"true\"
    ></textarea>
</div>

<div fd-form-item>
    <label fd-form-label>INT1 field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"RFCTABLE.RFCINT1\"
            data-abap=\"{type:'INT1', length:'3'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>INT2 field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"RFCTABLE.RFCINT2\"
            data-abap=\"{type:'INT2', length:'5'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>INT4 field</label>
        <input fd-input fd-form-control
            [(ngModel)]=\"RFCTABLE.RFCINT4\"
            data-abap=\"{type:'INT4', length:'10'}\"
        />
</div>

<div fd-form-item>
    <label fd-form-label>Validity Period</label>
    <fd-time-picker [(ngModel)]=\"RFCTABLE.RFCTIME\"></fd-time-picker>
</div>
`,
    },
  },
};
