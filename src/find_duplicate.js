`
You are given an array of length n + 1 whose elements belong to the set {1, 2, ..., n}.
By the pigeonhole principle, there must be a duplicate. Find it in linear time and space
n = 2
arr = [-2,-1,2]
`

// Finds in linear space 0(n) and linear time O(n)
export function findDuplicate(arr) {
  if (! Array.isArray(arr)) {
    throw new TypeError(`findDuplicate :: arg - ${arr} is not an array`);
  }
  const length = arr.length;
  if (length == 2) return arr[0];

  let hash = new Map();

  for (let i=0; i<length; i++) {
    let num = arr[i];
    if (hash.has(num)) {
      return num;
    } else {
      hash.set(num, true);
    }
  }
  
  return  null;
}

// finds in constant space O(n) and linear time O(2n)
// mark numbers as found by making the number at that index-1 as negative
export function findDuplicateFaster(arr) {
  if (! Array.isArray(arr)) {
    throw new TypeError(`findDuplicate :: arg - ${arr} is not an array`);
  }
  const length = arr.length;
  if (length == 2) return arr[0];

  for (let i=0; i<length; i++) {
    let idx = Math.abs(arr[i]) - 1;
    let num = arr[idx];;

    // if num is negative, the duplicate is idx+1
    if (num < 0) {
      return idx + 1;
    } else {
      arr[idx] = -arr[idx];
    }
  }
  return null;
}


export default {
  findDuplicate,
  findDuplicateFaster,
  }