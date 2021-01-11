# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

from backend import get_arg_parser, BackendParser

if __name__ == "__main__":

    args = get_arg_parser().parse_args()

    backend_parser = BackendParser(args)

    backend_parser.run()
