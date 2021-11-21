import shiftHelper from "../../src/ciphers/shift-helper";

describe("Shift helper", () => {
  test("should not replace letters", () => {
    const shiftCharFn = (charCode, startCharCode, finishCharCode) => String.fromCharCode(charCode);
    expect(shiftHelper("Hello world!!!", shiftCharFn)).toBe("Hello world!!!");
  })
})