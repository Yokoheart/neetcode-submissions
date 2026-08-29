class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let totalNumber:Map<number, number> = new Map()
        for (let i = 0; i < nums.length; i++){
            let n = nums[i];
            let diff = target - n;
            if(totalNumber.has(diff)){
                return [totalNumber.get(diff)!, i]
            }
            totalNumber.set(n, i)
        }
        return []
    }
}
