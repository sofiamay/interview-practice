import "mocha";
import { assert, expect } from "chai";

import { PrefixNode, shortestPrefixes } from "../shortest_prefixes.js";

const TEST_INPUT = [
  "dog",
  "cat",
  "apple",
  "apricot",
  "fish",
];

const EXPECTED_RESULTS = [ 'app', 'apr', 'c', 'd', 'f' ];


describe("PrefixNode", () => {
  it("should create a node with an empty children array and frequency of 0", () => {
    const prefixNode = new PrefixNode();
    const children = prefixNode.children;
    const freq = prefixNode.freq;
    expect(Array.isArray(children)).to.be.true;
    expect(freq).to.equal(0);
  });
  it("should insert a new word into the tree", () => {
    const word = "dog";
    const prefixNode = new PrefixNode();
    PrefixNode.insert(prefixNode, word);
    const firstLetter = prefixNode.children[word.charCodeAt(0)];
    expect(firstLetter).to.exist;
    const secondLetter = firstLetter.children[word.charCodeAt(1)];
    expect(secondLetter).to.exist;
    const thirdLetter = secondLetter.children[word.charCodeAt(2)];
    expect(thirdLetter).to.exist;
  });
  it("should update the frequency when inserting 2 words with common letters", () => {
    const firstWord = "dog";
    const secondWord = "dot";
    const prefixNode = new PrefixNode();
    PrefixNode.insert(prefixNode, firstWord);
    PrefixNode.insert(prefixNode, secondWord);
    const d_node = prefixNode.children[firstWord.charCodeAt(0)];
    expect(d_node.freq).to.equal(2);
    const do_node = d_node.children[firstWord.charCodeAt(1)];
    expect(do_node.freq).to.equal(2);
    const dog_node = do_node.children[firstWord.charCodeAt(2)];
    expect(dog_node.freq).to.equal(1);
  });
});

describe("shortestPrefixes(arr)", () => {
  it("should work", () => {
    const results = shortestPrefixes(TEST_INPUT);
    // put results and expected results in the same order. If correct, arrays should be equal
    results.sort();
    EXPECTED_RESULTS.sort();
    expect(results).to.eql(EXPECTED_RESULTS);
    
  });
});
