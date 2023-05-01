"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const gray_code_js_1 = require("../gray_code.js");
const NOT_INT = Math.PI;
// index 0 is n; index 1 = expected result
const TESTS = [
    [2, ['00', '01', '11', '10']],
    [3, ['000', '001', '011', '010', '110', '111', '101', '100']],
    [4, ['0000', '0001', '0011', '0010', '0110', '0111', '0101', '0100', '1100', '1101', '1111', '1110', '1010', '1011', '1001', '1000']],
];
describe("grayCode(n)", () => {
    it("should throw an error if n is not an integer", () => {
        (0, chai_1.expect)(gray_code_js_1.grayCode.bind(null, NOT_INT)).to.throw(TypeError);
    });
    it("should return [0, 1] when n=1", () => {
        (0, chai_1.expect)((0, gray_code_js_1.grayCode)(1)).to.eql(["0", "1"]);
    });
    it("should return correct results", () => {
        TESTS.forEach((test) => {
            let n = test[0];
            let result = test[1];
            (0, chai_1.expect)((0, gray_code_js_1.grayCode)(n)).to.eql(result);
        });
    });
});
