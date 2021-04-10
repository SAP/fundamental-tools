# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

#
# Build:
# docker build --rm --no-cache -t centos-node -f centos-node.Dockerfile .
# docker run --name centos-node --stop-signal SIGRTMIN+3 --tmpfs /tmp --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro -v /Users/d037732/src:/home/www-admin/src -it centos-node
#
# Run:
# docker start -ai centos-node
#

# https://github.com/nodejs/node/blob/master/BUILDING.md#supported-toolchains
FROM local/c7-systemd

LABEL maintainer="srdjan.boskovic@sap.com"
LABEL version="1.0"
LABEL description="NodeJS RFC Connector"

ARG adminuser=www-admin

INCLUDE+ common/nodejs.Dockerfile

USER ${adminuser}
CMD ["/bin/bash"]
