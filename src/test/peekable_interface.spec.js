import "mocha";
import { assert, expect } from "chai";

import { PeekableInterface } from "../peakable_interface.js";

const EMPTY_OBJECT = {};
const LIST = [0, 1, 2, 3, 4, 5, 6, 7];
const EMPTY_LIST = [];

describe("PeakableInterface", () => {
  it("static method _isIterable returns true for array", () => {
    expect(PeekableInterface._isIterable(LIST)).be.true;
  });
  it("constructor throws an error if argument is not an itereable", () => {
    expect(() => new PeekableInterface(EMPTY_OBJECT)).to.throw(TypeError);
  });
  it("constructor creates new PeakableInterface that inherits from Iterator", () => {
    const peekableInterface = new PeekableInterface(LIST);
    expect(peekableInterface instanceof PeekableInterface).be.true;
    expect(peekableInterface.iterable).to.equal(LIST);
    expect(peekableInterface.i).to.eql(0);
    expect(peekableInterface.hasNext()).be.true;
  });
  it("peekableInterface with iterable of length 0", () => {
    const peekableInterface = new PeekableInterface(EMPTY_LIST);
    expect(peekableInterface.nextVal).to.eql(null);
    expect(peekableInterface.i).to.eql(null);
  });
  it("peekableInterface.next() returns next value in sequence", () => {
    const IDX = 0;
    const peekableInterface = new PeekableInterface(LIST);
    expect(peekableInterface.next()).to.eql(LIST[IDX]);
    expect(peekableInterface.next()).to.eql(LIST[IDX+1]);
  });
  it("peekableInterface.peak() returns what next value should be", () => {
    const IDX = 0;
    const peekableInterface = new PeekableInterface(LIST);
    expect(peekableInterface.iterable).to.equal(LIST);
    expect(peekableInterface.i).to.eql(0);
    expect(peekableInterface.hasNext()).be.true;
    expect(peekableInterface.peak()).to.eql(LIST[IDX]);
  });
});
