"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const min_interval_removals_js_1 = require("../min_interval_removals.js");
const TEST_CASE = [
    [7, 9],
    [2, 4],
    [5, 8],
];
const EXPECTED_RESULT = 1;
describe("minIntervalRemovals(intervals)", () => {
    it("should return zero if there are no intervals", () => {
        (0, chai_1.expect)((0, min_interval_removals_js_1.minIntervalRemovals)([])).to.equal(0);
    });
    it("should return the expected number of minimum deletions", () => {
        (0, chai_1.expect)((0, min_interval_removals_js_1.minIntervalRemovals)(TEST_CASE)).to.equal(EXPECTED_RESULT);
    });
});
