# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# node js

# as admin user

RUN \
    #
    #cmake
    #
    cd /tmp && \
    CMAKE_VERSION=$(curl -s https://api.github.com/repos/Kitware/CMake/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
    wget -q https://github.com/Kitware/CMake/releases/latest/download/cmake-${CMAKE_VERSION}.tar.gz && \
    tar -xzvf cmake-${CMAKE_VERSION}.tar.gz && \
    cd cmake-${CMAKE_VERSION} && \
    ./bootstrap && \
    make -j4 && sudo make install && \
    #
    # nvm
    #
    NVM_VERSION=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
    printf "\n# nvm" >> ~/.bashrc && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash && \
    bash -ic "nvm install node && nvm alias default node && nvm install lts/erbium && nvm install lts/fermium && nvm install lts/gallium" && \
    printf "\nexport PATH=node_modules/.bin:\$PATH\nnvm use default\n\n" >> ~/.bashrc
