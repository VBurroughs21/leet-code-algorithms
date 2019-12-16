// https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  if (!head.next) return null;
  var check = n;
  var passedNode = head;
  var currentNode = head;
  while (check >= 0) {
    console.log("currentNode", currentNode.val)
    console.log("passedNode", passedNode.val)
    if (currentNode.next && check != 0) {
      check--;
      currentNode = currentNode.next;
    } else if (currentNode.next && check == 0) {
      check = n++;
      passedNode = passedNode.next
      currentNode = passedNode;
    } else if (!passedNode.next.next && check != 0) {
      return passedNode.next;
    } else {
      passedNode.next = passedNode.next.next;
      return head;
    }
  }
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

var list = new ListNode(1);
list.next = new ListNode(2)
// list.next.next = new ListNode(3)
// list.next.next.next = new ListNode(4)
// list.next.next.next.next = new ListNode(5)

console.log(removeNthFromEnd(list, 2))























