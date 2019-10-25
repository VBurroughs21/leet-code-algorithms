// https://leetcode.com/problems/squares-of-a-sorted-array/

function squareSortedArray(arr) {
  var firstPositive = false;
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (Math.sign(arr[i]) != -1 && !firstPositive) {
      firstPositive = true;
    }

    if (Math.sign(arr[i]) == -1) {
      result.push(arr[i] * arr[i]);
    }
  }

  return result;
}

squareSortedArray([-4,-1,0,3,10])
// expected [0,1,9,16,100]