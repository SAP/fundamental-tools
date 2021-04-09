# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build:
# docker build --rm --no-cache -t fedora-node -f fedora-node.Dockerfile .
# docker run --name fedora-node -v /Users/d037732/src:/home/www-admin/src -it fedora-node
#
# Run:
# docker start -ai fedora-node
#

# https://github.com/nodejs/node/blob/master/BUILDING.md#supported-toolchains
FROM local/fedora

LABEL maintainer="srdjan.boskovic@sap.com"
LABEL version="2.0"
LABEL description="NodeJS RFC Connector"

ARG adminuser=www-admin
# ARG NVM_VERSION=0.38.0
# ARG CMAKE_VERSION=3.20.1

# cmake
USER ${adminuser}
RUN cd /var/tmp && \
  CMAKE_VERSION=$(curl -s https://api.github.com/repos/Kitware/CMake/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
  wget -q https://github.com/Kitware/CMake/releases/latest/download/cmake-${CMAKE_VERSION}.tar.gz && \
  tar -xzvf cmake-${CMAKE_VERSION}.tar.gz && \
  cd cmake-${CMAKE_VERSION} && \
  ./bootstrap && \
  make -j4 && sudo make install && \
  sudo rm -rf /var/tmp/* && rm -rf /tmp/*

# nvm
USER ${adminuser}
RUN printf "\n# nvm" >> ~/.bashrc && \
  NVM_VERSION=$(curl -s https://api.github.com/repos/nvm-sh/nvm/releases/latest | grep '"tag_name"' | sed -E 's/.*"v([^"]+)".*/\1/') && \
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v${NVM_VERSION}/install.sh | bash && \
  bash -ic "nvm install node && nvm alias default node && nvm install lts/dubnium && nvm install lts/erbium && nvm install lts/fermium" && \
  printf "export PATH=node_modules/.bin:\$PATH\nnvm use default\n\n" >> ~/.bashrc

USER ${adminuser}
CMD ["/bin/bash"]