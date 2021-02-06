#
# Build:
#
# Copy the "nwrfcsdk" folder from https://github.wdf.sap.corp/ng-apps/nwrfcsdk to Dockerfile folder
# docker build --rm --no-cache -t abap-node -f abap-node.Dockerfile .
#
# Map your working folder to docker volume: /Users/bsrdjan/myapp -> /abap-api-tools:
# docker run --name abap-node -it -v /Users/bsrdjan/myapp:/abap-api-tools --env ABAP_API_TOOLS_WORKING_FOLDER=/abap-api-tools abap-node
#
# Start: docker start abap-node
# Usage: docker exec abap-node abap
# Stop:  docker stop abap-node

FROM node:15

ARG nwrfc_source=/nwrfcsdk
ARG nwrfc_target=/usr/local/sap

# sap nwrfc sdk
RUN printf "\n# nwrfc sdk \n" >> ~/.bashrc && \
    printf "export SAPNWRFC_HOME=${nwrfc_target}/nwrfcsdk\n" >> ~/.bashrc
USER root
RUN mkdir -p ${nwrfc_target}
COPY ${nwrfc_source} ${nwrfc_target}/nwrfcsdk
RUN chmod -R a+r ${nwrfc_target}/nwrfcsdk && \
    chmod -R a+x ${nwrfc_target}/nwrfcsdk/bin && \
    printf "# include nwrfcsdk\n${nwrfc_target}/nwrfcsdk/lib\n" | tee /etc/ld.so.conf.d/nwrfcsdk.conf && \
    ldconfig && ldconfig -p | grep sap

# abap tools
RUN npm install -g abap-api-tools

CMD ["/bin/bash"]