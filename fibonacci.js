// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  let seq = [0, 1];

  for (var i = 1; i <= N + 1; i++) {
   seq.push(seq[i] + seq[i - 1])
  };
  

  return seq[N]; 
};

console.log(fib(3)); //1
