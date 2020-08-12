# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# -*- coding: utf-8 -*-

from pyrfc import Connection, RFCError

SAPROUTER_P724 = "/H/203.13.155.17/S/3299/W/xjkb3d/H/172.19.137.194/H/"

SAPROUTER = "/H/203.13.155.17/W/xjkb3d/H/172.19.138.120/H/"
BACKEND = {
    "MME": {
        "user": "demo",
        "passwd": "welcome",
        "ashost": "10.68.110.51",
        "sysnr": "00",
        "client": "620",
        "lang": "EN",
    },
    "S16-5010": {
        "user": "demo",
        "passwd": "welcome",
        "saprouter": SAPROUTER,
        "ashost": "10.115.10.101",
        "sysnr": "00",
        "client": "100",
        "lang": "EN"
        # 'trace': '3'
    },
}

BACKEND_API = {
    "MME": {
        "rfm_get_search_help": "/COE/RBP_FE_SHLP_DETERM_SEARCH",
        "rfm_get_dom_values": "/COE/RBP_FE_SHLP_DOMVALUES_GET",
    },
    "I64": {
        "rfm_get_search_help": "ZSHLP_DETERMINE_SEARCHHELP",
        "rfm_get_dom_values": "ZSHLP_DOMVALUES_GET",
    },
    "S16-5010": {
        "rfm_get_search_help": "YWS_SHLP_DETERMINE",
        "rfm_get_dom_values": "YWS_SHLP_DOMVALUES_GET",
    },
}

BACKEND_LANGUAGES = {
    "MME": ["en", "de"],  # 'de', 'nl', 'es', 'jp'
    "S16-5010": ["en", "de"],
}

# iso2 -> t002 SPRAS
iso2_to_LANGU = {"en": "E", "de": "D", "nl": "N", "es": "S", "jp": "J"}


# Connect to ABAP system
def get_connection(abapsys):
    try:
        return (None, Connection(**abapsys))
    except RFCError as ex:
        # errors possible, like dynpro sent in background, example SH D.
        error = {}
        ex_type_full = str(type(ex))
        error["type"] = ex_type_full[ex_type_full.rfind(".") + 1 : ex_type_full.rfind("'")]
        error["code"] = ex.code if hasattr(ex, "code") else "<None>"
        error["key"] = ex.key if hasattr(ex, "key") else "<None>"
        error["message"] = ex.message.split("\n")
        return (error, None)


# rfc call with error handling
def rfcCall(c, rfcName, **params):
    try:
        return c.call(rfcName, **params)
    except RFCError as ex:
        # errors possible, like dynpro sent in background, example SH D.
        error = {}
        ex_type_full = str(type(ex))
        error["type"] = ex_type_full[ex_type_full.rfind(".") + 1 : ex_type_full.rfind("'")]
        error["code"] = ex.code if hasattr(ex, "code") else "<None>"
        error["key"] = ex.key if hasattr(ex, "key") else "<None>"
        error["message"] = ex.message.split("\n")
        return {"RFCError": error}
