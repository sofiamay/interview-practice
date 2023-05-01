"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const trim_binary_tree_js_1 = require("../trim_binary_tree.js");
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
        (0, chai_1.expect)((0, trim_binary_tree_js_1.trimTree)(null)).to.equal(null);
    });
    it("return the same node when called on a single node with val of 1", () => {
        const node = new trim_binary_tree_js_1.BinaryNode(1);
        (0, chai_1.expect)((0, trim_binary_tree_js_1.trimTree)(node)).to.equal(node);
    });
    it("trim the first example tree", () => {
        let example_1 = new trim_binary_tree_js_1.BinaryNode(0);
        example_1.left = new trim_binary_tree_js_1.BinaryNode(1);
        example_1.right = new trim_binary_tree_js_1.BinaryNode(0);
        example_1.right.left = new trim_binary_tree_js_1.BinaryNode(1);
        example_1.right.right = new trim_binary_tree_js_1.BinaryNode(0);
        example_1.right.left.left = new trim_binary_tree_js_1.BinaryNode(0);
        example_1.right.left.right = new trim_binary_tree_js_1.BinaryNode(0);
        let trimmed = (0, trim_binary_tree_js_1.trimTree)(example_1);
        (0, chai_1.expect)(trimmed.val).to.equal(0);
        (0, chai_1.expect)(trimmed.left.val).to.equal(1);
        (0, chai_1.expect)(trimmed.right.val).to.equal(0);
        (0, chai_1.expect)(trimmed.left.left).to.equal(null);
        (0, chai_1.expect)(trimmed.left.right).to.equal(null);
        (0, chai_1.expect)(trimmed.right.left.val).to.equal(1);
        (0, chai_1.expect)(trimmed.right.right).to.equal(null);
    });
    it("trim the second example tree", () => {
        let example_2 = new trim_binary_tree_js_1.BinaryNode(1);
        example_2.right = new trim_binary_tree_js_1.BinaryNode(0);
        example_2.right.left = new trim_binary_tree_js_1.BinaryNode(0);
        example_2.right.right = new trim_binary_tree_js_1.BinaryNode(1);
        let trimmed = (0, trim_binary_tree_js_1.trimTree)(example_2);
        (0, chai_1.expect)(trimmed.val).to.equal(1);
        (0, chai_1.expect)(trimmed.left).to.equal(null);
        (0, chai_1.expect)(trimmed.right.val).to.equal(0);
        (0, chai_1.expect)(trimmed.right.left).to.equal(null);
        (0, chai_1.expect)(trimmed.right.right.val).to.equal(1);
    });
});
