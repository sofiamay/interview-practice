"use strict";
/*
Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.appear_once = void 0;
function appear_once(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError(`appear_once(arr): ${arr} is not of type Array`);
    }
    // -- End error checking --
    let hashmap = new Map();
    arr.forEach((item) => {
        if (hashmap.has(item)) {
            hashmap.delete(item);
        }
        else {
            hashmap.set(item, true);
        }
    });
    let result = Array.from(hashmap.keys());
    if (result.length != 2) {
        throw new Error(`appear_once(arrr): result contains ${result.length} elements but should contain 2 elements`);
    }
    return result;
}
exports.appear_once = appear_once;
exports.default = {
    appear_once,
};
