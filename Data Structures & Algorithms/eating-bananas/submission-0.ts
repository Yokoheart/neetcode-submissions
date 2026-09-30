class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        let left = 1;
        let right = 0;
        
        // Find the maximum pile to set the upper bound for our binary search
        for (const pile of piles) {
            if (pile > right) {
                right = pile;
            }
        }

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            let hoursNeeded = 0;
            
            // Calculate total hours required at the current speed 'mid'
            for (const pile of piles) {
                hoursNeeded += Math.ceil(pile / mid);
            }

            // If Koko can finish within 'h' hours, try a slower speed (look left)
            if (hoursNeeded <= h) {
                right = mid;
            } else {
                // If she takes too long, she needs to eat faster (look right)
                left = mid + 1;
            }
        }

        return left;
    }
}