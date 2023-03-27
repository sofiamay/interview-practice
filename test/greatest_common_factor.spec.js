import "mocha";
import { assert, expect } from "chai";

import { getGCF, gcf } from "../greatest_common_factor.js";

describe("gcf(a, b)", () => {
  it("should throw an error if a or b is not a positive integer", () => {
    const a = "string";
    const b = 1;
    expect(gcf.bind(null, a, b)).to.throw(TypeError);
  });
  it("should return the greatest common factor between a and b", () => {
    const a = 4;
    const b = 6;
    const expected = 2;
    expect(gcf(a, b)).to.equal(expected);
  });
});

describe("getGCF(array)", () => {
  it("should return the greatest common factor of the array", () => {
    const arr = [42, 56, 14];
    const expected = 14;
    const result = getGCF(arr);
    expect(result).to.equal(expected);
  });
});
