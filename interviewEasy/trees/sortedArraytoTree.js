// https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/631/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
  console.log(nums);
  
  if (nums.length == 0) return null;
  if (nums.length == 1) return new TreeNode(nums[0]);
  if (nums.length == 2) {    
    let root = new TreeNode(nums[0]);
    root.right = new TreeNode(nums[1]);
    return root;
  }

  let centerIndex = Math.floor(nums.length / 2);
  let root = new TreeNode(nums[centerIndex]);

  if (centerIndex < nums.length - 1) root.right = sortedArrayToBST(nums.slice(centerIndex + 1, nums.length));
  if (centerIndex > 0) root.left = sortedArrayToBST(nums.slice(0, centerIndex));

  return root
};


// console.log(sortedArrayToBST([-10,-3,0,5,9]));
console.log(sortedArrayToBST([3, 5, 8]));

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
