# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build and run
# docker build --platform=linux/amd64 --rm --no-cache -t node18 -f node18.Dockerfile .
# docker run --platform=linux/amd64  -it --name node18 -v /Users/d037732/SAPDevelop/dev:/home/src node18 /bin/bash --login
# How-to use: check ./README.md

FROM node:18

ARG adminuser=www-admin

ENV container docker

# dev tools
RUN \
    apt update && apt install -y vim sudo && rm -rf /var/lib/apt/lists/* && \
    # admin user
    adduser --disabled-password --gecos "" ${adminuser} && \
    usermod -aG www-data,sudo ${adminuser} && \
    echo "${adminuser} ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

INCLUDE+ common/saplibs.Dockerfile

# work user
USER ${adminuser}
WORKDIR /home/${adminuser}
RUN printf "\n# dev aliases\nalias ll='ls $LS_OPTIONS -l'\nalias l='ls $LS_OPTIONS -lA'\nalias e=exit\nalias" >> ~/.bashrc && \
    # node_modules path
    printf "\n# node modules\n" >> ~/.bashrc && \
    printf "export PATH=node_modules/.bin:$PATH\n" >> ~/.bashrc

# cleanup
RUN sudo rm -rf /tmp/*

SHELL ["/bin/bash"]
