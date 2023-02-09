import "mocha";
import { assert, expect } from "chai";

import { maxProfit } from "../max_profit.js";

const NOT_ARRAY = 42;
const NOT_INT = Math.PI;
const EMPTY_ARRAY = [];
const K = 2;
const TEST_ARRAY = [5, 2, 4, 0, 1];
const TEST_EXPECTED_RESULT = 3;

describe("maxProfit(arr, k)", () => {
  it("should throw an error if arguments are not of the correct type", () => {
    expect(maxProfit.bind(null, NOT_ARRAY, NOT_INT)).to.throw(TypeError);
  });
  it("should return 0 if arr is empty", () => {
    const result = maxProfit(EMPTY_ARRAY, K);
    expect(result).to.eql(0);
  });
  it("should return max profits", () => {
    const result = maxProfit(TEST_ARRAY, K);
    expect(result).to.eql(TEST_EXPECTED_RESULT);
  });
});