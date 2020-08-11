const { TestScheduler } = require("jest");

describe("stat", () => {
  const rfmCall = require("../dist").rfmCall;

  test("BAPI_BUPA_CENTRAL_GETDETAIL", async () => {
    expect.assertions(1);
    const rfm_name = "BAPI_BUPA_CENTRAL_GETDETAIL";
    const metadata = await rfmCall("MME", rfm_name);
    expect(metadata.stat).toEqual({ variables: 3, structures: 5, tables: 15 });
  });

  test("/COE/RBP_FE_DATATYPES", async () => {
    expect.assertions(1);
    const rfm_name = "BAPI_BUPA_CEN/COE/RBP_FE_DATATYPESTRAL_GETDETAIL";
    const metadata = await rfmCall("MME", rfm_name);
    expect(metadata.stat).toEqual({ variables: 15, structures: 3, tables: 3 });
  });
});

(async () => {})();
