"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
const chai_1 = require("chai");
const busiest_time_slots_js_1 = require("../busiest_time_slots.js");
const EVENTS = [
    { "timestamp": 1526579928, "count": 3, "type": "enter" },
    { "timestamp": 1526579982, "count": 4, "type": "enter" },
    { "timestamp": 1526580054, "count": 5, "type": "exit" },
    { "timestamp": 1526580128, "count": 1, "type": "enter" },
    { "timestamp": 1526580382, "count": 3, "type": "exit" }
];
const EXPECTED_RESULT = [
    { timestamp: 1526579982, count: 4, type: 'enter' },
    { timestamp: 1526580054, count: 5, type: 'exit' }
];
describe("busiestTimeSlots", () => {
    it("should return a pair of time slots as array with 2 items", () => {
        const result = (0, busiest_time_slots_js_1.busiestTimeSlots)(EVENTS);
        (0, chai_1.expect)(result).to.be.instanceof(Array);
        (0, chai_1.expect)(result.length).to.equal(2);
    });
    it("should return the expected pair of entries", () => {
        const result = (0, busiest_time_slots_js_1.busiestTimeSlots)(EVENTS);
        (0, chai_1.expect)(result).to.eql(EXPECTED_RESULT);
    });
});
