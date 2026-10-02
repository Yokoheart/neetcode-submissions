class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1: number[], nums2: number[]): number {
        if(nums1.length > nums2.length){
            return this.findMedianSortedArrays(nums2, nums1)
        }

        let n = nums1.length;
        let m = nums2.length;
        let low = 0;
        let high = n;

        while( low <= high){
            // Partition indices for both arrays
            const partitionX = Math.floor((low + high)/2);
            const partitionY = Math.floor((m + n + 1)/2) - partitionX;

            // Edge cases: if partition is at the extreme ends, use Infinity
            const maxLeftX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
            const minRightX = partitionX === n ? Number.POSITIVE_INFINITY : nums1[partitionX];

            const maxLeftY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
            const minRightY = partitionY === m ? Number.POSITIVE_INFINITY : nums2[partitionY];

            //Checking if the parition is correct
            if(maxLeftX <= minRightY && maxLeftY <= minRightX){
                //odd
                if((m + n) % 2 === 1){
                    return Math.max(maxLeftX, maxLeftY);
                }
                //even
                else{
                    return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
                }
            }

            else if(maxLeftX > minRightY){
                high = partitionX - 1
            }

            else{
                low = partitionX + 1;
            }
        }
        throw new Error("The input array is not sorted properlt")
    }
}
