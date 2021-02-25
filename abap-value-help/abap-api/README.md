# ABAP API

Three remote enabled ABAP Function Modules (RFM) are required in ABAP backend, any system/release.

:exclamation: Implementations given here are just an example, neither maintained, nor supported here.

- `SHLP_DOMVALUES_GET` returns fixed ABAP Field Domain values, of Search Help type FV

- `SHLP_SHLP_METADATA_GET` returns ABAP F4 Search Help metadata

- `SHLP_SHLP_GET` returns ABAP F4 Search Help result, based on a given search criteria

| RFM                | Design-time | Run-time           | Using internally                                                          |
| ------------------ | ----------- | ------------------ | ------------------------------------------------------------------------- |
| SHLP_DOMVALUES_GET |             | :white_check_mark: | DD_DOMVALUES_GET                                                          |
| SHLP_METADATA_GET  |             | :white_check_mark: | SHLP_SHLP_METADATA_GET<br/>F4TOOL_GET_DEF_SHLP<br/>F4IF_EXPAND_SEARCHHELP |
| SHLP_VALUES_GET    |             | :white_check_mark: | F4IF_GET_SHLP_DESCR<br/>F4IF_SELECT_VALUES                                |
