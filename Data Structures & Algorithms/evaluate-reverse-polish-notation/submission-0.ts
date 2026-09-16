class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const stack: number[] = [];
        for(const token of tokens){
            if(token === "+" || token === "-" || token === "*" || token === "/"){
                let b = stack.pop()!;
                let a = stack.pop()!;

                switch(token){
                    case "+":
                        stack.push(a + b);
                        break;
                    case "-":
                        stack.push(a - b);
                        break;
                    case "*":
                        stack.push(a * b);
                        break;
                    case "/":
                        stack.push(Math.trunc(a/b));
                        break;
                }
            }
            else{
                stack.push(Number(token));
            }
        }
        return stack[0];
    }
}
