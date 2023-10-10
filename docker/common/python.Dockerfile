# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# python

# see bashrc.sh

ARG venv_base=~/.virtualenvs
ARG common_source=/common
# 1st version will be set as the default one
ARG pyenv_versions="3.12.0 3.11.6 3.10.13 3.9.18 3.8.18"

ENV TMPDIR=/home/${adminuser}/tmp

# pyenv bashrc config
COPY --chown=${adminuser}:${adminuser} ${common_source}/bashrc_pyenv.sh /tmp/

# as admin user

RUN \
    # tox and ipython installation
    sudo apt-get update && sudo apt install -y python3-pip python3-venv && \
    python3 -m pip install --user pipx && \
    PATH=$HOME/.local/bin:$PATH pipx install tox && \
    # Clone and configure
    PYENV_ROOT=~/.pyenv && PATH=$PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH && \
    # git
    git clone https://github.com/pyenv/pyenv.git $PYENV_ROOT && \
    git clone https://github.com/pyenv/pyenv-virtualenv.git $PYENV_ROOT/plugins/pyenv-virtualenv && \
    git clone https://github.com/pyenv/pyenv-update.git $PYENV_ROOT/plugins/pyenv-update && \
    # pyenv
    eval "$(pyenv init -)" && eval "$(pyenv virtualenv-init -)" && \
    # pythons and virtualenvs
    for version in $( echo "$pyenv_versions" ); do \
    pyenv install $version && pyenv virtualenv $version py$version && \
    pyenv activate py$version && pip install --upgrade pip build ipython pytest pytest-testdox pytest-html-reporter || break; \
    done || exit 1 && \
    pyenv global ${pyenv_versions} && \
    # bashrc
    cat /tmp/bashrc_pyenv.sh >> .bashrc && \
    default_version=py`echo ${pyenv_versions} | awk '{print $1;}'` && \
    echo "pyenv activate $default_version" >> .bashrc && \
    sudo rm /tmp/bashrc_pyenv.sh && \
    # cleanup
    rm -rf $TMPDIR/*
