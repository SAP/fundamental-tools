#
# Build:
# docker build -t rfcqa -f ubuntu.Dockerfile .
# docker run --name rfcqa -v /Users/d037732/src:/home/www-admin/src -it rfcqa
#
# Run:
# docker start -ai rfcqa
#

FROM ubuntu:latest

LABEL maintainer="srdjan.boskovic@.com"
LABEL version="1.0"
LABEL description="RFC Connectors QA"

EXPOSE 80 443 8123 3456 8080-8090 9000-9010

ARG adminuser=www-admin
ARG nwrfc_local=/usr/local/sap
ARG venv_base=/home/${adminuser}/.virtualenvs
ARG nvm_version=0.36.0
ARG py36=3.6.12
ARG py36venv=py36
ARG py37=3.7.9
ARG py37venv=py37
ARG py38=3.8.6
ARG py38venv=py38
ARG dev_python="pip wheel pytest cython"
ARG dev_tools="sudo curl wget git unzip vim tree tmux"
ARG dev_libs="build-essential make libssl-dev zlib1g-dev libbz2-dev libreadline-dev libsqlite3-dev llvm libncurses5-dev libncursesw5-dev xz-utils tk-dev"

# os update and packages
RUN \
  sed -i 's/# \(.*multiverse$\)/\1/g' /etc/apt/sources.list && \
  apt update && apt install -y locales ${dev_tools}

# timezone # https://serverfault.com/questions/683605/docker-container-time-timezone-will-not-reflect-changes
ENV TZ=Europe/Berlin
RUN locale-gen de_DE && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# Add admin user
RUN \
  adduser --disabled-password --gecos "" ${adminuser} && \
  usermod -aG www-data,sudo ${adminuser} && \
  echo "${adminuser} ALL=(ALL) NOPASSWD: ALL" >> /etc/sudoers

USER ${adminuser}
WORKDIR /home/${adminuser}
RUN printf "alias e=exit\nalias ..=cd..\nalias :q=exit\nalias ll='ls -l'\nalias la='ls -la'\n" > .bash_aliases
RUN printf "\n# colors\nexport TERM=xterm-256color\n" >> ~/.bashrc

# git configuration
RUN \
  git config --global http.sslVerify false && \
  git config --global user.name bsrdjan && \
  git config --global user.email srdjan.boskovic@sap.com

# essentials
RUN sudo apt install -y ${dev_libs}

# cmake
RUN cd /tmp && \
  CMAKE_VERSION=$(curl -s https://api.github.com/repos/Kitware/CMake/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
  wget -q https://github.com/Kitware/CMake/releases/latest/download/cmake-${CMAKE_VERSION}.tar.gz && \
  tar -xzvf cmake-${CMAKE_VERSION}.tar.gz && \
  cd cmake-${CMAKE_VERSION} && \
  ./bootstrap && \
  make -j4 && sudo make install

# pyenv
RUN git clone https://github.com/pyenv/pyenv.git .pyenv
RUN printf 'export PYENV_ROOT="$HOME/.pyenv"\n' >> .bashrc
RUN printf 'export PATH="$PYENV_ROOT/bin:$PATH"\n' >> .bashrc
RUN printf 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi\n' >> .bashrc
ENV PYENV_ROOT /home/${adminuser}/.pyenv
ENV PATH $PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH
RUN pyenv install ${py38}
RUN pyenv install ${py37}
RUN pyenv install ${py36}

# pyenv-virtualenv
RUN git clone https://github.com/pyenv/pyenv-virtualenv.git $(pyenv root)/plugins/pyenv-virtualenv
RUN printf 'eval "$(pyenv virtualenv-init -)"\n' >> ~/.bashrc
RUN printf 'export PYENV_VIRTUALENV_DISABLE_PROMPT=1\n' >> ~/.bashrc
RUN pyenv virtualenv ${py36} ${py36venv}
RUN pyenv virtualenv ${py37} ${py37venv}
RUN pyenv virtualenv ${py38} ${py38venv}
RUN bash -ic "source ~/.bashrc && \
  pyenv activate ${py36venv} && pip install --upgrade ${dev_python} && \
  pyenv activate ${py37venv} && pip install --upgrade ${dev_python} && \
  pyenv activate ${py38venv} && pip install --upgrade ${dev_python}"
RUN printf "pyenv activate ${py38venv}\n" >> ~/.bashrc

# pyenv-update
RUN git clone https://github.com/pyenv/pyenv-update.git $(pyenv root)/plugins/pyenv-update

# sap nw rfc lib
RUN printf "\n# nwrfc sdk \n" >> ~/.bashrc
RUN printf "export SAPNWRFC_HOME=${nwrfc_local}/nwrfcsdk \n" >> ~/.bashrc
USER root
RUN mkdir -p ${nwrfc_local}
COPY /SAP/NWRFCSDK-750-PL6/linux/nwrfcsdk ${nwrfc_local}/nwrfcsdk
RUN chmod -R a+r ${nwrfc_local}/nwrfcsdk && chmod -R a+x ${nwrfc_local}/nwrfcsdk/bin
RUN printf "# include nwrfcsdk\n${nwrfc_local}/nwrfcsdk/lib\n" |  tee /etc/ld.so.conf.d/nwrfcsdk.conf
RUN ldconfig && ldconfig -p | grep sap

# nvm
USER ${adminuser}
RUN printf "\n# nvm" >> ~/.bashrc
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v${nvm_version}/install.sh | bash
RUN bash -ic "nvm install 10 --lts && nvm install 11 --lts && nvm install 12 --lts && nvm install node && nvm alias default node"
RUN printf "export PATH=node_modules/.bin:\$PATH\nnvm use default\n\n" >> ~/.bashrc

# remove installs
RUN sudo rm -rf /var/lib/apt/lists/*

# cleanup
RUN rm -rf /tmp/*
