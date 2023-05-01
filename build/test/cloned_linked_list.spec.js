"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const cloned_linked_list_js_1 = require("../cloned_linked_list.js");
const exampleArray = [0, 1, 2, 3, 4, 5, 6];
const exampleNodes = cloned_linked_list_js_1.Node.nodesFromArray(exampleArray);
const exampleList = new cloned_linked_list_js_1.LinkedList(exampleNodes);
exampleList.addRandomLinks();
describe("Node.nodesFromArray()", () => {
    it("creates a singly linked list from array", () => {
        const copy = cloned_linked_list_js_1.Node.nodesFromArray(exampleArray);
        (0, chai_1.expect)(copy.val).to.equal(exampleArray[0]);
    });
});
describe("linkedlist.intoArray()", () => {
    it("builds an array of nodes in order", () => {
        const nodes = exampleList.intoArray();
        (0, chai_1.expect)(nodes.length).to.eql(exampleArray.length);
        for (let i = 0; i < exampleArray.length; i++) {
            (0, chai_1.expect)(nodes[i].val).to.equal(exampleArray[i]);
        }
    });
});
describe("linkedlist.asArray()", () => {
    it("creates aray of values from linked list", () => {
        const values = exampleList.asArray();
        (0, chai_1.expect)(values.length).to.equal(exampleArray.length);
        (0, chai_1.expect)(values).to.eql(exampleArray);
    });
});
describe("linkedlist.clone()", () => {
    it("clones a lined list", () => {
        const clonedList = exampleList.clone();
        (0, chai_1.expect)(clonedList instanceof cloned_linked_list_js_1.LinkedList).be.true;
        (0, chai_1.expect)(clonedList.head.val).to.equal(exampleList.head.val);
        (0, chai_1.expect)(clonedList.head.random.val).to.equal(exampleList.head.random.val);
        (0, chai_1.expect)(clonedList.asArray()).to.eql(exampleArray);
    });
});
