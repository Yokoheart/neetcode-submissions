class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let left = 0;
        let right = heights.length - 1;
        let maxWater = 0;

        while(left < right){
            let width = right - left;
            let height = Math.min(heights[left], heights[right]);
            let currentArea = width * height;

            maxWater = Math.max(maxWater, currentArea);

            if(heights[left] < heights[right]){
                left++;
            }
            else{
                right--;
            }
        }
        return maxWater;
    }
}
