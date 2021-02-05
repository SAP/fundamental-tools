import { RfcStructure } from "node-rfc";

export class Alpha {
  private all: Set<string> = new Set();
  private found: Record<string, RfcStructure> = {};
  private rfm_name = "";
  private param_name = "";
  private field_name = "";

  rfm(rfm_name: string): void {
    this.rfm_name = rfm_name;
    this.param("");
  }

  param(param_name: string): void {
    this.param_name = param_name;
    this.field_name = "";
  }

  field(field_name: string): void {
    this.field_name = field_name;
  }

  get(): { all: string[]; rfm: Record<string, RfcStructure> } {
    return { all: Array.from(this.all).sort(), rfm: this.found };
  }

  add(alpha_name: string): void {
    this.all.add(alpha_name);

    if (!this.found[this.rfm_name]) {
      this.found[this.rfm_name] = {};
    }

    if (!this.found[this.rfm_name][this.param_name]) {
      this.found[this.rfm_name][this.param_name] = {};
    }

    if (this.field_name) {
      this.found[this.rfm_name][this.param_name][this.field_name] = alpha_name;
    } else {
      this.found[this.rfm_name][this.param_name] = alpha_name;
    }
  }
}
