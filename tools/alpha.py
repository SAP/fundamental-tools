#!/home/pos/.virtualenvs/picoUI/bin/python

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

import os
import json
import codecs
import re
import shutil
import sys
from collections import OrderedDict
from datetime import datetime
from backend import VERSION, catalog, rfm_sets, output_root
from backend.backend_parser import INPUT_TYPE_KEY, INPUT_TYPE_BINARY, INPUT_TYPE_LIST


class AlphaParser:
    def __init__(self, rfmset):
        self.rfmset = rfmset

        # read the backend model
        with codecs.open(
            f"{output_folder}/{self.rfmset}/Params.json", encoding="utf-8", mode="r"
        ) as fin:
            self.Parameters = json.load(fin)
        with codecs.open(
            f"{output_folder}/{self.rfmset}/Fields.json", encoding="utf-8", mode="r"
        ) as fin:
            self.Fields = OrderedDict(json.load(fin))

        self.alpha = {}

    def add(self, rfm_name, rfm_parameter_name, rfm_field_name, ddic):
        convexit = False
        if "input" in ddic:
            if "CONVEXIT" in ddic["input"]:
                convexit = ddic["input"]["CONVEXIT"]
        if not convexit:
            return
        if rfm_name not in self.alpha:
            self.alpha[rfm_name] = []
        ce = {}
        ce["parameter"] = rfm_parameter_name
        if rfm_field_name is not False:
            ce["field"] = rfm_field_name
        ce["convexit"] = convexit
        self.alpha[rfm_name].append(ce)

    def parse(self):

        for rfm_name in sorted(self.Parameters):

            rfm_params = self.Parameters[rfm_name]

            for rfm_parameter_name in sorted(rfm_params):
                rfm_parameter = rfm_params[rfm_parameter_name]

                if rfm_parameter["PARAMTYPE"] == "VARIABLE":
                    ddic = self.Fields[rfm_parameter["FIELDKEY"]]
                    self.add(rfm_name, rfm_parameter_name, False, ddic)

                elif rfm_parameter["PARAMTYPE"] in ("STRUCTURE", "TABLE"):
                    param_ddic = self.Fields[rfm_parameter["FIELDKEY"]]

                    for rfm_field_name in sorted(param_ddic):
                        ddic = param_ddic[rfm_field_name]
                        self.add(rfm_name, rfm_parameter_name, rfm_field_name, ddic)

                else:
                    raise ValueError(
                        "Invalid parameter type [%s]" % rfm_parameter["PARAMTYPE"]
                    )


if __name__ == "__main__":

    if len(rfm_sets) == 0:
        rfm_sets = catalog

    for rfmset in sorted(rfm_sets):

        print("Alpha %s (%u)" % (rfmset, len(catalog[rfmset])))

        alpha_parser = AlphaParser(rfmset)

        alpha_parser.parse()

        with codecs.open(
            "{output_folder}/%s/Alpha.json" % rfmset, encoding="utf-8", mode="wb"
        ) as fout:
            json.dump(
                alpha_parser.alpha,
                fout,
                indent=4,
                ensure_ascii=False,
                sort_keys=True,  # encoding="utf-8",
            )

        del alpha_parser
