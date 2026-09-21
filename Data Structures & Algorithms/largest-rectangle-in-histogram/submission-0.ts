class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights: number[]): number {
        let stack: number[] =[];
        let maxArea = 0;
        let n = heights.length;

        for(let i = 0; i <= n; i++){
            const currentHeight = i === n ? 0 : heights[i];
            while(stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]){
                const popedIndex = stack.pop();
                const height = heights[popedIndex];

                const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;

                maxArea = Math.max(maxArea, height * width)
            }
            stack.push(i);
        }
        return maxArea;
    }
}
