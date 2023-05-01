"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const next_greater_element_js_1 = require("../next_greater_element.js");
const NOT_INT = Math.PI;
const I_OUT_OF_RANGE = 64;
const NOT_ARRAY = 42;
const EXAMPLE_ARRAY = [4, 1, 3, 5, 6];
const EXAMPLE_IDX = 2;
const IDX_TO_RESULT = new Map();
IDX_TO_RESULT.set(0, 3);
IDX_TO_RESULT.set(1, 2);
IDX_TO_RESULT.set(2, 3);
IDX_TO_RESULT.set(3, 4);
IDX_TO_RESULT.set(4, null);
describe("nextGreaterElement(i, arr)", () => {
    it("should throw an error if i isn't an integer or if arr isn't an array", () => {
        (0, chai_1.expect)(next_greater_element_js_1.nextGreaterElement.bind(null, NOT_INT, EXAMPLE_ARRAY)).to.throw(TypeError);
        (0, chai_1.expect)(next_greater_element_js_1.nextGreaterElement.bind(null, EXAMPLE_IDX, NOT_ARRAY)).to.throw(TypeError);
    });
    it("should throw an error if i is out of range", () => {
        (0, chai_1.expect)(next_greater_element_js_1.nextGreaterElement.bind(null, I_OUT_OF_RANGE, EXAMPLE_ARRAY)).to.throw(RangeError);
    });
    it("should return null if there is no greater element", () => {
        (0, chai_1.expect)((0, next_greater_element_js_1.nextGreaterElement)(4, EXAMPLE_ARRAY)).to.be.null;
    });
    it("should return the correct value for each i", () => {
        for (let [i, expectedResult] of IDX_TO_RESULT) {
            (0, chai_1.expect)((0, next_greater_element_js_1.nextGreaterElement)(i, EXAMPLE_ARRAY)).to.equal(expectedResult);
        }
    });
});
