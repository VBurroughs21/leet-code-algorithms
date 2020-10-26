// https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/807/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
	console.log(nums);
	if(nums.length <= 1) return true;

	for(var i = 1; i <= nums[0]; i=i+1) {
		let isJumping = canJump(nums.slice(i));
		if(isJumping) return true;
	}

	return false
};

// console.log(canJump([2,3,1,1,4])) // true
// console.log(canJump([3,2,1,0,4])) //false
console.log(canJump([2,0,0])) // true