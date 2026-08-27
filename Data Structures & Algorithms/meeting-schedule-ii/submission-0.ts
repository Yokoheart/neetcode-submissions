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
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        if(!intervals.length) return 0;

        const start = intervals.map(i => i.start).sort((a, b) => a - b);
        const end = intervals.map(i => i.end).sort((a, b) => a - b)

        let res = 0;
        let count = 0;
        let s = 0;
        let e = 0;

        while(s < intervals.length){
            if(start[s] < end[e]){
                s++;
                count++;
            }
            else{
                e++;
                count--;
            }
            res = Math.max(res, count)
        }
        return res
    };
}
