// https://leetcode.com/problems/fibonacci-number/

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N == 0) return 0;
  if (N <= 2) return 1;
  let seq = [0, 1];
  let temp;

  for (var i = 3; i <= N + 1; i++) {
    temp = seq[1];
    seq[1] = seq[0] + seq[1];
    seq[0] = temp;
  };
  return seq[1]; 
};

console.log(fib(1)); //3
