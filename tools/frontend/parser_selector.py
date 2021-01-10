import argparse
from collections import OrderedDict

from .parser_aurelia import ParserAurelia
from .parser_fast_ngx import ParserFastAngular
from .parser_fundamental_ngx import ParserFundamentalAngular
from .parser_fundamental_react import ParserFundamentalReact
from .parser_fundamental_vue import ParserFundamentalVue
from .parser_ui5_react import ParserUi5React

SUPPORTED_FRAMEWORKS = OrderedDict(
    {
        "aurelia": ParserAurelia,
        "fast-ngx": ParserFastAngular,
        "fundamental-ngx": ParserFundamentalAngular,
        "fundamental-react": ParserFundamentalReact,
        "fundamental-vue": ParserFundamentalVue,
        "ui5-react": ParserUi5React,
    }
)


def get_frontend_parser(rfm_set, args):
    try:
        return SUPPORTED_FRAMEWORKS[args.ui](rfm_set, args)
    except Exception as ex:
        raise ValueError(f"Frontend not supported: {args.ui}")


def get_arg_parser():

    arg_usage = """python frontend.py <ui> <rfm set> [<options>]
       where <ui> can be:\n           """ + "\n           ".join(
        SUPPORTED_FRAMEWORKS.keys()
    )

    arg_parser = argparse.ArgumentParser(
        usage=arg_usage,
        description="sap ui frontend templates",
    )
    arg_parser.add_argument(
        "ui",
        type=str,
        help="ui framework",
        choices=SUPPORTED_FRAMEWORKS,
    )
    arg_parser.add_argument(
        "rfmset",
        nargs="?",
        default=None,
        type=str,
        help="rfm set name",
    )
    arg_parser.add_argument(
        "-d", "--ddic",
        dest="no_ddic",
        action="store_true",
        help="no ddic annotations"
    )
    arg_parser.add_argument(
        "-t", "--type",
        dest="no_type",
        action="store_true",
        help="no type annotations"
    )
    arg_parser.add_argument("-l", "--loglevel", default=None, dest="log_level", help="log level", choices=['info', 'debug'])
    return arg_parser