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

// Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.

// Return the linked list sorted as well.

// https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/

var deleteDuplicates = function (head) {
  let temp = new ListNode(null);
  temp.next = head;
  head = temp;
  let current = head,
    value = null,
    prev = head;
  if (!head.next) return head.next;
  while (current) {
    if (current.val == current.next?.val) {
      current.next = current.next?.next;
      value = current.val;
    } else {
      if (value == current.val) {
        console.log(current);
        console.log(prev);
        prev.next = current.next;
        current = prev.next;
      } else {
        prev = current;
        current = current.next;
      }
    }
  }
  console.log(head.next);
  return head.next;
};
