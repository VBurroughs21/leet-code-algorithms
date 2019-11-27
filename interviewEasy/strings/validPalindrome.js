// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var front = 0;
  var back = s.length - 1;

  while(front < back) {
    
    if (s[front] == " " || !s[front].match(/^[0-9a-zA-Z]+$/) && front < back) {
      front++;
    } else if (s[back] == " " || !s[back].match(/^[0-9a-zA-Z]+$/)) {
      back--;
    } else if (s[front].toUpperCase() != s[back].toUpperCase()) {
      return false;
    } else {
      front++;
      back--;
    }
  }

  return true;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));