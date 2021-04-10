# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build:
# docker build --rm --no-cache -t centos-python -f centos-python.Dockerfile .
# docker run --name centos-python --stop-signal SIGRTMIN+3 --tmpfs /tmp --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro -v /Users/d037732/src:/home/www-admin/src -it centos-python
#
# Run:
# docker start -ai centos-python
#

# https://github.com/nodejs/node/blob/master/BUILDING.md#supported-toolchains
FROM local/c7-systemd

LABEL maintainer="srdjan.boskovic@sap.com"
LABEL version="2.0"
LABEL description="Python RFC Connector"

ARG adminuser=www-admin

INCLUDE+ common/python.Dockerfile

# cleanup
USER root
RUN rm -rf /tmp/*

USER ${adminuser}
CMD ["/bin/bash"]