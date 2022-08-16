# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

#
# Build:
# docker build -t ubuntu-qa -f ubuntu-qa.Dockerfile .
# docker run -it --name ubuntu-qa -v /Users/d037732/SAPDevelop/dev:/home/www-admin/src ubuntu-qa /bin/bash --login
#
# Run:
# docker start -ai ubuntu-qa
#

FROM ubuntu:18.04

LABEL maintainer="srdjan.boskovic@sap.com"
LABEL version="2.0"
LABEL description="Ubuntu QAS"

ARG adminuser=www-admin
ARG dev_tools="sudo curl wget git unzip vim tree tmux iproute2 iputils-ping"
ARG dev_libs="build-essential make ninja-build libssl-dev liblzma-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev python3-dev cargo"

# os update and packages
USER root
RUN \
  sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
  apt update && DEBIAN_FRONTEND=noninteractive apt install -y locales ${dev_tools} ${dev_libs} && \
  rm -rf /var/lib/apt/lists/*
# pythons build fails if --no-install-recommends option used here

# timezone # https://serverfault.com/questions/683605/docker-container-time-timezone-will-not-reflect-changes
ENV TZ=Europe/Berlin
RUN locale-gen de_DE && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# https://daten-und-bass.io/blog/fixing-missing-locale-setting-in-ubuntu-docker-image/
RUN \
  sed -i -e 's/# en_US.UTF-8 UTF-8/en_US.UTF-8 UTF-8/' /etc/locale.gen && \
  dpkg-reconfigure --frontend=noninteractive locales && \
  update-locale LANG=en_US.UTF-8 && \
  # admin user
  adduser --disabled-password --gecos "" ${adminuser} && \
  usermod -aG www-data,sudo ${adminuser} && \
  echo "${adminuser} ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers && \
  # cleanup
  rm -rf /tmp/* /var/lib/apt/lists/*

ENV LANG en_US.UTF-8
ENV LC_ALL en_US.UTF-8

# sap binaries
INCLUDE+ common/saplibs.Dockerfile

# work user
USER ${adminuser}
WORKDIR /home/${adminuser}

RUN  printf "alias e=exit\nalias ..=cd..\nalias :q=exit\nalias ll='ls -l'\nalias la='ls -la'\nalias distro='cat /etc/*-release'\n" > .bash_aliases && \
  printf "\n# colors\nexport TERM=xterm-256color\n" >> ~/.bashrc && \
  # git configuration
  git config --global http.sslVerify false && \
  git config --global user.name bsrdjan && \
  git config --global user.email srdjan.boskovic@sap.com && \
  git config --global pull.rebase false

# python
INCLUDE+ common/python.Dockerfile

# nodejs
INCLUDE+ common/nodejs.Dockerfile

SHELL ["/bin/bash"]
