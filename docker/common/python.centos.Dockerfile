# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# python 3.10.x
#   build openssl 1.1.1 for "spot" use: https://cloudwafer.com/blog/installing-openssl-on-centos-7/
#   build 3.10.x with custom ssl path:  https://stackoverflow.com/questions/56552390/how-to-fix-ssl-module-in-python-is-not-available-in-centos

# python

ARG venv_base=~/.virtualenvs
ARG dev_python="pip wheel pytest cython ipython"
ARG pyenv_versions="3.10.4 3.9.12 3.8.13 3.7.13 3.6.15"
ARG pyenv_default="3.10.4"
ARG OPENSSLDIR="/usr/local/ssl"

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
    echo "pyenv activate" ${pyenv_default} >> .bashrc && \
    sudo rm /tmp/profile.sh /tmp/bashrc.sh && \
    #
    # pyenv
    #
    eval "$(pyenv init --path)" && eval "$(pyenv init -)" && eval "$(pyenv virtualenv-init -)" && \
    for version in ${pyenv_versions}; \
    do \
    # build
    if [ "$version" = ${pyenv_default} ] ; then \
    # build openssl for spot use
    OPENSSLDIR=${OPENSSLDIR} mkdir -p $TMPDIR && cd $TMPDIR && \
    wget https://www.openssl.org/source/openssl-1.1.1c.tar.gz && \
    tar -xf openssl-1.1.1c.tar.gz && cd openssl-1.1.1c && \
    sudo ./config --prefix=$OPENSSLDIR --openssldir=$OPENSSLDIR shared zlib && \
    sudo make && sudo make install && \
    sudo yum -y install openssl11 && \
    cd $TMPDIR && \
    wget https://www.python.org/ftp/python/$version/Python-$version.tgz && \
    tar xzf Python-$version.tgz && \
    cd Python-$version && \
    ./configure --with-openssl=$OPENSSLDIR --prefix=$PYENV_ROOT/versions/$version --enable-optimizations && \
    make altinstall; \
    else \
    pyenv install $version; \
    fi && \
    # virtualenv
    pyenv virtualenv $version py$version && \
    pyenv activate py$version && pip install --upgrade ${dev_python}; \
    done || exit 1 && \
    # cleanup
    rm -rf $TMPDIR/*
