# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

#
# Build:
# docker build -t ubuntu-test -f ubuntu-test.Dockerfile .
# docker run --name ubuntu-test -v /Users/d037732/src:/home/www-admin/src -it ubuntu-test
#
# Run:
# docker start -ai ubuntu-test
#

FROM ubuntu:latest

LABEL maintainer="srdjan.boskovic@sap.com"
LABEL version="2.0"
LABEL description="Ubuntu QAS"

ARG adminuser=www-admin
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
RUN printf "alias e=exit\nalias ..=cd..\nalias :q=exit\nalias ll='ls -l'\nalias la='ls -la'\nalias distro='cat /etc/*-release'\n" > .bash_aliases
RUN printf "\n# colors\nexport TERM=xterm-256color\n" >> ~/.bashrc

# git configuration
RUN \
  git config --global http.sslVerify false && \
  git config --global user.name bsrdjan && \
  git config --global user.email srdjan.boskovic@sap.com

# essentials
RUN sudo apt install -y ${dev_libs}

# nwrfcsdk
INCLUDE+ common/sapnwrfcsdk.Dockerfile

# python
INCLUDE+ common/python.Dockerfile

# nvm
INCLUDE+ common/nodejs.Dockerfile

# remove installs
RUN sudo rm -rf /var/lib/apt/lists/*

# cleanup
RUN rm -rf /tmp/*

USER ${adminuser}