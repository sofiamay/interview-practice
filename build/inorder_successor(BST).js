"use strict";
class Node {
    constructor(val) {
        this.val = val;
        val;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(val) {
        let node = new Node(val);
        if (this.root == null) {
            this.root = node;
        }
        else {
            this._insertRecursive(this.root, node);
        }
    }
    _insertRecursive(node, newNode) {
        if (node.val == newNode.val) {
            return;
        }
        // Less than node, go to left branch
        if (newNode.val < node.val) {
            if (node.left == null) {
                node.left = newNode;
            }
            else {
                this._insertRecursive(node.left, newNode);
            }
        }
        else {
            // Greater than node, go to right branch
            if (node.right == null) {
                node.right = newNode;
            }
            else {
                this._insertRecursive(node.right, newNode);
            }
        }
    }
    search(val) {
        if (this.root == null) {
            return null;
        }
        else {
            return this._searchRecursive(root, val);
        }
    }
    _searchRecursive(node, val) {
        if (node == null) {
            return null;
        }
        if (val < node.val) {
            return this._searchRecursive(node.left, val);
        }
        else if (val > node.val) {
            return this._searchRecursive(node.right, val);
        }
        else {
            return node;
        }
    }
    minValue(node = this.root) {
        let current = node;
        while (current.left != null) {
            current = current.left;
        }
        return current;
    }
    /* ANSWERING THE PROBLEM:  */
    inOrderSuccessor(node) {
        // if right subtree: find minimum on right branch
        if (node.right) {
            return this.minValue(node.right);
        }
        // Otherwise, search parents
        let parent = node.parent;
        // if node is right child (aka greater than parent):
        // keep searching until parent is found where node is left child of parent (aka node is less than  parent)
        while (parent != null && (node == parent.right)) {
            node = parent;
            parent = parent.parent;
        }
        // if node is left child of parent, return parent
        return parent;
    }
}
// TEST:
const exampleBST = new BinarySearchTree();
exampleBST.insert(10);
exampleBST.insert(5);
exampleBST.insert(30);
exampleBST.insert(22);
exampleBST.insert(35);
const testNode = exampleBST.search(22);
const answerNode = exampleBST.inOrderSuccessor(testNode);
console.log(`The in order successor of ${testNode.val} is ${answerNode.val}`);
