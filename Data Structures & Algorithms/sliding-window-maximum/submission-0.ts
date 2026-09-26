class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {
        let result: number[] = [];
        let dequeue: number[] = [];
        let head = 0;

        for (let i = 0; i < nums.length; i++){
            if(dequeue.length > head && dequeue[head] <= i - k) head++;

            while(dequeue.length> head && nums[dequeue[dequeue.length -1]] <= nums[i]) dequeue.pop();

            dequeue.push(i);

            if(i>=k - 1) result.push(nums[dequeue[head]]);
        }
        return result;
    }
}
