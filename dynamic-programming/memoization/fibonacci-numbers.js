/* Memoization Approach (Top Down Approach)
* You can run pass the n while running the code. If you wanna find the
* fibonacci sequence at index 100, use command: 
* "node fibonacci-numbers.js 100" 
*/
 
function getFibonacciNumberAtIndex(n, memo) {
    if(n <= 1) return n
    if(memo[n] !== -1) return memo[n]
    memo[n] = getFibonacciNumberAtIndex(n-1, memo) + getFibonacciNumberAtIndex(n-2, memo)
    return memo[n]
}
const n = Number(process.argv[2]) || 100
console.log(getFibonacciNumberAtIndex(n, new Array(n + 1).fill(-1)))

