#!/home/pos/.virtualenvs/picoUI/bin/python

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

import logging
import re
from collections import OrderedDict
from .frontend_parser import ModelParser, ABAP_TYPE, FIELD_ATTRIBUTES
from .fundamental_react import fundamental_react


class ParserFundamentalReact(ModelParser):
    def __init__(self, args):
        self.ELEMENT_PREFIX = "fd-"
        self.INPUT_TYPE_BINARY_TAG = "checkbox"
        self.INPUT_TYPE_LIST_TAG = "combobox"
        self.COLUMN_TAGNAME = "fd-column"
        self.DATE_TAGNAME = "datepicker"
        self.TIME_TAGNAME = "timepicker"
        self.TEXT_TAGNAME = "textarea"

        super().__init__(args)

    def get_abap_field_attrs(self, markup):
        attrs = {}
        if self.args.no_ddic:
            del markup[ABAP_TYPE]
        if self.args.no_type:
            del markup["type"]
        # abap = " data-abap.bind='{"
        # lena = len(abap)
        for attr in FIELD_ATTRIBUTES:
            if attr == "bind":
                continue
            if attr in markup:
                # if len(abap) > lena:
                #    abap += ", "
                if attr == "abap-shlp":
                    attrs["shlp"] = markup[attr]
                    # abap += '"%s":%s' % (attr.replace("abap-", ""), markup[attr])
                else:
                    attrs[attr.replace("abap-", "")] = markup[attr]
                    # abap += '"%s":"%s"' % (attr.replace("abap-", ""), markup[attr])
                del markup[attr]
        # abap += "}'"
        tagname = markup["html-tag"].replace(self.ELEMENT_PREFIX, "")

        # no attributes required for ui-checkbox, date, time
        if tagname in [
            self.INPUT_TYPE_BINARY_TAG,
            self.DATE_TAGNAME,
            self.TIME_TAGNAME,
        ]:
            attrs = {}

        if "alpha-exit" in markup:
            attrs["alpha-exit"] = markup["alpha-exit"]
            # abap += ' alpha-exit="%s" ' % markup["alpha-exit"]
            del markup["alpha-exit"]

        attrs["label"] = markup["abap-text"]
        del markup["abap-text"]
        if len(markup) > 1:  # only "html-tag" left
            # remove 'ui:tag:', '<tagname>'
            markup_text = str(markup)
            m = re.search("(.+?), 'ui-tag(.+?)}", markup_text)
            if m:
                markup_text = m.group(1) + "}"
            attrs["markup"] = str(markup_text)
        return attrs

    def html_field(self, model, rfm_parameter, rfm_field):
        logging.info(f"  html field {rfm_parameter['PARAMETER']}-{rfm_field}")

        if type(rfm_field) is dict:
            param_ddic = rfm_field
            bind = rfm_parameter["PARAMETER"]
        else:
            param_ddic = self.Fields[rfm_parameter["FIELDKEY"]][rfm_field]
            bind = "%s.%s" % (rfm_parameter["PARAMETER"], rfm_field)
        markup = self.html_markup(param_ddic, bind)
        # currency and uom only within respective inputs
        if markup[ABAP_TYPE] in ["CUKY", "UNIT"]:
            return
        if markup[ABAP_TYPE] == "DATS":
            bind_attr = "date"
        elif markup[ABAP_TYPE] == "TIMS":
            bind_attr = "time"
        else:
            bind_attr = "value"
        bind_target = markup["bind"]
        del markup["bind"]

        abap_attrs = self.get_abap_field_attrs(markup)
        data_abap = "{"
        if "type" in abap_attrs:
            if "length" in abap_attrs:
                data_abap += "type: '%s', length: '%s'" % (
                    abap_attrs["type"],
                    abap_attrs["length"],
                )
            else:
                data_abap += "type: '%s'" % (abap_attrs["type"])
        if "mid" in abap_attrs:
            data_abap += ", mid: '%s'" % abap_attrs["mid"]
        if "alpha-exit" in abap_attrs:
            data_abap += ", alpha: '%s'" % abap_attrs["alpha-exit"]
        data_abap += "}"

        element = False
        if "combobox" in markup["html-tag"]:
            element = fundamental_react[markup["html-tag"][3:]] % (
                abap_attrs["label"],
                bind_target,
                abap_attrs["shlp"],
                data_abap,
            )
        elif "input" in markup["html-tag"]:
            element = fundamental_react[markup["html-tag"][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "number" in markup["html-tag"]:
            element = fundamental_react[markup["html-tag"][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "lang" in markup["html-tag"]:
            element = fundamental_react[markup["html-tag"][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "checkbox" in markup["html-tag"]:
            element = fundamental_react[markup["html-tag"][3:]] % (
                bind_target,
                abap_attrs["label"],
            )
        elif "datepicker" in markup["html-tag"]:
            element = fundamental_react[markup["html-tag"][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "timepicker" in markup["html-tag"]:
            element = fundamental_react[markup["html-tag"][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "textarea" in markup["html-tag"]:
            element = fundamental_react[markup["html-tag"][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
            )
        else:
            print(f"Tag not supported: {markup['html-tag'][3:]}")

        # remove empty shlp elements
        if element:
            element = re.sub(r'\s+data-shlp=""', "", element)
            model.write(element)

        model.newline()
