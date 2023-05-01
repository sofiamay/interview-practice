/*
Given n numbers, find the greatest common denominator between them.

For example, given the numbers [42, 56, 14], return 14.
*/

export function getGCF(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("array must be an array");
  }
  if (arr.length === 0) {
    return [];
  }

  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result = gcf(result, arr[i]);
  }

  return result;
}

export function gcf(a, b) {
  if (typeof a !== "number" || typeof b !== "number" || a < 0 || b < 0) {
    throw new TypeError("a and b must be positive integers");
  }
  while (b) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export default {
  getGCF,
  gcf,
};
