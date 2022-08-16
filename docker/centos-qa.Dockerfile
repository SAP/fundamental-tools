# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

#
# Centos 7 with systemd and SAP NWRFC SDK
#
# docker build --rm --no-cache -t centos-qa -f centos-qa.Dockerfile .
#
# docker run -it --name centos-qa --stop-signal SIGRTMIN+3 --tmpfs /tmp --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro -v /Users/d037732/SAPDevelop/dev:/home/www-admin/src centos-qa /bin/bash --login
# docker start -ai centos-qa
#

FROM centos:7

LABEL maintainer="srdjan.boskovic@sap.com"
LABEL version="2.0"
LABEL description="Centos 7 QAS"

# https://github.com/docker-library/docs/tree/master/centos#systemd-integration
ENV container docker

# timezone # https://serverfault.com/questions/683605/docker-container-time-timezone-will-not-reflect-changes
ENV TZ=Europe/Berlin

ENV LC_ALL=en_US.UTF-8

# admin/work user
ARG adminuser=www-admin
ARG dev_tools="sudo curl wget git unzip vim tree tmux iproute iputils"
ARG dev_libs="uuidd make zlib-devel bzip2 bzip2-devel openssl-devel ncurses-devel sqlite sqlite-devel readline-devel tk-devel libffi-devel xz-devel cargo"

# root
USER root

RUN \
    # admin user
    yum -y install sudo && \
    useradd -G wheel --create-home --shell /bin/bash ${adminuser} && \
    echo "%wheel    ALL = (ALL) NOPASSWD: ALL" >> /etc/sudoers && \
    printf "alias e=exit\nalias ..=cd..\nalias :q=exit\nalias ll='ls -l'\nalias la='ls -la'\nalias distro='cat /etc/*-release'\n" > /home/${adminuser}/.bash_aliases && \
    chown ${adminuser} /home/${adminuser}/.bash_aliases && chgrp ${adminuser} /home/${adminuser}/.bash_aliases && \
    printf "\n#aliases\nsource ~/.bash_aliases\n\n# colors\nexport TERM=xterm-256color\n" >> /home/${adminuser}/.bashrc


# required packages
RUN yum -y upgrade ca-certificates && \
    yum -y update && \
    yum -y groupinstall "Development tools" && \
    yum -y install ${dev_tools} ${dev_libs} centos-release-scl && \
    # devtoolset-8 && Ninja
    yum install -y ninja-build devtoolset-8 && yum clean all && \
    scl enable devtoolset-8 -- bash && \
    # utf-8 locale https://serverfault.com/questions/275403/how-do-i-change-my-locale-to-utf-8-in-centos
    localedef -c -f UTF-8 -i en_US en_US.UTF-8 && export LC_ALL=en_US.UTF-8 && \
    printf "\n# devtools-8\nsource /opt/rh/devtoolset-8/enable\n" >> /home/${adminuser}/.bashrc

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

# sap binaries
INCLUDE+ common/saplibs.Dockerfile

# cleanup
RUN rm -rf /tmp/* && \
    systemctl mask systemd-machine-id-commit && systemctl enable multi-user.target && systemctl set-default multi-user.target

# work user
USER ${adminuser}
WORKDIR /home/${adminuser}

# java
# INCLUDE+ common/java.Dockerfile

# nodejs
INCLUDE+ common/nodejs.Dockerfile

# python
INCLUDE+ common/python.centos.Dockerfile

VOLUME [ "/sys/fs/cgroup" ]
CMD ["/usr/sbin/init"]

SHELL ["/bin/bash"]
