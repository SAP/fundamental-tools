#!/home/pos/.virtualenvs/picoUI/bin/python

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

from .frontend_parser import ModelParser


class ParserAurelia(ModelParser):
    def __init__(self, args):
        self.ELEMENT_PREFIX = "ui-"
        self.INPUT_TYPE_BINARY_TAG = "checkbox"
        self.INPUT_TYPE_LIST_TAG = "combo"
        self.DATE_TAGNAME = "date"
        self.TIME_TAGNAME = "time"
        self.TEXT_TAGNAME = "text"
        self.COLUMN_TAGNAME = "dg-column"

        super().__init__(args)
