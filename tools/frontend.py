#!/home/pos/.virtualenvs/picoUI/bin/python

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# -*- coding: utf-8 -*-


from generator import rfm_sets, catalog

from frontend import get_arg_parser, get_frontend_parser

if __name__ == "__main__":

    args = get_arg_parser().parse_args()

    if args.rfmset is None:
        RFMLIST = rfm_sets
    else:
        if args.rfmset not in catalog:
            raise ValueError(f"RFM set not defined in BO catalog: {args.rfmset}")
        else:
            RFMLIST = [args.rfmset]

    for rfmset_name in sorted(RFMLIST):

        print("Processed (%u) ABAP API of model %s" % (len(catalog[rfmset_name]), rfmset_name))

        frontend_parser = get_frontend_parser(args.ui, rfmset_name)

        frontend_parser.parse()
