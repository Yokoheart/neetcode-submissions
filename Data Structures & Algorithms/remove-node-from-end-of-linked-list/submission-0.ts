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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        const dummy = new ListNode(0, head);
        let slow:ListNode = dummy;
        let fast:ListNode | null = dummy;

        for(let i = 0; i  <= n; i++){
            if(fast !== null){
                fast = fast.next;
            }
        }

        while(fast !== null){
            fast = fast.next;
            slow = slow.next;
        }

        if(slow.next !== null){
            slow.next = slow.next.next;
        }
        return dummy.next;
    }
}
