class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if (s1.length > s2.length) return false;

        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);
        const aCode = 'a'.charCodeAt(0);

        // Populate initial counts for s1 and the first window of s2
        for (let i = 0; i < s1.length; i++) {
            count1[s1.charCodeAt(i) - aCode]++;
            count2[s2.charCodeAt(i) - aCode]++;
        }

        let matches = 0;
        for (let i = 0; i < 26; i++) {
            if (count1[i] === count2[i]) matches++;
        }

        // Slide the window across s2
        for (let i = 0; i < s2.length - s1.length; i++) {
            if (matches === 26) return true;

            const rightCharIndex = s2.charCodeAt(i + s1.length) - aCode;
            const leftCharIndex = s2.charCodeAt(i) - aCode;

            // Add right character (entering window)
            count2[rightCharIndex]++;
            if (count1[rightCharIndex] === count2[rightCharIndex]) {
                matches++;
            } else if (count1[rightCharIndex] + 1 === count2[rightCharIndex]) {
                matches--;
            }

            // Remove left character (leaving window)
            count2[leftCharIndex]--;
            if (count1[leftCharIndex] === count2[leftCharIndex]) {
                matches++;
            } else if (count1[leftCharIndex] - 1 === count2[leftCharIndex]) {
                matches--;
            }
        }

        return matches === 26;
    }
}