"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const peakable_interface_js_1 = require("../peakable_interface.js");
const EMPTY_OBJECT = {};
const LIST = [0, 1, 2, 3, 4, 5, 6, 7];
const EMPTY_LIST = [];
describe("PeakableInterface", () => {
    it("static method _isIterable returns true for array", () => {
        (0, chai_1.expect)(peakable_interface_js_1.PeekableInterface._isIterable(LIST)).be.true;
    });
    it("constructor throws an error if argument is not an itereable", () => {
        (0, chai_1.expect)(() => new peakable_interface_js_1.PeekableInterface(EMPTY_OBJECT)).to.throw(TypeError);
    });
    it("constructor creates new PeakableInterface that inherits from Iterator", () => {
        const peekableInterface = new peakable_interface_js_1.PeekableInterface(LIST);
        (0, chai_1.expect)(peekableInterface instanceof peakable_interface_js_1.PeekableInterface).be.true;
        (0, chai_1.expect)(peekableInterface.iterable).to.equal(LIST);
        (0, chai_1.expect)(peekableInterface.i).to.eql(0);
        (0, chai_1.expect)(peekableInterface.hasNext()).be.true;
    });
    it("peekableInterface with iterable of length 0", () => {
        const peekableInterface = new peakable_interface_js_1.PeekableInterface(EMPTY_LIST);
        (0, chai_1.expect)(peekableInterface.nextVal).to.eql(null);
        (0, chai_1.expect)(peekableInterface.i).to.eql(null);
    });
    it("peekableInterface.next() returns next value in sequence", () => {
        const IDX = 0;
        const peekableInterface = new peakable_interface_js_1.PeekableInterface(LIST);
        (0, chai_1.expect)(peekableInterface.next()).to.eql(LIST[IDX]);
        (0, chai_1.expect)(peekableInterface.next()).to.eql(LIST[IDX + 1]);
    });
    it("peekableInterface.peak() returns what next value should be", () => {
        const IDX = 0;
        const peekableInterface = new peakable_interface_js_1.PeekableInterface(LIST);
        (0, chai_1.expect)(peekableInterface.iterable).to.equal(LIST);
        (0, chai_1.expect)(peekableInterface.i).to.eql(0);
        (0, chai_1.expect)(peekableInterface.hasNext()).be.true;
        (0, chai_1.expect)(peekableInterface.peak()).to.eql(LIST[IDX]);
    });
});
