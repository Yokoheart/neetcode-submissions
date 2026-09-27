class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length -1;

        while(left <= right){
            let median = Math.floor((left + right) / 2);
            if(target === nums[median]) return median;

            else if(nums[median] > target){
                right = median - 1;
            }

            else{
                left = median + 1
            }
        }
        return -1;
    }
}
