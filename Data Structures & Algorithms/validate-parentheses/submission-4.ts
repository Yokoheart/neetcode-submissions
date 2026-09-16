class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        if (s.length % 2 !== 0) return false;

        const stack: string[] = [];
        const matchMap: Record<string, string> = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for(const char of s){
            if(char in matchMap){
                const top = stack.pop();
                if(top !== matchMap[char])return false;
            }
            else{
                stack.push(char)
            }
        }
        return stack.length === 0;
    }
}
