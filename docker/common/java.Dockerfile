ARG sap_source=/sap
ARG sap_target=/usr/local/sap

COPY --chown=www-admin:www-admin ${sap_source}/sapjvm_8/ ${sap_target}/sapjvm_8/

RUN printf "\n# java\nexport JAVA_HOME=${sap_target}/sapjvm_8\nexport PATH=\$JAVA_HOME/bin:$PATH\n" >> .bashrc

