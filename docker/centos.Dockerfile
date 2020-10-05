#
# Build:
# docker build -t centos -f centos.Dockerfile .
# docker run --name centos -v /Users/d037732/src:/home/www-admin/src -it centos
#
# Run:
# docker start -ai centos
#

# https://github.com/nodejs/node/blob/master/BUILDING.md#supported-toolchains
FROM centos:7

LABEL maintainer="srdjan.boskovic@.com"
LABEL version="1.0"
LABEL description="RFC Connectors QA"

# EXPOSE 80 443 8123 3456 8080-8090 9000-9010

ARG adminuser=www-admin
ARG nwrfc_local=/usr/local/sap
ARG nvm_version=0.36.0
ARG venv_base=/home/${adminuser}/.virtualenvs
ARG py36=3.6.12
ARG py36venv=py36
ARG py37=3.7.9
ARG py37venv=py37
ARG py38=3.8.6
ARG py38venv=py38
ARG dev_python="pip wheel pytest cython"
ARG dev_tools="sudo curl wget git unzip vim tree tmux"
ARG dev_libs="uuidd make zlib-devel bzip2-devel openssl-devel ncurses-devel sqlite-devel readline-devel tk-devel libffi-devel"

# timezone # https://serverfault.com/questions/683605/docker-container-time-timezone-will-not-reflect-changes
ENV TZ=Europe/Berlin

# Add sudo user
RUN yum -y install sudo
RUN useradd -G wheel --create-home --shell /bin/bash ${adminuser}
RUN echo "%wheel       ALL = (ALL) NOPASSWD: ALL" >> /etc/sudoers
USER ${adminuser}
WORKDIR /home/${adminuser}
RUN printf "alias e=exit\nalias ..=cd..\nalias :q=exit\nalias ll='ls -l'\nalias la='ls -la'\n" > .bash_aliases
RUN printf "\n#aliases\nsource ~/.bash_aliases\n\n# colors\nexport TERM=xterm-256color\n" >> ~/.bashrc

# required packages
USER root
RUN yum -y update
RUN yum -y groupinstall "Development tools"
RUN yum -y install ${dev_tools}
RUN yum -y install ${dev_libs}

# devtoolset-8
RUN yum -y install centos-release-scl && \
  yum -y install devtoolset-8 && \
  scl enable devtoolset-8 -- bash

USER ${adminuser}

RUN printf "\n# devtools-8\nsource /opt/rh/devtoolset-8/enable\n" >> ~/.bashrc

# git configuration
USER ${adminuser}
RUN \
  git config --global http.sslVerify false && \
  git config --global user.name bsrdjan && \
  git config --global user.email srdjan.boskovic@sap.com

# sap nw rfc lib
USER ${adminuser}
RUN printf "\n# nwrfc sdk \n" >> ~/.bashrc
RUN printf "export SAPNWRFC_HOME=${nwrfc_local}/nwrfcsdk \n" >> ~/.bashrc
USER root
RUN mkdir -p ${nwrfc_local}
COPY /SAP/NWRFCSDK-750-PL6/linux/nwrfcsdk ${nwrfc_local}/nwrfcsdk
RUN chmod -R a+r ${nwrfc_local}/nwrfcsdk && chmod -R a+x ${nwrfc_local}/nwrfcsdk/bin
RUN printf "# include nwrfcsdk\n${nwrfc_local}/nwrfcsdk/lib\n" | tee /etc/ld.so.conf.d/nwrfcsdk.conf
RUN ldconfig && ldconfig -p | grep sap

# pyenv
USER ${adminuser}
RUN git clone https://github.com/pyenv/pyenv.git .pyenv
RUN printf '\n#pyenv\nexport PYENV_ROOT="$HOME/.pyenv"\n' >> .bashrc
RUN printf 'export PATH="$PYENV_ROOT/bin:$PATH"\n' >> .bashrc
RUN printf 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi\n' >> .bashrc
ENV PYENV_ROOT /home/${adminuser}/.pyenv
ENV PATH $PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH
RUN pyenv install ${py36}
RUN pyenv install ${py37}
RUN pyenv install ${py38}

# pyenv-virtualenv
USER ${adminuser}
RUN git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
RUN printf 'eval "$(pyenv virtualenv-init -)"\n' >> ~/.bashrc
RUN printf 'export PYENV_VIRTUALENV_DISABLE_PROMPT=1\n' >> ~/.bashrc
RUN pyenv virtualenv ${py36} ${py36venv}
RUN pyenv virtualenv ${py37} ${py37venv}
RUN pyenv virtualenv ${py38} ${py38venv}
RUN source ~/.bashrc && \
  pyenv activate ${py36venv} && pip install --upgrade ${dev_python} && \
  pyenv activate ${py37venv} && pip install --upgrade ${dev_python} && \
  pyenv activate ${py38venv} && pip install --upgrade ${dev_python}
RUN printf "pyenv activate ${py38venv}\n" >> ~/.bashrc

# pyenv-update
RUN git clone https://github.com/pyenv/pyenv-update.git $(pyenv root)/plugins/pyenv-update

# cmake
USER ${adminuser}
RUN cd /var/tmp && \
  CMAKE_VERSION=$(curl -s https://api.github.com/repos/Kitware/CMake/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
  wget -q https://github.com/Kitware/CMake/releases/latest/download/cmake-${CMAKE_VERSION}.tar.gz && \
  tar -xzvf cmake-${CMAKE_VERSION}.tar.gz && \
  cd cmake-${CMAKE_VERSION} && \
  ./bootstrap && \
  make -j4 && sudo make install

# nvm
USER ${adminuser}
RUN printf "\n# nvm" >> ~/.bashrc
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v${nvm_version}/install.sh | bash
RUN bash -ic "nvm install 10 --lts && nvm install 12 --lts && nvm install 14 --lts && nvm install node && nvm alias default node"
RUN printf "export PATH=node_modules/.bin:\$PATH\nnvm use default\n\n" >> ~/.bashrc

# cleanup
USER root
RUN rm -rf /tmp/*

USER ${adminuser}