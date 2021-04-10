# syntax = edrevo/dockerfile-plus

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

INCLUDE+ common/nodejs.Dockerfile

USER ${adminuser}
CMD ["/bin/bash"]