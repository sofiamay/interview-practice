import "mocha";
import { assert, expect } from "chai";

import { romanToDecimal } from "../roman_numerals.js";

const NOT_STRING = Math.PI;
const TEST = "MCMIV";
const EXPECTED = 1904;


describe("romanToDecimal(romanNumeral)", () => {
  it("should throw an error if romanNumberal is not a string", () => {
    expect(romanToDecimal.bind(null, NOT_STRING)).to.throw(TypeError);
  });
  it("should return 1905 when romanNumeral='MCMIV'", () => {
    expect(romanToDecimal(TEST)).to.eql(EXPECTED);
  });
});
