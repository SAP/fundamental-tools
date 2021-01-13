# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

import argparse
import os
import json
import codecs
from datetime import datetime
from backend import catalog, rfm_sets
from backend.constants import DEFAULT_OUTPUT_FOLDER, VERSION, ParamType
from backend.backend_parser import INPUT_TYPE_KEY, INPUT_TYPE_BINARY, INPUT_TYPE_LIST
from frontend import get_annotations


class AlphaParser:
    def __init__(self, rfmset, args):
        self.rfmset = rfmset
        self.output_folder = args.output_folder

        annotations = get_annotations(DEFAULT_OUTPUT_FOLDER, rfmset)
        self.Parameters = annotations["Parameters"]
        self.Fields = annotations["Fields"]

        self.alpha = {}

    def add(self, rfm_name, parameter_name, rfm_field_name, ddic):
        convexit = False
        if "input" in ddic:
            if "CONVEXIT" in ddic["input"]:
                convexit = ddic["input"]["CONVEXIT"]
        if not convexit:
            return
        if rfm_name not in self.alpha:
            self.alpha[rfm_name] = []
        ce = {}
        ce["parameter"] = parameter_name
        if rfm_field_name is not False:
            ce["field"] = rfm_field_name
        ce["convexit"] = convexit
        self.alpha[rfm_name].append(ce)

    def parse(self):

        for rfm_name in sorted(self.Parameters):

            rfm_params = self.Parameters[rfm_name]

            for parameter_name in sorted(rfm_params):
                rfm_parameter = rfm_params[parameter_name]

                if "nativeKey" in rfm_parameter:
                    continue

                if rfm_parameter["paramType"] == ParamType.var.value:
                    ddic = self.Fields[rfm_parameter["FIELDKEY"]]
                    self.add(rfm_name, parameter_name, False, ddic)

                elif rfm_parameter["paramType"] in (
                    ParamType.struct.value,
                    ParamType.table.value,
                ):
                    param_ddic = self.Fields[rfm_parameter["FIELDKEY"]]

                    for rfm_field_name in sorted(param_ddic):
                        if "nativeType" not in rfm_parameter:
                            ddic = param_ddic[rfm_field_name]
                            self.add(rfm_name, parameter_name, rfm_field_name, ddic)

                else:
                    raise ValueError(
                        "Invalid parameter type [%s]" % rfm_parameter["PARAMTYPE"]
                    )

    def save(self):
        with codecs.open(
            f"{self.output_folder}/{rfmset}/Alpha.json", encoding="utf-8", mode="wb"
        ) as fout:
            json.dump(
                alpha_parser.alpha,
                fout,
                indent=4,
                ensure_ascii=False,
                sort_keys=True,
            )


def get_arg_parser():
    arg_usage = """alpha <API name> [<option>]
where <option> can be:
    -h                  Quick help on rfmcall
    -o, --output_folder Model output folder, default: "model"
"""
    arg_parser = argparse.ArgumentParser(
        # prog = sys.argv[0],
        usage=arg_usage,
        description="ALPHA exits of a given ABAP API",
    )
    arg_parser.add_argument("rfm_set", nargs="?", default=False, help="ABAP RFM name")
    arg_parser.add_argument(
        "-o",
        "--output_folder",
        dest="output_folder",
        default=DEFAULT_OUTPUT_FOLDER,
        help="Output folder",
    )
    return arg_parser


if __name__ == "__main__":

    args = get_arg_parser().parse_args()

    print(args)

    RFMLIST = rfm_sets
    if args.rfm_set:
        RFMLIST = [args.rfm_set]
    if len(rfm_sets) == 0:
        RFMLIST = catalog

    for rfmset in sorted(RFMLIST):

        print("Alpha %s (%u)" % (rfmset, len(catalog[rfmset])))

        alpha_parser = AlphaParser(rfmset=rfmset, args=args)

        alpha_parser.parse()

        alpha_parser.save()

    print("done")
