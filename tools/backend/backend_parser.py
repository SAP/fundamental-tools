# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

import argparse
import codecs
from collections import OrderedDict
import json
import logging
import os
import sys
from .constants import (
    get_ddic_js,
    iso2_to_LANGU,
    DEFAULT_OUTPUT_FOLDER,
    ParamType,
    ParamClass,
)
from .utils import get_log_level
from .systems import (
    BACKEND_API,
    get_connection,
)
from .business_objects import catalog, rfm_sets

# value input type determines the input element -> see model.py
INPUT_TYPE_BINARY = "binary"  # -> checkbox
INPUT_TYPE_LIST = "list"  # -> combo
INPUT_TYPE_KEY = "value_input_type"


class BackendParser:
    def __init__(self, args):
        if args.log_level is not None:
            logging.basicConfig(level=get_log_level(args.log_level))

        self.destination_id = args.destination_id
        self.output_folder = args.output_folder
        self.rfm_name = None
        self.rfm_set = None

        try:
            # rfmcall, single RFM
            self.rfm_name = args.rfm_name
            self.RFMLIST = ["rfmcall_"]
            catalog["rfmcall_"] = [self.rfm_name]
        except Exception as ex:
            # rfm set
            if args.rfm_set is None:
                self.RFMLIST = rfm_sets
            else:
                if args.rfm_set not in catalog:
                    raise ValueError(
                        f"RFM set not defined in BO catalog: {args.rfm_set}"
                    )
                else:
                    self.RFMLIST = [args.rfm_set]

        if len(self.RFMLIST) == 0:
            self.RFMLIST = catalog

        self.LANGUAGES = args.languages
        if self.rfm_name is None:
            self.rfm_get_search_help = BACKEND_API[args.destination_id][
                "rfm_get_search_help"
            ]
            self.rfm_get_dom_values = BACKEND_API[args.destination_id][
                "rfm_get_dom_values"
            ]

        self.DDIC_JS = get_ddic_js()

    def get_text(self, dfies):
        TEXT_FIELDS = ["FIELDTEXT", "REPTEXT", "SCRTEXT_S", "SCRTEXT_M", "SCRTEXT_L"]
        text = {}
        for i in TEXT_FIELDS:
            if dfies[i]:
                text[i] = dfies[i]
        return text

    def annotation(self, dfies):
        if type(dfies) is dict:
            # variable
            if "FIELDNAME" in dfies:
                return self.markup(dfies)
            else:
                # (1) native ABAP type
                return dfies
        else:
            # structure, table
            result = {}
            for field in dfies:
                # skip meta elements like .INCLUDE ...
                if ".INCLUDE" in field or not field["INTTYPE"]:
                    continue
                result[field["FIELDNAME"]] = self.markup(field)
            return result

    def markup(self, dfies):
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

        BINARY_VALUES = {"", "X"}

        markup = {"format": {}, "input": {}, "text": self.get_text(dfies)}

        for i in dfies:
            if i in FORMAT_FIELDS:
                if i in ("DECIMALS", "MASKLEN", "LENG", "OUTPUTLEN", "INTLEN"):
                    if int(dfies[i]):
                        markup["format"][i] = int(dfies[i])  # dfies[i].strip('0')
                elif i in (
                    "SIGN",
                    "MASK",
                    "LTRFLDDIS",
                    "LOWERCASE",
                    "REFTABLE",
                    "REFFIELD",
                ):
                    if not (not dfies[i]):
                        markup["format"][i] = dfies[i]
                else:
                    markup["format"][i] = dfies[i]
            elif i in INPUT_FIELDS:
                if dfies[i]:
                    markup["input"][i] = dfies[i]

        if not markup["format"]["DOMNAME"]:
            del markup["format"]["DOMNAME"]
        if not markup["format"]["ROLLNAME"]:
            del markup["format"]["ROLLNAME"]

        # value input help
        if dfies["F4AVAILABL"] == "X" and self.rfm_name is None:
            shlp_descriptor = self.conn.call(
                self.rfm_get_search_help,
                IV_TABNAME=dfies["TABNAME"],
                IV_FIELDNAME=dfies["FIELDNAME"],
            )
            shlp = shlp_descriptor["ES_SHLP"]
            shlp_title = shlp_descriptor["EV_SHLP_TITLE"]
            shlp_key = "%s %s" % (shlp["SHLPTYPE"], shlp["SHLPNAME"])
            shlp_values = None
            markup["input"]["SHLP"] = shlp_key

            # domain field values
            if shlp["SHLPTYPE"] == "FV":
                shlp_values = self.conn.call(
                    self.rfm_get_dom_values, IV_DOMNAME=shlp["SHLPNAME"]
                )["ET_VALUES"]
                # if two elements list DOMVALUE_L set to 'X' and '', consider as binary input
                if len(shlp_values) == 2:
                    if (
                        BINARY_VALUES
                        & {shlp_values[0]["DOMVALUE_L"], shlp_values[1]["DOMVALUE_L"]}
                    ) == BINARY_VALUES:
                        markup["format"][INPUT_TYPE_KEY] = INPUT_TYPE_BINARY
                        shlp_values = None
                        del markup["input"]["SHLP"]
                # otherwise list
                else:
                    markup["format"][INPUT_TYPE_KEY] = INPUT_TYPE_LIST

        # add domain CT if no other shelp found
        if "DOMNAME" in markup["format"] and "SHLP" not in markup["input"]:
            domain_ct = self.conn.call(
                "DD_DOMA_GET", DOMAIN_NAME=markup["format"]["DOMNAME"]
            )["DD01V_WA_A"]["ENTITYTAB"]
            if domain_ct:
                shlp = {"SHLPTYPE": "CT", "SHLPNAME": domain_ct}
                shlp_key = "%s %s" % (shlp["SHLPTYPE"], shlp["SHLPNAME"])
                markup["input"]["SHLP"] = shlp_key

        if "SHLP" in markup["input"]:
            if shlp_key not in self.Helps:
                if shlp["SHLPTYPE"] in "CH,CT":
                    markup["format"][INPUT_TYPE_KEY] = INPUT_TYPE_LIST
                    tab_fields = self.conn.call(
                        "BDL_DDIF_TABL_GET", NAME=shlp["SHLPNAME"]
                    )["DD03P_TAB"]
                    tab_metadata = self.conn.call(
                        "FDT_GET_DDIC_METADATA", IV_TYPENAME=shlp["SHLPNAME"]
                    )["ES_METADATA"]
                    tab_text = tab_metadata["TEXT"]
                    if not tab_text:
                        tab_text = tab_metadata["SHORT_TEXT"]
                    if not tab_text:
                        tab_text = shlp_key
                    sh_val_fields = []
                    # sh_disp_fields = []
                    for tf in tab_fields:
                        if (
                            tf["KEYFLAG"]
                            and tf["FIELDNAME"] != ".INCLUDE"
                            and tf["ROLLNAME"] != "MANDT"
                        ):
                            sh_val_fields.append(tf["FIELDNAME"])
                    shlp_values = {
                        "valueProperty": sh_val_fields,
                        "displayProperty": [],
                        "selection": [],
                        "requestedFields": [],
                        "text": tab_text,
                    }

                if shlp_values and shlp["SHLPTYPE"] == "SH":
                    self.Helps.update({shlp_key: shlp_title})
                else:
                    self.Helps.update({shlp_key: shlp_values})

        if len(markup["input"].keys()) == 0:
            del markup["input"]

        if dfies["LFIELDNAME"] != dfies["FIELDNAME"]:
            markup["format"]["LFIELDNAME"] = dfies["LFIELDNAME"]

        if "locale" in dfies:
            markup["locale"] = dfies["locale"]

        return markup

    # ddif -> dfies
    def get_dfies_backend(self, p, language=None):
        if language is None:
            language = self.LANGUAGES[0]
        try:
            ddif = self.conn.call(
                "DDIF_FIELDINFO_GET",
                TABNAME=p["TABNAME"],
                FIELDNAME=p["FIELDNAME"],
                # no ALPHA exit in backend !
                LANGU=iso2_to_LANGU[language],
                ALL_TYPES="X",
                GROUP_NAMES="X",
            )
        except Exception as e:
            if p["paramType"] == ParamType.var.value and e.key == "NOT_FOUND":
                print(
                    "!1 %1s %-30s %-10s        %-30s %-30s %s"
                    % (
                        p["PARAMCLASS"],
                        p["PARAMETER"],
                        p["paramType"],
                        p["TABNAME"],
                        p["FIELDNAME"],
                        p["PARAMTEXT"],
                    )
                )
                return False
            else:
                raise e  # unexpected error

        if p["paramType"] == ParamType.var.value:
            if ddif["DDOBJTYPE"] == "INTTAB" or ddif["DDOBJTYPE"] == "TRANSP":
                dfies = ddif["DFIES_TAB"][0]
            else:
                dfies = ddif["DFIES_WA"]
        else:
            if len(ddif["LINES_DESCR"]):
                # try LINES_DESCR first, seem to be more "reliable" than DFIES_TAB (no .INCLUDEs)
                dfies = ddif["LINES_DESCR"][0]["FIELDS"]
            elif len(ddif["DFIES_TAB"]):
                dfies = ddif["DFIES_TAB"]
            else:
                # single field row
                dfies = [ddif["DFIES_WA"]]
        return dfies

    def get_dfies(self, p):
        # no secondary languages
        # if len(self.LANGUAGES) == 1 or not ALL_LANGUAGES:
        #    return get_dfies_backend(p, self.LANGUAGES[0])
        #
        # get language dfies
        dfies_all = {}
        for lang in self.LANGUAGES:
            dfies_all[lang] = self.get_dfies_backend(p, lang)

        # primary language
        dfies = dfies_all[self.LANGUAGES[0]]

        if type(dfies) is dict:
            for lang in self.LANGUAGES[1:]:

                # locale lang
                dfies_lang = dfies_all[lang]

                if "locale" not in dfies:
                    dfies["locale"] = {}

                if (
                    dfies["TABNAME"] + dfies["FIELDNAME"]
                    == dfies_lang["TABNAME"] + dfies_lang["FIELDNAME"]
                ):
                    dfies["locale"][lang] = self.get_text(dfies_lang)
                    # FIELDTEXT fallback to locale
                    if not dfies["FIELDTEXT"] and "FIELDTEXT" in dfies["locale"][lang]:
                        dfies["FIELDTEXT"] = "?%s: %s" % (
                            lang,
                            dfies["locale"][lang]["FIELDTEXT"],
                        )
                else:
                    raise ValueError(
                        "Locale [%s] field key mismatch: [%s %s] [%s %s]"
                        % (
                            lang,
                            dfies["TABNAME"],
                            dfies["FIELDNAME"],
                            dfies_lang["TABNAME"],
                            dfies_lang["FIELDNAME"],
                        )
                    )

            # no locale text found, set technical default
            if not dfies["FIELDTEXT"]:
                dfies["FIELDTEXT"] = "todo: no field text"

        elif type(dfies) is list:

            for i in range(len(dfies)):

                dfies[i]["locale"] = {}

                for lang in self.LANGUAGES[1:]:

                    # locale lang
                    dfies_lang = dfies_all[lang]

                    if (
                        dfies[i]["TABNAME"] + dfies[i]["FIELDNAME"]
                        == dfies_lang[i]["TABNAME"] + dfies_lang[i]["FIELDNAME"]
                    ):
                        dfies[i]["locale"][lang] = self.get_text(dfies_lang[i])
                    else:
                        raise ValueError(
                            "Locale [%s] field key mismatch: [%s %s] [%s %s]"
                            % (
                                lang,
                                dfies[i]["TABNAME"],
                                dfies[i]["FIELDNAME"],
                                dfies_lang["TABNAME"],
                                dfies_lang["FIELDNAME"],
                            )
                        )

                    # FIELDTEXT fallback to locale
                    if (
                        not dfies[i]["FIELDTEXT"]
                        and "FIELDTEXT" in dfies[i]["locale"][lang]
                    ):
                        dfies[i]["FIELDTEXT"] = "?%s: %s" % (
                            lang,
                            dfies[i]["locale"][lang]["FIELDTEXT"],
                        )

                # no locale text found, set technical default
                if not dfies[i]["FIELDTEXT"]:
                    dfies[i]["FIELDTEXT"] = "todo: no field text"

        elif type(dfies) is bool:
            dfies = {
                "format": {"DATATYPE": p["TABNAME"]},
                "text": {"FIELDTEXT": "Native ABAP type"},
            }
        else:
            raise ValueError(
                "Parameter [%s] dfis type invalid: %s"
                % (p["PARAMETER"], str(type(dfies)))
            )

        return dfies

    def run(self):
        e, self.conn = get_connection(self.destination_id)
        if self.conn:
            a = self.conn.get_connection_attributes()
            print(
                "Connected to "
                f"host: {a['partnerHost']} sid: {a['sysId']} "
                f"client: {a['client']} kernel: {a['kernelRel']} user: {a['user']} lang: {a['language']}"
            )
        else:
            print(e)
            sys.exit(-1)

        self.Params = {}
        self.Fields = {}
        self.Helps = {}
        self.Stat = {}

        for rfmset in sorted(self.RFMLIST):
            if self.rfm_name is None:
                if not os.path.exists(f"{self.output_folder}/{rfmset}"):
                    os.makedirs(f"{self.output_folder}/{rfmset}")

            rfm_list = catalog[rfmset]

            print(f"\nAPI {rfmset}:  {len(rfm_list)}")

            # get RFM metadata
            r = self.conn.call(
                "RFC_METADATA_GET",
                # DEEP='X',
                # GET_CLIENT_DEP_FIELDS='X',
                # GET_TIMESTAMPS='X',
                EVALUATE_LINKS="X",  # comment to go for lower level DDIC: BAPI_EQUI_CHANGE EQUIPMENT
                # no backend ALPHA
                LANGUAGE=iso2_to_LANGU[self.LANGUAGES[0]],
                FUNCTIONNAMES=[{"FUNCTIONNAME": rfm_name} for rfm_name in rfm_list],
            )
            if r["FUNC_ERRORS"]:
                if r["FUNC_ERRORS"][0]["EXCEPTION"] == "FU_NOT_FOUND":
                    print("!! RFM not found:", r["FUNC_ERRORS"][0]["FUNCNAME"])
                    # raise ValueError(r['FUNC_ERRORS'])
                continue

            # get RFM parameters locales
            for lang in self.LANGUAGES[1:]:
                rl = self.conn.call(
                    "RFC_METADATA_GET",
                    LANGUAGE=iso2_to_LANGU[lang],  # no backend ALPHA
                    FUNCTIONNAMES=[{"FUNCTIONNAME": rfm_name} for rfm_name in rfm_list],
                )
                if rl["FUNC_ERRORS"]:
                    raise ValueError(rl["FUNC_ERRORS"])
                for i in range(len(r["PARAMETERS"])):
                    if "locale" not in r["PARAMETERS"][i]:
                        r["PARAMETERS"][i]["locale"] = {}
                    r["PARAMETERS"][i]["locale"][lang] = rl["PARAMETERS"][i][
                        "PARAMTEXT"
                    ]

            # output
            self.Params = {}
            self.Fields = {}
            self.Helps = {}

            # stat
            t = 0
            s = 0
            v = 0

            # Cleanup
            for p in list(r["PARAMETERS"]):

                # remove records with name 'CHANGING'
                if p["PARAMETER"] == "CHANGING":
                    r["PARAMETERS"].remove(p)
                    continue

                # remove exception parameters
                if p["PARAMCLASS"] == ParamClass.exception.value or not p["EXID"]:
                    logging.info(
                        "!2 EXCEPTION parameter removed: %1s %-30s %-30s"
                        % (p["PARAMCLASS"], p["FUNCNAME"], p["PARAMETER"])
                    )
                    r["PARAMETERS"].remove(p)
                    continue

            for p in r["PARAMETERS"]:
                #  set param type
                if (
                    p["PARAMCLASS"] == ParamClass.exception.value
                    or len(p["EXID"].strip()) == 0
                ):
                    p["paramType"] = ParamType.exception.value
                elif p["EXID"] == "h" or p["PARAMCLASS"] == ParamClass.table.value:
                    p["paramType"] = ParamType.table.value
                elif p["EXID"] in "uv":
                    p["paramType"] = ParamType.struct.value
                else:
                    p["paramType"] = ParamType.var.value

                if p["paramType"] == ParamType.exception.value:
                    continue

                # set optional/required
                p["required"] = not p["OPTIONAL"]
                del p["OPTIONAL"]
                if not p["required"]:
                    p["default"] = p["DEFAULT"]
                del p["DEFAULT"]

                # 'I' parameter type is INT4 internally
                if p["TABNAME"] == "I":
                    p["TABNAME"] = "INT4"

                p["PARAMKEY"] = " ".join((p["FUNCNAME"], p["PARAMETER"]))
                p["FIELDKEY"] = " ".join((p["TABNAME"], p["FIELDNAME"])).strip()
                # p['TABNAME'], p['FIELDNAME'] = ('a b'.split() + [''])[:2]

                # paramtext not set
                if not p["PARAMTEXT"]:
                    # fallback to locale, if any maintained
                    if "locale" in p:
                        for lc in p["locale"]:
                            if p["locale"][lc]:
                                p["PARAMTEXT"] = "?%s: %s" % (lc, p["locale"][lc])
                                break
                # still not set ?
                if not p["PARAMTEXT"]:
                    # default fallback
                    p["PARAMTEXT"] = "todo: param text"

                p["RFM"] = {p["PARAMKEY"]}

            # relate parameters of identical types
            for p in r["PARAMETERS"]:
                if p["FUNCNAME"] not in self.Params:
                    self.Params[p["FUNCNAME"]] = {}

                for q in r["PARAMETERS"]:
                    if p["FIELDKEY"] == q["FIELDKEY"]:
                        p["RFM"].add(q["PARAMKEY"])

                p["RFM"] = list(p["RFM"])

            # get backend parameters and fields metadata
            rfm_out = ""
            for p in r["PARAMETERS"]:
                if rfm_out != p["FUNCNAME"]:
                    rfm_out = p["FUNCNAME"]
                    print(f"\n{rfm_out}\n")

                if p["FIELDKEY"] in self.Fields:
                    dfies = self.Fields[p["FIELDKEY"]]
                else:
                    dfies = False

                # Tables
                if p["paramType"] == ParamType.table.value:
                    t += 1

                    if not dfies:
                        dfies = self.get_dfies(p)
                        if dfies is False:
                            continue
                        self.Fields[p["FIELDKEY"]] = self.annotation(dfies)

                    del p["INTLENGTH"], p["DECIMALS"]

                    print(
                        "%1s %-30s %-10s (%4u) %-30s %-30s %s"
                        % (
                            p["PARAMCLASS"],
                            p["PARAMETER"],
                            p["paramType"],
                            len(dfies),
                            p["TABNAME"],
                            p["FIELDNAME"],
                            p["PARAMTEXT"],
                        )
                    )

                # Structures
                elif p["paramType"] == ParamType.struct.value:
                    s += 1

                    if not dfies:
                        dfies = self.get_dfies(p)
                        if not dfies:
                            continue
                        self.Fields[p["FIELDKEY"]] = self.annotation(dfies)

                    del p["INTLENGTH"], p["DECIMALS"]

                    print(
                        "%1s %-30s %-10s (%4u) %-30s %-30s %s"
                        % (
                            p["PARAMCLASS"],
                            p["PARAMETER"],
                            p["paramType"],
                            len(dfies),
                            p["TABNAME"],
                            p["FIELDNAME"],
                            p["PARAMTEXT"],
                        )
                    )

                # Variables
                else:
                    v += 1

                    if not dfies:
                        dfies = self.get_dfies(p)
                    if dfies:
                        self.Fields[p["FIELDKEY"]] = self.annotation(dfies)

                    print(
                        "%1s %-30s %-10s        %-30s %-30s %s"
                        % (
                            p["PARAMCLASS"],
                            p["PARAMETER"],
                            p["paramType"],
                            p["TABNAME"],
                            p["FIELDNAME"],
                            p["PARAMTEXT"],
                        )
                    )

                    # p['PARAMTEXT'] 79
                    # p['OPTIONAL'] 1
                    # p['DEFAULT'] 21

                if p["FUNCNAME"] not in self.Params:
                    self.Params[p["FUNCNAME"]] = {}
                    p["RFM"] = p["FUNCNAME"]

                self.Params[p["FUNCNAME"]][p["PARAMETER"]] = p

                if not dfies:
                    p["nativeKey"] = p["TABNAME"]

                if "DECIMALS" in p:
                    del p["DECIMALS"]

                for k in [
                    "EXID",
                    "FUNCNAME",
                    "TABNAME",
                    "FIELDNAME",
                    "OFFSET",
                    "POSITION",
                    "INTLENGTH",
                    "DECIMAL",
                ]:
                    if k in p:
                        del p[k]

            #
            # stat
            #

            print(
                "rfms:   %4u\nparams: %4u\nvars:   %4u\nstrucs: %4u\ntables: %4u\nall:    %4u\nfields: %4u"
                % (
                    len(rfm_list),
                    len(r["PARAMETERS"]),
                    v,
                    s,
                    t,
                    v + s + t,
                    len(self.Fields),
                )
            )

            help_stat = {}
            if len(self.Helps):
                for h in self.Helps:
                    help_type, help_name = h.split()
                    if help_type not in help_stat:
                        help_stat[help_type] = 1
                    else:
                        help_stat[help_type] += 1
                print(f"helps:    {len(self.Helps)}")
                for h in sorted(help_stat):
                    print("   %2s: %5u" % (h, help_stat[h]))

            #
            # save the backend model
            #

            self.Fields = sorted(self.Fields.items())  # dict -> sortedlist

            self.Stat = {}
            for rfm_name in self.Params:
                stat = {
                    ParamType.var.value: 0,
                    ParamType.struct.value: 0,
                    ParamType.table.value: 0,
                    ParamType.exception.value: 0,
                }
                params = self.Params[rfm_name]
                for parameter_name in params:
                    stat[params[parameter_name]["paramType"]] += 1
                    self.Params[rfm_name][parameter_name]["RFM"] = sorted(
                        params[parameter_name]["RFM"]
                    )
                self.Stat[rfm_name] = stat

            if self.rfm_name is not None:
                return {
                    "Parameters": self.Params,
                    "Fields": OrderedDict(self.Fields),
                    "Helps": self.Helps,
                    "Stat": self.Stat,
                }
            else:
                with codecs.open(
                    f"{self.output_folder}/{rfmset}/Params.json",
                    encoding="utf-8",
                    mode="w",
                ) as fout:
                    json.dump(
                        self.Params,
                        fout,
                        indent=4,
                        ensure_ascii=False,
                        sort_keys=True,
                    )

                with codecs.open(
                    f"{self.output_folder}/{rfmset}/Fields.json",
                    encoding="utf-8",
                    mode="w",
                ) as fout:
                    json.dump(
                        self.Fields,
                        fout,
                        indent=4,
                        ensure_ascii=False,
                        sort_keys=True,
                    )

                with codecs.open(
                    f"{self.output_folder}/{rfmset}/Helps.json",
                    encoding="utf-8",
                    mode="w",
                ) as fout:
                    json.dump(
                        self.Helps,
                        fout,
                        indent=4,
                        ensure_ascii=False,
                        sort_keys=True,
                    )

                with codecs.open(
                    f"{self.output_folder}/{rfmset}/Stat.json",
                    encoding="utf-8",
                    mode="w",
                ) as fout:
                    json.dump(
                        self.Stat,
                        fout,
                        indent=4,
                        ensure_ascii=False,
                        sort_keys=True,
                    )

    def get_param_initializer(self, param):
        result = {
            "text": param["PARAMTEXT"],
            "leng": "",
            "abaptype": "",
            "init": "",
            "optional": False,
            "alpha": "",
        }
        field = False
        if "FIELDKEY" in param:
            field = self.Fields[param["FIELDKEY"]]
            result["abaptype"] = param["FIELDKEY"]
        if param["paramType"] == ParamType.table.value:
            result["init"] = "[]"
        elif param["paramType"] == ParamType.struct.value:
            result["init"] = "{}"
        elif param["paramType"] == ParamType.var.value:
            if field:
                result["abaptype"] = field["format"]["DATATYPE"]
                if "LENG" in field["format"]:
                    result["leng"] = field["format"]["LENG"]
                if "input" in field:
                    if "CONVEXIT" in field["input"]:
                        result["alpha"] = field["input"]["CONVEXIT"]
            else:
                result["abaptype"] = param["nativeKey"]

            if result["abaptype"] in self.DDIC_JS:
                result["init"] = self.DDIC_JS[result["abaptype"]]["INITIAL"]
            else:
                result.init = f"native ABAP type: {result['abaptype']}"
        else:
            [rfm_name, param_name] = param["PARAMKEY"].split()
            raise ValueError(
                f"Unknown parameter type: {param['paramType']}\nRFM:       {rfm_name}\nParameter: {param_name}\n"
            )
        return result


def get_arg_parser():
    arg_usage = """backend.py <backend destination id> <rfm set name> [<option>]
where <option> can be:
    -h                  Quick help on rfmcall
    -l, --lang          ABAP text annotations language
    -o, --output_folder Model output folder, default: "out"
    --loglevel          Log level: "info" or "debug"
"""

    arg_parser = argparse.ArgumentParser(
        usage=arg_usage,
        description="ABAP API backend parser",
    )
    arg_parser.add_argument("destination_id", help="ABAP destination id")
    arg_parser.add_argument("rfm_set", nargs="?", help="ABAP API name")
    arg_parser.add_argument(
        "-l",
        "--lang",
        nargs="+",
        dest="languages",
        default=["en"],
        help="Texts' languages",
    )
    arg_parser.add_argument(
        "-o",
        "--output_folder",
        dest="output_folder",
        default=DEFAULT_OUTPUT_FOLDER,
        help="Output folder",
    )
    arg_parser.add_argument(
        "--loglevel",
        dest="log_level",
        default=None,
        choices=["info", "debug"],
        help="log level",
    )

    return arg_parser
