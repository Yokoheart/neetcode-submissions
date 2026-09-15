class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encode = "";
        for(const str of strs){
            encode += `${str.length}#${str}`;
        }
        return encode;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const result: string[] = [];
        let i = 0;
        while (i < str.length){
            const delimiterIndex = str.indexOf("#", i);

            const length = parseInt(str.substring(i, delimiterIndex), 10)

            const wordStart = delimiterIndex + 1;
            const wordEnd = wordStart + length;
            result.push(str.substring(wordStart, wordEnd));

            i = wordEnd;
        }

        return result;
    }
}
