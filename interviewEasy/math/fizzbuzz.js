// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/743/



/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
  var result = [];

  for(var i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      result.push('FizzBuzz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else {
      result.push(`${i}`);
    }
  }
  
  return result;
};

console.log(fizzBuzz(15));