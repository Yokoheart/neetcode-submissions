/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals: Interval[]): boolean {
        intervals.sort((a, b) => a.start - b.start);

        for(let i = 1; i < intervals.length; i++){
            let i1 = intervals[i - 1];
            let i2 = intervals[i];

            if (i1.end > i2.start){
                return false;
            }
        }
        return true;
    }
}
