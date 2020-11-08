# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

ui5_react = {
    # https://sap.github.io/ui5-webcomponents-react/?path=/docs/ui5-web-components-checkbox--default-story
    "checkbox": """
<FormItem label="%s">
    <CheckBox value={this.%s}/>
</FormItem>""",
    # https://sap.github.io/ui5-webcomponents-react/?path=/docs/ui5-web-components-combobox--default-story
    "combobox":
"""
<FormItem label="%s">
    <ComboBox value={this.%s}
        items="%s"
        data-abap="{%s}">
    </ComboBox>
</FormItem>""",
    # https://sap.github.io/ui5-webcomponents-react/?path=/docs/ui5-web-components-datepicker--default-story
    "datepicker": """
<FormItem label="%s">
    <DatePicker value={this.%s}/>
</FormItem>""",
    # https://sap.github.io/ui5-webcomponents-react/?path=/docs/ui5-web-components-timepicker--default-story
    "timepicker": """
<FormItem label="%s">
    <TimePicker value={this.%s}/>
</FormItem>""",
    # https://sap.github.io/ui5-webcomponents-react/?path=/docs/components-form--default-story
    "input": """
<FormItem label="%s">
    <Input value={this.%s}
           data-abap="%s"
           data-shlp="%s"
    />
</FormItem>""",
    # https://sap.github.io/fundamental-ngx/#/core/textarea
    "textarea": """
<FormItem label="%s">
    <TextArea value={this.%s}
           data-abap="%s"
    />
</FormItem>""",
    # same as input
    "lang": """
<FormItem label="%s">
    <Input value={this.%s}
           data-abap="%s"
           data-shlp="%s"
    />
</FormItem>""",
}
