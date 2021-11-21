import rot8 from "../../src/ciphers/rot8";

describe("Rot8 encode/decode", () => {
  test("should not replace letters in case: encode + decode", () => {
    expect(rot8.encode(rot8.decode("Hello world!!!"))).toBe("Hello world!!!");
  })

  test("should replace letters without changing case", () => {
    expect(rot8.encode("AbCdEfGhIjKlMnOpQrStUvWxYz")).toBe("IjKlMnOpQrStUvWxYzAbCdEfGh");
  });

  test("should decode letters without changing case", () => {
    expect(rot8.decode("IjKlMnOpQrStUvWxYzAbCdEfGh")).toBe("AbCdEfGhIjKlMnOpQrStUvWxYz");
  });

  test("should replace latin letters only", () => {
    expect(rot8.encode("Hello world?!? - Привет мир!?! - !№;%:?*()+~@#$^&|;'")).toBe("Pmttw ewztl?!? - Привет мир!?! - !№;%:?*()+~@#$^&|;'");
  });

  test("should decode latin letters only", () => {
    expect(rot8.decode("Pmttw ewztl?!? - Привет мир!?! - !№;%:?*()+~@#$^&|;'")).toBe("Hello world?!? - Привет мир!?! - !№;%:?*()+~@#$^&|;'");
  });

});

