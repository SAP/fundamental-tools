#!/home/pos/.virtualenvs/picoUI/bin/python

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# -*- coding: utf-8 -*-

import argparse
import os
import json
import codecs
import re
import shutil
import sys
from collections import OrderedDict
from datetime import datetime
from generator import VERSION, catalog
from generator.utils import Writer
from backend import INPUT_TYPE_KEY, INPUT_TYPE_BINARY, INPUT_TYPE_LIST
from . import fundamental_ngx, fundamental_react, fundamental_vue, fast_ngx, fast_react, fast_vue, ui5_react

# from tools.fundamental import n

REMOVE_DDIC = False
for arg in sys.argv:
    if arg == "-d":
        REMOVE_DDIC = True
        break

REMOVE_TYPE = False
for arg in sys.argv:
    if arg == "-t":
        REMOVE_TYPE = True
        break

"""
    There are ca. 30 predefined ABAP Dictionary Data Types, maintained as domain values of DATATYPE_D data-element:
        https://help.sap.com/viewer/ec1c9c8191b74de98feb94001a95dd76/7.4.16/en-US/cf21f2e5446011d189700000e8322d00.html
    These DDIC types are mapped to internal ABAP Processor Data Types:
        https://help.sap.com/viewer/ec1c9c8191b74de98feb94001a95dd76/7.4.16/en-US/cf21f2f2446011d189700000e8322d00.html

    Int  DDIC    Description
    ---  ----    ---------------------------------------------------------
    N    ACCP    Posting period YYYYMM
    C    CHAR    Character String
    C    CLNT    Client
    C    CUKY    Currency key, referenced by CURR fields
    P    CURR    Currency field, stored as DEC
    D    DATS    Date field (YYYYMMDD) stored as char(8)
    P    DEC     Counter or amount field with comma and sign
    F    FLTP    Floating point number, accurate to 8 bytes
    b    INT1    1-byte integer, integer number <= 255
    s    INT2    2-byte integer, only for length field before LCHR or LRAW
    I    INT4    4-byte integer, integer number with sign
    C    LANG    Language key
    C    LCHR    Long character string, requires preceding INT2 field
    X    LRAW    Long byte string, requires preceding INT2 field
    N    NUMC    Character string with only digits
    s    PREC    Precision of a QUAN field
    P    QUAN    Quantity field, points to a unit field with format UNIT
    X    RAW     Uninterpreted sequence of bytes
    y    RSTR    Byte String of Variable Length
    g    SSTR    Short Character String of Variable Length
    g    STRG    Character String of Variable Length
    T    TIMS    Time field (hhmmss), stored as char(6)
    -    VARC    Long character string, no longer supported from Rel. 3.0
    C    UNIT    Unit key for QUAN fields


    Int  DDIC    Description
    ---  ----    ---------------------------------------------------------

    # Character

    C    CHAR    Character String
    C    CLNT    Client
    C    CUKY    Currency key, referenced by CURR fields
    C    LANG    Language key
    C    LCHR    Long character string, requires preceding INT2 field
    C    UNIT    Unit key for QUAN fields

    # Date, Time

    D    DATS    Date field (YYYYMMDD) stored as char(8)
    T    TIMS    Time field (hhmmss), stored as char(6)

    # Integer

    b    INT1    1-byte integer, integer number <= 255
    s    INT2    2-byte integer, only for length field before LCHR or LRAW
    I    INT4    4-byte integer, integer number with sign

    # Numeric

    N    ACCP    Posting period YYYYMM
    N    NUMC    Character string with only digits

    # Float

    F    FLTP    Floating point number, accurate to 8 bytes

    # Decimal

    P    DEC     Counter or amount field with comma and sign

    # Currency, Quantity

    P    CURR    Currency field, stored as DEC, points to currency field with format CUKY
    P    QUAN    Quantity field, points to a unit field with format UNIT

    s    PREC    Precision of a QUAN field

    # String

    g    SSTR    Short Character String of Variable Length
    g    STRG    Character String of Variable Length

    # Bytes

    X    RAW     Uninterpreted sequence of bytes
    X    LRAW    Long byte string, requires preceding INT2 field

    y    RSTR    Byte String of Variable Length


    ?    VARC    Long character string, no longer supported from Rel. 3.0

    This script parses RFM metadata and generates html5 fragments (ui elements) and Javascript fragments accordingly,
    like models initialization, table column headers.

    Character Strings in ABAP
    https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-US/index.htm?file=abenddic_builtin_types_intro.htm

    Character-like data objects contain character strings. A character-like data object either has a character-like
    data type (c, n, or string) or it is a date/time type (d or t), or it is a flat structure with exclusively
    character-like components.

    ABAP supports the character format UCS-2 and a character always occupies two bytes. This ensures that all
    characters from the system code page UTF-16 are handled correctly (except for those in the surrogate area.
    These characters occupy four bytes and hence are handled as two characters by ABAP. This can produce unexpected
    results when cutting character strings or comparing individual characters in character sets.
"""

FORMATTER_ON = "<!-- @formatter:on -->"
FORMATTER_OFF = "<!-- @formatter:off -->"

JS_FORMAT = "format"
JS_TYPE = "type"
HTML_TAG = "ui-tag"
ABAP_TYPE = "abap-ddic"
TIMESTAMP = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
PARAMCLASS = OrderedDict([("I", "INPUT"), ("E", "OUTPUT"), ("C", "CHANGING"), ("T", "TABLE")])
HEADER = """<!-- %s %s -->"""

HEADER_JS = """//
// %s %s
//
"""

HEADER_JS_PARAM = """// %s %s %s %s
"""

HEADER_PARAMCLASS = """
<!-- %s PARAMETERS -->"""

HEADER_JS_PARAMCLASS = """// %s PARAMETERS"""

FIELD_ATTRIBUTES = [ABAP_TYPE, JS_TYPE, JS_FORMAT, "abap-length", "abap-mid", "abap-shlp"]


class ModelParser:
    def __init__(self, rfm_set, parser_type="aurelia"):
        self.parser_type = parser_type
        self.rfm_set = rfm_set

        self.ELEMENT_PREFIX = "ui-"
        self.INPUT_TYPE_BINARY_TAG = "checkbox"
        self.INPUT_TYPE_LIST_TAG = "combo"
        self.COLUMN_TAGNAME = "dg-column"
        self.DATE_TAGNAME = "date"
        self.TIME_TAGNAME = "time"
        self.TEXT_TAGNAME = "text"
        self.MODEL_PREFIX = "model/aurelia"

    def initialize(self):
        self.DDIC_JS = {
            # Posting period YYYYMM
            "ACCP": {JS_TYPE: "string", JS_FORMAT: "accp", HTML_TAG: "input"},
            # Client 000-999
            "CLNT": {JS_TYPE: "string", JS_FORMAT: "numeric", HTML_TAG: "input"},
            # Language 1 char key
            "LANG": {JS_TYPE: "string", JS_FORMAT: "lang", HTML_TAG: "lang"},
            # Character String
            "CHAR": {JS_TYPE: "string", HTML_TAG: "input"},
            # Date field (YYYYMMDD) stored as char(8)
            "DATS": {JS_TYPE: "string", JS_FORMAT: "date", HTML_TAG: self.DATE_TAGNAME},
            # Time field (hhmmss), stored as char(6)
            "TIMS": {JS_TYPE: "string", JS_FORMAT: "time", HTML_TAG: self.TIME_TAGNAME},
            # Boolean 1 char
            "BOOLEAN": {JS_TYPE: "boolean", HTML_TAG: self.INPUT_TYPE_BINARY_TAG},
            # Character string with only digits
            "NUMC": {JS_TYPE: "string", JS_FORMAT: "numeric", HTML_TAG: "input"},
            # Floating point number, accurate to 8 bytes
            "FLTP": {JS_TYPE: "number", JS_FORMAT: "float", HTML_TAG: "input"},
            # 1-byte integer, integer number <= 255
            "INT1": {JS_TYPE: "number", JS_FORMAT: "integer", HTML_TAG: "input"},
            # 2-byte integer, only for length field before LCHR or LRAW
            "INT2": {JS_TYPE: "number", JS_FORMAT: "integer", HTML_TAG: "input"},
            # 4-byte integer, integer number with sign
            "INT4": {JS_TYPE: "number", JS_FORMAT: "integer", HTML_TAG: "input"},
            # Counter or amount field with comma and sign
            "DEC": {JS_TYPE: "number", JS_FORMAT: "decimal", HTML_TAG: "input"},
            "D16R": {JS_TYPE: "number", JS_FORMAT: "decimal", HTML_TAG: "input"},
            "D34R": {JS_TYPE: "number", JS_FORMAT: "decimal", HTML_TAG: "input"},
            # Currency field, stored as DEC, points to currency field with format CUKY
            "CURR": {JS_TYPE: "number", JS_FORMAT: "currency", HTML_TAG: "input"},
            # Quantity field, points to a unit field with format UNIT
            "QUAN": {JS_TYPE: "number", JS_FORMAT: "quantity", HTML_TAG: "input"},
            # Currency key, referenced by CURR fields
            "CUKY": {JS_TYPE: "string", HTML_TAG: "input"},
            # Unit key for QUAN fields
            "UNIT": {JS_TYPE: "string", HTML_TAG: "input"},
            # Precision of a QUAN field
            "PREC": {JS_TYPE: "number", JS_FORMAT: "integer", HTML_TAG: "number"},
            # Long character string, requires preceding INT2 field
            "LCHR": {JS_TYPE: "string", HTML_TAG: self.TEXT_TAGNAME},
            # Byte String of Variable Length
            "RSTR": {JS_TYPE: "string", HTML_TAG: self.TEXT_TAGNAME},
            # Short Character String of Variable Length
            "SSTR": {JS_TYPE: "string", HTML_TAG: self.TEXT_TAGNAME},
            # Character String of Variable Length
            "STRG": {JS_TYPE: "string", HTML_TAG: self.TEXT_TAGNAME},
            # Uninterpreted sequence of bytes
            "RAW": {JS_TYPE: "string", HTML_TAG: self.TEXT_TAGNAME},
            # Long byte string, requires preceding INT2 field
            "LRAW": {JS_TYPE: "string", HTML_TAG: self.TEXT_TAGNAME},
            # native
            "STRING": {JS_TYPE: "string", HTML_TAG: self.TEXT_TAGNAME},
        }

        # clear the frontend model
        if os.path.exists(f"data/{self.rfm_set}/{self.MODEL_PREFIX}"):
            shutil.rmtree(f"data/{self.rfm_set}/{self.MODEL_PREFIX}")
        os.makedirs(f"data/{self.rfm_set}/{self.MODEL_PREFIX}")

        # read the backend model
        try:
            with codecs.open(f"data/{self.rfm_set}/Params.json", encoding="utf-8", mode="r") as fin:
                self.Parameters = json.load(fin)
            with codecs.open(f"data/{self.rfm_set}/Fields.json", encoding="utf-8", mode="r") as fin:
                self.Fields = OrderedDict(json.load(fin))
            with codecs.open(f"data/{self.rfm_set}/Helps.json", encoding="utf-8", mode="r") as fin:
                self.Helps = OrderedDict(json.load(fin))
        except Exception as ex:
            raise Exception(
                f"Local metadata not found for: {self.rfm_set}; Run: python backend.py <abap system> {self.rfm_set}"
            ) from None

    # field initial value
    def get_field_inital(self, rfm_field):
        init = {"number": "0", "string": "''"}
        try:
            initial = init[self.DDIC_JS[rfm_field["format"]["DATATYPE"]][JS_TYPE]]
        except Exception as ex:
            print(f"Datatype [%s] not supported: {rfm_field['format']['DATATYPE']}", rfm_field)
            return "?"
        return initial

    def escape_quotes(self, ucstr):
        return ucstr.replace('"', "&quot")

    def parse(self):

        self.initialize()

        self.headers()

        self.rfm_init()

        self.parameter_init()

        self.helps()

    def helps(self):

        help_js = Writer(rfm_name="valueInput", rfm_set=self.rfm_set, model_prefix=self.MODEL_PREFIX, write_to="js")
        for shlp_key in sorted(self.Helps):
            [shlp_type, shlp_id] = shlp_key.split()
            if shlp_type in "CT,CH":
                shlp = self.Helps[shlp_key]
                if shlp is None:
                    continue
                if "valueProperty" not in shlp:
                    continue
                if len(shlp["valueProperty"]) == 1:
                    value_property = f"'{shlp['valueProperty'][0]}'"
                else:
                    value_property = ", ".join("'{0}'".format(v) for v in shlp["valueProperty"])
                    value_property = f"[{value_property}]"

                requested_fields = value_property
                help_js.write("// %s" % shlp["text"])
                help_js.write(
                    "%s: {type: '%s', id: '%s', valueProperty: %s,"
                    % (shlp_key.replace(" ", "_"), shlp_type, shlp_id, value_property)
                )
                help_js.write("    displayProperty: [], selection: [], requestedFields: %s }," % requested_fields)
                help_js.write("")

                help_js.save()

    def headers(self):

        for rfm_name in sorted(self.Parameters):

            model = Writer(rfm_name=rfm_name, rfm_set=self.rfm_set, model_prefix=self.MODEL_PREFIX)
            model_js = Writer(rfm_name=rfm_name, rfm_set=self.rfm_set, model_prefix=self.MODEL_PREFIX, write_to="js")

            model.write(HEADER % (rfm_name, VERSION))  # , TIMESTAMP
            model_js.write(HEADER_JS % (rfm_name, VERSION))  # , TIMESTAMP

            model.save()
            model_js.save()

    def rfm_init(self):

        for rfm_name in sorted(self.Parameters):

            rfm_params = self.Parameters[rfm_name]

            comma = ","
            index_last = len(rfm_params) - 1
            index = 0

            model_js = Writer(rfm_name=rfm_name, rfm_set=self.rfm_set, model_prefix=self.MODEL_PREFIX, write_to="js")
            model_js.write("%s = {" % rfm_name.replace("/", "_"))
            model_js.addindent()

            # RFM parameters init
            for param_class in PARAMCLASS:

                paramclass_header = False

                for parameter_name in sorted(rfm_params):

                    rfm_parameter = rfm_params[parameter_name]

                    if rfm_parameter["PARAMCLASS"] != param_class:
                        continue

                    if not paramclass_header:
                        paramclass_header = True
                        model_js.newline()
                        model_js.write(HEADER_JS_PARAMCLASS % PARAMCLASS[param_class])
                        model_js.newline()

                    if index == index_last:
                        comma = ""
                    index += 1

                    if rfm_parameter["PARAMTYPE"] == "VARIABLE":
                        field_ddic = self.Fields[rfm_parameter["FIELDKEY"]]

                        if "LENG" not in field_ddic["format"]:
                            if field_ddic["format"]["DATATYPE"] in ["STRG", "RSTR"]:
                                field_ddic["format"]["LENG"] = 0
                            else:
                                field_ddic["format"]["LENG"] = -1

                        ttype = field_ddic["format"]["DATATYPE"] + "(%u)" % field_ddic["format"]["LENG"]

                        model_js.write(
                            "{0: <40} {1: <30}".format(
                                "%s: %s%s" % (parameter_name, self.get_field_inital(field_ddic), comma),
                                "// %-10s %-30s %s" % (ttype, rfm_parameter["FIELDKEY"], rfm_parameter["PARAMTEXT"]),
                            )
                        )

                    elif rfm_parameter["PARAMTYPE"] == "STRUCTURE":
                        model_js.write(
                            "{0: <40} {1: <30}".format(
                                "%s: {}%s" % (parameter_name, comma),
                                "// %s : %s" % (rfm_parameter["FIELDKEY"], rfm_parameter["PARAMTEXT"]),
                            )
                        )

                    elif rfm_parameter["PARAMTYPE"] == "TABLE":
                        model_js.write(
                            "{0: <40} {1: <30}".format(
                                "%s: []%s" % (parameter_name, comma),
                                "// %s : %s" % (rfm_parameter["FIELDKEY"], rfm_parameter["PARAMTEXT"]),
                            )
                        )

                    else:
                        raise ValueError("Invalid parameter type [%s]" % rfm_parameter["PARAMTYPE"])

            model_js.deindent()
            model_js.write("};")
            model_js.save()

    def get_abap_table_attrs(self, markup):
        element = ""
        if REMOVE_DDIC:
            del markup[ABAP_TYPE]
        if REMOVE_TYPE:
            del markup[JS_TYPE]
        abap = " data-abap.bind='{"
        lena = len(abap)
        for attr in FIELD_ATTRIBUTES:
            if attr in markup:
                if len(abap) > lena:
                    abap += ", "
                if attr == "abap-shlp":
                    abap += "%s:%s" % (attr.replace("abap-", ""), markup[attr])
                else:
                    abap += '%s:"%s"' % (attr.replace("abap-", ""), markup[attr])
                del markup[attr]
        abap += "}'"
        tagname = markup[HTML_TAG].replace(self.ELEMENT_PREFIX, "")

        # no attributes required for ui-checkbox, date, time
        if tagname in [self.INPUT_TYPE_BINARY_TAG, self.DATE_TAGNAME, self.TIME_TAGNAME]:
            abap = ""

        if "alpha-exit" in markup:
            abap += ' alpha-exit="%s" ' % markup["alpha-exit"]
            del markup["alpha-exit"]

        element += abap

        if tagname not in [self.COLUMN_TAGNAME, self.INPUT_TYPE_BINARY_TAG, self.DATE_TAGNAME, self.TIME_TAGNAME]:
            element += "\n " + " " * len(markup[HTML_TAG])

        element += ' label="%s"' % markup["abap-text"]
        del markup["abap-text"]
        if len(markup) > 1:  # only self.HTML_TAGleft
            # remove 'ui:tag:', '<tagname>'
            markup_text = str(markup)
            m = re.search("(.+?), 'ui-tag(.+?)}", markup_text)
            if m:
                markup_text = m.group(1) + "}"
            element += ' markup="%s"' % str(markup_text)

        return element

    def get_abap_field_attrs(self, markup):
        return self.get_abap_table_attrs(markup)

    def field_length(self, ddic):
        length = 0
        if "DECIMALS" in ddic["format"]:
            if ddic["format"]["DATATYPE"] == "FLTP":
                # abap len 16.16, is actually 1.15
                length = "1.15"
            else:
                if ddic["format"]["DATATYPE"] in ["DEC", "CURR"]:
                    # abap int part = field length - decimal point
                    decrement = 1
                elif ddic["format"]["DATATYPE"] in ["QUAN"]:
                    # abap int part = field length - decimal places
                    decrement = ddic["format"]["DECIMALS"]
                else:
                    decrement = 0
                length = "%s.%s" % (
                    ddic["format"]["LENG"] - decrement,
                    ddic["format"]["DECIMALS"],
                )
        else:
            # no decimals
            if "LENG" in ddic["format"]:
                length = "%s" % ddic["format"]["LENG"]
            else:
                length = -1  # indicate string element, has no fixed length
        # sign
        if "SIGN" in ddic["format"]:
            length = "+" + length
        return length

    def html_markup(self, ddic, bind, tagname=""):

        if "format" not in ddic:
            print(3, ddic.keys())

        markup = {ABAP_TYPE: ddic["format"]["DATATYPE"], "bind": bind}

        # JS_TYPE, HTML_TAG, JS_FORMAT -> markup
        markup.update(self.DDIC_JS[ddic["format"]["DATATYPE"]])

        # use checkbox and combo tags for binary and list inputs
        if INPUT_TYPE_KEY in ddic["format"]:
            if ddic["format"][INPUT_TYPE_KEY] == INPUT_TYPE_BINARY:
                markup[JS_FORMAT] = "boolean"
                markup[HTML_TAG] = self.INPUT_TYPE_BINARY_TAG
            elif ddic["format"][INPUT_TYPE_KEY] == INPUT_TYPE_LIST:
                markup[HTML_TAG] = self.INPUT_TYPE_LIST_TAG

        # replace ui field tagname with coulumn tagname
        if tagname:
            markup[HTML_TAG] = tagname

        # add ui element prefix
        markup[HTML_TAG] = self.ELEMENT_PREFIX + markup[HTML_TAG]

        # todo: not set in backend.py
        if "REQUIRED" in ddic["format"]:
            markup["required"] = True

        if ddic["format"]["DATATYPE"] in ["CURR", "QUAN"]:
            # currency or quantity should reference the UoM or currency key
            if "REFFIELD" in ddic["format"]:
                markup["abap-unit"] = ddic["format"]["REFFIELD"]
            else:
                markup["abap-unit"] = "todo: unit not found"
                print("! Unit not found for:", bind)
                # raise Exception('rfm %s parameter %s CURR or QUAN field %s: no REFFIELD found'
                #                % (rfm_name, rfm_param, fieldname))

        if "input" in ddic:
            if "CONVEXIT" in ddic["input"]:
                markup["alpha-exit"] = ddic["input"]["CONVEXIT"]

            if "SHLP" in ddic["input"]:
                # empty SHLP happen sometimes
                if ddic["input"]["SHLP"].strip():
                    try:
                        [stype, sid] = ddic["input"]["SHLP"].split()
                        markup["abap-shlp"] = f"{{type:'{stype}', id:'{sid}'}}"
                    except Exception as ex:
                        raise ValueError(f"Invalid SHLP format: {ddic['input']['SHLP']}")

            if "MEMORYID" in ddic["input"]:
                markup["abap-mid"] = ddic["input"]["MEMORYID"]

        if ddic["format"]["DATATYPE"] not in ["DATS", "TIMS", "ACCP"] and "BOOLEAN" not in ddic["format"]:
            markup["abap-length"] = self.field_length(ddic)

        if "abap-shlp" in markup:
            # shlp not needed for boolean, date, time
            if JS_FORMAT in markup:
                if markup[JS_FORMAT] == "boolean":
                    del markup["abap-shlp"]

            if markup[ABAP_TYPE] in ["DATS", "TIMS"]:
                # no value input needed for date and time
                del markup["abap-shlp"]
        else:
            # add search help if not maintained for quantity, currency, language
            if markup[ABAP_TYPE] == "CUKY":
                markup["abap-shlp"] = '{"type":"CT", "id":"TCURC"}'

            elif markup[ABAP_TYPE] == "UNIT":
                markup["abap-shlp"] = '{"type":"SH", "id":"H_T006"}'

            elif markup[ABAP_TYPE] == "LANG":
                markup["abap-shlp"] = '{"type":"SH", "id":"H_T002"}'

        markup["abap-text"] = ddic["text"]["FIELDTEXT"]

        return markup

    def html_field(self, model, rfm_parameter, rfm_field):
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
        element = '<%s %s.bind="%s"' % (markup[HTML_TAG], bind_attr, markup["bind"])
        del markup["bind"]
        if "abap-shlp" in markup:
            # custom attribute in form elements
            element += " shlp.bind='%s'" % markup["abap-shlp"]
            del markup["abap-shlp"]
        if "abap-unit" in markup:
            element += ' unit.bind="%s.%s"' % (rfm_parameter["PARAMETER"], markup["abap-unit"])
            del markup["abap-unit"]
        element += self.get_abap_field_attrs(markup)
        element += "></%s>" % markup[HTML_TAG]
        model.write(element)

        model.newline()

    def parameter_init(self):
        def structure_init(model_js, rfm_parameter):

            param_ddic = self.Fields[rfm_parameter["FIELDKEY"]]

            model_js.newline()
            model_js.write(f"// {rfm_parameter['PARAMETER']} {rfm_parameter['FIELDKEY']} {rfm_parameter['PARAMTEXT']}")
            model_js.write()
            model_js.write("/* eslint-disable key-spacing */")
            model_js.write("// prettier-ignore")
            model_js.write("%s = {" % rfm_parameter["PARAMETER"])
            index_last = len(param_ddic) - 1
            model_js.addindent()
            for index, field_name in enumerate(sorted(param_ddic)):
                field_ddic = param_ddic[field_name]

                line = "%-30s: %s" % (field_name, self.get_field_inital(field_ddic))
                line += "," if index < index_last else " "
                if "FIELDTEXT" not in field_ddic["text"]:
                    print(1, rfm_parameter["PARAMETER"], field_name)
                if "FIELDTEXT" in field_ddic["text"]:
                    line += "  // %s" % field_ddic["text"]["FIELDTEXT"]
                else:
                    print(2, field_ddic)
                    raise ValueError("%s: %s" % (rfm_parameter["PARAMETER"], field_name))
                model_js.write(line)
            model_js.deindent()
            model_js.write("};")
            model_js.write("/* eslint-enable key-spacing */")

        def html_table(model, rfm_parameter):
            param_ddic = self.Fields[rfm_parameter["FIELDKEY"]]
            model.newline()
            model.write(
                "<!-- %s %s %s -->"
                % (
                    rfm_parameter["PARAMETER"],
                    rfm_parameter["FIELDKEY"],
                    rfm_parameter["PARAMTEXT"],
                )
            )
            model.write(
                """<ui-datagrid data.bind="%s" title="%s"
            data-summary="false" default-sort=""
            selectable rowselect.trigger="object.selectObject($event.detail)">"""
                % (rfm_parameter["PARAMKEY"], rfm_parameter["PARAMTEXT"])
            )
            model.addindent()
            model.write(FORMATTER_OFF)
            for rfm_field in sorted(param_ddic):
                markup = self.html_markup(param_ddic[rfm_field], rfm_field, self.COLUMN_TAGNAME)
                if markup[ABAP_TYPE] in ["CUKY", "UNIT"]:
                    continue
                element = '<%s sortable field="%s"' % (markup[HTML_TAG], rfm_field)
                if JS_FORMAT in markup:
                    if markup[JS_FORMAT] == "boolean":
                        # markup['type'] = 'boolean'
                        # del markup['format']
                        if "shlp" in markup:
                            del markup["shlp"]

                del markup["bind"]
                if "abap-unit" in markup:
                    element += ' unit="%s"' % markup["abap-unit"]
                    del markup["abap-unit"]

                element += self.get_abap_table_attrs(markup)
                element += "></%s>" % markup[HTML_TAG]
                model.write(element)
            model.write(FORMATTER_ON)
            model.deindent()
            model.write("</ui-datagrid>")
            html_structure(model, rfm_parameter)

        def html_structure(model, rfm_parameter):
            param_ddic = self.Fields[rfm_parameter["FIELDKEY"]]
            if rfm_parameter["PARAMTYPE"] not in ["TABLE", "STRUCTURE"]:
                raise ValueError(rfm_parameter["PARAMTYPE"])
            model.newline()
            model.write(
                "<!-- %s %s %s -->"
                % (
                    rfm_parameter["PARAMETER"],
                    rfm_parameter["FIELDKEY"],
                    rfm_parameter["PARAMTEXT"],
                )
            )
            for rfm_field in sorted(param_ddic):
                self.html_field(model, rfm_parameter, rfm_field)

        for rfm_name in sorted(self.Parameters):

            model = Writer(rfm_name=rfm_name, rfm_set=self.rfm_set, model_prefix=self.MODEL_PREFIX)
            model_js = Writer(rfm_name=rfm_name, rfm_set=self.rfm_set, model_prefix=self.MODEL_PREFIX, write_to="js")

            rfm_params = self.Parameters[rfm_name]

            for param_class in PARAMCLASS:

                paramclass_header = False
                # paramclass_header_js = False

                for parameter_name in sorted(rfm_params):

                    rfm_parameter = self.Parameters[rfm_name][parameter_name]

                    if rfm_parameter["PARAMCLASS"] != param_class:
                        continue

                    if not paramclass_header:
                        paramclass_header = True
                        model.write(HEADER_PARAMCLASS % PARAMCLASS[param_class])
                        model_js.newline()
                        model_js.write("//")
                        model_js.write(HEADER_JS_PARAMCLASS % PARAMCLASS[param_class])
                        model_js.write("//")

                    if rfm_parameter["PARAMTYPE"] == "TABLE":
                        structure_init(model_js, rfm_parameter)
                        html_table(model, rfm_parameter)

                    elif rfm_parameter["PARAMTYPE"] == "STRUCTURE":
                        structure_init(model_js, rfm_parameter)
                        html_structure(model, rfm_parameter)

                    elif rfm_parameter["PARAMTYPE"] == "VARIABLE":
                        self.html_field(model, rfm_parameter, self.Fields[rfm_parameter["FIELDKEY"]])

                    else:
                        raise ValueError("Invalid parameter type [%s]" % rfm_parameter["PARAMTYPE"])

                model.save()
                model_js.save()

    def __del__(self):
        # self.writer_close()
        pass


class ParserFastAngular(ModelParser):
    def __init__(self, rfm_set):
        super().__init__(rfm_set, "fast/angular")

        self.ELEMENT_PREFIX = "fd-"
        self.INPUT_TYPE_BINARY_TAG = "checkbox"
        self.INPUT_TYPE_LIST_TAG = "combobox"
        self.COLUMN_TAGNAME = "fd-column"
        self.DATE_TAGNAME = "datepicker"
        self.TIME_TAGNAME = "timepicker"
        self.TEXT_TAGNAME = "textarea"
        self.MODEL_PREFIX = "model/fast/angular"

    def get_abap_field_attrs(self, markup):
        attrs = {}
        if REMOVE_DDIC:
            del markup[ABAP_TYPE]
        if REMOVE_TYPE:
            del markup[JS_TYPE]
        for attr in FIELD_ATTRIBUTES:
            if attr == "bind":
                continue
            if attr in markup:
                if attr == "abap-shlp":
                    attrs["shlp"] = markup[attr]
                else:
                    attrs[attr.replace("abap-", "")] = markup[attr]
                del markup[attr]
        tagname = markup[HTML_TAG].replace(self.ELEMENT_PREFIX, "")

        # no attributes required for ui-checkbox, date, time
        if tagname in [self.INPUT_TYPE_BINARY_TAG, self.DATE_TAGNAME, self.TIME_TAGNAME]:
            attrs = {}

        if "alpha-exit" in markup:
            attrs["alpha-exit"] = markup["alpha-exit"]
            # abap += ' alpha-exit="%s" ' % markup["alpha-exit"]
            del markup["alpha-exit"]

        attrs["label"] = markup["abap-text"]
        del markup["abap-text"]
        if len(markup) > 1:  # only self.HTML_TAGleft
            # remove 'ui:tag:', '<tagname>'
            markup_text = str(markup)
            m = re.search("(.+?), 'ui-tag(.+?)}", markup_text)
            if m:
                markup_text = m.group(1) + "}"
            attrs["markup"] = str(markup_text)
        # print(attrs)
        return attrs

    def html_field(self, model, rfm_parameter, rfm_field):
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
        markup = dict(markup)

        abap_attrs = self.get_abap_field_attrs(markup)
        data_abap = "{"
        if "type" in abap_attrs:
            data_abap += "type: '%s', length: '%s'" % (abap_attrs["type"], abap_attrs["length"])
        if "mid" in abap_attrs:
            data_abap += ", mid: '%s'" % abap_attrs["mid"]
        if "alpha-exit" in abap_attrs:
            data_abap += ", alpha: '%s'" % abap_attrs["alpha-exit"]
        data_abap += "}"

        element = False
        if "combobox" in markup[HTML_TAG]:
            element = fast_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                abap_attrs["shlp"],
                data_abap,
            )
        elif "input" in markup[HTML_TAG]:
            element = fast_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "lang" in markup[HTML_TAG]:
            element = fast_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "checkbox" in markup[HTML_TAG]:
            element = fast_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "datepicker" in markup[HTML_TAG]:
            element = fast_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "timepicker" in markup[HTML_TAG]:
            element = fast_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "textarea" in markup[HTML_TAG]:
            element = fast_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
            )
        else:
            element = fast_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )

        # remove empty shlp elements
        if element:
            element = re.sub(r'\s+\[\(shlp\)\]=""', "", element)
            model.write(element)

        model.newline()


class ParserFundamentalAngular(ModelParser):
    def __init__(self, rfm_set):
        super().__init__(rfm_set, "fundamental/angular")

        self.ELEMENT_PREFIX = "fd-"
        self.INPUT_TYPE_BINARY_TAG = "checkbox"
        self.INPUT_TYPE_LIST_TAG = "combobox"
        self.COLUMN_TAGNAME = "fd-column"
        self.DATE_TAGNAME = "datepicker"
        self.TIME_TAGNAME = "timepicker"
        self.TEXT_TAGNAME = "textarea"
        self.MODEL_PREFIX = "model/fundamental/angular"

    def get_abap_field_attrs(self, markup):
        attrs = {}
        if REMOVE_DDIC:
            del markup[ABAP_TYPE]
        if REMOVE_TYPE:
            del markup[JS_TYPE]
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
        tagname = markup[HTML_TAG].replace(self.ELEMENT_PREFIX, "")

        # no attributes required for ui-checkbox, date, time
        if tagname in [self.INPUT_TYPE_BINARY_TAG, self.DATE_TAGNAME, self.TIME_TAGNAME]:
            attrs = {}

        if "alpha-exit" in markup:
            attrs["alpha-exit"] = markup["alpha-exit"]
            # abap += ' alpha-exit="%s" ' % markup["alpha-exit"]
            del markup["alpha-exit"]

        attrs["label"] = markup["abap-text"]
        del markup["abap-text"]
        if len(markup) > 1:  # only HTML_TAG left
            # remove 'ui:tag:', '<tagname>'
            markup_text = str(markup)
            m = re.search("(.+?), 'ui-tag(.+?)}", markup_text)
            if m:
                markup_text = m.group(1) + "}"
            attrs["markup"] = str(markup_text)
        # print(attrs)
        return attrs

    def html_field(self, model, rfm_parameter, rfm_field):
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
            data_abap += "type: '%s', length: '%s'" % (abap_attrs["type"], abap_attrs["length"])
        if "mid" in abap_attrs:
            data_abap += ", mid: '%s'" % abap_attrs["mid"]
        if "alpha-exit" in abap_attrs:
            data_abap += ", alpha: '%s'" % abap_attrs["alpha-exit"]
        data_abap += "}"

        # print(abap_attrs)
        element = False
        if "combobox" in markup[HTML_TAG]:
            element = fundamental_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                abap_attrs["shlp"],
                data_abap,
            )
        elif "input" in markup[HTML_TAG]:
            element = fundamental_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "lang" in markup[HTML_TAG]:
            element = fundamental_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "checkbox" in markup[HTML_TAG]:
            element = fundamental_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "datepicker" in markup[HTML_TAG]:
            element = fundamental_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "timepicker" in markup[HTML_TAG]:
            element = fundamental_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "textarea" in markup[HTML_TAG]:
            element = fundamental_ngx[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
            )
        else:
            print(markup[HTML_TAG][3:])
            # element = fundamental_ngx[ngx_markup[HTML_TAG][3:]] % (
            #    abap_attrs["label"],
            #    bind_target,
            # )

        # remove empty shlp elements
        if element:
            element = re.sub(r'\s+data-shlp=""', "", element)
            model.write(element)

        model.newline()


class ParserFundamentalReact(ModelParser):
    def __init__(self, rfm_set):
        super().__init__(rfm_set, "fundamental/react")

        self.ELEMENT_PREFIX = "fd-"
        self.INPUT_TYPE_BINARY_TAG = "checkbox"
        self.INPUT_TYPE_LIST_TAG = "combobox"
        self.COLUMN_TAGNAME = "fd-column"
        self.DATE_TAGNAME = "datepicker"
        self.TIME_TAGNAME = "timepicker"
        self.TEXT_TAGNAME = "textarea"
        self.MODEL_PREFIX = "model/fundamental/react"

    def get_abap_field_attrs(self, markup):
        attrs = {}
        if REMOVE_DDIC:
            del markup[ABAP_TYPE]
        if REMOVE_TYPE:
            del markup[JS_TYPE]
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
        tagname = markup[HTML_TAG].replace(self.ELEMENT_PREFIX, "")

        # no attributes required for ui-checkbox, date, time
        if tagname in [self.INPUT_TYPE_BINARY_TAG, self.DATE_TAGNAME, self.TIME_TAGNAME]:
            attrs = {}

        if "alpha-exit" in markup:
            attrs["alpha-exit"] = markup["alpha-exit"]
            # abap += ' alpha-exit="%s" ' % markup["alpha-exit"]
            del markup["alpha-exit"]

        attrs["label"] = markup["abap-text"]
        del markup["abap-text"]
        if len(markup) > 1:  # only HTML_TAG left
            # remove 'ui:tag:', '<tagname>'
            markup_text = str(markup)
            m = re.search("(.+?), 'ui-tag(.+?)}", markup_text)
            if m:
                markup_text = m.group(1) + "}"
            attrs["markup"] = str(markup_text)
        # print(attrs)
        return attrs

    def html_field(self, model, rfm_parameter, rfm_field):
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

        ngx_markup = dict(markup)
        abap_attrs = self.get_abap_field_attrs(ngx_markup)
        data_abap = "{"
        if "type" in abap_attrs:
            data_abap += "type: '%s', length: '%s'" % (abap_attrs["type"], abap_attrs["length"])
        if "mid" in abap_attrs:
            data_abap += ", mid: '%s'" % abap_attrs["mid"]
        if "alpha-exit" in abap_attrs:
            data_abap += ", alpha: '%s'" % abap_attrs["alpha-exit"]
        data_abap += "}"

        # print(abap_attrs)
        element = False
        if "combobox" in ngx_markup[HTML_TAG]:
            element = fundamental_react[ngx_markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                abap_attrs["shlp"],
                data_abap,
            )
        elif "input" in ngx_markup[HTML_TAG]:
            element = fundamental_react[ngx_markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "lang" in ngx_markup[HTML_TAG]:
            element = fundamental_react[ngx_markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "checkbox" in ngx_markup[HTML_TAG]:
            element = fundamental_react[ngx_markup[HTML_TAG][3:]] % (
                bind_target,
                abap_attrs["label"],
            )
        elif "datepicker" in ngx_markup[HTML_TAG]:
            element = fundamental_react[ngx_markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "timepicker" in ngx_markup[HTML_TAG]:
            element = fundamental_react[ngx_markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "textarea" in ngx_markup[HTML_TAG]:
            element = fundamental_react[ngx_markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
            )
        else:
            print(ngx_markup[HTML_TAG][3:])
            # element = fundamental_react[ngx_markup[HTML_TAG][3:]] % (
            #    abap_attrs["label"],
            #    bind_target,
            # )

        # remove empty shlp elements
        if element:
            element = re.sub(r'\s+data-shlp=""', "", element)
            model.write(element)

        model.newline()


class ParserFundamentalVue(ModelParser):
    def __init__(self, rfm_set):
        super().__init__(rfm_set, "fundamental/vue")

        self.ELEMENT_PREFIX = "fd-"
        self.INPUT_TYPE_BINARY_TAG = "checkbox"
        self.INPUT_TYPE_LIST_TAG = "combobox"
        self.COLUMN_TAGNAME = "fd-column"
        self.DATE_TAGNAME = "datepicker"
        self.TIME_TAGNAME = "timepicker"
        self.TEXT_TAGNAME = "textarea"
        self.MODEL_PREFIX = "model/fundamental/vue"

    def get_abap_field_attrs(self, markup):
        attrs = {}
        if REMOVE_DDIC:
            del markup[ABAP_TYPE]
        if REMOVE_TYPE:
            del markup[JS_TYPE]
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
        tagname = markup[HTML_TAG].replace(self.ELEMENT_PREFIX, "")

        # no attributes required for ui-checkbox, date, time
        if tagname in [self.INPUT_TYPE_BINARY_TAG, self.DATE_TAGNAME, self.TIME_TAGNAME]:
            attrs = {}

        if "alpha-exit" in markup:
            attrs["alpha-exit"] = markup["alpha-exit"]
            # abap += ' alpha-exit="%s" ' % markup["alpha-exit"]
            del markup["alpha-exit"]

        attrs["label"] = markup["abap-text"]
        del markup["abap-text"]
        if len(markup) > 1:  # only HTML_TAG left
            # remove 'ui:tag:', '<tagname>'
            markup_text = str(markup)
            m = re.search("(.+?), 'ui-tag(.+?)}", markup_text)
            if m:
                markup_text = m.group(1) + "}"
            attrs["markup"] = str(markup_text)
        # print(attrs)
        return attrs

    def html_field(self, model, rfm_parameter, rfm_field):
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
            data_abap += "type: '%s', length: '%s'" % (abap_attrs["type"], abap_attrs["length"])
        if "mid" in abap_attrs:
            data_abap += ", mid: '%s'" % abap_attrs["mid"]
        if "alpha-exit" in abap_attrs:
            data_abap += ", alpha: '%s'" % abap_attrs["alpha-exit"]
        data_abap += "}"

        # print(abap_attrs)
        element = False
        if "combobox" in markup[HTML_TAG]:
            element = fundamental_vue[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                abap_attrs["shlp"],
                data_abap,
            )
        elif "input" in markup[HTML_TAG]:
            element = fundamental_vue[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "lang" in markup[HTML_TAG]:
            element = fundamental_vue[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "checkbox" in markup[HTML_TAG]:
            element = fundamental_vue[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "datepicker" in markup[HTML_TAG]:
            element = fundamental_vue[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "timepicker" in markup[HTML_TAG]:
            element = fundamental_vue[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "textarea" in markup[HTML_TAG]:
            element = fundamental_vue[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
            )
        else:
            print(markup[HTML_TAG][3:])
            # element = fundamental_vue[markup[HTML_TAG][3:]] % (
            #    abap_attrs["label"],
            #    bind_target,
            # )

        # remove empty shlp elements
        if element:
            element = re.sub(r'\s+data-shlp=""', "", element)
            model.write(element)

        model.newline()


class ParserUi5React(ModelParser):
    def __init__(self, rfm_set):
        super().__init__(rfm_set, "ui5/react")

        self.ELEMENT_PREFIX = "fd-"
        self.INPUT_TYPE_BINARY_TAG = "checkbox"
        self.INPUT_TYPE_LIST_TAG = "combobox"
        self.COLUMN_TAGNAME = "dg-column"
        self.DATE_TAGNAME = "datepicker"
        self.TIME_TAGNAME = "timepicker"
        self.TEXT_TAGNAME = "textarea"
        self.MODEL_PREFIX = "model/ui5/react"

    def get_abap_field_attrs(self, markup):
        attrs = {}
        if REMOVE_DDIC:
            del markup[ABAP_TYPE]
        if REMOVE_TYPE:
            del markup[JS_TYPE]
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
        tagname = markup[HTML_TAG].replace(self.ELEMENT_PREFIX, "")

        # no attributes required for ui-checkbox, date, time
        if tagname in [self.INPUT_TYPE_BINARY_TAG, self.DATE_TAGNAME, self.TIME_TAGNAME]:
            attrs = {}

        if "alpha-exit" in markup:
            attrs["alpha-exit"] = markup["alpha-exit"]
            # abap += ' alpha-exit="%s" ' % markup["alpha-exit"]
            del markup["alpha-exit"]

        attrs["label"] = markup["abap-text"]
        del markup["abap-text"]
        if len(markup) > 1:  # only HTML_TAG left
            # remove 'ui:tag:', '<tagname>'
            markup_text = str(markup)
            m = re.search("(.+?), 'ui-tag(.+?)}", markup_text)
            if m:
                markup_text = m.group(1) + "}"
            attrs["markup"] = str(markup_text)
        # print(attrs)
        return attrs

    def html_field(self, model, rfm_parameter, rfm_field):
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
        element = '<%s %s.bind="%s"' % (markup[HTML_TAG], bind_attr, bind_target)
        del markup["bind"]

        abap_attrs = self.get_abap_field_attrs(markup)
        data_abap = "{"
        if "type" in abap_attrs:
            data_abap += "type: '%s', length: '%s'" % (abap_attrs["type"], abap_attrs["length"])
        if "mid" in abap_attrs:
            data_abap += ", mid: '%s'" % abap_attrs["mid"]
        if "alpha-exit" in abap_attrs:
            data_abap += ", alpha: '%s'" % abap_attrs["alpha-exit"]
        data_abap += "}"

        # print(abap_attrs)
        element = False
        if "combobox" in markup[HTML_TAG]:
            element = ui5_react[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                abap_attrs["shlp"],
                data_abap,
            )
        elif "input" in markup[HTML_TAG]:
            element = ui5_react[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "lang" in markup[HTML_TAG]:
            element = ui5_react[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
                abap_attrs["shlp"] if "shlp" in abap_attrs else "",
            )
        elif "checkbox" in markup[HTML_TAG]:
            element = ui5_react[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "datepicker" in markup[HTML_TAG]:
            element = ui5_react[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "timepicker" in markup[HTML_TAG]:
            element = ui5_react[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
            )
        elif "textarea" in markup[HTML_TAG]:
            element = ui5_react[markup[HTML_TAG][3:]] % (
                abap_attrs["label"],
                bind_target,
                data_abap,
            )
        else:
            print(markup[HTML_TAG][3:])
            # element = ui5_react[markup[HTML_TAG][3:]] % (
            #    abap_attrs["label"],
            #    bind_target,
            # )

        # remove empty shlp elements
        if element:
            element = re.sub(r'\s+data-shlp=""', "", element)
            model.write(element)

        model.newline()


SUPPORTED_FRAMEWORKS = OrderedDict(
    {
        "aurelia": ModelParser,
        "fast-ngx": ParserFastAngular,
        "fundamental-ngx": ParserFundamentalAngular,
        "fundamental-react": ParserFundamentalReact,
        "fundamental-vue": ParserFundamentalVue,
        "ui5-react": ParserUi5React,
    }
)


def get_frontend_parser(ui, rfm_set):
    try:
        return SUPPORTED_FRAMEWORKS[ui](rfm_set)
    except Exception as ex:
        raise ValueError(f"Frontend not supported: {ui}") from None


def get_arg_parser():

    arg_usage = """python frontend.py <ui> <rfm set> [<options>]
       where <ui> can be:\n           """ + "\n           ".join(
        SUPPORTED_FRAMEWORKS.keys()
    )

    arg_parser = argparse.ArgumentParser(
        usage=arg_usage,
        description="sap ui frontend templates",
    )
    arg_parser.add_argument(
        "ui",
        type=str,
        help="ui framework",
        choices=SUPPORTED_FRAMEWORKS,
    )
    arg_parser.add_argument(
        "rfmset",
        nargs="?",
        default=None,
        type=str,
        help="rfm set name",
    )
    return arg_parser
