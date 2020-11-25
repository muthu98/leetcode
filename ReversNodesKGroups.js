// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  */

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// Follow up:

// Could you solve the problem in O(1) extra memory space?
// You may not alter the values in the list's nodes, only nodes itself may be changed.

var reverseKGroup = function (head, k) {
  let final = head,
    newvalue = new ListNode(0),
    rearrange = newvalue,
    value;
  if (k == 1) return head;
  while (final) {
    let initial = k,
      temp = final,
      revvalue = new ListNode(0),
      nonrev = new ListNode(0),
      nonrevcheck = nonrev;

    revvalue = revvalue.next;

    while (initial && temp) {
      let check = new ListNode(temp.val);
      nonrevcheck.next = new ListNode(temp.val);
      check.next = revvalue;
      revvalue = check;
      nonrevcheck = nonrevcheck.next;
      initial--;
      temp = temp.next;
    }
    final = temp;
    // else  final=final.next
    value = initial == 0 ? revvalue : nonrev.next;
    while (value) {
      rearrange.next = new ListNode(value.val);
      rearrange = rearrange.next;
      value = value.next;
    }
  }
  console.log(newvalue.next);
  return newvalue.next;
};
