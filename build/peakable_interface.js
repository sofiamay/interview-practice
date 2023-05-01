"use strict";
/*
Given an iterator with methods next() and hasNext(), create a wrapper iterator, PeekableInterface, which also implements peek().
peek shows the next element that would be returned on next()
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeekableInterface = void 0;
class PeekableInterface {
    constructor(iterable) {
        if (!PeekableInterface._isIterable(iterable)) {
            throw new TypeError(`new PeekableInterface(iterable). ${iterable} is not an itereable`);
        }
        this.iterator = iterable[Symbol.iterator]();
        this.iterable = iterable;
        this.i = (this.iterable.length == 0) ? null : 0;
        this.nextVal = (this.iterable[this.i] != undefined) ? this.iterable[this.i] : null;
    }
    static _isIterable(obj) {
        if (obj == null || obj == undefined) {
            return false;
        }
        return typeof obj[Symbol.iterator] === 'function';
    }
    hasNext() {
        if ((this.i != null) && (this.i + 1 < this.iterable.length)) {
            return true;
        }
        else {
            return false;
        }
    }
    next() {
        this.i++;
        this.nextVal = (this.hasNext()) ? this.iterable[this.i + 1] : null;
        return this.iterator.next().value;
    }
    peak() {
        return this.nextVal;
    }
}
exports.PeekableInterface = PeekableInterface;
exports.default = {
    PeekableInterface,
};
