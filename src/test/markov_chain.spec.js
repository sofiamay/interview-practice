import "mocha";
import { assert, expect } from "chai";

import { WeightedGraph, Edge } from "../markov_chain.js";

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
    const weightedGraph = new WeightedGraph();
    expect(weightedGraph).to.have.ownProperty("adjacencyList");
  });
  it(".addVertex(vertex) adds vertex with empty adjacency list", () => {
    const weightedGraph = new WeightedGraph();
    weightedGraph.addVertex("a");
    expect(weightedGraph.adjacencyList).to.include.keys("a");
    const edges = weightedGraph.adjacencyList.get("a");
    expect(edges).to.be.a('array');
    expect(edges).to.be.empty;
  });
  it(".addEdge(from, to, weight) adds an edge to the adjacency list", () => {
    const weightedGraph = new WeightedGraph();
    weightedGraph.addVertex("a");
    weightedGraph.addEdge("a", "b", 0.5);
    const edges = weightedGraph.adjacencyList.get("a");
    expect(edges).to.have.lengthOf(1);
    const edge = edges[0];
    expect(edge).to.be.an.instanceOf(Edge);
    expect(edge.to).to.equal("b");
    expect(edge.weight).to.equal(0.5);
  });
  it(".fromTransitionList(transitions) adds vertices and edges to the graph", () => {
    const weightedGraph = new WeightedGraph();
    weightedGraph.fromTransitionList(TEST_TRANSITIONS);
    expect(weightedGraph.adjacencyList).to.have.keys("a", "b", "c");
    expect(weightedGraph.adjacencyList.get("a")).to.have.lengthOf(3);
  });
  it("static .generateTransitions(transitions, start, numSteps) return map of times visited each vertex", () => {
    const  result = WeightedGraph.generateTransitions(TEST_TRANSITIONS, TEST_START, TEST_NUM_STEPS);
    expect(result).to.be.an.instanceOf(Map);
    expect(result).to.have.keys("a", "b", "c");
  });
});