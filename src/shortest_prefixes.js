export class PrefixNode {
  constructor() {
  this.children = new Array(256);
  this.freq = 0; // To store frequency
  }

  static insert(root, str) {
    // Length of the string
    const len = str.length;
    let current = root;
   
    // Traversing over the length of given str.
    for (let level = 0; level < len; level++) {
      // Get index of child node from current character
      // in string.
      const index = str.charCodeAt(level);
      
      // Create new children array if it doesn't currently exist
      if (!current.children[index]) {
        current.children[index] = new PrefixNode();
      }
      current.children[index].freq++;
      
      // Move to the children.
      current = current.children[index];
    }
  }
}

export function shortestPrefixes(arr) {
  let n = arr.length;

  // Construct a PrefixTree of all words keeping track of letter frequency
  const root = new PrefixNode();
  for (let i = 0; i < n; i++) {
    PrefixNode.insert(root, arr[i]);
  }
 
  // Create an array to store all prefixes
  let prefixes = new Array(256);
  let results = [];
 
  // update results with this recursive function
  _findPrefixes(root, prefixes, 0, results);

  return results;
}

function _findPrefixes(root, prefix, ind, results) {
  // Corner case
  if (root == null) return;
 
  // Base case
  if (root.freq == 1) {
    prefix[ind] = '\0';
    let i = 0;
    let word = "";
    while(prefix[i] != '\0') {
      word += prefix[i++];
    }
    results.push(word);
    return;
  }
 
  for (let i = 0; i < 256; i++) {
    if (root.children[i] != null) {
      prefix[ind] = String.fromCharCode(i);
      _findPrefixes(root.children[i], prefix, ind + 1, results);
    }
  }
}

export default {
  PrefixNode,
  shortestPrefixes,
  }