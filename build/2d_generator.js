"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Generator2d = void 0;
class Generator2d {
    constructor(arr) {
        this.generator = Generator2d._createGenerator(arr);
    }
    next() {
        return this.generator.next();
    }
    static *_createGenerator(arr) {
        for (let i = 0; i < arr.length; i++) {
            let currentArray = arr[i];
            let j = 0;
            while (true) {
                let item = currentArray[j];
                if (!item) {
                    break;
                }
                yield item;
                j++;
            }
        }
    }
}
exports.Generator2d = Generator2d;
exports.default = {
    Generator2d,
};
