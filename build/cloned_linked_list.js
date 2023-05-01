"use strict";
/*
Given the head to a singly linked list, where each node also has a “random” pointer that points to anywhere in the linked list,
deep clone the list.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = exports.Node = void 0;
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
    static nodesFromArray(arr) {
        let head = new Node(arr[0]);
        let current = head;
        let next = null;
        for (let i = 1; i < arr.length; i++) {
            next = new Node(arr[i]);
            current.next = next;
            current = next;
        }
        return head;
    }
    // override
    valueOf() {
        return this.val;
    }
    // override
    toString() {
        return new String(this.valueOf());
    }
}
exports.Node = Node;
class LinkedList {
    constructor(head) {
        this.head = head;
    }
    intoArray() {
        let array = [];
        let current = this.head;
        array.push(current);
        while (current.next) {
            array.push(current.next);
            current = current.next;
        }
        return array;
    }
    asArray() {
        const nodes = this.intoArray();
        let result = [];
        nodes.forEach((node) => {
            result.push(node.val);
        });
        return result;
    }
    addRandomLinks() {
        let nodes = this.intoArray();
        let current = null;
        let random = null;
        for (let i = 0; i < nodes.length; i++) {
            current = nodes[i];
            random = nodes[Math.floor(Math.random() * nodes.length)];
            current.random = random;
        }
    }
    clone() {
        const hash = new Map();
        let originalNode = this.head;
        let clonedNode = new Node(originalNode.val);
        hash.set(originalNode, clonedNode);
        // copy linked list while mapping original nodes to new nodes in a hashtable
        while (originalNode.next) {
            clonedNode.next = new Node(originalNode.next.val);
            originalNode = originalNode.next;
            clonedNode = clonedNode.next;
            hash.set(originalNode, clonedNode);
        }
        // clone the random pointers by passing through the origianl list again and getting values of the nodes being pointed to from the hashtable
        originalNode = this.head;
        let clonedRandom = null;
        while (originalNode) {
            clonedNode = hash.get(originalNode);
            clonedRandom = hash.get(originalNode.random);
            clonedNode.random = clonedRandom;
            originalNode = originalNode.next;
        }
        // return cloned list
        const clonedHead = hash.get(this.head);
        return new LinkedList(clonedHead);
    }
}
exports.LinkedList = LinkedList;
// 1.) Create a map of old nodes to duplicates whilel linking the duplicates by setting .next
// 2) Traverse the old list again, this time setting the .random of the clone to the .random of the original
exports.default = {
    Node,
    LinkedList,
};
