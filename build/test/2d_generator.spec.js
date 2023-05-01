"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const _2d_generator_js_1 = require("../2d_generator.js");
const ARR = [
    [1, 2],
    [3, 4],
];
describe("Generator2d", () => {
    it("should construct a new instance", () => {
        const generator2d = new _2d_generator_js_1.Generator2d(ARR);
        (0, chai_1.expect)(generator2d instanceof _2d_generator_js_1.Generator2d).to.be.true;
    });
    it("should yield the next value in the 2d array", () => {
        const generator2d = new _2d_generator_js_1.Generator2d(ARR);
        const val = generator2d.next().value;
        (0, chai_1.expect)(val).to.equal(1);
        const nextVal = generator2d.next().value;
        (0, chai_1.expect)(nextVal).to.equal(2);
        const thirdVal = generator2d.next().value;
        (0, chai_1.expect)(thirdVal).to.equal(3);
        const fourthVal = generator2d.next().value;
        (0, chai_1.expect)(fourthVal).to.equal(4);
    });
});
