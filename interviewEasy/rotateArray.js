// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (nums.length < 2 || nums.length == 2 & k % 2 == 0) return;
  if (nums.length == 2 & k % 2 != 0 ) {
    let temp = nums[0]
    nums[0] = nums[1];
    nums[1] = temp;
    return; 
  }

  const shifts = k < nums.length ? k : k % nums.length;
  let tempArray = [];
  let secondTempArray = [];
  let x = 0;
  
  for (let i = nums.length - shifts; i < nums.length; i++) {
    tempArray.push(nums[x]);
    nums[x] = nums[i];
    x++;
  }
  
  x = 0;

  for (let y = tempArray.length; y < nums.length - 1; y++) {
    if (nums[y] !== nums[x - 1]) {secondTempArray.push(nums[y]);}
    nums[y] = tempArray[x];
    x++;
  }

  x = 0;

  for (let z = nums.length - secondTempArray.length; z < nums.length; z++) {
    nums[z] = secondTempArray[x];
    x++;
  }
};

rotate([1,2,3,4,5,6,7], 3); //[5,6,7,1,2,3,4]