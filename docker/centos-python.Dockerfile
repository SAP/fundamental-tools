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

FROM local/c7-systemd

# python
INCLUDE+ common/python.Dockerfile

CMD ["/bin/bash"]
