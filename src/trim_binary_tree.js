export class BinaryNode {
  constructor(val)
  {
    if (val == 0 || val == 1) {
      this.val = val;
      this.left = null;
      this.right = null;
    } else {
      throw new TypeError(`BinaryNode: val ${val} must be 0 or 1`);
    }
  }
};

export function trimTree(node) {
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

export default {
  BinaryNode,
  trimTree,
}
