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

// Given a sorted linked list, delete all duplicates such that each element appear only once.

// https://leetcode.com/problems/remove-duplicates-from-sorted-list/

var deleteDuplicates = function(head) {
    if(!head || !head.next) return head
    
    let check=head.next,prev=head
    while(check){
       
        check.val==prev.val ?prev.next=check.next:prev=check
        
        check=check.next
    }
    console.log(head)
    return head
};