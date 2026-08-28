class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals: number[][]): number[][] {
        if (intervals.length <= 1) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);

    const output: number[][] = [intervals[0]];

     for(let i = 1; i < intervals.length; i++){
        const current = intervals[i];
        const lastMerged = output[output.length - 1];

        if(current[0] <= lastMerged[1]){
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        }
        else{
            output.push(current);
        }
     }
     return output;
    }
}
