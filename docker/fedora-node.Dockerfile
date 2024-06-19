# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build:
# docker build --rm --no-cache -t fedora-node -f fedora-node.Dockerfile .
# docker run -it --name fedora-node -v /Users/d037732/SAPDevelop/dev:/home/www-admin/src fedora-node /bin/bash --login
#
# Run:
# docker start -ai fedora-node
#

FROM local/fedora

# nodejs
INCLUDE+ common/nodejs.dockerfile

SHELL ["/bin/bash"]
