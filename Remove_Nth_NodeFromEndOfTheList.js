// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Follow up: Could you do this in one pass?

// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

var removeNthFromEnd = function(head, n) {
    let prev=head,final=head,first=true
    if(final.next==null){
            if(n==1)return  head.next
      }
    while(final){
        let i=0,temp=final,flag=false
        while( i<=n ){
            if(temp==null){
                if(first){
                    console.log(final.next)
                      console.log(head)
                    head=final.next
                     console.log(head)
                    return head
                   
                }
                else{
                      prev.next=final.next
                    return head
                }
             
            }
            temp=temp? temp.next :null
            i++
             
        }
        first=false
        prev=final
        final=final.next
    }

};