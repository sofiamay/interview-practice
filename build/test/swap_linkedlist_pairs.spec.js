"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const swap_linkedlist_pairs_js_1 = require("../swap_linkedlist_pairs.js");
const NOT_LINKED_LIST = 42;
const VALUES_1 = [1, 2, 3, 4];
const SWAPPED_VALUES_1 = [2, 1, 4, 3];
const VALUES_2 = [5, 4, 3, 2, 1];
const SWAPPED_VALUES_2 = [4, 5, 2, 3, 1];
const INPUTS = [];
INPUTS.push(VALUES_1);
INPUTS.push(VALUES_2);
const OUTPUTS = [];
OUTPUTS.push(SWAPPED_VALUES_1);
OUTPUTS.push(SWAPPED_VALUES_2);
describe("SinglyLinkedList class used for swap_pairs(list)", () => {
    it("should generate a singly linked list", () => {
        const LINKED_LIST = new swap_linkedlist_pairs_js_1.SinglyLinkedList();
        VALUES_1.forEach((value) => {
            LINKED_LIST.push(value);
        });
        (0, chai_1.expect)(LINKED_LIST.toArray()).to.eql(VALUES_1);
    });
});
describe("swap_pairs(list)", () => {
    it("should swap pairs of a singly linked list", () => {
        let RESULTS = [];
        INPUTS.forEach((values) => {
            let LINKED_LIST = new swap_linkedlist_pairs_js_1.SinglyLinkedList();
            values.forEach((value) => {
                LINKED_LIST.push(value);
            });
            (0, swap_linkedlist_pairs_js_1.swap_pairs)(LINKED_LIST);
            let result = LINKED_LIST.toArray();
            RESULTS.push(result);
        });
        // compare RESULTS with all expected OUTPUTS
        (0, chai_1.expect)(RESULTS).to.eql(OUTPUTS);
    });
    it("should return the same linked list if linked list only has head", () => {
        let LINKED_LIST = new swap_linkedlist_pairs_js_1.SinglyLinkedList();
        LINKED_LIST.push(VALUES_1[0]);
        const EXPECTED = LINKED_LIST.toArray().slice();
        (0, swap_linkedlist_pairs_js_1.swap_pairs)(LINKED_LIST);
        (0, chai_1.expect)(LINKED_LIST.toArray()).to.eql(EXPECTED);
    });
    it("should not do anything when the linked list has no nodes", () => {
        let LINKED_LIST = new swap_linkedlist_pairs_js_1.SinglyLinkedList();
        (0, swap_linkedlist_pairs_js_1.swap_pairs)(LINKED_LIST);
        (0, chai_1.expect)(LINKED_LIST.toArray()).to.be.empty;
    });
});
