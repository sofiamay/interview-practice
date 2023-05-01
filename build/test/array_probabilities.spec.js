"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const array_probabilities_js_1 = require("../array_probabilities.js");
const TEST_NUMS = [1, 2, 3, 4];
const TEST_PROBS = [0.1, 0.5, 0.2, 0.2];
const PROBS_WRONG_SUM = [0.1, 0.1, 0.1, 0.1];
const PROBS_WRONG_LENGTH = [0.1, 0.5, 0.2, 0.1, 0.1];
describe("generateFromProbabilities(nums, probs)", () => {
    it("should throw an error if the sum of probs does not add up to 1", () => {
        (0, chai_1.expect)(array_probabilities_js_1.generateFromProbabilities.bind(null, TEST_NUMS, PROBS_WRONG_SUM)).to.throw(Error);
    });
    it("should throw an error if nums and probs have different lengths", () => {
        (0, chai_1.expect)(array_probabilities_js_1.generateFromProbabilities.bind(null, TEST_NUMS, PROBS_WRONG_LENGTH)).to.throw(Error);
    });
    it("result should be one of the values in nums", () => {
        const result = (0, array_probabilities_js_1.generateFromProbabilities)(TEST_NUMS, TEST_PROBS);
        (0, chai_1.expect)(TEST_NUMS).to.include(result);
    });
});
