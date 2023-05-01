"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const appear_once_js_1 = require("../appear_once.js");
const TEST_ARRAYS = [
    [2, 4, 6, 8, 10, 2, 6, 10],
    ["two", 4, "six", 8, 10, "two", "six", 10],
];
const TEST_RESULTS = [4, 8];
const ARRAY_WITH_1_UNIQUE = [2, 1, 6, 7, 6, 1, 2];
const ARRAY_WITH_3_UNIQUE = [14, 2, 4, 6, 8, 10, 2, 6, 10];
const EMPTY_ARRAY = [];
const NOT_ARRAY = "not an array";
describe("appear_once(array)", () => {
    it("should throw an error if argument is not an array", () => {
        (0, chai_1.expect)(appear_once_js_1.appear_once.bind(null, NOT_ARRAY)).to.throw(TypeError);
    });
    it("returns the result as an array containing 2 elements", () => {
        TEST_ARRAYS.forEach((arr) => {
            const result = (0, appear_once_js_1.appear_once)(arr);
            (0, chai_1.expect)(result).to.be.instanceof(Array);
            (0, chai_1.expect)(result.length).to.eql(2);
            (0, chai_1.expect)(result).to.include.members(TEST_RESULTS);
        });
    });
    it("should throw an error on an empty array", () => {
        (0, chai_1.expect)(appear_once_js_1.appear_once.bind(null, EMPTY_ARRAY)).to.throw(Error);
    });
    it("should throw an error when array contains fewer than 2 unique elements", () => {
        (0, chai_1.expect)(appear_once_js_1.appear_once.bind(null, ARRAY_WITH_1_UNIQUE)).to.throw(Error);
    });
    it("should throw an error when array contains more than 2 unique elements", () => {
        (0, chai_1.expect)(appear_once_js_1.appear_once.bind(null, ARRAY_WITH_3_UNIQUE)).to.throw(Error);
    });
});
