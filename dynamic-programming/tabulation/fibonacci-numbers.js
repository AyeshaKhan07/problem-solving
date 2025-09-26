/**
 * Tabulation Approach (Bottom Up Approach) 
 * You can run pass the n while running the code. If you wanna find the
 * fibonacci sequence at index 100, use command: 
 * "node fibonacci-numbers.js 100"
 */

function getFibonacciNumberAtIndex(n) {
    const dp = new Array(n);
    dp[0] = 0
    dp[1] = 1

    for (let i = 2; i<=n; i++){
        dp[i] = dp[i-1] + dp[i-2];
    }

    return dp[n]
}
const n = Number(process.argv[2]) || 100

console.log(getFibonacciNumberAtIndex(n))