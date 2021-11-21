import atbash from "../../src/ciphers/atbash";

describe("Atbash encode/decode", () => {
  test("should not replace letters in case: double encode / double decode ", () => {
    expect(atbash.encode(atbash.encode("Hello world!!!"))).toBe("Hello world!!!");
  });

  test("should replace letters without changing case", () => {
    expect(atbash.encode("AbCdEfGhIjKlMnOpQrStUvWxYz")).toBe("ZyXwVuTsRqPoNmLkJiHgFeDcBa");
  });

  test("should replace latin letters only", () => {
    expect(atbash.encode("Hello world?!? - Привет мир!?! - !№;%:?*()+~@#$^&|;'")).toBe("Svool dliow?!? - Привет мир!?! - !№;%:?*()+~@#$^&|;'");
  });
});
