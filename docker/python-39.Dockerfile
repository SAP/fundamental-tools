# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

#
# Build:
# docker build -t python-39 -f python-39.Dockerfile .
# docker run --name python-39 -v /Users/d037732/src:/home/www-admin/src -it python-39 /bin/bash
#
# Run:
# docker start -ai python-39
#

FROM python:3.9-slim-buster

ARG adminuser=www-admin

ARG nwrfc_pl=PL7
ARG nwrfc_source=/NWRFCSDK/${nwrfc_pl}
ARG nwrfc_target=/usr/local/sap
ARG dev_python="pip wheel pytest cython ipython"
ARG dev_tools="sudo curl wget git unzip vim tree tmux iproute2 iputils-ping"
ARG dev_libs="build-essential make libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev"

ENV container docker

# os update and packages
USER root
RUN \
  sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
  apt update && apt install -y locales ${dev_tools}

# timezone # https://serverfault.com/questions/683605/docker-container-time-timezone-will-not-reflect-changes
ENV TZ=Europe/Berlin
RUN locale-gen de_DE && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# https://daten-und-bass.io/blog/fixing-missing-locale-setting-in-ubuntu-docker-image/
RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y locales \
  && sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen \
  && dpkg-reconfigure --frontend=noninteractive locales \
  && update-locale LANG=en_US.UTF-8
ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8

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

# git configuration
RUN \
  git config --global http.sslVerify false && \
  git config --global user.name bsrdjan && \
  git config --global user.email srdjan.boskovic@sap.com

# essentials
RUN sudo apt install -y ${dev_libs}

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