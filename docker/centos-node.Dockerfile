# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

#
# Build:
# docker build --rm --no-cache -t centos-node -f centos-node.Dockerfile .
# docker run -it --name centos-node --stop-signal SIGRTMIN+3 --tmpfs /tmp --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro -v /Users/d037732/src:/home/www-admin/src centos-node /bin/bash --login
#
# Run:
# docker start -ai centos-node
#

FROM local/c7-systemd

# nvm
INCLUDE+ common/nodejs.Dockerfile

SHELL ["/bin/bash"]
