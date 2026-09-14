class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length){
            return false;
        }
        const countS : Record<string, number> = {}; 
        const countT : Record<string, number> = {};

        for(let i = 0; i < s.length; i++){
            countS[s[i]] = 1 + (countS[s[i]] || 0);
            countT[t[i]] = 1 + (countT[t[i]] || 0);
        }

        for(let c in countS){
            if(countS[c] !== (countT[c] || 0)){
                return false;
            }
        } 
        return true;
    }
}
