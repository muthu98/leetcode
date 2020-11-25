/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @param {number} x
//  * @return {ListNode}
//  */

// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.
// https://leetcode.com/problems/partition-list/

var partition = function (head, x) {
  let value = head,
    node0 = new ListNode(0),
    current = node0,
    valid = false;
  if (!head) return head;

  if (value.val >= x) {
    let temp = value.val;
    value.next = value.next;
    current.next = new ListNode(temp);
    current = current.next;
    valid = true;
  }
  while (value.next) {
    if (value.next.val >= x) {
      let temp = value.next.val;
      value.next = value.next.next;
      current.next = new ListNode(temp);
      current = current.next;
    } else {
      value = value.next;
    }
  }

  value.next = node0.next;
  console.log(head);

  return valid ? head.next : head;
};
