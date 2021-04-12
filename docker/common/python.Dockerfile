# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0


# python

ARG venv_base=~/.virtualenvs
ARG py36=3.6.13
ARG py37=3.7.10
ARG py38=3.8.9
ARG py39=3.9.4
ARG py36venv=py36
ARG py37venv=py37
ARG py38venv=py38
ARG py39venv=py39
ARG dev_python="pip wheel pytest cython ipython"

# as admin user

RUN \
    #
    # Clone and configure
    #
    # paths
    PYENV_ROOT=~/.pyenv && PATH=$PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH && \
    # git
    git clone https://github.com/pyenv/pyenv.git $PYENV_ROOT && \
    git clone https://github.com/pyenv/pyenv-virtualenv.git $PYENV_ROOT/plugins/pyenv-virtualenv && \
    git clone https://github.com/pyenv/pyenv-update.git $PYENV_ROOT/plugins/pyenv-update && \
    # pyenv
    printf '\n#pyenv\nexport PYENV_ROOT="$HOME/.pyenv"\n' >> .bashrc && \
    printf 'export PATH="$PYENV_ROOT/bin:$PATH"\n' >> .bashrc && \
    printf 'if command -v pyenv 1>/dev/null 2>&1; then\n  eval "$(pyenv init -)"\nfi\n' >> .bashrc && \
    # pyenv-virtualenv
    printf 'eval "$(pyenv virtualenv-init -)"\n' >> ~/.bashrc && \
    printf 'export PYENV_VIRTUALENV_DISABLE_PROMPT=1\n' >> ~/.bashrc && \
    #
    # Build
    #
    # pyenv
    pyenv install ${py36} && \
    pyenv install ${py37} && \
    pyenv install ${py38} && \
    pyenv install ${py39} && \
    # pyenv-virtualenv
    pyenv virtualenv ${py36} ${py36venv} && \
    pyenv virtualenv ${py37} ${py37venv} && \
    pyenv virtualenv ${py38} ${py38venv} && \
    pyenv virtualenv ${py39} ${py39venv} && \
    # build tools
    bash -ic "source ~/.bashrc && \
    pyenv activate ${py36venv} && pip install --upgrade ${dev_python} && \
    pyenv activate ${py37venv} && pip install --upgrade ${dev_python} && \
    pyenv activate ${py38venv} && pip install --upgrade ${dev_python} && \
    pyenv activate ${py39venv} && pip install --upgrade ${dev_python}" && \
    printf "pyenv activate ${py39venv}\n" >> ~/.bashrc
