"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const max_profit_js_1 = require("../max_profit.js");
const NOT_ARRAY = 42;
const NOT_INT = Math.PI;
const EMPTY_ARRAY = [];
const K = 2;
const TEST_ARRAY = [5, 2, 4, 0, 1];
const TEST_EXPECTED_RESULT = 3;
describe("maxProfit(arr, k)", () => {
    it("should throw an error if arguments are not of the correct type", () => {
        (0, chai_1.expect)(max_profit_js_1.maxProfit.bind(null, NOT_ARRAY, NOT_INT)).to.throw(TypeError);
    });
    it("should return 0 if arr is empty", () => {
        const result = (0, max_profit_js_1.maxProfit)(EMPTY_ARRAY, K);
        (0, chai_1.expect)(result).to.eql(0);
    });
    it("should return max profits", () => {
        const result = (0, max_profit_js_1.maxProfit)(TEST_ARRAY, K);
        (0, chai_1.expect)(result).to.eql(TEST_EXPECTED_RESULT);
    });
});
