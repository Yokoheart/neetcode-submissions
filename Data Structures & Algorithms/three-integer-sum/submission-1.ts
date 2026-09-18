class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums: number[]): number[][] {
        const result: number[][] = [];

        nums = nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) break;
            if (i > 0 && nums[i] === nums[i - 1]) continue;

            let l = i + 1,
                r = nums.length - 1;
            while (l < r) {
                const sum = nums[i] + nums[l] + nums[r];
                if (sum < 0) {
                    l++;
                } else if (sum > 0) {
                    r--;
                } else {
                    result.push([nums[l], nums[r], nums[i]]);
                    l++;
                    r--;
                    while (l < r && nums[l] === nums[l - 1]) {
                        l++;
                    }
                }
            }
        }

        return result;
    }
}


