# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

from backend.constants import DEFAULT_OUTPUT_FOLDER
from backend import BackendParser
from frontend import get_frontend_parser, get_annotations
from rfmcall import get_arg_parser

if __name__ == "__main__":

    args = get_arg_parser().parse_args()

    # backend_parser = BackendParser(args)

    # annotations = backend_parser.run()

    # annotations = get_annotations("../model", "__TEST__")
    annotations = get_annotations("../model", "PURCHASE_ORDER", "BAPI_PO_CREATE")

    frontend_parser = get_frontend_parser(args, annotations=annotations)

    frontend_parser.parse()

    print("done")
