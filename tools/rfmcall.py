# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

import argparse

from backend.constants import DEFAULT_OUTPUT_FOLDER
from backend import BackendParser
from frontend import get_frontend_parser
from frontend.frontend_parser import get_annotations


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
        dest="languages",
        default=["en"],
        help="Texts' languages",
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
    arg_parser.add_argument(
        "-s",
        "--save",
        action="store_true",
        help="save RFM call template to local .js file",
    )

    return arg_parser


if __name__ == "__main__":

    args = get_arg_parser().parse_args()

    backend_parser = BackendParser(args)

    annotations = backend_parser.run()

    frontend_parser = get_frontend_parser(args, annotations=annotations)

    frontend_parser.parse()

    print("done")
