class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxLength = 0;

        for(let i = 0; i < 26; i++){
            const targetChar = String.fromCharCode(65 + i);
            let left = 0;
            let replacements = 0;

            for (let right = 0; right < s.length; right++) {
                if (s[right] !== targetChar) {
                    replacements++;
                }

                // If replacements exceed k, shrink the window from the left
                while (replacements > k) {
                    if (s[left] !== targetChar) {
                        replacements--;
                    }
                    left++;
                }

                maxLength = Math.max(maxLength, right - left + 1);
            }
        }
        return maxLength;
    }
}
