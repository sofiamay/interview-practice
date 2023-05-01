"use strict";
/*
Given a linked list and a positive integer k, rotate the list to the right by k places.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.rotateLinkedList = exports.LinkedList = exports.Node = void 0;
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}
exports.Node = Node;
class LinkedList {
    constructor() {
        this.head = null;
    }
    static areIdentical(list1, list2) {
        if (list1.head == null && list2.head == null)
            return true;
        let current1 = list1.head;
        let current2 = list2.head;
        while (current1 != null && current2 != null) {
            if (current1.data != current2.data)
                return false;
            current1 = current1.next;
            current2 = current2.next;
        }
        return (current1 == null && current2 == null);
    }
    push(val) {
        const node = new Node(val);
        if (this.head === null) {
            this.head = node;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = node;
    }
}
exports.LinkedList = LinkedList;
function rotateLinkedList(list, k) {
    if (!(list instanceof LinkedList)) {
        throw new Error('lilst must be a LinkedList');
    }
    if (!(Number.isInteger(k)) || k < 0) {
        throw new Error('k must be a positive integer');
    }
    // get to the kth node and save it in a variable
    if (k == 0)
        return;
    let current = list.head;
    let count = 1;
    while (count < k) {
        // if we reach the end of the list, start over
        if (current == null) {
            current = list.head;
        }
        current = current.next;
        count++;
    }
    // if k = list length, return
    if (current.next == null)
        return;
    let kthNode = current;
    // point current to the last node
    while (current.next != null) {
        current = current.next;
    }
    current.next = list.head;
    list.head = kthNode.next;
    kthNode.next = null;
}
exports.rotateLinkedList = rotateLinkedList;
exports.default = {
    Node,
    LinkedList,
    rotateLinkedList,
};
