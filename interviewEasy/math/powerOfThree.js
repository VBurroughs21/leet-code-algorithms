// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/745/


/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n == 1) return true;
  var power = 3;
  while (power <= n) {
    if (power == n) return true;
    power = power * 3;
  };

  return false
};

console.log(isPowerOfThree(27)); //true
console.log(isPowerOfThree(45)); // false

