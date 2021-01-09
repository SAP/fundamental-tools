# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

fast_ngx = {
    # https://www.fast.design/docs/components/checkbox
    "checkbox": """
<fast-checkbox [(label)]="%s" [(checked)]="%s"/>""",
    # todo
    "combobox": """
<fast-select [(label)]="%s"
    [(value)]="%s" [(options)]="%s"
    [(abap)]="%s"
></fast-select>""",
    # todo
    "datepicker": """
<fast-datepicker label="%s" [(value)]="%s"/>""",
    # todo
    "timepicker": """
<fast-timepicker label="%s" [(value)]="%s"/>""",
    # https://www.fast.design/docs/components/text-field
    # https://github.com/microsoft/fast/blob/master/specs/number-field.md
    "input": """
<fast-text-field [(label)]="%s"
    [(value)]="%s"
    [(abap)]="%s" [(shlp)]="%s"
/>""",
    "number": """
<fast-text-field [(label)]="%s"
    [(value)]="%s"
    [(abap)]="%s" [(shlp)]="%s"
/>""",
    # https://www.fast.design/docs/components/text-area
    "textarea": """
<fast-text-area [(label)]="%s"
        [(value)]="%s"
        [(abap)]="%s"
></fast-text-area>""",
    "lang": """
<fast-text-field [(label)]="%s"
    [(value)]="%s"
    [(abap)]="%s" [(shlp)]="%s"
/>""",
}
