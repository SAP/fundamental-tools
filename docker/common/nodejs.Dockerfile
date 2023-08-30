# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# NodeJS and nvv installation

ARG common_source=/common

ENV TMPDIR=/home/${adminuser}/tmp

# nvm bashrc config
COPY --chown=${adminuser}:${adminuser} ${common_source}/bashrc_nvm.sh /tmp

# as admin user

RUN \
    # nvm
    NVM_VERSION=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash && \
    bash -ic "nvm install node && nvm alias default node && nvm install lts/fermium && nvm install lts/gallium && nvm install lts/hydrogen" && \
    # bashrc
    cat /tmp/bashrc_nvm.sh >> .bashrc && \
    echo "nvm use node" >> .bashrc && \
    sudo rm /tmp/bashrc_nvm.sh
