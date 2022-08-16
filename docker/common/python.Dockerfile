# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# python

ARG venv_base=~/.virtualenvs
ARG dev_python="pip wheel pytest cython ipython"
# 1st version is set as the default one: 3.10.6
ARG pyenv_versions="3.10.6 3.9.13 3.8.13 3.7.13 3.6.15"

ENV TMPDIR=/home/${adminuser}/tmp

# pyenv config files
COPY --chown=${adminuser}:${adminuser} /common/pyenv /tmp

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
    # pyenv config files
    PROFILE=".profile" && if [ ! -f "$PROFILE" ]; then PROFILE=".bash_profile"; fi && \
    cat /tmp/profile.sh "$PROFILE" > temp && mv temp "$PROFILE" && \
    cat /tmp/bashrc.sh >> .bashrc && \
    echo "pyenv activate py"`echo ${pyenv_versions} | awk '{print $1;}'` >> .bashrc && \
    sudo rm /tmp/profile.sh /tmp/bashrc.sh && \
    #
    # pyenv
    #
    eval "$(pyenv init --path)" && eval "$(pyenv init -)" && eval "$(pyenv virtualenv-init -)" && \
    # python
    for version in ${pyenv_versions}; \
    do \
    # build
    pyenv install $version && \
    # virtualenv
    pyenv virtualenv $version py$version && \
    pyenv activate py$version && pip install --upgrade ${dev_python} || break; \
    done || exit 1 && \
    # cleanup
    rm -rf $TMPDIR/*
