class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let left = 0;
        let right = nums.length - 1;

        while(left <= right){
            let mid = Math.floor((right + left) / 2);
            if(target === nums[mid]) return mid;

            //left sorted portion
            if(nums[left] <= nums[mid] ){
                if(target > nums[mid] || target < nums[left]){
                    left = mid + 1;
                }
                else{
                    right = mid - 1;
                }
            }

            //right sorted portion
            else{
                if(target < nums[mid] || target > nums[right]){
                    right = mid - 1;
                }
                else{
                    left = mid + 1;
                }
            }
        }
        return -1;
    }
}
