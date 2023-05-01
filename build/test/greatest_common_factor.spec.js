"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const greatest_common_factor_js_1 = require("../greatest_common_factor.js");
describe("gcf(a, b)", () => {
    it("should throw an error if a or b is not a positive integer", () => {
        const a = "string";
        const b = 1;
        (0, chai_1.expect)(greatest_common_factor_js_1.gcf.bind(null, a, b)).to.throw(TypeError);
    });
    it("should return the greatest common factor between a and b", () => {
        const a = 4;
        const b = 6;
        const expected = 2;
        (0, chai_1.expect)((0, greatest_common_factor_js_1.gcf)(a, b)).to.equal(expected);
    });
});
describe("getGCF(array)", () => {
    it("should return the greatest common factor of the array", () => {
        const arr = [42, 56, 14];
        const expected = 14;
        const result = (0, greatest_common_factor_js_1.getGCF)(arr);
        (0, chai_1.expect)(result).to.equal(expected);
    });
});
