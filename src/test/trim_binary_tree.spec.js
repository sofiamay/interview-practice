import "mocha";
import { assert, expect } from "chai";

import { BinaryNode, trimTree } from "../trim_binary_tree.js";

/*
  example_1
    0
    / \
  1   0
      / \
    1   0
    / \
  0   0

  --->

    0
    / \
  1   0
      /
    1
*/

/*
  example_2
  1  
    \ 
      0
      / \
      0   1

  --->

  1  
  \
    0
    \
      1   
*/


describe("trimTree(BinaryNode)", () => {
  it("should return null when given a null argument", () => {
    expect(trimTree(null)).to.equal(null);
  });
  it("return the same node when called on a single node with val of 1", () => {
    const node = new BinaryNode(1);
    expect(trimTree(node)).to.equal(node);
  });
  it("trim the first example tree", () => {
    let example_1 = new BinaryNode(0);
    example_1.left = new BinaryNode(1);
    example_1.right = new BinaryNode(0);
    example_1.right.left = new BinaryNode(1);
    example_1.right.right = new BinaryNode(0);
    example_1.right.left.left = new BinaryNode(0);
    example_1.right.left.right = new BinaryNode(0);

    let trimmed = trimTree(example_1);
    expect(trimmed.val).to.equal(0);
    expect(trimmed.left.val).to.equal(1);
    expect(trimmed.right.val).to.equal(0);
    expect(trimmed.left.left).to.equal(null);
    expect(trimmed.left.right).to.equal(null);
    expect(trimmed.right.left.val).to.equal(1);
    expect(trimmed.right.right).to.equal(null);
  });
  it("trim the second example tree", () => {
    let example_2 = new BinaryNode(1);
    example_2.right = new BinaryNode(0);
    example_2.right.left = new BinaryNode(0);
    example_2.right.right = new BinaryNode(1);

    let trimmed = trimTree(example_2);
    expect(trimmed.val).to.equal(1);
    expect(trimmed.left).to.equal(null);
    expect(trimmed.right.val).to.equal(0);
    expect(trimmed.right.left).to.equal(null);
    expect(trimmed.right.right.val).to.equal(1);
  });
});
