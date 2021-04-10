# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build:
# docker build --rm --no-cache -t fedora-python -f fedora-python.Dockerfile .
# docker run --name fedora-python -v /Users/d037732/src:/home/www-admin/src -it fedora-python
#
# Run:
# docker start -ai fedora-python
#

# https://github.com/nodejs/node/blob/master/BUILDING.md#supported-toolchains
FROM local/fedora

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