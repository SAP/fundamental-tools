# How-to
#
# Prepare the working folder with sapnwrfc.ini file:
#
#   mkdir mywork
#   cd mywork
#   edit sapnwrfc.ini
#
# Use the pre-built docker image (SAP internal network only):
#
#   docker pull docker.wdf.sap.corp:51689/vpcoe/abap-api-tools
#   docker run --name cli -it -v <absolute path to>/myapi:/work --env ABAP_API_TOOLS_WORKING_FOLDER=/work docker.wdf.sap.corp:51689/vpcoe/abap-api-tools
#
# You can also build the image, using SAP NWRFC SDK downloaded from:
# - SAP Support Portal (https://support.sap.com/nwrfcsdk) or from
# - SAP-internal production shares (https://wiki.wdf.sap.corp/wiki/display/PIC/UsingConnectors)
#
# To build the image, copy the SAP NWRFC SDK folder "nwrfcsdk" to Dockerfile folder and run:
#
#   docker build --rm --no-cache -t abap-api-tools -f abap-node.Dockerfile .
#   docker run --name cli -it -v <path to>/mywork:/work --env ABAP_API_TOOLS_WORKING_FOLDER=/work abap-api-tools
#
# Once the cli container is created and running (docker start cli), the abap CLI can be invoked like:
#
#   docker exec cli abap
#

FROM node:15

ARG nwrfc_source=/nwrfcsdk
ARG nwrfc_target=/usr/local/sap

# sap nwrfc sdk
RUN printf "\n# nwrfc sdk \n" >> ~/.bashrc && \
    printf "export SAPNWRFC_HOME=${nwrfc_target}/nwrfcsdk\n" >> ~/.bashrc
USER root
RUN mkdir -p ${nwrfc_target}
COPY ${nwrfc_source} ${nwrfc_target}/nwrfcsdk
RUN chmod -R a+r ${nwrfc_target}/nwrfcsdk && \
    chmod -R a+x ${nwrfc_target}/nwrfcsdk/bin && \
    printf "# include nwrfcsdk\n${nwrfc_target}/nwrfcsdk/lib\n" | tee /etc/ld.so.conf.d/nwrfcsdk.conf && \
    ldconfig && ldconfig -p | grep sap

# abap tools
RUN npm install -g abap-api-tools

CMD ["/bin/bash"]
