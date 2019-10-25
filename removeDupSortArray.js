https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  console.log(nums);
  let lastValue = nums[0];
  let dupes = 0;
  let i = 1;


  while (i < nums.length) {
    if (nums[i] !== nums[i - 1]) {
      i++
    } else {
      dupes++

    }
  }

  return nums;
};

