import "mocha";
import { assert, expect } from "chai";

import { PeekableInterface } from "../peakable_interface.js";

const EMPTY_OBJECT = {};

describe("PeakableInterface", () => {
  it("constructor creates new PeakableInterface that inherits from Iterator", () => {
    const peekableInterface = new PeekableInterface(EMPTY_OBJECT);
  });
});
