"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const roman_numerals_js_1 = require("../roman_numerals.js");
const NOT_STRING = Math.PI;
const TEST = "MCMIV";
const EXPECTED = 1904;
describe("romanToDecimal(romanNumeral)", () => {
    it("should throw an error if romanNumberal is not a string", () => {
        (0, chai_1.expect)(roman_numerals_js_1.romanToDecimal.bind(null, NOT_STRING)).to.throw(TypeError);
    });
    it("should return 1905 when romanNumeral='MCMIV'", () => {
        (0, chai_1.expect)((0, roman_numerals_js_1.romanToDecimal)(TEST)).to.eql(EXPECTED);
    });
});
