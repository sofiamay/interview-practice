"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const largest_dividable_subset_js_1 = require("../largest_dividable_subset.js");
const ARR_1 = [3, 5, 10, 20, 21];
const RES_1 = [5, 10, 20];
const ARR_2 = [1, 3, 6, 24];
const RES_2 = [1, 3, 6, 24];
describe("largestDivisibleSubset(array)", () => {
    it("should return an empty array when given an empty array", () => {
        const result = (0, largest_dividable_subset_js_1.largestDivisibleSubset)([]);
        (0, chai_1.expect)(result).to.be.an("array");
        (0, chai_1.expect)(result).to.have.lengthOf(0);
    });
    it("should return the correct result for the first array ", () => {
        const result_1 = (0, largest_dividable_subset_js_1.largestDivisibleSubset)(ARR_1);
        (0, chai_1.expect)(result_1).to.be.an("array");
        (0, chai_1.expect)(result_1).to.have.lengthOf(3);
        (0, chai_1.expect)(result_1).to.eql(RES_1);
    });
    it("should return the correct result for the second array ", () => {
        const result_2 = (0, largest_dividable_subset_js_1.largestDivisibleSubset)(ARR_2);
        (0, chai_1.expect)(result_2).to.be.an("array");
        (0, chai_1.expect)(result_2).to.have.lengthOf(4);
        (0, chai_1.expect)(result_2).to.eql(RES_2);
    });
});
