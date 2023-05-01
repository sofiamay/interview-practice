import "mocha";
import { assert, expect } from "chai";

import { Node, LinkedList } from "../cloned_linked_list.js";

const exampleArray = [0, 1, 2, 3, 4, 5, 6];
const exampleNodes = Node.nodesFromArray(exampleArray);
const exampleList = new LinkedList(exampleNodes);
exampleList.addRandomLinks();


describe("Node.nodesFromArray()", () => {
  it("creates a singly linked list from array", () => {
    const copy = Node.nodesFromArray(exampleArray);
    expect(copy.val).to.equal(exampleArray[0]);
  });
});

describe("linkedlist.intoArray()", () => {
  it("builds an array of nodes in order", () => {
    const nodes = exampleList.intoArray();
    expect(nodes.length).to.eql(exampleArray.length);
    for (let i=0; i< exampleArray.length; i++) {
      expect(nodes[i].val).to.equal(exampleArray[i]);
    }
  });
});

describe("linkedlist.asArray()", () => {
  it("creates aray of values from linked list", () => {
    const values = exampleList.asArray();
    expect(values.length).to.equal(exampleArray.length);
    expect(values).to.eql(exampleArray);
  });
});

describe("linkedlist.clone()", () => {
  it("clones a lined list", () => {
    const clonedList = exampleList.clone();
    expect(clonedList instanceof LinkedList).be.true;
    expect(clonedList.head.val).to.equal(exampleList.head.val);
    expect(clonedList.head.random.val).to.equal(exampleList.head.random.val);
    expect(clonedList.asArray()).to.eql(exampleArray);
  });
});

