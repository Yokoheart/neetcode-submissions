class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        if(s1.length > s2.length) return false;

        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);
        const aCode = "a".charCodeAt(0);

        for(let i = 0; i < s1.length; i++){
            count1[s1.charCodeAt(i) - aCode]++;
            count2[s2.charCodeAt(i) - aCode]++;
        }

        const match = (a1: number[], a2: number[]): boolean => {
            for(let i = 0; i < 26; i++){
                if(a1[i] !== a2[i]) return false;
            }
            return true
        }

        for(let i = 0; i < s2.length - s1.length; i++){
            if(match(count1, count2)) return true;

            const leftCharIndex = s2.charCodeAt(i) - aCode;
            const rightCharIndex = s2.charCodeAt(i + s1.length) - aCode;

            count2[leftCharIndex]--;
            count2[rightCharIndex]++;
        }
        return match(count1,count2)
    }
}