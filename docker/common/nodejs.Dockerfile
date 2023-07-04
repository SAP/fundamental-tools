# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# NodeJS and nvv installation

ENV TMPDIR=/home/${adminuser}/tmp

# nvm bashrc config
COPY --chown=${adminuser}:${adminuser} /common/bashrc_nvm.sh /tmp

# as admin user

RUN \
    # cmake - replaced with node-gyp
    # wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/dev/null | gpg --dearmor - | sudo tee /etc/apt/trusted.gpg.d/kitware.gpg >/dev/null && \
    # sudo apt-add-repository "deb https://apt.kitware.com/ubuntu/ $(lsb_release -cs) main" && \
    # sudo apt -y update && sudo apt -y install lsb-release cmake && \
    # nvm
    NVM_VERSION=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash && \
    bash -ic "nvm install node && nvm alias default node && nvm install lts/fermium && nvm install lts/gallium && nvm install lts/hydrogen" && \
    # bashrc
    cat /tmp/bashrc_nvm.sh >> .bashrc && \
    echo "nvm use node" >> .bashrc && \
    sudo rm /tmp/bashrc_nvm.sh
