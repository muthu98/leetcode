// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */

// Given a singly linked list, determine if it is a palindrome.

// Example 1:

// Input: 1->2
// Output: false
// Example 2:

// Input: 1->2->2->1
// Output: true

// https://leetcode.com/problems/palindrome-linked-list/

var isPalindrome = function (head) {
  let current = head,
    node = new ListNode(0);
  node = node.next;
  while (current) {
    let value = new ListNode(current.val);
    value.next = node;
    node = value;
    current = current.next;
  }

  while (head && node) {
    if (head.val != node.val) return false;
    head = head.next;
    node = node.next;
  }

  return true;
};
