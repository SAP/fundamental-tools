# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build and run
# docker build --rm --no-cache -t node-rfc -f node-rfc.Dockerfile .
# docker run -it --name node-rfc -v /Users/D037732SAPDevelop/dev:/home/src node-rfc /bin/bash --login
# How-to use: check ./README.md

FROM node:latest

ENV container docker

# dev tools
RUN \
    apt-get update && apt-get install -y vim && rm -rf /var/lib/apt/lists/* && \
    printf "\n# dev aliases\nalias ll='ls $LS_OPTIONS -l'\nalias l='ls $LS_OPTIONS -lA'\nalias e=exit\nalias dist='rm -rf dist && cp -r /work/dist . && chmod +x dist/abap.js'\n" >> ~/.bashrc && \
    # node_modules path
    printf "\n# node modules\n" >> ~/.bashrc && \
    printf "export PATH=node_modules/.bin:$PATH\n" >> ~/.bashrc

INCLUDE+ common/saplibs.Dockerfile

# abap api tools and value helps
RUN npm install -g node-rfc

# cleanup
RUN rm -rf /tmp/*

SHELL ["/bin/bash"]
