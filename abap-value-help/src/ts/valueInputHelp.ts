// SPDX-FileCopyrightText: 2014 SAP SE Srdjan Boskovic <srdjan.boskovic@sap.com>
//
// SPDX-License-Identifier: Apache-2.0

/*
Search Help Types
SH  Search help (default)
CH  Check table
CT  Check table with text table
FV  Fixed values for domains
DV  Fixed values from flow logic
# CA  Calendar help
# CL  Time help
SR  Search help for data element (temporary)
MC  Matchcode
MI  MaPtchcode ID
IN  Internal Table
*/

import { Client, RfcStructure, RfcTable } from "node-rfc";

import loglevel from "loglevel";

const log = loglevel;
log.setDefaultLevel(log.levels.INFO);
export { log };

export type ShlpApiType = {
  determine: string;
  FV_descriptor_get: string;
  CT_descriptor_get: string;
  SH_descriptor_get: string;
  search: string;
};

export type ShlpIdentType = {
  type: string;
  name: string;
};

export type ElementaryHelpType = {
  INTDESCR: RfcStructure;
  SCRLENMAX: number;
  SHLPOUTPUT: string;
  ALLOUTPUTS: string[];
  FIELDDESCR: RfcTable;
};

export type ShlpDefaultsType = Record<string, string>[];

export type ShlpDescriptorType = Record<string, ElementaryHelpType>;

export type SearchResultHeadersType = Record<string, [string, number]>;

export type ShlpSelectOptions = string[][];

export type ShlpSearchOptions = {
  maxRows?: number;
  compact?: boolean;
};

type ShlpSelectOptionsType = {
  SHLPNAME: string;
  SHLPFIELD: string;
  SIGN: string;
  OPTION: string;
  LOW: string;
  HIGH: string;
};

export type SearchResultHeaderType = {
  field: string;
  len: number;
  abaptype: string;
  title: string;
  text_align: string;
  position: string;
};

export type SearchResultLineType = string[] | Record<string, string>;

export type SearchResultType = {
  search_result: SearchResultLineType[];
  shlpoutput: string;
  maxrows_exceeded: boolean;
  headers: SearchResultHeaderType[];
  desc: RfcTable;
};

export function isEmpty(obj?: unknown[] | Record<string, unknown>): boolean {
  if (obj === undefined) return true;
  if (Array.isArray(obj)) return obj.length === 0;
  return Object.keys(obj).length === 0;
}

export type ValueHelpError = Record<string, unknown>;

export type FVDescriptorType = {
  valueInputType: string;
  count: number;
  values: Record<string, string>;
  customCheckbox?: boolean;
};

export type CTDescriptorType = {
  valueFields: Record<string, string>[];
  displayFields: string[];
};

export type EHDescriptorType = {
  blacklist?: "selection" | "search";
  selectionDescriptor?: ElementaryHelpType | ValueHelpError;
  resultDescriptor?: RfcTable | ValueHelpError;
  resultLine?: RfcTable;
};

export type DescriptorType =
  | FVDescriptorType
  | CTDescriptorType
  | EHDescriptorType;

export interface IValueHelpFound {
  id: string;
  SHLPTYPE: string;
  SHLPNAME: string;
  title: string;
  //descriptor: DescriptorType;
}

export type ElementaryHelpsList = Record<
  string,
  { title: string; blacklist?: { selection: string } | { search: string } }
>;

export type ValueHelpType = {
  title: string;
  elementaryHelps?: ElementaryHelpsList[];
};

// export interface IValueHelpDetermine {
//   DATATYPE: string;
//   DOMNAME: string;
//   TABNAME: string;
//   FIELDNAME: string;
//   F4AVAILABL: string;
//   CHECKTABLE: string;
// }

export class ValueInputHelp {
  private client = {} as Client;
  private shlpApi: ShlpApiType = {
    determine: "/COE/RBP_FE_SHLP_DETERM_SEARCH",
    FV_descriptor_get: "/COE/RBP_FE_SHLP_DOMVALUES_GET",
    CT_descriptor_get: "FDT_GET_DDIC_METADATA",
    SH_descriptor_get: "/COE/RBP_FE_SHLP_METADATA_GET",
    search: "/COE/RBP_FE_SHLP_GET",
  };
  private _userParameters: RfcTable = [];

  private FixedValues: Record<string, RfcTable> = {};
  private Descriptors: Record<string, RfcTable> = {};
  private Elementary: Record<string, ElementaryHelpType> = {};
  private VHFieldCache: Record<string, IValueHelpFound> = {};

  constructor(
    client: Client,
    shlpApi: ShlpApiType,
    userParameters: RfcTable = []
  ) {
    this.client = client;
    this.shlpApi = shlpApi;
    this._userParameters = userParameters;
  }

  static async new(
    client: Client,
    shlpApi: ShlpApiType,
    userParameters?: RfcTable
  ): Promise<ValueInputHelp> {
    if (!client.alive) {
      await client.open();
    }
    if (!userParameters) {
      userParameters = (
        await client.call("BAPI_USER_GET_DETAIL", {
          USERNAME: client.connectionInfo.user,
        })
      ).PARAMETER as RfcTable;
    }
    return new ValueInputHelp(client, shlpApi, userParameters);
  }

  async getDomainValues(shlpName: string): Promise<RfcTable> {
    if (!this.FixedValues[shlpName]) {
      this.FixedValues[shlpName] = (
        await this.client.call(this.shlpApi.FV_descriptor_get, {
          IV_DOMNAME: shlpName,
        })
      ).ET_VALUES as RfcTable;
    }
    return this.FixedValues[shlpName];
  }

  async getDescriptors(
    helpFound: IValueHelpFound,
    Helps: Record<string, ValueHelpType>,
    Descriptors: Record<string, DescriptorType>,
    SelectionFields?: Record<string, RfcStructure>
  ): Promise<void> {
    if (helpFound.id in Descriptors) {
      return;
    }

    switch (helpFound.SHLPTYPE) {
      //
      // FV
      //
      case "FV": {
        const shlp_values = (
          await this.client.call(this.shlpApi.FV_descriptor_get as string, {
            IV_DOMNAME: helpFound.SHLPNAME,
          })
        )["ET_VALUES"] as RfcTable;
        const domainValues: Record<string, string> = {};
        for (const line of shlp_values) {
          domainValues[line["DOMVALUE_L"] as string] = line["DDTEXT"] as string;
        }

        Descriptors[helpFound.id] = {
          valueInputType: shlp_values.length > 2 ? "list" : "binary",
          count: Object.keys(domainValues).length,
          values: domainValues,
        };
        if (
          shlp_values.length === 2 &&
          !("" in domainValues && "X" in domainValues)
        ) {
          (Descriptors[helpFound.id] as FVDescriptorType).customCheckbox = true;
        }
        break;
      }

      //
      // CH, CT
      //
      case "CH":
      case "CT": {
        const metadata = (
          await this.client.call(this.shlpApi.CT_descriptor_get, {
            IV_TYPENAME: helpFound.SHLPNAME,
          })
        )["ES_METADATA"] as RfcStructure;
        if (!helpFound.title) helpFound.title = metadata.TEXT as string;
        if (!helpFound.title) helpFound.title = metadata.SHORT_TEXT as string;
        if (!helpFound.title) helpFound.title = helpFound.id;
        const tab_fields = (
          await this.client.call("BDL_DDIF_TABL_GET", {
            NAME: helpFound.SHLPNAME,
          })
        ).DD03P_TAB as RfcTable;
        const valueFields: Record<string, string>[] = [];
        const displayFields = [];
        for (const tf of tab_fields) {
          if (
            tf["KEYFLAG"] &&
            tf["FIELDNAME"] !== ".INCLUDE" &&
            tf["ROLLNAME"] != "MANDT"
          )
            valueFields.push(tf as Record<string, string>);
        }
        Descriptors[helpFound.id] = {
          valueFields: valueFields,
          displayFields: displayFields,
        };
        break;
      }

      //
      // SH
      //
      case "SH": {
        let ET_SHLP: RfcTable = [];

        try {
          ET_SHLP = (
            await this.client.call(this.shlpApi.SH_descriptor_get, {
              IV_SHLPTYPE: helpFound.SHLPTYPE,
              IV_SHLPNAME: helpFound.SHLPNAME,
            })
          ).ET_SHLP as RfcTable;
        } catch (ex) {
          if (!Descriptors[helpFound.id]) {
            Descriptors[helpFound.id] = {
              blacklist: "selection",
              selectionDescriptor: ex,
            };
          }
          log.debug(`Descriptor selection error`, helpFound.id, ex.message);
        }

        // elementary helps
        const elementaryList: ElementaryHelpsList[] = [];

        for (const desc of ET_SHLP) {
          // elementary id may differ
          const shlp_key =
            ET_SHLP.length === 1
              ? helpFound.id
              : `${desc.SHLPTYPE} ${desc.SHLPNAME}`;

          const title = (desc.INTDESCR as RfcStructure).DDTEXT as string;

          // elementary help
          if (!Helps[shlp_key]) {
            Helps[shlp_key] = { title: title };
          }

          // elementary descriptor selection
          if (!(shlp_key in Descriptors)) {
            const D: EHDescriptorType = {
              selectionDescriptor: ValueInputHelp.elementary(desc),
            };
            Descriptors[shlp_key] = D;

            // elementary descriptor search result
            if (!D.blacklist) {
              try {
                const searchResult = await this.client.call(
                  this.shlpApi.search as string,
                  {
                    IV_SHLPTYPE: desc.SHLPTYPE,
                    IV_SHLPNAME: desc.SHLPNAME,
                    IV_MAXROWS: 10,
                  }
                );
                // value descriptor
                D.resultDescriptor = searchResult.ET_VALUE_DESC as RfcTable;

                const value_list = searchResult.ET_VALUE_LIST as RfcTable;
                if (value_list.length > 0) {
                  const record_pos = value_list[0].RECORDPOS;
                  let count = 0;
                  for (const value_line of value_list) {
                    if (record_pos !== value_line.RECORDPOS) {
                      break;
                    } else {
                      count++;
                      //delete value_line.SHLPNAME;
                      //delete value_line.RECORDPOS;
                    }
                  }
                  // search result "descriptor"
                  D.resultLine = (searchResult.ET_VALUE_LIST as RfcTable).slice(
                    0,
                    count
                  );
                }
              } catch (ex) {
                D.blacklist = "search";
                D.resultDescriptor = ex;
                log.debug(`Value Help search error: ${shlp_key} `, ex);
              } finally {
                const el: ElementaryHelpsList = {
                  [shlp_key]: { title: title },
                };
                if (D.blacklist) {
                  el[shlp_key].blacklist = {
                    [D.blacklist]: (D.resultDescriptor as ValueHelpError)
                      .message as string,
                  };
                }
                elementaryList.push(el);
              }
            }
          } else {
            elementaryList.push({ [shlp_key]: { title: title } });
          }
        }

        // consistency check
        if (ET_SHLP.length > 1) {
          if (!Helps[helpFound.id]["elementaryHelps"]) {
            Helps[helpFound.id]["elementaryHelps"] = elementaryList;
          }
        } else {
          if (helpFound.id && !Descriptors[helpFound.id]) {
            log.error("Descriptor not saved for", helpFound.id);
          }
        }

        if (SelectionFields) {
          ET_SHLP.map((desc) => {
            (desc.FIELDDESCR as RfcTable).map((field) => {
              // Collect selection fields
              if (field.TABNAME && field.FIELDNAME) {
                SelectionFields[`${field.TABNAME} ${field.FIELDNAME}`] = field; // as IValueHelpDetermine
              }
            });
          });
        }
        // log.info(
        //   helpFound.id,
        //   helpFound.title,
        //   `:`,
        //   Object.keys(SelectionFields).length
        // );

        break;
      }

      default: {
        throw new Error(
          `Value Help type not supported: ${helpFound.SHLPTYPE} ${helpFound.SHLPNAME}`
        );
      }
    }
  }

  async valueHelpForField(
    dfies: RfcStructure,
    Helps: Record<string, ValueHelpType>,
    Descriptors: Record<string, DescriptorType>,
    getSHdesc: boolean,
    SelectionFields?: Record<string, RfcStructure>
  ): Promise<IValueHelpFound> {
    const helpFound = {} as IValueHelpFound;

    const ddicId = `${dfies.TABNAME}:${dfies.FIELDNAME}`;

    if (this.VHFieldCache[ddicId]) {
      return this.VHFieldCache[ddicId];
    }

    if (
      dfies.F4AVAILABL &&
      !["DATS", "TIMS"].includes(dfies.DATATYPE as string)
    ) {
      // F4 Help
      const R = await this.client.call(this.shlpApi.determine, {
        IV_TABNAME: dfies.TABNAME,
        IV_FIELDNAME: dfies.FIELDNAME,
      });
      const ES_SHLP = R.ES_SHLP as RfcStructure;
      helpFound.SHLPTYPE = ES_SHLP.SHLPTYPE as string;
      helpFound.SHLPNAME = ES_SHLP.SHLPNAME as string;
      helpFound.title = ES_SHLP.INTDESCR["TITLE"] as string;
      if (!helpFound.title) helpFound.title = R.EV_SHLP_TITLE as string;
      if (!helpFound.title) helpFound.title = helpFound.id;
    }

    // add domain CT if no other shelp found
    if (dfies["DOMNAME"] && !helpFound.SHLPTYPE) {
      const DD01V_WA_A = (
        await this.client.call("DD_DOMA_GET", {
          DOMAIN_NAME: dfies.DOMNAME,
        })
      ).DD01V_WA_A as RfcStructure;
      if (DD01V_WA_A.ENTITYTAB as string) {
        helpFound.SHLPTYPE = "CT";
        helpFound.SHLPNAME = DD01V_WA_A.ENTITYTAB as string;
        helpFound.title = DD01V_WA_A.DDTEXT as string;
      }
    }

    // add search help if not maintained for quantity, currency, language
    if (!helpFound.SHLPTYPE) {
      if (dfies.DATATYPE === "CUKY") {
        helpFound.SHLPTYPE = "CT";
        helpFound.SHLPNAME = "TCURC";
        helpFound.title = "Currency help (added)";
      } else if (dfies.DATATYPE === "UNIT") {
        helpFound.SHLPTYPE = "SH";
        helpFound.SHLPNAME = "H_T006";
        helpFound.title = "Quantity help (added)";
      } else if (dfies.DATATYPE === "LANG") {
        helpFound.SHLPTYPE = "SH";
        helpFound.SHLPNAME = "H_T002";
        helpFound.title = "Language help (added)";
      }
    }

    if (helpFound.SHLPTYPE) {
      // make the id
      helpFound.id = `${helpFound.SHLPTYPE} ${helpFound.SHLPNAME}`;

      this.VHFieldCache[ddicId] = helpFound;

      // Update Helps
      if (!Helps[helpFound.id]) {
        Helps[helpFound.id] = { title: helpFound.title };
      }

      // Update Descriptors
      if (
        helpFound.SHLPTYPE !== "SH" ||
        (helpFound.SHLPTYPE === "SH" && getSHdesc)
      ) {
        await this.getDescriptors(
          helpFound,
          Helps,
          Descriptors,
          SelectionFields
        );
      }
    }

    return helpFound;
  }

  async getShlpDescriptor(
    shlpId: ShlpIdentType,
    options?: { defaultName?: ""; noCache: false }
  ): Promise<ShlpDescriptorType> {
    // SHLP descriptors are returned in ET_SHLP table: one single row for the elementary
    // help, or multiple rows, in case of collective help. The sequence of rows in this table
    // determines the sequence of help tabs in SAPGUI, the table is therefore returned sorted.
    // Elementary helps are stored in a single list, to avoid redundancy, as one elementary
    // help can be a part of more collectives.

    const _options: { defaultName: string; noCache: boolean } = Object.assign(
      { defaultName: "", noCache: false },
      options || {}
    );

    const shlpName = `${shlpId.type} ${shlpId.name}`;
    if (["SH", "CT", "CH"].includes(shlpId.type)) {
      if (_options.defaultName || !this.Descriptors[shlpName]) {
        this.Descriptors[shlpName] = (
          await this.client.call(this.shlpApi.SH_descriptor_get, {
            IV_SHLPTYPE: shlpId.type,
            IV_SHLPNAME: shlpId.name,
            IV_DEFAULT_SHLPNAME: _options.defaultName,
          })
        ).ET_SHLP as RfcTable;

        for (const elem_shlp of this.Descriptors[shlpName]) {
          const elem_shlpname = `${elem_shlp.SHLPTYPE} ${elem_shlp.SHLPNAME}`;
          if (!this.Elementary[elem_shlpname]) {
            this.Elementary[elem_shlpname] = ValueInputHelp.elementary(
              elem_shlp,
              this._userParameters
            );
          }
        }
      }
      // object keys sort order is stable
      const elementary_helps: ShlpDescriptorType = {};
      for (const elem_shlp of this.Descriptors[shlpName]) {
        const elem_shlpname = `${elem_shlp.SHLPTYPE} ${elem_shlp.SHLPNAME}`;
        elementary_helps[elem_shlpname] = this.Elementary[elem_shlpname];
      }
      return elementary_helps;
    } else {
      throw new Error(
        `Search Help type "${shlpId.type}" not supported, only: SH, CH and CT`
      );
    }
  }

  public static elementary(
    shlp: RfcStructure,
    userParameters: RfcTable = []
  ): ElementaryHelpType {
    const newhelp: ElementaryHelpType = {
      INTDESCR: shlp.INTDESCR as RfcStructure,
      SCRLENMAX: 0,
      SHLPOUTPUT: "",
      ALLOUTPUTS: [],
      FIELDDESCR: [],
    };

    // all: CH, CT, SH
    for (const fd of shlp.FIELDDESCR as RfcTable) {
      // convert to integers
      for (const intfield of [
        "POSITION",
        "OFFSET",
        "LENG",
        "INTLEN",
        "OUTPUTLEN",
        "DECIMALS",
        "HEADLEN",
        "SCRLEN1",
        "SCRLEN2",
        "SCRLEN3",
      ])
        fd[intfield] = parseInt(fd[intfield] as string);

      // merge INTERFACE to FIELDDESCR
      for (const fi of shlp.INTERFACE as RfcTable) {
        if (fd.FIELDNAME == fi.SHLPFIELD) {
          fd.TOPSHLPNAM = fi.TOPSHLPNAM;
          fd.TOPSHLPFLD = fi.TOPSHLPFLD;
          break;
        }
      }
      // Max parameter caption length
      if ((fd.SCRLEN3 as number) > newhelp.SCRLENMAX) {
        newhelp.SCRLENMAX = fd.SCRLEN3 as number;
      }
      // Takeover SU01 user parameters values
      // Both the DEFAULTVAL of the FIELDPROP and the MEMORYID of
      // the FIELDDESCR may contain the SU3 parameter ID.
      // The DEFAULTVAL does not exist in CT helps (no FIELDPROP
      // table filled) and in SH helps it appears filled with less
      // fields then MEMORYID.
      // In the next line, if MEMORYID is replaced with DEFAULTVAL,
      // only user param defaults of DEFAULTVAL will be taken over,
      // just like in SE11 help test or in applications. With MEMORYID all
      // user param defaults maintained in SU01/SU3 are taken over,
      // thus more input fields defaulted than in SAPGUI. __todo: check this ...
      if (fd.DEFAULTVAL && (fd.DEFAULTVAL as string).length > 0) {
        for (const p of userParameters) {
          if (p.PARID === fd.MEMORYID) {
            fd.PARVA = p.PARVA;
            // fd['PARTXT'] = p['PARTXT']
            break;
          }
        }
      }
      // if user defaults not set
      if (!fd.PARVA) {
        fd.PARVA = "";
        fd.PARTXT = "";
      }
    }

    //
    // SH
    //
    if (shlp.SHLPTYPE === "SH") {
      // FIELDDESCR post-processing
      for (const fd of shlp.FIELDDESCR as RfcTable) {
        // merge FIELDPROP to FIELDDESCR
        for (const fp of shlp.FIELDPROP as RfcTable) {
          if (fd.FIELDNAME === fp.FIELDNAME) {
            fd.SHLPOUTPUT = fp.SHLPOUTPUT;
            fd.SHLPSELPOS = fp.SHLPSELPOS;
            fd.SHLPLISPOS = fp.SHLPLISPOS;
            fd.DEFAULTVAL = fp.DEFAULTVAL; // SU01 defaults shown in SE11
            // Search Help output (result)
            if (fp.SHLPOUTPUT === "X")
              if (!newhelp.SHLPOUTPUT) {
                // todo: multiple outputs
                newhelp.SHLPOUTPUT = fp.FIELDNAME as string;
              }
            newhelp.ALLOUTPUTS.push(fp.FIELDNAME as string);
            break;
          }
        }
      }
      //
      // CT, CH
      //
    } else if (["CT", "CH"].includes(shlp.SHLPTYPE as string)) {
      let fieldDescShlpOutput = "";
      // FIELDDESCR post-processing
      for (const fd of shlp.FIELDDESCR as RfcTable) {
        // merge FIELDPROP to FIELDDESCR
        for (const fp of shlp.FIELDPROP as RfcTable) {
          if (fd.FIELDNAME === fp.FIELDNAME) {
            fd.SHLPOUTPUT = fp.SHLPOUTPUT;
            fd.SHLPSELPOS = fp.SHLPSELPOS;
            fd.SHLPLISPOS = fp.SHLPLISPOS;
            // fd.DEFAULTVAL = fp.DEFAULTVAL; // no DEFAULTVAL in CT helps
            // Search Help output (result)
            if (fp.SHLPOUTPUT === "X")
              if (!newhelp.SHLPOUTPUT) {
                // todo: multiple outputs
                newhelp.SHLPOUTPUT = fp.FIELDNAME as string;
              }
            newhelp.ALLOUTPUTS.push(fp.FIELDNAME as string);
            break;
          }
        }
        if (fd.MAC) {
          fieldDescShlpOutput = fd.FIELDNAME as string;
        }
        // CT help output field
        if (!newhelp.SHLPOUTPUT) {
          // output not found in FIELDPROP
          if (!fieldDescShlpOutput) {
            // output not found in FIELDDESCR, take anything and
            // echo the case
            //print("no SHLPOUTPUT for %s %s" % (shlp["SHLPTYPE"], shlp["SHLPNAME"]))
            newhelp.SHLPOUTPUT = shlp.INTERFACE[0].SHLPFIELD;
          } else {
            newhelp.SHLPOUTPUT = fieldDescShlpOutput;
          }
        }
      }
    }

    // sort by position
    newhelp.FIELDDESCR = (shlp.FIELDDESCR as RfcTable).sort((a, b) => {
      return a.POSITION < b.POSITION ? -1 : a.POSITION > b.POSITION ? 1 : 0;
    });

    // remove multiple outputs if not found
    //if (newhelp["ALLOUTPUTS"].length == 1 ) delete newhelp["ALLOUTPUTS"];

    return newhelp;
  }

  public get userParameters(): RfcTable {
    return this._userParameters;
  }

  getShlpTitle(shlpIdent: ShlpIdentType): string {
    const shlpname = `${shlpIdent.type} ${shlpIdent.name}`;
    if (!this.Elementary[shlpname])
      throw new Error(`Shlp title not found: "${shlpname}"`);
    return this.Elementary[shlpname].INTDESCR.DDTEXT as string;
  }

  getShlpParams(shlpIdent: ShlpIdentType): RfcTable {
    const shlpname = `${shlpIdent.type} ${shlpIdent.name}`;
    if (!this.Elementary[shlpname])
      throw new Error(`Shlp parameters not found: "${shlpname}"`);
    return this.Elementary[`${shlpIdent.type} ${shlpIdent.name}`].FIELDDESCR;
  }

  getShlpDefaults(shlpIdent: ShlpIdentType): ShlpDefaultsType {
    const shlpname = `${shlpIdent.type} ${shlpIdent.name}`;
    if (!this.Elementary[shlpname])
      throw new Error(`Shlp defaults not found: "${shlpname}"`);
    // get all search defaults, relevant for a given Search Help
    const defaults: ShlpDefaultsType = [];
    for (const fielddesc of this.Elementary[shlpname].FIELDDESCR) {
      if ((fielddesc.DEFAULTVAL as string).length > 0) {
        defaults.push({
          [fielddesc.FIELDNAME as string]: fielddesc.MEMORYID as string,
        });
      }
    }
    return defaults;
  }

  getSearchResultHeaders(shlpIdent: ShlpIdentType): SearchResultHeadersType {
    const shlpname = `${shlpIdent.type} ${shlpIdent.name}`;
    if (!this.Elementary[shlpname])
      throw new Error(`Shlp result headers not found: "${shlpname}"`);
    const headers: SearchResultHeadersType = {};
    for (const f of this.Elementary[shlpname].FIELDDESCR) {
      headers[f.FIELDNAME as string] = [f.REPTEXT as string, f.LENG as number]; // todo: check unicode here
    }
    return headers;
  }

  async search(
    shlpIdent: ShlpIdentType,
    select_options: string[][],
    searchOptions?: ShlpSearchOptions
  ): Promise<SearchResultType> {
    const _searchOptions: { maxRows: number; compact: boolean } = Object.assign(
      { maxRows: 0, compact: false },
      searchOptions || {}
    );

    const shlpname = `${shlpIdent.type} ${shlpIdent.name}`;
    if (!this.Elementary[shlpname]) {
      this.getShlpDescriptor(shlpIdent);
    }
    const so: ShlpSelectOptionsType[] = [];
    for (const s of select_options) {
      // _todo: clean up
      const so_record = {} as ShlpSelectOptionsType;
      so_record.SHLPNAME = shlpname;
      so_record.SHLPFIELD = s[0];
      so_record.SIGN = s[1];
      so_record.OPTION = s[2];
      so_record.LOW = s[3].toUpperCase();
      so_record.HIGH = s[4].toUpperCase();
      so.push(so_record);
    }
    const R = await this.client.call(this.shlpApi.search, {
      IV_SHLPTYPE: shlpIdent.type,
      IV_SHLPNAME: shlpIdent.name,
      IT_SELOPT: so,
      IV_MAXROWS: _searchOptions.maxRows,
    });

    // map ET_VALUE_LIST name/value array into SH result table

    // compact: array w/o header names in search records, only values, otherwise dict
    let result_line: SearchResultLineType = _searchOptions.compact ? [] : {};
    let result: SearchResultLineType[] = [];
    let recordpos = "0000";
    // headers sequence in Search Result may differ from FIELDDESCR[POSITION] sequence
    let headers: SearchResultHeaderType[] = [];

    if (this.Elementary[shlpname].FIELDDESCR[0].SHLPISPOS) {
      for (const f of this.Elementary[shlpname].FIELDDESCR as RfcTable) {
        headers.push({
          field: f.FIELDNAME as string,
          len: f.LENG as number,
          abaptype: f.DATATYPE as string,
          title: f.REPTEXT as string,
          text_align: "left",
          position: f.SHLPLISPOS as string,
        }); // _todo: check unicode here
        // sort headers per field position - todo: check if SHLPISPOS always filled, there is also a POSITION field ...
        headers = headers.sort((a, b) => {
          return a["position"] < b["position"]
            ? -1
            : a["position"] < b["position"]
            ? 1
            : 0;
        });
      }
    } else {
      for (const f of this.Elementary[shlpname].FIELDDESCR as RfcTable) {
        headers.push({
          field: f.FIELDNAME as string,
          len: f.LENG as number,
          abaptype: f.DATATYPE as string,
          title: f.REPTEXT as string,
          text_align: "left",
          position: "",
        });
      }
    }

    for (const record of R.ET_VALUE_LIST as RfcTable) {
      // if record['RECORDPOS'] == '0001':
      //    # this check required because the recordpos starts from
      //    # 0001 but after reaching 9999 rolls down to 0000 and
      //    # again to 0001 etc.
      //    if len(headers) < len(help_headers):
      //        headers += [[record['FIELDNAME']] + help_headers[record['FIELDNAME']]]
      if (recordpos !== record.RECORDPOS) {
        // new record, append line
        if (!isEmpty(result_line)) {
          result.push(result_line);
          result_line = _searchOptions.compact ? [] : {};
        }
        // new record
        recordpos = record.RECORDPOS as string;
      }
      if (_searchOptions.compact) {
        (result_line as string[]).push(record.FIELDVAL as string);
      } else {
        (result_line as Record<string, string>)[
          record.FIELDNAME as string
        ] = record.FIELDVAL as string;
      }
    }
    // last line
    if (!isEmpty(result_line)) {
      result.push(result_line);
    }
    // sort per first column (default)
    if (result.length > 0) {
      result = _searchOptions.compact
        ? result.sort((a, b) => {
            return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
          })
        : result.sort((a, b) => {
            const va = a[headers[0]["field"]];
            const vb = b[headers[0]["field"]];
            return va[0] < vb[0] ? -1 : va[0] > vb[0] ? 1 : 0;
          });
    }
    // search result
    return {
      search_result: result,
      shlpoutput: this.Elementary[shlpname].SHLPOUTPUT,
      maxrows_exceeded: (R.EV_MAXROWS_EXCEEDED as string).length > 0,
      headers: headers,
      desc: R.ET_VALUE_DESC as RfcTable,
    };
  }
}
