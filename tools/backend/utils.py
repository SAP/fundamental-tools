# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

import codecs

import logging

from .constants import DEFAULT_OUTPUT_FOLDER, LOGGING_LEVEL


def get_log_level(level_text):

    return LOGGING_LEVEL[level_text.upper()]


class Writer:
    def __init__(
        self,
        rfm_name,
        rfm_set=None,
        model_prefix="",
        write_to="HTML",
        output_folder=DEFAULT_OUTPUT_FOLDER,
    ):

        self.rfm_name = rfm_name
        self.rfm_set = rfm_set
        self.model_prefix = model_prefix
        self.write_to = write_to.lower()
        self.output_folder = output_folder

        if write_to.upper() == "HTML":
            self.write_to_html = True
            self.indent_step = 4
        else:
            self.write_to_html = False
            self.indent_step = 2

        self.reset()

    def reset(self):
        self.indent_count = 0
        self.Indent = self.indent_count * " "
        self.output = []

    def addindent(self):
        self.indent_count += self.indent_step
        self.Indent = self.indent_count * " "

    def deindent(self):
        self.indent_count -= self.indent_step
        self.Indent = self.indent_count * " "

    def write(self, output=""):
        self.output.append(self.Indent + output)

    def newline(self):
        self.output.append("")

    def save(self):
        rfm_name = self.rfm_name.replace("/", "_")
        if rfm_name[0] == "_":
            rfm_name = rfm_name[1:]
        output_filename = f"{self.output_folder}/{self.rfm_set}/{self.model_prefix}/{rfm_name}.{self.write_to}"

        with codecs.open(output_filename, encoding="utf-8", mode="a") as output_file:
            for line in self.output:
                output_file.write(f"{line}\n")
            self.reset()
