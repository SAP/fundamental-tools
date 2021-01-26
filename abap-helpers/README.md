## ABAP Helpers

Value Input Helps annotations require remote-enablement of two ABAP Function Modules. Their names should be maintained in `system.yaml` of abap-ui-tools configuration file. Without these two function modules, Value Helps annotations are skipped.


:exclamation: The implementation given here just as example, neither maintained, nor supported in this repository

Here the overview of ABAP API used by design-time tools:

| RFM                                                           | Design-time        | Using internally          |
| ------------------------------------------------------------- | ------------------ | ------------------------- |
| RFC_METADATA_GET                                              | :white_check_mark: |                           |
| DD_DOMA_GET                                                   | :white_check_mark: |                           |
| DDIF_FIELDINFO_GET                                            | :white_check_mark: |                           |
| BDL_DDIF_TABL_GET                                             | :white_check_mark: |                           |
| FDT_GET_DDIC_METADATA                                         | :white_check_mark: |                           |
| [FTLS_DOMVALUES_GET](./FTLS_DOMVALUES_GET.abap)               | :white_check_mark: | DD_DOMVALUES_GET          |
| [FTLS_DETERMINE_SEARCHHELP](./FTLS_DETERMINE_SEARCHHELP.abap) | :white_check_mark: | F4IF_DETERMINE_SEARCHHELP |
