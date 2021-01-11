# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

""" Returns RFM metadata

For a given list of RFM names, read parameters,
fields and search helps metadata and cache
as JSON dictionaries:

    :param rfm_list: RFM names list

    :return: Metadata dictionaries
        Params.json
        Field.json
        Helps.json
"""
import argparse
from collections import OrderedDict
from pyrfc import Connection
from backend.constants import DEFAULT_OUTPUT_FOLDER, iso2_to_LANGU

PARAMTYPE_VAR = "var"
PARAMTYPE_STRUCT = "struct"
PARAMTYPE_TABLE = "table"
PARAMTYPE_EXC = "exception"

# unused parameters' properties
PARAM_XPROPS = [
    "EXID",
    "FUNCNAME",
    "PARAMETER",
    "TABNAME",
    "FIELDNAME",
    "OFFSET",
    "POSITION",
    "INTLENGTH",
    "DECIMALS",
    "OPTIONAL",
    "DEFAULT",
]


class ParseRFM:
    def __init__(self, args):
        self.RFM_NAME = args.rfm_name
        self.clientParameters = {"dest": args.destination_id}

        self.client = Connection(**self.clientParameters)
        self.LANGU = iso2_to_LANGU[args.language]
        self.FUNCTIONNAMES = [{"FUNCTIONNAME": self.RFM_NAME}]
        self.param_type_stat = {
            PARAMTYPE_VAR: 0,
            PARAMTYPE_STRUCT: 0,
            PARAMTYPE_TABLE: 0,
            PARAMTYPE_EXC: 0,
        }

    def PKeyToJS(self, p):
        return f"{p['FUNCNAME']} {p['PARAMETER']}".strip()

    def JSToPKey(self, paramKey):
        return paramKey.split()

    def FKeyToJS(self, p):
        return f"{p['TABNAME']} {p['FIELDNAME']}".strip()

    def JSToFKey(self, fieldKey):
        tabfield = fieldKey.split()
        if len(tabfield) == 1:
            return [tabfield[0], ""]
        else:
            return tabfield

    def getDFIES(self, param: dict, langu: str):

        param["paramKey"] = self.PKeyToJS(param)
        param["fieldKey"] = self.FKeyToJS(param)

        if param["fieldKey"] in self.Fields:
            return 0

        dfies = None
        try:
            ddif = self.client.call(
                "DDIF_FIELDINFO_GET",
                TABNAME=param["TABNAME"],
                FIELDNAME=param["FIELDNAME"],
                LANGU=langu,
                ALL_TYPES="X",
                GROUP_NAMES="X",
            )
            if param["paramType"] == PARAMTYPE_VAR:
                # variable
                if ddif["DDOBJTYPE"] in ["INTTAB", "TRANSP"]:
                    dfies = ddif["DFIES_TAB"][0]
                else:
                    dfies = ddif["DFIES_WA"]
            else:
                # structure or table
                if len(ddif["LINES_DESCR"]) > 0:
                    # try LINES_DESCR first, seem to be more "reliable" than DFIES_TAB (no .INCLUDEs)
                    dfies = ddif["LINES_DESCR"][0]["FIELDS"]
                elif len(ddif["DFIES_TAB"]) > 0:
                    dfies = ddif["DFIES_TAB"]
                else:
                    # single field row
                    dfies = [ddif["DFIES_WA"]]
            assert dfies is not None
            self.Fields[param["fieldKey"]] = self.annotation(dfies)
            return 0
        except Exception as ex:
            if param["paramType"] == PARAMTYPE_VAR and ex.key == "NOT_FOUND":
                # native variable datatype, w/o ddic
                param["nativeKey"] = param["TABNAME"]
            else:
                print(ex)
                ex.message += f"\n\nddic parsing error at: {param['paramType']} {param['paramKey']}"
                raise

    def annotation(self, dfies):
        if isinstance(dfies, list):
            # structure, table
            result = {}
            for field in dfies:
                # skip meta elements like .INCLUDE ...
                if len(field["INTTYPE"].strip()) > 0 and ".INCLUDE" not in field:
                    result[field["FIELDNAME"]] = self.xmarkup(field)
            return result
        else:
            # variable
            if "FIELDNAME" in dfies:
                # ddic type
                return self.xmarkup(dfies)
            # native ABAP type
            return dfies

    def xmarkup(self, dfies):
        FORMAT_FIELDS = [
            "ROLLNAME",
            "DOMNAME",
            "DATATYPE",
            "LENG",
            "OUTPUTLEN",
            "SIGN",
            "DECIMALS",
            "INTTYPE",
            "MASK",
            "MASKLEN",
            "LOWERCASE",
            "LTRFLDDIS",
            "REFTABLE",
            "REFFIELD",
        ]

        INPUT_FIELDS = ["VALEXI", "CONVEXIT", "MEMORYID", "SHLP"]

        BINARY_VALUES = ["", "X"]

        markup = {"format": {}, "input": {}, "text": self.get_text(dfies)}

        for i in dfies:
            if i in FORMAT_FIELDS:
                if i in ["DECIMALS", "MASKLEN", "LENG", "OUTPUTLEN", "INTLEN"]:
                    if int(dfies[i]) != 0:
                        markup["format"][i] = int(dfies[i])  # dfies[i].strip('0')
                elif len(dfies[i]) > 0 and i in [
                    "SIGN",
                    "MASK",
                    "LTRFLDDIS",
                    "LOWERCASE",
                    "REFTABLE",
                    "REFFIELD",
                ]:
                    markup["format"][i] = dfies[i]
                else:
                    markup["format"][i] = dfies[i]
            elif len(dfies[i].strip()) > 0 and i in INPUT_FIELDS:
                markup["input"][i] = dfies[i]

        if len(markup["format"]["DOMNAME"]) == 0:
            del markup["format"]["DOMNAME"]
        if len(markup["format"]["ROLLNAME"]) == 0:
            del markup["format"]["ROLLNAME"]

        if len(markup["input"]) == 0:
            del markup["input"]

        if dfies["LFIELDNAME"] != dfies["FIELDNAME"]:
            markup["format"]["LFIELDNAME"] = dfies["FIELDNAME"]

        return markup

    def get_text(self, dfies):
        TEXT_FIELDS = [
            "FIELDTEXT",
            "REPTEXT",
            "SCRTEXT_S",
            "SCRTEXT_M",
            "SCRTEXT_L",
        ]
        text = {}
        for t in TEXT_FIELDS:
            if len(dfies[t]) > 0:
                text[t] = dfies[t]
        return text

    def init(self):
        self.param_type_stat = {
            PARAMTYPE_VAR: 0,
            PARAMTYPE_STRUCT: 0,
            PARAMTYPE_TABLE: 0,
            PARAMTYPE_EXC: 0,
        }
        self.Fields = {}
        self.Params = {}

    def parse(self, parserOptions: dict = {}):
        self.init()
        r = self.client.call(
            "RFC_METADATA_GET",
            # DEEP = "X",
            # GET_CLIENT_DEP_FIELDS = "X",
            # GET_TIMESTAMPS = "X",
            EVALUATE_LINKS="X",  # comment to go for lower level DDIC: BAPI_EQUI_CHANGE EQUIPMENT
            # no backend ALPHA
            LANGUAGE=self.LANGU,
            FUNCTIONNAMES=self.FUNCTIONNAMES,
        )
        if r["FUNC_ERRORS"]:
            if r["FUNC_ERRORS"][0]["EXCEPTION"] == "FU_NOT_FOUND":
                raise ValueError(r["FUNC_ERRORS"])

        # set parameter type
        for p in list(r["PARAMETERS"]):

            # skip records with name 'CHANGING', not counted
            if p["PARAMETER"] == "CHANGING":
                r["PARAMETERS"].remove(p)
                continue

            # 'I' parameter type is INT4 internally
            if p["TABNAME"] == "I":
                p["TABNAME"] = "INT4"

            # set optional/required
            p["required"] = len(p["OPTIONAL"].strip()) == 0
            if not p["required"]:
                p["default"] = p["DEFAULT"]
            del p["DEFAULT"]

            # set param type
            if p["PARAMCLASS"] == "X" or not p["EXID"]:
                p["paramType"] = PARAMTYPE_EXC
            elif p["EXID"] == "h" or p["PARAMCLASS"] == "T":
                p["paramType"] = PARAMTYPE_TABLE
            elif p["EXID"] in "uv":
                p["paramType"] = PARAMTYPE_STRUCT
            else:
                p["paramType"] = PARAMTYPE_VAR

            # param type stats
            self.param_type_stat[p["paramType"]] += 1

            # skip exception parameters, counted
            if p["paramType"] == PARAMTYPE_EXC:
                r["PARAMETERS"].remove(p)
                continue

            # set ddic ref
            self.getDFIES(p, self.LANGU)

            # remove unused properties
            for unused in PARAM_XPROPS:
                if unused in p:
                    del p[unused]

            self.Params[p["paramKey"]] = p

        self.client.close()


def get_arg_parser():

    arg_usage = """rfmcall <backend destination id> <rfm name> [<option>]
where <option> can be:
    -h                  Quick help on rfmcall
    -l, --lang          ABAP text annotations language
    -o, --output_folder Model output folder, default: "out"
    --loglevel          Log level: "info" or "debug"
"""
    arg_parser = argparse.ArgumentParser(
        # prog = sys.argv[0],
        usage=arg_usage,
        description="ABAP RFM call template",
    )
    arg_parser.add_argument("destination_id", help="ABAP destination id")
    arg_parser.add_argument("rfm_name", help="ABAP RFM name")
    arg_parser.add_argument(
        "-l",
        "--lang",
        dest="language",
        default="en",
        help="Texts' language",
    )
    arg_parser.add_argument(
        "--loglevel",
        dest="log_level",
        default=None,
        choices=["info", "debug"],
        help="log level",
    )
    arg_parser.add_argument(
        "-o",
        "--output_folder",
        dest="output_folder",
        default=DEFAULT_OUTPUT_FOLDER,
        help="Output folder",
    )
    # arg_parser.add_argument(
    #     "-s",
    #     "--save",
    #     action="store_true",
    #     help="save RFM call template to local .js file",
    # )
    # arg_parser.add_argument(
    #     "-c",
    #     "--cache",
    #     action="store_true",
    #     help="cache the metadata into params.json and fields.json",
    # )
    # arg_parser.add_argument(
    #     "-q", "--quiet", action="store_true", help="no console echo"
    # )
    return arg_parser


if __name__ == "__main__":

    args = get_arg_parser().parse_args()

    rfm_parser = ParseRFM(args)
    rfm_parser.parse()
    # rfm_parser.write()

    # abcd
    paramsSorted = sorted(rfm_parser.Params.keys())
    for p in paramsSorted:
        print(p, rfm_parser.Params[p]["paramType"])

    paramsOrdered = OrderedDict()

    # required IMPORT
    for k in paramsSorted:
        v = rfm_parser.Params[k]
        if v["PARAMCLASS"] == "I" and v["required"]:
            paramsOrdered[k] = v

    # optional IMPORT
    for k in paramsSorted:
        v = rfm_parser.Params[k]
        if v["PARAMCLASS"] == "I" and not v["required"]:
            paramsOrdered[k] = v

    # required CHANGING
    for k in paramsSorted:
        v = rfm_parser.Params[k]
        if v["PARAMCLASS"] == "C" and v["required"]:
            paramsOrdered[k] = v

    # optional CHANGING
    for k in paramsSorted:
        v = rfm_parser.Params[k]
        if v["PARAMCLASS"] == "C" and not v["required"]:
            paramsOrdered[k] = v

    # required TABLE
    for k in paramsSorted:
        v = rfm_parser.Params[k]
        if v["PARAMCLASS"] == "T" and v["required"]:
            paramsOrdered[k] = v

    # optional TABLE
    for k in paramsSorted:
        v = rfm_parser.Params[k]
        if v["PARAMCLASS"] == "T" and not v["required"]:
            paramsOrdered[k] = v

    # EXPORTING
    for k in paramsSorted:
        v = rfm_parser.Params[k]
        if v["PARAMCLASS"] == "E":
            paramsOrdered[k] = v

    for k, v in rfm_parser.Params.items():
        print(k)

    for k, v in paramsOrdered.items():
        print(k, v)
