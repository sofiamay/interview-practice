"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const sparce_array_js_1 = require("../sparce_array.js");
const exampleArray = [0, 0, 0, "a", 0, 0, 0, 0, 0, "b", 0, 0, 0, 0, 0, 0, 0, 0, "c", 0, 0, 0, 0, 0, 0, 0,];
const exampleArraySize = exampleArray.length; //26
describe("SparceArray", () => {
    it("initializes given an array and maxSize", () => {
        const sparceArray = new sparce_array_js_1.SparceArray(exampleArray, exampleArraySize);
        (0, chai_1.expect)(sparceArray.size).to.eql(3);
        (0, chai_1.expect)(sparceArray.hash[3]).to.eql("a");
        (0, chai_1.expect)(sparceArray.hash[0]).to.eql(undefined);
        (0, chai_1.expect)(sparceArray.length).to.eql(18);
    });
    it("sparceArray.get() to retrieve a value at an index", () => {
        const sparceArray = new sparce_array_js_1.SparceArray(exampleArray, exampleArraySize);
        (0, chai_1.expect)(sparceArray.get(3)).to.eql("a");
        (0, chai_1.expect)(sparceArray.get(32)).to.eql(undefined);
        (0, chai_1.expect)(sparceArray.get(1)).to.eql(0);
    });
    it("sparceArray.isEmpty(index) to return true on a 0, null, or undefined value", () => {
        const sparceArray = new sparce_array_js_1.SparceArray(exampleArray, exampleArraySize);
        (0, chai_1.expect)(sparceArray.isEmpty(0)).to.eql(true);
        (0, chai_1.expect)(sparceArray.isEmpty(3)).to.eql(false);
        (0, chai_1.expect)(sparceArray.isEmpty(28)).to.eql(true);
    });
    it("sparceArray.set() to set an index to a value", () => {
        const sparceArray = new sparce_array_js_1.SparceArray(exampleArray, exampleArraySize);
        const sizeBefore = sparceArray.size;
        sparceArray.set(0, "test");
        (0, chai_1.expect)(sparceArray.get(0)).to.eql("test");
        let newSize = sizeBefore + 1;
        (0, chai_1.expect)(sparceArray.size).to.eql(newSize);
        sparceArray.set(3, "anotherTest");
        (0, chai_1.expect)(sparceArray.get(3)).to.eql("anotherTest");
        (0, chai_1.expect)(sparceArray.size).to.eql(newSize);
        sparceArray.set(25, "expanding array");
        (0, chai_1.expect)(sparceArray.size).to.eql(newSize + 1);
        (0, chai_1.expect)(sparceArray.length).to.eql(26);
    });
});
