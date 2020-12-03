/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// /**
//  * @param {ListNode} node
//  * @return {void} Do not return anything, modify node in-place instead.
//  */

// Write a function to delete a node in a singly-linked list. You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.

// It is guaranteed that the node to be deleted is not a tail node in the list.
// https://leetcode.com/problems/delete-node-in-a-linked-list/
//Easy
var deleteNode = function (node) {
  console.log(node);
  if (node && node.next) {
    node.val = node.next.val;
    node.next = node.next.next;
  }
};
