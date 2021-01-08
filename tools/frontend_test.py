#!/home/pos/.virtualenvs/picoUI/bin/python

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# -*- coding: utf-8 -*-


from generator import rfm_sets, catalog

from frontend import get_arg_parser, get_frontend_parser, SUPPORTED_FRAMEWORKS

if __name__ == "__main__":

    if len(rfm_sets) == 0:
        RFMLIST = catalog
    else:
        RFMLIST = rfm_sets

    for ui in SUPPORTED_FRAMEWORKS:

        print(f"\nfrontend: {ui}\n")

        for rfmset_name in sorted(RFMLIST):

            print("Processed (%u) ABAP API of model %s" % (len(catalog[rfmset_name]), rfmset_name))

            frontend_parser = get_frontend_parser(ui, rfmset_name)

            frontend_parser.parse()