"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const shortest_prefixes_js_1 = require("../shortest_prefixes.js");
const TEST_INPUT = [
    "dog",
    "cat",
    "apple",
    "apricot",
    "fish",
];
const EXPECTED_RESULTS = ['app', 'apr', 'c', 'd', 'f'];
describe("PrefixNode", () => {
    it("should create a node with an empty children array and frequency of 0", () => {
        const prefixNode = new shortest_prefixes_js_1.PrefixNode();
        const children = prefixNode.children;
        const freq = prefixNode.freq;
        (0, chai_1.expect)(Array.isArray(children)).to.be.true;
        (0, chai_1.expect)(freq).to.equal(0);
    });
    it("should insert a new word into the tree", () => {
        const word = "dog";
        const prefixNode = new shortest_prefixes_js_1.PrefixNode();
        shortest_prefixes_js_1.PrefixNode.insert(prefixNode, word);
        const firstLetter = prefixNode.children[word.charCodeAt(0)];
        (0, chai_1.expect)(firstLetter).to.exist;
        const secondLetter = firstLetter.children[word.charCodeAt(1)];
        (0, chai_1.expect)(secondLetter).to.exist;
        const thirdLetter = secondLetter.children[word.charCodeAt(2)];
        (0, chai_1.expect)(thirdLetter).to.exist;
    });
    it("should update the frequency when inserting 2 words with common letters", () => {
        const firstWord = "dog";
        const secondWord = "dot";
        const prefixNode = new shortest_prefixes_js_1.PrefixNode();
        shortest_prefixes_js_1.PrefixNode.insert(prefixNode, firstWord);
        shortest_prefixes_js_1.PrefixNode.insert(prefixNode, secondWord);
        const d_node = prefixNode.children[firstWord.charCodeAt(0)];
        (0, chai_1.expect)(d_node.freq).to.equal(2);
        const do_node = d_node.children[firstWord.charCodeAt(1)];
        (0, chai_1.expect)(do_node.freq).to.equal(2);
        const dog_node = do_node.children[firstWord.charCodeAt(2)];
        (0, chai_1.expect)(dog_node.freq).to.equal(1);
    });
});
describe("shortestPrefixes(arr)", () => {
    it("should work", () => {
        const results = (0, shortest_prefixes_js_1.shortestPrefixes)(TEST_INPUT);
        // put results and expected results in the same order. If correct, arrays should be equal
        results.sort();
        EXPECTED_RESULTS.sort();
        (0, chai_1.expect)(results).to.eql(EXPECTED_RESULTS);
    });
});
