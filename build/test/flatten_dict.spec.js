"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const flatten_dict_js_1 = require("../flatten_dict.js");
const EXAMPLE = {
    "key": 3,
    "foo": {
        "a": 5,
        "bar": {
            "baz": 8
        }
    }
};
const EXPECTED_RESULT = {
    key: 3,
    'foo.a': 5,
    'foo.bar.baz': 8
};
describe("flattenDict(dict)", () => {
    it("should return an empty dictionary when given an empty dictionary", () => {
        const result = (0, flatten_dict_js_1.flattenDict)({});
        (0, chai_1.expect)(result).to.be.an('object');
        (0, chai_1.expect)(result).to.be.empty;
    });
    it("should return a flattened dictionary", () => {
        const result = (0, flatten_dict_js_1.flattenDict)(EXAMPLE);
        (0, chai_1.expect)(result).to.eql(EXPECTED_RESULT);
    });
});
