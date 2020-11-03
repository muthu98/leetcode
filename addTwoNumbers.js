// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//  @param {ListNode} l1
//  @param {ListNode} l2
//  @return {ListNode}
 

// https://leetcode.com/problems/add-two-numbers/
var addTwoNumbers = function(l1, l2) {
    let carry=0
    let result = new ListNode();
    let current=result
    while(l1!=null || l2!=null){
        let add= (l1?l1.val:0 )+(l2?l2.val:0)+carry
        carry= Math.floor(add/10) 
        add=add%10
         current.next = new ListNode (add);
         l1= l1?l1.next:null
         l2= l2 ? l2.next:null
        current=current.next
    }
    if(carry>0){
         current.next = new ListNode (carry);
    }
    return result.next
};  