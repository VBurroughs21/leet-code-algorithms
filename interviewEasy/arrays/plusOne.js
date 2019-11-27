// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/559/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits[digits.length - 1] != 9) {
    digits[digits.length - 1]++;
  } else {
    var index = digits.length - 1;

    while (index > 0) {
      if (digits[index] != 0) {
        if (digits[index - 1] == 9) {
          digits[index - 1] = 1;
        } else {
          digits[index - 1]++;
        }
        digits[index] = 0;
        break;
      } 
      index--;
    }

    if (digits[0] == 9) {
      digits[0] = 1;
      digits.push(0);
    }
  }


  return digits;
};

// console.log(plusOne([9, 1, 9])); // [9,2,0]
// console.log(plusOne([4,3,9])); // [4,4,0]
console.log(plusOne([9, 9, 9])); // [1, 0, 0, 0]
