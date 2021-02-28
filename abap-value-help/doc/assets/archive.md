Add server routes for generic [ABAP Value Help API](https://github.com/SAP/fundamental-tools/blob/main/abap-value-help/abap-api/README.md)

| Search Help Type                     | Route                       | ABAP Value Help API                                  | ABAP API (internal)                       |
| ------------------------------------ | --------------------------- | ---------------------------------------------------- | ----------------------------------------- |
| Fixed domain values (FV)             | `/fieldvalues/<path>`       | getDomainValues()                                    | `SHLP_DOMVALUES_GET`                      |
| Elementary/complex Search Helps (SH) | `/helpselect`<br/>`/search` | getShlpDescriptor()<br>search()                      | `SHLP_METADATA_GET`<br/>`SHLP_VALUES_GET` |
| Check Tables (CT, CH)                | `/tabselect`                | Generic on HANA systems<br>Custom BAPI/RFM otherwise | CT/CH tables' query                       |
| Custom input helps                   | `/valuelist/`               | pass-through                                         | any ABP RFM                               |
