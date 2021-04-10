# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

#
# Centos 7 with systemd
#
# docker build --rm --no-cache -t local/c7-systemd -f centos-systemd.Dockerfile .
#

FROM centos:7

LABEL maintainer="srdjan.boskovic@sap.com"
LABEL version="2.0"
LABEL description="Centos 7 QAS"

# https://github.com/docker-library/docs/tree/master/centos#systemd-integration
ENV container docker

# timezone # https://serverfault.com/questions/683605/docker-container-time-timezone-will-not-reflect-changes
ENV TZ=Europe/Berlin

ARG adminuser=www-admin
ARG dev_tools="sudo curl wget git unzip vim tree tmux iproute iputils"
ARG dev_libs="uuidd make zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel libffi-devel"


# Add sudo user
RUN yum -y install jq sudo && \
    useradd -G wheel --create-home --shell /bin/bash ${adminuser}
RUN echo "%wheel       ALL = (ALL) NOPASSWD: ALL" >> /etc/sudoers
USER ${adminuser}
WORKDIR /home/${adminuser}
RUN printf "alias e=exit\nalias ..=cd..\nalias :q=exit\nalias ll='ls -l'\nalias la='ls -la'\nalias distro='cat /etc/*-release'\n" > .bash_aliases && \
    printf "\n#aliases\nsource ~/.bash_aliases\n\n# colors\nexport TERM=xterm-256color\n" >> ~/.bashrc

USER root

# utf-8 locale https://serverfault.com/questions/275403/how-do-i-change-my-locale-to-utf-8-in-centos
RUN localedef -c -f UTF-8 -i en_US en_US.UTF-8
ENV LC_ALL=en_US.UTF-8

# required packages
RUN yum -y update && \
    yum -y groupinstall "Development tools" && \
    yum -y install ${dev_tools} && \
    yum -y install ${dev_libs} && \
    yum clean all

# devtoolset-8
RUN yum -y install centos-release-scl && \
    yum -y install devtoolset-8 && yum clean all && \
    scl enable devtoolset-8 -- bash

# https://hub.docker.com/_/centos
RUN (cd /lib/systemd/system/sysinit.target.wants/; for i in *; do [ $i == \
    systemd-tmpfiles-setup.service ] || rm -f $i; done); \
    rm -f /lib/systemd/system/multi-user.target.wants/*;\
    rm -f /etc/systemd/system/*.wants/*;\
    rm -f /lib/systemd/system/local-fs.target.wants/*; \
    rm -f /lib/systemd/system/sockets.target.wants/*udev*; \
    rm -f /lib/systemd/system/sockets.target.wants/*initctl*; \
    rm -f /lib/systemd/system/basic.target.wants/*;\
    rm -f /lib/systemd/system/anaconda.target.wants/*;

USER ${adminuser}

# devtools-8 enable
RUN printf "\n# devtools-8\nsource /opt/rh/devtoolset-8/enable\n" >> ~/.bashrc

# nwrfcsdk
INCLUDE+ common/sapnwrfcsdk.Dockerfile

RUN rm -rf /tmp/* && \
    systemctl mask systemd-machine-id-commit && systemctl enable multi-user.target && systemctl set-default multi-user.target
VOLUME [ "/sys/fs/cgroup" ]
CMD ["/usr/sbin/init"]