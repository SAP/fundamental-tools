## NodeJS and Python containers

- [Centos + Node](./centos-node.Dockerfile)
- [Centos + Python](./centos-python.Dockerfile)
- [Fedora + Node](./fedora-node.Dockerfile)
- [Fedora + Python](./fedora-python.Dockerfile)
- [python:3.9-slim-buster](./python-39.Dockerfile)
- [Ubuntu = Node and Python](./ubuntu-test.Dockerfile)

> SAP NWRFC SDK is not a part of these images and must not be packed into externaly distributed images or applications.

Exclusive distribution channel is: [SAP NWRFC SDK on SAP Support Portal](https://launchpad.support.sap.com/#/softwarecenter/template/products/_APP=00200682500000001943&_EVENT=DISPHIER&HEADER=Y&FUNCTIONBAR=N&EVENT=TREE&NE=NAVIGATE&ENR=01200314690100002214&V=MAINT)

More info: https://support.sap.com/en/product/connectors/nwrfcsdk.html

## abap-api-tools

`abap` CLI can run also from docker container, mapped to your local working folder.

Prepare the working directory:

```shell
mkdir myproject
cd myproject
edit sapnwrfc.ini
```

Docker image with pre-installed SAP NWRFC SDK is available in SAP-internal network only ([link](https://docker.wdf.sap.corp:10443/artifactory/webapp/#/packages/docker/vpcoe~2Fabap-api-tools)).  The local working directory `myproject` shall be mapped to docker volume `work`:

```shell
docker pull docker.wdf.sap.corp:51689/vpcoe/abap-api-tools
docker run --name cli -it -v <absolute path>/myproject:/work docker.wdf.sap.corp:51689/vpcoe/abap-api-tools
```

The container can be also built from [abap-api-tools.Dockerfile](./abap-api-tools.Dockerfile). SAP NWRFC SDK folder "nwrfcsdk" shall be in that case first copied to Dockerfile folder:

```shell
docker build --rm --no-cache -t abap-api-tools -f abap-api-tools.Dockerfile .
docker run --name cli -it -v <absolute path>/myproject:/work abap-api-tools
```

Once the `cli` container is up and running, the `abap` CLI can be invoked:

```shell
docker start cli
docker exec cli abap
```
