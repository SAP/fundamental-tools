# syntax = edrevo/dockerfile-plus

# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

# Build:
# docker build --rm --no-cache -t fedora-python -f fedora-python.Dockerfile .
# docker run -it --name fedora-python -v /Users/d037732/SAPDevelop/dev:/home/www-admin/src fedora-python /bin/bash --login
#
# Run:
# docker start -ai fedora-python
#

FROM local/fedora

# python
INCLUDE+ common/python.Dockerfile

SHELL ["/bin/bash"]