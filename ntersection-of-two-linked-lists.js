// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */

// /**
//  * @param {ListNode} headA
//  * @param {ListNode} headB
//  * @return {ListNode}
//  */
// Write a program to find the node at which the intersection of two singly linked lists begins.
//https://leetcode.com/problems/intersection-of-two-linked-lists/

//Easy

var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  pA = headA;
  pB = headB;
  console.log(pA);
  console.log(pB);
  while (pA != pB) {
    pA = pA.next;
    pB = pB.next;

    if (pA == pB) {
      console.log(pA);
      console.log(pB);
      return pA;
    }

    if (pA == null) {
      pA = headB;
    }

    if (pB == null) {
      pB = headA;
    }
    console.log(pA);
    console.log(pB);
  }
  return pA;
};
