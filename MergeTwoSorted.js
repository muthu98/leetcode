// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */


// Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

// https://leetcode.com/problems/merge-two-sorted-lists/
var mergeTwoLists = function(l1, l2) {
    let result=new ListNode(0),current
    current=result
    
    while( l1 && l2){
    
       if(l1.val>=l2.val){
           current.next=new ListNode(l2.val)
           l2=l2.next
       }
        else{
            current.next=new ListNode(l1.val)
           l1=l1.next
        }
      current=current.next

       
    }

   if(l1)    current.next=l1
    if(l2)    current.next=l2
    
    return result.next
};