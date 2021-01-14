#!/home/pos/.virtualenvs/picoUI/bin/python

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

import codecs
import json
import logging
import re
import shutil
import os
import sys
from collections import OrderedDict
from datetime import datetime

from backend.constants import get_ddic_js, SIGNATURE, ParamClass, ParamType
from backend.business_objects import catalog
from backend.utils import Writer, get_log_level
from backend.backend_parser import INPUT_TYPE_KEY, INPUT_TYPE_BINARY, INPUT_TYPE_LIST


FORMATTER_ON = "<!-- @formatter:on -->"
FORMATTER_OFF = "<!-- @formatter:off -->"

ABAP_TYPE = "abap-ddic"
TIMESTAMP = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
PARAMCLASS = OrderedDict(
    [("I", "INPUT"), ("C", "CHANGING"), ("T", "TABLE"), ("E", "OUTPUT")]
)
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

FIELD_ATTRIBUTES = [
    ABAP_TYPE,
    "type",
    "format",
    "abap-length",
    "abap-mid",
    "abap-shlp",
]


def get_annotations(output_folder, rfm_set, rfm_name=None):
    annotations = {}
    with codecs.open(
        f"{output_folder}/{rfm_set}/Params.json",
        encoding="utf-8",
        mode="r",
    ) as fin:
        annotations["Parameters"] = json.load(fin)
    with codecs.open(
        f"{output_folder}/{rfm_set}/Fields.json",
        encoding="utf-8",
        mode="r",
    ) as fin:
        annotations["Fields"] = OrderedDict(json.load(fin))
    with codecs.open(
        f"{output_folder}/{rfm_set}/Helps.json",
        encoding="utf-8",
        mode="r",
    ) as fin:
        annotations["Helps"] = OrderedDict(json.load(fin))
    with codecs.open(
        f"{output_folder}/{rfm_set}/Stat.json",
        encoding="utf-8",
        mode="r",
    ) as fin:
        annotations["Stat"] = json.load(fin)
    if rfm_name is not None:
        annotations["Parameters"] = {rfm_name: annotations["Parameters"][rfm_name]}

    return annotations


class ModelParser:
    def __init__(self, args, annotations=None):
        self.args = args
        self.ui = args.ui if "ui" in vars(args) else ""
        self.output_folder = args.output_folder
        self.rfm_name = None
        self.annotations = annotations

        if annotations is None:
            self.rfm_set = args.rfm_set
            self.model_prefix = f"ui/{self.ui.replace('-','/')}"
        else:
            self.rfm_name = args.rfm_name
            self.rfm_set = ""
            self.model_prefix = ""
            self.Parameters = annotations["Parameters"]
            self.Fields = annotations["Fields"]
            self.Helps = annotations["Helps"]
            self.Stat = annotations["Stat"]

        if args.log_level is not None:
            logging.basicConfig(level=get_log_level(args.log_level))

        self.ELEMENT_PREFIX = "ui-"
        self.INPUT_TYPE_BINARY_TAG = "checkbox"
        self.INPUT_TYPE_LIST_TAG = "combo"
        self.DATE_TAGNAME = "date"
        self.TIME_TAGNAME = "time"
        self.TEXT_TAGNAME = "text"
        self.COLUMN_TAGNAME = "dg-column"

    def initialize(self):
        self.DDIC_JS = get_ddic_js(
            INPUT_TYPE_BINARY_TAG=self.INPUT_TYPE_BINARY_TAG,
            DATE_TAGNAME=self.DATE_TAGNAME,
            TIME_TAGNAME=self.TIME_TAGNAME,
            TEXT_TAGNAME=self.TEXT_TAGNAME,
        )

        if self.annotations is None:
            # clear the frontend model
            if os.path.exists(
                f"{self.output_folder}/{self.rfm_set}/{self.model_prefix}"
            ):
                shutil.rmtree(
                    f"{self.output_folder}/{self.rfm_set}/{self.model_prefix}"
                )
            os.makedirs(f"{self.output_folder}/{self.rfm_set}/{self.model_prefix}")

            # read the backend model
            try:
                annotations = get_annotations(
                    output_folder=self.output_folder, rfm_set=self.rfm_set
                )
                self.Parameters = annotations["Parameters"]
                self.Fields = annotations["Fields"]
                self.Helps = annotations["Helps"]
                self.Stat = annotations["Stat"]
            except Exception as ex:
                raise Exception(
                    f"Local metadata not found: {self.rfm_set} run: python backend.py <abap system> {self.rfm_set}"
                ) from None

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
        # if "nativeKey" not in param:
        field = self.Fields[param["FIELDKEY"]]
        result["abaptype"] = param["FIELDKEY"]

        if param["paramType"] == ParamType.table.value:
            result["init"] = "[]"

        elif param["paramType"] == "struct":
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
                result["init"] = self.DDIC_JS[result["abaptype"]]["initial"]
            else:
                result["init"] = '"native ABAP type"'

            if result["leng"]:
                result["abaptype"] += f" ({result['leng']})"

            result["optional"] = "default" in param
            if result["optional"]:
                result["init"] = param["default"]
            if type(result["init"]) == str:
                if len(result["init"].strip()) == 0:
                    result["init"] = "''"
                result["init"] = result["init"].replace("'", '"')

        else:
            raise ValueError(f"Unknown parameter type {param['paramType']}")

        return result

    def get_field_initializer(self, field_data):
        result = {
            "abaptype": field_data["format"]["DATATYPE"],
            "init": "",
            "alpha": "",
        }
        leng = ""
        if "LENG" in field_data["format"]:
            leng = str(field_data["format"]["LENG"])
        if "DECIMALS" in field_data["format"]:
            leng += f".{field_data['format']['DECIMALS']}"

        if result["abaptype"] in self.DDIC_JS:
            result["init"] = self.DDIC_JS[result["abaptype"]]["initial"]
            if "input" in field_data:
                if "CONVEXIT" in field_data["input"]:
                    result["alpha"] = field_data["input"]["CONVEXIT"]
        else:
            result["init"] = '"native ABAP type"'

        if leng:
            result["abaptype"] += f" ({leng})"
        return result

    def escape_quotes(self, ucstr):
        return ucstr.replace('"', "&quot")

    def parse(self):

        self.initialize()

        self.headers()

        self.rfm_init()

        self.parameter_init()

        if self.rfm_name is None:
            self.helps()

    def helps(self):
        help_js = Writer(
            rfm_name="valueInput",
            rfm_set=self.rfm_set,
            model_prefix=self.model_prefix,
            write_to="js",
            output_folder=self.output_folder,
        )
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
                    value_property = ", ".join(
                        "'{0}'".format(v) for v in shlp["valueProperty"]
                    )
                    value_property = f"[{value_property}]"

                requested_fields = value_property
                help_js.write("// %s" % shlp["text"])
                help_js.write(
                    "%s: {type: '%s', id: '%s', valueProperty: %s,"
                    % (shlp_key.replace(" ", "_"), shlp_type, shlp_id, value_property)
                )
                help_js.write(
                    "    displayProperty: [], selection: [], requestedFields: %s },"
                    % requested_fields
                )
                help_js.write("")

                help_js.save()

    def headers(self):
        for rfm_name in sorted(self.Parameters):
            if self.rfm_name is None:
                model = Writer(
                    rfm_name=rfm_name,
                    rfm_set=self.rfm_set,
                    model_prefix=self.model_prefix,
                    output_folder=self.output_folder,
                )
                model.write(HEADER % (rfm_name, SIGNATURE))
                model.save()

            model_js = Writer(
                rfm_name=rfm_name,
                rfm_set=self.rfm_set,
                model_prefix=self.model_prefix,
                write_to="js",
            )
            model_js.write(HEADER_JS % (rfm_name, SIGNATURE))
            stat = self.Stat[rfm_name]
            model_js.write(
                f"""// Variables : {stat["var"]}
// Structures: {stat["struct"]}
// Tables    : {stat["table"]}
// Exceptions: {stat["exception"]}
"""
            )
            model_js.save()

    def rfm_init(self):
        for rfm_name in sorted(self.Parameters):

            rfm_params = self.Parameters[rfm_name]

            model_js = Writer(
                rfm_name=rfm_name,
                rfm_set=self.rfm_set,
                model_prefix=self.model_prefix,
                write_to="js",
                output_folder=self.output_folder,
            )
            model_js.write("%s = {" % rfm_name.replace("/", "_"))
            model_js.addindent()

            rfm_params = self.sort_params_for_output(rfm_name)

            # RFM parameters init
            for param_class in PARAMCLASS:

                paramclass_header = False

                for parameter_name in rfm_params:

                    rfm_parameter = rfm_params[parameter_name]

                    if rfm_parameter["PARAMCLASS"] != param_class:
                        continue

                    logging.info(f"rfm init rfm: {rfm_name} : {parameter_name}")

                    if not paramclass_header:
                        paramclass_header = True
                        model_js.newline()
                        model_js.write(HEADER_JS_PARAMCLASS % PARAMCLASS[param_class])
                        model_js.newline()

                    left = (
                        parameter_name
                        if rfm_parameter["required"]
                        else f"//{parameter_name}"
                    )
                    right = self.get_param_initializer(rfm_parameter)
                    param_text = rfm_parameter["PARAMTEXT"]

                    if rfm_parameter["paramType"] == ParamType.var.value:
                        if len(right["alpha"].strip()) > 0:
                            model_js.write(
                                "{:<33}: {:>4}, // {} ALPHA={} {}".format(
                                    left,
                                    right["init"],
                                    right["abaptype"],
                                    right["alpha"],
                                    param_text,
                                )
                            )
                        else:
                            model_js.write(
                                "{:<33}: {:>4}, // {} {}".format(
                                    left, right["init"], right["abaptype"], param_text
                                )
                            )

                    elif rfm_parameter["paramType"] == ParamType.struct.value:
                        model_js.write(
                            "{:<33}: {:>4}, // {} {}".format(
                                left, right["init"], right["abaptype"], param_text
                            )
                        )

                    elif rfm_parameter["paramType"] == ParamType.table.value:
                        model_js.write(
                            "{:<33}: {:>4}, // {} {}".format(
                                left, right["init"], right["abaptype"], param_text
                            )
                        )
                    else:
                        raise ValueError(
                            "Invalid parameter type [%s]" % rfm_parameter["paramType"]
                        )

            model_js.deindent()
            model_js.write("};")
            model_js.save()

    def get_abap_field_attrs(self, markup):
        element = ""
        if self.args.no_ddic:
            del markup[ABAP_TYPE]
        if self.args.no_type:
            del markup["type"]
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
        tagname = markup["html-tag"].replace(self.ELEMENT_PREFIX, "")

        # no attributes required for ui-checkbox, date, time
        if tagname in [
            self.INPUT_TYPE_BINARY_TAG,
            self.DATE_TAGNAME,
            self.TIME_TAGNAME,
        ]:
            abap = ""

        if "alpha-exit" in markup:
            abap += ' alpha-exit="%s" ' % markup["alpha-exit"]
            del markup["alpha-exit"]

        element += abap

        if tagname not in [
            self.COLUMN_TAGNAME,
            self.INPUT_TYPE_BINARY_TAG,
            self.DATE_TAGNAME,
            self.TIME_TAGNAME,
        ]:
            element += "\n " + " " * len(markup["html-tag"])

        element += ' label="%s"' % markup["abap-text"]
        del markup["abap-text"]

        # todo: not needed
        # if len(markup) > 1:  # only self.HTML_TAG left
        #     # remove 'ui:tag:', '<tagname>'
        #     markup_text = str(markup)
        #     m = re.search("(.+?), 'ui-tag(.+?)}", markup_text)
        #     if m:
        #         markup_text = m.group(1) + "}"
        #     element += ' markup="%s"' % str(markup_text)

        return element

    def get_abap_table_attrs(self, markup):
        element = ""
        if self.args.no_ddic:
            del markup[ABAP_TYPE]
        if self.args.no_type:
            del markup["type"]
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
        tagname = markup["html-tag"].replace(self.ELEMENT_PREFIX, "")

        # no attributes required for ui-checkbox, date, time
        if tagname in [
            self.INPUT_TYPE_BINARY_TAG,
            self.DATE_TAGNAME,
            self.TIME_TAGNAME,
        ]:
            abap = ""

        if "alpha-exit" in markup:
            abap += ' alpha-exit="%s" ' % markup["alpha-exit"]
            del markup["alpha-exit"]

        element += abap

        if tagname not in [
            self.COLUMN_TAGNAME,
            self.INPUT_TYPE_BINARY_TAG,
            self.DATE_TAGNAME,
            self.TIME_TAGNAME,
        ]:
            element += "\n " + " " * len(markup["html-tag"])

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

        markup = {ABAP_TYPE: ddic["format"]["DATATYPE"], "bind": bind}

        # remove frontend markup
        for m in ["html-tag", "initial", "comment"]:
            if m in markup[ABAP_TYPE]:
                del markup[ABAP_TYPE][m]

        # "type", "html-tag", "format" -> markup
        markup.update(self.DDIC_JS[ddic["format"]["DATATYPE"]])

        # use checkbox and combo tags for binary and list inputs
        if INPUT_TYPE_KEY in ddic["format"]:
            if ddic["format"][INPUT_TYPE_KEY] == INPUT_TYPE_BINARY:
                markup["format"] = "boolean"
                markup["html-tag"] = self.INPUT_TYPE_BINARY_TAG
            elif ddic["format"][INPUT_TYPE_KEY] == INPUT_TYPE_LIST:
                markup["html-tag"] = self.INPUT_TYPE_LIST_TAG

        # replace ui field tagname with coulumn tagname
        if tagname:
            markup["html-tag"] = tagname

        # add ui element prefix
        markup["html-tag"] = self.ELEMENT_PREFIX + markup["html-tag"]

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
                        raise ValueError(
                            f"Invalid SHLP format: {ddic['input']['SHLP']}"
                        )

            if "MEMORYID" in ddic["input"]:
                markup["abap-mid"] = ddic["input"]["MEMORYID"]

        if (
            ddic["format"]["DATATYPE"] not in ["DATS", "TIMS", "ACCP"]
            and "BOOLEAN" not in ddic["format"]
        ):
            markup["abap-length"] = self.field_length(ddic)

        if "abap-shlp" in markup:
            # shlp not needed for boolean, date, time
            if "format" in markup:
                if markup["format"] == "boolean":
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

    def sort_params_for_output(self, rfm_name):
        rfm_param_names = sorted(self.Parameters[rfm_name].keys())
        rfm_params_sorted = OrderedDict()
        for param_class in PARAMCLASS:
            for parameter_name in rfm_param_names:
                rfm_parameter = self.Parameters[rfm_name][parameter_name]
                if (
                    rfm_parameter["PARAMCLASS"] == param_class
                    and rfm_parameter["required"]
                ):
                    rfm_params_sorted[parameter_name] = rfm_parameter

            for parameter_name in rfm_param_names:
                rfm_parameter = self.Parameters[rfm_name][parameter_name]
                if (
                    rfm_parameter["PARAMCLASS"] == param_class
                    and not rfm_parameter["required"]
                ):
                    rfm_params_sorted[parameter_name] = rfm_parameter

        return rfm_params_sorted

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
        element = '<%s %s.bind="%s"' % (markup["html-tag"], bind_attr, markup["bind"])
        del markup["bind"]
        if "abap-shlp" in markup:
            # custom attribute in form elements
            element += " shlp.bind='%s'" % markup["abap-shlp"]
            del markup["abap-shlp"]
        if "abap-unit" in markup:
            element += ' unit.bind="%s.%s"' % (
                rfm_parameter["PARAMETER"],
                markup["abap-unit"],
            )
            del markup["abap-unit"]
        element += self.get_abap_field_attrs(markup)
        element += "></%s>" % markup["html-tag"]
        model.write(element)

        model.newline()

    def parameter_init(self):
        def structure_init(model_js, rfm_parameter):
            logging.info(f"  structure init {rfm_parameter['PARAMETER']}")

            param_ddic = self.Fields[rfm_parameter["FIELDKEY"]]

            model_js.newline()
            model_js.write(
                f"// {rfm_parameter['PARAMETER']} {rfm_parameter['FIELDKEY']} {rfm_parameter['PARAMTEXT']}"
            )
            model_js.write()
            model_js.write("/* eslint-disable key-spacing */")
            model_js.write("// prettier-ignore")
            model_js.write("%s = {" % rfm_parameter["PARAMETER"])
            index_last = len(param_ddic) - 1
            model_js.addindent()
            for index, field_name in enumerate(sorted(param_ddic)):
                field_ddic = param_ddic[field_name]

                left = field_name.replace("/", "_")
                if not left:
                    left = '""'  # line type table
                right = self.get_field_initializer(field_ddic)
                if "FIELDTEXT" in field_ddic["text"]:
                    field_text = field_ddic["text"]["FIELDTEXT"]
                else:
                    raise ValueError(
                        f"Text not found for rfm parameter: {rfm_parameter['PARAMETER']} field: {field_name}"
                    )

                if right["alpha"]:
                    line = "{:<33}: {:>4}, // {} ALPHA={} {}".format(
                        left,
                        right["init"],
                        right["abaptype"],
                        right["alpha"],
                        field_text,
                    )
                else:
                    line = "{:<33}: {:>4}, // {} {}".format(
                        left, right["init"], right["abaptype"], field_text
                    )
                model_js.write(line)

            model_js.deindent()
            model_js.write("};")
            model_js.write("/* eslint-enable key-spacing */")

        def html_table(model, rfm_parameter):
            logging.info(f"  html table {rfm_parameter['PARAMETER']}")

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
                markup = self.html_markup(
                    param_ddic[rfm_field], rfm_field, self.COLUMN_TAGNAME
                )
                if markup[ABAP_TYPE] in ["CUKY", "UNIT"]:
                    continue
                element = '<%s sortable field="%s"' % (markup["html-tag"], rfm_field)
                if "format" in markup:
                    if markup["format"] == "boolean":
                        # markup['type'] = 'boolean'
                        # del markup['format']
                        if "shlp" in markup:
                            del markup["shlp"]

                del markup["bind"]
                if "abap-unit" in markup:
                    element += ' unit="%s"' % markup["abap-unit"]
                    del markup["abap-unit"]

                element += self.get_abap_table_attrs(markup)
                element += "></%s>" % markup["html-tag"]
                model.write(element)
            model.write(FORMATTER_ON)
            model.deindent()
            model.write("</ui-datagrid>")
            html_structure(model, rfm_parameter)

        def html_structure(model, rfm_parameter):
            logging.info(f"  html structure {rfm_parameter['PARAMETER']}")
            param_ddic = self.Fields[rfm_parameter["FIELDKEY"]]
            if rfm_parameter["paramType"] not in ["table", "struct"]:
                raise ValueError(rfm_parameter["paramType"])
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

            if self.rfm_name is None:
                model = Writer(
                    rfm_name=rfm_name,
                    rfm_set=self.rfm_set,
                    model_prefix=self.model_prefix,
                )

            model_js = Writer(
                rfm_name=rfm_name,
                rfm_set=self.rfm_set,
                model_prefix=self.model_prefix,
                write_to="js",
                output_folder=self.output_folder,
            )

            rfm_params = self.sort_params_for_output(rfm_name)

            for param_class in PARAMCLASS:

                paramclass_header = False

                for parameter_name in rfm_params:

                    rfm_parameter = rfm_params[parameter_name]

                    if rfm_parameter["PARAMCLASS"] != param_class:
                        continue

                    logging.info(f"parameter init rfm: {rfm_name} : {parameter_name}")

                    if not paramclass_header:
                        paramclass_header = True
                        if self.rfm_name is None:
                            model.write(HEADER_PARAMCLASS % PARAMCLASS[param_class])
                        model_js.newline()
                        model_js.write("//")
                        model_js.write(HEADER_JS_PARAMCLASS % PARAMCLASS[param_class])
                        model_js.write("//")

                    if rfm_parameter["paramType"] == ParamType.table.value:
                        structure_init(model_js, rfm_parameter)
                        if self.rfm_name is None:
                            html_table(model, rfm_parameter)

                    elif rfm_parameter["paramType"] == ParamType.struct.value:
                        structure_init(model_js, rfm_parameter)
                        if self.rfm_name is None:
                            html_structure(model, rfm_parameter)

                    elif rfm_parameter["paramType"] == ParamType.var.value:
                        if "nativeKey" in rfm_parameter:
                            pass
                            # self.html_field(
                            #     model, rfm_parameter, rfm_parameter["nativeKey"]
                            # )
                        else:
                            if self.rfm_name is None:
                                self.html_field(
                                    model,
                                    rfm_parameter,
                                    self.Fields[rfm_parameter["FIELDKEY"]],
                                )

                    else:
                        raise ValueError(
                            "Invalid parameter type [%s]" % rfm_parameter["paramType"]
                        )

                if self.rfm_name is None:
                    model.save()
                model_js.save()

    def __del__(self):
        # self.writer_close()
        pass
