/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// Remove all elements from a linked list of integers that have value val.
//easy
// https://leetcode.com/problems/remove-linked-list-elements/

var removeElements = function (head, val) {
  let dummy = new ListNode();
  let cur = dummy;

  while (head !== null) {
    if (head.val !== val) {
      cur.next = head;
      cur = cur.next;
    }
    head = head.next;
  }
  cur.next = null;
  return dummy.next;
};
