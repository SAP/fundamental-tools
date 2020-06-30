fundamental_ngx = {
    # https://sap.github.io/fundamental-ngx/#/core/checkbox
    "checkbox": """
<div fd-form-item>
    <fd-checkbox label="%s" [(ngModel)]="%s"></fd-checkbox>
</div> """,
    # https://sap.github.io/fundamental-ngx/#/core/combobox
    "combobox": """
<div fd-form-item>
    <label fd-form-label>%s</label>
    <fd-combobox
        [(ngModel)]="%s"
        [dropdownValues]="%s"
        data-abap="%s"
    >
    </fd-combobox>
</div>""",
    # https://sap.github.io/fundamental-ngx/#/core/datePicker
    "datepicker": """
<div fd-form-item>
    <label fd-form-label>%s</label>
    <fd-date-picker [type]="single" [(ngModel)]="%s"></fd-date-picker>
</div>""",
    # https://sap.github.io/fundamental-ngx/#/core/timePicker
    "timepicker": """
<div fd-form-item>
    <label fd-form-label>%s</label>
    <fd-time-picker [(ngModel)]="%s"></fd-time-picker>
</div>""",
    # https://sap.github.io/fundamental-ngx/#/core/input
    "input": """
<div fd-form-item>
    <label fd-form-label>%s</label>
        <input fd-input fd-form-control
            [(ngModel)]="%s"
            data-abap="%s"
            data-shlp="%s"
        />
</div>""",
    # https://sap.github.io/fundamental-ngx/#/core/textarea
    "textarea": """
<div fd-form-item>
    <label fd-form-label>%s</label>
    <textarea fd-form-control
        [(ngModel)]="%s"
        data-abap="%s"
        aria-required="true"
    ></textarea>
</div>""",
}
