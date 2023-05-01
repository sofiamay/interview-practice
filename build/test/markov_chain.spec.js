"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const markov_chain_js_1 = require("../markov_chain.js");
const TEST_TRANSITIONS = [
    ['a', 'a', 0.9],
    ['a', 'b', 0.075],
    ['a', 'c', 0.025],
    ['b', 'a', 0.15],
    ['b', 'b', 0.8],
    ['b', 'c', 0.05],
    ['c', 'a', 0.25],
    ['c', 'b', 0.25],
    ['c', 'c', 0.5]
];
const TEST_START = "a";
const TEST_NUM_STEPS = 5000;
describe("Weighted Graph", () => {
    it("should contruct a new instance", () => {
        const weightedGraph = new markov_chain_js_1.WeightedGraph();
        (0, chai_1.expect)(weightedGraph).to.have.ownProperty("adjacencyList");
    });
    it(".addVertex(vertex) adds vertex with empty adjacency list", () => {
        const weightedGraph = new markov_chain_js_1.WeightedGraph();
        weightedGraph.addVertex("a");
        (0, chai_1.expect)(weightedGraph.adjacencyList).to.include.keys("a");
        const edges = weightedGraph.adjacencyList.get("a");
        (0, chai_1.expect)(edges).to.be.a('array');
        (0, chai_1.expect)(edges).to.be.empty;
    });
    it(".addEdge(from, to, weight) adds an edge to the adjacency list", () => {
        const weightedGraph = new markov_chain_js_1.WeightedGraph();
        weightedGraph.addVertex("a");
        weightedGraph.addEdge("a", "b", 0.5);
        const edges = weightedGraph.adjacencyList.get("a");
        (0, chai_1.expect)(edges).to.have.lengthOf(1);
        const edge = edges[0];
        (0, chai_1.expect)(edge).to.be.an.instanceOf(markov_chain_js_1.Edge);
        (0, chai_1.expect)(edge.to).to.equal("b");
        (0, chai_1.expect)(edge.weight).to.equal(0.5);
    });
    it(".fromTransitionList(transitions) adds vertices and edges to the graph", () => {
        const weightedGraph = new markov_chain_js_1.WeightedGraph();
        weightedGraph.fromTransitionList(TEST_TRANSITIONS);
        (0, chai_1.expect)(weightedGraph.adjacencyList).to.have.keys("a", "b", "c");
        (0, chai_1.expect)(weightedGraph.adjacencyList.get("a")).to.have.lengthOf(3);
    });
    it("static .generateTransitions(transitions, start, numSteps) return map of times visited each vertex", () => {
        const result = markov_chain_js_1.WeightedGraph.generateTransitions(TEST_TRANSITIONS, TEST_START, TEST_NUM_STEPS);
        (0, chai_1.expect)(result).to.be.an.instanceOf(Map);
        (0, chai_1.expect)(result).to.have.keys("a", "b", "c");
    });
});
