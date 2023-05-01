"use strict";
/*
You are given a starting state start, a list of transition probabilities for a Markov chain, and a number of steps num_steps. Run the Markov chain starting from start for num_steps and compute the number of times we visited each state.

For example, given the starting state a, number of steps 5000, and the following transition probabilities:
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeightedGraph = exports.Edge = void 0;
class Edge {
    constructor(weight, to, from) {
        this.weight = weight;
        this.to = to;
        this.from = from;
    }
}
exports.Edge = Edge;
class WeightedGraph {
    constructor() {
        this.adjacencyList = new Map();
    }
    static generateTransitions(transitions, start, numSteps) {
        const weightedGraph = new WeightedGraph();
        weightedGraph.fromTransitionList(transitions);
        weightedGraph.sortEdges();
        const result = new Map();
        let current = start;
        result.set(current, 1);
        for (let i = 1; i <= numSteps; i++) {
            const edges = weightedGraph.adjacencyList.get(current);
            const random = Math.random();
            let sum = 0;
            for (let j = 0; j < edges.length; j++) {
                sum += edges[j].weight;
                if (sum >= random) {
                    current = edges[j].to;
                    if (result.has(current)) {
                        result.set(current, result.get(current) + 1);
                    }
                    else {
                        result.set(current, 1);
                    }
                    break;
                }
            }
        }
        return result;
    }
    addVertex(vertex) {
        this.adjacencyList.set(vertex, []);
    }
    addEdge(from, to, weight) {
        if (!(this.adjacencyList.has(from))) {
            this.addVertex(from);
        }
        this.adjacencyList.get(from).push(new Edge(weight, to, from));
    }
    sortEdges() {
        for (let [key, edges] of this.adjacencyList) {
            edges.sort((a, b) => a.weight - b.weight);
        }
    }
    fromTransitionList(transitions) {
        for (let i = 0; i < transitions.length; i++) {
            const [from, to, weight] = transitions[i];
            if (!(this.adjacencyList.has(from))) {
                this.addVertex(from);
            }
            this.addEdge(from, to, weight);
        }
    }
}
exports.WeightedGraph = WeightedGraph;
exports.default = {
    WeightedGraph,
    Edge,
};
