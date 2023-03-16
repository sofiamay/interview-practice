import "mocha";
import { assert, expect } from "chai";

import { flattenDict } from "../flatten_dict.js";

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
    const result = flattenDict({});
    expect(result).to.be.an('object');
    expect(result).to.be.empty;
  });
  it("should return a flattened dictionary", () => {
    const result = flattenDict(EXAMPLE);
    expect(result).to.eql(EXPECTED_RESULT);
  });
});