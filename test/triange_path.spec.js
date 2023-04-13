import "mocha";
import { assert, expect } from "chai";

import { trianglePath, getTrianglePath } from "../triangle_path.js";

const EXAMPLE_1 = [[1], [2, 3], [1, 5, 1]];
const RESULT_1 = 9;
const EXAMPLE_2 = [[3], [7,4], [2, 4, 6], [8,5,9,3]];
const RESULT_2 = 23;
const EXAMPLE_3 = [[8],[-4, 4],[2, 2, 6],[1,1,1,1]];
const RESULT_3 = 19;

describe("trianglePath(arr)", () => {
  it("should return the maximum weight path traversing the triangle", () => {
    expect(trianglePath(EXAMPLE_1)).to.equal(RESULT_1);
    expect(trianglePath(EXAMPLE_2)).to.equal(RESULT_2);
    expect(trianglePath(EXAMPLE_3)).to.equal(RESULT_3);
  });
});