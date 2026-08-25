class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        const adj: number[][] = Array.from({length: n}, () =>[]);
        for(const [u, v] of edges){
            adj[v].push(u);
            adj[u].push(v);
        }
        
        const visited = new Uint8Array(n);
        let components = 0;

        function dfs(node: number): void {
            visited[node] = 1;
            for(const neighbour of adj[node]){
                if(!visited[neighbour]){
                    dfs(neighbour);
                }
            }  
        }

        for (let i = 0; i < n; i++){
            if(!visited[i]){
                components++;
                dfs(i);
            }
        }
        return components;
    }
}
