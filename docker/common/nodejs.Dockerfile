# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# node js

# as admin user

RUN \
    # cmake
    wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc 2>/dev/null | gpg --dearmor - | sudo tee /etc/apt/trusted.gpg.d/kitware.gpg >/dev/null && \
    sudo apt-add-repository "deb https://apt.kitware.com/ubuntu/ $(lsb_release -cs) main" && \
    sudo apt -y update && sudo apt -y install cmake && \
    # nvm
    NVM_VERSION=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
    printf "\n# nvm" >> ~/.bashrc && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash && \
    bash -ic "nvm install node && nvm alias default node && nvm install lts/fermium && nvm install lts/gallium && nvm install lts/hydrogen" && \
    printf "\nexport PATH=node_modules/.bin:\$PATH\nnvm use node\n\n" >> ~/.bashrc
