# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# python

# see bashrc.sh

ARG venv_base=~/.virtualenvs
ARG dev_python="wheel pytest cython ipython"
# 1st version is set as the default one
ARG pyenv_versions="3.11.2 3.10.9 3.9.16 3.8.16 3.7.16"

ENV TMPDIR=/home/${adminuser}/tmp

# pyenv bashrc config
COPY --chown=${adminuser}:${adminuser} /common/bashrc_pyenv.sh /tmp/

# as admin user

RUN \
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
    pyenv activate py$version && pip install --upgrade ${dev_python} || break; \
    done || exit 1 && \
    # bashrc
    cat /tmp/bashrc_pyenv.sh >> .bashrc && \
    echo "pyenv activate py"`echo ${pyenv_versions} | awk '{print $1;}'` >> .bashrc && \
    sudo rm /tmp/bashrc_pyenv.sh && \
    # cleanup
    rm -rf $TMPDIR/*
