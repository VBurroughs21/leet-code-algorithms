https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
// Runtime: 60 ms
// Memory Usage: 36.7 MB

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let lastValue = nums[0];
  let dupes = 0;
  let i = 1;


  while (i < nums.length) {
    if (nums[i] !== lastValue) {
      nums[i - dupes] = nums[i];
      lastValue = nums[i];
      i++;
    } else {
      dupes++;
      i++;
    }
  }
  
  nums.length -= dupes;
  
  return nums.length;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
