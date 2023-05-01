/*
You are given an array of arrays of integers, where each array corresponds to a row in a triangle of numbers.

We define a path in the triangle to start at the top and go down one row at a time to an adjacent value, eventually ending with an entry on the bottom row. For example, 1 -> 3 -> 5. The weight of the path is the sum of the entries.

Write a program that returns the weight of the maximum weight path.
*/

export function trianglePath(arr) {
  let n = arr.length;
  // create matrix from array
  for (let i=0; i<n; i++) {
    for (let j=0; j<=n; j++) {
      if (! arr[i][j]) {
        arr[i][j] = 0;
      }
    }
  }
  // create dp matrix
  let dp = new Array(n);
  for (let i=0; i<n; i++) {
    dp[i] = new Array(n).fill(-1);
  }
  // return max weight path
  return getTrianglePath(arr, n, dp);
}

export function getTrianglePath(matrix, n, dp) {
  // fill in the bottom row of dp matrix
  for (let i=0; i<n; i++) {
    dp[n-1][i] = matrix[n-1][i];
  }

  // loop from the bottom up
  for (let i=n-2; i>=0; i--) {
    for (let j=i; j>=0; j--) {
      dp[i][j] = matrix[i][j] + Math.max(dp[i+1][j], dp[i+1][j+1]);
    }
  }
  return dp[0][0];
}

export default {
  trianglePath,
  getTrianglePath,
}
