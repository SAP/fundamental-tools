# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build:
# docker build --rm --no-cache -t centos-python -f centos-python.Dockerfile .
# docker run -it --name centos-python --stop-signal SIGRTMIN+3 --tmpfs /tmp --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro -v /Users/D037732SAPDevelop/dev:/home/www-admin/src centos-python /bin/bash --login
#
# Run:
# docker start -ai centos-python
#

FROM local/c7-systemd

# python
INCLUDE+ common/python.centos.Dockerfile

SHELL ["/bin/bash"]
