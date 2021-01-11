# SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
#
# SPDX-License-Identifier: Apache-2.0

"""
    There are ca. 30 predefined ABAP Dictionary Data Types, maintained as domain values of DATATYPE_D data-element:
        https://help.sap.com/viewer/ec1c9c8191b74de98feb94001a95dd76/7.4.16/en-US/cf21f2e5446011d189700000e8322d00.html
    These DDIC types are mapped to internal ABAP Processor Data Types:
        https://help.sap.com/viewer/ec1c9c8191b74de98feb94001a95dd76/7.4.16/en-US/cf21f2f2446011d189700000e8322d00.html

    Int  DDIC    Description
    ---  ----    ---------------------------------------------------------
    N    ACCP    Posting period YYYYMM
    C    CHAR    Character String
    C    CLNT    Client
    C    CUKY    Currency key, referenced by CURR fields
    P    CURR    Currency field, stored as DEC
    D    DATS    Date field (YYYYMMDD) stored as char(8)
    P    DEC     Counter or amount field with comma and sign
    F    FLTP    Floating point number, accurate to 8 bytes
    b    INT1    1-byte integer, integer number <= 255
    s    INT2    2-byte integer, only for length field before LCHR or LRAW
    I    INT4    4-byte integer, integer number with sign
    C    LANG    Language key
    C    LCHR    Long character string, requires preceding INT2 field
    X    LRAW    Long byte string, requires preceding INT2 field
    N    NUMC    Character string with only digits
    s    PREC    Precision of a QUAN field
    P    QUAN    Quantity field, points to a unit field with format UNIT
    X    RAW     Uninterpreted sequence of bytes
    y    RSTR    Byte String of Variable Length
    g    SSTR    Short Character String of Variable Length
    g    STRG    Character String of Variable Length
    T    TIMS    Time field (hhmmss), stored as char(6)
    -    VARC    Long character string, no longer supported from Rel. 3.0
    C    UNIT    Unit key for QUAN fields


    Int  DDIC    Description
    ---  ----    ---------------------------------------------------------

    # Character

    C    CHAR    Character String
    C    CLNT    Client
    C    CUKY    Currency key, referenced by CURR fields
    C    LANG    Language key
    C    LCHR    Long character string, requires preceding INT2 field
    C    UNIT    Unit key for QUAN fields

    # Date, Time

    D    DATS    Date field (YYYYMMDD) stored as char(8)
    T    TIMS    Time field (hhmmss), stored as char(6)

    # Integer

    b    INT1    1-byte integer, integer number <= 255
    s    INT2    2-byte integer, only for length field before LCHR or LRAW
    I    INT4    4-byte integer, integer number with sign

    # Numeric

    N    ACCP    Posting period YYYYMM
    N    NUMC    Character string with only digits

    # Float

    F    FLTP    Floating point number, accurate to 8 bytes

    # Decimal

    P    DEC     Counter or amount field with comma and sign

    # Currency, Quantity

    P    CURR    Currency field, stored as DEC, points to currency field with format CUKY
    P    QUAN    Quantity field, points to a unit field with format UNIT

    s    PREC    Precision of a QUAN field

    # String

    g    SSTR    Short Character String of Variable Length
    g    STRG    Character String of Variable Length

    # Bytes

    X    RAW     Uninterpreted sequence of bytes
    X    LRAW    Long byte string, requires preceding INT2 field

    y    RSTR    Byte String of Variable Length


    ?    VARC    Long character string, no longer supported from Rel. 3.0

    This script parses RFM metadata and generates html5 fragments (ui elements) and Javascript fragments accordingly,
    like models initialization, table column headers.

    Character Strings in ABAP
    https://help.sap.com/doc/abapdocu_750_index_htm/7.50/en-US/index.htm?file=abenddic_builtin_types_intro.htm

    Character-like data objects contain character strings. A character-like data object either has a character-like
    data type (c, n, or string) or it is a date/time type (d or t), or it is a flat structure with exclusively
    character-like components.

    ABAP supports the character format UCS-2 and a character always occupies two bytes. This ensures that all
    characters from the system code page UTF-16 are handled correctly (except for those in the surrogate area.
    These characters occupy four bytes and hence are handled as two characters by ABAP. This can produce unexpected
    results when cutting character strings or comparing individual characters in character sets.
"""

import logging


def get_ddic_js(
    INPUT_TYPE_BINARY_TAG="checkbox",
    DATE_TAGNAME="date",
    TIME_TAGNAME="time",
    TEXT_TAGNAME="text",
):

    DDIC_JS = {
        # Posting period YYYYMM
        "ACCP": {
            "type": "string",
            "format": "accp",
            "html-tag": "input",
            "initial": '""',
            "comment": "YYYYMM",
        },
        # Client 000-999
        "CLNT": {
            "type": "string",
            "format": "numeric",
            "html-tag": "input",
            "initial": '""',
            "comment": "000 to 999",
        },
        # Language 1 char key
        "LANG": {
            "type": "string",
            "format": "lang",
            "html-tag": "lang",
            "initial": '""',
            "comment": "1-char lang",
        },
        # Character String
        "CHAR": {
            "type": "string",
            "html-tag": "input",
            "initial": '""',
            "comment": "string",
        },
        # Date field (YYYYMMDD) stored as char(8)
        "DATS": {
            "type": "string",
            "format": "date",
            "html-tag": DATE_TAGNAME,
            "initial": '""',
            "comment": "YYYYMMDD",
        },
        # Time field (hhmmss), stored as char(6)
        "TIMS": {
            "type": "string",
            "format": "time",
            "html-tag": TIME_TAGNAME,
            "initial": '""',
            "comment": "HHMMSS",
        },
        # Boolean 1 char
        "BOOLEAN": {
            "type": "boolean",
            "html-tag": INPUT_TYPE_BINARY_TAG,
            "initial": '""',
            "comment": "Boolean",
        },
        # Character string with only digits
        "NUMC": {
            "type": "string",
            "format": "numeric",
            "html-tag": "input",
            "initial": '""',
            "comment": "Numeric string",
        },
        # Floating point number, accurate to 8 bytes
        "FLTP": {
            "type": "number",
            "format": "float",
            "html-tag": "input",
            "initial": "0.0",
            "comment": "Float",
        },
        # 1-byte integer, integer number <= 255
        "INT1": {
            "type": "number",
            "format": "integer",
            "html-tag": "input",
            "initial": "0",
            "comment": "1-byte integer",
        },
        # 2-byte integer, only for length field before LCHR or LRAW
        "INT2": {
            "type": "number",
            "format": "integer",
            "html-tag": "input",
            "initial": "0",
            "comment": "2-byte integer",
        },
        # 4-byte integer, integer number with sign
        "INT4": {
            "type": "number",
            "format": "integer",
            "html-tag": "input",
            "initial": "0",
            "comment": "4-byte integer",
        },
        # 8-byte integer, integer number with sign
        "INT8": {
            "type": "number",
            "format": "integer",
            "html-tag": "input",
            "initial": "0",
            "comment": "8-byte integer",
        },
        # Counter or amount field with comma and sign
        "DEC": {
            "type": "number",
            "format": "decimal",
            "html-tag": "input",
            "initial": "0",
            "comment": "Decimal",
        },
        # Currency field, stored as DEC, points to currency field with format CUKY
        "CURR": {
            "type": "number",
            "format": "currency",
            "html-tag": "input",
            "initial": "0.0",
            "comment": "Currency",
        },
        # Quantity field, points to a unit field with format UNIT
        "QUAN": {
            "type": "number",
            "format": "quantity",
            "html-tag": "input",
            "initial": "0.0",
            "comment": "Quantity",
        },
        # Currency key, referenced by CURR fields
        "CUKY": {
            "type": "string",
            "html-tag": "input",
            "initial": '""',
            "comment": "Currency key",
        },
        # Unit key for QUAN fields
        "UNIT": {
            "type": "string",
            "html-tag": "input",
            "initial": '""',
            "comment": "Quantity UoM",
        },
        # Precision of a QUAN field
        "PREC": {"type": "number", "format": "integer", "html-tag": "number"},
        "D16R": {
            "type": "number",
            "format": "decimal",
            "html-tag": "input",
            "initial": "0.0",
            "comment": "Decimal float",
        },
        "D34R": {
            "type": "number",
            "format": "decimal",
            "html-tag": "input",
            "initial": "0.0",
            "comment": "Decimal float",
        },
        "DECFLOAT16": {
            "type": "number",
            "format": "decimal",
            "html-tag": "input",
            "initial": "0.0",
            "comment": "Decimal float",
        },
        "DECFLOAT34": {
            "type": "number",
            "format": "decimal",
            "html-tag": "input",
            "initial": "0.0",
            "comment": "Decimal float",
        },
        # Long character string, requires preceding INT2 field
        "LCHR": {"type": "string", "html-tag": TEXT_TAGNAME},
        # Byte String of Variable Length
        "RSTR": {"type": "string", "html-tag": TEXT_TAGNAME},
        # Short Character String of Variable Length
        "SSTR": {"type": "string", "html-tag": TEXT_TAGNAME},
        # Character String of Variable Length
        "STRG": {"type": "string", "html-tag": TEXT_TAGNAME},
        # Uninterpreted sequence of bytes
        "RAW": {
            "type": "string",
            "html-tag": TEXT_TAGNAME,
            "initial": "bytes()",
            "comment": "Binary string",
        },
        # Long byte string, requires preceding INT2 field
        "LRAW": {"type": "string", "html-tag": TEXT_TAGNAME},
        # native
        "STRING": {
            "type": "string",
            "html-tag": TEXT_TAGNAME,
            "initial": '""',
            "comment": "String",
        },
    }
    return DDIC_JS


DEFAULT_OUTPUT_FOLDER = "../model"

LOGGING_LEVEL = {
    "NOTSET": logging.NOTSET,
    "DEBUG": logging.DEBUG,
    "INFO": logging.INFO,
    "WARNING": logging.WARNING,
    "ERROR": logging.ERROR,
    "CRITICAL": logging.CRITICAL,
}


# T002, T002C
all_languages = {
    # iso2
    "ar": "AR - عربي",
    "bg": "BG - Български",
    "ca": "CA - Català",
    "cs": "CS - Čeština",
    "da": "DA - Dansk",
    "de": "DE - Deutsch",
    "el": "EL - Ελληνικά",
    "en": "EN - English",
    "es": "ES - Español",
    "et": "ET - Eesti",
    "fi": "FI - Suomi",
    "fr": "FR - Français",
    "he": "HE - עברית",
    "hi": "HI - हिंदी",
    "hr": "HR - Hrvatski",
    "hu": "HU - Magyar",
    "it": "IT - Italiano",
    "ja": "JA - 日本語",
    "kk": "KK - Қазақ",
    "ko": "KO - 한국어",
    "lt": "LT - Lietuvių",
    "lv": "LV - Latviešu",
    "nl": "NL - Nederlands",
    "no": "NO - Norsk",
    "pl": "PL - polski",
    "pt": "PT - Português",
    "ro": "RO - Română",
    "ru": "RU - Русский",
    "sh": "SH - Srpski (Lat.)",
    "sk": "SK - Slovenčina",
    "sl": "SL - Slovenščina",
    "sv": "SV - Svenska",
    "th": "TH - Thai",
    "tr": "TR - Türkçe",
    "uk": "UK - Українська",
    "vi": "VI - Việt Nam",
    "zf": "ZF - 繁體中文",
    "zh": "ZH - 中文",
}

iso2_to_LANGU = {"en": "E", "de": "D", "nl": "N", "es": "S", "jp": "J"}
