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
ARG venv_base=/home/${adminuser}/.virtualenvs
ARG py36=3.6.13
ARG py37=3.7.10
ARG py38=3.8.9
ARG py39=3.9.4
ARG py36venv=py36
ARG py37venv=py37
ARG py38venv=py38
ARG py39venv=py39
ARG dev_python="pip wheel pytest cython ipython"
ARG dev_tools="sudo curl wget git unzip vim tree tmux iproute2 iputils-ping"
ARG dev_libs="build-essential make libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev"

ARG nwrfcsdk=nwrfcsdk-pl8
ARG nwrfc_source=/sap
ARG nwrfc_target=/usr/local/sap

# ARG NVM_VERSION=0.38.0
# ARG CMAKE_VERSION=3.19.1

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

# sap nw rfc lib
RUN printf "\n# nwrfc sdk \n" >> ~/.bashrc && \
  printf "export SAPNWRFC_HOME=${nwrfc_target}/nwrfcsdk\n" >> ~/.bashrc
USER root
RUN mkdir -p ${nwrfc_target}
COPY ${nwrfc_source} ${nwrfc_target}
RUN chmod -R a+r ${nwrfc_target}/${nwrfcsdk} && \
  chmod -R a+x ${nwrfc_target}/${nwrfcsdk}/bin && \
  chmod -R a+x ${nwrfc_target}/${nwrfcsdk}/lib && \
  printf "# include nwrfcsdk\n${nwrfc_target}/${nwrfcsdk}/lib\n" | tee /etc/ld.so.conf.d/nwrfcsdk.conf && \
  ldconfig && ldconfig -p | grep sa

# pyenv
USER ${adminuser}
RUN git clone https://github.com/pyenv/pyenv.git .pyenv && \
  printf '\n#pyenv\nexport PYENV_ROOT="$HOME/.pyenv"\n' >> .bashrc && \
  printf 'export PATH="$PYENV_ROOT/bin:$PATH"\n' >> .bashrc && \
  printf 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi\n' >> .bashrc
ENV PYENV_ROOT /home/${adminuser}/.pyenv
ENV PATH $PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH
RUN pyenv install ${py39} && \
  pyenv install ${py38} && \
  pyenv install ${py37} && \
  pyenv install ${py36}

# pyenv-virtualenv
USER ${adminuser}
RUN git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv && \
  printf 'eval "$(pyenv virtualenv-init -)"\n' >> ~/.bashrc && \
  printf 'export PYENV_VIRTUALENV_DISABLE_PROMPT=1\n' >> ~/.bashrc
RUN pyenv virtualenv ${py36} ${py36venv} && \
  pyenv virtualenv ${py37} ${py37venv} && \
  pyenv virtualenv ${py38} ${py38venv} && \
  pyenv virtualenv ${py39} ${py39venv}
RUN bash -ic "source ~/.bashrc && \
  pyenv activate ${py36venv} && pip install --upgrade ${dev_python} && \
  pyenv activate ${py37venv} && pip install --upgrade ${dev_python} && \
  pyenv activate ${py38venv} && pip install --upgrade ${dev_python} && \
  pyenv activate ${py39venv} && pip install --upgrade ${dev_python}" && \
  printf "pyenv activate ${py39venv}\n" >> ~/.bashrc

# pyenv-update
RUN git clone https://github.com/pyenv/pyenv-update.git $(pyenv root)/plugins/pyenv-update

# cmake
RUN cd /tmp && \
  CMAKE_VERSION=$(curl -s https://api.github.com/repos/Kitware/CMake/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
  wget -q https://github.com/Kitware/CMake/releases/latest/download/cmake-${CMAKE_VERSION}.tar.gz && \
  tar -xzvf cmake-${CMAKE_VERSION}.tar.gz && \
  cd cmake-${CMAKE_VERSION} && \
  ./bootstrap && \
  make -j4 && sudo make install

# nvm
USER ${adminuser}
RUN printf "\n# nvm" >> ~/.bashrc && \
  NVM_VERSION=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash && \
  bash -ic "nvm install node && nvm alias default node && nvm install lts/dubnium && nvm install lts/erbium && nvm install lts/fermium" && \
  printf "export PATH=node_modules/.bin:\$PATH\nnvm use default\n\n" >> ~/.bashrc

# remove installs
RUN sudo rm -rf /var/lib/apt/lists/*

# cleanup
RUN rm -rf /tmp/*

USER ${adminuser}