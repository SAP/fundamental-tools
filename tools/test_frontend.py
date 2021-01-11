#!/home/pos/.virtualenvs/picoUI/bin/python

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

import sys

from backend import rfm_sets, catalog

from frontend import get_arg_parser, get_frontend_parser, SUPPORTED_FRAMEWORKS

if __name__ == "__main__":
    if len(rfm_sets) == 0:
        RFMLIST = catalog
    else:
        RFMLIST = rfm_sets

    for ui in SUPPORTED_FRAMEWORKS:

        print(f"\nfrontend: {ui}\n")

        for rfmset_name in sorted(RFMLIST):
            sys.argv = [sys.argv[0]]
            sys.argv.extend([ui])
            sys.argv.extend([rfmset_name])
            args = get_arg_parser().parse_args()

            frontend_parser = get_frontend_parser(args)
            frontend_parser.parse()
            print(
                f"Processed {len(catalog[rfmset_name])} RFMs of ABAP API {rfmset_name}"
            )
