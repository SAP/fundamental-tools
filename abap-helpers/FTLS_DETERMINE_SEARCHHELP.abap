FUNCTION FTLS_DETERMINE_SEARCHHELP .
*"----------------------------------------------------------------------
*"*"Lokale Schnittstelle:
*"  IMPORTING
*"     VALUE(IV_TABNAME) TYPE  DFIES-TABNAME
*"     VALUE(IV_FIELDNAME) TYPE  DFIES-FIELDNAME
*"  EXPORTING
*"     VALUE(ES_SHLP) TYPE  SHLP_DESCR
*"     VALUE(EV_SHLP_TITLE) TYPE  DDTEXT
*"----------------------------------------------------------------------

CLEAR: es_shlp, ev_shlp_title.

CALL FUNCTION 'F4IF_DETERMINE_SEARCHHELP'
  EXPORTING
    tabname           = iv_tabname
    fieldname         = iv_fieldname
*       selection_screen  = ' '
  IMPORTING
    shlp              = es_shlp
  EXCEPTIONS
    field_not_found   = 1
    no_help_for_field = 2
    inconsistent_help = 3
    OTHERS            = 4.

IF sy-subrc <> 0.
  MESSAGE ID sy-msgid TYPE sy-msgty NUMBER sy-msgno
          WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4.
ENDIF.

SELECT SINGLE ddtext FROM dd30v INTO ev_shlp_title
  WHERE shlpname EQ es_shlp-shlpname AND
        ddlanguage EQ sy-langu.

ENDFUNCTION.