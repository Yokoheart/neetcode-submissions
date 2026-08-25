class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length !== n -1){
            return false;
        }

        const adj: number[][] = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visit = new Set<number>()
        function dfs(curr:number, prev:number):boolean{
            if(visit.has(curr)){
                return false;
            }

            visit.add(curr);
            
            for (const neighbor of adj[curr]) {
                if (neighbor === prev) {
                    continue; // Skip the edge back to parent
                }
                if (!dfs(neighbor, curr)) {
                    return false;
                }
            }
            
            return true;
        }
        return dfs(0, -1) && n === visit.size;
    }
}
