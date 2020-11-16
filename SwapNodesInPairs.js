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

// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes. Only nodes itself may be changed.


// https://leetcode.com/problems/swap-nodes-in-pairs/

var swapPairs = function(head) {
    
    let current =head
    
    while(current){
         let val1=current? current.val:null
        let val2=current.next? current.next.val:null
        if(val1!=null && val2!=null){
            current.val=val2
            current.next.val=val1
        }
         current=current? current.next:null
         current=current? current.next:null
        
    }
    
    return head
   
};