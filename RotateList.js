/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @param {number} k
//  * @return {ListNode}
//  */
// Given the head of a linked list, rotate the list to the right by k places.

// https://leetcode.com/problems/rotate-list/
var rotateRight = function(head, k) {
    let temp =head,len=0
     while(temp){
         temp=temp.next
         len++
     }
    console.log(len)
    
    k=k%len
    if(k%len==0) return head
    while(k&& head?.next){
        let first=head
          while(first.next.next){
        console.log(first.val)
        first= first.next
        // if(! first.next.next) break
     }
    let value=first.next.val
    let current=new ListNode(value)
    first.next=null
    current.next=head
    head=current
        k--
    }
  
    console.log(head)
    return head
};