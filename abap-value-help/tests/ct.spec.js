const ValueInputHelp = require("../dist").ValueInputHelp;
const setup = require("./setup");

const loadFromFile = require("./utils").loadFromFile;
//const saveToFile = require("./utils").saveToFile;

("use strict");

let VI;
beforeAll(async () => {
  const vi = await ValueInputHelp.new(setup);
  return (VI = vi);
});

describe("CT Helps", () => {
  test("CT T16FB descriptor", async () => {
    expect.assertions(1);

    const desc = await VI.getShlpDescriptor({ type: "CT", name: "T16FB" });

    expect(desc).toMatchObject(loadFromFile("descriptor.CT_T16FB.yaml"));
  });

  test("CT T16FB", async () => {
    expect.assertions(5);

    const R = await VI.search({ type: "CT", name: "T16FB" }, []);

    expect(R.shlpoutput).toEqual("FRGKE");

    expect(R.maxrows_exceeded).toEqual(false);

    expect(R.headers).toEqual(loadFromFile("headers.CT_T16FB.yaml"));

    expect(R.search_result).toEqual([
      { FRGKE: "0", FRGET: "Changeable" },
      { FRGKE: "1", FRGET: "Changeable, but new release" },
    ]);

    expect(R.desc).toEqual(loadFromFile("descriptor.value.CT_T16FB.yaml"));
  });

  test("CT T165R", async () => {
    expect.assertions(4);

    const shlpId = { type: "CT", name: "T165R" };

    const desc = await VI.getShlpDescriptor(shlpId);
    expect(desc).toMatchObject(loadFromFile("descriptor.CT_T165R.yaml"));

    const R = await VI.search(shlpId, []);

    expect(R.shlpoutput).toEqual("ABSGR");

    expect(R.maxrows_exceeded).toEqual(false);

    expect(R.headers).toEqual(loadFromFile("headers.CT_T165R.yaml"));

    // _todo: corrupted in test system :-(
    // expect(R.headers).toEqual([
    //   ["ABSGR", "Reas. Canc.", 2],
    //   ["ABSGR_TXT", "Name", 40],
    // ]);
    // expect(R.search_result).toEqual([
    //   { ABSGR: "01", ABSGR_TXT: "Cancelled due to poor quality" },
    //   { ABSGR: "02", ABSGR_TXT: "Cancelled - source of supply changed" },
    // ]);
  });

  test("CT CSKS descriptor", async () => {
    expect.assertions(1);

    const shlpId = { type: "CT", name: "CSKS" };

    const desc = await VI.getShlpDescriptor(shlpId);

    expect(desc).toMatchObject(loadFromFile("descriptor.CT_CSKS.yaml"));
  });

  test("CT CSKS", async () => {
    expect.assertions(5);

    const shlpId = { type: "CT", name: "CSKS" };

    const sel = [["KOSTL", "I", "CP", "MS1200F*", ""]];

    const R = await VI.search(shlpId, sel);

    expect(R.shlpoutput).toEqual("DATBI");
    expect(R.maxrows_exceeded).toEqual(false);

    expect(R.search_result).toEqual(loadFromFile("searchResult.CT_CSKS.yaml"));

    expect(R.headers).toEqual(loadFromFile("headers.CT_CSKS.yaml"));

    expect(R.desc).toEqual(loadFromFile("descriptor.value.CT_CSKS.yaml"));
  });

  test("CT T501 CAPS employee group descriptor", async () => {
    expect.assertions(1);

    const shlpId = { type: "CT", name: "T501" };

    const desc = await VI.getShlpDescriptor(shlpId);

    expect(desc).toMatchObject(loadFromFile("descriptor.CT_T501.yaml"));
  });

  test.skip("CT T501 CAPS employee group", async () => {
    //expect.assertions(1);

    const shlpId = { type: "CT", name: "T501" };

    const R = await VI.search(shlpId, []);

    //expect(R.search_result) // no data in test system
  });
});
