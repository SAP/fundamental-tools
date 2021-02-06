# ABAP API Sample <!-- omit in toc -->

Sample ABAP API for using `make` command and custom ui configrations, without access to ABAP system.

You need either a standard git client or [GitHub CLI](https://github.com/cli/cli) installed on your notebook.

Clone the `sample` branch and cd to `sample` folder:

```shell
gh repo clone SAP/fundamental-tools sample -- --branch sample --single-branch
cd sample
```
or

```shell
git clone --single-branch --branch sample https://github.com/SAP/fundamental-tools sample
cd sample
```

Check the [documentation](https://github.com/SAP/fundamental-tools/tree/main/abap-api-tools#ui-elements) and start using `make` command:

```shell
make fundamental-ngx -c config/equipment
make ui5-react -c config/all
make aurelia -c config/all -f
```
