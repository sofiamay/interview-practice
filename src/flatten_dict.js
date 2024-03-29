/*
Write a function to flatten a nested dictionary continaining integers. Namespace the keys with a period.
*/

export function flattenDict(dict) {
  let result = {}

  // recursive function adds keys to result
  function _flatten(keys, parentKey) {
    for (let key in keys) {
      let val = keys[key];
      if ((typeof val === "number") || (typeof val === 'string') || (key instanceof String)) {
        // is a primitive type
        result[parentKey+key] = val;
      } else {
        // is an object
        _flatten(val, parentKey+key+".");
      }
    }
  }

  _flatten(dict, "");
  return result;
}

export default {
  flattenDict,
}