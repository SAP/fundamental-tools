## Business Logic Exposure

Using Dynpro/WebDynpro based transactions SAP users can run business processes implemented in SAP system. To make the same business logic available for on-premise or cloud consumption by SAP Fundamental UI, it shall be encapsulated and exposed. Assets exposed this way can be:

- Business objects and methods

  - Real BO model like RAP: [ABAP RESTful Application Programming Model](https://help.sap.com/viewer/65de2977205c403bbc107264b8eccf4b/LATEST/en-US/33a301e3fff5404e89f090910f7bd978.html)
  - Virtual BO model, like set of BAPIs or remote enable function modules (RFM) for example
  - Freestyle models like GOL, BOL, SPI ...
  - Mixed model (of above)

- Technical objects and methods
  - Configuration (customizing)
  - Dynamic UI layout configurations etc.

The exposure model is flexible with few simple guidelines:

1. As much as possible business logic shall be exposed, maximizing the functional completness and re-usability

2. In a flexible, convenient, consistent and performant manner, simplifying the consumption at next levels

3. Factors like timeline, ABAP code maintainability and refactoring effors shall be considered when keeping the old ABAP code or writing the new one.

### ABAP Model How-To

Use RAP, CDS, BAPIs or any other model, sustainable and maintainable in a time interval of interest, following few practical considerations:

- The ABAP model does not have to be perfect. It should be as much as possible consistent, versatile and performant, offering a useful set of business functions.

- Inconsistencies, like different field names used in CREATE and READ ABAP structures for example, can be rectified at higher levels. Try not to propagate such inconsistencies, making the ABAP model as good as possible and practically feasible.

When exposing older logic:

- Check if ABAP model covers the required functional scope, check input/output RFM fields if needed

- If required fields are not used in most scenarios, set default values to keep the RFM generic. Defaults must be otherwise set in Web model and in both cases must be documented.

- Try to make RFMs as generic as possible and easily extendible, keeping the focus on performance

- In general, if less RFMs used, the “heavier” they are (more complex, more parameters) and less frontend/backend roundtrips needed. If more RFMs used, they are simpler and faster and need more roundtrips. According to practical experience, it does not really matter. The RFM structure of ABAP model depends on particular scenario and the simple goal is to expose as much as possible of business functionality, via consistent and performant set of RFMs.

- Use the same names and parameter type for the same entity. If the object header is called ES_HEADER (or HEADER in ET_HEADER) when reading data, use the IS_HEADER (IT_HEADER) when creating data, not the IS_OBJEHEADER for example. If too much efforts required to apply this rule, the Web model handle, only the code readability suffers a bit.

- Use as much as possible of already existing DDIC elements and structures, where Check Tables, Search Helps and Domain Values are already maintained. Web can reuse these metadata to annotate ui elements, shortening the frontend development lead time. If no Search Helps / Check Tables / Domain Values maintain in the backend, but nevertheless relevant, they can be easily added in Web later on. The best practice is getting them from the backend, saving efforts in later refactoring.

Here one technical checklist for releasing RFM based ABAP model, grown out of projects' experience:

| RFM Release Checklist                                                                       | OK? |
| ------------------------------------------------------------------------------------------- | --- |
| RFM parameters aligned with Functional Design?                                              |     |
| RFM shall be generic and if the use-case specific, the use-case specialization is provided? |     |
| Mandatory parameters indicated?                                                             |     |
| Default values described and where they are set, at ABAP or Web level?                      |     |
| Dependencies between RFMs described (if any)?                                               |     |
| Backend caching considerations described (if any)?                                          |     |
| Conversion Exits implemented?                                                               |     |
| At least one test case in se37 or Web App Server?                                           |     |
| Functionality and parameters documented in SE37 (if documentation agreed in the project)    |     |

### Conversion Exits

Conversion exits are not automatically triggered in RFC protocol and must be internally invoked in
RFMs exposing ABAP API. The input conversion exits shall be implemented
at the beginning of RFM, transforming input parameters to internal representation. Output conversion
exits shall be added after the internal business logic is executed, to transform the core business logic results to
external representation.

There are at least three possibilities how to find out which ABAP API fields relevant for conversions:

[fundamental-tools#conversion-exits](https://github.com/SAP/fundamental-tools#conversion-exits)

Once the fields are known, the conversion can be quickly added manually for each field and that is the recommended way.

Also the generic solution is possible but not recommended because more complicated and slower, given here just as an experimental example:

```abap
"
" conversion to internal representation
"
cl_conversion_exits=>do_conversion_in( CHANGING c_data = iv_notif_type ).
cl_conversion_exits=>do_conversion_in( CHANGING c_data = is_notif_header_in ).
cl_conversion_exits=>do_conversion_in( CHANGING c_data = ct_key_relationships ).
cl_conversion_exits=>do_conversion_in( CHANGING c_data = ct_notitem ).
cl_conversion_exits=>do_conversion_in( CHANGING c_data = ct_notifcaus ).
cl_conversion_exits=>do_conversion_in( CHANGING c_data = ct_notifactv ).
cl_conversion_exits=>do_conversion_in( CHANGING c_data = ct_notiftask ).
cl_conversion_exits=>do_conversion_in( CHANGING c_data = ct_notifpartnr ).
cl_conversion_exits=>do_conversion_in( CHANGING c_data = ct_extensionin ).

"
" core business logic
"
rfm_create_notification_internal(
    EXPORTING
        iv_notif_type        = iv_notif_type
        is_notif_header_in   = is_notif_header_in
        iv_new_notice        = iv_new_notice
    IMPORTING
        es_notif_header_out  = es_notif_header_out
        et_notice            = et_notice
        et_sysstatus         = et_sysstatus
        et_return            = et_return
    CHANGING
        ct_notitem           = ct_notitem
        ct_notifcaus         = ct_notifcaus
        ct_notifactv         = ct_notifactv
        ct_notiftask         = ct_notiftask
        ct_notifpartnr       = ct_notifpartnr
        ct_extensionin       = ct_extensionin
        ct_key_relationships = ct_key_relationships
        ct_extensionout      = ct_extensionout ).

"
" conversion to external representation
"
cl_conversion_exits=>do_conversion_out( CHANGING c_data = es_notif_header_out ).
cl_conversion_exits=>do_conversion_out( CHANGING c_data = ct_notitem ).
cl_conversion_exits=>do_conversion_out( CHANGING c_data = ct_notifcaus ).
cl_conversion_exits=>do_conversion_out( CHANGING c_data = ct_notifactv ).
cl_conversion_exits=>do_conversion_out( CHANGING c_data = ct_notiftask ).
cl_conversion_exits=>do_conversion_out( CHANGING c_data = ct_notifpartnr ).
cl_conversion_exits=>do_conversion_out( CHANGING c_data = ct_extensionout ).
cl_conversion_exits=>do_conversion_out( CHANGING c_data = ct_key_relationships ).
```

The generic example is not supported and provided just as an example here. The recommended implementation is manual:

```abap
METHOD do_conversion_in.
    do_conversion( EXPORTING iv_type = 'INPUT'
                   CHANGING  c_data  = c_data ).
ENDMETHOD.

METHOD do_conversion_out.
    do_conversion( EXPORTING iv_type = 'OUTPUT'
                   CHANGING  c_data  = c_data ).
ENDMETHOD.

METHOD do_conversion.
    DATA lv_fname       TYPE string.
    DATA lt_ptab        TYPE abap_func_parmbind_tab.
    DATA ls_ptab        TYPE abap_func_parmbind.
    DATA lr_element     TYPE REF TO data.

    CHECK c_data IS NOT INITIAL.

    CASE TYPE OF cl_abap_typedescr=>describe_by_data( c_data ).
      WHEN TYPE cl_abap_elemdescr INTO DATA(lo_elemdescr).
        "it is only a single value
        CHECK lo_elemdescr->is_ddic_type( ) = abap_true.
        DATA(lv_convexit) = lo_elemdescr->get_ddic_field( )-convexit.
        CHECK lv_convexit IS NOT INITIAL.
        CASE lv_convexit.
          WHEN 'ALPHA'.
            CASE iv_type.
              WHEN 'INPUT'.
                c_data = |{ c_data ALPHA = IN }|.

              WHEN 'OUTPUT'.
                c_data = |{ c_data ALPHA = OUT }|.

            ENDCASE.

          WHEN OTHERS.
            lv_fname = |CONVERSION_EXIT_{ lo_elemdescr->get_ddic_field( )-convexit }_{ iv_type }|.

            "Exporting
            ls_ptab-name = 'INPUT'.
            ls_ptab-kind = abap_func_exporting.
            GET REFERENCE OF c_data INTO ls_ptab-value.
            INSERT ls_ptab INTO TABLE lt_ptab.

            "Importing
            ls_ptab-name = 'OUTPUT'.
            ls_ptab-kind = abap_func_importing.
            GET REFERENCE OF c_data INTO ls_ptab-value.
            INSERT ls_ptab INTO TABLE lt_ptab.

            CALL FUNCTION lv_fname
              PARAMETER-TABLE
              lt_ptab.
            IF sy-subrc NE 0.
              "should always work
              ASSERT 1 = 2.
            ENDIF.
        ENDCASE.

      WHEN TYPE cl_abap_structdescr INTO DATA(lo_structdescr).
        LOOP AT lo_structdescr->get_included_view( ) INTO DATA(ls_comp).
          ASSIGN COMPONENT ls_comp-name OF STRUCTURE c_data TO FIELD-SYMBOL(<lv_field>).
          "<lv_field> is always assigned!
          do_conversion( EXPORTING iv_type = iv_type
                         CHANGING c_data = <lv_field> ).
        ENDLOOP.

      WHEN TYPE cl_abap_tabledescr INTO DATA(lo_tabledescr).
        DATA lr_table TYPE REF TO data.
        FIELD-SYMBOLS <lt_table>    TYPE ANY TABLE.
        CREATE DATA lr_table LIKE c_data.
        ASSIGN lr_table->* TO <lt_table>.
        <lt_table> = c_data.
        DATA(lt_comp) = CAST cl_abap_structdescr( lo_tabledescr->get_table_line_type( ) )->get_included_view( ).
        LOOP AT <lt_table> ASSIGNING FIELD-SYMBOL(<ls_table_line>).
          LOOP AT lt_comp INTO ls_comp.
            ASSIGN COMPONENT ls_comp-name OF STRUCTURE <ls_table_line> TO <lv_field>.
            "<lv_field> is always assigned!
            do_conversion( EXPORTING iv_type = iv_type
                           CHANGING c_data = <lv_field> ).
          ENDLOOP.
        ENDLOOP.
        c_data = <lt_table>.

    ENDCASE.
  ENDMETHOD.
```
