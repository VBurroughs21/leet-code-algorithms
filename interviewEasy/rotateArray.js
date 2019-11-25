// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/646/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//   if (nums.length < 2 || nums.length == 2 & k % 2 == 0) return;
  // if (nums.length == 2 & k % 2 != 0 ) {
  //   let temp = nums[0]
  //   nums[0] = nums[1];
  //   nums[1] = temp;
  //   return; 
  // }
  
//   const shifts = k < nums.length ? k : k % nums.length;

//   console.log(shifts);
  
//   let tempArray = [];
//   let secondTempArray = [];
//   let x = 0;
  
//   for (let i = nums.length - shifts; i < nums.length; i++) {
//     tempArray.push(nums[x]);
//     nums[x] = nums[i];
//     x++;
//   }
  
//   x = 0;

//   for (let y = tempArray.length; y < nums.length - 1; y++) {
//     if (nums[y] !== nums[x - 1]) {secondTempArray.push(nums[y]);}
//     nums[y] = tempArray[x];
//     x++;
//   }

//   x = 0;

//   for (let z = nums.length - secondTempArray.length; z < nums.length; z++) {
//     nums[z] = secondTempArray[x];
//     x++;
//   }

//   return nums
// };

// Working solution
function rotateNotInPlace(nums, k) {
  var rotate = k % nums.length > 0 ? k % nums.length : k;
  var result = [];

  for (var i = rotate + 1 ; i < nums.length; i++) {
    result.push(nums[i]);
  }

  for (var x = 0; x < rotate + 1; x++) {
    result.push(nums[x]);
  }

  return result;
}

// function smallerShift(nums, rotations) {

// }

// function largerShift(nums, rotations) {
//   for (var x = 0; x < rotations; x++) {
//     nums[x] = nums[rotations + 1 + x];
//   }

//   for (var i = start; i < nums.length - 1; i++) {
//     nums[i] = nums[nums.length - 1][i - rotations]
//   }

// }

// // Solution in place
// function rotateInPlace(nums, k) {
//   var rotations = k % nums.length >= 0 ? k % nums.length : k;

//   if (nums.length < 2 || (nums.length == 2 & rotations == 0)) return;
  
//   if (nums.length == 2 & rotations != 0 ) {
//     let temp = nums[0]
//     nums[0] = nums[1];
//     nums[1] = temp;
//     return; 
//   }

//   nums.push(nums.slice(0));

//   if ((rotations + 1) > nums.length - 1) {
//     largerShift(nums, rotations)
//   }

//   var stop = ((rotations + 1) > nums.length - 1) ? rotations: nums.length - 2;
//   var start = ((rotations + 1) > nums.length - 1) ? rotations: rotations - 1;

//   console.log(start);
  

//   for (var x = 0; x < stop; x++) {
//     if((rotations + x + 1) > nums.length - 2) {
//       console.log(x, "IFF");
      
//       nums[x] = nums[rotations + x];
//     } else {
//       // working for large arrays
//       nums[x] = nums[rotations + 1 + x];
//     }
//   }

//   console.log(nums);
  
  
//   for (var i = start; i < nums.length - 1; i++) {
//     if (i - rotations > 0) {
//       console.log(" in if")
//       // working for large arrays
//       nums[i] = nums[nums.length - 1][i - rotations]
//     } else {
//       nums[i] = nums[nums.length - 1][i - 1]
//     }
//   }
  
//   nums.length--;
  
//   return nums
// }

// console.log(rotate([1,2,3,4], 2)); //[3,4,1,2]
// console.log(rotate([1,2,3], 0)); //[1,2,3]
console.log(rotateInPlace([1,2,3,4,5,6,7], 3)); //[5,6,7,1,2,3,4]
//  console.log(rotateInPlace([1, 2, 3], 2)) // [3, 1, 2]
