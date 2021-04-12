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

FROM local/fedora

# python
INCLUDE+ common/python.Dockerfile

CMD ["/bin/bash"]