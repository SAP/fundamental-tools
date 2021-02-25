" SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
"
" SPDX-License-Identifier: Apache-2.0

FUNCTION /coe/rbp_fe_shlp_get .
*"----------------------------------------------------------------------
*"*"Lokale Schnittstelle:
*"  IMPORTING
*"     VALUE(IV_SHLPNAME) TYPE  SHLPNAME
*"     VALUE(IV_SHLPTYPE) TYPE  DDSHLPTYP DEFAULT 'SH'
*"     VALUE(IV_MAXROWS) TYPE  I DEFAULT 0
*"  EXPORTING
*"     VALUE(EV_MAXROWS_EXCEEDED) TYPE  DDBOOL_D
*"  TABLES
*"      IT_SELOPT STRUCTURE  DDSHSELOPT
*"      ET_VALUE_DESC STRUCTURE  DFIES
*"      ET_VALUE_LIST STRUCTURE  DDSHRETVAL
*"----------------------------------------------------------------------

* Returns the Searh Help result set, ET_RESULT, for a given selection IT_SELOPT

*'''
*  The OPTION syntax (see SAP HELP)
*    Valid operators are "EQ", "NE", "GE", "GT", "LE", "LT", "CP", and "NP", if column high is initial,
*    and "BT", "NB", if column high is not initial.
*    For the options "CP" and "NP", the data type of the columns low and high must be c,
*    and special rules apply for entries on the selection screen.
*
*  The SIGN syntax (see SAP HELP)
*    I/E (include/exclude values)
*
*  Example:
*    shlpname  = iv_shlpname.
*    shlpfield = 'BSTKD'.
*    sign      = 'I'.
*    option    = 'EQ'.
*    low       = '*'.
*'''

DATA:
ls_shlp       TYPE  shlp_descr,
*    lt_records(1024) TYPE c OCCURS 0 WITH HEADER LINE,
*    lt_records    TYPE char1024 OCCURS 0,
ls_value_desc LIKE LINE OF et_value_desc,

offset        TYPE i, leng TYPE i.

FIELD-SYMBOLS:
*   <l_record> LIKE LINE OF lt_records,
<fs_fieldprop> LIKE LINE OF ls_shlp-fieldprop.

CLEAR: et_value_desc, et_value_list.

* get HELP descriptor
CALL FUNCTION 'F4IF_GET_SHLP_DESCR'
EXPORTING
  shlpname = iv_shlpname
  shlptype = iv_shlptype
IMPORTING
  shlp     = ls_shlp.

* get HELP result

* copy selection parameters
ls_shlp-selopt[] = it_selopt[].

* select output fields
LOOP AT ls_shlp-fieldprop ASSIGNING <fs_fieldprop>.
<fs_fieldprop>-shlpoutput = 'X'.
ENDLOOP.

CALL FUNCTION 'F4IF_SELECT_VALUES'
EXPORTING
  shlp             = ls_shlp
  maxrows          = iv_maxrows
* sort             = ' '
  call_shlp_exit   = 'X'
IMPORTING
  maxrows_exceeded = ev_maxrows_exceeded
TABLES
* record_tab       = lt_records "don't use
  recdescr_tab     = et_value_desc
  return_tab       = et_value_list.

* keep just in case dealing with offsets required again
** parse the result into output format
*  LOOP AT lt_records ASSIGNING <l_record>.
*    LOOP AT et_value_desc INTO ls_value_desc.
*      offset = ls_value_desc-offset.
*      offset = offset DIV 2.
*      leng = ls_value_desc-leng.
*      ls_result-name = ls_value_desc-fieldname.
*      ls_result-value = <l_record>+offset(leng).
*      APPEND ls_result TO et_value_list.
*    ENDLOOP.
*  ENDLOOP.

ENDFUNCTION.