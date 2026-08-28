class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals: number[][]): number {
        if (intervals.length <= 1) return 0;

    // 1. Sort intervals by their end time in ascending order
    intervals.sort((a, b) => a[1] - b[1]);

    let removals = 0;
    let prevEnd = intervals[0][1];

    // 2. Greedily keep intervals that finish earliest
    for (let i = 1; i < intervals.length; i++) {
        const [start, end] = intervals[i];

        if (start < prevEnd) {
            // Overlap detected: remove the current interval to keep the smaller end time
            removals++;
        } else {
            // No overlap: update prevEnd to current interval's end
            prevEnd = end;
        }
    }

    return removals;
    }
}
