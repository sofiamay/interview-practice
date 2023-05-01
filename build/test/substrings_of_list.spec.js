"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const substrings_of_list_js_1 = require("../substrings_of_list.js");
const S = "dogcatcatcodecatdog";
const WORDS = ["cat", "dog"];
describe("substringsOfList(s,words)", () => {
    it("should return an an empty array if list of words is greater than substring length", () => {
        const words = ["foo", "bar", "baz"];
        const s = "foobar";
        const result = (0, substrings_of_list_js_1.substringsOfList)(s, words);
        (0, chai_1.expect)(result).to.be.an('array');
        (0, chai_1.expect)(result).to.be.empty;
    });
    it("should return an array of indices of the starting positions of the substrings", () => {
        const result = (0, substrings_of_list_js_1.substringsOfList)(S, WORDS);
        (0, chai_1.expect)(result).to.be.an('array');
        (0, chai_1.expect)(result).to.have.lengthOf(2);
        (0, chai_1.expect)(result).to.include(0);
        (0, chai_1.expect)(result).to.include(13);
    });
});
