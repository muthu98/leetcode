// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} m
//  * @param {number} n
//  * @return {ListNode}
//  */

// Reverse a linked list from position m to n. Do it in one-pass.

// Note: 1 ≤ m ≤ n ≤ length of list.
// https://leetcode.com/problems/reverse-linked-list-ii/
var reverseBetween = function (head, m, n) {
  if (m >= n) return head;
  let current,
    i = 1,
    prev = new ListNode(0);
  prev.next = head;
  head = prev;
  current = head.next;
  while (current && i <= n) {
    let check = true,
      node = new ListNode(0),
      temp = current;
    node = node.next;
    while (i >= m && i <= n) {
      check = false;
      let value = new ListNode(temp.val);
      value.next = node;
      node = value;
      temp = temp.next;
      i++;
    }

    if (check) {
      prev = current;
      current = current.next;
      i++;
    } else {
      prev.next = node;
      current.next = node;
      while (current.next) {
        current = current.next;
      }

      current.next = temp;
      console.log(prev);
    }
  }

  console.log(head);
  return head.next;
};
