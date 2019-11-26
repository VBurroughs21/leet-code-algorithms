// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/879/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  var temp;

  for (var i = 0; i < s.length / 2; i++) {
    temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }

  return s;
};

// console.log(reverseString(["h","e","l","l","o"])); //["o","l","l","e","h"]

console.log(reverseString(["H","a","e","n","a","h"])); //["h","a","n","e","a","H"]