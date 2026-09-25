class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        if(!s || !t || s.length < t.length) return "";

        const targetCounts = new Array(128).fill(0);
        let required = 0;

        for(let i = 0; i < t.length; i++){
            const charCode = t.charCodeAt(i);
            if (targetCounts[charCode] === 0) required++;
            targetCounts[charCode]++;
        }

        let left = 0;
        let right = 0;
        let formed = 0;
        const windowCounts = new Array(128).fill(0);

        let minLen = Infinity;
        let minStart = 0;

        while (right < s.length){
            const charCodeRight = s.charCodeAt(right);
            windowCounts[charCodeRight]++;

            if(targetCounts[charCodeRight] > 0 && windowCounts[charCodeRight] === targetCounts[charCodeRight]){formed++};

            while(left <= right && formed === required){
                const currentLen = right - left + 1;
                if(currentLen < minLen){
                    minLen = currentLen;
                    minStart = left;
                }

                const charCodeLeft = s.charCodeAt(left);
                windowCounts[charCodeLeft]--;

                if (targetCounts[charCodeLeft] > 0 && windowCounts[charCodeLeft] < targetCounts[charCodeLeft]) {formed--;}

                left++;
            }
            right++
        } 
        return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
    }
}
