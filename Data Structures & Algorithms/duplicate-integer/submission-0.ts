class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const data = new Set <number>();
        for (const n of nums){
            if(data.has(n)){
                return true;
            }
            data.add(n);
        }
        return false
    }
}
