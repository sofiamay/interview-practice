/*
Given a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

Intervals can "touch", such as [0, 1] and [1, 2], but they won't be considered overlapping.

For example, given the intervals (7, 9), (2, 4), (5, 8), return 1 as the last interval can be removed and the first two won't overlap.

The intervals are not necessarily sorted in any order.
*/

const START = 0;
const END = 1;

export function minIntervalRemovals(intervals) {
  if (intervals.length === 0) return 0;

  let result = 0;

  // sort the intervals by their starting point
  intervals.sort((a, b) => a[START] - b[START]);

  // loop through intervals
  let currentEnd = intervals[0][END];
  for (let i = 1; i < intervals.length; i++) {
    let interval = intervals[i];

    // if the current interval start is less than current ending point, it overlaps with the previous one
    if (interval[START] < currentEnd) {
      result++;
      // remove the interval with the larger ending point (i.e. set currentEnd to the smaller one)
      currentEnd = Math.min(currentEnd, interval[END]);
    } else {
      currentEnd = interval[END];
    }
  }

  return result;
}

export default {
  minIntervalRemovals,
}