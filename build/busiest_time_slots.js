"use strict";
/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Amazon.

You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this:

{"timestamp": 1526579928, count: 3, "type": "enter"}

This means 3 people entered the building. An exit looks like this:

{"timestamp": 1526580382, count: 2, "type": "exit"}

This means that 2 people exited the building. timestamp is in Unix time.

Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of (start, end) timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.busiestTimeSlots = void 0;
function busiestTimeSlots(entries) {
    // sort by timestamps
    entries.sort((a, b) => a["timestamp"] - b["timestamp"]);
    let currentPeople = entries[0].count;
    let maxPeople = currentPeople;
    let startEntry = entries[0];
    let endEntry = entries[0];
    let i = 0;
    for (i; i < entries.length; i++) {
        let currentEntry = entries[i];
        if (currentEntry.type == "enter") {
            currentPeople += currentEntry.count;
            if (currentPeople > maxPeople) {
                maxPeople = currentPeople;
                startEntry = currentEntry;
            }
            // type: exit
        }
        else {
            // if previous entry had max people, current entry is end time
            if (currentPeople == maxPeople) {
                endEntry = currentEntry;
            }
            currentPeople -= currentEntry.count;
        }
    }
    return [startEntry, endEntry];
}
exports.busiestTimeSlots = busiestTimeSlots;
exports.default = {
    busiestTimeSlots,
};
