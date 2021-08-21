# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build:
# docker build --rm --no-cache -t sapnwrfc -f sapnwrfc.Dockerfile .
# docker run -it --name sapnwrfc --stop-signal SIGRTMIN+3 --tmpfs /tmp --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro -v /Users/D037732SAPDevelop/dev:/home/www-admin/src sapnwrfc /bin/bash --login
#
# Run:
# docker start -ai sapnwrfc
#

FROM local/c7-systemd

# python
INCLUDE+ common/python.Dockerfile

# nvm
INCLUDE+ common/nodejs.Dockerfile

SHELL ["/bin/bash"]