"use strict";
/*
You have a large array with most of the elements as zero.

Use a more space-efficient data structure, SparseArray, that implements the same interface:

- init(arr, size): initialize with the original large array and size.
- set(i, val): updates index at i with val.
- get(i): gets the value at index i.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.SparceArray = void 0;
class SparceArray {
    constructor(arr, maxSize) {
        this.maxSize = maxSize;
        this.hash = this._fromArr(arr);
        this.size = Object.keys(this.hash).length;
        this.length = Math.max(...Object.keys(this.hash));
    }
    set(i, val) {
        if (i < 0) {
            i = this.length - Math.abs(i);
        }
        const wasEmpty = this.isEmpty(i);
        if (this.size < this.maxSize || !wasEmpty) {
            this.hash[i] = val;
            if (wasEmpty) {
                this.size++;
                if (i >= this.length) {
                    this.length = i + 1;
                }
            }
            return val;
        }
        else {
            console.log('Max size achieved. Cannot add value to SparceArray');
        }
    }
    get(i) {
        if (i < 0) {
            i = this.length - Math.abs(i);
        }
        if (i > this.length || i < 0) {
            return undefined;
        }
        if (this.hash[i] == undefined || this.hash[i] == 0) {
            return 0;
        }
        else {
            return this.hash[i];
        }
    }
    isEmpty(i) {
        if (!this.hash[i] || this.hash[i] == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    _fromArr(arr) {
        let hashTable = {};
        let count = 0;
        let maxSizeExceeded = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i]) {
                if (count >= this.maxSize) {
                    console.log(`max SparceArray size exceeded. Cutting off array at index ${i - 1}`);
                    break;
                }
                hashTable[i] = arr[i];
                count++;
            }
        }
        return hashTable;
    }
}
exports.SparceArray = SparceArray;
exports.default = {
    SparceArray,
};
