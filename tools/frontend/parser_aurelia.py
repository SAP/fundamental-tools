#!/home/pos/.virtualenvs/picoUI/bin/python

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# -*- coding: utf-8 -*-

from .model_parser import ModelParser

class ParserAurelia(ModelParser):
    def __init__(self, rfm_set, args):
        super().__init__(rfm_set, args)

        self.ELEMENT_PREFIX = "ui-"
        self.INPUT_TYPE_BINARY_TAG = "checkbox"
        self.INPUT_TYPE_LIST_TAG = "combo"
        self.COLUMN_TAGNAME = "dg-column"
        self.DATE_TAGNAME = "date"
        self.TIME_TAGNAME = "time"
        self.TEXT_TAGNAME = "text"
        self.MODEL_PREFIX = "model/aurelia"