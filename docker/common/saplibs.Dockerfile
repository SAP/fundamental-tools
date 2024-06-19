# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# sap binaries: nwrfc sdk and cryptolib

ARG nwrfc_version=nwrfcsdk
ARG crypto_version=cryptolib
ARG sap_source=/sap
ARG sap_target=/usr/local/sap

# as root user

RUN mkdir -p ${sap_target}
COPY --chown=${adminuser}:${adminuser} ${sap_source}/${nwrfc_version} ${sap_target}/${nwrfc_version}
COPY --chown=${adminuser}:${adminuser} ${sap_source}/${crypto_version} ${sap_target}/${crypto_version}
COPY --chown=${adminuser}:${adminuser} ${sap_source}/sapcar /usr/local/bin/sapcar

RUN printf "\n# sap libs \n" >> ~/.bashrc && \
  printf "\n# sap libs\nexport SAPNWRFC_HOME=${sap_target}/${nwrfc_version}\nexport PATH=${sap_target}/${crypto_version}:\$PATH\n" >> /home/${adminuser}/.bashrc && \
  chmod -R a+r ${sap_target}/${nwrfc_version} && \
  chmod -R a+x ${sap_target}/${nwrfc_version}/bin && \
  chmod -R a+x ${sap_target}/${nwrfc_version}/lib && \
  chmod a+x /usr/local/bin/sapcar && \
  printf "# include sap nwrfcsdk\n${sap_target}/${nwrfc_version}/lib\n" | tee /etc/ld.so.conf.d/saplibs.conf && \
  ldconfig && ldconfig -p | grep sap