# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

fundamental_vue = {
    # https://sap.github.io/fundamental-vue/#/examples/form
    "checkbox": """
<fd-form-item-checkbox label="%s">
    <fd-checkbox v-model="%s">
</fd-form-item-checkbox>
""",
    # https://sap.github.io/fundamental-vue/#/examples/form
    "combobox": """
<fd-form-item>
    <fd-form-label>%s</fd-form-label>
    <fd-select v-model="%s"
        options="%s"
        data-abap="%s"
    >
    </fd-select>
</fd-form-item>
""",
    # https://sap.github.io/fundamental-vue/#/examples/date-picker
    "datepicker": """
<fd-form-item>
    <fd-form-label>%s</fd-form-label>
    <fd-date-picker v-model="%s"></fd-date-picker>
</fd-form-item>""",
    # https://sap.github.io/fundamental-vue/#/examples/time-picker
    "timepicker": """
<fd-form-item>
    <fd-form-label>%s</fd-form-label>
    <fd-time-picker v-model="%s"></fd-time-picker>
</fd-form-item>""",
    # https://sap.github.io/fundamental-vue/#/examples/form
    "input": """
<fd-form-item>
    <fd-form-label>%s</fd-form-label>
        <fd-input v-model="%s"
            data-abap="%s"
            data-shlp="%s"
        />
</fd-form-item>""",
    # https://sap.github.io/fundamental-ngx/#/core/textarea
    "textarea": """
<fd-form-item>
    <fd-form-label>%s</label>
    <fd-textarea v-model="%s"
        data-abap="%s"
        aria-required="true"
    ></fd-textarea>
</fd-form-item>""",
}
