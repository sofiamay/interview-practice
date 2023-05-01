"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.trimTree = exports.BinaryNode = void 0;
class BinaryNode {
    constructor(val) {
        if (val == 0 || val == 1) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
        else {
            throw new TypeError(`BinaryNode: val ${val} must be 0 or 1`);
        }
    }
}
exports.BinaryNode = BinaryNode;
;
function trimTree(node) {
    if (!node) {
        return null;
    }
    node.left = trimTree(node.left);
    node.right = trimTree(node.right);
    if ((node.val == 0) && (node.left == null) && (node.right == null)) {
        return null;
    }
    return node;
}
exports.trimTree = trimTree;
exports.default = {
    BinaryNode,
    trimTree,
};
