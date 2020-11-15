/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode[]} lists
//  * @return {ListNode}
//  */


// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

// Merge all the linked-lists into one sorted linked-list and return it.
// var mergeKLists = function(lists) {

// https://leetcode.com/problems/merge-k-sorted-lists/
var mergeKLists = function (lists) {
    let result = new ListNode(0), current = result
    for (let i = 0; i < lists.length; i++) {

        let min = Infinity, head, index, check = lists.length
        while (i < lists.length) {

            if (!lists[i]) check--
            if (lists[i] && lists[i].val < min) {
                min = lists[i].val
                head = lists[i]
                index = i

            }
            i++
        }


        if (check <= 0) break
        current.next = new ListNode(head.val)
        current = current.next
        head = head ? head.next : null
        lists[index] = head
        i = -1
    }

    return result.next

};