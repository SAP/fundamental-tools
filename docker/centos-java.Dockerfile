# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build:
# docker build --rm --no-cache -t centos-java -f centos-java.Dockerfile .
# docker run -it --name centos-java --stop-signal SIGRTMIN+3 --tmpfs /tmp --tmpfs /run -v /sys/fs/cgroup:/sys/fs/cgroup:ro -v /Users/d037732/src:/home/www-admin/src centos-java /bin/bash --login
#
# Run:
# docker start -ai centos-java
#

FROM local/c7-systemd

# USER ${adminuser}

# # java
INCLUDE+ common/java.Dockerfile

SHELL ["/bin/bash"]