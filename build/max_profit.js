"use strict";
/*
Given an array of numbers representing the stock prices of a company in chronological order and an integer k, return the maximum profit you can make from k buys and sells. You must buy the stock before you can sell it, and you must sell the stock before you can buy it again.

For example, given k = 2 and the array [5, 2, 4, 0, 1], you should return 3.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.maxProfit = void 0;
function maxProfit(arr, k) {
    if ((!Array.isArray(arr)) || (!Number.isInteger(k))) {
        throw new TypeError(`maxProfit(arr,k): ${arr} must be an array, and ${k} must be an integer`);
    }
    if (arr.length == 0)
        return 0;
    // initialize dp matrix where profits[i][j] represents the max profits for at most i transactions on day j
    var profits = new Array(k + 1);
    for (let i = 0; i < profits.length; i++) {
        profits[i] = new Array(arr.length);
        profits[i].fill(0);
    }
    // no profits can be earned on first day
    for (let i = 0; i <= k; i++) {
        profits[i][0] = 0;
    }
    //profit is also 0 if no transactions are made
    for (let j = 0; j <= arr.length; j++) {
        profits[0][j] = 0;
    }
    // fill in the dynamic programming table with max profits
    for (let i = 1; i <= k; i++) {
        for (let j = 1; j < arr.length; j++) {
            let maxSoFar = 0;
            for (let n = 0; n < j; n++) {
                maxSoFar = Math.max(maxSoFar, arr[j] - arr[n] + profits[i - 1][n]);
                profits[i][j] = Math.max(profits[i][j - 1], maxSoFar);
            }
        }
    }
    return profits[k][arr.length - 1];
}
exports.maxProfit = maxProfit;
exports.default = {
    maxProfit,
};
