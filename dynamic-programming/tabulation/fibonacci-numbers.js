/**
 * Tabulation Approach (Bottom Up Approach) 
 * You can pass the n while running the code. If you wanna find the
 * fibonacci sequence at index 100, use command: 
 * "node fibonacci-numbers.js 100"
 */

function getFibonacciNumberAtIndex(n) {
    const dp = new Array(n);
    dp[0] = 0
    dp[1] = 1

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    return dp[n]
}
const n = Number(process.argv[2]) || 100

console.log(getFibonacciNumberAtIndex(n))

/**
 * In the code below, we can see that the current state of 
 * any fibonacci number depends only on the previous two 
 * values. So we do not need to store the whole table of 
 * size n+1 but instead of that we can only store the previous 
 * two values. 
 */

function getFibonacciNumberWithOptimizedSpace(n) {
    let prev1 = 1, prev2 = 0;
    let curr = 1

    for (let i = 2; i <= n; i++) {
        curr = prev1 + prev2;
        
        prev2 = prev1
        prev1 = curr
    }

    return curr
}

console.log("Fibonacci number with optimized space:",getFibonacciNumberWithOptimizedSpace(n))