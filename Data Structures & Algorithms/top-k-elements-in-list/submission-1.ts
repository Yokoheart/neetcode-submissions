class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[]{
        // Step 1: Count frequencies
        const freqMap = new Map<number, number>();
        for(const num of nums ){
            freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
        }

        // Step 2: Create buckets where index = frequency
        const buckets: number[][] = Array.from({length: nums.length + 1}, () =>[]);

        for(const[num, count] of freqMap.entries()){
            buckets[count].push(num);
        }

        // Step 3: Iterate backwards from highest frequency to collect top k
        const result : number[] = [];
        for(let freq = buckets.length - 1; freq >= 0 && result.length < k; freq--){
            if(buckets[freq].length > 0){
                for(const num of buckets[freq]){
                    result.push(num);
                    if (result.length === k) break;
                }
            }
        }
        return result;
    }
}
