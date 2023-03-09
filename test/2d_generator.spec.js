import "mocha";
import { assert, expect } from "chai";

import { Generator2d } from "../2d_generator.js";

const ARR = [
  [1,2],
  [3,4],
];

describe("Generator2d", () => {
  it("should construct a new instance", () => {
    const generator2d = new Generator2d(ARR);
    expect(generator2d instanceof Generator2d).to.be.true;
  });
  it("should yield the next value in the 2d array", () => {
    const generator2d = new Generator2d(ARR);
    const val = generator2d.next().value;
    expect(val).to.equal(1);
    const nextVal = generator2d.next().value;
    expect(nextVal).to.equal(2);
    const thirdVal = generator2d.next().value;
    expect(thirdVal).to.equal(3);
    const fourthVal = generator2d.next().value;
    expect(fourthVal).to.equal(4);
  });
});

  