// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/781/


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
	let firstHighestNumber = nums[0];
	let secondHighestNumber;

	for(var num = 1; num < nums.length; num++) {
		if(!secondHighestNumber && nums[num] > firstHighestNumber){
			secondHighestNumber = nums[num];
		} else if(!secondHighestNumber) {
			firstHighestNumber = nums[num];
		} else {
			if(nums[num] < secondHighestNumber && nums[num] > firstHighestNumber) {
				secondHighestNumber = nums[num];
			} else if(nums[num] > secondHighestNumber && nums[num] > firstHighestNumber) {
				return true;
			}
		}	
	}
	return false;
};

// console.log(increasingTriplet([1,2,3,4,5])) //true
// console.log(increasingTriplet([5,4,3,2,1])) //false
// console.log(increasingTriplet([5,1,5,5,2,5,4])); //true
console.log(increasingTriplet([1, 2, -10, -8, -7])); //true