/*
Given a set of distinct positive integers, find the largest subset such that every pair of elements in the subset (i, j) satisfies either i % j = 0 or j % i = 0.

For example, given the set [3, 5, 10, 20, 21], you should return [5, 10, 20]. Given [1, 3, 6, 24], return [1, 3, 6, 24].
*/

export function largestDivisibleSubset(arr) {
  const n = arr.length;
  const dp = new Array(n).fill(0);
  // prev[i] stores the index of the maximum value MAX in dp[0..i-1] such that arr[i] is divisible by arr[MAX].
  const prev = new Array(n).fill(-1);

  // sort the array in ascending order
  arr.sort((a,b) => a-b);
  for (let i = 0; i < n; i++) {
    let maxLen = 0;
    for (let j = 0; j < i; j++) {
      if (arr[i] % arr[j] === 0 && maxLen < dp[j]) {
        maxLen = dp[j];
        prev[i] = j;
      }
    }
    dp[i] = maxLen + 1;
  }

  // find the index of the maximum value in dp
  let resultLength = 0;
  let resultLastIndex = -1;
  for (let i = 0; i < n; i++) {
    if (resultLength < dp[i]) {
      resultLength = dp[i];
      resultLastIndex = i;
    }
  }

  // construct the result
  const result = [];
  while (resultLastIndex !== -1) {
    result.push(arr[resultLastIndex]);
    resultLastIndex = prev[resultLastIndex];
  }

  // return in ascending order
  return result.reverse();
}

export default {
  largestDivisibleSubset,
}