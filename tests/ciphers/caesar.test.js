import caesar from "../../src/ciphers/caesar";

describe("Caesar encode/decode", () => {
  test("should not replace letters in case: encode + decode", () => {
    expect(caesar.encode(caesar.decode("Hello world!!!"))).toBe("Hello world!!!");
  })

  test("should encode letters without changing case", () => {
    expect(caesar.encode("AbCdEfGhIjKlMnOpQrStUvWxYz")).toBe("BcDeFgHiJkLmNoPqRsTuVwXyZa");
  });

  test("should decode letters without changing case", () => {
    expect(caesar.decode("BcDeFgHiJkLmNoPqRsTuVwXyZa")).toBe("AbCdEfGhIjKlMnOpQrStUvWxYz");
  });

  test("should encode latin letters only", () => {
    expect(caesar.encode("Hello world?!? - Привет мир!?! - !№;%:?*()+~@#$^&|;'")).toBe("Ifmmp xpsme?!? - Привет мир!?! - !№;%:?*()+~@#$^&|;'");
  });
  
  test("should decode latin letters only", () => {
    expect(caesar.decode("Ifmmp xpsme?!? - Привет мир!?! - !№;%:?*()+~@#$^&|;'")).toBe("Hello world?!? - Привет мир!?! - !№;%:?*()+~@#$^&|;'");
  });
});


