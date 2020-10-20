# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

#
# Build:
# docker build -t python-slim -f python-slim.Dockerfile .
# docker run --name python-slim -v /Users/d037732/src:/home/www-admin/src -it python-slim /bin/bash
#
# Run:
# docker start -ai python-slim
#

FROM python:slim

ARG adminuser=www-admin

ARG nwrfc_pl=PL7
ARG nwrfc_source=/NWRFCSDK/${nwrfc_pl}
ARG nwrfc_target=/usr/local/sap

ENV container docker

# Add admin user
RUN \
  adduser --disabled-password --gecos "" ${adminuser} && \
  usermod -aG www-data,sudo ${adminuser} && \
  echo "${adminuser} ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers
USER ${adminuser}
WORKDIR /home/${adminuser}
RUN printf "alias e=exit\nalias ..=cd..\nalias :q=exit\nalias ll='ls -l'\nalias la='ls -la'\nalias distro='cat /etc/*-release'\n" > .bash_aliases && \
  printf "\n# colors\nexport TERM=xterm-256color\n" >> ~/.bashrc && \
  printf "\nexport PATH=/home/${adminuser}/.local/bin:$PATH\n" >> ~/.bashrc

# sap nw rfc lib
RUN printf "\n# nwrfc sdk \n" >> ~/.bashrc && \
  printf "export SAPNWRFC_HOME=${nwrfc_target}/nwrfcsdk\n" >> ~/.bashrc
USER root
RUN mkdir -p ${nwrfc_target}
COPY ${nwrfc_source}/linux/nwrfcsdk ${nwrfc_target}/nwrfcsdk
RUN chmod -R a+r ${nwrfc_target}/nwrfcsdk && \
  chmod -R a+x ${nwrfc_target}/nwrfcsdk/bin && \
  printf "# include nwrfcsdk\n${nwrfc_target}/nwrfcsdk/lib\n" | tee /etc/ld.so.conf.d/nwrfcsdk.conf && \
  ldconfig && ldconfig -p | grep sap

USER ${adminuser}