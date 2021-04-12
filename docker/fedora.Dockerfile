# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

#
# Fedora with systemd
#
# docker build --rm --no-cache -t local/fedora -f fedora.Dockerfile .
#

FROM fedora

LABEL maintainer="srdjan.boskovic@sap.com"
LABEL version="2.0"
LABEL description="Centos 7 QAS"

# https://github.com/docker-library/docs/tree/master/centos#systemd-integration
ENV container docker

# timezone # https://serverfault.com/questions/683605/docker-container-time-timezone-will-not-reflect-changes
ENV TZ=Europe/Berlin

ARG adminuser=www-admin
ARG dev_tools="sudo curl wget git unzip vim tree tmux iproute iputils"
ARG dev_libs="uuidd make ninja-build zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel libffi-devel"

RUN \
    # sudo user
    dnf -y install sudo && \
    useradd -G wheel --create-home --shell /bin/bash ${adminuser} && \
    echo "%wheel       ALL = (ALL) NOPASSWD: ALL" >> /etc/sudoers && \
    printf "alias e=exit\nalias ..=cd..\nalias :q=exit\nalias ll='ls -l'\nalias la='ls -la'\nalias distro='cat /etc/*-release'\n" > .bash_aliases && \
    printf "\n#aliases\nsource ~/.bash_aliases\n\n# colors\nexport TERM=xterm-256color\n" >> /home/${adminuser}/.bashrc && \
    # utf-8 locale https://serverfault.com/questions/275403/how-do-i-change-my-locale-to-utf-8-in-centos
    # https://stackoverflow.com/questions/58304278/how-to-fix-character-map-file-utf-8-not-found
    dnf -y install glibc-locale-source glibc-langpack-en && dnf clean all && rm -rf /var/cache/yum && \
    localedef -c -f UTF-8 -i en_US en_US.UTF-8

ENV LC_ALL=en_US.UTF-8

# required packages
RUN dnf -y update && \
    dnf -y groupinstall "Development tools" && \
    dnf -y install ${dev_tools} ${dev_libs} && \
    dnf clean all && rm -rf /var/cache/yum

# nwrfcsdk
INCLUDE+ common/sapnwrfcsdk.Dockerfile

# cleanup
RUN rm -rf /tmp/*

# work user
USER ${adminuser}
WORKDIR /home/${adminuser}