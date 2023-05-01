"use strict";
/*
    You are given a 2-d matrix where each cell represents number of coins in that cell. Assuming we start at matrix[0][0], and can only move right or down, find the maximum number of coins you can collect by the bottom right corner.
*/
function max_coins(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let a = matrix[i][j - 1];
            a || (a = 0);
            let b;
            if (i - 1 < 0) {
                b = 0;
            }
            else {
                b = matrix[i - 1][j];
            }
            matrix[i][j] += Math.max(a, b);
        }
    }
    return matrix[n - 1][m - 1];
}
const TEST = [
    [0, 3, 1, 1],
    [2, 0, 0, 4],
    [1, 5, 3, 1],
];
console.log(max_coins(TEST));
