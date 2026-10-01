class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        let ROWS = matrix.length;
        let COLS = matrix[0].length;

        let left = 0;
        let right = ROWS * COLS - 1;

        while(left <= right){
            const mid = left + Math.floor((right - left) / 2);

            const rows = Math.floor(mid/ COLS);
            const cols = mid % COLS;
            const midVal = matrix[rows][cols];

            if(midVal === target){
                return true;
            }
            else if(midVal < target){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }
        return false;
    }
}
