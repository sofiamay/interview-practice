"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const is_isomorphic_js_1 = require("../is_isomorphic.js");
const TRUE_EXAMPLE = ["egg", "add"];
const FALSE_EXAMPLE = ["foo", "bar"];
describe("isIsoMorphic(str1, str2)", () => {
    it("should return false if strings are of different lengths", () => {
        const STR1 = "foo";
        const STR2 = "barfoo";
        (0, chai_1.expect)((0, is_isomorphic_js_1.isIsoMorphic)(STR1, STR2)).to.be.false;
    });
    it("should return true when strings are empty", () => {
        const STR1 = "";
        const STR2 = "";
        (0, chai_1.expect)((0, is_isomorphic_js_1.isIsoMorphic)(STR1, STR2)).to.be.true;
    });
    it("should return true when strings are isomorphic", () => {
        const STR1 = TRUE_EXAMPLE[0];
        const STR2 = TRUE_EXAMPLE[1];
        (0, chai_1.expect)((0, is_isomorphic_js_1.isIsoMorphic)(STR1, STR2)).to.be.true;
    });
    it("should return false when strings are not isomorphic", () => {
        const STR1 = FALSE_EXAMPLE[0];
        const STR2 = FALSE_EXAMPLE[1];
        (0, chai_1.expect)((0, is_isomorphic_js_1.isIsoMorphic)(STR1, STR2)).to.be.false;
    });
});
