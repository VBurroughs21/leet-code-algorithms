// https://leetcode.com/problems/palindrome-number/
var isPalindrome = function(x) {
  const num = x.toString();

  for (let i = 0; i <= num.length / 2; i++) {
    if (num[i] !== num[num.length - i - 1]) {
      return  false
    }
  }
  return  true
};

console.log(isPalindrome(121))
// true
console.log(isPalindrome(-121))
// false