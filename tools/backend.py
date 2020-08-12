# -*- coding: utf-8 -*-

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

import os
import json
import sys
import codecs

from generator.systems import (
    BACKEND,
    BACKEND_API,
    BACKEND_LANGUAGES,
    iso2_to_LANGU,
    get_connection,
)
from generator import catalog, rfm_sets

# connection
__conn = False

# output
Params = {}
Fields = {}
Helps = {}

QUIET = False
for arg in sys.argv:
    if arg == "-q":
        QUIET = True

# backend
# abap_backend = 'S16-5010'
abap_backend = "MME"

# primary language
LANGUAGES = BACKEND_LANGUAGES[abap_backend]
BACKEND[abap_backend]["lang"] = LANGUAGES[0]

# value input type determines the input element -> see model.py
INPUT_TYPE_BINARY = "binary"  # -> checkbox
INPUT_TYPE_LIST = "list"  # -> combo
INPUT_TYPE_KEY = "value_input_type"

# backend API
rfm_get_search_help = BACKEND_API[abap_backend]["rfm_get_search_help"]
rfm_get_dom_values = BACKEND_API[abap_backend]["rfm_get_dom_values"]

# get dfies texts


def get_text(dfies):
    TEXT_FIELDS = ["FIELDTEXT", "REPTEXT", "SCRTEXT_S", "SCRTEXT_M", "SCRTEXT_L"]
    text = {}
    for i in TEXT_FIELDS:
        if dfies[i]:
            text[i] = dfies[i]
    return text


# dfies -> field annotations


def annotation(dfies):
    if type(dfies) is dict:
        # variable
        if "FIELDNAME" in dfies:
            return markup(dfies)
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
            result[field["FIELDNAME"]] = markup(field)
        return result


def markup(dfies):
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

    markup = {"format": {}, "input": {}, "text": get_text(dfies)}

    for i in dfies:
        if i in FORMAT_FIELDS:
            if i in ("DECIMALS", "MASKLEN", "LENG", "OUTPUTLEN", "INTLEN"):
                if int(dfies[i]):
                    markup["format"][i] = int(dfies[i])  # dfies[i].strip('0')
            elif i in ("SIGN", "MASK", "LTRFLDDIS", "LOWERCASE", "REFTABLE", "REFFIELD",):
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
    if dfies["F4AVAILABL"] == "X":
        shlp_descriptor = __conn.call(
            rfm_get_search_help, IV_TABNAME=dfies["TABNAME"], IV_FIELDNAME=dfies["FIELDNAME"],
        )
        shlp = shlp_descriptor["ES_SHLP"]
        shlp_title = shlp_descriptor["EV_SHLP_TITLE"]
        shlp_key = "%s %s" % (shlp["SHLPTYPE"], shlp["SHLPNAME"])
        shlp_values = None
        markup["input"]["SHLP"] = shlp_key

        # domain field values
        if shlp["SHLPTYPE"] == "FV":
            shlp_values = __conn.call(rfm_get_dom_values, IV_DOMNAME=shlp["SHLPNAME"])["ET_VALUES"]
            # if two elements list DOMVALUE_L set to 'X' and '', consider as binary input
            if len(shlp_values) == 2:
                if (
                    BINARY_VALUES & {shlp_values[0]["DOMVALUE_L"], shlp_values[1]["DOMVALUE_L"]}
                ) == BINARY_VALUES:
                    markup["format"][INPUT_TYPE_KEY] = INPUT_TYPE_BINARY
                    shlp_values = None
                    del markup["input"]["SHLP"]
            # othervise list
            else:
                markup["format"][INPUT_TYPE_KEY] = INPUT_TYPE_LIST

    # add domain CT if no other shelp found
    if "DOMNAME" in markup["format"] and "SHLP" not in markup["input"]:
        domain_ct = __conn.call("DD_DOMA_GET", DOMAIN_NAME=markup["format"]["DOMNAME"])[
            "DD01V_WA_A"
        ]["ENTITYTAB"]
        if domain_ct:
            shlp = {"SHLPTYPE": "CT", "SHLPNAME": domain_ct}
            shlp_key = "%s %s" % (shlp["SHLPTYPE"], shlp["SHLPNAME"])
            markup["input"]["SHLP"] = shlp_key

    if "SHLP" in markup["input"]:
        if shlp_key not in Helps:
            if shlp["SHLPTYPE"] in "CH,CT":
                markup["format"][INPUT_TYPE_KEY] = INPUT_TYPE_LIST
                tab_fields = __conn.call("BDL_DDIF_TABL_GET", NAME=shlp["SHLPNAME"])["DD03P_TAB"]
                tab_metadata = __conn.call("FDT_GET_DDIC_METADATA", IV_TYPENAME=shlp["SHLPNAME"])[
                    "ES_METADATA"
                ]
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
                Helps.update({shlp_key: shlp_title})
            else:
                Helps.update({shlp_key: shlp_values})

    if len(markup["input"].keys()) == 0:
        del markup["input"]

    if dfies["LFIELDNAME"] != dfies["FIELDNAME"]:
        markup["format"]["LFIELDNAME"] = dfies["LFIELDNAME"]

    if "locale" in dfies:
        markup["locale"] = dfies["locale"]

    return markup


# ddif -> dfies


def get_dfies_backend(p, language=LANGUAGES[0]):
    try:
        ddif = __conn.call(
            "DDIF_FIELDINFO_GET",
            TABNAME=p["TABNAME"],
            FIELDNAME=p["FIELDNAME"],
            # no ALPHA exit in backend !
            LANGU=iso2_to_LANGU[language],
            ALL_TYPES="X",
            GROUP_NAMES="X",
        )
    except Exception as e:
        if p["PARAMTYPE"] == "VARIABLE" and e.key == "NOT_FOUND":
            if not QUIET:
                print(
                    "!1 %1s %-30s %-10s        %-30s %-30s %s"
                    % (
                        p["PARAMCLASS"],
                        p["PARAMETER"],
                        p["PARAMTYPE"],
                        p["TABNAME"],
                        p["FIELDNAME"],
                        p["PARAMTEXT"],
                    )
                )
            return False
        else:
            raise e  # unexpected error

    if p["PARAMTYPE"] == "VARIABLE":
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


def get_dfies(p):

    # no secondary languages
    # if len(LANGUAGES) == 1 or not ALL_LANGUAGES:
    #    return get_dfies_backend(p, LANGUAGES[0])
    #
    # get language dfies
    dfies_all = {}
    for lang in LANGUAGES:
        dfies_all[lang] = get_dfies_backend(p, lang)

    # primary language
    dfies = dfies_all[LANGUAGES[0]]

    if type(dfies) is dict:
        for lang in LANGUAGES[1:]:

            # locale lang
            dfies_lang = dfies_all[lang]

            if "locale" not in dfies:
                dfies["locale"] = {}

            if (
                dfies["TABNAME"] + dfies["FIELDNAME"]
                == dfies_lang["TABNAME"] + dfies_lang["FIELDNAME"]
            ):
                dfies["locale"][lang] = get_text(dfies_lang)
                # FIELDTEXT fallback to locale
                if not dfies["FIELDTEXT"] and "FIELDTEXT" in dfies["locale"][lang]:
                    dfies["FIELDTEXT"] = "?%s: %s" % (lang, dfies["locale"][lang]["FIELDTEXT"],)
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

            for lang in LANGUAGES[1:]:

                # locale lang
                dfies_lang = dfies_all[lang]

                if (
                    dfies[i]["TABNAME"] + dfies[i]["FIELDNAME"]
                    == dfies_lang[i]["TABNAME"] + dfies_lang[i]["FIELDNAME"]
                ):
                    dfies[i]["locale"][lang] = get_text(dfies_lang[i])
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
                if not dfies[i]["FIELDTEXT"] and "FIELDTEXT" in dfies[i]["locale"][lang]:
                    dfies[i]["FIELDTEXT"] = "?%s: %s" % (
                        lang,
                        dfies[i]["locale"][lang]["FIELDTEXT"],
                    )

            # no locale text found, set technical default
            if not dfies[i]["FIELDTEXT"]:
                dfies[i]["FIELDTEXT"] = "todo: no field text"

    elif type(dfies) is bool:
        pass  # print 'No DDIC for' ,p['PARAMETER']
    else:
        raise ValueError(
            "Parameter [%s] dfis type invalid: %s" % (p["PARAMETER"], str(type(dfies)))
        )

    return dfies


if __name__ == "__main__":

    if len(rfm_sets) == 0:
        rfm_sets = catalog

    e, __conn = get_connection(BACKEND[abap_backend])
    if __conn:
        a = __conn.get_connection_attributes()
        print(
            "Connected to host: %s sid: %s client: %s kernel: %s user: %s lang: %s"
            % (a["partnerHost"], a["sysId"], a["client"], a["kernelRel"], a["user"], a["language"],)
        )
    else:
        print(e)
        sys.exit(-1)

    for rfmset in sorted(rfm_sets):

        if not os.path.exists("data/%s" % rfmset):
            os.makedirs("data/%s" % rfmset)

        rfm_list = catalog[rfmset]

        print("\nModel %s (%u)" % (rfmset, len(rfm_list)))

        # get RFM metadata
        r = __conn.call(
            "RFC_METADATA_GET",
            # DEEP='X',
            # GET_CLIENT_DEP_FIELDS='X',
            # GET_TIMESTAMPS='X',
            EVALUATE_LINKS="X",  # comment to go for lower level DDIC: BAPI_EQUI_CHANGE EQUIPMENT
            # no backend ALPHA
            LANGUAGE=iso2_to_LANGU[LANGUAGES[0]],
            FUNCTIONNAMES=[{"FUNCTIONNAME": rfm_name} for rfm_name in rfm_list],
        )
        if r["FUNC_ERRORS"]:
            if r["FUNC_ERRORS"][0]["EXCEPTION"] == u"FU_NOT_FOUND":
                print("!! RFM not found:", r["FUNC_ERRORS"][0]["FUNCNAME"])
                # raise ValueError(r['FUNC_ERRORS'])
            continue

        # get RFM parameters locales
        for lang in LANGUAGES[1:]:
            rl = __conn.call(
                "RFC_METADATA_GET",
                LANGUAGE=iso2_to_LANGU[lang],  # no backend ALPHA
                FUNCTIONNAMES=[{"FUNCTIONNAME": rfm_name} for rfm_name in rfm_list],
            )
            if rl["FUNC_ERRORS"]:
                raise ValueError(rl["FUNC_ERRORS"])
            for i in range(len(r["PARAMETERS"])):
                if "locale" not in r["PARAMETERS"][i]:
                    r["PARAMETERS"][i]["locale"] = {}
                r["PARAMETERS"][i]["locale"][lang] = rl["PARAMETERS"][i]["PARAMTEXT"]

        # output
        Params = {}
        Fields = {}
        Helps = {}

        # stat
        t = 0
        s = 0
        v = 0

        # remove exception parameters
        for p in list(r["PARAMETERS"]):
            if p["PARAMCLASS"] == "X" or not p["EXID"]:
                print(
                    "!2 EXCEPTION parameter removed: %1s %-30s %-30s"
                    % (p["PARAMCLASS"], p["FUNCNAME"], p["PARAMETER"])
                )
                r["PARAMETERS"].remove(p)

        # set parameters' and fields' keys
        for p in r["PARAMETERS"]:

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
                    for l in p["locale"]:
                        if p["locale"][l]:
                            p["PARAMTEXT"] = "?%s: %s" % (l, p["locale"][l])
                            break
            # still not set ?
            if not p["PARAMTEXT"]:
                # default fallback
                p["PARAMTEXT"] = "todo: param text"

            p["RFM"] = {p["PARAMKEY"]}

        # relate parameters of identical types
        for p in r["PARAMETERS"]:
            if p["FUNCNAME"] not in Params:
                Params[p["FUNCNAME"]] = {}

            for q in r["PARAMETERS"]:
                if p["FIELDKEY"] == q["FIELDKEY"]:
                    p["RFM"].add(q["PARAMKEY"])

            p["RFM"] = list(p["RFM"])

        # get backend parameters and fields metadata
        rfm_out = ""
        for p in r["PARAMETERS"]:

            if rfm_out != p["FUNCNAME"]:
                rfm_out = p["FUNCNAME"]
                if not QUIET:
                    print("\n%s\n" % rfm_out)

            if p["FIELDKEY"] in Fields:
                dfies = Fields[p["FIELDKEY"]]
            else:
                dfies = False

            # Tables
            if p["EXID"] in "h" or p["PARAMCLASS"] == "T":
                t += 1
                p["PARAMTYPE"] = "TABLE"

                if not dfies:
                    dfies = get_dfies(p)
                    if dfies is False:
                        continue
                    Fields[p["FIELDKEY"]] = annotation(dfies)

                del p["INTLENGTH"], p["DECIMALS"], p["DEFAULT"]

                if not QUIET:
                    print(
                        "%1s %-30s %-10s (%4u) %-30s %-30s %s"
                        % (
                            p["PARAMCLASS"],
                            p["PARAMETER"],
                            p["PARAMTYPE"],
                            len(dfies),
                            p["TABNAME"],
                            p["FIELDNAME"],
                            p["PARAMTEXT"],
                        )
                    )

            # Structures
            elif p["EXID"] in "uv":
                s += 1
                p["PARAMTYPE"] = "STRUCTURE"

                if not dfies:
                    dfies = get_dfies(p)
                    if not dfies:
                        continue
                    Fields[p["FIELDKEY"]] = annotation(dfies)

                del p["INTLENGTH"], p["DECIMALS"], p["DEFAULT"]

                if not QUIET:
                    print(
                        "%1s %-30s %-10s (%4u) %-30s %-30s %s"
                        % (
                            p["PARAMCLASS"],
                            p["PARAMETER"],
                            p["PARAMTYPE"],
                            len(dfies),
                            p["TABNAME"],
                            p["FIELDNAME"],
                            p["PARAMTEXT"],
                        )
                    )

            # Variables
            else:  # p['EXID'] not in 'uvh':
                v += 1
                p["PARAMTYPE"] = "VARIABLE"

                if not dfies:
                    dfies = get_dfies(p)
                    if not dfies:
                        continue
                    Fields[p["FIELDKEY"]] = annotation(dfies)

                if not QUIET:
                    print(
                        "%1s %-30s %-10s        %-30s %-30s %s"
                        % (
                            p["PARAMCLASS"],
                            p["PARAMETER"],
                            p["PARAMTYPE"],
                            p["TABNAME"],
                            p["FIELDNAME"],
                            p["PARAMTEXT"],
                        )
                    )

                # p['PARAMTEXT'] 79
                # p['OPTIONAL'] 1
                # p['DEFAULT'] 21

            if p["FUNCNAME"] not in Params:
                Params[p["FUNCNAME"]] = {}
                p["RFM"] = p["FUNCNAME"]

            Params[p["FUNCNAME"]][p["PARAMETER"]] = p

            if not p["OPTIONAL"]:
                p["REQUIRED"] = True
                del p["OPTIONAL"]
                if "DEFAULT" in p:
                    del p["DEFAULT"]
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

        if not QUIET:
            print(
                "\nrfms:   %4u\nparams: %4u\nvars:   %4u\nstrucs: %4u\ntables: %4u\nall:    %4u\nfields: %4u"
                % (len(rfm_list), len(r["PARAMETERS"]), v, s, t, v + s + t, len(Fields))
            )

        help_stat = {}
        if len(Helps) and not QUIET:
            for h in Helps:
                help_type, help_name = h.split()
                if help_type not in help_stat:
                    help_stat[help_type] = 1
                else:
                    help_stat[help_type] += 1
            print("helps:  %4u" % len(Helps))
            for h in sorted(help_stat):
                print("    %2s: %4u" % (h, help_stat[h]))

        #
        # save the backend model
        #

        Fields = sorted(Fields.items())  # dict -> sortedlist

        with codecs.open("data/%s/Params.json" % rfmset, encoding="utf-8", mode="wb") as fout:
            json.dump(
                Params, fout, indent=4, ensure_ascii=False, sort_keys=True,  # encoding="utf-8",
            )

        with codecs.open("data/%s/Fields.json" % rfmset, encoding="utf-8", mode="wb") as fout:
            json.dump(
                Fields, fout, indent=4, ensure_ascii=False, sort_keys=True,  # encoding="utf-8",
            )

        with codecs.open("data/%s/Helps.json" % rfmset, encoding="utf-8", mode="wb") as fout:
            json.dump(
                Helps, fout, indent=4, ensure_ascii=False, sort_keys=True,  # encoding="utf-8",
            )

