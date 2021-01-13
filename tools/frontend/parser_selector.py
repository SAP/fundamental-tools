import argparse
from collections import OrderedDict

from .frontend_parser import ModelParser
from .parser_aurelia import ParserAurelia
from .parser_fast_ngx import ParserFastAngular
from .parser_fundamental_ngx import ParserFundamentalAngular
from .parser_fundamental_react import ParserFundamentalReact
from .parser_fundamental_vue import ParserFundamentalVue
from .parser_ui5_react import ParserUi5React

from backend.constants import DEFAULT_OUTPUT_FOLDER

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


def get_frontend_parser(args, annotations=None):
    if "ui" in vars(args):
        if args.ui in SUPPORTED_FRAMEWORKS:
            return SUPPORTED_FRAMEWORKS[args.ui](args, annotations)
        else:
            raise ValueError(f"Frontend not supported: {args.ui}")
    else:
        return ModelParser(args, annotations)


def get_arg_parser():
    arg_usage = (
        """python frontend.py <ui framework> <rfm set name> [<option>]
where <ui> can be:\n    """
        + "\n    ".join(SUPPORTED_FRAMEWORKS.keys())
        + """
and <option> can be:
    -o, --output folder Model output folder, default: "out"
    --loglevel          Log level: "info" or "debug"
"""
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
        "rfm_set",
        nargs="?",
        default=None,
        type=str,
        help="rfm set name",
    )
    arg_parser.add_argument(
        "-o",
        "--output_folder",
        dest="output_folder",
        default=DEFAULT_OUTPUT_FOLDER,
        help="Output folder",
    )
    arg_parser.add_argument(
        "-d", "--ddic", dest="no_ddic", action="store_true", help="no ddic annotations"
    )
    arg_parser.add_argument(
        "-t", "--type", dest="no_type", action="store_true", help="no type annotations"
    )
    arg_parser.add_argument(
        "--loglevel",
        default=None,
        dest="log_level",
        help="log level",
        choices=["info", "debug"],
    )
    return arg_parser
