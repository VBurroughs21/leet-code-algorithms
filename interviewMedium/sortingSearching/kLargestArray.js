/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort();
    console.log(nums);
    var count = 1;
    for (var i = nums.length - 2; i > 0; i--) {
      if (nums[i - 1] !== nums[i]) count++;
      if (count === k) return nums[i];
    }
    // return count;
};


// console.log(findKthLargest([3,2,1,5,6,4], 2)) // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)) // 4