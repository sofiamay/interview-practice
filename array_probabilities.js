export function generateFromProbabilities(nums, probs) {
    const total = probs.reduce((partialSum, a) => partialSum + a, 0);
    if (total != 1) throw new Error(`probs arg: ${probs} must add to 1`);
    if (nums.length != probs.length) throw new Error(`nums and probs must be of the same length`);

    //set up frequencies in array. The last value should be 1
    let prob_sums = [];
    prob_sums[0] = probs[0];
    for (let i=1; i<probs.length; i++) {
      prob_sums[i] = prob_sums[i-1] + probs[i];
    }

    // generate random number and return coresponding number in nums
    const rand = Math.random();
    if (rand <= prob_sums[0]) return nums[0];
    for (let i=1; i< prob_sums.length; i++) {
      if ((prob_sums[i-1] < rand) && (rand <= prob_sums[i])) {
        return nums[i];
      }
    }
    return null;
  }
  
  export default {
    generateFromProbabilities,
  }
