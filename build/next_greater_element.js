"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextGreaterElement = void 0;
function nextGreaterElement(i, arr) {
    if (!Number.isInteger(i)) {
        throw new TypeError(`nextGreaterElement(i, arr): i - ${i} is not an integer`);
    }
    if (!Array.isArray(arr)) {
        throw new TypeError(`nextGreaterElement(i, arr): arr - ${arr} is not an array`);
    }
    if (i >= arr.length || i < 0) {
        throw new RangeError(`nextGreaterElement(i, arr): i- ${i} is out of range of array`);
    }
    // end error checking
    let element = arr[i];
    let beforeIdx = i;
    let afterIdx = i;
    while (beforeIdx >= 0 || afterIdx < arr.length) {
        let a = null;
        let b = null;
        if (beforeIdx >= 0 && arr[beforeIdx] > element) {
            a = beforeIdx;
        }
        if (afterIdx < arr.length && arr[afterIdx] > element) {
            b = afterIdx;
        }
        if ((a == null) && !(b == null))
            return b;
        if ((b == null) && !(a == null))
            return a;
        if (!(a == null) && !(b == null)) {
            return arr[a] < arr[b] ? a : b;
        }
        beforeIdx--;
        afterIdx++;
    }
    return null;
}
exports.nextGreaterElement = nextGreaterElement;
exports.default = {
    nextGreaterElement,
};
