"use strict";
/*
Given a number in Roman numeral format, convert it to decimal.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.romanToDecimal = void 0;
function romanToDecimal(romanNumeral) {
    // throw error if input is not a string
    if (typeof romanNumeral !== 'string') {
        throw new TypeError('Input must be a string');
    }
    var values = {
        'M': 1000,
        'D': 500,
        'C': 100,
        'L': 50,
        'X': 10,
        'V': 5,
        'I': 1
    };
    var result = 0;
    for (var i = 0; i < romanNumeral.length; i++) {
        var current = values[romanNumeral[i]];
        var next = i + 1 < romanNumeral.length ? values[romanNumeral[i + 1]] : 0;
        // subtractive - e.g. IV = 4
        if (current < next) {
            result -= current;
        }
        else {
            // additive -e.g. VI = 6
            result += current;
        }
    }
    return result;
}
exports.romanToDecimal = romanToDecimal;
exports.default = { romanToDecimal: romanToDecimal };
