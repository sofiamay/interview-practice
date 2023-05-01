import "mocha";
import { assert, expect } from "chai";

import { BitArray } from "../bit_array.js";

const SIZE = 16;
const I_OUT_OF_RANGE = 18;
const I_NOT_INT = 2.45;
const I_TEST = 2;
const VAL_NOT_INT = 8.56;
const VAL_TEST = 1;

// each index of values holds an [i, val] pair. Each pair is a valid integer in range
const VALUES = [
  [2, 1],
  [0,0],
  [8, 0],
  [9,1],
  [2,0],
];



describe("BitArray", () => {
  it("new BitArray(SIZE) should initialize BitArray instance of this.SIZE=SIZE and this.map to be empty", () => {
    const bitArray = new BitArray(SIZE);
    expect(bitArray.size).to.exist;
    expect(bitArray.size).to.eql(SIZE);
    expect(bitArray.map).to.exist;
    expect(bitArray.map.size).to.eql(0);
  });
  it("new BitArray.init(SIZE) static method should construct new BitArray isntance", () => {
    const bitArray = BitArray.init(SIZE);
    expect(bitArray.size).to.exist;
    expect(bitArray.size).to.eql(SIZE);
    expect(bitArray.map).to.exist;
    expect(bitArray.map.size).to.eql(0);
  });
  it("bitArray.get(i) should get the value at index i", () => {
    const bitArray = BitArray.init(SIZE);
    expect(bitArray.get(0)).to.eql(0);
    expect(bitArray.get.bind(bitArray, I_OUT_OF_RANGE)).to.throw(RangeError);
    expect(bitArray.get.bind(bitArray, I_NOT_INT)).to.throw(TypeError);
  });
  it("bitArray.set(i, val) should set index i to val", () => {
    const bitArray = BitArray.init(SIZE);
    expect(bitArray.set.bind(bitArray, I_OUT_OF_RANGE, VAL_TEST)).to.throw(RangeError);
    expect(bitArray.set.bind(bitArray, I_TEST, VAL_NOT_INT)).to.throw(TypeError);
    VALUES.forEach((pair) => {
      let i = pair[0];
      let val = pair[1];
      bitArray.set(i, val);
      expect(bitArray.get(i)).to.eql(val);
    });
  });
});
