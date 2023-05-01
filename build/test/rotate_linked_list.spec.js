"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const rotate_linked_list_js_1 = require("../rotate_linked_list.js");
const NOT_HEAD = "not a head";
const TEST_LIST = new rotate_linked_list_js_1.LinkedList();
TEST_LIST.push(7);
TEST_LIST.push(7);
TEST_LIST.push(3);
TEST_LIST.push(5);
const K = 2;
const NEGATIVE_K = -1;
const EXPECTED_LIST = new rotate_linked_list_js_1.LinkedList();
EXPECTED_LIST.push(3);
EXPECTED_LIST.push(5);
EXPECTED_LIST.push(7);
EXPECTED_LIST.push(7);
describe("rotateLinkedList(head, k)", () => {
    it("should throw an error if head is not a LinkedList", () => {
        (0, chai_1.expect)(rotate_linked_list_js_1.rotateLinkedList.bind(null, NOT_HEAD, K)).to.throw(Error);
    });
    it("should throw an error if k is not an integer or is less than 1", () => {
        const LINKED_LIST = new rotate_linked_list_js_1.LinkedList();
        LINKED_LIST.push(7);
        LINKED_LIST.push(7);
        LINKED_LIST.push(3);
        LINKED_LIST.push(5);
        (0, chai_1.expect)(rotate_linked_list_js_1.rotateLinkedList.bind(null, LINKED_LIST, NEGATIVE_K)).to.throw(Error);
    });
    it("should return the same list if k is 0", () => {
        const LINKED_LIST = new rotate_linked_list_js_1.LinkedList();
        LINKED_LIST.push(7);
        LINKED_LIST.push(7);
        LINKED_LIST.push(3);
        LINKED_LIST.push(5);
        (0, rotate_linked_list_js_1.rotateLinkedList)(LINKED_LIST, 0);
        (0, chai_1.expect)(rotate_linked_list_js_1.LinkedList.areIdentical(LINKED_LIST, TEST_LIST)).to.be.true;
    });
    it("should return the same list if k is the length of the list", () => {
        const LINKED_LIST = new rotate_linked_list_js_1.LinkedList();
        LINKED_LIST.push(7);
        LINKED_LIST.push(7);
        LINKED_LIST.push(3);
        LINKED_LIST.push(5);
        (0, rotate_linked_list_js_1.rotateLinkedList)(LINKED_LIST, 4);
        (0, chai_1.expect)(rotate_linked_list_js_1.LinkedList.areIdentical(LINKED_LIST, TEST_LIST)).to.be.true;
    });
    it("should return the expected result", () => {
        const LINKED_LIST = new rotate_linked_list_js_1.LinkedList();
        LINKED_LIST.push(7);
        LINKED_LIST.push(7);
        LINKED_LIST.push(3);
        LINKED_LIST.push(5);
        (0, rotate_linked_list_js_1.rotateLinkedList)(LINKED_LIST, K);
        (0, chai_1.expect)(rotate_linked_list_js_1.LinkedList.areIdentical(LINKED_LIST, EXPECTED_LIST)).to.be.true;
    });
});
