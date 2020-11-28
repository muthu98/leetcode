// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

// Reverse a singly linked list.

// Example:

// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// https://leetcode.com/problems/reverse-linked-list/
var reverseList = function (head) {
  let current = head,
    node = new ListNode(0);
  node = node.next;
  while (current) {
    let value = new ListNode(current.val);
    value.next = node;
    node = value;
    current = current.next;
  }

  return node;
};
