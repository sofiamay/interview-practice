"use strict";
/*
Given a string s and a list of words words, where each word is the same length, find all starting indices of substrings in s that is a concatenation of every word in words exactly once.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.substringsOfList = void 0;
function substringsOfList(s, words) {
    let wordSize = words[0].length;
    let substringLength = wordSize * words.length;
    let result = [];
    // if the combined length of all the words is greater than the length of the string, return an empty array
    if (substringLength > s.length) {
        return result;
    }
    // create a map of the words and their counts
    let wordMap = new Map();
    for (let word of words) {
        if (wordMap.has(word)) {
            wordMap.set(word, wordMap.get(word) + 1);
        }
        else {
            wordMap.set(word, 1);
        }
    }
    // iterate through the string, checking for matches
    for (let i = 0; i < s.length - substringLength + 1; i++) {
        let substring = s.substring(i, i + substringLength);
        let substringMap = new Map();
        let wordCount = 0;
        // create a map of the words and their counts in the substring
        for (let j = 0; j < substring.length; j += wordSize) {
            let word = substring.substring(j, j + wordSize);
            // if substring not in words, or if substring appears more times than in words, break
            if (!wordMap.has(word) || substringMap.get(word) >= wordMap.get(word)) {
                break;
                // else substring appears in words, increment count
            }
            else {
                if (substringMap.has(word)) {
                    substringMap.set(word, substringMap.get(word) + 1);
                }
                else {
                    substringMap.set(word, 1);
                }
                wordCount++;
            }
        }
        // if the substring contains all the words, add the index to the result
        if (wordCount === words.length) {
            result.push(i);
        }
    }
    return result;
}
exports.substringsOfList = substringsOfList;
exports.default = {
    substringsOfList,
};
