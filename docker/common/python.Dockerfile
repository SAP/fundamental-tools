# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0


# python

ARG venv_base=~/.virtualenvs
ARG py36=3.6.13
ARG py37=3.7.10
ARG py38=3.8.10
ARG py39=3.9.5
ARG py36venv=py36
ARG py37venv=py37
ARG py38venv=py38
ARG py39venv=py39
ARG dev_python="pip wheel pytest cython ipython"

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
    echo "pyenv activate ${py39venv}" >> .bashrc && \
    sudo rm /tmp/profile.sh /tmp/bashrc.sh && \
    #
    # Build
    #
    eval "$(pyenv init --path)" && eval "$(pyenv init -)" && eval "$(pyenv virtualenv-init -)" && \
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
    pyenv activate ${py36venv} && pip install --upgrade ${dev_python} && \
    pyenv activate ${py37venv} && pip install --upgrade ${dev_python} && \
    pyenv activate ${py38venv} && pip install --upgrade ${dev_python} && \
    pyenv activate ${py39venv} && pip install --upgrade ${dev_python}


