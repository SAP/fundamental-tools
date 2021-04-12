# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# sap nw rfc lib

ARG nwrfc_version=nwrfcsdk
ARG nwrfc_host=/sap
ARG nwrfc_source=${nwrfc_host}/${nwrfc_version}
ARG nwrfc_target=/usr/local/sap

# as root user

RUN mkdir -p ${nwrfc_target}
COPY --chown=${adminuser}:${adminuser} ${nwrfc_source} ${nwrfc_target}/${nwrfc_version}

RUN printf "\n# nwrfc sdk \n" >> ~/.bashrc && \
  printf "export SAPNWRFC_HOME=${nwrfc_target}/nwrfcsdk\n" >> /home/${adminuser}/.bashrc && \
  chmod -R a+r ${nwrfc_target}/${nwrfc_version} && \
  chmod -R a+x ${nwrfc_target}/${nwrfc_version}/bin && \
  chmod -R a+x ${nwrfc_target}/${nwrfc_version}/lib && \
  printf "# include nwrfcsdk\n${nwrfc_target}/${nwrfc_version}/lib\n" | tee /etc/ld.so.conf.d/nwrfcsdk.conf && \
  ldconfig && ldconfig -p | grep sap