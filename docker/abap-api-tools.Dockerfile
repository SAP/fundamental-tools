# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# How-to use: check ./README.md

FROM node:15

ENV container docker

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
