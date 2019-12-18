//  https://leetcode.com/explore/interview/card/top-interview-questions-easy/94/trees/555/


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  let left = 0;
  let right = 0;
  if (!root) return 0;
  if (!root.right && !root.left) return 1;
  if (root.left) {  
    left = maxDepth(root.left) + 1;
  }
  if (root.right) { 
    right = maxDepth(root.right) + 1;
  }
  
  return right > left ? right : left;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var root1 = new TreeNode(3);

root1.left = new TreeNode(9);
root1.right = new TreeNode(20)
root1.right.left = new TreeNode(15)
root1.right.right = new TreeNode(7)


console.log(maxDepth(root1));

