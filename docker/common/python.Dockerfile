# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# https://github.com/pyenv/pyenv/wiki/common-build-problems
# https://cloudwafer.com/blog/installing-openssl-on-centos-7/

# python

ARG venv_base=~/.virtualenvs
ARG dev_python="pip wheel pytest cython ipython"
ARG python_versions="3.10.0 3.9.8 3.8.12 3.7.12 3.6.15"
ARG python_default="py3.10.0"

ENV TMPDIR /home/${adminuser}/tmp

# pyenv config files
COPY --chown=${adminuser}:${adminuser} /common/pyenv /tmp

# as admin user

RUN mkdir $TMPDIR; \
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
    echo "pyenv activate ${python_default}" >> .bashrc && \
    sudo rm /tmp/profile.sh /tmp/bashrc.sh && \
    #
    # Build
    #
    eval "$(pyenv init --path)" && eval "$(pyenv init -)" && eval "$(pyenv virtualenv-init -)" && \
    pythons=(${python_versions}); \
    # pyenv
    for version in "${pythons[@]}";  \
    do pyenv install $version; \
    done; \
    # pyenv-virtualenv
    for version in "${pythons[@]}";  \
    do pyenv virtualenv $version py$version; \
    done; \
    # build tools
    for version in "${pythons[@]}"; \
    do pyenv activate py$version py$version && pip install --upgrade ${dev_python}; \
    done; \
    # cleanup
    rm -rf $TMPDIR/*
