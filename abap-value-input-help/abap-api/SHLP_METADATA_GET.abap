
" SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
"
" SPDX-License-Identifier: Apache-2.0

FUNCTION FTLS_SHLP_METADATA_GET .
*"----------------------------------------------------------------------
*"*"Lokale Schnittstelle:
*"  IMPORTING
*"     VALUE(IV_SHLPNAME) TYPE  SHLPNAME
*"     VALUE(IV_SHLPTYPE) TYPE  DDSHLPTYP DEFAULT 'SH'
*"     VALUE(IV_DEFAULT_SHLPNAME) TYPE  SHLPNAME DEFAULT ''
*"  CHANGING
*"     VALUE(ET_SHLP) TYPE  SHLP_DESCT
*"  EXCEPTIONS
*"      ERROR_READING_SHDESC
*"----------------------------------------------------------------------

 CHECK iv_shlpname IS NOT INITIAL.
 CLEAR: et_shlp.

 FIELD-SYMBOLS: <ls_shlp> LIKE LINE OF et_shlp.
 DATA: ls_shlp          LIKE LINE OF et_shlp,
       default_shlp     LIKE LINE OF et_shlp,
       default_shlpname TYPE dd30v-shlpname VALUE ''.

* get HELP description, by name

 CALL FUNCTION 'F4IF_GET_SHLP_DESCR'
   EXPORTING
     shlpname = iv_shlpname
     shlptype = iv_shlptype
   IMPORTING
     shlp     = ls_shlp.

 IF ls_shlp-shlpname IS INITIAL.
   RAISE error_reading_shdesc.
   EXIT.
 ENDIF.

* get default Search Help
 IF iv_default_shlpname IS NOT INITIAL.
   default_shlpname = iv_default_shlpname.
 ELSEIF ls_shlp-intdescr-issimple IS INITIAL.
   CALL FUNCTION 'F4TOOL_GET_DEF_SHLP'
     EXPORTING
*         USER     = SY-UNAME
       top_shlp = iv_shlpname
     IMPORTING
       def_shlp = default_shlpname.
 ENDIF.

* get elementary HELPs

 CALL FUNCTION 'F4IF_EXPAND_SEARCHHELP'
   EXPORTING
     shlp_top = ls_shlp
   IMPORTING
     shlp_tab = et_shlp.

* _todo: for some reason (bug?) SHLPOUTPUT not set in FIELDPROP of ET_SHLP
 LOOP AT et_shlp ASSIGNING <ls_shlp>.
   IF default_shlpname IS NOT INITIAL.
     IF <ls_shlp>-shlpname EQ default_shlpname.
       IF sy-tabix > 1.
         " Sometimes (e.g. PREM) the default elementary Help is not at the first
         " position, different from what we see in SE11 or in application.
         " Put it in the
         default_shlp = <ls_shlp>.
         DELETE et_shlp.
         CONTINUE.
       ENDIF.
       CLEAR default_shlpname.
     ENDIF.
   ENDIF.
   CALL FUNCTION 'F4IF_GET_SHLP_DESCR'
     EXPORTING
       shlpname = <ls_shlp>-shlpname
*         SHLPTYPE = 'SH'
     IMPORTING
       shlp     = ls_shlp.
   MOVE ls_shlp-fieldprop[] TO <ls_shlp>-fieldprop[].
 ENDLOOP.

 IF sy-subrc = 1.
    RAISE error_reading_shdesc.
 ENDIF.

 IF default_shlp IS NOT INITIAL.
   INSERT default_shlp INTO et_shlp INDEX 1.
 ENDIF.

 ENDFUNCTION.