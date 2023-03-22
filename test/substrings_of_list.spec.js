import "mocha";
import { assert, expect } from "chai";

import { substringsOfList } from "../substrings_of_list.js";

const S = "dogcatcatcodecatdog";
const WORDS = ["cat", "dog"];

describe("substringsOfList(s,words)", () => {
  it("should return an an empty array if list of words is greater than substring length", () => {
    const words = ["foo", "bar", "baz"];
    const s = "foobar";
    const result = substringsOfList(s, words);
    expect(result).to.be.an('array');
    expect(result).to.be.empty;
  });
  it("should return an array of indices of the starting positions of the substrings", () => {
    const result = substringsOfList(S, WORDS);
    expect(result).to.be.an('array');
    expect(result).to.have.lengthOf(2);
    expect(result).to.include(0);
    expect(result).to.include(13);
  });
});