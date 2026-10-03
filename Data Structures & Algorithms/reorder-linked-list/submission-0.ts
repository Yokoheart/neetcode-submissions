/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if(!head || !head.next) return;

        // Step 1: Find the middle of the linked list using slow/fast pointers
        let slow: ListNode = head
        let fast: ListNode | null = head;

        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        } 

        // Step 2: Reverse the second half of the list
        let prev: ListNode | null = null;
        let curr: ListNode | null = slow.next;
        slow.next = null;

        while (curr !== null) {
            let nextTemp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextTemp;
        }

        // Step 3: Merge the two halves alternately
        let first: ListNode | null = head;
        let second: ListNode | null = prev; // prev is now the head of the reversed second half

        while (second !== null) {
            let temp1 = first!.next;
            let temp2 = second.next;

            // Link first to second
            first!.next = second;
            // Link second back to the next node in the first half
            second.next = temp1;

            // Move pointers forward
            first = temp1;
            second = temp2;
        }
    }
}
