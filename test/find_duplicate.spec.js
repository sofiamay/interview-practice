import "mocha";
import { assert, expect } from "chai";

import { findDuplicate, findDuplicateFaster } from "../find_duplicate.js";

const SHORT_ARR = [1, 1];
const EXAMPLE_ARR = [ 6, 4, 5, 2, 7, 8, 2, 3, 1 ];
const EXAMPLE_RESULT = 2;
const ANOTHER_ARR = [1,2,1,4,3];
const ANOTHER_RESULT = 1;

describe("findDuplicate(arr)", () => {
  it("should throw an error if argument is not array", () => {
    expect(findDuplicate.bind(null, 42)).to.throw(TypeError);
  });
  it("should return the first (or second) item in array if arr length is 2", () => {
    expect(findDuplicate(SHORT_ARR)).to.eql(SHORT_ARR[0]);
  });
  it("should return the duplicate number", () => {
    expect(findDuplicate(EXAMPLE_ARR)).to.eql(EXAMPLE_RESULT);
  });
});

describe("findDuplicateFaster(arr)", () => {
  it("should throw an error if argument is not array", () => {
    expect(findDuplicateFaster.bind(null, 42)).to.throw(TypeError);
  });
  it("should reeturn the duplicate number", () => {
    expect(findDuplicateFaster(EXAMPLE_ARR)).to.eql(EXAMPLE_RESULT);
    expect(findDuplicateFaster(ANOTHER_ARR)).to.eql(ANOTHER_RESULT);
  });
});
  
  