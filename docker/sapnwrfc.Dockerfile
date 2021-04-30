# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build:
# docker build --rm --no-cache -t sapnwrfc -f sapnwrfc.Dockerfile .
# docker run --name sapnwrfc --stop-signal SIGRTMIN+3 --tmpfs /tmp --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro -v /Users/d037732/src:/home/www-admin/src -it sapnwrfc
#
# Run:
# docker start -ai sapnwrfc
#

FROM local/c7-systemd

# python
INCLUDE+ common/python.Dockerfile

# nvm
INCLUDE+ common/nodejs.Dockerfile

CMD ["/bin/bash"]