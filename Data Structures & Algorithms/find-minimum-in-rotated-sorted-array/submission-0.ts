class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let left = 0;
        let right = nums.length - 1;

        while (left < right) {
            const mid = Math.floor(left + (right - left) / 2);

            // If mid element is greater than the rightmost element,
            // the minimum must be in the right half (mid + 1 ... right).
            if (nums[mid] > nums[right]) {
                left = mid + 1;
            } else {
                // Otherwise, mid could be the minimum, or the minimum is to the left.
                right = mid;
            }
        }

        return nums[left];
    }
}