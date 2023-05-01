import "mocha";
import { assert, expect } from "chai";

import { minIntervalRemovals } from "../min_interval_removals.js";

const TEST_CASE = [
  [7,9],
  [2,4],
  [5,8],
];

const EXPECTED_RESULT = 1;

describe("minIntervalRemovals(intervals)", () => {
  it("should return zero if there are no intervals", () => {
    expect(minIntervalRemovals([])).to.equal(0);
  });
  it("should return the expected number of minimum deletions", () => {
    expect(minIntervalRemovals(TEST_CASE)).to.equal(EXPECTED_RESULT);
  });
});