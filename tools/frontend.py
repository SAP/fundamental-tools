# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

from backend import rfm_sets, catalog

from frontend import get_arg_parser, get_frontend_parser

if __name__ == "__main__":

    args = get_arg_parser().parse_args()

    if args.rfm_set is None:
        RFMLIST = rfm_sets
    else:
        if args.rfm_set not in catalog:
            raise ValueError(f"RFM set not defined in BO catalog: {args.rfm_set}")
        else:
            RFMLIST = [args.rfm_set]

    for rfmset_name in sorted(RFMLIST):

        print(f"{args.ui}: {len(catalog[rfmset_name])} ABAP API of {rfmset_name}")

        frontend_parser = get_frontend_parser(args)

        frontend_parser.parse()

        print("done")
