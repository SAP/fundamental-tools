# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

fast_react = {
    # https://sap.github.io/fundamental-react/?path=/docs/component-api-forms-checkbox--primary
    "checkbox": """
<Checkbox value={this.%s}/>%s</Checkbox>""",
    # https://sap.github.io/fundamental-react/?path=/docs/component-api-comboboxinput--primary
    "combobox": """
<ComboboxInput id="4711" label="%s"
    value={this.%s}
    options="%s"
    data-abap="{%s}"/>""",
    # https://sap.github.io/fundamental-react/?path=/docs/component-api-datepicker--primary
    "datepicker": """
<FormItem>
    <FormLabel htmlFor="4711">%s</FormLabel>
    <DatePicker id="4711" value={this.%s}/>
</FormItem>""",
    # https://sap.github.io/fundamental-react/?path=/docs/component-api-timepicker--primary
    "timepicker": """
<FormItem>
    <FormLabel htmlFor="4711">%s</FormLabel>
    <TimePicker id="4711" value={this.%s}/>
</FormItem>""",
    # https://sap.github.io/fundamental-react/?path=/docs/component-api-forms-formlabel--primary
    "input": """
<FormItem>
    <FormLabel htmlFor="4711">%s</FormLabel>
    <FormInput id="4711" value={this.%s}
        data-abap="%s"
        data-shlp="%s"
    />
</FormItem>""",
    # https://sap.github.io/fundamental-react/?path=/docs/component-api-forms-formtextarea--primary
    "textarea": """
<FormItem>
    <FormLabel htmlFor="4711">%s</FormLabel>
    <FormTextArea id="4711" value={this.%s}
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
