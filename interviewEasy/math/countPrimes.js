// https://leetcode.com/explore/interview/card/top-interview-questions-easy/102/math/744/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var count = n > 2 ? 1 : 0;

  for(var i = 2; i < n; i++) { 
    if (i % 2 !== 0 && isPrime(i)) count++;
  }

  return count
};

function isPrime(number) {

  for(var i = 3; i <= Math.sqrt(number); i++) {
    if (number !== i && number % i == 0) return false
  }
  
  return true;
}

console.log(countPrimes(10))
