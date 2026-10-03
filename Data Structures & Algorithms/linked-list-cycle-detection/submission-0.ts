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
     * @return {boolean}
     */
    hasCycle(head: ListNode | null): boolean {
        let result = new Set<ListNode>();
        let current = head

        while(current !== null){
            if(result.has(current)) return true;
            result.add(current);
            current = current.next
        }
        return false;
    }
}
