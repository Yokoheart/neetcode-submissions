class Solution {
    /**
     * @param {string[]} words
     * @returns {string}
     */
    foreignDictionary(words: string[]): string {
        const adj = new Map<string, Set<string>>();

        //Makeing a graph node
        for(const word of words){
            for(const char of word){
                if(!adj.has(char)){
                    adj.set(char, new Set());
                }
            }
        }

        //Making a graph by comparing adj
        for(let i =0; i < words.length - 1; i++){
            const w1 = words[i];
            const w2 = words[i + 1];
            const minLen = Math.min(w1.length, w2.length);

            //Base case for invalid words
            if(w1.length > w2.length && w1.startsWith(w2)){
                return "";
             }

             for(let j = 0; j < minLen; j++){
                if(w1[j] !== w2[j]){
                    adj.get(w1[j])!.add(w2[j]);
                    break;
                }
             }
        }
        //DFS post-order traversal
         // 0: unvisited, 1: visiting, 2: visited
        const state = new Map<string, number>(); 
        const result: string[] = [];

        function dfs(char: string): boolean {
            // Cycle detected
            if (state.get(char) === 1) return false; // Cycle detected
             // fully processed
            if (state.get(char) === 2) return true; 
            state.set(char, 1); 

            for (const neighbor of adj.get(char)!) {
                if (!dfs(neighbor)) {
                    return false;
                }
            }

            state.set(char, 2); 
            result.push(char); 
            return true;
        }

        //Running DFS for every unvisited character
        for(const char of adj.keys()){
            if (!state.has(char)){
                if(!dfs(char)){
                    return "";
                }
            }
        }

        return result.reverse().join("")
    }
}
