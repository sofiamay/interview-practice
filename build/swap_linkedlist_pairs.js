"use strict";
/*
Given the head of a singly linked list, swap every two nodes and return its head.

For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap_pairs = exports.SinglyLinkedList = void 0;
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
    //swaps values of the nodes
    static swap(firstNode, secondNode) {
        let temp = firstNode.val;
        firstNode.val = secondNode.val;
        secondNode.val = temp;
        return;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    toArray() {
        let result = [];
        if (!this.head) {
            return result;
        }
        let current = this.head;
        while (current != null) {
            result.push(current.val);
            current = current.next;
        }
        return result;
    }
}
exports.SinglyLinkedList = SinglyLinkedList;
function swap_pairs(list) {
    if (!(list instanceof SinglyLinkedList)) {
        throw new TypeError(`swap_pairs(list): list - ${list} must be instance of SinglyLinkedList `);
    }
    let first = list.head;
    while (first != null && first.next != null) {
        let second = first.next;
        // swap
        let temp = first.val;
        first.val = second.val;
        second.val = temp;
        // Node.swap(first, second);
        first = second.next;
    }
}
exports.swap_pairs = swap_pairs;
exports.default = {
    SinglyLinkedList,
    swap_pairs,
};
