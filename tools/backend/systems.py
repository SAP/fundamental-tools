# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

from pyrfc import Connection, RFCError

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


# Connect to ABAP system
def get_connection(abapsys):
    if isinstance(abapsys, str):
        abapsys = {"dest": abapsys}
    try:
        return (None, Connection(**abapsys))
    except RFCError as ex:
        # errors possible, like dynpro sent in background, example SH D.
        error = {}
        ex_type_full = str(type(ex))
        error["type"] = ex_type_full[
            ex_type_full.rfind(".") + 1 : ex_type_full.rfind("'")
        ]
        error["code"] = ex.code if hasattr(ex, "code") else "<None>"
        error["key"] = ex.key if hasattr(ex, "key") else "<None>"
        error["message"] = ex.message.split("\n")
        return (error, None)


# rfm call with error handling
def rfmCall(c, rfcName, **params):
    try:
        return c.call(rfcName, **params)
    except RFCError as ex:
        # errors possible, like dynpro sent in background, example SH D.
        error = {}
        ex_type_full = str(type(ex))
        error["type"] = ex_type_full[
            ex_type_full.rfind(".") + 1 : ex_type_full.rfind("'")
        ]
        error["code"] = ex.code if hasattr(ex, "code") else "<None>"
        error["key"] = ex.key if hasattr(ex, "key") else "<None>"
        error["message"] = ex.message.split("\n")
        return {"RFCError": error}
