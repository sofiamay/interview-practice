import "mocha";
import { assert, expect } from "chai";

import { romanToDecimal } from "../roman_numerals";

const TEST = "MCMIV";
const EXPECTED = 1904;


describe("romanToDecimal(romanNumeral)", () => {
  it("should return 1905 when romanNumeral='MCMIV'", () => {
    expect(romanToDecimal(TEST)).to.equal(EXPECTED);
    expect(1+2).to.equal(3);
  });
});
