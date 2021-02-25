" SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
"
" SPDX-License-Identifier: Apache-2.0

FUNCTION FTLS_DOMVALUES_GET .
*"----------------------------------------------------------------------
*"*"Lokale Schnittstelle:
*"  IMPORTING
*"     VALUE(IV_DOMNAME) TYPE  DOMNAME
*"  TABLES
*"      ET_VALUES STRUCTURE  DD07V
*"----------------------------------------------------------------------

  " data: idd07v type table of dd07v with header line.
  DATA: lv_rc TYPE sy-subrc.

  CALL FUNCTION 'DD_DOMVALUES_GET'
    EXPORTING
      domname        = iv_domname
      text           = 'X'
*     LANGU          = ' '
*     BYPASS_BUFFER  = ' '
    IMPORTING
      rc             = lv_rc
    TABLES
      dd07v_tab      = rt_values  "idd07v
    EXCEPTIONS
      wrong_textflag = 1
      OTHERS         = 2.

  IF sy-subrc <> 0.
    MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno
            WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
  ENDIF.
ENDFUNCTION.