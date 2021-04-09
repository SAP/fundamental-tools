# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build:
# docker build --rm --no-cache -t sapnwrfc -f sapnwrfc.Dockerfile .
# docker run --name sapnwrfc --stop-signal SIGRTMIN+3 --tmpfs /tmp --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro -v /Users/d037732/src:/home/www-admin/src -it sapnwrfc
#
# Run:
# docker start -ai sapnwrfc
#
FROM local/c7-systemd

LABEL maintainer="srdjan.boskovic@sap.com"
LABEL version="2.0"
LABEL description="Python and NodeJS RFC Connectivity"

# admin user
ARG adminuser=www-admin
USER ${adminuser}

#
# node
#

# ARG NVM_VERSION=0.38.0
# ARG CMAKE_VERSION=3.20.1

# cmake
RUN cd /var/tmp && \
  CMAKE_VERSION=$(curl -s https://api.github.com/repos/Kitware/CMake/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
  wget -q https://github.com/Kitware/CMake/releases/latest/download/cmake-${CMAKE_VERSION}.tar.gz && \
  tar -xzvf cmake-${CMAKE_VERSION}.tar.gz && \
  cd cmake-${CMAKE_VERSION} && \
  ./bootstrap && \
  make -j4 && sudo make install && \
  sudo rm -rf /var/tmp/* && rm -rf /tmp/*

# nvm
USER ${adminuser}
RUN printf "\n# nvm" >> ~/.bashrc && \
  NVM_VERSION=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash && \
  bash -ic "nvm install node && npm -g i node-rfc && nvm alias default node && nvm install lts/dubnium && npm -g i node-rfc && nvm install lts/erbium && npm -g i node-rfc && nvm install lts/fermium && npm -g i node-rfc " && \
  printf "export PATH=node_modules/.bin:\$PATH\nnvm use default\n\n" >> ~/.bashrc

#
# python
#

ARG venv_base=/home/${adminuser}/.virtualenvs
ARG py36=3.6.13
ARG py37=3.7.10
ARG py38=3.8.9
ARG py39=3.9.4
ARG py36venv=py36
ARG py37venv=py37
ARG py38venv=py38
ARG py39venv=py39
ARG dev_python="pip wheel pytest cython ipython pynwrfc"

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
RUN source ~/.bashrc && \
  pyenv activate ${py36venv} && pip install --upgrade ${dev_python} && \
  pyenv activate ${py37venv} && pip install --upgrade ${dev_python} && \
  pyenv activate ${py38venv} && pip install --upgrade ${dev_python} && \
  pyenv activate ${py39venv} && pip install --upgrade ${dev_python} && \
  printf "pyenv activate ${py39venv}\n" >> ~/.bashrc

# pyenv-update
RUN git clone https://github.com/pyenv/pyenv-update.git $(pyenv root)/plugins/pyenv-update

# cleanup
USER root
RUN rm -rf /tmp/*

USER ${adminuser}
CMD ["/bin/bash"]